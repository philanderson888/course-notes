
	
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
		
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 	 
		 
		 
		 
	
	
RUNNING A NODE FILE 
	node <NODE_FILE.JS>    WILL RUN A NODE FILE !!!
	
	
	process.exit();        will TERMINATE YOUR APPLICATION 
	
	TO LAUNCH A NODE APPLICATION FROM ANOTHER NODE OR JAVASCRIPT FILE
	SEE node_57 lab files 
	
	
	
	