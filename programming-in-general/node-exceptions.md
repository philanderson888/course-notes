# Node Exceptions
	
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
				
	
	
	