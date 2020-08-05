# Node Http
  
HTTP and HTTPs
    
Making a simple server

    
When to use HTTP and HTTPs

    
Server ports and listening

    
HTTP Requests and Responses

    
Request and Response headers and body

    
Creating a response to incoming requests

    
Building a simple HTTP server with static files

	
	
CREATE A SIMPLE WEB SERVER
	Define pattern of usage for NODE
	1) DEFINE TYPE OF INTERACTION
	2) REQUIRE MODULE TO DEFINE THIS INTERACTION
	3) CREATE SERVER createServer()
	4) CREATE FUNCTION FOR HANDLING REQUESTS WHICH INCLUDES A REQUEST AND RESPONSE VARIABLE
	5) START SERVER 
	CREATE A SERVICE WHICH LISTENS ON A PORT
	
	
	
	
Create a web server
	var http = require('http');
	http.createServer(onRequest).listen(8888);
	console.log('Server is now running on port 8888');
	
		Note : http.createServer(requestListener)	
			requestListener is the code which shall execute
			whenever the user makes a request to your server 
	
	
	
	
	function onRequest(request,response){
		
	}
		request = from client
		response = to client 
	http.createServer(function(request,response){
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("Hello World!");
		response.end();
	}).listen(8080);
	
	200 => all OK
	
	Content-Type : text/plain  or text/html
	
	
	Example : see node_http_server_01.js		
	
	
	request.url
		
		holds the url string from the incoming request 
			
	url.parse : parses incoming url to obtain the file path of the 
			requested file or folder (this will be the relative path)
			
			(url.parse(request.url)).pathname
			
	process.cwd() returns the current working directory (absolute path)
	
	join the cwd() to url.parse to give the full, absolute, path to requested file
	
	http.createServer().listen()
	
		OR 
		
		var server = http.createServer..
		server.listen()
	
		Note : Client sends two requests, the second one for the 
		favicon icon image to accompany the page 
		
		
		
		
		
		
		
		
		
	RESPONSE WITH PLAIN TEXT
	
		\n adds a new line if content-type is text/plain 
	
	
	
	
	
	RESPONSE WITH A FILE
	
	
		fs.createReadStream(page).pipe(response);
			pipe means we are going to send the stream and	
			pipe it through the response object back to 
			the client 
		
	
		
		
		
		
		
	
	
	
	
SUMMARY : CREATE FIRST BASIC HTTP WEB SERVER 
	var http=require('http');
	var server = http.createServer(function (request, response) {
		response.write('hello client!');
		response.end();
	});
	server.listen(8080);
	console.log('listening 8080');
		TEST IN BROWSER HTTP://LOCALHOST:8080 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	
	
CALLBACKS AND ERROR HANDLING 
	CALLBACK FUNCTION HAS TWO OR MORE PARAMETERS : FIRST ONE IS ERROR 
	
		function(err,x,y,z){
			if(err){
			LOG ERROR;
			return;
			}
			
			//CODE USING x,y,z
		}
		
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
	
GETTING DATA WITH URL.PARSE 
	PARSE A URL TO GET THE QUERY STRINGS FROM IT IE 
		
	request.url  holds the full url string from the incoming request 
	
	In this case, URL = http://localhost:8080?id=7&name=phil
	
	
			
			var http=require('http');
			var url = require('url');
			var server = http.createServer(function(req,res){
				var url_parts = url.parse(req.url,true);
				var query=url_parts.query;
				console.log("Incoming URL is " + req.url);
				console.log("Query String Is " + url_parts);
				console.log("Query Is " + query);
				console.log("id = " + query.id);
				console.log("name = " + query.name);
				});
			server.listen(8080);
			console.log("listening 8080");
				node_62_url_parse.js 
		
		
		
		
		
		
		
	

	
	

First Express App

Var express = require('express');
Var app=express();
App.get('/',function(req,res){})    GET requests to a given path
App.listen(3000,function(){})    LISTEN on 3000

		
		
Serving Static Files In Node

This example shows, without any framework (eg Express), how it
is possible to serve up static content in Node
see node_93_readFile.js for the example code:

const http=require('http');
const fs = require('fs');
const hostname="127.0.0.1";
const port = 3000;
fs.readFile('node_93_readFile1.htm',(err,html)=>{
	if(err){throw err;}
	const server = http.createServer((req,res)=>{
		res.statusCode=200;
		res.setHeader('Content-type','text/html');  // alternate /plain /html
		res.write(html);
		res.end();
	});
	server.listen(port,hostname,()=>{
		console.log('listening on port ' + port);
	});
});

		
	
	
	
	
	