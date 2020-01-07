# Day 29 - Tasks Continued

# Tasks (continued)

We had earlier discussed about

    CPU
    ... runs THREADS 
    ... and one PROCESS can have multiple THREADS
    ... and we can SEE EACH PROCESS AS A .EXE IN TASK MANAGER
    
    Thread .. set of instructions TO CPU
    Process .. .exe running live in memory
    
    	Two Types Of Process
    
    		- Background SERVICE 		Computer startup (no user present)
    		- Application 				User log on and run the app (after login)
    
    
    		Services : view with 'get-service' or 'Services' snap-in
    
    
    .exe (...) ... multiple threads ... talk to CPU

Within our APPLICATION
we have our MAIN THREAD which ALWAYS STARTS

    Synchronous : WAIT ALWAYS
    	Asynchronous : CREATE SUBTASKS TO DO OUR WORK - APPLICATION IS FAST
    
    
    	Older versions
    		THREADING : DETAILED AND DIFFICULT TO GET RIGHT (OVERHEAD)
    	Currently
    		TASKS : Abstraction OVER TASKS IE Microsoft does a lot of work for 
    				you

    using System;
    using System.Threading;
    using System.Threading.Tasks;
    using System.Diagnostics;
    
    namespace Lab_15_Tasks
    {
        class Program
        {
            static void Main(string[] args)
            {
                var stopwatch = new Stopwatch();
                stopwatch.Start();
    
                // inside can go a DELEGATE OR ANONYMOUS METHOD USING LAMBDA
                // SYNTAX
    
                var task01 = new Task(
                    () => { }                  // lambda anonymous method
                );
    
                var task02 = new Task(
                    () => { Console.WriteLine("In Task 02"); }                  
                );
                task02.Start();
    
    
    
                // slicker way
                var task03 = Task.Run(() => { Console.WriteLine("In Task 03"); });
                var task04 = Task.Run(() => { Console.WriteLine("In Task 04"); });
                var task05 = Task.Run(() => { Console.WriteLine("In Task 05"); });
    
                // stopwatch
                // array of tasks
                // wait for one to complete / all to complete
    
                Console.WriteLine(stopwatch.ElapsedMilliseconds);
                Console.ReadLine();
            }
        }
    }