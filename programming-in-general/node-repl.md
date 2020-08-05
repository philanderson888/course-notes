
		 
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
	
	
		