from http.server import BaseHTTPRequestHandler
from time_utils import get_current_time
import logging

class TimeHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            if self.path == '/health':
                self.send_response(200)
                self.send_header('Content-type', 'text/plain')
                self.end_headers()
                self.wfile.write("OK".encode())
            elif self.path == '/time':
                self.send_response(200)
                self.send_header('Content-type', 'text/plain')
                self.end_headers()
                current_time = get_current_time()
                self.wfile.write(f"Current time is: {current_time}".encode())
            else:
                self.send_response(404)
                self.send_header('Content-type', 'text/plain')
                self.end_headers()
                self.wfile.write("Not Found".encode())
        except Exception as e:
            logging.error(f"Error handling request: {str(e)}")
            self.send_response(500)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write("Internal Server Error".encode())