
		
					
	
	LINUX  
	
		ACTIVITY MONITOR 
		top 
		top -o cpu   ORDER BY CPU 
		top -o rsize  ORDER BY RAM SIZE 
		ps aux | more 
		ps -e|grep node           LIST NODE PROCESSES 
		ps -ef | grep node 
		ps T                      LIST PROCESSES ON THIS TERMINAL 
		kill <process_id> 
		kill -9 <process_id>
		killall <name_of_process>
		pkill node                  KILLS ALL NODE PROCESSES 
		pkill -f node 
	
	
	
	
	
	
	
	
	
	
	
			
		
		
	PS-NODE
	
		MANAGE PROCESSES USING NODE
	
		https://www.npmjs.com/package/ps-node
		
		
		
		var ps = require('ps-node');
		 
		// A simple pid lookup 
		ps.lookup({
			command: 'node',
			arguments: '--debug',
			}, function(err, resultList ) {
			if (err) {
				throw new Error( err );
			}
		 
			resultList.forEach(function( process ){
				if( process ){
					console.log( 'PID: %s, COMMAND: %s, ARGUMENTS: %s', process.pid, process.command, process.arguments );
				}
			});
		});
			
			
		var ps = require('ps-node');
	 
		// A simple pid lookup 
		ps.kill( '12345', function( err ) {
			if (err) {
				throw new Error( err );
			}
			else {
				console.log( 'Process %s has been killed!', pid );
			}
		});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
				
		
Main Node Process 
	console.log("Process " + process.argv[1] +" at work " );       
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
Creating Child Processes
	THREE WAYS TO CREATE CHILD PROCESSES
	
		EXEC : NO COMMUNICATION UNTIL THE END
		
		SPAWN : CHILD PROCESS CAN COMMUNICATE WHILE IT IS RUNNING
		
		FORK : TWO-WAY SOCKET I/O COMMUNCATION BETWEEN PARENT AND CHILD PROCESS CAN TAKE PLACE
		
	
	
	
	
