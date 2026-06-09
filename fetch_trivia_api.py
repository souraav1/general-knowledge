import urllib.request
import json
import time

# the-trivia-api categories: history, geography, science, society_and_culture (for polity/economy proxy), general_knowledge
categories = {
    'history': 'history',
    'geography': 'geography',
    'polity': 'society_and_culture',
    'economy': 'general_knowledge',
    'science': 'science'
}

all_questions = {}

for topic, cat_param in categories.items():
    print(f"Fetching distinct questions for {topic}...")
    questions = []
    seen = set()
    
    # Try fetching up to 20 times (20 * 50 = 1000) to find 500 unique
    for i in range(50):
        if len(questions) >= 500:
            break
            
        url = f"https://the-trivia-api.com/v2/questions?limit=50&categories={cat_param}"
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response:
                data = json.loads(response.read().decode('utf-8'))
                
                for item in data:
                    q_text = item['question']['text'].replace('&quot;', '"').replace('&#039;', "'").replace('&amp;', '&')
                    a_text = item['correctAnswer'].replace('&quot;', '"').replace('&#039;', "'").replace('&amp;', '&')
                    
                    if q_text not in seen:
                        seen.add(q_text)
                        questions.append({
                            "id": len(questions) + 1,
                            "question": q_text,
                            "answer": a_text
                        })
                        
                        if len(questions) >= 500:
                            break
                            
        except Exception as e:
            print(f"  Error fetching: {e}")
            break
            
    print(f"  Obtained {len(questions)} distinct questions for {topic}.")
    all_questions[topic] = questions

js_content = f"const questions_upsc = {json.dumps(all_questions, indent=2)};\n"
with open('questions_upsc.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
    
print("Successfully wrote dataset to questions_upsc.js")
