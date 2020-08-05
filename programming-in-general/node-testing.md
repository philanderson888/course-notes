# Node Testing


    
Unit Testing
		
What is unit testing
	TESTING INDIVIDUAL MODULES 
How to plan for unit testing
	TDD TEST DRIVEN DEVELOPMENT 
	
	WRITE YOUR TESTS FIRST 
	
	
	
	
	
	
	
	
	
	
		
	
Testing for good practice with ESLint 
	http://eslint.org/
	
	http://eslint.org/demo/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
ASSERT 
	const assert = require('assert');
	https://nodejs.org/api/assert.html
	
			
			assert(true);  // OK
			assert(1);     // OK
			assert(false);
			  // throws "AssertionError: false == true"
			assert(0);
			  // throws "AssertionError: 0 == true"
			assert(false, 'it\'s false');
			  // throws "AssertionError: it's false"
						node_assert_01.js
	
	
	
	
	
	
	
	
	
Jasmine Testing

	
UNIT TEST : JUST TEST ONE COMPONENT IN ISOLATION
	
TESTING ON JAVASCRIPT
	
	http://blog.codeship.com/jasmine-testing-javascript/
		
Download from 
		
	https://github.com/jasmine/jasmine/releases
		
Install
	npm install jasmine 
	npm install -g jasmine
	npm install jasmine-node --save
	npm install request --save
	
 Use
	jasmine init
	
jasmine example 1

	
Examine spec/support/jasmine.json file
	
jasmine    to run tests
	
jasmine spec/appSpec.js     to run a specific file
	
	
Jasmine Example 2

	C:\DELETEME\JASMINE2\SRC\
		
	SPECRUNNER.HTML
		
		DISPLAY RESULTS OF TESTS
			
		ANIMAL.JS
		
			JAVASCRIPT CODE TO BE TESTED
			
		ANIMALSPEC.JS
		
			TESTS
			
			
		SPIES : SEE IF FUNCTION WAS CALLED
		
			http://blog.codeship.com/jasmine-spyon/
			
	
