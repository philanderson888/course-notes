import os
import sys

# Add your project directory to Python path
path = '/home/philanderson888'  # Update this to your username
if path not in sys.path:
    sys.path.append(path)

from wsgi_app import application