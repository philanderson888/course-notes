# Node Streaming


STREAMS AND BUFFERS
	Streams 
	
		Readable and writable streams an alternative way of interacting with (file|network|process) I/O.
	Buffers 
	
		Buffers provide a binary-friendly, higher-performance alternative to strings by exposing raw memory allocation outside the V8 heap.
	
	Streams are an alternative way of accessing data from various sources such as the network (TCP/UDP), files, child processes and user input. In doing I/O, Node offers us multiple options for accessing the data:
	
					Synchronous		Asynchronous
	
	Fully 
	buffered		readFileSync()	readFile()
	
	
	Partially 
	buffered 
	(streaming)		readSync()		read()
									createReadStream()
	
	
	
	
Buffers 
Why Buffers exist.
	BUFFERS ARE FIXED-SIZED DATA STRUCTURES USED TO HOLD BINARY DATA.
	
	THEY ARE USED TO PROVIDE MUCH HIGHER PERFORMANCE THAN STRING DATA BY EXPOSING AREAS OF RAW MEMORY OUTSIDE OF THE V8 JAVASCRIPT ENGINE, IN ORDER TO READ AND WRITE BINARY RAW DATA EXTREMELY QUICKLY AT THE LIMITS OF THE SPEED OF THE COMPUTER.
	
	WHEN WE ARE 'STREAMING' DATA WE CAN ONLY STREAM IT IN 'CHUNKS' OF A GIVEN SIZE, ALSO IT CAN ONLY BE USED AND STORED IN DISCRETE SIZES.
	
	THE BUFFER IS THE UNIT OF STORAGE FOR BINARY STREAMS OF DATA
	
	STREAMS BY DEFAULT PRODUCE DATA OF DATA-TYPE 'BUFFER' UNLESS THE ENCODING IS SPECIFIED EG UTF-8
	
		STRINGS USED WITH TEXT DATA
		BUFFER USED WITH BINARY DATA
	
	https://docs.nodejitsu.com/articles/advanced/buffers/how-to-use-buffers/
	
	JAVASCRIPT IS DESIGNED NATIVELY TO WORK WITH STRINGS EG UTF-8 CHARACTER ENCODING
	
	NODE TO ADD STREAMING BINARY DATA HAS CREATED THE 'BUFFER'
	Buffering is useful if the data to be transmitted if of a limited or fixed or containable size (with a maximum ceiling which can be determined and fitted into RAM easily).
	
	If large amounts of data are to be transferred then STREAMING is required by CHUNKING up the READSTREAM before being PIPED or WRITTEN to the WRITESTREAM or other I/O output source.
	
	
Creating Buffers.
	BUFFERS ARE NOT RESIZABLE 
	
	Const buffer = Buffer.alloc(8)  
	
					new buffer length 8 bytes
		
	Const buffer = Buffer.alloc(8,1) 
					fill new buffer length 8 bytes with 0x01
	
	NOTE : Use of the 'new' keyword is now deprecated
	
		Var buffer = new Buffer(8);  
							
							empty buffer 8 bytes
		
		Var buffer = new Buffer([1,2,3,4,5,6])           
					
							filled buffer
		
		Var buffer = new Buffer("this is a string","utf-8");   
		
						also supports ascii, base64
		
	
		
READ FROM A BUFFER
	Buffer.toString();
		
	Buffer.toString('utf-8');
		
	Buffer.toString('utf-8',0,10)             
	
			START AND END BYTES
		
		
WRITE TO A BUFFER
	
	Buffer.write("Hello","utf-8");
		
		THIS WILL RETURN 5 MEANING WE WROTE TO 5 BYTES OF THE BUFFER
			
	
	Buffer.write("World",5,"utf-8")           
	
		5 is the offset in bytes
		
	CHECK FOR DATATYPE BUFFER
	
		Buffer.isBuffer(OBJECT)
			
	CHECK HOW MANY BYTES IT WILL TAKE TO ENCODE A STRING
	
		Buffer.byteLength(myString)
		
	HOW MANY BYTES LONG IS THE BUFFER
	
		Buffer.length
	
	
	BUFFER : SET CHUNK SIZE
	
		var CHUNK_SIZE = 10 * 1024 * 1024, // 10MB
		
		buffer = new Buffer(CHUNK_SIZE),
		
			From <http://stackoverflow.com/questions/25110983/node-reading-file-in-specified-chunk-size> 
		
		
		
		
