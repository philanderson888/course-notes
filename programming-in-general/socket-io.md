# Socket.IO

```jsx
SOCKET.IO - NETWORKING THEORY
	NETWORK CLIENT 
		MAC ADDRESS (FIXED)
		IP ADDRESS (ALLOCATED IN SOFTWARE)
			EACH IP HAS 65536 CHANNELS OF COMMUNICATION CALLED 'PORTS'
				DEFAULT CHANNEL OF COMMUNCATION PORT IS 80 FOR HTTP TRAFFIC 
				
				http://myserver.mydomain.com/myfolder/myfile.htm:80 
				
								(OMITTED AS DEFAULT)
				FTP   20/21
				SMTP  25
				RDP   3389
NODE SERVER : SOCKET.IO  : URL:PORT    HTTP://LOCALHOST:8080
		
			IPCONFIG ==> GET IP 
					HTTP://LOCALHOST:8080
			SERVER22
			PING SERVER22 ==> GIVE IP OF SERVER22
			
			
FROM CLIENT1 ==> 
										HTTP://IP_OF_SERVER:8080
										HTTP://SERVER22:8080
										
										
										
DHCP
		DHCP ON NETWORK ==> GIVE IP TO CLIENT AT STARTUP
			RESERVATION : FIXED MAP OF IP RESERVED FOR A PARTICULAR DEVICE MAC ADDRESS
DNS
		DNS ON NETWORK  ==> WHEN GET A NEW IP, THE IP AND NAME ARE BOTH REGISTERED WITHIN DNS AUTOMATICALLY SO DEVICE CAN BE FOUND ON THE NETWORK
		TWO TYPES OF DNS RECORD 
				A OR AAAA = REAL IPV4 OR IPV6 ADDRESS
				CNAME = WWW = FAKE NAME HIDING THE REAL NAME FROM THE PUBLIC INTERNET
MAC ADDRESS
		FIXED 'PHYSICAL ADDRESS' OF DEVICE NETWORK CARD
	
SOCKET 
	IP:PORT = SOCKET 
	
	
HTTP WEBSOCKETS
	Instant 2-way client-server comms.
	Native browser support
	http://hackintoshrao.com/2014/01/23/sending-data-to-the-node-js-server-using-websockets/
	
	
		Unlike HTTP, WebSocket provides for full-duplex communication. Additionally, Websocket enables streams of messages on top of TCP
		
		
		Summing everything up , the advantage of websockets are listed below ,
		The WebSocket protocol makes possible more interaction between a browser and a web site, facilitating live content without page refresh
		
		Websockets are amazingly fast compared any other alternative implementations , so it can be used for creating Real-Time web applications (Games , Live News feed)
		
		Websockets are Standardized being part of HTML5
		
		Support across all major browsers
		
		
Using TCP and WebSockets

	https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
	
	http://www.websocket.org/aboutwebsocket.html
	
	http://websocketd.com/
	
	http://www.codeproject.com/Articles/57060/Web-Socket-Server
	
	https://github.com/eidheim/Simple-WebSocket-Server
	
	
	Example 
	
		http://www.websocket.org/echo.html
		
		CONNECT VIA WS://url  PROTOCOL
		
		http://c4290920.myzen.co.uk/showcase/websockets1.htm
		
		
		
WEBSOCKETS EXAMPLES 
	https://www.npmjs.com/package/websocket
		
		var WebSocketServer = require('websocket').server;
		var WebSocketClient = require('websocket').client;
		var WebSocketFrame  = require('websocket').frame;
		var WebSocketRouter = require('websocket').router;
		var W3CWebSocket = require('websocket').w3cwebsocket;
	https://www.npmjs.com/package/nodejs-websocket		
		nodejs-websocket  NODE MODULE 
	
Native applications vs web applications
	NATIVE 
	
		NO COMMUNICATIONS OVER A NETWORK
	
		INSTANT SAVE DATA (NO LAG ACROSS A NETWORK)
	
	Web
	
		DATABASE AVAILABLE OVER NETWORK 
		
		NETWORK ISSUES APPLY !
		
		
		
		
		
		
		
		
		
		
		
		
		
SOCKET.IO : 2-WAY COMMUNICATION 
	npm install express
	
	npm install socket.io
	
	Socket.io 
	
		It has two parts: 
		
		a client-side library that runs in the browser, 
		
		and a server-side library for Node.JS. 
		
		Both components have a nearly identical API. 
		
		
		
	http://socket.io/
	
	http://socket.io/docs/
	
	http://socket.io/docs/server-api/
	
	https://www.npmjs.com/package/socket.io
		
		
		
		
		
		
	
	
		
SOCKET.IO COMMANDS 
	BROADCAST TO EVERYONE 
			
		socket.broadcast.emit('user connected');
		
	ACKNOWLEDGE
	
		Add a function as the last parameter of Send() or Emit() 
				
	ROOM 
	
		JOIN MORE THAN ONE SOCKET 
		
		
		
	
SOCKET.IO : PRACTICAL EXAMPLE : CHATROOM
	Making a simple chatroom app with HTML5 and WebSockets
	https://www.npmjs.com/package/socket.io
	
	See showcase working example 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
SOCKET.IO PERSISTENCE OPTIONS 
	
	require("socket.io-persistence")
	https://www.npmjs.com/package/socket.io-persistence
	
	PERSISTENCE 
	
		Use Express Middleware with io.use(function(){//CODE }) to do what 
		you want with any data sent or received 
		
		
	
	VOLATILE MESSAGES (CAN BE MISSED BY CLIENT WITHOUT MUCH NEGATIVE CONSEQUENCE)
	
		socket.volatile.emit('bieber tweet', tweet);
```