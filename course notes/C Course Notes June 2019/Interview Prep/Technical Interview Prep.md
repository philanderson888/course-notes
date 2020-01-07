# Technical Interview Prep

Note to self : visit and improve the Proprofs question bank as a measure of their preparedness for an interview

IDE Integrated Development Environment

    Visual Studio
    VSCode (web)
    Xamarin (MAC) - Android/IOS

.NET

    Large (4GB) library of code built up over years on Windows.
    	C:\\Windows\\System32\\.......dll

.NET core

    stripped down, open source version

C# : Microsoft

    Goal : memory-safe (can't write directly to RAM)
    (stops direct access to RAM addresses)

Compiler ****

    Human code  Program.cs  ==>   Program.bin/exe/dll
                   read this              can't read 
    
    Compiler : take human-readable code and create 'binary' file (exe/dll) which
    	can be sent to CPU for running.  .NET also creates 'CIL' code which
    	is called 'Common Intermediate Langague' but it's a kind of half-way-house 		between human readable and the final binary code
    
    ILDASM  (VS command prompt)

Type

    int, char,bool    (VALUE TYPES, PRIMITIVES)  FAST, STACK MEMORY
    
    string, array, list  (REFERENCE TYPES)   LARGE, SLOWER, ON HEAP
    
    custom eg MyClass

Class - blueprint for creating object (field, property, methods)

Intantiate : new object

Method : function

4 Pillars
Abstract : hide fields and show PROPERTIES
Encapsulation : hiding
Inheritance
Polymorphism : many types: parent method : override in child method

SQL
Primary key : main index eg CustomerID(int), unique, not null

    Index : not primary key but still stored for fast retrieval
    
    Foreign key : Primary key in one table, but it's referenced in another table
    
    	Orders : OrderID     : primary key
    		 CustomerID  : foreign key
    
    Relational : tables
    
    NoSQL : no tables just raw JSON objects

Agile

    Done
    	Agreed as group.  Create sprint and set sprint goals (backlog items)
    			
    		MAIN BACKLOG ==> SPRINT BACKLOG  (DEFINE 'DONE')
    
    			Code : formatted correctly?
    			Tests : run?
    			Naming conventions?
    			Peer code review
    Acceptance Criteria
    
    	Testing : how we define tests in such a way so can approve code
    
    		% of code base which has been tested
    
    	Business : User Acceptance : end user validate your code meets
    			business requirements
    
    Agile : iterative : working code end of sprint
    
    	Sprint 0 
    	Sprint plan/ review/retro

Team work

Error	Mistake in answer

Exception	Code crashes

<script>

    var x = 100;    // global scope
    
    var y = function (){
    
    	var z = 200;  // function scope 
    
    	for (var i=0;i<10;i++){
    		let a = 500;
    	}
    }

Class Dog{
string name;
}

    Main(){
    	var d = new Dog();
    	d.name="Fido";
    }

Control Flow

    if, else if, switch
    
    while(x<10)
    do {}  while (x<10)
    for ( 1 to 10)  
    for (int i=0;i<10;i++)
    foreach (every item in array/collection)

String = array of char[] = {'h','e','l','l','o'}

int 16/32/64 number of bits used short/int/long

decimal 128 bits perfect rounding with money

float 32 / double 64 var x = 2.0; default is DOUBLE 64 bit

Null string x = null;

    CAN'T DO   int x = null;
         	        int? x = null;

1. C# Basics

2.1 IDE

What is an IDE
What is Visual Studio
Downloading Visual Studio
Introduction to .NET
What is C#
Understanding the compiler
“Hello World”
Basic debugging
2.2 variables, Types, Control Flows & Exceptions

Variables and variable types
Data Types
Strings
Integers
Floats
Doubles
Null
Etc.
Null reference exceptions
Casting
Care in casting floats and doubles
If statements
Nested If statements
Conditional (ternary) Operator
Switch statement
Iterating (Loops)
For
Foreach
While
Jumping
Break
Continue
Goto
Return
Throw **
Throw exceptions & raising errors
Handling exceptions
Try
Catch
Chaining Catch blocks
Throw
3. Objects, Classes & OOP

Creating a VS project
Understanding namespaces
What is a class
Instantiation
Instantiation & Objects
Class constructors (initialisation)
The difference between Value Types and Reference Types
Methods
Method Types
Void
Method overriding? TBD
Method overloading
Encapsulation
Access Modifier types
Abstraction
Inheritance
Polymorphism – ‘Many shapes’ or single interface to many types
Example walkthroughs
SOLID Principles
4. Collections

Arrays
Lists
Dictionaries
Stack

Loops
Conditional if..else..
Exception try..catch..finally
String manipulate

Random Terms

META : data about data

    PHOTO : raw data
    	TIME TAKEN : metadata about photo
    	TAG FACE   : metadata

var function DoThis() {
// run some code here
}

var x = function(c){
// run some code here
}

var x = ()=>{
// run some code
}

var x = c =>{}

DoThis();

Random Term Review

Threading : one MAIN THREAD (public static void Main(string[] args)) plus sub-threads to do extra work
Tasks : clean way for programmer to initiate background threads without worrying about the detail
(Javascript has : WebWorker)
Thread-aware code take advantage of multi-core CPUs
Single-threaded application
C# ==> get away from problems in C / C++ where you manage memory and raw processes directly
Container :
Collection :
List()
List<T> = has [0] index so yes, can reach in and get middle item
Generics uses general type <T>
Stack<T> NO - only top item
Queue<T> NO - add at end, remove from front
Dictionary<Tkey,Tvalue>
Array : Fixed-size (much faster)
Collection : variable-size
Templates
Namespace : Container for our code
namespace x { class myClass {} }
namespace y { class myClass {} }
x.myClass
y.myclass
Servers
Docker : mini-server SHARES CORE 'KERNEL' AND EXPOSES UNIQUE 'WORK AREA' to store and use code
Containers : unique workspaces
Serverless architecture
Classes : Inheritance
Parent ,
Child : Parent (one parent only)
Interface (use multiple interfaces)
Interface : fully blank : does force you to create a certain method
IEnumerable : GetEnumerator which allows to count eg over an array
IComparable : CompareTo() which allows us to compare 2 objects by eg size, weight, color
Encapsulation : hiding code or exposing code
Access Modifier
private : in this class only
public : any class
internal : in same 'workspace' = 'assembly' which is the unit of compiled code, EXE or DLL
protected : access in this class and any child 'derived' classes
EXE run code
DLL reference code (library)
BASE : Parent class
DERIVED : Child class
static
class Parent {
void DoThis(){ // do something } // INSTANCE METHOD
static void DoThat(){ }
}
Main() {
var p01 = new Parent(); // p01 is an INSTANCE
p01.DoThis(); // P01.DoThis()
Parent.DoThat();
}

100 Random Terms
Abstraction : both hide (irrelevant) but also reveal essential (properties with get;set;) to external code. Keeps code neat.
Encapsulation : hiding code
Inheritance : BASE = Parent class ===> DERIVED = Child = Sub class
Polymorphism : Parent method : override this in child method. Poly = many, Morph = type/form . Allows runtime method to be changed.
Sealed class has no ... child (derived) classes
Class can inherit from one class but can USE / IMPLEMENT MULTIPLE INTERFACES
Interface : FORCES CERTAIN BEHAVIOUR
IEnumerable : can 'count' eg over an array
IComparable : can 'compare' items to sort
Abstract class CONTAINS AT LEAST ONE ABSTRACT METHOD
abstract void DoThis(); PARENT CLASS
override void DoThis(){ // code }

Interface : blank (abstract) methods

Abstract class : blank (abstract) and regular methods

Class : methods	CONCRETE

data types
agile
scrum
sprint
sprint 0 : pre-planning, setup environment
done
scrum master : servant leader, clear impediments
product owner : liaise with client
sprint : 2-4 weeks
dev team : 3-9
waterfall : fixed structure : analyse, plan, design, build, test, live
agile : build code in iterations : start simple. Then add 1 unit of functionality at a time. Customer gets working code. Embrace flexibility.
kanban : limit of tasks in use : continuous flow of work
xp : extreme programming = pair programming
spiral = agile
TDD test driven : tests written in UNIT TESTS (HARD CODED)
BDD behaviour driven : tests written in PLAIN ENGLISH
v-model : waterfall + extensive testing (good for military)
Javascript : weakly typed
C# : strongly typed
SQL : Structured query language
LINQ : Microsoft C# query to database
Relational database : tables are RELATED
MYSQL free opensource
SQLITE free opensource small (phones)
UNIX (paid)
MAC : IS UNIX
APACHE : free website
LINUX : free unix-like
UBUNTU : most common linux download
RED HAT : linux for businesses
devops
NOSQL stores data as JSON
JSON { field1:"data1", field2: 999} javascript object notation
AJAX : get data without page refresh
CRUD : CREATE READ UPDATE DELETE
INSERT = CREATE
SELECT = READ
KALI : IT Security : hacking tools
primary key UNIQUE ID IN TABLE
foreign key LINKS 2 TABLES
SOLID : GOOD CODING : .. SINGLE RESPONSIBILITY
CSS Media query : screen min/max-width:800px
var public / function scoped
z=500; // public
function x(){ var y = 10; z=50;}
// no y here

let IS BLOCK SCOPE

    function dothis(){
    	if(x>10){  let p=true; }
    }

.net : WINDOWS ONLY : C#, C++
.net core : mini (new) version for web
.net framework = .net

wpf has GUI
console app text only

=================

constructor : Method called when you CREATE A NEW OBJECT (Instantiate)
called when use 'New' keyword
Class Parent{}
Main(){ var p = new Parent(); }
Default constructor
class X{
public X(){}
}

Class Instructions (template) for building a new object
Object created from a class
Instantiate create object from class

cast = CHANGE TYPE

    2.5 ==> 2
       double   int                     (int)d

box = CHANGE TYPE TO OBJECT

parse string "{"a":1,"b":2}" ==> take string MAKE (JSON) OBJECT
TryParse() SAFE
ParseInt() DANGEROUS

convert

script : line 1, to end
javascript : compile 'live' as you go

GUI ==> objects eg button, dropdown

Events ==> 'click' 'hover'

OOP : attach code to OBJECTS EG BUTTON, DROPDOWN BOX

OOP = OBJECT ORIENTED = MEANS 'objects' which we attach code to
button onclick()

BASH	Command line on MAC / Linux
Terminal on MAC
CMD	Old command line
Powershell	New command line
GitBash	Application to emulates (copies) the Linux environment
MD	Windows command
mkdir	Linux command

Random Review

Inheritance class Child : Parent

Interface : blank class, one method (can be more) which is fully blank

    Interface IDoThis{							// COMPLETELY ABSTRACT : NO CODE
    	// no fields
    	// yes properties
    	int x {get;set;} 		// PROPERTY
    	DoThis();   // BLANK
    }
    
    class x : y, Iinterface01, Iinterface02, IDoThis{			// CONCRETE CLASS : ALL CODE FILLED
    	public int x {get;set;}  	// must be declared
    	public void DoThis(){} 		// must be declared
    }

Abstract class : mix of blank (abstract) methods and real methods

    abstract class MyClass{
    	
    	void RealMethod(){ // real code} 				// GOOD CODE
    
    	abstract void  AbstractMethod();   // no code 			// MISSING CODE 
    
    }
    
    
    class Child : MyClass{							// this is now CONCRETE
    	void AbstractMethod(){  // REAL CODE }	
    }

Can only INSTANTIATE A CONCRETE CLASS !!!!

Agile : simple first then build ITERATIVELY AND PROGESSIVELY MORE COMPLEX
Sprint : goal is working code (NEXT ITERATION)
Waterfall : ANALYSIS, DESIGN, BUILD, TEST, RELEASE
Kanban : continuous with limiting of number of active tasks
Compiler csc.exe C Sharp Compiler !!!

    .CS  text   ==> IL  Intermediate Language
    
    C#, C++, VB ==>  IL    (ILDASM)            ==>  at RUNTIME ==> CLR  common language runtime : OPTIVMISED FOR
    								HARDWARE (CPU/RAM)

Agile

    agilemanifesto.org
    
    increments : using Scrum which has sprints

cripting : 'top-down' line-by-line
OOP : code attached to OBJECTS eg Button : EVENT ==> RUN CODE ((EVENT HANDLER)) ==> DELEGATE ==> Method(s)
4 pillars :
Abstract	hide code ('_fields') also expose publicly code ('properties'){get;set;}
Encapsulation	hides code
Inherit	Parent Base Class : properties / fields/ methods also in Derived Child Class
Polymorphism	subclasses : have own version of methods declared in parent
Parent : HaveAParty(){ // parent code }
Child : override HaveAParty(){ // unique code here }
Class	Blueprint for creating objects : contains FIELDS, PROPERTIES, METHODS, EVENTS
Instantiate	Create object using new keyword var object01 = new MyClass();
Constructor	Method called with new .. keyword
Class
Abstract Class	Cannot instantiate because code incomplete. Contains empty methods marked as
'abstract'
abstract class Parent{
abstract void DoThis();
}
class Child : Parent{
override void DoThis(){}
}
Concrete Class	has all code present
Interface

Polymorphism	class Parent{
virtual void DoThis(){}	// virtual = 'can override if you wish'
}
class Child{
override DoThis(){}
}

Field	_private
Property	public {get;set}
Method	= Function
Access Modifiers	public private
internal inside .exe or .dll ASSEMBLY .apk .app
protected parent base and all child derived classes
Struct	mini Class
Collection	list, dictionary, queue, stack
Generic	<T> for type int, bool, MyClass, Customer
var vs let in Javascript	var global, let is block scoped
Angular
React
Vue
Queue
Stack
Dictionary
Array
LinkedList	shortcuts to next item
Sealed	has no Child Derived classes