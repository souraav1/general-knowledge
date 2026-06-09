import urllib.request
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/114.0.0.0 Safari/537.36'}
req = urllib.request.Request('https://gemini.google.com/share/7e1006b9ca50', headers=headers)
try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        with open('temp.html', 'w', encoding='utf-8') as f:
            f.write(html)
        print("Success! saved to temp.html")
except Exception as e:
    print(f"Error: {e}")
