# Async and Await

## Async and Await

Synchronous code

    line 1
    line 2
    line 3
    loop this takes 10 seconds
    .........
    line 5
    finish

Asynchronous code

    Main() thread      talking to CPU  as a .exe process which can view in Task 					Manager on computer  (get-process in Powershell)
    
    Create a sub-thread which runs in background.  Operating system handle
    		resources for this independently to main thread.
    
    				(( Chome : multiple instances ))

C# async model

    Convention : all methods END with ....Async
    
    
    // method marked Async
    Async void GetDataAsync(){
    	await ReadLineAsync()...          line marked await ... long operation
    }

    using System;
    using System.IO;
    using System.Diagnostics;
    using System.Text;
    
    namespace lab_50_async
    {
        class Program
        {
            static void Main(string[] args)
            {
                var counter = 0;
                // create a big text file
                // use 'streamwriter' to write a string as a stream to a file
                //using (var writer = new StreamWriter("data.dat"))
                //{
                //    writer.WriteLine($"{counter,-5} new line {DateTime.Now}");
                //    writer.WriteLine($"{counter,-5} new line {DateTime.Now}");
                //    writer.WriteLine($"{counter,-5} new line {DateTime.Now}");
                //    for(int i = 0; i < 10_000_000;i++)
                //    {
                //        writer.WriteLine($"{i,-5} new line {DateTime.Now}");
                //    }
                //}
    
                ReadDataSync();
    
    
                ReadDataAsync();
    
    
    
                while (true)
                {
                    System.Threading.Thread.Sleep(100);
                    Console.WriteLine("main loop working!");
                }
    
            }
    
            static void ReadDataSync() {
                var s = new Stopwatch();
                s.Start();
                // using can encapsulate a method which is reaching outside of the  clean
                // C# runtime.  
                // Reading a file from Windows / Database SQL read
                // include a 'close()' method in it.
    
                // STRINGBUILDER can be used to EASILY CONSTRUCT A LONG STRING from
                // lots of little inputs.
                var stringbuilder = new StringBuilder();
               // string longstring = "";
                using (var reader = new StreamReader("data.dat")) {
                    while (!reader.EndOfStream)
                    {
                        stringbuilder.Append(reader.ReadLine());
                       // longstring += reader.ReadLine();
                    }
                }
                s.Stop();
                Console.WriteLine($"Reading 10,000,000 lines took {s.ElapsedTicks}");
                System.Threading.Thread.Sleep(1000);
               // Console.WriteLine(stringbuilder);
            }
    
            async static void ReadDataAsync()
            {
                var s = new Stopwatch();
                s.Start();
                string line = null;
                var stringbuilder = new StringBuilder();
                using (var reader = new StreamReader("data.dat"))
                {
                    while (true)
                    {
                        line = await reader.ReadLineAsync();
                        if (line == null)     break;
                        stringbuilder.Append(line);
                    }
                }
                s.Stop();
                Console.WriteLine(s.ElapsedMilliseconds);
    
            }
        }
    }