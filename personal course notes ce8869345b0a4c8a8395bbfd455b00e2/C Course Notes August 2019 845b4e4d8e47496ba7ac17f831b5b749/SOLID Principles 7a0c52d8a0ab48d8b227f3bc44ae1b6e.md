# SOLID Principles

SOLID Programming Principles

Theoretical overview of good programming principles. Becomes important on larger projects where up-front theoretical thinking and good practice can save a ton of re-factoring work later on.

S = SINGLE RESPONSIBILITY ie a CLASS should related to ONE OBJECT ONLY

```
class Rabbit   GOOD
class Kitchen  TOO VAGUE AS DIFFERENT, MUTUALLY EXCLUSIVE SUBTYPES
		KitchenOpenPlan     mutually exclusive so use these
		KitchenClosedPlan
```

O = OPEN / CLOSED

```
Open for EXTENSION (ie not sealed)
Closed for MODIFICATION (ie don't mess with your original work if possible)

Class A-Class                  parent : don't modify if possible
	Class ModelA13
	Class ModelA14  			both modify original parent
```

L = LISKOV : OK to replace child with parent instances ...

I = Interfaces : Small ie use ONE METHOD PER INTERFACE

```
IEnumerable :   GetEnumerator   (countable list with numeric index) : ONE METHOD ONLY
```

D = Depend on Abstract Classes at top of your structure

# Overflow Exceptions

```
using System;

namespace lab_37_overflow
{
    class Program
    {
        static void Main(string[] args)
        {
            short s = 12345;
            int i = 1234567890;
            long l = 1234567890123456789;
            float f = 123456789012345678901234567890.0123456789012345678901234567890F;
            double d = 123456789012345678901234567890177777777777777777777777777777777.0123456789012345678901234567890;
            decimal dd = 12345678901234567890123456789.0123456789012345678901234567890M;
            Console.WriteLine(f);
            Console.WriteLine(d);
            Console.WriteLine(dd);

            // DEFAULT IS UNCHECKED BECAUSE CPU INTENSIVE
            unchecked
            {
                // integer maximums  MAX = 4.   0,1,2,3, -4,-3-2-1 0 1 2 3  -4
                Console.WriteLine(int.MaxValue);
                int bigInt = int.MaxValue;
                bigInt += 1;
                Console.WriteLine(bigInt);
                bigInt += 1;
                Console.WriteLine(bigInt);
                bigInt += 1;
                Console.WriteLine(bigInt);
                bigInt += 1;
                Console.WriteLine(bigInt);
                bigInt += 1;
                Console.WriteLine(bigInt);
                bigInt += 1;
            }

            DoThis();
        }
        static int counter = 0;
       static void DoThis() {
            counter++;
            Console.WriteLine(counter + "Doing This");
            DoThis();
        }
    }
}
```

# Reference Value Types

```
using System;
using System.Collections.Generic;

namespace lab_36_reference_value_types
{
    class Program
    {
        static void Main(string[] args)
        {
            // PRIMITIVE TYPE : int, bool, char, struct
            // STORED IN FAST STACK MEMORY
            // values stored with declaration in live, fast code.
            // destroyed immediately as well (if local variable) 
            // == VALUE TYPES as VALUE stored in STACK MEMORY with declaration
            // var x=10;   x and 10 stored on STACK
            // COPY OF VALUE TYPE IS INDEPENDENT
            decimal x = 10;  // 128 bit
            decimal y = x;
            x = 1000;
            y = 3333;
            Console.WriteLine($"x is {x} and y is {y}");

            // Pass x,y into a method
            DoThis(x, y);
            Console.WriteLine($"x is {x} and y is {y}");
            // pass x,y BY REFERENCE into DoThisPermanently(x,y);
            DoThisPermanently(ref x, ref y);
            Console.WriteLine($"x is {x} and y is {y}");

            // reference types
            // value types are primitives eg int, held on FAST STACK
            // reference types are LARGE OBJECTS
            // SHORTCUT = POINTER held on FAST STACK
            // ACTUAL OBJECT held on SLOWER HEAP (LARGER MEMORY)
            // stack                             heap
            //  int x=10
            //  list<string> mylist -----------> {"one","two"}

            // COPY REFERENCE TYPE : BY DEFAULT YOU ONLY COPY THE POINTER !!!!
            var myArray = new int[] { 100, 200, 300 };
            var myArray2 = myArray; // copy pointer only!!! NOT A NEW OBJECT IN HEAP MEMORY

            Console.WriteLine(string.Join(",", myArray));
            Console.WriteLine(string.Join(",", myArray2));
            myArray[2] = 5000;
            myArray2[1] = 14000;
            Console.WriteLine(string.Join(",", myArray));
            Console.WriteLine(string.Join(",", myArray2));

            // REFERENCE TYPES NATURALLY ARE TREATED AS GLOBAL WHEN PASSED INTO A
            // METHOD
            var myList = new List<string>() { "first", "second" };
            DoThisToMyList(myList);
            Console.WriteLine(String.Join(",",myList));

        }

        // method to change x, y : x=> x*x and y=>y*y*y
        static void DoThis(decimal x, decimal y)
        {
            x = x * x;
            y = y * y * y;
            Console.WriteLine($"local x is {x} and y is {y}");
        }

        static void DoThisPermanently(ref decimal x, ref decimal y)
        {
            x = x * x;
            y = y * y * y;
            Console.WriteLine($"ref x is {x} and y is {y}");
        }

        static void DoThisToMyList(List<string> list)
        {
            list.Add("hello");
            list.Add("sir");
        }
    }
}
```

Summary : Reference / Value types

```
STACK 		PRIMITIVES / VALUE TYPES / POINTERS (TO HEAP)  		FAST 		INSTANT DISPOSAL

HEAP 		REFERENCE TYPES  									SLOWER 		GARBAGE COLLECTION
																			AT INTERVALS
```