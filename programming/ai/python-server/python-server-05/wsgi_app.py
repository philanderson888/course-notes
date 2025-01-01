from handlers import handle_path

def application(environ, start_response):
    """WSGI application for deployment"""
    path = environ.get('PATH_INFO', '/')
    status, content = handle_path(path)
    
    response_body = content.encode('utf-8')
    response_headers = [
        ('Content-Type', 'text/html'),
        ('Content-Length', str(len(response_body)))
    ]
    
    start_response(status, response_headers)
    return [response_body]