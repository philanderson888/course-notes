# Node MySQL

	
		
		
		
Node with MYSQL
	a. Npm install mysql
	
	b. Download, install and run mysql database eg XAMPP
		
		
		LAB : node_mysql_01.js
		
		
		
		
		
		
	
https://github.com/felixge/node-mysql
	
https://codeforgeek.com/2015/01/nodejs-mysql-tutorial/
	
	
		npm install mysql
	
	
 			var mysql      = require('mysql');
			var connection = mysql.createConnection({
			  host     : 'localhost',
			  user     : 'me',
			  password : 'secret',
			  database : 'my_db'
			});
			connection.connect();
			connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
			  if (err) throw err;
			  console.log('The solution is: ', rows[0].solution);
			});
			connection.end();
		Working MYSQL Code Example
		
			https://codeforgeek.com/2015/01/nodejs-mysql-tutorial/
			
			var mysql      = require('mysql');
			var connection = mysql.createConnection({
			  host     : 'localhost',
			  user     : '< MySQL username >',
			  password : '< MySQL password >',
			  database : '<your database name>'
			});
			connection.connect();
			connection.query('SELECT * from < table name >', function(err, rows, fields) {
			  if (!err)
				console.log('The solution is: ', rows);
			  else
				console.log('Error while performing Query.');
			});
			connection.end();
		
Node-MySQL

	
		https://www.npmjs.com/package/node-mysql
		
		Install
		
		npm install node-mysql
		
		Dependencies
		
		"dependencies": {
				"better-js-class": "*",
				"cps": "*",
				"mysql": "*",
				"underscore": "*"
			}
		
		Use
		var db = require('node-mysql');
		var DB = db.DB;
		var BaseRow = db.Row;
		var BaseTable = db.Table;
Node Visual Studio Plugins

https://www.visualstudio.com/en-us/features/node-js-vs.aspx
http://blogs.msdn.com/b/brunoterkaly/archive/2014/02/02/how-to-use-node-js-packages-with-visual-studio.aspx
		