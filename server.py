import http.server
import socketserver
import threading

PORT = 8123
file_path = r'c:\Users\Lenovo\Desktop\react\uttarakhand gk\reference.txt'

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length).decode('utf-8')
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(post_data)
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(b"OK")
        print("Data written successfully.")
        threading.Thread(target=self.server.shutdown).start()

    def do_OPTIONS(self):
        self.send_response(200, "ok")
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header("Access-Control-Allow-Headers", "X-Requested-With, Content-type")
        self.end_headers()

socketserver.TCPServer.allow_reuse_address = True
try:
    with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
        print(f"Serving at port {PORT}")
        httpd.serve_forever()
except Exception as e:
    print(f"Error starting server: {e}")
