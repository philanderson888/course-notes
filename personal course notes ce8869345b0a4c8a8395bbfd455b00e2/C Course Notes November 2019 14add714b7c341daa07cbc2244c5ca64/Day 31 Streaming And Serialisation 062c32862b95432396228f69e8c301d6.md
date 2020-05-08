# Day 31 - Streaming And Serialisation

# Streaming And Serialization

Summary of existing knowledge

Encoding : laying down files
ASCII
UTF8 - web and .NET Core

File Signature eg .JPG or .DOCX

Stream : Chop up large files into blocks of data

```
Binary type file  .EXE .DLL .JPG  .MOV which are RAW STREAMS OF 1/0. VERY FAST BECAUSE
			NOT CONVERTED TO ANY TYPE

	byte[] buffer = new byte[1024];    // DEFINE BLOCK SIZE FOR YOU SENDING A CHUNK
	 								   // ACROSS THE INTERNET [BUFFER]

	send all blocks (full) 
	last block may not be full : Flush() method to send data anyway

Character (text-based) type file   .TXT  .JSON   .JS  .HTML  .CSS .XML  .XAML
```

Serialise

```
Swap between C# OOP fixed data types

	Class MyClass

		var instance = new MyClass();

			SERIALISE : take 'instance' and prepare it to be sent across internet

				Remove METHODS
				Remove PRIVATE FIELDS

			Picture : Serialize is a bit like 'FLAT PACK' furniture from IKEA

			Computer 							IKEA

			Class 								Assembly Instructions

			instance 							real thing, built

			serialise our instance    			   deconstruct and 'flat pack' for
													transport 

			====>> send across internet         take furniture home

					'STREAM'  to
						FILE/NETWORK/MEMORY

			de-serialise our instance back 		rebuild furniture (using instructions)
			into an instance of the Class
```

Labs

We are now going to have a look at

1. Streaming

    To File System as it's more straightforward

    To Http as this will be very common

2. Async...Await which is a way of calling methods ASYNCHRONOUSLY ie OFF THE MAIN THREAD
3. Serialisation

    to BINARY 10101010
    to JSON { }
    to XML < >

```csharp
using System;
using System.IO;   // INPUT OUTPUT 
using System.Linq;
using System.Diagnostics;
using System.Text;

namespace Lab_18_Streaming
{
    class Program
    {
        static void Main(string[] args)
        {

            // system.io WRITING FILES
            File.WriteAllText("data.txt", "Hello this is some data");

            var myArray = new string[] { "Hello","This","is","Some","Data"};
            File.WriteAllLines("ArrayData.txt", myArray);

            // append data
            for (int i = 0; i < 10; i++)
            {
                File.AppendAllText("data.txt", $"\nAdding line {i} at {DateTime.Now}");
            }

            for (int i = 0; i < 10; i++)
            {
                File.AppendAllText("data.txt", Environment.NewLine + $"Adding line {i} at {DateTime.Now}");
            }
            Console.WriteLine(File.ReadAllText("data.txt"));

            var output = File.ReadAllLines("ArrayData.txt").ToList();
            output.ForEach(line => Console.WriteLine(line));

            Directory.CreateDirectory("Here Is A Folder");
            File.Create("Here Is A Folder\\myfile.txt");
            File.Create(@"Here Is A Folder\myfile2.txt");

            Directory.CreateDirectory(@"C:\RootFolder");
            Console.WriteLine(Directory.Exists(@"C:\RootFolder"));

            // Stream some data to a file
            // system can cope with large files : breaks them down into blocks and sends them
            var numberOfLines = 20_000;
            var s = new Stopwatch();
            s.Start();

            using (var stream01 = new StreamWriter("output.dat"))
            {
                for (int i = 0; i< numberOfLines;i++)
                {
                    stream01.WriteLine($"Logging some data at {DateTime.Now}");
                }
            }

            var writeTime = s.ElapsedMilliseconds;
            Console.WriteLine($"It took {s.ElapsedMilliseconds} to write {numberOfLines} lines");

            // read the data
            string nextline;

            using (var reader = new StreamReader("output.dat"))
            {
                // READER DOES NOT KNOW HOW BIG FILE IS
                // READ UNTIL reader.READLINE is NULL
                while ((nextline = reader.ReadLine()) != null)
                {
                    //Console.WriteLine(nextline);
                }
                reader.Close();
            }
            
            Console.WriteLine($"It took {s.ElapsedMilliseconds-writeTime} to read {numberOfLines} lines");

            // building a string
            // regular string building with + GENERATE A NEW INSTANCE EVERY TIME
            // STRINGS ARE IMMUTABLE (CANNOT CHANGE THEM)
            // t   ==>   th   ==>    thi
            s.Restart();
            var longString = "";
            using (var reader = new StreamReader("output.dat"))
            {
                while ((nextline = reader.ReadLine()) != null)
                {
                    longString += nextline;
                }
                reader.Close();
            }
            Console.WriteLine($"It took {s.ElapsedMilliseconds} to add {numberOfLines} strings together");
            //Console.WriteLine(longString);

            s.Restart();
            longString = "";
            var stringBuilder = new StringBuilder();
            using (var reader = new StreamReader("output.dat"))
            {
                while ((nextline = reader.ReadLine()) != null)
                {
                    stringBuilder.Append(nextline);
                }
                reader.Close();
            }
            Console.WriteLine($"It took {s.ElapsedMilliseconds} to add {numberOfLines} strings together using StringBuilder");

        }
    }
}
```