# Day 34 - Morning Tech Review

# Tech Review

ASP Active Server Page [asp:...](asp:...)

Process .exe running
.dll library
.exe runs
Application USER INITIATED (AFTER LOGIN)
Service COMPUTER INITIATED (STARTUP)
Thread set of instructions sent as a block into CPU for processing
Task C# neat implementation of threading
Task<T> Task which returns data OF TYPE <t>
Task<T>.Result Obtaining this data output by a task
Stream
Types of streaming data
Binary	[10101010101010101010101010101010] 1 block (buffer c# 1024 bytes)
[10101010101010101010101010101010] 1 block (buffer)
[10101010101010101010101010101010]
[10101010101010101010101010101010]
var buffer = new byte[1024]
Database : raw binary like this - DATA TYPE IS BLOB Binary Large Object
C
Buffer : block of data
Cache : temporary store (local machine eg partial download or previous web files)
Temp/
Serialize C# OOP ==> binary/character stream
Deserialize binary/character stream ==> back into C# OOP

JSON Javascript Object Notation {"field":"value"}
Bootstrap
ASP Active Server Pages : Microsoft web page
<asp runat="server">... converted to HTML
ASPX
MVC Model View Controller Model = DATA View = Visible Page Controller = handle URL
Controller : 1) Analyse URL 2) Query Database 3) Send data to right View
API Application Programming Interface : GET DATA OVER WEB
http REQUEST
GET [domain.com?x=1;y=2;data=hello;](http://domain.com/?x=1;y=2;data=hello;)
POST data in JSON body {} of HTTP REQUEST
http RESPONSE
Blazor C# in Browser (WebAssembly)
Razor C# inside HTML @....
Delegate placeholder for methods
Event ability to respond to external interactions a) USER INITIATED b) DATA INITIATED
Event has LISTENER EG AddEventListener('click',function(){...........body....})
C# Event Button_Click(object SENDER, eventArgs e){}
Sync tasks in order
Async tasks run off the main thread; complete whenever they wish
Async..await METHOD marked ASYNC... LINE marked AWAIT...getLongTask()
ASCII 127 characters matched with a number (0-31 are NONPRINTING EG Escape Key)
Proxy middle man between client and server : used for internet monitoring
UTF8 8 bit = simple US English ASCII
UTF16 UNICODE Special Characters
XML <root> <row field="value">data</row> </root>