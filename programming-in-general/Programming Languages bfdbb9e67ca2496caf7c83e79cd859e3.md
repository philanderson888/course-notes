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






# React

# React Notes 1

## Contents

[Introduction](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#introduction)

[Resources](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#resources)

[Comparison with other technologies](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#comparison-with-other-technologies)

[React from Egghead](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#react-from-egghead)

## Introduction

Statement by creators of React at Facebook

```
*React is, in our opinion, the premier way to build big, fast Web apps with JavaScript. It has scaled very well for us at Facebook and Instagram.*
```

## Resources

[reactforbeginners.com](https://reactforbeginners.com/)

## Comparison with other technologies

## React Clock

Here is a basic clock

```
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

The setInterval function calls function tick() every second.

This function tick() calls ReactDOM.render() so this gets called every second.

It renders the chosen element, in this case `hello world` plus a time string, to the screen at the position of the `div` element with id `root`.

React will compare the previous and current rendition of the screens in the virtual DOMs which it creates. It will then only render the changes, making for a more efficient screen re-render.

We can see this visually by `inspecting` the clock with Chrome Dev Tools and expanding to see the relevant HTML element. We can see the rest of the DOM is static but this little bit updates on every clock tick.

## React from Egghead

## Contents

[CodeSandbox.io](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#codesandbox-io)

[create-react-app](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#create-react-app)

[nellify](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#nellify)

### Rendering An Element In Raw HTML

Before we talk about React let's talk about how raw HTML renders an element which goes something like this

```
<div id="root"></div>
<script type="text/javascript">
const rootElement = document.getElementById('root')
const element = document.createElement('div')
element.textContent='Hello World'
element.className='container'
rootElement.appendChild(element)
</script>
```

# React Notes 2

```jsx
# React JS
	
https://reactjs.org/
React updates the view (render) when underlying data changes
A view exists for every 'state' of the app
'Declarative' views
'Encapsulated components' which manage their own state
Render using
	Javascript
	JSX which uses XML to store data
React Setup

https://reactjs.org/tutorial/tutorial.html

npm install -g create-react-app
create-react-app my-app
cd my-app
npm start

React Native - powers mobile apps

Examples Of ReactJS at work

See https://www.jqwidgets.com
Simple React lab

https://facebook.github.io/react/tutorial/tutorial.html
React Component Class

Component
	Input
		Props 
	Output
		Returns a HIERARCHY OF VIEWS to display via RENDER method
	
Sample Component code

	class ShoppingList extends React.Component {
	  render() {
	    return (
	    

		    
Shopping List for {this.props.name}

		    

			    
Instagram

			    
WhatsApp

			    
Oculus

	        

        

	    );
	  }
	}

// Example usage: 

Created by
return React.createElement('div', 
	{className: 'shopping-list'},
  	React.createElement('h1', ...),
  	React.createElement('ul', ...)
);
Render Method

	Returns a description of what you want to render
	Returns a REACT ELEMENT which is a lightweight description of what to render
	Create REACT ELEMENT using JSX language
	return React.createElement('div', 
		{className: 'shopping-list'},
		React.createElement('h1', ...),
		React.createElement('ul', ...)
	);
	Any Javascript expression can go inside the JSX expression
	Every REACT ELEMENT is a REAL JAVASCRIPT OBJECT
	React uses these instructions to render the screen

</pre>
```


	
	

 
 
 
 
 
 



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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
The Callback Pattern 
	What are callbacks.
	In a synchronous program, you would write something along the lines of:
	function processData () {
	  var data = fetchData ();   // TAKES A LONG TIME
	  data += 1;
	  return data;
	}
	This works just fine and is very typical in other development environments. 
	
	However, if fetchData takes a long time to load the data (maybe it is streaming it off the drive or the internet), then this causes the whole program to 'block' - otherwise known as sitting still and waiting - until it loads the data. 
	
	Node.js, being an asynchronous platform, doesn't wait around for things like file I/O to finish - Node.js uses callbacks. 
	
	A callback is a function called at the completion of a given task; this prevents any blocking, and allows other code to be run in the meantime.
	The node.js way to deal with the above would look a bit more like this:
	function processData (callback) {
	  fetchData(function (err, data) {
		if (err) {
		  console.log("An error has occured. Abort everything!");
		  callback(err);
		}
		data += 1;
		callback(data);
	  });
	}
	fs.readFile('/foo.txt', function(err, data) {
	  console.log(data);
	});
	
	THE CALLBACK PATTERN
	
	
		getData(a,b,c,callback)
	
	
	function callback(err,data){
		if(err){
				// ERROR CODE
				return;
		}
		
		// DO THIS CODE
	
	}
	
	
	
	
		
CALLBACK FUNCTION STRUCTURE
	Module_name.function_name(inputs, callback_function(){});
	
      fs       .readFile     (<path>,callback(){  });	
	
	
	
	
	
	
	
Callback-last.
Error-first.
	TO ENSURE YOU HANDLE ALL ERRORS, MAKE SURE THE FIRST PARAMETER IN ALL CALLBACKS IS THE ERROR VARIABLE
	
	WHEN CALLING A FUNCTION, ENSURE THE CALLBACK PARAMETER IS THE LAST PARAMETER
	
	
	
	
	
	
	
	
	
	
	
	
	
Callback vs Emitter
	CALLBACKS ARE CALLED ONCE AND YOU GET BACK
	
		ONE ERROR
		
		ONE RESULT
		
		
	EVENT EMITTERS CAN BE CALLED MULTIPLE TIMES SO ARE USED WHEN YOU NEED 
	
		MULTIPLE EVENTS
		
		POSSIBLE NOTIFICATION OF MULTIPLE ERRORS
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
```
		
		
FS MODULE : FILE SYSTEM = managing FILES 
	https://nodejs.org/api/fs.html#fs_file_system
	
	
	
FS.WRITEFILESYNC : CREATE A TEXT FILE WITH CONTENT 
	var fs = require('fs');
	fs.writeFileSync("abc.txt","Content inside file");
			node_18_writefile_readfile.js
	
	
	
FS.READFILESYNC : READ TEXT FILE AS HEX            (SYNC = Synchronous = WHOLE FILE!)
	/* Read file as HEX */
	console.log(fs.readFileSync("abc.txt"));
	
			node_18_writefile_readfile.js
	
	
FS.READFILESYNC : READ TEXT FILE AS STRING 
	/* Read file as STRING */
	console.log(fs.readFileSync("abc.txt").toString());
	
	
	
	
FS.READFILESYNC : READ TEXT FILE AS JSON DATA 
	
	var x = JSON.parse(fs.readFileSync("abc.txt"));
	
		console.log("Field a holds value " + x.a);
		console.log("Field b holds value " + x.b);
	
	
	
	
	
	
FS.ACCESS (PATH)      
	CHECK TO SEE 
			
		1) IF THE PATH EXISTS (DON'T USE FS.EXISTS BUT USE THIS INSTEAD) 
		
		2) IF PERMISSIONS ALLOW ACCESS 
		
	CHECK PERMISSION AND ACCESS TO FILE 
	
			var fs = require('fs');
			fs.access('./abc.txt',function(err){
				if(err){
					console.log(error);
				}
				else{
					console.log('success');
					console.log("Read OK with code : " + fs.R_OK);
					console.log("Write OK with code : " + fs.W_OK);
				}
			});
			
		
		
			node_66_fs_access.js

FS.STATS 
	fs.stat(path,function(error,stats){console.log(stats)});
	STATS.ISFILE()
	     .ISDIRECTORY()
		 .ISSOCKET()
		 SIZE
		 LAST MODIFIED
		 
		var fs = require('fs');
		fs.stat('./abc.txt',function(error,stats){
		  if(error){
			console.log("Error " + error);
		  }
		  else{
			console.log('File Statistics');
			console.log(stats);
			console.log('Is it a file ? ' + stats.isFile());
			console.log('Is it a directory ? ' + stats.isDirectory());
			console.log('Is it a socket ? ' + stats.isSocket());
			console.log('Size is ' + stats.size);
			console.log('Last modified ' + stats.mtime);
		  }
		});
	
FS.OPEN : OPEN FILE BEFORE READ 
	fs.exists() should not be used to check if a file exists before calling fs.open(). Doing so introduces a race condition since other processes may change the file's state between the two calls. Instead, user code should call fs.open() directly and handle the error raised if the file is non-existent.
	
	
	fs.open(path,"w",callback(){});
	
		w = write 
		r  read 
		r+ read write
		a append 
		a+ read and append
	
	
	fs.open(path,"w+",function(error,fd){
		if(error)..else..
	}   									fd=file descriptor
	
	
	
	
	
	
	
FS.READFILE : READ FILE ASYNCHRONOUSLY FOR READING (AFTER OPEN)
	fs.readfile(path,encoding,callback)
	
		encoding = utf8 
		
		callback = function(err,data){}
		
		
		
		
		
		
FS.APPENDFILE(PATH,DATA)
	fs.appendFile('message.txt', 'data to append', (err) => {
	  if (err) throw err;
	  console.log('The "data to append" was appended to file!');
	});
		
		
		
		
		
		
FS.WRITE(FD,DATA,OFFSET,LENGTH,POSITION,CALLBACK)
	WRITES BUFFER TO FILE AT POSITION INDICATED
	OFFSET FROM START OF DATA 
	LENGTH TO COPY 
	POSITION IN DESTINATION FILE TO BEGIN ADDING DATA 
			
			
FS.WRITE(FD,DATA,POSITION,CALLBACK)
	WRITES ALL DATA TO FD AT POSITION.
			
	
FS.CREATEWRITESTREAM(PATH)
	MODIFY EXISTING FILE 
	
	Stream of data so YOU DON'T NEED TO KNOW THE LENGTH OF THE STREAM IN ADVANCE 
	
	
	
			
FS.WRITEFILE(path,data,callback)
	OVERWRITE EXISTING FILE 
	
	
	
FS.CREATEREADSTREAM(PATH)
	Read a stream of data that you don't exactly know the length of before you start so it could be any size - you just handle the data accordingly as it arrives
	
	
FS.RENAME
	fs.rename(old,new,callback)
FS.MKDIR(path)
	fs.mkdir(path,callback)
	
FS.RMDIR 
	fs.rmdir(path,callback)
		
FS.CLOSE(FD)
	fs.close(fd,callback)
	
	
	
NOTE : COPY DOES NOT EXIST SO WOULD HAVE TO READ THEN WRITE 
FS.READDIR : READ CONTENTS OF A DIRECTORY 
	
	fs.readdir(path,callback) 
	
	
		https://nodejs.org/api/fs.html#fs_fs_readdir_path_callback
		
	
		cannot use file name glob patterns like ls /tmp/*core*. 
	
	
			var fs = require('fs');
			fs.readdir(path,function(err,dir){
				fs.stat(dir,function(error,stats){
				  if(error){
					console.log("Error " + error);
				  }
				  else{
					console.log('File Statistics');
					console.log(stats);
					console.log('Is it a file ? ' + stats.isFile());
					console.log('Is it a directory ? ' + stats.isDirectory());
					console.log('Is it a socket ? ' + stats.isSocket());
					console.log('Size is ' + stats.size);
					console.log('Last modified ' + stats.mtime);
				  }
				});
			});
			
			
	
	
	
	
	
	
	
	
	
	
	fs.readdirSync (Synchronous so code stops)
	
		https://nodejs.org/api/fs.html#fs_fs_readdirsync_path
	
FS.WATCH(path,listener)
	WATCH FILE FOR CHANGES AND NOTIFY LISTENER 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	
NODE-GLOB : SEARCH FOR A FILE WITHIN FOLDERS 
	CAN USE PATTERNS EG *.TXT  TO SEARCH FOR ALL TEXT FILES 
		
	Search with patterns 
	
		github.com/isaacs/node-glob. 
	
		Globs can even search in sub-directories
		
		
		
		
NODE-WALK : SEARCH FOR A FILE WITHIN FOLDERS 
		
		Recursive search   (Search a folder then search all subfolders before moving on)
		
		
		(using node-walk: npm install walk)
		var walk    = require('walk');
		var files   = [];
		// Walker options
		var walker  = walk.walk('./test', { followLinks: false });
		walker.on('file', function(root, stat, next) {
			// Add this file to the list of files
			files.push(root + '/' + stat.name);
			next();
		});
		walker.on('end', function() {
			console.log(files);
		});
	
	
		Parallel loop search (fast, async)
	
			var fs = require('fs');
			var path = require('path');
			var walk = function(dir, done) {
			  var results = [];
			  fs.readdir(dir, function(err, list) {
				if (err) return done(err);
				var pending = list.length;
				if (!pending) return done(null, results);
				list.forEach(function(file) {
				  file = path.resolve(dir, file);
				  fs.stat(file, function(err, stat) {
					if (stat && stat.isDirectory()) {
					  walk(file, function(err, res) {
						results = results.concat(res);
						if (!--pending) done(null, results);
					  });
					} else {
					  results.push(file);
					  if (!--pending) done(null, results);
					}
				  });
				});
			  });
			};
			
			
			
NODE-DIR : READ AND PROCESS FILES AND DIRECTORIES INCLUDING SEARCH 
FILE : WALK THROUGH ALL DIRECTORIES AND PERFORM TASK ON EACH ONE 
READDIRP  PIPES OUTPUT AS A STREAM
			
FindIt : Walk a directory tree in Node.js
	var findit = require('findit');
	findit.find('/dir/to/walk', function (file) {  
	  //
	  // This function is called each time a file is enumerated in the dir tree
	  //
	  console.log(file);
	});
	
			
			
			
			
			
			
			
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

	
		
		
		
		
					
	
	LINUX  
	
		ACTIVITY MONITOR 
		top 
		top -o cpu   ORDER BY CPU 
		top -o rsize  ORDER BY RAM SIZE 
		ps aux | more 
		ps -e|grep node           LIST NODE PROCESSES 
		ps -ef | grep node 
		ps T                      LIST PROCESSES ON THIS TERMINAL 
		kill <process_id> 
		kill -9 <process_id>
		killall <name_of_process>
		pkill node                  KILLS ALL NODE PROCESSES 
		pkill -f node 
	
	
	
	
	
	
	
	
	
	
	
			
		
		
	PS-NODE
	
		MANAGE PROCESSES USING NODE
	
		https://www.npmjs.com/package/ps-node
		
		
		
		var ps = require('ps-node');
		 
		// A simple pid lookup 
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
			
			
		var ps = require('ps-node');
	 
		// A simple pid lookup 
		ps.kill( '12345', function( err ) {
			if (err) {
				throw new Error( err );
			}
			else {
				console.log( 'Process %s has been killed!', pid );
			}
		});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
				
		
Main Node Process 
	console.log("Process " + process.argv[1] +" at work " );       
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
Creating Child Processes
	THREE WAYS TO CREATE CHILD PROCESSES
	
		EXEC : NO COMMUNICATION UNTIL THE END
		
		SPAWN : CHILD PROCESS CAN COMMUNICATE WHILE IT IS RUNNING
		
		FORK : TWO-WAY SOCKET I/O COMMUNCATION BETWEEN PARENT AND CHILD PROCESS CAN TAKE PLACE
		
	
	
	
	
Creating A Child Process With EXEC 
	ONLY COMMUNICATION WITH THIS PROCESS IS AT THE END AFTER PROCESS TERMINATES AND RETURNS CONTROL TO THE PARENT PROCESS 
	
	IE OUTPUT ONLY OBTAINED ONCE, AT THE END OF THE PROCESS AND NOT WHILE IT IS RUNNING 
	
	PROBLEM : NOT REAL TIME FEEDBACK 
	
	
	
	INFO
	
		https://nodejs.org/api/child_process.html
	
	
	REQUIRE 
		var exec=require('child_process').exec;
	CREATE THE CHILD PROCESS 
	
		var child=exec('node ./file.js);
	
	AWAIT DATA WITH STDOUT ON 'DATA' ARRIVAL (AT TERMINATION OF PROCESS)
	
		child.stdout.on('data',callback);
				
	EXAMPLE WITH STDOUT OUTPUT 
	
	
				
				var exec = require('child_process').exec;
				exec('node ./node_57_server.js', function(error,stdout,stderr){
				 console.log('stdout: ', stdout);
				 console.log('stderr: ', stderr);
				 if(error !== null){
					console.log('exec error: ', error);
				 }
				});
				
				
				OR 
				
				var exec = require('child_process').exec;
				var child = exec('node ./node_57_server.js');
				child.stdout.on('data', function(data) {
					console.log('stdout: ' + data);
				});
				
				
	SECOND EXAMPLE WITH STDOUT OUTPUT 
	
			
				var exec=require('child_process').exec;
				var child=exec('node ./node_58_server_child_process.js');
				console.log('child process successfully started');
				console.log(child);
				child.stdout.on('data',function(data){
				 console.log('stdout: ' + data);
				});
				child.stderr.on('data',function(data){
				 console.log('stderr: ' + data);
				});
				child.on('close',function(code){
				 console.log('closing child process with code ' + code);
				});
				
				
	
	
		
				
				
	OK TO CREATE GRANDCHILDREN PROCESSES ALSO 
			MASTER 
		
				CHILD1
						GRANDCHILD1
			
						GRANDCHILD2
						
				CHILD2
				
				
				
	
	
	
	
	
	
	
	
Terminating A Child Process 
	PARENT HAS PROCESS ID process.pid 
	
	CHILD HAS PROCESS ID child.pid 
	
	
	LINUX TERMINATE PROCESS 
	
		
		kill a process using kill(child.pid); BUT ONLY WORKS IN LINUX!
	
	
	
	
	
	
	WINDOWS - TASKKILL BY PROCESS ID 
	
	
			var isWin = /^win/.test(process.platform);
			if(!isWin) {
				kill(processing.pid);
			} else {
				var cp = require('child_process');
				cp.exec('taskkill /PID ' + child.pid + ' /T /F', function (error, stdout, stderr) {
					// console.log('stdout: ' + stdout);
					// console.log('stderr: ' + stderr);
					// if(error !== null) {
					//      console.log('exec error: ' + error);
					// }
				});             
			}
			
	WINDOWS - TASKKILL BY PROCESS NAME 
		This will be the easiest to use to kill all node processes 
		manually with one quick command
			
		taskkill /im node.exe /f 
	
				
Creating A Child Process With Spawn
	
	WITH SPAWN COMMUNICATION CAN TAKE PLACE AT ANY TIME WHEN CHILD PROCESS IS RUNNING 
	
	https://nodejs.org/api/child_process.html 
		
	http://jlunaquiroga.blogspot.co.uk/2014/03/creating-processes-in-nodejs.html
		
	Excellent Lab 
	
		http://www.tutorialspoint.com/nodejs/nodejs_scaling_application.htm
		
		
	
		
	child_process.spawn(command, [args], [options])
			
			
			
				
	WORKED EXAMPLE WITH SPAWN A CHILD PROCESS 
		
				const fs = require('fs');
				const child_process = require('child_process');
				 
				for(var i=0; i<3; i++) {
				  var workerProcess = child_process.spawn('node', ['node_00_HelloWorld.js', i]);
				  workerProcess.stdout.on('data', function (data) {
					 console.log('stdout: ' + data);
				  });
				  workerProcess.stderr.on('data', function (data) {
					 console.log('stderr: ' + data);
				  });
				  workerProcess.on('close', function (code) {
					 console.log('child process exited with code ' + code);
				  });
				}
					node_60_script.js 
					
			
		
		
		
		
	SECOND WORKED EXAMPLE WITH SPAWN PROCESS 
	
		const
			 fs = require('fs'),
			 process = require('child_process');
		for(var i=0; i<10; i++) {
			var ls = process.exec('node worker.js '+i, function (error, stdout, stderr) {
			   if (error) {
				 console.log(error.stack);
				 console.log('Error code: '+error.code);
				 console.log('Signal received: '+error.signal);
			   }
			   console.log('stdout: ' + stdout);
			   console.log('stderr: ' + stderr);
			   
			 });
			
			 ls.on('exit', function (code) {
			   console.log('Child process exited with exit code '+code);
			 });
		}
	
	CREATING A CHILD PROCESS AND TALKING TO IT : TEST APPLICATION USING A TIMER 
		http://www.andygup.net/node-js-moving-intensive-tasks-to-a-child-process/
		
		
	
	
	
	
	
	
	
CREATING A CHILD PROCESS USING FORK WHICH ALLOWS 2-WAY SOCKET.IO COMMUNCATION WITH THE CHILD PROCESS 
 
	http://www.tutorialspoint.com/nodejs/nodejs_scaling_application.htm
	
	
	   see node_61_process_fork.js 
		
		
	https://nodejs.org/api/child_process.html#child_process_child_send_message_sendhandle_callback
	
	
	FORK IS SAME AS SPAWN PLUS HAS 
	
	
		A 2-WAY COMMUNICATION CHANNEL SET UP TO SEND LIVE MESSAGES!!!
		
		
		
		
		
		
	
	
	
	
	
	
		
LOGGING WITH FS.APPENDFILE
	FS.APPENDFILE(path,string,callback);
	
	fs.appendFile('abc.txt', 'data to append', function (err) {
	});
	
	
	
	
LOGGING WITH FS.WRITE 
			var fs = require('fs');
			var str = 'string to append to file';
			fs.open('filepath', 'a', 666, function( e, id ) {
			  fs.write( id, 'string to append to file', null, 'utf8', function(){
				fs.close(id, function(){
				  console.log('file closed');
				});
			  });
			});
			
			
			
			
			
			
			
LOGGING WITH FS.CREATEWRITESTREAM 
	FS.CREATEWRITESTREAM => MANUAL DIY LOGGING 
	
	JAVASCRIPT : DETECT GETMONTH()  0-11 
	
		IF (MONTH==2){
			NEW LOG STREAM...
		}
	
		VAR STRING 
		
			<<DATE>> <<IP>> <<PORT>>  MESSAGE  
	
	Example 
	
		var fs = require('fs');
		var logStream = fs.createWriteStream('log.txt', {'flags': 'a'});
		// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
		logStream.write('Initial line...');
		logStream.end('this is the end line');
		
		
	
LOGGING WITH LOG4JS 
	npm install log4js
	
    FIXED CONFIG FILE 
	https://github.com/nomiddlename/log4js-example/blob/master/config/log4js.json
	
	
			
	var log4js = require('log4js');
	var logger = log4js.getLogger();
	console.log("inside logging module");
	logger.debug("Test Debug Message");
	log4js.loadAppender('file');
	log4js.addAppender(log4js.appenders.file('logfile.log'),'logfile_category_1');
	var logger1 = log4js.getLogger('logfile_category_1');
	logger1.trace('Entering test log file');
	logger1.trace('');
	log4js.addAppender(log4js.appenders.file('logfile.log'),'logfile_category_2');
	var logger2 = log4js.getLogger('logfile_category_2');
	logger2.trace('Entering test log file');
	logger2.trace('');
					lab_0x_logger.js
		
		
		
		
Winston Logging
	npm install winston
	
		winston.log('info', 'Hello distributed log files!');
	
	Where is the information logged?
	
		Storage area is called a 'Transport' in Winston
		
			https://github.com/winstonjs/winston/blob/master/docs/transports.md
			
		Default is built-in logging mechanism called the 'Console'
		
		
		
	Add your own 'transport' place to log data to 
	
		https://github.com/winstonjs/winston/blob/master/docs/transports.md
	
		LOG TO FILE
		
			winston.add(winston.transports.File, options)
			
			winston.add(winston.transports.File, { filename: 'somefile.log' });
			
		LOG TO HTTP SOCKET
		
			winston.add(winston.transports.Http, options)
		LOG TO DATABASE
		
			CouchDB
			Redis
			MongoDB
			Riak
			Loggly
					.. AND OTHERS
					
					
	METADATA ADDED TO A LOG
	
		winston.log('info', 'Test Log Message', { anything: 'This is metadata' });
		
	QUERY LOGS
	
		winston.query(options, function (err, results) {
			if (err) {
			  throw err;
			}
			console.log(results);
		});
		
		 var options = {
			from: new Date - 24 * 60 * 60 * 1000,
			until: new Date,
			limit: 10,
			start: 0,
			order: 'desc',
			fields: ['message']
		  };
		  
		
		
		
		
		
		
		
		
		
		
NODE GARBAGE COLLECTION 
	NODE GARBAGE COLLECTION IS AUTOMATIC
	
	
	
	
	
	
	
	
MEMWATCH
	MANAGING MEMORY LEAKS (PROCESSES WHICH DO NOT TERMINATE) 
	Can try https://www.npmjs.com/package/memwatch for starters!!!
	var memwatch = require('memwatch');
	
	
	
	GARBAGE COLLECTION IS AUTOMATIC.
	
	
	IF GARBAGE COLLECTION DETECTS MEMORY INCREASE (CALL THIS 'LEAK') 
	
		AFTER 5 CONSECUTIVE COLLECTIONS THEN LEAK EVENT WILL TRIGGER
		
	
	Leak Detection
			
		You can then subscribe to leak events. A leak event will be emitted when your heap usage has increased for five consecutive garbage collections:
		memwatch.on('leak', function(info) { ... });
		The info object will look something like:
		{ start: Fri, 29 Jun 2012 14:12:13 GMT,
		end: Fri, 29 Jun 2012 14:12:33 GMT,
		growth: 67984,
		reason: 'heap growth over 5 consecutive GCs (20s) - 11.67 mb/hr' }
		 
		 
  
  
  
 
  
HTTP and HTTPs
    
Making a simple server

    
When to use HTTP and HTTPs

    
Server ports and listening

    
HTTP Requests and Responses

    
Request and Response headers and body

    
Creating a response to incoming requests

    
Building a simple HTTP server with static files

	
	
CREATE A SIMPLE WEB SERVER
	Define pattern of usage for NODE
	1) DEFINE TYPE OF INTERACTION
	2) REQUIRE MODULE TO DEFINE THIS INTERACTION
	3) CREATE SERVER createServer()
	4) CREATE FUNCTION FOR HANDLING REQUESTS WHICH INCLUDES A REQUEST AND RESPONSE VARIABLE
	5) START SERVER 
	CREATE A SERVICE WHICH LISTENS ON A PORT
	
	
	
	
Create a web server
	var http = require('http');
	http.createServer(onRequest).listen(8888);
	console.log('Server is now running on port 8888');
	
		Note : http.createServer(requestListener)	
			requestListener is the code which shall execute
			whenever the user makes a request to your server 
	
	
	
	
	function onRequest(request,response){
		
	}
		request = from client
		response = to client 
	http.createServer(function(request,response){
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("Hello World!");
		response.end();
	}).listen(8080);
	
	200 => all OK
	
	Content-Type : text/plain  or text/html
	
	
	Example : see node_http_server_01.js		
	
	
	request.url
		
		holds the url string from the incoming request 
			
	url.parse : parses incoming url to obtain the file path of the 
			requested file or folder (this will be the relative path)
			
			(url.parse(request.url)).pathname
			
	process.cwd() returns the current working directory (absolute path)
	
	join the cwd() to url.parse to give the full, absolute, path to requested file
	
	http.createServer().listen()
	
		OR 
		
		var server = http.createServer..
		server.listen()
	
		Note : Client sends two requests, the second one for the 
		favicon icon image to accompany the page 
		
		
		
		
		
		
		
		
		
	RESPONSE WITH PLAIN TEXT
	
		\n adds a new line if content-type is text/plain 
	
	
	
	
	
	RESPONSE WITH A FILE
	
	
		fs.createReadStream(page).pipe(response);
			pipe means we are going to send the stream and	
			pipe it through the response object back to 
			the client 
		
	
		
		
		
		
		
	
	
	
	
SUMMARY : CREATE FIRST BASIC HTTP WEB SERVER 
	var http=require('http');
	var server = http.createServer(function (request, response) {
		response.write('hello client!');
		response.end();
	});
	server.listen(8080);
	console.log('listening 8080');
		TEST IN BROWSER HTTP://LOCALHOST:8080 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	
	
CALLBACKS AND ERROR HANDLING 
	CALLBACK FUNCTION HAS TWO OR MORE PARAMETERS : FIRST ONE IS ERROR 
	
		function(err,x,y,z){
			if(err){
			LOG ERROR;
			return;
			}
			
			//CODE USING x,y,z
		}
		
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
	
GETTING DATA WITH URL.PARSE 
	PARSE A URL TO GET THE QUERY STRINGS FROM IT IE 
		
	request.url  holds the full url string from the incoming request 
	
	In this case, URL = http://localhost:8080?id=7&name=phil
	
	
			
			var http=require('http');
			var url = require('url');
			var server = http.createServer(function(req,res){
				var url_parts = url.parse(req.url,true);
				var query=url_parts.query;
				console.log("Incoming URL is " + req.url);
				console.log("Query String Is " + url_parts);
				console.log("Query Is " + query);
				console.log("id = " + query.id);
				console.log("name = " + query.name);
				});
			server.listen(8080);
			console.log("listening 8080");
				node_62_url_parse.js 
		
		
		
		
		
		
		
	

	
	

First Express App

Var express = require('express');
Var app=express();
App.get('/',function(req,res){})    GET requests to a given path
App.listen(3000,function(){})    LISTEN on 3000

		
		
Serving Static Files In Node

This example shows, without any framework (eg Express), how it
is possible to serve up static content in Node
see node_93_readFile.js for the example code:

const http=require('http');
const fs = require('fs');
const hostname="127.0.0.1";
const port = 3000;
fs.readFile('node_93_readFile1.htm',(err,html)=>{
	if(err){throw err;}
	const server = http.createServer((req,res)=>{
		res.statusCode=200;
		res.setHeader('Content-type','text/html');  // alternate /plain /html
		res.write(html);
		res.end();
	});
	server.listen(port,hostname,()=>{
		console.log('listening on port ' + port);
	});
});

		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
		
		
		
		
GETTING REQUEST DATA USING EXPRESS

	EXPRESS REQ REQUEST OBJECT 

	
		http://expressjs.com/en/4x/api.html#req
		The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. In this documentation and by convention, the object is always referred to as req (and the HTTP response is res) but its actual name is determined by the parameters to the callback function in which you're working.
		
		app.get('/user/:id', function(req, res) {
		  res.send('user ' + req.params.id);
		});
		
		
				
		req.app ==> app that is current right now 
	
			http://expressjs.com/en/4x/api.html#req.app
	
		
	
			see working example in Express_04 project
	
	
	
	
		
		
		
		
		
EXPRESS request.query
  
	CONTAINS URL OBJECT OF INCOMING REQUEST 
	
		node_63_express_url_parse.js
		
		
		
		
		
		
		
		
REQUEST METHOD = GET OR POST

	GET = READ INFO			DATA IN URL
	
		URL.PARSE TO GET INFO
	
	POST = SEND INFO		DATA NOT IN URL BUT IN BODY OF PAGE
	
		QUERYSTRING.PARSE(BODY) TO GET INFO
	var util=require('util'),
	url=require('url'),
	http=require('http'),
	qs=require('querystring');
	var server = http.createServer(function(req,res){
		if(request.method=='POST'){
			var body = '';
			request.on('data', function(data){
				body+=data;
			});
			request.on('end',function(){
				var POST = qs.parse.(body)
				console.log(POST);
				response.writeHead(200);
				response.write(JSON.stringify(POST));
				response.end();
			});
		}
		else if (request.method=='GET'){
			var url_parts=url.parse(request.url,true);
			response.writeHead(200);
			response.write(JSON.stringify(url_parts.query));
			response.end();
		}
	});
	server.listen(8080);
	
		
		
		Live code at node_70_request_method.js 
		
		Test with (1) GET using browser http://localhost:8080/?x=true&y=false
		
		          (2) POST using POSTMAN 
		
		
		
		
REQUEST METHOD : GET OR POST
	SECOND EXAMPLE USING A REAL FORM POSTING DATA
	
		node_78_web_server_form.js
		
		
		
REQUEST METHOD : POST
	if(req.method=='POST'){
		console.log('HTTP POST request received');
		res.write('Processing HTTP POST data\n\n');
		req.on('data',function(data){
			console.log(data);
			console.log(data.toString);
			data = data.toString();
			data = data.split('&');
			for (var i = 0; i < data.length; i++) {
			   var _data = data[i].split("=");
			   POST[_data[0]] = _data[1];
			}
			console.log(POST);
		});
		req.on('end',function(){
			res.write(JSON.stringify(POST));
			res.write("\n\nUsername is " + POST.username);
			res.write("\n\nPostcode is " + POST.postcode);
			res.end();
		})
	}
		see node_71_form_post.js 
		
		
		
POSTING DATA : QUERYSTRING.PARSE(BODY) TO GET POST DATA
		
		node_91_http_get_post_server.js
		
		node_http_server_03_querystring.js
				
				
			
					
			var qs = require('querystring');
			function (request, response) {
			
				if (request.method == 'POST') {
					var body = '';
					request.on('data', function (data) {
						body += data;
					});
					request.on('end', function () {
						var post = qs.parse(body);
								console.log(post.age);
					});
				}
			}
	
	
		
		
		
		
POSTING DATA ENCODED AS JSON
	enctype="application/json"
		
		function (req, res) {
			if (req.method == 'POST') {
				var jsonString = '';
				req.on('data', function (data) {
					jsonString += data;
				});
				req.on('end', function () {
					console.log(JSON.parse(jsonString));
				});
			}
		}
		
			node_88_post_json.js 
				
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
NODE SENDING POST REQUEST TO ANOTHER NODE SERVER 
	http://stackoverflow.com/questions/9768192/sending-data-through-post-request-from-a-node-js-server-to-a-node-js-server
	
	https://www.npmjs.com/package/request
	
	GET CODE
				npm install request 
				
				var request=require('request');
				function httpResponse(error,response,body){
				  if(error){
					console.log('Error ' + error);
				  }
				  else{
					console.log("\n\nBody Returned Is \n\n" + body)
					console.log("\nResponse Status Code is " + response.statusCode);
				  }
				}
				request('http://www.google.com',httpResponse);
				
				
						node_90_http_request.js
						
					
						
	POST CODE
			
			
		    var requestString={
					url: 'http://localhost:8080',       //URL to hit
					qs: {id: 777, name: 'phil'},        //Query string data
					method: 'POST', //Specify the method
					headers: {                          //Optional
						'Content-Type': 'MyContentType',
						'Custom-Header': 'Custom Value'
					}
				}			
				
			
				function httpRequest(error, response, body){
					if(error) {
						console.log(error);
					} else {
						console.log(response.statusCode, body);
					}
				});
				
				
				request(requestString,httpResponse); 
				
	
Express layout engines - Jade, EJS, Hogan

NODE TEMPLATING
THREE MAIN TYPES OF TEMPLATING
	EJS EMBEDDED JAVASCRIPT
	
	JADE (NOW PUG!?)
	
	HOGAN
	
PARTIAL TEMPLATES ARE JUST PART OF A PAGE
Jade Layout Engine

http://jade-lang.com/
	
http://html2jade.org/
		
http://html2jade.aaron-powell.com/
Note : JADE does not need semicolons after any line (in fact it forbids it and will fail!)
element(attribute='value')
#id
.class
p text
p.
 text
 text
button#button01(type='button') Click Here
doctype html
html(lang="en")
  head
	title pageTitle
	script(src='https://code.jquery.com/jquery-2.2.0.js')
	script(type='text/javascript').
	  if (foo) {
		 bar(1 + 5)
	  }
	script.
	   var a = [1,2,3];
	   function displayArray(element,index,array){
		 
	   }
	   a.forEach(displayArray(element,index,array));
  body(onload="output()")  
	h1 Jade
	#container
		p test
	p.
		Jade is a terse and simple
		templating language with a
		strong focus on performance
		and powerful features
	.col
	  p test
  
	 
P
| Hello,
 = name
From http://www.creativebloq.com/web-design/templating-engines-9134396 
|   what follows is plain text
= name    variable
Each person in people
li=person
         LOOPS OVER ARRAY

EJS Embedded Javascript

Use EJS or Angular or Jade to create templates for our web pages to hold field data
EJS TEMPLATE
https://scotch.io/tutorials/use-ejs-to-template-your-node-application
	ENTRIES.MAP 
	
	EJS MAP FILTER
	
		SPECIFY WHICH PROPERTY OF AN OBJECT YOU WANT TO PERFORM FILTERING ON
		
			<%=: movies | map:'name' | sort | first %>.          
			
							GET FIRST ITEM IN MOVIES ARRAY WHEN SORTED BY NAME ALPHABETICALLY
TEMPLATING WITH MUSTACHE / HOGAN
	MUSTACHE CODE IS MINIMALISTIC
	
	FIELDS DISPLAYED USING {{ ITEM }}
	
	{{ ! COMMENT IN HOGAN }}
	
	
	
	NPM INSTALL HOGAN.JS
	
	FIRST HOGAN APPLICATION
	
		var hogan = require('hogan.js');
		var template = '{{message}}';
		var context = {message: 'Hello template!'};
		var template = hogan.compile(template);
		console.log(template.render(context));
		
		CREATE AND RUN NODE_HOGAN_01.JS TO SEE THIS IN ACTION
	
	
	LOOPING THROUGH AN ARRAY WITH HOGAN
	
		SECTIONS: ITERATING THROUGH MULTIPLE VALUES
		Although Hogan doesn't allow the inclusion of logic in templates, it does include an
		elegant way to iterate through multiple values in a context item using Mustache sections.
		The following context, for example, contains an item with an array of values:
		var context = {
		students: [
		{ name: 'Jane Narwhal', age: 21 },
		{ name: 'Rick LaRue', age: 26 }
		]
		};
		If you want to create a template that will display each student in a separate HTML paragraph,
		with output similar to the following, it would be a straightforward task using a
		
		Hogan template:
		<p>Name: Jane Narwhal, Age: 21 years old</p>
		<p>Name: Rick LaRue, Age: 26 years old</p>
		
		The following template would produce the desired HTML:
		
		{{#students}}
		<p>Name: {{name}}, Age: {{age}} years old</p>
		{{/students}}
		
			CREATE AND RUN NODE_HOGAN_02.JS TO SEE THIS WORKING
			
			
		
		
		IF ARRAY IS BLANK
		
			{{^students}}
			<p>No students found.</p>
			{{/students}}
			
	HOGAN PARTIAL TEMPLATING EXAMPLE
	
		SEE BOOK PAGE 279 FOR GOOD EXAMPLE
		
	
JADE  (PUG)

	VARIATIONS
	
			EXPRESS project --hogan 
					
					https://www.npmjs.com/package/hjs HOGAN JS IS COMPILER FOR MUSTACHE TEST SUITE TEMPLATE LANGUAGE
					
						http://twitter.github.io/hogan.js/
						
					MUSTACHE
					
						http://twitter.github.io/hogan.js/ 
						
						http://mustache.github.io/#demo
						
						https://github.com/raycmorgan/Mu
						
			
			EXPRESS project -c less             -C = CSS
								-c stylus                    
									(no support for SASS)
Ember JS

Ember : was created by Yehuda Katz who was a member of the Ruby on Rails team.   Adopts 'convention over configuration' : be productive first without worrying about fine detail 'configuration' until later???
'convention over configuration' : be productive first without worrying about fine detail 'configuration' until later???
Ruby On Rails

Ruby on Rails adopts 'convention over configuration' : be productive first without worrying about fine detail 'configuration' until later???
Service Workers

https://jakearchibald.github.io/isserviceworkerready/
Yeoman

Installs scaffolding for us
Install yo
npm install -g yo
npm install -g generator-angular 
		
		
Express And Angular

		
		
	
Combine both in one scaffolding
https://www.npmjs.com/package/generator-express-angular
Install the module
	npm install -g generator-express-angular
Make a new directory, and cd into it:
	mkdir my-new-project && cd $_
		
	
Run yo express-angular, optionally passing an app name:
yo express-angular [app-name]
Express And Angular Walkthrough 1

https://coderwall.com/p/ww38iq/angular-and-express-setup
Create a folder
express <<appname>>
cd <<appname>> && npm install    
	
STREAMS AND EVENTS

	
	WE WILL BE LOOKING AT EVENTS IN MORE DETAIL LATER ON IN THE COURSE BUT BE AWARE FOR NOW THE BASIC EVENTS WILL BE
	
	request.on ('data', function(data){});
	request.on ('end',function(){});
	
	THESE OCCUR WHEN STREAMING DATA FROM A TO B
	
	
	REQUEST DATA IS USED AS A 'STREAM'
		
		HTTP Request Body
			When receiving a POST or PUT request, the request body might be important to your application. 
			
			Getting at the body data is a little more involved than accessing request headers. 
			
			The request object that's passed in to a handler implements the ReadableStream interface. 
			
			This stream can be listened to or piped elsewhere just like any other stream. 
			
			We can grab the data right out of the stream by listening to the stream's 'data' and 'end' events.
			The chunk emitted in each 'data' event is a Buffer. If you know it's going to be string data, the best thing to do is collect the data in an array, then at the 'end', concatenate and stringify it.
		  
		  
	RESPONSE DATA CAN BE SENT AS A STREAM
		
			During the 'response' event, one can add listeners to the response object; particularly to listen for the 'data' event.
			If no 'response' handler is added, then the response will be entirely discarded. However, if you add a 'response' event handler, then you must consume the data from the response object, either by calling response.read() whenever there is a 'readable' event, or by adding a 'data' handler, or by calling the .resume() method. Until the data is consumed, the 'end' event will not fire. Also, until the data is read it will consume memory that can eventually lead to a 'process out of memory' error.
		  
		  
STREAM

		  
	Readable Stream
			A readable stream lets you read data from a source. The source can be anything. It can be a simple file on your file system, a buffer in memory or even another stream. As streams are EventEmitters, they emit several events at various points. We will use these events to work with the streams.
	Reading From Streams
		The best way to read data from a stream is to listen to data event and attach a callback. When a chunk of data is available, the readable stream emits a data event and your callback executes. 
			
		The function call fs.createReadStream() gives you a readable stream. Initially, the stream is in a static state. As soon as you listen to data event and attach a callback it starts flowing. After that, chunks of data are read and passed to your callback. The stream implementor decides how often data event is emitted. For example, an HTTP request may emit a data event once a few KB of data are read. When you are reading data from a file you may decide you emit data event once a line is read.
		When there is no more data to read (end is reached), the stream emits an end event. In the above snippet, we listen to this event to get notified when the end is reached.
			DATA EVENT 1 
			DATA EVENT 2
			DATA EVENT 3
			END EVENT 	
		
		
			lab 18,19,22  ?88/89/90/91/92
			lab node_stream and node_pipe or can do later
		
		
		
	
	PIPING EXAMPLE
	
		request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))
				
	You can also stream a file to a PUT or POST request. This method will also check the file extension against a mapping of file extensions to content-types (in this case application/json) and use the proper content-type in the PUT request (if the headers don't already provide one).
		fs.createReadStream('file.json').pipe(request.put('http://mysite.com/obj.json'))				
	
	REQUEST 'RESPONSE' EVENT WHEN DATA RECEIVED
	
	
			Request emits a "response" event when a response is received. The response argument will be an instance of http.IncomingMessage.
			request
			  .get('http://google.com/img.png')
			  .on('response', function(response) {
				console.log(response.statusCode) // 200 
				console.log(response.headers['content-type']) // 'image/png' 
			  })
			  .pipe(request.put('http://mysite.com/img.png'))
			
			
			
			
	
	
	
	
	
REQUEST.HEADERS()
	
	
	REQUEST.HEADERS() WILL HOLD INFORMATION ABOUT THE HEADER INFORMATION SENT IN WITH THE REQUEST 
	
		
	REQUEST.POST  :   POSTING DATA SIMILAR TO A HTTP POST REQUEST ON HTML FORM SUBMISSION
	
		IN THE SAME WAY AN HTML FORM CAN BE SUBMITTED AND THE DATA 'POSTED' TO A REMOTE SERVER, SO NODE CAN USE THE POST METHOD OF THE REQUEST OBJECT NOT TO GET DATA BUT TO POST DATA
		
		
		
		
		
	REQUEST.POST : ONE PARAMETER
	
					
			request.post('http://service.com/upload', {form:{key:'value'}})
			// or 
			request.post('http://service.com/upload').form({key:'value'})
		
			
			
	
	REQUEST.POST : MULTIPLE PARAMETERS
	
	
	
		https://github.com/form-data/form-data
		
		npm install form-data 
		
		
		var formData = {
		  // Pass a simple key-value pair 
		  my_field: 'my_value',
		  // Pass data via Buffers 
		  my_buffer: new Buffer([1, 2, 3]),
		  // Pass data via Streams 
		  my_file: fs.createReadStream(__dirname + '/unicycle.jpg'),
		  // Pass multiple values /w an Array 
		  attachments: [
			fs.createReadStream(__dirname + '/attachment1.jpg'),
			fs.createReadStream(__dirname + '/attachment2.jpg')
		  ],
		  // Pass optional meta-data with an 'options' object with style: {value: DATA, options: OPTIONS} 
		  // Use case: for some types of streams, you'll need to provide "file"-related information manually. 
		  // See the `form-data` README for more information about options: https://github.com/form-data/form-data 
		  custom_file: {
			value:  fs.createReadStream('/dev/urandom'),
			options: {
			  filename: 'topsecret.jpg',
			  contentType: 'image/jpg'
			}
		  }
		};
		request.post({url:'http://service.com/upload', formData: formData}, function optionalCallback(err, httpResponse, body) {
		  if (err) {
			return console.error('upload failed:', err);
		  }
		  console.log('Upload successful!  Server responded with:', body);
		});
			
	
	
	
	
	
	NODE SENDING DATA USING send-data module 
		https://www.npmjs.com/package/body
		
		var sendJson = require("send-data/json")
		  
		  
		  
	
	
	
		
		
		
		
		
		
		
		
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
	
	However, the path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it's safer to use the absolute path of the directory that you want to serve:
		app.use('/static', express.static(__dirname + '/public'));
	
	
	
			see node_87_express_static.js for a web page displaying both css and javascript from files delivered from the assets/public directory 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
FILTER ROUTES/PATHS BASED ON SEARCH CRITERIA IN THE URL AND THE VALUES OF PARAMETERS IN THE ROUTE 
	CAN FILTER REQUESTS ACCORDING TO SET SPECIFIC SEARCH RESULTS EG 
	
	http://expressjs.com/en/guide/routing.html
	
	https://www.npmjs.com/package/path-to-regexp
	
	CAN USE 'REGULAR EXPRESSIONS' TO CREATE THE FILTER SEARCHES 
	
		? = OPTIONAL (ONE CHARACTER)  (SUFFIX EG A?)
		* = WILDCARD FOR ANY LENGTH
	
		+ = ONE OR MORE                A+ MEANS AT LEAST ONE MATCH OF A 
	
	
	LIVE TESTER AT http://forbeslindesay.github.io/express-route-tester/
	
	
	
	
EXPRESS : FILTER PATH 
	path can be a string representing a path, a path pattern, a regular expression to match paths, or an array of combinations thereof.
	
	Path	
		
		http://expressjs.com/en/4x/api.html
		
		// will match paths starting with /abcd
		app.use('/abcd', function (req, res, next) {
		  next();
		});
	See also Usage table at http://expressjs.com/en/4x/api.html#app.use 
	
	
						
						
	
EXPRESS EXTERNAL ROUTING 
	YOU CAN MOVE YOUR ROUTES TO AN EXTERNAL JS FILE 
	
	http://stackoverflow.com/questions/22673332/express-4-router-with-external-file
	
	
	
	APP.JS 
	
		var express = require('express');
		var app = express();
		require('./routes')(app);     ==> REQUIRE EXTERNAL ROUTES FILE 
	ROUTES.JS 
	
		module.exports = function(app) {
		  app.get('/pub', function(req, res) {
			console.log('got the get!');
			res.end();
		  });
		};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
EXPRESS APP IN WEBSTORM	
	
	Webstorm11 ==> File => New Project => Express 
	
		/bin/www.js  ==> run and go to http://localhost:3000
		
	www is your startup script and kicks off app.js 
	
	public is files that users can access eg images, stylesheets
	
	routes correspond to our pages (brains of page)
	
		index
		
		users 
		
	EJS : <%= title %> to denote variables 
	EJS Embedded Javascript 
		<%   regular_javascript(no variables) %>
		<%=  javascript_with_variables        %>
	
	www.js kicks off project
	app.js is core file of project 
		determine URL and response 
		
	app.use will determine correct action 
	app.use('/')  go to home directory
	app.use('/users') go to users 
		Check out routes folder to determine where to go for each one 
		
		In routes file, have 'render' command 
		response.render('index') where 'index' is the 'view'
		Now can go to the view for index and display the page 
	
		Also pass in a variable {title: 'Express'}
	
	Express : App.Locals Variable to hold eg the app name and can hold other variables
	
		SET APP.LOCALS FIELD FOR EXAMPLE IN APP.JS
		
			app.locals.testField="1234";
			
		READ APP.LOCALS FIELD EG IN INDEX PAGE
			index.ejs 
		
				<%= testField %>
			
		
		
		
		
	Express : EJS Variables
	
	
		app.js 
		
			<% for (var i = 0; i<=10; i++){  %>
				<%= i %>
			<% } %>
		
	
	
	
	Express : Add A Header eg Menu To A Page 
	
		1) Create folder views => templates
		2) Create file views => templates => header.ejs 
		3) header.ejs content <a href="#">Home</a> etc menu
		4) index.ejs file add <% include /templates/header.ejs %>
		
		run the file and it should work 
		
	
	
	
	
	
	
	
	
	Express : Add a new page 
	
		1) Create views => about.ejs 
		2) copy content of index.ejs to about.ejs and amend accordingly
		3) app.js ==> add to 'routes' section  
		
			var about = require('./routes/about');
	
		4) app.use => add about
		
			app.use('/about', about);
			
		5) copy contents of index.js to about.js and modify accordingly 
		
	EXPRESS : PARSING JSON TO VIEW
		1) PUT SAMPLE JSON INTO A FILE eg videodata.json 
			add in app.js a new local variable 
			
			app.locals.videodata = require('./videodata.json');
			
			This creates a variable containing the JSON data from file.
			
		2) index.ejs file
		
			<%= videodata.categoryName %>
			
			
		3) To parse a loop of data from JSON file to screen 
		
			<ul>
				<% videodata.categories.forEach(function(item){ %>
				<li>
				  <%= item.categoryName %>
					<ul style="margin:20px 0">
					  <li>
						ID : <%= item.categoryID %>
					  </li>
					  <li>
						<%= item.categoryDescription %>
					  </li>
					</ul>
				</li>
				<% }); %>
			</ul>
		
		
		
				
	
	
	
	
	
	
		
		
		
		
		
		
		
			
		
	EXPRESS : POSTING DATA USING AJAX TO AN EXPRESS WEB SERVER
		http://stackoverflow.com/questions/11115508/in-node-js-how-do-i-communicate-with-client-side-javascript
		
		Set up Express and have your client side code communicate via Ajax (for example, using jQuery).
		
		Server 
		
		
			(function() {
			  var app, express;
			  express = require("express");
			  app = express.createServer();
			  app.configure(function() {
				app.use(express.bodyParser());
				return app.use(app.router);
			  });
			  app.configure("development", function() {
				return app.use(express.errorHandler({
				  dumpExceptions: true,
				  showStack: true
				}));
			  });
			  app.post("/locations", function(request, response) {
				var latitude, longitude;
				latitude = request.body.latitude;
				longitude = request.body.longitude;
				return response.json({}, 200);
			  });
			  app.listen(80);
			}).call(this);
		Client
		
			var latitude = 0
			  , longitude = 0; // Set from form
			$.post({
			  url: "http://localhost/locations",
			  data: {latitude: latitude, longitude: longitude},
			  success: function (data) {
				console.log("Success");
			  },
			  dataType: "json"
			});
			
			
		
	EXPRESS : GENERATING VIEWS WITH JADE 
		npm install jade
		
		https://www.npmjs.com/package/jade-browser
		
		https://github.com/pugjs/jade
		
		http://jade-lang.com/tutorial/
		
		http://projects.jga.me/clientjade/
		
			http://projects.jga.me/clientjade/example/
		
			view-source:http://projects.jga.me/clientjade/example/
		
			http://projects.jga.me/clientjade/example/test1.jade
		
			http://projects.jga.me/clientjade/example/test2.jade
			
			
			
		var express = require('express')
		var app = module.exports = express.createServer();
		app.configure(function(){
			app.set('views', __dirname + '/views');
			app.set('view engine', 'jade');
		});
		app.get('/', function(){
			res.render('index', {option: 'value'});
		});	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
EVENTS
	GOING INTO SHOP
	
	1) YOU OPEN THE DOOR : THIS IS THE EVENT
	
	2) BELL RINGING = EVENT HANDLER or in this instance this would be the BELL_RUNG emitted EVENT as part of the DOOR_OPEN EVENT which may have other events emitted with it as well, as in DOOR_SHUT, all attached to the DOOR object.
	3) SHOPKEEPER COMES OUT TO GREET YOU : THIS WOULD BE THE CODE THAT IS RUNNING (METHOD) INSIDE THE EVENT HANDLER
	
	var events = require('events');
	
	var eventEmitter = new events.eventEmitter();
	
	Node_event_01.js and node_event_02.js and node_event_03.js
		
						
						
						
Event Emitter 
When to use Event Emitters.
	USEFUL WHEN DEALING WITH I/O EVENTS ACROSS A NETWORK
	
	WE CAN 'EMIT' AN EVENT AT WILL BUT ALSO STREAMS AND BUFFERS AND FILESYSTEM OBJECT FOR EXAMPLE EMIT THEIR OWN DEFAULT OBJECTS LIKE ON('DATA') OR ON('FINISH')
	
	USE THE 'EMIT' EVENT WHEN YOU NEED TO COMMUNICATE ACROSS AN I/O CONNECTION EG A TCP/IP SOCKET FOR A CHAT-STYLE APPLICATION.  OTHER EXAMPLES WOULD BE TWITTER-STYLE NOTIFICATION, OR FACEBOOK-STYLE NOTIFYING OF POSTS ETC
	
	BASICALLY ANY FUNCTION CAN EMIT EVENTS AND IT CAN BE VERY USEFUL IN THESE SITUATIONS
	
		CLIENT < == > SERVER     2-WAY 
		
		SERVER  ===>    MANY CLIENTS  : SERVER CAN EMIT EVENTS AND NOTIFY CLIENT
		
		
	Further reading
	
		https://nodejs.org/api/events.html
		
		
	EMITTER OBJECT
	
		EVENT EMITTED
		
			LISTENER 'FUNCTION' OBJECT IS CALLED
			
	fs.ReadStream emits an event when the file is opened; 
	
	a stream emits an event whenever data is available to be read.
	
	All objects that emit events are instances of the EventEmitter class. 
	
	
	These objects expose an eventEmitter.on() function that allows one or more Functions to be attached to named events emitted by the object. 	
	
	
	
		const EventEmitter = require('events');
		function MyEmitter() {
		  EventEmitter.call(this);
		}
	
		const myEmitter = new MyEmitter();
		
		myEmitter.on('event', () => {
		  console.log('an event occurred!');
		});
		
		myEmitter.emit('event');
		
	Parameters passed to events as arguments
	
		const myEmitter = new Emitter();
		myEmitter.on('event',function(a,b){
			console.log(a,b);
		});
		myEmitter.emit('event','first','second');
		
	Or
	
		const myEmitter = new MyEmitter();
		myEmitter.on('event', (a, b) => {
		  console.log(a, b);
		});
		myEmitter.emit('event', 'first', 'second');
		
		
		
	Multiple Event Listeners
	
		
		const EventEmitter = require('events');
		const myEE = new EventEmitter();
		
		myEE.on('foo', () => {});
		myEE.on('bar', () => {});
		const sym = Symbol('symbol');
		myEE.on(sym, () => {});
		console.log(myEE.eventNames());
		  // Prints [ 'foo', 'bar', Symbol(symbol) ]
		  
		  
	Note multiple event listeners are executed SYNCHRONOUSLY in order.  If asynchronous is desired then within each synchronous function, an asynchronous call would have to be made....
	
	
	
	
	
	LIST EVENT LISTENERS FOR ANY PARTICULAR EVENT
	
		myEmitter.listeners('thisEvent')  => ARRAY
	
	
	
	
	
	
	Event Emitter Example
	
		var EventEmitter = require('events').EventEmitter;
		var radium = new EventEmitter();
		radium.on('radiation', function(ray) {
			console.log(ray);
		});
		setInterval(function() {
			radium.emit('radiation', 'GAMMA');
		}, 1000);
	
	
	
		
	
	
	ONCE EVENT METHOD
	
	
		CAN CALL IT LIKE THE 'ON' METHOD BUT IT WILL ONLY FIRE ONCE AND NEVER AGAIN
		
		ee.once("firstConnection", function () { console.log("You'll never see this again"); });
		
		ee.emit("firstConnection");
		
		ee.emit("firstConnection");
	
	
			==> WILL ONLY FIRE ONCE
			
			
			
			
	REMOVE EVENT LISTENERS 
	
		FOR ONE EVENT
	
			myEmitter.removeAllListeners("thisEvent");
	
		FOR ALL EVENTS
		
			myEmitter.removeAllListeners();
			
			
		
	Set maximum listeners (default is 10)
		
			myEvent.setMaxListeners(20);
		
		
		
	Creating an Event Emitter MODULE
		We can now create a module which EXPORTS the ON Event Functions which can be called.
		
		
		Firstly we have to extend the base EventEmitter class using 'util' module
		var util = require('util');
		util.inherits(DerivedClass,BaseClass);
		
		EG
		
		var util = require('util');
		util.inherits(Radio, EventEmitter);
		and build a 'Radio' module with open and close events
		
		Full code at
		
			http://www.hacksparrow.com/node-js-eventemitter-tutorial.html
	
	
	
	
	
	
	
Error Handling 
Callbacks: Error-first.
	FIRST ARGUMENT OF THE CALLBACK IN NODE CORE IS RESERVED FOR THE CALLBACK
	callback(err, param1,param2){
		if(err){
			// DO SOME CODE
			RETURN;
		}
		
		// CODE IF NO ERROR
	}
	
	
	IF ERROR IS NOT PRESENT IT WILL BE SET TO NULL
	
	
	
	fs.readFile('/foo.txt', function(err, data) {
	  // TODO: Error Handling Still Needed!
	  console.log(data);
	});
	
	fs.readFile('/foo.txt', function(err, data) {
	  // If an error occurred, handle it (throw, propagate, etc)
	  if(err) {
		console.log('Unknown Error');
		return;
	  }
	  // Otherwise, log the file contents
	  console.log(data);
	});
	PROPOGATING ERRORS BACK UP THE CHAIN
	
		YOU CAN HANDLE AN ERROR AT THIS LEVEL
		
		OR
		
		YOU CAN PROPOGATE THE ERROR BACK UP TO THE HIGHER LEVEL TO HANDLE
		
		fs.readFile('myfile.txt',function(err,data){
			if(err.fileNotFound){
				return this.sendErrorMessage('File Does Not Exist');
			}
			if(!err.noPermission){
				return next(err);
			}
		
		});
Errors in Event Emitters.
	Unlike in a CALLBACK where the FIRST PARAMETER IS THE ERROR VARIABLE, an EVENT CAN FIRE THE ERROR EVENT TO NOTIFY OF ERRORS
	
	var err = new Error("Can't divide by zero")
    this.emit('error', err)
	Embed this within the following code:
	
	
	
	
	
	// Definite our Divider Event Emitter
	var events = require('events')
	var Divider = function(){
		events.EventEmitter.call(this)
	}
	require('util').inherits(Divider, events.EventEmitter)
	Divider.prototype.divide = function(x,y){
		// if error condition?
		if ( y === 0 ) {
			// "throw" the error safely by emitting it
			var err = new Error("Can't divide by zero")
			this.emit('error', err)
		}
		...
    }
	var divider = new Divider()
	
	divider.on('error', function(err){
		// handle the error safely
		console.log(err)
	})
	
	divider.divide(4,0)
	
	
	
	
	
	
ERROR HANDLING : TRY .. CATCH .. FINALLY 
	TRY .. CATCH  ALL ERRORS
	
	
	
	
	
	
	
	
	
	
	
	
Uncaught Exceptions.
	HANDLE EVERY EXCEPTION!!!
	
	UNHANDLED EXCEPTIONS WILL TERMINATE THE NODE PROCESS !!!!!  DO YOU REALLY WANT TO DO THIS???  
	
	FOREVER AND PM2 ETC WILL NOT HELP YOU IF YOU HAVE GENUINELY NOT CODED PROPERLY; IF THAT EXCEPTION RECURS THEN YOU WILL BE IN A LOOP OF RECOVERY AND FAILURE.
	
	
	
	
	
	
ERROR HANDLING : DOMAINS 
	var d = require("domain");
	
	d = domain.create()
	
	d.on(error){ 
		// NOTIFY ADMIN 
		// SPAWN NEW PROCESS/THREAD ETC
		// TERMINATE 
	}
	
	d.run(fuction(){ 
		// ALL NODE CODE GOES HERE	
	}
	
	 
	CODE RUNS 'IN' A DOMAIN 
	
		EVENT EMITTER OBJECT 
	
		IF UNHANDLED EXCEPTION OCCURS THEN NODE 'NOTIFIES' THIS DOMAIN WHICH
		CAN HANDLE THE UNCAUGHT EXCEPTION (EG BY REFUSING FUTURE REQUESTS AND GRACEFULLY TERMINATING THIS PROCESS) 
		https://engineering.gosquared.com/error-handling-using-domains-node-js
				
				
		var domain = require('domain');
		var d = domain.create();
		// Domain emits 'error' when it's given an unhandled error
		d.on('error', function(err) {
		  console.log(err.stack);
		 // Our handler should deal with the error in an appropriate way
		});
		// Enter this domain
		d.run(function() {
		  // If an un-handled error originates from here, process.domain will handle it
		  console.log(process.domain === d); // true
		});
		// domain has now exited. Any errors in code past this point will not be caught.
				
	
	
	
	
	
	
	
STREAMS AND BUFFERS
	Streams 
	
		Readable and writable streams an alternative way of interacting with (file|network|process) I/O.
	Buffers 
	
		Buffers provide a binary-friendly, higher-performance alternative to strings by exposing raw memory allocation outside the V8 heap.
	
	Streams are an alternative way of accessing data from various sources such as the network (TCP/UDP), files, child processes and user input. In doing I/O, Node offers us multiple options for accessing the data:
	
					Synchronous		Asynchronous
	
	Fully 
	buffered		readFileSync()	readFile()
	
	
	Partially 
	buffered 
	(streaming)		readSync()		read()
									createReadStream()
	
	
	
	
Buffers 
Why Buffers exist.
	BUFFERS ARE FIXED-SIZED DATA STRUCTURES USED TO HOLD BINARY DATA.
	
	THEY ARE USED TO PROVIDE MUCH HIGHER PERFORMANCE THAN STRING DATA BY EXPOSING AREAS OF RAW MEMORY OUTSIDE OF THE V8 JAVASCRIPT ENGINE, IN ORDER TO READ AND WRITE BINARY RAW DATA EXTREMELY QUICKLY AT THE LIMITS OF THE SPEED OF THE COMPUTER.
	
	WHEN WE ARE 'STREAMING' DATA WE CAN ONLY STREAM IT IN 'CHUNKS' OF A GIVEN SIZE, ALSO IT CAN ONLY BE USED AND STORED IN DISCRETE SIZES.
	
	THE BUFFER IS THE UNIT OF STORAGE FOR BINARY STREAMS OF DATA
	
	STREAMS BY DEFAULT PRODUCE DATA OF DATA-TYPE 'BUFFER' UNLESS THE ENCODING IS SPECIFIED EG UTF-8
	
		STRINGS USED WITH TEXT DATA
		BUFFER USED WITH BINARY DATA
	
	https://docs.nodejitsu.com/articles/advanced/buffers/how-to-use-buffers/
	
	JAVASCRIPT IS DESIGNED NATIVELY TO WORK WITH STRINGS EG UTF-8 CHARACTER ENCODING
	
	NODE TO ADD STREAMING BINARY DATA HAS CREATED THE 'BUFFER'
	Buffering is useful if the data to be transmitted if of a limited or fixed or containable size (with a maximum ceiling which can be determined and fitted into RAM easily).
	
	If large amounts of data are to be transferred then STREAMING is required by CHUNKING up the READSTREAM before being PIPED or WRITTEN to the WRITESTREAM or other I/O output source.
	
	
Creating Buffers.
	BUFFERS ARE NOT RESIZABLE 
	
	Const buffer = Buffer.alloc(8)  
	
					new buffer length 8 bytes
		
	Const buffer = Buffer.alloc(8,1) 
					fill new buffer length 8 bytes with 0x01
	
	NOTE : Use of the 'new' keyword is now deprecated
	
		Var buffer = new Buffer(8);  
							
							empty buffer 8 bytes
		
		Var buffer = new Buffer([1,2,3,4,5,6])           
					
							filled buffer
		
		Var buffer = new Buffer("this is a string","utf-8");   
		
						also supports ascii, base64
		
	
		
READ FROM A BUFFER
	Buffer.toString();
		
	Buffer.toString('utf-8');
		
	Buffer.toString('utf-8',0,10)             
	
			START AND END BYTES
		
		
WRITE TO A BUFFER
	
	Buffer.write("Hello","utf-8");
		
		THIS WILL RETURN 5 MEANING WE WROTE TO 5 BYTES OF THE BUFFER
			
	
	Buffer.write("World",5,"utf-8")           
	
		5 is the offset in bytes
		
	CHECK FOR DATATYPE BUFFER
	
		Buffer.isBuffer(OBJECT)
			
	CHECK HOW MANY BYTES IT WILL TAKE TO ENCODE A STRING
	
		Buffer.byteLength(myString)
		
	HOW MANY BYTES LONG IS THE BUFFER
	
		Buffer.length
	
	
	BUFFER : SET CHUNK SIZE
	
		var CHUNK_SIZE = 10 * 1024 * 1024, // 10MB
		
		buffer = new Buffer(CHUNK_SIZE),
		
			From <http://stackoverflow.com/questions/25110983/node-reading-file-in-specified-chunk-size> 
		
		
		
		
Streams 
What are streams.
	
	https://nodejs.org/api/stream.html
	STREAMS ARE SINGLE-CHARACTER FLOWS OF DATA FROM ONE PLACE TO ANOTHER EITHER WITHIN A COMPUTER OR MORE LIKELY ACROSS A NETWORK
	
	STREAMS ARE UNIX PIPES
	
		A PIPE IS A MECHANISM BY WHICH WE PERMIT THE SYSTEM TO HANDLE MUCH OF THE DETAILS AND OVERHEAD OF WORRYING ABOUT HOW TO GET DATA CONSISTENTLY FROM A TO B ACROSS A NETWORK.
		
		ALSO THE OUTPUT FROM ONE PIPE CAN BE FED INTO THE INPUT OF THE NEXT PIPE WHICH IS VERY USEFUL
	
	STREAM IS AN EVENTEMITTER 
	
	STREAM CAN BE READABLE, WRITEABLE OR DUPLEX (BOTH READ AND WRITE)
	
	STREAMS BY DEFAULT PRODUCE DATA OF DATA-TYPE 'BUFFER' UNLESS THE ENCODING IS SPECIFIED EG UTF-8
	
	4 types of streams
		
		1) Readable
		2) Writable
		3) Duplex
		4) Transform
		
	Examples of readable streams include:
	
		- HTTP responses, on the client
		- HTTP requests, on the server
		- fs read streams
		- zlib streams
		- crypto streams
		- TCP sockets
		- child process 
				stdout 
				stderr
				stdin
		
		
	
READABLE STREAM API
	
	EVENTS
	
		DATA : EMITTED EACH TIME A CHUNK OF DATA IS RECEIVED
		END : WHEN NO MORE CHUNKS
		ERROR
	
	METHODS
		PAUSE()
		RESUME()
	RESUME METHOD : FLOWING AND NON-FLOWING MODE
		READABLE STREAMS HAVE TWO MODES
		
			FLOWING
			
			NON-FLOWING = PAUSED MODE
	
	
		FLOWING : DATA IS BEING STREAMED AS FAST AS POSSIBLE 
		
			ADD 'DATA' HANDLER
			CALL 'STREAM.RESUME()'
			CALL 'STREAM.PIPE()'
			
		
		PAUSED MODE
		
			YOU MUST EXPLICITLY CALL STREAM.READ() TO GET CHUNKS OF DATA OUT.
				
			CALL 'STREAM.PAUSE()'
			
			REMOVE 'DATA' HANDLER  THEN CALL 'STREAM.UNPIPE()'
	
	
	
	
		
	
	CHUNK
	
		IS WHAT COMES OUT OF A READSTREAM
		
		CHUNK.LENGTH IS AMOUNT OF BYTES BEING TRANSFERRED PER CHUNK
	
		CHUNK IS A BUFFER OR A STRING
	
	
	
	
	
	READABLE STREAM : READING FROM A FILE
	
	
	ON 'DATA'  FUNCTION(CHUNK)
		
			DATA STILL TO STREAM
			
			CHUNK HOLDS THE CURRENT PORTION OF DATA BEING STREAMED
	
	
	
	ON 'END
		FINALL CALLBACK
		
		
		
		
		SEE NODE_STREAM_01
	
WRITEABLE STREAM API
	METHODS
	
		WRITE() : RETURN TRUE IF ALL GOOD OR FALSE IF CAN'T WRITE RIGHT NOW UNTIL THE DRAIN EVENT OCCURS
		
		END()
	EVENTS
		PIPE	WRITE STREAM HAS DATA TO PIPE
		UNPIPE
		ERROR
		DRAIN
		FINISH
		
	
	
	PUSHING TEXT TO A STREAM IN ORDER TO PIPE IT
		stream2.push(myDate + \n);
		
		
	WRITING SYNCHRONOUSLY TO A STREAM WITH STRINGS
		DEFAULT IS UTF8
		
		SEE NODE_STRING_07.JS
	
	
	
			
		
	WRITEABLE STREAM 
		SET ENCODING ON A STRING ONLY
	
			writeableStream.write(data,'utf8');
			
			ENCODING CAN BE utf8, hex, null
			
			LIST OF ENCODINGS SUPPORTED IS 
			
					case 'hex':	
					case 'utf8':
					case 'utf-8':
					case 'ascii':
					case 'binary':
					case 'base64':
					case 'ucs2':
					case 'ucs-2':
					case 'utf16le':
					case 'utf-16le':
				
				https://github.com/nodejs/node/blob/master/lib/buffer.js
	WRITING : ENDING THE WRITE
	Writable.end(<chunk>/<buffer>, callback)
	
		writeStream.write('nearly there');
		writeStream.end('last line'	);
	
	
	
	
Flow Control.
	Piping will handle the flow control for you
	
Piping.
	MANAGES THE DATA FLOW FOR YOU
	PIPES WILL MANAGE THE FLOW OF DATA FOR YOU FROM A TO B, PLUS CAN BE FED FROM ONE PIPE TO ANOTHER JUST AS REAL WATER CAN BE.
	PIPES MANAGE THE DATA FLOW FOR YOU : YOU DO NOT NEED TO WORRY ABOUT HOW FAST OR SLOW THE DATA IS FLOWING - THE SYSTEM MANAGES THIS FOR YOU
	
	PIPE RETURNS THE DESTINATION STREAM SO YOU CAN CHAIN OR CONCATENATE PIPES
	
	PIPES CAN BE CHAINED TOGETHER AS WELL SO THE OUTPUT OF ONE PIPE IS PIPED TO ANOTHER PIPE
	
	
	
	readStream ==> pipe(do_something).pipe(writeSream)
	
	
	
	var fs = require ('fs');
	var readStream = fs.createReadStream('abcde.txt');
	var writeStream = fs.createWriteStream('abcdef.txt',{flags:'a'});
	
	readStream.pipe(writeStream);
	
	
	
	
	FS.CREATEREADSTREAM('ABC.ZIP').PIPE(UNZIP).PIPE(FS.CREATEWRITESTREAM('DEF.TXT'))
	
	
	
	
	
	var fs = require ('fs');
	var readStream = fs.createReadStream('abcde.txt');
	var writeStream = fs.createWriteStream('abcdef.txt',{flags:'a'});
	writeStream.on('pipe',function(source){
		console.log('pipe event');
		console.log(source === readStream);
	});
	
	readStream.pipe(writeStream);
	
	PIPING TO STDOUT AS WELL AS WRITESTREAM
	
		(WINDOWS THIS WOULD PRINT TO THE CONSOLE)
	var fs = require ('fs');
	var readStream = fs.createReadStream('abc.txt');
	var writeStream = fs.createWriteStream('abcd.txt',{flags:'a'});
	readStream.pipe(process.stdout);
	console.log(' ');
	readStream.pipe(writeStream);
	
	
	
	
Duplex Stream.
	Both read and write
	
	https://nodejs.org/api/stream.html#stream_class_stream_duplex_1
	
	A "duplex" stream is one that is both Readable and Writable, such as a TCP socket connection.
	Note that stream.Duplex is an abstract class designed to be extended with an underlying implementation of the stream._read(size) and stream._write(chunk, encoding, callback) methods as you would with a Readable or Writable stream class.
	
	
Transform Stream.
	TRANSFORMS THE STREAM IN SOME WAY
	https://nodejs.org/api/stream.html#stream_class_stream_transform_1
	1. INPUT ==> OUTPUT AS A HASH (FIXED LENGTH STRING)
	
				https://nodejs.org/api/crypto.html
	
	2. INPUT ==> OUTPUT COMPRESSED EG AS GZIP 
	
				https://nodejs.org/api/zlib.html

Chapter 3
 
View : Handlebars
 
Static Files
 
Git add -A
Git commit -m 'description'
 
 
 
GitIgnore
 
 
 
 
 
 
 
Testing (Chapter 5)
 
 
Page Testing : Mocha
HTML PRESENTATION AND FUNCTIONALITY
 
Cross-Page Testing 
HTML TALKING TO ANOTHER PAGE
 
Logic Testing : Javascript
 
 
Lint : Potential Errors
 
Link checking  : Link Checker
 
 
 
WRITE TESTS FIRST SO THEY FAIL INITIALLY SO WHEN THEY PASS YOU KNOW IT'S BECAUSE OF THE CODE YOU HAVE WRITTEN
 
 
 
 
Install Mocha
 
Npm install -g Mocha --save-dev
 
 
--save-dev    adds to Development Dependencies instead of runtime dependencies  (NOT DEPLOYED TO LIVE SITE)
 
 
ADD MOCHA FILES TO /PUBLIC FOLDER 
   mocha.js
  mocha.css
 
 
 
INSTALL CHAI ASSERTION LIBRARY SO RUN ASSERTION TESTS IN BROWSER
 
Npm install --save-dev chai
 
ADD CHAI TO /PUBLIC FOLDER     chai.js
 
 
 
 
 
TESTS : TURN ON WITH URL ?TEST=1
 
 
 
 
EXPRESS : APP.USE  
 
** NOTE : RUN THIS FIRST BEFORE OTHER APP.USE METHODS TO DETECT IF NON-PRODUCTION ENVIRONMENT AND TESTING IS ON
   
     res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1'
 
 
 
WEB PAGE
 
CONDITIONAL TESTING CSS AND JS  : GLOBAL ON ALL PAGES
 
{{#IF showTests}} 
 
<link rel='mocha.css'>
 
 
AT END OF BODY
 
<SCRIPT SRC=MOCHA.JS>
<SCRIPT SRC=CHAI.JS>
 
<SCRIPT SRC=GLOBAL-TESTS.JS>
 
 
 
 
CONDITIONAL TESTING CSS AND JS  : GLOBAL ON ALL PAGES
 
 
{{#IF INDIVIDUAL PAGE TEST}}
<SCRIPT SRC=INIDIVIDUAL-PAGE-TEST.JS>
 
 
 
JS TEST FILE IN MOCHA
 
Suite('Global Test', function(){
 
Test('what I am testing gets stated here',function(){
 
Assert(….test must return TRUE!!! …);
 
});
 
});
 
 
 
 
 
CROSS PAGE TESTING
 
USE A 'HEADLESS BROWSER' TO EFFECTIVELY VISIT A REMOTE SITE AND GLEAN INFORMATION TO RUN AGAINST OUR TESTS
 
EG SELENIUM 
 
RUN SOME TESTS AGAINST WHAT THE BROWSER SHOULD DO
 
QUITE COMPLEX
 
 
 
 
 
RUN YOUR MOCHA TEST
 
1.	INSTALL MOCHA GLOBALLY NPM INSTALL -G MOCHA
2.	START YOUR SERVER
3.	RUN YOUR TEST   mocha -u tdd -R spec qa/tests-crosspage.js 2>/dev/null
TDD OR BDD
SPEC IS A 'REPORTER' 
2>/DEV/NULL  ==> OUTPUT STACK TRACE
 
 
 
 
UNIT TESTS FOR TESTING THE LOGIC OF YOUR CODE
 
 
Var expect = require('chai').expect;
 
Suite('my tests', function(){
 
Test ('this test description',function(){
Expect(….must return true …);
});
 
});
 
 
Then run the file with Mocha
 
Mocha -u tdd -R spec unit-test01.js
 
 
 
 
 
LINK-CHECKER
 
 
 
 
 
 
GRUNT 
 
AUTOMATE ALL TESTING 
 
 
 
 
 
 
 
Express Methods : Request and Response (Ch 6)
 
 
 
 
 
API
 
 
 
 
 
 
 
 
Templating (Chapter 7)
 
 
DYNAMIC DATA FIELDS ON PAGE IN NATIVE LANGUAGE, SEPARATING OUT THE JAVASCRIPT FROM THE HTML CLEANLY
 
TEMPLATING
 
CONTEXT : HOLDS VARIABLES
 
TEMPLATE : SAME FOR ALL WITH VARIABLES BUILT IN
 
OUTPUT = TEMPLATE + CONTEXT 
 
 
FLOW CONTROL
 
EACH … OVER ARRAY
 
IF … ELSE …
 
 
 
 
 
 
JADE
 
 
HANDLEBARS / MUSTACHE
 
==> RECOMMENDED BY AUTHOR
 
PARTIAL TEMPLATES
 
 
 
 
 
 
FORMS (CH 8)
 
BOOTSTRAP : SHOW BOOTSTRAP.HTM
 
BODY-PARSER : GIVE YOU ACCESS TO ALL FORM FIELDS
 
ACCESS EACH FIELD VIA REQ.BODY.<FIELDNAME>
 
 
FILE UPLOADS
 
 
https://github.com/felixge/node-formidable
 
https://howtonode.org/really-simple-file-uploads
 
https://joelennon.com/file-uploads-with-express-4-0/
 
https://www.npmjs.com/package/fileupload
 
 
 
 
 
Cookies (Ch 9)
 
NOT SECURE : GO MINIMAL
 
 
COOKIE-PARSER MIDDLEWARE
 
SET COOKIE
 
RES.COOKIE('this-cookie','this-data')
 
RES.COOKIE('signed-cookie','data',{ signed : true });
 
GET COOKIE
 
VAR MYCOOKIE = REQ.COOKIE.this-cookie;
 
 
DELETE
 
RES.CLEARCOOKIE('name')
 
 
 
 
 
Sessions 
 
1.	LEAST SECURE : COOKIE DATA ON CLIENT
 
COOKIE-SESSION
 
 
COOKIE SECRET IS REQUIRED TO ENCRYPT OUR COOKIE SESSION
 
 
Create credentials.js and put in .gitignore
 
Module.exports={
cookieSecret='xha2435k32j2345';
}
 
SO NOT EXPOSED
 
2.	MORE SECURE : EXPRESS-SESSION 
 
 
FURTHER INFO ON SESSIONS
 
http://expressjs.com/en/advanced/best-practice-security.html
 
 
 
 
 
EMAILING (CH 11)
 
NODEMAILER
 
 
 
 
 
 
PRODUCTION VS DEV ENVIRONMENT
 
DEFAULT ENVIRONMENT IS DEVELOPMENT
 
FIELD IS 
 
APP.GET('ENV')
 
>export NODE_ENV=PRODUCTION
>node app.js
 
APP.SET('ENV','PRODUCTION')
 
 
 
 
 
 
Mongo DB (Chapter 13)
 
 
 
API in Express (Chapter 15)
 
Express Security (Chapter 18)
 
3rd Party Integration (Chapter 19)
 
 
Version Control
 
 
Analytics
 
 
Code Quality : Google Webmaster for code checks
 
 
Google Page Speed
 
 
Have a fallback if Javascript does not work on your client
 
 
Sinopia
 
LIMITATION : NPM INSTALL CAN ONLY READ FROM ONE SOURCE (PUBLIC OR PRIVATE)
 
ANSWER : SINOPIA 
NPM SET REGISTRY 
NPM ADDUSER       
 
Hosting Online
 
Azure
 
Excellent Node API
 
Downside : no small pricing for small apps $80 a month minimum
 
Auto update from GitHub and dependency auto-update
 
AWS
 
Free tier so easy to evaluate if you like it or not
 
Elastic Beanstalk : Automate deployment from GIT
 
 
 
 
Google Cloud
 
No Node
No free tier
 
Joyent 
 
Custom Node hosting
 
Web Faction
 
 
 
 
GIT
 
Staging
 
Production
 
 
 
 
 
EXPRESS
 
VERSION 4
 
http://expressjs.com/en/4x/api.html 
 
 
 
 
 
 
 
 
 
 
 				
				
	
	
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
		
	
	
	
	
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
		
		
		
		
	
	
		
		
		
		
	
RESTFUL API
	http://www.restapitutorial.com/lessons/httpmethods.html
	
	- USE, GET, POST, PUT, DELETE etc
	- Manipulating data via a route
	- Typical semantic requests for routing an API
	- Persisting data through JSON
			DATA SENT AND STORED IN JSON FORMAT 
			MONGO 
	
				SAVE IN JSON FORMAT
		
				DATABASE=>COLLECTIONS 
		
			MySQL
	
				STRICT ROWS AND TABLES 
RESTFUL API WORKED EXAMPLE 
	https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
		USING NODE + MONGO + EXPRESS + REST API + POSTMAN TEST 
		
		Route	HTTP Verb	Description
		
		/api/bears	GET	Get all the bears.
		/api/bears	POST	Create a bear.
		/api/bears/:bear_id	GET	Get a single bear.
		/api/bears/:bear_id	PUT	Update a bear with new info.
		/api/bears/:bear_id	DELETE	Delete a bear.
	
	
	
	
	
	
	
	
	
	
	
	
	
RESTFUL API AUTHENTICATION 
	http://passportjs.org/
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
	
	
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
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
			
	
			
			
			
			
			
			
			
			
	
				
				
				
				
				
				
				
				
				
				
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
    
Unit Testing
		
What is unit testing
	TESTING INDIVIDUAL MODULES 
How to plan for unit testing
	TDD TEST DRIVEN DEVELOPMENT 
	
	WRITE YOUR TESTS FIRST 
	
	
	
	
	
	
	
	
	
	
		
	
Testing for good practice with ESLint 
	http://eslint.org/
	
	http://eslint.org/demo/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
ASSERT 
	const assert = require('assert');
	https://nodejs.org/api/assert.html
	
			
			assert(true);  // OK
			assert(1);     // OK
			assert(false);
			  // throws "AssertionError: false == true"
			assert(0);
			  // throws "AssertionError: 0 == true"
			assert(false, 'it\'s false');
			  // throws "AssertionError: it's false"
						node_assert_01.js
	
	
	
	
	
	
	
	
	
Jasmine Testing

	
UNIT TEST : JUST TEST ONE COMPONENT IN ISOLATION
	
TESTING ON JAVASCRIPT
	
	http://blog.codeship.com/jasmine-testing-javascript/
		
Download from 
		
	https://github.com/jasmine/jasmine/releases
		
Install
	npm install jasmine 
	npm install -g jasmine
	npm install jasmine-node --save
	npm install request --save
	
 Use
	jasmine init
	
jasmine example 1

	
Examine spec/support/jasmine.json file
	
jasmine    to run tests
	
jasmine spec/appSpec.js     to run a specific file
	
	
Jasmine Example 2

	C:\DELETEME\JASMINE2\SRC\
		
	SPECRUNNER.HTML
		
		DISPLAY RESULTS OF TESTS
			
		ANIMAL.JS
		
			JAVASCRIPT CODE TO BE TESTED
			
		ANIMALSPEC.JS
		
			TESTS
			
			
		SPIES : SEE IF FUNCTION WAS CALLED
		
			http://blog.codeship.com/jasmine-spyon/
			
	
Jasmine Example 3

	
	
	This describe function may seem confusing at first if you are new to Jasmine, but it is actually very simple to understand. The first argument is just a short description of what you are testing (in this case we are testing Hello World app). The second argument is just the function that is going to execute the test.
	We now want to add the two tests we are going to run. The first test ensures our server is returning a HTTP status of 200, or OK. For this we will need to write another describe function.
	describe("Hello World Server", function() {
	  describe("GET /", function() {
            
	  });
	});
		
		
		
	In the first argument, we use “GET /” as the description because if you remember, in our Node app we use app.get('/', function { ... }); to kick off our code.
	
	
	
	The next step is to write an it function. The it function is very similar to the describe function, just instead of describing the test, you are inputting the contents you expect to be returned.
	describe("Hello World Server", function() {
	  describe("GET /", function() {
		it("returns status code 200", function() {
		});
	  });
	});
	The code above just shows how to write your it function into your current describe function. Next we will use Node's request module to send a request to our server. When we set up Jasmine in our environment, we also installed Node's request module during step 4 of that process.
	var request = require("request");
	var base_url = "http://localhost:3000/"
	describe("Hello World Server", function() {
	  describe("GET /", function() {
		it("returns status code 200", function() {
		  request.get(base_url, function(error, response, body) {
		  });
		});
	  });
	});
	Inside of our it function we add the request to our URL. At the top of the file we define the variables request and base_url. Now our request function makes a call to our localhost at port 3000. Please make sure this matches the URL where your Node app is running on. Next we are going to put the actual test into our code.
	describe("Hello World Server", function() {
	  describe("GET /", function() {
		it("returns status code 200", function(done) {
		  request.get(base_url, function(error, response, body) {
			expect(response.statusCode).toBe(200);
		  });
		});
	  });
	});
	In the request function, we put our expect function. This function looks at our response.statusCode and checks to make sure it is '200'. The final part of the test we have to add is a done callback. Since Node.js is asynchronous, the it function will finish before our expect function does.
	describe("Hello World Server", function() {
	  describe("GET /", function() {
		it("returns status code 200", function(done) {
		  request.get(base_url, function(error, response, body) {
			expect(response.statusCode).toBe(200);
			done();
		  });
		});
	  });
	});
	There we have it! This will test to make sure the our server responds with a status code of 200. Add another function to test to make sure the body is equal to 'Hello World'.
	var request = require("request");
	var base_url = "http://localhost:3000/"
	describe("Hello World Server", function() {
	  describe("GET /", function() {
		it("returns status code 200", function(done) {
		  request.get(base_url, function(error, response, body) {
			expect(response.statusCode).toBe(200);
			done();
		  });
		});
		it("returns Hello World", function(done) {
		  request.get(base_url, function(error, response, body) {
			expect(body).toBe("Hello World");
			done();
		  });
		});
	  });
	});
	We use the same pattern as we did for the status code test but instead of looking at the response we are looking at the body. We expect the body to be equal to 'Hello World' and then we run done(); to make sure our expect function runs before our it function finishes. 
	Step 3. Integrate Your Node App with Jasmine
	Now that we have our testing set up in our spec file, we have to integrate that testing with our Node app. To do this we add a require at the top of the file that points to our Node application. In this case, I have it point towards the app.js file we created in a previous tutorial.
	var request = require("request");
	var helloWorld = require("../app.js")
	var base_url = "http://localhost:3000/"
	describe("Hello World Server", function() {
	  describe("GET /", function() {
		it("returns status code 200", function(done) {
		  request.get(base_url, function(error, response, body) {
			expect(response.statusCode).toBe(200);
			done();
		  });
		});
		it("returns Hello World", function(done) {
		  request.get(base_url, function(error, response, body) {
			expect(body).toBe("Hello World");
			done();
		  });
		});
	  });
	});
	This file will work to run tests on, but we need to make sure we close the server we open on our local host. If we skip this step you will run into issues down the line trying to run tests multiple times. To close the server we need to edit our app.js file to export a server.close(); function. Below is the update app.js code I am using to run our Jasmine tests.
	var express = require('express');
	var app = express();
	var exports = module.exports = {};
	app.get('/', function(req, res){
	  res.send('Hello World');
	});
	var server = app.listen(3000, function(){
	  console.log('Magic is happening on port 3000');
	});
	exports.closeServer = function(){
	  server.close();
	};
	Essentially what we are doing here is creating our exports object and adding a close server function that shuts down the server we open when our code is run. It is important that we do not close the server in this file because it will cause issues running this file when we deploy to production. Once we have written this function to export we have to add it to our spec file.
	var request = require("request");
	var helloWorld = require("../app.js")
	var base_url = "http://localhost:3000/"
	describe("Hello World Server", function() {
	  describe("GET /", function() {
		it("returns status code 200", function(done) {
		  request.get(base_url, function(error, response, body) {
			expect(response.statusCode).toBe(200);
			done();
		  });
		});
		it("returns Hello World", function(done) {
		  request.get(base_url, function(error, response, body) {
			expect(body).toBe("Hello World");
			helloWorld.closeServer();
			done();
		  });
		});
	  });
	});
	As you can see I have added the helloWorld.closeServer(); function right below our expect function in our second it function. Putting the close server function in that spot will ensure that our tests have been ran and then the server will close.
	Step 4. Run your Tests
	Before we can run our tests locally, there is one more step to complete. Open the package.json file in your projects directory. Once the file is open you will need to put the command jasmine-node spec into the test section. Your file should look like this now:
	{
	  "name": "node-tutorial",
	  "version": "1.0.0",
	  "main": "app.js",
	  "dependencies": {
		"express": "^4.13.3",
		"jasmine-node": "^1.14.5",
		"request": "^2.65.0"
	  },
	  "devDependencies": {},
	  "scripts": {
		"test": "jasmine-node spec"
	  },
	  "author": "",
	  "license": "ISC"
	}
	We made this change to our package.json file because want to be able to run our tests from the command npm test. Run that command in your project directory now and you should see an output similar to this:
	Distellis-MBP:node-tutorial zack$ npm test
	> jasminetesting@1.0.0 test /Users/zack/ws/src/node-tutorial
	> jasmine-node spec
	Magic is happening on port 3000
	..
	Finished in 0.06 seconds
	2 tests, 2 assertions, 0 failures, 0 skipped
	As you can see our test file ran our sample application, made sure the status code was equal to 200, and then tested that the body was equal to “Hello World”. Now open your app.js file and change “Hello World” to “Hi Mom” and run the test again.
	You should see an output similar to this:
	Distellis-MBP:node-tutorial zack$ npm test
	> jasminetesting@1.0.0 test /Users/zack/ws/src/node-tutorial
	> jasmine-node spec
	Magic is happening on port 3000
	.F
	Failures:
	  1) Hello World Server GET / returns Hello World
	   Message:
		 Expected 'Hi Mom' to be 'Hello World'.
	   Stacktrace:
		 Error: Expected 'Hi Mom' to be 'Hello World'.
		at Request._callback (/Users/zack/ws/src/node-tutorial/spec/hello_world_spec.js:16:22)
		at Request.self.callback (/Users/zack/ws/src/node-tutorial/node_modules/request/request.js:198:22)
		at emitTwo (events.js:87:13)
		at Request.emit (events.js:172:7)
		at Request. (/Users/zack/ws/src/node-tutorial/node_modules/request/request.js:1082:10)
		at emitOne (events.js:82:20)
		at Request.emit (events.js:169:7)
		at IncomingMessage. (/Users/zack/ws/src/node-tutorial/node_modules/request/request.js:1009:12)
	Finished in 0.052 seconds
	2 tests, 2 assertions, 1 failure, 0 skipped
	Since we changed the Value of the body of the response to “Hi Mom” this caused our Jasmine test to fail. This is important because we want to make sure that when we make change to our code that the output is still what we expect it to be. You can now go back and change “Hi Mom” back to “Hello World” in our app.js file.
	
	
	
	
	
	
	
	
	
	Run your code and call the function with given input and assert TRUE OR FALSE 
	WHETHER THE CODE RESULT SHOULD BE A GIVEN VALUE 
	
	HANDY TO WRITE TESTS BEFORE YOU WRITE YOUR CODE! SAVES A LOT OF WORK AND TIME!
	
	describe ("INPUT TEXT", function(){
		it("INPUT TEXT 2", function(){
			expect(field1).toBe(field2);
			expect(x).toBe(true);
			expect(y).not.toBe (true);
			expect(x).toBeDefined();
			toBeNull();
			toContain("x")           IN ARRAY 
			toBeLessThan(x);
			toThrow()
			toThrowError("x")
			toEqual(1)
			expect(function.parameter).toHaveBeenCalledWith(123)  
			
		});
	});
	
	
	
Jasmine Links

	https://github.com/jasmine/jasmine	
	
	https://www.distelli.com/docs/tutorials/test-your-nodejs-with-jasmine
		
	http://blog.codeship.com/jasmine-node-js-application-testing-tutorial/
	
	https://github.com/jasmine/jasmine-npm
	  
	
	
Mocha Testing
	
TDD TEST DRIVEN DESIGN : MEANS DESIGN YOUR TESTS FIRST! 	
	
WILL NOT ALLOW ANY TEST TO RUN FOR MORE THAN 2 SECONDS BEFORE FAILING IT
ACCEPTANCE TESTING - TESTS THE OUTCOMES, DOES NOT TEST THE LOGIC
	https://github.com/mochajs/mocha
	http://mochajs.org/
	
	npm install -g mocha
	
	mkdir test
	
	By default, mocha looks for the glob ./test/ *.js, so you may want to put your tests in test/ folder.
	
	$ $EDITOR test/test.js
	
	
	var assert = require('assert');
	describe('Array', function() {
	  describe('#indexOf()', function () {
		it('should return -1 when the value is not present', function () {
		  assert.equal(-1, [1,2,3].indexOf(5));
		  assert.equal(-1, [1,2,3].indexOf(0));
		});
	  });
	});
	
	
	
	
	
	
VOWS TESTING

SHOULD TESTING

		 
AUTOMATE YOUR BUILD PROCESS 
	ALSO CALLED 'TASK RUNNER' AS IT EXECUTES A
		SEQUENCE OF TASKS AS A SCRIPT WOULD 
		
	GRUNT - automate the building of your system 
		http://gruntjs.com/
	
	CAKE    COFFEESCRIPT, SIMPLE TASKS 
	GULP    LESS CODE THAN GRUNT BUT LESS SUPPORTED
	BROCCOLI   BEST TOOL BUT STILL FLEDGLING 
	
		
		
		
	http://adrianmejia.com/blog/2014/10/07/grunt-js-tutorial-from-beginner-to-ninja/
		
	
	Grunt is a popular task runner that runs on NodeJS. 
	
		It can minify CSS/JavaScript
		
		run linting tools (JSHint, JSlint, CSSlint)
		
		deploy to server
		
		and run test cases when you change a file to name a few. 
	At its bare core it does file manipulation (mkdir, reads, write, copy), print messages and helper methods to organize and configure multiple tasks. It takes care of differences among Operating Systems for you. However, the real power comes in with the number of available plugins ready to use. Usually named grunt-contrib-*. Lets start from scratch!
	
	
RUNNING GRUNT FROM SCRATCH 
	http://gruntjs.com/getting-started
	
	http://adrianmejia.com/blog/2014/10/07/grunt-js-tutorial-from-beginner-to-ninja/
	
	
	- CREATE YOUR PROJECT FOLDER 
							
	- UPDATE NPM GLOBALLY          npm update -g npm
														
	- INSTALL GRUNT CLIENT GLOBALLY AND PUT GRUNT IN YOUR PATH 
	
							npm install -g grunt-cli
							
														
	- IN YOUR PROJECT FOLDER INSTALL ALL DEPENDENCIES 
	
							npm install 
							
							
	- RUN NPM INIT TO CREATE PACKAGE.JSON FILE 
	
							npm init 
							
										==> DEFAULT ANSWERS 
										
										
	INSTALL GRUNT AND ADD TO PACKAGE.JSON
							npm install grunt --save-dev
	
	
	
					
	
					
	CREATE GRUNTFILE.JS 
	
			var grunt=require('grunt');
			grunt.registerTask('default','description', function(){
				console.log('hello world');
			});
			Note : whole thing should be wrapped in module.exports = function(grunt){};
			
			See Gruntfile.js as an example 
	
				RUN 1) grunt 			          RUN DEFAULT TASK 
					2) grunt hello                TASK FAILS
					3) grunt hello --force        FORCE TASK TO RUN WITHOUT NAME 
					4) grunt hello:chris          RUN HELLO TASK PROPERLY WITH NAME 
					5) grunt one 
					6) grunt two 
					7) grunt both 			      RUNS BOTH ONE AND TWO TASKS AS ARRAY 
					
					
					
					
	
	
WHAT CAN YOU DO WITH GRUNT?
	SEE LIST OF PLUGINS AT http://gruntjs.com/plugins
10 MOST POPULAR GRUNT PLUGINS AT (BOTTOM OF PAGE)
	http://adrianmejia.com/blog/2014/10/07/grunt-js-tutorial-from-beginner-to-ninja/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
=  PUBLISHING YOUR APPS AND MODULES =
- Running your own Node Server
- Using a hosting company
- Publishing modules on NPM and Github
Running your own Node server
Website Hosting - Openshift

https://blog.openshift.com/run-your-nodejs-projects-on-openshift-in-two-simple-steps/
Website Hosting - Heroku

https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
		
https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-add-ons
				
Demo
	https://shielded-garden-20236.herokuapp.com/
	https://shielded-garden-20236.herokuapp.com/cool
			
			
Database
	Install PostGreSQL
	
	heroku addons:create heroku-postgresql
	
		Creating heroku-postgresql on shielded-garden-20236... 
		database has been created and is available
		! This database is empty. If upgrading, you can transfer
		! data from another database with pg:copy
		Created postgresql-rugged-70627 as HEROKU_POSTGRESQL_AQUA_URL
		Use heroku addons:docs heroku-postgresql to view documentation
	https://devcenter.heroku.com/articles/heroku-postgresql
	
	heroku pg 		shows database info
	
	Add C:\Program Files\PostgreSQL\9.6\bin to path or pg:psql will not work
			
	
Heroku Push with Git
$ heroku git:clone -a shielded-garden-20236
# review your package.json and edit if necessary (see above)
$ git add package.json
$ git commit --allow-empty -m "Upgrade Node.js version"
$ git push heroku master
Detecting if you are vulnerable from the Heroku CLI
$ heroku run node -v -a shielded-garden-20236	
		
		
Website Hosting - Various
	
		
			
Runnable : Create Sandboxes for Dev Testing from your GitHub repository
	https://runnable.io/		
	
	
Azure
	Excellent Node API
	Minimum $80 per month
	
	Auto update from GitHub and dependency auto-update
AWS
	Free tier so easy to evaluate if you like it or not
	Elastic Beanstalk : Automate deployment from GIT
Google Cloud
	No Node
	No free tier
Joyent 
	Custom Node hosting
Web Faction	
	
		
		
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
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

# MEAN stack Glossary

Mongo Authentication

 
	
	
Mongo Access Control
	
	
	
	Enable Access Control
		MongoDB does not enable access control by default. You can enable authorization using the --auth or the security.authorization setting. Enabling internal authentication also enables client authorization.
		Once access control is enabled, users must authenticate themselves.
		
		--auth
		
		
			Enables authorization to control users access to database resources and operations. When authorization is enabled, MongoDB requires all clients to authenticate themselves first in order to determine the access for the client.
			Configure users via the mongo shell. If no users exist, the localhost interface will continue to have access to the database until you create the first user.
			See Security for more information.
	
		Authentication Methods
			To authenticate a user, MongoDB provides the db.auth() method.
	
	
			For the mongo shell and the MongoDB tools, you can also authenticate a user by passing in the user authentication information from the command line.
	
		MongoDB supports multiple authentication mechanisms:
			SCRAM-SHA-1
			MongoDB Challenge and Response (MONGODB-CR)
			x.509 Certificate Authentication.
	
	User Management Interface
		To add a user, MongoDB provides the db.createUser() method. When adding a user, you can assign roles to the user in order to grant privileges.
		Authentication Database
		When adding a user, you create the user in a specific database. This database is the authentication database for the user.
		A user can have privileges across different databases; i.e. a users privileges are not limited to the authentication database. By assigning to the user roles in other databases, a user created in one database can have permissions to act on other databases. For more information on roles, see Role-Based Access Control.
		The users name and authentication database serve as a unique identifier for that user. That is, if two users have the same name but are created in different databases, they are two separate users. If you intend to have a single user with permissions on multiple databases, create a single user with roles in the applicable databases instead of creating the user multiple times in different databases.
	
	
Mongo Authentication Tutorial

	
	https://docs.mongodb.org/manual/tutorial/enable-authentication/
		
	
		
	Create the user administrator.
	
			Add a user with the userAdminAnyDatabase role. For example the following creates the user myUserAdmin on the admin database
			1 RUN MONGOD 
			
			2 RUN MONGO 
			
			3 ON MONGO CLIENT TYPE 
			
					use admin
			
			
			4 ON MONGO CLIENT TYPE 
			
			
						db.createUser(
						 {
							user: "test2",
							pwd: "test",
							roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
						 }
						)
			5 STOP MONGOD RUNNING 
			
			6 START MONGOD WITH THIS COMMAND 
			
					mongod --auth 
					
			7 ON MONGO CLIENT TYPE 
			
				mongo -u test -p test --authenticationDatabase admin 
						Or, in the mongo shell connected without authentication, switch to the authentication database, and use db.auth() method to authenticate:
								use admin
								db.auth("myUserAdmin", "abc123" )
	
			
	
	
	
	Authenticate a User
			To authenticate a user, either
			Use the command line authentication options (e.g. -u, -p, --authenticationDatabase) when connecting to the mongod or mongos instance, or
			Connect first to the mongod or mongos instance, and then run the authenticate command or the db.auth() method against the authentication database.
	
			To authenticate, the client must authenticate the user against the users authentication database.
			For instance, if using the mongo shell as a client, you can specify the authentication database for the user with the --authenticationDatabase option.
				
	
	
	FURTHER SECURITY TOPICS
		
		Encryption 
		
		SSL 
		
		Authorisation 
		
		
		
		
		
Mongo-Watch : Listener For Data Update

	 
	
	Listener On Data change 
	
		npm install mongo-watch 
		
		MongoWatch = require 'mongo-watch'
 
		watcher = new MongoWatch {format: 'pretty'}
		 
		# watch the collection
		watcher.watch 'test.mytable', (event) ->
		 
		 # parse the results
		 console.log 'something changed:', event
  
  
  
	
	
	
    
Auto Login To Website

    
 
		https://www.youtube.com/watch?v=qw5jOVJFtbw
 
 
 	
</SCRIPT>

</pre>

# Mongo 

<pre>

Mean Stack

Intro

	http://meanjs.org/
	
	MEAN is an opinionated fullstack javascript framework - 
	which simplifies and accelerates web application development.
	
Installing MEAN

	npm install -g mean-cli 
	  
	mean init yourNewApp
  
  
MEAN stands for:
	
		MongoDB
		Express
		AngularJS
		Node.js
			
		
Installing MEAN

	http://meanjs.org/docs.html	
	
	npm install -g bower
	
	npm install -g grunt-cli
	
	DOWNLOAD MEAN AND PUT IN A FOLDER EG C:\MEAN 
	
	NAVIGATE TO MEAN FOLDER AND RUN 
	
	npm install
	
	ALSO 
	
	INSTALL GIT :  https://git-for-windows.github.io/
	
		THEN CAN RUN COMMANDS FROM BASH GIT OR WINDOWS CMD
		
		RUN npm install from GIT CMD console 
		
	RUN MONGOD FROM MONGO DIRECTORY TO MAKE SURE MONGO DB IS RUNNING! 
	
	RUN grunt --force TO RUN THE APPLICATION 
	
	VIEW APPLICATION ON http://localhost:3000  also DEBUG on 5858 
	
DEMO - MEAN 
	C:\DeleteMeMeanJSTrial
	
	
	
	
	
	
	
	
	
	
	
	
	
MEAN Tutorial 1 - Hello World - May 2017

https://closebrace.com/tutorials/2017-03-02/the-dead-simple-step-by-step-guide-for-front-end-developers-to-getting-up-and-running-with-nodejs-express-and-mongodb

    
Installation - Install NodeJS

    
Navigate to your installation directory eg cd c:\node

    
Install Express : npm install -g express-generator

    
express nodetest1

    
cd nodetest1

    
npm install

    
set debug=nodetest1:* & npm start

    
Navigate in a browser to http://localhost:3000 to view your page

    
Edit package.json and add in these two lines
    

    
"mongodb": "^2.2.25",

    
"monk": "^4.0.0",

		

	

    
Run npm install again

    
npm start

    
Edit app.js

    
Note line app.use('/', index); which points to the default (index) route

    
Edit \routes\index.js file

    
Above last line (module.exports = router;) insert data for a new /helloworld route
    

    
router.get('/helloworld',function(req,res){

    
res.render('helloworld',{title:'Hello World!' });

    
});

		

	

    
Also see MEAN_05 which adds in a TEST page and CSs

    
And MEAN_06 which further adds in working Javascript and JQuery

    
Also now edit \views\index.jade but first save it as helloworld.jade then edit it : 

    

    
p Hello World! Welcome to #{title}

	

    
Install Mongo from https://www.mongodb.com

    
Type mongod to start Mongo.  Note : to amend the database path from default c:\data to another path, type mongod --dbpath c:\node\nodetest1\data\

    
Type mongo to start the mongo client

    
In mongo client type the following

    

    
use nodetest1  (Creates a new database collection)

    
db.usercollection.insert({ "username" : "testuser1", "email" : "testuser1@testdomain.com" })

    
db.usercollection.find().pretty()

    
newstuff = [{ "username" : "testuser2", "email" : "testuser2@testdomain.com" }, { "username" : "testuser3", "email" : "testuser3@testdomain.com" }]

    
db.usercollection.insert(newstuff);

    
db.usercollection.find().pretty() should show 3 records now

	

    
In app.js below bodyparser declaration, declare these three new lines:

    

    
var mongo = require('mongodb');

    
var monk = require('monk');

    
var db = monk('localhost:27017/nodetest1');

	

    
Above the line app.use('/', routes); add the following code

    

    
app.use(function(req,res,next){

    
  req.db=db;

    
  next();

    
});

	

    
In \routes\index.js add a third route:
router.get('/userlist',function(req,res){
	var db = req.db;
	var collection = db.get('usercollection');
	collection.find({},{},function(e,docs){
		res.render('userlist',{
			"userlist":docs	
		});
	});
});

	

    
Add and edit a new file userlist.jade in views : 
extends layout
block content
	h1.
		User List
	ul
		each user, i in userlist
			li
				a(href="mailto:#{user.email}")=user.username

	

    
Now the code should run and display the users on the web page from the MONGO database

    
next step : adding a user!!!

    
index.js - add this code above the last module.exports line

    

router.get('/newuser',function(req,res){
	res.render('newuser',{title:'Add New User' });
});

	

    
Now add file newuser.jade

    

extends layout
block content
    h1= title
    form#formAddUser(name="adduser",method="post",action="/adduser")
        input#inputUserName(type="text", placeholder="username", name="username")
        input#inputUserEmail(type="text", placeholder="useremail", name="useremail")
        button#btnSubmit(type="submit") submit

    
The form now appears but does not work, so to make it work we now add some more code

    

/* POST to Add User Service */
router.post('/adduser', function(req, res) {
    // Set our internal DB variable
    var db = req.db;
    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;
    // Set our collection
    var collection = db.get('usercollection');
    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });
});

	

    
See the development of this in MEAN_01, MEAN_02, MEAN_03, and MEAN_04 folders

MEAN Tutorial 2 - Build API first then front end - YouTube - 1 Oct 2016 - Build API then MEAN on top - 76 minutes, Traversy Media
https://www.youtube.com/watch?v=PFP0oXNNveg&t=1544s

    
First part - build API to get, update and delete data from Mongo database

    
Build server.js

    
build route index.js

    
display a response

    
build a view index.htm and get a response.render with index.htm

    
build route tasks.js with get all tasks

    
Add in mongo DB online and add in some data

    
Add in /task/:id for one task

    
Add in put /task/:id to update one task

    
Add in delete one task by id also

    
Add in put which updates a record by id

    
API is now complete!!! (See todo_01 to todo_05)

    
Second Part

    
Visit Angular.io Getting Started at https://angular.io/guide/quickstart

    
..some files are missing so can use https://web.archive.org/web/20161011223739/https://angular.io/docs/ts/latest/quickstart.html? and https://github.com/ASchopenhaur/mytasklist/tree/master to help you get by at this point.

    
Follow the instructions in the ReadMe file to get this app up and running namely

    
run npm install from both the outer folder but also from the client folder, to get two sets of node_modules folders

    
In the client folder run npm run build:watch

    
In the root directory run nodemon (or nodemon server, or nodemon server.js) which will start the application

    
view at localhost:3000

    
npm install -g bower installs at appdata\roaming\npm\node_modules\ folder

    
root folder : create .bowerrc file

    
Bower can be used to install components eg 

    
bower install bootstrap --save which installs client\bower_components folder

    
follow tutorial... now index.html page appears with bootstrap CSS

    
add in client/styles.css file and the application should now generate error-free (39:20)

    
The tutorial now matches angular_04 application exactly at point 45:27

    
Follow through until 49:55 at which point it matches angular_05

    
At 56:18 the tutorial now matches angular_06 (remember to make sure the mongo connection string is your unique one at this point first or it will not work!)

    
At 58:48 the task title now shows in angular_07

    
Note : in the next section we submit a form which only has an input box and the form is submitted by pressing the 'enter' key

    
At 1:08:22 tutorial now is able to add an item into the database and display it - angular_08

    
At 1:12:16 the app is now able to also delete an item in angular_09

    

MEAN Tutorial 3
	
	
		WATCH THIS VIDEO AND LEARN EVERYTHING TO DO WITH BUILDING A MEAN STACK APP FROM THE PERSON VALERI KARPOV WHO COINED THE PHRASE 'MEAN STACK'
		https://www.youtube.com/watch?v=uKca_wiQWaM&list=PLY2dwEM7boLXu-9_004_qo2PQ3uwx0qAL
	
    
MEAN Tutorial 4
	
	https://thinkster.io/mean-stack-tutorial
MEAN Tutorial 5
	
MVA Microsoft Virtual Academy – FREE MEAN Stack Video course
https://mva.microsoft.com/en-us/training-courses/mean-stack-jump-start-8442?l=eovSb3Vz_4604984382
MEAN Tutorial 6 - YouTube
	
Theo Theunissen
https://www.youtube.com/watch?v=MO9zxC2RwZE&list=PLG1mkqKjiDY-gDQymDbn1h4WbJ56N48ln
MEAN stack Tutorial 7
http://webapplog.com/todo-app-with-express-jsnode-js-and-mongodb/
MEAN Stack Tutorial 8
		
https://github.com/azat-co/todo-express	
MEAN Stack Tutorial 9
https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application
    
MEAN Stack REST API

    
MEAN Stack REST API Tutorial 1 - Walkthrough - May 2017

Beginner walkthrough creating REST API with NODE and MONGO database

https://closebrace.com/tutorials/2017-03-02/creating-a-simple-restful-web-app-with-nodejs-express-and-mongodb by Christopher Buecheler aka 'CloseBrace'

    
Update Express with npm update -g express

    
Update Express Generator with npm update -g express-generator

    
Create a brand new folder and base Express structure with express API_01

    
Change directory with cd API_01

    
Install express dependencies with npm install

    
Turn on debugging for your app (gives extra verbose info when running) with set DEBUG=api-01:*

    
Start the app with npm start

    
Browse to http://localhost:3000 to view the sample express web page

    
((Curl http://localhost:3000 can also get this information in the command line))

    
Use Chrome Postman extension to view this data as well in detail

    
Into package.json add the following dependencies :  "mongodb": "^3.2.0", "monk": "^4.0.0",

    
Run npm install again

    
npm start to restart the application

    
Layout.jade - provides the overall HTML header and body tags, and script dependencies for the global dependencies.  Under views/layout.jade add the following at the bottom (adds script dependencies for jQuery CDN, and for global.js local javascript file).    Add exactly below 'block content'   
    

    
script(src='http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js')

    
script(src='/javascripts/global.js')

		

	

    
Add the content of this file to style.css http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/style.css

    
For Mongo, create C:\Data to hold the database.

    
Start Mongo with mongod

    
Also start a new Mongo client window using mongo

    
Create a new database - use ApiDb01

    
Populate with some sample data eg db.userlist.insert({'username' : 'test1','email' : 'test1@test.com','fullname' : 'Bob Smith','age' : 27,'location' : 'San Francisco','gender' : 'Male'})

    
Add into app.js the following lines at the top for dependency declarations
    

    
var mongo = require('mongodb');

    
var monk = require('monk');

    
var db = monk('localhost:27017/ApiDb01');

		

	

    
Above app.use('/',routes); add the following 
	// Make our db accessible to our router 
	app.use(function(req,res,next){
  	req.db = db;
  	next();
	});

	

    
Next add in /users route - not for browsing since this is a single page app, but instead we are going to be using this for the Javascript to perform CRUD operations

    
So code in routes\users.js looks like
var express = require('express');
var router = express.Router();
/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});
module.exports = router;

	

    
When this code is run with npm start, the view at http://localhost:3000/users/userlist now displays JSON obtained from MongoDB.  This code is saved as API_01

    
Adding users - firstly change the HTML view to add the input fields.  Add this to index.jade
	        // ADD USER
        h2 Add User
        #addUser
            fieldset
                input#inputUserName(type='text', placeholder='Username')
                input#inputUserEmail(type='text', placeholder='Email')
                br
                input#inputUserFullname(type='text', placeholder='Full Name')
                input#inputUserAge(type='text', placeholder='Age')
                br
                input#inputUserLocation(type='text', placeholder='Location')
                input#inputUserGender(type='text', placeholder='gender')
                br
                button#btnAddUser Add User
        // /ADD USER

	

    
Adding user - now add the POST logic in routes\users.js to add a /postuser route with collection.insert logic to insert a new Mongo record 

    
Adding user - in global.js add a click event handler to run the adduser function when the add button is clicked
    // Add User button click
    $('#btnAddUser').on('click', addUser);

	

    
Now finally add the adduser function into global.js

    
Deleting users - first add a route in routes\users.js
router.delete('/deleteuser/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    var userToDelete = req.params.id;
    collection.remove({ '_id' : userToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

	

    
Now add this to the DOM section of global.js
    
 // Delete User link click
    $('#userList table tbody').on('click', 'td a.linkdeleteuser', deleteUser);
  

	

    
Now add deleteUser function code to global.js

    
Updating a user - completed in API_04

http://adrianmejia.com/blog/2014/10/01/creating-a-restful-api-tutorial-with-nodejs-and-mongodb
Socket IO Application (with Node and Mongo)

	
APPENDIX : SOCKET I/O : STEP BY STEP BUILDING A CHAT APPLICATION WITH MONGODB 
Building a chat application
	1. Install NODE
	2. Add to PATH (should be done automatically by the install now)
	3. Install MongoDB
	4. Add to PATH ??? did not work! 
	5. Node : Install ServerIO package using npm
	
			npm install socket.io             (-g)
	
	6. Node : Install MongoDB module using npm 
	
			npm install mongodb               (-g)
			
			(npm install -g node-gyp)
			
			npm install kerberos --save
			
	7. START MONGO DB  
	
			Go to \bin\ folder and run mongodb
			
				Success: awaiting connections
				
	8. START MONGO CLIENT 
	
			Go to \bin\ folder and run mongo 
			
				Client : test
				Server : one connection 
				
				
	9. CREATE CHAT DATABASE
		
			Client : use chat 
			
	10. db.messages.find()       FIND ALL MESSAGES IN chat DATABASE 
	
	
	11. Add first record 
	
	
		db.messages.insert({"name":"Alex","message":"Hello there"})
	
		db.messages.find().pretty()
		
	12. Remove all messages
	
		db.messages.remove({})
			or
			
		db.messages.drop()
		
	13 server.js : begin to create this file
	
		var mongo = require('mongodb').MongoClient;
		var client=require('socket.io).listen(8080).sockets;
		
		RUN THIS FILE IN NODE AS A SERVER 
		
	14.
	
		index.htm : add socket.io 
		
		 <script src="http://127.0.0.1:8080/socket.io/socket.io.js">
		 
		 
	15. Run the page (index.htm) and F12 Console : test out
	
		F12 : var socket = io.connect('http://127.0.0.1:8080');
		
				<<undefined>>
				
		F12 : socket    returns data on socket 
		
		
		
	16  Now can connect from chat client to chat server 
	
		server.js    
		
				client.on('connection',function(socket){
					console.log('Someone has connected');
				});
			
			
		Stop and restart node server, refresh index.htm page 
		
				index.htm page => F12 => 
				
				var socket = io.connect('http://127.0.0.1:8080');
				
				
				NODE SERVER SHOULD NOW CONSOLE.LOG (SOMEONE HAS CONNECTED)
				
				
				
	17  Now wrap the connection inside mongodb connection code 
	
	
	
mongo.connect('mongodb://127.0.0.1/chat',function(err,db){
			if(err) throw err;
			client.on('connection',function(socket){
				console.log('Someone has connected');
			});
		});
	
	18 Now send a message from the chat client to the node server 
	
		server.js 
		
		
		mongo.connect('mongodb://127.0.0.1/chat',function(err,db){
			if(err) throw err;
			client.on('connection',function(socket){
				console.log('Someone has connected');
				// Wait for input
				socket.on('input', function(data){
					console.log(data);
				});
			});
		});
		Stop and start node server.
		
		index.htm page => refresh and F12 run 
		
			var socket = io.connect('http://127.0.0.1:8080');
			
			socket.emit('input', { "name" : "Alex", "message" : "Hello"} );
			
		and Node server should log the data 
			{ "name" : "Alex", "message" : "Hello" }
	
	
	19 Now add chat data to mongo database as an insert command 
	
	
		server.js 
		
		
		
		mongo.connect('mongodb://127.0.0.1/chat',function(err,db){
			if(err) throw err;
			client.on('connection',function(socket){
				
				// mongo db collection is called 'messages'
				var col = db.collection('messages');
				console.log('Someone has connected');
				// Wait for input
				socket.on('input', function(data){
					console.log(data);
					var name = data.name;
					var message = data.message;
					col.insert({name:name,message:message},function(){
						console.log('data inserted');
					});
				});
			});
		});
	
	
	20 Optional : check for whitespace
	
	
			var whitespacePattern = /^\s*$/;
		
    		if (whitespacePattern.test(name)){
    			console.log('Invalid Name');
    		}
    		else if (whitespacePattern.test(message)){
    			console.log('Blank message');
    		}
    		else{
    			col.insert({name:name,message:message},function(){
 		   			console.log('data inserted');
    			});
    		}
	
	
	21 Now ready to configure client web chat application page 
	
			return document node 
	
		  <script>
			(function(){
				var getNode = function(s){
				  // returns first node matching criteria in s
				  return document.querySelector(s);
				};
			})();
			</script>
  
  
	
	
	22 Check that we can create a valid socket programatically
	
	
	
	  <script>
		(function(){
			var getNode = function(s){
			  // returns first node matching criteria in s
			  return document.querySelector(s);
			};
			var textarea = getNode('.chat-textarea');
			var chatName = getNode('.chat-name');
			try{
			  var socket = io.connect('http://127.0.0.1:8080');
			}
			catch(e){
			}
			if(socket !== undefined){
			  console.log('Socket is valid');
			  
			}
		})();
	</script>
	
	
	
Note : 
	
	socket.emit : emit a message across the single socket (one client to server or server to one client)
	client.emit : emit a message to all clients
	
	
	
	<<END OF CHAT APPLICATION WITH MONGO DB>>
	
	
    
Typescript

Javascript is valid typescript
Microsoft created
Typescript is not valid javascript unless compiled
Brings strict checking
Write elegant javascript in the compiler
App Building

NativeScript

Nativescript can compile Javscript to native Android and iOS apps very quickly.  
Each page has a source code of XML, Javascript and CSS and that's it!!!
https://play.nativescript.org/?template=groceries-js&tutorial=groceries-js&id=8cWlB7

Node Random Unstructured Notes

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
		
		
		
		
		
		
		
		
		
	
	
	
WEBSTORM IDE

	VIDEO http://blog.jetbrains.com/webstorm/2014/05/guide-to-node-js-development-with-webstorm/
	
		
		
		
		
		
GRUNT
	LOADS TASKS FOR YOU ONE BY ONE LIKE A SCRIPT
	
		grunt-nodemon
	
RUNNING A REAL APP
	NODE_ENV=DEBUG
	NODE_ENV=PRODUCTION
	DB_URL=mongodb://url 
	OTHER_VARIABLE=a
	How to set environment variables
	Environment variables are a good place to store private things like passwords and keys needed by your app. You don't want those in your source code. I grew up using Windows, and didn't know this method. Try running this command with nodejs installed:
	NODE_ENV=debug DB_URL=mongodb://urlhere.ca STUFF=great node
	
	From <http://kb.imakewebsites.ca/2014/01/04/new-node-wishlist/> 
	
	
	
	This will start nodejs with environment variables named NODE_ENV, DB_URL, and STUFF set and ready to use. Type this command into the nodejs console next:
	console.log(process.env)
	
	From <http://kb.imakewebsites.ca/2014/01/04/new-node-wishlist/> 
	
		
	
	
	
	
	
			
PRESENTATION ON PHILOSOPHY OF NODE
	
	http://mcgill-csus.github.io/student_projects/NodeJSPresentation.pdf
		
		
	
	
	
	
	
	
	
	
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
	
Hapi JS (Node Express)

http://hapijs.com/resources
https://hapijs.com/
npm init
npm install hapi --save (adds to package.json file)
create server.js from hapijs.com and run it

'use strict';
const Hapi = require('hapi');
// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});
// Add the route
server.route({
    method: 'GET',
    path:'/hello', 
    handler: function (request, reply) {
        return reply('hello world');
    }
});
// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

	See Hapi_01 built from HapiJS.com
To add HTML etc files 
npm install inert --save
Add to server.js

server.register(require('inert'), (err) => {
    if (err) {
        throw err;
    }
    server.route({
        method: 'GET',
        path: '/hello',
        handler: function (request, reply) {
            reply.file('./public/hello.html');
        }
    });
});

	
 
		  
		  
		  
		  
JSON-Server (NODE REST API)

		 
https://github.com/typicode/json-server
A full REST API with zero coding in less than 30 seconds 
		  
		  
		  
 
	
	
			
Node Hosting

    
Openshift

    
Docker

    
a2hosting.com with an unmanaged server from 3.92 a month.  Gives a selection of servers, from CentOS, Debian and Ubuntu with cPanel and Webuzo management interfaces.  Note cPanel licence costs £16 a month to manage your server so that is very, very expensive.  So looks good for a super-basic, super cheap bare unmanaged hosted server.

    
InmotionHosting.com - again, very cheap at 3.49 per month although that is a 2 year commitment - one year commitment costs 3.99 a month or 48 a year

    
EvenNode.com looks good for dedicated Node hosting at £6 a month which includes a free SSL certificate to get your website up and running securely, something very important for today

    
OpenShift.com trumps them all by being TOTALLY FREE SO THIS MIGHT BE WORTH CHECKING OUT

    
DigitalOcean.com come also HIGHLY RECOMMENDED AND A GOOD BET FOR THE STARTER IN NODE

    
Heroku provides FREE APPS IN A CONTAINER - BUT DO THEY DO WHAT I WANT?

    
NodeJitsu has joined GoDaddy

    
https://github.com/flatiron - not sure the value or relevance of this one

    
Cannot go wrong with Amazon AWS https://aws.amazon.com/

	
    
https://lowendbox.com/ can purchase a server for $70 a year with 8GB RAM and 4 cores - looks good.

Database Hosting

MongoDB: MongoHQ or MongoLab
Redis: IrisCouch
CouchDB: IrisCouch

Node Hosting - Openshift

Openshift from RedHat is a good option and provides free hosting for one site, although it is a little complex to set up.
		
Node Hosting - A2 Hosting

Sign up with A2 - their 2 year plan provides good value for money (half price discount)
Go for the option for fixed IP and SSL as well to provide HTTPS support.
Instructions to get going
Check you can log in via SSH - use this link https://www.a2hosting.com/kb/getting-started-guide/accessing-your-account/using-ssh-secure-shell
Get your IP and Port from Portal Home = Client Area = My Products & Services = Product Details page
Note : username is a short version of your email, found at 
https://my.a2hosting.com/clientarea.php then click on your active product, which should
show your username and password (as asterisks) which you can click on to view
eg philande@philanderson888.a2hosted.com  port 7822
Use SSH to log in with these details
Now use this link to begin working https://www.a2hosting.com/kb/installable-applications/manual-installations/installing-node-js-on-managed-hosting-accounts
Run the SSH instructions to determine whether or not you have jailshell enabled - if so you must submit a support ticket to get it taken back to the normal shell
echo $SHELL - should show /bin/bash
uname -r  - shows CentOS version which needs to be 6  (el6)
Now install Node
cd ~      (change directory to HOME)
wget https://nodejs.org/dist/v4.4.1/node-v4.4.1-linux-x64.tar.xz  (version 4.4.1 is long term stable)
tar xvf node-v4.4.1-linux-x64.tar.gz (extract to dir)
mv node-v4.4.1-linux-x64 nodejs  (rename dir)
mkdir ~/bin
cp nodejs/bin/node ~/bin
cd ~/bin
ln -s ../nodejs/lib/node_modules/npm/bin/npm-cli.js npm    
After you run these commands, Node.js and npm are installed on your account. To verify this, type the following commands:
node --version
npm --version
The ~/bin directory is in your path by default, which means you can run node and npm from any directory in your account.
Now integrate with the web server
In a text editor, add the following lines to the .htaccess file in the /home/username/public_html directory, where username represents your account username:
RewriteEngine On
RewriteRule ^$ http://127.0.0.1:65427/ [P,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://127.0.0.1:65427/$1 [P,L]
In both RewriteRule lines, replace XXXXX with the port on which your Node.js application listens.
To run a Node.js application on a managed server, you must select an unused port, and the port number must be between 49152 and 65535 (inclusive).
Save the changes to the .htaccess file, and then exit the text editor. Visitors to your web site are redirected to the Node.js application listening on the specified port.
Linux : Start Node To Run In The Background

Normally when you close your SSH session this also kills the node server which 
is not what we want!  To keep node running when SSH terminal exits, run this
nohup npm start
or
nohup npm start --production &
Note : to kill an application run
pkill node
    
Node MySQL

	
		
		
		
		
Node with MYSQL
	a. Npm install mysql
	
	b. Download, install and run mysql database eg XAMPP
		
		
		LAB : node_mysql_01.js
		
		
		
		
		
		
	
https://github.com/felixge/node-mysql
	
https://codeforgeek.com/2015/01/nodejs-mysql-tutorial/
	
	
		npm install mysql
	
	
 			var mysql      = require('mysql');
			var connection = mysql.createConnection({
			  host     : 'localhost',
			  user     : 'me',
			  password : 'secret',
			  database : 'my_db'
			});
			connection.connect();
			connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
			  if (err) throw err;
			  console.log('The solution is: ', rows[0].solution);
			});
			connection.end();
		Working MYSQL Code Example
		
			https://codeforgeek.com/2015/01/nodejs-mysql-tutorial/
			
			var mysql      = require('mysql');
			var connection = mysql.createConnection({
			  host     : 'localhost',
			  user     : '< MySQL username >',
			  password : '< MySQL password >',
			  database : '<your database name>'
			});
			connection.connect();
			connection.query('SELECT * from < table name >', function(err, rows, fields) {
			  if (!err)
				console.log('The solution is: ', rows);
			  else
				console.log('Error while performing Query.');
			});
			connection.end();
		
Node-MySQL

	
		https://www.npmjs.com/package/node-mysql
		
		Install
		
		npm install node-mysql
		
		Dependencies
		
		"dependencies": {
				"better-js-class": "*",
				"cps": "*",
				"mysql": "*",
				"underscore": "*"
			}
		
		Use
		var db = require('node-mysql');
		var DB = db.DB;
		var BaseRow = db.Row;
		var BaseTable = db.Table;
Node Visual Studio Plugins

https://www.visualstudio.com/en-us/features/node-js-vs.aspx
http://blogs.msdn.com/b/brunoterkaly/archive/2014/02/02/how-to-use-node-js-packages-with-visual-studio.aspx
		
		
Node Clustering

  
		https://www.youtube.com/watch?v=-xR-0rWt6iE
  
Node API with WebStorm and Strongloop

   
 
		https://www.youtube.com/watch?v=0j0ADx3krLM
	
Node is slower to serve static files

	
NODE IS NOT SO GOOD FOR
	SERVING STATIC FILES
	
		BETTER TO USE
		
			NGINX
				https://blog.webfaction.com/2008/12/a-little-holiday-present-10000-reqssec-with-nginx-2/
			
			OR
			
			PROPER CONTENT DELIVERY NETWORK (CDN) LIKE AMAZON AWS S3 STORAGE AND ACCESS THE FILES VIA ONLINE DOWNLOAD LINK FROM ANYWHERE IN THE WORLD EFFICIENTLY
			
Node is also competing with traditional web server eg Apache
	https://blog.webfaction.com/2008/12/a-little-holiday-present-10000-reqssec-with-nginx-2/
Upstart - runs Node As A (Ubuntu) Service

	KEEPS ALIVE AFTER CRASH
	
	INSTALL ON LINUX
	
		SUDO APT-GET INSTALL UPSTART
		SUDO YUM INSTALL UPSTART
		
	CAN START NODE AS A SERVICE TO BEGIN RUNNING AUTOMATICALLY AFTER A SERVER REBOOT, AS A SERVICE WOULD
	
	
	https://gist.github.com/learncodeacademy/3a96aa1226c769adba39
	
	
	
Webpack

Webpack and Yarn are the recommended replacement for Bower package manager which helps establish the correct dependency relationships for your dependent packages, and maintain them correctly for you.  See Bower and Yarn for details.
Yarn

Yarn is a package install manager
Yarn can be used in a similar manner to npm and bower to install libraries and their dependencies into your project, and manage and maintain the correct dependency relationships for you
Yarn and Webpack are recommended as an alternative to Bower.  See https://bower.io/blog/2017/how-to-migrate-away-from-bower for more details.
	
NODE CLUSTER API
	USES MULTICORE PROCESSORS
	
	NUMBER OF CORES
	
		VAR NUMCORES = REQUIRE('OS').CPUS().LENGTH;
		
		
RED QUESTION : HOW MANY PROCESSES DOES NODE RUN WHEN FOR EXAMPLE IT IS JUST RUNNING A SIMPLE WEB SERVER AND SUPPLYING STATIC FILES? DOES IT REQUIRE MORE THAN ONE PROCESS TO RUN?  FOR EXAMPLE ON MY WINDOWS MACHINE I HAVE TWO NODE PROCESSES RUNNING
NPM INIT
	ALTERNATIVE IS NGEN WHICH CREATES AS WELL A README FILE IN YOUR PROJECT FOR EXAMPLE, SO ADDS FUNCTIONALITY TO NPM INIT COMMAND
	
	NPM INSTALL -G NGEN
	
DEPLOYING A PACKAGE TO NPM REPOSITORY
	TEST YOUR PACKAGE LOCALLY FIRST
	
		YOU CAN DO A GLOBAL INSTALL ON YOUR COMPUTER OF A LOCALLY AVAILABLE PACKAGE BY DOING THE FOLLOWING
			
			NPM LINK
			
				THIS ADDS YOUR LOCAL PROJECT INTO THE GLOBAL NPM NAMESPACE
				
			NPM LINK MYPROJECT
			
				INSTALL YOUR PROJECT INTO A SECOND FOLDER
				
			
			
				THIS ADDS YOUR LOCAL PROJECT INTO THE GLOBAL NPM NAMESPACE, SO YOUR PROJECT WILL NOW BE AVAILABLE USING THE 
				
					REQUIRE('MYPROJECT')           COMMAND FROM ANY PROJECT
					
					
			
			
			
			
				THIS LINKS YOUR PROJECT TO THE GLOBAL NODE NAMSPACE ON YOUR MACHINE
				
			
	
	
NGINX 
	SERVES STATIC FILES MORE EFFICIENTLY THAN NODE
	
	
PASSPORT.JS
	PROJECT TO BUILD FROM SCRATCH
	
		http://mherman.org/blog/2013/11/11/user-authentication-with-passport-dot-js/#.Vz7AxpErJQI
		
		
EXPRESS 4 WITH AUTHENTICATION
	http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4/#.Vz7AxZErJQI
Cookie
	Npm install cookies             NON EXPRESS 
	
	
	Npm install cookie-parser
	Var cookieParser = require ('cookie-parser');
	App.use(cookieParser());
	
	
	Npm install cookie-session
	
	
	
	
	
	
	
	
	
	

</pre>

# Glossary

<pre>

Callbacks

	
	
MANAGING CALLBACKS 
	https://strongloop.com/strongblog/node-js-callback-hell-promises-generators/
	
	https://www.airpair.com/node.js/posts/top-10-mistakes-node-developers-make
	
	
	await (with promise)
	
		https://tonicdev.com/docs/await
	
		var got = require("got");
		
		CAN FOR EXAMPLE DO MULTIPLE ASYNCHRONOUS CALLS AND SYNCHRONOUSLY WAIT 
		UNTIL THE FIRST OF THOSE CALLS COMES IN 
		
	
		
			var getJSON = URL => require("got")(URL, { json : true });
			// Get the most popular repo asynchronously: "await" waits for it to finish!
			var response = await getJSON("https://api.github.com/search/repositories?q=javascript&sort=stars&order=desc");
			// Grab the contributors of the most popular repo, asynchronously
			var mostPopularRepo = response.body.items[0];
			var contributors = (await getJSON(mostPopularRepo.contributors_url)).body;
			// and render them as html
			contributors.reduce((prev, user) =>
				prev + `<li><img src=${user.avatar_url} width=24 /> ${user.login} </li>`
			, "");
		
		Async example point 4 on 
			
			https://www.airpair.com/node.js/posts/top-10-mistakes-node-developers-make
			
		Code example at 
			https://github.com/alessioalex/airpair-nodejs-mistakes/blob/master/4-nested-callbacks/after.js
			
			
		Promises; 
		
		
			http://www.wintellect.com/devcenter/nstieglitz/5-great-features-in-es6-harmony
			
	
CALLBACKS 
	CALLBACK EXAMPLE 
	
		http://callbackhell.com/
		
		downloadPhoto('http://coolcats.com/cat.gif', handlePhoto)
		function handlePhoto (error, photo) {
		  if (error) console.error('Download error!', error)
		  else console.log('Download finished', photo)
		}
		console.log('Download started')
	
	
	
	
How do I fix callback hell?
	http://callbackhell.com/
	Callback hell is caused by poor coding practices. Luckily writing better code isn't that hard!
	You only need to follow three rules:	
	
	
	
	1. Keep your code shallow
		Here is some messy browser JavaScript that uses browser-request to make an AJAX request to a server:
		var form = document.querySelector('form')
		form.onsubmit = function (submitEvent) {
		  var name = document.querySelector('input').value
		  request({
			uri: "http://example.com/upload",
			body: name,
			method: "POST"
		  }, function (err, response, body) {
			var statusMessage = document.querySelector('.status')
			if (err) return statusMessage.value = err
			statusMessage.value = body
		  })
		}
		
		
		
		This code has two anonymous functions. Let's give em names!
		var form = document.querySelector('form')
		form.onsubmit = function formSubmit (submitEvent) {
		  var name = document.querySelector('input').value
		  request({
			uri: "http://example.com/upload",
			body: name,
			method: "POST"
		  }, function postResponse (err, response, body) {
			var statusMessage = document.querySelector('.status')
			if (err) return statusMessage.value = err
			statusMessage.value = body
		  })
		}
		
		
		
		As you can see naming functions is super easy and has some immediate benefits:
		makes code easier to read thanks to the descriptive function names
		when exceptions happen you will get stacktraces that reference actual function names instead of "anonymous"
		allows you to move the functions and reference them by their names
	
	
	Now we can move the functions to the top level of our program:
		document.querySelector('form').onsubmit = formSubmit
		function formSubmit (submitEvent) {
		  var name = document.querySelector('input').value
		  request({
			uri: "http://example.com/upload",
			body: name,
			method: "POST"
		  }, postResponse)
		}
		function postResponse (err, response, body) {
		  var statusMessage = document.querySelector('.status')
		  if (err) return statusMessage.value = err
		  statusMessage.value = body
		}
	
	
	
	
	
	
	
	2. Modularize
		This is the most important part: Anyone is capable of creating modules (aka libraries). To quote Isaac Schlueter (of the node.js project): "Write small modules that each do one thing, and assemble them into other modules that do a bigger thing. You can't get into callback hell if you don't go there."
		Let's take out the boilerplate code from above and turn it into a module by splitting it up into a couple of files. I'll show a module pattern that works for either browser code or server code (or code that works in both):
		Here is a new file called formuploader.js that contains our two functions from before:
		
		
		
			module.exports.submit = formSubmit
			function formSubmit (submitEvent) {
			  var name = document.querySelector('input').value
			  request({
				uri: "http://example.com/upload",
				body: name,
				method: "POST"
			  }, postResponse)
			}
			function postResponse (err, response, body) {
			  var statusMessage = document.querySelector('.status')
			  if (err) return statusMessage.value = err
			  statusMessage.value = body
			}
		
		
		
		
		Here is how our application specific code looks now:
			var formUploader = require('formuploader')
			document.querySelector('form').onsubmit = formUploader.submit
		
		
		
	3. Handle every single error
		
		platform errors caused by things like 
			invalid file permissions, 
			hard drive failure, 
			no network connection etc. 
		
		
		Any experienced developer will tell you that you can never know when these errors happen, so you have to plan on them always happening.
		With callbacks the most popular way to handle errors is the Node.js style where the first argument to the callback is always reserved for an error.
		 var fs = require('fs')
		 fs.readFile('/Does/not/exist', handleFile)
		 function handleFile (error, file) {
		   if (error) return console.error('Uhoh, there was an error', error)
		   // otherwise, continue on and use `file` in your code
		 }
				
		
		
		Having the first argument be the error is a simple convention that encourages you to remember to handle your errors. If it was the second argument you could write code like function handleFile (file) { } and more easily ignore the error.
		
		
		Code linters can also be configured to help you remember to handle callback errors. The simplest one to use is called standard. All you have to do is run $ standard in your code folder and it will show you every callback in your code with an unhandled error.
		The most important aspect of avoiding callback hell is moving functions out of the way so that the programs flow can be more easily understood without newcomers having to wade through all the detail of the functions to get to the meat of what the program is trying to do.
		
		
		You can start by moving the functions to the bottom of the file, then graduate to moving them into another file that you load in using a relative require like require('./photo-helpers.js') and then finally move them into a standalone module like require('image-resize').
		
		
		
		
		
	

```

## Node And Databases

### [Sequelize.org](http://sequelize.org) connection to Postgres, MySQL, MariaDB, SQLite, SQL

```
https://sequelize.org/v5/index.html#
```

### Finale creates API endpoints from sequelize

```
https://www.npmjs.com/package/finale-rest

```

### MarsDB - equivalent of SQLite for MongoDb

```
https://github.com/c58/marsdb
```

# TypeScript

```csharp
# TypeScript .ts

# install typescript
npm install -g typescript

function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);

# compile typescript to Javascript
tsc myfile.ts
```

# Socket.IO

```jsx
SOCKET.IO - NETWORKING THEORY
	NETWORK CLIENT 
		MAC ADDRESS (FIXED)
		IP ADDRESS (ALLOCATED IN SOFTWARE)
			EACH IP HAS 65536 CHANNELS OF COMMUNICATION CALLED 'PORTS'
				DEFAULT CHANNEL OF COMMUNCATION PORT IS 80 FOR HTTP TRAFFIC 
				
				http://myserver.mydomain.com/myfolder/myfile.htm:80 
				
								(OMITTED AS DEFAULT)
				FTP   20/21
				SMTP  25
				RDP   3389
NODE SERVER : SOCKET.IO  : URL:PORT    HTTP://LOCALHOST:8080
		
			IPCONFIG ==> GET IP 
					HTTP://LOCALHOST:8080
			SERVER22
			PING SERVER22 ==> GIVE IP OF SERVER22
			
			
FROM CLIENT1 ==> 
										HTTP://IP_OF_SERVER:8080
										HTTP://SERVER22:8080
										
										
										
DHCP
		DHCP ON NETWORK ==> GIVE IP TO CLIENT AT STARTUP
			RESERVATION : FIXED MAP OF IP RESERVED FOR A PARTICULAR DEVICE MAC ADDRESS
DNS
		DNS ON NETWORK  ==> WHEN GET A NEW IP, THE IP AND NAME ARE BOTH REGISTERED WITHIN DNS AUTOMATICALLY SO DEVICE CAN BE FOUND ON THE NETWORK
		TWO TYPES OF DNS RECORD 
				A OR AAAA = REAL IPV4 OR IPV6 ADDRESS
				CNAME = WWW = FAKE NAME HIDING THE REAL NAME FROM THE PUBLIC INTERNET
MAC ADDRESS
		FIXED 'PHYSICAL ADDRESS' OF DEVICE NETWORK CARD
	
SOCKET 
	IP:PORT = SOCKET 
	
	
HTTP WEBSOCKETS
	Instant 2-way client-server comms.
	Native browser support
	http://hackintoshrao.com/2014/01/23/sending-data-to-the-node-js-server-using-websockets/
	
	
		Unlike HTTP, WebSocket provides for full-duplex communication. Additionally, Websocket enables streams of messages on top of TCP
		
		
		Summing everything up , the advantage of websockets are listed below ,
		The WebSocket protocol makes possible more interaction between a browser and a web site, facilitating live content without page refresh
		
		Websockets are amazingly fast compared any other alternative implementations , so it can be used for creating Real-Time web applications (Games , Live News feed)
		
		Websockets are Standardized being part of HTML5
		
		Support across all major browsers
		
		
Using TCP and WebSockets

	https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
	
	http://www.websocket.org/aboutwebsocket.html
	
	http://websocketd.com/
	
	http://www.codeproject.com/Articles/57060/Web-Socket-Server
	
	https://github.com/eidheim/Simple-WebSocket-Server
	
	
	Example 
	
		http://www.websocket.org/echo.html
		
		CONNECT VIA WS://url  PROTOCOL
		
		http://c4290920.myzen.co.uk/showcase/websockets1.htm
		
		
		
WEBSOCKETS EXAMPLES 
	https://www.npmjs.com/package/websocket
		
		var WebSocketServer = require('websocket').server;
		var WebSocketClient = require('websocket').client;
		var WebSocketFrame  = require('websocket').frame;
		var WebSocketRouter = require('websocket').router;
		var W3CWebSocket = require('websocket').w3cwebsocket;
	https://www.npmjs.com/package/nodejs-websocket		
		nodejs-websocket  NODE MODULE 
	
Native applications vs web applications
	NATIVE 
	
		NO COMMUNICATIONS OVER A NETWORK
	
		INSTANT SAVE DATA (NO LAG ACROSS A NETWORK)
	
	Web
	
		DATABASE AVAILABLE OVER NETWORK 
		
		NETWORK ISSUES APPLY !
		
		
		
		
		
		
		
		
		
		
		
		
		
SOCKET.IO : 2-WAY COMMUNICATION 
	npm install express
	
	npm install socket.io
	
	Socket.io 
	
		It has two parts: 
		
		a client-side library that runs in the browser, 
		
		and a server-side library for Node.JS. 
		
		Both components have a nearly identical API. 
		
		
		
	http://socket.io/
	
	http://socket.io/docs/
	
	http://socket.io/docs/server-api/
	
	https://www.npmjs.com/package/socket.io
		
		
		
		
		
		
	
	
		
SOCKET.IO COMMANDS 
	BROADCAST TO EVERYONE 
			
		socket.broadcast.emit('user connected');
		
	ACKNOWLEDGE
	
		Add a function as the last parameter of Send() or Emit() 
				
	ROOM 
	
		JOIN MORE THAN ONE SOCKET 
		
		
		
	
SOCKET.IO : PRACTICAL EXAMPLE : CHATROOM
	Making a simple chatroom app with HTML5 and WebSockets
	https://www.npmjs.com/package/socket.io
	
	See showcase working example 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
SOCKET.IO PERSISTENCE OPTIONS 
	
	require("socket.io-persistence")
	https://www.npmjs.com/package/socket.io-persistence
	
	PERSISTENCE 
	
		Use Express Middleware with io.use(function(){//CODE }) to do what 
		you want with any data sent or received 
		
		
	
	VOLATILE MESSAGES (CAN BE MISSED BY CLIENT WITHOUT MUCH NEGATIVE CONSEQUENCE)
	
		socket.volatile.emit('bieber tweet', tweet);
```