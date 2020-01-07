# Day 26 - Events And Delegates

# Delegates

Delegates are used in PLACE OF METHODS

    We can call ONE METHOD DIRECTLY
    
    or
    
    We can INTANTIATE A DELEGATE OBJECT (INSTANCE) a
    and inside this instance we can place ONE OR MORE METHODS
    
    ==> so we can CALL THE DELEGATE WITH BRACKETS ie MyDelegate(); and this
    	will call all of the methods attached, in order.
    
    	MyDelegate+=Method01;
    	MyDelegate+=Method02;
    	MyDelegate+=Method03;  
    			...............syntax is NAMING THE ITEM BUT AS A PLACEHOLDER ONLY .... we are NOT CALLING THE METHOD BY ADDING BRACKETS()
    
    	Delegate object is a PLACEHOLDER OBJECT TO POINT TO ONE OR MORE METHODS

Why do we use delegates?

    1) EVENTS
    
    	Use delegates to SPECIFY THE PERMITTED INPUT / OUTPUT parameters for 
    	an event.
    
    	MyEvent wish to call Methods01/02/03 BUT!!! use DELEGATE OBJECT TO 
    		SPECIFY INPUT / OUTPUT TYPES PERMITTED (ALL MUST BE SAME)
    
    	Example
    		         void Method01(int x){}
    		         void Method02(int x){}
    		         void Method03(int x){}
    
    	   //create matching delegate
    
    		delegate void MyDelegate(int x);
    
    	  //create EVENT ... matching a DELEGATE.... EVENT NAME
    
    	    event               MyDelegate             MyEvent;
    
    
    	   Event is now PRIMED
    	   Activate event we now just code
    
    	   MyEvent();  ==> call any methods attached
    
    	   Initially MyEvent is NULL
    	   Add methods by this code
    	   MyEvent += Method01;    // run this first
    	   MyEvent += Method02;    // second
    	   MyEvent += Method03;    // third, in order

# Events

Events are a way in computing of taking INPUT as TRIGGERS

    Usually can take them from SCREEN OBJECT EG BUTTON CLICK, HOVER ETC
    		DOUBLECLICK, KEYPRESS
    
    Create a LISTENER for this EVENT
    
    When EVENT FIRES, call one or more methods
    
    Events are VERY USEFUL in MODERN COMPUTING because we can listen for the arrival or completion of data
    
    	...onDataStart..
    	...onDataEnd...
    
    					...can trigger NOTIFICATIONS 
    
    Most common event in OOP is
    
    	private void Button_Click(object sender, eventArgs e){
    		// DO THIS ON BUTTON CLICK
    
    	}
    
    	sender = object (button) which event happened to 
    	eventArgs is a string[] array of data which can be fed in with the 
    		event eg MOUSE X,Y COORDINATES

# Delegates enabling CALLBACK with ASYNCHRONOUS CODING

The second reason why delegates are VERY USEFUL is that we can use DELEGATES AS OBJECTS to PASS A METHOD AS A PARAMETER IN ANOTHER METHOD

    We give this method a special name ie CALLBACK METHOD
    
    
      MyMethod(int x);  // passing in an integer!
    
      MyMethod02(....CAN WE PASS IN A METHOD HERE???...)
    
      but...when we are doing ASYNCHRONOUS PROGRAMMING what we want to see is
      this
    
      	MyAsyncMethod(int x, string y, delegate MyDelegate){}
    
      		CALL METHOD pass in x,y AND WHEN METHOD COMPLETES (AFTER TIME)
      		ALSO call method passed in.
      		{
    
      			// go get a pizza of size x and extras y
      			// when pizza arrives run our callback method EatPizza
    
      		}

### Example Of Basic Delegate Code

    using System;
    
    namespace Lab_11_Delegates
    {
        class Program
        {
            // matching delegate
            public delegate void Delegate01();
    
            static void Main(string[] args)
            {
    
                // delegate CAN BE REFERENCED AS A CLASS
                // use new keyword
                var delegateInstance = new Delegate01(MyMethod01);
                // call this
                delegateInstance(); // call the method
    
                // trivial cases can simplify (same result)
                // 1. omit 'new'
                Delegate01 delegateInstance2 = MyMethod01; // same as above
                delegateInstance2();   // call 
    
                // final trivial case
                // ACTION DELEGATE IS VOID AND TAKES NO PARAMETERS
                Action delegateInstance3 = MyMethod01;  // same as above
    
                delegateInstance3();  // call
    
                // will never work !!!!    Action delegateInstance4 = MyMethod02;
            }
    
            static void MyMethod01()
            {
                Console.WriteLine("Running Method01");
            }
            static string MyMethod02()
            {
                return "Running Method02";
            }
            
    }

### When do we use delegates?

Delegates are used at RUNTIME to swap out RUNNING CODE MODULES

    EXAMPLE : Main framework with PLUGINS
    
    	Runtime : download and install and add in plugins

As we have seen they are also useful in ASYNC CODE TO RUN A METHOD (CALLBACK)
WHEN YOUR ASYNC TASK COMPLETES

Final reason is ONE EVENT : ATTACH MULTIPLE METHODS BUT CAN SWAP METHODS IN/OUT LIVE AT RUNTIME.

## Also delegates can be used to call ANONYMOUS METHODS (using lambda)

    // non-trivial delegate
            delegate int Delegate02(int  x);
    
    Delegate02 delegateInstance5 =  x    =>             x * x * x;    // LAMBDA
    
            static int MyMethod03(int x)
            {
                return x * x;
            }

### OOP Events

We have seen basic events but we also want to see how they work in a OOP scenario in a class

    using System;
    
    namespace Lab_12_OOP_Events
    {
        class Program
        {
            static void Main(string[] args)
            {
                var James = new Child("James");
                James.Grow();
                James.Grow();
                James.Grow();
                James.Grow();
            }
        }
    
    
         class Child
        {
            // TRIVIAL EVENT ANNUAL BIRTHDAY!
            delegate void BirthdayDelegate();
            event BirthdayDelegate HaveABirthday;
    
            public string Name { get; set; }
            public int Age { get; set; }
    
            public void HaveAParty()
            {
                // this refers to the INSTANCE 
                this.Age++;
                Console.WriteLine("Hey celebrating another year!  " +
                    $"Age is now {this.Age}");
            }
            public Child(string Name)
            {
                this.Name = Name;
                this.Age = 0;
                HaveABirthday += HaveAParty; // placeholder
            }
    
            public void Grow()
            {
                HaveABirthday(); // call the event
            }
        }
    
    }