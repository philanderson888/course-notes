# Summary Review Notes

# OOP Summary Fri 6 Sept

    class MyClass{
    	
    	private int _hideMe;     // private field (OOP encapsulation)
    
    	public string Name {get;set;}  public PROPERTY (OOP Abstraction)
    
    	public void DoThis();
    
    }
    
    abstract class Idea{
    	abstract void DoThis();   // no code BODY or IMPLEMENTATION 
    }
    class SolidThoughts : Idea{
    	override void DoThis(){}
    }
    ABSTRACT CLASS ==> cannot instantiate
    CONCRETE (REGULAR) CLASS => can instantiate
    
    	var m = new MyClass():
    
    OOP Polymorphism
    					Parent : virtual   (has a code body)
    					Child  : override  (optional)
    OOP Abstract
    					Parent : abstract  (empty)
    					Child  : override  (mandatory)
    
    OOP Inheritance
    
    Access Modifiers : public, private, protected, internal
    	public : see from anywhere
    	private : hidden inside class
    	protected : hidden inside class and derived child classes
    	internal : within compiled EXE / DLL : visible in this scope
    
    		library MYLIBRARY.DLL
    				internal : use within this DLL but not outside it

# Agile, OOP Revision 10 September

Tues 10 Sept : Morning Review

Agile Manifesto
people over process
working code over documentation
collaboration over negotiation
Scrum
3 : Pillars
Transparency , Inspection , Adaptation

Scrum Roles
Scrum Master : Admin / Keep focus/flow, remove 'blockers'
Product Owner : 1) Owns the BACKLOG 2) Liaise with customer
Dev : 3-9 : self-organising
Backlog : list of requirements for complete project
Sprint backlog : mini-list of requirements for just this sprint
Sprint : 1-4 weeks, focused work
Goal of sprint : implement a new feature : release : new increment of version
Version increments
Breaking change 1.0
2.0
3.0
Example : AngularJs 1.0
Angular 2.0

    Version increment 	
    							3.1
    							3.2

Waterfall : tradition model : good for fixed or small or repeatable projects unlikely to change
Buildings, Engineering, ?Military?
SDLC
Requirements Gather
Analysis
Design
Build
Test
Release
Maintain
Documennt
V-Model : Critical grade systems where eg life is at stake, extra testing at each stage

Unit Testing : test individual units (modules) of code (smallest level)
Integration Testing : join modules together
System Testing : overall system
UAT User Acceptance Testing : user validates that our code meets the agreed 'list of requirements'
Feasibility Study : initial guidance to client : is project feasible a) Technical b) Financial
Alpha Release : initial release, often it's by INVITATION ONLY : journalists, specialists, stakeholders
Beta Release : final release before production version is ready; used to provide a) customers with free demo b) Production company gets free feedback
Regression Testing ensures when build new feature or fix bug, this does not break existing code.
Black box : inputs/outputs only : know nothing about code.
White box : Allows testing with detailed knowledge of coding
RGR Red (Tests Fail) Green (Pass Test) Refractor (optimise)
Minify code : make as small as possible
jquery.js : original code
jquery.min.js : minified code

JIT Just In Time : minimise waste on 24/7 manufacture
Kanban : Work flow for continuous models. Limit active work in progress at any one time

OOP
Class : blueprint for new objects
Property : public variables {get;set;} PascalCase
Constructor : create new instance var instance = new MyClass(1,2,3);
Overload : same method different parameters
Inheritance : Parent Base => Child Derived
Method : function DoThis(){}
Abstract Method public abstract void DoThis();
Abstract Class class with one or more abstract methods
(( can you instantiate ??? No - must derive a child class which implements all methods, then
you can instantiate ))
Concrete Class standard class, standard methods instantiate??? Yes
Abstract Class has 1/more abstract method instantiate??? No
Field : private variable _likeThis;
Encapsulation : private members
Member : a) field b) property c) method d) event
4 Access Modifiers : 1) Private 2) Public 3) Protected (parent & children) 4) Internal (exe/dll)
Polymorphism : Inherit from parent but can optionally override

