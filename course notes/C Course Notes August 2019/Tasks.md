# Tasks

Background terms

    CPU Multi-core ie several CPUs joined together.
    
    	One CPU : process information in 'threads'
    	Multi-core : can ignore this as a developer and let TASKS handle this
    	for us in the BACKGROUND
    
    Process is an EXE or DLL file.  Actually DLL files tend to be dormant 'libraries'
    		of code which get used or 'referenced'. So actually on your computer it's 
    		the .EXE files which are EXECUTABLES which RUN YOUR APPLICATIONS.  They
    		can 'reference' DLL libraries, but it's the EXE which shows up as a 
    		running process
    
    			tasklist     
    			get-process   
    			taskkill -PID 1234
    
    Thread  : set of instructions sent in a batch to CPU for processing 
    
    Application  : runs with user request after user logon
    
    Service : runs with system request after system boot : can be OK to run
    			whether or not a user is present

C#

    Threads : Detailed developer tool to have very fine control over background threads created
    			A lot of work.
    
    Tasks : wrapper over threads.   Abstract programmer away from HARD WORK OF CREATING/MANAGING THREADS

# Tasks

Tasks are background processes. As a developer we hand over the running of each task completely to the OS. ie
Windows. We have NO CONTROL over WHICH TASK RUNS WHEN.

Common use : evening batch jobs where we go home and run various processing tasks.

    Serial ==> order matters 							SYNCHRONOUS, LINE BY LINE, WAIT FOR EACH LINE
    Parallel ==> order immaterial (does not matter)     ASYCHRONOUS, FIRST TO FINSH - YOU ARE WELCOME TO
    														FINISH WHENEVER YOU WANT

    using System;
    using System.Threading.Tasks;
    using System.Collections.Generic;
    using System.Linq;
    
    namespace lab_31_tasks
    {
        class Program
        {
            static void Main(string[] args)
            {
                // anonymous (lamdba) delegate 
                var task01 = new Task(() => { 
                    Console.WriteLine("Running Task01");     
                });
                task01.Start();
                
    
                // delegate is PLACEHOLDER FOR ONE OR MORE METHODS
                // simplest DELEGATE is called ACTION  
                // ACTION      void DoThis(){}     // no parameters in, void output
                
                var taskOld = new Task(  DoThis   );
                taskOld.Start();
    
                var task02 = Task.Run(  ()=> {
                    Console.WriteLine("Running Task02");
                });
    
    
                var taskArray = new Task[10];
                taskArray[0] = Task.Run(() => { Console.WriteLine("Task Array 00"); });
                taskArray[1] = Task.Run(() => { Console.WriteLine("Task Array 01"); });
                taskArray[2] = Task.Run(() => { Console.WriteLine("Task Array 02"); });
    
                var counter = 3;
                for (int i = 3; i < 10; i++)
                {
                    taskArray[counter] = Task.Run(() => { Console.WriteLine($"Task Array {counter}");   });
                    System.Threading.Thread.Sleep(10);
                    counter++;
                }
    
                Task.WaitAll(taskArray);
    
                Console.ReadLine();
    
                // Parallel ForEach
                var myList = new List<string> { "a", "b", "c","d","e","f","g" };
                // take 150 ms ie 3 loops in SERIAL
    
                myList.ForEach((s) => { 
                    Console.WriteLine($"Item is {s}");
                    System.Threading.Thread.Sleep(50);
                });
                // Execute in PARALLEL 
                Parallel.ForEach(myList, (s) => { 
                    Console.WriteLine($"Parallel item is {s}");
                    System.Threading.Thread.Sleep(50);
                });
                // How much faster is Parallel query (20%  50%  100%  200%)
                // PLINQ Parallel LINQ
                var output =
                    (from item in myList
                     select item).ToList();
                var outputASPARALLEL =
                    (from item in myList
                     select item).AsParallel().ToList();
    
                // Getting data back from a task
                // var t = Task.Run( ()=>{}  );
                // var t = Task<T>.Run...    return data of Type T
                // access data  t.Result 
                var taskWithResult = Task<int>.Run(   ()=> {
                    return 100;
                });
               // taskWithResult.Wait();
                Console.WriteLine($"Result of our task is  {taskWithResult.Result }");
               // Console.ReadLine();
            }
    
            static void DoThis() { Console.WriteLine("I am doing something"); }
        }
    }