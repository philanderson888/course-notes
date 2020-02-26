# Day 37 - Debugging

# Debugging

It is important to know how to debug a project.

## Debugging - Visible Windows To View Debugging Information

### Output window - main window

    We can print output
    1) To Console (if a console app)
    2) To Output Window using
    	a)   Debug.WriteLine
    	b)   Trace.WriteLine
    	These are in System.Diagnostics
    	Debug only works when you run program in Debug mode (ie F5 not Control F5).  Also when you BUILD project in RELEASE MODE this is turned off.
    	Trace always works in every mode.
    3) Log to text file
    4) Log to computer which has a built-in logging system called Event Log

There are some other windows as well

    Autos - automatic variables ie this line and previous line
    
    Locals - variables you are watching
    
    Immediate - allows you to enter C# code live!

## Conditional Debugging

On a breakpoint, we can set a condition so the code will not break unless a condition is met

## Stepping through code

Step INTO - GO INTO DEEPER LEVELS
Step OVER - STAY AT SAME LEVEL
Step OUT - Finish debugging and exit

## Conditional Compiling

Allows us to compile code depending if BUILD IS DEBUG OR RELEASE

Also to set a NAMED FLAG for compiling code or not

    #define PHILSTESTCODE
    using System;
    
    namespace Lab_30_Debugging
    {
        class Program
        {
            static void Main(string[] args)
            {
               for (int i = 0; i < 20; i++)
                {
                    var j = $"Your number doubled is {i*2}";
                    DoThis();
                    Console.Write($"{i}  ");
                }
    
    #if DEBUG
                Console.WriteLine("\\n\\nYour Program Is In Debug Mode");
    #endif
    
    #if PHILSTESTCODE
                Console.WriteLine("\\n\\nPhil's Test Code Is Running");
    #endif 
    
    
            }
            static void DoThis()
            {
                Console.WriteLine("I am doing something");
            }
        }
    }

## Logging To Event Viewer

    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using System.Diagnostics;
    
    namespace Lab_31_Event_Logging
    {
        class Program
        {
            static void Main(string[] args)
            {
                EventLog.WriteEntry("Application", "Hey we are taking over your computer",
                    EventLogEntryType.Error, 5001, 1239);
            }
        }
    }