Mongo
Mongo Documentation
Mongo Video Learning
Mongo Database MongoDB
Install mongo
Running Mongo Database
Simple Mongo Commands
Mongoose
Install Mongoose
Mongoose - Connect To Database
Mongoose Tutorial : Adding A Record (command line only)
Mongo Glossary
Mongo Authentication
Mongo Access Control
Mongo Authentication Tutorial
Mongo-Watch : Listener For Data Update



		
Mongo

		
Mongo Documentation

		
https://docs.mongodb.org/manual/
		
Mongo Video Learning

Mongo and Node 
	
    https://www.youtube.com/watch?v=Do_Hsb_Hs3c (22 minutes)
Also see REST API for other tutorials developing this theme, using MONGO with a NODE API
Mongo Database MongoDB

Install Mongo

https://docs.mongodb.com/manual/installation
npm install mongodb
Create database folder at c:\data\db 
var MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/testdb',function(err,db){
 	if(err) throw err;
	db.collection('table1').find().toArray(function(err,result){
      if(err) throw err;
      console.log(result);
  });
});
Running Mongo Database

C:\PROGRAM FILES\MONGO\SERVER\3.2\BIN\MONGOD.EXE 
	
	RUN MONGOD FILE TO START MONGO DATABASE SERVICE RUNNING 
		
	ADD TO PATH FOR ABILITY TO RUN FROM ANYWHERE 
		
		
		
		
	
	
		
RUNNING MONGO CLIENT 
	
	C:\PROGRAM FILES\MONGO\SERVER\3.2\BIN\MONGO.EXE 
	
		RUN FROM THE COMMAND LINE 
		
		ADD TO PATH FOR ABILITY TO RUN FROM ANYWHERE 
		
	
	
	
	
	
	
	
	
	
	
	
	
RUNNING MONGO ONLINE 
	USE EG MONGOLAB FOR ONLINE EXPERIENCE (FREE 30MB DATABASE)
	
		https://mongolab.com/
	
	
	
		
		
Install Mongo on JetBrains
	File => Settings => Plugins => Mongo and restart WebStorm 
	
		Mongo Explorer on right 
		
		Settings
		
		Path to mongo executable 
		
		C:\Program Files\MongoDB\Server\3.2\bin\mongo.exe
		
		Click + to add label Localhost 
		
		Then click on Mongo Shell 
		
			In the shell (bottom left) type db  <RUN> and local will appear (or Control Enter)
			
			
			
			
			
			
			
			
			
			
			
			
			
NOSQL DATABASE 
	NO FIXED STRUCTURE WITH ROWS AND COLUMNS LIKE MY/SQL DATABASE 
	
	DATASTORED IN OPEN JSON FORMAT { "FIELD":"VALUE","FIELD2","VALUE2"}
	MAIN ID IS UNIQUE OBJECT ID WHICH EVERY ENTRY HAS ALLOCATED 
	
	
	
	
								
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
BACK UP MONGO DATABASE 
	RUN MONGODUMP.EXE 
	
		Creates in dump folder inside main mongo directory 
		WINDOWS - RUN AS ADMIN
			C:\Program Files\MongoDB\Server\3.2\bin\dump  folder created with databases
			
			
			
			
			
			
	
RESTORE MONGO DATABASE 
	RUN MONGORESTORE.EXE 
	
		DEFAULT: RESTORES FROM DUMP DIRECTORY 
			
	mongorestore --collection people --db accounts dump/accounts/people.bson
			
			
			
			
			
			
			
			
			
			
			
NODE INSTALL MONGO 
	https://github.com/mongodb/node-mongodb-native
	
	npm install mongo
		
	npm install mongoose 
	
	
	
Simple Mongo Commands

			
			
			
LIST DATABASES 
	show dbs  			SHOW DATABASES
	
			
			
			
CREATE DATABASE 
	use <db>			USE THIS DATABASE OR CREATE IT IF NOT PRESENT 
		use testdb
	
	
	
	
