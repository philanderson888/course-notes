from http.server import HTTPServer
from handlers import TimeHandler
from config import PORT, HOST
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def run_server():
    try:
        server_address = (HOST, PORT)
        httpd = HTTPServer(server_address, TimeHandler)
        logging.info(f"Server running on port {PORT}")
        httpd.serve_forever()
    except KeyboardInterrupt:
        logging.info("Server stopped by user")
        httpd.server_close()
    except Exception as e:
        logging.error(f"Server error: {str(e)}")

if __name__ == '__main__':
    run_server()