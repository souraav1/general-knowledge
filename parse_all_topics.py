#!/usr/bin/env python3
"""
parse_all_topics.py
Parses the Gemini.txt conversation file and generates a structured
questions_gemini.js with all topics as separate arrays.

Topics identified:
  - ukgk       : Uttarakhand GK         (lines 1  – ~990)
  - india_gk   : India GK               (lines ~993 – ~2077)
  - history    : Indian History         (lines ~2078 – ~3162)
  - geography  : Geography              (lines ~3164 – ~4281)
  - polity     : Polity & Constitution  (lines ~4283 – end of polity)
  - economy    : Economy & Finance      (next section)
  - science    : Environment & Science  (final section)
"""

import re
import json
import os

# ─── Configuration ────────────────────────────────────────────────────────────

INPUT_FILE  = r"C:\Users\Lenovo\Desktop\react\uttarakhand gk\Gemini.txt"
OUTPUT_FILE = r"C:\Users\Lenovo\Desktop\react\uttarakhand gk\questions_gemini.js"

# ─── Topic Boundary Keywords ──────────────────────────────────────────────────
# These are phrases that appear in the Gemini response to signal the START of
# each new major topic.  We scan for them in order.

TOPIC_BOUNDARIES = [
    ("ukgk",      "Top 100 High-Yield Uttarakhand GK Questions"),
    ("india_gk",  "500 India GK questions in parts"),
    ("history",   "500 questions in parts for the subject history"),
    ("geography", "500 questions for Geography"),
    ("polity",    "500 questions for -"),          # "Polity" appears right after
    ("economy",   "500 questions for Economy"),
    ("science",   "500 questions for Environment"),
]

# Patterns that mark "user said next 100 / part N" – we skip these lines
SKIP_PATTERNS = [
    r"You said$",
    r"Gemini said$",
    r"^next\s+(hundred|100)",
    r"^part\s+\d+$",
    r"^similarly",
    r"Practicing with mock",
    r"Uttarakhand Gk MCQ",
    r"Devbhoomi IAS Academy",
    r"Shutterstock",
    r"Getty Images",
    r"Explore$",
    r"AI generated",
    r"^cell structure",
    r"^mitochondria",
    r"^tectonic",
    r"^global ocean",
    r"^Andes mountain",
    r"^Indian soil",
    r"^McMahon Line",
    r"^global atmospheric",
    r"^solar eclipse",
    r"^Nilgiri Hills",
    r"^Earth'?s atmospheric",
    r"^Cumulonimbus clouds",
    r"^Earth'?s internal",
]

COMPILED_SKIPS = [re.compile(p, re.IGNORECASE) for p in SKIP_PATTERNS]

# Lines that are markdown/celebration text from Gemini (not Q&A)
FILLER_STARTS = [
    "You are now", "You are officially", "You are absolutely", "You are an",
    "You have made it", "You have reached", "You have successfully",
    "You've got", "Boom!", "That marks", "That brings", "That is a wrap",
    "And there you have it", "And that is your", "And that is a wrap",
    "MISSION ACCOMPLISHED", "Congratulations!", "Excellent work",
    "Pehle 100", "I've got it", "I have got", "Ekdum ready",
    "Let me know", "Let's keep", "Let's continue", "Let's bring",
    "Review these", "Review this", "Just one final", "Just say",
    "Whenever you are", "When you are ready", "Whenever you are ready",
    "Jab ready", "Zabardast", "Tension mat lo",
    "Once you conquer", "These are strictly",
    "Generating a single", "Generating 500",
    "This is the ultimate", "This is brilliant",
    "This crucial section", "This batch",
    "This first batch", "This section",
    "As promised", "Just like before",
    "Here is the second", "Here is the third", "Here is the final",
    "Here is Part", "Here is Batch",
    "500 questions ek saath",
    "Revise these", "Revise this",
    "If you want to keep pushing",
    "If you have mastered",
    "Take a breather",
    "Say the word",
    "Pushing past",
    "Moving beyond",
    "Peel Commission",   # sometimes context not Q&A
    "Top 100 Uttarakhand",
]

def is_filler(line: str) -> bool:
    stripped = line.strip()
    for start in FILLER_STARTS:
        if stripped.startswith(start):
            return True
    for pat in COMPILED_SKIPS:
        if pat.search(stripped):
            return True
    # Short numeric-only lines (question numbers not part of Q)
    if re.match(r'^\d+$', stripped):
        return True
    # YouTube / URL lines
    if "youtube" in stripped.lower() or "http" in stripped.lower():
        return True
    return False


