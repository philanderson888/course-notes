# OOP Object Oriented Programming : Classes, Methods, Constructors

Scripting =⇒ command line instructions

Even 'Javascript' is an 'interpreted' language which means the code runs line by line until an error stops it or code completes.

This is a 'run-time' exception

line 01 OK, runs

line 02 OK, runs

line 03 error =⇒ exception (crash)

C#, Java are compiled languages

Code =⇒ Compile =⇒ Run

                a) Compile Exceptions    (refuse to build)

                b) Runtime Exceptions

Also we now have a GUI (screen).  GUI =⇒ Graphical User Interface.

OOP Object Oriented Programming =⇒ Screen objects and ATTACH CODE TO SCREEN OBJECTS

           Javascript  button  onclick="DoThis"

           C#    private void button_click(object sender, eventArgs e){      }

No longer do we have long 'top-down' scripts but all code attached to another object.

Event : click, hover (mouseover, mouseexit), keypress, keyup, keydown, keyup?key=Enter, 

Listeners =⇒     Javascript  button : Add 'event listener' to listen for different events

## Objects

Root object just called 'object'

Everything else is a child of 'object'

## Classes

Manually creating objects is usually just for lab or teaching purposes.

Normal computing we use the computer to generate objects for us

Natural world

Mammals ⇒ Dogs ⇒ Labrador =⇒ our particular one 'Labrador' Bonnie

Computing =⇒ create multiple objects of same type we use 'classes'

mammal

cat

lion

american lion

tiger

..

Inheritance from parent to child

    using System;
    using System.Collections.Generic;
    
    namespace lab_12_classes
    {
        class Program
        {
            static List<Dog> dogs = new List<Dog>();
            static void Main(string[] args)
            {
                var m01 = new Mammal();
                m01.Weight = 100;
                m01.Length = 150;
                m01.Weight = 2000;
                var d01 = new Dog();
                d01.Weight = 80;
                d01.Length = 50;
                d01.Height = 1000;
                d01.DogID = "dog01";
                Console.WriteLine($"Dog has height {d01.Height}, weight {d01.Weight} and " +
                    $"length {d01.Length}");
                for (int i = 1; i<=20; i++)
                {
                    // create dog
                    Dog newdog = new Dog();
                    newdog.DogID = $"dog{i}";
                    newdog.Length = 100;
                    newdog.Height = 50;
                    newdog.Weight = 30;
                    // add dog to list of dogs
                    dogs.Add(newdog);
                }
                // print all dogs
                foreach(var dog in dogs)
                {
                    Console.WriteLine($"{dog.DogID} has length {dog.Length}");
                }
            }
        }
    
        class Dog : Mammal { }
    
        class Cat : Mammal { }
    
        class Mammal {
            public int Height;
            public int Length;
            public int Weight;
            public string DogID;
        }
    
    
    
    
    }

## Classes : so far

Class can be used as a TEMPLATE to create NEW OBJECTS

                                        Dog                        dog01,dog02 etc

                                     Class                         Instance 

Class have fields eg height, weight, id

## Methods

If we want to do something (action) we create a function.  In C# this is a Method.

Dog : age field   and   Grow() method    where age will  add one

    using System;
    
    namespace lab_13_methods
    {
        class Program
        {
            static void Main(string[] args)
            {
                var d01 = new Dog();
                d01.Name = "Rover";
                d01.Age = 1;
                d01.Grow();
                Console.WriteLine($"The dog's age is now {d01.Age}");
                for(int i = 2; i <= 20; i++)
                {
                    d01.Grow();
                }
                Console.WriteLine($"The dog's age is now {d01.Age}");
                while(d01.Age > 5)
                {
                    d01.GoBackInTime();
                }
                Console.WriteLine($"The dog's age is now {d01.Age}");
            }
        }
    
        class Dog
        {
            public string Name;
            public int Age;
    
            // method
            public void Grow()
            {
                Age++;
            }
            public void GoBackInTime()
            {
                Age--;
            }
        }
    
    }

## Classes : So Far

1. Fields normallly PRIVATE
2. Methods : Action (doing) code
3. Properties : similar to fields but are normally PUBLIC

## Private Fields

When fields are PRIVATE we have no easy way to set them initially. 

We can add something called a CONSTRUCTOR which allows us to enter values at the point at which we create an object.

## Constructor

    class Person
        {
            private string NINO;
            private string password;
            public string Name;
    
            // constructor : public + name of class eg public Person
            public Person(string NINO,string password, string Name)
            {
    						// this refers to the INSTANCE OF THE OBJECT
                // eg Peter
                // Peter.NINO = NINO(passed in)
                this.NINO = NINO;
                this.password = password;
                this.Name = Name;
            }
    }

## Getters And Setters

We can use methods to Get and Set private data

1. Constructor ⇒ set private data initially
2. Get/Set private data with public Methods 

    using System;
    
    namespace lab_15_constructor
    {
        class Program
        {
            static void Main(string[] args)
            {
               // var Bob = new Person();
                var Peter = new Person("ABC123", "donttellthis", "Peter");
                Peter.SetNINO("DEF456", "ihavenoidea");
                Console.WriteLine(Peter.SetNINO("DEF456", "donttellthis"));
                Console.WriteLine(Peter.GetNINO("donttellthis"));
    
            }
        }
    
        class Person
        {
            private string NINO;
            private string password;
            public string Name;
    
            // constructor : public + name of class eg public Person
            public Person(string NINO,string password, string Name)
            {
                this.NINO = NINO;
                this.password = password;
                this.Name = Name;
            }
    
            public bool SetNINO(string newNINO, string password)
            {
                bool itWorked = false;
    
                if(this.password == password)
                {
                    this.NINO = newNINO;
                    itWorked = true;
                }
    
                return itWorked;
            }
    
            public string GetNINO(string password)
            {
                string returnNino = "";
    
                if (this.password == password)
                {
                    returnNino = this.NINO;
                }
    
                return returnNino;
            }
    
    
    
        }
    }