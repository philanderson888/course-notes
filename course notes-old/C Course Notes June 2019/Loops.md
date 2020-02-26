# Loops

Loops

For..
While..
Do..While..
Foreach

Break;
Continue;
Return;

using System;

namespace lab_40_loops
{
class Program
{
static void Main(string[] args)
{
// for : fixed number of iterations

    // foreach : every item in array/collection
    
            // while (condition checked before loop, may never enter)
    
            // do .. while (condition checked after loop, always enters at least once)
    
            // break : useful when looking for 1 item only and looping until find this item
    
            string[] items = new string[] { "first", "second", "third" };
            foreach (var item in items)
            {
                if (item == "second")
                {
                    break;   // EXIT FOREACH STRUCTURE COMPLETELY
                }
                Console.WriteLine("items before break point - " + item);   // first only 
            }
    
            // continue
    
            foreach (var item in items)
            {
                if (item == "second")
                {
                    continue;     // FINISH THIS LOOP AND START ON NEXT LOOP
                }
                Console.WriteLine("items not including continue - " + item);   // 
            }
    
    
    
            // throw
            // Create loop but manually throw exception and exit loop if certain condition reached
    
    
            // return
            // use return to save lots of if..else conditions and nesting 
            var output = DoThis(10);
            Console.WriteLine(output);  // -150
    
            int DoThis(int inputnumber)
            {
                if (inputnumber == 5)
                {
                    // do this
                    return -100;
                }
                if (inputnumber == 10)
                {
                    // do another thing
                    return -150;
                }
    
                return -1000;
            }
    
    
    
        }
    }

}