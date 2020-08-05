# Mongo

## Contents

- [Mongo](#mongo)
	- [Contents](#contents)
	- [Documentation](#documentation)
	- [Resources](#resources)
	- [Install Mongo](#install-mongo)
	- [Running Mongo Database](#running-mongo-database)
		- [RUNNING MONGO CLIENT](#running-mongo-client)
		- [RUNNING MONGO ONLINE](#running-mongo-online)
		- [Install Mongo on JetBrains](#install-mongo-on-jetbrains)
	- [BACK UP MONGO DATABASE](#back-up-mongo-database)
	- [RESTORE MONGO DATABASE](#restore-mongo-database)
	- [NODE INSTALL MONGO](#node-install-mongo)
	- [Simple Mongo Commands](#simple-mongo-commands)
	- [Mongoose](#mongoose)



## Documentation
	
https://docs.mongodb.org/manual/
		
## Resources

https://www.youtube.com/watch?v=Do_Hsb_Hs3c (22 minutes)



## Install Mongo

```js
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
```

## Running Mongo Database

C:\PROGRAM FILES\MONGO\SERVER\3.2\BIN\MONGOD.EXE 
	
	RUN MONGOD FILE TO START MONGO DATABASE SERVICE RUNNING 
		
	ADD TO PATH FOR ABILITY TO RUN FROM ANYWHERE 
		
		
		
		
	
	
		
### RUNNING MONGO CLIENT 
	
	C:\PROGRAM FILES\MONGO\SERVER\3.2\BIN\MONGO.EXE 
	
		RUN FROM THE COMMAND LINE 
		
		ADD TO PATH FOR ABILITY TO RUN FROM ANYWHERE 
		
	
	
	
	
	
	
	
	
	
	
	
	
### RUNNING MONGO ONLINE 

USE EG MONGOLAB FOR ONLINE EXPERIENCE (FREE 30MB DATABASE)
	
https://mongolab.com/

https://robomongo.org/


	
	
		
		
### Install Mongo on JetBrains

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
	
	
	
	
								
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
## BACK UP MONGO DATABASE 

```js
MONGODUMP.EXE 
```

Creates in dump folder inside main mongo directory 

WINDOWS - RUN AS ADMIN

C:\Program Files\MongoDB\Server\3.2\bin\dump  folder created with databases
			




			
## RESTORE MONGO DATABASE 

RUN MONGORESTORE.EXE 
	
DEFAULT: RESTORES FROM DUMP DIRECTORY 
			
```js
mongorestore --collection people --db accounts dump/accounts/people.bson
```
			
			
			
			
			
			
			
			
			
			
			
## NODE INSTALL MONGO 

https://github.com/mongodb/node-mongodb-native

```js
npm install mongo
		
npm install mongoose 
```


	
	
## Simple Mongo Commands

			
			
			
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
			
			

## Mongoose

[mongoose.md](mongoose.md)
