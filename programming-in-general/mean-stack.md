# Mean Stack

Intro

	http://meanjs.org/
	
	MEAN is an opinionated fullstack javascript framework - 
	which simplifies and accelerates web application development.
	
Installing MEAN

	npm install -g mean-cli 
	  
	mean init yourNewApp
  
  
MEAN stands for:
	
		MongoDB
		Express
		AngularJS
		Node.js
			
		
Installing MEAN

	http://meanjs.org/docs.html	
	
	npm install -g bower
	
	npm install -g grunt-cli
	
	DOWNLOAD MEAN AND PUT IN A FOLDER EG C:\MEAN 
	
	NAVIGATE TO MEAN FOLDER AND RUN 
	
	npm install
	
	ALSO 
	
	INSTALL GIT :  https://git-for-windows.github.io/
	
		THEN CAN RUN COMMANDS FROM BASH GIT OR WINDOWS CMD
		
		RUN npm install from GIT CMD console 
		
	RUN MONGOD FROM MONGO DIRECTORY TO MAKE SURE MONGO DB IS RUNNING! 
	
	RUN grunt --force TO RUN THE APPLICATION 
	
	VIEW APPLICATION ON http://localhost:3000  also DEBUG on 5858 
	
DEMO - MEAN 
	C:\DeleteMeMeanJSTrial
	
	
	
	
	
	
	
	
	
	
	
	
	
MEAN Tutorial 1 - Hello World - May 2017

https://closebrace.com/tutorials/2017-03-02/the-dead-simple-step-by-step-guide-for-front-end-developers-to-getting-up-and-running-with-nodejs-express-and-mongodb

    
Installation - Install NodeJS

    
Navigate to your installation directory eg cd c:\node

    
Install Express : npm install -g express-generator

    
express nodetest1

    
cd nodetest1

    
npm install

    
set debug=nodetest1:* & npm start

    
Navigate in a browser to http://localhost:3000 to view your page

    
Edit package.json and add in these two lines
    

    
"mongodb": "^2.2.25",

    
"monk": "^4.0.0",

		

	

    
Run npm install again

    
npm start

    
Edit app.js

    
Note line app.use('/', index); which points to the default (index) route

    
Edit \routes\index.js file

    
Above last line (module.exports = router;) insert data for a new /helloworld route
    

    
router.get('/helloworld',function(req,res){

    
res.render('helloworld',{title:'Hello World!' });

    
});

		

	

    
Also see MEAN_05 which adds in a TEST page and CSs

    
And MEAN_06 which further adds in working Javascript and JQuery

    
Also now edit \views\index.jade but first save it as helloworld.jade then edit it : 

    

    
p Hello World! Welcome to #{title}

	

    
Install Mongo from https://www.mongodb.com

    
Type mongod to start Mongo.  Note : to amend the database path from default c:\data to another path, type mongod --dbpath c:\node\nodetest1\data\

    
Type mongo to start the mongo client

    
In mongo client type the following

    

    
use nodetest1  (Creates a new database collection)

    
db.usercollection.insert({ "username" : "testuser1", "email" : "testuser1@testdomain.com" })

    
db.usercollection.find().pretty()

    
newstuff = [{ "username" : "testuser2", "email" : "testuser2@testdomain.com" }, { "username" : "testuser3", "email" : "testuser3@testdomain.com" }]

    
db.usercollection.insert(newstuff);

    
db.usercollection.find().pretty() should show 3 records now

	

    
In app.js below bodyparser declaration, declare these three new lines:

    

    
var mongo = require('mongodb');

    
var monk = require('monk');

    
var db = monk('localhost:27017/nodetest1');

	

    
Above the line app.use('/', routes); add the following code

    

    
app.use(function(req,res,next){

    
  req.db=db;

    
  next();

    
});

	

    
In \routes\index.js add a third route:
router.get('/userlist',function(req,res){
	var db = req.db;
	var collection = db.get('usercollection');
	collection.find({},{},function(e,docs){
		res.render('userlist',{
			"userlist":docs	
		});
	});
});

	

    
Add and edit a new file userlist.jade in views : 
extends layout
block content
	h1.
		User List
	ul
		each user, i in userlist
			li
				a(href="mailto:#{user.email}")=user.username

	

    
Now the code should run and display the users on the web page from the MONGO database

    
next step : adding a user!!!

    
index.js - add this code above the last module.exports line

    

router.get('/newuser',function(req,res){
	res.render('newuser',{title:'Add New User' });
});

	

    
Now add file newuser.jade

    

