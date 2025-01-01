# Time Server

A simple Python web server that displays the current time.

## Endpoints

- `/time` - Returns the current time
- `/health` - Health check endpoint

## Local Development

1. Run the server:
   ```
   python server.py
   ```

2. Visit http://localhost:8000/time in your browser

## Deployment to PythonAnywhere

1. Upload these files to your PythonAnywhere account
2. In the Web tab, create a new web app
3. Set the working directory to where you uploaded the files
4. Set the WSGI configuration file to point to your server.py
5. Reload the web app

The server will run on the port configured by PythonAnywhere.