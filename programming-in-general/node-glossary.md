# Node Glossary

## Callbacks

	
	
MANAGING CALLBACKS 
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
		
		
		
		
