# C# Core Module

# Random Terms

```powershell
GACUtil /i newfile.dll   /i install /l list /u uninstall
xsd xml schema definition
role based security
code access security
string.empty
const : literal at compile time.  Instead set property read-only
global::System.Console.WriteLine
ALIAS using x=system.console; x::WriteLine
MANIFEST : METADATA ON ASSEMBLY
ASSEMBLY : BLOCK OF COMPILED CODE
ASSEMBLY : NAME + VERSION + STRONG NAME + LIST OF FILES WITH HASHES + REFERENCED ASSEMBLIES
STRING.FORMAT("AAA {0} and {1:N0"},a,b)
N Number
N0 Number with commas
A single character
C Currency
D date
E Exponential
F fixed point
P Percent
X Hex
00000.000 PAD WITH ZEROS
CSC /R REFERENCE AN ASSEMBLY
SN STRONG NAME NAME, VERSION, KEYPAIR, LANGUAGE
GACUTIL /I
GACUTIL /U
STACK TRACE = METHODS WHICH CALLED METHODS WHICH CALLED YOUR METHOD
GLOBALIZATION
LOCALIZATION
[Range(0,400)] public int Height{get;set;}
[Required(ErrorMessage="Please enter a name")]
Model Binder
Default Model Binder
Action Filter
Partial View is part of an HTML page
RedirectToRouteResult - redirect to another action or route
RedirectResult - redirect to another URL
ContentResult - returns text
MVC Filter 
ActionFilter
HTML Partial
Server.MapPath
_AppStart
_PageStart
@ ... page
@    ... model
Request life cycle
Configure services
static files
RedirectToAction
RedirectToRouteResult
ID
Parameter
Query String
ViewData
ViewBag
Routes
Web Request
Parameters with routes
Routes with attributes
HttpGet
Razor code
@  explicit string delimiter
Razor Comments
Razor if statement
Razor foreach statement
Html.ActionLink
Partial View
@     model    
@      Model
@model
Passing in a collection
Strongly typed view
Dynamic view
async await
Blazor
WASM
Authentication
Uri
Scheme
Absolute path
Xamarin bought by Microsoft 2016
C#6 Roslyn compiler is open source
Csc.exe is compiler
Csc myfile.cs produces myfile.exe
Csc /target:library produces dll
Class @keyword can be useful when dealing with other libraries
Char copyrightsymbol = '\u00A9' hex codes used
String format :X2 is hex output
Using alias1 = system. . .
Signature = input parameters and name
Default constructor not made if you make one
Constructors are public but don't have to be - see nonpublic constructors
Destructor
Public void Deconstr (out int y, out string z)
Create instance01
(Int a,string b)=instance01
Or instance01.Deconstr(ing a,string b)
Indexer
Use string class as an example
Const vs static readonly
Finalizer written ~
Class x
~ x
This will override objects finalize code
Nameof
Base calls parent implementation if a method
Type
1. GetType on instance
2. Typeof on type name
Struct
- Value type
- No inheritance
- Default constructor always exists
- Can't initialise field values
public/private/internal/protected
Can also expose a class to another named class explicitly
System.Runtime.CompilerServices.InternalsVisibileTo
{assembly:InternalsVisibleTo("OtherAssemblyName")
or signed assemblies must use the public key
{assembly:InternalsVisibleTo("SignedAssembly","publickey....")
can get public key from an assembly using LINQ
string key = string.Join("",Assembly.GetExecutingAssembly().GetName().GetPublicKey().Select(b=>b.ToString("x2")));
Covariance
Higher order function takes function as parameter
Multicast delegates means can add += -= etc
Func delegate accepts and returns same type
Action delegate returns void - just does something
Broadcaster
Subscriber += methods.
Subscribers enable different events which do not interfere with each other
Func delegates
Anonymous methods replace by lambda
Throw can now be used as a statement
Exception conditionals
Enumerate.moveNext() is like yield statement
Anonymous type
Look into xml types
Chapter 5 Framework overview
Xamarin runs on mono framework who h is open source
Chapter 6 Framework fundamentals
Char.isLetter/number/whitespace etc
char[] c = MyString.toCharArray()
MyString. Startswith/endswith/contains
myString.IndexOf("findme")
LastIndexOf
Substring
Insert/Remove
PadLeft/Right
Trim
ToUpper/Lower
Split
a.CompareTo(b)
Compare(a,b,comparisonType)
CultureInfo german = CultureInfo.GetCultureInfo("de-DE")
Encoding.ASCII/UTF8/Unicode
Encoding.Unicode is default encoding for .NET
Encoding.UTF8 is default encoding for streaming
Timespan : 100ns
Timespan(ticks)
dt.Add(timespan)
dateTime01.ToString/ToShort/LongDate/TimeString
DateTime? is nullable
CultureInfo.GetCultures()
CultureInfo.CurrentCulture
BigInteger is a struct with arbitrarily large precision
You can cast any integer to a big integer
Complex(a,b) numbers
.Real/Imaginary/Phase/Height
Random.next(n)/NextDouble/NextBytes
Crypto Random Numbers
var rand = System.Security.Cryptography.RandomNumberGenerator.Create();
byte[] bytes = new byte [32];
rand.GetBytes (bytes); // Fill the byte array with random numbers.
GUID
Guid g = Guid.NewGuid ();
Console.WriteLine (g.ToString()); // 0d57629c-7d6e-4847-97cb-9e2fc25083fe
Console.CursorLeft -= 3 (go left 3 chars)
Process.Start("notepad.exe") can start an application
Process.Start("abc.txt") will start Notepad reading this file
IPCONFIG
ProcessStartInfo psi = new ProcessStartInfo {
FileName = "cmd.exe",
Arguments = "/ c ipconfig /all",
RedirectStandardOutput = true,
UseShellExecute = false
};
Process p = Process.Start (psi);
string result = p.StandardOutput.ReadToEnd();
Console.WriteLine (result);
Chapter 7 : Collections
Enumerator : MoveNext()/Current - Simplest
IEnumerable : GetEnumerator() (use 'yield return' on these) - Basic
ICollection - Medium
IList/IDictionary - Advanced
ShallowClone : Create a fresh copy of a collection but the items within the collection still point to the same original reference items, so the actual data items are pointing to the same items as before even though we have built a new container
DeepCopy : have to iterate manually and create a clone of each one manually
LinkedList is like a loop with First/Last item then each item has Previous/Next
HashTable is a list of integer values which are mapped to the key/value pair
Take our KEY, HASH IT ==> this is our INDEX and in it we also store the VALUE
Chapter 8 : LINQ
Local object eg local array implements IEnumerable
Remote objects eg from remote database also implement IQueryable
LINQ fluent syntax is best for chaining queries
string[] myArray = {"Tom","Dick","Harry"}
var output = System.Linq.Enumerable.Where(myArray,item=>item.Length>=4)
var output = myArray.Where(item=>item.Length>=4)
item=>item.Contains("a")
LINQ query syntax
var output = from item in myArray where item.Contains("a") select item
LINQ fluent syntax with chaining
var output = myArray.Where(item=>item.Contains("a"))
.OrderBy(item=>item.Length)
.Select(item=>item.ToUpper())
LINQ
Take (first x)
Skip (first x)
Reverse (order)
Aggregate
First/Last/Count/ElementAt()/Min/Max/Sum/Average
LINQ into
select x
into y
IEnumerable queries are useful when dealing with SQL but the query type is not valid in SQL so we pull the whole recordset into local memory (IEnumerable) then perform a query on it, for example RegEx query which is not possible to do in SQL directly.
IEnumerable => get SQL recordset
IEnumerable => perform REGEX on this recordset
LINQ-to-SQL (L2S)
Chapter 9 : LINQ advanced
Join queries with Select/SelectMany/Join/GroupJoin
Joins
Outer sequence is first table to be queried
Inner sequence is second table to be queried
Join inner-variable in inner-table on outer-item equals inner-item
Chapter 10 : LINQ to XML
X-DOM
XDocument
XDeclaration
XElement
XElement (defined as a child by XContainer)
XAttribute
Name
Value
XText (node)
XText
XComment
XML Methods
XElement/XDocument.Load() can build a XML file from a file, stream, TextReader or XMLReader
XElement/XDocument.Parse() builds from a string
XNode.ToString() converts to XML string with indents and formatting
XElement/Document.Save() convert XML to file/stream/XMLWriter/TextWriter
XContainer has Add() which can also be used to add nodes etc
XML Functional Construction
XElement x =
new XElement
XML Namespace
<rootElement xmlns="some.name">
<rootElement xmlns:test="some.name">
Chapter 11 : Further XML
They are written in XML themselves!
XML Schema Validation
When we read a document with XMLReader we can add to the settings an XML Schema Document. If the document being read does not match the schema, then an exception will be thrown.
XSLT XML Schema Language Transform
Translates from one XML to another XML eg XHTML document
Chapter 12 : Garbage Collection
GC always auto disposes of items
Finalizer ~myClass*(){} after this the object may be subject to Garbage Collection
GC.Add/Remove MemoryPressure - inform CLR of estimated umanaged resources in use
Diagnosing memory leaks
long memoryUsed = GC.GetTotalMemory(true);

Conditional compiling
#define TESTMODE
#if TESTMODE
#endif

Chapter 14 : Concurrency and Async
CPU provides threads blocks of time to execute
Thread.Sleep(0) hands over the current thread's time slice to CPU immediately
Thread.Yield() does same thing only to threads running on same CPU core
UI thread is main thread
Dispatcher can allow communication between a sub thread and the UI thread
Object.Dispatcher.Invoke/BeginInvoke
WPF example with dispatcher
Thread pool is a group of pre-created threads so they are ready to go when we need them, saving time on the start up process.
Threads in pools
have no name so can't be debugged easily
are always background
Task.Run() will run on a pooled thread
ThreadPool.QueueUserWorkItem() was an older way of calling the same thing
Foreground process keeps the application alive - when it dies then the application dies, along with any background processes spawned from it.
Signaling is receiving a notification from another thread
eg ManualResetEvent
Threads are poor uses of memory resources when there are lots of them. Much better are tasks
Limitations of threads
Can pass data into thread at the start
Can't easily get back data from a thread
Can join a thread which means we block our calling thread until the thread we have joined terminates
Tasks
Higher level of abstraction than a thread
May or may not be backed by a thread
Can use thread pool
Task.Run() same as Task.Factory.StartNew()
Tasks used pooled background threads by default
If tasks are used in a console application then the console application must use Task.Wait() or Console.ReadLine() so the foreground main method stays active, because once it terminates so do all the background tasks
Task Exceptions
try{ // create task }
catch (Aggregated Exception aex){ if (aex.InnerException is NullReferenceException ) {} }
Task Continuation
Task<int> x = Task.Run(()=>{})
var waitOnX = x.GetAwaiter()
waitOnX.OnCompleted(()=>{})
or can use the ContinueWith() method
Task.Delay()
Task.Delay(1000) is the async alternative to Thread.Sleep(1000)
Asynchronous Tasks
can complete asynchronous tasks in order and wait for each one to complete, or do them in parallel as wished.
async Task x(){
await asyncMethodY(){}
see LINQPad for a great example counting primes
async void MyMethod(){
await MethodAsync(){}
Creating a responsive UI by using await for potentially long-running tasks
Create stackpanel with a button.Click method
MyMethodAsync(){
async void ClickMe(){
await MyMethodAsync(){}
Async method creation
1. Write code for standard sync method and get it working
2. Replace sync with async methods and await them
- Upgrade async method return types to Task or Task<TResult> unless the methods are top level eg UI thread handlers
Chapter 15 Streams and IO
backing store = endpoint eg file or network endpoint
source
destination
stream deals with data serially in sequence
Fig 15.1 Stream Architecture
File modes
using(var fs=new FileStream("my.file.bin",FileMode.Open,FileAccess.Read)){}
MemoryStream
var ms = new MemoryStream()
existingStream.CopyTo(ms);
PipeStream
Permits processes on one computer to share data exiting from one process to another. Does not use network etc - just internal only
BufferedStream
Improve speed by reading data ahead of what is required, up to the specified buffer size.
Create 100kb file
File.WriteAllBytes("myFile.bin",new byte[100000])
Read
using(FileStream fs = File.OpenRead("myFile.bin")
using(var bs = new BufferedStream(fs,20000)){
bs.ReadByte()
console.WriteLine(fs.position) // returns 20000 even after 1 byte read because it's reading ahead
Stream Adapter
Streams read only raw bytes
To read character sets we must put adapters on top
Text : TextReader/Writer, StreamReader/Writer, StringReader/Writer
BinaryAdapter : for int, bool, float, string
XMLAdapter
TextReader
Peek : one character
Read(char[] buffer
File Security
Chapter 16 Networking
.Net
WebClient permits HTTP and FTP
HttpClient for consuming REST
HttpListener for creating a WebServer
SmtpClient for sending emails
Dns
TcpClient,UdpClient,TcpListener,Socket for direct access to Network layers
IPAddress a = IPAddress.Parse (" 101.102.103.104");
IPEndPoint ep = new IPEndPoint (a, 222); // Port 222
Console.WriteLine (ep.ToString()); // 101.102.103.104: 222
Note : in a path the trailing slash indicates a folder so will retrieve the default file inside that folder.
If the trailing slash / is omitted then the first assumption will be to look for a file of that name. If it fails, then it will (probably) look for a folder but it will have taken extra time
Download web page
await webClient01.DownloadFileTaskAsync("http://www.mysite.com","webpage.htm")
note can report download progress with
webClient01.DownloadProgressChanged += ....
See Http_Get_01 for synchronous WebClient example
See Http_Get_02 for asychronous WebClient example
See Http_Get_03 for asynchronous WebClient with progress and cancellation example
WebRequest/Response
WebRequest.Create...
assign Proxy
assign Credentials
GetResponse to get data
GetResponseStream from this to get a stream
StreamReader reads the stream
WebRequest with a synchronous (normal) request
// This is the Synchronous version of a page read - thread hangs
var pageRequest01 = WebRequest.Create("http://www.albahari.com/nutshell/code.html");
pageRequest01.Proxy = null;
using (var response01 = pageRequest01.GetResponse()) {
using(var stream01 = response01.GetResponseStream())
{
using (var fileStream01 = File.Create("page01.html"))
stream01.CopyTo(fileStream01);
see Http_Get_04 worked example of synchronous version
WebRequest with Async
async static void GetPage()
using (var response01 = await pageRequest01.GetResponseAsync())
using (var stream01 = response01.GetResponseStream())
await stream01.CopyToAsync(fileStream01);
Console.WriteLine("file has arrived");
see Http_Get_05 for an asynchronous version
HttpClient is newer version of HttpWebRequest/Response
string html = await new HttpClient(). GetStringAsync (" http:// linqpad.net");
also
var client = new HttpClient();
var task1 = client.GetStringAsync (" http:// [www.linqpad.net](http://www.linqpad.net/)");
var task2 = client.GetStringAsync (" http:// [www.albahari.com](http://www.albahari.com/)");
Console.WriteLine (await task1);
Console.WriteLine (await task2);
Get Response
var client = new HttpClient(); // The GetAsync method also accepts a CancellationToken.
HttpResponseMessage response = await client.GetAsync (" http://...");
response.EnsureSuccessStatusCode();
string html = await response.Content.ReadAsStringAsync();
Response Headers
WebClient wc = new WebClient { Proxy = null };
wc.Headers.Add (" CustomHeader", "JustPlaying/ 1.0");
wc.DownloadString (" http:// [www.oreilly.com](http://www.oreilly.com/)");
foreach (string name in wc.ResponseHeaders.Keys)
Console.WriteLine (name + "=" + wc.ResponseHeaders [name]);
wc.QueryString.Add (" q", "WebClient"); // Search for "WebClient"
wc.QueryString.Add (" hl", "fr"); // Display page in French
wc.DownloadFile (" http:// [www.google.com/](http://www.google.com/) search", "results.html");
System.Diagnostics.Process.Start (" results.html");
Form Data
var data = new System.Collections.Specialized.NameValueCollection();
data.Add (" Name", "Joe Albahari");
data.Add (" Company", "O'Reilly");
byte[] result = wc.UploadValues (" http:// [www.albahari.com/](http://www.albahari.com/) EchoPost.aspx", "POST", data);
Console.WriteLine (Encoding.UTF8. GetString (result));
Cookies
HTTP Server
foreach (IPAddress a in Dns.GetHostAddresses (" albahari.com"))
Console.WriteLine (a.ToString()); // 205.210.42.167
IPHostEntry entry = Dns.GetHostEntry (" 205.210.42.167");
Console.WriteLine (entry.HostName); // albahari.com
SMTP
TCP
using (TcpClient client = new TcpClient()) {
client.Connect (" address", port);
using (NetworkStream n = client.GetStream()) {
// Read and write to the network stream...
TCP Server
TcpListener listener = new TcpListener (< ip address >, port);
listener.Start();
while (keepProcessingRequests)
using (TcpClient c = listener.AcceptTcpClient())
using (NetworkStream n = c.GetStream()) {
listener.Stop();
Server/Client interaction
Set up server, client connects, sends message, gets response back from server
POP3
Chapter 17 : Serialization
Chapter 18 : Assemblies
Manifest = XML file with info about the assembly
Strongly Name An Assembly
sn.exe -k MyKeyPair.snk Public/Private pair
Compile
csc.exe /keyfile:MyKeyPair.snk Program.cs
Delay Signing An Assembly (so private key does not get compromised)
sn -k MyKeyPair.snk
sn -p MyKeyPair.snk PublicKeyOnly.pk
or extract pk from dll
sn -e my.dll PublicKeyOnly.pk
csc /delaysign+ ...
Authenticode
Use to validate against a certificate
signtool (Visual Studio tool)
GAC
gacutil /i abc.dll
/u
Culture
CultureInfo.CurrentUICulture is OS current region in operation
Assembly
assembly myfile = Assembly.LoadFrom('path')

Hashing A File
byte[] hash;
using(stream fs = File.OpenRead('myfile.txt')
hash=MD5.Create().ComputeHash(fs)

Hashing A Password
byte[] password = System.Text.Encoding.UTF8.GetBytes('Pa$$w0rd')
byte[] hash = SHA256.Create().ComputeHash(password)
MD5 16 bytes
SHA1 20
SHA256 32
SHA512 64
MD5 is 20 times faster than SHA512
Salt adds random characters to the password
Cryptography - Symmetric
Rijndael (older)
Aes (fresh implementation of Rijndael)
Encrypt/Decrypt code
IV = salt = can be changed for every message

Getting A Random Key Or Salt
byte[] key = new byte [16];
byte[] iv = new byte [16];

RandomNumberGenerator rand = RandomNumberGenerator.Create();
rand.GetBytes (key); rand.GetBytes (iv);

Asymmetric Encryption
RSA
Encrypt
byte[] data = { 1, 2, 3, 4, 5 }; // This is what we're encrypting.
using (var rsa = new RSACryptoServiceProvider(2048)) {
byte[] encrypted = rsa.Encrypt (data, true);
byte[] decrypted = rsa.Decrypt (encrypted, true);
Note : generating a key pair takes a while eg 100ms so this is not done until Encrypt() method is called to allow for a public key to be inserted
Note : if we don't supply our own key then RSA will auto-generate one for us
Signing
Chapter 22 : Advanced Threading
Locking
Exclusive Locking (one thread access)
lock
Mutex
SpinLock
NonExclusive Locking (limit concurrency)
Semaphore (slim)
ReaderWriterLock(slim)
Signaling (block until signal)
ManualResetEvent(slim)
AutoResetEvent
CountdownEvent
Barrier
Lock and Monitor
Lock is shorthand for Monitor call
Monitor.Enter/Exit
Chapter 23 - Parallel Programming
speed read !!!!!!!!!!!!!!
PLINQ
just call LINQ query with .AsParallel()
var output =
from x in numbers.AsParallel()



Glossary
Accessibility Capping
class myClass{
public void DoThis(){}
The method will not be more visible than the class ie it will be invisible!
Assembly - Get Name Of Currently Running Assembly
string assemblyName = Assembly.GetExecutingAssembly().GetName()
Assembly - Get Public Key
string.Join("",Assembly.GetExecutingAssembly().GetName().GetPublicKey().Select(b=>b.ToString("X2")));
note X2 instructs the output to appear as a hexadecimal
Interfaces
All members implicitly abstract (abstract but not stated abstract)
Class can implement multiple interfaces
Interface members fully abstract ie methods have no code body for instance
Interface can have (abstract) methods, properties, events and indexers
Interface members are implicitly public (without being stated)
Null-conditional operator
?. Returns null if object is null
?[] returns null if array is null
int? length = customers?.Length; // null if customers is null
Customer first = customers?[0]; // null if customers is null

# output as hex
myString=>myString.ToString("X2")

# output as binary
txtFieldInBinary.Text = Convert.ToString(valueToDisplayAsBinary, 2);

can abstract away from the actual transport mechanism used, so providing one clean interface for developers to use
WCF endpoints listen for and transmit messages
WCF binding describes how to send the message
Binding contains transport mechanism, encoding, security




Csc /target:library produces dll
Char c = 'n'
String x = '\\\\server\\share'
Or x = @'\\server\share'

int x = default (int)
params int[] myParameterArrayInput can pass in an array of parameters when the program is called


Using {namespace }
Using static System.Windows.Visibility (Hidden)


Chapter 3 Types

Class modifiers are
- Public
- Internal
- Abstract
- Sealed
- Static
- Partial
- Unsafe

Inside class can have
- Method
- Properties
- Fields
- Finalizers
- Indexer
- Event


Public x
3. Upgrade async method return types to Task or Task<TResult> unless the methods are top level eg UI thread handlers
Formats : ATOM, JSON, XML
p*5>lorem

	Table 4 cols 8 rows and each col have 2 words in it
		
		table>tr*8>td*4>lorem2

			CLI : COMMON LANGUAGE INFRASTRUCTURE		BUILD

			CLR : COMMON LANGUAGE RUNTIME 			RUN

			VES : Virtual Execution (runtime) Environment

			CTS : COMMON TYPE STRUCTURE	define data types

			CLS COMMON LANGUAGE SPECIFICATION						

		==> COMPILE ==> CIL ==> RUN USING CLR RUNTIME

			MSIL => MICROSOFT INTERMEDIATE LANGUAGE

		ILSPY ==> OPEN UP AND LOOK AT SOURCE CODE OF ANY .EXE APPLICATION
			

	ASSEMBLY

		PACKAGE OF FILES PUT TOGETHER IN ONE UNIT

		ANDROID		.apk
		IOS		.app
		WINDOWS		.exe  .msi   .dll     .appx  (windows store apps)

		zip file containing all code and instructions for app to work
			IMAGES, CODE, ETC...

		BUILD AND RUN CODE YOU CAN CREATE 1) EXE 2) DLL

			EXE ==> STANDALONE ASSEMBLY; WORKS AS A SELF-CONTAINED UNIT

			DLL ==> BUILDING BLOCKS OF 'LIBRARIES' PART OF OS

			PRIVATE LIBRARY 
				When using this, any DLL files referenced have to be in the same local path as the .EXE 

			SHARED LIBRARY		GAC GLOBAL ASSEMBLY CACHE
			
				ONE PLACE WHERE ALL SHARED LIBARIES LIVE - IMPROVES EFFICIENCY BY HAVING SHARED LIBRARIES

			GAC GLOBAL ASSEMBLY CACHE : FOLDER CONTAINING SHARED ASSEMBLIES
			REQUIRES SN STRONG NAME WHICH CONSISTS OF :-
				1) PUBLIC/PRIVATE KEY PAIR TO 'SIGN' YOUR ASSEMBLY
				2) VERSION  1.0.0.0
				3) CULTURE  EN-GB
				4) NAME

		1. Give an item a STRONG NAME (give it a version and sign it)

			SN.EXE  (STRONG NAME TOOL)

		2. Install it into the GAC Global Shared Cache

			GACUTIL   MANAGE GAC 
			GACUTIL /I   INSTALL DLL INTO GAC
			GACUTIL /U   UNINSTALL

			Note : CARE!  Float, double etc only use BINARY APPROXIMATIONS TO REAL NUMBERS SO ROUNDING ERRORS CAN OCCUR IF YOU DON'T TAKE CARE.
			
			BETTER TO USE A TEST FOR SMALL DIFFERENCES EG IF (A-B) < 0.000001 THEN...
			
			
			

Casting From Parents To Children

	OK TO CAST FROM PARENTS TO CHILDREN AND VICE VERSA

		Parent p = new Child		NEW PARENT OBJECT       OK
		
		Parent p = new Parent()
		Child c = (Child)p		NEW CHILD OBJECT    	NOT OK : FORCE CAST
									TO DO THIS

	
IS

CAST : IF INVALID : THROW EXCEPTION

BEFORE YOU RUN A CAST YOU CAN TEST IF IT IS VALID TO RUN OR NOT

if (child is parent){				ARE THE TWO ITEMS RELATED?
	// PERFORM THE CAST : WILL WORK 
}

AS

SAFER TEST : RUN 

	Child c = Parent as child

			IF CAST INVALID ==> RETURN NULL SO TEST FOR NULL

	if (c!=null){
		SUCCESS
	}	

		
		
			

	
	
	
Value Type

Value Type : SMALL + FAST

	Data stored with item in memory

		int x = 7;

						stored in STACK FAST MEMORY

	COPY VALUE TYPE : NEW COPY IS INDEPENDENT
		int x = 7;
		int y = x;		y, x unrelated

	STRUCT	
		MINI CLASS TO HOLD TRIVIAL DATA 

			EXAMPLE : POINTS ON A GRID

			public struct Point{
				public int x,y
			}

			Point P1 = new Point(0,0)
			Point P2 = new Point(5,5)

	
	
	

	
Reference Type

			STORED IN SLOWER MEMORY 'HEAP'

			LARGER STRUCTURE

				ARRAY : MAY HAVE 1000000 ITEMS IN IT!!!
				CLASS 
				QUEUE
				STACK

			STORED IN FIXED MEMORY LOCATIONS IN RAM

				INITIALISE : CREATE AND ALLOCATE SPACE FOR ITEM IN RAM		
				
				REACH DATA : USE MEMORY ADDRESSES (THINK 'PIGEON HOLES')

			COPY : ONLY CREATE NEW SHORTCUT TO SAME ITEM

				int[] array1 = {1,2,3}     ((add literal values))

					shortcut to actual stored in HEAP

				int[] array2 = array1
					
					array2 shortcut points to SAME ITEM

				IF NOW CHANGE DATA ITEMS IN ARRAY

						{1,2,300}

					BOTH ARRAYS SHOW THESE VALUES
					
		

Summary : Value Type And Reference Type

	
	
VALUE TYPE

	COPY STACK ITEM : CREATE TWO SEPARATE INSTANCES

		A  =>  B		B IS COPY       COMPLETELY SEPARATE ITEM

REFERENCE TYPE

	HEAP ITEM : COPY ONLY CREATE NEW SHORTCUT TO SAME ITEM

		ARRAY1
			COPY ==> ARRAY2  ======> STILL POINTS TO SAME ARRAY ON HEAP

Nullable Type

	int? x = null;   	nullable type

OPERATORS

	UNARY  : ONLY ONE INPUT

	  //unary : one input only
	  // x++ and ++x
	  int x = 0;
	  Console.WriteLine(x);
	  x++;
	  Console.WriteLine(x);
	  ++x;
	  Console.WriteLine(x);
	  x--;
	  Console.WriteLine(x);
	  --x;
	  Console.WriteLine(x);

	  x = 0;
	  int y = 0;
	  Console.WriteLine("x is {0} and y is {1}", x, y);
	  y = ++x;  // increment x FIRST then assign value to y
	  Console.WriteLine("x is {0} and y is {1}",x,y);

	  int z = 0;
	  x = 0;
	  Console.WriteLine("x is {0} and z is {1}", x, z);
	  z = x++;   // z = x (zero), THEN x increments to 1
	  Console.WriteLine("x is {0} and z is {1}", x, z);

	  // Exam
	  x = 12;
	  y = x++;
	  z = ++y;
	  // WHAT ARE FINAL VALUES?
	  // Y  = 12 THEN INCREMENT X TO 13
	  // Z = ((INCREMENT Y TO 13).    
	  // FINAL  X=Y=Z=13

	  // Exam
	  x = 12;
	  y = x++;
	  z = ++x;
	  // WHAT ARE FINAL VALUES?
	  // Y  = 12 THEN INCREMENT X TO 13
	  // Z = ((increment x (13) up to 14))  
	  // FINAL  x=14   y=12  z=14

	!		NOT
					
				Bool b = true

				Bool c = !b			c ==> false				

Binary Operators : 2 inputs

	// Binary a+b  a-b a*b  a/b
	// Modulus %  is REMAINDER AFTER DIVISION

	int x = 100;
	int y = 100 / 3;
	Console.WriteLine(y); // 33 TRUNCATE 0.3333 IE LOSE DATA

		use float/double instead if doing division

	Modulus operator % = Remainder On Division

		int z = 100 % 3;
		Console.WriteLine(z);

		int zz = 100 % 16;
		Console.WriteLine(zz);

And/Or/XOR

	&&		AND
	&
	
	||		OR
	|

		TRUTH TABLE

			AND

				TRUE 	AND 	TRUE		==> 	TRUE
				1	&&	1		==>	1
				
								TRUE IF BOTH INPUTS ARE TRUE

				1	&&	0		0
				0	&&	0		0

			OR
				TRUE IF ONE INPUT IS TRUE

				1	||	1		1
				1	||	0		1
				0	||	0		0

							
			XOR	TRUE IF ONLY ONE IS TRUE
				

Ternary Operator (3 inputs)

	//  IF   X      THEN      Y         ELSE       Z
	//       X        ?       Y          :         Z

	int xx = 10;
	string output = (xx<50) ? "low" : "high" ;
	//                true     low    

Bit Shift - Multiply/Divide By 2

	int c = 1;
	Console.WriteLine(c << 1);     // x2
	Console.WriteLine(c << 2);     // x4
	Console.WriteLine(c << 3);     // x8

	int d = 32;
	Console.WriteLine();

	Console.WriteLine(d);
	Console.WriteLine(d >> 1);     // /2
	Console.WriteLine(d >> 2);     // /4
	Console.WriteLine(d >> 3);     // /8

  Think decimal : 1 > 10 > 1000 just by adding a zero

Conditional Statements

If .. Else If .. Else

	if(){}
	else if(){}
	else {}

Loop

	//FOR - FIXED NUMBER OF LOOPS	
    int i=0;
    for (i=0; i<10; i++)
    {
        Console.WriteLine(i);
    }

	//WHILE
    int j = 0;
    while (j < 10)
    {
        Console.WriteLine(j);
        j++;
    }

    MAY NEVER EXECUTE IF initial condition fails

	//DO..WHILE EXECUTE MINIMUM ONE LOOP 
    int u = 0;
    do
    {
        Console.WriteLine(u);
        u++;
    }
    while (u < 10);

Switch

		

	Console.WriteLine("Enter a number (1-3)");
  string inputData = Console.ReadLine();
  int inputNum = int.Parse(inputData);
  Console.WriteLine(inputNum);

  switch (inputNum)
  {
    case 1:
        Console.WriteLine("one");
        break;
    case 2:
        Console.WriteLine("two");
        break;
    case 3:
        Console.WriteLine("three");
        break;
    default:
        Console.WriteLine("out of bounds");
        return;
	}

Recursive (Iterative) Loop

	RECURSION MEANS TO CALL FUNCTIONA FROM WITHIN FUNCTIONA

	Call a function which, within it's own code, also puts in a call to the
	very same function

		Factorial example in book

		7! = 7x6x5x4x3x2x1

		Create a loop which starts at 7, then 6, etc, then hits 1 and
		bounces back up the loop to give a total answer

	

Exception Handling

	ERROR

		PROGRAMMER MAKES MISTAKE IN CODE ==> GIVES WRONG ANSWER
		EG WITH MONEY AND ROUNDING ERRORS 25.345 ==> 25.34 SHOULD BE 25.35

	EXCEPTION

		COMPUTER CRASHES!!!

		HANDLED EXCEPTION		PROGRAMMER 'CATCHES' ERROR AND
						'GRACEFULLY' CODES WHAT TO DO

		UNHANDLED EXCEPTION		COMPUTER WILL CRASH

Try..Catch..Finally

	TRY..		code which can crash

	CATCH...	any errors

		SPECIFIC ERROR FIRST  EG divideByZeroException

			DivideByZeroException	/0
			FormatException			WRONG DATA TYPE
			OverflowException		TOO BIG
			FileNotFoundException	FILE NOT FOUND
			IndexOutOfRangeException  ARRAY INDEX INCORRECT
			OUTOFMEMORYEXCEPTION
			STACKOVERFLOWEXCEPTION
			INVALIDOPERATIONEXCEPTION
			ARITHMETICEXCEPTION

			e.getType	==> TYPE OF EXCEPTION

		GENERAL 		 any other exception
	
	FINALLY  "Clean-up code"

		OPTIONAL
	
		Always execute ((EXCEPT IF STACK OVERFLOW IE
							NO MORE MEMORY TO RUN ANYTHING!))
			eg always close database

Throw a manual exception

	THROW (MANUALLY) AN EXCEPTION

	try{
		throw new ArgumentException("abc","def!");
	}

Throw an exception up to next level

	try{
		try{
		}
		Catch{
			Throw;   ON IT'S OWN IT WILL RE-THROW THE SAME EXCEPTION
		}
	}
	catch{}

	

	

OOP - Chapter 2 - Object Oriented Programming

Scripting language eg Javascript is more 'interpreted' which means

	Run live, line by line

	Code run TOP TO BOTTOM in LINEAR FASHION	

Compiled language eg Java, C# ==> build code first (Compiling) then Execute (Run)

OOP FOCUSES ON HANDLING EVENTS WHICH HAPPEN TO OBJECT

	Focus on INDIVIDUAL OBJECTS eg Screen Objects or Data Objects and

		HANDLE EVENTS ((often user-initiated eg 'click'))

		RUN 'METHOD'   ((( THINK 'FUNCTION!')))

		ALTER PROPERTIES OF OUR OBJECTS

	SCREEN => FORM  => TEXTBOX + BUTTON

		complete form => submit button

		validation

		submit form to database

Class x

	field1    private
	public property {get;set;}
	
	public double length{
		get{return length;}             // ACCESSOR METHOD
		set{if(value>0)length=value;}
	}

	
	Public x (int field1){
	   this.field1=field1
	}		

	Method

		void doThis(){
		// CODE THIS METHOD
		}

		public void grow (int increment)

			void
				METHOD WILL 'RETURN' IE OUTPUT WHEN DONE
											
					void ==> return nothing
					int, string, other object

					public int grow(int increment)

						METHOD NOW RETURNS AN INTEGER BACK
						TO THE CALLING CODE

			(int increment)  Parameter (expected INPUT WHEN RUN METHOD)

Inheritance

Base Class : Parent

	Derived Class : Child

		
	class Mammal{}

	class Dog : Mammal{}		Dog INHERIT FROM Mammal

Example

  class Mammal
  {
      public int height;
  }

  class Dog : Mammal
  {
      // has a height already  (inherit height)
  }

  Mammal m = new Mammal();
  m.height = 50;
  Dog Max = new Dog();
  Max.height = 60;

Access Modifiers

PUBLIC		visible from anywhere

PRIVATE		visible only INSIDE THIS CLASS (default if you don't provide an access modifier)

PROTECTED	visible from CLASS AND ALL CHILDREN OF CLASS

INTERNAL	visible from ANYWHERE IN FINAL COMPILED PACKAGE
		WHEN READY FOR DISTRIBUTION

			(( IN THE 'ASSEMBLY' ))

		Anywhere within our APP

			Windows ==> .EXE 	.DLL
			IOS	==> .IPA
			ANDROID	==> .APK

Encapsulation

using 'private' keyword we can HIDE CODE INSIDE OUR CLASS AND THE OUTSIDE
	WORLD HAS NO ACCESS TO IT

	think complex car engine ==> DRIVER KNOWS NOTHING OF ENGINE'S
					COMPLEXITY

			

Instantiate

CREATE A NEW "INSTANCE" OF AN OBJECT

	Dog Fred = new Dog()          CREATE 'INSTANCE' OF DOG CALLED
						FRED

	Instance => Running Process ((think CPU in Task Manager))

		

Constructor

	Without a constructor we have to manually allocate values

	class myClass{

		public string x;
		
		public myClass( string x){
			this.x=x;			
		}
					
		public myClass(){}           BLANK DEFAULT CONSTRUCTOR IF YOU DO NOTHING

	}

OOP Summary so far

Class		Template to CREATE NEW OBJECT

Base Class	Parent class

Derived Class	Child class

Base (Parent) and Derived (Child) Classes

	Class Parent{
		public double a;       
	}
	
	
	Class Child:Parent{
		public double b;   // NOT IN A BUT IN CHILD B ONLY
	}
	

Constructor	HAS SAME NAME AS CLASS

		class Animal{
			private int age;			DECLARE FIELD
			public Animal(int age){
				this.age=age
			}
		}

			
			
			
			
Instantiate	CREATE NEW OBJECT USING A CLASS AS TEMPLATE
	
	Animal myNewAnimal01  = new Animal(5);
	Animal myNewAnimal02  = new Animal(6);
	Animal myNewAnimal03  = new Animal(7);

	       =============
		name of object = INSTANCE OF OBJECT

	NOTE : can get away with 
	
		Var object = new Class();
		

Static Fields

STATIC FIELDS ARE ATTACHED TO THE CLASS ITSELF 

Read data using   ClassName.StaticFieldName

		  HGV.NumWheels = 16;

					HGV5501.NumWheels  // INVALID

						
Method

Parameters    void myMethod(a,b,c)

Optional      void myMethod(a,b=1,c=2)

				b,c OPTIONAL with DEFAULT VALUE

			ORDER MATTERS (a,b,c) in that order

Named Parameters  WHEN CALLING METHOD

		var x myMethod(c:5,b:6,a:7)

Sealed Class

		HAS NO CHILDREN!!!

		Can still instantiate!!!

	Created PERFECT CAR ENGINE ==> SEALED ENGINE CLASS ==> NO ONE CAN DERIVE A NEW
						SUB-CLASS AND ALTER OUR ENGINE IN ANY WAY	

    sealed class perfectEngine
    {

    }

	**** INVALID CODE *****
    class improvement : perfectEngine
    {

    }

Polymorphism

POLY = MANY 
MORPH = TYPE

PARENT : DECLARE A METHOD AS 'VIRTUAL'

CHILD  : DELCARE SAME METHOD (WITH DIFFERENT CODE) AS OVERRIDE

Parent
	virtual Method01{ ..CODE.. }

Child
	override Method01{....DIFFERENT CODE...}	

				

Polymorphism Example

  class Polygon  {
      public virtual void getArea() {
          Console.WriteLine("You can't get the area of a polygon");
      }
  }

  class Rectangle : Polygon    {
      public int length;
      public int width;
      public override void getArea()
      {
          Console.WriteLine("Area is length x breadth");
      }
  }
  class Circle : Polygon   {
      public override void getArea (){
          Console.WriteLine("Area is PI x radius squared");
      }
  }

  Polygon p = new Polygon();
  p.getArea();
  Rectangle r = new Rectangle();
  r.getArea();
  Circle c = new Circle();
  c.getArea();    

  Polymorphism Example 2

  class Program
  {
      static void Main(string[] args)
      {
          Square myNewSquare = new Square(10, 15);
          Console.WriteLine(myNewSquare.getArea());
          Circle myNewCircle = new Circle(5);
          Console.WriteLine(myNewCircle.getArea());
      }
  }

  class Square : Polygon
  {
      private double length;
      private double breadth;
      public override double getArea() { return length * breadth; }
      // CONSTRUCTOR
      public Square ( double length, double breadth)
      {
          this.length = length;
          this.breadth = breadth;
      }
  }

  class Circle : Polygon
  {
      private double radius;
      public double getArea() { return Math.PI * radius * radius; }
      //CONSTRUCTOR
      public Circle(double radius)
      {
          this.radius = radius;
      }
  }

 
Polymorphism - Override keyword

 Polymorphism with OVERRIDE

	Parent : VIRTUAL
	Child  : OVERRIDE 

  IN THIS SETUP THE CHILD METHOD OVERRIDES THE PARENT METHOD

			
	Completely overrides the parent method even when an instance
	is cast back to the parent object
	
	Parent parentObject = (Parent)childObject;
	
		when call the method now it will still run the childObject version
	
	
	base.myMethod(); will call the parent's implementation of that method if required
	
	
					
Instantiation : Casting As Child Or Parent

			
			
	Parent objects have access to parent methods
	
	Child objects have access to parent and child methods
	
		Can 'cast' a child as a parent and then the object only
		has access to methods of parent, not those of the child
		
		Parent p = (Parent)myChildObject
	
	HIDING METHODS
	
		Methods in Parent are hidden by Child methods using
		the 'new' keyword when instantiating.
		
		
		New and Override keywords

		https://msdn.microsoft.com/en-us/library/ms173153.aspx
		
		Casting the child to the parent reveals again
		
		Parent parentObject = (Parent)childObject;

		

Polymorphism - New keyword

    POLYMORPHISM with NEW

        Parent : method declared normally (no VIRTUAL KEYWORD)
        Child  : NEW can be used to HIDE the parent implementation 

        		Class Parent {
            public int x;
        		public void Method01(){}
        	}

        		Class Child:Parent{
            public new int x;                                NEW IE HIDES
        		public new void Method01(){}                     NEW IE HIDES
        	}

   Note : Polymorphism : when in CHILD method can even call the BASE (PARENT) IMPLEMENTATION OF THE METHOD BY THE FOLLOWING

   		Class Parent{

   		  public void virtual Method01(){}
   	}

   	Class Child{
   		public override void Method01(){
   			base.Method01();                    // This calls the BASE implementation of the method!!!
   	}
   }

Polymorphism With New Keyword

	PARENT 
	
		        public void Speak()
		        {
		            Console.WriteLine("{0} is speaking as a Dog!!!", Name);
		        }
		
			==> COMPILER WILL WARN

	CHILD : NEW   
	
	        public new void Speak()
	        {
	            Console.WriteLine("{0} is speaking as a Dog!!!", Name);
	        }
	
	
			===> this is deliberate

			
			

			
			
			

Abstract Class

	ABSTRACT CLASS

		CANNOT BE INSTANTIATED!!!

		MUST HAVE DERIVED CLASS (CHILD CLASS) WHICH CAN BE INSTANTIATED

		
	Abstract class Theoretical{}

			CAN'T NOW DO THIS 
			Theoretical myTheoretical = new Theoretical()

	class Real : Theoretical{}
			Real  myRealObject = new Real()             OK

Example

		Mammal class is a 'generic' class ==> NO INSTANCES OF MAMMAL EXIST

		Derive Species from Mammal class

			Dog Species  ==> CREATE REAL DOG

    abstract class Mammal  { }

    class Dog : Mammal { }

    Mammal mammal01 = new Mammal();   FORBIDDEN
    Dog Dan = new Dog();

Abstract Method

ABSTRACT MAMMAL CLASS

	abstract class Mammal {}              // DECLARE ABSTRACT CLASS

	abstract void grow(); 	// ABSTRACT METHOD : no code in it!!!			

	DERIVED DOG SPECIES CLASS

		void override grow(){ // CODE MUST EXIST}

		==> CREATE DOG	

Parent : Abstract myMethod01();      // NO CODE

Child  : Override myMethod01(){ // CODE }

Data Structures

Array

	int[] Array01 = { 1, 2, 3, 4, 5 };    // LITERAL VALUES 
	int[] Array02 = new int[10];      // BLANK ARRAY, 10 SPACES

	// first item index [0]
	Array02[0] = 56;
	Array02[1] = 67;
	Array02[2] = 78;
	Array02[9] = 999;

	foreach (int item in Array02)
	{
	    Console.WriteLine(item);
	}

	// LENGTH
	Console.WriteLine("length is " + Array02.Length);

	// LAST ITEM
	Console.WriteLine("last item is " + Array02[Array02.Length-1]);

1D : List

	int[] myArray = new int[5];
	int[] myArray = {1,2,3};

		
2D Array : Grid

	int[,] myGrid = new int[10,10]          10 by 10 grid

   [ROWS,COLUMNS]

	3RD ROW HAS INDEX 2   [2,X]
	4TH COLUMN HAVE INDEX 3  [2,3]

	2D literal

		int[,] numbers = new int[,]
		
		{
			{ 11, 7, 50, 45, 27  },
			{ 18, 35, 47, 24, 12 },
			{ 89, 67, 84, 34, 24 },
			{ 67, 32, 79, 65, 10 }
		};

	Note : 

		Arrays are 

			1) VERY FAST BECAUSE A FIXED AMOUNT OF MEMORY IS ALLOCATED
				FOR THEM IN RAM.  

			2) UNSUITABLE FOR RESIZING.  

	array.Length         total items in array eg 2x2x2=8 items

	array.GetLength(i)   get length of row i  (2D array)

	Searching

		pos = Array.IndexOf(myArray, "findme");
		if(pos>-1){"found at position " + pos}

		
								
	for		OVER ARRAY

		for (var i=0;i<myArray.length;i++){
			console.log('myArray[' + i + '] = ' + myArray[i]);
		}
		
		
		
		
	foreach 	OVER ARRAY
	

		myObject.keys(obj).forEach(function(key,index){
		key = field
		index=0,1,2 
		myObject.key = value 
	}

			

		

	continue				FINISH THIS LOOP AND START NEXT
	break

for .. in  over  JSON-LIKE STRUCTURE

		var x = {
			name:"john",
			age:22
		}

			name is a KEY which holds value "john"
			age			          22

		var myObject = {
			field:'value',
			field2:'value2'	
		}
		
		for (var property in myObject){
			if(myObject.hasOwnProperty)
			console.log(property + ' = ' + myObject[property]);
		}
		

Array

SIZE FIXED : IMMUTABLE
ACCESS ITEM BY INDEX
DATA TYPE SAME : 

Generics

<T> Any data type

Queue / Stack / List / LinkedList - Overview Summary

	VARIABLE SIZE STRUCTURES

	DISADVANTAGE : SLOW TO READ ALL DATA OUT OF THE STRUCTURES

	ALSO 

		QUEUE : think of polite bus stop queue : BUS ARRIVES ==> only
			person who can get on bus is FIRST PERSON IN QUEUE.

			QUEUE : ONLY ACCESSIBLE MEMBER IS FIRST ITEM

			PRINT QUEUE, EMAIL QUEUE

		STACK : Think PACK OF CARDS : ONLY PLAYABLE CARD IS TOP CARD IN PACK

			
		LIST is like an array ie can be indexed, but also can add/remove items at start, middle and end

			SO EASY TO ADD/REMOVE LINKS AND BREAK/REMAKE THE CHAIN OF LINKS

			FAST TO ADD/REMOVE

		LINKEDLIST

			Cannot be indexed

			Each item contains a pointer to the next item in the linkedlist

			Very fast to add/remove items as just adjust the pointer

		DOUBLY LINKED LIST 

			Same as LINKEDLIST but has two pointers - one going forward and one going backward to previous item

		CIRCULAR LIST HAS TAIL JOINED TO HEAD

		

QUEUE
	

	FIFO  FIRST IN FIRST OUT

	PRINT JOBS SENT TO PRINTER WAIT IN A QUEUE
	EMAILS SENT TO SERVER PROCESSED IN TURN

	ENQUEUE ==> ADD TO QUEUE

				((NEW PEOPLE GO TO END OF QUEUE))

	DEQUEUE ==> REMOVE FROM QUEUE ==> POLITE BUS STOP ==> TAKE FIRST ITEM
				FROM HEAD OF QUEUE

				1,2,3,4,5            
						ENQUEUE ADD AFTER 5
						DEQUEUE REMOVE ITEM 1
	queue.count
	queue.contains			
	
		queue.Contains("findme");
		
		
		
		
	queue.peek			LOOK AT FIRST ITEM

Example : Queue

  static void Main(string[] args)
  {
      Queue<int> Queue01 = new Queue<int>();

      Queue01.Enqueue(5);
      Queue01.Enqueue(10);
      Queue01.Enqueue(15);
      Queue01.Enqueue(20);

      Console.WriteLine("=========================");
      foreach(int item in Queue01)
      {
          Console.WriteLine(item);
      }

      // FIFO  first in, first out
      Queue01.Dequeue();

      Console.WriteLine("=========================");
      foreach (int item in Queue01)
      {
          Console.WriteLine(item);
      }

      // FIFO  first in, first out
      Queue01.Dequeue();

      Console.WriteLine("=========================");
      foreach (int item in Queue01)
      {
          Console.WriteLine(item);
      }

      Console.WriteLine("==========peek===============");
      Console.WriteLine(Queue01.Peek());

      Console.WriteLine("Is 20 Present?" + Queue01.Contains(20));

Stack 

	AS BEFORE BUT

	POP()		OFF TOP OF STACK
	PUSH()		ONTO TOP OF STACK
	PEEK()
	CONTAINS()

	LIFO LAST IN FIRST OUT

	mystack.pop	remove
	mystack.push	add
	       .peek    look at top item
	       .contains

List

	ONE WAY LIST

	List myList = new List();
	myList.Add("first");
	myList.Add("second");
	myList.Remove("first");  // REMOVES FIRST MATCH!!!

	myList.first.value
	myList.last.value

LINKED LIST

	LOOSELY COUPLED GROUP OF ITEMS.

	LIST IS SIMPLY A 'SHORTCUT' TO MEMORY LOCATION OF EACH ITEM

	EASY TO BREAK OPEN A LINK AND ADD/REMOVE ITEMS ==> JUST CHANGING SHORTCUTS
			POINTING TO DIFFERENT ITEMS 			

	QUICK TO ADD/REMOVE

	SLOW TO SEARCH LIST

	1			100
	=========================>
	<========================

	DOUBLY-LINKED LIST GOING BOTH WAYS

	CIRCULAR LIST : JOIN TWO ENDS SO THERE IS NO START/END

			

	LinkedList<string> myList = new LinkedList<string>();

	myList.add
	myList.remove
	myList.find

ArrayList

Permits list of ANY DATA TYPE

Events

Event Summary

See Event_03

1. DELEGATE 

	public delegate void myDelegate();
	
2. EVENT

	public event myDelegate myEvent;
	
3. METHODS

	myEvent += myMethod01;
	myEvent += myMethod02;
	myEvent += myMethod03;
	
	Note : myEvent is also called an Event Handler 
	which handles the events by triggering the methods

4. TRIGGER THE EVENT	

	if (myEvent != null){
		myEvent();	
	}

	OOP Object Oriented Programming

	OBJECTS : EVENT HAPPEN TO THEM ((NORMALLY USER INITIATED))

					((COULD BE EG DATA HAS ARRIVED))

							ondata event
							onclick event

	User clicks a button 

		EventHandler now runs

		EventHandler : must attach methods

			myEventHandler += myMethod01
					
						+=  means add to existing

			myEventHandler += myMethod02

		NOW WHEN USER CLICKS IT WILL CALL HANDLER WHICH CALL TWO METHODS

			CLICK ==> RUN HANDLER => METHOD01 THEN METHOD02

Method Signature
	

	Which methods can be added???

		restrict by SIGNATURE

			public void myMethod01(int x, string y)

			RETURN TYPE VOID
			INPUT PARAMETERS : one int + one string

Delegates

	we want all methods to match this pattern

	CREATE NEW OBJECT CALLED A 'DELEGATE'

			public delegate void myDelegate(int x, string y)

Event

			
  Create Event Handler but restrict with the delegate

			public event myDelegate myEventHandler
			
				ALL METHODS THAT RUN INSIDE THIS HANDLER
				MUST BE RESTRICTED WITH THE FOLLOWING RESTRICTIONS
				
					1) void return type
					2) input parameters (int x, string y)

	
	Summary

		1.	DELEGATE : fix 'signature' eg void myDelegate(int x, string y)
		2.	EVENT     public event myDelegate myEventHandler
		3.	ADD METHODS TO RUN WHEN EVENT FIRES
					            myEventHandler += myMethod01
		4.	USER FIRE EVENT : myEventHandler ==> fire myMethod01 which run

	EVENT PUBLISHER		notifies event happens  (button)

	EVENT SUBSCRIBER	responds when event happens  

	Subscribing to events - Slide 11

Interface

	Interface is like a CLASS but CANNOT INHERIT FROM IT

	Instead we IMPLEMENT (USE) an interface
		
	Start with 'I'
		

	Class : inherit use code

		Class Dog : Mammal          : Mammal means 'inherit from parent base
							class all features of mammal'

			
	Interface : can have code that you want to BORROW OR USE TEMPORARILY

		Class myClass:Icomparable  

    	
		1) can IMPLEMENT from MORE THAN ONE CLASS

			Class myClass:I1,I2,I3     ==> IMPLEMENT 3 INTERFACES			

		2) Interfaces ARE ABSTRACT AND WE WRITE THE CODE TO DEFINE THEIR BEHAVIOUR

		IComparable which can COMPARE TWO OBJECTS

			((I by convention START ALL STRUCTURES CALLED INTERFACES))
			
				IComparable {
					methodx(){}
					CompareTo(){}
				}

		Class x : Ixxxxxx

		Class Dog : IComparable

			use methodx() as part of our Dog class
			    CompareTo() method also in Dog class

	Book Example

		CompareTo

			Create two rectangles 

			Compare size

				0 IF SAME
				1 IF BIGGER
				-1 IF SMALLER

			EXAM : SPOT THIS CODE (Page 57)

Interface Summary

	Public
	
	Abstract with abstract methods
	
	Contain only signatures of method/delegate/event

	Describe a group of behaviours
	
	Contain method/properties/indexer/event
	
	Cannot contain fields
	
	Class can inherit more than one interface
	
	interface Ix{
		int y(string z);
	}
	
	Class myClass:Ix{
		int y(string z){//code}
	}
	

Is-A and Has-A

IMPLEMENTATION USES 'HAS-A'   

	EG EMPLOYEE 'HAS-A' METHOD DOING X WHICH IT GOT FROM IMPLEMENTED INTERFACE

		
		

Chapter 3 - ALM - Application Lifecycle Management

BUILD APP AS A TEAM : STAGES

1. Analysis : Gather Info

2. Design     Build in model format

	UML Unified Modelling Language

		SHOW CLASSES/METHODS and RELATIONSHIPS

	ERD Entity Relationship Diagram

		Images representing code

		Oblong Rectangle in 3D : Field 
		Spanner = FIELD???
		BLUE BLOCK = MEANS FIELD
		CUBE  = METHOD
		Dot connected to larger dot = INTERFACE 

		See https://msdn.microsoft.com/en-us/library/y47ychfe.aspx for further info

3. Build

4. Test

5. Release then Maintain

WATERFALL : SLOW, INDEPENDENT STEPS AS OUTPUT OF EACH STEP FEEDS INTO EACH STEP

AGILE 

SCRUM

	TEAM SELF-ORGANISES; NO LEADER
	
	SPRINT PLAN
	
	SCRUM MASTER
	PRODUCT OWNER
	
	BACKLOG
	
	BURNDOWN CHART : WORK REMAINING

Testing

	Black Box	ONLY INSPECT INPUTS AND OUTPUTS  (IGNORE DETAIL OF CODE
				WITHIN)

	White Box	Know code inside : trying to test and break this code

	Unit		TEST ONE SINGLE BLOCK OF CODE

	System 		PUT CODE TOGETHER AND TEST

	Integration	Integrate with OTHER SYSTEMS

	Regression	When fix fault ==> have you broken anything else?? Test fully

	Alpha		

		FIRST EARLY RELEASE; BY INVITATION ONLY EG JOURNALIST, 
		AUTHORS, WRITE API..

		1) MEDIA EG JOURNALIST/AUTHOR EARLY LOOK
		2) PLUG-IN/ADD-ON/3RD PARTY BUILDERS : TIME TO 
				LEARN YOUR PRODUCT

	Beta		

		Free, just before your main release date ==> release for 
		free to world ==> everyone can download, use, GIVE FEEDBACK
		ON ANY BUGS/ISSUES SO YOU CAN FIX THEM BEFORE LIVE DATE
		
		COST$0
		CUSTOMERS:GET RELEASE FOR $0

	User Acceptance

	Functional

	Non-functional

Sorting - Slow Bubblesort

www.sorting-algorithms.com

SWAPS ITEMS

10
6		swap 10, 6  then go to next item
3
4
2
1
7
8

	INEFFICIENT

Bubblesort Example

			6
			22
			17
			8
			14

			GOAL : SORT IN ORDER

			6 IS IT LESS THAN 22?   YES ==> STAY PUT

			22 IS IT LESS THAN 17?   NO ==> SWAP

			6
			17
			22
			8
			14

			COMPARE 22 WITH 8  ==> SWAP

			6
			17
			8
			22
			14

		VERY SLOW AND INEFFICIENT : WITH 1000 ITEMS MIGHT NEED 999 PASSES TO SUCCEEED

Sorting - QuickSort

VERY FAST 			

	SPLITS ARRAY IN TWO, THEN EACH PART IN TWO, AND AGAIN AND AGAIN 

	5 6 9 3 2 6 8 9 10

	create split  (5)

	smaller?  to left  5 3 2

	larger ?  to right 6 9 6 8 9 10

Chapter 4 - Web Technologies

5 TYPES OF TECHNOLOGY

	HTTP

	HMTL : used to display items eg TABLE, IMG

	CSS : used to style items

	Javascript : used to code out EVENTS eg form submit

	ASPX

HTML and HTTP

	Demo Of HTML : github philanderson888  ==> showcase ==> 

	HTTP : TRANSPORT PROTOCOL WHICH SEND WEB DATA ROUND WORLD

		facebook.com ==> send data to you using HTTP/HTTPS (encrypted)

		headers : meta data about the page
		body : content of the page

		URL

		Client : Request for page (URL) sent to server
		
		Server : Renders the page and sends it back

HTML

	<!DOCTYPE html>		this is HTML5 web page

	<head>
		<meta> 	info about page
	<body>
		<div>   page content

		<a href="www.site.com">Click here</a>		hyperlink 

	
	Tag
	
	Img
	
	DOM Document Object Model
		Hierarchical display of items Window=>Document>HTML>Body>

	Form
		Input type="hidden"
		Submit

	
CSS
 : put styling on page

		INTERNAL CSS (ON PAGE)

		<style>
			// CSS GOES HERE
			p{
				background-color:red
			}
			h1{
				font-size: 30px;     px ==> pixels 
			}

		</style>

		
		EXTERNAL CSS  ((css in external file))

		<link href="style.css" rel="stylesheet">

		INLINE CSS <p style="color:blue">text</p>

	Colour : can use # then get color

	
Javascript

		INTERNAL

			<html>
			<script>
			          var x = 1;       // JAVASCRIPT			
			</script>

		EXTERNAL

			<script src="myscript.js"></script>

		INLINE

			<button onclick="alert('hello')">Click here </button>

	

JQuery

ASP/ASPX

Microsoft introduced their OWN WAY of building websites

ASP	(old) Active Server Pages
ASPX (new) XML 

FIRST LINE <%script code%>	

  autoeventwireup=true  path to c# file

	ASPX PAGE IS 'WIRED UP' TO C# PAGE

	DEFAULT.ASPX		      ASPX PAGE
		DEFAULT.ASPX.CS       C# 

		<%                 %>		script info at header of ASPX page

		AutoEventWireup="true"
		CodeBehind="Page.cs"

		Default.aspx.cs		==> PURE C# CODE WHICH LIVES BEHIND AND SUPPORTS
						WEB PAGE

	
Web.Config 
	XML to modify live eg Database Connection String

ASPX		1) HTML CODE
				2) ASPX CODE : TALK TO SERVER, EXECUTE ON SERVER
					AND GENERATE HTML/CSS/JAVASCRIPT CODE

<asp:... runat="server">

	==> parse and execute on the server first ==> generate pure HTML as output

	<div>...
	</div>

</aspx>

	ASPX   PAGE
	ASCX   CUSTOM BUILT USER CODE
	ASMX   WEB SERVICE

Default.aspx	==>  first page    (index.html)
	
	APP_DATA FOLDER

		STORE DATABASE HERE

ASPX Response

Response.Redirect("abc.aspx");

QueryString

WWW.DOMAIN.COM?A=1&B=2&C=3

	REQUEST.QUERYSTRING["A"]

ASPX Form Submission Using Query String

	Form submission
	
		PASS DATA BETWEEN PAGES BY
		
			SOURCE PAGE : <asp ID="x">
			SOURCE PAGE : RESPONSE.REDIRECT
			RECEIVING PAGE : Request.QueryString["x"]=...
	
		<form id="x" runat="server>
			<asp:textbox ID="y" runat..>
			<asp:Button ID="z" runat.. Text="Click" onclick="doThis_click()">
		</form>
		
		c# doThis_click(){
			Response.Redirect("abc.aspx?Field1=x&Field2=y");
		}
		
		on abc.aspx
		
		c# test for Request.QueryString["y"] != null{
			Response.Write("text"+ Request.QueryString["y"]);
		}
			
			this will output to screen

	Lab Summary : Response Redirect With Query String   
	1) Edit Master menus to add 2 new pages 
	2) First Page : add a textfield and a button 
	3) Button code : create a string "page2.aspx?q=" + textbox1.text.  Then response.redirect(redirectString).   
	4) On page2 add <% = datetime.now.to… %> and also <% = request.querystring['q'] %>

ASP Code Injection at ContentPlaceHolder

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <h2><%: Title %>.</h2>
    <h3>Your application description page.</h3>
    <p>Use this area to provide additional information.</p>
</asp:Content>

		Means inject the code at the point 'ContentPlaceHolderID="MainContent'

Page Life Cycle

Page request
	Initialize
	Page Load into memory on server
	Postback - enables data to be saved between pages
	Prerender
	Render
	Unload (from server memory) while sent to client

F5 save compile and run ==> view => output 

	Page_PreInit
	Page_init
	          initComplete
	Page_Load
	          LoadComplete
	Page_Prerender
	Page_SaveStateComplete
	Page_Unload
	
	
	protected void Page_PreInit(object sender, EventArgs e)
	{
	    Debug.WriteLine("Page_PreInit");
	}
	protected void Page_init(object sender, EventArgs e)
	{
	    Debug.WriteLine("Page_init");
	}
	protected void Page_initComplete(object sender, EventArgs e)
	{
	    Debug.WriteLine("Page_initComplete");
	}
	protected void Page_Load(object sender, EventArgs e)
	{
	    Debug.WriteLine("Page_Load");
	}
	protected void Page_LoadComplete(object sender, EventArgs e)
	{
	    Debug.WriteLine("Page_LoadComplete");
	}

	protected void Page_prerender(object sender, EventArgs e)
	{
	    Debug.WriteLine("Page_Prerender");
	}
	protected void Page_SaveState(object sender, EventArgs e)
	{
	    Debug.WriteLine("Page_SaveState");
	}

	protected void Page_savestatecomplete(object sender, EventArgs e)
	{
	    Debug.WriteLine("Page_SaveStateComplete");
	}

	protected void Page_Unload(object sender, EventArgs e)
	{
	    Debug.WriteLine("Page_Unload");
	}

	

	Page_Load()
	Page_Init()
	PRELOAD
	UNLOAD

Web Services

	

ADD SERVICE

	NEW ITEM .ASMX
	

public class Calc : System.Web.Services.WebService
{

    [WebMethod] ==========> CAN CALL VIA HTTP
    public string HelloWorld()
    {
        return "Hello World";
    }
}
    [WebMethod]
    public double Multiply(double a, double b)
    {
        return a * b;
    }

Run application 

		Address bar add calc.asmx   ENTER
		
		
RESPONSE SENT BACK VIA SOAP     

	<double xmlns="http://tempuri.org/">24</double>
	
	
	
SERVICE DESCRIPTION : WSDL WEB SERVICES DESCRIPTION LANGUAGE

	
	
ADD A PROJECT TO USE THIS SERVICE

	FORMS PROJECT
	
	REFERENCE : ADD SERVICE REFERENCE  OR DISCOVER
	
	
	Change namespace to ServiceReferenceCalc
	 OK
	
	
	        private void button1_Click(object sender, EventArgs e)
	        {
	
	            var proxy = new ZZ_WEB_01_CALL_SERVICE.ServiceReferenceCalc.CalcSoapClient();
	

Sending data across the web

HTTP

HTTPS

WS://
WSS://  

Connect two pages via an 'open' communications channel called a 'socket'  ws://  wss://  both are used

HTML Form : Submit the whole page

API

AJAX : Data sent in background

XML
	SOAP
	WSDL

API

API	connect online to a 'service' running on the internet

	API : APPLICATION PROGRAMMING INTERFACE

	GET 

	SET DATA USING THESE 'API'

	WANT TO DO FOUR TASKS

	CRUD DATABASE OPERATIONS

	C	Create		NEW RECORD
	R	Read		
	U	Update		EXISTING RECORD
	D	Delete

	GET ==> asking to read data

	POST ==> sending data ==> INSERT/UPDATE/DELETE DATA

	BEAUTY OF API IS THAT THEY HIDE THE UNDERLYING OS/APPLICATION : ONLY 
			EXPOSE FIELDS SO CAN USE THIS CROSS-PLATFORM

		PLATFORM INDEPENDENT

XML

<ROOT>
	<ROW ID="1">
		<FIELD1>TEXT1</FIELD1>
		<FIELD2>TEXT2</FIELD2>
	</ROW>
</ROOT>

XMLREADER           READ
XMLWRITER          CREATE
XMLDOCUMENT     EDIT XML
		
		
	

JSON

AJAX

SOAP : XML

XML to send data round web

	SIMPLE OBJECT ACCESS PROTOCOL

	<root>
		<row1>
			<data="hello">
		</row1>
	</root>

WSDL

WSDL  Web Services Description Lanaguage : Create a WEB SERVICE

	STRUCTURE TO CREATE 'MICROSOFT WEB SERVICE'

	[WebMethod]{  
		.......CODE....		
	}

		Windows Method DOING/ACTION CODE FOR A WINDOWS SERVICE

STATE MANAGEMENT

	

Web Storage : Client Side Storage

QUERY STRING : in URL

COOKIE: TEXT FILE :   4KB MAX : 

		IF DON'T SET EXPIRY FOR COOKIE IT WILL BE ONLY VALID FOR SESSION
		IF CREATE EXPIRES DATE IT WILL BE PERMENENTLY STORED UNTIL THE TIME PERMITTED

LOCAL STORAGE  PERMANENT

SESSION STORAGE   TEMP

INPUT TYPE="HIDDEN"  (ASP has HTMLInputHidden)

Control State

ASPX CONTROL STATE : MINIMUM DATA NEEDED JUST TO RUN CONTROLS ON A PAGE
	
	COMPULSORY : CAN'T DISABLE

	SAVE STATE ==> DATA GOES HIDDEN CONTROL INPUT TYPE="HIDDEN" VALUE="STATE OF PAGE"

View State

View state data holds all data needed to run client-side controls

	View state is optional so can turn it off to speed up the page 

	Saves optional data eg for a button

	Can be used to store the state of a control across page postback

	_viewstate is the name of the field

	Enabled by default

	VIEW STATE INPUT TYPE="HIDDEN"  

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="E809BCA5">
		
	<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="WQRSttg9cIInlFR6Ec/g65PRxfh7ot7Ti5UBrBr7Jk9AoUZqua/vPYKipXfe+DU29yUnx1DwjERWxkgP/XiNGWV0XxU5TO4MfWQ8RFpyavY=" /> 	
		

LOCAL STORAGE

	5MB OF DATA ON CLIENT
			
	PERMANENT : FOR EVER!!!

	localStorage.getItem("lastname");

	localStorage.setItem("lastname", "Smith");

HTML Session Storage

SESSION STATE 

  for this session only

	sessionStorage.clickcount = 1        TEMPORARY FOR CURRENT SESSION

SERVER SIDE STORAGE

	
ASPX Application State
 ==> FOR ALL USERS

		SERVER : STAYS ON SERVER : DATA RELATING TO WHOLE APPLICATION
				NOT JUST ONE USER EG WAREHOUSE STOCK LEVEL

		Page => Application Property => HTTP Application State : Key Value Pairs
		
			
		HTTPAPPLICATIONSTATE
		
		              APPLICATION["NAME"]
	
	

SESSION STATE

SESSION["COLOR"]   ==> CREATE SESSION_ID  ==> SEND BACK COOKIE TO BROWSER WITH SESSION ID

		PER USER
				

ASPX SESSION STATE

	Slightly different to Local Session Storage

	See https://msdn.microsoft.com/en-us/library/ms178581.aspx

	SET c# Session["x"]="hello";

	GET C# Session["x"]

	add

		Session.Add('name','value')
		Session.Add('name','textbox1.text');

	read

		Session['name'].
		if (Session['name'] "= Null") {  .. }		
	

Cookies

		VERY SMALL TEXT FILE

		SENT WITH HTTP REQUEST FROM CLIENT TO SERVER AND BACK

		4KB OF DATA TO BE SENT WITH EVERY HTML REQUEST

	
	Regular Cookie : SET EXPIRY DATE  

	

	Session Cookie 

		COOKIE but only for this session (no expiry date so expires
						immediately session terminates)

		https://jsfiddle.net/user/philanderson888/fiddles/

			CLIENT<<<===============COOKIE================>>SERVER
						  4KB

	

	
		COOKIE/SESSION DATA ===> ONE USER ONLY
	
		document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
		
		

.NET Cookie

	Create a cookie

		HttpCookie Cookie01 = new HttpCookie('')

		HttpCookie myCookie = new HttpCookie('field01','data01')
		
	Set an expiry date

		myCookie.Expires = DateTime.Now.AddMinutes(10)
	
		IF DON'T SET EXPIRY THEN BECOMES SESSION VARIABLE

	Read data from a cookie

		Request.Cookies['name'].Value

		If (Request.Cookies["Name"]!=null){   
      name = Request.Cookies["Name"].Value
				   

	expired
	
		myCookie.Expired
		
	
	issued
	
		myCookie.TimeStamp
		
	name
	
		myCookie.Name
		
	value
	
		myCookie.Value
		
	Domain/Path/Port/Secure
	
	discard
	
		myCookie.Discard
		
	toString
	
		myCookie.toString()

		
	
	Add cookie to page response

		Response.Cookies.Add(myCookie);

	Cookies Lab
	1) Add 2 pages 
	2) on first page set new cookie and response.redirect to second page 
	3) on second page, read cookies

Publishing Files To A Website

FTP client
XCOPY
Manually upload
MSI Installer (rare)

Chapter 5 - Windows Forms

	console = text-based

	Forms = GUI-based

	  Forms Events

	Lab : create the date picker as shown in the book: Create a date picker and output to a label.  Note : book code is already added in Visual Studio so if we also add it in, it duplicates what Visual Studio has already created 

    See Form_Event_01 lab! 

SDI and MDI

	SDI Single Document Interface : ONE SHELL HOSTS ONE APP

	MDI Multiple document interface : ONE SHELL but can have many windows
		For example : One Excel window but 3 Excel spreadsheets open within it

	Lab : 

		Just create a new Windows Forms project and add a new item MDIParent.  In Program.cs run the MDIParent form. 

	Lab Extra : 

		ChildForm child = new ChildForm()
		child.MdiParent = this;
		child.Show();
		
		LayoutMdi(MdiLayout.Cascade/TileHorizontal/TileVertical)

		Form1_MouseDown(object sender, MouseEventArgs e){
					e.X,e.Y are coordinates of mouse down
				}

Visual Inheritance

Child form inherit from parent

	Master Parent Form

	Child form - inherits parent form plus can add own features

	1. Build form and RUN
	2. Add new item, inherited form, choose base form
	
	Visual Inheritance LAB! 

		See Inheritance_01

    	See Inherited_Form_02 lab for a good worked example 

Console Apps With Arguments

Command line arguments : do demo!!!  

Lab : Build one from scratch 

   
						
						
						
						

	
Services

	
	Application =>		AFTER USER LOGS IN, APPLICATION CAN BE RUN
	
	Service => 		RUN AFTER STARTUP REGARDLESS IF USER LOGGED ON OR NOT

 	Lab : Create service which logs events in Event Viewer

 		Check book for details of exact steps

		=> Add Project ==> Windows ==&ght; Classic Desktop ==> Windows Service

		Solution Explorer - Right Click - Properties - (Name) - Set Name

		MyService.cs - Right Click - View Designer - Now bottom right, change ServiceName 

		MyService.cs - Right Click - View Designer - Now Right Click On Blank Area On Left - Add Installer

				ServiceProcessInstaller1 => Properties ==> Account ==> LocalSystem	

				ServiceInstaller - Properties - Change service name also here

		Build the project

		
	Services Lab Summary

		1) New Project => myService01  
		2) Rename Service1.cs to myService01.cs 
		3) View designer and click; bottom right rename both instances.  
		4) Click on screen, add installer, set user to Local System and rename.  
		5) Build 
		6) Installutil -I  myService01.exe

	    protected override void OnStart(string[] args{	
			Run on start
        }

        protected override void OnStop() {
			Run on stop
        }

	Lab : Install service  with installutil 		
			
		VS TOOLS => DEVELOPER PROMPT => RUN AS ADMINISTRATOR => CD to root dir=
			
			INSTALLUTIL -I  WINSERVICE.EXE

			Note : to uninstall the service use :

			INSTALLUTIL -U  WINSERVICE.EXE
		
	
	Lab : Run service 

		Create Service, LOG EVENT IN EVENT VIEWER, INSTALL AND RUN SERVICE

	
	
	Service => grey screen = > properties => can pause and continue

INTERNATIONALIZATION

	
	GLOBALIZATION  EG DATE, MONEY FORMAT
	
	LOCALIZATION      USER INTERFACE LIKE BUTTON TEXT 'Save' or french equivalent
	
	MAIN CLASS TO CONTROL INTERNATIONALIZATION IS 'CULTURE INFO'

Chapter 6 - SQL

SQL - Yes in exam!!!  SQL and LINQ

	DBMS Database Management System

		Oracle, PostGRESQL, Syngres
		SQL (Microsoft)
		MYSQL (Open Source)
		MS Access (Office)

	SQL 

		Structured Query Lang

	Flat File

		TEXT FILE ==> READ/WRITE DATA IN LINEAR FASHION, LINE BY LINE

			TODAY ==> LOG FILE

				  CONFIG FILE => LOAD SETTINGS IN GAME

	RELATIONAL DATABASE

		TABLES : EACH TABLE RELATES TO OTHER TABLES

			Primary Index == UNIQUE ID FOR EACH ROW

			
			CustomerID
			ProductID

			Search and locate data using unique ID

		FOREIGN KEY

			PRODUCTS TABLE

				ProductID, Description, Price, Stock etc

	
	
	ORDERS TABLE

	OrderID, CustomerID, ProductID, Quantity, Date

		ProductID is FOREIGN KEY (( Primary key
		but here it's just a regular column))

	ORDERS TABLE			PRODUCTS TABLE

	OrderID				ProductID
	Date				Name
	CustomerID			Price
	ProductID			Country				
	Quantity
	

	Foreign Key is a PRIMARY KEY IN ONE TABLE : APPEARS AS SECONDARY KEY IN 
			ANOTHER EG ProductID

	RELATIONSHIPS

		1-1		One Person has ... One Driving Licence
		1-MANY		One person owns many cars
		MANY-MANY	Many pupils in a college attend many classes

	Design

		ERD	Entity Relationship Diagram
			
			view data in schematic form
	
		UML 

			View classes/methods in schematic 

	ERD ENTITY RELATIONSHIP DIAGRAM

		DATA RELATIONSHIPS

		SMARTUML

			UML : SHOW CLASSES/METHODS/PROPERTIES

	SQL Data Type

		TINYINT		1/0
		SMALLINT
		INT
		BIGINT
		BLOB		BINARY LARGE OBJECT EG VIDEO

		NORMAL FORM

			NORMALIZATION ==> AIMS TO STRIP OUT ALL DUPLICATE DATA

			1ST NORMAL FORM

				ONE FIELD ==> ONLY ONE BIT OF DATA GOES THERE
				
				mobile field	==>  can only put one mobile number 
							there

			2ND

				EACH FIELD MUST DEPEND ON PRIMARY KEY

			3RD
			
				NO FIELD SHOULD DEPEND ON ANY OTHER FIELD 
				(EXCEPT PRIMARY KEY)

			
DATA ANOMALY

	INSERT/UPDATE/DELETE
	
	INSERT ANOMALY : EG NO ID : DON'T HAVE 'REFERENTIAL INTEGRITY'
	
	

	
	GRANT REVOKE
	
		
	LIKE
			%          WILDCARD
			-              SINGLE CHARACTER
			[a-f]    CHARACTER IN RANGE a-f
			[abcde]            RANGE abcde
			[^1-9]        NOT NUMBER 1-9
			

INTO

	SELECT A,B INTO TABLE2 FROM TABLE1     MAKES A NEW TABLE AS A COPY

Stored Procedure

CREATE PROCEDURE A AS 

		SELECT * FROM TABLE WHERE ID=22
		
	RETURN
	
		
		
Parametrised Stored Procedure

		

CREATE PROCEDURE dbo.X(

	@CustomerId char(5)
	
	@TotalSales money OUTPUT
)

AS

	SELECT @TotalSales = SUM(Quantity*UnitPrice)
	FROM (Customers INNER JOIN Orders
	ON Customers.CustomerId = Orders.CustomerId)
	INNER JOIN [Order Details]
	ON Orders.OrderId = [Order Details].OrderId
	WHERE Customers.CustomerId = @CustomerId
RETURN

```

