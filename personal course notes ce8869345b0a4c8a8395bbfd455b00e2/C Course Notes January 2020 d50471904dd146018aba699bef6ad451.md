# C# Course Notes January 2020

## Topic List

# Topic List

## Project Links And Repo Links

### Class Northwind Testing Project

[https://github.com/jwKav/Group-Project_01](https://github.com/jwKav/Group-Project_01) 

## Week 1

### Day 1 : Intro, Overview, Tools

[Introduction To Sparta](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/Introduction%20To%20Sparta%20cb03849f5fa0419b8b0301cfd5a68415.md)

[Course Overview - 10 Weeks](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/Course%20Overview%2010%20Weeks%204c315509d12f4446872ee6df0574b624.md)

[Sparta Structure](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/Sparta%20Structure%2080189b07a13a47dd8163b54fdd2564b1.md)

[Technical Tools Used In The Course](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/Technical%20Tools%20Used%20In%20The%20Course%204fd846f6c8294d188eb538e7382294fc.md)

### Day 2 : Lominger, Agile, Waterfall, GitHub Intro

[Coding Overview](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/Coding%20Overview%2064b3a3715ef942e19d64f57c61fdedff.md)

[Lominger 'Behaviour' And Scoring Throughout The Course](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/Lominger%20Behaviour%20And%20Scoring%20Throughout%20The%20Cour%2019eb72956feb4ed29a632fb97ace2f76.md)

[Agile And Waterfall](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/Agile%20And%20Waterfall%202ec32434d7d046f08e077d608a91a01b.md)

[GitHub Create Repo And Do First Push And Pull](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/GitHub%20Create%20Repo%20And%20Do%20First%20Push%20And%20Pull%2063aac82b10294098ab16acaa07f7aeac.md)

### Day 3 : Lifelong Learning, Markdown, Presentations, Time And Task Management, Meetings, Project Management

[LifeLong Learning](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/LifeLong%20Learning%20d8cae105a17c4f5cb6180869cc8a1ba4.md)

[Markdown](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/Markdown%208d7e821db0c44719b1911eccf8e7c72f.md)

[Presentation Skills](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/Presentation%20Skills%204b2a637c6ff04546a13cbb3726b37a1a.md)

[Time And Task Management](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/Time%20And%20Task%20Management%20182d3a3291c84903856fc6d890d2c5a2.md)

[Effective Meetings](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/Effective%20Meetings%2029b3bcadb6a1465aa4bee829665d35e8.md)

[Project Management](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/Project%20Management%2052b042be0cbe4b9a81a303b62b379720.md)

### Day 4 : Business Skills : Communication, NLP, Bias

[Morning Review ](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/Morning%20Review%208a6485ef43ca4564a53009ff93934be2.md)

[Communication](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/Communication%20adbb4f47950c4f209cbf08a87e708981.md)

[Managing Communication With Email](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/Managing%20Communication%20With%20Email%2071f379b319b342c6aac7ddb7c0ca3b4c.md)

[Communication ](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/Communication%20abc47f7d2fda42f88cb626eeafe1db73.md)

[NLP and Bias](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/NLP%20and%20Bias%20d536c99be62547eca3cd213461922ed3.md)

### Day 5: Business Week Test

[Test Overview And Revision](C%20Course%20Notes%20January%202020%20d50471904dd146018aba699bef6ad451/Test%20Overview%20And%20Revision%20a96f61cc5c06438fbb82d4992f37580d.md)

## Week 2

### Day 6: IDE Setup, Visual Studio, Assemblies, EXE, DLL, Debug, Conditional Compiling, .NET, .NET Core

## Day 6 : Code Setup and IDE Environment

## Code Setup And IDE Environments

Code is actually just plain text!

```
mycode.java
mycode.cs
mycode.html
mycode.css
mycode.js    
...
```

When we RUN this code typically we send this for processing into the CPU

```
CPU not built to handle plain text instructions 

It has its own language 'INSTRUCTION SET'

Compile code
	RAW TEXT
		==> BINARY FORMAT WHICH CPU CAN UNDERSTAND

			'ASSEMBLY LANGUAGE' or 'LOW LEVEL LANGUAGE'  ==> sent to CPU

C# Program

	RAW TEXT (.cs)
				==>   CIL  COMMON INTERMEDIATE LANGUAGE

				C#  ==>  CIL
				F#  ==>  CIL
				C++ ==>  CIL
				VB  ==>  CIL

						Can view this code with 'ILDASM' tool
						Intermediate Langauge Disassembler
```

## Day 6 : Visual Studio and Assemblies EXE and DLL

### Visual Studio

```
.sln  'Solution' file

	Container (metadata only, no other function)
		XML file with path to EVERY PROJECT WITHIN

	.csproj  'Project' file

		XML data used to locate any LIBRARIES USED IN THIS PROJECT
		ALSO holds the VERSION OF .NET USED IN THE PROJECT
```

### Types of files produced and used in Windows

```
Compiled UNIT OF CODE IS CALLED AN 'ASSEMBLY'  (Note : these are BINARY files ie
		raw 1/0 so not normally human-readable)

	ASSEMBLY
			.EXE  'executable' (runtime)

					Main(){}   method

			.DLL  'dynamic link library'

					Contain classes, methods etc which are REFERENCED BY OTHER
								PROGRAMS

					Note : DLL can be USED BY OTHER CODE
					           ((can't run like 'exe'))
```

## Day 6 : using DLL Libraries

### Calling and using a DLL library

```
1) Add reference to project containing DLL

2) Add 'using' statment to link to it
```

```
using System;
namespace lab_03_library_files
{
    // class is a container
    public class MyClass
    {
        // Method (function)
        public int DoubleUp(int number)
        {
            return 2 * number;
        }

        // field
        public double GravitationalConstant = 9.81;
        // STATIC EQUIVALENT : read directly from class
        public static int AlsoTripleUp(int number)
        {
            return 3 * number;
        }
        // field
        public static double NaturalLogarithmE = 2.71;
    }
}
```

```
using System;
using lab_03_library_files;

namespace lab_03_use_library
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("This program is going to call and use a library");

            // OOP : new 'instance' to talk to Class
            var myinstance = new MyClass();

            Console.WriteLine(myinstance.DoubleUp(10));

            Console.WriteLine(myinstance.GravitationalConstant);

            Console.WriteLine("Now reference STATIC ITEMS");

            Console.WriteLine(MyClass.AlsoTripleUp(10));
            Console.WriteLine(MyClass.NaturalLogarithmE);
        }
    }
}
```

## Day 6: Debugging And Conditional Compiling

### Debugging

Useful to be able to stop and analyse code WHILE RUNNING

Hover over variables and expand if necessary to view details

Other windows to be aware of

```
Autos - recent variables
Output - any output which we print to screen (not console)
Locals - all variables
Watch - specific variables
Immediate - live code!
```

Where can we print or 'log' our debugging output to ???

```
Console.WriteLine()  ==>    SCREEN 
Trace.WriteLine()    ==>    OUTPUT WINDOW  (EVERY TIME)
Debug.WriteLine()    ==>    OUTPUT WINDOW  (ONLY WHEN DEBUG RUNNING)

	Debug commands only work when we compile our program in 'debug'
	mode

		Build=> Configuration=>Debug/Release

File
	File.AppendAllText("log.dat","....")

Event Viewer
	Windows itself has an EVENT LOGGER!

	.NET CORE      ==> NOT LINKED TO THIS NATIVELY
	.NET FRAMEWORK ==> LOG TO WINDOWS DIRECTLY!

Conditional Compiling

	It may be we want to OMIT CODE FOR TESTING WHEN WE PUSH TO PRODUCTION

	#if DEBUG ... 

	#endif

				can be used to conditionally compile code
```

## Day 6 : .NET and .NET Core

### .NET vs .NET core

.NET is a collection of LIBRARIES used to support WINDOWS

```
Currently .NET is around 4.7GB in size.   Version 4.7.2.

	It's old now and works completely with Windows.
```

.NET core is lightweight version of .NET

```
Created to allow C# programs to run on MAC and LINUX as well as WINDOWS.

Microsoft have done a few really great things over the last few years
	- bought Skype
	- bought LinkedIn
	- bought GitHub
	- become a major sponsor of the LINUX FOUNDATION
	- embraced OPEN SOURCE rather than CLOSED SOURCE

		WHY?
			OPEN SOURCE allows developers anywhere to improve your code, spot errors,
			bugs etc ==> more secure

.NET & .NETCore are OPEN SOURCE now.
```

### .NET core apps

We can build .NET Core using Visual Studio or any text editor (VSCode)

Also be aware POWERSHELL can be used to get lots done with .NET Core

```
dotnet new console
dotnet build
dotnet run // run
```

```
dotnet new web
dotnet run       
Find website on <https://localhost:5001>
```

## Day 6 : Goals For This Course

### Goals for this course

Console applications most of the course to get fundamentals right
SQL ==> raw SQL ==> connecting directly from C# but (better) using library called ENTITY
LINQ ==> query database

WPF ==> Graphical App (Windows Presentation Foundation)
Database app here with dropdown, lists etc

Game ==> Unity

```
Use this to get exited about coding AND HAVE SOMETHING TO SHOW CLIENTS
```

Web & MVC

### Day 7 : OOP Day 1 : Classes, Inheritance, Methods, Properties, Fields

## Day 7 - OOP

# OOP

There are several way to build an application.

More modern methods include 'FUNCTIONAL PROGRAMMING' where a METHOD(FUNCTION) can be treated and handled as a regular object.

OOP Object Oriented Programming also is mainstream today.

First programs on earliest computers wrote 'scripts'

```
Line1   INSTRUCTION1
2		..  ==> FUNCTION DOTHIS()                 ===> 
..
END     ...
```

GUI Graphic User Interface ==> Screen Elements eg Button, List, Calendar, Drop-down

```
Screen Object (Button)    ==>   Attach code to BUTTON 
									EVENT LISTENER eg   CLICK, DBLCLICK, MOUSEOVER,
									MOUSEOUT
			  (TextBox)   ==>   Focus (arrive), Blur (leave), keypress/down/up

	Object Oriented Programming        Event-Driven Programming

	Button  							click

	Facebook Icon 						notification event

											eg React 'Hooks' to notify of events
C# code

	Button 							private void Button_Click(object sender,
										eventArgs e){}

											object 'sender' = SCREEN ITEM INVOLVED
															  IN THE EVENT EG BUTTON

										    eventArgs 'e'    ARRAY OF STRINGS WHICH CAN
										    				 BE SENT WITH EVENT FOR 
										    				 EXTRA DATA eg MouseX,MouseY
```

Creating Objects - Object Literal

We have already seen a 'literal' way to create objects

```
using System;
using System.Collections.Generic;
using System.Dynamic;

namespace lab_08_literal_objects
{
    class Program
    {
        static void Main(string[] args)
        {
            // don't do this
            var string01 = new String("here is a string");
            // do this
            var string02 = "here also is a string";

            // array : fixed in size (Immutable)
            // long way
            var array01 = new int[5];  // Empty memory space to hold 5 integers
            var array02 = new int[] { 10, 20, 30, 40, 50 };  // literally defining numbers

            var list01 = new List<int>();
            var list02 = new List<int>() { 10,20,30,40,50};  // literals

            // random object
            dynamic object01 = new ExpandoObject();
            object01.name = "Fred";
            object01.age = 22;
            object01.balance = 32.50;
            Console.WriteLine($"object01 has name {object01.name} and age {object01.age} " +
                $"with balance {object01.balance}");

            // creating object AS A LITERAL
            var object02 = new
            {
                name = "Fred",
                age = 22
            };
            Console.WriteLine($"{object02.name} has age {object02.age}");

            // OOP language : create new OBJECT using LITERAL DATA
            var dog01 = new Dog()
            {
                Name="Fido",
                Age = 4
            };
            Console.WriteLine($"{dog01.Name} is {dog01.Age}");

        }
    }

    class Dog
    {
        public string Name;
        public int Age;
    }

}
```

## Day 7 - Classes

## Classes

Object Oriented Programming uses OBJECTS to represent data in a STRUCTURED AND ORDERED WAY

var object01 = { .... }
var object02 = { .... }

Now if we have a CAR FACTORY all CARS have SAME STRUCTURE

Class in computing can provide a TEMPLATE for CREATING OBJECTS ALL OF THE SAME STRUCTURE

Class MyClass {
public string Name;
public int Age;
}

```
var instance01 = new MyClass();    // new OBJECT based on TEMPLATE 'MyClass'
                02
                03 ... all instances exactly same structure
```

```
using System;

namespace lab_09_OOP_intro
{
   class Program
   {
       static void Main(string[] args)
       {
           // var keyword INFER TYPE FROM RIGHT ie CAR
           // car01 INSTANCE ie particular object created
           // Car = TEMPLATE USED
           // () run a METHOD when calling 'new' keyword  //  Constructor Method
           var car01 = new Car();
           car01.Make = "Mercedes";
           for (int i = 0; i< 1000; i++)
           {
               // CREATE 1000 CARS!
               var car = new Car();
           }
           var newCar = new Car();
           Console.WriteLine($"Initial Speed {newCar.Speed}");
           newCar.Speed++;
           newCar.Speed++;
           Console.WriteLine($"Final Speed{newCar.Speed}");
           var car02 = new Car("Mercedes","C220","silver",2200);
       }
   }

   class Car
   {
       public string Make;
       public string Model;
       public string Color;
       public int Length; // mm
       public int Speed;

       // Constructor is present even if not stated
       // Default constructor
       public Car() {
           this.Speed = 0;  // THIS KEYWORD refers to INSTANCE OBJECT IN USE AT THE TIME
       }

       public Car(string make, string model, string color, int length)
       {
           this.Make = make;
           this.Model = model;
           this.Color = color;
           this.Length = length;
           this.Speed = 0;
       }

   }

}
```

## Day 7 : Inheritance

### Inheritance

class Parent {}

class Child : Parent {}

class GrandChild : Child {}

As with families, you can only belong to ONE FAMILY AT A TIME ie INHERIT FROM ONLY ONE PARENT

```
using System;

namespace lab_09_OOP_intro
{
    class Program
    {
        static void Main(string[] args)
        {
            #region CreateGenericCar
            // var keyword INFER TYPE FROM RIGHT ie CAR
            // car01 INSTANCE ie particular object created
            // Car = TEMPLATE USED
            // () run a METHOD when calling 'new' keyword  //  Constructor Method
            var car01 = new Car();
            car01.Make = "Mercedes";
            for (int i = 0; i< 1000; i++)
            {
                // CREATE 1000 CARS!
                var car = new Car();
            }
            var newCar = new Car();
            Console.WriteLine($"Initial Speed {newCar.Speed}");
            newCar.Speed++;
            newCar.Speed++;
            Console.WriteLine($"Final Speed{newCar.Speed}");
            var car02 = new Car("Mercedes","C220","silver",2200);
            #endregion CreateGenericCar
            #region CreateS220Car
            var s220car01 = new S220();  // constructors NOT INHERITED
            var car04 = new S220("blue", 2200);
            Console.WriteLine($"new car {car04.Make} {car04.Model} is {car04.Color} ");
            #endregion CreateS220Car
        }
    }

    #region Classes
    class Car
    {
        public string Make;
        public string Model;
        public string Color;
        public int Length; // mm
        public int Speed;

        // Constructor is present even if not stated
        // Default constructor
        public Car() {
            this.Speed = 0;  // THIS KEYWORD refers to INSTANCE OBJECT IN USE AT THE TIME
        }

        public Car(string make, string model, string color, int length)
        {
            this.Make = make;
            this.Model = model;
            this.Color = color;
            this.Length = length;
            this.Speed = 0;
        }

    }

    class Mercedes : Car { }

    class SClass : Mercedes {
        public bool sportsModel;
        public bool leatherSeats;
        public string Make = "Mercedes";
    }

    class S220 : SClass { 
        public S220(string color, int length)
        {
            //Make = "Mercedes";
            Model = "S220";
            Color = color;
            Length = length;
            Speed = 0;
        }
        public S220() { }
    }

    #endregion

}
```

# Day 7 : Methods

### Methods

Methods are FUNCTIONS which we can call

```
- from MAIN METHOD

- attached to CLASS (static)

- inside a class as part of an INSTANCE
```

```
using System;

namespace lab_10_methods
{
    class Program
    {
        // MAIN METHOD!  starts program!
        static void Main(string[] args)
        {
            // call it
            DoThis();
            DontDoThis();

            // declare it
            void DontDoThis()
            {
                Console.WriteLine("Don't Do This");
            }

            var Fido = new Dog();
            Fido.Name = "Fido";
            Fido.Grow();
            Fido.Grow();
            Fido.Grow();
            Fido.Grow();
            Console.WriteLine($"{Fido.Age} has {Dog.NumLegs} legs");
        }

        static void DoThis()
        {
            Console.WriteLine("I am doing this");
        }

                    void DontDoThis()
            {
                Console.WriteLine("Don't Do This");
            }

    }

    class Dog
    {
        public string Name;
        public int Age;
        public static int NumLegs = 4;

        public Dog()
        {
            this.Age = 0;
        }

        public void Grow()
        {
            this.Age++;
        }
    }
}
```

# Day 7 : Properties And Fields

### Properties And Fields

A class may have fields which we are already using

```
Class X{
	 public string Y;
}
```

But!

Normally for security our fields should be kept PRIVATE

```
Class User{
	private string _NINO;        // _ underscore
	private string bloodType;    // camelCaseLikeThis
}
```

Conversely we can create a new structure called a PROPERTY which is often PUBLIC but can grant access to PRIVATE FIELDS

```
using System;

namespace lab_12_properties
{
    class Program
    {
        static void Main(string[] args)
        {
            var user01 = new User("NT353637","AB");
            
            Console.WriteLine($"{user01.NINO}");
            user01.NINO = null;  // reset     null means 'no data present in field'    null is not ""
            user01.Age = -100;
            Console.WriteLine($"Age is now {user01.Age}");
            var user02 = new User("NR44444","AB");
            string updatedAge = "22";
            user02.Age = int.Parse(updatedAge);
            updatedAge = "something";
            // Fail user02.Age = int.Parse(updatedAge);
            int numericAge;
            int.TryParse("something", out numericAge);
            user02.Age = numericAge;
            Console.WriteLine(user02.Age);
            int? anyNumber = default;
            Console.WriteLine(anyNumber);
            
        }
    }

    class User
    {
        private string _NINO;
        private string _bloodType;
        private int _age;

        public User(string nino,string bloodtype)
        {
            this._NINO = nino;
            this._bloodType = bloodtype;
        }

        // public PROPERTY
        public string NINO
        {
            get { return this._NINO;  }
            set { this._NINO = value;  }    // value is a C# built-in carrier of the data from MAIN() TO INSTANCE.
        }

        public int Age
        {
            get { return this._age; }
            set {
                if (value >= 0)
                {
                    this._age = value;
                }
                else
                {
                    Console.WriteLine("Age cannot be negative");
                }
            }
        }

    }
}
```

### Auto Implemented Properties

The last thing to be aware of with Properties is

```
Short form

public int Age{get;set;}   // omit rest of code
```

### Day 8 : OOP Day 2 : Polymorphism, Abstract Class, Access Modifiers, Value and Reference Types

# Day 8 - Polymorphism

### Polymorphism

OOP recap from yesterday

Class : container which we use as a BLUEPRINT for CREATING OBJECTS

```
Class MyClass{}                               var myinstance = new MyClass{}

BLUEPRINT 										  INSTANCE = REAL OBJECT

((ARCHITECTURAL DRAWINGS))						  ((REAL BUILDING))
```

Class MEMBERS

```
FIELD  			private  _camelCaseNamedLikeThis           HIDDEN FROM OUTSIDE
														   (ENCAPSULATED)

PROPERTY 	    public  MyProperty {get;set;}              SHORT VERSION  
															(AUTO-IMPLEMENTED)

						get { return this._myProperty }    LONGER VERSION
						set { this._myProperty=value  }

METHOD 			public void DoThis(int a, string b, bool c, int d=1000){}
					(declare)

					DoThis(b:"hi",a:10,c:true);  // using or 'calling' method
```

Inheritance

```
class Parent{}    				// Base = parent 

	class Child : Parent {}     // Derived = child    (can only have one parent)
```

Polymorphism

```
Poly = many
Morph = type

class Parent{
	virtual void HaveAParty(){                       // VIRTUAL = PERMISSION TO OVERRIDE
		cw("Parent throwing posh dinner party")                   GRANTED
	}
}

class Child : Parent {
	override void HaveAParty(){
		cw("Child having swimming party")
    }
}

class Child2 : Parent{
	override void HaveAParty(){
	    cw("Night club")
	}
}
```

```
using System;

namespace lab_13_polymorphism
{
    class Program
    {
        static void Main(string[] args)
        {
            Enemy enemy = new Enemy();
            Enemy ninEnemy = new NinjaEnemy();
            var bruteEnemy = new Enemy();

            enemy.EnemyAttack();
            ninEnemy.EnemyAttack();
            bruteEnemy.EnemyAttack();
        }
    }

    class Enemy
    {
        public virtual void EnemyAttack()
        {
            Console.WriteLine("ENEMY ATTACK!");
        }
    }

    class NinjaEnemy : Enemy
    {
        public override void EnemyAttack()
        {
            Console.WriteLine("Ninja Attack!");
        }
    }

    class BruteEnemy : Enemy
    {
        public override void EnemyAttack()
        {
            Console.WriteLine("BRUTE ATTACK!");
        }
    }
}
```

# Day 8 - Abstract Classes

### Abstract Classes

Polymorphism OPTIONALLY OVERRIDES CODE
Class Parent{
virtual DoThis(){}
}
Child class can OPTIONALLY OVERRIDE DoThis()

Abstract classes use slightly different way of thinking

Imagine we are GOING ON HOLIDAY!

```
ABSTRACT class HOLIDAY                               ((GREAT IDEA))

	ABSTRACT TRAVEL ...

	ABSTRACT ACCOMMODATION ...

	PLACES NAMIBIA () {  ...   }               ((COMPLETE))

	BUDGET() { .... }                          ((COMPLETE))

	We can't yet GO ON HOLIDAY as TWO METHODS STILL ABSTRACT (Travel, Accommodation)
```

```
using System;

namespace lab_14_absract_class
{
    class Program
    {
        static void Main(string[] args)
        {
            //var abstractHoliday = new Holiday();    // abstract class : CODE MISSING 
            var realHoliday = new ActuallyGo();
            realHoliday.BookHotel();
            realHoliday.GetMoney();
            realHoliday.GetThere();
            realHoliday.VisitNamibia();    //  concrete class ie ALL CODE COMPLETE
        }
    }

    // cannot INSTANTIATE THIS CLASS (IE CANNOT CREATE INSTANCES OF NEW HOLIDAY YET)
    abstract class Holiday
    {
        public abstract void GetThere();

        public abstract void BookHotel();

        public void VisitNamibia() { Console.WriteLine("We know where we are going"); }

        public void GetMoney() { Console.WriteLine("Yep, got the funds"); }
                             // { ...... CODE BODY OR IMPLEMENTATION      }
    }

    // THIS IS A CONCRETE CLASS BECAUSE CAN CREATE NEW INSTANCES AND ACTUALLY GO ON HOLIDAY
    class ActuallyGo : Holiday
    {
        public override void GetThere() { Console.WriteLine("Fly then drive"); }

        public override void BookHotel() { Console.WriteLine("In Lion Village"); }
    }

}
```

# Day 8 - Recap

### Recap

abstract Class MyClass
private Field _private	FIELD
public Property {get;set;}	PROPERTY
void DoThis(){}	METHOD
public MyClass(){}	CONSTRUCTOR
public MyClass(int x){}	CONSTRUCTOR (OVERLOADED)

```
virtual AlsoDoThis(){}                  // can be overridden  (polymorphism)

abstract CanDoThis();                   // must be overridden    // body missing
```

# Day 8 - Access Modifiers

### Access Modifiers : keywords which dictate - how visible is your code?

```
public 			code is open to any other code, anywhere  ((think Windows DLL code))
private 		hidden (encapsulated) inside ONE CLASS ONLY
protected 		data visible in that class and also from any child (derived) classes  		
internal  		like public but not quite as wide.  Visible anywhere inside final code 'compiled' unit
				of deployed code.  "Assembly"

							Windows   EXE or DLL
							Android   APK
							ios  	  APP

				visible inside container 'NAMESPACE'  (wrapper for our code)
```

```
using System;

namespace lab_16_access_modifiers
{
    class Program
    {
        static void Main(string[] args)
        {
            var p = new Parent();
            var c = new Child();

            // p._hidden ...
            p.Exposed = "Yes we can see this";
            c.Exposed = "Yes also visible";
            p.IsUserLive = true;
            c.IsUserLive = true;
            //  p.FamilyName ...

            // SOMEHOW CREATE AS MANY VARIABLES AS YOU CAN IN DIFFERENT WAYS THAT BOTH p and c CAN ACCESS
            var dog = new Dog();
            dog.Name = "GreatestPet";
            p.TakeForWalk(dog);
            c.TakeForWalk(dog);
            c.ChangeNameOfDog(dog, "I Like This Name Better");
            p.ChangeNameOfDog(dog, "Stick With Original");
            Console.WriteLine(dog.Name);
        }
    }

    class Dog { 
        public string Name { get; set; }

    }

    class Parent
    {
        private int _hidden;                 // ENCAPSULATION
        public string Exposed { get; set; }

        internal bool IsUserLive;            // VISIBLE INSIDE .EXE/DLL BUT NOT OUTSIDE IT

        protected string FamilyName { get; set; }        // VISIBLE INSIDE CHILD  

        public void TakeForWalk(Dog d) { Console.WriteLine($"Taking {d.Name} for a walk"); }
        public void ChangeNameOfDog(Dog d, string newName) { d.Name = newName; }
    }

    class Child : Parent
    {
        // CAN'T PUT CODE DIRECTLY IN CLASS

        // USE CONSTRUCTOR BUT COULD USE ANY METHOD

        public Child()
        {
            this.FamilyName = "Robertson";
        }
    }

}
```

# Day 8 - Value And Reference Type

### Value Type And Reference Type

Computers have TWO TYPES OF MEMORY

```
STACK 		FAST, SMALL (PRIMITIVE) OBJECTS

HEAP 		SLOWER, LARGE OBJECTS

															RAM = PHYSICAL DEVICE
															VIRTUAL = windows temporary storage
```

Primitive Types

```
int x = 100;

	Memory     |     x     |     100     |
	           ---------------------------  ONE BLOCK

	           | ASCII 120 |    100      |

	           | 01111000  |  01100100   |

Valid types
	int
		short                                16       0111100001111000
		int 			max storage capacity 32 bits  01111000011110000111100001111000
		long                                 64       0111100001111000011110000111100001111000..

		float                                32
		double 		  3.25677				 64
		decimal   							128  

		bool          bit                             1  or  0

		char          'x'                     8 bits  01111000

	    byte         number 0 to 255   120    8 bits  01111000 

	    byte[1024]   streaming               big      

Represent binary

        128 64 32 16  8  4  2  1
		1    0  1  0  1  0  1  0   value = 128+32+8+2 = 170

Hexadeximal      1 2 3 4 5 6 7 8 9 A=10 B=11 C=12 D=13 E=14 F=15

		1    0  1  0      1  0  1  0

		   1010              1010 

	0x	     A                A          (HEX)
```

### How Does A Computer Run A Program?

```
array01......shortcut / pointer................array01[]{10,20,30}
                        Math.PI...
					instance01.AlsoDoThis(){..int a, bool b }
					instance01.DoThis(x,y){....}
				Main(){ int x, string y }

             ===============STACK MEMORY===========                      =======HEAP MEMORY======
```

### Reference Type and Value Type

```
Primitive lives on the STACK memory and is also called a VALUE TYPE
	int, bool, etc

Non-primitive lives on HEAP MEMORY and is called a REFERENCE TYPE
	class, array, list, dictionary, queue, stack

When we make a COPY of a VALUE TYPE the two items are INDEPENDENT

When we        COPY    a REFERENCE TYPE it just creates a SECOND SHORTCUT TO SAME OBJECT IN MEMORY
```

```
using System;

namespace lab_17_value_reference_type
{
    class Program
    {
        static void Main(string[] args)
        {
            // copy integer : what happens
            int x = 100;
            int y = x;
            x = 200;
            Console.WriteLine($"x is {x} and y is {y} (Expected)");

            // copy array : what happens when change values?
            int[] Array01 = { 100, 200, 300 };
            int[] Array02;
            Console.WriteLine(Array01[0]); //100
            Array02 = Array01;
            Console.WriteLine(Array02[0]); //100

            Array01[0] = 400;
            Console.WriteLine(Array01[0]); //400
            Console.WriteLine(Array02[0]); //400

            // create some data
            int num1 = 1000;
            var dog01 = new Dog();
            dog01.Age = 10;
            // pass into methods
            Console.WriteLine(num1);
            AddOne(num1);
            Console.WriteLine(num1);   // original UNCHANGED!
            // what happens original data?
            Console.WriteLine(dog01.Age);
            AddOneYearToDogAge(dog01);
            Console.WriteLine(dog01.Age);  // original ALTERED

        }

        // pass in value type
        static void AddOne(int number) {
            number += 1;
        }

        // pass in reference (pointer)
        static void AddOneYearToDogAge(Dog d)
        {
            d.Age++;
        }
    }

    class Dog
    {
        public int Age { get; set; }
    }
}
```

# Pass By Reference

### Pass By Reference

Recap

```
STACK MEMORY

	PRIMITIVES
	VALUE TYPE

		Data is stored with field name, live on the stack

				int x = 10;
	STRUCT

HEAP MEMORY

	STRING   ARRAY[CHAR]
	ARRAY
	COLLECTION
	CLASSES

Pass a VALUE TYPE INTO METHOD

	==> IN METHOD, NOT USING ORIGINAL BUT A COPY WHICH IS INDEPENDENT

		int x = 10;
		DoThis(x);

			In method, x is used but unrelated to original x ie value stays 10
```

```
using System;

namespace lab_52_pass_by_reference
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine($"\\nFirst Run - Integer Is Privately Handled Inside Method\\n\\n");
            int x = 10;
            DoThis(x);
            Console.WriteLine($"x is {x}");
            // PASS IN AN INTEGER BUT TRACK VALUE INSIDE METHOD
            // PASS BY REFERENCE
            Console.WriteLine($"\\n\\nSecond Run - Track integer inside method (PASS BY REFERENCE)\\n");
            TrackThis(ref x); // move storage of x onto HEAP : PERMANENT TRACKING
            Console.WriteLine($"IN MAIN METHOD x is {x}");  // 1010
        }
        // PRIVATE USE OF X IE UNRELATED TO X PASSED IN
        static void DoThis(int x) {
            x = x + 10;
            Console.WriteLine($"x is {x}");
        }
        static void TrackThis(ref int x)
        {
            x += 1000;
            Console.WriteLine($"INSIDE METHOD x is {x}");  // 1010
        }
    }
}
```

# Overnight : Calculator Challenge

Build a working calculator in WPF!

### Day 9 : Loops, Arrays, Collections And Exceptions

# Day 9 : Loops

# Loops

For .. fixed iterations

ForEach ... collection

While (condiition)

Do...code...While(condition at end)

Parallel.ForEach(item=>process(item) which takes a long time)

### Continue

If we don't want to process a certain loop then 'continue' goes to next loop

### Break

If we have finished processing then 'break' exits the loop

Count from 1 to 100

```
if not divisible by 5 then 'continue' to next loop

print item

if equal to 90 then break

								5,10,15......85,90
```

```
using System;

namespace lab_18_loops
{
    class Program
    {
        static void Main(string[] args)
        {
            // for
            //for(int i = 0; i < 10; i++)
            //{
            //    Console.WriteLine(i);
            //}

            string word = "elephant";
            // foreach
            foreach (char c in word){
                Console.WriteLine(c);
            }
            // while
            int i = 1;
            while(i<=10)
            {
                Console.WriteLine(i);
                i++;
            }

            // do.while
            int j = 1;
            do
            {
                Console.WriteLine(j);
                j++;
            } while (j < 10);

            /*
             
             
             ### Continue

If we don't want to process a certain loop then 'continue' goes to next loop

### Break

If we have finished processing then 'break' exits the loop

Count from 1 to 100

	if not divisible by 5 then 'continue' to next loop

	print item

	if equal to 90 then break

									5,10,15......85,90
                                    
             
             */

            for (int k = 5; k <= 90; k+=5)
            {
                //if (k % 5 != 0) continue;
                Console.Write(k+ "  ");
                //if (k == 90) break;
            }

        }
    }
}
```

### Goto, Return and Throw

```
// GOTO
            // Older programs used GOTO to JUMP IN PROGRAM
            // Never use GOTO but it DOES EXIST

            Console.WriteLine("Start here");
            goto a;
            Console.WriteLine("This is never printed");
            a:
            Console.WriteLine("Jumped to this point");
            Console.WriteLine("Continue execution");

            // RETURN
            // If we are in a METHOD then we can EXIT THE LOOP AND ALSO
            // exit the method at the same time, using RETURN keyword

            DoThis();

            void DoThis()
            {

                for(int num1 = 1; num1 < 100; num1++)
                {
                    if (num1 == 10)
                    {
                        return;
                    }

                    Console.WriteLine($"In method DoThis - num1 is {num1}");
                }

            }

            // THROW
            // In some bigger applications they want to track when errors occur eg form validation
            for(int num2 = 0; num2 < 10; num2++)
            {
                if (num2 == 5)
                {
                    throw new Exception("invalid number");
                }
            }
        }
    }
```

# Day 9 : Arrays

### Arrays And Collections

Array is FIXED COLLECTION OF ITEMS EG int or string

```
int[] myArray = new int[10]      // BLANK ARRAY OF SIZE 10 ie index 0 to 9

string[] myArray2 = new string[] {"hi","there"}

var myArray3 = {"hi","there"}       // LITERAL
```

2D / 3D Array

```
int[,] my2DArray = new int[10,10];
int[,,] my3DCube = new int[10,10,10];
```

ARRAYS ARE FAST BUT FIXED SIZE

```
FAST to READ/WRITE data
	Why are they fast?

		Declare array you FIX SPACE IN MEMORY FOR EACH BOX

			int[10]  ==>  RAM  [   ]   ABC000    0TH ELEMENT
			                   [   ]   ABC001    1ST ELEMENT
			                   ...
			                   [   ]   ABC009    9TH ELEMENT
```

```
using System;

namespace lab_19_collections
{
    class Program
    {
        static void Main(string[] args)
        {
            // create 1D Array from 0 to 9
            var array1D = new int[10];
            // fill the array with the appropriate number 0 to 9
            for(int i = 0; i < 10; i++)
            {
                array1D[i] = i;
            }
            // iterate (foreach) and get total of all numbers
            Console.WriteLine(string.Join(',',array1D));

            // repeat with 2D grid (size 10x10)

            // repeat with 3D cube  (size 10x10x10)

        }
    }
}
```

# Collections

### Collections

Array - fixed size and fast to read/write data (not good to resize though)

Collection - variable size but slower

Collection<T> means Collection of objects of type <T> where T = int, string etc
'Generics' because T refers to a GENERAL TYPE

Lists
List - add items at start, end, middle
Useful for general data

Queue
Think 'polite village bus stop queue'

```
Also PRINTERS WORK THIS WAY
Also EMAIL WORKS THIS WAY

			JOAN		TIM		ESMERELDA	BOB
		  (LAST)                            (1ST)
		  (TAIL)                            (HEAD)

		  											PEEK = LOOK AT FIRST ITEM (BOB)
		  											DEQUEUE = REMOVE BOB FROM FRONT
		  											ENQUEUE = ADD JOAN AT BACK
		  											CONTAINS (TIM)   TRUE

Queue = FIFO first in, first out
```

### Stack

```
LIFO last in, first out

Think 'dinner plate' stack ==> ONLY TOP ITEM IS AVAILABLE

	PUSH  new item onto TOP
	POP   remove top item
	PEEK  look at top item
	CONTAINS
```

### Dictionary

```
In computing we often deal with PAIRS OF ITEMS (key-value pair)

	key 							value
	index (uniquely valued)	        can take any value
```

```
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq; // query language  LANGUAGE INDEPENDENT QUERY
                   // use => LAMBDA ARROW

namespace lab_20_list_queue_stack
{
    class Program
    {
        static void Main(string[] args)
        {
            var list = new List<int>() { 10, 20, 30, 40 }; // LITERAL
            list.Add(50);
            list.Add(60); // at end
            list.Insert(0, 5);  // add 5 at index 0
            // print list
            // FOREACH...
            // foreach item in 'list'  (( get item, call it 'item, and process it whatever code in braces ))
            list.ForEach(item => { 
                Console.WriteLine(item);
            });

            var newList = list.Where(item => item > 30);

            list.Where(item => item > 30);

            // Queue
            var queue = new Queue<int>();
            // add 5 items to back of queue
            // remove 2 items
            // print queue

            queue.Enqueue(5);
            queue.Enqueue(4);
            queue.Enqueue(3);
            queue.Enqueue(2);
            queue.Enqueue(1);

            Console.WriteLine(queue.Dequeue()); 
            Console.WriteLine(queue.Dequeue());

            foreach (var item in queue)
            {
                Console.WriteLine(item);
            }

            Console.WriteLine(string.Join(',', queue));
            Array.ForEach(queue.ToArray(), item => Console.WriteLine(item));

            // Stack
            // create stack with 10 random numbers (1 to 100)
            var random = new Random();
            random.Next(1, 100);

            var stack = new Stack<int>();
            for (int i = 0; i < 10; i++)
            {
                stack.Push(random.Next(1,100));
            }

            // print stack on ONE LINE WITH COMMAS
            Console.WriteLine(string.Join(',' , stack));
            // remove top 3 items
            stack.Pop();
            stack.Pop();
            stack.Pop();

            // print stack again
            Console.WriteLine(string.Join(',', stack));

            // Dictionary

            // Dictionary uses ORDERED SETS ie key is UNIQUE AND ORDERED, value is the data

            var dict = new Dictionary<int, string>();
            dict.Add(1, "hi");
            dict.Add(2, "there");
            dict.Add(3, "people");
            // error dict.Add(3,"anything");
            foreach(var item in dict)
            {
                Console.WriteLine($"Key {item.Key} has value {item.Value}");
            }

            // List of OBJECTS!!!
            // Sometimes we have to deal with collections of GENERIC OBJECTS
            var arraylist = new ArrayList();
            arraylist.Add(10);
            arraylist.Add("hi");
            arraylist.Add(new object());

            foreach(var item in arraylist)
            {

                Console.WriteLine($"Item {item} has type {item.GetType()}");
            }
            Console.WriteLine((int)arraylist[0]+100);
            Console.WriteLine((string)arraylist[1]+100);
            
        }
    }
}
```

Array : FIXED TYPE AND FIXED SIZE
ArrayList : ANY TYPE AND ANY SIZE

# Exceptions

### Exceptions

Errors are due to the output not being correct

```
Bank ==> ask for interest loan ==> £100 at 5%

	2 Years ==> how much is interest?

		100 * 1.05 = 105
		105 * 1.05 = 110.25

Imagine the bank computer said you were due £20.25 interest!

	This is an ERROR!  Not an EXCEPTION!  COMPUTER WILL NOT CRASH!
```

Exception is when the COMPUTER CRASHES

```
There are MANY TYPES OF EXCEPTION

	System.Exception ROOT
		DivideByZero
		Arithmetic
		IndexOutOfRange  		[15] in array of size 10
		Overflow exception      Too big for the size to handle
								int : 32 bits
		FileNotFound
		OutOfMemory   			
		StackOverflow
		FormatException         Type 
		Customer 				Home-made

Handling exception

	try{
		// CODE WHICH MIGHT FAIL
	}

	catch{
		// IF CODE FAILS RUN HERE
	}

	finally {
		// ALWAYS DO THIS ANYWAY IE EXCEPTION OR NOT
	}
```

```
using System;

namespace lab_21_exceptions
{
    class Program
    {
        static int number = 0;
        static void Main(string[] args)
        {
            var bigNumber = int.MaxValue;
            Console.WriteLine(bigNumber);
            checked{
                //Console.WriteLine(bigNumber + 1);
            }

            // let's crash
            //CrashMe();
            
            void CrashMe()
            {
                //Console.WriteLine("Soon to crash");
                number++;
                CrashMe();
            }

            // exceptions

            double x = 10.0;
            int y = 20;
            int a = 0;
            int trouble = y / a; // unhandled
            try {
                double z = x / y;
                double d = x / y;
                Console.WriteLine($"{x}/{y} is {z} and {d}");
                int trouble2 = y / a;  // handled
            }
            catch(DivideByZeroException e) {
                Console.WriteLine("Houston we have a problem");
                Console.WriteLine(e);
                Console.WriteLine(e.Data);
                Console.WriteLine(e.Message);
            }
            catch(Exception e)
            {
                Console.WriteLine("something has happened but I'm not sure what");
            }
            finally {
                Console.WriteLine("All good");
            }
         
        }
    }
}
```

### Why use exceptions?

Always use exceptions in production code because we never know what is going to happen and we don't want the user calling us about these exceptions. They also reveal information to a potential malicious person deliberately causing trouble.

In a larger application we will need to TRACK FAILURES so we can use EXEPTIONS to BOUNCE ERRORS UP TO A HIGHER LEVEL

### Throwing An Exception

```
using System;
using System.IO;

namespace lab_22_throw_exception
{
    class Program
    {
        static void Main(string[] args)
        {
            // OVERALL SYSTEM
            try {
                // DEPARTMENT
                try {
                    // YOU!
                    try {
                        // custom exception
                        // read database and FAILS
                        throw new Exception("Database read has failed for user Joe");
                    }
                    catch {
                        // don't handle
                        // pass up
                        throw;
                    }
                }
                catch {
                    throw;
                }
            }
            catch(Exception e) {
                File.AppendAllText("ErrorLog.txt", Environment.NewLine + e.Message);  // LOGGING SYSTEM
            }
        }
    }
}
```

# Overnight: Rabbit Basic Challenge

### Rabbits

```
namespace lab_23_Rabbits
{
    class Program
    {
        static void Main(string[] args)
        {
            // Lab 1

            // create 100 rabbits
            // give them all ID, Name and Age
            // Print a sample (every 10 items)

            // Lab 2
            // Create a loop to 'age' the rabbits
            // Iterate 50 times and update all the ages
            // Print a sample

            // Bonus : put this into WPF!?!?!!??! Not required only if very keen
        }
    }

    class Rabbit
    {
        public int RabbitId { get; set; }
        public string RabbitName { get; set; }

        public int Age { get; set; }
    }
}
```

### Day 10

# Revision Session Friday 24 Jan

10 hard terms/definitions

Abstract class CANNOT BE INSTANTIATED because contains AT LEAST ONE ABSTRACT METHOD
Abstract method HAS NO CODE BODY ((IMPLIMENTATION)) IE BRACES AND MUST BE OVERRIDDEN
Concrete class CAN BE INSTANTIATE ((all code present))
abstract class Idea { abstract void DoThis(); } ABSTRACT
class ActualPracticality : Idea { override void DoThis(){ // code } } CONCRETE

Polymorphism : many types
class Parent{ virtual DoThis(){//code} } DEFAULT CODE PRESENT
class Child { override DoThis(){//othercode } } OPTIONAL OVERRIDE

ABSTRACT CLASS { ABSTRACT METHOD(); }
DERIVED CLASS { OVERRIDE (){// code} } MANDATORY

```
CLASS {    VIRTUAL METHOD(){}         }
```

DERIVED CLASS { OVERRIDE METHOD(){} } OPTIONAL

Encapsulation : members hidden using PRIVATE KEYWORD _hidden

Inheritance of features from Parent (Base) Class into the Child (Derived) class

```
What can be inherited? Fields, Properties, Methods, Events...

	private ==> NO INHERITANCE
	public/internal/protected ==> INHERITANCE
```

Framework
React (javascript)
Vue ""
Angular ""
Bootstrap	CSS
.NET C#
.NET Core C#
Scaffolding ==> CODE BUILT FOR YOU

Stack memory ==> 'call stack' is the list of methods called, in order (active at top)

OVERLOAD SAME METHOD DIFFERENT PARAMTERS

```
DoThis()
DoThis(int x)
DoThis(string y) ... useful in CONSTRUCTOR
```

OVERRIDE SAME METHOD DIFFERENT CODE OPTIONALLY REPLACE PARENT CODE IN CHILD

CONSTRUCTOR
class Dog{
private string _bloodType; // FIELD
public string Name {get;set;} // PROPERTY
public Dog(){} // CONSTRUCTOR : invoke(run) when call
'new' keyword
var d = new Dog();
}

Exception SYSTEM CRASHES
Error Programmer error
ArrayIndexOutOfBounds
StackOverflow
Arithmetic
FileNotFound
DivideByZero

Array FIXED SIZE VERY FAST
Generic List<T> T any TYPE eg <int>

Collection VARIABLE SIZE SLOWER
List
Stack LIFO Push(on top) Pop(off top)
Queue FIFO Enqueue (at back) Dequeue(at front) PEEK CONTAINS
Dictionary key/value pair key is unique
ArrayList of objects

STACK FAST MEMORY HOLDING int, bool, char (VALUE TYPES) and POINTERS TO HEAP
HEAP HOLDS LARGER ITEMS classes, strings, array, list etc (reference type)
value type
reference type

namespace {}
assembly EXE / DLL (compiled)
lambda IS ANONYMOUS (NOT NAMED) METHOD!
DoThis(int x,string y) { }
(int x, string y) ==> { }

### C# basics - Variables and Types

Type just means Data Type

```
int
string
char
MyClass   custom TYPE
```

Numeric

```
int  
	reserve 2^32 binary digits to store int
		Int32  
	but!
		what is 2^32 ?  4 billion
	actually NO!  one of these 'bits' reserved to hold + or - sign 
	+ or -  number which is 31 bits
	int ==> max/min value +/- 2 billion
		But!   + number start at  0 .... 2 147 483 647
		       -                 -1     -2 ........648
short
	16 bits		
long 
	64 bits
```

UInt
Positive Number Only
UInt ==> full 32 bits starting at 0 (no minus)

Decimals

## Week 3

# Day 11 : SQL Intro : Northwind And RabbitDatabase

### SQL

Every technology uses SQL

RELATIONAL DATABASE

```
Microsoft    	SQL Structured Query Language

Open Source		MYSQL 

Postgres  		Popular eg Python, other languages

Relational database has TABLES WITH KEYS

	Customers 				Orders 					Order_Details
		CustomerId 				OrderID 				Order_Details_Id
		Name 					Date 					OrderId
		Age 					CustomerId 				ProductId
		.. 						TotalValue				Quantity

	Products
	 	ProductId
	 	Name
	 	Price

	 Id = UNIQUE KEY (PRIMARY KEY)
	 FOREIGN KEY = PRIMARY KEY APPEARING IN ANOTHER TABLE
```

SQL environment

```
Docker lab ==> install 'docker' on local machine
    docker ==> run mini-instance of virtual machine
    docker pull ==> from internet ==> a 'container' running SQL SERVER and connect to it

Today instead Visual Studio also has SQL ENVIRONMENT

	Use this and tap into this.

	Open up 'Labs' solution and View => SQL Server Object Explorer => SQL Server

		View any databases installed

			(localdb)\\mssqllocaldb ....

Trial ==> Install Microsoft Teaching Database 'Northwind'

	GitHub ==> search and download as InstallNorthwind.sql

	Visual Studio ==> File, Open, File ==> <<....sql>> and press 'execute'
```

Basic SQL commands

```
SELECT * from Table

                    where Id = 1 

                    				order by <<field>>  desc
```

Creating our own database

```
create database test
drop   database test

	create/remove whole database

create table ..
drop table ..
```

```
-- Shift focus to built-in database
use master
go -- confirms and executes immediately

drop database if exists testdatabase
go

create database testdatabase
go

use testdatabase
go

-- NULL means entry can be empty
-- NOT NULL means value is required
-- IDENTITY means AUTO CREATE ID WITH NEXT AVAILABLE ID AUTOMATICALLY
-- PRIMARY KEY means unique values required
create table testtable(
	TestTableId INT NOT NULL IDENTITY(100,10) PRIMARY KEY,
	TestName VARCHAR(50) NULL,
	TestAge INT NULL
)

insert into testtable values ('name01',22)
insert into testtable values ('name02',33)
insert into testtable values ('name03',44)

select * from testtable
```

### Connecting To A Database

.NET Framework (older) has some very quick tools to connect to a database
.NET Core is a bit more work

```
INTRO ==> OLDER .Net Framework

	New Project, Console
	Add ==> ADO.NET Entity Framework to project ....

		Server Name (localdb)\\mssqllocaldb
```

```
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lab_25_test_database
{
    class Program
    {
        static void Main(string[] args)
        {
            // 2 things
            // 1 WRAP DATABASE CALL IN 'USING' STATEMENT
            //          USING ==> CLEAN UP CODE AFTERWARDS EVEN
            //                    IF SYSTEM FAILURE
            // 2 NEW INSTANCE OF DATABASE

            // EMPTY LIST TO PUT DATA IN
            List<testtable> itemList = new List<testtable>();

            using (var db = new testdatabaseEntities())
            {
                // LIST OF ITEMS = (CALL THE DATABASE), 
                //                   EXTRACT testtable DATA
                //                   CONVERT OUTPUT TO LIST TYPE
                itemList = db.testtables.ToList();
            }

            // new rabbit
            var newTestItem = new testtable()
            {
                TestName="hey this has been added",
                TestAge=22
            };
            
            using(var db = new testdatabaseEntities())
            {
                db.testtables.Add(newTestItem);
                db.SaveChanges();
                itemList = db.testtables.ToList();
            }

            
            // FOREACH .. PRINT ITEMS
            foreach (var item in itemList)
            {
                Console.WriteLine($"{item.TestName,-15} has an ID of {item.TestTableId,-10}" +
                    $" and is {item.TestAge} years old");
            }

        }
    }
}
```

Repeat whole exercise
Create RabbitDatabase
Table Rabbits
RabbitId
RabbitName
Age
Add some rabbits

```
C# : New Project Console Framework
Add ADO.NET ==> Connect to database
List<rabbit> rabbits = new List<rabbit>()
using(var db = new RabbitEntities){
	rabbits = db.rabbits.ToList();
}
```

# Day 11 : Testing

### Testing

Today testing is not a different discipline to coding

Coders are expected to

```
WRITE TESTS FIRST

CODE AGAINST THEM 

PROVE CODE WORKS!

	Sprint ==> DEFINITION OF 'DONE' MEANS YOUR CODE PASSES THE TESTS

RED 						GREEN  						REFACTOR

Create Tests 				Code so tests PASS  		Performance Improvements
(code fails)
```

Test can never prove YOUR CODE IS FAULTLESS

```
It's IMPOSSIBLE to PROVE your CODE WORKS!

	But!  Tests go a long way to this goal.
```

% Code Coverage = % of your code covered by tests

Writing tests is a little bit like climbing a mountain with safety gear

```
Start ==> SLOW, HARD WORK 

	Higher up - going gets tough!  Serious climbing behind you

	Tests can save you from serious falls by re-establishing existing code works
```

Microsoft libraries

```
1. MSTEST  Built-in library

2. NUnit   excellent testing framework   ==>  use this one in general

3. XUnit   latest
```

```
using System;
using NUnit;
using NUnit.Framework;
using lab_27_test_addition;

namespace lab_26_NUnit_Tests
{
    class Program
    {
        static void Main(string[] args)
        {
            // create code for live demo 
        }
    }

    class NUnit_Tests
    {
        // CREATE UNIFORM TESTING ENVIRONMENT - PERHAPS LOAD STARTUP INFO FROM DATABASE
        [SetUp]
        public void Setup()
        {

        }

        [TestCase(1,2,3)]
        public void TestAdditionDemo(int a, int b, int expected)
        {
            // Arrange - set up test ready to run.  
            //         - create instances of test classes
            var instance = new Addition();

            // Act - run code to get 'actual' value
            var actual = instance.AddTwoNumbers(a, b);

            // Assert - assert.AreEqual(actual,expected);
            Assert.AreEqual(expected, actual);
        }

    }

}
```

# Rabbit Task: SQL Database with WPF Rabbit App

```csharp
### Rabbit 

Class Rabbit{
	RabbitId
	RabbitName
	Age
	DOB  (DateTime)
	isAlive  bool
	Type     string
}

SQL add database RabbitDatabase2 and table and data x 3 records

Build WPF App (Framework)
	add ADO.NET 
	Design a GRID with a LISTVIEW OF RABBITS
```

# Rabbit Lab: Build more complex version of WPF Rabbit Lab

### WPF Rabbit Lab

Goal is to build a slightly more complex rabbit lab

You (class) build

```
SQL
RabbitDatabase2
	Rabbits   id ,name, age, dob, isAlive, type

App

	list of rabbits

		click on rabbit 

			show rabbit
```

Database Steps

1. Create database using SQL and put some sample data inside it

```
use master
go

drop database if exists RabbitDatabase 
go

create database RabbitDatabase
go

use RabbitDatabase
go

create table Rabbits(
	RabbitId int not null primary key identity,
	RabbitName varchar(50) null,
	Age int null,
)

alter table Rabbits add DOB datetime NULL
alter table Rabbits add isActive bit NULL
alter table Rabbits add Type varchar(30) NULL

insert into Rabbits values('Rabbit01',0,'2019-01-01',true,'lapland')

select * from Rabbits
```

1. Use Entity Framework to CONNECT OUR APP TO THIS DATABASE

    EDMX is graphic view

# Morning Review Session: OOP

### Morning Review

OOP
Class : blueprint for creating objects class Dog {}
instance : actual object created from class with 'new' keyword var instance = new Dog();
Abstract class at least one abstract method
Abstract class : cannot instantiate because at least one method empty (abstract)
Abstract method : void DoThis(); has no {} ie code body 'implementation'
Concrete class : normal class which we can instantiate
Class MEMBERS
FIELDS data type private int _x; private = hidden = ENCAPSULATED
PROPERTIES public string Name {get;set;}

```
((FIELD  private string _name;))  
PROPERTIES  public string Name {
	get{
		return this._name;
	}
	set{

	}
			ABSTRACTION: A PUBLIC PROPERTY IS EXPOSED WHICH GRANTS ACCESS INTO 
							PRIVATE MEMBERS/FIELDS.

					Picture : Car
						Driver : clutch, throttle (public)
								==> access inside PRIVATE HIDDEN ENGINE COMPONENTS
					User : Name ========> _name
					    PUBLIC            PRIVATE
}
METHODS :  function but it's also in a class ==> METHOD!
FUNCTION : code which execute a task  DoThis();     

ABSTRACTION : ANY LAYER PROVIDING ACCESS TO INNER COMPONENTS
                     Name (public)            _name(private)
```

static
attaches member to class

```
public CLASS MYCLASS{
		// STATIC   (Still fully writable)
		static int x;
		static void DoThis(){}

		// opposite is INSTANCE MEMBER
		int y;
		void AlsoDoThat(){}
	}

	static Main(){
		// static members  
		MYCLASS.x;
		MYCLASS.DoThis();

		// instance members
		var instance = new MYCLASS();
		instance.y;
		instance.AlsoDoThat();
	}
```

OOP : 4 PILLARS
INHERITANCE Base(parent) class ==> Child(derived) class. Members inherited from parent (base)
down to child (derived). Note : private members and constructors are
not inherited
ENCAPSULATION private keyword hides member (field) private string _nino;
ABSTRACTION public PROPERTY provides access to PRIVATE FIELD public string Name {get;set;}
POLYMORPHISM Parent class has virtual DoThis(){} method
Child class override DoThis(){} method (optional)
ABSTRACT class Parent class abstract DoThis();
Child class override DoThis(){} method (mandatory)

overload - same name different parameters DoThis(int x) DoThis(string y) DoThis(int x, int y)
parameter DoThis(int x) x is parameter (passed IN)
override - same method name different code body (inheritance)

# Naming Conventions

### Naming Conventions

Clases
Noun
PascalCaseLikeThis
Class Mammal
Class Dog : Mammal

Fields
often private
private string _nino; // no validation, _ highlight private nature or just use
_camelCaseLikeThis
camelCaseNoUnderscore

Properties
often Public
Public string FirstName {get;set;}
PascalCaseLikeThis

Methods
VerbSubject
GetFirstName
SetAge
CountTotal
PascalCase in general (could possibly do camelCase if private)

In General

```
Check out Microsoft GitHub StyleCop

DoThis(){

}

	if(x==10) y=5;     // DON'T DO THIS

	if(x==10){         // YES
		y=5;
	}
	Be aware one line methods do work but can 'bite you' later on so beware!

"\\n"  Create New Line
	Officially ==> Cross Platform use 'Environment.NewLine' instead
```

# Variables basics

### Variables

```
Be aware when naming variables we have

alias names (lowercase)
Class names (uppercase)

	var s = new ...

	Primitive types => int, char etc

		int     ALIAS
		Int32   Full Class Name

		string  ALIAS
		String  Class Name

		===> use lower case alias in general

Struct

	Struct is short for 'structure' 

		Used to build our PRIMITIVE TYPES EG INT, BOOL

		Custom 'Struct'

			Think about a STRUCT as A MINI-CLASS

				STRUCT IS A VALUE TYPE, SO USED FOR FAST DATA EG POINTS ON A GRAPH
```

```
using System;

namespace lab_29_variables_continued
{
    class Program
    {
        static void Main(string[] args)
        {
            var Point01 = new PointOnGraph(10,10);
            var Point02 = new PointOnGraph(20,30);
            var Point03 = new PointOnGraph(30,30);
        }
    }
    struct PointOnGraph {
        public int X;
        public int Y;
        // constructor
        public PointOnGraph(int x,int y)
        {
            X = x; // THIS REFERS TO INSTANCE (OPTIONAL)
            Y = y;
        }
    }
}
```

# String.Format options

### String Formatting

```
When we output data it can be useful to display it quickly in the right format

	NO DECIMAL PLACES
	1 DP
	2 DP
	CURRENCY 
	HEX
	EXPONENTIAL 10E5
```

```
// STRING FORMATTING
double num01 = 1.234567;
double num02 = 7.898989;
double long01 = 123456789;
Console.WriteLine($"Here are some numbers");
Console.WriteLine($"No decimal places {num01,-10:N0}{num02,-10:N0}");
Console.WriteLine($"1 DP {num01,-10:N1}{num02,-10:N1}");
Console.WriteLine($"2 DP {num01,-10:N2}{num02,-10:N2}");
Console.WriteLine($"3 DP {num01,-10:N3}{num02,-10:N3}");
Console.WriteLine($"Currency {num01,-10:C}{num02,-10:C}");
Console.WriteLine($"Exponential {long01,-15:E}{long01,-15:E}{long01,-15:E}");
```

# Stopwatch

### Stopwatch

Useful to see how fast your program is running

```
var s = new Stopwatch();
s.Start();

Thread.Sleep(1000);  // milliseconds
int bigNumber = 10_000;
int total = 0;
for(int i = 0; i < bigNumber; i++)
{
   total += i;
}

s.Stop();
Console.WriteLine(s.Elapsed);              // HH:MM:SS.1234567
Console.WriteLine(s.ElapsedMilliseconds);  // 10-3 seconds
Console.WriteLine(s.ElapsedTicks);         // 10-7 seconds
```

# Dates

### Dates

```
// dates
var date01 = new DateTime();
Console.WriteLine($"Default date is {date01}");

var date02 = DateTime.Today;  // MIDNIGHT
var date03 = DateTime.Now;    // NOW

var date04 = new DateTime(2019, 12, 12, 05, 05,00);  // LITERAL y m d h m s

// CHANGE THE TIME
var tomorrow = date02.AddDays(1);
var nextWeek = date02.AddDays(7);

var timeSpan = nextWeek - date02;

Console.WriteLine(timeSpan.ToString());

// PRINTING THE DATE
Console.WriteLine(tomorrow.ToShortDateString());
Console.WriteLine(tomorrow.ToLongDateString());
Console.WriteLine(tomorrow.ToString("dd-MM-yyyy"));
Console.WriteLine(tomorrow.ToString("dd-mm-yyyy"));
Console.WriteLine(tomorrow.ToString("dd-mm-yy"));
Console.WriteLine(tomorrow.ToString("dd-MM-yyyy HH:mm"));
Console.WriteLine(tomorrow.ToString("dd-MM-yyyy HH:mm:ss"));
```

# Enums

### Enum

Enum is a TYPE in C#

```
Enumerate = COUNT

	Array implements IEnumberable because we can COUNT INDEX OF ARRAY ITEMS
	List also
	Stack does not

Enum ...
```

```
using System;

namespace lab_31_enum
{
    class Program
    {
        static void Main(string[] args)
        {
            // ENUM GOOD FOR ITEMS NOT CHANGING
            // daysofweek
            // months of year
            var fruit01 = Fruit.Apple;
            Console.WriteLine(fruit01);  //APPLE
            Console.WriteLine((int)fruit01);  // 0
            Console.WriteLine($"How many fruits?  {(int)Fruit.Count}");

            // enums can be used sometimes in POWERS OF 2 TO GENERATE CODES
            // READ = 1   WRITE = 2  EXECUTE (RUN) = 4

        }
    }

    enum Fruit
    {
        // 0,1,2,3  
        Apple, Pear, Lemon, Strawberry,Count
    }

    enum Vegetables
    {
        onion=10, leek, potato, turnip,
    }

    enum Permissions
    {
        read=1,write=2,execute=4
    }
}
```

# Read Only, Const and Null types

### Read only also Null operators

```
using System;

namespace lab_32_variables_final
{
    class Program
    {

        // readonly IN CLASS FIELD
        readonly public static double PII = 3.1415;
        // PROERTY - USE GET NOT SET // SET WITH CONSTRUCTOR BUT AT NO OTHER TIME
        public DateTime DateOfBirth { get; }

        static void Main(string[] args)
        {
            // const
            const double PI = 3.1415;
            
            var p = new Parent();
            //p.DateOfBirth = DateTime.Now;
            Console.WriteLine(p.DateOfBirth);

            // null
            var emptyString = "";      // box for data but nothing in the box
            string nullString = null;  // points to 'null' element
            Console.WriteLine($"Is an empty string null?  {emptyString==nullString}");

            // null coalesce
            // IF....is null ... do this ... else ... do this
            string databaseItem = null;
            string myItem = databaseItem ?? "invalid value";
            Console.WriteLine(myItem);  // invalid value
            
            databaseItem = "real item";
            myItem = databaseItem ?? "invalid value";
            Console.WriteLine(myItem);  // real item

            databaseItem = null;
            // can't take length of null so will throw excpetion
            //Console.WriteLine(databaseItem.Length);
            // null check
            Console.WriteLine(databaseItem?.Length);  // SAFELY RETURNS NULL 
        }

    class Parent
    {
        public DateTime DateOfBirth { get; }
        public Parent()
        {
            this.DateOfBirth = DateTime.Today;
        }
    }
}
```

# Nullable Types

### Nullable

```
// nullable type
// INTEGERS CANNOT BE NULL!
// BOOLEANS CANNOT BE NULL!
// DOUBLES CANNOT BE NULL!
int num03 = default;  // 0 (not null)
// database NUMBER WHICH IS BLANK ==> 0 ???  INCORRECT AS IT'S A VALUE
int? databaseNumber = null;
bool? databaseIsAlive = null;
double? databasePrice = null;
```

# Tuples

### Tuples

```
using System;

namespace lab_34_tuples
{
    class Program
    {
        static void Main(string[] args)
        {
            DoThis(); // ACTION IE SENDS NO PARAMETERS, RETURNS NOTHING
            string output = AlsoDoThis();

            string output3;
            int output4;
            string output2 = AndThisAlso(out output3, out output4);

            var output5 = FinallyThis();
            Console.WriteLine(output5.Item1);
            Console.WriteLine(output5.Item2);
            Console.WriteLine(output5.output6);
            Console.WriteLine(output5.output7);
            output5.output7 += 5000;
        }

        static void DoThis() { Console.WriteLine("I am doing This"); }
        static string AlsoDoThis() { return "I am also doing this"; }
        static string AndThisAlso(out string output3, out int output4) {
            output3 = "Even this as well";
            output4 = 100;
            return "And this also"; 
        }

        // TUPLES ARE ANONYMOUS OBJECTS 
        static (string output6 ,int output7) FinallyThis() { 
            return ("Finally this",2000); 
        }

    }
}
```

### WPF ListView

<ListView x:Name="ListViewRabbits" Grid.Row="4" Grid.Column="3"
Grid.ColumnSpan="4" Grid.RowSpan="3"
Background="#BCE94F" SelectionChanged="ListViewRabbits_SelectionChanged" >
<ListView.View>
<GridView>
<GridViewColumn Header="ID" Width="50" DisplayMemberBinding="{Binding RabbitId}" />
<GridViewColumn Header="Name" Width="50" DisplayMemberBinding="{Binding RabbitName}" />
<GridViewColumn Header="Age" Width="50" DisplayMemberBinding="{Binding Age}" />
<GridViewColumn Header="DOB" Width="50" DisplayMemberBinding="{Binding DOB}" />
<GridViewColumn Header="isActive" Width="50" DisplayMemberBinding="{Binding isActive}" />
<GridViewColumn Header="Type" Width="50" DisplayMemberBinding="{Binding Type}" />
</GridView>
</ListView.View>
</ListView>

### Friday 31 Jan: Review, Test, Completing WPF Rabbit CRUD App

### Friday 31 Jan - Consolidation Day

### Consolidation Day

Goal is to complete the WPF CRUD operations

Add a rabbit

Edit a rabbit

Delete a rabbit

List and select rabbits

## Week 4

### Monday 3 Feb - Revision

### Entity Summary So Far

### Entity Summary So Far

### Entity Summary

We have seen the power of Entity Framework at work which quickly

```
- Takes a database
- Creates MODELS in our code with which to relate to the database

	RabbitDatabase                  C#
		Rabbits  		====>       Rabbit   class
		RabbitId                    RabbitId  numeric, integer, primary key, autoincrement

		Table is PLURAL             Class is SINGULAR
		Customers                   Customer
		Categories					Category
```

### Entity Code First

### Entity Code First

// Using Entity

To talk to a database we can

a) Use RAW SQL (have not yet done this!)

b) Use older Entity Framework ([ADO.NET](http://ado.net/))

c) Newer .NET Core (using currently)

 

### Entity Code First

```
Database First ==> Tied to database which hold MASTER COPY

Code First ==> 

	a) Initial Build ==> can read from database IF DESIRED  

	b) Once built, your CLASSES BECOME THE MASTER COPY

	c) Update classes ==> can indeed push changes back to database from our code

			CODE FIRST ==> PUSH CHANGES BACK TO DB
```

### Begin Simple ==> Entity Framework (older) using 'Code First' with Northwind

```
(localdb)\\mssqllocaldb	

DbContext  

	One of the imported classes will INHERIT FROM DbContext

		This class is the one which will TALK TO DATABASE

			Connection string  ((either literal or via App.Config XML file))

			DbSet<ClassName> DatabaseTableName {get;set;}

			DbSet<Customer> Customers {get;set;}

			    THIS LINE MAPS OUR CLASS (Customer) to the right table (Customers) 
			    		in the database

	Note
		Scaffolding (automated code from Visual Studio) can CREATE CLASSES FROM DATABASE
				FIRST TIME AROUND	    

	Fluent Api

		Also .NET has an amazing way to describe table relationships.

			We can use a basic model

				class Product{
					int ProductId {get;set;}
					string ProductName {get;set}
					int? CategoryId {get;set;}          int can only take value -1,0,1..
					                                    int? can take -1,0,null,1,2
				    virtual	Category Category {get;set;}    (optional presence)
				     	    (Type)   name                                   	
				}

				class Category{
					int CategoryId {get;set;}
					string CategoryName {get;set;}
				}

			Using this BASIC MODEL WILL WORK FOR MOST INSTANCES OF RELATING TWO TABLES

		But! We can explicitly specify database relationships using FluentApi

			onModelCreating(..modelBuilder){
				modelBuilder.Entity<Customer>()
				.Property(c=>c.ContactName)
				.isRequired();
			}

			The 'dot' syntax is a very handy tool in the LINQ LAMBDA syntax

				.'dot' syntax is METHOD CHAINING ie take output of one method and
						feed as input into next method

				var output = db.Customers
				      .Where(c=>c.city=="Berlin" || c.city=="Frankfurt")
				      .OrderBy(c=>c.city)
				      .ThenBy(c=>c.ContactName)
```

Database Clarification

```
Database 'Context' 
	a) Constructor ==> get connection string and can TALK TO DATABASE
	b) DbSet : IN-MEMORY COPY OF DATABASE TABLES
		eg Customers table 

			DbSet = CACHE ON OUR COMPUTER (COPY)  OF   DATABASE

Main()
	Connect to database
	new INSTANCE OF database 'context' class
		var db = new NorthwindModel(){

			            GET TABLE         AS LIST
			            db.<<TableName>>
			customers = db.Customers.ToList();

		}
```

```
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Diagnostics;

namespace lab_36_Northwind_Code_First
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Customer> customers = new List<Customer>();
            List<Product> products = new List<Product>();

            var customer01 = new Customer();
            customer01.CustomerID = "CUST1";
            customer01.ContactName = "Customer Fred";
            customer01.Print();

            // get customers
            using (var db = new NorthwindModel())
            {
                // get customers: list of customers = get the database, get all customers, put them in the list
                customers = db.Customers.ToList();
                products = db.Products.ToList();

                foreach (var customer in customers)
                {
                    Console.WriteLine($"{customer.CustomerID}  {customer.ContactName}");
                }
                
                // print customers using .Print() method below
                foreach (var customer in customers)
                {
                    customer.Print();
                }

                // delete file if it already exists
                if (File.Exists("customers.csv")){
                    File.Delete("customers.csv");
                }
                // header line
                File.AppendAllText("customers.csv", "Customer,Name" + Environment.NewLine);
                // put data in file
                customers.ForEach(customer => customer.Print());
                products.ForEach(product => product.Print());

                // run file
                Process.Start("EXCEL", "customers.csv");
            }
        }
    }

    // CAN ADD TO CUSTOMER CLASS
    public partial class Customer {
        public void Print() {
            string content = $"{this.CustomerID},{this.ContactName}\\n";  // note: \\n NEW LINE
            // print customer
            Console.WriteLine(content);
            File.AppendAllText("customers.csv", content);
        }

        
    }

    public partial class Product
    {
        public void Print()
        {
            Console.WriteLine($"{ProductID} has name {ProductName}");
        }
    }
}
```

### LINQ Introduction

### LINQ Introduction

### LINQ Intro

LINQ Language Independent Query is a database query language created by Microsoft and it aims to abstract away the database and make C# code consistent, regardless of the back-end database.

```
C#  ==> LINQ => ENTITY => DATABASE
```

LINQ has two forms

```
Query syntax    "Query Comprehension"
(simple form)

or

Lambda syntax   "Extension Methods"
```

### Entity Core Lab Walkthrough

### Entity Core Lab Walkthrough

### Entity Core Database Lab

Goal of this lab is to use

```
Entity Core => Northwind
DBContext
	Customers   standalone

	Products    linked to ...
	Suppliers
```

Note!

```
Stable Core versions 2.1 so libraries here all -v 2.1.1 stable

// Note : at the time of writing the libraries for .NET Core 3.0 were not stable so this
// was the stable version
// Jan 2020 : .NET Core 3.1 is new stable release so in future this will not be necessary

```

### Adding Entity Core To our project

```
1. Add  microsoft.entityframeworkcore -v 2.1.1     (stable)

	a) NUGET   (Tools, Nuget packages, type in name and add right version)
	b) COMMAND LINE 
				Tools, Nuget CONSOLE
					find-package       INTERNET
					get-package        ALREADY INSTALLED
					install-package    YES INSTALL IT
						microsoft.entityframeworkcore.design -v 2.1.1
	c) PROJECT XML FILE (.CSPROJ)
```

Result is in .csproj file

```
<ItemGroup>
    <PackageReference Include="Microsoft.EntityFrameworkCore" Version="2.1.1" />
    <PackageReference Include="microsoft.entityframeworkcore.design" Version="2.1.1" />
    <PackageReference Include="microsoft.entityframeworkcore.sqlserver" Version="2.1.1" />
  </ItemGroup>
```

```
using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.IO;
using System.Diagnostics;

namespace lab_37_northwind_core
{
    class Program
    {
        static List<Customer> customers = new List<Customer>();
        static string CustomersPath = "customers.csv";

        static void Main(string[] args)
        {
            using (var db = new NorthwindDbContext()) {
                customers = db.Customers.ToList();
            }
            PrintCustomers();
            Process.Start("EXCEL", CustomersPath);
        }

        static void PrintCustomers()
        {
            if (File.Exists("customers.csv")) File.Delete("customers.csv");       // start afresh
            File.AppendAllText("customers.csv", "ID,Name,Company,City,Country"
                 + Environment.NewLine);  // header
            // print 5 fields  ID ContactName CompanyName City Country
            customers.ForEach(c =>
            {
                string customerData = $"{c.CustomerID},{c.ContactName},{c.CompanyName}," +
                        $"{c.City},{c.Country}\n";
                Console.WriteLine(customerData);
                // output to csv 5 fields
                File.AppendAllText("customers.csv", customerData);
            });
        }
    }

    // talk to database by using Entity Libraries ( : DbContext)
    class NorthwindDbContext : DbContext
    {
        // connection string
        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            builder.UseSqlServer(@"Data Source=(localdb)\mssqllocaldb; Initial Catalog = Northwind;");
        }

        // DbSet customer
        public DbSet<Customer> Customers { get; set; }
    }

    public partial class Customer
    {
        

        [StringLength(5)]
        public string CustomerID { get; set; }

        [Required]
        [StringLength(40)]
        public string CompanyName { get; set; }

        [StringLength(30)]
        public string ContactName { get; set; }

        [StringLength(30)]
        public string ContactTitle { get; set; }

        [StringLength(60)]
        public string Address { get; set; }

        [StringLength(15)]
        public string City { get; set; }

        [StringLength(15)]
        public string Region { get; set; }

        [StringLength(10)]
        public string PostalCode { get; set; }

        [StringLength(15)]
        public string Country { get; set; }

        [StringLength(24)]
        public string Phone { get; set; }

        [StringLength(24)]
        public string Fax { get; set; }

    }

    class Product
    {

    }

    class Supplier
    {

    }
}
```

### Challenge Overnight : Testing Northwind

### Challenge Overnight: Testing Northwind Database Customers

### Task For Tonight

Can you write some tests for this code?

```
1) Check length of CUSTOMER LIST is correct 91
2) Can you ADD A NEW CUSTOMER AS A TEST?  CHECK LENGTH OF CUSTOMER LIST INCREASES BY 1?
		Note : CustomerID is STRING (5)  PHIL2
		       CompanyName is required
3) Can you then DELETE SAME CUSTOMER AND CHECK LIST RETURNS TO SAME VALUE
```

### Tues 4 Feb : Morning Revision Session

### Morning Revision Session : OOP

### Review

OOP 4 Principles : Inheritance (parent=>child) , Encapsulation (private fields), Abstraction (public properties), Polymorphism (optional override)
Encapsulation : hiding members using private (protected means parent and all child classes)
Member : field, property, method etc
Inheritance : parent (base) => child (derived)
Base Parent
Derived Child
Abstract class : at least one abstract method. Cannot be instantiated
instantiate : create new object from a class template var myinstance = new myClass();
constructor : this method gets run when create new instance. Can populate fields etc.
Concrete class : normal class (can instantiate)
Abstract method : method no code body (implementation) void DoThis();
virtual in base class : virtual method can be overridden
override in derived class : overriding virtual method from base class
Polymorphism : Many Types : virtual in parent and optional override in child
Field : private string _nino; ENCAPSULATE
Property : public string Name {get;set;} ABSTRACTION : user .....abstraction layer... hidden
driver .....gear stick.... engine
Method : Function in a class
Access Modifier : public private protected internal
protected : inside class or any child derived classes
internal : within namespace - within .exe or .dll final compiled bundle of code released.
static member attached to class static void DoThis(){} access via MyClass.DoThis();
instance member attached to instance void DoThis(){} access via instance.DoThis();
sealed : sealed PerfectClass {} cannot have Child : PerfectClass {}

```
public  class PerfectSecurity{
	// very secure code
}

class Child : Perfect {}
```

SQL create database / table
SQL drop database / table
SQL alter structure of db/table

SQL insert rows into table insert into xxx values ('a','b',22,'true')
SQL update one row update myTable set field=value where id=5
SQL select
scrum methodology (way of thinking)
scrum master not 'boss' but more 'servant master' - remove blockers, book meetings
product owner point of contact with customer/client. In charge of 'backlog' REQIREMENTS LIST
dev team 3-9, multiskilled
agile build in stages 'iterations' from most simple to more complex, gradually.
sprint = iteration ==> goal 'new iteration of working software'
stages of software development life cycle - feasibility, requirements gathering/analysis, architecture (high level), detail design (low level), coding (TDD ==> write tests), tests, release, maintain, documentation

### Morning Lab Work In The Class

### Morning Lab Exercise

### Morning Lab

Create a working application (console) using the following keywords

Parent/Child Inheritance
private
public
abstract class & method
virtual / override
sealed class
List of objects (non-trivial)
Add new object to a list, queue and stack
Create a dictionary<int, object> as well
FAST 20 MINS
AVERAGE 35 MINS
DEADLINE 1135 INCLUDING BREAKS SELF-SCORE OUT OF 9 BY 11:35

### Security Overview

### Security Overview

1. Hashing ADD A UNIQUE STRING 'HASH' TO REPRESENT OUR FILE (DETECTS TAMPERING)

    ```
    HASH PASSWORD
     				HASH FILES TO VERIFY UNTAMPERED WITH

     			HASHING IS NON-REVERSIBLE

     			EG 'BCRYPT'
    ```

2. Encryption GARBLE DATA

    ```
    ENCRYPT DATA SO HACKER CAN'T READ IT 
     				ENCRYPTION IS REVERSIBLE
     					2 TYPES OF ENCRYPTION
     						1) SYMMETRIC : ONE KEY ((COMMON EXAMPLE WIFI))
     						2) ASYMMETRIC : TWO KEYS ((VERY SECURE FOR EXAMPLE WEB SERVER : SERVER WILL ENCRYPT WITH 1 KEY, CLIENT (YOU)
     						DECRYPT WITH ANOTHER KEY)
    ```

### LINQ

### LINQ Intro

### LINQ

Yesterday we introduced LINQ but did not use it.

Today we're going to explore LINQ

LINQ has 2 forms of query

```
SIMPLE   'comprehension' syntax

LAMBDA   'extension method' syntax
```

```
// LINQ BASIC (QUERY) SYNTAX 
// NOTE : WOULD HAVE TO CAST THESE OBJECTS TO LIST OR ARRAY TO USE THEM
var customers01 =
    from customer in db.Customers
    select customer;
foreach(var customer in customers01.ToList())
{
    // ... iterate
}

var customers02 =
    from c in db.Customers
    where c.City == "LONDON" || c.City == "BERLIN"
    orderby c.ContactName descending
    select c;

// print
PrintCustomers(customers02.ToList());
```

### LINQ Custom Object Output

### Creating Custom Objects as LINQ output

```
// creating custom output object - LITERAL 

var customList =
    from c in db.Customers
    select new
    {
        Name = c.ContactName,
        City = c.City,
        Country = c.Country
    };
// custom print
Console.WriteLine($"Customer Detail\\n");
Console.WriteLine($"{"Name",-25}{"City",-20}{"Country"}");
customList.ToList().ForEach(item => Console.WriteLine($"{item.Name,-25}" +
    $"{item.City,-20}{item.Country}"));

var customList2 =
    from c in db.Customers
    select new customObject() { Name = c.ContactName, City = c.City, Country = c.Country };

Console.WriteLine($"\\nCustomer Detail\\n");
Console.WriteLine($"{"Name",-25}{"City",-20}{"Country"}");
customList2.ToList().ForEach(item => Console.WriteLine($"{item.Name,-25}" +
   $"{item.City,-20}{item.Country}"));
```

### LINQ Grouping Results

### Grouping Results

At the moment we are only printing customers but what if we wanted to print customers grouped by City?

Yes, we have the column but no clear grouping

```
// creating custom output object - LITERAL 

var customList =
    from c in db.Customers
    select new
    {
        Name = c.ContactName,
        City = c.City,
        Country = c.Country
    };
// custom print
Console.WriteLine($"Customer Detail\\n");
Console.WriteLine($"{"Name",-25}{"City",-20}{"Country"}");
customList.ToList().ForEach(item => Console.WriteLine($"{item.Name,-25}" +
    $"{item.City,-20}{item.Country}"));

var customList2 =
    from c in db.Customers
    select new customObject() { Name = c.ContactName, City = c.City, Country = c.Country };

Console.WriteLine($"\\nCustomer Detail\\n");
Console.WriteLine($"{"Name",-25}{"City",-20}{"Country"}");
customList2.ToList().ForEach(item => Console.WriteLine($"{item.Name,-25}" +
   $"{item.City,-20}{item.Country}"));

// SQL has AGGREGATION ie SUM, COUNT, AVERAGE, MAX AND MIN
// QUERY BY CITY ==> COUNT PER CITY
var customerCountByCity =
    from cust in db.Customers
    group cust by cust.City into Cities
    where Cities.Count() > 1
    orderby Cities.Count() descending
    select new
    {
        City = Cities.Key,
        Count = Cities.Count()
    };

Console.WriteLine($"\\n\\nLIST OF CUSTOMER COUNT BY CITY\\n");
foreach (var item in customerCountByCity.ToList())
{
    Console.WriteLine($"{item.City,-20}{item.Count}");
}

var customerByCity = db.Customers.ToList().OrderBy(c => c.Country).ThenBy(c => c.City);
var customersGroupedByCity = db.Customers.ToList()
    .GroupBy(c => c.City)
    .Where(item => item.Count()>0)
    .OrderByDescending(item=> item.Count())
    .ThenByDescending(item=> item.Key);

Console.WriteLine($"\\n\\nLIST OF CUSTOMER GROUPED BY CITY\\n");
foreach (var item in customersGroupedByCity.ToList())
{
    Console.WriteLine($"{item.Key,-20}{item.Count()}");
}
```

### Wed 5 Feb

### Operators

### Operators

### Operators

Operators are

```
- Unary 		single input

- Binary 		2 inputs

- Ternary  		3 inputs
```

BODMAS

```
(15+2-3/2+3)^2
     -1.5
     18.5 ^2

15*6-4/12
90 - 1/3    89.6667
```

TRUTH TABLES

```
AND    output is high if and only if both inputs are high

		inputs           output
		0       0 			0
		1       0 			0
		0       1			0
		1       1 			1

OR 		output is high if one or more input is high

		0  		0 			0
		1		0  			1
		0 		1  			1
		1		1  			1

XOR  	output is high if only one input high  (Exclusive OR)

		0  		0 			0
		1		0  			1
		0 		1  			1
		1		1  			0
```

```
using System;
using System.Collections;

namespace lab_38_operators
{
    class Program
    {
        static void Main(string[] args)
        {
            // Unary 

            // Increment ++ or --

            // Be very WARY OF THIS OPERATOR
            // SAFE RULE !!!  ALWAYS JUST USE IT ON STANDALONE LINE

            int x = 10;

            
            //  y = x first ie y = 10, then increment x to 11  
            int y = x++;              // y 10    x 11

            Console.WriteLine($"x is {x}, y is {y}");

            // z =   (( increment y first from 10 to 11) ie z = 11
            int z = ++y;              // z 11

            // What are the values of y and z?

            Console.WriteLine($"x is {x}, y is {y} and z is {z}");

            // ! not operator
            var isValid = false;
            isValid = !isValid;   // flip boolean
            Console.WriteLine(isValid);  // true

            // Binary operators

            // BODMAS / BIDMAS

            // MODULUS = REMAINDER

            //  can easily separation fractional parts
            //  3   4/5
            // 19/5
            int a = 19;
            int b = 5;
            Console.WriteLine(a/b);  // integer division
                                     // truncates

            Console.WriteLine(a%b);  // fractional part ie remainder
                                     // of division  ie 3 remainder 4

            // one input must be decimal for output to be decimal

            int c = 19;
            double d = 5.0;   // affect output
            Console.WriteLine(c/d);  // accurate decimal

            // && AND and || OR

            // short circuit !!!

            if (false && false) { }  // will not check second operator

            if (true || true) { }    // will not check second operator

            if (true ^ false) { }    // XOR  will return true

            if (true ^ true) { }     //                  false

            // TERNARY OPERATOR

            if (1 == 1) { }
            else { }

            // replace with

            var output = (1 == 1) ? DoThis() : "output this if false";

            string DoThis() { return "do this if true";  }

        }
    }

    //class test : IEnumerable {
    //    // must implement GetEnumerator
    //    int GetEnumerator() { return -1; }
    //}

}
```

### Interfaces

### Interfaces

### Interfaces

OOP
Encapsulation : hiding private members (fields) private string _privateData;

```
Inheritance : Base Parent => Derived Child

Abstraction : Public Properties provide 'abstracted access' to private hidden inner members  (Think car ==> gear stick abstracts our access to inner gears)

Polymorphism : optional override in child  ( parent marked with 'virtual')

Abstract Class                  abstract class Idea{
	Minimum 1 Abstract Method   abstract void DoThis();
}

	override is mandatory when inheriting from abstract class/method
```

Note :

```
Abstract Class vs              MANDATORY OVERRIDE

Abstraction in OOP             EXPOSING PRIVATE FIELDS USING PUBLIC PROPERTIES
```

When we think of a FAMILY it is normal to belong ONLY TO ONE FAMILY (INHERITANCE)

```
C# INHERITANCE

		Base Parent

			Derived Child

C# ABSTRACT CLASSES

		abstract class patient{                             interface Defibrillator{}
			void MethodY(){}
			abstract MethodZ();
			abstract GetBloodType();
		}

			class Parent{
				// has to implement MethodZ(){}
			}

				class Child

C# INTERFACES : IMPLIED FULLY ABSTRACT (NO CODE).  ALSO FULLY PUBLIC

	  interface IEnumerable{
	  	GetEnumerator(){};    // code this out here
	  }

	  	When a collection IMPLEMENTS THIS INTERFACE (ie voluntarily imports the code)
	  	any METHODS INSIDE MUST BE CODED OUT
```

```
using System;

namespace lab_39_interfaces
{
    class Program
    {
        static void Main(string[] args)
        {

        }
    }

    interface ILawnmower {
        void MowLawn();
    }

    interface ITool02 { }

    interface IEveryoneUsesThis {
        void EveryoneDoesThis();
    }

    class Parent : IEveryoneUsesThis {
        public virtual void EveryoneDoesThis() { }
    }

    // CHILD INHERITS FROM ONE PARENT ONLY BUT IMPLEMENTS (USES) MANY TOOLS/PLUGINS
    class Child : Parent, ILawnmower, ITool02 {
        public void MowLawn() { Console.WriteLine("Child is now mowing lawn safely"); }
    }

}
```

### Microsoft Office

### Microsoft Office

Note : Use .NET Framework

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using [Xceed.Words.NET](http://xceed.words.net/);
using System.Diagnostics;

namespace lab_40b_Microsoft_Office
{
class Program
{
static void Main(string[] args)
{
string fileName = "MicrosoftWordReport.docx";

```
var doc = DocX.Create(fileName);

        doc.InsertParagraph("This is a Microsoft Word Report");

        doc.InsertParagraph("This contains test report data");

        doc.InsertParagraph("5 tests have passed and 2 have failed");

        doc.Save();

        //Process.Start(@"C:\\Program Files(x86)\\Microsoft Office\\root\\Office16\\WINWORD.EXE", fileName);
        Process.Start("WINWORD.EXE", fileName);
    }
}
```

}

### Thurs 6 Feb

### Morning Review

### Morning Review

### Interview Prep

OOP 4 principles
INHERITANCE Base=>Derived
ENCAPSULATION private fields
ABSTRACTION public properties {get;set;}
POLYMORPHISM optional override

static member attached to CLASS static MyMethod() MyClass.MyMethod()
instance member attached to INSTANCE MyMethod() instance.MyMethod()

abstract class cannot be instantiated
concrete class can be instantiated

abstract method has no body implementation and must be implemented in derived class

virtual can be overridden
abstract must be overridden

struct mini class for PRIMITIVE DATA (value type)
enum structured (fixed) list of values

interface : think of as a TOOL WE IMPLMENT

```
inherit from class        (one max)
implement (use) interface (one or more)

fully abstract and fully public
```

agile manifesto
collaboration over negotiation
face to face over other communication
working software over documentation
embrace change over fixed plan

scrum - practical outworking of this

```
sprint - goal to build new ITERATION (SIMPLE=>COMPLEX)
sprint 0 - MVP minimum viable product
4 sprint meetings
	sprint plan  (OVERALL BACKLOG ==> CREATE SPRINT BACKLOG TASKS)
	daily standup : yesterday, today, blocker
	sprint review - of work (invite customer) 
	sprint retrospective - internal review (how to improve)
```

access modified - public private protected (class and derived classes)
internal (final compiled 'assembly' (exe/dll))

```
Compile C# ==> EXE file
			  			any class inside this EXE can reach code which is 'internally' 
			  				protected
```

sealed has no derived child classes

constructor method called when create new instance with 'new' keyword

### Delegates And Events

### Delegates And Events

### Delegates

Function executes code DoThis(){}

Method in class Class Person { void DoThis(){} }

Event

```
EXTERNAL STIMULUS TO OUR PROGRAM
	DATA EVENTS    onStart  .. onEnd..     NOTIFICATIONS 
	SCREEN EVENTS  onClick  onMouseOver  onKeyDown/Up  onHover

	Event created so that it TRIGGER ON OR MORE METHODS

		Methods ==> can HARD CODE THEM AS REGULAR CODE 

			But!

		Modern applications desire often PLUG-IN ABILITY IE LIVE MANIPULATION
			OF ACTIVE TRIGGERED METHODS.  ADD/REMOVE METHODS ON LIVE CODE

Delegate is a CONTAINER OBJECT WHICH IS BLANK BY ITSELF

	IN THIS CONTAINER WE CAN SLOT ONE OR MORE METHODS

	DELEGATE ==> ADD METHODS 01,02,03,04

		EVENT OCCURS == RUN METHODS 01,02,03,04 IN ORDER

Defining a DELEGATE

	Event ==>          void Method01(int x){}
	                   void Method02(int x){}
	                   void Method03(int x){}

	1) public delegate void MyDelegate(int x);

       // declare an event called 'MyEvent' which can only trigger methods
       // of this given type ie  return void and input one parameter (int)
	2) event MyDelegate MyEvent;

	3) // add methods
	   MyEvent += Method01;    // call this a 'placeholder' ('callback') so omit
	   MyEvent += Method02;    // brackets to avoid calling method straight away
	   MyEvent += Method03;

	4) trigger event
		MyEvent();   ==> run all 3 methods with () brackets
```

```
using System;

namespace lab_41_delegates
{
    class Program
    {
        public delegate void Delegate01();
        public delegate void Delegate03(int x, int y);
        static void Main(string[] args)
        {
            // var delegate01 = new Delegate();

            var delegate02 = new Delegate01(Method01);
            delegate02 += Method02;
            delegate02 += Method03;
            // NOTHING IS RUNNING!!!
            // TO RUN , CAN CALL DELEGATE WITH BRACKETS
            delegate02();

            var delegate03 = new Delegate03(Method04);
            delegate03(10,100);

            // MOST COMMON DELEGATE TYPE IS TYPE OF void MyDelegate();  
            // IE NO INPUTS, NO OUTPUTS  ==> ACTION DELEGATE!!!
            var delegate04 = new Action(Method01);
            // often see word 'Action()' in code ==> POINTER TO METHOD TYPES OF Void DoThis();

        }

        static void Method01() {
            Console.WriteLine("In Method01");
        }
        static void Method02()
        {
            Console.WriteLine("In Method02");
        }
        static void Method03()
        {
            Console.WriteLine("In Method03");
        }
        static void Method04(int x, int y)
        {
            Console.WriteLine($"Method 04 inputs {x} and {y}");
        }
    }
}
```

### Events

```
using System;

namespace lab_42_events
{
    class Program
    {

        public delegate string MyDelegate(string x, string y);
        public static event MyDelegate MyEvent;

        static void Main(string[] args)
        {
            // ADD METHODS
            MyEvent += DoThis;
            MyEvent += DoThat;
            MyEvent += DoThis;

            // NOTHING HAPPENS YET
            // TRIGGER
            Console.WriteLine(MyEvent("Fred", "Flintstone"));

        }

        static string DoThis(string a, string b)
        {
            return "Hello " + a + " " + b;
        }
        static string DoThat(string a, string b)
        {
            return "Goodbye " + a + " " + b;
        }
    }
}
```

### OOP EVENTS

```
using System;

namespace lab_42_events
{
    class Program
    {

        public delegate string MyDelegate(string x, string y);
        public static event MyDelegate MyEvent;

        static void Main(string[] args)
        {
            // ADD METHODS
            MyEvent += DoThis;
            MyEvent += DoThat;
            MyEvent += DoThis;

            // NOTHING HAPPENS YET
            // TRIGGER
            Console.WriteLine(MyEvent("Fred", "Flintstone"));

        }

        static string DoThis(string a, string b)
        {
            return "Hello " + a + " " + b;
        }
        static string DoThat(string a, string b)
        {
            return "Goodbye " + a + " " + b;
        }
    }
}
```

### Tasks

### Tasks

### Tasks

Introduction

Process	EXE (view running processes in Task Manager)

Thread	Set of instructions sent to CPU for processing

Instruction Set	CPU hard programming : set of instructions used to process code
Assembly Language Raw instructions sent

Application	Runs by USER after LOGON on DEMAND

Service	Runs by COMPUTER after STARTUP (24/7)

Single Threaded	one core

Multi-Threaded	multiple cores

Note!	Problem in traditional computing is CPU IS MOSTLY IDLE

```
Virtual Computing ==> INCREASE WORKLOAD ON HARDWARE TO USE %CPU
						MORE EFFICIENTLY
```

### Fri 7 Feb

### SQL, SQLite, Entity And Entity Core

### SQL, SQLite, Entity and Entity Core

### SQL

SQL has GROUPS OF COMMANDS

DML Data Manipulation Language

```
SELECT
INSERT
UPDATE
DELETE
```

DDL Data Definition Language : STRUCTURES

```
CREATE/DROP    	tables and databases
ALTER
TRUNCATE  		remove data without changing structure
```

DCL Data Control Language : PERMISSIONS

```
GRANT
REVOKE
```

TCL Transaction Control : TRANSACTION = BATCH OF COMMMANDS RUN TOGETHER : ALL OR NOTHING FOR
THE WHOLE BATCH

```
COMMIT     (whole group of commands)
ROLLBACK   (whole batch to start)
SAVEPOINT  (part-way midpoint so data not lost to this point)
```

Where are database files stored?

```
1) (localdb)\\mssqllocaldb  ==> PATH OF C:\\USERS\\<<YOU>>\\MyDatabase.mdf

		mdf = Microsoft Database File (stored in root of your profile) 

2) On another server

	Reach using tool 

		SQL Server Management Studio
		Azure Data Studio

	IP of remote computer 1.2.3.4:1433   which is standard SQL port (can change)

3) SQL server running on 'instance' of DOCKER which runs MINI-VIRTUAL-MACHINE plus SQL SERVER
		ALREADY FULLY CONFIGURED WITH ALL THE DATA!

		a) Download docker desktop for windows 
		b) Install
		c) Add your user to Docker Users Group  (Computer Management, Groups)
		d) Run docker (icon shows on Taskbar)
		e) ((may have to create account online at some point))
		f) Pull image from internet
			docker pull kcornwall/sqlnorthwind
		g) Run image
			docker run -d --name sql -p 1433:1433 kcornwall/sqlnorthwind
		h) Check running images
		    docker ps                RUNNING
		    docker ps -a             ALL IE RUNNING AND NOT RUNNING
		i) Stop / Start
		    docker stop/start   sql
		j) Connect to SQL SERVER hidden inside this DOCKER 'CONTAINER' WHICH IS NOW RUNNING
				[SQL     ..inside, SQL SERVER WITH DATA...... ]

			SQL Server Management Studio 

			or

			Azure Data Studio

				Server     localhost, 1433
				User       SA
				Pass       Passw0rd2018

4) On the cloud ie internet

	Example : Azure

		Note : 30 day free trial so we will leave this for today

	But!

		Access these databases via Visual Studio

			<<Office Enterprise Trial E5>>
```

Creating data

### Data Types Available

```
-- system database
use master
go

-- create database
drop database if exists Users
go
create database Users
go
use Users
go

-- create Users and Categories
create table TestTypes(
   Id INT PRIMARY KEY IDENTITY NOT NULL, 
   TestName VarChar(50) NULL,           --VARCHAR HAS 8 BITS OF DATA (255 max)
   TestComplexName NVarChar(50) NULL,   --NVARCHAR HAS 16 BITS OF DATA
   isValid BIT NULL,                    -- 1/0
   DateOfBirth DATE NULL,                -- DATE/TIME/DATETIME
   LogoImage BINARY NULL,
   ComplexNumber FLOAT NULL,
   MoneyNumber DECIMAL NULL,
   MoneyAlso  MONEY NULL,
   FixedStringLength CHAR(5) NULL,       -- fixed length 5          
)
```

```
-- system database
use master
go

-- create database
drop database if exists Users
go
create database Users
go
use Users
go

-- create Users and Categories
create table Users(
   UserId INT NOT NULL PRIMARY KEY IDENTITY(1,1),
   UserName VARCHAR(50) NULL,
   DateOfBirth DATE NULL,
   isValid BIT NULL
)

INSERT INTO USERS VALUES ('fred','2020-10-10','true')
INSERT INTO USERS VALUES ('bill','2020-10-10','true')
INSERT INTO USERS VALUES ('wilma','2020-10-10','true')

SELECT * FROM USERS 

create table Categories(
  CategoryId INT NOT NULL PRIMARY KEY IDENTITY,
  CategoryName VARCHAR(50) NULL
)

INSERT INTO CATEGORIES VALUES ('admin')
INSERT INTO CATEGORIES VALUES ('work')
INSERT INTO CATEGORIES VALUES ('personal')

SELECT * FROM Categories
```

### Relating Tables

We can relate tables with FOREIGN KEY

```
Customers
	CustomerId
	SupplierId 		FOREIGN KEY

Suppliers
	SupplierId 		PRIMARY KEY
```

```
-- system database
use master
go

-- create database
drop database if exists Users
go
create database Users
go
use Users
go

-- create Users and Categories

create table Categories(
  CategoryId INT NOT NULL PRIMARY KEY IDENTITY,
  CategoryName VARCHAR(50) NULL
)

create table Users(
   UserId INT NOT NULL PRIMARY KEY IDENTITY(1,1),
   UserName VARCHAR(50) NULL,
   DateOfBirth DATE NULL,
   isValid BIT NULL,
   CategoryId INT NULL FOREIGN KEY REFERENCES Categories(CategoryId)
)

INSERT INTO CATEGORIES VALUES ('admin')
INSERT INTO CATEGORIES VALUES ('work')
INSERT INTO CATEGORIES VALUES ('personal')

INSERT INTO USERS VALUES ('fred','2020-10-10','true',1)
INSERT INTO USERS VALUES ('bill','2020-10-10','true',2)
INSERT INTO USERS VALUES ('wilma','2020-10-10','true',3)

SELECT * FROM USERS 
SELECT * FROM Categories

-- SQL JOIN SIMILAR TO LINQ 
SELECT * FROM USERS 
JOIN Categories
ON Users.CategoryId = Categories.CategoryId

SELECT UserId,UserName,isValid, CategoryName from USERS 
INNER JOIN Categories
ON Users.CategoryId = Categories.CategoryId
```

### Connecting to SQL with Entity Framework (easier option)

((Can use this for your WPF app this weekend))

WPF Project ==> Add => Item => [ADO.NET](http://ado.net/) ....

```
<Window x:Class="lab_44_WPF_Entity_Users_Categories.MainWindow"
        xmlns="<http://schemas.microsoft.com/winfx/2006/xaml/presentation>"
        xmlns:x="<http://schemas.microsoft.com/winfx/2006/xaml>"
        xmlns:d="<http://schemas.microsoft.com/expression/blend/2008>"
        xmlns:mc="<http://schemas.openxmlformats.org/markup-compatibility/2006>"
        xmlns:local="clr-namespace:lab_44_WPF_Entity_Users_Categories"
        mc:Ignorable="d"
        Title="MainWindow" Height="Auto" Width="Auto">
    <Grid Background="#FFF7F6D5">
        <Grid.ColumnDefinitions>
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
            <ColumnDefinition Width="*" />
        </Grid.ColumnDefinitions>
        <Grid.RowDefinitions>
            <RowDefinition Height="2*" />
            <RowDefinition Height="*" />
            <RowDefinition Height="10*" />
            <RowDefinition Height="*" />
        </Grid.RowDefinitions>
        <Label x:Name="LabelHeading" Grid.Row="0" Grid.Column="1" HorizontalContentAlignment="Center" 
               VerticalContentAlignment="Center" Grid.ColumnSpan="3" 
               Content="Users And Categories" FontSize="25" Background="#FFF4E7D4"/>
        <ListBox x:Name="ListBox01" Grid.Row="2" Grid.Column="1" Background="#FFF7ECD7" 
                 SelectionChanged="ListBox01_SelectionChanged"
                 MouseDoubleClick="ListBox01_MouseDoubleClick"  />
        <ListBox x:Name="ListBox02" Grid.Row="2" Grid.Column="2" Background="#FFF4EBDE" SelectionChanged="ListBox02_SelectionChanged"/>
        <ComboBox x:Name="ComboBoxCategories" Grid.Row="1"
                  Grid.Column="4" SelectionChanged="ComboBoxCategories_SelectionChanged"   
                  />
    </Grid>
</Window>
```

```
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

namespace lab_44_WPF_Entity_Users_Categories
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        List<User> users = new List<User>();
        List<Category> categories = new List<Category>();
        User user = new User();
        Category category = new Category();
        bool EditUser = false;

        public MainWindow()
        {
            InitializeComponent();
            Initialise();
        }
        void Initialise()
        {
            using(var db = new UsersCategoriesModel())
            {
                users = db.Users.ToList();
                categories = db.Categories.ToList();
            }
            ListBox01.ItemsSource = users;
            ListBox02.ItemsSource = categories;
            ListBox01.DisplayMemberPath = "UserName";
            ListBox02.DisplayMemberPath = "CategoryName";
            ComboBoxCategories.ItemsSource = categories;
            ComboBoxCategories.DisplayMemberPath = "CategoryName";
            ComboBoxCategories.IsReadOnly = true;
            ComboBoxCategories.AllowDrop = false;
        }

        private void ListBox01_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (ListBox01.SelectedItem != null)
            {
                user = (User)ListBox01.SelectedItem;
               
               
                // display user category in combo
                ComboBoxCategories.Text = user.Category.CategoryName;
               
              
            }

        }

        private void ListBox02_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {

        }

        private void ListBox01_MouseDoubleClick(object sender, MouseButtonEventArgs e)
        {
            // not working 
            ListBox01.Background = Brushes.Orange;
            // set boolean EditUser = true
            EditUser = true;

        }

        private void ListBox01_MouseDoubleClick_1(object sender, MouseButtonEventArgs e)
        {

        }

        private void ComboBoxCategories_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            if (ComboBoxCategories.SelectedItem == null)
            {
                return;
            }
            category = (Category)ComboBoxCategories.SelectedItem;
            if (EditUser && user != null)
            {
                using (var db = new UsersCategoriesModel())
                {
                    var userToUpdate = db.Users.Find(user.UserId);
                    // update category
                    userToUpdate.CategoryId = category.CategoryId;
                    db.SaveChanges();
                    // clear list box
                    ListBox01.ItemsSource = null;
                    // re-display list box
                    users = db.Users.ToList();
                    ListBox01.ItemsSource = users;
                    MessageBox.Show($"User {user.UserName} category changed to " +
                        $"{userToUpdate.Category.CategoryName}");
                    // also update second categories
                    ListBox02.ItemsSource = null;
                    categories = db.Categories.ToList();
                    ListBox02.ItemsSource = categories;
                    EditUser = false;
                    ListBox01.Background = Brushes.White;
                }
            }
        }
    }
}
```

### Entity Core

To connect the same database to an Entity Core app we can use the following

Project => New => Console Core

// add entity libraries

microsoft.entityframeworkcore/design/sqlserver/sqlite

```
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Sqlite;
using System.Linq;

namespace lab_45_entity_core_sql_sqlite
{
    class Program
    {
        static List<User> users = new List<User>();
        static List<Category> categories = new List<Category>();

        static void Main(string[] args)
        {
            // use database
            using (var db = new UserDatabaseContext())
            {
                users = db.Users.ToList();
                categories = db.Categories.ToList();
            }
            users.ForEach(u => Console.WriteLine($"{u.UserId,-10}"));

        }
    }

    // talk to database
    public class UserDatabaseContext : DbContext
    {
        // db set to map tables to c# classes
        public DbSet<User> Users { get; set; }
        public DbSet<Category> Categories { get; set; }

        // connection string
        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            builder.UseSqlServer(@"Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Users;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");

            // if sqlite

            //builder.UseSqlite(@"C:\\2020-01-c-sharp-labs\\SQLite\\test.db");
        }

    }

    public class User
    {
        public int UserId { get; set; }

        [StringLength(50)]
        public string UserName { get; set; }

        [Column(TypeName = "date")]
        public DateTime? DateOfBirth { get; set; }

        public bool? isValid { get; set; }

        public int? CategoryId { get; set; }

        public virtual Category Category { get; set; }
    }

    public class Category
    {
        public Category()
        {
            Users = new HashSet<User>();
        }

        public int CategoryId { get; set; }

        [StringLength(50)]
        public string CategoryName { get; set; }

        public virtual ICollection<User> Users { get; set; }
    }

}
```

```
SQLITE

C:\2020-01-c-sharp-labs\SQLite>sqlite3

sqlite> .databases
main:

C:\2020-01-c-sharp-labs\SQLite>sqlite3 test.db

sqlite> .databases
main: C:\2020-01-c-sharp-labs\SQLite\test.db
sqlite> .tables
sqlite> .open test.db
sqlite> .tables
sqlite> create table testTable(testId int primary key,testName varChar(10));
sqlite> insert into testTable values (1, 'bob');
sqlite> insert into testTable values (2, 'tim');
sqlite> insert into testTable values (3, 'paul');
sqlite> select * from testTable;
1|bob
2|tim
3|paul
sqlite> create table Users(UserId integer primary key not null, UserName varChar(50) null, isActive bit null, DateOfBirth date null);
sqlite> insert into Users values ('tim','true','2018-01-01');
Error: table Users has 4 columns but 3 values were supplied
sqlite> drop table Users;
sqlite> create table Users(UserId integer primary key, UserName varChar(50) null, isActive bit null, DateOfBirth date null);
sqlite> insert into Users values ('tim','true','2018-01-01');
Error: table Users has 4 columns but 3 values were supplied
sqlite> insert into Users (UserName,isActive,DateOfBirth) values ('tim','true','2018-01-01');
sqlite> insert into Users (UserName,isActive,DateOfBirth) values ('bob','false','2018-01-01');
sqlite> insert into Users (UserName,isActive,DateOfBirth) values ('paula','false','2019-02-20');
sqlite> select * from Users
   ...> ;
1|tim|true|2018-01-01
2|bob|false|2018-01-01
3|paula|false|2019-02-20
sqlite> insert into Users (UserName,isActive,DateOfBirth) values ('paulette',false,'2019-02-20');
sqlite> select * from Users;
1|tim|true|2018-01-01
2|bob|false|2018-01-01
3|paula|false|2019-02-20
4|paulette|0|2019-02-20
```

## Week 5 - Databases And Introduction To Web

### Mon 10 Feb

### HTML CSS and Javascript Intro

### HTML CSS and Javascript Intro

```sql
### HTML CSS and Javascript Intro

Before we move back onto raw SQL I want to show you a little glimpse of how we use databases to build a website using Microsoft framework technology.

Goal 

	1) Build website
	2) Connect our database
	3) Display some data

Websites
	HTML       <html>  <h1>Header</h1>  <p>Paragraph</p>     </html>
				Hyper Text Markup Language

	CSS        <style> #thisSection{font-weight:bold;}       </style>

				CSS is used for STYLING our page ie colours, fonts, 
						backgrounds, hover effects, image fade
						animations, change position depending on type
						or size of screen.   Used also for laying out
						screen BANNER (flexbox) or GRID (grid)

				Cascading Style Sheets

	Javascript  <script> function DoThis(){ alert('hello'); }  </script>

			Javascript allows live code on web page
				Graphics on fly, add/remove items from page, create
				CSS effects in code. Call data (API or AJAX 'call') to page

						API = Application Programming Interface
						AJAX = Asynchronous Javascript And XML

	Bootstrap   set of libraries which allow us to create a page very 
					quickly with all of the basic styling already done for us

						Headers, buttons, images all styled nicely with 
						minimum coding

						Bootstrap = set of pre-built CSS styles

	<!DOCTYPE html>   the type of html inside this page is new HTML5 type

	ASP  				Active Server Pages
	
	ASP MVC   			Special type of web page tapping in to database data
						M = MODEL (DATA, CLASS, TABLE IN DATABASE)
						V = VIEW  (PAGE)
						C = CONTROLLER (LOOK AT URL OF PAGE AND DECIDE
											A) WHICH DATA (MODEL) TO USE
											B) WHICH PAGE TO DISPLAY THE VIEW

DEMO

	ASP SITE  	
		Razor   
	MVC SITE

		WITH DATA!

```

HTML, CSS and Javascript Intro Web Page

```sql
<!DOCTYPE html>
<html>
<head>
	<title>My Web Page</title>
	<style>
		/* all elements */
		html{
			background-color: #def;
			font-family: Arial, Verdana;
			font-size: 1.5em;
		}
		/* all paragraphs eg 1.5 times normal size*/
		p{
			/* font-size: 1.5em; */
			/* font-size: 0.5em; */
		}
		h1{
			font-size:40px;   /* not responsive */
		}
		/* latter rule override former rule */
		/* but 'layers of specificity which trump this eg #(id) stronger than .(class)' 
		CSS Selector 
		ID - ONE ON PAGE 
		   <p id = "x">	In CSS ==> target this with   #x {} */
		#header-main{
			text-decoration: underline;
		}

		/* CLASS - MANY ON PAGE 
           <p class="y"> */
        .list-item{
        	background-color: #eee;
        	color: #456;
        }
        .image-gallery {
        	border: 3px solid #aaa;
        	padding: 20px;
        }
        /* margin x-direction y-direction */
        img{
        	margin: 10px 20px ;
        }
		
	</style>

</head>
<body>
	<h1 id="header-main">Header</h1>
	<p>Paragraph</p>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non magna in leo interdum efficitur vel dignissim diam. Proin laoreet velit sed molestie pellentesque. Cras turpis metus, eleifend eget iaculis lobortis, sodales et lorem. </p>
	<!-- List -->
	<ul>
		<p>Test List</p>
		<!-- Item -->
		<li class="list-item">One</li>
		<li class="list-item">Two</li>
		<li class="list-item">Three</li>
	</ul>
	<!-- ordered list -->
	<ol>
		<li class="list-item">A</li>
		<li class="list-item">B</li>
		<li class="list-item">C</li>
	</ol>
	<!-- self-closing -->
	<!-- image with source url and height in pixels (pixel = dot on screen) -->
	<!-- div = division = container with no other use -->
	<div class="image-gallery">
		<img src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg" height="100" width="150" /> 
		<img src="https://picsum.photos/150/100?random=1">
		<img src="https://picsum.photos/150/100?random=2">
		<img src="https://picsum.photos/150/100?random=3">
		<img src="https://picsum.photos/150/100?random=4">
		<img src="https://picsum.photos/150/100?random=5">
		<img src="https://picsum.photos/150/100?random=6">
		<img src="https://picsum.photos/150/100?random=7">
		<img src="https://picsum.photos/150/100?random=8">
		<img src="https://picsum.photos/150/100?random=9">
		<img src="https://picsum.photos/150/100?random=10">
		<img src="https://picsum.photos/150/100?random=11">
		<img src="https://picsum.photos/150/100?random=12">
	</div>
	<!-- Javascript best at foot of body so runs AFTER PAGE HAS LOADED -->
	<script>
		// outside function ==> GLOBAL SCOPE ACROSS FULL APPLICATION
		var x = 1;
		y=1;  // also (by error) declare global variable
		console.log(x);
		console.log(y);
		// semicolons not needed!
		console.log('no semicolons on this line')
		/* .. to be continuned !!! */
	</script>
</body>
</html>
```

### Tues 11 Feb

### Revision

### Revision

### Revision

Delegate - placeholder for 1 or more methods
delegate void MyDelegate(); // Action Delegate does an ACTION but no IN/OUT
action MyAction();
delegate string MyDelegate(int x, bool y, DateTime z, string z);

Event
event MyDelegate MyEvent;

```
Add methods (can be at runtime like plugins)

	MyEvent += Method01;
	MyEvent -= Method02;
```

Javascript
button
.addEventListener('click',function(){})
onclick="DoThis()" //shorthand version

Sealed class has no derived class
null coalesce operator ?? var output = input ?? defaultvalue
// variable output. If input is null then
output is defaultvalue. If input is not null
then output = input.

```
7 ?? 70   ==> 7
					  			null ?? 'hi' ==> 'hi'
```

nullable type
int?
bool?
double?
extra permitted value of null -1,0,null,1,2,3

Class

Child : Parent {} // INHERIT FROM ONE

abstract class Idea {
abstract void DoThis();
void AlsoDoThis(){} // regular non-abstract method
}
class Holiday : Idea{
// must implement DoThis
override void DoThis(){}
}

Interfaces : FULLY ABSTRACT CLASSES WITH FULLY ABSTRACT METHODS ONLY
Interfaces : NOTE CAN IMPLEMENT MANY INTERFACES (NOT JUST ONE)
interface ITool01{
void IDoThis01();
}

// IMPLEMENT THIS INTERFACE
class AnyClass : ITool01 {
public void IDoThis01(){}
}

Thread : set of instructions sent to CPU
Process : EXE file running in memory - send threads to be executed
Library : DLL - set of classes/methods which we can make available for others
applications to use
Task : abstraction over threading to make it easier for developer to use
Async..await

Main(){
GetDataAsync(); // not pause execution here
}

async void GetDataAsync(){
await GetHttpDataAsync(); // this line identifies the operation which will
// take a while
}

### SQL continued

### SQL Continued

```sql
### SQL

Getting metadata help about our databases and tables

// let's create and connect to a database

// create script to fully automate this T-SQL   Create_ToDo_Users_Categories.sql
ToDoDatabase

ToDoItems
	ToDoItemId
	ToDoItemName
	StartDate
	isDone
	UserId
	CategoryId

Users
	UserId
	UserName

Categories
	CategoryId
	CategoryName

Add 3 rows to each table

```sql
use master 
go

drop database if exists ToDoDatabase 
go

create database ToDoDatabase
go
use ToDoDatabase

CREATE TABLE users(
	UserId INT NOT NULL PRIMARY KEY IDENTITY,
	UserName VARCHAR(50) NULL
)
CREATE TABLE categories(
	CategoryId INT NOT NULL PRIMARY KEY IDENTITY,
	CategoryName VARCHAR(50) NULL
)
CREATE TABLE ToDoItems(
	ToDoItemId INT NOT NULL PRIMARY KEY IDENTITY,
	ToDoItemName VARCHAR(50) NULL,
	StartDate DATE NULL,
	isDone BIT NULL,
	UserId INT NULL FOREIGN KEY REFERENCES Users(UserId),
	CategoryId INT NULL FOREIGN KEY REFERENCES Categories(CategoryId)
)

INSERT INTO USERS VALUES ('bob')
INSERT INTO USERS VALUES ('tim')
INSERT INTO USERS VALUES ('paul')
INSERT INTO CATEGORIES VALUES ('admin')
INSERT INTO CATEGORIES VALUES ('users')
INSERT INTO CATEGORIES VALUES ('personal')
INSERT INTO ToDoItems VALUES ('first item','2020-02-02','false',1,1)
INSERT INTO ToDoItems VALUES ('second item','2020-02-02','false',2,2)
INSERT INTO ToDoItems VALUES ('third item','2020-02-02','false',3,3)

select todoitemid, todoitemname, CategoryName, UserName, isDone from todoitems
join categories on ToDoItems.CategoryId = categories.CategoryId
join users on ToDoItems.UserId = users.UserId

```

// showing tables, primary keys and foreign keys

SP_HELP can be used to show table meta data  (must be first line)

// show databases

-- select all databases on your computer
select 'select all databases'
select * from sysdatabases

-- select all tables in present database in use
use ToDoDatabase
go
select * from sys.tables

-- show all columns for a table
select * from INFORMATION_SCHEMA.COLUMNS where TABLE_NAME = 'ToDoItems'
-- all objects
select * from sys.objects 

// alter table
// add column
ALTER TABLE Users ADD UserAge varchar(50) null
// edit column
ALTER TABLE Users ALTER COLUMN UserAge INT NULL

```sql
ALTER TABLE Users ADD UserAge varchar(50) null
ALTER TABLE Users ALTER COLUMN UserAge INT NULL
UPDATE Users Set UserAge = 22 where UserId = 1;

select todoitemid, todoitemname, CategoryName, 
   UserName person_name, isDone, StartDate, 
   ToDoItems.CategoryId as ID, UserAge  from todoitems
join categories on ToDoItems.CategoryId = categories.CategoryId
join users on ToDoItems.UserId = users.UserId

select * from INFORMATION_SCHEMA.COLUMNS
```

### Deleting

DELETE FROM mytable where id=22

### top 
Can select just a few items
```

### ToDo Database with Users and Categories

```sql
use master 
go

drop database if exists ToDoDatabase 
go

create database ToDoDatabase
go
use ToDoDatabase

CREATE TABLE users(
	UserId INT NOT NULL PRIMARY KEY IDENTITY,
	UserName VARCHAR(50) NULL
	
)
CREATE TABLE categories(
	CategoryId INT NOT NULL PRIMARY KEY IDENTITY,
	CategoryName VARCHAR(50) NULL
)
CREATE TABLE ToDoItems(
	ToDoItemId INT NOT NULL PRIMARY KEY IDENTITY,
	ToDoItemName VARCHAR(50) NULL,
	StartDate DATE NULL,
	isDone BIT NULL,
	UserId INT NULL FOREIGN KEY REFERENCES Users(UserId),
	CategoryId INT NULL FOREIGN KEY REFERENCES Categories(CategoryId)
)

INSERT INTO USERS VALUES ('bob')
INSERT INTO USERS VALUES ('tim')
INSERT INTO USERS VALUES ('paul')
INSERT INTO CATEGORIES VALUES ('admin')
INSERT INTO CATEGORIES VALUES ('users')
INSERT INTO CATEGORIES VALUES ('personal')
INSERT INTO ToDoItems VALUES ('first item','2020-02-02','false',1,1)
INSERT INTO ToDoItems VALUES ('second item','2020-02-02','false',2,2)
INSERT INTO ToDoItems VALUES ('third item','2020-02-02','false',3,3)

ALTER TABLE Users ADD UserAge varchar(50) null
ALTER TABLE Users ALTER COLUMN UserAge INT NULL
UPDATE Users Set UserAge = 22 where UserId = 1;

select todoitemid, todoitemname, CategoryName, 
   UserName person_name, isDone, StartDate, 
   ToDoItems.CategoryId as ID, UserAge  from todoitems
join categories on ToDoItems.CategoryId = categories.CategoryId
join users on ToDoItems.UserId = users.UserId

select * from INFORMATION_SCHEMA.COLUMNS
```

### Northwind

```sql
select top 5 * from customers
select top 5 * from customers order by customerid desc

-- quiz : find count of employees in London
select count(*) from employees where city='London'
-- find all titles of courtesy given to employees
select * from employees
select Employees.TitleOfCourtesy from Employees
select count(TitleOfCourtesy) from Employees
select count(distinct TitleOfCourtesy) from Employees
-- how many 'dr.' employees exist?
select count(TitleOfCourtesy) AS NumberOfEmployees from employees 
	where TitleOfCourtesy = 'Dr.'
-- how many discontinued products exist
select * from Products
select count(*) from Products where Discontinued=1

-- offset = skip
-- first 5 customers
select top(5) * from customers
-- next 5 customers
select *  from customers order by customerid 
	offset 5 rows 
	fetch next 5 rows only
-- next 5 customers
select *  from customers order by customerid 
	offset 10 rows 
	fetch next 5 rows only

-- how many products with categoryid = 1 and discontinued?  
select count(*) from products where categoryid=1 and discontinued=1 -- 1
-- how many products with items in stock and unitprice > 29.99
select count(*) from products where unitsinstock>0 and unitprice>29.99 --22
-- order the above list to show products ordered by unit price descending
select products.unitprice, ProductName from products where unitsinstock>0 and unitprice>29.99 
	order by unitprice desc
-- how many distinct countries exist in customers table?
select count (distinct country) from customers --21
-- how many distinct cities exist in customers table?
select count (distinct city) from customers --69

-- LIKE
-- % is a wildcard for anything   %a%   contains a
--                                 a%   starts with
--                                 %a   ends with

-- _ is a wildcard for ONE CHARACTER

-- how many products contain 'ch'
select * from products where ProductName LIKE '%ch%'
select count(*) from products where ProductName LIKE '%ch%' -- 14

-- how many regions contain the letter 'a' in Customers
select count(*) from customers where region LIKE '%a%'  -- 8

-- how many regions start with a
select count(*) from customers where region LIKE 'a%'  -- 1
-- how many regions end with a
select count(*) from customers where region LIKE '%a'  -- 1

-- NOT LIKE reverses the query

-- how many products do not contain 'ch'
select count(*) from products where ProductName NOT LIKE '%ch%' -- 63

-- using _ UNDERSCORE to represent SINGLE CHARACTER WILDCARD

-- how many regions have 'A' as second letter (first letter wildcard)
select region, * from customers where region LIKE '_a%'

-- OR but for long lists, use IN for a shorter version
select region,* from customers where region IN ('wa','ca')

-- BETWEEN FOR NUMERIC RANGES

-- how many products which are not discontinued have unitprice between 10.00 and 40.00
select count(*) from products where Discontinued=0 and unitprice between 10.00 and 40.00 -- 50

-- how many products start with B, S or T
select count(*) from products where productname LIKE ('B%') OR PRODUCTNAME LIKE ('s%') OR PRODUCTNAME LIKE ('t%')
--select count(*) from products where contains (productname,'"b%" or "s%" or "t%"')

-- how many product categoryname start with C or S -- 37
select count(*) from products 
JOIN Categories 
ON products.CategoryID = categories.categoryid
where categoryname LIKE 'C%' OR CATEGORYNAME LIKE 'S%'

-- concatenation
-- select customers but join 'city and country' into one column eg 'lives in'

select  concat (city,', ',country) as livesin,* from Customers
select city + ', ' + country as livesin,* from Customers

-- customer => order => details of order (order_details)
-- select orders for ALFKI customer
select * from orders where customerid = 'alfki'

-- have a look at order details as well
select * from orders 
join [Order Details] on orders.OrderID = [Order Details].OrderID
where customerid = 'alfki'

-- create a query to have orderid, productname and quantity 
select orderid, productname, quantity,* from products
join [Order Details] on [Order Details].ProductID = products.ProductID

-- filter orders by customer 'alfki' to show product names
select * from orders
select * from [Order Details]
select * from products 

select customerid, orders.orderid, productname, Quantity, [order details].UnitPrice from orders
join [Order Details] on Orders.OrderID = [order details].OrderID
join Products on [order details].ProductID = products.ProductID
where customerid = 'alfki'

-- GOAL IS TO LIST, FOR ANY GIVEN CUSTOMER, THE ORDER DETAILS.  
-- REMEMBER TO GET TO THE ORDER DETAILS WE HAVE TO GO FIRST THROUGH ORDERS TABLE
--  CUSTOMER ==> ORDER ==> ORDER_DETAILS
                  --              PRODUCTID BOUGHT, QUANTITY, PRICE AND DISCOUNT
--   NOTE : CUSTOMERID IS ALREADY IN ORDERS TABLE 

-- get customer contactname and all orders for customerid='alfki'
select c.customerid, contactname, orderid from customers c
join orders o on c.CustomerID = o.CustomerID
where c.customerid = 'alfki'

-- develop this to show productid as well (ie include order_details table)
select c.customerid, contactname, o.OrderID, ProductID from customers c
join orders o on c.CustomerID = o.CustomerID
join [Order Details] od on o.OrderID = od.OrderID
where c.customerid = 'alfki'

-- productName
select c.customerid, contactname, o.OrderID, p.ProductID, ProductName from customers c
join orders o on c.CustomerID = o.CustomerID
join [Order Details] od on o.OrderID = od.OrderID
join products p on od.productid = p.productid
where c.customerid = 'alfki'

--add in quantity price and discount
select c.customerid, contactname, o.OrderID, p.ProductID, ProductName, od.Quantity , od.UnitPrice , od.Discount
from customers c
join orders o on c.CustomerID = o.CustomerID
join [Order Details] od on o.OrderID = od.OrderID
join products p on od.productid = p.productid
where c.customerid = 'alfki'
```

### Wed 12 Feb

### SQL Final

### SQL

```sql
### SQL PART 2 : ADVANCED QUERIES

```SQL
use northwind
go

select top 5 * from customers
select top 5 * from customers order by customerid desc

-- quiz : find count of employees in London
select count(*) from employees where city='London'
-- find all titles of courtesy given to employees
select * from employees
select Employees.TitleOfCourtesy from Employees
select count(TitleOfCourtesy) from Employees
select count(distinct TitleOfCourtesy) from Employees
-- how many 'dr.' employees exist?
select count(TitleOfCourtesy) AS NumberOfEmployees from employees 
	where TitleOfCourtesy = 'Dr.'
-- how many discontinued products exist
select * from Products
select count(*) from Products where Discontinued=1

-- offset = skip
-- first 5 customers
select top(5) * from customers
-- next 5 customers
select *  from customers order by customerid 
	offset 5 rows 
	fetch next 5 rows only
-- next 5 customers
select *  from customers order by customerid 
	offset 10 rows 
	fetch next 5 rows only

-- how many products with categoryid = 1 and discontinued?  
select count(*) from products where categoryid=1 and discontinued=1 -- 1
-- how many products with items in stock and unitprice > 29.99
select count(*) from products where unitsinstock>0 and unitprice>29.99 --22
-- order the above list to show products ordered by unit price descending
select products.unitprice, ProductName from products where unitsinstock>0 and unitprice>29.99 
	order by unitprice desc
-- how many distinct countries exist in customers table?
select count (distinct country) from customers --21
-- how many distinct cities exist in customers table?
select count (distinct city) from customers --69

-- LIKE
-- % is a wildcard for anything   %a%   contains a
--                                 a%   starts with
--                                 %a   ends with

-- _ is a wildcard for ONE CHARACTER

-- how many products contain 'ch'
select * from products where ProductName LIKE '%ch%'
select count(*) from products where ProductName LIKE '%ch%' -- 14

-- how many regions contain the letter 'a' in Customers
select count(*) from customers where region LIKE '%a%'  -- 8

-- how many regions start with a
select count(*) from customers where region LIKE 'a%'  -- 1
-- how many regions end with a
select count(*) from customers where region LIKE '%a'  -- 1

-- NOT LIKE reverses the query

-- how many products do not contain 'ch'
select count(*) from products where ProductName NOT LIKE '%ch%' -- 63

-- using _ UNDERSCORE to represent SINGLE CHARACTER WILDCARD

-- how many regions have 'A' as second letter (first letter wildcard)
select region, * from customers where region LIKE '_a%'

-- OR but for long lists, use IN for a shorter version
select region,* from customers where region IN ('wa','ca')

-- BETWEEN FOR NUMERIC RANGES

-- how many products which are not discontinued have unitprice between 10.00 and 40.00
select count(*) from products where Discontinued=0 and unitprice between 10.00 and 40.00 -- 50

-- how many products start with B, S or T
select count(*) from products where productname LIKE ('B%') OR PRODUCTNAME LIKE ('s%') OR PRODUCTNAME LIKE ('t%')
--select count(*) from products where contains (productname,'"b%" or "s%" or "t%"')

-- how many product categoryname start with C or S -- 37
select count(*) from products 
JOIN Categories 
ON products.CategoryID = categories.categoryid
where categoryname LIKE 'C%' OR CATEGORYNAME LIKE 'S%'

-- concatenation
-- select customers but join 'city and country' into one column eg 'lives in'

select  concat (city,', ',country) as livesin,* from Customers
select city + ', ' + country as livesin,* from Customers

-- customer => order => details of order (order_details)
-- select orders for ALFKI customer
select * from orders where customerid = 'alfki'

-- have a look at order details as well
select * from orders 
join [Order Details] on orders.OrderID = [Order Details].OrderID
where customerid = 'alfki'

-- create a query to have orderid, productname and quantity 
select orderid, productname, quantity,* from products
join [Order Details] on [Order Details].ProductID = products.ProductID

-- filter orders by customer 'alfki' to show product names
select * from orders
select * from [Order Details]
select * from products 

select customerid, orders.orderid, productname, Quantity, [order details].UnitPrice from orders
join [Order Details] on Orders.OrderID = [order details].OrderID
join Products on [order details].ProductID = products.ProductID
where customerid = 'alfki'

-- GOAL IS TO LIST, FOR ANY GIVEN CUSTOMER, THE ORDER DETAILS.  
-- REMEMBER TO GET TO THE ORDER DETAILS WE HAVE TO GO FIRST THROUGH ORDERS TABLE
--  CUSTOMER ==> ORDER ==> ORDER_DETAILS
                  --              PRODUCTID BOUGHT, QUANTITY, PRICE AND DISCOUNT
--   NOTE : CUSTOMERID IS ALREADY IN ORDERS TABLE 

-- get customer contactname and all orders for customerid='alfki'
select c.customerid, contactname, orderid from customers c
join orders o on c.CustomerID = o.CustomerID
where c.customerid = 'alfki'

-- develop this to show productid as well (ie include order_details table)
select c.customerid, contactname, o.OrderID, ProductID from customers c
join orders o on c.CustomerID = o.CustomerID
join [Order Details] od on o.OrderID = od.OrderID
where c.customerid = 'alfki'

-- productName
select c.customerid, contactname, o.OrderID, p.ProductID, ProductName from customers c
join orders o on c.CustomerID = o.CustomerID
join [Order Details] od on o.OrderID = od.OrderID
join products p on od.productid = p.productid
where c.customerid = 'alfki'

--add in quantity price and discount
select c.customerid, contactname, o.OrderID, p.ProductID, ProductName, od.Quantity , od.UnitPrice , od.Discount
from customers c
join orders o on c.CustomerID = o.CustomerID
join [Order Details] od on o.OrderID = od.OrderID
join products p on od.productid = p.productid
where c.customerid = 'alfki'

-- now can add some CALCULATED COLUMNS eg ORDER BEFORE DISCOUNT 
select c.customerid, contactname, o.OrderID, p.ProductID, ProductName, od.Quantity , od.UnitPrice , 
od.Discount * 100  as 'Percentage Discount' ,
od.UnitPrice * od.Quantity as 'Order Before Discount', 
od.UnitPrice * od.Quantity * od.Discount as 'Discount',
od.UnitPrice * od.Quantity - od.UnitPrice * od.Quantity * od.Discount as 'Order After Discount',
od.UnitPrice * od.Quantity * (1 - od.Discount) as 'order after discount'
from  customers c
join orders o on c.CustomerID = o.CustomerID
join [Order Details] od on o.OrderID = od.OrderID
join products p on od.productid = p.productid
where c.customerid = 'alfki'

-- can we get totals  (HAVE TO OMIT THE OTHER FIELDS FOR NOW)
select  
sum (od.Quantity) as 'quantity total', 
sum (od.UnitPrice * od.Quantity) as 'Order Before Discount', 
sum (od.UnitPrice * od.Quantity * od.Discount) as 'Discount',
sum (od.UnitPrice * od.Quantity * (1 - od.Discount)) as 'order after discount'
from  customers c
join orders o on c.CustomerID = o.CustomerID
join [Order Details] od on o.OrderID = od.OrderID
join products p on od.productid = p.productid
where c.customerid = 'alfki'

-- Now we have this working for ONE CUSTOMER ALKFI.
-- How can we get this working for ALL CUSTOMERS???
-- can use a GROUP BY condition which groups results by a column
-- SO WE CAN REPEAT THESE TOTALS AND GROUP BY CUSTOMERID
select  
c.customerid,
sum (od.Quantity) as 'quantity total', 
sum (od.UnitPrice * od.Quantity) as 'Order Before Discount', 
sum (od.UnitPrice * od.Quantity * od.Discount) as 'Discount',
sum (od.UnitPrice * od.Quantity * (1 - od.Discount)) as 'order after discount'
from  customers c
join orders o on c.CustomerID = o.CustomerID
join [Order Details] od on o.OrderID = od.OrderID
join products p on od.productid = p.productid
group by c.customerid

-- sort results by biggest spender!
select  
c.customerid,
sum (od.Quantity) as 'quantity total', 
sum (od.UnitPrice * od.Quantity) as 'Order Before Discount', 
sum (od.UnitPrice * od.Quantity * od.Discount) as 'Discount',
sum (od.UnitPrice * od.Quantity * (1 - od.Discount)) as 'order after discount'
from  customers c
join orders o on c.CustomerID = o.CustomerID
join [Order Details] od on o.OrderID = od.OrderID
join products p on od.productid = p.productid
group by c.customerid
order by [order after discount] desc

-- filter where discount is not zero  (WHERE)
-- also only show orders where total order after discount > 10000 (HAVING)
select  
c.customerid,
sum (od.Quantity) as 'quantity total', 
sum (od.UnitPrice * od.Quantity) as 'Order Before Discount', 
sum (od.UnitPrice * od.Quantity * od.Discount) as 'Discount Price',
sum (od.UnitPrice * od.Quantity * (1 - od.Discount)) as 'order after discount'
from  customers c
join orders o on c.CustomerID = o.CustomerID
join [Order Details] od on o.OrderID = od.OrderID
join products p on od.productid = p.productid
where od.Discount > 0

group by c.customerid
having sum (od.UnitPrice * od.Quantity * (1 - od.Discount)) > 10000

order by [order after discount] desc

```
### Order matters

SELECT
FROM
WHERE
ORDER BY

SELECT
FROM
WHERE

GROUP BY
HAVING 

ORDER BY

### Normalisation

If we think of a database having same data in multiple places then it's vulnerable
to data inconsistencies

	Contact 		Bob 		Mobile 		123

	Supplier        Bob's Kitchens      Contact   Bob   Number 123

			duplication of Bob's number

Normalisation is the process of checking no duplicate values exist in database

3 'Normal Forms'

1st 'Normal Form'

	One field should only hold ONE DATA ITEM

		Mobile     123              not     123        778

2nd 'Normal Form'

	Every field in table should depend on primary key

3rd 'Normal Form'

	All 'non-primary-keys' should have no inter-dependence

		Name, Address1, Address2, City, Country

			In theory the City and Country are related

### STRING MANIUPLATION

```sql

-- ### STRING MANIUPLATION

-- SUBSTRING from first given index (1-based counting) and specify number of letters to return
SELECT SUBSTRING('verylongstring',3,6)  -- from index 3 (3rd character) for 6 letters -- rylong

-- CHARINDEX -- get the index of character where it is placed inside long string
--              NOTE AGAIN INDEX IS NOT ZERO BASED COUNTING SO RETURS 6 = 6TH CHARACTER
SELECT CHARINDEX ('a','verylangstrang')
SELECT CHARINDEX (' ','TM44 5AZ')  -- SPLIT UP A POSTCODE USING THIS

-- LEFT/RIGHT  RETURN FIRST / LAST n characters
SELECT LEFT('verylongstring',4)  -- very
SELECT LEFT('TM44 5AZ',CHARINDEX (' ','TM44 5AZ')-1) -- should select TM44
SELECT RIGHT('TM44 5AZ', 3) -- should select 5AZ
SELECT RIGHT('TM44 5AZ', LEN('TM44 5AZ')-CHARINDEX (' ','TM44 5AZ')) -- should select 5AZ

-- LTRIM/RTRIM removes spaces
SELECT LTRIM(RTRIM(('   some data with space around   ')))

-- REPLACE
SELECT REPLACE('very long string','very','very very very extremely')

-- UPPER/LOWER
SELECT UPPER ('a long string in lower case')

-- DATES

-- TODAY
SELECT GetDate()
SELECT CONCAT('Today is ', GETDATE())
SELECT CONCAT('Tomorrow is ',DATEADD(d,1,GETDATE()))
SELECT CONCAT('Yesterday was ',DATEADD(d,-1,GETDATE()))
-- DATE DIFF  eg difference in days between today and a week's time
SELECT DATEDIFF(d, DATEADD(d,7,GETDATE()) ,  GETDATE()  )

-- d   or   dd    or  mm   or  yy  or   yyyy 

SELECT * FROM ORDERS 

-- WHAT'S THE LONGEST SHIPPING TIME???  SUBTRACT SHIPDATE FROM ORDERDATE AND GET MAX!
SELECT ORDERID, DATEDIFF(D, ORDERDATE, SHIPPEDDATE) AS SHIPPINGTIME
FROM ORDERS O
ORDER BY SHIPPINGTIME DESC

-- FLOOR - CONVERT TO INTEGER
select floor(10.65)
SELECT CEILING(10.65)
SELECT ROUND(10.49,0)
SELECT ROUND(10.50,0)

-- CASE .. WHEN .. ELSE

SELECT CASE
WHEN (10<11)
THEN '10 is small'
ELSE 'some other number'
END
AS 'is 10 small?'

SELECT * FROM ORDERS 

```

```sql
-- GROUP BY EXERCISES

--- PRINT CUSTOMERS GROUPED BY COUNTRY?
SELECT Count(Country),Country 
FROM Customers 
GROUP BY COUNTRY 

-- SUM THE COUNT
SELECT COUNT(COUNTRY) FROM CUSTOMERS GROUP BY COUNTRY

SELECT Country, ContactName
FROM Customers 
ORDER BY COUNTRY 

--- PRINT CUSTOMERS GROUPED BY CITY?
SELECT CITY, CONTACTNAME FROM CUSTOMERS ORDER BY CITY 

-- PRINT PRODUCTS GROUPED BY CATEGORY?
SELECT  COUNT(p.ProductName), c.CATEGORYNAME
FROM PRODUCTS p
INNER JOIN CATEGORIES c ON p.CategoryId = c.CategoryId
GROUP BY c.CategoryName

select CategoryName , c.CategoryID , ProductName 
FROM PRODUCTS p
INNER JOIN CATEGORIES c on p.CategoryID = c.CategoryID
ORDER BY C.CategoryName

-- all products
select * from products order by categoryid
```

```SQL
--- LEFT, RIGHT, INNER, OUTER JOINS 

--- LEFT (OUTER) JOIN : ALL RECORDS FROM LEFT TABLE AND MATCHING FROM RIGHT TABLE

		-- ALL CUSTOMERS (BY CUSTOMERID) AND ANY MATCHING ORDERS

--- RIGHT (OUTER) JOIN : ALL ORDERS (BY ORDERID) AND ANY MATCHING CUSTOMERS 

--- OUTER JOIN = EITHER LEFT (OUTER) JOIN OR RIGHT (OUTER) JOIN WHICH ARE DESCRIBED ABOVE

--- INNER JOIN = ONLY FROM FIRST TABLE WHEN MATCHING SECOND TABLE

		-- ONLY CUSTOMERS WHO HAVE ORDERS, AND THEIR MATCHING ORDER

-- can we do an INNER JOIN and compare with STANDARD LEFT JOIN?  DO ALL CUSTOMERS HAVE ORDERS?
SELECT CustomerId 
FROM Customers c

SELECT COUNT(*) FROM CUSTOMERS
SELECT COUNT(*) FROM ORDERS 
SELECT c.CustomerId, o.OrderID
FROM Customers c 
LEFT JOIN Orders o on c.CustomerID = o.CustomerID
WHERE o.OrderID IS NULL
ORDER BY OrderID

-- NOW WE CAN CHECK LEFT JOIN VS INNER JOIN SHOULD DIFFER BY 2 RECORDS
SELECT COUNT(*)
FROM CUSTOMERS c
LEFT JOIN Orders o on c.CustomerID = o.CustomerID
SELECT COUNT(*)
FROM CUSTOMERS c
INNER JOIN Orders o on c.CustomerID = o.CustomerID
SELECT COUNT(*)
FROM CUSTOMERS c
FULL JOIN Orders o on c.CustomerID = o.CustomerID
```
```

### Async..Await

### Async..Await

### Async . . Await

```csharp
using System;
using System.Threading;
using System.Diagnostics;
using System.IO;
using System.Collections.Generic;

namespace lab_49_async_await
{
    class Program
    {

        static List<string> fileRows = new List<string>();
        static void Main(string[] args)
        {

            // standard code is SYNCHRONOUS IE LINE BY LINE, THREAD IS ONLY ONE THREAD 
            // AND IT 'HANGS' if you have long operations
            var s = new Stopwatch();
            s.Start();
            Console.WriteLine($"Starting stopwatch at time {s.ElapsedMilliseconds}");

            DoThis(); // sync 
            Console.WriteLine(s.ElapsedMilliseconds);

            // async operation
            // main thread will start the operation but not wait for it.  Main thread will not pause.
            // build a big text file
            //File.Delete("log.dat");
            //Console.WriteLine("\\n\\nBuilding text file\\n\\n");
            //for (int i = 0; i < 1000; i++)
            //{
            //    File.AppendAllText("log.dat", $"New log entry {i} at {DateTime.Now}\\n");
            //}
            //Console.WriteLine("File built . . . \\n\\n");
            Console.WriteLine($"Starting async operations at {s.ElapsedMilliseconds}");
            ReadTextLines();  // async
            Console.WriteLine($"Finishing async operations at {s.ElapsedMilliseconds}");
            Console.WriteLine("Program has completed");
        }

        static void DoThis()
        {
            Thread.Sleep(3000);
            Console.WriteLine("Finished doing this");
        }

        static async void ReadTextLines()
        {
            var array = await File.ReadAllLinesAsync("log.dat");
            fileRows.AddRange(array); // add array to list
            // print sample ie every 1000 lines

            var counter = 0;
            foreach(var item in fileRows)
            {
                Console.WriteLine(item);
                counter++;
                if (counter > 100) break;
            }
        }
    }
}
```

### Friday 14 Feb

### Tasks

### Tasks

### Tasks

Yesterday we finished SQL and concluded the day with an intro to ASYNC..AWAIT

Main{
DoThisAsync(); // call
}

static async void DoThisAsync(){
var myarray = await GetAllLinesAsync("myfile.txt");
}

Main method : call to the ASYNC METHOD ((create a reference/pointer to this method))
Main method : continue just as if it never even called this method

```
async DoThisAsync(){
	await GetLongTaskAsync();   // take a while
}
```

At this point we tried to return data but discovered we had to return a TASK not just return data.

### Tasks

Overview
Tasks abstraction over threads

```
MAIN THREAD
			TASK => SUB-THREAD
				COMPLETE WHEN IT WANTS
```

### Tasks : Part 2

So far we have created tasks, arrays of tasks, got tasks to perform operations which complete at different times.

### Returning a value from a task

```
Up to now the tasks have been VOID ie return NOTHING
```

```
// returning data from a task

// Reset stopwatch
s.Restart();
var task06 = Task<string>.Run(   ()=> {

    return "Task 06 returns a string";

});

Console.WriteLine(task06.Result);
```

### Running Tasks In Parallel

```
// RUNNING MULTIPLE NAMED METHODS IN PARALLEL
// IMAGE 20 NIGHTLY BACKUP/CLEANUP JOBS EVERY NIGHT
// USEFUL IF ORDER OF EXECUTION DOES NOT MATTER : RUN IN PARALLEL IE TOGETHER

Parallel.Invoke(
    () => { 
        NightRunTask01(); 
        NightRunTask02(); 
        NightRunTask03(); 
        NightRunTask04(); 
    });

// Can run tasks to run one, then the other 

// Running for/foreach loop in parallel
// for loop 
Console.WriteLine("\\n\\nRunning For Loop In Parallel\\n");
Parallel.For(0, 100, i => {
    Console.WriteLine($"Running task {i} in a loop");
});

Console.WriteLine("\\n\\nAlso run a parallel FOREACH loop");
var myArray = new string[] { "first", "second", "third" };
Parallel.ForEach(myArray, (item) => {
    Console.WriteLine($"Printing item {item}");
});

// ENTITY LINQ DATABASE READS IN PARALLEL TO GET LOTS OF INFO AT SAME TIME
// Previously we ran ENTITY in SERIAL
var customersFromDatabase = new List<Customer>();
var customers = customersFromDatabase.AsParallel();  // execute query in parallel

Console.WriteLine($"Program ends at time {s.ElapsedMilliseconds} after stopwatch reset");

Console.ReadLine();

}
static void NightRunTask01() { Console.WriteLine("Running night time maintenance task 01"); }
static void NightRunTask02() { Console.WriteLine("Running night time maintenance task 02"); }
static void NightRunTask03() { Console.WriteLine("Running night time maintenance task 03"); }
static void NightRunTask04() { Console.WriteLine("Running night time maintenance task 04"); }
```

### HTTP

### HTTP

### Http calling the internet

So far we have looked at

```
Async..await - call a method ASYNCHRONOUSLY
	COMMON TASKS LIKE GETFILEASYNC()

	async ... METHOD

		await ... LINE WHERE WE DO A TASK ASYNCHRONOUSLY (EG READ FILE/DATABASE)

	Main(){
		DoThisAsync();
	}

	async void DoThisAsync(){
		var output = await GetDataAsync();   // TAKE A WHILE 
		                                     // IE CREATE BACKGROUND TASK
	}

Tasks

	Explicitly call BACKGROUND TASK TO DO SOME WORK WHICH MIGHT TAKE A WHILE
```

### Call Http data from INTERNET DOWN TO OUR COMPUTER

HTTP = HYPER TEXT TRANSFER PROTOCOL data sent over channel (port) 80 (not secure)
HTML = HYPER TEXT MARKUP LANGUAGE
HTTPS = SECURE (ENCRYPTED) 443 (encrypted)

```
using System;
using System.IO;
using System.Net;
using System.Threading.Tasks;

namespace lab_51_Http_Calling_Data_From_Internet
{
    class Program
    {
        static Uri url = new Uri("<https://www.google.com>");

        static void Main(string[] args)
        {
            // get web page synchrously
            Console.WriteLine("Program Has Started");
            GetData();
            GetDataAsync();
            Console.WriteLine("Program Has Ended");
            Console.WriteLine("Async data is now arriving from the internet");
            Console.ReadLine();
        }

        static void GetData()
        {
            // proxy is used as an agent middleman computer (not used here)
            var webclient = new WebClient { Proxy = null };
            webclient.DownloadFile(url, "myWebPage.html");
            // print to screen
            //Console.WriteLine(File.ReadAllText("myWebPage.html"));
        }

        async static void GetDataAsync()
        {
            // repeat async
            var webclient = new WebClient { Proxy = null };
            //webclient.DownloadFileAsync(url, "myWebPage2.html");  // missing 'async' keyword
            //Console.WriteLine(File.ReadAllText("myWebPage2.html"));
            var myWebPage3 = await webclient.DownloadStringTaskAsync(url); // this is proper async
            File.WriteAllText("myWebPage3.html", myWebPage3);
            Console.WriteLine(myWebPage3);

        }

        static async Task<string> GetStringAsync()
        {
            return null;
           
        }

    }
}
```

### Getting Data in JSON format

ONE ITEM

{
"field":"value",
"field2":"value2"
}

ARRAY OF ITEMS

[
{
"field":"value",
"field2":"value2"
},
{
"field":"value",
"field2":"value2"
},
{
"field":"value",
"field2":"value2"
}
]

// COMPLEX JSON OBJECT : ONE OBJECT
{
"firstName": "John",
"lastName": "Smith",
"address": {
"streetAddress": "21 2nd Street",
"city": "New York",
"state": "NY",
"postalCode": 10021
},
"phoneNumbers": [
"212 555-1234",
"646 555-4567"
]
}

We can get data as a string from the internet eg

```
static void GetDataJson()
{
    var url = new Uri("<https://raw.githubusercontent.com/philanderson888/data/master/customers.json>");
    var webclient = new WebClient { Proxy = null };
    var jsonData = webclient.DownloadString(url);
    Console.WriteLine(jsonData);
}
```

But! we can convert it to a proper JSON object using a library

### HttpClient

First ! Let's try a second method of reaching the internet : HttpClient

### Review

### Review

### 20 minute review

OOP 4 principles
INHERIT BASE=>DERIVED
ENCAPSULATE PRIVATE FIELDS
ABSTRACTION PUBLIC PROPERTIES EXPOSE PRIVATE FIELDS
POLYMORPHISM OPTIONAL OVERRIDE

ABSTRACT CLASS : OVERRIDE IS MANDATORY
JOIN
INNER	ELEMENTS SHARED FROM BOTH TABLES
CUSTOMERS WITH ORDERS
OUTER
LEFT (OUTER)	ALL CUSTOMERS (WITH OR WITHOUT ORDERS) + THEIR ORDERS
RIGHT (OUTER)	ALL ORDERS (WITH OR WITHOUT CUSTOMER) + THEIR CUSTOMERS
STATIC ATTACHED TO CLASS
SEALED PERFECT (NOT TO BE CHANGED) CLASS => NO DERIVED ((EG SECURITY REALM))
STRUCT MINI CLASS (PRIMITIVES, MOSTLY PUBLIC)
ENUM STRUCTURED DATA
THREAD SENT TO CPU
TASK .NET ABSTRACTION OVER THREADS
UINT IS UNSIGNED (+ ONLY)
DELEGATE PLACEHOLDER FOR METHOD
DELEGATE RESTRICT TYPE OF METHOD WHICH EVENT CAN TRIGGER
INTERFACE - FULLY ABSTRACT CLASS WITH FULLY ABSTRACT METHODS
INTERFACES CAN BE 'IMPLEMENTED' (MORE THAN ONE)
CLASSES CAN BE 'INHERITED' (ONLY ONE)
ACTION DELEGATE NO IN/OUTPUT
ACCESS MODIFIERS - PUBLIC PRIVATE PROTECTED (CLASS AND DERIVED CHILD CLASS)
INTERNAL - IN 'ASSEMBLY' IE COMPILED UNIT OF CODE (EXE/DLL) ' IN NAMESPACE '
ABSTRACT - CAN'T INSTANTIATE
CONCRETE - CAN INSTANTIATE
4 LOOPS FOR(FIXED NUMBER OF LOOPS), FOREACH (OVER ARRAY/COLLECTION) ,
WHILE (TEST CONDITION) , DO..WHILE (EXECUTE AT LEAST ONCE)
CONDITIONAL IF...
ABSTRACTION (DEFINITION) - IS A CONCEPT/IDEA WHICH REPRESENTS SOMETHING ELSE BROADLY
ABSTRACTION - MAKES THE COMPLEX INNER WORKINGS (HIDDEN) AND PRESENT TO OUTSIDE A MUCH MORE
SIMPLIFIED PICTURE/MODEL/FIELDS ETC TO USE

### SOLID PROGRAMMING PRINCIPLES

For larger projects it can get pretty complex and so SOLID principles have been proposed as good coding principles for these larger projects

S	SINGLE REPONSIBILITY

```
eg Javascript 'modules'
		Node_Modules
			a
			b
			c

	Each block of code / Class / Method has a very specific reponsibility ie what it does
			or represents

			YES! Class Dog
			NO!  Class DogCat
```

O	OPEN/CLOSED

```
Closed for MODIFICATION
	Open for INHERITANCE so child classes can extend the code (override)

		Live plugins for games : Gaming engine FIXED but open to add plug-ins
```

L	LISKOV SUBSTITUTION

```
In general design your apps so it's easy and possible to swap out
		Parent/Child instances with ease
```

I	INTERFACE SEGREGATION

```
Interfaces (in keeping with the 'S' single responsibility)
	Interfaces should be very small and specific

		ITool01{
			IDoThis();        // JUST ONE METHOD
		}
		IEnumerable { 
			GetEnumerator()   // ie get index in list
		}
```

D	DEPENDENCY INVERSION (DEPENDENCY ON ABSTRACT CLASSES)

```
Where possible use ABSTRACT CLASSES at the TOP OF YOUR INHERITANCE TREE

		Abstract Mammal{}
		Abstract Canine : Mammal
		Class Dog : Canine
		Class Terrier : Dog
```

SOLID
S=SINGLE RESPONSIBILITY : ONE CLASS/METHOD DOES ONE THING WELL
O=OPEN FOR INHERITANCE (PLUGIN)
LISKOV : PARENT/CHILD SWAP OUT
I=INTERFACES : SPECIFIC IE ONE METHOD INSIDE
DEPENDENCY : USE ABSTRACT AT TOP OF INHERITANCE TREE

### Game planning

```
GitHub repo
	ISSUES
	PROJECTS
Trello board
Paper planning
```

### Agile Revision

### Revision Agile

Agile Manifesto
Collaboration over negotiation
Face to face over long distance
Embrace over fixed plan
Individuals over process
Working software over documentation

Scrum roles
Scrum master facilitator (not boss)
product owner backlog (belongs to customer) ie list of requirements
Dev team 3-9 multi-skilled

User story - expresses technicality in a very human form ie from point of view of user
As a ... when i ... then ...

Kanban 24/7 rolling work
Control number of working items at any one time

Deploy live
Maintainance
Helpdesk
1st password reset
2nd complex fix
3rd line developer fix
Gold/Silver/Platinum - £££ paid for given level of service eg 2 hour support

Testing
TDD tests first RED GREEN REFACTOR
BDD human readable test
Cloud
server moved to datacentre

Sprint 1-4 weeks : focused goal to build selected items from main backlog (mini list is called the sprint backlog). Goal of sprint is to build next 'iteration' of working software

Backlog = list of requirements (from customer)

Scrum methodology : practical outworking of agile ==> use sprints

4 meetings
Sprint plan
Daily standup : yesterday today blockers
Sprint review : working software (show off work, our 'iteration')
Sprint retro : internal review

Spotify : silos : larger organisation : groups of people with similar function

Testing
Why?
Help to prove our product works (to us and customer)
Tests first, code second ==> helps to keep developers focused
Prove all requirements are met
Prove validating input
Contract/Budget ==> very hard for client to not pay us if we have all tests working

```
Can we fix all bugs? NEVER
	% CODE COVERAGE is % of code covered by tests
```

V-model : all stages have testing
UNIT TEST (MODULE)
INTEGRATION (JOIN MODULES)
SYSTEM TEST (OVERALL)
UAT USER ACCEPTANCE TEST (LIST OF REQUIREMENTS) ((USER LETS US KNOW))

## Week 7

## Web Overview

Web overview and recap

HTML CONTENT EG PARAGRAPH, IMAGE
CSS STYLE CONTENT
Javascript RUN CODE
Bootstrap CSS FRAMEWORK - LIBRARY TO QUICKLY BUILD PAGE LOOKING REASONABLE
12 column 'grid' layout
Each column can be 1/12 of screen
React
Angular
Vue
Browser
Program which can a) DISPLAY HTML & CSS but also b) RUN JAVASCRIPT CODE
Netscape Navigator - FIRST TO DO THIS!
((zero security!))
Internet Explorer
ACTIVE X
Chrome
V8 engine to run code
NodeJS
Extracts the V8 engine from Chrome browser and INSTALL IT AS STANDALONE APPLICATION ON YOUR COMPUTER

```
Goal of NODEJS

	

	Client computer 								Server Computer (linux / windows)
	Browser 											send HTML/CSS/JS/IMAGES
	Website showing	 									to client computer
		HTML 											and any data (JSON)
		CSS 											Server runs RUBY, JAVA, PHP, C, C++, C# 
		JS  											Python ==> GENERATE HTML & SEND TO CLIENT

														or

														Node : natively running JAVASCRIPT ON

														touch
														SERVER
						<<===========================
```

touch index.js

Code (javascript) is english characters
Run => compiles to 'machine code' or 'assembly language'
Bytecode is raw 1/0 as a single block 10101010 10101010 10101010 10101010

nodejs

```
install node

	node -v
	npm -v

	npm install -g http       global
	npm install    http       local in this folder

	npm init
		<<press enter>>
```

Chocolatey - Windows installer to install packages like NUGET eg Python!
Yarn - same as NPM but a little bit newer

```
Yarn & NPM ==> install libraries eg http

	npm install http  (-g)  
	yarn add http

		use yarn if preference as slightly cleaner with less errors
```

React
Facebook
World's No 1 way of using JAVASCRIPT to CREATE DYNAMIC HTML LIVE 'ON THE GO'
HTML
DOM
HEAD
BODY
P
UL

```
REACT
		JAVASCRIPT
			VIRTUAL 'DOM'
				BUILD ELEMENTS
					PUSH THEM TO PAGE
						UPDATE USING JAVASCRIPT
						RESULTS UPDATE ON PAGE LIVE - JUST COMPONENT WHICH HAS CHANGED, NOTHING ELSE
```

Angular
Google
Similar to React
Problems ==> v1 replaced by completely different v2 onwards
C# jobs might need Angular

VueJS
Best of React & Angular
Superb way to learn
<<private research : Vue CLI 3 and how to install & build first Vue app with VueCli3>>

## Encoding And File Signatures

Encoding

```
When we create a file there has to be an understanding of exactly how we create and recognise a FILE ON THE HARD DISK.

======1010101010100101==== 

	SOF Start Of File Marker on Disk

		Tell Operating system a file lives here
		Build your Folders in Explorer
			Build a REFERENCE which POINTS TO LOCATION ON HARD DISK
			Click to open file, OS ==> find location on disk, find SOF marker
			and read data until reaches EOF END OF FILE MARKER

		===== SOF 1010101010101010 EOF========
		               file
```

File Signature

```
Relate to FILE TYPE

	JPG     FFD8
	
	PNG 	8950

							F = decimal 15 = 1111
							D                1101
							0                0000
							1                0001
							2                0010
							3                0011
							4                0100

	ZIP 	504B

		BUT! NOTICE ZIP SAME AS ... 
			JAR   JAVA RUNTIME !!!

			DOCX  !!! ZIP FILE !!!

So the computer now knows which file type it is opening, even before the file
gets opened.
```

Encoding

```
The next thing to think about is how is the data laid down when we save a file?

Two types of encoding

	1. Character based encoding

		File is saved as a sequence of English ASCII characters

			SOFThis is a text fileEOF

				Each letter is represented as ASCII number then put into binary

				T  ==>   Decimal 84  ==>  Translate to Binary / HEX
										  128   64    32    16   8   4   2   1
										  0     1     0     1    0   1   0   0

										  84-64=20-16=4

										  Split into 2
										  8421      
										  0101      0100

										  Translate each half into HEX
										    5       4

				h  ==> decimal   104    binary     hex  68
				i  ==>           105                    69
				s  ==>           115                    73
```

Summary so far

```
ASCII     e ==> number

SOF
EOF

File Signature eg JPG is FFD8

Encoding
	Text-based is characters
		Note!  Text files have NO SIGNATURE - IT'S JUST THE RAW DATA!

		SOF T h i s  i s  a  ..  EOF

	Many file types here
		.dat
		.log
		.cs
		.java
		.html
		.css
		.js
			All the same ==> pure text

	Data
		.xml    Strong in Microsoft technology eg Word IS XML!!!!
			<root>

				<row>
					<field attribute="value" length="100" name="Bill">Bill</field>
					<field2>data2</field2>
				</row>

				<row>

				</row>

			</root>

		.json one object

		{
			field:"value",
			field2:"value2",
			field3:55
		}

		json array

		[
			{},{},{},{}
		]

		C#  => NEWTONSOFT can convert data to and from JSON into C# Model

	All the preceding is just plain text!  Character based encoding

	Encoding types
		ASCII 			Original computer letters (very simple)
						Max is 128 ie 7 binary bits  1010101

		UTF-8 			Adds a zero to make it a clean 8 bits
						01010101  (same number) 			

		UTF-16 			16 bits to account for all languages of world
							SQL    VARCHAR    8BIT
							      NVARCHAR   16BIT

		UNICODE 		= UTF16

		BIGENDIAN
		LITTLENDIAN
						Binary written to disk  

								1010 1111
								  A    F

								BIGENDIAN / LITTLEENDIAN STORE RESULTS OPPOSITE WAY ROUND
								   ONE   FA
								   OTHER AF

		Base64
			Using Base64 we can convert UNICODE (eg Russian) TO ASCII, send across web, 
			convert back at other side

				123DFC321==      == sign that text is base 64
```

## Streaming And Serialization

Streaming and Serialization

```
Streaming is the act of sending data to the 

	INTERNET  			remote location
		//SERVER/SHARE  (SMB protocol) 
		HTTP://
		SMTP://
		POP://
		IMAP://

	FILING SYSTEM 		hard drive
	MEMORY  			encryption : hold live keys in memory to unlock data
							eg web page received ENCRYPTED!!   Must have a KEY IN MEMORY TO UNLOCK

Also streaming sets a default BUFFER SIZE

	C# 1024 BYTES LONG

		Think of a SHIPPING CONTAINER : FIXED SIZE

			ALL DATA PUT INTO 'CONTAINER' => WHEN IT'S FULL ==> GET ANOTHER CONTAINER

			1GB MOVIE

				[buffer 1024 bytes = 1kb] 
				[buffer 1024 bytes = 1kb]
				[buffer 1024 bytes = 1kb]
				[buffer 1024 bytes = 1kb]

	Now this data is sent in BINARY FORMAT

				RAW 10101010 with no encoding to ASCII etc.  ==> raw 1/0

				Using RAW BINARY THIS IS THE FASTEST WAY POSSIBLE TO SEND DATA

	Binary files are used

		.EXE is a BINARY FILE !!!   Raw 1,0  sent straight to CPU TO RUN

		.DLL     LIBRARY!

		.JPG     RAW 1/0 CREATE IMAGE

		.PNG

		.MOV / MP4 / MKV

		Binary file ==> NEEDS SPECIAL PROGRAM TO OPEN AND RUN IT

	Binary data eg .MOV

		Buffering ==> LOADING OUR 'CHUNKS' OR 'BUFFERS' INTO MEMORY UNTIL WE HAVE ENOUGH TO 
						START MOVIE
```

Serialisation

```
DATA

	CHARACTERS      abc

	RAW BINARY      1010

BUFFER 1024 BYTES : fill with related data

STREAMING : SEND DATA AS BUFFER-SIZED BLOCKS UNTIL ALL DATA SENT (PROGRAMMER UNAWARE OF DETAILS)
				SET-IT-AND-FORGET-IT

				using (var reader = new StreamReader("myfile.txt")){
					// read data in blocks until done
				}

Serialisation of data

	Prepare data and strip out unwanted extras so it's suitable for sending to INTERNET/FILE/MEMORY

	class X{
		private string NINO;
		public string Name;
		public void DoThis(){}
	}

		Serialise data : remove NINO (private) and DoThis() (method)

		    [Serializable]                     // annotation
			class X{ public string Name; }

	Serialize 		C# OOP rabbit01, rabbit02 ==> '{ rabbitName:"Bob"},{rabbitName:"Fred"}'
						List<Rabbit>

	Deserialize     '{ rabbitName:"Bob"},{rabbitName:"Fred"}'  ==> deserialize into C# OOP
																	List<Rabbit>

	Use 3 methods to serialization

		1. Binary     raw 1/0
		2. JSON       {...}
		3. XML        <...>
```

## API EFCore

### API Intro

API : agreed set of rules which return data when you provide right input
facebook : API : query a user and their posts
supply : KEY
Application Programming Interface
IDE : build code

```
HTTP VERBS

	GET
			/api/values   			Whole collection : ALL RECORDS
			/api/values/id 			Select one item by ID : ONE RECORD

	POST
			/api/values 			Send data TO API    { new object }  HAS NO ID
									so assume instruction to CREATE NEW RECORD

	PUT 
			/api/values/15  		EDIT

	DELETE
			/api/values/15
```

### API Northwind Core Walkthrough

Let's build an API from scratch using an MVC website to give us some support and help to 'scaffold' some of the hard work.

Install Entity

```
install-package microsoft.entityframeworkcore.sqlserver
```

Let's try an experiment to pull in our Northwind models from the database

```
install-package microsoft.entityframeworkcore.tools

scaffold-dbcontext  -provider Microsoft.EntityFrameworkCore.SqlServer -connection "Data Source=(localdb)\\mssqllocaldb;Initial Catalog=Northwind"

scaffold-dbcontext  -provider Microsoft.EntityFrameworkCore.SqlServer -connection "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Northwind;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False"
```

### Manual version

```
Manually copy the classes from previous Entity project
	DbContext
	Customers
	Projects
	Categories

Add connection string in the right place

	For a website or API we must INJECT THE DATABASE AS A SERVICE

	Startup.cs
		Services
			==> add it here

Added SERVICE using CONNECTION STRING IN application.json

Added CONSTRUCTOR TO DBCONTEXT

	==> Get data!

		Data at localhost:12345 where port set in ...
```

Getting API data via CURL command

```
On command line we can get data via CURL <<url>>

	curl <https://localhost:44335/api/Customers>
```

Getting API data via Postman

```
Body of data

{"customerID":"ALFKI","companyName":"Alfreds Futterkiste","contactName":"Maria Anders","contactTitle":"Sales Representative","address":"Obere Str. 57","city":"Berlin","region":null,"postalCode":"12209","country":"Germany","phone":"030-0074321","fax":"030-0076545"}

GET .... /Customers
GET                /ALFKI
POST     /Customers          CREATE NEW

	Content-Type   application/json                 HEADER
	raw                                             BODY
```

## NodeJS Intro

### index.js of first nodejs web server

```csharp
console.log('hello how are you')
var x = 10
x += 20
var y = x * 100
console.log('x = ' + x + ' and y = ' + y)
// request (incoming)
// response (what this server returns)
var http = require('http');
http.createServer(function(req,res){
	console.log('Request has come in')
	res.writeHead(200, {'Content-Type':'text/plain'})
	res.end('Hello World\n')
}).listen(8080,'127.0.0.1');

console.log('web server is now listening on port 8080')
```

# Week 7

## GitHub Part 2

### Creating a repo

```
// long way
git init from our command line to initiate and create one locally 
	then push to internet

// easy way : create on GitHub and 'git clone' to put it on your computer

// GitHub Desktop
```

Cloning a repo

```
git clone <https://github.com/philanderson888/test-project>
```

Creating Branches

```
master 			PRODUCTION : LIVE CODE

	dev 		COMBINED APPROVED WORK OF ALL THE TEAM

		feature-01-add-button

		fix-01-generate-user
```

Commands

```
git status

git branch 			show branches

git branch dev  	create branch

git checkout dev    make this branch 'live'   *dev green is live branch

git checkout -b feature-01-test    create branch and check into it
```

### Approving changes

```
Online we can 'LOCK' master   

Group with approval : also 'LOCK' dev
```

### Pushing changes

```
git add .
git commit -m "message"
git push -u origin dev   ==> push from our local dev to remote dev (create if not created)
```

### Approving changes

```
Status : 

	dev with changes

	master not yet updated

Settings => Invite Collaborators!
```

### After work has been approved

```
Everyone in group should now pull down fresh change

	CI Continuous Integration
		CD Delivery ie Tests (none yet!)
		CD Deployment (none yet!")

	git checkout master
	git pull   /  git fetch
	git pull -v  (verbose)
```

### Viewing History

```
git log
```

### Go back to previous commit

```
git reset --soft <<ID>>
```

## C# With Raw SQL

```csharp
using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace lab_55_Raw_SQL
{
    class Program
    {
        static List<Customer> customers = new List<Customer>();

        static void Main(string[] args)
        {
            using (var connection = new SqlConnection
                (@"Data Source=(localdb)\mssqllocaldb; Initial Catalog = Northwind;")) {
                connection.Open();
                Console.WriteLine(connection.State);

                var sqlQuery = "select * from customers";

                // send command to database
                using (var command = new SqlCommand(sqlQuery, connection))
                {
                    // read data
                    var sqlReader = command.ExecuteReader();

                    // while(sqlReader has records coming in)
                    while (sqlReader.Read())
                    {
                        string CustomerId = sqlReader["CustomerID"].ToString();
                        string ContactName = sqlReader["ContactName"].ToString();
                        string CompanyName = sqlReader["CompanyName"].ToString();
                        string City = sqlReader["City"].ToString();

                        var customer = new Customer()
                        {
                            CustomerID = CustomerId,
                            ContactName = ContactName,
                            CompanyName = CompanyName,
                            City = City
                        };

                        customers.Add(customer);

                    }
                }

            }

            // print customers
            customers.ForEach(customer => Console.WriteLine
               ($"{customer.CustomerID,-10}{customer.ContactName,-20}" +
                $"{customer.CompanyName,-30}{customer.City}"));
        }
    }
}
```

## Group Exercise in C# : Create 20 Northwind Tests

```csharp
Project for today
Joint project
Create 20 tests against the Northwind database
.NET Core
Run the tests and validate the database is working fine
Use the Microsoft Word document as an example of some tests to run
	Can fetch price information from Products and Orders and Order_Details
	to give specific information

Get started on
	GROUP PROJECT
	NUNIT
	THINK OF 20 TESTS
	APPORTION WORK
	USER STORIES
	SPRINTS
	FIRST SPRINT
	MAKE A START
```

### Group Coding Exercise - Northwind Tests - Solution

Group has done 20 Northwind Tests

Repo at [https://github.com/jwKav/Group-Project_01](https://github.com/jwKav/Group-Project_01) 

## API Client : Read Data And Post New Data (Sync And Async) also deserialize JSON to OOP Model.

```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.Threading;
using System.Reflection.Metadata.Ecma335;

namespace lab_56_JSON_deserialize
{
    class Program
    {

        static List<Customer> customers = new List<Customer>();
        static string url = "https://localhost:44335/api/Customers";
        static Stopwatch s = new Stopwatch();
        static long SynchronousTime = 0;
        static HttpClient httpclient = new HttpClient();
        static void Main(string[] args)
        {
            Thread.Sleep(10000);
            s.Start();

            // Get customers from API Synchronously
            GetCustomers();

            SynchronousTime = s.ElapsedMilliseconds;
            Console.WriteLine($"\n\nFinished Synchronous Call At {s.ElapsedMilliseconds}\n\n");

            // Get customers Async !!!

            GetCustomersAsync();

            Console.WriteLine($"\n\nMain Method Did Not Wait For Asynchronous Call - Program Finished At {s.ElapsedMilliseconds}\n\n");

            // Add a new customer synchronously
            var customer = new Customer()
            {
                CustomerID = "Phil2",
                ContactName = "Test Customer",
                CompanyName = "Sparta Test",
                City = "London",
                Country = "UK"
            };
            //HttpResponseMessage response = PostCustomer(customer);
            //Console.WriteLine($"We have successfully added customer with HTTP Response Status code " +
            //$"{response.IsSuccessStatusCode} ");

            var customer2 = new Customer()
            {
                CustomerID = "Phil4",
                ContactName = "Test Customer",
                CompanyName = "Sparta Test",
                City = "London",
                Country = "UK"
            };

            PostCustomerAsync(customer2);

            Console.ReadLine();
        }

        static void GetCustomers()
        {
            using (var client = new HttpClient())
            {
                var jsonStringTask = client.GetStringAsync(url);
                customers = JsonConvert.DeserializeObject<List<Customer>>(jsonStringTask.Result);
            }
            customers.ForEach(c => Console.WriteLine($"{c.CustomerID,-10}" +
                $"{c.ContactName,-25}{c.CompanyName,-30}{c.City,-20}{c.Country}"));

        }

        static async void GetCustomersAsync()
        {
            using (var client = new HttpClient())
            {
                var jsonString = await GetCustomerDataAsync();
                customers = JsonConvert.DeserializeObject<List<Customer>>(jsonString);
                customers.ForEach(c => Console.WriteLine($"{c.CustomerID,-10}" +
                    $"{c.ContactName,-25}{c.CompanyName,-30}{c.City,-20}{c.Country}"));
                Console.WriteLine($"\n\nFinished Getting Asynchronous Data At {s.ElapsedMilliseconds}\n\n");

                Console.WriteLine($"It took {SynchronousTime} to get our data synchronously.\n" +
                    $"It took {s.ElapsedMilliseconds} to get our data asynchronously\n" +
                    $"Async was faster by {s.ElapsedMilliseconds - SynchronousTime} milliseconds");
            }
        }

        static async Task<string> GetCustomerDataAsync()
        {
            string jsonString = null;

            using (var client = new HttpClient())
            {
                jsonString = await client.GetStringAsync(url);
            }
            return jsonString;
        }

        static HttpResponseMessage PostCustomer(Customer customer)
        {
            string customerAsJson = JsonConvert.SerializeObject(customer);
            var HttpContent = new StringContent(customerAsJson);
            HttpContent.Headers.ContentType.MediaType = "application/json";
            HttpContent.Headers.ContentType.CharSet = "UTF-8";

            var responseMessage = httpclient.PostAsync(url, HttpContent);

            return responseMessage.Result;
        }

        static async Task PostCustomerAsync(Customer customer)
        {
            var responseMessage = await PostCustomerDataAsync(customer);
            Console.WriteLine($"We have successfully added customer with HTTP Response Status code " +
               $"{responseMessage.IsSuccessStatusCode} ");

        }

        static async Task<HttpResponseMessage> PostCustomerDataAsync(Customer customer)
        {
            string customerAsJson = JsonConvert.SerializeObject(customer);
            var HttpContent = new StringContent(customerAsJson);
            HttpContent.Headers.ContentType.MediaType = "application/json";
            HttpContent.Headers.ContentType.CharSet = "UTF-8";

            var responseMessage = await httpclient.PostAsync(url, HttpContent);

            return responseMessage;

        }
    }
}
```

## UML and ERD diagrams to display data models

### Representing Data

UML diagrams

```
To represent a CLASS we can use UML diagrams

	Class Name

		Fields/Properties

		Methods
```

ERD diagram

```
Entity Relationship Diagram

	Show database tables, column names and relationships

		Relationships

			1-1
			1-many
			many-many

		1-1 simple

			Customer {
				CustomerId  INT
				CustomerName VARCHAR(50)    
				             VARCHAR(MAX)   MAX = 255 LONGEST POSSIBLE FOR 8 BITS OF DATA
				CategoryId  INT foreign key
			}

			Category{
				CategoryId
				Name
			}

		1-many
			Same as above but often see in contstructor

				Public Customer(){
					...create list of sub-category items in constructor
				}

		many-many
			Table 1
			Table 2

			JoiningTable
				ID : Combination of 2 keys : Table1Id + Table2Id  ==> unique joining key

			Classes
			Students
			Teachers

				these can have many-many relationships
```

Planning for data

```
1) ERD raw data

2) Class diagrams = data + methods in UML diagrams

	Use draw.io !

		Save work to Google Drive
```

## Streaming

### Streaming

```
using System;
using System.IO;
using System.Text;
using System.Text.Unicode;

namespace lab_57_streaming
{
    class Program
    {
        static void Main(string[] args)
        {
            //File.Delete("data.txt");

           // create file (APPEND, UTF8, BUFFER 1024)
           using (var writer = new StreamWriter("data.txt",true, Encoding.UTF8, 1024))
            {
                for (int i = 0; i< 10; i++)
                {
                    writer.WriteLine($"New log item {i} at {DateTime.Now}");
                }
            }

            // also could use FOR STRING OR ARRAY OF STRINGS  
            string OneExtraLine = "some more text";
           using (var writer = File.AppendText("data.txt"))
            {
                writer.WriteLine(OneExtraLine);
            }

            // read file
            string output = null;
            using (var reader = new StreamReader("data.txt"))
            {
                // 3 ways to read data
                // 1
                while ((output = reader.ReadLine()) != null){
                    Console.WriteLine(output);
                }
            }

            Console.WriteLine($"\\n\\nNow Getting Data Async\\n");
            ReadDataAsync(); // off the mainry

            ReadAndWriteDataToMemory();  // simulate encryption module

            Console.WriteLine("\\n\\nProgram Has Terminated\\n\\n");
            Console.ReadLine();  // FAKE TERMINATION
        }

        static async void ReadDataAsync()
        {
            string lineofdata = null;

            using (var reader = new StreamReader("data.txt"))
            {
                // second version of getting data
                while (true)
                {
                    lineofdata = await reader.ReadLineAsync();
                    if (lineofdata == null) break;
                    Console.WriteLine(lineofdata);
                }

            }
        }

        static void ReadAndWriteDataToMemory() { 
            // wrapper around a Memory Stream : use in Security
            // destination assumed in RAM : system handle destination
            using (var memorystream = new MemoryStream())
            {
                // memory only operates with BYTE STREAM OF RAW BINARY 1/0 
                // does not use character stream
                var buffer = new byte[5];  // byte array (empty)
                                           // fill with binary data 
                buffer[0] = (int)'h';
                buffer[1] = (int)'e';
                buffer[2] = (int)'l';
                buffer[3] = (int)'l';
                buffer[4] = (int)'o';

                // send fake data 10 times
                for (int i = 0; i < 10; i++)
                {
                    memorystream.Write(buffer);
                }
                // force buffer to be sent
                memorystream.Flush();

                // read back with memory reader
                // but first reset pointer of stream to start
                memorystream.Position = 0;
                using (var reader = new StreamReader(memorystream))
                {
                    Console.WriteLine(reader.ReadToEnd());
                }
            }
        }
    }
}
```

# Week 8

### Building a FULL STACK APPLICATION

```
Raw SQL ==> Use .NET Core to pull in Data (EFCore = Entity Framework Core)

	"Code First" but can do this either way

		Build SQL Database FIRST

		or

C# Models => use EFCore to build SQL with data

	C# Model

		Two ways to build the SQL database A) Migrations B) via Context

			A) Migrations Method (we will do this)

				1) Models
				2) DbContext  (Connection string)

					Then run these two NUGET commands in order
					a) Add-Migration INITIAL
					b) Update-Database

						This will CREATE DATABASE IF DOES NOT EXIST
				
				3) If we now make changes to the Models we can also UPDATE THE DATABASE

					a) Add-Migration name-of-change-made (eg new-column-Age)
					b) Update-Database

						This will UPDATE DATABASE TO NEW STRUCTURE

				4) Can undo as well with Remove-Migration  (latest)

				5) Advantage is that any data can be preserved.

				6) Seed data means to add initial data

					We can do this also as part of the migrations

			B) DbContext

				1) Create SQL
				2) Create Models
				3) Create DbContext
				4) On DbContext property we call 

					.EnsureDeleted();

					and/or
					
					.EnsureCreated();

					(we have done this!)
					(problem : delete all data as well !)

Note : EFCore actually has a SQL builder tool which can actually build our SQL scripts from the EFCore Migration
```

Full Stack App

```
C# Models
DbContext
	Add-Migration Initial
	Update-Database

							==> Create Database

	Seeding

							==> Add initial data also

	Make changes

		Add-Migration name-of-change
		Update-database

							==> Update SQL tables

Back end done!

API from this to expose back end

Front End

	a) Console (done)
	b) WPF (can use same code as console, but have to think about UI Thread 'Despatcher' to 
			get updates done)
	c) MVC (done)
```

### Full Stack - Practical Lab

```
Building API back end

	In the future we could put the data in a separate DLL.

	For now we will try to put the data in the API though, for simplicity.

Models
	Cat
	Category
DbContext
	CatDbContext

Add-Migration Initial
Update-Database

	-GenerateSQL
```

Getting Help

```
get-help EntityFrameworkCore

Drop-Database  

Get-DbContext

Show SQL

	Script-DbContext
	Script-Migration

Show live SQL being sent from Entity to SQL 

	==> Tool 'SQL Server Profiler'

	This will now listen for SQL commands to be sent to database

		Report
			COMMANDS
			DATA
```

### API - Postman Calls

```
<https://localhost:44307/api/CatsAPI>

<https://localhost:44307/api/CatsAPI/1>

GET <https://localhost:44307/api/CatsAPI/1>

POST <https://localhost:44307/api/CatsAPI> HTTP/1.1
content-type: application/json

{
  "catName": "Sanjana",
  "categoryId": 1,
  "category": null,
  "dateOfBirth": "0001-01-01T00:00:00"
}

PUT <https://localhost:44307/api/CatsAPI/6> HTTP/1.1
content-type: application/json

{
  "catId": 6,
  "catName": "Sanjana2",
  "categoryId": 1,
  "category": null,
  "dateOfBirth": "0001-01-01T00:00:00"
}

DELETE <https://localhost:44307/api/CatsAPI/6> HTTP/1.1
content-type: application/json
```

### API - Summary so far

1. Models
2. DbContext
DbSet (Table Name)
Connection String LocalDb Path C:\Users\<<username>>\CatDatabase.mdb
Microsoft Database File
3. Migrations
INITIAL
==> CREATE DATABASE
CHANGES
==> UPDATE DATABASE
4. Generate SQL
5. Run Profile (LIVE SQL)

## .NET Core Migrations

```
Sometimes the migrations fail but you can always try to delete all migrations and start again

Delete folder
Add-Migration Initial
Update-Database -verbose
```

## Seed Some Data

```
Database at moment is empty
As part of the migrations we can also seed some new data
```

```
protected override void OnModelCreating(ModelBuilder builder)
{
    builder.Entity<Category>().HasData(
        
        new Category { CategoryId = 1, CategoryName = "Bengal" },
        new Category { CategoryId = 2, CategoryName = "Tabby" },
        new Category { CategoryId = 3, CategoryName = "Siamese" }
        );

    builder.Entity<Cat>().HasData(
        new Cat { CatId = 1, CatName = "Sanjana" , CategoryId = 1 },
        new Cat { CatId = 2, CatName = "Petrova" , CategoryId = 3  },
        new Cat { CatId = 3, CatName = "George" , CategoryId = 2  }
        );
}
```

add-migration adding-seed-data
update-database

```
check : data should now be in database!
```

## Viewing Visually Our Data Models

EFCore Power Tools

add Microsoft.EntityFrameworkCore.Design

## Fluent API

We can ask Entity to INFER (ASSUME) relationships but sometimes this is not possible and we must EXPLICITLY STATE RELATIONSHIPS

```
Older method : Data Annotations

	[]   Data Annotations above fields

	[Required]
	[StringLength(40)]
	public string ProductName {get;set;}

	[Key]

	[Display(Name = "Date Of Birth")]
    [DataType(DataType.Date)]
    //[DisplayFormat.... show UK date]
    public DateTime DateOfBirth { get; set; }

FluentAPI : more explicit (greater depth of detail)
```

### Adding Controller

```
Let's add a controller for API with Entity

	Build and run ==> fail with INJECTION EXCEPTION

Must now add DATABASE AS A SERVICE AT STARTUP WHICH IS THE MVC MODEL WAY

									  (INJECT DATABASE AS A SERVICE)
```

### Injecting Database As A Service

Services.cs

```
services.AddDbContext<CatDbContext>(options =>
               options.UseSqlServer(Configuration.GetConnectionString("CatDb")));
```

DbContext

```
public CatDbContext(DbContextOptions<CatDbContext> options)
    : base(options) { }
```

appsettings.json

```
"ConnectionStrings": {
"CatDb": "Data Source = (localdb)\\\\mssqllocaldb;Initial Catalog = CatDatabase;"
},
```

Homework

1. Submit your API homework from the weekend please. Can you just all confirm afresh your submissions status eg
    - Submitted (https://...link)
    - Will Submit ...give time..

        Current Status Right Now ...

2. Overnight build WPF app to show and update your API data!

    Serialise to and from JSON to OOP!

# MVC Website

### MVC

Recap so far

We have achieved so far:

Entity Framework ie older way to connect with databases ([ADO.NET](http://ado.net/) add to project, creates classes etc) = Entity From Database

Entity with WPF just a little ==> can develop this!

Entity Core
Write SQL first and create DbContext to reach this database and do CRUD operations

Raw SQL ==> 20 tests on Northwind

Entity Core
Migrations ==> make changes to our MODEL and push changes to DATABASE
add-migration
update-database

```
Also this can build our database as well first time around if it does not exists
```

Entity Core
db.Database.EnsureDeleted()
db.Database.EnsureCreated()

```
can be used in TESTING SCENARIOS TO CLEAN DATABASE EACH TESTING RUN
```

Entity Core
Seeding which can add, as part of our Migrations, seed data into the database

Entity Core
FluentAPI which can be used to specifically target relationships and be very
clear as to our intentions
.IsRequired
.StringLength
.HasOne
.HasMany

Entity
[Data Annotations]
[Required]
[Key]
[DataType(DataType.Date)]
[Display("This will show as a label")]

### Using a DLL

```
What we COULD DO

	Library Project (DLL)
		DbContext
		Models
	API
		Refer to DLL Library to obtain DbContext and Model classes
		References => Add reference 
			using Lab_62_DLL_Models;
```

### Moving Forwards

Taking all this knowledge forwards we can now build

```
1) Data Layer  (Back end)  -  DONE!
2) API Layer   (Back end)  -  DONE!

3) Console Front End Application to READ API WITH CRUD ACTIONS - DONE!

4) WPF 
	  Synchronous
	  Async
	  				==> Front end to READ API WITH CRUD ACTIONS - STARTED!

5) MVC
		Create a website which DIRECTLY TALKS TO DATABASE (IE DATA LAYER AT 1)

  			DO THIS NOW!

6) MVC
		Create a website which ACTS AS AN API CLIENT (USE CODE FROM (3) AND (4) IN 
		THIS )

		DB ........ API ......... CONSOLE APP
		 						  WPF APP
		 						  MVC APP  (THIS IS (6))

		   .......................MVC APP  (THIS IS (5))

When we have finished this, course will be broadly complete?
```

### MVC Website

Let's try using models from API as a reference.

```
1) Add models as a reference to our project

2) using ...Lab....Models

3) using Microsoft.EntityFrameworkCore (copied libraries from .csproj file)

4) configured database as a service

	Startup.cs

5) Controller ==> from Entity with Views

		Cats
			CatsController
			Cats  	View(webpage) + CRUD operations
```

### MVC website with Entity

```
This is now working fine!

We are pulling data directly from the database so have achieved point 5) in our list
above ie MVC with Entity from Database.

This now allows you to build any database quickly into a working CRUD website
with just a few clicks.

	Use this to test out our databases quickly with visual impact and see 
	if relationships work well

		Cat => New 
					Category Name is showing properly in drop-down
```

# API Revision

So far we have

- created a BACK END

    SQL DATABASE
    ENTITY CORE
    API WHICH EXPOSES THE DATA
    MVC WEB APP WHICH EXPOSES THE DATA

- created a FRONT END
CONSOLE CORE
WPF (LEFT CLASS TO WORK ON THIS VOLUNTARILY)
- goal TODAY
    - CLONE OUR MVC APP AND GET IT WORKING
    THEN REPLACE THE CONTROLLER CODE WITH API CALLS WHICH WE ALREADY HAVE THE
    CODE FOR IN OUR CONSOLE CORE FRONT END APP.
    - EFFECTIVELY CREATE MVC FRONT END APP WHICH IS GETTING DATA FROM BACK END API

# Building a full stack application from scratch

Today the goal will be to look at a WPF app

But I thought we could combine it with also building a

```
Database
	Migrations
	Seeding
	API

all from scratch

ToDo

	ToDoId
	ToDoName

	Foreign Keys
		UserId
		User
		CategoryId
		Category

User
	UserId
	UserName
	virtual ICollection<ToDo> ToDoes

Category
	CategoryId
	CategoryName
	virtual ICollection<ToDo> ToDoes

Plus FluentApi

1) MVC Core Template ==> build working API

2) WPF as Database app

3) Migrate WPF to be an API client
```

### Starting the lab

Build User, ToDo classes and ToDoDbContext

```
public class ToDoDbContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<ToDo> ToDos { get; set; }

    string connectionString = "Data Source = (localdb)\\\\mssqllocaldb;" +
        "Initial Catalog = ToDoDatabase2";

    protected override void OnConfiguring(DbContextOptionsBuilder builder)
    {
        builder.UseSqlServer(connectionString);
    }
}
```

Models have no relationshiop

Just test db creation OK with nuget

Next add relationships

```
ToDo
	User
```

```
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace lab_63_ToDo_API_Users_Categories.Models
{
    public class ToDoDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<ToDo> ToDos { get; set; }

        string connectionString = "Data Source = (localdb)\\\\mssqllocaldb;" +
            "Initial Catalog = ToDoDatabase2";

        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            builder.UseSqlServer(connectionString);
        }

        // add FluentAPI and Seeding
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>()
                .HasMany(user => user.ToDos)
                .WithOne(user => user.User);
            builder.Entity<User>()
                .Property(user => user.UserName)
                .IsRequired();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lab_63_ToDo_API_Users_Categories.Models
{
    public class ToDo
    {
        public int ToDoId { get; set; }
        public string ToDoName { get; set; }

        // add user as a foreign key
        public int? UserId { get; set; }
        public User User { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lab_63_ToDo_API_Users_Categories.Models
{
    public class User
    {
        public User()
        {
            ToDos = new HashSet<ToDo>();
        }
        public int UserId { get; set; }
        public string UserName { get; set; }

        public virtual ICollection<ToDo> ToDos { get; set; }
    }
}
```

### Add seed data

```
// seeding
builder.Entity<User>().HasData(
    
    new User { UserId = 1, UserName = "Fred" },
    new User { UserId = 2, UserName = "Bob" },
    new User { UserId = 3, UserName = "Pete" },
    new User { UserId = 4, UserName = "Tim" },
    new User { UserId = 5, UserName = "Serena" }
    );
builder.Entity<ToDo>().HasData(
    new ToDo { ToDoId = 1, ToDoName = "Do This" },
    new ToDo { ToDoId = 2, ToDoName = "And Do This" },
    new ToDo { ToDoId = 3, ToDoName = "And Do This Also" }
    );
```

# WPF Application

### Panels

StackPanel

```
button01
button02
label03

	items stack vertically
```

TabPanel
Tab1 Tab2 Tab3

DockPanel
Items attached at 5 points : Top Left, Top Right, Bottom Left, Bottom Right, Centre

Grid
as sub-grid and start all over again

WrapPanel
Gallery of images which repeat and wrap over lines

# Reviews

## Week 5 Reviews

### Mon 3 Feb

 

### Testing

Today testing is not a different discipline to coding 

Coder are expected to:

Write test first

Code against them

Prove code works!

Sprint ⇒ Definition of "done" means your code pass the test

Red                        Green                         Refactor

Create Test            Code so test pass       Performance improvements

Test can never prove your code is faultless

Its impossible to prove your code works, but Tests go a long way to this goal.

% code coverage - = % of your code covered by tests

Writing tests is a little bit like climbing a mountain with safety gear

Starts slow, Building the test (Harness & Rope)

Higher up with some code built errors are caught (falling from a cliff, rope catches you)

Tests can save you from errors (falls) by re-establishing if existing code works as you work

Microsoft Libraries

1. MSTEST Built in Library
2. NUnit excellent test framework ⇒ Using this for the course
3. XUnit latest 

### Naming Conventions

Classes 

Noun

PascalCaseLikeThis

Class Mammal

Class Dog : Mammal

Fields

often private

private string _nino;  (no validation, _highlights the privacy)

useCamelCaseLikeThis

Properties

often Public

Public string FirstName{get; set;}

PascalCase

Methods

VerbSubject

GetFirstName

SetAge

PascalCase in general - Could do camelCase if private

Datatypes

Boolean - 1Bit

Byte - 8 Bits

Short  - 15bits for value 1 for -1

int  - 31+1

Long 63 +1

float - 31 +1/-1

double - 64 

decimal - 128

usigned numbers

ushort

uint 

ulong - Full number positiive only

string - Char array 

Char - holds ASCII value in INT format

multiples of 3,5,7,9

between  0 < 1000

return every number divisible by one of the multiples above.

```csharp
var numList = new List<int>();
for(int i = 0; i<1000; i++)
	{
if(i%3==0||i%5==0||i%7==0||i%9)
		{
numList.add(i)
		}
	}
foreach(var item in numList)
{Console.WriteLine(item)}

numList.ForEach(item => cw(item))
```

```csharp
## Remove duplicates from an array.

int[] array1 = {9,2,2,3,5,6,5}

var list = new List<int>();

foreach(var item in array1)
{
	if(!list.Contain(item))
{
	list.Add(item)
}
}

cw(list.distinct())

```

## Week 7 - Revision And Interview Prep

### Feb 25 - Interview Prep

MVC
Model
View
Controller

```
Build websites
	Model = C# Classes which mirror data (eg SQL tables)

	View = visible page (send data for viewing)

	Controller
		Analyse URL requested
		  GET
			/Customers/              ALL
			/Customers/ALFKI         ONE
		  POST
		  	/Customers               NEW
		  	/Customers/ALFKI         UPDATE

		  PUT   					UPDATE
		  DELETE  					DELETE
```

Agile

```
Waterfall (older)
SDLC Software Dev Life Cycle

Feasibility

Requirements
	Gather
	Analyse
	=========> BACKLOG LIST OF REQUIREMENTS
					THESE CAN BE EXPRESSED ALSO IN TERMS OF USER STORIES
							AS A .... WHEN I .... THEN ....

Design
	Architecture : high level
	Detail Spec  : low level

TDD Tests then build

or Build then test
					TESTS - PROOF THAT WORK 'DONE'    (DEFINITION OF 'DONE' - EASIER WITH TESTS)

Release

Maintain
	Helpdesk
		L1 trivial
		L2 
		L3 analyse in detail
	New Feature Request
	Bug Fix

Documentation
```

When is waterfall better?
Not going change : construction, military, life-threatening

When is agile better
Continuing business environment : customer requirements may change over time

V-model
Waterfall with TESTS AT EACH STAGE

Agile is way for modern teams to build software in a way which communicates effectively with the business and the end customer so that everyone can be accountable in an open and constructive

Scrum is a practical outworking of ONE WAY WE CAN WORK IN AN AGILE FASHION

```
BACKLOG :   MAIN BACKLOG 
PLAN
DAILY
REVIEW
RETRO
		===> 1 SPRINT

WHO?
	DEV 3-9
	PRODUCT OWNER 1) BACKLOG 2) CUSTOMER
	SCRUM MASTER : ADMIN SERVANT LEADER WHO REMOVES BLOCKERS AND ENSURES SMOOTH FLOW OF OPERATIONS
```

OOP
OBJECT ORIENTED
LINEAR SCRIPTING : FIRST COMPUTERS : LINE 1 TO END
MODERN GUI : SCREEN OBJECTS
OOP : ATTACH CODE TO OBJECTS : FIELDS, PROPERTIES, METHODS, EVENTS
MODULARISING (SMALL BLOCKS)
TEST SMALL BLOCKS

```
INHERIT        
ENCAPSULATION 		PRIVATE
ABSTRACTION         KEEP PRIVATE AS PRIVATE, AND CONTROL EXPOSURE OF PUBLIC DATA (WITH VALIDATION) GET;SET;
POLYMORPHISM  

WHY USE OOP?
	CLEANER 
	RE-USABLE
	MODULAR
	HELPS WITH COLLABORATION

	SOLID PRINCIPLE  IE S=SINGLE RESPONSBILITY (KEEP IT SIMPLE)

	PRIVATE SHOULD BE PRIVATE : CAN CHANGE CODE WITHOUT HAVING TO CHANGE EXTERNAL PEOPLE'S CODE

OOP BENEFITS

	FLEXIBLE THROUGH POLYMORPHISM : MANY TYPES

	MODULAR : EASIER TO DESIGN UNIT TESTS FOR :
				 		DB CONNECTIONS CLEANLY
				 		DEBUG
```

VERSION CONTROL

```
1.1
1.2   CODE FROM 1.1 STILL WORKS

2.1   CODE FROM 1.2 NO LONGER GUARANTEED 'BREAKING CHANGE'
2.2
```

S SINGLE RESPONSIBILITY : CLASS/METHOD DOES ONE THING WELL!
O OPEN FOR EXTENSION CLOSED MODIFICATION EG PLUG-IN
L LISKOV : REPLACE PARENT/CHILD
I INTERFACES : SIMPLE : ONE METHOD
D DEPENDENCY ON ABSTRACT CLASSES / INTERFACES AT TOP OF INHERITANCE TREE
abstract app{
abstract DoThis();
}
INTERFACES CAN BE RE-USED SO DRY DON'T REPEAT YOURSELF

WHY SOLID?
LARGER APPS GOOD WAY FOR HELPING BUILD CLEAN CODE AND NOT BUILD 'SPAGHETTI' CODE
HELPS WITH PREDICTABLE BEHAVIOUR

```
IGetBloodSample{
		DrawBlood();
	}
	IRegisterPatient{
		RegisterPatient();
	}

	C#
	IEnumerable{
		GetEnumerator()
	}
	IComparable{
		CompareTo()      object1.CompareTo(object2);         1/0/-1
	}
```

Delegates

```
Placeholder for method

Event : add += multiple methods to fire when event happens

Plugins : add code live in runtime

Async ... use in CALLBACK METHODS
```

Agile
Scrum
Kanban
24/7 eg manufacturing or 24/7 datacentre : ongoing work and bug fix

```
Japanese Toyota : LIMIT ACTIVE ITEMS
```

```csharp
### Review

Coding
OOP
	==> test at 2

Thursday
	Agile
	SQL

Class - Container with Field/Property/Method/Events
		Use as a TEMPLATE FOR NEW OBJECTS

Instance
	call NEW keyword to create new object

Field _privateMember
Property PublicMember {get;set;}

Naming
	PascalCase   	Class (noun)   Method (verb)
	camelCase     	private
	_camelCase      private
	some-page-like-this.html    Kebab
	some_data_type_in_sql       Snake

Constructor - method called when call 'new' keyword
	public class Dog{
		public Dog(){}  
	}

Encapsulation - private keyword HIDES MEMBERS
Abstraction   - exposes private fields using PUBLIC PROPERTIES
Polymorphism  - optional override of parent in child class
					virtual DoThis(){}
					override DoThis(){}
Inheritance - parent BASE => child DERIVED
Access modifier - public private protected internal
	protected - class and derived
	internal - namespace ( compiled assembly EXE / DLL )
Sealed class has no derived classes
Struct - mini class : primitive (on STACK)
Delegate - placeholder for method
Action delegate   DOES AN ACTION  BUT HAS NO IN/OUT PARAMETERS
Function delegate   0+ INPUT, ONE OUTPUT PARAM
S SINGLE REPONSIBILITY : SMALL AND DO ONE THING WELL!  (UNIT TESTS!)
O OPEN EXTEND, CLOSED MODIFY (PLUGIN!)
L LISKOV substitue parent/child
I INTERFACE SEGREGATION  : KEEP SMALL (ONE METHOD!)
D USE ABSTRACT CLASSES AT TOP (DEPENDENCY INVERSION)
ERROR IN OUTPUT
EXCEPTION - CRASH SYSTEM
HANDLED - IN catch{} block we HANDLE THE CRASH
UNHANDLED - UNCONTROLLED CRASH
SERIAILIZE - CONVERT FROM OOP TO JSON/XML 
DESERIALIZE - JSON TO OOP
NEWTONSOFT
STREAM - DATA SENT IN 'BUFFER' SIZED BLOCKS (1024 BYTES = 1 BUFFER)
	MOVIE 1GB HAVE 1 MILLION BLOCKS 
ENCODING
	ORIGINAL - ASCII (7 BITS)
	WEB - UTF8 (8 BITS)
	UNICODE - UTF16 - ALL LANGUAGES
API
	What is API ?
		Way of exposing data over HTTP
```

### Tuesday 3 March Review

```csharp
### Review

Why are you at Sparta
Where do you see yourself in 5 years?
Strengths?
Weaknesses?
Example of good teamwork
Major challenge at University?
How much do YOU THINK YOU ARE WORTH?  £££
	Why?  List all of the reasons / qualities why you think so.
	What strengths, talents, abilities will you bring to this company?
	Weaknesses?
```

### Random Terms

```csharp
### Random Terms

Process       		Running EXE 
Application    		Foreground EXE runs normally at USER REQUEST
Service     		Background EXE runs normally at COMPUTER STARTUP

Thread				Set of instructions sent from EXE into CPU for processing	

Instruction Set 	Hardcoded instructions inside CPU

Assembly Language 	C# or other language, 'compiled' and run ==> BYTECODE?  Raw language understood
					by processor

					CSC.exe   C Sharp Compiler

							.cs   ==>  .exe    run it ==> bytecode be sent to CPU

HTTP Service is just a computer (server) which is exposing either API or website, and this server is 'hosted' ie placed on an IP address which is reachable from the internet in general.

REST(ful) API  

	Representational State Transfer

	HTTP GET/POST/PUT/DELETE

		POST api/Customers/  		ADD NEW
		api/Customers/1
```

## Week 9 Reviews

```powershell
### Revision And Interview Prep

BEFORE AGILE

		Scripting / 
		Prodecural Progamming

		OOP also

		Business would talk to client
		Get project
		Get list of requirements
			Backlog
				Give backlog to team
					Analyse
					Design
					Build
					Test
					Release 
						==> talk to customer about product
		Timescale might be 6-9 months!  Not much talking between 3 players
			a) Business
			b) Client
			c) Developers

	This is all before Agile!

	Problems with this are
		Lack of communication
		Long timescales
			No feedback loop early on to fix issues early on
			Also developers may be building code which is incompatible with each other!

Agile

	AgileManifesto.org

		Agile is a set of principles to help developers build code in a way which does not
		build barriers of communication with the rest of the business

			Face to face 
			Working software
			Embrace Change
			Collaboration with client

		Agile is a set of IDEAS AND PRINCIPLES with NO FIXED IMPLEMENTATION GIVEN

Scrum is METHODOLOGY which is a WAY OF WORKING  (SET OF INSTRUCTIONS)

	3 GROUPS

		DEVS  				3-9 MULTI SKILLED

		SCRUM MASTER         ORGANISER  (NOT THE BOSS)

		PRODUCT OWNER   ===> GO-TO WITH CLIENT

			BA TEAM : GENERATE LIST OF REQUIREMENTS

			PRODUCT OWNER WILL 'OWN' THIS LIST

				CHANGE IT AFTER TALKING WITH CLIENT

			CALL THIS LIST 'PROJECT BACKLOG'  (MAIN TO-DO LIST FOR WHOLE PROJECT)

	BACKLOG

		==> GIVE TO DEV TEAM

				ANALYSE BACKLOG

					ALLOCATE A) DIFFICULTY
					         B) PRIORITY

					SELECT ITEMS FOR DEVELOPMENT INITIALLY

					SPRINT 0 - PLANNING
						BACKLOG : ALLOCATE DIFFICULTY AND PRIORITY AND SELECT ROUGH ORDER
						INVITE CLIENT TO REVIEW 
					SPRINT 1 - INTIAL 'MVP' MINIMUM VIABLE PRODUCT (FIRST ITERATION)
						WORK BEGINS
							SPRINT PLAN
								DAILY
							SPRINT REVIEW WITH CLIENT
							SPRINT RETRO INTERNALLY

WATERFALL

	ANALYSIS => DESIGN => BUILD => CODE => TEST => RELEASE

AGILE

	SET OF IDEAS TO ENCOURAGE COMMUNICATION AT ALL STAGES OF A PROJECT NOT JUST AT END

		ITERATION 1    ==> FEEDBACK
		          2
		          3

SCRUM

	PRACTICAL WAY OF BUILDING AN AGILE SYSTEM  (METHODOLOGY)
		SPRINTS
			PLAN/DAILY/REVIEW/RETRO

SQL
	CHAR(5) FIXED LENGTH   SO  LENGTH 4 IS INVALID
	VARCHAR(5)   MAX 5
	NVARCHAR(5)  16 BIT, MAX 5 

	NORMALISATION

		ELIMINATING DUPLICATES IN A DATABASE

			1ST NORMAL FORM      1 FIELD HAS 1 DATA ITEM
								MOBILE PHONE ==> ONE NUMBER

			2ND                 FIELDS DEPEND ON PRIMARY KEY

			3RD 				FIELDS HAVE NO INTER-DEPENDENT RELATIONSHIP

									PRODUCTID  NAME  STOCK           SUPPLIERID  

									

									SUPPLIERID  NAME  MOBILE

S SINGLE RESPONSIBLITY   :    DO ONE THING WELL 
O OPEN EXTENSION              PLUGIN              (CLOSED TO MODIFY PARENT CLASS)
L LISKOV                      SUBSTITUTE PARENT/CHILD CLASSES
I INTERFACE SEGREGREGATION    INTERFACE HAS 1 METHOD ONLY      IENUMERABLE  HAS GETENUMERATOR()
D DEPENDENCY INVERSION        USE ABSTRACT/INTERFACES AT TOP LEVEL
```