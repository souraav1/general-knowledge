import http.server
import socketserver
import threading
import json
import urllib.request
import urllib.parse

PORT = 8123
file_path = r'c:\Users\Lenovo\Desktop\react\uttarakhand gk\reference.txt'
GEMINI_API_KEY = "AIzaSyCwHUsLaajbc36ip0wBDe-ptVfcoS7x5cY"
GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent"

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length).decode('utf-8')
        
        try:
            data = json.loads(post_data)
            
            # Handle explanation request
            if data.get('type') == 'explain':
                explanation = get_gemini_explanation(data.get('question', ''), data.get('answer', ''))
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                response = json.dumps({'explanation': explanation})
                self.wfile.write(response.encode('utf-8'))
                return
            
            # Handle reference file save
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(post_data)
            self.send_response(200)
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(b"OK")
            print("Data written successfully.")
            threading.Thread(target=self.server.shutdown).start()
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({'error': str(e)}).encode('utf-8'))
            print(f"Error: {e}")

    def do_OPTIONS(self):
        self.send_response(200, "ok")
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header("Access-Control-Allow-Headers", "X-Requested-With, Content-type")
        self.end_headers()

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

socketserver.TCPServer.allow_reuse_address = True
try:
    with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
        print(f"Serving at port {PORT}")
        httpd.serve_forever()
except Exception as e:
    print(f"Error starting server: {e}")