Jasmine Example 3

	
	
	This describe function may seem confusing at first if you are new to Jasmine, but it is actually very simple to understand. The first argument is just a short description of what you are testing (in this case we are testing Hello World app). The second argument is just the function that is going to execute the test.
	We now want to add the two tests we are going to run. The first test ensures our server is returning a HTTP status of 200, or OK. For this we will need to write another describe function.
	describe("Hello World Server", function() {
	  describe("GET /", function() {
            
	  });
	});
		
		
		
	In the first argument, we use “GET /” as the description because if you remember, in our Node app we use app.get('/', function { ... }); to kick off our code.
	
	
	
	The next step is to write an it function. The it function is very similar to the describe function, just instead of describing the test, you are inputting the contents you expect to be returned.
	describe("Hello World Server", function() {
	  describe("GET /", function() {
		it("returns status code 200", function() {
		});
	  });
	});
	The code above just shows how to write your it function into your current describe function. Next we will use Node's request module to send a request to our server. When we set up Jasmine in our environment, we also installed Node's request module during step 4 of that process.
	var request = require("request");
	var base_url = "http://localhost:3000/"
	describe("Hello World Server", function() {
	  describe("GET /", function() {
		it("returns status code 200", function() {
		  request.get(base_url, function(error, response, body) {
		  });
		});
	  });
	});
	Inside of our it function we add the request to our URL. At the top of the file we define the variables request and base_url. Now our request function makes a call to our localhost at port 3000. Please make sure this matches the URL where your Node app is running on. Next we are going to put the actual test into our code.
	describe("Hello World Server", function() {
	  describe("GET /", function() {
		it("returns status code 200", function(done) {
		  request.get(base_url, function(error, response, body) {
			expect(response.statusCode).toBe(200);
		  });
		});
	  });
	});
	In the request function, we put our expect function. This function looks at our response.statusCode and checks to make sure it is '200'. The final part of the test we have to add is a done callback. Since Node.js is asynchronous, the it function will finish before our expect function does.
	describe("Hello World Server", function() {
	  describe("GET /", function() {
		it("returns status code 200", function(done) {
		  request.get(base_url, function(error, response, body) {
			expect(response.statusCode).toBe(200);
			done();
		  });
		});
	  });
	});
	There we have it! This will test to make sure the our server responds with a status code of 200. Add another function to test to make sure the body is equal to 'Hello World'.
	var request = require("request");
	var base_url = "http://localhost:3000/"
	describe("Hello World Server", function() {
	  describe("GET /", function() {
		it("returns status code 200", function(done) {
		  request.get(base_url, function(error, response, body) {
			expect(response.statusCode).toBe(200);
			done();
		  });
		});
		it("returns Hello World", function(done) {
		  request.get(base_url, function(error, response, body) {
			expect(body).toBe("Hello World");
			done();
		  });
		});
	  });
	});
	We use the same pattern as we did for the status code test but instead of looking at the response we are looking at the body. We expect the body to be equal to 'Hello World' and then we run done(); to make sure our expect function runs before our it function finishes. 
	Step 3. Integrate Your Node App with Jasmine
	Now that we have our testing set up in our spec file, we have to integrate that testing with our Node app. To do this we add a require at the top of the file that points to our Node application. In this case, I have it point towards the app.js file we created in a previous tutorial.
	var request = require("request");
	var helloWorld = require("../app.js")
	var base_url = "http://localhost:3000/"
	describe("Hello World Server", function() {
	  describe("GET /", function() {
		it("returns status code 200", function(done) {
		  request.get(base_url, function(error, response, body) {
			expect(response.statusCode).toBe(200);
			done();
		  });
		});
		it("returns Hello World", function(done) {
		  request.get(base_url, function(error, response, body) {
			expect(body).toBe("Hello World");
			done();
		  });
		});
	  });
	});
	This file will work to run tests on, but we need to make sure we close the server we open on our local host. If we skip this step you will run into issues down the line trying to run tests multiple times. To close the server we need to edit our app.js file to export a server.close(); function. Below is the update app.js code I am using to run our Jasmine tests.
	var express = require('express');
	var app = express();
	var exports = module.exports = {};
	app.get('/', function(req, res){
	  res.send('Hello World');
	});
	var server = app.listen(3000, function(){
	  console.log('Magic is happening on port 3000');
	});
	exports.closeServer = function(){
	  server.close();
	};
	Essentially what we are doing here is creating our exports object and adding a close server function that shuts down the server we open when our code is run. It is important that we do not close the server in this file because it will cause issues running this file when we deploy to production. Once we have written this function to export we have to add it to our spec file.
	var request = require("request");
	var helloWorld = require("../app.js")
	var base_url = "http://localhost:3000/"
	describe("Hello World Server", function() {
	  describe("GET /", function() {
		it("returns status code 200", function(done) {
		  request.get(base_url, function(error, response, body) {
			expect(response.statusCode).toBe(200);
			done();
		  });
		});
		it("returns Hello World", function(done) {
		  request.get(base_url, function(error, response, body) {
			expect(body).toBe("Hello World");
			helloWorld.closeServer();
			done();
		  });
		});
	  });
	});
	As you can see I have added the helloWorld.closeServer(); function right below our expect function in our second it function. Putting the close server function in that spot will ensure that our tests have been ran and then the server will close.
	Step 4. Run your Tests
	Before we can run our tests locally, there is one more step to complete. Open the package.json file in your projects directory. Once the file is open you will need to put the command jasmine-node spec into the test section. Your file should look like this now:
	{
	  "name": "node-tutorial",
	  "version": "1.0.0",
	  "main": "app.js",
	  "dependencies": {
		"express": "^4.13.3",
		"jasmine-node": "^1.14.5",
		"request": "^2.65.0"
	  },
	  "devDependencies": {},
	  "scripts": {
		"test": "jasmine-node spec"
	  },
	  "author": "",
	  "license": "ISC"
	}
	We made this change to our package.json file because want to be able to run our tests from the command npm test. Run that command in your project directory now and you should see an output similar to this:
	Distellis-MBP:node-tutorial zack$ npm test
	> jasminetesting@1.0.0 test /Users/zack/ws/src/node-tutorial
	> jasmine-node spec
	Magic is happening on port 3000
	..
	Finished in 0.06 seconds
	2 tests, 2 assertions, 0 failures, 0 skipped
	As you can see our test file ran our sample application, made sure the status code was equal to 200, and then tested that the body was equal to “Hello World”. Now open your app.js file and change “Hello World” to “Hi Mom” and run the test again.
	You should see an output similar to this:
	Distellis-MBP:node-tutorial zack$ npm test
	> jasminetesting@1.0.0 test /Users/zack/ws/src/node-tutorial
	> jasmine-node spec
	Magic is happening on port 3000
	.F
	Failures:
	  1) Hello World Server GET / returns Hello World
	   Message:
		 Expected 'Hi Mom' to be 'Hello World'.
	   Stacktrace:
		 Error: Expected 'Hi Mom' to be 'Hello World'.
		at Request._callback (/Users/zack/ws/src/node-tutorial/spec/hello_world_spec.js:16:22)
		at Request.self.callback (/Users/zack/ws/src/node-tutorial/node_modules/request/request.js:198:22)
		at emitTwo (events.js:87:13)
		at Request.emit (events.js:172:7)
		at Request. (/Users/zack/ws/src/node-tutorial/node_modules/request/request.js:1082:10)
		at emitOne (events.js:82:20)
		at Request.emit (events.js:169:7)
		at IncomingMessage. (/Users/zack/ws/src/node-tutorial/node_modules/request/request.js:1009:12)
	Finished in 0.052 seconds
	2 tests, 2 assertions, 1 failure, 0 skipped
	Since we changed the Value of the body of the response to “Hi Mom” this caused our Jasmine test to fail. This is important because we want to make sure that when we make change to our code that the output is still what we expect it to be. You can now go back and change “Hi Mom” back to “Hello World” in our app.js file.
	
	
	
	
	
	
	
	
	
	Run your code and call the function with given input and assert TRUE OR FALSE 
	WHETHER THE CODE RESULT SHOULD BE A GIVEN VALUE 
	
	HANDY TO WRITE TESTS BEFORE YOU WRITE YOUR CODE! SAVES A LOT OF WORK AND TIME!
	
	describe ("INPUT TEXT", function(){
		it("INPUT TEXT 2", function(){
			expect(field1).toBe(field2);
			expect(x).toBe(true);
			expect(y).not.toBe (true);
			expect(x).toBeDefined();
			toBeNull();
			toContain("x")           IN ARRAY 
			toBeLessThan(x);
			toThrow()
			toThrowError("x")
			toEqual(1)
			expect(function.parameter).toHaveBeenCalledWith(123)  
			
		});
	});
	
	
	