MONGO COLLECTIONS (EQUIVALENT OF TABLES)
	show collections    SHOW COLLECTIONS (EQUIVALENT OF TABLES)
	
	
	
	
	
	
	
	
DROP DATABASE 
	
	db.dropDatabase()
	
	
	use testdb1
	db.table1.insert({"id":"1"});
	show dbs
	use testdb1
	db.dropDatabase()
	show dbs               ==> gone!
	
		
	
	
	
GENERATE JSON DATA 
	
	http://www.json-generator.com/
		
		
		
		
		
				
		
		
		
		
		
		
CREATE COLLECTION OR INSERT NEW DATA INTO COLLECTION 
	db.myCollection.insert({JSON})            ONE ITEM 
	
	db.myCollection.insert([{},{},{}])        MULTIPLE ITEMS 
	
	
	
		use testdb
	
		// ONE RECORD
		db.table1.insert({"id":"1"});
	
		// TWO RECORDS
		db.table1.insert({"id":"1"},{"id":"2"} );
		
		// MULTIPLE FIELDS
		db.table1.insert({"id":"1" , "name":"phil", "occupation":"it guy"});
		
		SEARCH
		db.table1.find();
	
		SEARCH PRETTY
		db.table1.find().pretty()
		
		FIND BY SEARCHING ON A FIELD 
		db.table1.find({"name":"phil"});
	
		UPDATE
		db.table1.update({"name":"phil"},{"id":"1" , "name":"phil", "occupation":"roman soldier"});
		
		UPDATE BY ID
		db.table1.update({"_id":ObjectId("1234")},{"id":"1" , "name":"phil", "occupation":"roman soldier2"});
	
		INSERT 5 RECORDS 
		db.table1.insert([
		{"id":"5" , "name":"phil", "occupation":"it guy"},
		{"id":"6" , "name":"phil", "occupation":"it guy"},
		{"id":"7" , "name":"phil", "occupation":"it guy"},
		{"id":"8" , "name":"phil", "occupation":"it guy"},
		{"id":"9" , "name":"phil", "occupation":"it guy"},	
		]);
	
		CREATE INDEX
		db.table1.createIndex({"name":1});  1=ASCENDING 		
															-1=DESCENDING 
										   
		VIEW INDEXES 
		db.table1.getIndexes();
	
		//FIND ON A NON-INDEX FIELD 
		db.table1.find({"name":"phil"}).explain("executionStats");
	
	
		//FIND ON A INDEX FIELD 
		db.table1.find({"id":"5"}).explain("executionStats");
		
				==> CHECK OUT 'docsExamined'  ==> MORE EFFICIENT ON INDEX 
				
		// SORT 
		db.table1.find().sort({"id":-1})
		
		// REMOVE 
		db.table1.update({"_id":ObjectId("1234")});
	
		
		CONDITIONAL SEARCH 
		db.table1.find({"id":{$gte:4}})
	
						gt 
						gte 
	
	
		db.table1.find().sort({"id":-1}).limit(3)
		
		                                .skip(3)
										
										
	
	
	
	
DISPLAY DATA 
		
	db.players.find()
	
	db.players.find().pretty()
	
	db.players.findOne()			FIRST ITEM 
	
	
	
	
	Db.table1.remove({"_id": ObjectId("abc123")});
	Db.table1.update({"_id": ObjectId("123")},{"name":"fred"});
	Db.table1.find({"name":"fred"});
	Db.table1.update({"_id": ObjectId("123")},{"age":"22"});
	Db.table1.find({"name":"fred","age":"22"});		Db.table1.find({"name":"fred","age":"22"}).explain("executionStats");
	Db.table1.createIndex({"name":1});
	Db.table1.getIndexes();
	Db.table1.createIndex({"age":1});
	Db.table1.getIndexes();
	Db.table1.dropIndex({"age":1});
	Db.table1.getIndexes();
	db.table1.insert({"name":"peter"});  paul fred
	db.users.find().sort({name:1})
	db.users.find().sort({name:-1})
	
