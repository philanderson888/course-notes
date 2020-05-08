# Day 31 - Morning Technical Review

Monday 2 December : Week 7 : Review

Encoding : way we lay down files etc in a particular order so data can be read/written
File Signature eg JPG was FFD8
ASCII 127 character codes (7 bits)
UTF8 add one extra bit to make clean 8 bits
UTF16 : 16 bits for advanced characters
Serialise : Switch between raw data and OOP fixed data types eg 101010101010 to List<Customer>
Serialize : OOP fixed data into raw data for streaming
Deserialize : raw data into OOP fixed data
Stream : blocks of information over internet eg 2GB movie into tiny blocks
Buffer : temporary storage area for streaming data in/out
Cache : temporary storage area (eg website cache is previously loaded file)
Task : abstraction over threads (less detail, easier to code)
Thread : Main application runs on Main Thread (talk to CPU) but can spawn sub-threads which can separately talk to CPU
Process .exe running
Synchronous : line by line in order
Async : Main thread : call sub-thread (task) to do work
<Task>.Result ==> WAIT FOR RESULT
Delegate : placeholder for one or more methods void MyDelegate(int x);
Event : event MyDelegate MyEvent;
Add methods MyEvent += MyMethod; (((Methods must be void MyMethod(int x) )))
Action delegate : void MyAction(); no in/out parameters
var t = new Task(.....Action.....);
var t = new Task<int>( .....task must return <int>....);
..........get t.Result to get our <int> back
Lamda Anonymous (INPUT PARAMETERS)=>{CODE BODY/IMPLEMENTATION}
Method MyMethod ( ) { }