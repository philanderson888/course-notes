



Node Modules and NPM

Anatomy of a module.
Private code.
Accessing and using modules.
npm commands.
package.json.
	
	
	
WHAT IS A NODE MODULE 

	A MODULE IS JUST A PIECE OF CODE CALLED FROM ANOTHER FILE 
	
		eg var x = require('x')        where the latter x MEANS x.js JAVASCRIPT FILE!!!
		
	
	MODULES ARE HIGHLY DECOUPLED, DISTINCT PIECES OF FUNCTIONALITY 
IMPORTING A MODULE 

	
	TWO WAYS TO IMPORT A MODULE
	
		INCLUDE = REQUEST THAT A FILE BE IMPORTED, IF PRESENT 
	
		REQUIRE = MANDATORY INCLUSION OF THIS FILE - FLOW INTERRUPTED IF NOT PRESENT 
	
	
	
	
	DEPENDENCY IS RELIANCE ON CODE OR MODULES TO RUN 
	
	REQUIRE A STANDARD JAVASCRIPT FILE 
	
		var x = require('./module_file_name');    
							
			./	means search in this folder	for module_file_name.js 
			
					ANY FIELDS OR FUNCTIONS WHICH HAVE BEEN EXPLICITLY NAMED AS EXPORT CAN THEN BE USED.
							
					Whenever importing modules NEVER STATE THE .JS EXTENSION	
					
						
					STANDARD FOLDER STRUCTURE APPLIES EG 
						var x = require('A/B/C/D.JS'); 
					
					
		See lab 14 
		
		
		
		
		
		
		
IMPORT A PUBLISHED NPM MODULE 		
	INSTALL
	
		NPM INSTALL <MODULE>
		
		NPM INSTALL <MODULE> --SAVE     ADD TO PACKAGE.JSON
		
		
		
	REQUIRE A INSTALLED MODULE 
	
		VAR X = REQUIRE ('X');        
		
				X.JS IS A PUBLISHED MODULE
	
NODE CORE VS NODE USER (USERLAND)
	CORE MODULES 
	
		INCLUDED IN THE BARE INSTALL OF NODE
	
	USER MODULES 
	
		OPTIONALLY INSTALLED WITH NPM INSTALL <MODULE>
		
	
	One goal of node's minimal core library is to encourage people to implement things in creative ways, without forcing their ideas onto everyone. With a tiny core and a vibrant user space, we can all flourish and experiment without the onerous burden of having to always agree all the time.
	You have a lot more freedom to iterate on the idea.
	
	Everyone who wants your module can install it easily enough (if you publish it with npm).
	
	You have freedom to break node conventions if that makes sense for your use-case.
	An array of the names of the core modules in Node.js
		https://www.npmjs.com/package/node-core-module-names
	
		The core modules are defined within Node.js's source and are located in the lib/ folder.
		
		C:\Program Files\nodejs\node_modules\npm\lib
		
		
	More Info
	
		https://nodejs.org/api/modules.html
		
	
	
IMPORT A LOCALLY CREATED 'CUSTOM' MODULE
	var module1 = require('./module1');
	
	var module2 = require('./folder/module2');
	
		module1 refers to module1.js 		Script File 
					
	
CREATE A CUSTOM MODULE FROM SCRATCH
	MODULE x
	
		module.exports={};
		var y=1;
		function private1(){};
		function private2(){};
		exports.y=y;
		exports.public1=private1;
		exports.doThis=private1;
	
	
		NOTE : CAN USE EXPORTS OR MODULE.EXPORTS TO EXPORT A FUNCTION OR FIELD 
		NOTE : MODULE EXPORTS CAN BE EG VARIABLE, ARRAY, OBJECT, METHOD 
	
	Access exported methods using name of module . name of method 
	
	x.public1();
	
	
	
	EXPORTING A VARIABLE 
	
		module.exports.a=a;  
			==> THEN CAN USE a in another module 
			eg   var myModule = require ('myModule'); 
			     var a = myModule.a;
				 
	
	
	EXPORTING A FUNCTION 
		module.exports.doThis = function(){
		   return someValue;
		}
		
			Then can use this function in another module eg 
			
				var myModule=require('myModule');
				var result = myModule.doThis();
				
						value calculated as someValue will be passed 
						through 'return someValue' into the variable 
						result 
						
						
				
	REQUIRE YOUR MODULE
	
		var a = require('./x');           IMPORT MODULE X
		
	CALL A METHOD FROM YOUR MODULE
	
		a.doThis();
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
					