extends layout
block content
    h1= title
    form#formAddUser(name="adduser",method="post",action="/adduser")
        input#inputUserName(type="text", placeholder="username", name="username")
        input#inputUserEmail(type="text", placeholder="useremail", name="useremail")
        button#btnSubmit(type="submit") submit

    
The form now appears but does not work, so to make it work we now add some more code

    

/* POST to Add User Service */
router.post('/adduser', function(req, res) {
    // Set our internal DB variable
    var db = req.db;
    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;
    // Set our collection
    var collection = db.get('usercollection');
    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });
});

	

    
See the development of this in MEAN_01, MEAN_02, MEAN_03, and MEAN_04 folders

MEAN Tutorial 2 - Build API first then front end - YouTube - 1 Oct 2016 - Build API then MEAN on top - 76 minutes, Traversy Media
https://www.youtube.com/watch?v=PFP0oXNNveg&t=1544s

    
First part - build API to get, update and delete data from Mongo database

    
Build server.js

    
build route index.js

    
display a response

    
build a view index.htm and get a response.render with index.htm

    
build route tasks.js with get all tasks

    
Add in mongo DB online and add in some data

    
Add in /task/:id for one task

    
Add in put /task/:id to update one task

    
Add in delete one task by id also

    
Add in put which updates a record by id

    
API is now complete!!! (See todo_01 to todo_05)

    
Second Part

    
Visit Angular.io Getting Started at https://angular.io/guide/quickstart

    
..some files are missing so can use https://web.archive.org/web/20161011223739/https://angular.io/docs/ts/latest/quickstart.html? and https://github.com/ASchopenhaur/mytasklist/tree/master to help you get by at this point.

    
Follow the instructions in the ReadMe file to get this app up and running namely

    
run npm install from both the outer folder but also from the client folder, to get two sets of node_modules folders

    
In the client folder run npm run build:watch

    
In the root directory run nodemon (or nodemon server, or nodemon server.js) which will start the application

    
view at localhost:3000

    
npm install -g bower installs at appdata\roaming\npm\node_modules\ folder

    
root folder : create .bowerrc file

    
Bower can be used to install components eg 

    
bower install bootstrap --save which installs client\bower_components folder

    
follow tutorial... now index.html page appears with bootstrap CSS

    
add in client/styles.css file and the application should now generate error-free (39:20)

    
The tutorial now matches angular_04 application exactly at point 45:27

    
Follow through until 49:55 at which point it matches angular_05

    
At 56:18 the tutorial now matches angular_06 (remember to make sure the mongo connection string is your unique one at this point first or it will not work!)

    
At 58:48 the task title now shows in angular_07

    
Note : in the next section we submit a form which only has an input box and the form is submitted by pressing the 'enter' key

    
At 1:08:22 tutorial now is able to add an item into the database and display it - angular_08

    
At 1:12:16 the app is now able to also delete an item in angular_09

    

MEAN Tutorial 3
	
	
		WATCH THIS VIDEO AND LEARN EVERYTHING TO DO WITH BUILDING A MEAN STACK APP FROM THE PERSON VALERI KARPOV WHO COINED THE PHRASE 'MEAN STACK'
		https://www.youtube.com/watch?v=uKca_wiQWaM&list=PLY2dwEM7boLXu-9_004_qo2PQ3uwx0qAL
	
    
MEAN Tutorial 4
	
	https://thinkster.io/mean-stack-tutorial
MEAN Tutorial 5
	
MVA Microsoft Virtual Academy – FREE MEAN Stack Video course
https://mva.microsoft.com/en-us/training-courses/mean-stack-jump-start-8442?l=eovSb3Vz_4604984382
MEAN Tutorial 6 - YouTube
	
Theo Theunissen
https://www.youtube.com/watch?v=MO9zxC2RwZE&list=PLG1mkqKjiDY-gDQymDbn1h4WbJ56N48ln
MEAN stack Tutorial 7
http://webapplog.com/todo-app-with-express-jsnode-js-and-mongodb/
MEAN Stack Tutorial 8
		
https://github.com/azat-co/todo-express	
MEAN Stack Tutorial 9
https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application
    
MEAN Stack REST API

    
MEAN Stack REST API Tutorial 1 - Walkthrough - May 2017

Beginner walkthrough creating REST API with NODE and MONGO database

