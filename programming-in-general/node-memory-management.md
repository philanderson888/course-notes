
		
		
		
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
		 
		 
  
  
  
 
	