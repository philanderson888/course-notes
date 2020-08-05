# Mongo Access Control
	
	
	
	Enable Access Control
		MongoDB does not enable access control by default. You can enable authorization using the --auth or the security.authorization setting. Enabling internal authentication also enables client authorization.
		Once access control is enabled, users must authenticate themselves.
		
		--auth
		
		
			Enables authorization to control users access to database resources and operations. When authorization is enabled, MongoDB requires all clients to authenticate themselves first in order to determine the access for the client.
			Configure users via the mongo shell. If no users exist, the localhost interface will continue to have access to the database until you create the first user.
			See Security for more information.
	
		Authentication Methods
			To authenticate a user, MongoDB provides the db.auth() method.
	
	
			For the mongo shell and the MongoDB tools, you can also authenticate a user by passing in the user authentication information from the command line.
	
		MongoDB supports multiple authentication mechanisms:
			SCRAM-SHA-1
			MongoDB Challenge and Response (MONGODB-CR)
			x.509 Certificate Authentication.
	
	User Management Interface
		To add a user, MongoDB provides the db.createUser() method. When adding a user, you can assign roles to the user in order to grant privileges.
		Authentication Database
		When adding a user, you create the user in a specific database. This database is the authentication database for the user.
		A user can have privileges across different databases; i.e. a users privileges are not limited to the authentication database. By assigning to the user roles in other databases, a user created in one database can have permissions to act on other databases. For more information on roles, see Role-Based Access Control.
		The users name and authentication database serve as a unique identifier for that user. That is, if two users have the same name but are created in different databases, they are two separate users. If you intend to have a single user with permissions on multiple databases, create a single user with roles in the applicable databases instead of creating the user multiple times in different databases.
	
	
Mongo Authentication Tutorial

	
	https://docs.mongodb.org/manual/tutorial/enable-authentication/
		
	
		
	Create the user administrator.
	
			Add a user with the userAdminAnyDatabase role. For example the following creates the user myUserAdmin on the admin database
			1 RUN MONGOD 
			
			2 RUN MONGO 
			
			3 ON MONGO CLIENT TYPE 
			
					use admin
			
			
			4 ON MONGO CLIENT TYPE 
			
			
						db.createUser(
						 {
							user: "test2",
							pwd: "test",
							roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
						 }
						)
			5 STOP MONGOD RUNNING 
			
			6 START MONGOD WITH THIS COMMAND 
			
					mongod --auth 
					
			7 ON MONGO CLIENT TYPE 
			
				mongo -u test -p test --authenticationDatabase admin 
						Or, in the mongo shell connected without authentication, switch to the authentication database, and use db.auth() method to authenticate:
								use admin
								db.auth("myUserAdmin", "abc123" )
	
			
	
	
	
	Authenticate a User
			To authenticate a user, either
			Use the command line authentication options (e.g. -u, -p, --authenticationDatabase) when connecting to the mongod or mongos instance, or
			Connect first to the mongod or mongos instance, and then run the authenticate command or the db.auth() method against the authentication database.
	
			To authenticate, the client must authenticate the user against the users authentication database.
			For instance, if using the mongo shell as a client, you can specify the authentication database for the user with the --authenticationDatabase option.
				
	
	
	FURTHER SECURITY TOPICS
		
		Encryption 
		
		SSL 
		
		Authorisation 
		
		
		
		
		
Mongo-Watch : Listener For Data Update

	 
	
	Listener On Data change 
	
		npm install mongo-watch 
		
		MongoWatch = require 'mongo-watch'
 
		watcher = new MongoWatch {format: 'pretty'}
		 
		# watch the collection
		watcher.watch 'test.mytable', (event) ->
		 
		 # parse the results
		 console.log 'something changed:', event
  
  
  
	
	