Streams 
What are streams.
	
	https://nodejs.org/api/stream.html
	STREAMS ARE SINGLE-CHARACTER FLOWS OF DATA FROM ONE PLACE TO ANOTHER EITHER WITHIN A COMPUTER OR MORE LIKELY ACROSS A NETWORK
	
	STREAMS ARE UNIX PIPES
	
		A PIPE IS A MECHANISM BY WHICH WE PERMIT THE SYSTEM TO HANDLE MUCH OF THE DETAILS AND OVERHEAD OF WORRYING ABOUT HOW TO GET DATA CONSISTENTLY FROM A TO B ACROSS A NETWORK.
		
		ALSO THE OUTPUT FROM ONE PIPE CAN BE FED INTO THE INPUT OF THE NEXT PIPE WHICH IS VERY USEFUL
	
	STREAM IS AN EVENTEMITTER 
	
	STREAM CAN BE READABLE, WRITEABLE OR DUPLEX (BOTH READ AND WRITE)
	
	STREAMS BY DEFAULT PRODUCE DATA OF DATA-TYPE 'BUFFER' UNLESS THE ENCODING IS SPECIFIED EG UTF-8
	
	4 types of streams
		
		1) Readable
		2) Writable
		3) Duplex
		4) Transform
		
	Examples of readable streams include:
	
		- HTTP responses, on the client
		- HTTP requests, on the server
		- fs read streams
		- zlib streams
		- crypto streams
		- TCP sockets
		- child process 
				stdout 
				stderr
				stdin
		
		
	
READABLE STREAM API
	
	EVENTS
	
		DATA : EMITTED EACH TIME A CHUNK OF DATA IS RECEIVED
		END : WHEN NO MORE CHUNKS
		ERROR
	
	METHODS
		PAUSE()
		RESUME()
	RESUME METHOD : FLOWING AND NON-FLOWING MODE
		READABLE STREAMS HAVE TWO MODES
		
			FLOWING
			
			NON-FLOWING = PAUSED MODE
	
	
		FLOWING : DATA IS BEING STREAMED AS FAST AS POSSIBLE 
		
			ADD 'DATA' HANDLER
			CALL 'STREAM.RESUME()'
			CALL 'STREAM.PIPE()'
			
		
		PAUSED MODE
		
			YOU MUST EXPLICITLY CALL STREAM.READ() TO GET CHUNKS OF DATA OUT.
				
			CALL 'STREAM.PAUSE()'
			
			REMOVE 'DATA' HANDLER  THEN CALL 'STREAM.UNPIPE()'
	
	
	
	
		
	
	CHUNK
	
		IS WHAT COMES OUT OF A READSTREAM
		
		CHUNK.LENGTH IS AMOUNT OF BYTES BEING TRANSFERRED PER CHUNK
	
		CHUNK IS A BUFFER OR A STRING
	
	
	
	
	
	READABLE STREAM : READING FROM A FILE
	
	
	ON 'DATA'  FUNCTION(CHUNK)
		
			DATA STILL TO STREAM
			
			CHUNK HOLDS THE CURRENT PORTION OF DATA BEING STREAMED
	
	
	
	ON 'END
		FINALL CALLBACK
		
		
		
		
		SEE NODE_STREAM_01
	
