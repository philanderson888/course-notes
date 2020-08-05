
		
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
		
		
		
		
		
		
		
		
		
		
		
		





		
		
		
		



