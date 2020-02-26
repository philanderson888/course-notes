# Tasks

# Tasks

Synchronous code runs line by line. It waits for the next statement.

    If one line takes a long time, the whole program 'hangs'.  
    
    The user experience can be very poor with synchronous applications.
    
    Web application : does not look good if user staring at a blank screen for x seconds
    
    Common now for both back-end and front-end code to integrate ASYNCHRONOUS CODE
    
    	Main(){                 main thread
    
    		Task() 				sub-threads
    		Task()
    		Task()
    
    	}   
    
    			CPU of computer will manage all threads.
    			Programmer does not need to manage the threads; just call them.
    
    
    			Old computing ==> THREADS : programmer management
    			New computing ==> TASKS   : call threads for you, manage 'headache' for 							you

Topics today
Basic task
Array of multiple tasks
Wait for ONE OR ALL tasks in array to finish
Parallel FOR LOOP, FOREACH LOOP, LINQ QUERY OVER COLLECTION

Background terms

    Process					running .exe on your computer.
    						View with TASK MANAGER or Get-Process
    
    Thread 					Group of instructions/code sent to CPU for processing
    						at one time.
    
    Assembly Code 			RAW instructions sent line by line into CPU for execution
    Machine Code 			Same as assembly language, IN HEX
    Instruction set 		Set of commands which a CPU has been programmed to execute
    						It's like the INPUT/OUTPUT rules and operations which a 
    						CPU can execute
    
    Service 				Code which runs AT COMPUTER STARTUP REGARDLESS IF USER
    							IS PRESENT OR NOT
    
    Application 			Code which runs AFTER A USER LOGS IN
    							Automatic eg Skype
    							Manually triggered

# Running A Task

    using System;
    using System.Diagnostics;
    using System.Threading.Tasks;
    using System.Threading;
    
    namespace lab_72_tasks
    {
        class Program
        {
            static void Main(string[] args)
            {
                // OLD
                var ActionMethod01 = new Action(DoThis);
                var task01 = new Task(ActionMethod01);
                task01.Start();
    
                // OLD
                // HEY COMPUTER PLEASE CREATE A BACKGROUND TASK, AND, WHENEVER THE CPU HAS RESOURCES AVAILABLE, RUN THIS TASK. PLEASE.  THANKS!
                // CPU : HEY, NO PROBLEM.  
                
    
                var task02 = Task.Factory.StartNew(
                            // PLACEHOLDER FOR A METHOD
                            // DELEGATES WHICH ARE PLACEHOLDERS FOR METHOD
                           () => { Console.WriteLine("Inside Task02 which is called by Task Factory"); }
                    );
    
                // ALMOST CURRENT
                var task03 = new Task(
                    () => { Console.WriteLine("In task 03"); }
                    );
                task03.Start();
    
                // DO THIS WAY
                var task04 = Task.Run(
                    () => {
                        Console.WriteLine("In task 04 - use this way to create and run tasks" );
                        DoThis();
                    }
                );
    
                // hang the program so it does not terminate
                Console.WriteLine("The program has finished");
                Console.ReadLine();
            }
    
            static void DoThis()
            {
                Thread.Sleep(10);
                Console.WriteLine("I am doing something");
            }
        }
    }

# Running an Array of tasks eg an overnight batch job which has a number of tasks to

execute. For example overnight data processing or running backups.

    Array of tasks ==> processing can be done IN PARALLEL IE NOT SEQUENTIAL.

    using System;
    using System.Threading.Tasks;
    using System.Threading;
    using System.Diagnostics;
    
    namespace lab_73_array_of_tasks
    {
        class Program
        {
            static void Main(string[] args)
            {
                var s = new Stopwatch();
                s.Start();
                var taskArray = new Task[3];
                taskArray[0] = Task.Run( () => {
                    Thread.Sleep(100);
                    Console.WriteLine($"Task 0 done at {s.ElapsedMilliseconds}");
                });
                taskArray[1] = Task.Run( () => {
                    Thread.Sleep(50);
                    Console.WriteLine($"Task 1 done at {s.ElapsedMilliseconds}");
                });
                taskArray[2] = Task.Run( () => {
                    Thread.Sleep(25);
                    Console.WriteLine($"Task 2 done at {s.ElapsedMilliseconds}");
                    var taskNested = Task.Run(() => { Console.WriteLine("nested task inside task 2"); });
                });
    
                // WAIT FOR ONE TO TERMINATE FIRST
            //    Task.WaitAny(taskArray);
    
                // WAIT FOR EVERY TASK
                Task.WaitAll(taskArray);
    
    
                // hang
                Console.WriteLine($"Task terminated at {s.ElapsedMilliseconds}");
                Console.ReadLine();
    
                
    
    
    
            }
        }
    }

### Returning a value from a task

It's important to realise in a GUI environment the sub-task can't immediately communicate with the parent main thread.

Can return data from task

    using System;
    using System.Threading.Tasks;
    using System.Threading;
    using System.Diagnostics;
    
    namespace lab_73_array_of_tasks
    {
        class Program
        {
            static void Main(string[] args)
            {
                var s = new Stopwatch();
                s.Start();
                var taskArray = new Task[3];
                taskArray[0] = Task.Run( () => {
                    Thread.Sleep(100);
                    Console.WriteLine($"Task 0 done at {s.ElapsedMilliseconds}");
                });
                taskArray[1] = Task.Run( () => {
                    Thread.Sleep(50);
                    Console.WriteLine($"Task 1 done at {s.ElapsedMilliseconds}");
                });
                taskArray[2] = Task.Run( () => {
                    Thread.Sleep(25);
                    Console.WriteLine($"Task 2 done at {s.ElapsedMilliseconds}");
                    var taskNested = Task.Run(() => { Console.WriteLine("nested task inside task 2"); });
                });
    
                // WAIT FOR ONE TO TERMINATE FIRST
            //    Task.WaitAny(taskArray);
    
                // WAIT FOR EVERY TASK
                Task.WaitAll(taskArray);
    
    
                // hang
                Console.WriteLine($"Task terminated at {s.ElapsedMilliseconds}");
                Console.ReadLine();
    
    
    
                // RETURN DATA FROM A TASK
    
                // Generics     Task<T>    T is the TYPE of DATA TO RETURN
    
                var taskGiveMeDataBack = Task<string>.Run(
                    () => { Console.WriteLine("task is running");
                        return "Task has completed";
                    }
    
                    );
    
                Console.WriteLine(taskGiveMeDataBack.Result);
    
            }
        }
    }