WRITEABLE STREAM API
	METHODS
	
		WRITE() : RETURN TRUE IF ALL GOOD OR FALSE IF CAN'T WRITE RIGHT NOW UNTIL THE DRAIN EVENT OCCURS
		
		END()
	EVENTS
		PIPE	WRITE STREAM HAS DATA TO PIPE
		UNPIPE
		ERROR
		DRAIN
		FINISH
		
	
	
	PUSHING TEXT TO A STREAM IN ORDER TO PIPE IT
		stream2.push(myDate + \n);
		
		
	WRITING SYNCHRONOUSLY TO A STREAM WITH STRINGS
		DEFAULT IS UTF8
		
		SEE NODE_STRING_07.JS
	
	
	
			
		
	WRITEABLE STREAM 
		SET ENCODING ON A STRING ONLY
	
			writeableStream.write(data,'utf8');
			
			ENCODING CAN BE utf8, hex, null
			
			LIST OF ENCODINGS SUPPORTED IS 
			
					case 'hex':	
					case 'utf8':
					case 'utf-8':
					case 'ascii':
					case 'binary':
					case 'base64':
					case 'ucs2':
					case 'ucs-2':
					case 'utf16le':
					case 'utf-16le':
				
				https://github.com/nodejs/node/blob/master/lib/buffer.js
	WRITING : ENDING THE WRITE
	Writable.end(<chunk>/<buffer>, callback)
	
		writeStream.write('nearly there');
		writeStream.end('last line'	);
	
	
	
	
Flow Control.
	Piping will handle the flow control for you
	
Piping.
	MANAGES THE DATA FLOW FOR YOU
	PIPES WILL MANAGE THE FLOW OF DATA FOR YOU FROM A TO B, PLUS CAN BE FED FROM ONE PIPE TO ANOTHER JUST AS REAL WATER CAN BE.
	PIPES MANAGE THE DATA FLOW FOR YOU : YOU DO NOT NEED TO WORRY ABOUT HOW FAST OR SLOW THE DATA IS FLOWING - THE SYSTEM MANAGES THIS FOR YOU
	
	PIPE RETURNS THE DESTINATION STREAM SO YOU CAN CHAIN OR CONCATENATE PIPES
	
	PIPES CAN BE CHAINED TOGETHER AS WELL SO THE OUTPUT OF ONE PIPE IS PIPED TO ANOTHER PIPE
	
	
	
	readStream ==> pipe(do_something).pipe(writeSream)
	
	
	
	var fs = require ('fs');
	var readStream = fs.createReadStream('abcde.txt');
	var writeStream = fs.createWriteStream('abcdef.txt',{flags:'a'});
	
	readStream.pipe(writeStream);
	
	
	
	
	FS.CREATEREADSTREAM('ABC.ZIP').PIPE(UNZIP).PIPE(FS.CREATEWRITESTREAM('DEF.TXT'))
	
	
	
	
	
	var fs = require ('fs');
	var readStream = fs.createReadStream('abcde.txt');
	var writeStream = fs.createWriteStream('abcdef.txt',{flags:'a'});
	writeStream.on('pipe',function(source){
		console.log('pipe event');
		console.log(source === readStream);
	});
	
	readStream.pipe(writeStream);
	
	PIPING TO STDOUT AS WELL AS WRITESTREAM
	
		(WINDOWS THIS WOULD PRINT TO THE CONSOLE)
	var fs = require ('fs');
	var readStream = fs.createReadStream('abc.txt');
	var writeStream = fs.createWriteStream('abcd.txt',{flags:'a'});
	readStream.pipe(process.stdout);
	console.log(' ');
	readStream.pipe(writeStream);
	
	
	
	
Duplex Stream.
	Both read and write
	
	https://nodejs.org/api/stream.html#stream_class_stream_duplex_1
	
	A "duplex" stream is one that is both Readable and Writable, such as a TCP socket connection.
	Note that stream.Duplex is an abstract class designed to be extended with an underlying implementation of the stream._read(size) and stream._write(chunk, encoding, callback) methods as you would with a Readable or Writable stream class.
	
	
Transform Stream.
	TRANSFORMS THE STREAM IN SOME WAY
	https://nodejs.org/api/stream.html#stream_class_stream_transform_1
	1. INPUT ==> OUTPUT AS A HASH (FIXED LENGTH STRING)
	
				https://nodejs.org/api/crypto.html
	
	2. INPUT ==> OUTPUT COMPRESSED EG AS GZIP 
	
				https://nodejs.org/api/zlib.html








