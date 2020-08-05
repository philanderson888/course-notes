# Node Events

		
		
		
EVENTS
	GOING INTO SHOP
	
	1) YOU OPEN THE DOOR : THIS IS THE EVENT
	
	2) BELL RINGING = EVENT HANDLER or in this instance this would be the BELL_RUNG emitted EVENT as part of the DOOR_OPEN EVENT which may have other events emitted with it as well, as in DOOR_SHUT, all attached to the DOOR object.
	3) SHOPKEEPER COMES OUT TO GREET YOU : THIS WOULD BE THE CODE THAT IS RUNNING (METHOD) INSIDE THE EVENT HANDLER
	
	var events = require('events');
	
	var eventEmitter = new events.eventEmitter();
	
	Node_event_01.js and node_event_02.js and node_event_03.js
		
						
						
						
Event Emitter 
When to use Event Emitters.
	USEFUL WHEN DEALING WITH I/O EVENTS ACROSS A NETWORK
	
	WE CAN 'EMIT' AN EVENT AT WILL BUT ALSO STREAMS AND BUFFERS AND FILESYSTEM OBJECT FOR EXAMPLE EMIT THEIR OWN DEFAULT OBJECTS LIKE ON('DATA') OR ON('FINISH')
	
	USE THE 'EMIT' EVENT WHEN YOU NEED TO COMMUNICATE ACROSS AN I/O CONNECTION EG A TCP/IP SOCKET FOR A CHAT-STYLE APPLICATION.  OTHER EXAMPLES WOULD BE TWITTER-STYLE NOTIFICATION, OR FACEBOOK-STYLE NOTIFYING OF POSTS ETC
	
	BASICALLY ANY FUNCTION CAN EMIT EVENTS AND IT CAN BE VERY USEFUL IN THESE SITUATIONS
	
		CLIENT < == > SERVER     2-WAY 
		
		SERVER  ===>    MANY CLIENTS  : SERVER CAN EMIT EVENTS AND NOTIFY CLIENT
		
		
	Further reading
	
		https://nodejs.org/api/events.html
		
		
	EMITTER OBJECT
	
		EVENT EMITTED
		
			LISTENER 'FUNCTION' OBJECT IS CALLED
			
	fs.ReadStream emits an event when the file is opened; 
	
	a stream emits an event whenever data is available to be read.
	
	All objects that emit events are instances of the EventEmitter class. 
	
	
	These objects expose an eventEmitter.on() function that allows one or more Functions to be attached to named events emitted by the object. 	
	
	
	
		const EventEmitter = require('events');
		function MyEmitter() {
		  EventEmitter.call(this);
		}
	
		const myEmitter = new MyEmitter();
		
		myEmitter.on('event', () => {
		  console.log('an event occurred!');
		});
		
		myEmitter.emit('event');
		
	Parameters passed to events as arguments
	
		const myEmitter = new Emitter();
		myEmitter.on('event',function(a,b){
			console.log(a,b);
		});
		myEmitter.emit('event','first','second');
		
	Or
	
		const myEmitter = new MyEmitter();
		myEmitter.on('event', (a, b) => {
		  console.log(a, b);
		});
		myEmitter.emit('event', 'first', 'second');
		
		
		
	Multiple Event Listeners
	
		
		const EventEmitter = require('events');
		const myEE = new EventEmitter();
		
		myEE.on('foo', () => {});
		myEE.on('bar', () => {});
		const sym = Symbol('symbol');
		myEE.on(sym, () => {});
		console.log(myEE.eventNames());
		  // Prints [ 'foo', 'bar', Symbol(symbol) ]
		  
		  
	Note multiple event listeners are executed SYNCHRONOUSLY in order.  If asynchronous is desired then within each synchronous function, an asynchronous call would have to be made....
	
	
	
	
	
	LIST EVENT LISTENERS FOR ANY PARTICULAR EVENT
	
		myEmitter.listeners('thisEvent')  => ARRAY
	
	
	
	
	
	
	Event Emitter Example
	
		var EventEmitter = require('events').EventEmitter;
		var radium = new EventEmitter();
		radium.on('radiation', function(ray) {
			console.log(ray);
		});
		setInterval(function() {
			radium.emit('radiation', 'GAMMA');
		}, 1000);
	
	
	
		
	
	
	ONCE EVENT METHOD
	
	
		CAN CALL IT LIKE THE 'ON' METHOD BUT IT WILL ONLY FIRE ONCE AND NEVER AGAIN
		
		ee.once("firstConnection", function () { console.log("You'll never see this again"); });
		
		ee.emit("firstConnection");
		
		ee.emit("firstConnection");
	
	
			==> WILL ONLY FIRE ONCE
			
			
			
			
	REMOVE EVENT LISTENERS 
	
		FOR ONE EVENT
	
			myEmitter.removeAllListeners("thisEvent");
	
		FOR ALL EVENTS
		
			myEmitter.removeAllListeners();
			
			
		
	Set maximum listeners (default is 10)
		
			myEvent.setMaxListeners(20);
		
		
		
	Creating an Event Emitter MODULE
		We can now create a module which EXPORTS the ON Event Functions which can be called.
		
		
		Firstly we have to extend the base EventEmitter class using 'util' module
		var util = require('util');
		util.inherits(DerivedClass,BaseClass);
		
		EG
		
		var util = require('util');
		util.inherits(Radio, EventEmitter);
		and build a 'Radio' module with open and close events
		
		Full code at
		
			http://www.hacksparrow.com/node-js-eventemitter-tutorial.html
	
	
	
	
	
	