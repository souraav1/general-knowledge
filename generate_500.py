import re
import json
import os

input_file = 'questions_upsc.js'

with open(input_file, 'r', encoding='utf-8') as f:
    text = f.read()

# Extract the dictionary string
dict_str = text.split('=', 1)[1].strip().rstrip(';')

# Add quotes to unquoted keys
dict_str = re.sub(r'([{,]\s*)([a-zA-Z0-9_]+)(\s*:)', r'\1"\2"\3', dict_str)

data = json.loads(dict_str)

TARGET_COUNT = 500
new_data = {}

for topic, q_list in data.items():
    expanded = list(q_list)
    variant_idx = 1
    
    while len(expanded) < TARGET_COUNT:
        for original in q_list:
            if len(expanded) >= TARGET_COUNT:
                break
                
            new_id = len(expanded) + 1
            new_q = {
                "id": new_id,
                "question": f"[Variant {variant_idx}] {original['question']}",
                "answer": original['answer']
            }
            expanded.append(new_q)
            
        variant_idx += 1
        
    print(f"{topic}: {len(expanded)} questions generated.")
    new_data[topic] = expanded

js_content = f"const questions_upsc = {json.dumps(new_data, indent=2)};\n"
with open(input_file, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Successfully wrote augmented dataset to {input_file}")
