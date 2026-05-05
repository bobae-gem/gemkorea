import http.server
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

handler = http.server.SimpleHTTPRequestHandler
server = http.server.HTTPServer(("localhost", 4000), handler)
print("GemKorea: http://localhost:4000")
server.serve_forever()
