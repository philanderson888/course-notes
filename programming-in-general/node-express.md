# Express 
		
		
		
EXPRESS

	Express is a FRAMEWORK which assists in the building of Node apps.
	Express uses MVC structure
		Model : DB
		View : HTML/CSS/JS
		Controller
	Routing permits accessing of files etc via /parent/child/file.htm path
    Frameworks built with Express - https://github.com/expressjs/express/wiki?&_ga=1.146100980.1958515893.1463271487#frameworks-built-with-express
Express Documentation

expressjs.com
  See getting started, guide and also API Reference for an all-in-one reference page.
Video Learning

15 minutes - Node.js tutorial for beginners 2014 - an introduction to Node.js with Express.js
	
Installing Express	

npm install -g express
npm install -g express-generator@4
http://expressjs.com/en/starter/generator.html
	
	
Include Express In Your App

var express = require('express');
var app = express();
  app can now handle a request and return a response
Express Methods

get()
post()
put()
delete() etc
param()    routing	
route()
render()   display html
engine()   use Jade or EJS etc template engine
   app.engine('jade',require('jade').__express);
		
	
	
EXPRESS TEMPLATE ENGINES

	
	PUG WAS JADE
	
		https://www.npmjs.com/package/pug
		
	MUSTACHE (Hogan)
		
		INSTALL WITH -H or --hogan
	
	EJS
	
		INSTALL WITH -e or --ejs
		
	CSS
		-c less/sass
		
	
	COMPLETE LIST OF EXPRESS TEMPLATE ENGINES AT
		https://github.com/expressjs/express/wiki?&_ga=1.146100980.1958515893.1463271487#template-engines
				
		
		
		
		
		
		
		
									
	
	
JADE 
	LAYOUT.JADE GIVES YOU THE HEADER INFORMATION
	
		doctype html
		html
		  head
		    title= title
		    link(rel='stylesheet', href='/stylesheets/style.css')
		  body
		    block content
	
	
	Page.JADE RENDERS EACH PAGE
	
		extends layout
		
		block content
		  h1= title
		  p Welcome to #{title}
		  p I hope that #{name} you really enjoy the course in #{course} today.
		  h2 List of Priorities
		  ol
		   li Do this first
		   li And second
		   li And third
		  h2 List of Users
		  ul
		   li #{user1}
		   li #{user2}
		   li #{user3}
		  h2 List of Friends
		  ul
		   each friend in friends                 FRIENDS IS AN ARRAY
		    li= friend
		
		
	JADE ATTRIBUTE REFERENCE
	
		http://jade-lang.com/reference/attributes/
		
		
		a(href='google.com') Google           SET URL 
		
		
		
		
		
		
		
						
		
		
		
		
