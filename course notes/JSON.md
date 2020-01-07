# JSON

JSON
    
    	from https://docs.nodejitsu.com/articles/javascript-conventions/what-is-json
    	JSON can be represented as either a list of values, e.g. an Array, or a hash of properties and values, e.g. an Object.
    	// a JSON array
    	["one", "two", "three"]
    	// a JSON object
    	{ "one": , "two": 2, "three": 3 }
    	
    	SAMPLE DATA 
    	
    	
    		CREATE IN 		http://www.json-generator.com/#generate
    		
    		
    		AND				https://www.mockaroo.com/
    		
    	
    		AND 			http://jsonschema.net/#/
    		
    		 	
    		
    		
    		
    		
    	
    	
    	
    	
    	
    	
    	
    JSON Encoding
    
    Encoding and Decoding
    Javascript provides 2 methods for encoding data structures to json and encoding json back to javascript objects and arrays. They are both available on the JSON object that is available in the global scope.
    JSON.STRINGIFY
    	JSON OBJECT => STRING
    	
    JSON.PARSE
    	STRING ==> JSON OBJECT
    	
    	
    JSON.STRINGIFY
    
    		
    JSON.stringify takes a javascript object or array and returns a serialized string in the JSON format.
    var data = {
      name: "John Doe"
      , age: 32
      , title: "Vice President of JavaScript"
      , MOREDATA : {  "A":"1"  } 
    }
    var jsonStr = JSON.stringify(data);
    console.log(jsonStr);
    data = { name: "John Doe" , age: 32  , title: "Vice President of JavaScript" }; jsonStr=JSON.stringify(data);console.log(jsonStr);
    // prints '{"name":"John Doe","age":32,"title":"Vice President of JavaScript"}'
    JSON.Parse
    
    JSON.parse takes a JSON string and decodes it to a javascript data structure.
    var jsonStr = '{"name":"John Doe","age":32,"title":"Vice President of JavaScript"}';
    var data = JSON.parse(jsonStr);
    console.log(data.title);
    var jsonStr = '{"name":"John Doe","age":32,"title":"Vice President of JavaScript"}'; var data = JSON.parse(jsonStr); console.log(data.title);
    SERIALIZE : HTML FORM : POST DATA TO SERVER (FORM ACTION ="" METHOD='POST')
    	==> 'SERIALIZE FORM FIELDS AND SEND AS STRING'
    	
    	
    	JQUERY : MANUAL 'SERIALIZE' COMMAND TO DO THIS MANUALLY 
    	
    		SERIALIZE = ENCODE AS STRING YOUR FORM DATA
    	
    FOR..IN...LOOPS TO EXTRACT JSON DATA 
    EXAMPLE : JSON WITHIN JSON - EXTRACT BOTH THE MAIN LIST AND EACH SUB-LIST 
    	EG LIST OF PEOPLE, OF WHICH JOHN DOE IS JUST ONE.
    	var jsonStr = '{"name":"John Doe","age":32,"title":"Vice President of JavaScript"}
    	';
    	OUTPUT ALL NAME AND AGE 
    		
    		
    		console.log('\n\n');
    		for (var person in people){
    			if(people.hasOwnProperty(person)){
    				var friendList = '';
    			for (var friend in people[person].friends){
    				if(people[person].friends.hasOwnProperty(friend)){
    				if (friendList.length>0){
    					friendList += ', ';
    				}
    					friendList += people[person].friends[friend].name;
    				}
    			}
    				console.log('Record ' + 
    					person +  
    					' has name ' + people[person].name + 
    					' who has ' + people[person].eyeColor + 
    					' eyes and ' + people[person].friends.length + 
    					' friends called ' + friendList + "\n\n"
    					);
    			}
    		}
    		node_89_json.js 
    		
    		
    		
    		
    What is valid JSON?
    	
    	{"property",value}
    	
    	There are a few rules to remember when dealing with data in JSON format. There are several gotchas that can produce invalid JSON as well.
    	Empty objects and arrays are okay
    	Strings can contain any unicode character, this includes object properties
    	null is a valid JSON value on it's own
    	All object properties should always be double quoted
    	Object property values must be one of the following: String, Number, Boolean, Object, Array, null
    	Number values must be in decimal format, no octal or hex representations
    	Trailing commas on arrays are not allowed
    	These are all examples of valid JSON.
    	{"name":"John Doe","age":32,"title":"Vice President of JavaScript"}
    	["one", "two", "three"]
    	// nesting valid values is okay
    	{"names": ["John Doe", "Jane Doe"] }
    	[ { "name": "John Doe"}, {"name": "Jane Doe"} ]
    	{} // empty hash
    	[] // empty list
    	null
    	{ "key": "\uFDD0" } // unicode escape codes
    	
    	
    Invalid JSON 
    	Functions
    	Dates
    	Hex  eg 0x...
    	
    	
    				node_18_writefile_readfile.js
    	
    	
    NOTE : UNDEFINED 
    Any function without an explicit RETURN STATEMENT ALWAYS RETURNS UNDEFINED 
    js_32_function.htm 
    	
    function x(){}
    	
    	x();    RETURN UNDEFINED