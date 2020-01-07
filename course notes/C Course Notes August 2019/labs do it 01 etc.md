# labs-do-it-01 etc

# Do-It-01 : Calculator

    1) Create from scratch a Program.cs file and compile it using the .csc
    			compiler on your computer
    
    	2) dotnet new console
    
    		or 
    
    		dotnet new "MyApp"
    
    		Create a for loop and count down from 100, printing out every 4th item
    
    		run it with dotnet run
    
    	3) Do the same in visual studio : use the same folder ie C:\DeleteMe 
    
    		a) Create a little calculator app to take in 2 numbers and add the output
    
    			int num1 = Int32.Parse(Console.ReadLine());
    			double num2 = ...
    
    		b) Put it in a while(true){} loop to repeat for ever
    
    		c) Give the user the option to repeat ie ask the question "Try again (Y/N)" and
    		   detect if Console.ReadLine() yields "Y" or "y" in order to loop again
    
    		d) Give the user the option to choose 1) Addition 2) Subtraction 3) Multiplication
    
    		e) Finally add option 4) Division but be aware this time : must convert numbers to 'Double' data type ie
    
    			double d1 = Double.Parse(Console.ReadLine())   ?????? is this right ????? let me know!

All done 

# Do-It-02 : GitHub Repo From Scratch

    GitHub
    	Create repo online
    	Git clone it 
    	Update README and git push to internet
    	Create DEV branch locally and make one change.  Push this to the internet also.
    	Create a PULL request to pull changes from DEV into MASTER online
    	Finally do a git pull to pull the changes back down to your master branch locally.
    
    
    git remote add origin https://github.com/USER/REPO.git

Done : all 

# Do-It-03 : Arrays

Build an array of integers

Build an array of strings

Use a foreach loop to Console.WriteLine() each item in the array

Build a 2D array and put numbers in it using a nested loop

    for(int i=0;i<10;i++){
    	for(int j=0;j<10;j++){
    
    	}
    }

Build a 3D Grid and put numbers in it using a triple nested loop

    for(int i=0;i<10;i++){
      for(int j=0;j<10;j++){
        for (int k=0;k<10;k++){}
    	  }
    }

# Do-It-04 : Increment Operator

Code out x++ and ++x - what is the difference? Display this in code.

# Do-It-05 : BIDMAS

What is ( (a+b*c/d-e) / f ) to the power n ?

Code 2 examples with real numbers

# Do-It-06 : Loops

Code out a loop with the `break` keyword

Code out a loop with the `continue` keyword

# Do-It-07 : Switch

Code out a switch statement and include the default keyword

# Do-It-08 - Tests - Raise To Power

Create a test to take in 3 numbers : x, y and p.  Multiply x and y then raise the answer to the power p

    public double RaiseToPower(double x, double y, int p)
    {
        // 2, 3, 3  ==> (2*3)=6 and raise this to power 3 ie 36*6=216
        Console.WriteLine($"Here is some data {x} {y} {p}");
        return Math.Pow((x*y),p);
    }

# Do-It-10 - Test - Divisors

Create a test to find out how many numbers are divisible by a certain number in a given range.  Input startNumber, endNumber, divisor  eg 1,100,4 means all numbers divisible by 4 in range 1 to 100 inclusive.r

    public static int How_Many_Numbers_Divisible_By(int start, int end, int divisor)
    {
        // how many integers are divisible by given divisor in the given range?
        // example (2,10,4) means start at 2 and count up to 10
        // only 4 and 8 are divisible by 4
        // so answer is 2
        return -1;
    }

