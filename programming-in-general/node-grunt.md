# Grunt

AUTOMATE YOUR BUILD PROCESS 
	ALSO CALLED 'TASK RUNNER' AS IT EXECUTES A
		SEQUENCE OF TASKS AS A SCRIPT WOULD 
		
	GRUNT - automate the building of your system 
		http://gruntjs.com/
	
	CAKE    COFFEESCRIPT, SIMPLE TASKS 
	GULP    LESS CODE THAN GRUNT BUT LESS SUPPORTED
	BROCCOLI   BEST TOOL BUT STILL FLEDGLING 
	
		
		
		
	http://adrianmejia.com/blog/2014/10/07/grunt-js-tutorial-from-beginner-to-ninja/
		
	
	Grunt is a popular task runner that runs on NodeJS. 
	
		It can minify CSS/JavaScript
		
		run linting tools (JSHint, JSlint, CSSlint)
		
		deploy to server
		
		and run test cases when you change a file to name a few. 
	At its bare core it does file manipulation (mkdir, reads, write, copy), print messages and helper methods to organize and configure multiple tasks. It takes care of differences among Operating Systems for you. However, the real power comes in with the number of available plugins ready to use. Usually named grunt-contrib-*. Lets start from scratch!
	
	
RUNNING GRUNT FROM SCRATCH 
	http://gruntjs.com/getting-started
	
	http://adrianmejia.com/blog/2014/10/07/grunt-js-tutorial-from-beginner-to-ninja/
	
	
	- CREATE YOUR PROJECT FOLDER 
							
	- UPDATE NPM GLOBALLY          npm update -g npm
														
	- INSTALL GRUNT CLIENT GLOBALLY AND PUT GRUNT IN YOUR PATH 
	
							npm install -g grunt-cli
							
														
	- IN YOUR PROJECT FOLDER INSTALL ALL DEPENDENCIES 
	
							npm install 
							
							
	- RUN NPM INIT TO CREATE PACKAGE.JSON FILE 
	
							npm init 
							
										==> DEFAULT ANSWERS 
										
										
	INSTALL GRUNT AND ADD TO PACKAGE.JSON
							npm install grunt --save-dev
	
	
	
					
	
					
	CREATE GRUNTFILE.JS 
	
			var grunt=require('grunt');
			grunt.registerTask('default','description', function(){
				console.log('hello world');
			});
			Note : whole thing should be wrapped in module.exports = function(grunt){};
			
			See Gruntfile.js as an example 
	
				RUN 1) grunt 			          RUN DEFAULT TASK 
					2) grunt hello                TASK FAILS
					3) grunt hello --force        FORCE TASK TO RUN WITHOUT NAME 
					4) grunt hello:chris          RUN HELLO TASK PROPERLY WITH NAME 
					5) grunt one 
					6) grunt two 
					7) grunt both 			      RUNS BOTH ONE AND TWO TASKS AS ARRAY 
					
					
					
					
	
	
WHAT CAN YOU DO WITH GRUNT?
	SEE LIST OF PLUGINS AT http://gruntjs.com/plugins
10 MOST POPULAR GRUNT PLUGINS AT (BOTTOM OF PAGE)
	http://adrianmejia.com/blog/2014/10/07/grunt-js-tutorial-from-beginner-to-ninja/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	