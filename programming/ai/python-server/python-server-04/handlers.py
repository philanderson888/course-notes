from time_utils import get_current_time
import logging

class TimeHandler:
    def __init__(self):
        self.path = '/'
        self.headers = []
        self.status = '200 OK'

    def handle_request(self):
        try:
            if self.path == '/':
                return self._create_response("<h1>Welcome to Time Server</h1><p>Select an option from the menu above.</p>")
            elif self.path == '/health':
                return self._create_response("<h1>Health Check</h1><p>Status: OK</p>")
            elif self.path == '/time':
                current_time = get_current_time()
                return self._create_response(f"<h1>Current Time</h1><p>The current time is: {current_time}</p>")
            else:
                self.status = '404 NOT FOUND'
                return self._create_response("<h1>404 - Not Found</h1>")
        except Exception as e:
            logging.error(f"Error handling request: {str(e)}")
            self.status = '500 INTERNAL SERVER ERROR'
            return self._create_response("<h1>500 - Internal Server Error</h1>")

    def _create_response(self, content):
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
        return html.encode('utf-8')