# just-do-it-11  Rabbit Population Explosion

    # Recap on OOP : Rabbit Lab
    
    System.Threading.Thread.Sleep(200); // milliseconds ie 1/5 second
    
    static List<Rabbit> rabbits = new List<Rabbit>();
    
    loop
    counter : 1-100
    inside loop
    1. increment counter
    2. create new Rabbit
    3. add Rabbit to list of rabbits
    4. pause for the sleep interval
    
    class Rabbit
    Age {get;set;}
    Name {get;set;}
    
        public Rabbit(int counter){
        	this.Age=0;
        	this.Name="Rabbit" + counter          // Rabbit1, Rabbit2,..
        }
    
    Phase 2 : each loop, also add 1 to the age of every rabbit
    
    
    # Rabbit Explosion
    
    Class Rabbit{
    	string Name;
    	int Age;
    }
    
    List<Rabbit> rabbits
    
    Thread.Sleep(200);      1/5 sec
    
    Loop
    
    Every loop, create new rabbit and add to list of rabbits
    
    Set population limit and see how many iterations it takes to reach population limit.
    
    This will be version 1 and will be a LINEAR RELATIONSHIP EG 50 iterations to reach population of 50.

Expected time : 15 minutes  

to Complete : jon, Miguel

# Rabbit Population Explosion Version 2 : Exponential Growth

    # Rabbit Explosion Version 2
    
    Let us know model real world growth where the population of rabbits can 
          increase exponentially.
    
    Every iteration, every rabbit which already exists can spawn one new rabbit.
    
    Set a new population limit and see how many iterations it takes to reach this 
                     new limit using the natural world

Done ; Ruoyi

# Rabbit Population Explosion Version 3 : Increment the age and account for children

    # Rabbit Population Explosion Version 3
    
    Now if we think about it, children cannot procreate.  So please do 2 things
    
    1) Every iteration, increment the age of each rabbit by 1, 
        so think of every iteration as one year's worth of growth.
    
    2) Then do a test to see the age of each rabbit.  
         A rabbit can only procreate if it has reached the age of 3.
    
    Now see how many iterations it takes to reach your population limit.
    
    
    Loop 0
    	one rabbit age 0
    
    Loop 1
    	one rabbit age 1
    
    Loop 2 
    	one rabbit age 2
    
    Loop 3
    	one rabbit age 3
    		this rabbit can now have another, so add one rabbit age 0
    
    Loop 4
    	one rabbit age 4 ==> add another
    	one rabbit age 1
    
    Loop 5
    	               5 => another
    	               2
    	               1
    
    Loop 6
    	               6  ==> another
    	               3  ==> another
    	               2
    	               1

Done : Sam ?? 

### Logging

    Now add logging to your Rabbit app : Log the Date, Time and Rabbit Name for
       each rabbit created
    
    

### Stopwatch

    Finally please report the time it has taken to reach to the population limit

### Tests

    Let's add tests to this as well to test the output
    
    
    

# just-do-it-12-rabbit-explosion

    New WPF Just_Do_It_12_Rabbit_Explosion using .NET Framework
    Add 2 text boxes and an ADD button   
    Add Entity
    When you click the ADD button, 
    	ADD A NEW RABBIT
    	DISPLAY A RABBIT PICTURE FOR ONE SECOND
    
    Create a TEXTBLOCK and do a foreach loop to output the rabbit data into this text block.
    
    Ideas?  Add timer and start adding own random rabbits

# just-do-it-13-lab-24 Customer App

    1 Customers
    	a) All customers
    	b) Filter by name or city
    
    	Double click on one customer ==> Take to panel 2 to show the orders
    
    2. 
    
    	a) All orders
    		Filter by OrderID
    
    	b) Orders per customer
    
    	Double click on order ==> Take to panel 03 and display 
    		Order details for this (read only)
    
    
    3. Order Details Showing Product, Stock, Unit Price

# just-do-it-14-project-1000

1) SQL : Create 2 tables with relationship

# just-do-it-15-OOP-All-In-One-App

