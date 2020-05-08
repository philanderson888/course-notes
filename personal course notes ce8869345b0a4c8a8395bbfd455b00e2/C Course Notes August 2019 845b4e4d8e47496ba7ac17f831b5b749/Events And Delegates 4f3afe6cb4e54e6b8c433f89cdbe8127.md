# Events And Delegates

# Events And Delegates

Scripting ==> LINEAR PROGRAMMING ==> line 1....end

Graphics ==> SCREEN OBJECTS eg Button etc

```
Event driven programming

	<Button x:name="Button01" Click="DoThis">
	Main(string[] args){
	    private void Button01_Click(object sender, EventArgs e){
	    	// sender : OBJECT INITIATING THE EVENT eg Button
	    	// EventArgs
	    }
	}
```

a) Trivial example
b) OOP Example

# Trivial Event

```
1. Event can trigger one or more methods.  Don't declare a method DIRECTLY but via an 'agent' type
	which will call named methods.

		Delegate is a POINTER object which POINTS TO ONE OR MORE METHODS

		Declare delegate ==> create a fixed structure for permitted method in/out parameters

			delegate void MyDelegate();    POINTER TO METHODS BUT ONLY METHODS MATCHING THIS 
											FORM CAN BE PART OF A DELEGATE OBJECT

											YES     void DoThis(){}
											YES     void DoThat(){}
											NO      int  AlsoDoThis(){ return -1;}

				SPECIFICATION / SIGNATURE OF METHOD IS IN/OUT PARAMETER MIX

2. Declare an event but also specify the IN/OUT parameters for any methods which will be called

	public event  MyDelegate  MyEvent;

3. Attach methods to our event (must match given IN/OUT structure)

	     MyEvent += Method01;
	     MyEvent += Method02;    add

	     ..
	     MyEvent -= Method01;    remove
```

```
using System;

namespace lab_32_events
{
    class Program
    {
        public delegate void MyDelegate();

        public static event MyDelegate MyEvent;
        static void Main(string[] args)
        {
            MyEvent += MethodA;   // pointer to a method, but don't call the method right now
                                  // callback
            MyEvent += MethodB;
            MyEvent += MethodC;
            MyEvent -= MethodA;
            MyEvent();
        }

        static void MethodA() { Console.WriteLine("Method A"); }
        static void MethodB() { Console.WriteLine("Method B"); }
        static void MethodC() { Console.WriteLine("Method C"); }
    }
}
```

# OOP Example with Class and instances