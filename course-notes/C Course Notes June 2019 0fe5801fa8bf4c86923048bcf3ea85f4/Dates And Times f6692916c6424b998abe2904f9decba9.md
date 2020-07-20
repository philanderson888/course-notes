# Dates And Times

## Times

```csharp
using System;
using System.Diagnostics;

namespace lab_27_date_time_stopwatch
{
    class Program
    {
        static void Main(string[] args)
        {
            // Times

            var time01 = DateTime.Now;
            Console.WriteLine(time01);

            Console.WriteLine(time01.ToLongTimeString());

            // add units of time

            Console.WriteLine(time01.AddDays(2));
            Console.WriteLine(time01.AddSeconds(2));
            
            Console.WriteLine(time01.AddMilliseconds(2567));
            Console.WriteLine(time01.AddMilliseconds(2567));
            Console.WriteLine(time01.AddTicks(2));

            // measure time
            // let's count to 1 million and measure the time
            Console.WriteLine("\n\nStarting Stopwatch\n\n");
            var s = new Stopwatch();
            s.Start();

            // run code
            for(long i = 0; i < 5_000_000_000; i++)
            {

            }

            s.Stop();
            Console.WriteLine(s.ElapsedMilliseconds);
            Console.WriteLine(s.ElapsedTicks);

        }
    }
}
```