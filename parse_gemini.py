"""
parse_gemini.py
Parses Gemini.txt and outputs questions_gemini.js with all Q&A pairs
categorised into topic buckets.
"""

import re
import json

INPUT_FILE  = "Gemini.txt"
OUTPUT_FILE = "questions_gemini.js"

# ──────────────────────────────────────────────
# Topic buckets we want to produce
# ──────────────────────────────────────────────
TOPICS = {
    "ukgk":            [],   # Uttarakhand GK (all batches 1-5)
    "india_polity":    [],   # Indian Polity & Constitution
    "india_history":   [],   # Indian History (Modern)
    "india_geography": [],   # Indian Geography & Environment
    "economy_science": [],   # Economy, Science & Technology
    "hist_ancient":    [],   # History – Ancient & Medieval (UPSC)
    "hist_modern":     [],   # History – Modern & Freedom Struggle (UPSC)
}

# ──────────────────────────────────────────────
# Lines that indicate a topic change
# ──────────────────────────────────────────────
# Each entry: (case-insensitive substring to match in a line, bucket_key)
# Order matters – first match wins.
SECTION_MAP = [
    # ─── Uttarakhand GK sections ───
    ("geography & topography",          "ukgk"),
    ("state symbols",                   "ukgk"),
    ("history & freedom",               "ukgk"),
    ("polity & administration",         "ukgk"),
    ("art, culture",                    "ukgk"),
    ("flora, fauna",                    "ukgk"),
    ("rivers, glaciers",                "ukgk"),
    ("temples, panch",                  "ukgk"),
    ("tribes & local",                  "ukgk"),
    ("historical rulers",               "ukgk"),
    ("administration, demographics",    "ukgk"),
    ("peaks, passes",                   "ukgk"),
    ("personalities, literature",       "ukgk"),
    ("economy, infrastructure",         "ukgk"),
    ("forests, environment",            "ukgk"),
    ("history, treaties",               "ukgk"),
    ("places, geography",               "ukgk"),
    ("local culture, fairs",            "ukgk"),
    ("miscellaneous & firsts",          "ukgk"),
    ("deep history & administration",   "ukgk"),
    ("advanced geography",              "ukgk"),
    ("culture, art & heritage",         "ukgk"),
    ("institutes & contemporary",       "ukgk"),
    ("miscellaneous hard-hitters",      "ukgk"),
    ("deep geography, glaciers",        "ukgk"),
    ("history & grassroots",            "ukgk"),
    ("culture, tribes & traditions",    "ukgk"),
    ("administration & polity",         "ukgk"),
    ("infrastructure, economy",         "ukgk"),
    ("wildlife & miscellaneous",        "ukgk"),
    ("quick-fire districts",            "ukgk"),
    ("education & literacy",            "ukgk"),

    # ─── India GK sections ───
    ("indian polity & constitution",    "india_polity"),
    ("advanced polity",                 "india_polity"),
    ("deep polity & constitution",      "india_polity"),
    ("constitution & polity",           "india_polity"),
    ("indian constitution & polity",    "india_polity"),

    ("indian history (ancient",         "india_history"),
    ("ancient, medieval & modern",      "india_history"),
    ("modern indian history",           "india_history"),

    ("indian geography & environment",  "india_geography"),
    ("geography, climate",              "india_geography"),
    ("geography & rivers",              "india_geography"),
    ("geography & environment",         "india_geography"),
    ("geography & demographics",        "india_geography"),

    ("indian economy & agriculture",    "economy_science"),
    ("economy & development",           "economy_science"),
    ("economy, science",                "economy_science"),
    ("science, technology",             "economy_science"),
    ("science, culture",                "economy_science"),
    ("general science",                 "economy_science"),
    ("defense, space",                  "economy_science"),
    ("sports, awards",                  "economy_science"),
    ("art, culture & contemporary",     "economy_science"),

    # ─── History UPSC sections ───
    ("prehistoric india",               "hist_ancient"),
    ("the vedic age",                   "hist_ancient"),
    ("religious movements: buddhism",   "hist_ancient"),
    ("the mauryan empire",              "hist_ancient"),
    ("the gupta empire",                "hist_ancient"),
    ("sangam age",                      "hist_ancient"),
    ("early medieval india",            "hist_ancient"),
    ("early medieval & the chola",      "hist_ancient"),
    ("the delhi sultanate",             "hist_ancient"),
    ("provincial kingdoms",             "hist_ancient"),
    ("sufi & bhakti",                   "hist_ancient"),
    ("the mughal empire",               "hist_ancient"),
    ("late medieval",                   "hist_ancient"),
    ("the marathas",                    "hist_ancient"),

    ("the advent of europeans",         "hist_modern"),
    ("british policies",                "hist_modern"),
    ("tribal uprisings",                "hist_modern"),
    ("socio-religious reform",          "hist_modern"),
    ("the indian national congress",    "hist_modern"),
    ("partition of bengal",             "hist_modern"),
    ("the gandhi era",                  "hist_modern"),
    ("civil disobedience",              "hist_modern"),
    ("quit india",                      "hist_modern"),
    ("world war ii",                    "hist_modern"),
    ("constitutional developments",     "hist_modern"),
]


