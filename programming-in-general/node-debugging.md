
	
	
	
	
Node Debugging

	
THERE ARE SEVERAL WAYS TO RUN NODE DEBUGGING
    
Nodemon

		RELOAD YOUR NODE SERVER AFTER SOURCE FILE CHANGE 
		
		https://www.npmjs.com/package/nodemon
		
		http://nodemon.io/
		npm install nodemon 
		
		Once installed, can run (express) apps using
			1) nodemon  by itself
			2) nodemon myapp.js
			3) nodmeon myapp
		
			WILL WATCH FOR CHANGE ON MAIN FILE BUT ALSO ALL SUB-FILES 
		
		
			
						
    
Chrome LiveReload : AUTO-REFRESH BROWSER ON SOURCE FILE CHANGES

		JUST A TIMESAVER!!!
		
		BROWSER WILL REFRESH AFTER A FEW SECONDS EVERY TIME A 'WATCHED' FOLDER  CHANGE
		
		
			http://livereload.com/ 
			
			WITH CHROME EXTENSION 
			https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en
			
			
			
			
		OTHER ALTERNATIVES TO LIVERELOAD
							
			SYNC BROWSER AFTER CHANGE  	
				https://www.browsersync.io/
				npm install -g browser-sync
				browser-sync start --server --files "css/*.css"
			LIVE JS : REFRESH Browser	
					
					http://livejs.com/
	
	BUILT IN NODE DEBUGGER
	
		JUST RUN NODE DEBUG MYAPP WHICH WILL PAUSE ON ANY DEBUGGER BREAKPOINTS WHICH YOU HAVE MANUALLY SET IN THE CODE
		1. node debug node_debug_02.js
				GOING TO http://localhost:5858 shows basic debugging information; not
						very helpful in this instance
		2. CODE PAUSES AT LINE 1
		3. c to continue the script  (lower case c for continue)
		4. CODE WILL PAUSE AT LINE 2 WHERE debugger statement is placed
		5. Press c again
		6. Code will now finish
		See node_debug_03.js
		  
		  
		NOTE YOU CAN GET THE PROGRAM TO IGNORE ALL DEBUGGING BY JUST RUNNING
		  		node node_debug_03.js
		BREAKPOINTS
			SET WITH debugger; command or using the port 5858 debugger			  
		  
		When code breaks can then use these commands 
			c = CONTINUE 
			
			n = NEXT = STEP 
			
			s = STEP IN 
			
			o = STEP OUT  
			
			REPL  open command line to inspect values  ((note : in Windows you cannot recover back to the application - you would have to restart application))
			
			
			pause - Pause running code (like pause button in Developer Tools)
			
			setBreakpoint(), sb() - Set breakpoint on current line
			
				sb(5);  SET BREAKPOINT ON LINE 5 
			clearBreakpoint, cb(...) - Clear breakpoint
			
			watch(x) - Add x to watch list
		
	DEBUGGING WITH NODE-INSPECTOR AND NODE-DEBUG
		1. NPM INSTALL -G NODE-DEBUG 
			THIS WILL INSTALL     NPM INSTALL -G NODE-INSPECTOR
		2. node-debug myapp.js
		3. Wait about 20 seconds for the page http://localhost:8080/debug?port=5858 to open up and refresh the debug data.
		You will be able to set breakpoints etc and view all the output from all of the variables.
			node-debug node_debug_05_http_server.js ***
			
			
			
			
			
			
			
			
		
		
		
		
	
