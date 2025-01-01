from http.server import BaseHTTPRequestHandler
from time_utils import get_current_time
import logging

def create_html_response(content):
    """Create HTML response with navigation menu"""
    return f"""
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

def handle_path(path):
    """Common path handling logic"""
    try:
        if path == '/':
            return '200 OK', create_html_response("<h1>Welcome to Time Server</h1><p>Select an option from the menu above.</p>")
        elif path == '/health':
            return '200 OK', create_html_response("<h1>Health Check</h1><p>Status: OK</p>")
        elif path == '/time':
            current_time = get_current_time()
            return '200 OK', create_html_response(f"<h1>Current Time</h1><p>The current time is: {current_time}</p>")
        else:
            return '404 NOT FOUND', create_html_response("<h1>404 - Not Found</h1>")
    except Exception as e:
        logging.error(f"Error handling request: {str(e)}")
        return '500 INTERNAL SERVER ERROR', create_html_response("<h1>500 - Internal Server Error</h1>")

# Handler for local development with http.server
class TimeHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        status, content = handle_path(self.path)
        status_code = int(status.split()[0])
        
        self.send_response(status_code)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write(content.encode('utf-8'))