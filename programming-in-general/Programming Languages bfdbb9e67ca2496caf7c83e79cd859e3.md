# Programming Languages

# Programming Random Terms

### 

# Programming Glossary

### Imperative Programming

```xml
Answers 'how to do' this problem with workflow control 

Imperative programming languages (C, C++, Java, Python …
```



# Programming Languages

# Go

Buy this book : 'The Go Programming Language' by Alan Donovan

# Python

Python is now above Java as world's second most-loved programming language

Python for Everybody - Full Course with Dr. Chuck (Charles Severance)

# MySQL

```xml
### Alter table
ALTER TABLE tbl_personnel MODIFY COLUMN ID INT AUTO_INCREMENT PRIMARY KEY
```

# PHP

```xml
### query mysql
require('C:\xampp\htdocs\log\assets\php\connect-db-mysqli.php'); 

$q="UPDATE tasks SET redgreen='$color' WHERE taskid=$taskid"; 
$q="SELECT date, redgreen FROM tasks WHERE taskid=$taskid";

$result = mysqli_query($q) or die (mysql_error()); 
$row = mysqli_fetch_array($result);
```

# Rust

Rust is the most-loved programming language in the world according to 2019 Stack Overflow survey

# Mobile App Development

Most popular cross-platform native apps are Flutter or React Native

## Flutter by Google on Dart