REMOVE RECORD
	_id   is object id is unique id 
	
	db.players.remove({(...object id data)})
	db.testTable.remove({"_id": ObjectId("56cc4371eda812ea80e4bb16")})
	
	
	
UPDATE RECORD 
		
	db.players.update({ID},{UPDATE})
	Db.table1.update({"_id": ObjectId("123")},{"name":"fred"});
	
	
	  $SET{}
	  
	  
	  
	
SEARCHING FOR SPECIFIC DATA 
		
	db.players.find({"key":"value"})
	
				db.players.find({"name":"fred"})
	
				db.players.find({"position":"Goalie"})
	
	db.players.findOne({"position":"Goalie"})  FIRST ONE!
	
	db.players.find({"position":"Goalie","age":30})  MULTIPLE SEARCH CRITERIA
	
	db.players.find(
	
	{
	$and:
	[
			$or:
			[
			{"position":"Goalie"}
			,
			{"position":"Left Wing"}	
			]
			
			,
			
			{"name":"phil"}
				
			
	]
	
	
	}
	
	)
		FIND A OR B 
		
	db.players.find({"age":{$gt:30}})            AGE > 30 
	
							$lt  $gte  $lte     LESS THAN OR EQUAL TO 
							$ne                 NOT EQUAL TO 
	Display limited information 
	
	db.players.find({<CRITERIA>},{"field":1})
	
	db.players.find({"age":{$gte:30}},{"name":1,"age":1,_id:0})
	
	db.players.find(<CRITERIA>).limit(3)     FIRST 3 MATCHES
	
	db.players.find(<CRITERIA>).skip(3)						
	
	db.players.find({"name":{$gt:""}})    ALL RECORDS WITH A NAME 
	
	
	
EXTRA  : MONGO ADVANCED FIND()
	use Bucky fake_bank_data.json file : copy to clipboard 
	
	use bank (create db)
	OPT OUT OF DATA RETRIEVAL BY USING :0 
	db.users.find({"isActive":true,"gender":"male"},{_id:0,"address":0,"email":0,"eyeColor":0,"phone":0}).pretty()
	
	db.users.find({"isActive":true,"gender":"male","age":{$lte:30}},{_id:0,"address":0,"email":0,"eyeColor":0,"phone":0}).pretty()
	
	OPT IN TO DATA RETRIEVAL USING :1
	db.users.find({"isActive":true,"gender":"male"},{_id:1,"email":1,"eyeColor":1,"phone":1}).pretty()
	
	
	
	
	
	
	
	
	
EXECUTIONSTATS 
		.explain("executionStats")
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
ENSUREINDEX() : ADD AN INDEX TO YOUR DATA
	IE MAKE ONE OF YOUR FIELDS AN INDEX 
	
	db.users.ensureIndex({"age":1})        MAKE AGE AN INDEX 
	
		
	
	
	
	
	
	
	
			
GETINDEXES() : LIST ALL INDEXES 
			db.users.getIndexes()
			
			
			
		db.users.find({"age":{$lte:30}}).explain("executionStats")
	
		You will find 'total documents examined' equal to the number of	
		results only and no more, due to the index at work for efficiency
	
	
	
	
DROPINDEX()  : REMOVE INDEX 
			db.users.dropIndex({"age":1})           REMOVE INDEX 
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
WILDCARD SEARCH 
	db.users.find({"name": /.*myname.*/})   FIND USER WITH myname in it
	
	db.users.find().limit(10)             RETRIEVE 10 HITS ONLY 
	
	db.users.find().sort({name:1})      SORT BY NAME ASCENDING
	
	db.users.find().sort({name:-1})     SORT BY NAME DESCENDING
	db.messages.find({"name":/.*Phil.*/}).pretty().sort({name:1})	
	
	
