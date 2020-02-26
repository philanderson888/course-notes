# Day 30 - Tasks (continued)

# Tasks (continued)

    using System;
    using System.Threading.Tasks;
    using System.Threading;
    using System.Diagnostics;
    using System.Linq;
    
    namespace Lab_16_Tasks
    {
        class Program
        {
            static Stopwatch s = new Stopwatch();
            static void Main(string[] args)
            {
    
                s.Start();
    
                var task01 = Task.Run(() => { 
                    Console.WriteLine("Task01 is running");
                    Console.WriteLine($"Task01 completed at time {s.ElapsedMilliseconds}");
                }  
                );
    
                // old fashioned way of putting a DELEGATE AS A PARAMETER INTO A TASK
                var actionDelegate = new Action(SpecialActionMethod);  // pass in Method as ARGUMENT
                var task02 = new Task(actionDelegate) ;
                task02.Start();
    
                
                
                // array of ANONYMOUS tasks
                Task[] taskArray = new Task[]
                {
                    new Task(   ()=>{ // do a job eg overnight procesing task
                    }  ),
                    new Task(   ()=>{ }  ),
                    new Task(   ()=>{ }  ),
                    new Task(   ()=>{ }  ),
                    new Task(   ()=>{ }  ),
                    new Task(   ()=>{ }  ),
                    new Task(   ()=>{ }  ),
                    new Task(   ()=>{ }  )
                };
                foreach(var task in taskArray)
                {
                    task.Start();
                }
    
                // second way
                var taskArray2 = new Task[3];
                taskArray2[0] = Task.Run(() => {
                    Thread.Sleep(500);
                    Console.WriteLine($"Array Task 0 completing at {s.ElapsedMilliseconds}"); 
                });
    
                taskArray2[1] = Task.Run(() => {
                    Thread.Sleep(200);
                    Console.WriteLine($"Array Task 1 completing at {s.ElapsedMilliseconds}");
                });
    
                taskArray2[2] = Task.Run(() => {
                    Thread.Sleep(100);
                    Console.WriteLine($"Array Task 2 completing at {s.ElapsedMilliseconds}");
                });
    
                // WAIT FOR ONE OR ALL ARRAY TASKS TO COMPLETE
                Task.WaitAny(taskArray2);
                Console.WriteLine($"Waiting for first array task to complete at {s.ElapsedMilliseconds}");
                // WAIT FOR ALL
                Task.WaitAll(taskArray2);
                Console.WriteLine($"Waiting for ALL ARRAY TASKS : COMPLETE AT {s.ElapsedMilliseconds}");
    
    
                // PARALLEL FOREACH LOOP
                int[] myCollection = new int[] { 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 };
                // REGULAR FOREACH IS IN ORDER 1..2...3..4..
                // PARALLEL FOREACH JUST KICKS OFF X JOBS AT SAME TIME, WAIT FOR ANSWERS
                var u = s.ElapsedMilliseconds;
                Console.WriteLine($"Parallel loop starting at time {s.ElapsedMilliseconds}");
                Parallel.ForEach(myCollection, (item)=> {
                    Thread.Sleep(item * 100);
                    Console.WriteLine($"Foreach Loop item {item} finishing at time {s.ElapsedMilliseconds}");
                    if (item == 100)
                    {
                        Console.WriteLine($"Async loop took {s.ElapsedMilliseconds-u}");
                    }
                });
    
                // contrast with sync loop
                var t = s.ElapsedMilliseconds;
                Console.WriteLine($"\\n\\nNow run as Sync loop and starting at time {s.ElapsedMilliseconds}\\n");
                foreach(var item in myCollection)
                {
                   // Thread.Sleep(item * 100);
                    Console.WriteLine($"Sync Foreach Loop item {item} finishing at time {s.ElapsedMilliseconds}");
                }
                Console.WriteLine($"Sync loop took {s.ElapsedMilliseconds-t} milliseconds to complete");
    
    
                // ALSO POWERFUL IS PARALLEL LINQ : DATABASE QUERIES IN PARALLEL
                // FAKE IT HERE : USE LOCAL COLLECTION 
                var databaseOutput =
                    (from item in myCollection
                     select item).AsParallel().ToList();
                // could use this on real database query if many queries and each one possibly takes a long time
    
    
                // Getting data back from Tasks
                var TaskWithoutReturningData = new Task(  ()=> { }    );
                var TaskWithReturningData    = new Task<int>(  ()=> {
                    int total = 0;
                    for(int i = 0; i < 100; i++)
                    {
                        total += i;
                    }
                    return total;
                });
    
                TaskWithReturningData.Start();
    
    
    
                Console.WriteLine($"I have counted to 100 using a background task so I don't have " +
                    $"to hang the main thread while I wait.  The answer is {TaskWithReturningData.Result}");
                Console.WriteLine("Actually : DISCLAIMER : THE ACT OF WAITING FOR A RESULT BY DEFINITION" +
                    "TURNS THIS INTO A SYNCHRONOUS OPERATION...MORE DETAILS TO FOLLOW");
    
    
    
    
                Console.WriteLine($"Main Method : all tasks complete at time {s.ElapsedMilliseconds}");
                // one tick is 10 to the power -7 seconds ie 0.1 micro second
                //Console.WriteLine($"Application has finished at time {s.ElapsedTicks}");
                Console.ReadLine();
    
                // data types
                int num01 = 1_000_000_000;
                // hex
                int num02 = 0x_FF_01;
                // binary
                int num03 = 0b_0101_1100;
            }
    
            static void SpecialActionMethod() {
                Console.WriteLine("This Action Method takes no parameters, returns nothing, but just" +
                    "performs an action, in this case print out ....");
                var total = 0;
                for(int i = 0; i < 1_000_000_000; i++)
                {
                    total += i;
                }
                Console.WriteLine(total);
                Thread.Sleep(2000);
                Console.WriteLine($"Special Action Method completing at {s.ElapsedMilliseconds}");
            }
        }
    }