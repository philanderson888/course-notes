# C# In A Nutshell By Albahari

[http://www.albahari.com/nutshell/code.aspx](http://www.albahari.com/nutshell/code.aspx)

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

Chapter 4

Delegates assign methods at runtime so are useful for live plugins which can be swapped in and out

Higher order function takes function as parameter

Multicast delegates means can add += -= etc

Func delegate accepts and returns same type

Action delegate returns void - just does something

Events

Broadcaster

Subscriber += methods.

Subscribers enable different events which do not interfere with each other

Func delegates

Anonymous methods replace by lambda

Throw can now be used as a statement

Exception conditionals

Enumerate.moveNext() is like yield statement

Anonymous type

Var object01 = new {

A=1,B=''hi"

}

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

Value

XText

Value

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

XSD XML Schema Definition

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

Chapter 13 : Diagnostics

Conditional compiling

#define TESTMODE

#if TESTMODE

// some code

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

}

see LINQPad for a great example counting primes

async void MyMethod(){

await MethodAsync(){}

}

Creating a responsive UI by using await for potentially long-running tasks

Create stackpanel with a button.Click method

MyMethodAsync(){

}

async void ClickMe(){

await MyMethodAsync(){}

}

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

}

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

URI

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

{

stream01.CopyTo(fileStream01);

}

}

}

see Http_Get_04 worked example of synchronous version

WebRequest with Async

async static void GetPage()

{

var pageRequest01 = WebRequest.Create("http://www.albahari.com/nutshell/code.html");

pageRequest01.Proxy = null;

using (var response01 = await pageRequest01.GetResponseAsync())

{

using (var stream01 = response01.GetResponseStream())

{

using (var fileStream01 = File.Create("page01.html"))

{

await stream01.CopyToAsync(fileStream01);

Console.WriteLine("file has arrived");

}

}

}

}

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

Query String

WebClient wc = new WebClient { Proxy = null };

wc.QueryString.Add (" q", "WebClient"); // Search for "WebClient"

wc.QueryString.Add (" hl", "fr"); // Display page in French

wc.DownloadFile (" http:// [www.google.com/](http://www.google.com/) search", "results.html");

System.Diagnostics.Process.Start (" results.html");

Form Data

WebClient wc = new WebClient { Proxy = null };

var data = new System.Collections.Specialized.NameValueCollection();

data.Add (" Name", "Joe Albahari");

data.Add (" Company", "O'Reilly");

byte[] result = wc.UploadValues (" http:// [www.albahari.com/](http://www.albahari.com/) EchoPost.aspx", "POST", data);

Console.WriteLine (Encoding.UTF8. GetString (result));

Cookies

HTTP Server

DNS

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

}

}

TCP Server

TcpListener listener = new TcpListener (< ip address >, port);

listener.Start();

while (keepProcessingRequests)

using (TcpClient c = listener.AcceptTcpClient())

using (NetworkStream n = c.GetStream()) {

// Read and write to the network stream...

}

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

Chapter 19 : Reflection and Metadata

Types

Instantiating types

Constructor

Attributes

Chapter 20 : Dynamic Programming

Chapter 21 : Security

System.Security.Permissions/Cryptography/Principal

Partial trust = limited user UAC standard

Full trust = elevated UAC permissions

Administrative elevation

<assembly

<trustInfo

<security

<requestedPrivileges

<requestedExecutionLevel level="requireAdministrator"

this will trigger UAC

Cryptography

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

Chapter 24 : Application Domains

Chapter 25 : DLL/COM

Chapter 26 : REGEX

Chapter 27 : ROSLYN COMPILER

Glossary

Accessibility Capping

class myClass{

public void DoThis(){}

}

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

ToString

Can output as hex with

myString=>myString.ToString("X2")

Binary

String to binary

txtFieldInBinary.Text = Convert.ToString(valueToDisplayAsBinary, 2);

WCF Research

Diagrams

WCF is linked to messaging

WCF is linked to .NET Remoting for remote control

WCF is linked to web services running ASMX

WCF is linked to WS* protocols for transferring data

WCF incoporates

Programming in

SOAP

HTTP

Data

Provides

Data Contract

Service Contract

Formats : ATOM, JSON, XML

Transports : HTTP, TCP

Protocol, SOAP, HTTP

WCF can be turn on with Windows Features under .NET

All WCF communication happens between endpoints

WCF is a messaging system

can abstract away from the actual transport mechanism used, so providing one clean interface for developers to use

WCF endpoints listen for and transmit messages

WCF binding describes how to send the message

Binding contains transport mechanism, encoding, security

WCF Contract defines how a message is structured

Start/Stop/Exchange data

One-way, Request-Response, or Duplex

One-way is like notification

Request-Response is like HTTP

Duplex is 2-way conversation

