# Javascript Formal Course

# Javascript

[Javascript Glossary](notion://www.notion.so/philanderson888/Javascript-Formal-Course-8a26124f8df54b48b4c6ed241c23eb0f#javascript-glossary)

# Session 1: INTRODUCTION TO JAVASCRIPT WEB DEVELOPMENT

## JavaScript vs. Java

Javascript is NOT JAVA!!! JAVA and C# are both HIGH LEVEL LANGUAGES WHICH DEMAND A COMPILER TO COMPILE CODE INTO RUNTIME CODE. Javascript is more of an 'interpreted' language which is much more fluid and doesn't demand a heavyweight compiler but is executed more as a 'script' would be executed, line by line. The Javascript 'runtime' engine will run within the browser for example Chrome has a V8 engine which is also used to power NodeJS which executes Javascript both in the browser but also running on the operating system itself natively.

## JavaScript Evolution

Created 1995

Brendan Eich from Netscape/Mozilla

ECMAScript is the 'official name' for Javascript

2005 : explosion with 1) AJAX 2) jQuery

HTML5

NodeJS driving forward a completely new era of Javascript

## Security Overview

Javascript as such on the CLIENT is NOT SECURE! You CANNOT TRUST CLIENT-SIDE JAVASCRIPT AS IT COULD BE HACKED OR CHANGED AT ANY TIME. So form validation etc will have to be performed both on the client but again on the server just to make sure data is safe. For example in particular with 'code injection' attacks where form data is submitted containing \<script\>..\</script\> or other eg SQL commands.

## JavaScript Versions and Browser Support