### 

# Learning Resources

### Quiz Learning : SoloLearn

[Questions To Test C# Knowledge At https://www.sololearn.com/Play/CSharp](https://www.sololearn.com/Play/CSharp)

### Code

If you are interested in diving into C# here is an amazing bite-sized set of tutorials and lessons [https://csharp.2000things.com/index](https://csharp.2000things.com/index)

### Videos

[The New Boston has over 200 videos on C# which are excellent and to the point, a little older now but great for getting going](https://www.youtube.com/playlist?list=PL0EE421AE8BCEBA4A)

[C# for absolute beginners at Microsoft MVA Virtual Academy with Bob Tabor](https://mva.microsoft.com/en-us/training-courses/c-fundamentals-for-absolute-beginners-16169)

### Coding Exercises

[Code Wars](https://www.codewars.com/)

[ProjectEuler.net](http://projecteuler.net/)

[CodinGame.com](http://codingame.com/)

# IDE

```
Visual Studio Hotkeys

ALT+SHIFT+ENTER - Full Screen

CTRL+K+F Formats Sloppy Code

Ctrl+K+S Surround With

1. CTRL+Q for Quick Launch
CTRL+Q opens the quick launch so you can search an indexed list of every feature available in Visual Studio. For example, If you want to do add a new item, use quick launch to with that as your search term and receive guidance on how to do that.

2. CTRL+ ] Finds Closing Braces
With a lot of nested statements, it can be tough to keep track of opening and closing braces which, if missing, can cause compiler errors. Use CTRL+ ] to find the matching closing brace of a function or class and reduce the chance of falling prey to annoying error messages.

4. TAB Automates Tedious Typing
For loops and if-then conditions have standard structure that’s tedious to type over and over. To automate that process, you just need to type the beginning of your condition. For example, type ‘Try,’ hit the TAB key twice, and you get access to the snippets that complete the condition for you down to the braces. All you have to do is modify the parameters and you’re good to go.

5. CTRL+SHIFT+F5 to Stop and Re-Build
This shortcut combines three debugging Visual Studio code commands in one. CTRL+SHIFT+F5 lets you end the debugging session, rebuild it, and create a new debugging session.

6. Hot Keys: CTRL+K+C for Bulk Comment & CTRL+K+C for Uncomment
Manually adding and removing ‘//’ is tedious especially, if you have a long piece of code you want to deactivate. CTRL+K+C is a quicker way to bulk comment. Just highlight the block and type the Visual Studio code shortcuts. When you need to make those lines active again, highlight the block and use CTRL+K+U to uncomment.

9. Bookmarking Code Hot Keys: CTRL+K+K, CTRL+K+N & CTRL+K+P
Bookmarks help you keep track of the special markers in your code. For example, if there’s a function that you’re constantly referring to, CTRL+K+K marks that line with a little dot at the left. Additionally, use CTRL+K+N to cycle to the next bookmark in the list and CTRL+K+P for previous bookmarks. Just remember that the bookmark tags the line of the code, not the code itself.

10. CTRL+SHIFT+V for the Clipboard Ring
CTRL+C allows you to keep the last 15 copied pieces of content in the clipboard. CTRL+SHIFT+V gives you access to this clipboard ring where you can scroll through the list of copied lines until you find the one you want to paste.

11. CTRL+M+M & CTRL+M+O Hot Keys to Collapse Code
If your code file is too long and you want to make it more manageable, consider minimising it with CTRL+M+M Visual Studio code shortcut keys. Just select the whole file and use this hotkey to collapse all functions to the most basic view. You can re-expand specific section to see what you want. You can also use CTRL+M+O to collapse to the definition level, which may be a more useful view.

12. ALT Hot Key for Block Modify
You have a code block and want to edit an event so that it’s reflected throughout the other lines i the block. Instead of changing each line individually, hold ALT then click and drag to highlight that block. Type the change you want and you’ll see all selected lines change at once.

13. Block Move VS Hot Keys: ALT+↑ & ALT+↓
These Visual Studio shortcuts are faster alternatives to copy-move-paste. To change the location of a certain block of code, highlight the lines then click ALT+↑(up arrow) to move all lines up at once or ALT+↓ (down arrow) to move all likes down.

14. F12 & SHIFT+F12 Visual Studio Shortcut Keys to Find References
To see the instance of a class, hover over the name and hit F12. To see everywhere you’ve used that class, use SHIFT+F12.

15. CTRL+- & CTRL+SHIFT+- to Step Through History
These VS code hotkeys are absolutely necessary. Image, you’ve been scrolling down many lines of code and want to go back to some reference that’s 100 lines away. Instead of scrolling up or down to find that place, use CTRL+-(minus) to step backward through the navigation history, which shows everywhere you’ve clicked and in the order you clicked them. To go forward, use CTRL+SHIFT+-.

16. CTRL+SHIFT+B to Build
CTRL+SHIFT+B is a quicker way to build a solution.

17. CTRL+. for Autocomplete
Use these Visual Studio code keyboard shortcuts if you want to create a new task, for example. Type the word ‘task’ and use CTRL+. (dot) to see a menu. Press enter and you’ll see the namespace appear. Autocomplete helps with any coding issues, such as maintaining naming conventions.

18. CTRL+R+R Renames A Property
You do a build and find that you didn’t name a property properly. Instead of hunting for every reference, click on the variable and use CTRL+R+R. This hotkey will not only rename the property, but also change the name wherever it’s referenced. When you click Apply, you’ll see all the references it will rename.

19. F11 Steps Into Constructor
These Visual Studio code hotkeys can be useful when you’re debugging. If you want to step into a function as far as it can go and not just move to the next line, press F11 to jump into the constructor.

20. ALT+ENTER for Quick Action
When you see the light bulb, it means there’s an easier action to take. You can take advantage of the hot key shortcuts. For example, if you have unused USING statements or if you want to add a clause, ALT+ ENTER will get rid of unnecessary statements as well as add that recommended snippet to your clause.

21. Ctrl+K for Removing Bookmarks
These Visual Studio code hotkeys are useful for removing the syntax of the comment from the prevailing line or currently marked lines of code. For example, if you are using the code editor and you want to remove the already written syntax of comments then Ctrl-K comes under the text manipulation Visual Studio code keyboard shortcuts.

22. Ctrl+Shift+O for Opening a Project
This key is the part of project-related shortcuts. For example, you are using a Microsoft Visual Studio and you have developed a new project called “MyProject”. Now, if you want to open this project in the code editor then Ctrl+Shift+O can be used. The project Visual Studio code shortcut keys are very useful if you are working on a big project and repositories.

23. Ctrl+Alt+Insert to override the base class
This shortcut key is also the part of project-related Visual Studio code shortcuts. For example, if you want to override base class methods. Now, you want to achieve this in an already derived class when an overridable method is called. To execute this in the Class View pane you can use Ctrl+Alt+Insert key. 

24. Ctrl+I for incremental search
This shortcut key is the part of Search and replace related Visual Studio hotkeys. This hotkey starts an incremental search. After pressing Ctrl+I, user can insert the text. Once the text has been entered, this key will help in finding the text and the related pattern. The search and replace Visual Studio keyboard shortcuts are useful in finding various codes and comments from the code editor.

25. Alt+F3, R for Regular Expression
This shortcut key is also the part of Search and replace related Visual Studio code shortcuts. This key is used for selecting or clearing the Regular Expression option. With the help of Alt+F3, R  the special characters can be used in the Find and Replace methods.

26. Ctrl+Alt+M,1 for Memory 1 window
This key is the part of Debugging related Visual Studio commands.This shortcut key displays the Memory 1 window to observe memory in the method being debugged. This is especially beneficial when you do not have debugging figures ready for the code. It is also important for studying at large buffers.

27. Ctrl+Alt+J for Object Browser
This key is the part of Object browser-related Visual Studio shortcuts. This displays the Object Browser to inspect the classes, attributes, processes, events, and constants specified either in the project or by elements and sample libraries referenced by the project.

28. Ctrl+Shift+M for Tool window
This shortcut key is the part of Tool window related commands.This switches the window inside or out of a method enabling text inside the window to be chosen.

29. Ctrl-Page down for Window manipulation
This key is the part of Window manipulation related Visual Studio code shortcut keys. It allows to move to the next tab in the document or window. For example, if you can  switch the HTML editor from its design view to HTML view.

30. Shift+F8 for the cursor
This shortcut key is the part of General Visual Studio code commands. This key moves the cursor to the preceding item, for instance in the TaskList window or Find Results window.

Reference: https://bytescout.com/blog/visual-studio-hot-keys.html
```

# Introduction to .NET and .NET Core

### Introduction To .NET

Windows computers are built with a programming language called 'C'. This has developed into a more modern language, C++.

Microsoft has had two other languages which are used to build code for 'regular' developers - Visual Basic and C#. Visual Basic is still used but mostly on legacy code. It is still used in VBA Visual Basic for Applications to modify Microsoft Office documents. C# is a modern language which is receiving much support from Microsoft and the open source community in general because of its ease of use. We will be learning about C# in this course.

All of these languages can build code which works together. The structure by which this is possible is called a `framework`.

To illustrate what we mean by the .NET Framework let's go to the 'heart' of Windows and have a look at what we find.

Please navigate to `C:\\Windows\\System32\\` folder.   

In there you will see a few `.exe` files which are tools. For example notepad.exe.
But the majority of files are `.dll` files which are called 'Dynamic Link Library' files. These are files which can all talk to each other and make Windows work as it does.

Let's look in detail at .NET and how can use it to create code. 

### .NET structure

When we build code using .NET the code will be controlled by the following rules :

```
CLI 	Common Language Infrastructure  	manage the build environment

CTS 	Common Type Structure 				fix the variable types which are
											available eg string, int
```

The CLI build environment allows us to use several languages to build a .NET project

```
Visual Basic

C#

C++

F# 

. . . and others
```

### Compiling a .NET project

`Compiling` means to generate code which a computer can understand and run, from human-readable code.

`High Level` is human-readable

`Low Level` is machine-readable, also called `assembly language`

When we compile .NET raw code we generate what is called `CIL` Common Intermediate Language.

```
C#
C++		====>	compile   ===>  CIL Common Intermediate Language
F#
```

So regardless of the raw underlying language, the CIL code is the same so this is the secret of the .NET framework - all languages compile to the same type of code.

### ILDASM

We can see the IL Intermediate Language and compiled runtime assembly language which is sent to the CPU here at [https://sharplab.io](https://sharplab.io/)

### Runnning a .NET project

When we run a .NET project the CIL code is run inside the 'CLR' Common Language Runtime which is specific to the computer architecture on that computer. This optimises the code for that architecture.

```
Code

C#
C++		====>  compile   ==> CIL Intermediate  ==> run ==> CLR Runtime
F#
```

### .NET vs .NET core

.NET is the total sum of all code which has been built in Windows, and we call this the .NET Library of code available to all developers.

The only downside to this is that the full .NET framework is huge!!!

If you go to this [link](https://www.microsoft.com/en-us/download/details.aspx?id=55167) and expand the details section you will see that the size is 4.7GB. This is huge! We don't want this much code to be available for most projects!!!

Also a second problem is that .NET is `proprietary`. This means that the code is `closed-source` ie owned by Microsoft and not for public display and ownership. Although in the past this was a good thing, actually our world is changing and open source code has changed the way that we live. Microsoft has embraced this and has created a new, open-source, lightweight version of .NET which is free for all the world to use, change and develop and is called .NET Core.

.NET Core contains a stripped-down library of code. It is more suitable for web-based projects but does contain the raw C# libraries in order to build and run C# projects. It also enables C# to be built and run on a MAC for instance.

 .NET Core 3 will have C#8

C#8 will only be available on .NET Core 3

# Lesson 01 : Introduction To C#

## .NET

### Introduction To .NET

Windows computers are built with a programming language called 'C'. This has developed into a more modern language, C++.

Microsoft has had two other languages which are used to build code for 'regular' developers - Visual Basic and C#. Visual Basic is still used but mostly on legacy code. It is still used in VBA Visual Basic for Applications to modify Microsoft Office documents. C# is a modern language which is receiving much support from Microsoft and the open source community in general because of its ease of use. We will be learning about C# in this course.

All of these languages can build code which works together. The structure by which this is possible is called a `framework`.

To illustrate what we mean by the .NET Framework let's go to the 'heart' of Windows and have a look at what we find.

Please navigate to `C:\\Windows\\System32\\` folder.

In there you will see a few `.exe` files which are tools. For example notepad.exe.
But the majority of files are `.dll` files which are called 'Dynamic Link Library' files. These are files which can all talk to each other and make Windows work as it does.

Let's look in detail at .NET and how can use it to create code.

### .NET structure

When we build code using .NET the code will be controlled by the following rules :

```
CLI 	Common Language Infrastructure  	manage the build environment

CTS 	Common Type Structure 				fix the variable types which are
											available eg string, int
```

The CLI build environment allows us to use several languages to build a .NET project

```
Visual Basic

C#

C++

F# 

. . . and others
```

## Compiling Code

### CSC Compiler

```csharp
## Bonus : Compiling One C# File With The Compiler

Rather than handle compiling within Visual Studio, it is possible to do this outside of Visual Studio.  Here is an example.

1. Copy the code from Program.cs into a text file and save it as MyApplication.cs.  Make sure there is at least one `Console.WriteLine` producing visual output on the screen.

2. Find the path to csc.exe which stands for C Sharp Compiler.exe  An example is below but find it specifically on your computer.

Then run

​```bash
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe MyApplication.cs
```

This will have produced MyApplication.exe which can run.

You can run it by double clicking on it, but it will probably run then terminate too quickly to see what's happening.

Or you can run from the command line 

```bash
./MyApplication.exe
```

```

# .NET Core

# Introduction

.NET is open source   [https://github.com/dotnet](https://github.com/dotnet)

.NET Core documentation  [https://docs.microsoft.com/en-us/dotnet/core](https://docs.microsoft.com/en-us/dotnet/core/)

### Libraries

```
.NET Framework on Windows only

.NET Standard 2.0 is cross-platform

.NET Core

XAMARIN app development for IOS, Android, Windows

.NET Native compiles AoT Ahead of Time to improve execution time

[Mono Project](<https://www.mono-project.com>)

UWP Store Apps

.NET on Linux

    sudo apt-get
```

### .NET

```
CTS types
CLS language
CLR runtime with automatic garbage collection
```

### .NET Core Libraries And Versions

```
CoreCLR

CoreFX libraries

.NET Core 1 2016
.NET Core 2 2017
.NET Core 2.1 2018

    Release Notes 2.1
    
        <https://github.com/dotnet/core/tree/master/release-notes/2.1>
```

### .NET Core Enables

```
.NET Core
ASP.NET Core
.NET Core SDK
Microservices
Docker
multiple .NET versions side by side
```

### .NET Native

```
Compiles AoT Ahead Of Time which improves execution speed and reduces memory footprint
```

### Sample .NET core library link

```
<ItemGroup>
    <PackageReference Include="nunit" Version="3.11.0" />
    <PackageReference Include="NUnit3TestAdapter" Version="3.12.0" />
    <PackageReference Include="Microsoft.NET.Test.Sdk" Version="15.9.0" />
  </ItemGroup>

  <ItemGroup>
    <ProjectReference Include="..\\lab_22_first_test\\lab_22_first_test.csproj" />
    <ProjectReference Include="..\\Tests\\Tests.csproj" />
  </ItemGroup>
```

# LangVersion - Using A Particular Version Of C#

We can be sure to use a certain version of C# by modifying the .csproj file to include the following

```
<PropertyGroup>
   <LangVersion>latest</LangVersion>
</PropertyGroup>
```

We can replace `latest` with `default` to use C# 7.0 or we could use a specific number eg `7.3` in there also.

# Core Commands

```
dotnet new web

dotnet new mvc

dotnet new razor

dotnet new angular

	   react
	
	           -l   list all templates

dotnet run

dotnet test

dotnet build

dotnet publish    eg to Azure

dotnet add package Microsoft.EntityFrameworkCore

		   newtonsoft.json

// latest addition

dotnet new webapp --auth Individual  // builds MVC with SQLite 
           authentication database
```

# .NET Core command line tools

## .NET Core Command Line Tools

[https://docs.microsoft.com/en-us/dotnet/core/tools/index?tabs=netcore2x](https://docs.microsoft.com/en-us/dotnet/core/tools/index?tabs=netcore2x)

# dotnet new

### Make a new solution

dotnet new sln —name test   // makes test.sln

### Make a new console app

dotnet new console

dotnet new console -n myapp

dotnet new console —name myapp

### Add a project to a solution

dotnet sln add folder/projectname.csproj
dotnet sln my.sln add folder/projectname.csproj    

# dotnet new classlib

We can also build a `dll` library file using the following

```
dotnet new classlib
// compile
dotnet build
```

and we can use and reference this library with direct code, for example

```
using System;
using deletemecs02;

namespace deletemecs01
{
    class Program
    {
        static void Main(string[] args)
        {
            var instance02 = new Phil();
            instance02.someNumber = 22;
            Console.WriteLine("Hello World! " + instance02.someNumber);
        }
    }
}
```

where we can see we have referenced the `dll` in our `using` statement. In order to reference this `dll` correctly we have added the literal path to our csproj file

```
<ItemGroup>
  <Reference Include="deletemecs02">
    <HintPath>..\\deletemecs02\\bin\\Debug\\netstandard2.0\\deletemecs02.dll</HintPath>
  </Reference>
</ItemGroup>
```

# templates

​```csharp
// list temmplates
dotnet new -l
```

# dotnet --info     gives version details

```csharp
# display current dot net version info
dotnet --info
```

dotnet build

# dotnet run - build and run your code

# dotnet restore - pull down all libraries

If we have a project which we have downloaded from the internet it may not have all of the Nuget packages downloaded yet. To download all packages use the command

```
dotnet restore
```

# Hello World

```csharp
dotnet new console 
// or
dotnet new console MyApp

cd MyApp

// edit Program.cs

class MyApp{
    static void Main(){
        System.Console.WriteLine("Hello World From Phil");
    }
}

dotnet run  
```

# Publish

[https://docs.microsoft.com/en-us/dotnet/core/tutorials/publishing-with-visual-studio](https://docs.microsoft.com/en-us/dotnet/core/tutorials/publishing-with-visual-studio)

## dotnet publish : Single File Executables :

```csharp
dotnet publish -r win10-x64 /p:PublishSingleFile=true
```

# Core 3 new commands

```csharp
dotnet new wpf

dotnet new winforms
```

# Nuget commands

```csharp

To install packages using Nuget console we can use the following commands

​```bash
# search for a package
Find-Package SQLite
```

# see installed packages
get-package SQLite

Once found we can install it

```bash
# install package
Install-Package Microsoft.EntityFrameworkCore.SQLite -ProjectName name-of-project
```

all EFCore SQL binaries
install-package Microsoft.EntityFrameworkCore.SqlServer -ProjectName EFCore_01
```

# dotnet commands

dotnet test

dotnet migrate

dotnet pack

### Finding packages

```
cannot do this at present!
```

### Finding installed packages

​```powershell
dotnet list package
```

### Adding nuget JSON

```
dotnet add package Newtonsoft.Json
```

### Adding nuget collections

```
dotnet add package System.Collections --version 4.3.0
```

### Adding nuget Bootstrap

```
<https://www.nuget.org/packages/bootstrap/>
```

# DLL

We can also build a `dll` library file using the following

```
dotnet new classlib
// compile
dotnet build
```

and we can use and reference this library with direct code, for example

```
using System;
using deletemecs02;

namespace deletemecs01
{
    class Program
    {
        static void Main(string[] args)
        {
            var instance02 = new Phil();
            instance02.someNumber = 22;
            Console.WriteLine("Hello World! " + instance02.someNumber);
        }
    }
}
```

where we can see we have referenced the `dll` in our `using` statement. In order to reference this `dll` correctly we have added the literal path to our csproj file

```
<ItemGroup>
  <Reference Include="deletemecs02">
    <HintPath>..\\deletemecs02\\bin\\Debug\\netstandard2.0\\deletemecs02.dll</HintPath>
  </Reference>
</ItemGroup>
```

# Assemblies

### Assembly

View => object browser = > assemblies

ADD NEW CLASS LIBRARY IT CAN NOW APPEAR THERE AS WELL.
YOU CAN MOVE YOUR CLASS INTO ANY NAMESPACE IF YOU WANTED

```csharp
foreach(var assembly in GetEntryAssembly().GetReferencedAssemblies()){
	// load then count all assemblies
}
```

# Garbage Collector

Identify objects on the heap that are no longer referenced

Free up heap memory occupied by dead objects

Compact the heap

GC.WaitForPendingFinalizers wait for all garbage collection to complete 

# Debugging

[https://docs.microsoft.com/en-us/dotnet/core/tutorials/with-visual-studio-code](https://docs.microsoft.com/en-us/dotnet/core/tutorials/with-visual-studio-code)

Basically click on debugging tab at bottom

Also click on debugging icon

Now run the app

Add a breakpoint (red circle)

.NET Core Command Line Tools

### Debugging in Visual Studio

- Run to cursor
- Set next statement
- Attach first time then reattach to process second time
- Disable breakpoints once one has been hit in order to stay on the same thread
- Command K, C then Command K, U to comment then uncomment lines

### Debug Windows

```
Locals - variables

Immediate Window - interact with your code and variables.  VSCode has Debug Console Window.
```

### Console output

```
Console.ForegroundColor = (ConsoleColor)Enum.Parse(typeof(ConsoleColor), "red", true);
Console.BackgroundColor = (ConsoleColor)Enum.Parse(typeof(ConsoleColor), "yellow", true);
Console.WindowWidth = 100;
Console.WindowHeight = 30;
Console.WriteLine("hello world");
```

### Trace Output

`Debug.WriteLine` comments are not compiled for `release` code.

`Trace.WriteLine` comments are always present however.

But we can control their visibility by entering an argument when we run a Console app. We declare and use a TraceSwitch object in our code.

## // To Do Comments

We can use // TODO in our code as comments and then we can pick this up later as a list of TODO items in Visual Studio

```
// TODO: ... in your code - this will appear as tasks to complete in Visual Studio !!!
```

# Conditional Compiling #if DEBUG

```csharp
#define PHILTEST
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lab_17_debug
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting app");
#if DEBUG

            Console.WriteLine("This is debug code");

#endif

#if PHILTEST

            Console.WriteLine("This is PHIL TESTING");

#endif
            Console.WriteLine("Finishing app");
        }
    }
}
```

## #Warning

```csharp
#warning will come up when we compile our code in the build output window!
```

# Write to Event Log

```csharp
EventLog.WriteEntry("Application", "Message from Phil", 
                  EventLogEntryType.Information, 5001, 1234);
```

# Debug Summary

```csharp

​```cs
using System;
using System.Diagnostics;
using System.IO;

namespace lab_59_Debugging
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine(i);
                Debug.WriteLine($"Debugging To OUTPUT WINDOW (only in debug mode) : i is {i}");
                Trace.WriteLine($"Trace to OUTPUT WINDOW " +
                    $"(in final release mode and debug mode) : i is {i}");
                File.AppendAllText("output.txt",$"Logging To text file {DateTime.Now} i has value {i}");
                var output = $"Logging To text file {DateTime.Now} i has value {i}";

                // log to C:\Log folder
                if (!Directory.Exists("c:\\log")){
                    Directory.CreateDirectory("c:\\Log");
                }
                File.AppendAllText("C:\\Log\\output.txt", output + Environment.NewLine);
                // log to My Documents\Log folder
                File.AppendAllText("C:\\Users\\tech-w99a.LAPTOP-3BLG1NHP\\Documents\\Log\\output.txt", output + Environment.NewLine);
                // ANY USER???  specialfolders....
                File.AppendAllText(System.Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments)
                    + "\\Log\\output.txt", output + Environment.NewLine);
                //  @ LITERAL STRING NOTATION AS WELL
                var MyDocumentsPath = System.Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
                var path = MyDocumentsPath + "\\Log\\output.txt";

                File.AppendAllText(@"C:\Users\tech-w99a.LAPTOP-3BLG1NHP\Documents\Log\output.txt", output + Environment.NewLine);

                // can also log to the Windows Application Event Log

                EventLog.WriteEntry("Application", "output", EventLogEntryType.Information, 5678, 123);

            }
            EventLog.WriteEntry("Application", "Your Windows Has Been Hacked", EventLogEntryType.Information, 5678, 123);

            for(int j = 0; j < 10; j++)
            {
                1Console.WriteLine($"J has value {j}");
            }

            Console.ReadLine();

            // 1 ==> debug which is F5
            // 2 ==> not debug mode which is Control F5 in Debug ==> still shows all output
            // 3 ==> not debug mode PLUS Build => Configuration => Release then only shows TRACE output
            // TODO SOME WORK HERE
            // ToDo Some more work here

            // Debugging
            /*
             Control F5 ==> No Breakpoint
             F5 => Breakpoint
               F10 ==> next line
               F11 ==> next line but if calls Method, go deeper
               Ctl-shift-F5  Restart

              */
             

        }
    }
}

```
```

# Nuget

## Default Visual Studio packages

When we install Visual Studio we can access the `Visual Studio Installer` which enables us to view and install default libraries to build certain types of code structure.

For example if we open up the Visual Studio Installer together we can see

- .NET desktop with C#, F#
- C++ desktop
- UWP Universal Apps for Windows 10 store
- ASP websites
- Azure
- Python
- NodeJS
- Office and Sharepoint
- Mobile Xamarin for IOS and Android
- .NET Core

and for each, on the right, we can see individual components which we can choose to be installed or not installed.

When we install each component those library files are downloaded and made available for use natively within our applications.

In order to use and access these libraries we can do the following

1. Build a new project
2. View => Solution Explorer
3. In our project, right click on `References` and choose `Add Reference`
4. Click on `Assemblies` and choose `Framework` to choose core .NET libraries
5. Choose `Extensions` to access libraries which have been installed as part of our Visual Studio installer pacakges eg NodeJS packages.

## Nuget Packages

Beyond our default .NET packages and also installable Visual Studio packages there is an open-source community which has created packages for everyone to use.

These packages are obtained via an application called NUGET which is built into Visual Studio.

We can use the graphic application or the command line version

### Nuget Graphic Application

Choose Visual Studio, Tools, Nuget Package Manager, Manage NuGet packages for solution

We can see NuGet packages which have already been installed.

We can also search for and install new packages.

Examples to look for might include

- NUnit - for testing
- Newtonsoft.json - for JSON handling
- EntityFramework - for Entity databases
- bootstrap
- jQuery

etc

### NuGet online

We can see similar results by going to [nuget.org](https://www.nuget.org/).

Tips on downloading the correct packages can be found here

[https://docs.microsoft.com/en-us/nuget/consume-packages/finding-and-choosing-packages](https://docs.microsoft.com/en-us/nuget/consume-packages/finding-and-choosing-packages)

### NuGet command line

Similar to the graphic package manager is the command line NuGet package manager

Once you get used to this you may well find this a lot faster and more convenient to use.

## Nuget Commands

### get-package

get-package lists installed packages

```
# list all installed packages
get-package
```

### find-package

find-package can be used to search for packages before they are to be installed.

```
#### match packages with SQLite in them
find-package sqlite
```

### install-package

Once found we can install a package

```
install-package EntityFramework -ProjectName myProject
```

If we have multiple projects in our solution we should add -ProjectName and then the name of the project so that our package is not installed for all projects.

### uninstall-package

Similarly we can remove packages

```
uninstall-package EntityFramework
```

### update-package

```
update-package EntityFramework
```

## Contents of a 'nuget package'

It is possible to create packages for use

- publicly
- within our organisation only

### .nupkg package

A package is a `.zip` file containing all of the required files. Instead of calling this a `zip` file we call it a `.nupkg` file but the technical compression etc is done the same as when creating a `.zip` file.

### .nuspec manifest file

In order to create a `.nupkg` file we must assemble the individual files together and then also create a `manifest` file which is a list of all of the files within, and we call this a `.nupkg` file.

### nuget pack

When our files and `manifest.nupkg` file is ready we can pack everything into one `.zip` file using the command

```
# zip our files together and create a '.nupkg' file
nuget pack
```

### Creating A Package

1. Create a library project
2. Right click on the project and choose Properties, Package.
3. To ensure the package has a unique name it is often appropriate to prefix it with the name of your public domain website, since that also has to be unique in the whole world eg

    `com.my.domain.mypackagename`

which is how classes are often named in Java anyway.

1. Change the configuration to `Release` in `Build`, `Configuration Manager`
2. When ready to build, right click on the project and choose `Pack`
3. Find the `.nupkg` zip file output in `\\bin\\release` folder

## Publishing A Package

### nuget.exe

Install `nuget.exe` CLI by downloading it from [nuget.org](https://www.nuget.org/).

Add `nuget.exe` to your PATH

### [nuget.org](http://nuget.org/)

Register for an account on [nuget.org](http://nuget.org/)

### Obtain an API key

We must request an API key from `nuget.org`

### nuget push

We can now push our package to [nuget.org](http://nuget.org/) using the `nuget push` command

```
nuget push MyPackage.1.0.0.nupkg 123APIKEY123APIKEY123APIKEY -Source <https://api.nuget.org/v3/index.json>
```

### manage packages online

Once published the package should be visible online.

We can see how many downloads the package has had, view other stats, and remove the package.

# DotNet Add Package <name>

​```csharp
dotnet add package system.data.sqlclient
```

# Update-Package –reinstall

Updates all files which are in .csproj 

# Naming Conventions

```csharp
### C# Naming Conventions

If in doubt follow the Microsoft guidelines commonly popularised by StyleCop

https://github.com/StyleCop/StyleCop

Also at 

https://github.com/aspnet/AspNetCore/wiki/Engineering-guidelines#coding-style-guidelines--general

* 4 spaces (no tabs)

* _ camelCase for private fields. 

* avoid this.

* specify visibility eg private string _x; 

* open braces go on a new line

* use var whenever the compiler will allow

* use C# keywords rather than .NET classes

	string x; (not String x;)
	int y;  (not Int32 y;)

* line breaks

	use `Environment.NewLine` so your code will run on Windows, MAC and Linux
	don't use \r\n as this may not work on all operating systems

* use Path.DirectorySeparatorChar  to define `/` or `\` depending Windows or Linux

* all Async methods must have Async as the first word

* Classes should be a noun 

* Methods should be named in PascalCase

* Variables

* Constants should be named in PascalCaseLikeThistodo

```

# Variables And Data Types

## Strongly Typed

C# is a strongly typed language. This means that unless explicitly opted out with the 'dynamic' keyword, all data types must be fully clarified and defined and understood by the compiler at compile time. This means when the code runs at run time, there is less work to do and the code runs faster.

### Declaring

### Initialising

### Multiple per line if wanted

## Strings

### String Literals

```jsx
@"c:\folder\file.txt"   string literal
```

### string vs String

string or String can both be used but this would be the norm:

```
// declare a variable
string helloWorld;
// declare instance of String class
string x = new String();
```

### int.TryParse - String Parsing

```
// exception
int.Parse("abc");

// safer as boolean returned to let you know if it succeeded or not
bool success = int.TryParse("abc", out output);

// Int32.TryParse only works on whole numbers.  
// If the input number is a decimal it will not work 
// but float.TryParse will work

//int.TryParse
string myNumberAsString = "1234";  // note 1234.56 fails
int myNumber;
int.TryParse(myNumberAsString, out myNumber);
Console.WriteLine(myNumber);
Console.WriteLine(myNumber.GetType());

string myNumberAsString2 = "45.23";
float myNumber2;
float.TryParse(myNumberAsString2, out myNumber2);
Console.WriteLine(myNumber2);
Console.WriteLine(myNumber2.GetType());

```

### String.Format

```
String.Format($"{variable1,20:N0}")  // width 20, format as a Number with commas

SET LENGTH OF FIELD {variable1,5}  5 CHARACTERS LONG
		ALIGN RIGHT {variable1,5}  DEFAULT
		ALIGN LEFT  {variable1,-5}
		
		FORMAT {variable1,15:N0} 15 DIGIT NUMBER WITH COMMAS
			SINGLE CHARACTER		:A
			CURRENCY				:C
			DATE					:D
			EXPONENTIAL				:E
			FIXED DECIMAL POINT		:F
			NUMBER					:N
			
				N0   NUMBER WITH COMMAS
				
				
			PERCENT					:P
			HEX						:X
			00000.000				PAD WITH ZEROS
	

	    StringBuilder sb = new StringBuilder();
	    while (reader.Read())
	    {
	       
	        sb.Append(string.Format("{0,5}", reader["CustomerID"].ToString()));  
	        sb.Append(string.Format("{0,20}", reader["ContactName"].ToString())); 
	        sb.Append(string.Format("{0,30}", reader["CompanyName"].ToString()));
	        Console.WriteLine(sb.ToString());
	        sb.Clear();
			}

		\t can be used to add a tab key to produce a column indentation

			{variable1}\t{1}

:N0 display as a number with removing any numbers after the decimal point
:N1 keep one decimal place
:N2 keep two decimal places

:C currency

:X hexadecimal

:E exponential number format 10E12

for (int i = 0; i < names.Length; i++)
    Console.WriteLine("{0,-20} {1,5:N1}", names[i], hours[i]);

Composite Format   {x,-20}   {y:-20:N2}    {9,-10:C}

```

### String Interpolation $"{field.value}"

```
Console.WriteLine($"{c.ContactName,-35} has 
     id {c.CustomerID,-10} and lives in {c.City}");

```

### String methods

```csharp
.StartsWith()
.Contains()
.Trim()/TrimStart()/TrimEnd()
.ToUpper/Lower
.Insert/Remove
.Replace
.Concat
.Join
.IsNullOrEmpty
.IsNullOrWhitespace
.Empty
.Format

String.split

String.substring

int.parse

int.tryparse

Interpolation  $""
```

### Reversing A String

Notice that a string is an array of characters and an array has a built-in method called Reverse() so we can natively use that on a string

```csharp
// Native Array.Reverse() 
char[] myString = "some text"
string reversed = Array.Reverse(myString).ToCharArray();  

// Alternative?
string funnyMan = "Roscoe Arbuckle";
 
string backwardsGuy = new string(funnyMan.Reverse().ToArray());
```

### Integers

Declare an integer

```
int a = 1;
```

Note that integers by default are 32 bits (4 bytes) in size.

There are two other types of integers and we call them `short` and `long`.

`short` takes only 16 bits (2 bytes)

`long` takes 64 bites (8 bytes)

```
short s = 23;

long l = 14000;
```

As an experiment find the longest numbers that `short`, `int` and `long` can take

```
Console.WriteLine(int.MinValue);
Console.WriteLine(int.MaxValue);
```

What we will discover is that 32 bit integers have one bit allocated for the `+` or `-` sign so that leaves one bit left for the raw number. These numbers are called 'signed' integers.

Also integers will run from minus to plus so the minimum value will be

```
// min = -(2^31) = -2147483648
int.MinValue;
```

and the max will be

```
// max = (2^31)-1 = 2,147,483,647
int.MaxValue;
```

The reason we have to subtract one from the maximum value is that we start counting the positive numbers starting with the number zero.

### unsigned Integers

It may be that we only need positive numbers in which case we have a new data type, uint which goes from 0 to 2^32

```
// valid
uint u = 123;
// not valid;
uint v = -123;
// min = 0
uint.MinValue
// max = 2^32 = 4,294,967,296
uint.MaxValue
```

So we can save memory by using unsigned data types if we are dealing with positive numbers eg number of people in a directory which is never going to be a negative number.

### Default

The default value of an integer is zero

```csharp
int y = default;

if(0 is int i){}
```

Let us now move on and look at other data types

Summary so far

```
int = Int32
short = Int16
long = Int64
uint
ushort
ulong
```

### Floats and Doubles

We have two types - `float` and `double`. `float` is 32 bits long and `double` is 64 bits long.

```
// must explicitly add F as a suffix when declaring float numbers
float f = 1.23F;
// double which is the default so no letter is required
double d = 1.23;
```

## Care : truncation!!!

When you declare a decimal number the compiler will not complain if your original number is too long

```
// dangers of truncation
double d = 1.23456789012345678901234567890;
Console.WriteLine(d);
```

What you will find is that d has been `silently truncated` without warning to only hold the value `1.23456789012346`. When we say `truncated` the value has actually been rounded up, but beware.

### Difference between `significant digits` and `exponential values`.

***This is optional depending on time and the class level***

Try the following

```
Console.WriteLine(double.MinValue);
Console.WriteLine(double.MaxValue);
```

The double can hold about 15 significant digits, but can go from -10^300 to +10^300 so a huge range of numbers!

### Computers Store Numbers Only Approximately

```
double d1 = 0.1;
double d2 = 0.2;
if (d1 + d2 == 0.3)
{
    Console.WriteLine("the numbers are the same");
}
else
{
    Console.WriteLine("the two numbers add up to give " + (d1+d2));
}
## The latter item is printed
```

### Decimal data type

For financial calculations it is important to be as precise as possible.

With `float` and `double` we have decimal numbers eg `200` represented as binary numbers eg `11001000`. This is exact with no rounding errors. But with decimal numbers eg 1/3 = 0.3333 for ever, there are rounding errors introduced.

As an example try running the following code and discuss:

```
double total = 0;
for (int i=1; i<8192; i++){
    total += 0.7;
}
Console.WriteLine(total);
```

So we see that 0.7 * 8192 should be 5734.4 but rounding errors have caused it to show 5733.69999 which is quite different. So take care!

To help with rounding errors and in particular for financial calculations we have a new data type, the `decimal` type

```
// decimal : can think of `m` as money to help to try and remember it
decimal d = 1.23m;
```

`decimal` data type is 128 bits long and is designed to represent particularly monetary values precisely, with absolutely no rounding error whatsoever.

Summary :

```
float f = 1.23F  // 32 bits

double d = 1.23  // 64 bits

decimal dd = 1.23m // 128 bits
```

### null

`null` can be used to explicitly state a 'nil' value for strings and other non-numeric data types

```csharp
string x = null;
```

## DateTime

```
// new date object mapped to midnight, 1 January 0001
// note : var can be used as shorthand for DateTime to save space
var d = new DateTime();
// midnight 
var d = DateTime.Today;
// now
var d = DateTime.Now;

var d = new DateTime(2019,12,12,01,01,00);

// add one day
d = d.AddDays(1);
// add one month
d = d.AddMonths(1);

We can format the date to a specific pattern thus
DateTime.Now.ToString("dd-MM-yyyy");
myDate.ToString("yyyy-MM-dd HH:mm:ss")
```

### DateTimeOffset (consider as default for application defvelopment)

```
DateTimeOffset is considered the default DateTime object to use in production 
systems where it is important to know the exact time that something took place
DateTime yyyy-mm-ddTHH-MM-SS+hh:mm where +hh:mm is the offset from GMT in hours

Offset is represented as a TimeSpan which can be hh:mm:ss.0000000

An alternative to DateTimeOffset is to use
DateTime and
DateTime.Kind = DateTimeKind.Utc
```

### Noda Time

Improved testing logic

Better handling of dates

Time zone is never assumed

### Milliseconds And Ticks

It's possible to create a stopwatch to measure how fast your code is running!

When dealing with very tiny amounts of time we can either use milliseconds (1/1000 seconds) or ticks which have a value of 1/10 million seconds.

```
var startTime = DateTime.Now;
// do your stuff here eg count to 100 million or implement System.Threading.Thread.Sleep(1000)
var endTime = DateTime.Now;
Console.WriteLine("Elapsed time is {0}",endTime-startTime);
Console.WriteLine("Elapsed time is {0}",(endTime-startTime).TotalMilliseconds;
Console.WriteLine("Elapsed time is {0}",(endTime-startTime).Ticks;
```

```
var t = DateTime.Now;
// add one millisecond
t = t.AddMilliseconds(1);
// add one tick!
t = t.AddTicks(1);
```

### Stopwatch

```csharp
### Add In A Stopwatch

When dealing with very tiny amounts of time we can either use milliseconds (1/1000 seconds) or ticks which have a value of 1/10 million seconds.

​```cs 
var s = new Stopwatch();
s.Start();
// run your code
Console.WriteLine(s.ElapsedMillisends());
```

### Correct Loop In Notes

Change to 

```csharp
double total = 0;
for (int i=1; i<8192; i++){
    total += 0.7;
}
Console.WriteLine(total);
```

```

### bytes

Every computer stores data using bits which take a value of 1 or 0. We don't normally display raw bits but we do display collections of 8 bits which we call bytes.

```
// from raw binary
byte b = 0b10101010;  
// from hex eg ff which equals 11111111 in binary = 255 decimal
byte b = 0xff;
// from decimal
byte b = 14;

byte bMin = 0;
byte bMax = 255;
```

byte values range from `0` which is `00000000` in binary to `255` which is `11111111` in binary.

## buffer

​```csharp
byte[] buffer = new byte[4000];
```

### char

When we hit the `f` letter on our keyboard the electronics sends a binary code which represents a number from our keyboard into our computer. The number maps to each letter using the `ASCII code`. (see Wikipedia or Google)

```
char char01 = 'f';
Console.WriteLine(char01);
// convert to a number ie 102 in this case
Console.WriteLine((int)char01);
// convert from a number to a char - from 103 to g in this case
char char02 = (char)103;
Console.WriteLine(char02);
```

bytes hold 8 bits of data where the value is between 0 and 255.

chars hold 16 bits of data because we have to think of letters in other languages, which is more than 255.

In order to standardise across the world which numbers represent which letters, we use Unicode. Using Unicode we can create standards for all languages and symbols in use across the world.

Unicode can be UTF-8 with 8 bits or UTF-16 with 16 bits.

8 bit Unicode holds the (trivial) original characters used in computers. This is often used on the web for simplicity. Check out bootstrap boilerplate code at [http://getbootstrap.com/docs/4.1/getting-started/introduction/#starter-template](http://getbootstrap.com/docs/4.1/getting-started/introduction/#starter-template) as an example!

16 bit Unicode holds all characters in use from languages around the world. This is the default for C#.

## Strings are arrays of chars

```csharp
char[] charArray = myString.ToCharArray();
```

### Const and ReadOnly

Use instance attribute `readonly` because it can be used with a constructor and it's fine with the value changing. `const` changes the values into literal values which become hard coded into the code, so are not so flexible.

```
// don't use this
const x = 500;
```

```
// use this
readonly string y;
```

`const` can be used for fixed values 

Microsoft recommends PascalCase for const values.

Some developers also use CONSTANT_VARIABLES_LIKE_THIS which normally is pretty clear what they mean!

```
const string DontChangeMe = "I don't change";

USES LITERAL AT COMPILE TIME - BETTER USE READONLY  IN CONSTRUCTOR
```

### var

`var` can be used to imply a data type which the compiler can infer.

```
// assume integer
var i = 100;
// assume double
var d = 1.0;
// assume string
var s = "I am a string";
// assume DateTime 
var d = DateTime.Now;
```

### aliases

Depending on the class this question may be asked so can be addressed as and when it arises

string or String can both be used but this would be the norm:

```
// declare a variable
string helloWorld;
// declare instance of String class
String x = new String();
```

this also is the same with

```
// use this
int x;
// also works
Int32 y;
```

and

```
bool y;
Boolean z;
```

or

```
byte b;
Byte B;
```

finally

```
object o;
Object O;
```

### default

```
// will be null
string x = default;
// will be 0
int y = default;
```

### Null Check Operator ?.

Rather than explicitly check for `null` we can do the following

```
// this string may or may not be null
string authorName = null;

// want to get the length of this string but if it's null it will throw an exception
int nameLength = authorName.length;

// so use null check operator instead which returns null rather than exception if target is null
int? nameLength = authorName?.length;
```

### Null-Coalesce Operator ??

If we want to return a result rather than null if the target is null we can use the `null coalesce operator ??`

```
// in this case we want to return -1 if the name is null

string authorName = null;
int? nameLength = authorName.length ?? -1;

??    Int y = bob.Age ?? 18;               if y is NULL then assign 18 else assign bob.Age
	

	int?x = 500
	int y = x ?? 1;       ==> will be 500
	
	int?x = null
	int y = x??1  			==> will be 1 as x is null

```

### Test for a type : If .. is ..

### Test for a type

```
if (o is int i) {  
	// use i
}
```

### Tuples

Tuples are small, lightweight, custom-made objects that make it easier to return one object as the result of an operation. For example if a method returns one object we can create a tuple to be the return type.

Tuples always existed but now we can also name the items within, and create faster struct ValueTuples which are mutable and all the fields are public, like a struct

To use tuples we can use a .NET Core project or in .NET Standard we must use the Nuget Package `ValueTuple`

# Tuples - Old Declaration

```

Tuple<string, int> GetPerson1()
{
    return Tuple.Create("Bob", 22);
}

```

# Tuples - C#7

must install Nuget ValueTuple

```csharp

(string name, int age) GetPerson2()
{
    return ("Jill", 33);
}
WriteLine($"{GetPerson2().name} is {GetPerson2().age}");

// assign tuples to variables
var tuple01 = GetPerson2();
WriteLine($"{tuple01.name} has age {tuple01.age}");

// deconstruct
(string name, int age) = tuple01;
WriteLine($"{name} has age {age}");
```

# Full Example

```csharp
using System;

namespace lab_82_tuple
{
    class Program
    {
        static void Main(string[] args)
        {
            DoThis();
            Console.WriteLine($"AlsoDoThis = {AlsoDoThis()}");

            int output = AndThis(out string y);

            Console.WriteLine($"AndThis : {output,-10}{y}");

            var output2 = TupleThis();
            Console.WriteLine(output2.Item1);
            Console.WriteLine(output2.Item2);

            var output3 = TupleThisAlso();
            Console.WriteLine(output3.NumberA);
            Console.WriteLine(output3.StringB);

        }

        static (int NumberA, string StringB) TupleThisAlso()
        {
            return (33, "more text");
        }

        static Tuple<int,int> AndThis()
        {
            return new Tuple<int, int>(100, 100);
        }

        static void DoThis() {
            Console.WriteLine("I am doing nothing");
        }

        static int AlsoDoThis()
        {
            return -1;
        }

        static int AndThis(out string y)
        {
            y = "returning this string";
            return -100;
        }

        static (int,string) TupleThis()
        {
            return (22, "and some text");
        }

    }
}
```

### Tuples

### Tuples

Tuples are small, lightweight, custom-made objects that make it easier to return one object as the result of an operation. For example if a method returns one object we can create a tuple to be the return type.

Tuples always existed but now we can also name the items within, and create faster struct ValueTuples which are mutable and all the fields are public, like a struct

To use tuples we can use a .NET Core project or in .NET Standard we must use the Nuget Package `ValueTuple`

```
// construct tuples - old CSharp declaration
Tuple<string, int> GetPerson1()
{
    return Tuple.Create("Bob", 22);
}

// construct tuples - C#7 declaration (must install Nuget ValueTuple)
(string name, int age) GetPerson2()
{
    return ("Jill", 33);
}
WriteLine($"{GetPerson2().name} is {GetPerson2().age}");

// assign tuples to variables
var tuple01 = GetPerson2();
WriteLine($"{tuple01.name} has age {tuple01.age}");

// deconstruct
(string name, int age) = tuple01;
WriteLine($"{name} has age {age}");
```

### Objects

## Checked

## Dynamic

```csharp
dynamic x = 10;
Console.WriteLine(x+1);
dynamic y = "hello";
Console.WriteLine(y+1);
```

# Casting

## Implicit casting

When we convert an integer to a decimal number, for example 100 to 100.00 then there is no risk of data loss so we call this a `safe` or `implicit` cast. In this case we don't need to write any extra code and the compiler will do the data conversion for us.

```csharp
// Convert integer to double
int i = 100;
// implicit cast - no extra code required
double d = i;
```

## Explicit casting

When we convert a decimal number back into an integer there is a risk of data loss. For example converting 23.67 to an integer 23 means 0.67 has been lost. We call this `truncation` of data and the data is simply discarded.

```
// Create a decimal number
double d = 23.67;
// Cast to an integer
int i = (int)d;
Console.WriteLine("{0} has been cast to {1}",d,i)
```

## Boxing

Occasionally we must deal with a certain data type but convert to another data type. Sometimes it is not possible to directly convert it so we must use other methods. One method which programmers use to get around data type restrictions is to `cast` the item to the general `Object` type. This general type of conversion to the `Object` type is called `boxing`.

```
// create a string
string s = "I am a string";
// convert to object type
object o = s;
```

## Unboxing

We can reverse this process also - this is called `unboxing`

```
// create a string
string s = "I am a string";
// convert to object type
object o = s;
// convert o back to a string
string t = (string)o;
```

Casting ExceptionsNote that if a cast is attempted and the two items are not related then an exception will be thrown which is why it's good to either

Use the IS keyword to check before doing this cast.

Use the AS keyword which does not throw an exception

AS keywordThe safer way to perform a cast which never throws an exception is by using the AS keyword.// instantiate the parentParent p = new Parent();// test for successif (c != null){// use c here}//Example Useclass MainClass{static void Main(){object[] objArray = new object[6];objArray[0] = new ClassA();objArray[1] = new ClassB();objArray[2] = "hello";objArray[3] = 123;objArray[4] = 123.4;objArray[5] = null;

```
for (int i = 0; i < objArray.Length; ++i)
    {
        string s = objArray[i] as string;
        Console.Write("{0}:", i);
        if (s != null)
        {
            Console.WriteLine("'" + s + "'");
        }
        else
        {
            Console.WriteLine("not a string");
        }
    }
}
```

## Labs

### 1. Cast from double to integer

Create a method which takes a double as a parameter and returns the integer which has been cast from this double.

### 2. Box then Unbox

Create a DateTime object corresponding to

```
1 Jan 2001 at 1 minute after midnight
```

Box it to an object

Unbox it back to a DateTime object and return it as a string in the format

```
DateTime.ToString("MM/dd/yyyy HH:mm:ss")
```

# Casting With Inheritance

## Casting from parent to child class

If we have two classes which are related through inheritance such as :

```
// Base or Parent class
class Parent {}
// Derived or Child class
class Child : Parent {}
```

and we instantiate both classes

```
// instantiate parent class
Parent p = new Parent();
// instantiate child class
Child c = new Child();
```

we can infer that p and c are related by inheritance.

## `is` keyword

We can test for the truth of this relationship using the `is` keyword

```
if (c is Parent){
    // continue if c (from the Child class) is related to the Parent class
}
```

## Casting from child to parent

We can now cast from child to parent.

```
// cast from child to a new parent object
Parent p2 = c;
```

When dealing with inheritance this is the only way we can perform the cast; it will not work the other way (parent to child) unless we explicitly export the parent fields and recreate the child from scratch.

## Casting Exceptions

Note that if a cast is attempted and the two items are not related then an exception will be thrown which is why it's good to either

1. Use the IS keyword to check before doing this cast.
2. Use the AS keyword which does not throw an exception

## AS keyword

The safer way to perform a cast which never throws an exception is by using the AS keyword.

```
// instantiate the parent 
Parent p = new Parent();
// test for success
if (c != null){
    // use c here
}
```

# Operators

## Unary Operators

Unary operators take only one input and the most common one that you will use from day to day is the incremental operator

### Incremental Operator

This just adds or subtracts one each time

```
// set x to 10
int x = 10;
// increment to 11
x++; 
// decrement back to 10
x--;
```

We have to take care when assigning values because y = x++ is different to y = ++x

y = x++

```
// set x to 10
int x = 10;
// y = 10 and then increment x to 11
int y = x++;
```

y = ++x

```
// set x to 10
int x = 10;
// increment x to 11, and then y = 11
int y = ++x;
```

So take care!

### ! NOT operator

! NOT operator is very useful to reverse the result of a condition which has returned true or false.

```
// false
Console.WriteLine(!true);
// true
Console.WriteLine(!false);
```

## Binary Operators

### BODMAS

With all operators be aware of the simple BODMAS mathematical rules

```
1.  () brackets first

2.  order eg squared, cubed etc

3.  division and multiplication come next

4.  addition and subtraction comes last
```

You would be surprised how many programming test question banks contain one BODMAS question

Two examples :

```
96 + 20 / 5 - 77 / 11           

    96 + (20/5) - (77/11) 
    96 + 4 - 7
    93

(20 + 4 to the power of 2/4 * 3)/16 + 7

    In the brackets work out 4 to the power 2 = 4 squared = 16 first
    (20 + 16/4*3)/16 + 7
    (20 + 12)/16 + 7
    32/16 + 7
    2+7
    9
```

### % Modulus Operator

The modulus operator leaves the remainder after division which is useful if we wish to obtain a fractional element eg 63/60 is the same as 1 remainder 3 and we can obtain the 3 using the % modulus operator

```
// 100/8 = 12 remainder 4 so the answer returns 4
Console.WriteLine (100%8);
```

**## && AND Operator**

With a `truth table` we have certain inputs and outputs

********AND table********

| IN | IN | OUT |

| ---- | ---- | ---- |

| 1 | 1 | 1 |

| 1 | 0 | 0 |

| 0 | 1 | 0 |

| 0 | 0 | 0 |

We can obtain these results programmatically using the && operator

```

Console.WriteLine(1&&1);

Console.WriteLine(1&&0);

Console.WriteLine(0&&1);

Console.WriteLine(0&&0);

```

This works equally well with `true` and `false`

```

Console.WriteLine(true&&true);

```

**### || OR Operator**

Similarly we have the OR operator

********OR table********

| IN | IN | OUT |

| ---- | ---- | ---- |

| 1 | 1 | 1 |

| 1 | 0 | 1 |

| 0 | 1 | 1 |

| 0 | 0 | 0 |

We can obtain these results programmatically using the || operator

```

Console.WriteLine(1||1);

Console.WriteLine(1||0);

Console.WriteLine(0||1);

Console.WriteLine(0||0);

```

**### ^ XOR Operator**

Finally we have the ^ XOR Exclusive OR operator

********XOR table********

| IN | IN | OUT |

| ---- | ---- | ---- |

| 1 | 1 | 0 |

| 1 | 0 | 1 |

| 0 | 1 | 1 |

| 0 | 0 | 0 |

We can obtain these results programmatically using the ^ operator

```

Console.WriteLine(1^1);

Console.WriteLine(1^0);

Console.WriteLine(0^1);

Console.WriteLine(0^0);

```

### Short Circuit

```
Short circuit : if a||b                    if a is a method and true, don't call b

||  OR
|   OR	

```

&& AND
& AND

## Ternary Operator

## Lambda ⇒ Operator

## Lambda Operator

Lambdas are a brief way of writing a method.

One advantage of Lambdas is that particularly when we are executing a loop they can perform quick one-line method calcuations to obtain results very quickly and easily.

For example if we have an array with some elements null

```
string[] myArray = { "a", "b", "c", null, "e"};
```

we can clone this array and remove null items very easily with Lambda

```
var clone01 = myArray.Where(item => item != null);
```

or removing items which are null or "" (empty strings)

```
var clone02 = myArray.Where(item => !string.IsNullOrEmpty(item));
```

# Conditional Operators

If .. Else If .. Else Statements

Perhaps the first decision making code that every programmer writes is the If statement.

It allows us to make a decision, for example, if x is greater than 10, do this.

```
int x = 5;
if(x>10){
    Console.WriteLine("x is high, greater than 10");
}
```

We can add multiple decisions

```
int x = 5;
if(x>10){
    Console.WriteLine("x is high, greater than 10");
}
else if(x>5){
    Console.WriteLine("x is greater than 5 but less than 10");  
}
else{
    Console.WriteLine("x is less than or equal to 5");      
}
```

## Nested If Statements

At this point we have to be very careful as code can get confusing. It is possible to 'nest' decisions within decisions although, for the sake of debugging, we should keep the depth of nesting to a minimum.

```
// Pseudo Code

input x,y,z

if (x>10)

    if(y>11)

        if(z>12)

            do this

    ... etc
```

## Conditional Operator ? :

Because it's very common to write if.. statements, programmers have invented a one-line version of the following :

```
// Pseudo Code

if (condition is true) then do this otherwise do this
```

The C# code for this has this structure:

```
// Pseudo Code

if (condition) ? true : false;
```

An actual example would look like

```
int x = 5;
(x>10) ? Console.WriteLine("x is high") : Console.WriteLine("x is low");
```

We can also use this to output values depending on the input

```
int x = 5;
string y = (x>10) ? "high" : "low";
```

## Switch Operator

Instead of multiple if . . statements we can produce a much more consise structure to deal with multiple tests on the value of an item.

```
int x = 10;
// main structure is surrounded with a 'switch' statement
switch(x){
    case 1:
        Console.WriteLine("Value is 1");
        // break out
        break;
    case 2:
        Console.WriteLine("Value is 2");
        // break out
        break;
    // can 'fall through' several cases
    case 3:
    case 4:
    case 5:
    case 6:
        Console.WriteLine("Value is in the range 3 through 6 inclusive");
        break;
    default:
        Console.WriteLine("Default Case");
        break;
}
```

### Nullable Operator

```csharp
int? x = Field01.length;   // OK if Field01 is null
```

# Null Conditional Operator ?. Returns Null If Null

```jsx
a?.name   returns null if a is null or name otherwise
```

# ??

```csharp

```

# Loops

## Introduction

Looping is a basic part of programming. The official term is to `iterate` over a loop when we count through for example all of the customer records in a database.

There are some basic constructs which we will look at here.

## For loop

The most basic construct in looping is the for loop.

For loops are used when we are counting a fixed number of times.

We can use them quite often

1. Counting a fixed number of times eg 1 to 100
2. Counting to a variable target for example we often loop through an array and to do this we count from 0 to the length of an array minus 1. So if an array has 5 items the length is 5 and we count through items 0,1,2,3,4 where nearly all computing uses zero based counting starting from 0.

Let's build a basic for loop then :

```
// count from 1 to 10
for (int i = 1; i <= 10; i++){
    Console.WriteLine(i);
}
```

To dissect this code let's read this in pseudocode :

```
// pseudocode for loop
start at number 1, count until we are greater than or equal to the number 10, increasing by 1 each time.  Inside each loop print out the number we have reached.
```

Let's code the array also

```
// simple array
int[] myArray = {10,20,30};
// now iterate over the array
for (int i = 0; i<myArray.length; i++){
    // print out the ith item ie item 0 then 1 then 2 noting that myArray.length = 3 here
    Console.WriteLine(myArray[i]);
}
```

If we do this correctly we will print out 10 then 20 then 30.

## While loop

Often we don't know the exact number of loops we need to run through. This can be in many areas of life for example reading through a database.

We can use two types of loops to do this

1. While loop
2. Do..While loop

Let's look at the while loop first

```
// pseudo code

while(test whether a condition is true or false and if it's true keep going but if it's false, exit the loop)
{
    // while condition is true run this code
}
```

```
// initialise counter to zero
int counter = 0;
// set up the loop to count from 0 to 9 inclusive
while(int counter < 10){
    Console.WriteLine(counter * 10);
    // increment the counter
    counter++;
}
```

This code will run until the counter reaches a set value, then exit.

## Do..While loop

In some circumstances we may wish to run the code at least once first, and then test to see if a condition is true or false. If it's true we loop again but if not we exit.

The Do..While loop runs code then does the test at the end.

```
// initialise counter
int counter = 0;
// loop
do{
    Console.WriteLine(counter);
    counter++;
}
while(counter<=10)
```

Note that to get this loop to run 10 times I have changed the condition to <= which means it will count from 1 through 10 inclusive. The previous loop counted from 0 through 9.

## ForEach loop

When dealing with arrays we have another way of looping which is much cleaner than using a for loop.

```
int[] myArray = {10,20,30};
foreach(int item in myArray){
    Console.WriteLine(item);
}
```

## Labs

1. Build a for loop to count from 1 to 100. Also each loop add the item to a cumulative total. Return the final cumulative total.
2. Start with the number zero. Create a loop which jumps by 3 each time ie 0,3,6,9 etc. Print out the number each time. Exit the loop when the number is greater than or equal to 25. Return the highest number that the loop reaches.

# Break Out Of Loops 08

### Introduction

If we are inside a loop it may be that we may wish to exit early. There are several options available :-

- break
- continue
- goto
- return
- throw

### break

`break;` can be used anywhere inside a loop to exit early

```
for (int i = 0; i < 10; i++){
    Console.WriteLine(i);
    // Break out of the loop prematurely
    if (i==5){
        break;
    }
}
// code will continue here
// . . .
```

### continue

`continue` can be used to prematurely finish one loop and begin the next loop. So we are not exiting the loop structure (like break) but we are just finishing this one loop and starting the next loop

```
int counter = 0;
while(counter<10){
    counter++;
    Console.WriteLine(counter);
    // if the counter < 4 then at this point just restart the loop
    if (counter < 4) continue;
    Console.WriteLine(counter*4);
}
```

### goto

`goto` was one of the reasons we invented OOP programming - so we didn't have to use this word!!!

`goto` envisions everything poor about programming - unpredictable statement flow, furiously hard to debug, etc etc - the list just goes on and on!

But C# does have a `goto` statement so just be aware of it!!! In general do not use it.

```
// Run this line
Console.WriteLine("this line is executed");
// jump from this point to marker 'a:'
goto a;
// This line will never be reached
Console.WriteLine("this line will never be executed (unreachable code)");
// jump to here
a:
Console.WriteLine("this code has been jumped to at point a")
Console.WriteLine("continuing on . . . ");
```

### return

When we call a method which has to return an item, we can prematurely finish the logic in the method by executing a `return` statement and `return` the required value.

```
static string DoThis(int x){
    if (x < 10) return "Your number is low";
    if (x < 20) return "Your number is medium";
    if (x < 30) return "Pretty high";
    // this is the default case
    return "off the charts"
}
Console.WriteLine(DoThis(5));
Console.WriteLine(DoThis(15));
Console.WriteLine(DoThis(25));
Console.WriteLine(DoThis(35));
```

### throw

In come circumstances it is appropriate to communicate with other parts of the program by 'throwing' an exception. This, in layman's terms, is to generate a computer error which can be passed to other parts of the program to be handled.

```
int counter = 0;
// while(true) will loop for ever
while(true){
    counter++;
    if(counter>100000){
        // create an exception and exit the program
        throw new Exception ("Your number is too big");
    }
}
```

## Labs

### Break Lab

Build a lab which takes the following string array as an input

```
["1","2","3","4","5","6","7","EXIT","8","9","10"]
```

Iterate over this array and keep looping until the "EXIT" item is reached.

Each loop cumulate a counter of the number cubed ie 1 cubed + 2 cubed + 3 cubed etc.

Test for a condition that the item equals "EXIT" and when it does, return the current cumulative value and exit the loop.

### Continue Lab

Repeat this lab but add in the additional condition not to process any numbers which are multiples of 3 ie don't process 3, 6, 9 etc.

So the value returned should be the sum of 1 cubed, 2 cubed, 4 cubed etc

# Arrays And Collections

***Arrays are fixed-length***

***Collections are variable-length***

# Arrays

```
// delcare an array to hold 10 integers
int[] myArray = new int[10];
```

```
// initialize an array with data (literal integers, strings etc)
int[] myArray = {1,2,3};
```

We can create two or three dimensional arrays of data as well

```
// create 10x10 grid
int[,] my2dArray = new int[10,10];
```

```
// create a 10x10x10 cubic grid lattice
int[,,] myCube = new int[10,10,10];
```

## Benefits Of Arrays

Arrays are fixed-length and also store data in a pigeon-hole structure where each item has a unique memory address. This allows incredibly fast reads and writes of data direct to individual cells.

In the picture below we can see an array with six elements.

The first element (bottom row) has index 0, running up to the last element index 5

The data is integers which has a length of 32 bits = 4 bytes per item. The actual data is in the middle row.

The top row holds the memory address which jumps 4 bytes each time.

<pre>

</pre>

<img src="[http://www.guideforschool.com/wp-content/uploads/2013/11/1d-one-dimensional-array-memory-address-calculation.jpg](http://www.guideforschool.com/wp-content/uploads/2013/11/1d-one-dimensional-array-memory-address-calculation.jpg)" width="800" />

The only thing that's a bit ficticious in the picture above is that the memory addresses don't look like real memory addresses on a computer. In the diagram below the addresses resemble more closely the addresses which would be used to access data in a real stick of RAM memory.

<img src="[https://slideplayer.com/slide/9444786/29/images/3/Variables+and+memory+addresses.jpg](https://slideplayer.com/slide/9444786/29/images/3/Variables+and+memory+addresses.jpg)" alt="" width="500"/>

Arrays are said to be `immutable`.

This means we can't alter the length of an array once it has been created in memory.

Remember with arrays :

```
Very fast read/write

Fixed size
```

The best then that you can do if you want to change the length of an array is create a completely brand new copy of the array.

```
// create array length 10
int[] myArray = new int[10];
// create a copy of original array with length 100
Array.Resize(ref myArray,100);
```

This is a very slow and memory-inefficient process, so be warned!

### Array.Length

This is the number of elements in the array, even if no data is present

### Array.Sort

This sorts the elements of an array

## Enumerable.Range - Create An Array And Fill It

```csharp
using System.Linq;

var myArray = Enumerable.Range(1, 20).ToArray();

foreach(var item in myArray)
{
    Console.WriteLine(item);
}
```

## Lambda Functions With Arrays

### Array Foreach

```sql
int[] myArray = new int[] { 1, 2, 3 };
            
Array.ForEach(myArray, i => Console.WriteLine(i));
```

### Array Aggregate (Total)

array.Aggregate can perform aggregate functions over an array eg sum the values

```csharp
// add up all the members of an array (sum total)
myArray.Aggregate((a,b)=>a+b);

var nums = new[]{1,2,3,4};
var sum = nums.Aggregate( (a,b) => a + b);
Console.WriteLine(sum); // output: 10 (1+2+3+4)
```

### Array Aggregate (output as CSV)

```csharp
var chars = new []{"a","b","c", "d"};
var csv = chars.Aggregate( (a,b) => a + ',' + b);
Console.WriteLine(csv); // Output a,b,c,d
```

# Collections

## Generics  <T>

So `<T>` is a placeholder for any type of data

## Lists

Lists are like arrays in that they still have a numeric index which can be very handy when referring to data.

To get all the items out we can use `foreach`

```
foreach(int i in myList){
    Console.WriteLine(i);     
}
```

or to keep things all on one line

```
// code and output are all one one line so nice and easy
Console.WriteLine(string.Join(", ", myList));       // 100,200,300
// or output to multiple lines : use '\\n' (new line) as the separator character
Console.WriteLine(string.Join("\\n", myList));       // 100 (new line) 200 (new line) 300 (new line)
```

### IndexOf

We can locate where in our list a particular item resides

```
// create a new list
var myList = new List<string>();
myList.Add("one");       // index 0
myList.Add("two");       // index 1
myList.Add("three");     // index 2
Console.WriteLine(myList.IndexOf("three"));  // returns 2
```

### array[] syntax

We can also use standard array[] syntax to obtain items at a certain given index

```
Console.WriteLine(myList[2]);   // returns "three"
```

### Insert Items At A Given Index (similar to Javascript 'splice')

We can insert an item in the middle of our list with `Insert`

```
myList.Insert(2,"two and a half");         // pushes "three" to index 3 now
```

### Lists Of Objects

```
public Struct Point{
    // fields are public
    public int X;
    public int Y;
}
```

```
// create an empty list
var PointsList = new List<Point>();
// cycle from 1 to 10
for (int X = 1; X<=10; X++){
    int Y = X * X;
    // create a point : note we will first have to add a `constructor` to our code above!
    Point p = new Point(X,Y);
    // add new point to the list of points
    PointsList.Add(p);  
}
```

If you iterate you now will see a list of points following the graph `Y=X*X`.

## Dictionary<TKey,TValue>

Lists are useful because they provide the index for us ie 0,1,2,3 etc

If we want to provide our own index we can use a dictionary

```
Unique Index (Key)      Value (Data)

ABC001                  Fred
ABC002                  George
ABC003                  Bill
DEF001                  Tanya
```

Here we see a dictionary structure where the index is a non-trivial character set. The values must be unique but they might be alpha-numeric.

Creating a dictionary is much the same as creating a list

```
var myDictionary = new Dictionary<int,string>();
```

Now to add values to the dictionary we can use

```
// add item to Dictionary 
myDictionary.Add(1,"one");
```

Note that if you add a duplicate key then an `exception` will be thrown

To avoid this we can use

```
// safely add entries into the Dictionary
myDictionary.TryAdd(2,"two");
myDictionary.TryAdd(3,"three");
```

These will gracefully fail if we add duplicates so let's try

```
// this is OK
Console.WriteLine(myDictionary.TryAdd(4,"four"));  // true
// duplicate so fail
Console.WriteLine(myDictionary.TryAdd(4,"four"));  // false
```

To access an individual item inside our dictionary we can reference by our key

```
Console.WriteLine(myDictionary[4]);  // "four"
```

So dictionaries are very useful as key/value pairs of data where the key has to be a unique index.

To iterate over our dictionary we iterate over our keys.

```csharp
// dictionary of KEY-VALUE PAIRS
// KEY IS INDEX 0,1,2,3
// VALUE IS STRING SAVED 
// pairs  0,"hi"     1,"there"
var dictionary = new Dictionary<int, string>();
dictionary.Add(0, "hi");
dictionary.Add(1, "hi"); 
dictionary.TryAdd(0, "hi");  // silently fail
dictionary.TryAdd(2, "there");

// GET VALUES
foreach(KeyValuePair<int,string> item in dictionary)
{
    Console.WriteLine($"{ item.Key,-10}{item.Value}");
}

```

## Stack vs Heap - Stack holds value types and pointers to Heap.  Heap holds reference types

## Queue : Enqueue, Dequeue, Peek, Contains

## Stack : Push, Pop, Contains, Peek

## Enum

We have already mentioned structs as mini-classes which are very useful when we need a quick and fast data structure.

Another structure which is very useful is an Enum.

If we think of the days of the week or the months of the year then they are going to be fixed entities regardless of the operating system or programming language that we are using. So for these predictable data types it's good to create a written structure so that people can easily find and use them.

```
enum Days {
    Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday
}
```

If we create this structure then do

```
Console.WriteLine(Days.Sunday);    // returns 'Sunday'
```

We can also understand that by default numbers are allocated to each item starting at number zero.

```
Console.WriteLine((int)Days.Sunday);   // 0
Console.WriteLine((int)Days.Monday);   // 0
Console.WriteLine((int)Days.Sunday);   // 0
```

Just be aware of this because we will meet this in two common circumstances

1. Days of the week run from Sunday (0) through Saturday (6)
2. Months of the year run from January (0) through December (11)

### Enum Flags

Sometimes you will see [Flags] above an enum - in this case the numbering will be manually set and will be a multiple of 2

```
enum Permissions {
    read = 1;
    write = 2;
    execute = 4
}
```

This enables combinations eg read + write + execute = 7

## Sets

Sets are useful to determine the intersection

### LinkedList<T>

Very fast to add/remove items

No index

```csharp

LinkedList<string> linkedlist01 = new LinkedList<string>();

linkedlist01.AddFirst("hi");
linkedlist01.AddFirst("there");
linkedlist01.AddFirst("how");
linkedlist01.AddFirst("are");
linkedlist01.AddFirst("you");

Console.WriteLine();
Console.WriteLine();
Console.WriteLine("==linked list");
Console.WriteLine();
Console.WriteLine($"Length of list - {linkedlist01.Count}");
Console.WriteLine();
foreach (string item in linkedlist01)
{
    Console.WriteLine($"list item is {item}");
}

Console.WriteLine();
Console.WriteLine("Removing one item - middle item 'how'");
linkedlist01.Remove("how");

Console.WriteLine();
Console.WriteLine($"Length of list - {linkedlist01.Count}");
Console.WriteLine();
foreach (string item in linkedlist01)
{
    Console.WriteLine($"list item is {item}");
}
```

### HashSet<T>

Hash set is a list with no duplicate members

It also has no index, so no ordering of members

Because of this it is optimised for searching and is considerably faster than a traditional list

```csharp
var hashset = new HashSet<int>();
hashset.Add(10);
hashset.Add(20);
hashset.Add(10); // duplicate value overwritten but no exception
foreach (var item in hashset) {
    Console.WriteLine(item);         // 10,20
}
```

The main reason to use HashSet is when using Set operations eg

```csharp
HashSet set3 = set1.Union(set2);
```

### ArrayList of Objects

### HashTable Of Key/Value Object Pairs : Don't Use

```csharp

Hashtable h = new Hashtable();

h.Add("fred", "drinks slowly");
h.Add("jerry", "does not drink unless really thirsty");
h.Add("tom", "loves only milk");
h.Add(1, "numerical entry");

foreach( object key in h.Keys )   // note : Hashtable key can be any data type
{
    Console.WriteLine(key);
    Console.WriteLine(h[key]);
    Console.WriteLine("==");
}

}
```

### Sorting

Cannot sort Dictionary, Queue, Stack

Can sort SortedDictionary, SortedList, SortedSet

### BitArrray is a collection of 1 and 0

Immutable collection

# Exceptions

## Introduction

Exceptions and error handling are part of computer logic - we must expect the unexpected, and we must be prepared for crash events or miscalculations which can cause our computer to crash or generate the wrong answer.

## Errors

When a computer program produces the wrong answer, we call this an `error`.

For example if your bank calculates the amount monthly you have to repay on your mortgage will you ever know if they have made a mistake? It would be very difficult for you to check and perhaps the best way would be to check with a competitor! But since you don't have access to the raw code you would not be able to check. This is why we perform testing on our applications, to check they are producing the correct answers given a certain set of input data.

An error may or not be detected, and the computer does not necessarily crash but just keeps on working as if everything is OK.

## Exceptions

An `exception` is a `run-time` error when the application`crashes` for some reason

There are many different reasons why an exception might occur.

Examples include

```
| Exception Type            | Reason                                                               |
|---------------------------|----------------------------------------------------------------------|
| DivideByZeroException     | /0                                                                   |
| FormatException           | Invalid Data Type                                                    |
| OverflowException         | Too much data for allocated memory space                             |
| FileNotFoundException     | Cannot find a file at the path specified                             |
| IndexOutOfRangeException  | Trying to reach an array value outside of the bounds of the array    |
| OutOfMemoryException      | Not enough memory (RAM) to process the operation                     |
| StackOverflowException    | Overflow in the stack area of memory                                 |
| InvalidOperationException | Usually an invalid Method call                                       |
| ArithmeticException       | Arithmetic errors eg mathematical tan() operation producing infinity |
```

### Handled vs Unhandled Exceptions

Exceptions can be either handled or unhandled.

Handled exceptions means that the programmer gets to have a say in how the exception will be dealt with - what errors the user sees, whether the program terminates or not, whether data is lost or not, whether a transaction gets rolled back on a database or not, etc. This is our goal - to make sure all exceptions are handled.

Unhandled exceptions cause a proper computer crash and often spurious, undpredictable error messages can appear on the screen. The program which has been running terminates. Sometimes sensitive data eg file paths can be exposed, which a hacker could use. We want to avoid unhandled exceptions at all costs.

## Try .. Catch .. Finally

In order to handle exceptions we create the following structure

```
// any program code which might cause an exception goes in here
try{
    
}

// the 'catch' block is where exceptions are 'handled' 
// ie the programmer puts code in here to deal with an exception
catch{
    
}

// the optional 'finally' block always excecutes whether or not an exception 
// has taken place or not. 
// Useful for closing a link ('handle') to a file or database
finally{
    
}
```

### Try . . Catch .. Finally Example

Let's try a simple example to see how this code works and we are going to generate a DivideByZeroException trivially to trigger this.

```
int x = 10;
int y = 0;
try{
    // division : but this will generate an exception
    int output = x/y;
}
// this catches the exception and handles it
catch(Exception e){
    Console.WriteLine("an exception has occurred");
}
finally{
    Console.WriteLine("but life goes on . . . ");
}
```

### Specific vs General Exceptions

We can handle multiple exceptions.

For example we can write the following code

```
try{}
// handle specific exception
catch(ArithmeticException e){
    Console.WriteLine("an arithmetic exception has occurred");
}
// handle general exception if not handled above
catch(Exception e){
    Console.WriteLine("a general exception has occurred");
}
```

The more specific exceptions are placed at the top, and the code will proceed until it matches the first exception and then jump into that `catch` block. Once it has finished the `catch` block it will go to the optional `finally` block then proceed after that. Only one `catch` block will be triggered.

### Interrogating The Exception Object `e`

We can also get data about our exception by interrogating the `e` Exception object passed into the catch block when the exception takes place.

```
catch(Exception e){
    Console.WriteLine("a general exception has occurred");
    Console.WriteLine(e);
    Console.WriteLine(e.data);
    Console.WriteLine(e.message);
}
```

## throw new Exception

```
try{
    throw (new Exception("Something bad has happened to your code"));
}
```

or slightly more complex

```
try{
    throw (new NullReferenceException("You handled a null value"));
}
```

### throw;

### Customer Exceptions : Controller

When creating your own own Exception objects which inherit from Exception, it is best practice to make your own three standard constructors which go with the object. Remember constructors are not inherited so must be explicitly declared.

# Using Statement

# Reference And Value Types

# Questions

# C# Questions To Add To CodinGame With Richard's Permission

What we must we do to a variable before we use it? Assign Allocate Initialise Initiate 

What is (10+20)/3+4-5 * 3+1 equal to? 10 3 -1 0 

What is the output of this code? 

```
int sum=0;
for(int i=1;i<10;i++) sum+=i;
Console.WriteLine(sum);

                                            33  55  10  9
```

var myArray = new int[]{1,2,“3”,“4”}; 

What is the value of x at the end?

```
x=10;
x++;
y=x++;
z=x++;
                                            10 11 12 13
```

What is the value of (1==1) true false 1 0 error 

int a = 1000; int b = 2000; 15 seconds
if((a+b)==(b+a)){ Console.WriteLine(“Equal”); } else{ Console.WriteLine(“Not Equal”); }

What is the output of this program? true false Equal Not Equal

int count=0; while(true){ count++; if (count<100) { continue; } if(count>200){ break; } } Console.WriteLine(count);

```
What is the value of count?    0 99 100 200 201                               
```

int a = 5; int b = 2; int c = a/b; Console.WriteLine(c);

```
What is the value of c?      0 2.5 2 1
```

double a = 5; double b = 2; double c = 5/2; Console.WriteLine(c);

```
What is the value of c?      0 2.5 2 1
```

# C-Sharp-Sparta-Labs - Integrate Into Real Code!

### Online Lab Quizzes

Coding Wars

[ProjectEuler.net](https://projecteuler.net/archives)

## Loops

- Create a loop that outputs the numbers 1 to 300 to the screen.
- For every 100th number, have the program output your name, a greeting, or anything else you want to the screen.
- Same as the one above, but for every 5th, 105th, 205th, etc number.
- Count down from 50 to 0 and output the numbers to the screen.
- Implement the four labs above in one file, but create a variable that lets you choose which of the above “exercises” the program will run.

So, for example, you initialize `int option a = 1`, resulting in the program executing the first exercise, `int option a = 2` will execute the second, etc. Bonus: instead of ‘hardcoding’ the value, have the user input a value, either through the command line or a prompt (`ReadLine`)

### FizzBuzz

List the numbers 1 to 100 and output the number except for multiples of 3 output `fizz` and multiples of 5 output `buzz` and of both 3 and 5 output `fizzbuzz`

### Prime Factors

List all the prime factors of an integer input by the user

```
For example

7 has prime factor 7

24 has prime factors 2,2,2,3
```

```
using System;using System.Collections.Generic;namespace csprimefactors{class Program{static void Main(string[] args){int workingNumber;// hold all the factorsvar list = new List<int>();do{Console.WriteLine("Enter Number");string inputString = Console.ReadLine();bool success = int.TryParse(inputString, out int inputNumber);// leave the inputNumber as it is and instead use workingNumber to work down the factorsworkingNumber = inputNumber;if (success){// try all the factors starting at 2for (int i = 2; i <= inputNumber; i++){System.Console.WriteLine($"i is {i}");// be aware multiple factors might exist so set this to false until sure all the factors are exhausted eg 24 = 2x2x2x3bool exhaustedMultipleFactors = false;while (exhaustedMultipleFactors == false){// is i a factorif (workingNumber % i == 0){workingNumber = workingNumber / i;list.Add(i);}else{exhaustedMultipleFactors = true;}}}}else{System.Console.WriteLine("Invalid number - try again");}}// keep iterating until finally divide by itself to get 1 and so exit loopwhile (workingNumber > 1);foreach(int i in list){System.Console.WriteLine(i);}}}}
```

### Pyramid Stars

- Pyramid: ask the user for a number between 1 and 25 (inclusive) for the height of the pyramid, then output a pyramid to the screen. If the user inputs 3, your pyramid will look like this:

```
#
##
###
####
```

Can you right justify the pyramid?

```
#
  ##
 ###
####
```

Can you center the pyramid? Use odd numbers only.

```
#
 ###
#####
```

## BODMAS/BIDMAS

- Take a number and add 15 to that number, multiply the total by 3 and divide by 4, then multiply the result by the square of that number. Round till 4 decimals, don’t lose any fractions.
- Divide the year you born with by the month you born in, then multiply by the cube of the day you’re born on. Note: when you upload this to GitHub, you might, for privacy reasons, want to change the date to a random date.
- If you drive somewhere with a certain speed and it takes you 1,5 hour to reach your destination, how long will it take if you increase your speed by 15%? 75%?

## Data Types : Int

- What is the maximum number you can store in an int? Create an int and store the largest possible number in it. Output the number to the screen. Then increase the number by 1 and output to the screen again, what number do you get?

## Data Type : Byte

- Repeat exercise for byte.

## Data Type : Char : Output All Chars To The Screen

- A char can hold 256 different ‘characters’. Create a loop that will output all these characters to the screen. Hint: `(char) i` (where i is an int) will cast i to a char. Note: not all 256 ‘characters’ actually represent characters. Some of these ‘characters’ are what is referred to as ‘control characters’. The computer might attempt to represent these characters though, but don’t be surprised if you get some weird output.

### Create a test to return the integer value of the character in a string identified by a given index

Pass in to a method a string and an index.

Return the ASCII integer value of the character at that index

Example (“hello”,3) returns the character value of the letter ‘l’ at index 3

## String Manipulation : Reverse A String

- Create a string variable with a certain text, then have the program return the string in reverse. Skip if too hard. Bonus: have the user input the string to be reversed.

## Logical Operators

- Ask the user for two numbers and store these numbers in (two different) ints.
- First check if both numbers are larger than 10. If true, output “Both numbers are larger than 10”, otherwise output “Not both numbers are larger than 10.”
- Then check if at least one number is larger than 10. If true, output “At least one number is larger than 10.”, otherwise output “No numbers are larger than 10.”
- Then check if only one number is larger then 10. If true, output “Only one number is larger than 10.” What would be an appropriate message if this condition is false? Implement this message.
- Make sure you use all of the logical operators (AND, OR, XOR) once.

## Inputting Data

Build a program to input a number from the user on the screen. Depending on the value of the number, output a message - “Your number is high/medium/low”

### Running Your Program With Command Line Parameters : The Args Array

Command line arguments are stored in an “array of chars”. These command line arguments are represented as arguments to your Main method as `string[] args` and you can loop over this string array (use for or foreach).

- Write a program that accepts command line arguments where the user can input his name when starting the program. Have the program output his/her name to the console. E.g. the user runs the program by typing `greeting.exe Luitzen` and the output will be `Good day Luitzen, how are you?`
- Also allow the user to enter multiple names. E.g. “John Fitzgerald Kennedy” and have the greeting include middle names/last names/etc.
- Check whether the user entered any command line arguments. If the user entered any command line arguments, greet the user, otherwise ask for the user’s name, then output the greeting.

## Stopwatch

Count from 1 to a given number which increases in powers of 10 ie 10,100,1000,10000 etc

Each time check how long it takes to count from 1 to this given number

Create a test which checks that the Stopwatch() takes less than 5 seconds.

Find the highest value of n for which you can count from 1 up to 10 to the power n in less than 5 seconds.

Repeat for 10 seconds.

Repeat for 20 seconds!

## DateTime

You can store a particular date in a DateTime object the following way:

```
var start = new DateTime(2000, 1, 1);   // Year, month, day
```

- Create two DateTime objects. One will hold the day of today (use the Now property), the other will hold an arbitrary date in the past. Calculate the difference and then output the difference to the console in number of days.
- Calculate and output the difference in hours.
- Create a stopwatch. When the program starts, the stopwatch starts. Ask the user for input. When the user types “stop”, stop the stopwatch and output the time that passed since the stopwatch was started to the console window

## OOP Basics

### Instantiation

Create a class called Dog and a method called Bark. Instantiate 3 dog objects and make them all bark!

### Instance Methods

Create Dog Class and Grow() method : check when you call this the Age increases by one year and the height increases by 5 as well

### Polymorphism

Create a class called Dog and a virtual method called Bark. Derive 3 child classes Spaniel, Poodle and Greyhound each with override methods called Bark. Create 4 dogs - one of each type and get them all to bark a unique message. This lab is using Polymorphism.

### Polymorphism

Check polymorphism works!

Create a Base Parent class

Create a Derived Child class

Place the same method in both, with the ‘virtual’ and ‘override’ keywords. Test that the parent method returns the string “I am a parent” and the child method returns “I am a child”

### Copying Value Types

Pass an integer into a method the regular way, and make it add 10 and print out

### Passing Value Types By Reference

Pass an integer into a method ‘by reference’ and make it add 10 and print out, but then check also in the Main method the value still has increased by 10.

### Copying Reference Types

Create an array of 5 strings, array01. Copy it to a second array, array02. Change one value and check the value has changed in both arrays.

### String.Format Table

```
Console.WriteLine($"{c.ContactName,-35} has id {c.CustomerID,-10} and lives in {c.City}");
```

## NUnit Testing

### Set up NUnit Testing

See if you can create your own NUnit test just to create a method which just adds one to a number. See if you can create everything from scratch - the project with the method which adds one to a number, and the NUnit test project which can verify your method is working OK

## OOP Methods

### Lab 1 : Out parameters

Declare a method which inputs three integers and returns the product ie the value of the three numbers multiplied together. Also return an out parameter which contains the sum of the three integers.

### Lab 2 : Passing an object into a method

Create a Cat class which has a name and an age property. Create a constructor method also.

In the Methods class, create a static method called Age() which takes a Cat object as an input parameter. Inside the method, add 5 years to the age of the cat passed in.

Instantiate a Cat instance cat01 in the Main() method. In the constructor pass in the name as ‘Tibby’ with age 2.

Pass the Cat instance into the Age() method. Repeat this another time so the Age() method is called twice in all.

Use these two lines

using System.Web.Script.Serialization; (note you must add a Reference first - you will have to Google for the reference name to add)

and

var json = new JavaScriptSerializer().Serialize(cat01);

to help you serialize the final cat object into JSON and return this JSON string.

{“name”:“tilly”,“age”:12}

### LIST FOLDERS

```
public void ListFolders() {string[] allfiles = Directory.GetDirectories("/Labs", "*.*", SearchOption.TopDirectoryOnly);foreach (var item in allfiles){ListBoxItem itm = new ListBoxItem();itm.Content = item;ListOfFolders.Items.Add(itm);}}
```

### LIST FILES AND FOLDERS

```
public void ListFolders(){string[] allfiles = Directory.GetDirectories("/Labs", "*.*", SearchOption.TopDirectoryOnly);foreach (var item in allfiles){ListBoxItem itm = new ListBoxItem();itm.Content = item;ListOfFolders.Items.Add(itm);}}private void Open_Click(object sender, RoutedEventArgs e){ListBoxItem item = (ListOfFolders.SelectedItem as ListBoxItem);string folder = (item.Content as string).Replace("\\", "/");string[] allFiles = Directory.GetDirectories(folder, "*.*", SearchOption.TopDirectoryOnly);ListOfFiles.Items.Clear();foreach (var items in allFiles){ListBoxItem itm = new ListBoxItem();itm.Content = items;ListOfFiles.Items.Add(itm);}}
```

### Create a new file

```
private void Create_Click(object sender, RoutedEventArgs e){try{string content = Contents.Text;string filename = Filename.Text;ListBoxItem item = (ListOfFolders.SelectedItem as ListBoxItem);string folder = (item.Content as string).Replace("\\", "/");if (File.Exists($"{folder}/{filename}.txt")){MessageBox.Show($"File with name {filename}.txt already exists");}else{File.WriteAllText($"{folder}/{filename}.txt", content);Contents.Text = "";}}catch (Exception exception) {MessageBox.Show(exception.ToString());}}
```

### Create A Folder

```
private void Create_Folder_Click(object sender, RoutedEventArgs e) {try{string foldername = Foldername.Text;ListBoxItem item = (ListOfFolders.SelectedItem as ListBoxItem);string folder = (item.Content as string).Replace("\\", "/");if (Directory.Exists($"{folder}/{foldername}")){MessageBox.Show($"Folder with name {foldername} already exists");}else{Directory.CreateDirectory($"{folder}/{foldername}");}}catch (Exception exception){MessageBox.Show(exception.ToString());}}
```

### Create A Random Northwind ID

```
public string RandomID() {var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";var stringChars = new char[5];var random = new Random();for (int i = 0; i < stringChars.Length; i++){stringChars[i] = chars[random.Next(chars.Length)];}string finalString = new String(stringChars);return finalString;}
```

### Create A ComboBox With Dropdown

```
<ComboBox x:Name="cityDropDown" HorizontalAlignment="Left" Margin="340,88,0,0" VerticalAlignment="Top" Width="120" SelectionChanged="CityDropDown_SelectionChanged"/>
```

```
foreach (var city in customers){if (!cities.Contains(city.City)){cityDropDown.Items.Add(city.City);}}
```

### Query A ComboBox String Item

How to query an item which is stored as a string in a ComboBox

```
private void SearchType_SelectionChanged(object sender, SelectionChangedEventArgs e){var comboBoxItem = (ComboBoxItem)searchType.SelectedItem;selectedString = comboBoxItem.Content.ToString();MessageBox.Show("selected string is " + selectedString);}
```

### CodeWars Questions

Multiples of 3 or 5 (6kyu)	

Bit Counting (6 kyu)	

WeIrD StRiNg CaSe (6 kyu)	

IQ Test (6)	

Your Order Please (6)	

Roman Numerals ENCODER (6)	

Roman Numerals DECODER (6)	

Vasya - Clerk (6 hard)	

Where my anagrams at? (5)	

Pig Latin (5)	

Categorize New Member (7)	

Find The Parity Outlier (6)	

Love vs friendship (7)	

Descending Order(7)	

Persistent Bugger (7)	

Highest To Lowest (7)	

ReplaceChar With AlphabetPosition (6)	

Simpsons Rule y=x cubed from x=0 to x=6, x=10, x=20 with 3 tests.

# Testing

### Testing Intro

Testing - cannot find all the bugs

Testing - Unit Test - involves only code in this class

Integration Testing - code in this and another class 

### Ways Of Writing Tests

```powershell
Code first

TDD  Test first 

BDD 
```

### Code visibility

Testing code should match the visibility of the code that is being tested, so both are included in the same module.

We can use other techniques to access private fields and methods eg

- Reflection
- Put the tests in an inner class
- Partial classes can sometimes be used
- Protect your testing code if necessary with

```
#if DEBUG 

#endif
```

so testing code is only compiled in debug mode

### Naming guidelines

Unit tests for `MyNamespace.MyProject` live in `MyNamespace.MyProject.Tests` assembly

Functional Tests live in `MyNamespace.MyProject.FunctionalTests`

### Test class names

Test class names `end` in `Test`

```
`MyProject.MyClass` has test `MyProject.MyClassTest`
```

### Test method names

Test method names should be

```
* what is being tested

* under what conditions

* expectations

* camelCase or snake_case

	PublicApiArgumentsShouldHaveNotNullAnnotation

	Public_api_arguments_should_have_not_null_annotation

	public void AddedAndCustomerIsNullAnExceptionIsThrown

	// expected behaviour
	Add_CustomerIsNull_ThrowsInvalidOperationException()
```

}

Test methods include

```
// Arrange

// Act  

// Assert
```

Tests should be run in parallel and should not depend on each other

Use full names in methods, and not partial names

```
public void AddReference(AssemblyReference reference);

public EcmaScriptObject SomeObject { get; }
```

We can use Jenkins to run tests

```
@dotnet-bot test this please

See dotnet-ci for more details
```

### Demo : MSTest, NUnit and xUnit combined test project

Create a .NET Library project

Add a class and a method which can be tested eg `Calculator` class with `Add` method

Right click on the `solution` and add a new project.

Choose one of the three test types

- MSTest
- NUnit
- xUnit

If these are not available try installing them from NuGet

Find a worked example in Testing.sln in subfolder Testing

### MSTest built-in testing

MSTest is the Visual Studio built-in testing suite.

Of the three testing suites which we will be looking at, the Microsoft suite is the simplest to use and is already built in so does not need to be installed.

[TestClass] is over the class

Class name is MyClassTest where we are testing MyClass

[TestMethod] is over the method

```
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Testing;

namespace UnitTestProject1
{
    [TestClass]
    public class CalculatorMSTest
    {
        [TestMethod]
        public void TestMethod1()
        {
            // arrange
            double expected = 3.0;

            // act
            double actual = calculator.Add(1, 2);

            // assert
            Assert.AreEqual(expected, actual);

        }
    }
}
```

Other tags are

[TestInitialize]

```
public void Initialize() {
	gun = new Raygun();
}
```

[TestCleanup]

```
public void Cleanup() {
	gun.Recharge();
}
```

### Naming

Remember for a class named Calculator the tests are named CalculatorTests

### Other tips

Keep number of assertions to a minimum

### Exception Testing

We can test that the correct exceptions are thrown

```
[TestMethod]
[ExpectedException(typeof(System.IndexOutOfRangeException))]
public void MyMethod(){
	// exception thrown : tests will pass if an exception is thrown
	// tests will fail if no exception is thrown
	running some code to potentially throw an exception 
}

or

[TestMethod]
public void TestMethod(){
	try{
		// do code which can cause an exception
    Assert.Fail("This code failed to produce an exception");
}
catch(Exception ex){
	Assert.IsInstanceOfType(e,typeof(ArithmeticException));
}

}
```

### NUnit Testing

NUnit is open source under the MIT licence

Packages

```
NUnit

NUnit.ConsoleRunner
```

[Test] is above the class

```
using NUnit.Framework;
using Testing;

namespace Tests
{
	//optional [TestFixture]
	[TestFixture]
    public class CalculatorNUnitTest
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void Test1()
        {
            // arrange
            var expected = 3.0;

            // act
            var actual = Calculator.Add(1, 2);

            // assert
            Assert.AreEqual(expected,actual);
        }
    }
}
```

We can also pass parameters to the testing suite

So this test will be repeated 4 times, with input value of 'counnter' different every time

```
[TestCase(1)]
[TestCase(2)]
[TestCase(3)]
[TestCase(4)]
public void DoMultipleTimes(int counter){
		// use counter
}
```

### xUnit testing Method

xUnit is open source

xUnit is larger in scope than MSTest or NUnit

xUnit is newer than both so is larger but fresher

xUnit is paired up with JUnit in Javas

With xUnit you have to install both `xUnit` and `xUnit.runner.console` Nuget packages, and `xUnit.runner.visualstudio` as well

xUnit testing methods look like the following

The [Fact]

```
using System;
using Xunit;
using Testing;

namespace XUnitTestProject1
{
    public class CalculatorxUnitTest
    {
        [Fact]
        public void Test1()
        {
            // arrange
            var expected = 3.0;
            // act 

            var actual = Calculator.Add(1, 2);

            // assert

            Assert.Equal(expected, actual);
            
        }
    }
}
```

## xUnit

This framework was created in 1998

xUnit helps to automate the testing process

xUnit was written by the inventor of nUnit2

xUnit is the latest technology used for testing C#

xUnit works with Resharper and Xamarin

xUnit is part of .NET foundation (open source)

xUnit is found on [xunit.github.io](http://xunit.github.io/)

xUnit can compare to NUnit and MSTest at [xunit.github.io/docs/comparisons](http://xunit.github.io/docs/comparisons)

### xUnit overview

- Desktop
- .NET Core
- Configure with JSON
- Configure with XML
- Capture output

### xUnit walkthrough

Create a new project of type .NET Library

Right click `Manage Nuget`

Browse for `xunit` and install

Install `xunit.runner.console` also

### xUnit testing methods

```
Assert.True(someBool);

Assert.Equal("abc123", someString);

// built-in collection assertions!
Assert.Equal(list1, list2, StringComparer.OrdinalIgnoreCase);
```

### xUnit testing parameters

We can input multiple parameters to repeat tests

```
[Theory]
[InlineData(true, false)]
[InlineData(false, true)]
public void TestBugDodges(bool didDodge, bool shouldBeDead) {
	// use booleans didDodge and s
	// should be dead
}
```

## Test Doubles

Allow us to decouple our code under test from talking to external databases etc which may be in production and might not be reliable

### Testing Doubles

```
Stubs - replace method 
Fakes - has similar behaviour 
Mocks - create stubs and fakes for you.   Can jump straight to here 
     although stubs and fakes can help truly understand what is happening
```

### Dummy variables

Input or output data which usually is irrelvant

### Stub Methods : Hard-coded

Hard coded methods providing a fixed output

```
// fixed output regardless
public bool FileExists(string path)
{
  return true;
}
```

### Fakes

Create fake data rather than use database

### Mocks

Test internal behaviour inside the code, rather than external output

Test if certain methods are called

.NET `Moq` with NUnit is a common combination

Mocks mimic the behaviour of classes and interfaces

Ensures no other code can make our tests fail

### Timeout

Sets a maximum time for the method to run before the test fails

```
[TestMethod]
[Timeout(2000)]  // Milliseconds
public void My_Test()
{ ...
}
```

Right click on Test Runner and choose 'Debug Tests'

# c-sharp-tests

## Tests - Questions

### Select Items Containing

```jsx
/**
     * String names - add all names starting with
     * the letter m to a new List.
     * Please note that names can start with a lower or uppercase letter.
     */
    public List<String> question3(String[] names) {
        
    }
```

### Fibonacci

[https://www.algoexpert.io/questions/Nth Fibonacci](https://www.algoexpert.io/questions/Nth%20Fibonacci) 

```jsx
Given n return the nth number in the Fibonacci sequence

0,1,[(n-2)+(n-1)] 
ie
0,1,1,2,3,5,8 etc
```

### Sum The First 100 Fibonacci Numbers

```jsx
/**
     * Extract the odd numbers from the first 100 elements of the
     * Fibonacci sequence and return the sum
     */
    public long question5() {
        
    }
```

### Find Max Value In Array

```jsx
/**
     * Return the highest number in a
     * random array of numbers
     */
    public int question6(int[] numbers) {
        
    }
```

### Count Words In A String

```jsx
/**
     * Given a string of words
     * extract either the full string if it is
     * less than 10 words long or
     * the first 10 words followed by ' ...' if
     * it is longer than 10 words.
     */
    public String question7(String review) {
        // use string builder
    }
```

### Prime Numbers

```jsx
/**
     * Return the highest prime less than 100
     */
```

### Find Missing Numbers In Sequence

```jsx
/**
     * Given an array that stores numbers between
     * 1 and 20, determine what is the highest missing number.
     * <p>
     * if no numbers are missing then return 0;
     */
```

### Count Word Occurrences

```jsx
/**
     * Return the most frequently used word in a string
     */
```

### Add Items To Dictionary From Array

```jsx
/**
     * Add employees held in a two dimensional array into a dictionary, using id as the key
     */
    public Dictionary<Integer, String> question4(String[,] staff) {
        
    }
```

### Java Questions

```jsx
import java.util.*;

public class Questions {

    /**
     * Write code to swap the values of the 2 parameters, x and y,
     * passed into the method
     *
     * @param x
     * @param y
     */
    public void question1(int x, int y) {
        System.out.println("x = " + x + " and y = " + y);
        int tmp = x;
        x = y;
        y = tmp;
        System.out.println("x now = " + x + " and now y = " + y);
    }

    /**
     * Sum the even numbers up to 100 and then return the average for them.
     */
    public double question2() {
        int[] evens = new int[50];
        int j = 0;
        for (int i = 2; i < 100; i++) {
            if (i % 2 == 0) {
                evens[j] = i;
                j++;
            }
        }
        double sum = 0;
        for (int element : evens) {
            sum = sum + element;
        }
        return sum / evens.length;
    }

    /**
     * String names - add all names starting with
     * the letter m to a new List.
     * Please note that names can start with a lower or uppercase letter.
     */
    public List<String> question3(String[] names) {
        List<String> namesWithM = new ArrayList<>();
        for (String name : names) {
            if (name.substring(0, 1).equalsIgnoreCase("m")) {
                namesWithM.add(name);
            }
        }
        return namesWithM;
    }

    /**
     * Add employees held in a two dimensional array into a hashmap, using id as the key
     */
    public Map<Integer, String> question4(String[][] staff) {
        Map<Integer, String> employees = new HashMap<>();
        for (int i = 0; i < staff.length; i++) {
            String[] employee = staff[i];
            employees.put(Integer.parseInt(employee[0]), employee[1]);
        }
        return employees;
    }

    /**
     * Extract the odd numbers from the first 100 elements of the
     * Fibonacci sequence and return the sum
     */
    public long question5() {
        long[] fib = new long[20];
        fib[0] = 0;
        fib[1] = 1;
        long sum = 1;
        for (int i = 2; i < fib.length; i++) {
            fib[i] = fib[i - 2] + fib[i - 1];
            if (fib[i] % 2 != 0) {
                sum = sum + fib[i];
            }
        }
        return sum;
    }

    /**
     * Return the highest number in a
     * random array of numbers
     */
    public int question6(int[] numbers) {
        int highest = 0;
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] > highest) {
                highest = numbers[i];
            }
        }
        return highest;
    }

    /**
     * Given a string of words
     * extract either the full string if it is
     * less than 10 words long or
     * the first 10 words followed by ' ...' if
     * it is longer than 10 words.
     */
    public String question7(String review) {
        String[] words = review.split(" ");
        StringBuilder builder = new StringBuilder();
        if (words.length <= 10) {
            return review;
        } else {
            for (int i = 0; i < 10; i++) {
                builder.append(words[i] + " ");
            }
            builder.append("...");
        }
        return builder.toString();
    }

    /**
     * Return the highest prime less than 100
     */
    public int question8() {
        int prime = 0;
        for (prime = 3; prime > 0; prime--) {
            boolean isPrime = true;
            int i = 2;
            while (isPrime && i < Math.sqrt(prime)) {
                if (prime % i == 0) {
                    isPrime = false;
                } else {
                    i++;
                }
            }
            if (isPrime) {
                return prime;
            }
        }
        return 0;
    }

    /**
     * Given an array that stores numbers between
     * 1 and 20, determine what is the highest missing number.
     * <p>
     * if no numbers are missing then return 0;
     */
    public int question9(int[] numbers) {
        Map<Integer, Boolean> nums = new HashMap<>();
        for (int i = 1; i <= 20; i++) {
            nums.put(i, false);
        }
        for (int i : numbers) {
            if (nums.containsKey(i)) {
                nums.put(i, true);
            }
        }
        for (int i = 20; i > -1; i--) {
            if (nums.get(i) == false) return i;
        }
        return 0;
    }

    /**
     * Return the most frequently used word in a string
     */
    public String question10(String text) {
        Map<String, Integer> countOfWords = new HashMap<>();
        String[] words = text.split(" ");
        for (String word : words) {
            word = word.toLowerCase();
            if (!countOfWords.containsKey(word)) {
                countOfWords.put(word, 1);
            } else {
                countOfWords.put(word, countOfWords.get(word) + 1);
            }
        }
        String topWord = "";
        int highestCount = 0;
        for (Map.Entry<String, Integer> entry : countOfWords.entrySet()) {
            if (entry.getValue() > highestCount) {
                topWord = entry.getKey();
                highestCount = entry.getValue();
            }
        }
        return topWord;
    }
```

## Tests - Answers

```bash
namespace Tests_Microsoft
{

    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void Check_Spongebob()
        {
            var Tests = new SomeTests.SomeTest();
            Assert.AreEqual("hElLo", Tests.TextToSpongeBobMeme("Hello"));
            Assert.AreEqual("jQuErY iS bEtTeR", Tests.TextToSpongeBobMeme("jQuery is better"));
            Assert.AreEqual("", Tests.TextToSpongeBobMeme(""));

        }

        [TestMethod]
        public void Check_RemoveMiddleWord()
        {
            var Tests = new SomeTests.SomeTest();
            Assert.AreEqual("sup dude", Tests.RemoveMiddleWord("sup my dude"));
            Assert.AreEqual("yeet yeet", Tests.RemoveMiddleWord("yeet yeet yeet"));
        }

        [TestMethod]
        public void Check_SumOfArray()
        {
            var Tests = new SomeTests.SomeTest();
            Assert.AreEqual(9, Tests.SumIgnoringMax(new int[] { 2, 3, 4, 5 }));
            Assert.AreEqual(1005, Tests.SumIgnoringMax(new int[] { 999, 1000, 5, 1 }));
            Assert.AreEqual(9, Tests.SumIgnoringMax(new int[] { 1, 2, 1, 1, 1, 1, 1, 1, 1, 1 }));
        }

        [TestMethod]
        public void Check_Pyramid()
        {
            var Tests = new SomeTests.SomeTest();
            CollectionAssert.AreEqual(new char[,] {
                { ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ' },
                { ' ', ' ', ' ', '*', '*', '*', ' ', ' ', ' ' },
                { ' ', ' ', '*', '*', '*', '*', '*', ' ', ' ' },
                { ' ', '*', '*', '*', '*', '*', '*', '*', ' ' },
                { '*', '*', '*', '*', '*', '*', '*', '*', '*' }
            }, Tests.Pyramid(5, 9));
            CollectionAssert.AreEqual(new char[,] {
                { ' ', ' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', ' ' },
                { ' ', ' ', ' ', ' ', ' ', '*', '*', '*', ' ', ' ', ' ', ' ', ' ' },
                { ' ', ' ', ' ', ' ', '*', '*', '*', '*', '*', ' ', ' ', ' ', ' ' },
                { ' ', ' ', ' ', '*', '*', '*', '*', '*', '*', '*', ' ', ' ', ' ' },
                { ' ', ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ', ' ' },
                { ' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ' },
                { '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*' }
            }, Tests.Pyramid(7, 13));
        }
        [TestMethod]
        public void Check_Different()
        {
            var Tests = new SomeTests.SomeTest();
            CollectionAssert.AreEqual(new int[] { 1, 3, 4, 5 }, Tests.Different(new int[] { 1, 2, 3, 4, 5 }, new int[] { 2 }));
            CollectionAssert.AreEqual(new int[] { }, Tests.Different(new int[] { }, new int[] { 2, 3, 4 }));
            CollectionAssert.AreEqual(new int[] { 2, 3, 4 }, Tests.Different(new int[] { 2, 3, 4 }, new int[] { }));
        }

        [TestMethod]
        public void Check_AddYearToDate()
        {
            // arrange (setup)
            var arrayInstance = new SomeTests.SomeTest();
            var expectedOutput = "01/01/2020 00:00:00";
            // act (run code)
            var actualOutput = arrayInstance.AddAYear(2019, 1, 1);
            // assert (see if test pass/fail)
            Assert.AreEqual(expectedOutput, actualOutput);
        }

        [TestMethod]
        public void Check_BubbleSort()
        {
            // arrange (setup)
            var Instance = new SomeTests.SomeTest();
            int[] expectedOutput = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
            int[] unsorted = { 4, 2, 8, 3, 9, 10, 5, 6, 1, 7 };
            // act (run code)
            var actualOutput = Instance.BubSort(unsorted);
            // assert (see if test pass/fail)
            CollectionAssert.AreEqual(expectedOutput, actualOutput);
        }

        [TestMethod]
        public void Check_ReverseString()
        {
            var arrayInstance = new SomeTests.SomeTest();
            Assert.AreEqual("drow", arrayInstance.ReverseString("word"));
            Assert.AreEqual("", arrayInstance.ReverseString(""));
            Assert.AreEqual("arsenal", arrayInstance.ReverseString("lanesra"));
            Assert.AreEqual("oop", arrayInstance.ReverseString("poo"));
        }

        [TestMethod]
        public void Check_Quadratic()
        {
            // arrange (setup)
            var Instance = new SomeTests.SomeTest();
            int expectedOutput = -1;
            // act (run code)
            var actualOutput = Instance.Quadratic(3, 2, -1);
            // assert (see if test pass/fail)
            Assert.AreEqual(expectedOutput, actualOutput);
        }

        [TestMethod]
        public void Check_FifthLetter()
        {
            // arrange (setup)
            var unit = new SomeTests.SomeTest();
            // assert (see if test pass/fail)
            Assert.AreEqual('d', unit.FifthLetter("Named"));
            Assert.AreEqual('k', unit.FifthLetter("Jdk a k"));
            Assert.AreEqual('o', unit.FifthLetter("      hello"));
            Assert.AreEqual(' ', unit.FifthLetter(" "));
        }

        [TestMethod]
        public void Check_SumOfFours()
        {
            // arrange (setup)
            var unit = new SomeTests.SomeTest();
            // assert (see if test pass/fail)
            Assert.AreEqual(12, unit.SumOfFours(10));
            Assert.AreEqual(12, unit.SumOfFours(12));
            Assert.AreEqual(148, unit.SumOfFours(42));
        }

        [TestMethod]
        public void Check_NameReturn()
        {
            var unit = new SomeTests.SomeTest();
            Assert.IsTrue(unit.NameReturn('j', 'e', 's', 's'));
            Assert.IsTrue(unit.NameReturn('c', 'h', 'a', 'd'));
            Assert.IsTrue(unit.NameReturn('a', 'd', 'a', 'm'));
            Assert.IsFalse(unit.NameReturn('m', 'e', 's', 's'));
            Assert.IsFalse(unit.NameReturn('b', 'e', 's', 't'));
        }

        [TestMethod]
        public void Check_Smallest()
        {
            var arrayInstance = new SomeTests.SomeTest();
            Assert.AreEqual(1, arrayInstance.Smallest(new[] { 9, 1, 4, 5, 2, 3, 6, 7, 8 }));
            Assert.AreEqual(8, arrayInstance.Smallest(new[] { 90, 79, 55, 23, 22, 45, 60, 29, 8 }));
        }

        [TestMethod]
        public void Check_NextSquare()
        {
            var arrayInstance = new SomeTests.SomeTest();
            Assert.AreEqual(16, arrayInstance.NextSquare(9));
            Assert.AreEqual(36, arrayInstance.NextSquare(25));
        }

        [TestMethod]
        public void Check_GeometricSeries()
        {
            var arrayInstance = new SomeTests.SomeTest();
            Assert.AreEqual(142.32, arrayInstance.GeometricSeries(10, 1.15, 20));
            Assert.AreEqual(1.55, arrayInstance.GeometricSeries(1, 1.01, 45));
        }

        [TestMethod]
        public void Check_RomanEncryption()
        {
            var instance = new SomeTests.SomeTest();
            Assert.AreEqual("", instance.RomanEncryption(""));
            Assert.AreEqual("Uryyb", instance.RomanEncryption("Hello"));
            Assert.AreEqual("Guvf vf n frperg pbqr 1209654930", instance.RomanEncryption("This is a secret code 1209654930"));
            Assert.AreEqual("V'ir eha bhg bs vqrnf", instance.RomanEncryption("I've run out of ideas"));
        }

        [TestMethod]
        public void Check_RomanDecryption()
        {
            var instance = new SomeTests.SomeTest();
            Assert.AreEqual("", instance.RomanDecryption(""));
            Assert.AreEqual("Hello", instance.RomanEncryption("Uryyb"));
            Assert.AreEqual("This is a secret code 1209654930", instance.RomanEncryption("Guvf vf n frperg pbqr 1209654930"));
            Assert.AreEqual("I've run out of ideas", instance.RomanEncryption("V'ir eha bhg bs vqrnf"));
        }

        [TestMethod]
        public void Check_Sum()
        {
            var instance = new SomeTest();
            Assert.AreEqual(5, instance.Sum(3, -1));
            Assert.AreEqual(3, instance.Sum(3, 3));
            Assert.AreEqual(55, instance.Sum(0, 10));
            Assert.AreEqual(-5, instance.Sum(-3, -2));
            Assert.AreEqual(0, instance.Sum(-10, 10));
        }
```

### Answer : Prime Numbers

```jsx

public int question8() {
        int prime = 0;
        for (prime = 3; prime > 0; prime--) {
            boolean isPrime = true;
            int i = 2;
            while (isPrime && i < Math.sqrt(prime)) {
                if (prime % i == 0) {
                    isPrime = false;
                } else {
                    i++;
                }
            }
            if (isPrime) {
                return prime;
            }
        }
        return 0;
    }
```

### Answer : Find Missing Numbers In Sequence

```jsx
public int question9(int[] numbers) {
        Map<Integer, Boolean> nums = new HashMap<>();
        for (int i = 1; i <= 20; i++) {
            nums.put(i, false);
        }
        for (int i : numbers) {
            if (nums.containsKey(i)) {
                nums.put(i, true);
            }
        }
        for (int i = 20; i > -1; i--) {
            if (nums.get(i) == false) return i;
        }
        return 0;
    }
```

### Answer : Count Instances Of A Word In A String

```jsx
public String question10(String text) {
        Map<String, Integer> countOfWords = new HashMap<>();
        String[] words = text.split(" ");
        for (String word : words) {
            word = word.toLowerCase();
            if (!countOfWords.containsKey(word)) {
                countOfWords.put(word, 1);
            } else {
                countOfWords.put(word, countOfWords.get(word) + 1);
            }
        }
        String topWord = "";
        int highestCount = 0;
        for (Map.Entry<String, Integer> entry : countOfWords.entrySet()) {
            if (entry.getValue() > highestCount) {
                topWord = entry.getKey();
                highestCount = entry.getValue();
            }
        }
        return topWord;
    }
}
```

### Answer : Fibonacci

```jsx
function getNthFib(n) {
	var index = n-1
  var myArray = [0,1]
	for (var i=2;i<=index;i++){
		myArray.push(myArray[i-2]+myArray[i-1])
	}
	return myArray[index]
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
```

# Naming Conventions

		solution-code
			lab-16-topic
			lab-16-topic-tests

# MS Test

```csharp

[TestInitialize]
public void Initialize()
{
    Console.WriteLine("Initializing Tests");
}

[TestMethod]
public void TestLab16UsingMSTest()
{
    // arrange
    var expected = 216.0;
    var instance01 = new TestMeNow();

    // act
    var actual = instance01.TestThisMethodWorks(2, 3, 3);

    // assert
    Assert.AreEqual(expected, actual);
}

[TestCleanup]
public void Cleanup()
{
    Console.WriteLine("Cleaning up after tests have run");
}
```

# NUnit

## NUnit

```csharp
## NUnit 

### Getting started 

[https://nunit.org/docs/2.5/getStarted.html](https://nunit.org/docs/2.5/getStarted.html)

NUnit version 3 is the latest version and it's hosted on GitHub

[https://github.com/nunit/docs/wiki/Installation](https://github.com/nunit/docs/wiki/Installation)

### Test Runner

NUnit has 3 test runners

nunit-console.exe 		text-based

nunit.exe 				GUI-based

nunitlite 				NUnit lite 

## NUnit String Constraints

[https://nunit.org/docs/2.5/stringConstraints.html](https://nunit.org/docs/2.5/stringConstraints.html)

String constraints permit us to run tests which are specific to strings

​```csharp
Text.Contains/DoesNotContain(string)
Text.StartsWith/EndsWidth/DoesNotStartWith/EndWidth(string)
Text.Matches/DoesNotMatch(string)
```

Examples

string phrase = "Make your tests fail before passing!"

Assert.That( phrase, Text.Contains( "tests fail" ) );
Assert.That( phrase, Text.Contains( "make" ).IgnoreCase );

Assert.That( phrase, Text.StartsWith( "Make" ) );
Assert.That( phrase, Text.Not.StartsWith( "Break" ) );
Assert.That( phrase, Text.DoesNotStartWith( "Break" ) );

Assert.That( phrase, Text.EndsWith( "!" ) );
Assert.That( phrase, Text.EndsWith( "PASSING!" ).IgnoreCase );

Assert.That( phrase, Text.Matches( "Make.*tests.*pass" ) );
Assert.That( phrase, Text.Not.Matches( "your.*passing.*tests" ) );
Assert.That( phrase, Text.DoesNotMatch( "your.*passing.*tests" ) );

// Using Inheritance
Expect( phrase, Contains( "make" ).IgnoreCase );
Expect( phrase, EndsWith( "!" ) );
Expect( phrase, Matches( `"Make.*pass"` ) );

### NUnit worked example samples

[https://github.com/nunit/nunit-csharp-samples](https://github.com/nunit/nunit-csharp-samples)

### NUnit Syntax Examples on GitHub

[https://github.com/nunit/nunit-csharp-samples/blob/master/syntax/AssertSyntaxTests.cs](https://github.com/nunit/nunit-csharp-samples/blob/master/syntax/AssertSyntaxTests.cs)
```

​```csharp
[SetUp]
public void Setup()
{
}

[TestCase(2,3,2,36)]
[TestCase(5, 5, 5, 9765625)]
[TestCase(1,1,1,1)]
public void Lab_16_NUnit_Test_01(double x, double y, int p, double expected)
{
    // arrange
  //  var expected = 36.0;
    var instance02 = new TestMeNow();
    // act
    var actual = instance02.TestThisMethodWorks(x, y, p);
    // assert
    Assert.AreEqual(expected, actual);
}

```

### NUnit Exception Testing

```
### Code to be tested
public class MyClass{
	private bool faultycondition=true;
  public class MyMethod(){
		if(faultycondition){
			throw new InvalidOperationException("Invalid operation");
    }
  }
}

### Test
[Test]
public void TestMyMethodGeneratesExceptionIfFaultyCondition(){
	var instance = new MyClass();
  Assert.Throws<InvalidOperationException>( ()=>instance.MyMethod());

  or

  var exception = Assert.Throws<InvalidOperationException>( ()=>instance.MyMethod());
  Assert.AreEqual("Invalid Operation",exception.Message);
}

```

# XUnit

```csharp
[Fact]
public void Lab_16_Test_Math_Power()
{
    // arrange
    var instance01 = new TestMeNow();
    var expected01 = 9765625;

    // act
    var actual01 = instance01.TestThisMethodWorks(5, 5, 5);

    // assert
    Assert.Equal(expected01, actual01);
}
```

# XUnit Testing On The Command Line

```csharp
dotnet new nunit
```

### Testing with XUnit

Create two folders

```
Calculator

CalculatorTest
```

In Calculator run

```
dotnet new classlib
```

and CalculatorTest run

```
dotnet new xunit
```

Amend Calculator to include a Calculator class and Add() method

run

```
dotnet build
```

### Testing with xUnit in Visual Studio

1. Create Library Project with .NET Standard
2. Add .NET Core xUnit Test Project
3. Add Reference of (1) into (2)
4. Run tests!

### Testing with xUnit in Visual Studio

1. dotnet new classlib in CalculatorLib folder
2. dotnet build
3. dotnet new xunit in CalculatorUnitTests folder
4. modify .csproj to add

```
<ItemGroup>
  <ProjectReference Include="..\\Calculator\\Calculator.csproj" />
</ItemGroup>
```

5. write your tests

```
Assert.Equal(true,false);
```

6. dotnet test from the CalculatorUnitTests folder

### Testing in Visual Studio Core

Firstly build our project to be tested which includes this code

```
using System;

namespace testing_01
{
    public class TestMe
    {
        public int TestMeMethod(){
            return -1;
        }
    }
}
```

and our testing project

```
using System;
using Xunit;
using testing_01;

namespace testing_01_tests
{
    public class testing_01_tests_class
    {
        [Fact]
        public void Test1()
        {
            // arrange
            var expected = -1;
            var instance01 = new TestMe();

            // act
            var actual = instance01.TestMeMethod();

            //assert
            Assert.Equal(expected, actual);
        }
    }
}
```

in the console run

```
dotnet restore
dotnet build 
dotnet test
```

and the results of the tests should show in the command line

### Building a test project using the command line only

```
dotnet new classlib

dotnet build

dotnet new xunit
```

In the .csproj file add a reference to the project we are testing

```
<Project>
  <ItemGroup>
      <PackageReference Include="../projectwearetesting/name.csproj" />
  </ItemGroup>
</Project>
```

### GitHub Fix

GitHub Fix for solutions downloaded and don't run the tests

Project, properties, open build and target x64

test, default settings, x64

## API Testing

Rest assured

## BDD

[Cucumber.io](https://cucumber.io/)

[https://specflow.org/](https://specflow.org/) for .NET

# WPF

## Resources

### WPF-Tutorial.Com

[https://www.wpf-tutorial.com](https://www.wpf-tutorial.com/panels/canvas/) 

### Free Succinctly ebook online

[https://www.syncfusion.com/ebooks/wpf_succinctly/wpf-origins](https://www.syncfusion.com/ebooks/wpf_succinctly/wpf-origins)

[Ebook - Chapter 1 of WPF](https://www.syncfusion.com/ebooks/wpf_succinctly/wpf-origins)

### WPF on the web in Microsoft Documentation

[Windows Presentation Foundation](https://docs.microsoft.com/en-us/dotnet/framework/wpf/index?redirectedfrom=MSDN)

[http://msdn.microsoft.com/en-us/library/ms754130.aspx](http://msdn.microsoft.com/en-us/library/ms754130.aspx).

### WPF in Visual Studio

[http://msdn.microsoft.com/en-us/library/aa970268.aspx](http://msdn.microsoft.com/en-us/library/aa970268.aspx).

### Getting Started in WPF

[http://msdn.microsoft.com/en-us/library/ms742119.aspx](http://msdn.microsoft.com/en-us/library/ms742119.aspx).

## Topics To Investigate

```jsx
INOTIFYPROPERTYCHANGED
MULTIBINDING
MVVM
FRAMELESS WINDOW
```

# Main Grid ... Sub Grid

# Panels

```jsx
StackPanel ==>   Vertical list of items  (or horizontal)

	Scrollbar for lots of items

DockPanel  ==>  Align TOP/BOTTOM/RIGHT/LEFT/CENTRE   eg GamePad

WrapPanel  ==>  1 2 3 4 |
				        5 6 7 8 |

Tabbed Panel: with tabs
```

## Stack Panel

```jsx
    <ScrollViewer VerticalScrollBarVisibility="Auto" Grid.Row="1" Grid.Column="0">
        <StackPanel Grid.Row="1" Grid.Column="0" Background="#ddd" Orientation="Vertical">
            <Button Background="#e0c18b" Content="Button" />
            <Button Background="#e0c18b" Content="Button" />
            <Button Background="#e0c18b" Content="Button" />
            <Button Background="#e0c18b" Content="Button" />
            <RichTextBox />
            <TextBox Text="Enter plain text" />
            <Label Content="label" />
            <TextBlock Text="TextBlock = plain text" />
            <Button Background="#e0c18b" Content="Button" />
            <Button Background="#e0c18b" Content="Button" />
            <Button Background="#e0c18b" Content="Button" />
            <Button Background="#e0c18b" Content="Button" />
            <RichTextBox />
            <TextBox Text="Enter plain text" />
            <Label Content="label" />
            <TextBlock Text="TextBlock = plain text" />
            <Button Background="#e0c18b" Content="Button" />
            <Button Background="#e0c18b" Content="Button" />
            <Button Background="#e0c18b" Content="Button" />
            <Button Background="#e0c18b" Content="Button" />
            <RichTextBox />
            <TextBox Text="Enter plain text" />
            <Label Content="label" />
            <TextBlock Text="TextBlock = plain text" />
        </StackPanel>
    </ScrollViewer>
```

## Tab Control

```jsx
<TabControl Grid.Row="1" Grid.Column="3" Background="#f0d6aa">
    <TabItem Header="One" Background="#ccc">
        <TabPanel Grid.Row="1" Grid.Column="3" Background="#f7e7cb">
            <Label Content="1"/>
        </TabPanel>
    </TabItem>
    <TabItem Header="Two" Background="#ccc">
        <TabPanel Grid.Row="1" Grid.Column="3" Background="#f7e7cb">
            <Label Content="2"/>
        </TabPanel>
    </TabItem>
    <TabItem Header="Three" Background="#ccc">
        <TabPanel Grid.Row="1" Grid.Column="3" Background="#f7e7cb">
            <Label Content="3"/>
        </TabPanel>
    </TabItem>

</TabControl>
```

## Wrap Panel

```jsx
        <WrapPanel Grid.Row="1" Grid.Column="2" Background="#f7f6cb">
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
            <Button Background="#00f" Width="20" Height="20" Margin="3" />
        </WrapPanel>
```

## Dock Panel

```jsx
    <DockPanel Grid.Row="1" Grid.Column="1" Background="#dcd" LastChildFill="True">
        <Button Background="#ccc" DockPanel.Dock="Top" Content="Top" />
        <Button Background="#ccc" DockPanel.Dock="Bottom" Content="Bottom" />
        <Button Background="#ccc" DockPanel.Dock="Left" Content="Left" />
        <Button Background="#ccc" DockPanel.Dock="Right" Content="Right" />
        <Button Background="#ccc" Content="Center" />
    </DockPanel>
```

# Colours And Brushes

[Color](http://color.adobe.com)

 

## Brushes

```csharp
// set with string
Background="#eef" 
Background = "#aabbcc"

// What we actually want is solid colour brushes, 
// These are the same syntax and the `cast` will be greyed out ie unused
Button01.Background = Brushes.AliceBlue;
Button02.Background = (SolidColorBrush)Brushes.Aqua;
```

## Setting Colour Using RGB values

```csharp
int R = 12
int B = 0
int G = 255
var brush = new SolidColorBrush(Color.FromArgb(255, (byte)R, (byte)G, (byte)B));
myGrid.Background = brush;

```

## Setting Colour Using Hex Values

```csharp
var brushconverter = new BrushConverter();
Button01.Background = (Brush)brushconverter.ConvertFrom("#F0F9D9");
```

## Random RGB Brush Colours

```csharp

    
<Button x:Name="Button01" Grid.Row="0" Grid.Column="0" Click="any_button_click" />
<Button x:Name="Button02" Grid.Row="1" Grid.Column="1" Click="any_button_click"/>
<Button x:Name="Button03" Grid.Row="2" Grid.Column="2" Click="any_button_click"/>

namespace WPF_03_Colors_Brushes
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            Initialise();
        }
        void Initialise()
        {
            Button01.Background = Brushes.AliceBlue;
            Button02.Background = (SolidColorBrush)Brushes.Aqua;
            Button03.Background = Brushes.LightSteelBlue;
        }

        private void any_button_click(object sender, RoutedEventArgs e)
        {
            var random = new Random();
            byte R;
            byte G;
            byte B;

            R = (byte)random.Next(255);
            G = (byte)random.Next(255);
            B = (byte)random.Next(255);
            var button01RandomBrush = new SolidColorBrush(Color.FromArgb(255, R,G,B));
            R = (byte)random.Next(255);
            G = (byte)random.Next(255);
            B = (byte)random.Next(255);
            var button02RandomBrush = new SolidColorBrush(Color.FromArgb(255, R, G, B));
            R = (byte)random.Next(255);
            G = (byte)random.Next(255);
            B = (byte)random.Next(255);
            var button03RandomBrush = new SolidColorBrush(Color.FromArgb(255, R, G, B));

            Button01.Background = button01RandomBrush;
            Button02.Background = button02RandomBrush;
            Button03.Background = button03RandomBrush;

        }

    }
}
```

# Label And TextBlock

Both Are Read-Only

Label is for use as a custom control to be integrated into an application more

Text Block is for raw text

```csharp
<TextBlock x:Name="ParagraphText" TextWrapping="WrapWithOverflow" Padding="20"
```

### Label Underline

```csharp
<Label x:Name="LabelTitle"
       Background="#E6EEdd" Grid.Column="1" Grid.ColumnSpan="3" 
       HorizontalContentAlignment="Center" VerticalContentAlignment="Center"
       FontWeight="Bold">
    <TextBlock TextDecorations="Underline">Customer App</TextBlock>
</Label>
```

# RichTextBox

```csharp
	<RichTextBox x:Name="textInputCharacter" Background="#97efec" 
					Grid.Column="1" Grid.Row="3"   Grid.ColumnSpan="3"/>
```

# Images

## Displaying An Image

```csharp
<Image x:Name="ImageRabbit" Grid.Row="1" Grid.Column="1" 
               Source="C:\2019-09-c-sharp-labs\labs\lab_16_wpf_rabbit_explosion\Images\BugsBunny.png"  />
```

## Grid Background Image

```csharp
<Grid>
    <Grid.Background>
        <ImageBrush ImageSource="/path/to/image.png" Stretch="UniformToFill"/>
    </Grid.Background>
</Grid>
```

```
<Grid.Background>
    <ImageBrush ImageSource="/lab_52_wpf_grid;component/Images/" />
    <ImageBrush ImageSource="pack://application:,,,/Images/snakes-and-ladders.jpg" />
</Grid.Background>
```

# EventArgs (Bubble up) vs RoutedEventArgs (No Bubble Up)

EventArgs causes all events in a logical tree, from the bottom object up to the root object, to have the `click` event triggered for example, on click.    The event propogation will stop at the first object to handle the event.

Bubble ⇒ from bottom to top

Tunnel (called PreviewClick)  ⇒ from top to bottom

The RoutedEventArgs will only handle the event in the one object that sets the event, and in none of the parent or child objects.

# Displaying Data

## List Box

```csharp
<ListBox x:Name="ListBox02" Grid.Row="3" Grid.Column="1" Opacity="0.5"
     Background="#c9cfd8" >
    <ListBox.ItemTemplate>
        <DataTemplate>
            <TextBlock>
                <TextBlock.Text>
                    <MultiBinding StringFormat="ID - {0} - Name {1} - City - {2}">
                        <Binding Path="CustomerID " />
                        <Binding Path="ContactName" />
                        <Binding Path="City" />
                    </MultiBinding>
                </TextBlock.Text>
            </TextBlock>
        </DataTemplate>
    </ListBox.ItemTemplate>
</ListBox>
```

### WPF Listbox Select Customer

Right click on your project and choose Add, New Item, Data,
ADO Entity Data Model. Call the model NorthwindModel'
and select EF Designer From Databaseand choose relevant tables eg Customer

```
private void ListBox01_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    if (ListBox01.SelectedItem != null)
    {
        // selected item is an object which we cast to Customer
        customer = (Customer)ListBox01.SelectedItem;
        // set the screen IDs
        TextId.Text = customer.CustomerID;
        TextName.Text = customer.ContactName;
        TextCity.Text = customer.City;
    }
}
```

## WPF List View

A ListView is a bit like a ListBox but it can have a Stack Panel inside it with for example images and text

```powershell
<!-- simple -->

<ListView Margin="10,10,0,13" Name="ListView1" HorizontalAlignment="Left" VerticalAlignment="Top" Width="194" Height="200">  
    <ListViewItem Content="Coffie"></ListViewItem>  
    <ListViewItem Content="Tea"></ListViewItem>  
    <ListViewItem Content="Orange Juice"></ListViewItem>  
    <ListViewItem Content="Milk"></ListViewItem>  
    <ListViewItem Content="Iced Tea"></ListViewItem>  
    <ListViewItem Content="Mango Shake"></ListViewItem>  
</ListView>

<!-- complex -->

<ListViewItem Background="LightCoral" Foreground="Red" FontFamily="Verdana" FontSize="12" FontWeight="Bold">  
    <StackPanel Orientation="Horizontal">  
        <Image Source="coffie.jpg" Height="30"></Image>  
        <TextBlock Text="Coffie"></TextBlock>  
    </StackPanel>  
</ListViewItem>
```

### We can add/remove items in code

```powershell
privatevoid button1_Click(object sender, RoutedEventArgs e) {  
    ListView1.Items.Add(textBox1.Text);  
}

privatevoid DeleteButton_Click(object sender, RoutedEventArgs e) {  
    ListView1.Items.RemoveAt(ListView1.Items.IndexOf(ListView1.SelectedItem));  
}
```

### Embed within a check box

```powershell
<ListViewItem Background="LightSlateGray" Foreground="Orange" 
           FontFamily="Georgia" FontSize="14" FontWeight="Bold">  
    <CheckBox Name="MangoShakeCheckBox">  
        <StackPanel Orientation="Horizontal">  
            <Image Source="MangoShake.jpg" Height="30"></Image>  
            <TextBlock Text="Mango Shake"></TextBlock>  
        </StackPanel>  
    </CheckBox>  
</ListViewItem>
```

### We can bind to an ArrayList

```powershell
privateArrayList LoadListViewData() {  
    ArrayList itemsList = newArrayList();  
    itemsList.Add("Coffie");  
    itemsList.Add("Tea");  
    itemsList.Add("Orange Juice");  
    itemsList.Add("Milk");  
    itemsList.Add("Mango Shake");  
    itemsList.Add("Iced Tea");  
    itemsList.Add("Soda");  
    itemsList.Add("Water");  
    return itemsList;  
}

myDataList = LoadListViewData();
LeftListView.ItemsSource = myDataList;

```

### Power of ListView comes with the GridView

```powershell
https://www.wpf-tutorial.com/listview-control/listview-with-gridview/

<ListView Margin="10" Name="lvUsers">
			<ListView.View>
				<GridView>
					<GridViewColumn Header="Name" Width="120" 
                        DisplayMemberBinding="{Binding Name}" />
					<GridViewColumn Header="Age" Width="50" 
                        DisplayMemberBinding="{Binding Age}" />
					<GridViewColumn Header="Mail" Width="150" 
                        DisplayMemberBinding="{Binding Mail}" />
				</GridView>
			</ListView.View>
		</ListView>

using System;
using System.Collections.Generic;
using System.Windows;

namespace WpfTutorialSamples.ListView_control
{
	public partial class ListViewGridViewSample : Window
	{
		public ListViewGridViewSample()
		{
			InitializeComponent();
			List<User> items = new List<User>();
			items.Add(new User() { Name = "John Doe", Age = 42, Mail = "john@doe-family.com" });
			items.Add(new User() { Name = "Jane Doe", Age = 39, Mail = "jane@doe-family.com" });
			items.Add(new User() { Name = "Sammy Doe", Age = 7, Mail = "sammy.doe@gmail.com" });
			lvUsers.ItemsSource = items;
		}
	}

	public class User
	{
		public string Name { get; set; }

		public int Age { get; set; }

		public string Mail { get; set; }
	}
}
```

### We can even decorate items within the grid with a data template

```csharp
<ListView Margin="10" x:Name="ListViewCustomers">
    <ListView.View>
        <GridView>
            <GridViewColumn Header="ID" Width="120" DisplayMemberBinding="{Binding CustomerID}"/>
            <GridViewColumn Header="Name" Width="120" DisplayMemberBinding="{Binding ContactName}"/>
            <GridViewColumn Header="Company" Width="120" DisplayMemberBinding="{Binding CompanyName}"/>
        </GridView>
    </ListView.View>
</ListView>
```

```powershell
<ListView Margin="10" Name="lvUsers">
			<ListView.View>
				<GridView>
					<GridViewColumn Header="Name" Width="120" 
                  DisplayMemberBinding="{Binding Name}" />
					<GridViewColumn Header="Age" Width="50" 
                  DisplayMemberBinding="{Binding Age}" />
					<GridViewColumn Header="Mail" Width="150">
						<GridViewColumn.CellTemplate>
							<DataTemplate>
								<TextBlock Text="{Binding Mail}" TextDecorations="Underline" 
                          Foreground="Blue" Cursor="Hand" />
							</DataTemplate>
						</GridViewColumn.CellTemplate>
					</GridViewColumn>
				</GridView>
			</ListView.View>
		</ListView>
```

### List View Simple Version

```csharp
<Window x:Class="lab_28_list_view_WPF.MainWindow"
xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
xmlns:local="clr-namespace:lab_28_list_view_WPF"
mc:Ignorable="d"
Title="MainWindow" Height="450" Width="800">
<Grid>
<Grid.ColumnDefinitions>
    <ColumnDefinition Width="*" />
    <ColumnDefinition Width="*" />
    <ColumnDefinition Width="*" />
    <ColumnDefinition Width="*" />
    <ColumnDefinition Width="*" />
</Grid.ColumnDefinitions>
<Grid.RowDefinitions>
    <RowDefinition Height="*" />
    <RowDefinition Height="*" />
    <RowDefinition Height="*" />
    <RowDefinition Height="*" />
    <RowDefinition Height="*" />
</Grid.RowDefinitions>
<ListView x:Name="ListViewRabbits" Grid.Row="1" Grid.Column="1" Grid.ColumnSpan="3" Grid.RowSpan="3" Background="#eee">
    <ListView.View>
        <GridView>
            <GridViewColumn Header="ID" Width="Auto" DisplayMemberBinding="{Binding RabbitId}" />
            <GridViewColumn Header="Name" Width="Auto" DisplayMemberBinding="{Binding RabbitName}" />
            <GridViewColumn Header="Age" Width="Auto" DisplayMemberBinding="{Binding Age}" />
        </GridView>
    </ListView.View>
</ListView>
</Grid>
</Window>
```

# Messagebox yes no

```json
if (MessageBox.Show("Close Application?", "Question", 
            MessageBoxButton.YesNo, MessageBoxImage.Warning) == MessageBoxResult.No)
            {
                //do no stuff
            }
            else
            {
                //do yes stuff
            }
```

# Radio Button

```csharp
  <RadioButton x:Name="radioModeStrict" GroupName="radioMode" 
                   Grid.Row="2" Grid.Column="1"    Background="Beige"/>
  <RadioButton x:Name="radioModeRandom" GroupName="radioMode" 
                   Grid.Row="2" Grid.Column="2"    Background="Beige"/>
```

# ComboBox

```csharp
// populate static combo
  ComboBoxStaticCity.Items.Add("New York");
  ComboBoxStaticCity.Items.Add("Paris");
  ComboBoxStaticCity.Items.Add("Milan");

private void ComboBoxStaticCity_SelectionChanged(object sender, 
                                             SelectionChangedEventArgs e)
{
  //  MessageBox.Show($"You chose {ComboBoxStaticCity.SelectedItem}");
}
```

# Select Box

```csharp

supplierArray = 
            db.Suppliers.Select(s => s.CompanyName).OrderBy(s => s).ToArray();
```

# WPF Grid

## Creating A Button Grid Programmatically

```json
<Window x:Class="lab_37_WPF_grid_click.MainWindow"
xmlns="[http://schemas.microsoft.com/winfx/2006/xaml/presentation](http://schemas.microsoft.com/winfx/2006/xaml/presentation)"
xmlns:x="[http://schemas.microsoft.com/winfx/2006/xaml](http://schemas.microsoft.com/winfx/2006/xaml)"
xmlns:d="[http://schemas.microsoft.com/expression/blend/2008](http://schemas.microsoft.com/expression/blend/2008)"
xmlns:mc="[http://schemas.openxmlformats.org/markup-compatibility/2006](http://schemas.openxmlformats.org/markup-compatibility/2006)"
xmlns:local="clr-namespace:lab_37_WPF_grid_click"
mc:Ignorable="d"
Title="MainWindow" Height="Auto" Width="Auto"
Background="#e8f0d1" FontSize="30">
<Grid x:Name="Grid01">
<Grid.ColumnDefinitions>
<ColumnDefinition Width="*" />
<ColumnDefinition Width="*" />
<ColumnDefinition Width="*" />
</Grid.ColumnDefinitions>
<Grid.RowDefinitions>
<RowDefinition Height="*" />
<RowDefinition Height="*" />
<RowDefinition Height="*" />
</Grid.RowDefinitions>
</Grid>
</Window>

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace lab_37_WPF_grid_click
{
/// <summary>
/// Interaction logic for MainWindow.xaml
/// </summary>
public partial class MainWindow : Window
{
List<Button> buttons = new List<Button>();
public MainWindow()
{
InitializeComponent();
Initialize();
}

    void Initialize()
        {
    
            for (int i = 0; i < 9; i++)
            {
                var b = new Button();
                int buttonNumber = i + 1;
                b.Name = "Button" + buttonNumber;
                b.Content = buttonNumber;
                b.Click += new RoutedEventHandler(button_click);
                buttons.Add(b);
                //switch (i)
                //{
                //    case 0:
                //        Grid.SetColumn(b, 0);
                //        Grid.SetRow(b, 0);
                //        break;
                //    case 1:
                //        Grid.SetColumn(b, 1);
                //        Grid.SetRow(b, 0);
                //        break;
                //    case 2:
                //        Grid.SetColumn(b, 2);
                //        Grid.SetRow(b, 0);
                //        break;
                //    case 3:
                //        Grid.SetColumn(b, 0);
                //        Grid.SetRow(b, 1);
                //        break;
                //    case 4:
                //        Grid.SetColumn(b, 1);
                //        Grid.SetRow(b, 1);
                //        break;
                //    case 5:
                //        Grid.SetColumn(b, 2);
                //        Grid.SetRow(b, 1);
    
                //        break;
                //}
    
                Grid.SetColumn(b, i % 3);
                Grid.SetRow(b, i / 3);
    
                Grid01.Children.Add(b);
            }
    
    
        }
    
    
        private void button_click(object sender,EventArgs e)
        {
            var b = (Button)sender;
            MessageBox.Show($"You clicked button {b.Name} 
                   on Row {Grid.GetRow(b)} and col {Grid.GetColumn(b)}");
        }
    
    }

}
```

## WPF Detect Grid Position

### Returning the grid row or column which you clicked on

```
int row = grid.cell.column
int column = grid.cell.row
```

We can also find which grid cell a button has been clicked in by using this following code :

```
private void Button01_click(object sender, eventArgs e){
    buttonClicked = (Button)sender;
    int row = Grid.GetRow(buttonClicked);
    int col = Grid.GetCol(buttonClicked);
}
```

# Search

## Dynamic Text Box Search

```sql
Dynamic Text Box Search
    
 private void TextSearch_TextChanged(object sender, TextChangedEventArgs e)
{

    using (var db = new northwindEntities())
    {
        RetProductList = db.Products.Where(p => p.ProductName.Contains(textSearch.Text)).ToList();
        
    }
    ListViewProducts.ItemsSource = null;
    ListViewProducts.ItemsSource = RetProductList;
}
```

# Canvas

[The Canvas control - The complete WPF tutorial](https://www.wpf-tutorial.com/panels/canvas/)

[https://www.wpf-tutorial.com/panels/canvas](https://www.wpf-tutorial.com/panels/canvas/)  

Useful for absolutely positioned items : no relative positioning

```csharp

<Canvas>
		<Button Canvas.Left="10">Top left</Button>
		<Button Canvas.Right="10">Top right</Button>
		<Button Canvas.Left="10" Canvas.Bottom="10">Bottom left</Button>
		<Button Canvas.Right="10" Canvas.Bottom="10">Bottom right</Button>
	</Canvas>

```

## Z-Axis

```csharp

<Canvas>
        <Ellipse Fill="Gainsboro" Canvas.Left="25" 
                                      Canvas.Top="25" Width="200" Height="200" />
        <Rectangle Fill="LightBlue" Canvas.Left="25" 
                                       Canvas.Top="25" Width="50" Height="50" />
        <Rectangle Fill="LightCoral" Canvas.Left="50" 
                                       Canvas.Top="50" Width="50" Height="50" />
        <Rectangle Fill="LightCyan" Canvas.Left="75" 
                                       Canvas.Top="75" Width="50" Height="50" />
    </Canvas>

<Canvas>
        <Ellipse Panel.ZIndex="2" Fill="Gainsboro" Canvas.Left="25" Canvas.Top="25" Width="200" Height="200" />
        <Rectangle Panel.ZIndex="3" Fill="LightBlue" Canvas.Left="25" Canvas.Top="25" Width="50" Height="50" />
        <Rectangle Panel.ZIndex="2" Fill="LightCoral" Canvas.Left="50" Canvas.Top="50" Width="50" Height="50" />
        <Rectangle Panel.ZIndex="4" Fill="LightCyan" Canvas.Left="75" Canvas.Top="75" Width="50" Height="50" />
    </Canvas>
```

# WPF Data Grid

```json

namespace WPF_Data_Grid
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        Customer customer;

        public MainWindow()
        {
            InitializeComponent();
            Initialise();
        }
        void Initialise()
        {
            using (var db = new NorthwindEntities())
            {
                DataGrid01.ItemsSource = db.Customers.ToList();
            }
        }

        private void DataGrid01_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            customer = (Customer)DataGrid01.SelectedItem;
        }

        private void SaveCellChanges(object sender, EventArgs e)
        {
            if (customer != null)
            {
                MessageBox.Show($"cell has changed for customer {customer.CustomerID} of type {sender.GetType()}");
            }
        }
    }
}
```

# WPF Panels Lab

## Stack Panel

```csharp
<Window x:Class="lab_15_panels.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:lab_15_panels"
        mc:Ignorable="d"
        Title="MainWindow" Height="Auto" Width="Auto" Background="#c4d6f2">
    <Grid>
        <Grid.RowDefinitions>
            <RowDefinition Height="*" />
            <RowDefinition Height="3*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="3*" />
            <RowDefinition Height="3*" />
        </Grid.RowDefinitions>
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="3*" />
        </Grid.ColumnDefinitions>
        <Button x:Name="ButtonChangePanel" Background="#8db3ef" Grid.Row="1" Content="Change Panel" Click="ButtonChangePanel_Click"/>
        <Button x:Name="ButtonChangeTab" Background="#8fa4c6" Grid.Row="3" Content="Change Panel By Index" Click="ButtonChangeTab_Click"  />
        <Button x:Name="ButtonChangeTabByName" Background="#8fa4c6" Grid.Row="4" Content="Change Panel By Name" Click="ButtonChangeTabByName_Click" />
        <StackPanel x:Name="StackPanel01" Background="#5992ea" Grid.Row="1" Grid.Column="1"/>
        <StackPanel x:Name="StackPanel02" Background="#347ced" Grid.Row="1" Grid.Column="1"/>
        <StackPanel x:Name="StackPanel03" Background="#0c65f2" Grid.Row="1" Grid.Column="1"/>
        <TabControl x:Name="TabControl01" Background="#75dadd" Grid.Row="3" Grid.Column="1" Grid.RowSpan="2">
            <TabItem x:Name="First" Background="#84e8dc" Header="First">
                <Label x:Name="Label01" Content="First" />
            </TabItem>
            <TabItem x:Name="Second" Background="#56efdd" Header="Second">
                <Label x:Name="Label02" Content="Second" />
            </TabItem>
            <TabItem x:Name="Third" Background="#1cedd4" Header="Third">
                <Label x:Name="Label03" Content="Third" />
            </TabItem>
        </TabControl>
    </Grid>
</Window>

//cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace lab_15_panels
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        // Tracks which panel we are on
        int index;

        

        public MainWindow()
        {
            InitializeComponent();
            Initialize();
        }

        void Initialize() {
            index = 1;
            displayPanel(index);
        }
        private void ButtonChangePanel_Click(object sender, RoutedEventArgs e)
        {
            index++;
            if (index == 4)
            {
                index = 1;
            }
            displayPanel(index);
        }
        void displayPanel(int index)
        {
            switch (index)
            {
                case 1:
                    StackPanel01.Visibility = Visibility.Visible;
                    StackPanel02.Visibility = Visibility.Collapsed;
                    StackPanel03.Visibility = Visibility.Collapsed;
                    break;
                case 2:
                    StackPanel01.Visibility = Visibility.Collapsed;
                    StackPanel02.Visibility = Visibility.Visible;
                    StackPanel03.Visibility = Visibility.Collapsed;
                    break;
                case 3:
                    StackPanel01.Visibility = Visibility.Collapsed;
                    StackPanel02.Visibility = Visibility.Collapsed;
                    StackPanel03.Visibility = Visibility.Visible;
                    break;
            }
        }

        private void ButtonChangeTab_Click(object sender, RoutedEventArgs e)
        {
            if (TabControl01.SelectedIndex < TabControl01.Items.Count-1)
            {
                TabControl01.SelectedIndex++;
            }
            else
            {
                TabControl01.SelectedIndex = 0;
            }
        }

        // enum is structure which maps names to numbers  
        // days of week   0=sunday 6=saturday
        // months 0=january
        // enum automatically sets first=0, second=1, third=2 (same as TabIndex)
        enum tabs
        {
            First,
            Second,
            Third
        }

        private void ButtonChangeTabByName_Click(object sender, RoutedEventArgs e)
        {
            ChangeTabByName((TabControl01.SelectedItem as TabItem).Header.ToString());
        }

        void ChangeTabByName(string headerName)
        {
            switch (headerName)
            {
                // if index is 0 ('first' tab) then change it to index = 1 ('second' tab)
                case "First":
                    TabControl01.SelectedIndex = (int)tabs.Second;
                    break;
                case "Second":
                    TabControl01.SelectedIndex = (int)tabs.Third;
                    break;
                case "Third":
                    TabControl01.SelectedIndex = (int)tabs.First;
                    break;
            }
        }
    }
}
```

## WPF Stack Panel Toggle Visibility

```csharp

XML

        <StackPanel x:Name="Stackpanel01" Background="LightBlue" 
                    Grid.Row="5" Grid.Column="1">
            <Label x:Name="Label01" Content="Label01"/>
        </StackPanel>
        <StackPanel x:Name="Stackpanel02" Background="LightGreen" 
                    Grid.Row="5" Grid.Column="1">
            <Label x:Name="Label02" Content="Label02"/>
        </StackPanel>

    <CheckBox x:Name="EditMode" Unchecked="TogglePanel" Checked="TogglePanel" 
                  Grid.Column="2" Grid.Row="0" Content="Edit"/>

C# 

        void Initialise()
        {
            Panel.SetZIndex(Stackpanel01, 1);
            Panel.SetZIndex(Stackpanel02, -1);
        }

        private void TogglePanel(object sender, EventArgs e)
        {
            Panel.SetZIndex(Stackpanel01, Canvas.GetZIndex(Stackpanel01) * -1);
            Panel.SetZIndex(Stackpanel02, Canvas.GetZIndex(Stackpanel02) * -1);
        }
```

### Toggling Visibility - Also Check Out

StackPanel.SendToBack()
.BringToFront()
.Hide()
.Show()

## Scrollable Stack Panel

```json
<ScrollViewer VerticalScrollBarVisibility="Auto" Grid.Row="1" Grid.Column="1">
  <StackPanel x:Name="stackpanel02" Background="#dff" Orientation="Vertical" >
      <Button  Background="#ddd" Content="Button 01" />
      <Button  Background="#ddd" Content="Button 02" />
      <Button  Background="#ddd" Content="Button 03" />
      <Label Content="Label" Background="#888" HorizontalContentAlignment="Center" />
      <TextBlock Text="TextBlock" Background="#aaa" HorizontalAlignment="Center" />
      <TextBox Text="Text Box" HorizontalContentAlignment="Center" />
      <Button  Background="#ddd" Content="Button 01" />
      <Button  Background="#ddd" Content="Button 02" />
      <Button  Background="#ddd" Content="Button 03" />
      <Label Content="Label" Background="#888" HorizontalContentAlignment="Center" />
      <TextBlock Text="TextBlock" Background="#aaa" HorizontalAlignment="Center" />
      <TextBox Text="Text Box" HorizontalContentAlignment="Center" />
      <Button  Background="#ddd" Content="Button 01" />
      <Button  Background="#ddd" Content="Button 02" />
      <Button  Background="#ddd" Content="Button 03" />
      <Label Content="Label" Background="#888" HorizontalContentAlignment="Center" />
      <TextBlock Text="TextBlock" Background="#aaa" HorizontalAlignment="Center" />
      <TextBox Text="Text Box" HorizontalContentAlignment="Center" />
  </StackPanel>
</ScrollViewer>
```

## WPF DockPanel

Docks to Top, Bottom, Left and Right.  Center can be filled if `LastChildFill="True"`

```csharp
<DockPanel x:Name="dockpanel" Grid.Row="1" Grid.Column="2" Background="#eef" 
        LastChildFill="True">
    <Button Content="Top" DockPanel.Dock="Top" />
    <Button Content="Bottom" DockPanel.Dock="Bottom" />
    <Button Content="L" DockPanel.Dock="Left" />
    <Button Content="R" DockPanel.Dock="Right" />
    <Button Content="C" Background="Cyan" />

</DockPanel>
```

## WPF WrapPanel

```csharp
<WrapPanel x:Name="wrappanel" Grid.Row="1" Grid.Column="3" Background="#efe" >
  <Button Width="30" Background="Blue" Content="B" Margin="2" />
  <Button Width="30" Background="Blue" Content="B" Margin="2" />
  <Button Width="30" Background="Blue" Content="B" Margin="2" />
  <Button Width="30" Background="Blue" Content="B" Margin="2" />
  <Button Width="30" Background="Blue" Content="B" Margin="2" />
  <Button Width="30" Background="Blue" Content="B" Margin="2" />
  <Button Width="30" Background="Blue" Content="B" Margin="2" />
  <Button Width="30" Background="Blue" Content="B" Margin="2" />
  <Button Width="30" Background="Blue" Content="B" Margin="2" />
  <Button Width="30" Background="Blue" Content="B" Margin="2" />
  <Button Width="30" Background="Blue" Content="B" Margin="2" />
  <Button Width="30" Background="Blue" Content="B" Margin="2" />
  <Button Width="30" Background="Blue" Content="B" Margin="2" />
  <Button Width="30" Background="Blue" Content="B" Margin="2" />
  <Button Width="30" Background="Blue" Content="B" Margin="2" />
  <Button Width="30" Background="Blue" Content="B" Margin="2" />
</WrapPanel>
```

## WPF TabControl

```csharp
<TabControl>
    <TabItem Header="Customers" Background="#ACEFF8" />
    <TabItem Header="Products" Background="#87BDC4" />
    <TabItem Header="ListView With Multiple Columns" Background="#87BDC4">
        <ListView Margin="10" x:Name="ListViewCustomers">
            <ListView.View>
                <GridView>
                    <GridViewColumn Header="ID" Width="120" 
                              DisplayMemberBinding="{Binding CustomerID}"/>
                    <GridViewColumn Header="Name" Width="120" 
                              DisplayMemberBinding="{Binding ContactName}"/>
                    <GridViewColumn Header="Company" Width="120" 
                               DisplayMemberBinding="{Binding CompanyName}"/>
                </GridView>
            </ListView.View>
        </ListView>
    </TabItem>
</TabControl>
```

# WPF CRUD 28

## Lab Examples

### 1) WPF Framework CRUD app

[https://github.com/philanderson888/c-sharp/tree/master/Entity_10_WPF_Northwind](https://github.com/philanderson888/c-sharp/tree/master/Entity_10_WPF_Northwind)

## Set up our Entity CRUD App

```
<Grid>
    <Grid.RowDefinitions>
        <RowDefinition Height="*" />
        <RowDefinition Height="*" />
        <RowDefinition Height="*" />
        <RowDefinition Height="*" />
        <RowDefinition Height="*" />
        <RowDefinition Height="*" />
        <RowDefinition Height="20*" />
    </Grid.RowDefinitions>
    <Grid.ColumnDefinitions>
        <ColumnDefinition Width="*" />
        <ColumnDefinition Width="*" />
        <ColumnDefinition Width="*" />
    </Grid.ColumnDefinitions>
    <ListBox x:Name="ListBox01" Background="Beige" Grid.Column="0" Grid.Row="7" />
</Grid>
```

```
// can use lists
using System.Collections.Generic;
// can use Entity
using System.Data.Entity;

..

namespace Entity_10_WPF_Northwind
{
    public partial class MainWindow : Window
    {       
        public MainWindow()
        {
            InitializeComponent();
            PopulateListBox();
        }

        private void PopulateListBox()
        {
            using (var db = new NorthwindEntities())
            {
                ListBox01.ItemsSource = db.Customers.ToList<Customer>();                  
            }
        }
    }
 }
```

The customers will display as objects. To display certain fields we can bind certain fields in our XAML :

### Binding One Field

```csharp
using (var db = new NorthwindEntities())
{
    customers = db.Customers.ToList<Customer>();
    ListBox03.ItemsSource = customers;
    ListBox03.DisplayMemberPath = "ContactName";
}
```

### Binding Several Fields

```
<ListBox x:Name="ListBox01" Background="Beige" Grid.Column="0" Grid.Row="7" SelectionChanged="ListBox01_SelectionChanged">
    <ListBox.ItemTemplate>
        <DataTemplate>
            <TextBlock>
                <TextBlock.Text>
                    <MultiBinding StringFormat="ID - {0} - Name - {1} - City -{2}">
                        <Binding Path="CustomerID" />
                        <Binding Path="ContactName" />
                        <Binding Path="City" />
                    </MultiBinding>
                </TextBlock.Text>
            </TextBlock>
        </DataTemplate>
    </ListBox.ItemTemplate>
```

We should now be able to see all our Customers displaying in the list box.

### Selecting a customer

We can now click on our list box and select an individual customer.

Let's output the data to the screen when we select this customer.

To keep things simple let's just output the CustomerID, ContactName and City.

Let us firstly add a placeholder `customer` object

```
public partial class MainWindow : Window
{
    // use this to hold the selected customer when manipulating
    Customer customer;
```

Then the code to select an individual customer

```
private void ListBox01_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    if (ListBox01.SelectedItem != null)
    {
        // selected item is an object which we cast to Customer
        customer = (Customer)ListBox01.SelectedItem;
        // set the screen IDs
        TextId.Text = customer.CustomerID;
        TextName.Text = customer.ContactName;
        TextCity.Text = customer.City;
    }
}
```

We should be able to select customers and view them on the right also.

### Updating a customer

Now let's update a customer

Firstly add an `update` button

```
<Button x:Name="ButtonUpdate" Grid.Row="4" Grid.Column="2" Background="#8db0e8" Content="Update" Click="ButtonUpdate_Click"/>
```

and the code

```
private void ButtonUpdate_Click(object sender, RoutedEventArgs e)
{
    using (var db = new NorthwindEntities())
    {
        customer = db.Customers.Where(c => c.CustomerID == TextId.Text).FirstOrDefault();
        customer.ContactName = TextName.Text;
        customer.City = TextCity.Text;
        // write changes to database
        db.SaveChanges();
        // now clear out the screen items 
        ListBox01.SelectedItem = null;
        TextId.Text = null;
        TextName.Text = null;
        TextCity.Text = null;
        // refresh the list box
        ListBox01.ItemsSource = null;
        PopulateListBox();
        // put back the screen data
        ListBox01.SelectedItem = customer;
        TextId.Text = customer.CustomerID;
        TextName.Text = customer.ContactName;
        TextCity.Text = customer.City;
    }
}
```

We should find the updates are applied, written to the database, and refreshed on the screen.

Binding a combo box with distinct items

```csharp
using (var db = new NorthwindEntities()) {
cities =
    (from cust in db.Customers
     select cust.City).Distinct().OrderByDescending(city=>city).ToList<string>();
ComboBoxBoundToCity.ItemsSource = cities;
}

private void ComboBoxStaticCity_SelectionChanged(object sender, 
                                             SelectionChangedEventArgs e)
{
  //  MessageBox.Show($"You chose {ComboBoxStaticCity.SelectedItem}");
}
```

### Deleting a customer

Now finally let us delete a customer

Add a `delete` button

```
<Button x:Name="ButtonDelete" Grid.Row="5" Grid.Column="2" Background="#ff0000" Content="Delete" Click="ButtonDelete_Click"/>
```

And the code

```
private void ButtonDelete_Click(object sender, RoutedEventArgs e)
{
    using (var db = new NorthwindEntities())
    {
        customer = db.Customers.Where(c => c.CustomerID == TextId.Text).FirstOrDefault();
        // remove customer from local copy of database
        db.Customers.Remove(customer);
        // write changes to database
        db.SaveChangesAsync();
        // refresh screen items
        ListBox01.SelectedItem = null;
        TextId.Text = null;
        TextName.Text = null;
        TextCity.Text = null;
        ListBox01.ItemsSource = null;
        PopulateListBox();
    }
}
```

# WPF Northwind Customer App

```csharp

<Window x:Class="lab_24_Customers_App.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:lab_24_Customers_App"
        mc:Ignorable="d"
        Title="MainWindow" Height="Auto" Width="Auto" FontSize="18">
    <Grid Background="#E6EEFF">
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
        </Grid.ColumnDefinitions>
        <Grid.RowDefinitions>
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
        </Grid.RowDefinitions>
        <Label x:Name="LabelTitle"
               Background="#E6EEdd" Grid.Column="1" Grid.ColumnSpan="3" 
               HorizontalContentAlignment="Center" VerticalContentAlignment="Center"
               FontWeight="Bold">
            <TextBlock TextDecorations="Underline">Customer App</TextBlock>
        </Label>

        <StackPanel x:Name="StackPanel02" Grid.Row="1" Grid.RowSpan="3" Grid.Column="1"
                    Grid.ColumnSpan="3" Background="#FFFEE6">
            <Label x:Name="StackPanel01Label02" Content="StackPanel02" Background="#EFE6FF" 
                   HorizontalAlignment="Stretch" HorizontalContentAlignment="Center" />
            <Button Content="button" />
            <Button Content="button" />
            <Button Content="button" />
            <Button Content="button" />
            <Button Content="button" />
            <ListBox x:Name="ListBoxCustomers02" />
        </StackPanel>
        <StackPanel x:Name="StackPanel03" Grid.Row="1" Grid.RowSpan="3" Grid.Column="1"
                    Grid.ColumnSpan="3" Background="#FFFEE6">
            <Label x:Name="StackPanel01Label03" Content="StackPanel03" Background="#EFE6FF" 
                   HorizontalAlignment="Stretch" HorizontalContentAlignment="Center" />
            <Button Content="button" />
            <Button Content="button" />
            <Button Content="button" />
            <Button Content="button" />
            <Button Content="button" />
            <ListBox x:Name="ListBoxCustomers03" />
        </StackPanel>
        <StackPanel x:Name="StackPanel01" Grid.Row="1" Grid.RowSpan="3" Grid.Column="1"
                    Grid.ColumnSpan="3" Background="#FFFEE6" >
            <Label x:Name="StackPanel01Label01" Content="StackPanel01" Background="#EFE6FF" 
                   HorizontalAlignment="Stretch" HorizontalContentAlignment="Center" />
            <Button x:Name="CustomerNameFilter" Content="Search By Customer Name"
                     HorizontalAlignment="Stretch" HorizontalContentAlignment="Center" />
            <TextBox x:Name="CustomerSearch" 
                      HorizontalAlignment="Stretch" HorizontalContentAlignment="Center"
                     KeyUp="CustomerSearch_KeyUp" TextChanged="CustomerSearch_TextChanged"/>
            <ListBox x:Name="ListBoxCustomers" 
                      HorizontalAlignment="Stretch" HorizontalContentAlignment="Left" 
                     SelectionChanged="ListBoxCustomers_SelectionChanged" MouseDoubleClick="ViewOrders" >
                <ListBox.ItemTemplate>
                    <DataTemplate>
                        <TextBlock>
                            <TextBlock.Text>
                                <MultiBinding StringFormat=" {0,-10}  {1,-20} {2} ">
                                    <Binding Path="CustomerID" />
                                    <Binding Path="ContactName" />
                                    <Binding Path="City" />
                                </MultiBinding>
                            </TextBlock.Text>
                        </TextBlock>
                    </DataTemplate>
                </ListBox.ItemTemplate>
            </ListBox>
        </StackPanel>
        <Button x:Name="ButtonBack" Content="Back" Background="#D1E2E8" Grid.Row="4" Grid.Column="1" Click="ButtonBack_Click"/>
        <Button x:Name="ButtonForward" Content="Forward" Background="#D1E2E8" Grid.Row="4" Grid.Column="3" 
                Click="ButtonForward_Click" />
    </Grid>
</Window>

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace lab_24_Customers_App
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {

        static List<Customer> customers;
        public MainWindow()
        {
            InitializeComponent();
            Initialise();
        }

        void Initialise()
        {
            StackPanel01.Visibility = Visibility.Visible;
            StackPanel02.Visibility = Visibility.Collapsed;
            StackPanel03.Visibility = Visibility.Collapsed;

            using(var db = new NorthwindEntities())
            {
                customers = db.Customers.ToList();
                ListBoxCustomers.ItemsSource = customers;
            }
        }

        private void ButtonBack_Click(object sender, RoutedEventArgs e)
        {
            if(StackPanel01.Visibility == Visibility.Visible)
            {
                StackPanel01.Visibility = Visibility.Collapsed;
                StackPanel02.Visibility = Visibility.Collapsed;
                StackPanel03.Visibility = Visibility.Visible;
            }
            else if (StackPanel02.Visibility == Visibility.Visible)
            {
                StackPanel01.Visibility = Visibility.Visible;
                StackPanel02.Visibility = Visibility.Collapsed;
                StackPanel03.Visibility = Visibility.Collapsed;
            }
            else if (StackPanel03.Visibility == Visibility.Visible)
            {
                StackPanel01.Visibility = Visibility.Collapsed;
                StackPanel02.Visibility = Visibility.Visible;
                StackPanel03.Visibility = Visibility.Collapsed;
            }
        }

        private void ButtonForward_Click(object sender, RoutedEventArgs e)
        {
            if (StackPanel01.Visibility == Visibility.Visible)
            {
                StackPanel01.Visibility = Visibility.Collapsed;
                StackPanel02.Visibility = Visibility.Visible;
                StackPanel03.Visibility = Visibility.Collapsed;
            }
            else if (StackPanel02.Visibility == Visibility.Visible)
            {
                StackPanel01.Visibility = Visibility.Collapsed;
                StackPanel02.Visibility = Visibility.Collapsed;
                StackPanel03.Visibility = Visibility.Visible;
            }
            else if (StackPanel03.Visibility == Visibility.Visible)
            {
                StackPanel01.Visibility = Visibility.Visible;
                StackPanel02.Visibility = Visibility.Collapsed;
                StackPanel03.Visibility = Visibility.Collapsed;
            }
        }

        private void CustomerSearch_KeyUp(object sender, KeyEventArgs e)
        {
            
            ListBoxCustomers.ItemsSource = customers.Where
                (c => c.ContactName.Contains(CustomerSearch.Text)).ToList(); 
        }

        private void CustomerSearch_TextChanged(object sender, TextChangedEventArgs e)
        {

        }

        private void ListBoxCustomers_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {

        }
    }
}
```

# WPF Rabbit CRUD App

```csharp

<Window x:Class="lab_18_Rabbit_Database_CRUD.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:lab_18_Rabbit_Database_CRUD"
        mc:Ignorable="d"
        Title="MainWindow" Height="Auto" Width="Auto" FontSize="25" KeyDown="DoThis">
    <Grid Background="#B5EBE5">
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
        </Grid.ColumnDefinitions>
        <Grid.RowDefinitions>
            <RowDefinition Height="Auto" />
            <RowDefinition Height="*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="10*" />
        </Grid.RowDefinitions>
        <Label x:Name="labelHeading" Content="Rabbit App" Grid.Column="1" Grid.Row="0" 
               Grid.ColumnSpan="2" Background="#76C3E8" HorizontalAlignment="Center" HorizontalContentAlignment="Center" 
             FontSize="35" FontWeight="Bold" />
        <ListBox x:Name="ListBoxRabbits" Grid.Row="3" Grid.Column="0"  Background="#B3C6ED" 
                 SelectionChanged="ListBoxRabbits_SelectionChanged"
                  />
        <TextBox x:Name="TextBoxName" Grid.Row="2" Grid.Column="2" Background="#D3E9ED" />
        <TextBox x:Name="TextBoxAge" Grid.Row="2" Grid.Column="3" Background="#D3E9ED" />
        <Button x:Name="ButtonAdd" Grid.Row="1" Grid.Column="1" Background="#B3C6ED" Content="Add" 
                Click="ButtonAdd_Click" />
        <Button x:Name="ButtonEdit" Grid.Row="1" Grid.Column="2" Background="#B3C6ED" Content="Edit" Click="ButtonEdit_Click" />
        <Button x:Name="ButtonDelete" Grid.Row="1" Grid.Column="3" Background="#B3C6ED" Content="Delete" Click="ButtonDelete_Click" />
    </Grid>
</Window>

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace lab_18_Rabbit_Database_CRUD
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {

        static List<Rabbit> rabbits;
        static Rabbit rabbit = new Rabbit();

        public MainWindow()
        {
            InitializeComponent();
            Initialise();
        }

        void Initialise()
        {

            // using : automatic clean-up ((C# does not know
            // inherently when we're done so this block help
            // C# know that we are done, and clean all memory
            using (var db = new RabbitDbEntities())
            {
                rabbits = db.Rabbits.ToList();
            }

            // MANUAL METHOD
            // Fancy 'lambda' to a) loop rabbits b) each loop, add item to listbox on screen
            // get the list of rabbits.  For each rabbit in the list of rabbits do the following
            // rabbits.ForEach(rabbit => ListBoxRabbits.Items.Add(rabbit));
            // foreach (var rabbit in rabbits){ ... ListBoxRabbits.Items.Add...}

            // BINDING METHOD : BIND LISTBOX TO DATABASE (BETTER)
            ListBoxRabbits.DisplayMemberPath = "Name";
            ListBoxRabbits.ItemsSource = rabbits;

            TextBoxAge.IsReadOnly = false;
            TextBoxName.IsReadOnly = true;

            ButtonEdit.IsEnabled = false;
            ButtonDelete.IsEnabled = false;

        }

        private void ListBoxRabbits_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            // when deselect a rabbit, don't run this code
            // if(rabbit != null)  // or
            if(ListBoxRabbits.SelectedItem != null)
            {
                // whenever we select an item in the list, cast it from (Object) type 
                // and put it as a (Rabbit) type.  Put in the global 'rabbit' variable.
                rabbit = (Rabbit)ListBoxRabbits.SelectedItem;
                TextBoxName.Text = rabbit.Name;
                TextBoxAge.Text = rabbit.Age.ToString();
                // enable edit and delete
                ButtonEdit.IsEnabled = true;
                ButtonDelete.IsEnabled = true;
            }
        }

        private void ButtonAdd_Click(object sender, EventArgs e)
        {
            if (ButtonAdd.Content.Equals("Add")){
                ButtonAdd.Content = "Save";
                ButtonAdd.Background = (SolidColorBrush)(new BrushConverter().ConvertFrom("#9589FF"));
                // clear boxes and set to white
                TextBoxName.Text = "";
                TextBoxAge.Text = "";
                TextBoxName.Background = (SolidColorBrush)Brushes.White;
                TextBoxAge.Background = (SolidColorBrush)Brushes.White;
                TextBoxName.IsReadOnly = false;
                TextBoxAge.IsReadOnly = false;
                ButtonEdit.IsEnabled = false;
                ButtonDelete.IsEnabled = false;
            }
            else
            {
                ButtonAdd.Content = "Add";
                ButtonAdd.Background = (SolidColorBrush)(new BrushConverter().ConvertFrom("#B3C6ED"));
                TextBoxName.Background = (SolidColorBrush)(new BrushConverter().ConvertFrom("#D3E9ED"));
                TextBoxAge.Background = (SolidColorBrush)(new BrushConverter().ConvertFrom("#D3E9ED"));
                TextBoxName.IsReadOnly = true;
                TextBoxAge.IsReadOnly = true;
                // commit changes
                if ((TextBoxName.Text.Length > 0) && (TextBoxAge.Text.Length > 0))
                {
                    // get age
                    if(int.TryParse(TextBoxAge.Text,out int age)){
                        var RabbitToAdd = new Rabbit()
                        {
                            Name = TextBoxName.Text,
                            Age = age
                        };
                        // read db and add new rabbit
                        using (var db = new RabbitDbEntities())
                        {
                            db.Rabbits.Add(RabbitToAdd);
                            db.SaveChanges();
                            // update view
                            rabbit = null;

                            rabbits = db.Rabbits.ToList();
                            ListBoxRabbits.ItemsSource = null;
                            ListBoxRabbits.ItemsSource = rabbits;
                        }
                    }
                }
                
            }
        }

        private void ButtonEdit_Click(object sender, RoutedEventArgs e)
        {
            if (ButtonEdit.Content.Equals("Edit"))
            {
                ButtonEdit.Background = (SolidColorBrush)(new BrushConverter().ConvertFrom("#9589FF"));
                ButtonEdit.Content = "Save";
                TextBoxName.IsReadOnly = false;
                TextBoxAge.IsReadOnly = false;
                TextBoxName.Background = (SolidColorBrush)Brushes.White;
                TextBoxAge.Background = (SolidColorBrush)Brushes.White;
                ButtonAdd.IsEnabled = false;
                TextBoxName.Focus();
                TextBoxName.SelectAll();
            }
            else
            {
                Color color = (Color)ColorConverter.ConvertFromString("#B3C6ED");
                var brush = new SolidColorBrush(color);
                ButtonEdit.Background = brush;
                ButtonEdit.Content = "Edit";
                if ((TextBoxAge.Text.Length > 0) && (TextBoxName.Text.Length > 0))
                {
                    // must have selected a rabbit
                    if (rabbit != null)
                    {
                        rabbit.Name = TextBoxName.Text;
                        if(int.TryParse(TextBoxAge.Text, out int age))
                        {
                            rabbit.Age = age;
                        }

                        using (var db = new RabbitDbEntities())
                        {
                            // read rabbit from database by ID
                            var rabbitToUpdate = db.Rabbits.Find(rabbit.RabbitId);
                            // update rabbit
                            rabbitToUpdate.Name = rabbit.Name;
                            rabbitToUpdate.Age = rabbit.Age;
                            // save rabbit back to DB
                            db.SaveChanges();
                            // clear listbox because we're going to change (the binding)
                            rabbit = null;  // remove binding on rabbit
                           // ListBoxRabbits.ItemsSource = null;  // remove binding
                           // ListBoxRabbits.Items.Clear();       // clear it out
                            // repopulate listbox // re-read from db
                            rabbits = db.Rabbits.ToList();                // get rabbits
                            ListBoxRabbits.ItemsSource = rabbits;         // bind to listbox again

                        }

                    }
                }
                ButtonAdd.IsEnabled = true;
            }
        }

        private void ButtonDelete_Click(object sender, RoutedEventArgs e)
        {
            if (ButtonDelete.Content.Equals("Delete"))
            { 
                ButtonDelete.Content = "Confirm Delete";
            }
            else
            {
                // delete record
                // find record in database which matches selected rabbit
                if (rabbit != null)
                {
                    using (var db = new RabbitDbEntities())
                    {
                        var rabbitToDelete = db.Rabbits.Find(rabbit.RabbitId);
                        db.Rabbits.Remove(rabbitToDelete);
                        db.SaveChanges();

                        //ListBoxRabbits.ItemsSource = null;

                        rabbits = db.Rabbits.ToList();

                        ListBoxRabbits.ItemsSource = rabbits;
                    }
                }

                TextBoxName.Text = "";
                TextBoxAge.Text = "";

                ButtonDelete.IsEnabled = false;
                ButtonDelete.Content = "Delete";
            }
        }

        private void DoThis(object sender, KeyEventArgs e)
        {
	
            MessageBox.Show(e.Key.ToString());      
        }
    }
}
```

# WPF Movement with Dispatch Timer

[https://www.wpf-tutorial.com/creating-game-snakewpf/continuous-movement-with-dispatchertimer/](https://www.wpf-tutorial.com/creating-game-snakewpf/continuous-movement-with-dispatchertimer/) 

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Threading;

namespace lab_16_wpf_rabbit_explosion
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public DispatcherTimer timer = new DispatcherTimer();
        public MainWindow()
        {
            InitializeComponent();
            Initialise();
        }

        void Initialise()
        {
            Button01.Content = "Click Here";
            timer.Interval = TimeSpan.FromMilliseconds(1000);
            timer.Tick += changeColor;

        }

        void changeColor(object sender, EventArgs e)
        {
            var randomColor = RandomColorGenerator();
            Label01.Background = new SolidColorBrush(Color.FromRgb(randomColor.R, randomColor.G, randomColor.B));
        }

        static int counter = 0;
        private void Button01_Click(object sender, RoutedEventArgs e)
        {
            counter++;
            Button01.Content = $"{counter} times";

          //  var randomColor = RandomColorGenerator();
          //  Label01.Background = new SolidColorBrush(Color.FromRgb(randomColor.R,randomColor.G,randomColor.B));
            timer.Start();
        }

        public (byte R, byte G, byte B) RandomColorGenerator()
        {
            var r = new Random();
            byte R = (byte)r.Next(0, 256);
            byte G = (byte)r.Next(0, 256);
            byte B = (byte)r.Next(0, 256);
            return (R, G, B);
        }
    }
}
```

# Metro Apps GUI

```csharp

https://mahapps.com/ 
install mahappsmetro and mahapps.metro.resources

paste

        <ResourceDictionary>
            <ResourceDictionary.MergedDictionaries>
                <!-- MahApps.Metro resource dictionaries. Make sure that all file names are Case Sensitive! -->
                <ResourceDictionary Source="pack://application:,,,/MahApps.Metro;component/Styles/Controls.xaml" />
                <ResourceDictionary Source="pack://application:,,,/MahApps.Metro;component/Styles/Fonts.xaml" />
                <ResourceDictionary Source="pack://application:,,,/MahApps.Metro;component/Styles/Colors.xaml" />
                <!-- Accent and AppTheme setting -->
                <ResourceDictionary Source="pack://application:,,,/MahApps.Metro;component/Styles/Accents/Blue.xaml" />
                <ResourceDictionary Source="pack://application:,,,/MahApps.Metro;component/Styles/Accents/BaseLight.xaml" />
            </ResourceDictionary.MergedDictionaries>
        </ResourceDictionary>

<Controls:MetroWindow x:Class="lab_54_WPF_Metro.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:local="clr-namespace:lab_54_WPF_Metro"
        mc:Ignorable="d"
        Title="MainWindow" Height="450" Width="800">
    <Grid>
        
    </Grid>
</Controls:MetroWindow>

<Controls:MetroWindow x:Class="lab_54_WPF_Metro.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:Controls="clr-namespace:MahApps.Metro.Controls;assembly=MahApps.Metro"
        xmlns:local="clr-namespace:lab_54_WPF_Metro"
        mc:Ignorable="d"
        Title="MyTitle" Height="Auto" Width="Auto">
    <Grid>
        <Controls:MetroTabControl>
            
        </Controls:MetroTabControl>
    </Grid>
</Controls:MetroWindow>

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using MahApps.Metro.Controls;

namespace lab_54_WPF_Metro
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : MetroWindow
    {
        public MainWindow()
        {
            InitializeComponent();
        }
    }
}

mahapps.metro.iconpacks.modern

guides - icons and resources - copy

  xmlns:iconPacks="http://metro.mahapps.com/winfx/xaml/iconpacks"

Add new window
```

```csharp
Full code

<Controls:MetroWindow x:Class="lab_54_WPF_Metro.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:Controls="clr-namespace:MahApps.Metro.Controls;assembly=MahApps.Metro"
        xmlns:iconPacks="http://metro.mahapps.com/winfx/xaml/iconpacks"
        xmlns:local="clr-namespace:lab_54_WPF_Metro"
        mc:Ignorable="d"
        Title="MyTitle" Height="Auto" Width="Auto" Icon="Images/cross.png">
    <Controls:MetroWindow.RightWindowCommands>
        <Controls:WindowCommands>
            <Button Content="Click" Click="Page_Open"/>
            <StackPanel Orientation="Horizontal">
                <iconPacks:PackIconModern Kind="User" Width="20" Height="20" Margin="0 5 0 0" />
                <TextBlock Margin="4 0 0 0" VerticalAlignment="Center" Text="Peter" />
            </StackPanel>
        </Controls:WindowCommands>
    </Controls:MetroWindow.RightWindowCommands>
    <Grid>
        <Controls:Flyout x:Name="Flyout01" Width="450" Header="Sparta" 
                         Position="Right">
            <Controls:Flyout.Background>
                <SolidColorBrush Color="#FF2B2B2B" Opacity="0.75" />
            </Controls:Flyout.Background>
            <Canvas>
                <Image Source="Images\crusader.jpg" Width="450" Height="87" Stretch="Fill" />
            </Canvas>
        </Controls:Flyout>
        <Controls:FlipView x:Name="FlipView01" Foreground="{DynamicResource WhiteBrush}" Height="200" 
                           SelectionChanged="FlipView01_SelectionChanged">
            <Controls:FlipView.Items>
                <Grid Background="#2e8def" >
                    <iconPacks:PackIconModern Width="147" Height="48" 
                                              HorizontalAlignment="Center" 
                                              VerticalAlignment="Center" Kind="Cupcake" Margin="525,26,81.6,118" />
                    <iconPacks:PackIconModern Width="147" Height="48" 
                        HorizontalAlignment="Center" 
                        VerticalAlignment="Center" Kind="Acorn" Margin="319,26,287.6,118" />
                    <iconPacks:PackIconModern Width="147" Height="48" 
                        HorizontalAlignment="Center" 
                        VerticalAlignment="Center" Kind="ArrowCollapsed" Margin="114,26,492.6,118" />
                </Grid>
                <Grid Background="#2e8def" >
                    <iconPacks:PackIconModern Width="147" Height="48" 
                                              HorizontalAlignment="Center" 
                                              VerticalAlignment="Center" Kind="Cupcake" Margin="525,26,81.6,118" />
                    <iconPacks:PackIconModern Width="147" Height="48" 
                        HorizontalAlignment="Center" 
                        VerticalAlignment="Center" Kind="Acorn" Margin="319,26,287.6,118" />
                    <iconPacks:PackIconModern Width="147" Height="48" 
                        HorizontalAlignment="Center" 
                        VerticalAlignment="Center" Kind="ArrowCollapsed" Margin="114,26,492.6,118" />
                </Grid>
                <Grid Background="#2e8def" >
                    <iconPacks:PackIconModern Width="147" Height="48" 
                                              HorizontalAlignment="Center" 
                                              VerticalAlignment="Center" Kind="Cupcake" Margin="525,26,81.6,118" />
                    <iconPacks:PackIconModern Width="147" Height="48" 
                        HorizontalAlignment="Center" 
                        VerticalAlignment="Center" Kind="Acorn" Margin="319,26,287.6,118" />
                    <iconPacks:PackIconModern Width="147" Height="48" 
                        HorizontalAlignment="Center" 
                        VerticalAlignment="Center" Kind="ArrowCollapsed" Margin="114,26,492.6,118" />
                </Grid>
            </Controls:FlipView.Items>

        </Controls:FlipView>
        <Controls:MetroTabControl Margin="0,275,-0.4,-0.4">
            <Controls:MetroTabItem Header="Customers" Margin="0,0,-0.2,0" Height="39" VerticalAlignment="Top">
                <Button x:Name="Button01" Content="Button" />
            </Controls:MetroTabItem>
            <Controls:MetroTabItem Header="Products" Height="39" Margin="0.2,0,0,0" VerticalAlignment="Top">

            </Controls:MetroTabItem>
            <Button Content="Button" Height="100" Width="75"/>
            <Button Content="Button" Height="100" Width="75"/>
        </Controls:MetroTabControl>
        <Button Content="Button" HorizontalAlignment="Left" Margin="218,28,0,0" VerticalAlignment="Top" Width="174" Height="99" BorderBrush="#FFE51010" OpacityMask="#FFD9B2B2" Click="Button_Click">
            <Button.Background>
                <LinearGradientBrush EndPoint="0.5,1" StartPoint="0.5,0">
                    <GradientStop Color="Black" Offset="0"/>
                    <GradientStop Color="#FFF62E2E" Offset="1"/>
                </LinearGradientBrush>
            </Button.Background>
        </Button>
    </Grid>
</Controls:MetroWindow>

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using MahApps.Metro.Controls;

namespace lab_54_WPF_Metro
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : MetroWindow
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void FlipView01_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {

        }

        private void Page_Open(object sender, RoutedEventArgs e)
        {
            var page1 = new Page1();
            page1.Show();
       //     page1.ShowDialog();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {

            
            if (Flyout01.IsOpen == true)
            {
                Flyout01.IsOpen = false;
            }
            else
            {
                Flyout01.IsOpen = true;
            }
        }
    }
}
```

```csharp
Google - images - icon

Icon="Images/cross.png">

<Controls:MetroWindow x:Class="lab_54_WPF_Metro.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
        xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
        xmlns:Controls="clr-namespace:MahApps.Metro.Controls;assembly=MahApps.Metro"
        xmlns:iconPacks="http://metro.mahapps.com/winfx/xaml/iconpacks"
        xmlns:local="clr-namespace:lab_54_WPF_Metro"
        mc:Ignorable="d"
        Title="MyTitle" Height="Auto" Width="Auto" Icon="Images/cross.png">
```