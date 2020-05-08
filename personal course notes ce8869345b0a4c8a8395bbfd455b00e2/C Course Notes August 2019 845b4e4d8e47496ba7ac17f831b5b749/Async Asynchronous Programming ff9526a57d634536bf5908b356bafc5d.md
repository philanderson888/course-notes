# Async (Asynchronous) Programming

```csharp
using System;
using System.Diagnostics;
using System.Threading;
using System.IO;
using System.Collections.Generic;

namespace lab_30_async
{
    class Program
    {
        static List<string> lines = new List<string>();
        static Stopwatch s = new Stopwatch();

        static void Main(string[] args)
        {

            s.Start();

            // File.Delete("data.txt");
            //// create dummy data
            //for (int i = 0; i < 100000; i++)
            //{
            //    File.AppendAllText("data.txt",$"\nAdding Line {i} at {DateTime.Now}");

            //}

            // DoThisLongThing();
            DoThisLongThingAsync();
            Console.WriteLine($"Main Thread has finished at time {s.ElapsedMilliseconds} milliseconds");
            Console.ReadLine();
            
        }

        static void DoThisLongThing()
        {
            Thread.Sleep(3000);
        }
        async static void DoThisLongThingAsync()
        {
            
            // STREAM IN LINES USING STREAMREADER (DON'T KNOW EXACTLY LENGTH OF DATA WE ARE PULLING IN)
            using (var reader = new StreamReader("data.txt"))
            {
                while (true)
                {
                    var line = await reader.ReadLineAsync();
                    if(line==null)
                    {
                        break;
                    }
                    lines.Add(line);
                }
            };

            s.Stop();
            Console.WriteLine($"Finished reading {lines.Count} lines which took {s.ElapsedMilliseconds} milliseconds");
        }
    }
}
```

# Async

If we run an application then the code will run top-down, line by line.
If an operation takes a long time then the program will 'hang' and appear
to do nothing.
Today we want 'responsive' apps which don't 'hang' unless there is a critical fault.
Examples mainly include online/offline apps which have sensitivity to the network status. If the app goes offline, it can either stop working or revert to an offline mode.

C#

```
Main(){
	DoThisAsync();     // convention is use word 'Async' at END OF METHOD
	Console.ReadLine();  // ensure program stops and waits for async to 
							complete.  Otherwise application may terminate
							before async returns.
}

async static void DoThisAsync(){
	await File.ReadAsync("thisfile.txt");  // marks line where aysync
	 										// operation takes place
}

async keyword ensures that the 'Main' method now does not WAIT for this
method but the processing just calls the method then continues processing
the next line of the main method.
```