https://closebrace.com/tutorials/2017-03-02/creating-a-simple-restful-web-app-with-nodejs-express-and-mongodb by Christopher Buecheler aka 'CloseBrace'

    
Update Express with npm update -g express

    
Update Express Generator with npm update -g express-generator

    
Create a brand new folder and base Express structure with express API_01

    
Change directory with cd API_01

    
Install express dependencies with npm install

    
Turn on debugging for your app (gives extra verbose info when running) with set DEBUG=api-01:*

    
Start the app with npm start

    
Browse to http://localhost:3000 to view the sample express web page

    
((Curl http://localhost:3000 can also get this information in the command line))

    
Use Chrome Postman extension to view this data as well in detail

    
Into package.json add the following dependencies :  "mongodb": "^3.2.0", "monk": "^4.0.0",

    
Run npm install again

    
npm start to restart the application

    
Layout.jade - provides the overall HTML header and body tags, and script dependencies for the global dependencies.  Under views/layout.jade add the following at the bottom (adds script dependencies for jQuery CDN, and for global.js local javascript file).    Add exactly below 'block content'   
    

    
script(src='http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js')

    
script(src='/javascripts/global.js')

		

	

    
Add the content of this file to style.css http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/style.css

    
For Mongo, create C:\Data to hold the database.

    
Start Mongo with mongod

    
Also start a new Mongo client window using mongo

    
Create a new database - use ApiDb01

    
Populate with some sample data eg db.userlist.insert({'username' : 'test1','email' : 'test1@test.com','fullname' : 'Bob Smith','age' : 27,'location' : 'San Francisco','gender' : 'Male'})

    
Add into app.js the following lines at the top for dependency declarations
    

    
var mongo = require('mongodb');

    
var monk = require('monk');

    
var db = monk('localhost:27017/ApiDb01');

		

	

    
Above app.use('/',routes); add the following 
	// Make our db accessible to our router 
	app.use(function(req,res,next){
  	req.db = db;
  	next();
	});

	

    
Next add in /users route - not for browsing since this is a single page app, but instead we are going to be using this for the Javascript to perform CRUD operations

    
So code in routes\users.js looks like
var express = require('express');
var router = express.Router();
/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});
module.exports = router;

	

    
When this code is run with npm start, the view at http://localhost:3000/users/userlist now displays JSON obtained from MongoDB.  This code is saved as API_01

    
Adding users - firstly change the HTML view to add the input fields.  Add this to index.jade
	        // ADD USER
        h2 Add User
        #addUser
            fieldset
                input#inputUserName(type='text', placeholder='Username')
                input#inputUserEmail(type='text', placeholder='Email')
                br
                input#inputUserFullname(type='text', placeholder='Full Name')
                input#inputUserAge(type='text', placeholder='Age')
                br
                input#inputUserLocation(type='text', placeholder='Location')
                input#inputUserGender(type='text', placeholder='gender')
                br
                button#btnAddUser Add User
        // /ADD USER

	

    
Adding user - now add the POST logic in routes\users.js to add a /postuser route with collection.insert logic to insert a new Mongo record 

    
Adding user - in global.js add a click event handler to run the adduser function when the add button is clicked
    // Add User button click
    $('#btnAddUser').on('click', addUser);

	

    
