# Node Glossary

- [Node Glossary](#node-glossary)
	- [Callbacks](#callbacks)
	- [JSONP](#jsonp)
	- [Heap](#heap)
	- [Process.nextTick()](#processnexttick)
	- [Processes](#processes)
	- [Patterns](#patterns)





## Callbacks

```js

	https://strongloop.com/strongblog/node-js-callback-hell-promises-generators/
	
	https://www.airpair.com/node.js/posts/top-10-mistakes-node-developers-make
	
	
	await (with promise)
	
		https://tonicdev.com/docs/await
	
		var got = require("got");
		
		CAN FOR EXAMPLE DO MULTIPLE ASYNCHRONOUS CALLS AND SYNCHRONOUSLY WAIT 
		UNTIL THE FIRST OF THOSE CALLS COMES IN 
		
	
		
			var getJSON = URL => require("got")(URL, { json : true });
			// Get the most popular repo asynchronously: "await" waits for it to finish!
			var response = await getJSON("https://api.github.com/search/repositories?q=javascript&sort=stars&order=desc");
			// Grab the contributors of the most popular repo, asynchronously
			var mostPopularRepo = response.body.items[0];
			var contributors = (await getJSON(mostPopularRepo.contributors_url)).body;
			// and render them as html
			contributors.reduce((prev, user) =>
				prev + `<li><img src=${user.avatar_url} width=24 /> ${user.login} </li>`
			, "");
		
		Async example point 4 on 
			
			https://www.airpair.com/node.js/posts/top-10-mistakes-node-developers-make
			
		Code example at 
			https://github.com/alessioalex/airpair-nodejs-mistakes/blob/master/4-nested-callbacks/after.js
			
			
		Promises; 
		
		
			http://www.wintellect.com/devcenter/nstieglitz/5-great-features-in-es6-harmony
			
	
CALLBACKS 
	CALLBACK EXAMPLE 
	
		http://callbackhell.com/
		
		downloadPhoto('http://coolcats.com/cat.gif', handlePhoto)
		function handlePhoto (error, photo) {
		  if (error) console.error('Download error!', error)
		  else console.log('Download finished', photo)
		}
		console.log('Download started')
	
	
	
	
How do I fix callback hell?
	http://callbackhell.com/
	Callback hell is caused by poor coding practices. Luckily writing better code isn't that hard!
	You only need to follow three rules:	
	
	
	
	1. Keep your code shallow
		Here is some messy browser JavaScript that uses browser-request to make an AJAX request to a server:
		var form = document.querySelector('form')
		form.onsubmit = function (submitEvent) {
		  var name = document.querySelector('input').value
		  request({
			uri: "http://example.com/upload",
			body: name,
			method: "POST"
		  }, function (err, response, body) {
			var statusMessage = document.querySelector('.status')
			if (err) return statusMessage.value = err
			statusMessage.value = body
		  })
		}
		
		
		
		This code has two anonymous functions. Let's give em names!
		var form = document.querySelector('form')
		form.onsubmit = function formSubmit (submitEvent) {
		  var name = document.querySelector('input').value
		  request({
			uri: "http://example.com/upload",
			body: name,
			method: "POST"
		  }, function postResponse (err, response, body) {
			var statusMessage = document.querySelector('.status')
			if (err) return statusMessage.value = err
			statusMessage.value = body
		  })
		}
		
		
		
		As you can see naming functions is super easy and has some immediate benefits:
		makes code easier to read thanks to the descriptive function names
		when exceptions happen you will get stacktraces that reference actual function names instead of "anonymous"
		allows you to move the functions and reference them by their names
	
	
	Now we can move the functions to the top level of our program:
		document.querySelector('form').onsubmit = formSubmit
		function formSubmit (submitEvent) {
		  var name = document.querySelector('input').value
		  request({
			uri: "http://example.com/upload",
			body: name,
			method: "POST"
		  }, postResponse)
		}
		function postResponse (err, response, body) {
		  var statusMessage = document.querySelector('.status')
		  if (err) return statusMessage.value = err
		  statusMessage.value = body
		}
	
	
	
	
	
	
	
	2. Modularize
		This is the most important part: Anyone is capable of creating modules (aka libraries). To quote Isaac Schlueter (of the node.js project): "Write small modules that each do one thing, and assemble them into other modules that do a bigger thing. You can't get into callback hell if you don't go there."
		Let's take out the boilerplate code from above and turn it into a module by splitting it up into a couple of files. I'll show a module pattern that works for either browser code or server code (or code that works in both):
		Here is a new file called formuploader.js that contains our two functions from before:
		
		
		
			module.exports.submit = formSubmit
			function formSubmit (submitEvent) {
			  var name = document.querySelector('input').value
			  request({
				uri: "http://example.com/upload",
				body: name,
				method: "POST"
			  }, postResponse)
			}
			function postResponse (err, response, body) {
			  var statusMessage = document.querySelector('.status')
			  if (err) return statusMessage.value = err
			  statusMessage.value = body
			}
		
		
		
		
		Here is how our application specific code looks now:
			var formUploader = require('formuploader')
			document.querySelector('form').onsubmit = formUploader.submit
		
		
		
	3. Handle every single error
		
		platform errors caused by things like 
			invalid file permissions, 
			hard drive failure, 
			no network connection etc. 
		
		
		Any experienced developer will tell you that you can never know when these errors happen, so you have to plan on them always happening.
		With callbacks the most popular way to handle errors is the Node.js style where the first argument to the callback is always reserved for an error.
		 var fs = require('fs')
		 fs.readFile('/Does/not/exist', handleFile)
		 function handleFile (error, file) {
		   if (error) return console.error('Uhoh, there was an error', error)
		   // otherwise, continue on and use `file` in your code
		 }
				
		
		
		Having the first argument be the error is a simple convention that encourages you to remember to handle your errors. If it was the second argument you could write code like function handleFile (file) { } and more easily ignore the error.
		
		
		Code linters can also be configured to help you remember to handle callback errors. The simplest one to use is called standard. All you have to do is run $ standard in your code folder and it will show you every callback in your code with an unhandled error.
		The most important aspect of avoiding callback hell is moving functions out of the way so that the programs flow can be more easily understood without newcomers having to wade through all the detail of the functions to get to the meat of what the program is trying to do.
		
		
		You can start by moving the functions to the bottom of the file, then graduate to moving them into another file that you load in using a relative require like require('./photo-helpers.js') and then finally move them into a standalone module like require('image-resize').
		
		
		
		


```




## JSONP

```js
	JSONP = JSON PADDING TO GET AROUND CROSS-DOMAIN RESTRICTIONS
	
	https://www.youtube.com/watch?v=GcHWqyzSCc8
	
	
	http://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms
	
	JSON Request:
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // success
  };
};
	xhr.open("GET", "somewhere.php", true);
xhr.send();
	
	From <http://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms> 
	
	
	
	JSONP Request:
	var tag = document.createElement("script");
tag.src = 'somewhere_else.php?callback=foo';
	document.getElementsByTagName("head")[0].appendChild(tag);
	
	From <http://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms> 
	
	
	
	The difference between a JSON response and a JSONP response, is that the JSONP response is formulated such that the response object is passed as an argument to a callback function.
	JSON:
	{
    "bar": "baz"
}
	JSONP:
	foo({
    "bar": "baz"
});
	
	From <http://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms> 
	
	
	
	The usefulness of using jQuery to make JSONP requests, is that jQuery does alllllllll of the work for you in the background.
	jQuery requires (by default), for you to include &callback=? in the URL of your AJAX request. jQuery will take the success function you specify, assign it a unique name and publish it in the global scope. It will then replace the ? in &callback=? with the name it's just assigned the function.
	
	From <http://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms> 
	
	
	
	
	Comparable JSON/ JSONP Implementations (assuming response object is {"bar":"baz"}:
	JSON
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    document.getElementById("output").innerHTML = eval('(' + this.responseText + ')').bar;
  };
};
	xhr.open("GET", "somewhere.php", true);
xhr.send();
	JSONP:
	function foo(response) {
  document.getElementById("output").innerHTML = response.bar;
};
	var tag = document.createElement("script");
tag.src = 'somewhere_else.php?callback=foo';
	document.getElementsByTagName("head")[0].appendChild(tag);
	
	From <http://stackoverflow.com/questions/3839966/can-anyone-explain-what-jsonp-is-in-layman-terms>

CORS = CROSS-ORIGIN REQUEST IE REQUESTING INFORMATION FROM A DIFFERENT DOMAIN
	
			https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Browser_compatibility
			
```



## Heap

MEMORY LEAKS

	To examine memory usage of our process with ps:
	ps -p $PID -o rss,vsz
	(you can find out the PID of your Node.js process with pgrep -lfa node)
	
	This shows us the resident set size (RSS) and the virtual set size (VSZ) of our process.
	RSS is a measurement of how much RAM the process is currently using. This would include all stack and heap memory, as well as memory from shared 
	libraries if pages from those libraries are actually in memory.
	VSZ is how much memory the process has available to it. This includes memory that is in swap and all shared libraries. VSZ includes RSS and is always 
	larger.
	And to watch memory usage in real time, we can use top:
	top -pid $PID  
	
	From <http://blog.yld.io/2015/08/10/debugging-memory-leaks-in-node-js-a-walkthrough/#.Vz5yQpErIdU> 
	
	
	HEAP ANALYSIS
	
		NODE HEAPDUMP
		
			NPM INSTALL HEAPDUMP
			
			REQUIRE HEAPDUMP IN OUR SERVER.JS OR INDEX.JS


## Process.nextTick()

https://medium.com/javascript-in-plain-english/what-is-vue-nexttick-89d6878c1162

```js
setImmediate(() => {
  console.log('immediate');
});

process.nextTick(() => {
  console.log('nextTick');
});

setTimeout(() => {
  console.log('timeout');
}, 0);

Promise.resolve().then(() => console.log('promise'));

/*
nextTick
promise
timeout
immediate
*/
```



## Processes

			
```js		
var ps = require('ps-node');
	ps.lookup({

command: 'node',
arguments: '--debug',
}, function(err, resultList ) {
if (err) {
    throw new Error( err );
}
	resultList.forEach(function( process ){
    if( process ){
	console.log( 'PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments );
        }
    });
});
	
	From <http://stackoverflow.com/questions/13206724/how-to-get-the-list-of-process> 
	
	
```


## Patterns

```js
	
Singletons
Observers
Factories
Middleware
Dependency Injection
Design Pattern is resuable solution to commonly occurring problem
Singleton
	One instance only
Observer
	Object maintains list of 'observers'
	Object notifies 'observers' on change
	EventEmitter is used
Factory
	Generic object
Dependency Injection = Pass By Reference
Middleware = pipeline = output from one is the input into another
	Express
	Koa
	Streaming
https://addyosmani.com/resources/essentialjsdesignpatterns/book/
	The Module Pattern
		The Module pattern was originally defined as a way to provide both private and public encapsulation for classes in conventional software engineering.
		In JavaScript, the Module pattern is used to further emulate the concept of classes in such a way that we're able to include both public/private methods and variables inside a single object, thus shielding particular parts from the global scope. What this results in is a reduction in the likelihood of our function names conflicting with other functions defined in additional scripts on the page.
	
	DESIGN PATTERN = REPEATABLE SOLUTION  (IN MODULAR FORM)
	
		IT'S NOT A FINISHED SOLUTION THOUGH, JUST A REPEATABLE TEMPLATE WHICH 
				WE CAN USE OVER AND OVER AGAIN AS PART OF SOLVING SIMILAR PROBLEMS 
				
				
	EBOOK 
		
		https://addyosmani.com/resources/essentialjsdesignpatterns/book/
				
				
	PRINCIPAL DESIGN PATTERN IS JAVASCRIPT MODULES 
	
		REVEALING MODULE PATTERN HAS PRIVATE AND PUBLIC FIELDS 
	http://alistapart.com/article/the-design-of-code-organizing-javascript
	
	
	The module pattern
		There are a lot of design patterns out there, and equally as many resources on them. Addy Osmani wrote an amazing (free!) book on design patterns in JavaScript, which I highly recommend to developers of all levels.
		The module pattern is a simple structural foundation that can help keep your code clean and organized. A “module” is just a standard object literal containing methods and properties, and that simplicity is the best thing about this pattern: even someone unfamiliar with traditional software design patterns would be able to look at the code and instantly understand how it works.
		In applications that use this pattern, each component gets its own distinct module. For example, to build autocomplete functionality, you'd create a module for the textfield and a module for the results list. These two modules would work together, but the textfield code wouldn't touch the results list code, and vice versa.
		That decoupling of components is why the module pattern is great for building solid system architecture. Relationships within the application are well-defined; anything related to the textfield is managed by the textfield module, not strewn throughout the codebase—resulting in clear code.
		Another benefit of module-based organization is that it is inherently maintainable. Modules can be improved and optimized independently without affecting any other part of the application.
		I used the module pattern for the basic structure of jPanelMenu, the jQuery plugin I built for off-canvas menu systems. I'll use that as an example to illustrate the process of building a module.
		Building a module
		
			To begin, I define three methods and a property that are used to manage the interactions of the menu system.
			var jpm = {
				animated: true,
				openMenu: function( ) {
					…
					this.setMenuStyle( );
				},
				closeMenu: function( ) {
					…
					this.setMenuStyle( );
				},
				setMenuStyle: function( ) { … }
			};
			The idea is to break down code into the smallest, most reusable bits possible. I could have written just one toggleMenu( ) method, but creating distinct openMenu( ) and closeMenu( ) methods provides more control and reusability within the module.
			Notice that calls to module methods and properties from within the module itself (such as the calls to setMenuStyle( )) are prefixed with the this keyword—that's how modules access their own members.
			That's the basic structure of a module. You can continue to add methods and properties as needed, but it doesn't get any more complex than that. After the structural foundations are in place, the reusability layer—options and an exposed API—can be built on top.
			
		
```