# Network eg PING

using System;
    using System.Net.Http;
    using Newtonsoft.Json;
    using System.Linq;
    using System.Collections.Generic;
    using System.Net;
    using System.Net.NetworkInformation;
    using System.Text;
    
    namespace API_2019_09_20_Console_Core_READ_API
    {
    
    
        class Program
        {
    
            static List<ToDoList> todoitems = new List<ToDoList>();
            static string url = "https://localhost:44300/api/ToDoLists";
    
    
            static void Main(string[] args)
            {
                CheckNetworkConnection("8.8.8.8");
    
               
    
            }
    
            static void CheckNetworkConnection(string parameter)
            {
                Ping pingSender = new Ping();
                PingOptions options = new PingOptions();
    
                // Use the default Ttl value which is 128,
                // but change the fragmentation behavior.
                options.DontFragment = true;
    
                // Create a buffer of 32 bytes of data to be transmitted.
                string data = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
                byte[] buffer = Encoding.ASCII.GetBytes(data);
                int timeout = 120;
                for (int i = 0; i < 4; i++)
                {
                    Console.WriteLine($"\n\nLoop {i}\n");
                    PingReply reply = pingSender.Send(parameter, timeout, buffer, options);
    
                    if (reply.Status == IPStatus.Success)
                    {
                        Console.WriteLine($"Message status is {reply.Status}");
                        Console.WriteLine($"IPStatus.Success is {IPStatus.Success}");
                        Console.WriteLine("Address: {0}", reply.Address.ToString());
                        Console.WriteLine("RoundTrip time: {0}", reply.RoundtripTime);
                        if (reply.Options != null)
                        {
                            Console.WriteLine("Time to live: {0}", reply.Options.Ttl);
                            Console.WriteLine("Don't fragment: {0}", reply.Options.DontFragment);
                        }
                        Console.WriteLine("Buffer size: {0}", reply.Buffer.Length);
                    }
                    else
                    {
                        Console.WriteLine($"Fail");
                    }
    
    
    
                }
    
            }
    
    
        }
    
    
     
    }