# Abstract Classes

When building code in industry it may be that it is required your code must have certain methods inside it.  So other coders will be able to expect and use these methods.

.ToString()    is available on most objects, can expect this

It's possible to force a class to have a certain named method

Mind Picture : Going On Holiday

Great idea for an amazing vacation

Idea :         abstract class HolidayPlans

Place  Perth, Australia

When  Tomorrow

Transport : Undecided

Itinerary : Undecided

    
    using System;
    
    namespace lab_21_abstract_class
    {
        class Program
        {
            static void Main(string[] args)
            {
                //var holiday = new HolidayIdea();
                var holiday = new LetsGo();
                holiday.Transport();
                holiday.Itinerary();
                
            }
        }
    
    
        abstract class HolidayIdea
        {
            internal void Location() { Console.WriteLine("sorted"); }
            internal void Dates() { Console.WriteLine("sorted"); }
    
            public abstract void Itinerary();
            public abstract void Transport();
        }
    
        class LetsGo : HolidayIdea
        {
            public override void Itinerary() { Console.WriteLine("see the sights"); }
            public override void Transport() { Console.WriteLine("fly bus train walk"); }
        }
    }