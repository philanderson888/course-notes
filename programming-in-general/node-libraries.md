
		  
		
		
		
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
		
		
		
	
	
	
	