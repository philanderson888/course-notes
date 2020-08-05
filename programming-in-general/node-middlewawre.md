

		
				
		
MIDDLEWARE

	Express adds extra functionality to your web server called 'middleware' which basically does extra tasks other than deliver files to users.
	
	Examples of middleware functions
		logger request logger with custom format support
		csrf Cross-site request forgery protection
		compress Gzip compression middleware
		basicAuth basic http authentication
		bodyParser extensible request body parser
		json application/json parser
		urlencoded application/x-www-form-urlencoded parser
		multipart multipart/form-data parser
		timeout request timeouts
		cookieParser cookie parser
		session session management support with bundled MemoryStore
		cookieSession cookie-based session support
		methodOverride faux HTTP method support
		responseTime calculates response-time and exposes via X-Response-Time
		staticCache memory cache layer for the static() middleware
		static streaming static file server supporting Range and more
		directory directory listing middleware
		vhost virtual host sub-domain mapping middleware
		favicon efficient favicon server (with default icon)
		limit limit the bytesize of request bodies
		query automatic querystring parser, populating req.query
		errorHandler flexible error handler
	Middleware is basically any software that sits between your application code and some low level API. 
	
	Express extends the built-in HTTP server functionality and adds a plugin framework. 
	
	Middleware is software which gets executed by the request handler before the response is sent back
	
		==> REQUEST IN 
		
				HANDLER RUNS
				
				==> MIDDLEWARE IS CALLED 
						
				==> RESPONSE IS SENT 
						
	
	http://expressjs.com/en/guide/using-middleware.html	
	
		
	http://expressjs.com/en/guide/writing-middleware.html
		
	
	http://evanhahn.com/understanding-express/
	
	
		
		Middleware functions are functions that have access to 
		
			- the request object (req)
			
			- the response object (res)
			
			- and the next middleware function in the application's request-response cycle.   
			  The next middleware function is commonly denoted by a variable named next.
		
	Middleware functions can perform the following tasks:
		Execute any code.
		Make changes to the request and the response objects.
		End the request-response cycle.
		Call the next middleware in the stack.
	
			
	MIDDLEWARE MUST END THE REQUEST AND RESPONSE CYCLE, OR CALL NEXT() 
	
		If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
	
	
	
	Warning : most middleware is no longer bundled with Express and must be installed separately