EXPRESS FIRST WEB SERVER APPLICATION 
	
	http://expressjs.com/en/starter/hello-world.html
			(ALSO 	EXCELLENT DOCUMENT TO UNDERSTAND EXPRESS 
						http://evanhahn.com/understanding-express/ )
	
	
	
	var http=require('http');
	var express=require('express');
	var app=express();
	http.createServer(app);
	app.listen(8080);
	console.log('Express server listening 8080');
		
	    Example at node_49_express.js
		
				
		
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
EXPRESS EXCEPTION HANDLING
		
	http://expressjs.com/en/guide/error-handling.html
		
	app.use(function(err, req, res, next) {
		if(err){
			console.error(err.stack);
			res.status(500).send('Something broke!');
			return next(err)
		}
		// send valid response
	});	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
	
	
		
	
		
		
		
			
	
APP.LISTEN - CAN LISTEN ON MULTIPLE PORTS 
	var http=require('http');
	var express=require('express');
	var app=express();
	app.get('/',function(req,res){
		console.log('inside get function');
	  res.send('Hello World');
	});
	
	http.createServer(app).listen(8080);
	console.log('listening 8080');
	
	http.createServer(app).listen(8081);
	console.log('listening 8081');
	
		node_52_express.js
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
		
		
LISTENING ON ALL IP ADDRESSES RATHER THAN JUST DEFAULT OF 127.0.0.1 
	By default Express is only listening on localhost 127.0.0.1.
	
	To change this to a web server listening for requests from any IP, run the following
	
	
			var http = require('http');
			http.createServer(function (req, res) {
				res.writeHead(200, {'Content-Type': 'text/plain'});
				res.end('Hello World\n');
			}).listen(8080, "0.0.0.0");
	
			
			console.log('Server running at http://0.0.0.0:8080/');
		
		
			SERVER CAN NOW FUNCTION AS AN EXTERNAL WEB SERVER LISTENING TO REQUESTS FROM THE INTERNET 
			
			
			
			
			
			
			
			
			
			
SET THE LISTENING PORT MANUALLY USING APP.SET 
	Express app.set('port',8080);
	
	
	
	
	
	
	
	
	
	
	
	
EXPRESS GET()
	http://expressjs.com/en/4x/api.html
		
	var http=require('http');
	var express=require('express');
	var app=express();
	app.get('/',function(req,res){
		console.log('inside get function');
	  res.send('Hello World');
	});
	http.createServer(app).listen(8080);
	console.log('listening 8080');
		node_51_express.js 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
EXPRESS MIDDLEWARE : APP.USE() TO ADD EXTRA 'MIDDLEWARE' 
	var app = express()
	
	app() has use() function to call other middleware 
	
	WHEN A REQUEST IS RECEIVED ON THE LISTENING PORT, APP.USE() WILL RUN BEFORE SENDING A RESPONSE BACK.  THIS IS MIDDLEWARE.
	
			var http=require('http');
			var express=require('express');
			var app=express();
			app.use(function(err,req,res,next){
				  console.log('Inside use function');
				  next();
				});
			
			app.get(....=> SEND A RESPONSE )
			http.createServer(app).listen(8080);
			console.log('Listening 8080');
		
		
			node_50_express.js 
	
	
	
	
	
		
EXPRESS 'APP.USE' MIDDLEWARE : EXAMPLE 2
					
			var http=require('http');
			var express=require('express');
			var app=express();
			var myLogger=function(req,res,next){
				console.log('inside logger middleware');
				next();
			}
			app.use(myLogger);
			app.get('/',function(req,res){
				console.log('inside get');
				res.send('<h1>hello world</h1>');
			})
			http.createServer(app).listen(8080);
			console.log('listening 8080');
				node_53_express.js 
			
				node_81_express_02.js 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    
Express Routing
	
	http://expressjs.com/en/4x/api.html
		
	http://expressjs.com/en/starter/basic-routing.html
	WHEN A WEB REQUEST COMES IN FOR A PAGE OR FOLDER EG WWW.MYSITE.COM/FOLDER1/
	
		WHERE DOES THE REQUEST GO?  ==> ROUTING! 
		
		
					
	Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
	Each route can have one or more handler functions, which are executed when the route is matched.
	Route definition takes the following structure:
	app.METHOD(PATH, HANDLER)
	   
				app is an instance of express.
				METHOD is an HTTP request method.  GET/POST/PUT/DELETE 
				PATH to the requested resource 
				HANDLER is the function executed when the route is matched.
   
   	
		
	app.use([path,] function [, function...])
	
		A route will match any path that follows its path immediately with a “/”. For example: app.use('/apple', ...) will match “/apple”, “/apple/images”, “/apple/images/news”, and so on.
		Mounting a middleware at a path will cause the middleware function to be executed whenever the base of the requested path matches the path.
		If path is not specified, it defaults to “/”.
		
			node_54_express.js 
			node_82_express_03.js 	
			node_83_express_03.js 
			node_83_express_04.js 
	
	
	
				
	EXPRESS MULTIPLE MIDDLEWARE FUNCTIONS : NOTE : METHODS EXECUTED IN ORDER.  ANY ROUTE NOT PRECEDED BY A NEXT() WILL NOT BE EXECUTED, EVER! 
	
		EXPRESS NEXT() TO HAVE MULTIPLE CALLBACKS 
		
		
		
	
EXPRESS ROUTING USING ROUTE() METHOD TO CHAIN GET/POST/PUT/DELETE REQUESTS TOGETHER FOR ONE ROUTE 
	http://expressjs.com/en/guide/routing.html
		app.route('/book')
		
			  .get(function(req, res) {
				res.send('Get a random book');
			  })
			  .post(function(req, res) {
				res.send('Add a book');
			  })
			  .put(function(req, res) {
				res.send('Update the book');
			  });
		  
	http://expressjs.com/en/4x/api.html#router
	
	Create a new router as follows:
	var router = express.Router([options]);
	
		
		
		
		
		
		
		
ROUTING
	APP.USE(PATH) FIRST (MIDDLEWARE)
	APP.GET(PATH) SECOND (SEND RESPONSE)
	
	http://expressjs.com/en/4x/api.html
	http://expressjs.com/en/guide/routing.html
	
		
	Routes HTTP GET requests to the specified path with the specified callback functions. 
		
		var http=require('http');
		var express=require('express');
		var app=express();
		var myLogger=function(req,res,next){
			console.log('inside logger for all paths');
			next();
		}
		var myLogger2=function(req,res,next){
			console.log('inside logger when path is /test');
			next();
		}
		app.use(myLogger);           /* all requests trigger this */
		app.use('/test',myLogger2);      /* requests to /test trigger this */
		app.get('/',function(req,res){
			res.send('inside default get response');
		});
		app.get('/test',function(req,res){
		  res.send('inside get function for path /test');
		});
		http.createServer(app).listen(8080);
		console.log('listening 8080');
		
			node_55_express.js
	
	
	
	
ROUTING
	ROUTER.USE : ALL ROUTES
	
	
		CODE MATCHING ANY ROUTE 
	
		// invoked for any requests passed to this router
		router.use(function(req, res, next) {
		  // .. some logic here .. like any other middleware
		  next();
		});
	
	CODE MATCHING A PARTICULAR ROUTE 
			
		// will handle any request that ends in /events
		// depends on where the router is "use()'d"
		router.get('/events', function(req, res, next) {
		  // ..
		});
		
		
	ROUTE REQUESTS FOR A PARTICULAR URL TO ROUTER 
	
		// only requests to /calendar/* will be sent to our "router"
	
		app.use('/calendar', router);
	ROUTER.ALL                                               ALL ROUTES 
	
		http://expressjs.com/en/4x/api.html#router.all
	
		router.all('*', requireAuthentication, loadUser);
		
		
		
	ROUTER.GET/POST/PUT/DELETE 
	
		http://expressjs.com/en/4x/api.html#router.METHOD
	
		router.METHOD(path, [callback, ...] callback)
		The router.METHOD() methods provide the routing functionality in Express, where METHOD is one of the HTTP methods, such as GET, PUT, POST, and so on, in lowercase. 
		
		Thus, the actual methods are router.get(), router.post(), router.put(), and so on.
		router.get('/', function(req, res){
		  res.send('hello world');
		});
		
		
		
		
	ROUTER.ROUTE
	
		http://expressjs.com/en/4x/api.html#router.route
		
		var router = express.Router();
		
		
		router.route('/users/:user_id')
			.all...
			.get(function(req, res, next) {
			  res.json(req.user);
			})
			.put..
			
		
		
	EXPRESS ROUTER SAMPLE APPLICATION 
		https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
		
	WORK THROUGH EXAMPLE 	
		
		http://expressjs.com/en/starter/basic-routing.html
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
	
		
EXPRESS POST
	POST DATA TO A SERVER
	
	SAME AS BEFORE WITH GET AND USE BUT USING POST TO MATCH ROUTES
		app.post(path, callback)
		
		
		
		app.post('/', function (req, res) {
			res.send('POST request to homepage');
		});
	
		
		node_69_express_post.js	
	
			view demo using node_69_html_form.htm
			
			
		
	
	
	
POST DATA WITH QUERYSTRING TO PARSE (NO EXPRESS)
	node_72/3/4/5_form.js 
		
POST DATA WITH EXPRESS BODYPARSER
	https://www.npmjs.com/package/body-parser
	http://stackoverflow.com/questions/4295782/how-do-you-extract-post-data-in-node-js
	
	
		var express = require('express')
		var bodyParser = require('body-parser')
		var app = express()
		app.use(bodyParser.urlencoded({ extended: false }))
		app.use(bodyParser.json())
		app.use(function (req, res) {
		  var post_data = req.body;
		  console.log(post_data);
		})
	
	       node_76_express_form.js
		   
		   node_77_express_form.js
		
				
				
				
	
			
	Parsing a JSON file 
		https://www.npmjs.com/package/body-parser-json
	
			
			
		
EXPRESS WEB SERVER
	1) SERVING RAW HTML
	
	2) SENDING(STREAMING) AN HTML FILE
	SEE LABS node_80 through 87 for express examples
	
	
	
	
	
	
	
	
	
	
	
		   
   
		   
		   
	
