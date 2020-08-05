
		
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
	
		