INSTALLING OFFICIAL NPM MODULES 
	  
	MODULES CAN EITHER BE 
	
		1) SMALL PIECES OF CODE WRITTEN BY YOU
		2) CORE MODULES : WRITTEN BY OTHERS AND IMPORTED USING NPM 
		
 
		
		
	PRIMARY WAY OF GETTING MODULES INSTALLED WHICH WERE WRITTEN BY OTHERS IS VIA NPM NODE PACKAGE MANAGER
	
		https://www.npmjs.com/
	
		NPM is installed when Node is installed (Windows and MAC)
	
		https://docs.npmjs.com/
	
	
	
	
	INSTALL WITH NPM
	
			NPM INSTALL <module> 			LOCALLY JUST FOR THIS PROJECT 
			
			
			NPM INSTALL <module>  -g        GLOBAL FOR ENTIRE MACHINE 	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
OOP THEORY 
	MODULES CAN BE USED LIKE CLASSES IN OOP
		Use to create PUBLIC AND PRIVATE METHODS FOR CLASSES
	
	
	
		MODULE FILE IS YOUR CLASS
		
			FIELDS : PRIVATE OR PUBLIC (THROUGH 'EXPORT')
			FUNCTIONS ARE YOUR METHODS : PRIVATE OR PUBLIC (THROUGH 'EXPORT')
			
			PRIVATE BY DEFAULT
			
			TO MAKE PUBLIC, MUST EXPORT USING 
			
					module.exports.module_name=function_name; 
							module_name = NAME OF OUR MODULE 
							
							function_name = NAME OF FUNCTION WE WISH TO EXPORT 
	
	
					Note : no brackets so function is not called at this point
					
	
	
			var module = (function() {
				var private = function() {
					// ...
				};
				var public = function() {
					// ...
				};
				
				return {
					public: public
				};
			})();
			typeof module.public; // "function"
			typeof module.private; // "undefined"
	CAN ONLY RETURN ONE OBJECT SO IF NEED MULTIPLE FIELDS RETURNED YOU CAN DO SO BY CREATING A JSON OBJECT
	    return {
			public_name:private_name,
			init: init,
			numberClick: numberClick,
			setOperator: setOperator,
			clearNumbers: clearNumbers
		};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
CREATING MODULES : RULES 
		Here are some rules of thumb when creating a module:
		Start by moving repeatedly used code into a function
		
		When your function (or a group of functions related to the same theme) get big enough, move them into another file and expose them using module.exports. You can load this using a 'require' statement
		
		If you have some code that can be used across multiple projects give it it's own readme, tests and package.json and publish it to github and npm. There are too many awesome benefits to this specific approach to list here!
		A good module is small and focuses on one problem
		
		Individual files in a module should not be longer than around 150 lines of JavaScript
		
		A module shouldn't have more than one level of nested folders full of JavaScript files. If it does, it is probably doing too many things
		
		
			
	
	
	
	
	
	
	
	
	
	
	
	
	
SHARED MODULES 
	TAKE CARE WITH MODULES WHICH ARE CALLED BY MORE THAN ONE PIECE OF 
	SOFTWARE.  
	
	IF THEY EXPORT VARIABLES OR FUNCTIONS THEN THESE CAN BE TREATED AS 
	GLOBAL VALUES.  IF THE VALUE CHANGES THEN IT CHANGES FOR ALL CODE 
	USING THAT MODULE - BEWARE!
			
	Good for example of a chat room where each user shares an 
			instance of the chat stream.
	
	EXAMPLE
		MODULE need_me is required by
			MODULE use_me_1
			MODULE use_me_2
		ANY VARIABLES DECLARED AS PUBLIC IN MODULE need_me CAN BE USED IN BOTH MODULES, BUT THE VARIABLES WILL BE LIKE GLOBAL VARIABLES IE IF THE VALUE IS CHANGED IN ONE PLACE, IT WILL BE CHANGED IN ALL PLACES.
			
			See lab 16 
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
				
			
	
