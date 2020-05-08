# Coding Overview

### Coding Overview

variable int x;
declare string y;
initialise y="hi";
class template for creating new objects
object1 = { field1="hi" } // object1.field1
object2 = { .... }
object3 = { .... } LITERAL CREATION OF OBJECTS
class x { string color; }
x instance1 = new x(); // USING x to create standard objects of a given patten
2
3
Class Car { string color; } Car car01 = new Car(); // empty instance
car01.color="red";
Method = function
DoThis(){ // code }
function DoThis(){ alert("here is a message"); } // WEB
void DoThat(){ Console.WriteLine("another message"); } // C#
void means - After method finished running, it does not return any data
string AlsoDoThis(){ ... return "A String"; }
Loop
for (int i = 0; i<100; i++){ // work on i }
var array01 = new int[]{ 1,2,3,4,5} // length is 5 // index from 0 to 4
foreach (int item in array01) { // work on item }

```
int x=0;
while (x<100){ 

    // increment x
    x++;
}

do..while
int x = 0;
do{
	// run at least once 
    x++;
}
while(x<=100)
```

Operator
a+b
Conditional Operator
if...
else if...
else ...

Create some code using Console.ReadLine() to input data as a STRING
Collect one or more pieces of data from user
Do something with this data
Loop/Conditional Code etc

```
... Input Your Number"
int inputNumber;
string inputString = Console.ReadLine();
Int.Parse
Int.TryParse(inputString, out inputNumber);
.. use inputNumber...
```