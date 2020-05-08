# Day 29 - Morning Tech Review

# Tech Review

Agile : Embraces Change
Waterfall : Linear, Fixed Model : Good for Smaller, Repeatable projects eg in manufacturing, construction
V-Model : extension to Waterfall : Mission-critical where perhaps life is at stake so extra testing is vital : Heavy Industry, Military

Events
Delegates : Placeholder for a method
Delegate instance += Method
Event += Method
Declare event must use delegate type also event MyDelegate MyEvent
MyEvent += MyMethod;

TDD Test Driven Development - Tests first, code second
Red Green Refactor : Red (Tests fail) Green (tests pass) Refactor (faster)
BDD Behaviour Driven Development - Tests written in USER STORY FORMAT
User Story ... As a user ... when I log in ... I see the main menu screen
Gherkin/Cucumber
Selenium to test this sort of software (website)
Synchronous : Every line waits for line before (code appear to 'hang')
Async : Main thread which also has SUBTHREADS or TASKS which do BACKGROUND WORK and when they complete they trigger a CALLBACK METHOD WHICH THEN DOES SOMETHING USEFUL

CRUD
Event : EXTERNAL INTERACTION (EXTERNAL TO PROGRAM)
USER EVENTS EG Button Click/DoubleClick/MouseEnter/MouseLeave
DATA EVENTS EG Data onstart, oncontinue, onend..
% complete bar
http : // GET DATA
Request => client => server
Response server => client
fetch(url)
.then(callBackFunction) // named function
.then(function(){// use data}) // anonymous fn
.catch(error)
SQL
DISTINCT
AGGREGATE : MIN MAX AVG SUM COUNT
ROUND/FLOOR/CEIL
JOIN
UNIQUE - constraint on table column
JUNCTION TABLE
table1 table2 juction table mix of records from tables 1,2
LAMBDA s => s.ID=="22"
(s,t) => { return "hi"; }
REF use this to pass primitive type into a method and treat it like
a global variable
int x=10;
DoThis(ref int x){... alter x as a GLOBAL VARIABLE}
PRIMITIVE : in memory the data type is stored with data in single block
of memory
int, short, long float, double, bool, char, bit

```
short 16bit
	int  32bit
	long 64bit

	float 32
	double 64
	decimal  128
```

REFERENCE TYPE : bigger object eg array, collection (list),
string is array of char char[], class
VALUE TYPE : primitive (stored on STACK), struct (mini-class)

TUPLE (int x, string y) MyMethod(){ return (10,"hi"); }
(int , string )