# ─── Parsing Logic ────────────────────────────────────────────────────────────

def read_file(path: str):
    with open(path, encoding="utf-8", errors="replace") as f:
        return [line.rstrip("\r\n") for line in f]


def find_topic_start_line(lines, keyword):
    """Return the line index where this keyword first appears (case-insensitive)."""
    kw_lower = keyword.lower()
    for i, line in enumerate(lines):
        if kw_lower in line.lower():
            return i
    return None


def extract_section(lines, start_idx, end_idx):
    """Return lines[start_idx:end_idx], filtered for filler."""
    return [l for l in lines[start_idx:end_idx] if not is_filler(l)]


def parse_qa_pairs(lines):
    """
    Given a list of text lines from a topic section, extract (question, answer)
    tuples.

    Format in the file:
        <Question text>? <Answer text>.
    or across two lines:
        <Question text>?
        <Answer text>.

    We also handle multi-sentence answers that appear before the next question.
    """
    qa_pairs = []
    # Join all non-empty lines into a single stream, preserving sentence breaks
    text = " ".join(l.strip() for l in lines if l.strip())

    # Split on the pattern:  "<text>? <Answer text>."  or similar
    # Strategy: split around " ? " to find question ends, then the next "." ends
    # the answer.

    # Better approach: locate every "?" that could end a question
    # then take everything before it as the question and everything after
    # (up to the next "?") as the answer.

    # Split the text by "?" keeping the delimiter
    parts = re.split(r'(\?)', text)

    i = 0
    while i < len(parts) - 1:
        question_raw = parts[i].strip()
        # parts[i+1] should be "?"
        # parts[i+2] is the answer until next "?"

        if i + 2 < len(parts):
            answer_raw = parts[i + 2]
        else:
            answer_raw = ""

        # Clean the question: remove leading numbers and dots
        question   = re.sub(r'^\d+[\.\)]\s*', '', question_raw).strip()
        # Clean the answer: take up to the last "." that comes before another Q-signal
        answer_candidate = answer_raw.strip()
        # The answer ends before a new sentence that starts an obvious new question
        # A heuristic: take text up to and including the first sentence boundary
        # followed by a capital letter that starts a new question-like sentence
        # For simplicity, we split on ". " and take the first sentence as the answer
        # (since gemini answers are usually single sentences)

        # Actually the answer may span multiple sentences. Let's take everything
        # up to the next question number pattern or emoji heading
        answer_match = re.match(
            r'^(.*?\.)\s*(?=\d+[\.\)]\s+[A-Z]|[🏔🦌📜🏛🎨🌿📊⭐🌊🛕⛺🏰📈🏔🗿⚔🛡🕊✊🔥🚀📈🌍🎨🏆📍⛏🚆🌪⛰💧🌿🧑🪐🎖]|$)',
            answer_candidate,
            re.DOTALL
        )

        if answer_match:
            answer = answer_match.group(1).strip()
            # Remove leading/trailing noise
            answer = re.sub(r'^\s*[\:\-–]\s*', '', answer).strip()
        else:
            # Take the whole thing up to first "."
            dot_idx = answer_candidate.find('.')
            if dot_idx != -1:
                answer = answer_candidate[:dot_idx + 1].strip()
            else:
                answer = answer_candidate.strip()

        # Remove any leftover "? " artifacts from the answer
        answer = re.sub(r'^\?\s*', '', answer).strip()

        # Only add if both question and answer are non-trivial
        if len(question) > 10 and len(answer) > 2:
            # Further clean: remove emoji section headers that slipped in as questions
            if not re.match(r'^[\U0001F300-\U0001FFFF]', question):
                qa_pairs.append({
                    "question": question,
                    "answer":   answer
                })

        # Advance by 2 (the "?" + answer), go to next question start
        i += 2

    return qa_pairs


# ─── Alternative simpler line-by-line parser ─────────────────────────────────

