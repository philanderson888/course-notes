# Node Streaming Events


STREAMS AND EVENTS

	
	WE WILL BE LOOKING AT EVENTS IN MORE DETAIL LATER ON IN THE COURSE BUT BE AWARE FOR NOW THE BASIC EVENTS WILL BE
	
	request.on ('data', function(data){});
	request.on ('end',function(){});
	
	THESE OCCUR WHEN STREAMING DATA FROM A TO B
	
	
	REQUEST DATA IS USED AS A 'STREAM'
		
		HTTP Request Body
			When receiving a POST or PUT request, the request body might be important to your application. 
			
			Getting at the body data is a little more involved than accessing request headers. 
			
			The request object that's passed in to a handler implements the ReadableStream interface. 
			
			This stream can be listened to or piped elsewhere just like any other stream. 
			
			We can grab the data right out of the stream by listening to the stream's 'data' and 'end' events.
			The chunk emitted in each 'data' event is a Buffer. If you know it's going to be string data, the best thing to do is collect the data in an array, then at the 'end', concatenate and stringify it.
		  
		  
	RESPONSE DATA CAN BE SENT AS A STREAM
		
			During the 'response' event, one can add listeners to the response object; particularly to listen for the 'data' event.
			If no 'response' handler is added, then the response will be entirely discarded. However, if you add a 'response' event handler, then you must consume the data from the response object, either by calling response.read() whenever there is a 'readable' event, or by adding a 'data' handler, or by calling the .resume() method. Until the data is consumed, the 'end' event will not fire. Also, until the data is read it will consume memory that can eventually lead to a 'process out of memory' error.
		  
		  
STREAM

		  
	Readable Stream
			A readable stream lets you read data from a source. The source can be anything. It can be a simple file on your file system, a buffer in memory or even another stream. As streams are EventEmitters, they emit several events at various points. We will use these events to work with the streams.
	Reading From Streams
		The best way to read data from a stream is to listen to data event and attach a callback. When a chunk of data is available, the readable stream emits a data event and your callback executes. 
			
		The function call fs.createReadStream() gives you a readable stream. Initially, the stream is in a static state. As soon as you listen to data event and attach a callback it starts flowing. After that, chunks of data are read and passed to your callback. The stream implementor decides how often data event is emitted. For example, an HTTP request may emit a data event once a few KB of data are read. When you are reading data from a file you may decide you emit data event once a line is read.
		When there is no more data to read (end is reached), the stream emits an end event. In the above snippet, we listen to this event to get notified when the end is reached.
			DATA EVENT 1 
			DATA EVENT 2
			DATA EVENT 3
			END EVENT 	
		
		
			lab 18,19,22  ?88/89/90/91/92
			lab node_stream and node_pipe or can do later
		
		
		
	
	PIPING EXAMPLE
	
		request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))
				
	You can also stream a file to a PUT or POST request. This method will also check the file extension against a mapping of file extensions to content-types (in this case application/json) and use the proper content-type in the PUT request (if the headers don't already provide one).
		fs.createReadStream('file.json').pipe(request.put('http://mysite.com/obj.json'))				
	
	REQUEST 'RESPONSE' EVENT WHEN DATA RECEIVED
	
	
			Request emits a "response" event when a response is received. The response argument will be an instance of http.IncomingMessage.
			request
			  .get('http://google.com/img.png')
			  .on('response', function(response) {
				console.log(response.statusCode) // 200 
				console.log(response.headers['content-type']) // 'image/png' 
			  })
			  .pipe(request.put('http://mysite.com/img.png'))
			
			
			
			