4 Pillars
Encapsulation
Inheritance
Polymorphism
Abstraction PUBLIC PROPERTIES to INTERACT with ENCAPSULATED MEMBERS

Abstract Class Class with one or more abstract methods
Abstract Method Method with no body (code implementation)
Abstract (dictionary) Concept, not tangible
Abstracted out of a situation : made distant from a situation
Abstract (OOP Pillar) User ========> Public Property =========> Private Member
| abstracted away from private member by public property |

# Web Interview Prep : 17 Sept 2019

Interview prep

javascript - language which RUNS IN BROWSER
javascript - also runs ON A COMPUTER (NODEJS)
library - import code from other people
getElement(s)ById/ClassName/Tag : 1 element or array of elements
class : many items
id : one item
<p class="myclass1 myclass2 myclass3"> CSS .myclass1
<p id="myid"> CSS #myid
style tag CSS
INLINE <p style="background-color:red;">
INTERNAL <style> in HEAD normally
EXTERNAL style.css link with <link href="style.css" rel="stylesheet">
script tag
INLINE <button onclick="alert('hi');">
INTERNAL <script> </script>
EXTERNAL index.js

Libraries
angular - google {{ data }}
react - facebook - render a virtual 'DOM'
jquery - old
vue - best of react and angular
lodash - arrays
momentJS - time/date
DOM - Document Object Model : structure of HTML page
HTML
HEAD
BODY
DIV
H1
P

# Summary Revision Mon 30 Sept 2019

# Mon 30 Sept : Revision

Sprint : Focused piece of work 1-4 weeks
Sprint Plan Take PROJECT BACKLOG ==> Create SPRINT BACKLOG
Work for future! (define tasks and 'done')
Daily Standup YESTERDAY, TODAY, BLOCKERS
Sprint Review (1) display result of sprint as WORKING VERSION
a) MVP Minimum Viable Product
b) v1.0
c) v1.1 non-breaking change
d) v2.0 breaking change
(2) work done (define done as well as part of this)
Sprint Retro : internal analysis of team strengths, weaknesses, future
improvements etc
Agiles : values : working code over documentation
: people over processes
: collaboration over negotation
Waterfall : Linear life cycle
Good : smaller, repeatable, military, life-threatening projects
Bad : consumer projects where business goals may shift month to month
SDLC : Software Development Life Cycle
Feasibility, Requirements Gathering, Analysis, High level design (architecture), Low level detailed design (specs), Build (Implement), Test, Release, Maintain, Document.
V-model : testing
Code block = Module = Unit : Unit testing
Units join ==> Integration test
Working product ==> system test
User requirements ??? ==> UAT User Accaptance Testing
3 Pillars Of Scrum : Transparency, Inspection, Adaptation
XP Extreme : Pair programming (older)
Kanban : 24/7 eg car manufacture
Kanban Board : LIMITS ACTIVE 'In Task' items
BACKLOG SELECTED IN DEVELOPMENT TESTING APPROVED SIGNED OFF
JIT : reducing waste and also unused stock held
User Story : Scenario : As a .... When I .... Then ...
As a user when I login I see list of products
admin list of users
Testing : minimise defects
Exhaustive : not possible
Red Green Refractor : 1) Build tests 2) Build code to pass 3) Optimise
White Box : inner working visible : fully test with this in mind
Black Box : inner working hidden : visible INPUT/OUTPUT
Alpha : 1st release : invitation to closed group eg journalists, enthusiasts, stakeholders, developers
Beta : pre-release : free for testing
Regression : ensure latest code does not break older code

