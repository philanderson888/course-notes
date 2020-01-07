# Events And Delegates

# Events

With OOP we have EVENTS which are a great way for the END USER VIA THE GUI to interact with the application.

Standard button click

    Button01_click(object sender, eventArgs e){
    
    }

Events call one or more methods

    But!  Don't call methods DIRECTLY
    
    Call Methods indirectly via a Method Placeholder Object, called a DELEGATE
    
    DELEGATE is PLACEHOLDER OBJECT which POINTS to ONE OR MORE METHODS
    
    	Restriction is that ALL METHODS MUST HAVE SAME INPUT/OUTPUT TYPES
    
    		Action Delegate      void DoThis(){  // action code, no return type } 
    							 int DoThis(){   return -1;  }
    							 bool DoThis(string y){}
    
    				SPECIFICATION IS MIX OF INPUT/OUTPUT PARAMETERS
    
    				SIGNATURE IS NAME + OUTPUT PARAMETERS
    
    
    1) Declare DELEGATE object which match GIVEN METHOD SPECIFICATION (INPUT/OUTPUT)
    
    		delegate void delegate01();
    
    				METHODS MUST HAVE FORM   void DoThis();    void DoThat();  
    
    2) Declare EVENT and restrict using DELEGATE type 
    
    3) EVENT += METHOD01;
       EVENT += METHOD02;
       EVENT += METHOD03;
       EVENT += METHOD04;
    
       Note : NUGET PACKAGES : ADD LIVE AT RUNTIME
          =>  DELEGATES : METHODS CAN BE ADDED/REMOVED AT RUNTIME (THINK PLUGIN)
    
       EVENT -= METHOD01;

a) TRIVIAL WALKTHROUGH

    using System;
    
    namespace lab_60_events_trivial
    {
        class Program
        {
            // delegate (restriction on method types)
            public delegate int Delegate01(string x);
            // event
            public static event Delegate01 Event01;
            static void Main(string[] args)
            {
     
            }
    
    
            static int Method01(string input)
            {
                Console.WriteLine("hey are you printing something?");
                Console.WriteLine(input);
                return input.Length;
            }
            static int Method02(string input)
            {
                Console.WriteLine("hey are you 2 printing something?");
                Console.WriteLine(input);
                return input.Length;
            }
        }
    }

b) OOP WALKTHROUGH

    using System;
    
    namespace lab_61_events_OOP
    {
    class Program
    {
    static void Main(string[] args)
    {
    
    /*Scenario : Child will have a birthday
                        Birthday is the EVENT
                        HaveAParty is the METHOD
                        We attach to an OOP INSTANCE ie var james = new Child();
    
             */
            var James = new Child();
            for (int i = 0; i < 12; i++)
            {
                James.Grow();
            }
    
        }
    }
    
    class Child
    {
        public delegate int BirthdayDelegate();    // matches HaveAParty()
        public event BirthdayDelegate OneMoreYearOlder;
        public int Age { get; set; }
    
        public Child()
        {
            Age = 0;
            Console.WriteLine($"Congratulations on the birth of your new baby!  Age is {Age}");
            OneMoreYearOlder += HaveAParty;   // event is now not null
        }
    
        public void Grow()
        {
            // call the event
            OneMoreYearOlder();
        }
    
        public int HaveAParty()
        {
            Age++;
            Console.WriteLine($"Celebrating Birthday : Age is now {Age}");
            return Age;
        }
    }
    }