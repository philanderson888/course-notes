# AJAX

```jsx
# AJAX

	Examples
	
		
		JSON load Flikr http://codepen.io/codefoster/pen/jcrli
		AJAX http://codepen.io/codefoster/pen/CELlK
		Deferred http://codepen.io/codefoster/pen/GJaFK
	XMLHttpRequest object
	
		send HTTP requests without using browser
		
		
	USEFUL TO LOAD PAGE RESOURCES
	
	
		1) CLIENT REQUESTS PAGE
		
		2) PAGE SHELL LOADS
		
		3) HEAVIER RESOURCES GET ADDED USING XMLHttpRequest
		
	
	
	CAN
	
		HTTP GET AND POST 
		
		RETURN TEXT AND JSON AND XML
		
		CHECK STATUS OF OPERATIONS
		
		
		
	var request = new XMLHttpRequest()
	
	request.open('GET',URL);
	
				request.open('GET',URL,true)     ASYNCHRONOUS : DEFAULT
				request.open('GET',URL,false)    SYNCHRONOUS
				
				
				
				request.open('GET')			GET DATA
				request.open('POST')		POST DATA
				request.open('HEAD')		GET HEADER INFO
	
	
	
	request.send();						ASYNC BY DEFAULT
	
	
	
	ERROR?
	
		if (request.status!=200){
			alert('Error')
		}
	
	
	RESPONSE
	
		DATA TYPE 
		
			'CONTENT-TYPE' FIELD OF getResponseHeader
			
				var type = request.getResponseHeader('Content-Type');
				
				
						application/json
						text/xml
						text/html
						
						
			
	
	
		DATA CONTAINED IN 
		
			request.responseText	object
			
				
					JSON.parse(request.responseText)   ==> to JSON object
					
					
					
					
		SYNCHRONOUS
		
			var request = new XMLHttpRequest();
			request.open('GET',URL,false);
			request.send();
			console.log(request.responseText);
			
			
		ASYNCHRONOUS
		
			var request = new XMLHttpRequest();
			request.onreadystatechange(){
				if(request.readystate==4){
					var response=request.responseText;
					var response=JSON.parse(response);
				
				}
			};		
			request.open('GET',URL,true);
			request.send();
	
	
		READY STATE
		
			0	NOT OPENED
			1	OPENED
			2	SENT
			3	RESPONSE STARTED
			4	RESPONSE COMPLETE
			
			
			
		SENDING DATA
		
			var request=new XMLHttpRequest();
			request.open('POST',URL,true);
			request.setRequestHeader('Content-Type','text/plain');
												application/json
											    
												
									(myForm).serialize()
									
										==> application/x-www-form-urlencoded
										
										
			request.send('Hello');
			
			
			
	JQUERY CALLING AJAX
		
		$.GET(URL,BODY,function(data_received){
			console.log(data_received);
		});
		
		
		$.POST(URL,BODY,FUNCTION(data){});
		
		
		ERRORS
		
			$.GET(URL,function(data){
			
			}).error(function(){
				
			});
		
		
		GET JSON
		
			$.getJSON(...)
		
		
		LOAD DATA DIRECTLY TO ELEMENT ON PAGE
		
			$('#container').load(url,function(){});
			
			
			
		AJAX
		
			$.AJAX({
				url:
				async:true
				cache:
				type:
				dataType:'text'          text/json/html/xml
				data:{
					a:1,
					b:2
				}
				success:function(result){console.log(JSON.stringify(result));}
			
			}).done(function(responseText){
			
			}).fail(function(){
			
			});
			
		
		data:{
			firstname:myForm.firstname.value,
			lastname:myForm.lastname.value		
		}
		
		data:{
			('myForm').serialize();             firstname=bob&lastname=sykes
		}
		
		data:{
			('myForm').serializeArray();		
			
		}
		
				[
					{firstname:'bob',lastname:'sykes'}
				]
		
		
		
		
		
		
AJAX
	$ means call the global Ajax library
	Typical AJAX call
	
	$.ajax({
		url:"",
		type:"POST",
		async:true,
		cache:false,
		data:{"field1":"value1"},
		dataType:"json" or "html"
		success:function(result){console.log(JSON.stringify(result));}
	});
	
	
	
	$.getJSON can be used instead of $.ajax but expects JSON back and data may be cached.
	
	
	
	
	
	
	ajaxSend()
	ajaxStart/Stop()
	ajaxComplete()
	ajaxSuccess()
	ajaxError()
	$.ajax()
	$.get()
	$.post()
	$.getJSON()
	$.getScript()
	$.load()
	
	
	Typical example
	
	
	var request=new XmlHttpRequest();
	
	
	request.open("GET",URL,false);
	
	request.send()
	
	if(request.status==200){
		console.log(request.statusText);
		
		
		==> DATA IS INSIDE request.responseText object (or request.responseXML)
		
		try{
			JSON.parse(request.responseText);
			
		}
		
		catch(e){}
		
		
	}
	
	
	
	
	Typical example : asynchronous
	
	var request = new XmlHttpRequest();
	
	request.open("GET",URL,true);
	
	request.onreadystatechange = function(){
	
		if(request.readyState===4){
			var response = JSON.parse(request.responseText);
			...
		}
	};
	
	
	
	readyState
				0		NOT OPENED
				1		OPENED
				2		SENT
				3		PARTIAL RECEIVED
				4		FINISHED RECEIVE
	
	request.send();
	
	
	
	
	request.send({"a":"1","b":"2"});
	Dictate send data type
	
	request.setRequestHeader("Content-Type","application/json");
	
	
			                                "x-www-form-urlencoded"
											
				
	SENDING POST FORM DATA
	
		var myData = JSON.stringify(<<JSON_OBJECT>>)
		
		
		request.send(myData)
		
		
		
				
											
	Catching Errors
	
		if(request.status != 200){}
		
		
		
	Determining Data Type 
	
		RESPONSE IS THE OBJECT THAT COMES BACK
		
		responseText is the DATA that comes back
		
		DATA TYPE is in the Content-Type header field of the RESPONSE HEADER
		
			var dataType = request.getResponseHeader("Content-Type")
			
			
				case "text/xml"
				case "text/html"
				case "application/json"
				
					JSON.parse(request.responseText)
				
											
											
	Using JQUERY to send AJAX requests
	
	$.get(URL,data_sent,callback);
	
	
	callback = function(data_received){
		
	}
	
	
		$.get(URL,function(data){
			response=data;
		})
	
	
	
	$.post(URL,data_sent,callback);
	
	
	
	
	REQUEST JSON DATA WITH GETJSON
	
		$.getJSON(URL,sent,callback(JSON_data_received))
	
	
	
	LOAD JSON DATA DIRECTLY INTO AN ELEMENT ON THE PAGE
	
		$('DIV').load(url,data_sent,function(data_received){})
		
				USEFUL WHEN data_received is HTML or plain text
				
				data_sent is populated then POST else GET
				
				callback function is optional
				
				
	
	
	
	$.ajax({
		url:x,
		type:GET,
		async:true,
	
	}).done(function(responseText){
	
	
	
	}).fail(function(){
		
	
	});
	
	
	
	
	Note : CORS 
	
	
		allow control allow origin : chrome plugin
```