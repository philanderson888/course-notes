from http.server import HTTPServer, BaseHTTPRequestHandler
from datetime import datetime

class TimeHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        current_time = datetime.now().strftime('%H:%M:%S')
        self.wfile.write(f"Current time is: {current_time}".encode())

def run_server(port=8000):
    server_address = ('', port)
    httpd = HTTPServer(server_address, TimeHandler)
    print(f"Server running on port {port}")
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()