def parse_line_by_line(lines):
    """
    Each QA pair in the file looks like:

        <Question sentence ending with ?>  <Answer sentence ending with .>

    They may be on ONE line, or the answer might be on the NEXT line.
    Also handle numbered lists:  "1. Question? Answer."
    """
    qa_pairs = []
    i = 0
    clean_lines = [l.strip() for l in lines if l.strip() and not is_filler(l)]

    while i < len(clean_lines):
        line = clean_lines[i]

        # Skip pure section headers (emoji at start, no "?")
        if re.match(r'^[🏔🦌📜🏛🎨🌿📊⭐🌊🛕⛺🏰📈🗿⚔🛡🕊✊🔥📍⛏🚆🌪⛰💧🌿🧑🪐🎖🌍🏝🌲📚🔬🧪⚡🔱]', line) and '?' not in line:
            i += 1
            continue
        # Skip lines that are just section dividers or descriptions
        if '?' not in line and not (i + 1 < len(clean_lines) and '?' not in clean_lines[i + 1]):
            i += 1
            continue

        # Case 1: The line contains both Q and A  (most common in this file)
        #         Pattern: "...?  Answer text."
        if '?' in line:
            q_end = line.index('?')
            question_part = line[:q_end].strip()
            answer_part   = line[q_end + 1:].strip()

            # Remove leading number+dot from question
            question_part = re.sub(r'^\d+[\.\)]\s*', '', question_part).strip()

            if not answer_part and i + 1 < len(clean_lines):
                # Answer is on the next line
                i += 1
                answer_part = clean_lines[i].strip()

            # Clean question
            question_clean = question_part.strip()
            answer_clean   = answer_part.strip()

            # Remove trailing note (e.g., "(Note: …)")
            answer_clean = re.sub(r'\s*\(Note:.*', '', answer_clean, flags=re.IGNORECASE).strip()

            # Must not be a filler / header
            if (len(question_clean) > 10 and len(answer_clean) > 2
                    and not re.match(r'^[🏔🦌📜🏛🎨🌿📊⭐🌊🛕⛺🏰📈🗿⚔🛡🕊✊🔥📍⛏🚆🌪⛰💧🌿🧑🪐🎖🌍🏝🌲📚🔬🧪⚡🔱]', question_clean)):
                qa_pairs.append({
                    "question": question_clean,
                    "answer":   answer_clean
                })
        i += 1

    return qa_pairs


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    print("Reading Gemini.txt …")
    lines = read_file(INPUT_FILE)
    total = len(lines)
    print(f"  {total} lines loaded.")

    # ── Find topic boundaries ──────────────────────────────────────────────────
    boundaries = {}
    for (topic, keyword) in TOPIC_BOUNDARIES:
        idx = find_topic_start_line(lines, keyword)
        if idx is not None:
            boundaries[topic] = idx
            print(f"  Topic '{topic}' starts at line {idx} : {lines[idx][:60]}")
        else:
            print(f"  WARNING: Could not find boundary for '{topic}'")

    # ── Build ordered list of (topic, start, end) ─────────────────────────────
    sorted_topics = sorted(boundaries.items(), key=lambda x: x[1])
    sections = []
    for j, (topic, start) in enumerate(sorted_topics):
        end = sorted_topics[j + 1][1] if j + 1 < len(sorted_topics) else total
        sections.append((topic, start, end))

    # ── Parse each section ────────────────────────────────────────────────────
    all_questions = {}
    for (topic, start, end) in sections:
        section_lines = lines[start:end]
        qa_pairs = parse_line_by_line(section_lines)
        all_questions[topic] = qa_pairs
        print(f"  [{topic:12s}] {len(qa_pairs):4d} questions  (lines {start}–{end})")

    # ── Merge economy + science if they exist separately ─────────────────────
    # (the file may have economy separate from science; combine as economy_science)
    if "economy" in all_questions or "science" in all_questions:
        combined = []
        combined.extend(all_questions.pop("economy", []))
        combined.extend(all_questions.pop("science", []))
        if combined:
            all_questions["economy_science"] = combined
            print(f"  [economy_science] {len(combined):4d} combined questions")

    # ── Write JS output ───────────────────────────────────────────────────────
    print("\nWriting questions_gemini.js …")
    with open(OUTPUT_FILE, "w", encoding="utf-8") as out:
        out.write("// Auto-generated from Gemini.txt by parse_all_topics.py\n")
        out.write("// Topics: " + ", ".join(all_questions.keys()) + "\n\n")
        out.write("const questions_gemini = ")
        out.write(json.dumps(all_questions, ensure_ascii=False, indent=2))
        out.write(";\n")

    size_kb = os.path.getsize(OUTPUT_FILE) // 1024
    total_q = sum(len(v) for v in all_questions.values())
    print(f"\n✅ Done! {total_q} total questions written to questions_gemini.js ({size_kb} KB)")
    for topic, qs in all_questions.items():
        print(f"   {topic:20s} : {len(qs)} questions")


if __name__ == "__main__":
    main()
