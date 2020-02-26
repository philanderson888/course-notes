# Debugging

# Debugging

    using System;
    using System.Diagnostics;
    using System.IO;
    
    namespace lab_59_Debugging
    {
        class Program
        {
            static void Main(string[] args)
            {
                for (int i = 0; i < 10; i++)
                {
                    Console.WriteLine(i);
                    Debug.WriteLine($"Debugging To OUTPUT WINDOW (only in debug mode) : i is {i}");
                    Trace.WriteLine($"Trace to OUTPUT WINDOW " +
                        $"(in final release mode and debug mode) : i is {i}");
                    File.AppendAllText("output.txt",$"Logging To text file {DateTime.Now} i has value {i}");
                    var output = $"Logging To text file {DateTime.Now} i has value {i}";
    
                    // log to C:\\Log folder
                    if (!Directory.Exists("c:\\\\log")){
                        Directory.CreateDirectory("c:\\\\Log");
                    }
                    File.AppendAllText("C:\\\\Log\\\\output.txt", output + Environment.NewLine);
                    // log to My Documents\\Log folder
                    File.AppendAllText("C:\\\\Users\\\\tech-w99a.LAPTOP-3BLG1NHP\\\\Documents\\\\Log\\\\output.txt", output + Environment.NewLine);
                    // ANY USER???  specialfolders....
                    File.AppendAllText(System.Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments)
                        + "\\\\Log\\\\output.txt", output + Environment.NewLine);
                    //  @ LITERAL STRING NOTATION AS WELL
                    var MyDocumentsPath = System.Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
                    var path = MyDocumentsPath + "\\\\Log\\\\output.txt";
    
                    File.AppendAllText(@"C:\\Users\\tech-w99a.LAPTOP-3BLG1NHP\\Documents\\Log\\output.txt", output + Environment.NewLine);
    
                    // can also log to the Windows Application Event Log
    
                    EventLog.WriteEntry("Application", "output", EventLogEntryType.Information, 5678, 123);
    
                }
                EventLog.WriteEntry("Application", "Your Windows Has Been Hacked", EventLogEntryType.Information, 5678, 123);
    
                for(int j = 0; j < 10; j++)
                {
                    1Console.WriteLine($"J has value {j}");
                }
    
    
                Console.ReadLine();
    
    
                // 1 ==> debug which is F5
                // 2 ==> not debug mode which is Control F5 in Debug ==> still shows all output
                // 3 ==> not debug mode PLUS Build => Configuration => Release then only shows TRACE output
                // TODO SOME WORK HERE
                // ToDo Some more work here
    
                // Debugging
                /*
                 Control F5 ==> No Breakpoint
                 F5 => Breakpoint
                   F10 ==> next line
                   F11 ==> next line but if calls Method, go deeper
                   Ctl-shift-F5  Restart
    
    
                  */
                 
    
            }
        }
    }