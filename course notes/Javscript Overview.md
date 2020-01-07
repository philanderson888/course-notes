# Javscript Overview

# Node : Javascript Overview
    	
    <pre>
    	
    Data Type 
    	
    	var can be 
    	
    		number
    		string""
    		array[]
    		object{}
    		null var x=null;
    		undefined var x;
    		NaN
    		
    		use strict;        // V2 OF JAVASCRIPT 
    		
    		var x=17;
    		var y="hi there";
    		var z=[1,2,3,"TEXT",[1,2,3],{"FIELD":"VALUE"}];
    		
    		var = {
    		
    		  "field1":"value1",
    		  "field2":"value2"		
    		}
    		
    		JSON 
    
    	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
    		
    	can use 'typeof' to determine the data type of a variable 
    	
    	if(typeof(x)=='number')){//CODE}
    	
    console.assert 
    	var a=10;
    	console.assert(a==9,"a is not 9");   ==> will output as a failed assert to console (see js_assert.htm)
    	
    	
    </pre>
    
    ### Array
    		
    ```javascript
    	var x = [1,2,3];
    	x.push("first item");     ADDS FIRST ITEM TO ARRAY 
    	x[1]="second item";
    	iterate with for loop (preferred for speed) or foreach loop 
    	console.log(process.env.PATH.split(';').forEach(function(dir){console.log(dir);}));
    	
    	FOR(var i=0;i<myarray.length;i++){ code [i]}
    	a = [ 1, 2, 3];
    	a.forEach(function (v) {
    		console.log(v);
    	});
    	
    Object 	
    	var x = {};         BLANK OBJECT 
    	
    	x.field1="value1";   MANUALLY ADDING FIELD 
    	                     ENTRIES TO OBJECT 
    	x.field2="value2";
    	
    	
    	var x={
    	  field1:"value1",
    	  field2:"value2"
    	}
    	
    	
    	for (var item in x){
    		if(x.hasOwnProperty(item)){
    			console.log(item + " has value " + x[item]);
    		}
    	}
    	
    	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
    	
    ```	
    	
    ### PASSING PARAMETERS
    		
    ```javascript	
    	function doThis(x,y,z)  {
    		alert ('hello');
    		alert(x);
    	}
    	doThis(x,y,z);
    IF..ELSE IF..ELSE
    	if(a==1){}
    	else if (a==2){}
    	else{}
    	
    	
    	
    	
    DO..WHILE LOOP
    	x=0;
    	do{
    	code;
    	x++;
    	}
    	while(x<10);
    WHILE LOOP
    	x=0;
    	while(x<10){
    	code;
    	x++;
    	}
    FOR LOOP
    	for(var i=0;i<10;i++){}
    	
    	
    FOR..IN  
    	EQUIVALENT OF FOREACH
    	
    	for (var item in myArray){
    		if(myArray.hasOwnProperty(item)){
    			console.log(item);
    		}
    	}
    	
    		See node_89_json.js
    	
    	
    	
    FOREACH
    	a = [ 1, 2, 3];
    	a.forEach(function (v) {
    		console.log(v);
    	});
    			js_28_foreach_loop_01.htm
    			js_28_foreach_loop_02.htm
    			js_28_foreach_loop_03.htm
    			
    	
    	
    Equivalent of string.format
    	
    		console.log("x is %d and y is %s", 1,"string");
    		
    		
    ```	
    
    <pre>
        
    Object Orientated Programming
    	Keep in mind that there will be patterns in this table that reference the concept of "classes". JavaScript is a class-less language, however classes can be simulated using functions.
    	The most common approach to achieving this is by defining a JavaScript function where we then create an object using the new keyword. this can be used to help define new properties and methods for the object as follows:
    	// A car "class"
    	function Car( model ) {
    	 
    	  model = model;
    	  this.color = "silver";
    	  this.year = "2012";
    	 
    	  this.getInfo = function () {
    		return this.model + " " + this.year;
    	  };
    	  
    	  
    	 
    	}
    	We can then instantiate the object using the Car constructor we defined above like this:
    	var myCar = new Car("ford");
    	 
    	myCar.year = "2010";
    	 
    	console.log( myCar.getInfo() );
    Class Object (OOP)
    	*** NEW TO JAVASCRIPT SO ONLY IMPLEMENTED IN CHROME **
    	
    	*** NOT IN FIREFOX OR IE SO BEWARE !!! ***
    	
    	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes	
    	
    	class x {
    	  constructor(height, width) {
    		this.height = height;
    		this.width = width;
    	  }
    	  getArea(){
    	    return this.height*this.width;
    	  }
    	}
    	
    			
    	
    HTML and Javascript 
    	<html>
    	<head>
    	<script src="myjavascript.js"></script>	
    	
    CALLING REGULAR FUNCTIONS 
    CALLING REGULAR FUNCTIONS 
    	CALLING A FUNCTION WITH NO RETURN VARIABLE
    		function x(){}
    		x();
    	CALLING A FUNCTION WITH A RETURN VARIABLE
    		function y(){
    		 z=1;
    		 return z;
    		}
    		var output=y();                 will hold 1 
    		==> ONLY ALLOWED ONE RETURN VARIABLE SO HAVE TO RETURN
    			AN OBJECT OR ARRAY IF MULTIPLE RETURN VARIABLES 
    			ARE REQUIRED
    			
    			
    			
    			
    PRIVATE AND PUBLIC METHOD INSIDE FUNCTION 
    		function x(){
    		  var z=2;
    		  function y(){}          //PRIVATE 
    		  
    		  this.publicFunction = function(){}
    		  return(thisvalue)
    		  
    		}
    		
    		
    		console.log(publicz);
    		
    		publicFunction();
    		
    		SEE LAB js_private_public_functions.htm FOR A WORKED EXAMPLE 
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    FUNCTION : RETURNING ITEMS 
    	function x(){
    	
    	  return {
    		x:1,
    		y:function(){}
    	  }
    	}
    	x and y are public (x variable, y function)
        
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    FUNCTION : ANONYMOUS 
    		var x = function (){
    			console.log("Anonymous function at work");
    		}
    		x();   will run the code!
    		
    		We can use anonymous functions and pass them as variables into other functions
           doThis(a,b,c,dothisfunction(ERROR,DATA){
               if(ERROR){  
    			return;
    		   }
    		   // GOOD CODE
    	   });
    		
    	
    			doThis  =  BURGER CASHIER
    						
    			a,b,c   =  GET BE A BIG MAC WITH FRIES AND COKE
    								
    			dothisfunction ==> WHAT WE DO WHEN BURGER IS READY (EAT IT!)
    				CALLBACK PARAMETERS
    				
    					'ERROR FIRST'    MUST CATCH ALL EXCEPTIONS!!!
    					
    				DATA SECOND   (IN THIS CASE THE BURGER IS OUR DATA	
    									RETURNED!)
    	
    		
    			
    DI Dependency Injection is the opposite of top-down inheritance
    	Inheritance 
    	
    		Parent
    		
    			Child
    			
    			
    			
    			
    	Dependency Injection
    	
    		function1(function2passedin(){}){}
    		
    			dynamic dependency injection : type of function2 is not known 
    			until run time
    			
        
    			
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    TRY..CATCH..FINALLY 
    	SYNCHRONOUS CODE ONLY ==> NOT CALLBACK CODE!!!
    	TRY{}
    	CATCH(e){
    		console.log(" error " + e);
    	}
    	
    	FINALLY{}
    				
    	
    	
    		CATCH EG FILE_NOT_FOUND, DIVIDE_BY_ZERO ==> OPERATION IN JAVASCRIPT WHICH
    					GIVES RUNTIME ERROR 
    					
    					
    					
    	
    	
    	
    		
    ASYNCHRONOUS CODE - ERRORS AND CALLBACKS 
    	FUNCTION X(input_parameters, callback(error,x,y,z){
    			if(error){
    				/handle error
    				return;
    			}
    			code x,y,z
    			
    	})
    	CALL X 
    		
    	DO OTHER STUFF AS WELL ..
    		
    	WAIT FOR CALLBACK TO RESPOND 
    						
    						
    	WHEN RESPOND 
    						
    		2 OPTIONS
    							
    			1) ERROR ==> HANDLE IF IF(error){  LOG  }
    								
    			2) NO ERROR ==> PROCEED 
    	
    New in ES6 
    
    	
    	Collections And Maps 
    	
    	Map is new type of object storing a list of keys and corresponding values 
    		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections
    		
    	var x = new Map();
    	x.set("a","first letter");
    	x.set("b","second letter");
    	x.set("c","third letter");
    	x.get("c");
    	
    	for(var key of x.keys()){
    		console.log(key + " has value \"" + x.get(key) + "\"");
    	}
    	
    	
    	Collection also can add [key,value] pairs			
    			
    			
    			
    			
    			
    			
    			
    			
    The future of NodeJS
    
        
    Changes to the javascript language
    
        
    ES6 Harmony and ES7
    
    	https://nodejs.org/en/docs/es6/
    	
    	http://es6-features.org/#Constants
    	
    	https://github.com/lukehoban/es6features
    	
    	harmony are features which have been produced but not yet considered stable 
    	
    	ES6 KEY FEATURES EG CLASSES AND MODULES 
    		http://www.wintellect.com/devcenter/nstieglitz/5-great-features-in-es6-harmony