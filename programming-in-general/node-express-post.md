# Node Express Post
		
		
GETTING REQUEST DATA USING EXPRESS

	EXPRESS REQ REQUEST OBJECT 

	
		http://expressjs.com/en/4x/api.html#req
		The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on. In this documentation and by convention, the object is always referred to as req (and the HTTP response is res) but its actual name is determined by the parameters to the callback function in which you're working.
		
		app.get('/user/:id', function(req, res) {
		  res.send('user ' + req.params.id);
		});
		
		
				
		req.app ==> app that is current right now 
	
			http://expressjs.com/en/4x/api.html#req.app
	
		
	
			see working example in Express_04 project
	
	
	
	
		
		
		
		
		
EXPRESS request.query
  
	CONTAINS URL OBJECT OF INCOMING REQUEST 
	
		node_63_express_url_parse.js
		
		
		
		
		
		
		
		
REQUEST METHOD = GET OR POST

	GET = READ INFO			DATA IN URL
	
		URL.PARSE TO GET INFO
	
	POST = SEND INFO		DATA NOT IN URL BUT IN BODY OF PAGE
	
		QUERYSTRING.PARSE(BODY) TO GET INFO
	var util=require('util'),
	url=require('url'),
	http=require('http'),
	qs=require('querystring');
	var server = http.createServer(function(req,res){
		if(request.method=='POST'){
			var body = '';
			request.on('data', function(data){
				body+=data;
			});
			request.on('end',function(){
				var POST = qs.parse.(body)
				console.log(POST);
				response.writeHead(200);
				response.write(JSON.stringify(POST));
				response.end();
			});
		}
		else if (request.method=='GET'){
			var url_parts=url.parse(request.url,true);
			response.writeHead(200);
			response.write(JSON.stringify(url_parts.query));
			response.end();
		}
	});
	server.listen(8080);
	
		
		
		Live code at node_70_request_method.js 
		
		Test with (1) GET using browser http://localhost:8080/?x=true&y=false
		
		          (2) POST using POSTMAN 
		
		
		
		
REQUEST METHOD : GET OR POST
	SECOND EXAMPLE USING A REAL FORM POSTING DATA
	
		node_78_web_server_form.js
		
		
		
REQUEST METHOD : POST
	if(req.method=='POST'){
		console.log('HTTP POST request received');
		res.write('Processing HTTP POST data\n\n');
		req.on('data',function(data){
			console.log(data);
			console.log(data.toString);
			data = data.toString();
			data = data.split('&');
			for (var i = 0; i < data.length; i++) {
			   var _data = data[i].split("=");
			   POST[_data[0]] = _data[1];
			}
			console.log(POST);
		});
		req.on('end',function(){
			res.write(JSON.stringify(POST));
			res.write("\n\nUsername is " + POST.username);
			res.write("\n\nPostcode is " + POST.postcode);
			res.end();
		})
	}
		see node_71_form_post.js 
		
		
		
POSTING DATA : QUERYSTRING.PARSE(BODY) TO GET POST DATA
		
		node_91_http_get_post_server.js
		
		node_http_server_03_querystring.js
				
				
			
					
			var qs = require('querystring');
			function (request, response) {
			
				if (request.method == 'POST') {
					var body = '';
					request.on('data', function (data) {
						body += data;
					});
					request.on('end', function () {
						var post = qs.parse(body);
								console.log(post.age);
					});
				}
			}
	
	
		
		
		
		
POSTING DATA ENCODED AS JSON
	enctype="application/json"
		
		function (req, res) {
			if (req.method == 'POST') {
				var jsonString = '';
				req.on('data', function (data) {
					jsonString += data;
				});
				req.on('end', function () {
					console.log(JSON.parse(jsonString));
				});
			}
		}
		
			node_88_post_json.js 
				
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
NODE SENDING POST REQUEST TO ANOTHER NODE SERVER 
	http://stackoverflow.com/questions/9768192/sending-data-through-post-request-from-a-node-js-server-to-a-node-js-server
	
	https://www.npmjs.com/package/request
	
	GET CODE
				npm install request 
				
				var request=require('request');
				function httpResponse(error,response,body){
				  if(error){
					console.log('Error ' + error);
				  }
				  else{
					console.log("\n\nBody Returned Is \n\n" + body)
					console.log("\nResponse Status Code is " + response.statusCode);
				  }
				}
				request('http://www.google.com',httpResponse);
				
				
						node_90_http_request.js
						
					
						
	POST CODE
			
			
		    var requestString={
					url: 'http://localhost:8080',       //URL to hit
					qs: {id: 777, name: 'phil'},        //Query string data
					method: 'POST', //Specify the method
					headers: {                          //Optional
						'Content-Type': 'MyContentType',
						'Custom-Header': 'Custom Value'
					}
				}			
				
			
				function httpRequest(error, response, body){
					if(error) {
						console.log(error);
					} else {
						console.log(response.statusCode, body);
					}
				});
				
				
				request(requestString,httpResponse); 
				
	
Express layout engines - Jade, EJS, Hogan