Error : miscalculate interest on loan : logic error
Exception : code crashes
Handled : try..catch..finally
try{ // dodgy code}
catch(Exception e){ // handle e}
Unhandled : system visibly crashes
Failure : product does not meet requirements

OOP
Class
Sealed
Abstract Class
Concrete Class
Inheritance
Encapsulation
Abstraction (OOP)
Polymorphism
virtual
override
abstract/override
Interface
overload

Sprints
BurnUp : list of tasks DONE
BurnDown : list of tasks TO BE DONE

# Technical Review Week 7

Technical Review

Why are you at Sparta?

Strengths?

Weaknesses?

Project work of note
University
Sparta

Why do you like coding?

Where do you see yourself in 5 years time?

Code out FizzBuzz here in notepad NOW!
for(int i=0;i<100;i++){
if (i%15==0) {cw(FIZZBUZZ);continue}
if(i%5==0) {cw(BUZZ) ;continue}
if(i%3==0) {cw(FIZZ) ;continue}
cw(i);
}

What's a CLASS - blueprint to create objects
INSTANCE - object created from the class, often using the constructor method to add in detail. Default contstructor will create blank object.
public class MyClass{
public MyClass(){} // constructor
}
SEALED CLASS class which cannot have a derived (child) class
ABSTRACT CLASS - class with one or more abstract methods
VIRTUAL KEYWORD - used in a method which can be overridden
OVERRIDE KEYWORD - derived method implements own functionality compared with parent
base class method
OVERLOADING - same method different parameters DoThis(int x) DoThis(string y)
OOP 4 PILLARS
INHERITANCE deriving from BASE
ENCAPSULATION private members hidden
ABSTRACTION public PROPERTIES allow access to private members
PICTURE : INTERNAL CAR ENGINE
POLYMORPHISM inheritance with optional override
SCRUM 3 PILLARS Adaptation, Inspection, Transparency
Agile - adaptable, flexible, work in 'sprints'
Collaboration over negotiation
People over process
Working software over documentation
Scrum 3 roles
SCRUM MASTER - ENSURE SMOOTH WORKFLOW, REMOVE BLOCKERS
DEV TEAM 3-9 SELF ORGANISING, MULTI-SKILLED, JOINTLY ACCOUTABLE
PRODUCT OWNER - OWNS PRODUCT/PROJECT BACKLOG (LIST OF REQUIREMENTS)
ALSO SPRINT BACKLOG
DEFINITION OF 'DONE' BY DEV TEAM - WORK GETS APPROVED HERE
Sprint - focused block of time
Sprint 4 meetings : Plan, Daily : yesterday/today/blockers
, Review - present to client work done, Retro - internal review
SDLC : [Feasibility]
Requirements, Analysis, Planning, Design, Build, Test, Release, Maintain, Document

Waterfall : linear
Agile : adapt to change
Kanban : 24/7 rolling with limit on CURRENT TASKS
JIT just in time

Abstract class
Abstract method abstract void DoThis();
((override is mandatory in child))

virtual void DoThis(){} body
abstract void DoThis(); no body
override void DoThis(){} // abstract mandatory and virtual optional override

Interface : fully abstract

SOLID : best to have ONE METHOD ONLY (S=SINGLE RESPONSIBILITY)
S SINGLE REPONSIBILITY : one class : one thing
O OPEN FOR EXTENSION / CLOSED MODIFICATION
L LISKOV
I INTERFACES : ONE METHOD ONLY
D DEPENDENCY INJECTION (PARENT/CHILD INTERCHANGE)

API
get	/customers/	SQL SELECT ALL
get /customers/10 SQL SELECT 1
post /customers/	SQL INSERT
post /customers/10	SQL UPDATE

    put     /customers/10           UPDATE
    delete  /customers/10            DELETE

CRUD create read update delete
SQL insert select update delete
SQL DATABASE create, drop IF EXISTS, alter

ENUM list of elements eg enum fruits
5 minute ON THE CLOCK
enum days of week
enum months of year
enter number for 0-6 and 1-12 and
return day and month
create test also

STRUCT MINI CLASS - VALUE TYPE IE STORED IN FAST STACK MEMORY. FIELDS ONLY PRIMITIVES

Full Stack Well-rounded developer who has skills both in the back-end database realm, using APIs and also reading data to a front-end visual client eg web page or other app reading JSON or other data

CI Continuous Integration : Work that you push to the local 'feature' branch gets tested straight away. If it passes the tests it gets integrated into the local 'dev' branch and all other developers working off that 'dev' branch integrate your work into their own work straight away. This helps to avoid conflicts after one person has done months and months of work, finds a conflict, then has to start again!

CD Continuous Delivery - all developers push features and bug fixes past the testing. If passes, pushed to 'dev' branch. Every day or so (release date) push to master ==> push this into production.

Large project structure

    .sln   					SOLUTION
    
    	Main.exe   			APP WHICH RUNS
    		private classes
    		public classes
    		REFERENCE Library.dll 
    			use classes from library
    
    	Library.dll 
    		public classes used in multiple projects 
    
    	DLL or EXE is called ASSEMBLY
    
    		ASSEMBLY HAS A VERSION AND ALSO IS SIGNED BY A COMPUTER CERTIFICATE
    
    			ALLOWS COMPUTER TO DIFFERENTIATE VERSIONS OF SAME NAME BUT DIFFERENT
    					VERSIONS
    
    						MyApp   v1.0.1
    						MyApp   v1.0.2

# Revision (C# and Web) Tuesday 15 October

SOLID
S single responsibility - ONE CLASS DOES EXACTLY ONE THING (modular code)
O open for extension, closed for modification (think plugin extends software but does not modify it)
L Liskov : swap parent/child classes
I Interfaces : keep small ie single method
D Dependency injection : Design using abstract classes as good practice

Reference type
value type = primitive
stack memory
heap memory
primitive 'primitive structures' ie very simple objects : in memory we 'declare' the object, give it a 'type', and also store data with object in memory at that location (in the stack) eg int takes 32 bits storage
short	16 2
int	32 BITS 4 BYTES
long	64 8
float	32
double	64 use this for LARGEST NUMBERS POSSIBLE 10^300
decimal	128 minimise rounding errors using decimals
bit	1/0
BOOLEAN	t/f
byte	8 BITS
byte[] buffer	used to store/carry data eg to MEMORY ON LOCAL COMPUTER
FASTEST POSSIBLE STORAGE TYPE
char
nibble	4 bits 1010 hexadecimal 0-9 A-F
mac FE45CC33EEAA
operator
%	remainder (modulus)
int/int	fractional division : taking whole number result
12/7 = 1
100/8 = 12
>> << bit shift operator multiply/divide by 2
5>>1 result is 2
&&	AND (short circuit (1==0) && (1==1) )
||	OR
^ XOR 1^1 ==> 0 1^0=1 0^0=0

struct	mini class : contains only PRIMITIVES and stored ON STACK
string	array of char[] myString[0] first letter
pass by reference	work with pointer to object so no matter where you are
working, if you alter the object you alter the root object
pass by value	copy is independent of original

collection
ARRAY	INDEX[n]
FIXED SIZE IMMUTABLE
LIGHTNING FAST TO READ/WRITE BECAUSE KNOW EXACT MEMORY ADDRESS
LIST	VARYING LENGTH
INDEX[n]
INSERT/REMOVE FROM MIDDLE
ARRAYLIST	list of general OBJECT type : no index
QUEUE	FIFO (polite bus stop)
ENQUEUE add END OF QUEUE
DEQUEUE remove from FRONT OF QUEUE
PEEK inspect without remove first item
CONTAINS
STACK	LIFO (RUGBY RUCK) computing : RUNNING LIVE APPLICATION
PUSH on
POP off
HASHSET	LIKE A DICTIONARY WITH NO INDEX[] (NO DUPLICATES)
LINKEDLIST	USED FOR STORING LARGE OBJECTS WITH ABILITY TO ADD/REMOVE
ITEMS VERY QUICKLY IN MIDDLE. ONLY STORING POINTERS TO
OBJECTS. NO INDEX. SLOW TO PARSE BUT QUICK TO ADD/REMOVE
IENUMERABLE	numeric index exists [n] eg array or list
DICTIONARY AND	definition.....
BUT	definition.....
STRING STRING
INT (key) STRING (value)
KEY IS UNIQUE
Generics <T> T is any TYPE eg STRING, INT, MYCLASS
<int>

Abstract class	one or more abstract methods
Abstract method	abstract <T> DoThis();
Interfaces	fully abstract, fully public properties (not fields) and
methods. Public keywords missing but implied

    Class can INHERIT FROM ONE CLASS/ABSTRACT CLASS but IMPLEMENT (USE) MANY 
    				      INTERFACES
    
    IQueryable  		linq query output : lazy loading ie query not run until last
    					possible moment when data required
    IEnumerable  		Enumerate (count)   	
    IDisposable		    Databases, Files, Streams OUTSIDE .NET COMPILED 'RUNTIME'
    					Dispose() method can be attached to these objects from 
    					outside (DYNAMIC OBJECTS) so PROGRAMMER CAN MANUALLY DISPOSE OF THEM 
    					using (HERE){ // CODE ...}
    					// automatically disposed of HERE items 
    
    class MyCollection : IEnumerable{
    	GetEnumerator(){
    		// return enumerator so count through collection
    	}
    }

[Serializable] ATTRIBUTE ABOVE CLASS

Web Terms
Bootstrap CSS framework
Angular by Google, front end framework ((good to connect to back end data types))
React by Facebook, VIRTUAL DOM so REPAINT ONLY ELEMENTS WHICH HAVE CHANGED
Redux global 'state' of application and variables across whole app
Vue best of Angular and React Evan Vue
Indie project : not backed by big company but small organisation
Vuex Vue with STATE
MVC Model (data) View (page) Controller (URL handling)
Synchronous line by line
Asynchronous calls sub-thread, continues with main thread. Callback method run when
asyunc task 'returns' or completes
Typescript .ts Strict javascript. Uses 'types' ie all data is strictly typed like C#
Nativescript make mobile apps
Cordova make mobile apps
NodeJS Javascript on SERVER AS STANDALONE LANGUAGE
NPM install modules (libraries) in Javascript app
Yarn upgrade to NPM (preferred)
Bower handle library dependencies
Webpack pack / bundle libraries together for easy deployment (eg into one larger zip
file)
jQuery standardise commands across browsers
[CanIUse.com](http://caniuse.com/) % browers using feature
PHP world's most popular web server-side rendering engine : Facebook.
myfile.php HTML <?php $x=1;echo $x; ?>
Ruby command
command uses spaces precisely
Python uses spaces as part of syntax
Nuget C# libraries
#id ONE OF THEM PER WEBPAGE
.class MANY PER WEB PAGE
Cookie Text file sent to server with personal info on it
REGEX PATTERN MATCHING
Session Shopping basket with timeout
API expose data across web
SPA one URL but full app with different pages from same url
SAAS Software as a service $5 spotify
WebSockets ws:// wss:// free way of sending real time chat data across web
Web Workers Javascript backround task
Cloud Someone else running server; you log in and use software
Virtual desktop log in to any computer and receive same visual experience; personalised
apps. Citrix RUN ON CLIENT but data delivered as a STREAM FROM SERVER
(RENDERED AT SERVER)
Citrix Industry standard for virtual desktops
IP 1.2.3.4
Port :12345 channel inside IP
Protocol language which carries data TCP (web) SMTP (email) DNS (name) HTTP(web page)
Razor C# in browser @for (item in items){}
.cshtml razor
Blazor upgrade to razor : C# in browser at RUNTIME
IIS Web server
Azure Microsoft cloud
AWS Amazon cloud
Apache Open source web server
LAMP stack Linux Apache Mysql PHP WEBSITES!!!
WAMP stack Windows...
Open Source free
MIT licence open source licence
Cross platform Windows Mac Linux
MYSQL free SQL database
PHPMyAdmin paid software to manage free SQL database
CORS Cross Origin Response : Allows web requests between domains
-ng Angular prefix
v-for Vue element
document.getElementById/Tag/ClassName raw javascript to identify element on page
Flexbox 1D layout
Grid 2D layout
MaterialUI Google presentation
Vuetify Vue + MaterialUI
Mixin Modify CSS
Preprocessor Pre-compile CSS before you use it
SCSS Example of this
Responsive menu big=>small and page looks good
Collapsing menu a b c d ---
Carousel Moving image on main page to attract attention
Glyphicon Forward >> very small icon image
Modal popop Tiny window pops up to ask question eg 'are you sure?''
<pre> Render raw text / code with all spaces intact