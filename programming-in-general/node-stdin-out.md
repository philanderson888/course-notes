
			
				
	
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
	
	
	
	
	
	