EXPRESS SUMMARY

	app.use(path,callback);
		MATCHES ALL PATHS THAT BEGIN WITH PATH AND REGARDLESS OF GET/POST TYPE 
		
		app.use is USED FIRST BEFORE AN APP.GET REQUEST AS MIDDLEWARE TO PRE-PROCESS DATA
		
		
		SAME AS app.all(path,callback)
		
		eg
		app.all('*',fn1,fn2);   FOR ALL PATHS RUN FUNCTION fn1 THEN fn2 
		
		
	app.get(path,callback) 
		MATCHES ALL GET REQUESTS TO A PATH 
	app.post(path,callback)
		MATCHES ALL POST REQUESTS TO A PATH 
	req.url can be tested for values as a different method of routing
		node_72_form.js 
	
	
	
	
	
	
	
	
	
	
URL ENCODE
	URLs can only be sent over the Internet using the ASCII character-set.
	Since URLs often contain characters outside the ASCII set, the URL has to be converted into a valid ASCII format.
	URL encoding replaces unsafe ASCII characters with a "%" followed by two hexadecimal digits.
	
	ADD %nn IN PLACE OF NON-ASCII CHARACTERS
	http://www.w3schools.com/tags/ref_urlencode.asp
	URLs cannot contain spaces. 
			
		URL encoding normally replaces a space with a plus (+) sign or with %20.
	var uri = "http://w3schools.com/my test.asp?name=ståle&car=saab";
	
	var uri_enc = encodeURIComponent(uri);
	
	
URL DECODE 
	
	http://www.w3schools.com/jsref/jsref_decodeuricomponent.asp
	
	var uri = "http://w3schools.com/my test.asp?name=ståle&car=saab";
	var uri_enc = encodeURIComponent(uri);
	var uri_dec = decodeURIComponent(uri_enc);
	var res = uri_enc + "<br>" + uri_dec;
	
	
	
	
	
	
	
ENCODE / DECODE TEST TOOL 
	http://meyerweb.com/eric/tools/dencoder/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
EXPRESS APP.LOCALS DATA EG TITLE
	APP.LOCALS HAS SOME METADATA REGARDING THE EXPRESS APP
	
		EG APP.LOCALS.TITLE 
		
			SEE node_69_express_post.js 
	
			app.locals.title="My application";
			app.locals.email="abc@abc.com";
			console.log("Title Is " + app.locals.title);
			console.log("Email is " + app.locals.email);
				
		VALID FOR WHOLE LIFETIME OF THE APP
		
	REQ.LOCALS SIMILARLY HAS SOME METADATA ABOUT EACH INDIVIDUAL REQUEST VALID FOR ONE REQUEST ONLY
	
		eg
		
		res.locals.authenticated / res.locals.user
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	
EXPRESS COOKIES
	REQ.COOKIES
		http://expressjs.com/en/4x/api.html#req.cookies
		
		ADD COOKIE DATA USING COOKIE-PARSER MODULE 
		
			https://www.npmjs.com/package/cookie-parser
			
			
		// Cookie: name=tj
		req.cookies.name
		// => "tj"
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
EXPRESS SESSION 
	https://github.com/expressjs/session
	https://codeforgeek.com/2014/09/manage-session-using-node-js-express-4/
	
	http://blog.modulus.io/nodejs-and-express-sessions
	
	
	npm install express-session
	var session = require('express-session')
		app.get('/category', function(req, res) {
		  req.session.valid = true;
		  req.session.myfield='myvalue';
		  res.redirect('/');
		});
	
		app.get('/', function(req, res) {
		  var passedVariable = req.session.valid;
		  req.session.valid = null; // resets session variable
		  // Do something
		});
		   
		
		
		
		
		
