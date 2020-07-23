# Javascript

## Contents

- [Javascript](#javascript)
  - [Contents](#contents)
  - [Page Loading](#page-loading)
  - [Skeleton Screen : Load Structure First](#skeleton-screen--load-structure-first)
  - [Image Loading : Fuzzy first then merge into full image](#image-loading--fuzzy-first-then-merge-into-full-image)
  - [Delete](#delete)
  - [classList.add('className')](#classlistaddclassname)
  - [forEach(function(item){ // use item})](#foreachfunctionitem--use-item)
  - [Object.seal() - can't change properties](#objectseal---cant-change-properties)
  - [Object.freeze() - cannot change value of properties](#objectfreeze---cannot-change-value-of-properties)
  - [Object.preventExtensions() - cannot add properties](#objectpreventextensions---cannot-add-properties)
  - [querySelectorAll](#queryselectorall)
  - [Scoping : Global, Function or Scope.   Also Lexical or Dynamic](#scoping--global-function-or-scope-also-lexical-or-dynamic)
  - [Javascript Switch](#javascript-switch)
  - [Or just 'return'](#or-just-return)
  - [Javascript If..Else](#javascript-ifelse)
  - [Javascript equality](#javascript-equality)
  - [Strict equality](#strict-equality)
  - [Two objects are never equal to each other](#two-objects-are-never-equal-to-each-other)
  - [NaN](#nan)
  - [Null and undefined](#null-and-undefined)
  - [Javascript Primitive Types](#javascript-primitive-types)
  - [String](#string)
  - [Boolean to string](#boolean-to-string)
- [Date to string](#date-to-string)
- [**Special cases with string**](#special-cases-with-string)
- [**Converting to numbers**](#converting-to-numbers)
- [**Casting from string to number**](#casting-from-string-to-number)
- [**Casting from boolean to number**](#casting-from-boolean-to-number)
- [**Casting from date to number**](#casting-from-date-to-number)
- [**Special cases with number**](#special-cases-with-number)
- [**Converting to booleans**](#converting-to-booleans)
  - [document.querySelector](#documentqueryselector)
  - [Set A Listener](#set-a-listener)
  - [classList.remove](#classlistremove)
    - [getPropertyValue](#getpropertyvalue)
    - [getAttribute](#getattribute)
    - [this](#this)
    - [Dates](#dates)
- [Creating And Appending Elements](#creating-and-appending-elements)
- [Template Literal `some text ${variable} here`](#template-literal-some-text-variable-here)
- [Async](#async)
- [Includes](#includes)
- [Prototype](#prototype)

## Page Loading

## Skeleton Screen : Load Structure First

Creates a skeleton mock-up of the screen while the rest of the screen loads

## Image Loading : Fuzzy first then merge into full image

## Delete

```csharp
const myObject = {
	property01 : 'test',
  property02 : 'testing'
}

delete myObject.property02

or

delete myObject['property02']
```

## classList.add('className')

Can be used to add a class to a list of existing classes.

```csharp

// make this the active class

document.querySelector('classname').classList.add('active');
```

## forEach(function(item){ // use item})

Iterates over an array

```csharp
// Set a listener on each element which matches the CSS class

document.querySelectorAll('.chess-block').forEach(function(element) {
        element.onclick = horse;
    })
```

## Object.seal() - can't change properties

This prevents properties being added or removed to an object

```csharp

const myObject = {}

myObject.property01 = 'test'

Object.seal(myObject)

myObject.property01 = 'testing2'

myObject.cantAddThis = 'some value'  // cannot add because it's sealed
delete myObject.property01  // cannot do this either
```

## Object.freeze() - cannot change value of properties

## Object.preventExtensions() - cannot add properties

## querySelectorAll

Generates a collection of elements which each match the required criteria

```csharp

document.querySelectorAll('.chess-block').forEach(function(element) {
        element.onclick = horse;
    })

```

## Scoping : Global, Function or Scope.   Also Lexical or Dynamic

Lexical scoping : value determined by position when written

Dynamic scoping : value determined by position when called at runtime

## Javascript Switch

```csharp
const a = 2
switch(a) {
  case 1:
    //handle case a is 1
    break
  case 2:
    //handle case a is 2
    break
  case 3:
    //handle case a is 3
    break
  default:
    //handle all other cases
    break
}
```

## Or just 'return'

```csharp
const doSomething = (a) => {
  switch(a) {
    case 1:
      //handle case a is 1
      return 'handled 1'
    case 2:
      //handle case a is 2
      return 'handled 2'
    case 3:
      //handle case a is 3
      return 'handled 3'
  }
}
```

## Javascript If..Else

```csharp
if (a === true) {
  //do something
} else if (b === true) {
  //do something else
} else {
  //fallback
}
```

## Javascript equality

```csharp
const a = true

a == true //true
a === true //true

1 == 1 //true
1 == '1' //true

```

## Strict equality

```csharp
1 === 1 //true
1 === '1' //false
```

## Two objects are never equal to each other

## NaN

```csharp
NaN == NaN   // false always!
```

## Null and undefined

```csharp
null == undefined  // true

null === undefined // false
```

## Javascript Primitive Types

These are javascript primitive types

Number

String

Boolean

Symbol

Object type is

Object

## String

```csharp
String(10) //"10"

(10).toString() //"10"
```

## Boolean to string

```csharp
String(true) //"true"
true.toString() //"true"
String(false) //"false"
false.toString() //"false"
```

# Date to string

```csharp

String(new Date('2019-01-22'))
//"Tue Jan 22 2019 01:00:00 GMT+0100 (Central European Standard Time)"

(new Date('2019-01-22')).toString()
//"Tue Jan 22 2019 01:00:00 GMT+0100 (Central European Standard Time)"
```

# **Special cases with string**

```
String(null) //"null"
String(undefined) //"undefined"
String(NaN) //"NaN"
```

# **Converting to numbers**

# **Casting from string to number**

We can do this by using the `Number()` global function, which is sort of a constructor. We can pass it a string, and JavaScript will figure out how to convert it to a number:

```
Number("1") //1
Number("0") //0
```

Strings are trimmed before being converted to numbers:

```
Number(" 1 ") //1
```

passing an empty string defaults to 0:

```
Number("") //0
```

and to have work with decimals you use a dot:

```
Number("12.2")
```

If a string contains invalid characters, it will generate a `NaN`.

This are the basics of converting to numbers, but I give a lot more details in [how to convert a string to a number in JavaScript](https://flaviocopes.com/how-to-convert-string-to-number-javascript/). There are other ways to generate numbers from string including `parseInt()`, `parseFloat()`, `Math.floor()`, the unary `+` operator.

# **Casting from boolean to number**

Just as we did for string, passing a boolean to `Number()` will return either 0 or 1:

```
Number(true) //1
Number(false) //0
```

# **Casting from date to number**

If you pass a Date object to `Number()`, it will return the date timestamp, which is the best date to number conversion you can get.

# **Special cases with number**

```
Number(null) //0
Number(undefined) //NaN
Number(NaN) //NaN
```

# **Converting to booleans**

Any value can be converted to boolean passing it to `Boolean()`.

All values will resolve to `true` except:

```
Boolean(false) //false
Boolean(0) //false
Boolean(NaN) //false
Boolean("") //false
Boolean(null) //false
Boolean(undefined) //false
```

## document.querySelector

Use in preference to document.getElementById   ???

```csharp
document.querySelector('#field').innerHTML = '';
```

## Set A Listener

Set multiple listeners

```csharp
function doThis(){}

// add listener
document.querySelectorAll('.chess-block').forEach(function(element) {
        element.onclick = doThis;
    })

```

## classList.remove

Can be used to remove CSS classes from an item

```csharp
// remove CSS classes on all selected elements

document.querySelectorAll('.chess-block').forEach(function(element) {
        element.classList.remove('active');
        element.classList.remove('green');
    })
```

### getPropertyValue

Can be used to query a CSS value

```csharp
// CSS

:root Block of constants */

:root {
    --x-width: 8;
    --y-height: 8;
}

// JS

let horizont = styles.getPropertyValue('--x-width');
let vertical = styles.getPropertyValue('--y-height');

// This can be used to create a grid of elements using the values above

// CSS

#field {
    display: grid;
    grid-template-columns: repeat(var(--x-width), 1fr);
    grid-template-rows: repeat(var(--y-height), 1fr);
    width: 100%;
    height: 100%;
}
```

### getAttribute

```csharp
// Can be used to read the HTML attribute of an element, in particular a data item

// https://www.w3schools.com/tags/att_data-.asp 

<!DOCTYPE html>
<html>
<head>
<script>
function showDetails(animal) {
  var animalType = animal.getAttribute("data-animal-type");
  alert("The " + animal.innerHTML + " is a " + animalType + ".");
}
</script>
</head>
<body>

<h1>Species</h1>
<p>Click on a species to see what type it is:</p>

<ul>
  <li onclick="showDetails(this)" id="owl" data-animal-type="bird">Owl</li>
  <li onclick="showDetails(this)" id="salmon" data-animal-type="fish">Salmon</li>  
  <li onclick="showDetails(this)" id="tarantula" data-animal-type="spider">Tarantula</li>  
</ul>

</body>
</html>
```

### this

Can be used to send an item to a function when it's clicked on

```csharp
// https://www.w3schools.com/tags/att_data-.asp 

<!DOCTYPE html>
<html>
<head>
<script>
function showDetails(animal) {
  var animalType = animal.getAttribute("data-animal-type");
  alert("The " + animal.innerHTML + " is a " + animalType + ".");
}
</script>
</head>
<body>

<h1>Species</h1>
<p>Click on a species to see what type it is:</p>

<ul>
  <li onclick="showDetails(this)" id="owl" data-animal-type="bird">Owl</li>
  <li onclick="showDetails(this)" id="salmon" data-animal-type="fish">Salmon</li>  
  <li onclick="showDetails(this)" id="tarantula" data-animal-type="spider">Tarantula</li>  
</ul>

</body>
</html>

```

### Dates

Moment is for dates 

# Creating And Appending Elements

```jsx
const script = document.createElement("script")
script.src="https://www.paypal.com"
script.addEventListener("load")
document.body.appendChild(script)
```

# Template Literal `some text ${variable} here`

# Async

async function returns a promise . . . 

# Includes

Can be used to search a string.  Equivalent of LINQ .contains

```jsx
var str = "Hello world, welcome to the universe.";
var n = str.includes("world");
```

# Prototype

To add a function to an existing function , use `prototype`

```jsx
// Make an input date default to today
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});
// apply it in jQuery or Javascript
$(document).ready( function() {
    $('#datePicker').val(new Date().toDateInputValue());
});​
document.getElementById('datePicker').value = new Date().toDateInputValue();
```





