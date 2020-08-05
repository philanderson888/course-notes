# Mongoose



```js

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
	
	
	
