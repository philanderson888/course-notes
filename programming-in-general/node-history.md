

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
	
	
	
	
	
	