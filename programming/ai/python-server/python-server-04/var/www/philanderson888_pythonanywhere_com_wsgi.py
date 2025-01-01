import os
import sys

# Add your project directory to Python path
path = '/home/philanderson888'  # Update this to your username
if path not in sys.path:
    sys.path.append(path)

from handlers import TimeHandler

def application(environ, start_response):
    handler = TimeHandler()
    handler.path = environ.get('PATH_INFO', '/')
    
    response_body = handler.handle_request()
    
    response_headers = [
        ('Content-Type', 'text/html'),
        ('Content-Length', str(len(response_body)))
    ]
    
    start_response(handler.status, response_headers)
    return [response_body]