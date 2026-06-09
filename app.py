import os
import json
import urllib.request
import urllib.parse
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')
GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"

def get_gemini_explanation(question, answer):
    """Fetch detailed explanation from Gemini API"""
    try:
        prompt = f"""For the following GK question and answer, provide a detailed and educational explanation that helps understand the topic better. Keep the explanation concise (2-3 sentences) but informative.

Question: {question}
Answer: {answer}

Explanation:"""
        
        request_data = {
            "contents": [{
                "parts": [{
                    "text": prompt
                }]
            }]
        }
        
        url = f"{GEMINI_API_URL}?key={GEMINI_API_KEY}"
        req = urllib.request.Request(
            url,
            data=json.dumps(request_data).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        
        with urllib.request.urlopen(req, timeout=10) as response:
            response_data = json.loads(response.read().decode('utf-8'))
            
            # Extract text from Gemini response
            if 'candidates' in response_data and len(response_data['candidates']) > 0:
                candidate = response_data['candidates'][0]
                if 'content' in candidate and 'parts' in candidate['content']:
                    parts = candidate['content']['parts']
                    if len(parts) > 0 and 'text' in parts[0]:
                        return parts[0]['text'].strip()
        
        return "Explanation not available at this moment."
    except Exception as e:
        print(f"Error calling Gemini API: {e}")
        return f"Unable to fetch explanation: {str(e)}"

@app.route('/api/explain', methods=['POST'])
def explain():
    """Endpoint to get explanation for a question"""
    try:
        data = request.get_json()
        question = data.get('question', '')
        answer = data.get('answer', '')
        
        if not question or not answer:
            return jsonify({'error': 'Question and answer are required'}), 400
        
        explanation = get_gemini_explanation(question, answer)
        return jsonify({'explanation': explanation}), 200
    except Exception as e:
        print(f"Error in /api/explain: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({'status': 'ok'}), 200

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(debug=False, host='0.0.0.0', port=port)