### Example Solution By Ruoyi

    using System;
     
    namespace just_do_it_lab_oop_app
    {
        class Program
        {
            static void Main(string[] args)
            {
                var child = new Child("Jude", 10);
                IDoThis dostuff = child;
     
                dostuff.DoThis("I am doing this");
                child.DoThat("homework");
                child.OverrideThisIfYouLike();
            }
        }
     
        interface IDoThis
        {
            void DoThis(string s);
        }
     
        interface IDoThat
        {
            void DoThat(string s);
        }
     
        abstract class Parent : IDoThis, IDoThat
        {
            private string _privateStuff;
     
            internal int Age;
            protected string Name;
            public abstract void DoThat(string s);
            public virtual void DoThis(string s)
            {
                Console.WriteLine(s);
            }
     
            public virtual void OverrideThisIfYouLike()
            {
                Console.WriteLine("Override this if you want");
            }
        }
     
        class Child : Parent
        {
            public Child() { }
            public Child(string name, int age)
            {
                Name = name;
                Age = age;
            }
           
            public override void DoThat(string s)
            {
                Console.WriteLine($"You did {s}");
            }
            public override void OverrideThisIfYouLike()
            {
                Console.WriteLine("Overrided");
            }
     
        }
    }

# just-do-it-16-Timer

Completed : Alykhan

### Sample Code From Alykhan

    class Program
        {
            static void Main(string[] args)
            {
                int LinesToWrite = 10;
     
                FileTimer fileTimer = new FileTimer();
     
                long timeTaken = fileTimer.FileAppendLines("async.txt", LinesToWrite);
     
                Console.WriteLine($"{timeTaken}ms to write {LinesToWrite} lines to file");
     
                //100 Lines
                LinesToWrite = 100;
     
                timeTaken = fileTimer.FileAppendLines("async.txt", LinesToWrite);
     
                Console.WriteLine($"{timeTaken}ms to write {LinesToWrite} lines to file");
     
                //1000 Lines
                LinesToWrite = 1000;
     
                timeTaken = fileTimer.FileAppendLines("async.txt", LinesToWrite);
     
                Console.WriteLine($"{timeTaken}ms to write {LinesToWrite} lines to file");
     
                //10000 Lines
                LinesToWrite = 10000;
     
                timeTaken = fileTimer.FileAppendLines("async.txt", LinesToWrite);
     
                Console.WriteLine($"{timeTaken}ms to write {LinesToWrite} lines to file");
     
                //Read 10 Lines
     
                timeTaken = fileTimer.FileReadLines("async.txt", 10);
     
                Console.WriteLine($"{timeTaken}ms to read 10 lines from file");
     
                //Read 100 Lines
     
                timeTaken = fileTimer.FileReadLines("async.txt", 100);
     
                Console.WriteLine($"{timeTaken}ms to read 100 lines from file");
     
                //Read 1000 Lines
     
                timeTaken = fileTimer.FileReadLines("async.txt", 1000);
     
                Console.WriteLine($"{timeTaken}ms to read 1000 lines from file");
     
                //Read 10000 Lines
     
                timeTaken = fileTimer.FileReadLines("async.txt", 10000);
     
                Console.WriteLine($"{timeTaken}ms to read 10000 lines from file");
            }
        }
     
        class FileTimer
        {
            public Stopwatch timer = new Stopwatch();
     
            public long FileAppendLines(string fileName, int lines)
            {
                if (File.Exists(fileName)) { File.Delete(fileName); }
                timer.Reset();
                timer.Start();
                for (int i = 0; i <  lines; i++)
                {
                    File.AppendAllText(fileName, "This is a line of text.... Hello!\n");
                }
                timer.Stop();
                return timer.ElapsedMilliseconds;
            }
     
            public long FileReadLines(string fileName, int lines)
            {
                timer.Reset();
                timer.Start();
                int counter = 0;
                using (var reader = new StreamReader(fileName))
                {
                    while (counter <  lines)
                    {
                        var line = reader.ReadLine();
                        if (line == null)
                        {
                            break;
                        }
     
                        counter++;
                    }
     
                    reader.Close();
                }
     
                //File.ReadAllLines(fileName);
                timer.Stop();
     
                return timer.ElapsedMilliseconds;
            }
     
        }

# Labs-just-do-it-17-enum-with-tests

# Labs-just-do-it-18-OOP-snap-revision

    OOP refresher
    Can you make a project with all of the following keywords 
     Interface, Abstract (class), Abstract(method), Virtual, Overload,
     Overriding of methods, private, protected, internal, create a constructor, 
    create an instance, sealed
    
     Also create a test to check the output of a method (let it sum some values)