Now finally add the adduser function into global.js

    
Deleting users - first add a route in routes\users.js
router.delete('/deleteuser/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    var userToDelete = req.params.id;
    collection.remove({ '_id' : userToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

	

    
Now add this to the DOM section of global.js
    
 // Delete User link click
    $('#userList table tbody').on('click', 'td a.linkdeleteuser', deleteUser);
  

	

    
Now add deleteUser function code to global.js

    
Updating a user - completed in API_04

http://adrianmejia.com/blog/2014/10/01/creating-a-restful-api-tutorial-with-nodejs-and-mongodb
Socket IO Application (with Node and Mongo)

	
APPENDIX : SOCKET I/O : STEP BY STEP BUILDING A CHAT APPLICATION WITH MONGODB 
Building a chat application
	1. Install NODE
	2. Add to PATH (should be done automatically by the install now)
	3. Install MongoDB
	4. Add to PATH ??? did not work! 
	5. Node : Install ServerIO package using npm
	
			npm install socket.io             (-g)
	
	6. Node : Install MongoDB module using npm 
	
			npm install mongodb               (-g)
			
			(npm install -g node-gyp)
			
			npm install kerberos --save
			
	7. START MONGO DB  
	
			Go to \bin\ folder and run mongodb
			
				Success: awaiting connections
				
	8. START MONGO CLIENT 
	
			Go to \bin\ folder and run mongo 
			
				Client : test
				Server : one connection 
				
				
	9. CREATE CHAT DATABASE
		
			Client : use chat 
			
	10. db.messages.find()       FIND ALL MESSAGES IN chat DATABASE 
	
	
	11. Add first record 
	
	
		db.messages.insert({"name":"Alex","message":"Hello there"})
	
		db.messages.find().pretty()
		
	12. Remove all messages
	
		db.messages.remove({})
			or
			
		db.messages.drop()
		
	13 server.js : begin to create this file
	
		var mongo = require('mongodb').MongoClient;
		var client=require('socket.io).listen(8080).sockets;
		
		RUN THIS FILE IN NODE AS A SERVER 
		
	14.
	
		index.htm : add socket.io 
		
		 <script src="http://127.0.0.1:8080/socket.io/socket.io.js">
		 
		 
	15. Run the page (index.htm) and F12 Console : test out
	
		F12 : var socket = io.connect('http://127.0.0.1:8080');
		
				<<undefined>>
				
		F12 : socket    returns data on socket 
		
		
		
	16  Now can connect from chat client to chat server 
	
		server.js    
		
				client.on('connection',function(socket){
					console.log('Someone has connected');
				});
			
			
		Stop and restart node server, refresh index.htm page 
		
				index.htm page => F12 => 
				
				var socket = io.connect('http://127.0.0.1:8080');
				
				
				NODE SERVER SHOULD NOW CONSOLE.LOG (SOMEONE HAS CONNECTED)
				
				
				
	17  Now wrap the connection inside mongodb connection code 
	
	
	
mongo.connect('mongodb://127.0.0.1/chat',function(err,db){
			if(err) throw err;
			client.on('connection',function(socket){
				console.log('Someone has connected');
			});
		});
	
	18 Now send a message from the chat client to the node server 
	
		server.js 
		
		
		mongo.connect('mongodb://127.0.0.1/chat',function(err,db){
			if(err) throw err;
			client.on('connection',function(socket){
				console.log('Someone has connected');
				// Wait for input
				socket.on('input', function(data){
					console.log(data);
				});
			});
		});
		Stop and start node server.
		
		index.htm page => refresh and F12 run 
		
			var socket = io.connect('http://127.0.0.1:8080');
			
			socket.emit('input', { "name" : "Alex", "message" : "Hello"} );
			
		and Node server should log the data 
			{ "name" : "Alex", "message" : "Hello" }
	
	
	19 Now add chat data to mongo database as an insert command 
	
	
		server.js 
		
		
		
		mongo.connect('mongodb://127.0.0.1/chat',function(err,db){
			if(err) throw err;
			client.on('connection',function(socket){
				
				// mongo db collection is called 'messages'
				var col = db.collection('messages');
				console.log('Someone has connected');
				// Wait for input
				socket.on('input', function(data){
					console.log(data);
					var name = data.name;
					var message = data.message;
					col.insert({name:name,message:message},function(){
						console.log('data inserted');
					});
				});
			});
		});
	
	
	20 Optional : check for whitespace
	
	
			var whitespacePattern = /^\s*$/;
		
    		if (whitespacePattern.test(name)){
    			console.log('Invalid Name');
    		}
    		else if (whitespacePattern.test(message)){
    			console.log('Blank message');
    		}
    		else{
    			col.insert({name:name,message:message},function(){
 		   			console.log('data inserted');
    			});
    		}
	
	
	21 Now ready to configure client web chat application page 
	
			return document node 
	
		  <script>
			(function(){
				var getNode = function(s){
				  // returns first node matching criteria in s
				  return document.querySelector(s);
				};
			})();
			</script>
  
  
	
	
	22 Check that we can create a valid socket programatically
	
	
	
	  <script>
		(function(){
			var getNode = function(s){
			  // returns first node matching criteria in s
			  return document.querySelector(s);
			};
			var textarea = getNode('.chat-textarea');
			var chatName = getNode('.chat-name');
			try{
			  var socket = io.connect('http://127.0.0.1:8080');
			}
			catch(e){
			}
			if(socket !== undefined){
			  console.log('Socket is valid');
			  
			}
		})();
	</script>
	
	
	
Note : 
	
	socket.emit : emit a message across the single socket (one client to server or server to one client)
	client.emit : emit a message to all clients
	
	
	
	<<END OF CHAT APPLICATION WITH MONGO DB>>
	