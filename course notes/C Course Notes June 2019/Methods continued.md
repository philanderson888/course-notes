# Methods (continued)

## Summary so far

### Instance Method

Class

Method in class                    .// INSTANCE METHOD

instance.Method();     to run this method   

### Static Method

Class

Static Method                      // STATIC METHOD

Class.Method();     to run this method

### Void

void means 'return nothing'

### Action Method

Special case of a method which 

a) is void 

b) accepts no parameters

void DoThis(){}

### Lots Of Parameters : Use 'names' so don't have to remember the order

By default =⇒ order is fixed

Named parameters : any order

    static void DoingLots(int a, string b, bool c)
      {
          Console.WriteLine($"Doing lots {a}  {b}  {c}");
      }
    
    
    DoingLots(100, "hi", true);
    
    DoingLots(c: false, b: "there", a: 10_000_000);

## Methods in Methods

 Can easily put methods in methods

    DoThis();
    DoThis();
    DoThis();
    
    
    // can put methods here
    void DoThis(){ Console.WriteLine("I am doing something"); }

## Placement Of Methods : Static and Non-Static

    using System;
    
    namespace lab_23_methods
    {
        class Program
        {
            static void Main(string[] args)
            {
                // Grow(); instance method 
                var x01 = new X();
                x01.Grow();
                // ReturnFixedData(); static method
                X.ReturnFixedData();
    
                // remember STATIC MATHS CLASS WHICH RETURNS PI, LOGX ETC
                Console.WriteLine(Math.PI);
    
                DoThis();
                DoThis();
                DoThis();
    
                DoThat();
                DoThat();
                DoThat();
    
    
                // can put methods here
                void DoThis(){ Console.WriteLine("I am doing something"); }
            }
    
            static void DoThat() { Console.WriteLine("I am doing something else"); }
            // can put methods here
        }
        class X
        {
            public int Age;
            // can put INSTANCE Nmethods here
            public void Grow()
            {
                Age++;
            }
            // STATIC METHOD : useful for fixed data : STATIC=stock warehouse (WHOLE APP)
            public static string ReturnFixedData()
            {
                return "Here is some fixed data";
            }
        }
    }

## Optional Parameters

    static void DoingSomeOtherWork(DateTime date, char c = 'z', 
                       float f = 1.2F, double d = 100.329) {
    
            }
    
    DoingSomeOtherWork(new DateTime(2019, 06, 27));   //  set date but others default
    
    DoingSomeOtherWork(new DateTime(2019, 06, 27), 'a',1.3F,100.222);   //