from http.server import BaseHTTPRequestHandler
from time_utils import get_current_time
import logging

class TimeHandler(BaseHTTPRequestHandler):
    def _send_html_response(self, content):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        
        # Common HTML header with menu
        html = f"""
        <html>
        <head>
            <style>
                nav {{ background: #f8f9fa; padding: 1rem; margin-bottom: 2rem; }}
                nav a {{ margin-right: 1rem; text-decoration: none; color: #333; }}
                .content {{ padding: 1rem; }}
            </style>
        </head>
        <body>
            <nav>
                <a href="/">Home</a>
                <a href="/time">Time</a>
                <a href="/health">Health</a>
            </nav>
            <div class="content">
                {content}
            </div>
        </body>
        </html>
        """
        self.wfile.write(html.encode())

    def do_GET(self):
        try:
            if self.path == '/':
                self._send_html_response("<h1>Welcome to Time Server</h1><p>Select an option from the menu above.</p>")
            elif self.path == '/health':
                self._send_html_response("<h1>Health Check</h1><p>Status: OK</p>")
            elif self.path == '/time':
                current_time = get_current_time()
                self._send_html_response(f"<h1>Current Time</h1><p>The current time is: {current_time}</p>")
            else:
                self.send_response(404)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write("<h1>404 - Not Found</h1>".encode())
        except Exception as e:
            logging.error(f"Error handling request: {str(e)}")
            self.send_response(500)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write("<h1>500 - Internal Server Error</h1>".encode())