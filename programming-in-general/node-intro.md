



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
		
 
 
 
 
	
	
	
Node documentation

NODE SITE
	
	https://nodejs.org/api/
	
NPM SITE
	
	Search within node for keyword : https://www.npmjs.com/browse/keyword/hash
		
		
		
		
	