def detect_section(line: str):
    """Return the bucket key if this line is a section header, else None."""
    lower = line.lower().strip()
    for keyword, bucket in SECTION_MAP:
        if keyword in lower:
            return bucket
    return None


def clean(text: str) -> str:
    """Strip whitespace and common artefacts."""
    text = text.strip()
    # Remove leading emoji/category markers like "🏔️ Foo –"
    text = re.sub(r'^[^\w]*', '', text)   # leading non-word chars / emoji
    text = text.strip()
    return text


def parse_file(path: str):
    """Read the file and extract (question, answer, bucket) triples."""
    current_bucket = "ukgk"   # default – first sections are UK GK
    pairs = []

    with open(path, encoding="utf-8", errors="replace") as fh:
        for raw_line in fh:
            line = raw_line.replace('\r', '').replace('\n', '').strip()

            if not line:
                continue

            # ── Is this a section header? ──
            bucket = detect_section(line)
            if bucket:
                current_bucket = bucket
                continue

            # ── Skip meta / conversational lines ──
            skip_patterns = [
                r'^(Gemini|You said|Gemini said)$',
                r'^(next|part\s*\d|final)',
                r'^(Congratulations|Excellent|Awesome|Boom|Zabardast|Top \d)',
                r'^(Here is|Here are|If you|Whenever|Let me|Let\'s)',
                r'(Practicing with|Devbhoomi|YouTube|Shutterstock|views)',
                r'^\d+:',          # old line-number artefacts if any
                r'^[-─=]+$',       # separator lines
            ]
            if any(re.search(p, line, re.IGNORECASE) for p in skip_patterns):
                continue

            # ── Does this line contain a Q-A pair (has a '?' in it)? ──
            if '?' in line:
                # Split on the FIRST '?' to get question and answer
                parts = line.split('?', 1)
                question = clean(parts[0]) + '?'
                answer   = clean(parts[1]) if len(parts) > 1 else ''

                # Skip if either part is too short to be meaningful
                if len(question) < 10 or len(answer) < 3:
                    continue

                # Skip correction / meta artefacts
                if any(kw in question.lower() for kw in
                       ['wait, that', 'correction', 'note:', 'disclaimer']):
                    continue

                pairs.append({
                    "bucket":   current_bucket,
                    "question": question,
                    "answer":   answer,
                })

    return pairs


def deduplicate(pairs):
    """Remove duplicate questions (case-insensitive)."""
    seen = set()
    result = []
    for p in pairs:
        key = p["question"].lower()
        if key not in seen:
            seen.add(key)
            result.append(p)
    return result


def build_js(pairs):
    """Group pairs by bucket and emit a JS const declaration."""
    buckets = {k: [] for k in TOPICS}
    for p in pairs:
        b = p["bucket"]
        if b in buckets:
            buckets[b].append({"question": p["question"], "answer": p["answer"]})

    lines = ["// Auto-generated – do not edit directly. Run parse_gemini.py to regenerate.",
             "const questions_gemini = {"]

    for key, items in buckets.items():
        lines.append(f"  {key}: [")
        for item in items:
            q = item["question"].replace("\\", "\\\\").replace('"', '\\"')
            a = item["answer"].replace("\\", "\\\\").replace('"', '\\"')
            lines.append(f'    {{ question: "{q}", answer: "{a}" }},')
        lines.append("  ],")

    lines.append("};")
    return "\n".join(lines)