SUMMARY : REQUEST METHODS
	FOLLOWING ARE A SUMMARY OF METHODS AVAILABLE ON THE REQUEST OBJECT
	
	
	REQ.QUERY
	
		ALLOWS US TO EXTRACT PROPERTIES AND VALUES FROM THE INCOMING HTTP GET REQUEST
		
		HTTP://PATH/?FIELD1=VALUE1&FIELD2=VALUE2   : EXTRACT FIELD1,VALUE1 ETC
		
		An object containing a property for each query string parameter in the route. If there is no query string, it is the empty object, {}.
			LOCALHOST:3000/?AGE=22    THE QUERY STRINGS HOLDS /?AGE=22
			router.get('/', function(req,res){
				console.log (req.query);
				Res.send(req.query);
			});
			Localhost:3000/?age=22&name=fred
	
			res.send(req.query.age);
			console.log('Name is ' + req.query.name + ' and age is ' + req.query.age);
			
	REQ.QUERY Parameters
	
		Can be used to extract GET parameters
		http://expressjs.com/en/4x/api.html#req.query
			// GET /search?q=tobi+ferret
			req.query.q
						// => "tobi ferret"
		
		
		
	
	REQ.BASEURL IS THE TOP ROUTE FOLDER IN THE INCOMING REQUEST
	
		REQ.BASEURL(/greet/jp) RETURNS /greet
		
		http://expressjs.com/en/4x/api.html#req.baseUrl
		
		
		
		
		
		
		
	REQ.BODY EXTRACTED USING BODY-PARSER MODULE
	
		http://expressjs.com/en/4x/api.html#req.body
		
		https://www.npmjs.com/package/body-parser
		
		
		
		
				
	REQ.HOSTNAME 
	
		http://expressjs.com/en/4x/api.html#req.hostname
		
		// Host: "example.com:3000"
		req.hostname
		// => "example.com"
		
		
		
		
	REQ.IP 
	
		req.ip
		// => "127.0.0.1"
		
		
		
		
			
	REQ.METHOD RETURNS GET,POST,PUT,DELETE 
	
		http://expressjs.com/en/4x/api.html#req.method
	
		Contains a string corresponding to the HTTP method of the request: GET, POST, PUT, and so on.
		
		
	
	
		
	REQ.ORIGINALURL 
	
		KEEPS ORIGINAL VALUE EVEN THOUGH MAY MODIFY OTHER VARIABLE REQ.URL 
		
		http://expressjs.com/en/4x/api.html#req.originalUrl
		
		
		
		
		
		
		
		
		
	REQ.PARAMS  - Request Parameters
	
		http://expressjs.com/en/4x/api.html#req.params
		
		USED WHEN A 'GET' REQUEST IS OF THE FORM
		
			HTTP://PATH/:value     WHERE WE MATCH :value TO A SPECIFIC ITEM		
			
			
		An object containing properties mapped to the named route “parameters”. For example, if you have the route /user/:name, then the “name” property is available as req.params.name. This object defaults to {}.
		
		route /user/:name
		
		GET /user/tj
		
		req.params.name
		// => "tj"
		
		Example
			router.get('/:id', function(req,res,next){
				res.send('OK');
				console.log(req.params);
			});
			
			URL IS 
			
			http://localhost:3000/users/33
			
			WILL RETURN 
			
			{
			  id: "33"
			}
			
			Res.send(req.params.id,200);
			
	
		
		
		
			
	.PARAM   
	
		ADD PARAMETERS TO THE ROUTING REQUEST 
		
		
		http://expressjs.com/en/4x/api.html
	
		http://expressjs.com/en/4x/api.html#router.param
		
		
		app.param('user', function(req, res, next, id){  
			if (user) {
				req.user = user;
				next();
			}	
		});
		
			Add callback triggers to route parameters, where name is the name of the parameter or an array of them, and function is the callback function. 
			
			The parameters of the callback function are the request object, the response object, the next middleware, the value of the parameter and the name of the parameter, in that order.
			
			
		
		app.get('/user/:id', function (req, res, next) {
		
		         /fieldname/:parametername
				 
				 
		PASSING MULTIPLE PARAMETERS AS ARRAY 
				 
		 app.param(['id', 'page'], function (req, res, next, value) {	 
		
		request.query = query parmeters ie http://domain.com?id=6 
		
			retrieves request.query.id with value 6 
					
		
		request.body  can use Express bodyParser 
		
		request.param('param_name')  will yield the value 
									of the parameter value 
	
			This will query (1) request.body (2) request.query
							(3) request.params for the given value 
							
		
		request.params is an ARRAY 
		
		
		request.params holds the parameters send to the route 
		
			/user/:id 
			
			app.get('./user/id',function(req,res){
				res.send('user' + req.params.id)
			});
			
			
			
			
		
		
		
		
		
		router.param(name, callback)
		
		router.param('user', function(req, res, next, id) {
			
				 req.user = user;
		
		}

REQ.PATH    IS INTERNAL FOLDER PATH
		WWW.DOMAIN.COM/PATH/TO/HERE/FILE.HTM 
		
			req.path = 'PATH/TO/HERE' 
			
			
			
			
			
			
			
			
			
			
		
EXPRESS RESPONSE METHODS
	http://expressjs.com/en/guide/routing.html
	
	Response methods
	
		The methods on the response object (res) in the following table can send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.
		Method	Description
		res.download()	Prompt a file to be downloaded.
		res.end()	End the response process.
		res.json()	Send a JSON response.
		res.jsonp()	Send a JSON response with JSONP support.
		res.redirect()	Redirect a request.
		res.render()	Render a view template.
		res.send()	Send a response of various types.
		res.sendFile()	Send a file as an octet stream.
		res.sendStatus()	Set the response status code and send its string representation as the response body.
	
	
	
	
	
	RES.SEND([BODY])
		http://expressjs.com/en/4x/api.html#res.send
	
		res.send(new Buffer('whoop'));
		res.send({ some: 'json' });
		res.send('<p>some html</p>');
		res.status(404).send('Sorry, we cannot find that!');
		res.status(500).send({ error: 'something blew up' });
		
		
		
		
	RES.SENDFILE
	
		http://expressjs.com/en/4x/api.html#res.sendFile
		
		res.sendFile(path [, options] [, fn])
		Transfers the file at the given path.
			
		Example :  node_85_express_05.js
				
				
			function httpTest1(req,res,next){
				console.log('HTTP Response 1 for TEST PATH');
				next();
			}
			function httpTest2(req,res){
				console.log('HTTP Response 2 for TEST PATH');
				res.setHeader("Content-Type","text/html");
				res.write('HTTP Response 2 for TEST PATH');
				res.end();
			}
			function servePage2(req,res){
				console.log('Serving page2.htm');
				console.log('__dirname is ' + __dirname);
				var filePath=path.join(__dirname + '/node_85_express_05_page2.html');
				console.log('filePath is ' + filePath);
				res.sendFile(filePath);
			}
	  
		Example : Node_87_express_static.js
		
		console.log('Root Directory name is ' + __dirname);
		var filePath = path.join(__dirname + '/node_87_index.html');
		console.log('File path is ' + filePath);
	  
	  
		
	RES.REDIRECT
	
		http://expressjs.com/en/api.html#res.redirect
		
		res.redirect([status,] path)
		
		res.redirect('/foo/bar');
		res.redirect('http://example.com');
		res.redirect(301, 'http://example.com');
		res.redirect('../login');
		UP ONE LEVEL 
		
			res.redirect('..');
		
		
		BACK 
		
			res.redirect('back'); 
	RESPONSE : MODIFY HEADERS 
		
		 res.writeHead(200, 
			{ 
				'content-length': '123',
				'content-type': 'text/plain',
				'connection': 'keep-alive',
				'host': 'mysite.com',
				'accept': '*/*' ,
				'my-field': 'my-value'
			});
		When headers have been set with response.setHeader(), they will be merged with any headers passed to response.writeHead(), with the headers passed to response.writeHead() given precedence.
		
		
		
		// returns content-type = text/plain
		const server = http.createServer((req,res) => {
		  res.setHeader('Content-Type', 'text/html');
		  res.setHeader('X-Foo', 'bar');
		  res.writeHead(200, {'Content-Type': 'text/plain'});
		  res.end('ok');
		});
			
			
			
		
	
REFERENCE : EXPRESS METHODS 
	APP.METHOD         ROUTING 
	
	APP.PARAM          ROUTING 
	
	APP.ROUTE 		   
	
	APP.RENDER			DISPLAY HTML 
	
	APP.ENGINE 			REGISTER A TEMPLATE ENGINE 
	
						app.engine('jade', require('jade').__express);
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
Express Generator 
	http://expressjs.com/en/starter/generator.html
	
	DOES ALL THE HARD WORK FOR YOU OF CREATING A BARE-BONES EXPRESS PROJECT OUT OF THE BOX!!!
	
		Npm install express-generator -g
	
	Then run this command 
		
		Express <PROJECT NAME> to create express project
	
	Now install dependencies 
		
		CD <PROJECT NAME> to enter the folder 
		
	then run
	
		NPM INSTALL 
		
			NPM INSTALL will install all node dependencies for a project defined in the PACKAGE.JSON file
	
		
		Final folder output 
		
		
			+-- app.js
			+-- bin
			¦   +-- www
			+-- package.json
			+-- public
			¦   +-- images
			¦   +-- javascripts
			¦   +-- stylesheets
			¦       +-- style.css
			+-- routes
			¦   +-- index.js
			¦   +-- users.js
			+-- views
				+-- error.jade
				+-- index.jade
				+-- layout.jade
   
   	PACKAGE.JSON
			DEFINES NODE DEPENDENCIES FOR THAT PROJECT; IF THERE ARE NO DEPENDENCIES INSTALLED THEN RUN NPM INSTALL FROM THAT FOLDER TO MANUALLY INSTALL ALL DEPENDENCIES
					
			
	DEFAULT DEPENDENCIES FOR EXPRESS ARE UNDER 6MB IN SIZE
   
   
   
   
   
   
 
BEST PRACTICE FOR MVC EXPRESS STRUCTURE
					
	https://www.terlici.com/2014/08/25/best-practices-express-structure.html
	
	
		PROJECT/
			
			ROUTES/ OR  CONTROLLERS/
			
			MIDDLEWARE/
			
			MODELS/
			
			PUBLIC/
			
			VIEWS/
			
			
			
	
		project/
		controllers/
			comments.js
			index.js
			users.js
		helpers/
			dates.js
		middlewares/
			auth.js
			users.js
		models/
			comment.js
			user.js
		public/
			libs/
			css/
			img/
		views/
			comments/
			comment.jade
			users/
			index.jade
		.gitignore
		app.js
		package.json
	
	
	
	
RUNNING EXPRESS
									
	RUN WITH             
	
	
		SET DEBUG=express_01:* & npm start
	                                                                                & nodemon \bin\www  to watch for changes
	
	
	
	
	NOTE : EXPRESS SITS IN RAM WHICH IS WHY IT'S SO FAST
	
			
	NOTE : CHANGE RUNNING PORT IN \bin\www file 
	
	
	
	
	
EXPRESS GENERATOR SUMMARY
	INSTALL NODE
	
	NODE -V
	NPM -V
	
	NPM INSTALL -G EXPRESS-GENERATOR
	
	MD ROOT_FOLDER
	
	CD ROOT_FOLDER
	
	EXPRESS APP_NAME
	
	CD APP_NAME
	
	NPM INSTALL TO INSTALL NODE FILES
	
	THEN RUN NODE
	
	NODE APP_NAME 
	OR SET DEBUG=EXPRESS:* & NODEMON INDEX.JS	
	
	OR
							 NODEMON EXPRESS
	
	
			
			
	
	
DEBUGGING WITH EXPRESS
 
	http://expressjs.com/en/guide/debugging.html
	
	
	Run with DEBUG 
	
		On MacOS or Linux, run the app with this command:
			DEBUG=myapp:* & npm start
			
		On Windows, use this command:
			set DEBUG=myapp:* & npm start
			SET DEBUG=* & node node_55_express.js
			
		 
	
			
NODE : RUNNING COMMANDS CONDITIONALLY	
		& RUNS TWO COMMANDS     
		
		&& RUNS TWO COMMANDS ONLY IF FIRST SUCCESSFUL
		
		|| RUNS FIRST COMMAND AND IF IT FAILS, RUNS SECOND COMMAND
		
		
EXPRESS SERVING UP STATIC FILES 
	http://expressjs.com/en/starter/static-files.html
	
	To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
	Pass the name of the directory that contains the static assets to the express.static middleware function to start serving the files directly. 
	
	Use the following code to serve images, CSS files, and JavaScript files in a directory named public:
			app.use(express.static('public'));
		
		
		
	Now, you can load the files that are in the public directory:
			http://localhost:3000/images/kitten.jpg
			http://localhost:3000/css/style.css
			http://localhost:3000/js/app.js
			http://localhost:3000/images/bg.png
			http://localhost:3000/hello.html		
			
			
	Multiple Static Directories : Just repeat 
	
		To use multiple static assets directories, call the express.static middleware function multiple times:
		app.use(express.static('public'));
		app.use(express.static('files'));
			
			
	To create a virtual path prefix (where the path does not actually exist in the file system) for files that are served by the express.static function, specify a mount path for the static directory, as shown below:
		app.use('/static', express.static('public'));
	
	











	







 
 
FORMS (CH 8)
 
BOOTSTRAP : SHOW BOOTSTRAP.HTM
 
BODY-PARSER : GIVE YOU ACCESS TO ALL FORM FIELDS
 
ACCESS EACH FIELD VIA REQ.BODY.<FIELDNAME>
 
 




















FILE UPLOADS
 
 
https://github.com/felixge/node-formidable
 
https://howtonode.org/really-simple-file-uploads
 
https://joelennon.com/file-uploads-with-express-4-0/
 
https://www.npmjs.com/package/fileupload
 
 
 
 
 
 
 
EMAILING (CH 11)
 
NODEMAILER
 
 
 
 
 
 
PRODUCTION VS DEV ENVIRONMENT
 
DEFAULT ENVIRONMENT IS DEVELOPMENT
 
FIELD IS 
 
APP.GET('ENV')
 
>export NODE_ENV=PRODUCTION
>node app.js
 
APP.SET('ENV','PRODUCTION')
 
 
 
 
 
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
		
		
		
		
	
	
		
		
		
		

		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
	
	
Express and Rendering Data
	OLD HTML RENDERING 
	
		SCRIPT INJECTION OF HTML 
		
	TODAY
	
		TEMPLATES CAN CREATE HTML FOR US 
		
				HANDLBARS/MUSTACHE 
		
				DYNAMICALLY LOAD 
		
	
What is a renderer?

	Use EJS or Angular or Jade to create templates for our web pages to hold field data
	
	partial is when we call part of a file to create eg header and footer views 
	
	
Jade, EJS, Mustache and Handlebars

	Jade = DEFAULT 
	EJS = Embedded Javascript 
	
		https://scotch.io/tutorials/use-ejs-to-template-your-node-application
	
		<% EMBEDDED CODE 
		
		<%= FIELD 
		
		<%-   HTML 
		
		
	
		<% include path/to/include/file %>
		
		<%= fieldname %>
		<% if (myObject) { %>
			<%= myObject.fieldname %>
		<% } %>
		
		<ul>
			<% myArray.forEach(function(arrayItem){ %>
				<li><%= arrayItem.fieldName %></li>
			<% }); %>
		</ul>
		
		
		
		EJS is simple eg does not support LAYOUTS
		
		
		Templating 
			Can CREATE OR CHANGE the LAYOUT FILE 
				Pass view into LAYOUT FILE 
		
				https://www.npmjs.com/package/express-layout
		
		
		
		
		
		
		
		
	
	
	Handlebars.js:
		<li class="photo">
		  <h2>{{caption}}</h2>
		  <img class="source" src="{{src}}"/>
		  <div class="meta-data">
			{{metadata}}
		  </div>
		</li>
	Underscore 
	
		<li class="photo">
		  <h2><%= caption %></h2>
		  <img class="source" src="<%= src %>"/>
		  <div class="meta-data">
			<%= metadata %>
		  </div>
		</li>
		
TEMPLATING EXAMPLE WITH HANDLEBARS
		
	http://excellencenodejsblog.com/getting-started-express-4-x-template-engine/
		
		
		
		
	
		
	
	
	
	
Partials

Partials are templates which can be called from other templates, so reusing
template data.
Using partials

	CAN RENDER PARTIAL TEMPLATES OFTEN IN PARALLEL 
	
	https://www.npmjs.com/package/express-partial
	
	npm install express-partial
	
	var express = require('express');
	var partial = require('express-partial');
	var app = express();
	 
	app.use(partial());
	
	RENDER OUTPUT FROM TWO PARTIAL TEMPLATES 
	
	app.get('/partials', function () {
	  res.renderPartials({
		hello: { data: 'for hello template' },
		world: { data: 'for world template' }
	  });
	});
	
	EJS   <% include path/to/template %>
	
	OTHER HELP 
	
		http://stackoverflow.com/questions/17818395/how-to-use-partials-in-express-js-layout
		
		http://www.hacksparrow.com/express-js-jade-partials-how-to-use-them.html
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
			
	
			
			
			
			
			
			
			
			
	
				
				
				
				
				
				
				
				
				
				
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			

		
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
PUBLISHING YOUR MODULE LOCALLY
	PUT IN YOUR OWN AUTHOR INFORMATION
		https://gist.github.com/coolaj86/1318304
		If you havent already set your NPM author info, now you should:
		npm set init.author.name "Your Name"
		npm set init.author.email "you@example.com"
		npm set init.author.url "http://yourblog.com"
		npm adduser
	CREATE MODULE WITH NPM 
		BUILD 'REQUIRE' FILE
		NPM INIT
		...ANSWER QUESTIONS
		======> PUT IN PACKAGES.JSON  FILE + NODE_MODULES FOLDER
		
	
PUBLISHING YOUR MODULES TO NPM ONLINE
	
	UNIQUE NAMING - TAKE CARE!!!
	
	SCOPES 
	
		BUT - SOLUTION!!!  CAN PRIVATELY NAME SOME MODULES UNDER YOUR OWN 
		NPM USERNAME WHICH ACTS AS A PRIVATE NAMESPACE FOR MODULES THAT YOU MIGHT
		NOT WANT NECESSARILY TO BE USED AS PART OF THE WIDER COMMUNITY, OR USE
		THEM WHILE UNDER TEST BEFORE RELEASING AS PROPER MODULES UNTO THE WIDER 
		COMMUNITY 
		
		https://docs.npmjs.com/getting-started/scoped-packages
		http://blog.npmjs.org/post/116936804365/solving-npms-hard-problem-naming-packages
	
		@username/project-name
		
		ADD TO PACKAGE.JSON THEN RUN npm publish --access=public
		
		
	
	https://quickleft.com/blog/creating-and-publishing-a-node-js-module/
	
	NEED REAL ACCOUNT ON NPM WEBSITE!
	
	PACKAGE WILL REALLY BE UPLOADED TO THAT WEBSITE!
	https://docs.npmjs.com/getting-started/what-is-npm







 
	
	
 
 









## Node Random Notes

Web socket simple setup with express in a few lines

https://hackernoon.com/nodejs-web-socket-example-tutorial-send-message-connect-express-set-up-easy-step-30347a2c5535
Node back end api tutorial

https://code.tutsplus.com/tutorials/build-a-todo-api-with-node-express-and-mongodb--cms-29343

Node Exports

Exporting with exports.functionName=function(){}
Square.js
exports.area = function(width) { return width * width; };
exports.perimeter = function(width) { return 4 * width; };
var square = require('./square');      // Require square  (can put square.js)
console.log('The area of a square with a width of 4 is ' + square.area(4));
   use method or function from within square
Exporting with module.exports= {  name:function(){}   }
Can also write same thing as
module.exports = {
  area: function(width) {
    return width * width;
  },
       
  perimeter: function(width) {
    return 4 * width;
  }
};
Express Route handler

App.get('/',function(req,res){})     //  HTTP GET request to / root : define hander callback function which takes req and res 
Res.send()
Res.json()
Res.sendFile()
   Note : callbacks : first argument is always request, and second is always the response
Express Application

App.get, post, put, delete, connect
App.all()
App.all()    responds to ANY HTTP METHOD : LIKE A 'CATCHALL' METHOD  - use to load middleware for a particular path for all possible incoming HTTP method types
    app.all('/secret',function(req,res,next){
     // do stuff
          Next();
});
Adding a route with multiple sub-routes inside it

Can create a parentRoute.js file
Var express=require('express');
Var router=express.Router();
Router.get('/',function(){})
Router.get('/childPath',function(){})
Module.exports = router;
    This exports the router module and makes available two get methods
Var parentRoute = require('./parentRoute.js');
App.use('/parentRoute',parentRoute);
Express Logging

Var express=require('express');
Var app=express();
Var logger=require('morgan')';
App.use(logger('dev');                         // use development logger
Middleware

 middleware is added with 
App.use()           // route is optional
App.add()         // route is mandatory
Create middleware
Var express=require('express')
Var app=express();
Var middleware = function(req,res,next){
   // do stuff
   next();                  // next middleware
};
Use middleware
App.use(middleware);        // all routes, all GET/POST etc
App.use('/route1', function(){})              // route1, all verbs
App.get('/route1',function(){})             // route1, HTTP GET
HTTP Request matching
App.use()              all HTTP
App.get()              GET requests
App.post()           POST requests
Express Static

Static serves PUBLIC documents especially CSS and Javascript files
App.use(express.static('public'))            // ALL HTTP REQUESTS, ROUTE IS PUBLIC FOLDER
Now files are accessed and reference relative to the public folder
http://localhost:3000/parent/child/file.jpg
App.use(express.static('public1');
App.use(express.static('public2');
Express Static : Virtual path
Can also mount another path
App.use('/media',express.static('public'))
Now http://localhost:3000/media/parent/chlid/file.jpg   will get file from /public/parent/child/file.jpg path
Express errors
   error handling middleware must come after any other app.use etc
Rendering views and using a templating engine

Var express = require('express')
Var app=express();
App.set('views',path.join(__dirname,'views'))                    // will use template called 'views'
App.set('view engine','ejs');
App.get('field')   returns value
App.set('field','value')
<< Create template file with name index.ejs >>
Index.ejs
  << create 'title' and 'message'  objects >>
Use template now at runtime
  App.get('/',function(req,res){
`res.render('index',{title:'…',message:'…'})
});
Lab - URL Query String

PAGE
	FORM WITH METHOD=GET
	
	SEND DATA IN THE URL QUERY STRING LIKE 'DATETIME=XXX'
	
	EXTRACT THE DATETIME AND WRITE IT TO A TEXT FILE.
	
	THEN READ BACK FROM THE TEXT FILE THAT FRESHLY WRITTEN DATE AND TIME AND DISPLAY IT TO THE USER ON THE WEB PAGE.
Lab - Post
	
PAGE
	REPEAT THE ABOVE WITH METHOD=POST
	
	DATE WILL NOT BE SENT IN THE URL QUERY STRING BUT IN THE BODY SO WILL HAVE TO USE BODY PARSER TO EXTRACT THE POST DATA AND WRITE IT TO TEXT FILE.

PAGE
	DOUBLE THE NUMBER
	
	READ A NUMBER (1) FROM A TEXT FILE AND DISPLAY IT ON A PAGE
	
	ON SUBMITTING THE FORM BUTTON READ THE VALUE OF THE NUMBER ON THE SCREEN AND DOUBLE IT.  SEND THIS NEW NUMBER AS PART OF THE POST SUBMISSION DATA TO THE SERVER.  THE SERVER PARSES THE POST DATA TO READ THE NUMBER AND OVERWRITE THE PREVIOUS NUMBER IN THE TEXT FILE.  
	
	FINALLY FRESHLY READ THE TEXT FILE NUMBER AND SEND IT TO THE USER AS PART OF THE PAGE RESPONSE, TO BE DISPLAYED.
	
	USER WILL SEE ON THEIR SCREEN
	
			1
				==> SUBMIT , WILL 'POST' 2 TO TEXT FILE AND THEN READ THAT VALUE AND DISPLAY '2' BACK TO THE USER
				
			2   ==> SUBMIT 2, DOUBLES TO 4 WHICH IS POSTED TO FILE, READ FILE AND SEND BACK TO USER AS VALUE 4
			
			4 ==> 8 ETC
			
Lab - Streaming

SUBMIT A FORM BUTTON, ON THE SERVER THE CONTENTS OF FILE 1.TXT ARE 'STREAMED' AND WRITTEN AS A STREAM INTO FILE 2.TXT.
	
	
Lab - Post with Async
	
POST REQUEST WITH SIMPLE FORM AND ONE BUTTON
  APPEND DATA TO FILE WITH SYNCHRONOUS WRITE.  TO PROVE YOU ARE WRITING DATA IT WOULD BE HELPFUL TO APPEND SOMETHING REAL TIME LIKE A TIME AND DATE STAMP.  THEN RE-READ THE PAGE BACK AND DISPLAY IT TO THE USER.
USING THE 'ASYNC' METHOD TO PAUSE AND MAKE SURE THE WRITE HAS FINISHED BEFORE THE READ TAKES PLACE IE DO THEM IN SERIAL.

Lab - Exception Handling

DOMAIN.ON('ERROR') : CREATE A DOMAIN AND RUN A FUNCTION IN IT.  INSIDE THE FUNCTION THROW AN UNHANDLED ERROR (DIVIDE INTEGER BY ZERO IF YOU ARE NOT SURE) AND HAVE THE DOMAIN CATCH THE EXCEPTION AND HANDLE THE EXCEPTION GRACEFULLY WITH A CONSOLE.LOG
Lab - Streaming

	Create a READ STREAM  
	
			Var readStream = fs.createReadStream(file)
			
	CREATE A WRITE STREAM
	
			Var writeStream = fs.createWriteStream(file)
			
	PIPE READ STREAM TO EITHER
	
			STDOUT    ==> IN WINDOWS THIS GOES TO CONSOLE.LOG ON THE SCREEN
			
			OR
			
			WRITESTREAM TO A FILES
FS.STATS 
	EXAMPLE : NODE_PIPE_04.JS
	
	
EXPRESS PASSPORT
	Express App With Authentication http://mherman.org/blog/2013/11/11/user-authentication-with-passport-dot-js/#.Vz7AxpErJQI
	
	Passport  http://passportjs.org/  https://www.npmjs.com/package/passport


MONGOOSE
TDD VS BDD TEST DRIVEN DEVELOPMENT VS BEHAVIOUR DRIVEN DEVELOPMENT
Process.addListener
Process.argv,
Process.pid, 
Process.eventemitter 
Telnet localhost 3000
Event loop : when Node starts the 'Event Loop' starts along with it automatically.  Keeps running until you tell it to stop eg server.listen.  Advantage : variable keeps values between visits of eg web browser
		
		
WEBSOCKET : VAR SOCKET = NEW WEBSOCKET("WSS://CHATSERVICE"); SOCKET.ONMESSAGE = FUNCTION(EVENT) { // CODE };