AGGREGATE : FIND NUMBER OF RECORDS MATCHING SET CRITERIA 
	$SUM : TOTAL 
		db.users.aggregate({
			$group : {
				_id : "$eyeColor",                     
				total : {$sum:1}                        
			}
		})
	
				OUTPUT : TOTAL NUMBER OF USERS WITH EACH EYE COLOUR
			
	$AVG : AVERAGE 			
		
			db.users.aggregate({
			$group : {
				_id : "$gender",                     
				avgAge : {$avg : "$age"}                        
			}
		})
	
			OUTPUT AVERAGE AGES OF PEOPLE BY GENDER 
	
	
	
	$MAX : HIGHEST 
	
	
			db.users.aggregate({
				$group : {
					_id : "$gender",                     
					richest : {$max : "$balance"}                        
				}
			})
	
				OUTPUT HIGHEST BALANCE 
				
	
	
	
	
	
MONGO SECURITY
	YOU HAVE TO START MONGO DATABASE IN SECURE MODE TO ENABLE AUTHENTICATION AND STANDARD SECURITY FEATURES
	https://docs.mongodb.org/manual/administration/security-checklist/	   
			
			

	
	













 
 
 
 
 
 
 

Install Mongoose

npm install mongoose          (Must run as admin)
	
Mongoose - Connect To Database

To connect to a mongo database using mongoose use the following code : 
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
    console.log("Connection succeeded.");
});

see node_mongoose_101.js for an example.
Creating a Mongoose Model

In order to save data using mongoose, it is necessary first to create data structures to hold the data.
The structure of a database is called the 'schema' which holds all the relationships with all the
permitted fields and data types.
To add data to a mongo database then we first update the 'schema' to allow a new data type to be stored.
See the code below:
var Schema = mongoose.Schema;     // use the Schema
var bugSchema = new Schema({      // update the schema
    bugName: String,
    bugColour: String,
    Genus: String
});
var Bug = mongoose.model("Bug", bugSchema);   // template for new objects


Mongoose Add Record (command line only)

Once the schema (database structure) and model (specific data item to be stored) have been created,
data can be saved.  Use the following code to save data to Mongo using Mongoose : -
var Bee = new Bug({
    bugName: "Scruffy",
    bugColour: "Orange",
    Genus: "Bombus"
});
Bee.save(function(error) {
  console.log("Your bee has been saved!");
	if (error) {
    console.error(error);
 	}
});

Tutorial at https://www.kompulsa.com/introduction-mongoose-storing-data-mongodb/
Working code at node_mongoose_101.js

Mongoose Basic Tutorial

Also try this http://blog.ijasoneverett.com/2013/11/getting-started-with-mongoose-and-node-js-a-sample-comments-system/

	
MONGOOSE TUTORIAL 
	
	The following notes work through this page 
	
		http://mongoosejs.com/docs/index.html
		
	With clarification at 
	
		http://mongoosejs.com/docs/guide.html
		
	
				
	
	
VERIFY DATABASE CONNECTION 
	We have a pending connection to the test database running on localhost. We now need to get notified if we connect successfully or if a connection error occurs:
	var db = mongoose.connection;
	
	db.on('error', console.error.bind(console, 'connection error:'));
	
	db.once('open', function() {
	  // we're connected!
	});
	
	Once our connection opens, our callback will be called. For brevity, let's assume that all following code is within this callback.
	
	
	
	
CREATE A SCHEMA (DATABASE DEFINITION)
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;
	var bookSchema = new Schema({
		title:String,
		keywords:Array,
		published:Boolean
	});
		
	
			node_mongoose_01.js 
			
	
	
	
	
MONGOOSE RESTFUL API
	https://www.youtube.com/watch?v=p-x6WdwaJco
		
	https://www.youtube.com/watch?v=Do_Hsb_Hs3c
		
		Files   http://www.newthinktank.com/2016/01/nodejs-mongodb-tutorial/
	
	
	
	
	
Mongoose - Complete Breakdown, Theory And Tutorial

	NOTE : TRY MONGOVUE AS A VISUAL VIEW ON A MONGO DATABASE 
	
	
	
Databases
Why MongoDB? Document-oriented
	<< WHAT DOES DOCUMENT-ORIENTED MEAN! >>
	
	
	
	
	
	
	