UNIQUE INSTANCES OF OBJECTS : OBJECTS NOT SHARED 
	Object factory : instead of shared modules create fully unique instances
	
		var x = new myObject() 
		
							==> NEW INSTANCE (UNIQUE VALUES NOT SHARED)
	
	
 		see lab 17 for working demo
 		
		
		
		
		
		
		
			
		
	
	
	
	
INSTALLING A MODULE : LOCAL SCOPE (ONE PROJECT ONLY)
	DEFAULT WHEN DOWNLOADING CORE MODULES IS TO IMPORT THEM INTO YOUR LOCAL PROJECT ONLY IE THEY WILL BE OF LIMITED 'LOCAL' SCOPE 	
		
	INSTALL A MODULE 
		npm install <package_name>
		
	This places the module in the node_modules folder 
			
	Now add to your project using 
	
		var x = require ('module-name');
		
	
	eg
	
		var fs = require("fs");     
		common practice to NAME THE VARIABLE THE SAME NAME	AS THE MODULE 
				
		
		
		
INSTALLING A MODULE : GLOBAL SCOPE (ENTIRE COMPUTER)
	https://nodejs.org/api/globals.html
	CAN DOWNLOAD AND INSTALL MODULES AS GLOBAL IF WE WISH - THEN THEY BECOME AVAILABLE TO ALL MODULES ON YOUR COMPUTER 
	
	Only if you want to depend on your module as a command-line tool 
	
	npm install -g <module>
		
	
		
		
		
MODULE CACHING 
	Modules are cached after first load   ***
	
	
			
			
	
PROJECT CREATION FROM SCRATCH
	NPM IS THE TOOL USED TO CREATE PROJECTS
	
	NPM RUN BY ITSELF OPENS UP NPM HELP WITH ALL COMMANDS AVAILABLE FOR USE
	In the root folder of your project, run 
	
			npm init 
	NPM START
	
		ONCE  YOU HAVE CREATED YOUR PACKAGE.JSON FILE YOU CAN RUN YOUR APP USING NPM START IF YOU HAVE DEFINED A START FILE
		
		
		"scripts": {"start": "nodemon node_00_HelloWorld.js"}
		
		
	NPM INSTALL
	
		THIS WILL INSTALL ALL DEPENDENT PACKAGES FOR YOUR PROJECT IN THE NODE-MODULES FOLDER
		
	
			NOTE : IF YOU HAVE INSTALLED MODULES BUT NOT ADDED THEM TO PACKAGE.JSON FILE YOU CAN DO SO WITH THIS PROCEDURE
			
			NPM INSTALL -G NPM-COLLECT
			
			NPM-COLLECT --SAVE
			
				==> ALL MODULES IN YOUR NODE_MODULES FOLDER WILL NOW BE ADDED TO THE PACKAGE.JSON FILE AS WELL
				
				
		
		
		
	Note : can manually set fields later eg 
	
		npm set init.author.name "Brent Ertz"
		npm set init.author.email "brent.ertz@gmail.com"
		npm set init.author.url "http://brentertz.com"
		This next command will prompt you for an email and password, create or verify a user in the npm registry, and save the credentials to the ~/.npmrc file at
			c:\users\<user>\npmrc  file
		
	NPM CONFIG SET <KEY> AND GET <KEY>
		https://docs.npmjs.com/cli/config
			
		npm gets its config settings from the command line, environment variables, npmrc files, and in some cases, the package.json file.
		
		The npm config command can be used to update and edit the contents of the user and global npmrc files.
		
		The four relevant files are:
			per-project config file (/path/to/my/project/.npmrc)
			per-user config file (~/.npmrc)
			global config file ($PREFIX/etc/npmrc)
			npm builtin config file (/path/to/npm/npmrc)
		npm config set <key> <value> [-g|--global]
		npm config get <key>
		npm config delete <key>
		npm config list
		npm config edit
		npm get <key>
		npm set <key> <value> [-g|--global]
		
		npm config set "phil=1"  sets npmrc in c:\users\<user>\npmrc  file
		
		npm config set "phil=3" -g sets npmrc in c:\users\<user>\appdata\roaming\npm\etc\npmrc file
		npmrc.5 file in c:\program files\nodejs\node_modules\npm\man\man5
		
		
		I'm seeing this in the %ProgramFiles%\nodejs\node_modules\npm\npmrc file:
				prefix = ${APPDATA}\npm
				
				
				
				
				
				
		
		
	
	
	
	
	
	