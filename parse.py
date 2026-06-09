import re

input_file = r'C:\Users\Lenovo\.gemini\antigravity\brain\60f0cebb-f694-488b-b55d-45130306b833\browser\out.txt'
output_file = r'c:\Users\Lenovo\Desktop\react\uttarakhand gk\reference.txt'

questions = []
with open(input_file, 'r', encoding='utf-8') as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        
        # skip conversational lines
        if "You said" in line or "https" in line or "Created with" in line:
            continue
            
        if '?' in line:
            idx = line.find('?')
            q = line[:idx+1].strip()
            a = line[idx+1:].strip()
            if len(q) > 10 and len(a) > 2:
                # filter out some conversational sentences that have '?'
                if "Just say the word!" in a or "can you prepare a list" in q:
                    continue
                questions.append((q, a))

with open(output_file, 'w', encoding='utf-8') as f:
    f.write("Uttarakhand GK Questions\n")
    f.write("========================\n\n")
    for i, (q, a) in enumerate(questions, 1):
        f.write(f"{i}. {q}\nAnswer: {a}\n\n")

print(f"Extracted {len(questions)} questions.")