[http://www.albahari.com/nutshell/code.aspx](http://www.albahari.com/nutshell/code.aspx)

Chapters 1 and 2

Xamarin bought by Microsoft 2016

C#6 Roslyn compiler is open source

Csc.exe is compiler

Csc myfile.cs produces myfile.exe

Csc /target:library produces ell

Class @keyword can be useful when dealing with other libraries

Char c = 'n'

Char copyrightsymbol = '\u00A9' hex codes used

String x = '\\\\server\\share'

Or x = @'\\server\share'

String format :X2 is hex output

Default values

Char '\0'

bool false

int x = default (int)

params int[] myParameterArrayInput can pass in an array of parameters when the program is called

Ref can also be used to return a real object rather than just the value held in an object see Ref Returns

Mathematical operators use bodmas and left to right operstion

Assignment operators are right to left e.g. x=y=3

Using {namespace }

Using static System.Windows.Visibility (Hidden)

Namespace- inner wins unless explicitly qualify the outer

All names fully qualified at compile time

Using alias1 = system. . .

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

Signature = input parameters and name

Default constructor not made if you make one

Constructors are public but don't have to be - see nonpublic constructors

Destructor

Class x

Public x

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

Chapter 4

Delegates assign methods at runtime so are useful for live plugins which can be swapped in and out

Higher order function takes function as parameter

Multicast delegates means can add += -= etc

Func delegate accepts and returns same type

Action delegate returns void - just does something

Events

Broadcaster

Subscriber += methods.

Subscribers enable different events which do not interfere with each other

Func delegates

Anonymous methods replace by lambda

Throw can now be used as a statement

Exception conditionals

Enumerate.moveNext() is like yield statement

Anonymous type

Var object01 = new {

A=1,B=''hi"

}

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

Value

XText

Value

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

XSD XML Schema Definition

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

Chapter 13 : Diagnostics

Conditional compiling

#define TESTMODE

#if TESTMODE

// some code

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

}

see LINQPad for a great example counting primes

async void MyMethod(){

await MethodAsync(){}

}

Creating a responsive UI by using await for potentially long-running tasks

Create stackpanel with a button.Click method

MyMethodAsync(){

}

async void ClickMe(){

await MyMethodAsync(){}

}

Async method creation

1. Write code for standard sync method and get it working
2. Replace sync with async methods and await them
3. Upgrade async method return types to Task or Task<TResult> unless the methods are top level eg UI thread handlers

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

}

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

URI

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

{

stream01.CopyTo(fileStream01);

}

}

}

see Http_Get_04 worked example of synchronous version

WebRequest with Async

async static void GetPage()

{

var pageRequest01 = WebRequest.Create("http://www.albahari.com/nutshell/code.html");

pageRequest01.Proxy = null;

using (var response01 = await pageRequest01.GetResponseAsync())

{

using (var stream01 = response01.GetResponseStream())

{

using (var fileStream01 = File.Create("page01.html"))

{

await stream01.CopyToAsync(fileStream01);

Console.WriteLine("file has arrived");

}

}

}

}

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

Query String

WebClient wc = new WebClient { Proxy = null };

wc.QueryString.Add (" q", "WebClient"); // Search for "WebClient"

wc.QueryString.Add (" hl", "fr"); // Display page in French

wc.DownloadFile (" http:// [www.google.com/](http://www.google.com/) search", "results.html");

System.Diagnostics.Process.Start (" results.html");

Form Data

WebClient wc = new WebClient { Proxy = null };

var data = new System.Collections.Specialized.NameValueCollection();

data.Add (" Name", "Joe Albahari");

data.Add (" Company", "O'Reilly");

byte[] result = wc.UploadValues (" http:// [www.albahari.com/](http://www.albahari.com/) EchoPost.aspx", "POST", data);

Console.WriteLine (Encoding.UTF8. GetString (result));

Cookies

HTTP Server

DNS

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

}

}

TCP Server

TcpListener listener = new TcpListener (< ip address >, port);

listener.Start();

while (keepProcessingRequests)

using (TcpClient c = listener.AcceptTcpClient())

using (NetworkStream n = c.GetStream()) {

// Read and write to the network stream...

}

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

Chapter 19 : Reflection and Metadata

Types

Instantiating types

Constructor

Attributes

Chapter 20 : Dynamic Programming

Chapter 21 : Security

System.Security.Permissions/Cryptography/Principal

Partial trust = limited user UAC standard

Full trust = elevated UAC permissions

Administrative elevation

<assembly

<trustInfo

<security

<requestedPrivileges

<requestedExecutionLevel level="requireAdministrator"

this will trigger UAC

Cryptography

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

Chapter 24 : Application Domains

Chapter 25 : DLL/COM

Chapter 26 : REGEX

Chapter 27 : ROSLYN COMPILER

Glossary

Accessibility Capping

class myClass{

public void DoThis(){}

}

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

ToString

Can output as hex with

myString=>myString.ToString("X2")

Binary

String to binary

txtFieldInBinary.Text = Convert.ToString(valueToDisplayAsBinary, 2);

WCF Research

Diagrams

WCF is linked to messaging

WCF is linked to .NET Remoting for remote control

WCF is linked to web services running ASMX

WCF is linked to WS* protocols for transferring data

WCF incoporates

Programming in

SOAP

HTTP

Data

Provides

Data Contract

Service Contract

Formats : ATOM, JSON, XML

Transports : HTTP, TCP

Protocol, SOAP, HTTP

WCF can be turn on with Windows Features under .NET

All WCF communication happens between endpoints

WCF is a messaging system

can abstract away from the actual transport mechanism used, so providing one clean interface for developers to use

WCF endpoints listen for and transmit messages

WCF binding describes how to send the message

Binding contains transport mechanism, encoding, security

WCF Contract defines how a message is structured

Start/Stop/Exchange data

One-way, Request-Response, or Duplex

One-way is like notification

Request-Response is like HTTP

Duplex is 2-way conversation