Please see [https://en.wikipedia.org/wiki/ECMAScript#Versions](https://en.wikipedia.org/wiki/ECMAScript#Versions) for details of Javascript versions, which are officially called ECMAScript versions now.

Browser support can be a very technical and detailed matter with the best website on the planet to confirm if a feature is supported in a given browser being [http://CanIUse.com/](http://caniuse.com/) where you can search for an individual feature to check how it is supported – this goes for HTML, CSS and Javascript.

## JavaScript Engines

These are the browser engines which run Javascript.

- Check out this official guide to browser engines at [https://en.wikipedia.org/wiki/Web\\_browser\\_engine](https://en.wikipedia.org/wiki/Web%5C%5C_browser%5C%5C_engine) and a comparison of engines at [https://en.wikipedia.org/wiki/Comparison\\_of\\_web\\_browser\\_engines](https://en.wikipedia.org/wiki/Comparison%5C%5C_of%5C%5C_web%5C%5C_browser%5C%5C_engines)
- Chrome : Blink which is a fork of Webkit which Chrome used to use and is officially the most popular browser engine
- Opera : Blink like Chrome
- Gecko : Mozilla Firefox
- Internet Explorer : Trident
- Edge : EdgeHTML
- Safari : WebKit

# Session 2: LANGUAGE STRUCTURE

## Character Set

For web pages, HTML, CSS and Javascript the default character set is UTF-8 which provides a 2-byte code which can represent any character from any language on the planet, plus some symbols too, which means that in theory any language can be represented in computer form.

ASCII was the primitive one-byte representation of all basic English letters and characters, for example see this page here on ASCII [http://www.ascii-code.com/](http://www.ascii-code.com/) and also here on W3Schools at [http://www.w3schools.com/html/html\\_charset.asp](http://www.w3schools.com/html/html%5C%5C_charset.asp)

UTF-8 is also called UNICODE. There is also a version called UTF-16 which is a character set used in many operating systems.

HTML pages : to use a non-standard character set the code would simply be \<meta charset="ISO-8859-1"\>

## Case Sensitivity

HTML is CASE INsEnSiTiVe although \<lower\_case\> tags should always be used, for everything!

CSS is CASE INsEnSiTiVe

Javascript is CASE SENSITIVE so you must be EXTRA CAREFUL for example document.getElementById("x")

## Layout and Whitespace

Standard programming practice can and should be used to lay out good code for example:

- Declare variables at the top of the code
- Use comments
- White space is not normally an issue but be aware it can cause issues for example if parsing DOM elements then spaces (from your code) can be counted as DOM elements even though they might not be visible or have any effect on the page. They may influence (1) CSS layout for example firstchildmight be applying to a 'space' element (2) arrays of multiple elements eg forms.myForm.length may be affected by non-visible DOM elements
    - See [http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref\\_node\\_childnodes](http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref%5C%5C_node%5C%5C_childnodes) for details
    - See HTML Whitespace lab also in index.htm

![](data:image/*;base64,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)

- The above picture has 5 DOM elements (two paragraphs and three spaces)

## JavaScript Literals

A 'literal' is a fixed string that is no longer treated as a variable and cannot be changed without altering the string directly eg by adding or removing characters. Advanced discussion on literals can be found at [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar\\_and\\_types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar%5C%5C_and%5C%5C_types) .

## Identifiers

Javascript identifiers are used to name variables and functions

First character of every Javascript variable/function must be

Letter of the alphabet (NOT A NUMBER)

$

\_

Note : Numbers are not allowed to start variables, neither are other special characters

Other letters may be the above (letter, $ and \_) plus numbers so \_123 is valid.

camelCase tends to be used in Javascript.

Please see discussion on Javascript syntax at [http://www.w3schools.com/js/js\\_syntax.asp](http://www.w3schools.com/js/js%5C%5C_syntax.asp)

## Reserved Words

Javascript's reserved word list is as follows

[Untitled](Javascript%20Formal%20Course/Untitled%20Database.csv)

[Untitled](Javascript%20Formal%20Course/Untitled%20Database%201.csv)

## Operator Precedence

Basic BODMAS precedence will take place eg

(3+2)42+213=????

Brackets first so 3+2=5, multiply by 4 squared = 16 to give 80 then add 21 divided by 7 = 3 to give 83

## Good practice and tips

For example see Google guide to Javascript here

[https://google.github.io/styleguide/javascriptguide.xml](https://google.github.io/styleguide/javascriptguide.xml)

# Session 3: DATATYPES AND VALUES

## Numbers

var x=1;

## Strings

var x = "some string";

## String Methods

Strings can be joined together using '+' symbol or string1.concat(string2)

Strings can also be treated as arrays of characters and dissected as such.

myString.length will return the length of the string

## Booleans

var x = true; var y = false;

## JavaScript Functions

Var y = function(){};

Function y(){}

Note that () causes the function to be called straight away. This can be used to good effect in some callback functions where the function can be named without the brackets, thus is not executed until runtime.

See W3Schools [http://www.w3schools.com/js/js\\_functions.asp](http://www.w3schools.com/js/js%5C%5C_functions.asp) and Mozilla for discussion on functions [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) .

The arrow notation can also be used to define a function

() =\> {}

Param =\> expression when only one parameter is used

## Return

Each function can only return one object so if multiple objects are required to be returned from a function then a JSON object will have to be created and returned

Function x(){

Var y = { a:1,b:2}

Return y

}

## The this Keyword

Default refers to the 'window' object so console.log(this===window) will return true by default

This is useful inside an object

Var myObject= {

A:1

B:2

C:function(){this.A + this.B}

}

This can be useful when used with constructors

Function myClass(a,b){

    This.a=a;this.b=b;

}

Var myNewObject = new myClass(1,2)  creates new object with myNewObject.a=1 .b=2

'this' object can be set manually using the call(), apply() and bind() methods

myFunction.call(object,param1,param2) will run myFunction but whatever object is passed in to the function can also be used to reference 'this' within the function.

    myFunction.apply(object,[param1,param2])

var newFunction = myFunction.bind(object) adds a permanent binding

More detail available at [https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this) and [http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)

## Objects Introduction

Objects are declared using the JSON format

var myObject = { a:1, b:"mystring" }

Objects can hold any other data type within it, even other objects and arrays.

See [http://www.w3schools.com/js/js\\_objects.asp](http://www.w3schools.com/js/js%5C%5C_objects.asp) for a basic guide to Javascript objects.

Once created object data is accessed using key-value pairs eg

myObject.a=1

myObject.b="mystring"

## Arrays Introduction

Arrays are declared using

Var myArray = [1,2,3,"hi"];

Alternatively (not recommended) you can also use

Var myArray = new Array(1,2,3,"hi");

Once created the array elements are accessed using a numeric index where zero [0] is the first item.

myArray[0] = 1

myArray[3] = "hi"

Javascript arrays can hold different data types

Please see [http://www.w3schools.com/js/js\\_arrays.asp](http://www.w3schools.com/js/js%5C%5C_arrays.asp) for basic discussion on arrays.

## Type Conversion

Javascript contains the following data types

- stringnumberbooleanfunctionobject
objectarraydatenull can assign eg to a stringundefined var x; once declared x is undefined until value is assigned

typeof() returns the type of your object

String(x) converts number x to string

x.toString converts number x to string

x.toExponential to power of 10

x.toFixed(2) fixed number of decimal places

x.toPrecision(3) string with 3 significant figures

Number("1.23") converts string to number

parseFloat("1.23") returns 1.23 decimal number

parseInt("1.23") returns 1 as integer

More detailed discussion at [http://www.w3schools.com/js/js\\_type\\_conversion.asp](http://www.w3schools.com/js/js%5C%5C_type%5C%5C_conversion.asp)

## Primitive Datatype Wrappers

A primitive is a DATA TYPE THAT IS NOT AN OBJECT AND ALSO HAS NO METHODS. They also are IMMUTABLE so cannot change.

Objects are collections of properties. Properties can reference objects or primitives. Primitives are VALUES ONLY.

Javascript primitive data types

- string
- number
- Boolean true or false
- Null Null
- Undefined Undefined

See [https://developer.mozilla.org/en-US/docs/Glossary/Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) for discussion on primitives

And [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data\\_structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data%5C%5C_structures) on discussion on data types

A wrapper can be used to create a new object eg var Twelve = new Number(12) will create a valid number.

Avoid though as unpredictable results eg var myBoolean = new Boolean(false) will return true

# Session 4: VARIABLES, OPERATORS AND EXPRESSIONS

## JavaScript Variables

var x = 1;

If used within a function the SCOPE is LOCAL.

If used outside a function the SCOPE is GLOBAL

let x = 1; can be used inside a function block and the value is enclosed within that block only (cannot be accessed from outside)

Variables are 'hoisted' so put at the front of the code, no matter where you declare them.

For efficiency declare multiline eg var a=1,b=2;

Declare var x;

Initialize x=1;

const x = 1; value cannot be changed

In general let is now preferred over var because the intention of scope is clear. But const can also be used – see interesting discussion at [https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.gx4l9m2jr](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.gx4l9m2jr) where const is recommended for all variables that are not intended to change.

Var summary

Var declares all variables;

Let is a newer alternative and can be used to generate cleaner code

Const can be used for variables whose value is never intended to change

Var outside function =\> global scope

Var inside function =\> local scope

## JavaScript Expressions

- Expression PRODUCES A VALUE LIKE myvar or 1+2
- Statement performs an action like looping through a variable many times

See [http://www.2ality.com/2012/09/expressions-vs-statements.html](http://www.2ality.com/2012/09/expressions-vs-statements.html) for a more detailed discussion

## Arithmetic Operators

- / -

++ / -- add / subtract one

% remainder after division 10%3=1

\*\* to the power of eg 2\*\*3 = 2x2x2 = 8

## Relational Operators

Comparing one item to another and outputting a Boolean true or false depending if relationship is valid or not.

Var myObject={a:1,b:2}

"a" in myObject returns true

## String Operators

- will concatenate strings

## Logical Operators

&& AND false && false  false

|| OR true || false  true

! NOT !(true)  false

## Bitwise Operators

Act on binary numbers with each individual binary bit being acted upon in a certain way

AND & 1&1=1 but 1&0=0

OR | 1&0=1 but 0&0=0

See more detail at [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions\\_and\\_Operators#Bitwise\\_operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions%5C%5C_and%5C%5C_Operators#Bitwise%5C%5C_operators)

## Assignment Operators

These assign values

= a=6; assigns value 6 to a

+= a=a+6

Details on all assignment operators at [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions\\_and\\_Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions%5C%5C_and%5C%5C_Operators)

## The global Object

DOM object operates with the global object being called the 'Window' object. All other objects are children of this.

With variables they can be declared outside of any function and this makes them available to the global namespace ie the root Window object.

var a=7; initialize a global object

window.a =\> will return 7

Note that by wrongly declaring an object without var will also make it a global object. This can be prevented by adding the syntax 'using strict' at the start of your Javascript file to force a stricter version of Javascript which prevents such errors from happening unnoticed.

# Session 5: JAVASCRIPT CONTROL STRUCTURES

## If/Else

if {}

    else if {}
    
        else {}

## For/For In

for (var i=0;i\<10;i++){ // i }

    var myObject={a:1,b:2}, item;
    
        for(item in myObject){ console.log(myObject[item])}

## While

var x=0;

    while(x\\&lt;10){//do this;x++;}

## Do..While

    var x=0;
    
        do{//do this;x++}
    
        while(x\\&lt;10);

## Switch

var x = 3;

switch(x){

case 1://do this;break;

case 2: //do this;break;

case 3: // do this ; break;

default: // do this;

}

## Break and Continue

for (var i=0;i\<10;i++){

If(i=7){break;} out of loop

If(i=3){continue;} break out of current loop and start next one straight away

}

See [http://www.w3schools.com/js/js\\_break.asp](http://www.w3schools.com/js/js%5C%5C_break.asp) for clarification

## JavaScript Exception Handling

try {

Myundefinedfunction(); // will generate a system exception

Throw('an error') // manually throw exception

}

catch(exception e){

Console.log(e); // also e.data, also e.type

}

finally{}

See showcase/js\_35\_throw\_exception.htm as an example of manually throwing an exception and catching it

# Session 6: OBJECTS AND ARRAYS

## Object

## Common Properties and Methods

## Dates, Times and Timers

var d = new Date(); // standard way of creating a new date object

Displaying dates

d.getDay() Returns 0-6 where 0 is a Sunday and 6 is a Saturday

d.getDate() Returns 1-31 calendar date

d.getMonth Returns 0-11

d.getFullYear Returns eg 2016

d.getHours/Minutes/Seconds/Milliseconds()

d.getTimeZoneOffset Returns time zone difference away from GMT

d.getTime Returns milliseconds since 1 Jan 1970

d.set…. Sets time

See [http://www.w3schools.com/jsref/jsref\\_obj\\_date.asp](http://www.w3schools.com/jsref/jsref%5C%5C_obj%5C%5C_date.asp) also [http://www.w3schools.com/js/js\\_dates.asp](http://www.w3schools.com/js/js%5C%5C_dates.asp) for fuller discussion

See Mozilla reference at [https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global\\_Objects/Date](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global%5C%5C_Objects/Date)

## Classes and Prototyping

Javascript can do classes but they are not fully supported in all browsers. Javascript itself it not an OOP so does not support classes natively. In order to create classes Javascript uses functions to do the same thing.

Declare a class

var myClass = function(){}

Instantiate a class

var myNewObject = new myClass()

Declare a class with properties

var myClass=function(x,y){

    this.x=x;
    
                        this.y=y;
    
                }

Instantiate : var myNewObject = new myClass(1,2);

Class Methods

Can be added in the class declaration body but better for memory usage not to do this but to delcare afterwards as a new prototype object. Prototypes can be used to extend any Javascript object and not just classes.

myClass.prototype.myMethod = function(){ console.log (this.x) }

Call the method using myNewObject.myMethod() which in this case will log this.x which is 1 to the console.

Please see discussion at [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction\\_to\\_Object-Oriented\\_JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction%5C%5C_to%5C%5C_Object-Oriented%5C%5C_JavaScript) for further details including inheritance.

Static Methods can be used which like in regular OOP are only valid when called as part of the class and not as part of an instantiated object. See [https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) for details.

Extends keyword also exists to either extend a class or provide Parent-Child inheritance features similar to regular OOP inheritance. More details again at [https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)

## Arrays

## Array Methods

Size of array

myArray.length;

Add and remove items from an array

myArray.push(x) add to end

myArray.pop() remove item from end

myArray.unshift(x) add to start

myArray.shift() remove (shift) item from the start of the array

Output array items as a string

myArray.join()

myArray.sort()

myArray.reverse()

myArray.indexOf('hi') Search the array for this element and return position of hit

myArray.forEach() Call a function for each array element

myArray.forEach(function(item,index,array){ } //index=0,1,2 etc, item will be value at each index.

# Session 7: JAVASCRIPT FUNCTIONS

## Defining Functions

var y = function(){}

() =\> {}

function y(){}

## Invoking Functions

y don't call the function right now

y() call and invoke the function right now

## Functions as Data

Functions can be treated just the same as any other object, and if they return data objects that data is the same also

## Anonymous Functions

Named functions have traceability for example when doing performance measurements we can observe the names of functions which are consuming processing resources. However it is not always best to have named functions; in some instances it may be the best thing to use anonymous functions for example when performaing a loop over and over again. Anonymous functions are just created and called in the same way as other functions

\*\*

## Passing Arguments to Functions

var y = function(a,b){}

    var z = y(1,2)

# Session 8: INTRODUCTION TO REGULAR EXPRESSIONS

## The RegEx Object

Regular expressions permit us to do input validation with specific validation types catering for every conceivable different type of text and number string including special characters.

Regular Expressions come natively in HTML5 now with the input tag having also a 'pattern' tag with the syntax

\<input type="text" pattern="[A-Za-z]{3}"\>

Please see [http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5\\_input\\_pattern](http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5%5C%5C_input%5C%5C_pattern) for a working demo.

## Methods and Usage

As well as the native HTML usage of regular expressions Javascript also permits internal checking of field values against a given Regular Expression. For these purposes we have a new data type called Regular Expression whose value takes the form / / where in between the slashes are whatever validation is required.

The syntax would be var myRegExp =/pattern/ where pattern consists of a series of letters and characters to represent the pattern to check against.

The simplest method would be to check for one string within the input and this would be coded

var myRegExp = /mystring/

This would find one match but to find multiple matches the /g can be added ie

var myRegExp = /mystring/g

See details at [http://www.w3schools.com/jsref/jsref\\_obj\\_regexp.asp](http://www.w3schools.com/jsref/jsref%5C%5C_obj%5C%5C_regexp.asp)

## Patterns Matching Examples

Please see sites [https://regexone.com/](https://regexone.com/) and [http://regexr.com/](http://regexr.com/) for good places to do this dynamically online before building your own offline.

Simple validations would include

One number [0-9]

    \\d

One letter [a-zA-Z]

Two letters [0-9]{2}

Two letters and two numbers [a-zA-Z]{2}[0-9]{2}

nn-AA where nn is 2 numbers and AA is 2 letters [a-zA-Z]{2}-[0-9]{2}

Alphabetic or numeric input [a-zA-Z0-9]

    \\w

Alphabetic, numeric including symbols but not spaces \S (capital S)

Space \s

Match only at the start of the expression ^ eg ^[0-9]{4} matches 4 numbers at start only

Match only at the end of the expression $ eg [0-9]{4}$ matches last 4 numbers at end only

Match multiple characters (one or more) + eg \w+ will match multiple letters

Match zero or more \* b\w\* will match b, be and brown

Match 3 or more {3,}

Match 0 or 1 so item becomes optional ? colou?r will match color and colour as u optional

Match OR |

## Regular Expressions Tools

As mentioned above please see the sites [https://regexone.com/](https://regexone.com/) and [http://regexr.com/](http://regexr.com/) to get started with some great examples of Regular Expressions.

# Session 9: BROWSER-BASED JAVASCRIPT

## The Window Object

The Window Object is the root object in the DOM. All elements are sub-elements from this root object.

The DOM hierarchy goes

Window =\> Document =\> HTML =\> BODY =\> DIV =\> CONTENT

Documents can be referenced by their position in the DOM for example form elements can be referenced

Document.myForm.childNodes[1] etc if necessary although normally this would not be required. However if pages are going to be generated dynamically it might be very important to be able to count and iterate through the elements of a DOM object using this method.

Details of all methods supported by the window object are to be found here [http://www.w3schools.com/jsref/obj\\_window.asp](http://www.w3schools.com/jsref/obj%5C%5C_window.asp)

## JavaScript Event Handling

Events are the driving force behind the success of today's Javascript.

Events can be defined in two ways.

Firstly the straightforward way you are probably used to:

\<input type=submit onclick="fn\_run\_this\_validation()" /\>

Other simple events like this would be onclick, ondblclick, onmouseover, onmouseout, onkeydown, onkeyup, onkeypress, onload, onchange. A full list of 'on' Javascript events can be found here [http://www.w3schools.com/jsref/dom\\_obj\\_event.asp](http://www.w3schools.com/jsref/dom%5C%5C_obj%5C%5C_event.asp) and some full examples would be found here [http://www.w3schools.com/js/js\\_events\\_examples.asp](http://www.w3schools.com/js/js%5C%5C_events%5C%5C_examples.asp)

However it is possible to add 'event listeners' in code outside of the HTML. This is, in general, considered better practice so it would be best practice to write in the HTML

\<input id="submit\_form" type="submit" value="submit"/\>

Then in Javascript or jQuery code add an event listener which would have the syntax

document.getElementById('x').addEventListener("click",function(){ // do this });

Notice that 'onclick' has now become 'click' where the difference will be 'onclick' is the event handler and 'click' is the event to listen for.

## JavaScript Form Handling

In order to handle a form correctly the \<submit\> button has to have the following syntax

\<submit type="submit" onsubmit="return fnsubmit()"\>

The return command gives the form handling code (Javascript) the ability to return either true or false and let the form submit (return true) or not (return false). This allows form validation to take place and to stop the submission of the form when the form is in error.

The function code would be a standard function with the syntax

function fnsubmit(){

var returnBoolean = false;

// code to validate form; if valid then set returnBoolean = true;

return returnBoolean;

}

This will permit the form code to return either true or false.

## The Document Object Model

Elements can be selected, inserted, changed and appended amongst other things, into the DOM.

For example to create an element one would use the syntax

document.createElement . . .

To append an existing item into the DOM one could use appendChild where one would have to select an item first, then append the new item to the selected item.

When selecting items in the DOM items can be selected individually with an ID or multiple items can be selected eg by className (document.getElementsByClassName) or for example by tagName (document.getElementsByTagName);

## Cookies

## Alternative Storage Options

# Session 10: JAVASCRIPT TOOLS

## Profiling JavaScript

Javascript can be 'profiled' to view the slow parts of the page.

For example Chrome, by hitting F12 and then choosing the 'Timeline' tab brings up this tool, already built-in.

Links for reference are

[https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool#make-a-recording](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool#make-a-recording)

[https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool#profile-js](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/timeline-tool#profile-js)

To record a timeline hit F12 =\> Timeline =\> CTL E to start and stop the recording. To avoid 'noise' from plugins (Chrome extensions) either use Incognito mode or create a new user profile (either new user or completely erase all existing Chrome settings). Keep the recording as short as possible.

Once recorded, the timeline may be examined by zooming in and out to the desired degree of complexity in order to view which code has been executing and taking up time.

You can select one item in order to get more detail below.

Firebug in Firefox has similar tools [https://developer.mozilla.org/en-US/docs/Tools/Performance](https://developer.mozilla.org/en-US/docs/Tools/Performance)

## Firebug

Firebug is the equivalent of F12 for Chrome and has to be enabled for Firefox before it can be used.

[http://getfirebug.com/](http://getfirebug.com/)

Details on how to use firebug here [https://getfirebug.com/whatisfirebug](https://getfirebug.com/whatisfirebug)

Details on profiling here [https://getfirebug.com/javascript](https://getfirebug.com/javascript) - click on Console then Profile to activate profiling, then click on Profile again to stop profiling and display a report on which functions have been called how many times etc.

## Fiddler

Fiddler is a paid performance tool but has a free offering which may be downloaded if you provide your email address.

Fiddler provides an active display of all web calls being made to and from your computer, with a detailed view of activity and protocols etc.

Install from [http://www.telerik.com/](http://www.telerik.com/) and choose 'Fiddler' in the Products menu.

## YSlow

YSlow as the name suggests is a tool for finding out why your page is slow!

Checking out the github repo at [https://github.com/marcelduran/yslow/issues](https://github.com/marcelduran/yslow/issues) it is not clear if this tool is still under active development or not (probably not).

However the tool runs and gives some amazing suggestions based on its analysis of your code which has run, for example combining CSS stylesheets, using CDN networks to deliver content, tips to make content cacheable etc

## Other JavaScript Tools

[http://jqueryui.com](http://jqueryui.com/) provides some great ideas for providing jQuery features with minimal coding effort

Google Web Toolkit compiles Javascript from Java but has the advantage of optimising the Javascript for all browsers. Info and download the SDK at [http://www.gwtproject.org/overview.html?csw=1](http://www.gwtproject.org/overview.html?csw=1)

General overview of critical Javascript tools that a professional web developer today would be getting involved with are listed here [https://www.sitepoint.com/essential-tools-libraries-modern-javascript-developers/](https://www.sitepoint.com/essential-tools-libraries-modern-javascript-developers/)

# Session 11: JAVASCRIPT EXTRAS

## NodeJS

NodeJS can be used to execute Javascript both on the server and on the client, thus removing the need for a further language to get involved. This 'native' processing of Javascript requests between a client and a server can allow for a great speed increase of background delivery, as node processes can take up a very small memory footprint. Node is extremely popular today and has taken off in a big way. Huge libraries available completely open source under MIT licence are available for free download at [https://www.npmjs.com/](https://www.npmjs.com/) . Source code for NodeJS is found at [https://nodejs.org/en/](https://nodejs.org/en/) and may be downloaded and installed here. Once installed, any node application can be run just by typing 'Node \<myapp.js\>.

## AJAX Asynchronous Javascript and XML

Is the traditional way to update a web page without fully refreshing the page.

## Working with Structured Data

The web has defaulted to using first XML as the default structural way of passing data across the web, and also using PHP to execute MYSQL calls (or C# to execute SQL calls) but subsequently has levelled out using JSON as the default playing ground for sending data around the web. If in doubt JSON should be used as it also is the default data structure in the newer No-SQL databases such as MongoDB. These databases can cope with higher throughput of data than traditional SQL databases.

# JavaScript Libraries/Frameworks

## Intro

Javascript frameworks undergird SPA Single Page Applications which are kept in memory unlike traditional HTML applications which often are 'stateless'.

## Angular.JS

Created 2009 by Google

Extends HTML attributes using Angular 'directives'

Two-way data binding is at the core of Angular. When data is changed / entered on a form this goes through to the model, and vice-versa.

## React.JS

This is a competitor to Angular.js

React is behind Instagram and Facebook and is developed mostly by Facebook.

Released 2013.

Embodies a 'Virtual DOM'

Focuses on the View part of MVC

Flux and Redux are part of the React suite of tools

## Javascript Glossary

[Google Scripting](notion://www.notion.so/philanderson888/Javascript-Formal-Course-8a26124f8df54b48b4c6ed241c23eb0f#google-scripting)

# Google Scripting

It is possible to email from Google Sheets. See this code as an example

    function myFunction() {
      var range, data, sheet, spreadsheetDocument, startRow, startColumn, numRows, numColumns, message;
      
      spreadsheetDocument = SpreadsheetApp.openById("1vy0A_Gu8u_Ba5tQbCcEbjuly0BTb6QVW7CKOIl47LJQ");
      sheet = spreadsheetDocument.getSheetByName('Daily Tasks'); 
      startRow = 1;
      startColumn = 1;
      numRows = 100;
      numColumns = 53;
      range = sheet.getRange(startRow,startColumn,numRows,numColumns); 
      data = range.getValues();
      message = '';
      message += '===============\\nDaily Tasks To Complete\\n========\\n\\n\\n\\n';
      for (i in data){
        var row = data[i];
        if (row[0].length>0) {
            message += row[0];
            message += '\\n\\r';
            counter++;
        }
      } 
      message += '\\n\\n\\n\\n===========\\nDaily Stats\\n===========\\n\\n\\n\\n';
      sheet = spreadsheetDocument.getSheetByName('Summary');
      for (var i = 2; i <= 20; i++){
        range = sheet.getRange(2,i);
        data = range.getValue();
        data =  Math.round(data * 100);
        message += data + '% : ';
        range = sheet.getRange(1,i);
        data = range.getValue();
        message += data + '\\n\\n';
      }
      
    
    
    
      
      
      message += '\\n\\n\\n\\n=====\\nWeekly Stats\\n=======\\n\\n\\n\\n';
      var range = sheet.getRange("I1");
      var data = range.getValue();
      message += data + ': ';
      var range = sheet.getRange("I2");
      var data = range.getValue();
      message += data + ': ';
      var lastRow = sheet.getMaxRows();
      var cellValue = "I" + lastRow;
      var range = sheet.getRange(cellValue);
      var data =  range.getValue();
      data =  Math.round(data * 100);
      message += data + '% Weekly Tasks Done';
      message += '\\n\\n';
    
     
      
      
      message += '\\n\\n\\n\\n==========\\nMonthly Stats\\n===========\\n\\n\\n\\n';  
      // Monthly Stats 
      var sheet = spreadsheetDocument.getSheetByName('Monthly Tasks');
      var lastRow = sheet.getMaxRows();
      // October
      var cellValue = "C" + lastRow;
      var range = sheet.getRange(cellValue);
      var data =  range.getValue();
      data =  Math.round(data * 100);
      message += data + '% October Monthly Tasks Done';
      message += '\\n\\n\\n\\n\\n';  
    
      
      
      
      message += '\\n\\n\\n\\n======\\nCount Number Of Tasks\\n========\\n\\n\\n\\n';   
      var sheet = spreadsheetDocument.getSheetByName('Tasks'); 
      var startRow = 1;
      var startColumn = 1;
      var numRows = 2000;
      var range3 = sheet.getRange(startRow, startColumn, numRows);
      var data = range3.getValues();
      var counter = 0;
      for (i in data){
        var row = data[i];
        if (row[0].length>0) {
            if(row[0] === 'Done November'){
              break;
            }
            message += row[0];
            message += '\\n\\r';
            counter++;
        }
      }
    
      
      // Set value
      spreadsheetDocument.getSheetByName('Summary').getRange('B17').setValue(counter);
     
      // Send email
      var emailAddress = 'philanderson888@hotmail.com'; 
      var subject = 'Regular Daily Tasks';    
      MailApp.sendEmail(emailAddress,subject,message);