Jasmine Links

	https://github.com/jasmine/jasmine	
	
	https://www.distelli.com/docs/tutorials/test-your-nodejs-with-jasmine
		
	http://blog.codeship.com/jasmine-node-js-application-testing-tutorial/
	
	https://github.com/jasmine/jasmine-npm
	  
	
	
Mocha Testing
	
TDD TEST DRIVEN DESIGN : MEANS DESIGN YOUR TESTS FIRST! 	
	
WILL NOT ALLOW ANY TEST TO RUN FOR MORE THAN 2 SECONDS BEFORE FAILING IT
ACCEPTANCE TESTING - TESTS THE OUTCOMES, DOES NOT TEST THE LOGIC
	https://github.com/mochajs/mocha
	http://mochajs.org/
	
	npm install -g mocha
	
	mkdir test
	
	By default, mocha looks for the glob ./test/ *.js, so you may want to put your tests in test/ folder.
	
	$ $EDITOR test/test.js
	
	
	var assert = require('assert');
	describe('Array', function() {
	  describe('#indexOf()', function () {
		it('should return -1 when the value is not present', function () {
		  assert.equal(-1, [1,2,3].indexOf(5));
		  assert.equal(-1, [1,2,3].indexOf(0));
		});
	  });
	});
	
	
	
	
	
	
VOWS TESTING

SHOULD TESTING

		 
