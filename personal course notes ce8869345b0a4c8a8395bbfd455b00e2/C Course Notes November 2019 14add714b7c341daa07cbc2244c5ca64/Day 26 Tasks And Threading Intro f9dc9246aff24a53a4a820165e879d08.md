# Day 26 - Tasks And Threading Intro

# Tasks And Threading

Multithreading
Process
Thread
(Sleep)
Synchronous
Asynchronous
Task

When we run a computer program, we run the MAIN THREAD. This is the SET OF CONTINUOUS INSTRUCTIONS THAT ARE SENT TO THE CPU FOR PROCESSING. We LOCK OPEN A COMMUNICATION CHANNEL WITH THE CPU and call this a THREAD.

THREAD set of instructions SENT TO CPU FOR PROCESSING

```
MAIN THREAD : APPLICATION
```

# Synchronous programming

... is where we wait for previous instruction to complete before moving forwards.

```
Generate a POOR USER EXPERIENCE PARTICULARLY OVER WEB OR DATABASE CALLS WHERE TYPICALLY IT MIGHT TAKE A FEW SECONDS TO GET THE DATA BACK
```

# Asychronous programming

... is where we use the power of the OPERATING SYSTEM to help us.

```
We generate a

	BACKGROUND TASK/THREAD 
		AND GIVE IT RESOURCES ALLOCATED BY THE OPERATING SYSTEM

Main thread continues quickly
	Background task completes and when it does the data is returned and
	we use this data (CALLBACK METHOD)

Typical example : web

	HttpRequest  ==>   SENT 
	RETURNED     <==   HttpResponse

	async GetData(){
		await GetHttpResponseDataAsync();    
	}

	We can also see this in MODERN JAVASCRIPT

	OLD JAVASCRIPT : AJAX

		Raw javascript : XMLHttpRequest  returns data

	MODERN JAVASCRIPT : FETCH

		fetch('<http://mydata.url>')             // GET DATA
			.then(process data)                // IF SUCCESS
			.catch(error)                      // IF FAIL

... to be continued . . . 
```

. . . to be continued!