[https://flutter.dev/](https://flutter.dev/)

## React Native

## [Ionic.io](http://ionic.io) - build quick cross-platform app

# Designing An App

Use paper!

Figma [https://www.figma.com](https://www.figma.com/pricing/)  can be used to visually design an app

# Imaging And Graphics

Image editing to PNG [https://pixlr.com/x/](https://pixlr.com/x/)

Stock photos at [https://www.pexels.com/](https://www.pexels.com/) 





	

 
 
 
 
 
 



# Node

```jsx
# Node And The MEAN stack 

# Node
	

<pre>

What is Node.js?

Create

	Website
	
	Chat App
	
	Game
	
	Good for REAL TIME
	
	Node is FAST AND EFFICIENT WHEN REAL TIME IS IMPORTANT
	
	
Standalone JS virtual machine (V8)

	FIRST EVER PRESENTATION ON NODE BY RYAN DAHL THE CREATOR
	
		https://www.youtube.com/watch?v=ztspvPYybIY
		
	Can run straightforward Javascript on your machine as a normal application 
	
	Engine is written by Google for Chrome and is called V8 engine 
	
		Source at https://chromium.googlesource.com/v8/v8.git
	
	Open source 
	V8 is Google's open source JavaScript engine.
	
	V8 implements ECMAScript as specified in ECMA-262.
	V8 is written in C++ and is used in Google Chrome, the open source browser from Google.
	V8 can run standalone, or can be embedded into any C++ application.
	
	
	
	
	
	
Node can be used to create local applications ie using general programming 
	Can run straightforward Javascript on your machine as a normal application
	At it's core, Node.js is a stripped-down, highly customizable server engine -- a proto-server, if you will -- because out of the box it doesn't do anything until you set it up. 
	
	This proto-server processes in a loop, ready to accept and respond to requests. 
	
	Any of those requests themselves may initiate other requests to some other part of the system, such as to read a file off of disk or to send a signal to spin a motor on a robot arm. 
	
	That loop, known as the event loop, is the "runtime" part.
	
	
	
	
	
	
	
MOST BASIC : RUNS STANDALONE JAVASCRIPT PROGRAMS
NODE is written in C 
NODE allows you to write a JAVASCRIPT SERVER without learning C 
REASONS TO USE NODE
	STANDARD WEB SERVER (NO NODE)
	
		STANDARD WEB SERVER CAN GET BY WITHOUT NODE.  
		CAN USE EG FORMS WITH POST REQUESTS TO HANDLE DATA LINKED TO PHP
		
		
		
		
		
PROBLEMS WITH AJAX AND JSON ENCODING TO AND FROM PHP 

	THREADS : EACH PHP REQUEST CAN REOPEN CONNECTION TO DATABASE.  
	JSON_ENCODE(php array)
	
	EVAL(JSON)  
	
	Solution : NODE is pure Javascript end-to-end without a need for a translator 
		
	ELEGANT TO HAVE JAVASCRIPT SEND AND RECEIVE DATA 
	
	
	
	ISOMORPHIC : SAME CODE RUNNING ON CLIENT AND SERVER
	
	
	
Purpose of NODE
	NODE is often called EVENTED JAVASCRIPT OR EVENTED I/O
		
	PROBLEM : MULTI-THREADED NATURE OF AJAX REQUESTS 
			NEW PROCESS
			
			NEW THREAD
	NODE DOESN'T HAVE THREADS COMPETING
		
	UNUSED NODE RESPONDERS ARE SLEEPING IE PARKED IN RAM BUT NOT CONSUMING CPU RESOURCES
	
	
	
	
STRENGTHS OF NODE 
	NODE IS BEST SUITED TO MICRO-EVENTS IE EVENTED I/O IE QUICK COMMUNICATION 
	
	NODE USES EVENT-LOOP MODEL ISSUES ONE EVENT WHEN PROCESSING OF CALLBACK FUNCTION HAS FINISHED (READY TO START NEXT REQUEST) AND USES ONLY ONE THREAD TO HANDLE MULTIPLE REQUESTS!!!  NODEJS.ORG/ABOUT  TO READ MORE
	
	KEY POINT : NODE USES ONLY ONE THREAD TO HANDLE ALL APPLICATION REQUESTS !!! 
	
	Node is SCALABLE 
	- AVOIDS CREATING NEW THREADS SO QUICK RESPONSE 
		
		REQUEST
			
				CPU CYCLES 1/2/3/4
				
				PARKS REQUEST (WAIT CALLBACK)
				
		NEXT REQUEST
		
	NON-BLOCKING - WAIT FOR CALLBACK AND GET ON WITH OTHER TASKS WHILE WATING
			
		
	Event-driven Programming.
		WAIT FOR CALLBACK 
		
			CALLCACK ARRIVES : CALL FUNCTION REQUESTED WITH PARAMETERS INCLUDED IN THE CALLBACK INCLUDING ERRORS
			
		STREAMS ETC : CAN INCLUDE THEIR OWN I/O EVENTS EG ON('DATA') OR ON ('FINISH') WHICH SIGNIFIES THERE IS MORE DATA TO SEND OR DATA HAS FINISHED SENDING
	
Event Loop.
	Always running
	
	Illustration of a checkout cashier taking orders (calling functions) then serving the next customers and taking their orders also.  When the order is ready the cashier will deliver the order (callback) to the calling function with any paramters, so the callback function can execute also now.
	
	
	
		
	
PRACTICAL APPLICATIONS
	DATA STREAMING OF LIVE FILES EG LIVE VIDEO FEED STREAMING.  PROCESS DATA AS IT ARRIVES
	
	Sending Data : Node uses JSON 
		
				
		JSON has created NOSQL with Mongo and Couch
		
	
	
Node Package Manager
	Library of modules to use with Node 
	The Node Package Manager is included with Node.js and has grown to a repository of nearly 50,000 packages
	
	Code is shared under MIT licence which is not restrictive 
	
	
	
	
	
Minimalist Modules
	Anyone can create a module (entry barrier is low)
	
	Most modules perform a small, minimalist function 
	
		PACKAGES ARE COMBINATIONS OF MODULES : LIST IN PACKAGES.JSON FILE FOR COMPILING YOUR PROJECT 
		
		
		
	
	
REASONS TO AVOID NODE  
		100% CPU TASKS : WILL BLOCK THE SINGLE THREAD SO NO NEW REQUESTS WILL BE ACCEPTED 
		
		SINGLE THREAD SO SINGLE CORE ONLY.  IF YOU WANT MULTI CORE YOU CAN USE MULTIPLE NODE THREADS, OR USE CLUSTERING WHICH CREATES CHILD PROCESSES.
		
		
		

		
Node Documentation

	
Node documentation 
	
		https://nodejs.org/api/
		
	Getting Started (possibly out of date by now)
	
		http://blog.simonwillison.net/post/57956855516/node	
	Good all-round reference for basics
		https://docs.nodejitsu.com/articles/advanced/buffers/how-to-use-buffers
	
	NPM
	
		https://www.npmjs.com/
		
		https://docs.npmjs.com/
		
	
	ALL NODE RESOURCES ON INTERNET!
	
		http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js
		
		
		
		
Node Video Tutorials

		
13 minutes   	https://www.youtube.com/watch?v=pU9Q6oiQNd0
		
http://gaurassociates.com/#/nodejs/10
	
JSONP
	https://www.youtube.com/watch?v=GcHWqyzSCc8
NODE University
    http://node.university/courses
Youtube free courses
	Node Intro
    https://www.youtube.com/watch?v=U8XF6AFGqlc - 24 minutes - total beginners - Node from scratch - Traversy Media
	Node Express
    https://www.youtube.com/watch?v=gnsO8-xJ8rs 1 hour 24 minutes - beginner from scratch - Traversy Media
		
 
 
 
 
 
 
NODE LABS

Install Node
Check the version of Node and NPM
Add NODE to your PATH
REPL : TYPE 'NODE' AND ENTER SOME JAVASCRIPT SEPARATED BY SEMICOLONS TO EXECUTE A TRIVIAL APP.
CONSOLE LOG HELLO WORLD
STDOUT HELLO WORLD
DEBUG : RUN NODE DEBUG <MYFILE.JS> AND OBSERVE OUTPUT.  TYPE REPL TO GET TO A COMMAND PROMPT TO VIEW AND SET VARIABLE VALUES.
NODE-INSPECTOR : INSTALL NODE INSPECTOR GLOBALLY WITH NPM INSTALL NODE-INSPECTOR -G 
NODE-INSPECTOR : RUN AN APP WITH NODE-DEBUG <MYAPP.JS>.   SET BREAKPOINTS AND RUN THE APP OBSERVING BREAKPOINTS IN CHROME.  SET VALUES TO WATCH AS WELL.
STDIN ONE CHARACTER AND CONSOLE.LOG('YOU ENTERED THE CHARACTER' + CHARACTER)
READLINE : READ ONE LINE OF TEXT AND OUTPUT
PROMPT : PROMPT FOR A VALUE AND CONSOLE.LOG THE VALUE ENTERED
CWD : DISPLAY THE CURRENT WORKING DIRECTORY FOR YOUR NODE APPLICATION
ENV.PATH : DIPLAY  THE CONTENTS OF YOUR PROCESS.ENV.PATH ARRAY
PATH.SEP MODULE : RUN A NODE APPLICATION AND STDOUT PATH.SEP (SEPARATOR CHARACTER)
PATH.DIRNAME : DISPLAY THE DIRECTORY NAME OF A FILE
PATH.BASENAME : DISPLAY THE FILE NAME OF A FILE
PATH.EXTNAME : DISPLAY THE EXTENSION OF A FILE
ARGV : START A NODE APPLICATION WITH ARGUMENTS AND DISPLAY THOSE ARGUMENTS USING THE ARGV ARRAY
OPTIMIST OR YARGS : START A NODE APPLICATION WITH A REQUIRED NAMED ARGUMENT AND CONSOLE.LOG OUT THE VALUE OF THAT ARGUMENT
OPTIMIST : START A NODE APPLICATION AND DETECT IF AN ARGUMENT IS PRESENT (TRUE) OR ABSENT (FALSE).  JUST USE ONE LETTER TO REPRESENT THE ARGUMENT.  EG NODE MYAPP.JS S WILL DETECT THAT S=TRUE
TASKKILL : CREATE A PROCESS EG RUN WORDPAD.  TASKLIST TO FIND PROCESS ID.  TASKKILL TO KILL THAT PROCESS FORCEFULLY.  <<Linux run TOP to get processes and KILL to kill that process>>
TASKKILL : CREATE A PROCESS EG RUN WORDPAD.  TASKLIST TO FIND PROCESS ID.  USE NODE TO TERMINATE THE APPLICATION FORCEFULLY.  <<Linux run TOP to get processes and KILL to kill that process>>
CREATE A MODULE TEST1.JS
EXPORT A FIELD FROM THIS MODULE FIELD1.JS.  GIVE THE FIELD A VALUE.
REQUIRE MODULE TEST1.JS FROM TEST2.JS.  CONSOLE.LOG THE VALUE SET ABOVE.  CHANGE THE VALUE AND CONSOLE.LOG THE NEW VALUE ALSO.
SHARED VALUE : CREATE TEST3.JS AND READ AND MODIFY THE SAME VALUE. 
READ FILE SYNCHRONOUSLY AND DISPLAY CONTENTS
READ FILE ASYNCHRONOUSLY AND DISPLAY CONTENTS
READ FILE WITH STREAMING AND DISPLAY CONTENTS
FS.STAT : CONSOLE.LOG FS.STAT DETAILS ON A FILE
FS.ACCESS : CHECK WE HAVE ACCESS TO A FILE USING FS.ACCESS.  LOG AN ERROR.
FS.ACCESS : CHECK WE HAVE ACCESS TO A FILE USING FS.ACCESS.  LOG SUCCESS.
WRITE DATA TO A FILE SYNCHRONOUSLY THEN READ IT BACK AND DISPLAY THE CONTENTS
WRITE DATA ASYNCHRONOUSLY TO A FILE.  IN THE CALLBACK IE WHEN THE WRITE IS COMPLETE, READ THE FILE CONTENTS BACK ASYNCHRONOUSLY.  WHEN THE READ IS COMPLETE, IN THE CALLBACK DISPLAY THE FILE CONTENTS USING CONSOLE.LOG TO THE SCREEN.
WRITE DATA TO  A FILE USING FILE STREAMING.  IN THE CALLBACK WHEN THE WRITE IS COMPLETE THEN READ THE DATA BACK USING STREAMING.  IN THE CALLBACK, ONCE THE READ IS COMPLETE THEN DISPLAY THE CONTENTS USING CONSOLE.LOG.
READ JSON DATA FROM A FILE AND DISPLAY RAW JSON DATA ON THE SCREEN
READ JSON DATA FROM A FILE AND EXTRACT A KEY VALUE PAIR FROM THE DATA AND DISPLAY THE KEY AND THE VALUE ON THE SCREEN
WRITE THE CURRENT DATE AND TIME STAMP TO A TEXT FILE, THEN READ THE CONTENTS BACK AND DISPLAY IT ON THE SCREEN.
APPEND THE CURRENT DATE AND TIME (USE CREATEWRITESTREAM WITH {FLAGS:'A'}) TO A TEXT FILE THEN READ THE ENTIRE TEXT FILE BACK AND DISPLAY IT ON THE SCREEN.
ASYNC : CAN WE READ TWO FILES ASYNCHRONOUSLY IN PARALLEL. LOG EACH READ INDIVIDUALLY ONCE COMPLETE.   ONLY ONCE BOTH FILES HAVE BEEN READ LOG A SUCCESS.  
HTTP SERVER : DISPLAY HELLO WORLD
HTTP SERVER : READ JSON FROM A TEXT FILE SYNCHRONOUSLY AND DISPLAY IT ON A WEB PAGE
HTTP SERVER : READ JSON ASYNCHRONOUSLY AND DISPLAY IT ON A WEB PAGE.  HOWEVER THE FILE IS NOT TO BE FOUND SO INSTEAD OF DISPLAYING DATA, CATCH THE ERROR IN THE ERROR HANDLER AND DISPLAY AN APPROPRIATE 'FILE NOT FOUND' MESSAGE BACK ON THE USER'S WEB PAGE
HTTP SERVER : READ DATA FROM A FILE ASYNCHRONOUSLY AND DISPLAY IT ON A PAGE
	
HTTP SERVER : READ DATA FROM A FILE USING STREAMING AND DISPLAY IT ON THE USER PAGE
	
HTTP SERVER : READ DATA FROM A FILE USING STREAMING AND PIPE THE RESPONSE TO THE USER
BUFFER : CREATE A BUFFER OF 8 BYTES LONG
BUFFER : CREATE A BUFFER AND FILL IT WITH ZEROS.  READ THE CONTENTS OF A BUFFER AND DISPLAY WITH STDOUT
BUFFER : CREATE A BUFFER AND WRITE CONTENT TO IT.  READ AND DISPLAY THE BUFFER.
HTTP SERVER : SEND RAW HTML TO THE USER WHICH DISPLAYS A FORM WITH ONE BUTTON.  WHEN THE BUTTON IS CLICKED CONSOLE.LOG 'A GET REQUEST HAS BEEN RECEIVED'
HTTP SERVER : SEND RAW HTML TO THE USER WHICH DISPLAYS A FORM WITH ONE BUTTON.  WHEN THE BUTTON IS CLICKED CONSOLE.LOG 'A POST REQUEST HAS BEEN RECEIVED'
HTTP SERVER : SEND RAW HTML TO THE USER WHICH DISPLAYS A FORM WITH ONE FIELD EG ID AND ONE BUTTON. WHEN THE FORM IS SUBMITTED EXTRACT THE ID FROM THE GET REQUEST AND CONSOLE.LOG 'GET REQUEST RECEIVED : ID HAS A VALUE OF XX'
HTTP SERVER : STREAM A HTML PAGE TO THE USER WHICH DOES THE SAME.
HTTP SERVER : SEND A FORM TO THE USER WITH ONE FIELD AND ONE BUTTON.  WHEN THE FORM IS SUBMITTED, SUBMIT IT USING THE 'METHOD=POST' METHOD.  AT THE SERVER, CONSOLE.LOG 'POST REQUEST RECEIVED : ID HAS A VALUE XX'
HTTP SERVER : SEND A FORM TO THE USER.  WHEN USER SUBMITS THE FORM, APPEND A TIMESTAMP TO A TEXT FILE.  
NODE PROJECT : CREATE A NODE PROJECT FOLDER AND RUN NPM INIT TO GENERATE A PACKAGE.JSON FOLDER.  
MEMWATCH : CAN YOU GENERATE AN EVENT WHICH WILL, OVER A PERIOD OF 20 SECONDS OR MORE, INCREASE GRADUALLY THE MEMORY USAGE OF YOUR APPLICATION?  CAN YOU LOG THE MEMORY HEAP SIZE AS YOU GO, SAY LOG SOMETHING EACH SECOND?  CAN YOU GET A LEAK TO TRIGGER WHICH REQUIRES CONSECUTIVE GROWTH OVER 20 SECONDS?
FOREVER : START 3 NODE APPLICATIONS WITH FOREVER THEN STOP THEM AGAIN.  WHAT HAPPENS IF YOU MANUALLY TASKKILL ONE OF THE APPLICATIONS - DOES FOREVER AUTOMATICALLY START IT AGAIN?
PM2 : REPEAT THE ABOVE WITH PM2
EXEC : CAN YOU CREATE A CHILD PROCESS WHICH PAUSES FOR 2 SECONDS THEN COMMUNICATES IN SOME WAY WITH THE PARENT PROCESS?  PARENT WILL LISTEN FOR CHILD.ON('CLOSE') EVENT TO BE SURE CHILD HAS TERMINATED.
SPAWN : CAN YOU SPAWN A CHILD PROCESS WHICH STDOUT SOME DATA TO THE PARENT WHICH GETS LOGGED?
EVENT EMITTER : CAN YOU CREATE A LISTENER WHICH LISTENS FOR A PARTICULAR EVENT CALLED 'SHOUT'?  CREATE AN EVENT EMITTER WHICH EMITS 'SHOUT' EVENTS EVERY SECOND AND DETECT THEM.
EVENT EMITTER : LISTEN FOR TWO EVENTS SHOUTQUIET AND SHOUTLOUD.  EMIT AND DETECT BOTH EVENTS.
EMIT.ONCE : EMIT AN EVENT TWICE BUT DETECT IT ONLY THE FIRST TIME WITH 'ONCE' METHOD
GENERATE AN EXPRESS APP WITH HOGAN TEMPLATING
GENERATE AN EXPRESS APP WITH JADE TEMPLATING
GENERATE AN EXPRESS APP WITH EJS TEMPLATING
RUN DIFF IN LINUX OR FC FILE COMPARE IN WINDOWS TO COMPARE LINE-BY-LINE TWO FILES  Diff file1 file 	FC FILE1 FILE2
POWERSHELL : GET SIZE OF FOLDER       ls -r | measure -s length
LAB 36 : STDIN
LAB 32 : READLINE
LAB 30 : ARGV
LAB 40 OPTIMIST
LAB 42 OPTIMIST TRUE/FALSE
LOOK AT 19 PATH
LAB 60 : not working
LAB 65 PROCESS.ENV.PATH
CREATE A BUFFER
DISPLAY A BUFFER 
FILL A BUFFER
READSTREAM
WRITESTREAM
READSTREAM AND PIPE INTO WRITESTREAM
READSTREAM AND PIPE INTO STDOUT AS WELL AS WRITESTREAM
DEMO MYSQL LAB
TALK ABOUT MEAN
=  FUTURE LABS =
		
FOREVER
WINSTON
MEMWATCH    
EXPRESS PASSPORT
ASYNC PARALLEL
ASYNC SERIAL
DOMAIN ON ('ERROR')
LOGGER
EXCEPTIONS
SESSION
COOKIE
PROMISE
AWAIT
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
Node documentation

NODE SITE
	
	https://nodejs.org/api/
	
NPM SITE
	
	Search within node for keyword : https://www.npmjs.com/browse/keyword/hash
		
		
		
		
		
		
		
		
		
	
		
NODE : Overall Philosophy and BIG PICTURE

Introduction 
	WHAT IS IT 
	
	WHY SHOULD WE USE IT
	
	BENEFITS 
	
	COMPETITORS
	POPULARITY
	
	SPIN-OFF TECHNOLOGIES NOW UNDER ITS UMBRELLA 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

Node and Express History

NODE 2009

NPM NODE PACKAGE MANAGER 2011

Node for Windows 2012
Node 6.11 Stable
Node 8 latest
Express 2010
Express 4 current

Intro

	
	FIRST EVER PRESENTATION ON NODE BY RYAN DAHL THE CREATOR
	
		https://www.youtube.com/watch?v=ztspvPYybIY
	
	INTENDED AS A MINI - OPERATING SYSTEM TO RUN IN BROWSER 
	
		TAKEN THIS SAME ENGINE (GOOGLE V8 OPEN SOURCE) AND RUN ON PC INSTEAD OF IN BROWSER SO CAN NOW RUN JAVASCRIPT ON PC AS APPLICATION RATHER THAN INSIDE (ORIGINAL INTENDED) BROWSER 
	
	V8 FAST BECAUSE IT COMPILES STRAIGHT TO MACHINE CODE, NO MIDDLEMAN WITH BYTE-CODE ETC.
	
	CLOCK CYCLES TO PERFORM A TASK : LATENCY OR DELAY
	
		http://blog.mixu.net/files/2011/01/io-cost.png
		
		
			L1 CACHE 3 CYCLES
			L2 CACHE 14
			RAM 250
			DISK 41 MILLION
			NETWORK 240 MILLION
	
	
	
	TAKES REQUESTS 
	
			SENDS OFF REQUEST 
			
			AWAITS CALLBACK 
			
			WHILE WAITING, SERVES OTHER REQUESTS 
			
			CALLBACK ARRIVES - EXECUTE CALLBACK FUNCTION ALSO 
			
			Picture of fast-food restaurant cashier  continually serving customers while others actually do the work of the tasks set eg preparing the meals behind the scenes and bagging up the meals ready to serve.  When the meal is 'ready' the cashier simply delivers the package to the waiting customer, again with little or no downtime (CPU time) for the cashier (process)
		
	ALWAYS RUN THE LATEST VERSION OF NODE AND JAVASCRIPT ON YOUR SERVER : DON'T HAVE TO WAIT FOR USERS TO UPDATE THEIR CLIENT!  YOU ARE THE ONE IN CONTROL OF THE JAVASCRIPT ON YOUR SERVER.
		
	USED IN
	
		GOOGLE MAPS
		GMAIL
		TWITTER
		FACEBOOK
		GITHUB
		
	USED TO READ
	
		MONGODB
		COUCHDB
		
	DANGERS
	
		SINGLE THREADED SO CAN CRASH ALL APPS 
	
			PERSISTENT STATE OF APPLICATION -> REDIS DATABASE !!!
			
			Redis is a data store well suited to handling simple data that doesn't need to be stored for long-term access, such as instant messages and game-related data. Redis stores data in RAM, logging changes to it to disk. The downside to this is that storage space is limited, but the advantage is that Redis can perform data manipulation quickly. If a Redis server crashes and the contents of RAM are lost, the disk log can be used to restore the data.
			
			AUTO REBOOT WITH FOREVER.JS 
			
			
	
	SINGLE THREAD
	
		PM2
		
		FOREVER 
		
			MONITOR ALL PROCESSES
			RECOVER NODE IF CRASH
		
			RECOVER
			
				REDIS : DATABASE IN RAM TO TRANSACT ALL LOGS SO IF RECOVER NODE THEN CAN RECOVER ALL TRANSACTIONS
	
	
	
	
First Tasks
	
	

	INSTALL NODE 
	
	INSTALL NPM 
	
	RUN 'NODE' COMMAND 
	
	RUN INTERACTIVE JAVASCRIPT 
	
		F12 IN BROWSER
		
		REPL IN NODE
	
	WRITE 'HELLO WORLD' NODE MODULE AND RUN IT 
	
	DEBUG THAT MODULE TO PAUSE IT 

	CREATE A WEB SERVER : FIRST BASIC HTTP WEB SERVER ON LOCALHOST:8080 
	
	
	
	
	

Installing node

Note - npm is auto installed when node is installed 
Install node in all 3 versions 
https://code.tutsplus.com/tutorials/build-a-todo-api-with-node-express-and-mongodb--cms-29343
Npm init -y       creates default npm init 
Npm cache verify (also now is the recommended way to verify the cache is clear)
Npm cache clean --force (now not recommended)
	

Verifying Node Version

    npm -v.

Install latest

    npm install npm@latest -g.

		
		
		
		
Installing Node On Windows

https://nodejs.org/en/download/  
		
	Download and run!
			
After install files live at 
	
			C:\Program Files\nodejs\node.exe
			C:\Program Files\nodejs\npm.cmd
	
		ECLIPSE
		
			HELP=>ECLIPSE=>MARKETPLACE=>SEARCH=>ENIDE STUDIO OR NODECLIPSE
		
			FILE=>NEW=>PROJECT=>NODE.JS
Installing Node On MAC
			
https://nodejs.org/en/download/  
		
	Download and run!
Installing Node on Ubuntu

https://github.com/nodesource/distributions#debinstall
		
  sudo apt-get update 
		Sudo apt-get upgrade
		Sudo apt-get dist-upgrade
		Sudo apt-get install apache2
		Web Browser : http://<IP> should now work!
		sudo apt-get install curl
		curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
		sudo apt-get install -y nodejs                (-y = Yes)
		
		Optional: install build tools
		To compile and install native addons from npm you may also need to install build tools:
		sudo apt-get install -y build-essential
		
		sudo apt-get install npm 
		
		sudo npm -g install http
		
		Check nodejs install files at 	/usr/lib/nodejs 	
		Check node modules at 			/usr/lib/node_modules or
		/usr/local/lib/node_modules 
	
UBUNTU 15.10 : INSTALL NODE (VERSION 2 USING CURL)
	curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
	sudo apt-get install -y nodejs 
	
	nodejs -v               (TEST INTALL eg returns v5.7.0) 
	
	npm -v                   (TEST NPM VERSION EG v3.6.0) 
	
UBUNTU 15.10 : CREATE TEST NODE 
	mkdir test
	cd test 
	npm init 
	
	
	
	Path on Linux Debian
		export PATH=$PATH:/usr/local/bin
		export NODE_PATH=$NODE_PATH:/usr/local/lib/node_modules
			
			
UBUNTU : TEST NODE IS WORKING 
		
		To test an installation is working (and that the setup scripts are working!) use:
		
		1) link nodejs to node
		
		sudo ln -s /usr/bin/nodejs /usr/local/bin/node
		
		2) 
		
		curl -sL https://deb.nodesource.com/test | bash -
		
			
	Linux
		./configure
		make
		sudo make install
	
	
INSTALL FROM SOURCE CODE 
	https://github.com/nodejs/node
	
	http://shapeshed.com/compiling-nodejs-from-source-on-ubuntu-10-04/
	
	
		 By default Node.js will be installed to /usr/local/bin/node and npm will be installed to /usr/local/bin/npm.
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	
	
INSTALL NPM NODE PACKAGE MANAGER
	Windows : bundled together with Node 
	
		https://www.npmjs.com/package/npm
		
		Windows : npm installed by default with node at 
	
			C:\Program Files\nodejs\node.exe
			C:\Program Files\nodejs\npm.cmd
		
		
		
	Apple :  bundled together
	
		https://www.npmjs.com/package/npm
		
		
	
	
How to Update Node and NPM
	New versions of Node and NPM come out frequently. To install the updates, just download the installer from the Nodejs.org site and run it again. The new version of Node and NPM will replace the older versions.
	
	
	
	
	
	
	
	
	
	
	
		
	
	
Running commands to test your installation
	node -v                	VERSION
	
	node  					INTERACTIVE MODE 
		process   returns details about the process that is running 
		
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 	 
		 
		 
		 
		 
RUNNING NODE IN THE COMMAND LINE : REPL READ EVAL PRINT LOOP 
	from https://nodejs.org/api/repl.html
	
	Can run REPL as STANDALONE or WITHIN OTHER MODULES
	
	USE FOR DEBUGGING AND TESTING
	
	RUN : JUST TYPE 'NODE' TO ENTER COMMAND LINE INTERFACE
	
	a = [ 1, 2, 3];
	[ 1, 2, 3 ]
	> a.forEach(function (v) {
	...   console.log(v);
	...   });
	1
	2
	3
	
	
	
	
	
	
		
	Read - Reads user's input, parse the input into JavaScript data-structure and stores in memory.
	Eval - Takes and evaluates the data structure
	Print - Prints the result
	Loop - Loops the above command until user press ctrl-c twice.
	
	
	(Persistence can be provideed by a database eg Redis)
	
	
		
	
	
RUNNING A NODE FILE 
	node <NODE_FILE.JS>    WILL RUN A NODE FILE !!!
	
	
	process.exit();        will TERMINATE YOUR APPLICATION 
	
	TO LAUNCH A NODE APPLICATION FROM ANOTHER NODE OR JAVASCRIPT FILE
	SEE node_57 lab files 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
	
	
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

		
		
Forever - Restart After Crash

EVERYONE IS USING ONE THREAD SO ONE EXCEPTION WHICH REACHES
THE TOP OF THE STACK CAN CRASH EVERYONE'S APPLICATION! 
RESTART WITH 'FOREVER' (AND FOREVER-MONITOR) 
	https://www.npmjs.com/package/forever
	https://github.com/foreverjs/forever-monitor
	http://expressjs.com/en/advanced/pm.html
		
	RESTART NODE SERVER AFTER CHANGE OR CRASH 
	https://github.com/foreverjs/forever
		
	http://www.slidequest.com/q/70ang
		
	https://github.com/foreverjs/forever-monitor
		
	Forever, developed by nodejitsu, has functions to create applications that are always running—"forever" running. 
	If the application dies, forever brings it back. 
	It has built-in functionality to monitor processes. 
	It also offers an API you can use to incorporate its features into your own code.
		
	INSTALL 
		npm -g install forever
		
		npm install forever-monitor      
		
				LOCAL IF NEED TO USE FOREVER FROM NODE APP
	RUN YOUR APP WITH FOREVER 
		forever start myapp.js
		
	STOP
		forever stop myapp.js
		
	WHAT IS RUNNING
		forever list
		
		
	RUN FOREVER LIKE NODEMON TO AUTO-RESTART APP AFTER CODE CHANGE
		forever -w start myapp.js

PM2 - Restart After Crash

	PM2 stands for 'Process Manager' 
		
	http://expressjs.com/en/advanced/pm.html
			
	https://github.com/Unitech/pm2
			
	INCLUDED AS PART OF NODE CORE
		npm install pm2 -g
	Same as forever ie keeps code running even after crash
	https://github.com/Unitech/pm2
	START
	
		pm2 start myapp.js
		
			pm2 start app.js -i 4 START 4 INSTANCES IN CLUSTER MODE
		
	STOP
	
		pm2 stop myapp.js
		
	LIST pm2 PROCESSES
	
		pm2 list
		
	RAM AND CPU USAGE OF EACH PROCESS
	
		pm2 monit
		
	ADD MODULES
	
		pm2 install <MODULE>
		
	UPDATE
	
		pm2 update
		
	
	DETAIL ON ONE PROCESS
	
		pm2 show app.js    DETAIL ON ONE APP
	
	
	LOGS
	
		pm2 logs
	
		
				
		
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
Node Modules and NPM

Anatomy of a module.
Private code.
Accessing and using modules.
npm commands.
package.json.
	
	
	
WHAT IS A NODE MODULE 

	A MODULE IS JUST A PIECE OF CODE CALLED FROM ANOTHER FILE 
	
		eg var x = require('x')        where the latter x MEANS x.js JAVASCRIPT FILE!!!
		
	
	MODULES ARE HIGHLY DECOUPLED, DISTINCT PIECES OF FUNCTIONALITY 
IMPORTING A MODULE 

	
	TWO WAYS TO IMPORT A MODULE
	
		INCLUDE = REQUEST THAT A FILE BE IMPORTED, IF PRESENT 
	
		REQUIRE = MANDATORY INCLUSION OF THIS FILE - FLOW INTERRUPTED IF NOT PRESENT 
	
	
	
	
	DEPENDENCY IS RELIANCE ON CODE OR MODULES TO RUN 
	
	REQUIRE A STANDARD JAVASCRIPT FILE 
	
		var x = require('./module_file_name');    
							
			./	means search in this folder	for module_file_name.js 
			
					ANY FIELDS OR FUNCTIONS WHICH HAVE BEEN EXPLICITLY NAMED AS EXPORT CAN THEN BE USED.
							
					Whenever importing modules NEVER STATE THE .JS EXTENSION	
					
						
					STANDARD FOLDER STRUCTURE APPLIES EG 
						var x = require('A/B/C/D.JS'); 
					
					
		See lab 14 
		
		
		
		
		
		
		
IMPORT A PUBLISHED NPM MODULE 		
	INSTALL
	
		NPM INSTALL <MODULE>
		
		NPM INSTALL <MODULE> --SAVE     ADD TO PACKAGE.JSON
		
		
		
	REQUIRE A INSTALLED MODULE 
	
		VAR X = REQUIRE ('X');        
		
				X.JS IS A PUBLISHED MODULE
	
NODE CORE VS NODE USER (USERLAND)
	CORE MODULES 
	
		INCLUDED IN THE BARE INSTALL OF NODE
	
	USER MODULES 
	
		OPTIONALLY INSTALLED WITH NPM INSTALL <MODULE>
		
	
	One goal of node's minimal core library is to encourage people to implement things in creative ways, without forcing their ideas onto everyone. With a tiny core and a vibrant user space, we can all flourish and experiment without the onerous burden of having to always agree all the time.
	You have a lot more freedom to iterate on the idea.
	
	Everyone who wants your module can install it easily enough (if you publish it with npm).
	
	You have freedom to break node conventions if that makes sense for your use-case.
	An array of the names of the core modules in Node.js
		https://www.npmjs.com/package/node-core-module-names
	
		The core modules are defined within Node.js's source and are located in the lib/ folder.
		
		C:\Program Files\nodejs\node_modules\npm\lib
		
		
	More Info
	
		https://nodejs.org/api/modules.html
		
	
	
IMPORT A LOCALLY CREATED 'CUSTOM' MODULE
	var module1 = require('./module1');
	
	var module2 = require('./folder/module2');
	
		module1 refers to module1.js 		Script File 
					
	
CREATE A CUSTOM MODULE FROM SCRATCH
	MODULE x
	
		module.exports={};
		var y=1;
		function private1(){};
		function private2(){};
		exports.y=y;
		exports.public1=private1;
		exports.doThis=private1;
	
	
		NOTE : CAN USE EXPORTS OR MODULE.EXPORTS TO EXPORT A FUNCTION OR FIELD 
		NOTE : MODULE EXPORTS CAN BE EG VARIABLE, ARRAY, OBJECT, METHOD 
	
	Access exported methods using name of module . name of method 
	
	x.public1();
	
	
	
	EXPORTING A VARIABLE 
	
		module.exports.a=a;  
			==> THEN CAN USE a in another module 
			eg   var myModule = require ('myModule'); 
			     var a = myModule.a;
				 
	
	
	EXPORTING A FUNCTION 
		module.exports.doThis = function(){
		   return someValue;
		}
		
			Then can use this function in another module eg 
			
				var myModule=require('myModule');
				var result = myModule.doThis();
				
						value calculated as someValue will be passed 
						through 'return someValue' into the variable 
						result 
						
						
				
	REQUIRE YOUR MODULE
	
		var a = require('./x');           IMPORT MODULE X
		
	CALL A METHOD FROM YOUR MODULE
	
		a.doThis();
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
					
INSTALLING OFFICIAL NPM MODULES 
	  
	MODULES CAN EITHER BE 
	
		1) SMALL PIECES OF CODE WRITTEN BY YOU
		2) CORE MODULES : WRITTEN BY OTHERS AND IMPORTED USING NPM 
		
 
		
		
	PRIMARY WAY OF GETTING MODULES INSTALLED WHICH WERE WRITTEN BY OTHERS IS VIA NPM NODE PACKAGE MANAGER
	
		https://www.npmjs.com/
	
		NPM is installed when Node is installed (Windows and MAC)
	
		https://docs.npmjs.com/
	
	
	
	
	INSTALL WITH NPM
	
			NPM INSTALL <module> 			LOCALLY JUST FOR THIS PROJECT 
			
			
			NPM INSTALL <module>  -g        GLOBAL FOR ENTIRE MACHINE 	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
OOP THEORY 
	MODULES CAN BE USED LIKE CLASSES IN OOP
		Use to create PUBLIC AND PRIVATE METHODS FOR CLASSES
	
	
	
		MODULE FILE IS YOUR CLASS
		
			FIELDS : PRIVATE OR PUBLIC (THROUGH 'EXPORT')
			FUNCTIONS ARE YOUR METHODS : PRIVATE OR PUBLIC (THROUGH 'EXPORT')
			
			PRIVATE BY DEFAULT
			
			TO MAKE PUBLIC, MUST EXPORT USING 
			
					module.exports.module_name=function_name; 
							module_name = NAME OF OUR MODULE 
							
							function_name = NAME OF FUNCTION WE WISH TO EXPORT 
	
	
					Note : no brackets so function is not called at this point
					
	
	
			var module = (function() {
				var private = function() {
					// ...
				};
				var public = function() {
					// ...
				};
				
				return {
					public: public
				};
			})();
			typeof module.public; // "function"
			typeof module.private; // "undefined"
	CAN ONLY RETURN ONE OBJECT SO IF NEED MULTIPLE FIELDS RETURNED YOU CAN DO SO BY CREATING A JSON OBJECT
	    return {
			public_name:private_name,
			init: init,
			numberClick: numberClick,
			setOperator: setOperator,
			clearNumbers: clearNumbers
		};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
CREATING MODULES : RULES 
		Here are some rules of thumb when creating a module:
		Start by moving repeatedly used code into a function
		
		When your function (or a group of functions related to the same theme) get big enough, move them into another file and expose them using module.exports. You can load this using a 'require' statement
		
		If you have some code that can be used across multiple projects give it it's own readme, tests and package.json and publish it to github and npm. There are too many awesome benefits to this specific approach to list here!
		A good module is small and focuses on one problem
		
		Individual files in a module should not be longer than around 150 lines of JavaScript
		
		A module shouldn't have more than one level of nested folders full of JavaScript files. If it does, it is probably doing too many things
		
		
			
	
	
	
	
	
	
	
	
	
	
	
	
	
SHARED MODULES 
	TAKE CARE WITH MODULES WHICH ARE CALLED BY MORE THAN ONE PIECE OF 
	SOFTWARE.  
	
	IF THEY EXPORT VARIABLES OR FUNCTIONS THEN THESE CAN BE TREATED AS 
	GLOBAL VALUES.  IF THE VALUE CHANGES THEN IT CHANGES FOR ALL CODE 
	USING THAT MODULE - BEWARE!
			
	Good for example of a chat room where each user shares an 
			instance of the chat stream.
	
	EXAMPLE
		MODULE need_me is required by
			MODULE use_me_1
			MODULE use_me_2
		ANY VARIABLES DECLARED AS PUBLIC IN MODULE need_me CAN BE USED IN BOTH MODULES, BUT THE VARIABLES WILL BE LIKE GLOBAL VARIABLES IE IF THE VALUE IS CHANGED IN ONE PLACE, IT WILL BE CHANGED IN ALL PLACES.
			
			See lab 16 
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
				
			
	
UNIQUE INSTANCES OF OBJECTS : OBJECTS NOT SHARED 
	Object factory : instead of shared modules create fully unique instances
	
		var x = new myObject() 
		
							==> NEW INSTANCE (UNIQUE VALUES NOT SHARED)
	
	
 		see lab 17 for working demo
 		
		
		
		
		
		
		
			
		
	
	
	
	
INSTALLING A MODULE : LOCAL SCOPE (ONE PROJECT ONLY)
	DEFAULT WHEN DOWNLOADING CORE MODULES IS TO IMPORT THEM INTO YOUR LOCAL PROJECT ONLY IE THEY WILL BE OF LIMITED 'LOCAL' SCOPE 	
		
	INSTALL A MODULE 
		npm install <package_name>
		
	This places the module in the node_modules folder 
			
	Now add to your project using 
	
		var x = require ('module-name');
		
	
	eg
	
		var fs = require("fs");     
		common practice to NAME THE VARIABLE THE SAME NAME	AS THE MODULE 
				
		
		
		
INSTALLING A MODULE : GLOBAL SCOPE (ENTIRE COMPUTER)
	https://nodejs.org/api/globals.html
	CAN DOWNLOAD AND INSTALL MODULES AS GLOBAL IF WE WISH - THEN THEY BECOME AVAILABLE TO ALL MODULES ON YOUR COMPUTER 
	
	Only if you want to depend on your module as a command-line tool 
	
	npm install -g <module>
		
	
		
		
		
MODULE CACHING 
	Modules are cached after first load   ***
	
	
			
			
	
PROJECT CREATION FROM SCRATCH
	NPM IS THE TOOL USED TO CREATE PROJECTS
	
	NPM RUN BY ITSELF OPENS UP NPM HELP WITH ALL COMMANDS AVAILABLE FOR USE
	In the root folder of your project, run 
	
			npm init 
	NPM START
	
		ONCE  YOU HAVE CREATED YOUR PACKAGE.JSON FILE YOU CAN RUN YOUR APP USING NPM START IF YOU HAVE DEFINED A START FILE
		
		
		"scripts": {"start": "nodemon node_00_HelloWorld.js"}
		
		
	NPM INSTALL
	
		THIS WILL INSTALL ALL DEPENDENT PACKAGES FOR YOUR PROJECT IN THE NODE-MODULES FOLDER
		
	
			NOTE : IF YOU HAVE INSTALLED MODULES BUT NOT ADDED THEM TO PACKAGE.JSON FILE YOU CAN DO SO WITH THIS PROCEDURE
			
			NPM INSTALL -G NPM-COLLECT
			
			NPM-COLLECT --SAVE
			
				==> ALL MODULES IN YOUR NODE_MODULES FOLDER WILL NOW BE ADDED TO THE PACKAGE.JSON FILE AS WELL
				
				
		
		
		
	Note : can manually set fields later eg 
	
		npm set init.author.name "Brent Ertz"
		npm set init.author.email "brent.ertz@gmail.com"
		npm set init.author.url "http://brentertz.com"
		This next command will prompt you for an email and password, create or verify a user in the npm registry, and save the credentials to the ~/.npmrc file at
			c:\users\<user>\npmrc  file
		
	NPM CONFIG SET <KEY> AND GET <KEY>
		https://docs.npmjs.com/cli/config
			
		npm gets its config settings from the command line, environment variables, npmrc files, and in some cases, the package.json file.
		
		The npm config command can be used to update and edit the contents of the user and global npmrc files.
		
		The four relevant files are:
			per-project config file (/path/to/my/project/.npmrc)
			per-user config file (~/.npmrc)
			global config file ($PREFIX/etc/npmrc)
			npm builtin config file (/path/to/npm/npmrc)
		npm config set <key> <value> [-g|--global]
		npm config get <key>
		npm config delete <key>
		npm config list
		npm config edit
		npm get <key>
		npm set <key> <value> [-g|--global]
		
		npm config set "phil=1"  sets npmrc in c:\users\<user>\npmrc  file
		
		npm config set "phil=3" -g sets npmrc in c:\users\<user>\appdata\roaming\npm\etc\npmrc file
		npmrc.5 file in c:\program files\nodejs\node_modules\npm\man\man5
		
		
		I'm seeing this in the %ProgramFiles%\nodejs\node_modules\npm\npmrc file:
				prefix = ${APPDATA}\npm
				
				
				
				
				
				
		
		
	
	
		  
		
		
		
Core Modules 
	Express 
		
		Framework 
		
	Redis 
	
		ALTERNATIVE DATABASE TO MONGO 
		
		High availability database EG replication and clustering 
		
		PROVIDES PERMANENT PERSISTENCE FOR EG NODE IF IT GOES DOWN 
		
		http://redis.io/
		
		http://redis.io/clients#nodejs
		
		WRITTEN IN C, RUNS IN RAM , < 1MS LATENCY, BUILT-IN DATASTRUCTURES, LIKE LIST/SET/SORTED SETS
				/HASHES/
				
				
		REDISLABS.COM 
		
		
		HOW TO SET UP AN EXPRESS SESSION WITH PERSISTENT REDIS FOR SESSION DATA
			
			http://blog.modulus.io/nodejs-and-express-sessions
		
		
	COLLECTIONS : FOR WORKING WITH ARRAYS AND LISTS ETC 
	
	
		http://www.collectionsjs.com/
		
	
	Underscore 
	
		useful for array manipulation eg groupby 
		
	Winston 
	
		LOGGING
		
		
		
	Bull 
	
		USE FOR PERSISTENT LOGGING EG ACROSS MULTIPLE SERVERS 
		
		https://github.com/OptimalBits/bull
		
		
		
	Bunyan : Logging properly using Node bunyan module 
		https://github.com/trentm/node-bunyan/
	
		LOG TO FILE OR OTHER SERVER 
	
		
		
	BLOCKED
	
		CHECKS THAT NO PROCESS IS BLOCKING YOUR SINGLE THREAD 
	
		https://www.npmjs.com/package/blocked
		
			TASK TAKES X SECONDS TO COMPLETE 
	
			TRIGGER ALERT / EMAIL IF X EXCEEDED 
	GULP
	
		AUTO BUILD SYSTEM
		
		http://gulpjs.com/
		
		
		
	GRUNT - automate the building of your system 
		http://gruntjs.com/
		
		
		
		
	Login 
		http://passportjs.org/docs	
		
	
	PDF Generator
		http://pdfkit.org/
	Benchmark : Time Your Application 
		https://github.com/substack/node-ben
	
	Loader.js  auto-loads modules 
	
		https://github.com/pinf/loader-js
		
	
	
	RequireJS : auto load modules 
	
		http://requirejs.org/
		
		
		
	CommonJS
	
		forces modules to declare their output values as module.exports.
		Single syntax for all modules 
		
		Conditional loading of modules 
	
	
	ASYNC MODULE CAN BE USED TO EXECUTE CALLBACKS
	
		IN 
		
			PARALLEL
			
			SERIAL (CHAINED)
			
			..OTHER WAYS EG WATERFALL
			
			
			
			
			
			
		var async = require('async');		
				
		async.parallel([
			function(){ ... },
			function(){ ... }
		], callback);
		 
		 
		async.series([
			function(){ ... },
			function(){ ... }
		]);
		
		async.waterfall([
			function (callback) {
				getSomething(options, function (err, result) {
					if (err) {
						callback(new Error("failed getting something:" + err.message));
						// we should return here 
					}
					// since we did not return, this callback still will be called and 
					// `processData` will be called twice 
					callback(null, result);
				});
			},
			processData
		], done)
		
		
		
	
	
	
	
AUTOSTART Node servers at system startup
	Windows
	
		SCHEDULED TASK - STARTUP 
		
		CREATE A SERVICE TO RUN THE APPLICATION 
		
	https://www.npmjs.com/package/node-windows
	
	Easy version at 
	
	http://stackoverflow.com/questions/20445599/auto-start-node-js-server-on-boot
		
	npm install -g qckwinsvc
	
	Installing your service:
	> qckwinsvc
	prompt: Service name: [name for your service]
	prompt: Service description: [description for it]
	prompt: Node script path: [path of your node script]
	Service installed
	Uninstalling your service:
	> qckwinsvc --uninstall
	prompt: Service name: [name of your service]
	prompt: Node script path: [path of your node script]
	Service stopped
	Service uninstalled
		
		
Node AutoStart : Linux 
	Ubuntu
		
		http://kvz.io/blog/2009/12/15/run-nodejs-as-a-service-on-ubuntu-karmic/
								
				
PM2 : Check out script capabilities to create a script to start PM2 at server startup
	http://pm2.keymetrics.io/docs/usage/startup/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
			
				
	
STDIN : GETTING RAW INPUT FROM THE USER 
	https://docs.nodejitsu.com/articles/command-line/how-to-prompt-for-command-line-input
	
	STDIN   INPUT
	STDOUT  OUTPUT 
	
	Paused by default 
	
	process.stdin.resume();
	
	process.stdin.on('data',function(text){
		
		
			
		
	});
	
	node_36_stdin.js
	node_37_stdin.js 
	
	
	
		
Getting user input - readline 
	https://nodejs.org/api/readline.html
	
	We can read data into our application 'live' using 'readline' module 
	
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	rl.question('Please type something', (answer) => {
		console.log('Thank you ' + answer);
	});
	
	node_32_readline.js 
	node_33_readline.js
	node_34_readline.js 
		
	Create a permanent listener
	
			rl.on('line',(myText)=> }
				// CODE WHEN USER PRESSES ENTER 
			}
				
		node_35_readline.js 
		
		
		
	Prompt : see 38 and 39
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
RUNNING NODE BUT PASSING PARAMETERS INTO THE APPLICATION AT RUNTIME 
	ARGV : HOLDS THE ARRAY OF PARAMETERS PASSED TO THE APPLICATION 
	EG NODE MYFILE.JS A B C 
	
		process.argv[] array holds the following 
		
		process.argv[0] is NODE EXECUTABLE 
		
		process.argv[1] is NODE APPLICATION 
		
		process.argv[2] is FIRST PARAMETER PASSED 
		
		process.argv[3] is SECOND PARAMETER PASSED 
		
		
	node_30_argv_parameters.js 
	
	
	
	ARGV HOLDS [NODE,JAVASCRIPT FILE,PARAMETERS]
	
	 $ node node_30_argv_parameters.js one two three four five
	 [ 'C:\\Program Files\\nodejs\\node.exe',
	   'c:\\OneDrive\\PC\\showcase\\node_30_argv_parameters.js',
	   'one',
	   'two',
	   'three',
	   'four',
	   'five' ]
	   
	   
		
		
		
		
		
		
		
		
		
		
PASSING NAMED PARAMETERS AS ARGUMENTS TO A NODE EXECUTABLE
	Optimist	
	
		https://github.com/substack/node-optimist
		
		
	Optimist 
	
		http://stackoverflow.com/questions/14213345/what-is-the-use-of-optimist-module-in-node-js
		
		
		var argv = require('optimist').argv;
		
		if (argv.rif - 5 * argv.xup > 7.138) {
		  console.log('Buy more riffiwobbles');
		}
		else {
		  console.log('Sell the xupptumblers');
		}
		
		
		
		// call a function by hand 
		node node_40_optimist.js --parameter1="hello world"
		
		
		// call a function with parameters from code 
		
		$ ./xup.js --rif=55 --xup=9.52
		Buy more riffiwobbles
		$ ./xup.js --rif 12 --xup 8.1
		Sell the xupptumblers
		
		
		
		SHORT ARGUMENTS  -X 
		
			var optimist = require('optimist');
			var argv = optimist.argv;
			console.log("x is %d and y is %d", argv.x, argv.y);
		
		To run this type node node_41_optimist.js -x 10 -y 11
		
		node_41_optimist.js
		
		
		
		
		
		BOOLEAN ARGUMENTS
		
			if(argv.s){
				console.log('s is true');
			}
			if(argv.t){
				console.log('t is true');
			}
		
		run with node node_42_optimist.js -st 
		
		
		
		
		
		NON-HYPHENATED OPTIONS 
		
			JUST ADD TO ARGV ARRAY AS STRINGS OR NUMBERS 
			
			
			node node_43_optimist.js -st -x 10 -y 11 --parameter1="parameter1" hello this is some extra text 
			
			
		
		DEFAULT
			var optimist=require('optimist');
			var argv=optimist.default('x',10).default('y',10).argv;
			console.log("x is " + argv.x + " and y is " + argv.y);
			node_44_optimist.js 
			
		
		
		DEMAND (FIELDS ARE REQUIRED)
		
			var optimist=require('optimist');
			var argv=optimist.demand(['x','y']).argv;
			console.log("x is " + argv.x + " and y is " + argv.y);
		
		
			node_45_optimist.js 
			
			
			
	See YARGS and MINIMIST ALSO
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
REFERENCING FILES 
	REFERENCE A FILE IN THIS DIRECTORY WITH ./
	
	REFERENCE A FILE IN SUBDIRECTORY WITH FOLDER/FILE 
	
	REFERENCE A FILE IN HIGHER DIRECTORY WITH ../
	
	ABSOLUTE PATH C:\X\Y\Z.HTM 
	
	RELATIVE PATH IS FROM THE BASE OR ROOT DIRECTORY OF OUR PROJECT 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
PATH MANAGEMENT TO REACH FILES IN NODE 
	
		
Path Module 
	var path = require('path');
	Used for working with all file paths in NODE
	
	/ and \ both used 
	
	path.sep ==> separator character being used ie \ or /
	
		sep will automatically use the correct separator character depending on the operating system you are using
			
		
		var parentFolder = "parentFolder";
		var childFolder = "childFolder";
		var totalFolderPath = parentFolder + path.sep + childFolder;
		node_19_path_module.js
			
		
	path.normalise 
	
		will change your path string to reflect the correct path.sep separator character depening on your operating system ie Windows or Linux 
		
		path.normalise(<your_path_here>);
		
				return your path string with		orrect version of \ or / depending Windows (\) or linux (/)
		
		
	path.dirname =>    	Folder path to file 
	File Name Minus Extension
	
		path.basename(fileName,extension);
	
	path.extname ==> 	file extension name 
	
		fileName="C:\\folder\\folder\\file.exe";
		path.extname(fileName);
		
		
		
	
	__dirname  ==> Full directory name of the JAVASCRIPT FILE WHICH IS CURRENTLY RUNNING 
	
	__filename ==> FULL PATH AND FILENAME OF THE JAVASCRIPT FILE WHICH IS CURRENTLY RUNNING 
		node_19_path_module.js
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
EXTRA : NODE PROCESS.CWD CURRENT WORKING DIRECTORY
	
	process
	
	process.cwd()  CURRENT WORKING DIRECTORY (EG OF ROOT OF YOUR WEBSITE)
	
	process.chdir("<relative change in path from current working directory")
		process.chdir("../");  means move up one directory
		
			Note : if fails to locate new directory the current working directory 
					remains the same as it was before.   You can code for this error
					using try()catch()finally() loop 
					
	process.execPath ==> tells you the location of the NODE.JS EXECUTABLE FILE 
	
	process.env.PATH is the ARRAY of your PATH VARIABLES with a delimiter of
		Windows - semi colon
		Linux -  colon
		node - path.delimiter 
		
		so can split the PATH strings into an array of strings using 
		
		process.env.PATH.split(path.delimiter) which works equally well on Windows 
				and Linux
				
				PRINT OUT EVERY ITEM IN PATH VARIABLE
				
				process.env.PATH.split(path.delimiter).forEach(function(dir){
					console.log(dir);
				});
				
			
		RUN IN NODE process.env.PATH.split(path.delimiter).forEach(function(dir){ console.log(dir); });
	
	
	          node_65_process.js 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	





	
BEST WAY TO RUN DEBUGGING
DEBUGGING : GO INTO REPL THEN CAN'T GET BACK
node-debug node_debug_05_http_server.js ***
LAB : INSTALL NODE APP AS A SERVICE ON WINDOWS (REAL LIFE : DOCKER CONTAINER)  (SUPERVISOR CTL ON LINUX AWS WITH DOCKER EG DIGITAL OCEAN.  DOCKER CAN NOW RUN ON WINDOWS!!!)
LAB : INSTALL NODE APP AS A SERVICE ON MAC
Modules are cached after first load   ***
HOW DO WE SET THE 'CHUNK' AND 'BUFFER' SIZE IN STREAM?  CAN WE CODE OUT A SUPER-TRIVIAL EXAMPLE TO ILLUSTRATE THIS EG READ STREAM FROM A LOCAL FILE THEN WRITE STREAM TO ANOTHER LOCAL FILE, BUT ABILITY TO CHANGE THE BUFFER SIZE AND CHUNK SIZE  AND PERHAPS CONSOLE.LOG PRINT THEM OUT FOR VIEWING   SEE THIS QUOTE TO HELP YOU UNDERSTAND WHAT I MEAN           The stream implementor decides how often data event is emitted. For example, an HTTP request may emit a data event once a few KB of data are read. When you are reading data from a file you may decide you emit data event once a line is read. 
SET DEBUG=EXPRESS:* & NODEMON INDEX.JS	 NOT WORKING
NODEMON EXPRESS
Npm start runs script : start file but what is the relevance of the 'main' entry
CONFIG FILE : 	GIVE EASY EXAMPLE AND PATHS (TWO IN LOCAL PROFILE)
NPM CONFIG SET "PHIL=1" -g	
NPM START (EXPRESS PROJECT)
Net module 
sockets module
ASYNC MODULE : GET IT WORKING  (CAN USE PROMISES EG BLUEBIRDJS PROMISE LIBRARY) ==>
Winston 
Exceptions 
Exec module : create 5 sub threads   PROCESS OBJECT : FILE READ WITH A STREAM IN 'CHUNKS' AND PUSH OUT.   
NPMRC 
NUMBER OF PROCESSES WHEN USING EXEC COMMAND
HOW TO VIEW NUMBER OF NODE PROCESSES AND THEIR DETAILS
WINDOWS 7 SET THE CMD PATH TO A SPECIFIC DIRECTORY
TOGGLE BETWEEN DEVELOMENT AND PRODUCTION ENVIRONMENT IN EXPRESS BY USING AND SETTING THE process.env.NODE_ENV flag
CONSOLE.ERROR(ERR.STACK)
CONSOLE.ERROR(ERR.MESSAGE)
MULTIPART/FORM-DATA FOR FORM UPLOADS TO A WEB SERVER
EXPRESS LIMIT() TO LIMIT SIZES EG OF FILES ETC BEFORE THE BODYPARSER
EXPRESS COOKIEPARSER()
	REQ.COOKIES
	REQ.SIGNEDCOOKIES
EXPRESS FAVICON()
Node Package Manager NPM : Creating a package for managing your application : know how to do it even though don't do 
WORKER.JS PROCESSES : WOULD I USE THEM IN NODE AT ALL? GIVE AN EXAMPLE. ***
WEBSOCKETS THEORY AND EXAMPLE ***
EMIT BETWEEN PROCESSES : CODE IT OUT (HAVE DONE!?) ***
node_event_03 : what is SIGINT ***
passport.js ***
REQ.ROUTE  	app.get('/user/:id?',  			console.log(req.route);  ==>   path: '/user/:id?'		
GO OVER BUCKYS ROOM WITH VIDEO OF HOW TO GET MONGODB UP AND RUNNING WITH JETBRAINS WITH STEP BY STEP INSTRUCTIONS			
http://hook.io/
SSL/TLS 
PERFORMANCE MONITORING
PM2 IN CLUSTERED ENVIRONMENT
INSTALL NODE ON UBUNTU
RUN A BASIC REDIS LAB
NPMRC FILE : GLOBAL VS LOCAL INSTALL : WHERE IS IT?
		
		
		
		
		

		
		
		
		
	
	


		
		
		




	


	
	
	
	
Owner of a node module
	Npm owner ls <modulename>
	
	
	
	Buffer.bytelength
	
	
	
CHECK OUT MINIMIST : REASON FOR IT!!!
EVENTS : POSSIBLY BUILD INTO LESSON
	node_04_webserver_twitter.js
ADD IN TO LAB WORK
TWITTER EVENTS
	GOAL OF THE CLASS : GET A NODE TWITTER API
	https://www.npmjs.com/package/node-tweet-stream
	
	
	https://dev.twitter.com/web/javascript/events
	
	
	https://github.com/ttezel/twit
	
	
	
	
APP.USE : I HAVE TWO EXAMPLES : POSSIBLY REMOVE ONE OF THEM OR SHORTEN OR AMALGAMATE
ENCODE / DECODE TEST TOOL 
	http://meyerweb.com/eric/tools/dencoder/
	
APP.LOCALS  FOR LOCAL DATA 
	The app.locals object is a JavaScript object, and its properties are local variables within the application.
	app.locals.title
	// => 'My App'
			node_69_express_post.js 
			
			
				
		 
	
NODE COOKIE LAB
NODE SESSION LAB
APPENDIX : IISNODE
	https://github.com/tjanczuk/iisnode
	
	RUN C:\PROGRAM FILES\IISNODE\   : FIND THE SETUP BATCH FILE AND RUN IT AS ADMINISTRATOR
	
	INSTALLS IIS MODULE 'IISNODE'
	
	VIRTUAL DIRECTORY AT C:\PROGRAM FILES\IISNODE
	
	THEN NODE SITE AVAILABLE AT HTTP://LOCALHOST:8090/NODE DEPENDING ON YOUR IIS PORT SETUP
	
	DEBUG WITH NODE INSPECTOR
APPENDIX : JSONP  
	JSONP = JSON PADDING TO GET AROUND CROSS-DOMAIN RESTRICTIONS
	
	https://www.youtube.com/watch?v=GcHWqyzSCc8
	
	
	http://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms
	
	JSON Request:
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // success
  };
};
	xhr.open("GET", "somewhere.php", true);
xhr.send();
	
	From <http://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms> 
	
	
	
	JSONP Request:
	var tag = document.createElement("script");
tag.src = 'somewhere_else.php?callback=foo';
	document.getElementsByTagName("head")[0].appendChild(tag);
	
	From <http://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms> 
	
	
	
	The difference between a JSON response and a JSONP response, is that the JSONP response is formulated such that the response object is passed as an argument to a callback function.
	JSON:
	{
    "bar": "baz"
}
	JSONP:
	foo({
    "bar": "baz"
});
	
	From <http://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms> 
	
	
	
	The usefulness of using jQuery to make JSONP requests, is that jQuery does alllllllll of the work for you in the background.
	jQuery requires (by default), for you to include &callback=? in the URL of your AJAX request. jQuery will take the success function you specify, assign it a unique name and publish it in the global scope. It will then replace the ? in &callback=? with the name it's just assigned the function.
	
	From <http://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms> 
	
	
	
	
	Comparable JSON/ JSONP Implementations (assuming response object is {"bar":"baz"}:
	JSON
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    document.getElementById("output").innerHTML = eval('(' + this.responseText + ')').bar;
  };
};
	xhr.open("GET", "somewhere.php", true);
xhr.send();
	JSONP:
	function foo(response) {
  document.getElementById("output").innerHTML = response.bar;
};
	var tag = document.createElement("script");
tag.src = 'somewhere_else.php?callback=foo';
	document.getElementsByTagName("head")[0].appendChild(tag);
	
	From <http://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms>

CORS = CROSS-ORIGIN REQUEST IE REQUESTING INFORMATION FROM A DIFFERENT DOMAIN
	
			https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Browser_compatibility
			
			
			
			
			
Event Emitter

BUILD CODE AT http://www.hacksparrow.com/node-js-eventemitter-tutorial.html FOR EVENT EMITTER TUTORIAL
JSLINUX
MEMORY LEAKS
	To examine memory usage of our process with ps:
	ps -p $PID -o rss,vsz
	(you can find out the PID of your Node.js process with pgrep -lfa node)
	
	This shows us the resident set size (RSS) and the virtual set size (VSZ) of our process.
	RSS is a measurement of how much RAM the process is currently using. This would include all stack and heap memory, as well as memory from shared 
	libraries if pages from those libraries are actually in memory.
	VSZ is how much memory the process has available to it. This includes memory that is in swap and all shared libraries. VSZ includes RSS and is always 
	larger.
	And to watch memory usage in real time, we can use top:
	top -pid $PID  
	
	From <http://blog.yld.io/2015/08/10/debugging-memory-leaks-in-node-js-a-walkthrough/#.Vz5yQpErIdU> 
	
	
	HEAP ANALYSIS
	
		NODE HEAPDUMP
		
			NPM INSTALL HEAPDUMP
			
			REQUIRE HEAPDUMP IN OUR SERVER.JS OR INDEX.JS
			
NODE PROCESSES
	var ps = require('ps-node');
	ps.lookup({
command: 'node',
arguments: '--debug',
}, function(err, resultList ) {
if (err) {
    throw new Error( err );
}
	resultList.forEach(function( process ){
    if( process ){
	console.log( 'PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments );
        }
    });
});
	
	From <http://stackoverflow.com/questions/13206724/how-to-get-the-list-of-process> 
	
	
	
		
		
		
	
LOAD TESTING
	ARTILLERY
	
NODE CHILD PROCESS
	VAR EXEC = REQUIRE('CHILD_PROCESS').EXEC;
	
	
	
	
APPMETRICS-DASH : POSSIBLY TRY IT OUT  
	https://www.youtube.com/watch?v=axxyESWIX5g
	
	
	
Node Glossary

Bower

Bower ensures the right version of our dependencies are installed.
bower.json tracks all of the versions of all files and their dependencies.
install with npm install -g bower  (goes to appdata/roaming/npm/node_modules folder)
bower requires node, npm and git.
To install a component using bower, so that it tracks it, use
	bower install <package>
	eg bower install jquery
To create a bower.json file use the bower.init command
To use bower-downloaded components and libraries they can be referenced 
directly eg
< script src="bower_components/jquery/dist/jquery.min.js">
Some commonly installed libraries are available at
https://bower.io/search/
Note : see Yarn also
Deprecated Modules - Bodyparser

instead use individual json/urlencoded middlewares
Deprecated - Jade - use Pug

Deprecated - transformers - use jstransformers

Design Patterns

	
Singletons
Observers
Factories
Middleware
Dependency Injection
Design Pattern is resuable solution to commonly occurring problem
Singleton
	One instance only
Observer
	Object maintains list of 'observers'
	Object notifies 'observers' on change
	EventEmitter is used
Factory
	Generic object
Dependency Injection = Pass By Reference
Middleware = pipeline = output from one is the input into another
	Express
	Koa
	Streaming
https://addyosmani.com/resources/essentialjsdesignpatterns/book/
	The Module Pattern
		The Module pattern was originally defined as a way to provide both private and public encapsulation for classes in conventional software engineering.
		In JavaScript, the Module pattern is used to further emulate the concept of classes in such a way that we're able to include both public/private methods and variables inside a single object, thus shielding particular parts from the global scope. What this results in is a reduction in the likelihood of our function names conflicting with other functions defined in additional scripts on the page.
	
	DESIGN PATTERN = REPEATABLE SOLUTION  (IN MODULAR FORM)
	
		IT'S NOT A FINISHED SOLUTION THOUGH, JUST A REPEATABLE TEMPLATE WHICH 
				WE CAN USE OVER AND OVER AGAIN AS PART OF SOLVING SIMILAR PROBLEMS 
				
				
	EBOOK 
		
		https://addyosmani.com/resources/essentialjsdesignpatterns/book/
				
				
	PRINCIPAL DESIGN PATTERN IS JAVASCRIPT MODULES 
	
		REVEALING MODULE PATTERN HAS PRIVATE AND PUBLIC FIELDS 
	http://alistapart.com/article/the-design-of-code-organizing-javascript
	
	
	The module pattern
		There are a lot of design patterns out there, and equally as many resources on them. Addy Osmani wrote an amazing (free!) book on design patterns in JavaScript, which I highly recommend to developers of all levels.
		The module pattern is a simple structural foundation that can help keep your code clean and organized. A “module” is just a standard object literal containing methods and properties, and that simplicity is the best thing about this pattern: even someone unfamiliar with traditional software design patterns would be able to look at the code and instantly understand how it works.
		In applications that use this pattern, each component gets its own distinct module. For example, to build autocomplete functionality, you'd create a module for the textfield and a module for the results list. These two modules would work together, but the textfield code wouldn't touch the results list code, and vice versa.
		That decoupling of components is why the module pattern is great for building solid system architecture. Relationships within the application are well-defined; anything related to the textfield is managed by the textfield module, not strewn throughout the codebase—resulting in clear code.
		Another benefit of module-based organization is that it is inherently maintainable. Modules can be improved and optimized independently without affecting any other part of the application.
		I used the module pattern for the basic structure of jPanelMenu, the jQuery plugin I built for off-canvas menu systems. I'll use that as an example to illustrate the process of building a module.
		Building a module
		
			To begin, I define three methods and a property that are used to manage the interactions of the menu system.
			var jpm = {
				animated: true,
				openMenu: function( ) {
					…
					this.setMenuStyle( );
				},
				closeMenu: function( ) {
					…
					this.setMenuStyle( );
				},
				setMenuStyle: function( ) { … }
			};
			The idea is to break down code into the smallest, most reusable bits possible. I could have written just one toggleMenu( ) method, but creating distinct openMenu( ) and closeMenu( ) methods provides more control and reusability within the module.
			Notice that calls to module methods and properties from within the module itself (such as the calls to setMenuStyle( )) are prefixed with the this keyword—that's how modules access their own members.
			That's the basic structure of a module. You can continue to add methods and properties as needed, but it doesn't get any more complex than that. After the structural foundations are in place, the reusability layer—options and an exposed API—can be built on top.
			
		
			
		Options
		
			Options are essential to any truly reusable plugin because they allow for customizations to each implementation. Every project brings with it a slew of design styles, interaction types, and content structures. Customizable options help ensure that you can adapt the plugin to fit within those project constraints.
			It's best practice to provide good default values for your options. The easiest way to do that is to use jQuery's $.extend( ) method, which accepts (at least) two arguments.
			As the first argument of $.extend( ), define an object with all available options and their default values. As the second argument, pass through the passed-in options. This will merge the two objects, overriding the defaults with any passed-in options.
			(function($) {
				$.jPanelMenu = function(options) {
					var jpm = {
						options: $.extend({
							'animated': true,
							'duration': 500,
							'direction': 'left'
						}, options),
						openMenu: function( ) {
							…
							this.setMenuStyle( );
						},
						closeMenu: function( ) {
							…
							this.setMenuStyle( );
						},
						setMenuStyle: function( ) { … }
					};
				};
			})(jQuery);
			Beyond providing good defaults, options become almost self-documenting—someone can look at the code and see all of the available options immediately.
			Expose as many options as is feasible. The customization will help in future implementations, and flexibility never hurts.
		API
		
			Options are terrific ways to customize how a plugin works. An API, on the other hand, enables extensions to the plugin's functionality by exposing methods and properties for the implementation code to take advantage of.
			While it's great to expose as much as possible through an API, the outside world shouldn't have access to all internal methods and properties. Ideally, you should expose only the elements that will be used.
			In our example, the exposed API should include calls to open and close the menu, but nothing else. The internal setMenuStyle( ) method runs when the menu opens and closes, but the public doesn't need access to it.
			To expose an API, return an object with any desired methods and properties at the end of the plugin code. You can even map returned methods and properties to those within the module code—this is where the beautiful organization of the module pattern really shines.
			(function($) {
				$.jPanelMenu = function(options) {
					var jpm = {
						options: $.extend({
							'animated': true,
							'duration': 500,
							'direction': 'left'
						}, options),
						openMenu: function( ) {
							…
							this.setMenuStyle( );
						},
						closeMenu: function( ) {
							…
							this.setMenuStyle( );
						},
						setMenuStyle: function( ) { … }
					};
					return {
						open: jpm.openMenu,
						close: jpm.closeMenu,
						someComplexMethod: function( ) { … }
					};
				};
			})(jQuery);
			
			
			API methods and properties will be available through the object returned from the plugin initialization.
			var jpm = $.jPanelMenu({
				duration: 1000,
				…
			});
			jpm.open( );	
						
			
			
			
			
			
	Building a module : look 2 
		https://css-tricks.com/how-do-you-structure-javascript-the-module-pattern-edition/
	




	
 
		  
		  
		  
		  
JSON-Server (NODE REST API)

		 
https://github.com/typicode/json-server
A full REST API with zero coding in less than 30 seconds 
		  
		  
		 

	