def rebucket(pairs):
    """
    Re-classify questions that landed in `ukgk` by default but are actually
    about other topics.  A question stays in `ukgk` only when it contains at
    least one Uttarakhand-specific keyword.
    """
    # Keywords that definitively mark a question as Uttarakhand-specific.
    uk_keywords = [
        'uttarakhand', 'ukpsc', 'garhwal', 'kumaon', 'dehradun', 'haridwar',
        'nainital', 'mussoorie', 'kedarnath', 'badrinath', 'tungnath',
        'chipko', 'tehri', 'chamoli', 'pithoragarh', 'rudraprayag',
        'almora', 'bageshwar', 'champawat', 'pauri', 'uttarkashi',
        'lansdowne', 'rishikesh', 'corbett', 'rajaji', 'nanda devi',
        'panch kedar', 'panch badri', 'gangotri', 'yamunotri',
        'valley of flowers', 'roopkund', 'satopanth', 'milam',
        'binsar', 'munsiyari', 'berinag', 'kasar devi',
        'gairsain', 'ramnagar', 'kotdwar', 'srinagar garhwal',
        'bhabhar', 'terai', 'mandal commission uttarakhand',
        'uk police', 'uksssc', 'devbhoomi', 'devbhumi',
        'kumaoni', 'garhwali', 'jaunsari', 'bhotiya',
        'aipan', 'jhora', 'chholiya', 'ramola', 'panwara',
        'ghee sankranti', 'basant panchami uttarakhand',
    ]

    # Keyword groups for fallback topic classification.
    # Each entry: (list_of_keywords, target_bucket)
    CONTENT_RULES = [
        # Indian Geography
        (['aravalli', 'vindhya', 'satpura', 'deccan', 'western ghats',
          'eastern ghats', 'himalaya', 'indo-gangetic', 'kaveri', 'godavari',
          'krishna river', 'mahanadi', 'brahmaputra', 'sundarbans', 'rann of kutch',
          'lakshadweep', 'andaman', 'nicobar', 'chilika', 'loktak', 'wular',
          'dal lake', 'manasarovar', 'monsoon in india', 'tropical',
          'koppen', 'tropical wet', 'biogeography', 'endemic species india',
          'tiger reserve india', 'wildlife sanctuary india',
          'project tiger', 'project elephant', 'biosphere india',
          'mineral belt', 'coal india', 'iron ore india', 'soil types india',
          'black soil', 'laterite soil', 'alluvial soil',
          'ramsar india', 'wetland india', 'mangrove india'], 'india_geography'),

        # Indian Polity & Constitution
        (['article ', 'schedule ', 'constituent assembly', 'preamble',
          'directive principles', 'fundamental rights', 'amendment',
          'parliament of india', 'lok sabha', 'rajya sabha', 'speaker',
          'president of india', 'prime minister', 'governor', 'chief minister',
          'supreme court', 'high court', 'election commission', 'comptroller',
          'attorney general', 'panchayati raj', '73rd', '74th', '42nd',
          'emergency india', 'president rule', 'money bill', 'ordinance',
          'bureaucracy', 'ias', 'upsc examination', 'civil services',
          'municipalities india', 'gram sabha'], 'india_polity'),

        # Modern Indian History / Freedom Struggle
        (['british raj', 'east india company', 'viceroy', 'governor-general',
          'sepoy mutiny', '1857', 'indian national congress', 'gandhi',
          'nehru', 'bose', 'tilak', 'gokhale', 'simon commission',
          'rowlatt', 'jallianwala', 'non-cooperation', 'civil disobedience',
          'quit india', 'dandi', 'salt march', 'partition of india',
          'independence 1947', 'mountbatten', 'swadeshi', 'swaraj',
          'khilafat', 'balgangadhar', 'lala lajpat'], 'hist_modern'),

        # Ancient / Medieval Indian History
        (['indus valley', 'harappa', 'mohenjo', 'vedic', 'upanishad',
          'maurya', 'ashoka', 'chandragupta', 'gupta empire', 'chola',
          'pallava', 'chalukya', 'rashtrakuta', 'pala', 'pratihara',
          'delhi sultanate', 'slave dynasty', 'khilji', 'tughlaq',
          'lodi', 'mughal', 'akbar', 'aurangzeb', 'babur', 'humayun',
          'maratha', 'shivaji', 'peshwa', 'bhakti movement', 'sufi',
          'sangam', 'buddhism india', 'jainism india', 'ajanta', 'ellora',
          'taxila', 'nalanda', 'vikramshila'], 'hist_ancient'),

        # Economy & Science
        (['gdp india', 'gst', 'rbi', 'reserve bank', 'niti aayog',
          'five year plan', 'green revolution', 'white revolution',
          'poverty india', 'hdmi india', 'sebi', 'bse', 'nse',
          'bharat ratna', 'padma award', 'nobel india', 'isro', 'drdo',
          'chandrayaan', 'mangalyaan', 'agni missile', 'nuclear india',
          'iit', 'iim', 'national institute', 'satellite', 'pslv',
          'gslv', 'covid india', 'genome', 'dna', 'periodic table',
          'newton', 'photosynthesis', 'ecosystem', 'food chain',
          'acid rain', 'ozone layer', 'greenhouse', 'climate change',
          'velocity of light', 'laws of motion'], 'economy_science'),
    ]

    result = []
    for p in pairs:
        if p['bucket'] != 'ukgk':
            result.append(p)
            continue

        text = (p['question'] + ' ' + p['answer']).lower()

        # Keep in ukgk if it has UK-specific keywords
        if any(kw in text for kw in uk_keywords):
            result.append(p)
            continue

        # Try to re-classify by content
        reassigned = False
        for keywords, target in CONTENT_RULES:
            if any(kw in text for kw in keywords):
                result.append({**p, 'bucket': target})
                reassigned = True
                break

        if not reassigned:
            # Default: keep as ukgk (many UK questions don't name Uttarakhand)
            result.append(p)

    return result


if __name__ == "__main__":
    print(f"Reading {INPUT_FILE} …")
    pairs = parse_file(INPUT_FILE)
    pairs = deduplicate(pairs)
    pairs = rebucket(pairs)

    # Print stats
    from collections import Counter
    counts = Counter(p["bucket"] for p in pairs)
    print("\nQuestion counts by topic:")
    for k, v in sorted(counts.items()):
        print(f"  {k:20s}: {v}")
    print(f"  {'TOTAL':20s}: {len(pairs)}")

    js_content = build_js(pairs)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as fh:
        fh.write(js_content)

    print(f"\n✅  Written to {OUTPUT_FILE}")