DEBUGGING WITH CONSOLE.LOG
	See  https://developer.mozilla.org/en-US/docs/Web/API/Console/info
	
	console.error('error message);
	console.warn('warning message');  
	console.info('x')  displayed with blue 'i' info button
	console.assert(assertion) => Log if assertion is false  eg console.assert(false,'hi');
	console.group('message')  indents further logs until groupEnd
	console.groupEnd() 
	console.groupCollapsed  same as group but content is hidden unless clicked 
	console.count()
	console.count('label')
	console.table(["a","b","c"])
	console.time('ID');  finished by console.timeEnd('ID');
	Equivalent of string.format
	
		console.log("x is %d and y is %d", 1,2);
	
	
	
	
	
	
	
DEBUGGING WITH COLOUR 
	Get colours in your node output console for easier spotting of debugging 
	
	https://www.npmjs.com/package/colors
	npm install colors 
	
	
		see node_00_HelloWorld.js
		
		
		var util=require("util");
		var colors = require("colors");
		var x = 10;
		console.log(colors.green(x));
		debugger;
		setTimeout(function(){
			console.log(colors.red("Hello World"));
			console.log(colors.inverse("WOW"));
			console.log(colors.rainbow("WOW"));
		},2000);
	
	
DEBUG : EXTRA NOTES
DEBUGGING WITH NODE-INSPECTOR 
	https://docs.nodejitsu.com/articles/getting-started/how-to-debug-nodejs-applications
	
	https://spin.atomicobject.com/2015/09/25/debug-node-js/
	
	http://jlunaquiroga.blogspot.co.uk/2014/06/debug-in-nodejs.html
	
	http://www.100percentjs.com/best-way-debug-node-js/
	INSTALL 
	
		npm install node-inspector -g 
		
	START
	
		Open a command prompt and type
		
			node-inspector
	
	VIEW IN BROWSER
	
		Visit http://127.0.0.1:8080/debug?port=5858 to start debugging.
		Or http://localhost:8080/?port=5858 will work also
	THEN RUN YOUR APPLICATION WITH 
		
	With node inspector running in other terminal you have to start in debug mode your application with the following command:
	nodemon --debug node_debug_05_http_server.js
			or --debug-brk
	
	debugger listening on port 5858
			CAN NOW DEBUG AT http://127.0.0.1:8080/debug?port=5858 
			
			
			
	
	
WEBSTORM BUILT IN DEBUGGING
	FIND NODE FILE AND EITHER RUN OR RUN WITH DEBUG
	https://www.jetbrains.com/webstorm/help/running-and-debugging-node-js.html
DEBUGGING WITH DEBUG MODULE
	see requiring the debug module in express_04 application which can be run using nodemon express in that folder
	
	https://www.npmjs.com/package/debug
		
	INSTALL
	
		NPM INSTALL DEBUG 
		
	REQUIRE
	
		var debug = require('debug')('http')
		
	OUTPUT
		
		debug('MY MESSAGE HERE', my-variable-here);
		
	RUN APPLICATION
	
		set DEBUG=* & node <myapp.js> 
		set DEBUG=* & npm start 
		set DEBUG=express:* & npm start 
		set DEBUG=express:router & npm start
		
	OUTPUT WILL BE 
		
		http MY MESSAGE HERE <value of my-variable-here>
							
							
		
		
		
DEBUGGING WITH DEVTOOL
	NPM INSTALL -G DEVTOOL
	
	https://mattdesl.svbtle.com/debugging-nodejs-in-chrome-devtools
	
	
	
EXPRESS DEBUGGING

DEBUG logging is TURNED OFF BY DEFAULT
DEBUG logging can be TURNED ON BY THE FOLLOWING:
On MacOS or Linux, run the app with this command:
	DEBUG=myapp:* npm start
			
On Windows, use this command:
	set DEBUG=myapp:* & npm start
	SET DEBUG=* & node node_55_express.js
RUN FULL DEBUGGING
	
	SET DEBUG=EXPRESS:* & NODEMON APP_NAME
		
RUN MINIMAL DEBUGGING
	
	SET DEBUG=APP_NAME:* & NODEMON APP_NAME
		
RUN WITH NODEMON
	
	NODEMON --DEBUG APP_NAME
		
		Or
		
	NODEMON DEBUG APP_NAME   ** RUNS IT PROPERLY
	
http://expressjs.com/en/guide/debugging.html
	
DEBUGGING WITH NODE-INSPECTOR

	NODE-DEBUG NODEMON APP_NAME (SEE BELOW)
ONCE RUNNING, THE DEBUGGER WILL NOW OUTPUT COMMANDS SET WITH THE 'DEBUG' KEYWORD 
	 var debug = require('debug')('app_name:server');
	
	 debug ('output this as text');
	
DEBUGGING TIME ELAPSED
	CAN BE USEFUL TO ADD A TIME ELAPSED FUNCTION TO YOUR DEBUGGING
	
	DO THIS BY ADDING 
	"+NNNms" 
	
	From <https://www.npmjs.com/package/debug> 
	
	
DEBUGGING WITH NODE-DEBUG / NODE-INSPECTOR
NPM INSTALL -G NODE-DEBUG
NPM INSTALL -G NODE-INSPECTOR
https://www.npmjs.com/package/node-debug
THEN RUN APPLICATION WITH 
	NODE-DEBUG .\bin\www 
	
	NODE-DEBUG NODEMON APP_NAME
	
	TO OPEN A PAUSED COPY OF YOUR APPLICATION READY TO RUN, PAUSED BEFORE LINE 1 HAS STARTED READY TO PRESS 'CONTINUE' TO CONTINUE THE APP, AT HTTP://LOCALHOST:5858
	
	
NODE INSPECTOR
INSTALL
	NPM INSTALL -G NODE-INSPECTOR
	
COMMAND LINE
	NODE-INSPECTOR
	
BROWSER
	
	http://localhost:8080/debug?port=5858
	
DEBUGGING
INSTALL NODE INSPECTOR
RUN NODE INSPECTOR
OPEN BROWSER AT PORT 5858
RUN YOUR APP
	1) NODE APP.JS    
	2) NODE --DEBUG APP.JS     this starts the site but not the node inspector
	3) NODE DEBUG APP.JS
	4) NODEMON DEBUG .\bin\www    THIS TRIGGERS IT BUT PROVIDES A LOT OF EXTRA CODE RUNNING IN THE DEBUGGER
	
DEBUGGING
INSTALL NODE INSPECTOR
RUN NODEMON --DEBUG .\BIN\WWW
RUN NODE-INSPECTOR
VISIT 5858 DEBUG SITE
DEBUGGING WITHOUT NODEMON
RUN NODEMON DEBUG .\BIN\WWW
STEP THROUGH LINES IN COMMAND PROMPT ETC 
REPL TO VIEW VARIABLES
RUNNING EXPRESS
NODEMON EXPRESS WILL RUN YOUR APP IF YOU ARE IN THE RIGHT FOLDER
NODEMON .\BIN\WWW ALSO WILL RUN YOUR APP
		
DEBUGGING SUMMARY
Console.log WILL ALWAYS LOG
Require('debug')  and debug('message')  WILL ONLY LOG WHEN  --debug used
NODE-INSPECTOR CAN BE USED TO DEBUG AS IN CHROME WHEN EG WEB APP RUNS
CAN USE DEBUG INSTEAD OF --DEBUG
TOOLS TO AUTO-START NODE AFTER CRASH - forever and pm2

		