Creating A Child Process With EXEC 
	ONLY COMMUNICATION WITH THIS PROCESS IS AT THE END AFTER PROCESS TERMINATES AND RETURNS CONTROL TO THE PARENT PROCESS 
	
	IE OUTPUT ONLY OBTAINED ONCE, AT THE END OF THE PROCESS AND NOT WHILE IT IS RUNNING 
	
	PROBLEM : NOT REAL TIME FEEDBACK 
	
	
	
	INFO
	
		https://nodejs.org/api/child_process.html
	
	
	REQUIRE 
		var exec=require('child_process').exec;
	CREATE THE CHILD PROCESS 
	
		var child=exec('node ./file.js);
	
	AWAIT DATA WITH STDOUT ON 'DATA' ARRIVAL (AT TERMINATION OF PROCESS)
	
		child.stdout.on('data',callback);
				
	EXAMPLE WITH STDOUT OUTPUT 
	
	
				
				var exec = require('child_process').exec;
				exec('node ./node_57_server.js', function(error,stdout,stderr){
				 console.log('stdout: ', stdout);
				 console.log('stderr: ', stderr);
				 if(error !== null){
					console.log('exec error: ', error);
				 }
				});
				
				
				OR 
				
				var exec = require('child_process').exec;
				var child = exec('node ./node_57_server.js');
				child.stdout.on('data', function(data) {
					console.log('stdout: ' + data);
				});
				
				
	SECOND EXAMPLE WITH STDOUT OUTPUT 
	
			
				var exec=require('child_process').exec;
				var child=exec('node ./node_58_server_child_process.js');
				console.log('child process successfully started');
				console.log(child);
				child.stdout.on('data',function(data){
				 console.log('stdout: ' + data);
				});
				child.stderr.on('data',function(data){
				 console.log('stderr: ' + data);
				});
				child.on('close',function(code){
				 console.log('closing child process with code ' + code);
				});
				
				
	
	
		
				
				
	OK TO CREATE GRANDCHILDREN PROCESSES ALSO 
			MASTER 
		
				CHILD1
						GRANDCHILD1
			
						GRANDCHILD2
						
				CHILD2
				
				
				
	
	
	
	
	
	
	
	
Terminating A Child Process 
	PARENT HAS PROCESS ID process.pid 
	
	CHILD HAS PROCESS ID child.pid 
	
	
	LINUX TERMINATE PROCESS 
	
		
		kill a process using kill(child.pid); BUT ONLY WORKS IN LINUX!
	
	
	
	
	
	
	WINDOWS - TASKKILL BY PROCESS ID 
	
	
			var isWin = /^win/.test(process.platform);
			if(!isWin) {
				kill(processing.pid);
			} else {
				var cp = require('child_process');
				cp.exec('taskkill /PID ' + child.pid + ' /T /F', function (error, stdout, stderr) {
					// console.log('stdout: ' + stdout);
					// console.log('stderr: ' + stderr);
					// if(error !== null) {
					//      console.log('exec error: ' + error);
					// }
				});             
			}
			
	WINDOWS - TASKKILL BY PROCESS NAME 
		This will be the easiest to use to kill all node processes 
		manually with one quick command
			
		taskkill /im node.exe /f 
	
				
Creating A Child Process With Spawn
	
	WITH SPAWN COMMUNICATION CAN TAKE PLACE AT ANY TIME WHEN CHILD PROCESS IS RUNNING 
	
	https://nodejs.org/api/child_process.html 
		
	http://jlunaquiroga.blogspot.co.uk/2014/03/creating-processes-in-nodejs.html
		
	Excellent Lab 
	
		http://www.tutorialspoint.com/nodejs/nodejs_scaling_application.htm
		
		
	
		
	child_process.spawn(command, [args], [options])
			
			
			
				
	WORKED EXAMPLE WITH SPAWN A CHILD PROCESS 
		
				const fs = require('fs');
				const child_process = require('child_process');
				 
				for(var i=0; i<3; i++) {
				  var workerProcess = child_process.spawn('node', ['node_00_HelloWorld.js', i]);
				  workerProcess.stdout.on('data', function (data) {
					 console.log('stdout: ' + data);
				  });
				  workerProcess.stderr.on('data', function (data) {
					 console.log('stderr: ' + data);
				  });
				  workerProcess.on('close', function (code) {
					 console.log('child process exited with code ' + code);
				  });
				}
					node_60_script.js 
					
			
		
		
		
		
	SECOND WORKED EXAMPLE WITH SPAWN PROCESS 
	
		const
			 fs = require('fs'),
			 process = require('child_process');
		for(var i=0; i<10; i++) {
			var ls = process.exec('node worker.js '+i, function (error, stdout, stderr) {
			   if (error) {
				 console.log(error.stack);
				 console.log('Error code: '+error.code);
				 console.log('Signal received: '+error.signal);
			   }
			   console.log('stdout: ' + stdout);
			   console.log('stderr: ' + stderr);
			   
			 });
			
			 ls.on('exit', function (code) {
			   console.log('Child process exited with exit code '+code);
			 });
		}
	
	CREATING A CHILD PROCESS AND TALKING TO IT : TEST APPLICATION USING A TIMER 
		http://www.andygup.net/node-js-moving-intensive-tasks-to-a-child-process/
		
		
	
	
	
	
	
	
	
CREATING A CHILD PROCESS USING FORK WHICH ALLOWS 2-WAY SOCKET.IO COMMUNCATION WITH THE CHILD PROCESS 
 
	http://www.tutorialspoint.com/nodejs/nodejs_scaling_application.htm
	
	
	   see node_61_process_fork.js 
		
		
	https://nodejs.org/api/child_process.html#child_process_child_send_message_sendhandle_callback
	
	
	FORK IS SAME AS SPAWN PLUS HAS 
	
	
		A 2-WAY COMMUNICATION CHANNEL SET UP TO SEND LIVE MESSAGES!!!
		
		
		
		
		
		
	
	
	
	
	
	