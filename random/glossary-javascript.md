# javascript

## contents

- [javascript](#javascript)
  - [contents](#contents)
  - [ASCII](#ascii)
  - [best practice](#best-practice)
  - [BigInt](#bigint)
  - [Console Output](#console-output)
  - [const](#const)
  - [First Class Object](#first-class-object)
  - [Headers in HTML](#headers-in-html)
  - [History.length/back/forward/go](#historylengthbackforwardgo)
  - [Immutable](#immutable)
  - [Lexical Scoping](#lexical-scoping)
  - [Location](#location)
  - [OnResize Window Event](#onresize-window-event)
  - [Primitive Types](#primitive-types)
  - [Progressive Javascript Framework](#progressive-javascript-framework)
  - [Window - Create, Resize, Manage and Close](#window---create-resize-manage-and-close)
  - [Window.Scroll](#windowscroll)



## ASCII

Represent ASCII literal as "\u0041"

## best practice

```
see airbnb style guide on github https://github.com/airbnb/javascript 
```

## BigInt

Can hold arbitrarily large integer numbers
[https://developers.google.com/web/updates/2018/05/bigint](https://developers.google.com/web/updates/2018/05/bigint)

## Console Output

```
javascript:console.log('hi'); // FROM THE BROWSER WINDOW!!! OR URL LINK!!!
console.log() produces black text
[console.info](http://console.info/)() blue text with icon
console.debug() blu
console.warn() yellow with icon
console.error() red with icon
console.table(); tabular output for a JSON object
var x=1; console.log("output %d",x); %d=integer, %s=string, %o=object
console.log('this object is is %o ',this);
console.log('this event is %o ',event);
console.log("%s",new Error().stack);
console.dir(object-goes-here);
console.dirxml(HTML DOM NODE);
console.important()
console.todo()
console.trace() view stack
console.time('x'); start a stopwatch
console.endTime('x') end stopwatch
Debug : Break on HTML change
Monitor('function1');
Debug('functionname');
Toggle device mode chrome
```
## const

```
const variables are
UPPERCASE
block scope and even if global, not assigned to the Window object
const references to primitive values are always immutable
const bindings are immutable but the contents of objects and arrays are not immutable so the contents can change - it is just the binding to the object or array object which does not change
```



## First Class Object

```
First class object is an object that has methods and properties
Functions in Javascript can have properties and methods
So functions in Javascript are called First Class Objects or First Class Functions!
ie they are Function Objects
They can be passed as an argument to other objects as well, and can even be returned by a function.
They can be assigned as a value to a variable.
```




## Headers in HTML

```
We can view the headers in an HTML page after loading by
going to Chrome Developer Tools, Network tab, clicking
on the loaded file and then choosing 'Headers'
```

## History.length/back/forward/go

```
Accessing Browser History
History object is an ARRAY OF URLS LAST VISITED

history.length() number of URLS

history.back()

history.forward()

history.go(URL) or go(-4)

For security reasons you can't access full list of URLs stored inside history object

Most recent page document.referrer

[https://developer.mozilla.org/en-US/docs/Web/API/History_API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)

History has length (back button), back(), forward(), go(x)
```

## Immutable

```
Immutable objects cannot change
const references to primitive objects are immutable
const x = 10; //this is immutable
const x = {} is not immutable so x.a=10 is fine to add afterwards.
Object.freeze(myObject) can be used to freeze myObject which is made up of key-value pairs, or an array.
```

## Lexical Scoping

Lexical scoping means private scope ie only valid within the block of code in which it is declared.

## Location

location = stats about current URL

location.href is full current URL

location.protocol eg http

location.host/hostname = name of server

location.hash ==> go to part of document where id="#"

protocol://hostname:port/pathname?search=#hash

Location = current URL : href protocol host hostname port pathway search hash

## OnResize Window Event

window.innerWidth/Height

jquery_30_resize_browser.htm

window.onresize()

## Primitive Types

```
Primitive types in Javascript are
number
string
boolean
symbols
null
undefined
```

## Progressive Javascript Framework

can be introduced gradually into your codebase

## Window - Create, Resize, Manage and Close

```
<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>New Window</title>
<script type="text/javascript">
var eula;
function openWin() {
  eula = window.open("eula.html","eula","height=200,width=300,left=100,top=100");
  eula.focus();
}
function eulaChecked() {
  if (document.getElementById("confirmEula").checked && typeof eula == "undefined") {
    alert("Come on now.  Don't you think you should read the EULA first?");
    document.getElementById("confirmEula").checked = false;
    openWin();
  } else if (document.getElementById("confirmEula").checked && !eula.closed) {
    eula.close();
  } else if (!document.getElementById("confirmEula").checked) {
    openWin();  
  }
}
</script>
</head>
<body>
<form action="process.xyz">
<input type="checkbox" id="confirmEula" name="confirmEula" onclick="eulaChecked()"> Check to confirm that you agree with our <a href="eula.html" onclick="openWin(); return false;">user agreement</a>.
</form>
</body>
</html>
```

## Window.Scroll

```
window.scroll(0,100) SCROLL DOWN 100 PIXELS TO POINT (0,100)
window.scrollTo(0,100) AS ABOVE
window.scrollBy(0,100) SCROLL DOWN A FURTHER 100 PIXELS
[http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_scrollby](http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_scrollby)
```
