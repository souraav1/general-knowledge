import json

input_file = r'c:\Users\Lenovo\Desktop\react\uttarakhand gk\reference.txt'
output_file = r'c:\Users\Lenovo\Desktop\react\uttarakhand gk\questions.js'

questions = []
with open(input_file, 'r', encoding='utf-8') as f:
    lines = f.readlines()

    current_q = None
    current_idx = None
    for line in lines:
        line = line.strip()
        if not line:
            continue
        
        # Match '1. Question...'
        import re
        m = re.match(r'^(\d+)\.\s+(.*)$', line)
        if m:
            current_idx = int(m.group(1))
            current_q = m.group(2)
        elif line.startswith("Answer:") and current_q:
            ans = line.replace("Answer:", "").strip()
            questions.append({
                "id": current_idx,
                "question": current_q,
                "answer": ans
            })
            current_q = None

# Write JS file
js_content = f"const questions = {json.dumps(questions, indent=4)};\n"
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Generated questions.js with {len(questions)} questions.")
