
	
	
	
	
	
	
	
	
	
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
	
	
	
	