MONGOOSE INTRODUCTION 
	
	http://mongoosejs.com/
	
	http://mongoosejs.com/docs/documents.html
	
	http://mongoosejs.com/docs/api.html
	
	
	
	Documents
		Mongoose documents represent a one-to-one mapping to documents as stored in MongoDB. 
		
		Each document is an instance of its Model.
		
		
	Schema 
	
	
	Model 
	
	
	Instance 
	
	
	Mongoose creates a SCHEMA = MODEL = DATABASE FIELDS 
	
	   eg  var BookSchema = new Schema({
		title:String,
		published:{
			type:Date,
			default:Date.now
		},
		keywords:Array,
		published:Boolean	   
	   });
	
	
	Mongoose creates 'OBJECT REFERENCE' 
	Mongoose helps us with VALIDATION OF DATA BEFORE WE SAVE IT TO MONGODB 
	
	
	
	
	
			
			
CREATE A MODEL = AN INSTANCE OF OUR SCHEMA 
	module.exports = mongoose.model('Book', BookSchema);
	
	
	
MORE ON SCHEMA 
	http://mongoosejs.com/docs/guide.html
	
	http://mongoosejs.com/docs/schematypes.html
	
	
	
	
	var BookSchema = new Schema({
		title:{
			type:String,
			required:true,
			unique:true,
		}
		published:{
			type:Date,
			default:Date.now
		},
		keywords:Array,
		author:{
			type:Schema.ObjectId,         // IN ANOTHER SCHEMA 
			type:Schema.Type.ObjectId,
			ref:'User'                    // USER MODEL 
		}
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// CREATE CLASS
	var Cat = mongoose.model('Cat', { name: String });
	// CREATE NEW OBJECT : INSTANTIATE 
	
	var kitty = new Cat({ name: 'Zildjian' });
	
	kitty.save(function (err) {
	  if (err) // ...
	  console.log('meow');
	});
Encapsulate DB access in models
Define a Schema
	Everything in Mongoose starts with a Schema. 
	
	Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
	
	Let's get a reference to it and define our kittens.
	
	
	var kittySchema = mongoose.Schema({
		name: String
	});
	<<further example>>
	
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;
	var blogSchema = new Schema({
	  title:  String,
	  author: String,
	  body:   String,
	  comments: [{ body: String, date: Date }],
	  date: { type: Date, default: Date.now },
	  hidden: Boolean,
	  meta: {
		votes: Number,
		favs:  Number
	  }
	});
	
	
	Add to Schema later on 
	
	var ToySchema = new Schema;
	
	ToySchema.add({ name: 'string', color: 'string', price: 'number' });
	
	
	The permitted SchemaTypes are
		String
		Number
		Date
		Buffer
		Boolean
		Mixed
		ObjectId
		Array
	Keys may also be assigned nested objects containing further key/type definitions (e.g. the `meta` property above).
	
	
	
Define a Model
	So far so good. We've got a schema with one property, name, which will be a String. The next step is compiling our schema into a Model.
	var Kitten = mongoose.model('Kitten', kittySchema);
	
	A model is a class with which we construct documents. In this case, each document will be a kitten with properties and behaviors as declared in our schema. Let's create a kitten document representing the little guy we just met on the sidewalk outside:
	
	Instances of Models are documents.
	
	
	
	var silence = new Kitten({ name: 'Silence' });
	
	console.log(silence.name); // 'Silence'
	
	Kittens can meow, so let's take a look at how to add "speak" functionality to our documents:
	// NOTE: methods must be added to the schema before compiling it with mongoose.model()
	
	kittySchema.methods.speak = function () {
	  var greeting = this.name
		? "Meow name is " + this.name
		: "I don't have a name";
	  console.log(greeting);
	}
	var Kitten = mongoose.model('Kitten', kittySchema);
	
	Functions added to the methods property of a schema get compiled into the Model prototype and exposed on each document instance:
	var fluffy = new Kitten({ name: 'fluffy' });
	
	fluffy.speak(); // "Meow name is fluffy"
	
	We have talking kittens! But we still haven't saved anything to MongoDB. Each document can be saved to the database by calling its save method. The first argument to the callback will be an error if any occured.
	fluffy.save(function (err, fluffy) {
	  if (err) return console.error(err);
	  fluffy.speak();
	});
	
	
	Say time goes by and we want to display all the kittens we've seen. We can access all of the kitten documents through our Kitten model.
	Kitten.find(function (err, kittens) {
	  if (err) return console.error(err);
	  console.log(kittens);
	})
	We just logged all of the kittens in our db to the console. If we want to filter our kittens by name, Mongoose supports MongoDBs rich querying syntax.
	Kitten.find({ name: /^Fluff/ }, callback);
	This performs a search for all documents with a name property that begins with "Fluff" and returns the result as an array of kittens to the callback.
Use validators (DONE in VALIDATION), modifiers, getters (DONE) , virtual attributes (DONE) , default Values (DONE) 
Default Values 
	var blogSchema = new Schema({
  
		date: { type: Date, default: Date.now }
		
		
Modifying A Document 
	from http://stackoverflow.com/questions/14199529/mongoose-find-modify-save
	
	var User = mongoose.model('Users',
		mongoose.Schema({
			username: 'string',
			password: 'string',
			rights: 'string'
		})
	);
	<<incorrect but direct>>  
	
	Modify using 
	
	User.update({username: oldUsername}, {
		username: newUser.username, 
		password: newUser.password, 
		rights: newUser.rights
	}, function(err, numberAffected, rawResponse) {
			//handle it
		})
		
		Yes, but be awarded of this "Model.update is sending the command directly to MongoDB - documents are not returned - so there's nothing to run validation on"
		
	<<correct>>
	The user parameter of your callback is an array with find. Use findOne instead of find when querying for a single instance.
	User.findOne({username: oldUsername}, function (err, user) {
		user.username = newUser.username;
		user.password = newUser.password;
		user.rights = newUser.rights;
		user.save(function (err) {
			if(err) {
				console.error('ERROR!');
			}
		});
	});
	
		
	
	<< NOT SURE IF THIS IS PART OF THE COURSE OR NOT >>
	
	Modifying a document returned by Mongoose Query 
	
		from http://stackoverflow.com/questions/14504385/why-cant-you-modify-the-data-returned-by-a-mongoose-query-ex-findbyid
		
		
Modifying A Document << NOT SURE IF THIS IS REQUIRED >> 
	from http://mongoosejs.com/docs/documents.html
	Updating
	There are a number of ways to update documents. We'll first look at a traditional approach using findById:
	Tank.findById(id, function (err, tank) {
	  if (err) return handleError(err);
	  
	  tank.size = 'large';
	  tank.save(function (err) {
		if (err) return handleError(err);
		res.send(tank);
	  });
	});
	
	Now run the update : 
	
	Tank.update({ _id: id }, { $set: { size: 'large' }}, callback);
  
  
	If we do need the document returned in our application there is another, often better, option:
	
	
	Tank.findByIdAndUpdate(id, { $set: { size: 'large' }}, function (err, tank) {
	  if (err) return handleError(err);
	  res.send(tank);
	});
		The findAndUpdate/Remove static methods all make a change to at most one document, and return it with just one call to the database.
		
  
	<< POSSIBLY http://mongoosejs.com/docs/2.7.x/docs/updating-documents.html >>
	
	
  
  
Getters and Virtual Attributes
	from http://mongoosejs.com/docs/guide.html
	
	Virtuals
	Virtuals are document properties that you can get and set but that do not get persisted to MongoDB. The getters are useful for formatting or combining fields, while setters are useful for de-composing a single value into multiple values for storage.
	// define a schema
	var personSchema = new Schema({
	  name: {
		first: String,
		last: String
	  }
	});
	// compile our model
	var Person = mongoose.model('Person', personSchema);
	// create a document
	var bad = new Person({
		name: { first: 'Walter', last: 'White' }
	});
	Suppose we want to log the full name of bad. We could do this manually like so:
	console.log(bad.name.first + ' ' + bad.name.last); // Walter White
	Or we could define a virtual property getter on our personSchema so we don't need to write out this string concatenation mess each time:
	personSchema.virtual('name.full').get(function () {
	  return this.name.first + ' ' + this.name.last;
	});
	Now, when we access our virtual "name.full" property, our getter function will be invoked and the value returned:
	console.log('%s is insane', bad.name.full); // Walter White is insane
	Note that if the resulting record is converted to an object or JSON, virtuals are not included by default. Pass virtuals : true to either toObject() or to toJSON() to have them returned.
	It would also be nice to be able to set this.name.first and this.name.last by setting this.name.full. For example, if we wanted to change bad's name.first and name.last to 'Breaking' and 'Bad' respectively, it'd be nice to just:
	bad.name.full = 'Breaking Bad';
	Mongoose lets you do this as well through its virtual property setters:
	personSchema.virtual('name.full').set(function (name) {
	  var split = name.split(' ');
	  this.name.first = split[0];
	  this.name.last = split[1];
	});
	...
	mad.name.full = 'Breaking Bad';
	console.log(mad.name.first); // Breaking
	console.log(mad.name.last);  // Bad
	Virtual property setters are applied before other validation. So the example above would still work even if the first and last name fields were required.
	Only non-virtual properties work as part of queries and for field selection.
Define instance methods and static methods
	http://mongoosejs.com/docs/guide.html
	
	Schemas not only define the structure of your document and casting of properties, they also define 
	
		document instance methods, 
		
		static Model methods, 
		
		compound indexes and        <<NOT IN COURSE>>
		
		document lifecycle hooks called middleware.  <<NOT IN COURSE>>
	
	
Instance Methods 
	from http://mongoosejs.com/docs/guide.html
	Instances of Models are documents. Documents have many of their own built-in instance methods. We may also define our own custom document instance methods too.
	// define a schema
	var animalSchema = new Schema({ name: String, type: String });
	// assign a function to the "methods" object of our animalSchema
	animalSchema.methods.findSimilarTypes = function (cb) {
	  return this.model('Animal').find({ type: this.type }, cb);
	}
	Now all of our animal instances have a findSimilarTypes method available to it.
	var Animal = mongoose.model('Animal', animalSchema);
	var dog = new Animal({ type: 'dog' });
	dog.findSimilarTypes(function (err, dogs) {
	  console.log(dogs); // woof
	});
		
		
		
		
Static Methods 
	Statics
	Adding static methods to a Model is simple as well. Continuing with our animalSchema:
	// assign a function to the "statics" object of our animalSchema
	animalSchema.statics.findByName = function (name, cb) {
	  return this.find({ name: new RegExp(name, 'i') }, cb);
	}
	var Animal = mongoose.model('Animal', animalSchema);
	Animal.findByName('fido', function (err, animals) {
	  console.log(animals);
	});
	
Validation 
	from http://mongoosejs.com/docs/guide.html
	option: validateBeforeSave
	By default, documents are automatically validated before they are saved to the database. This is to prevent saving an invalid document. If you want to handle validation manually, and be able to save objects which don't pass validation, you can set validateBeforeSave to false.
	var schema = new Schema({ name: String });
	schema.set('validateBeforeSave', false);
	schema.path('name').validate(function (value) {
		return v != null;
	});
	var M = mongoose.model('Person', schema);
	var m = new M({ name: null });
	m.validate(function(err) {
		console.log(err); // Will tell you that null is not allowed.
	});
	m.save(); // Succeeds despite being invalid
Querying Mongoose << NOT SURE IF THIS IS REQUIRED BY THE COURSE >>
	http://mongoosejs.com/docs/queries.html
	
	Queries
	Documents can be retrieved through several static helper methods of models.
		((official : http://mongoosejs.com/docs/api.html#query-js))
		
		
	
	
Video Courses To Help Learn Mongoose 
	https://www.youtube.com/playlist?list=PLGquJ_T_JBMQ1C0Pp41sykceli8G1UGtg
	
	
	
	
	
	<< END MONGOOSE >>
	





