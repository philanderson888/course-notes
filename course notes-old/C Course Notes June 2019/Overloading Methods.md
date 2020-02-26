# Overloading Methods

Methods and Overloading

Overloading has SAME METHOD NAME but passing in DIFFERENT PARAMETERS

DoThis()

DoThis(int x);

DoThis(string y)

DoThis(int x, sring y)

    using System;
    
    namespace lab_18_method_overloading
    {
        class Program
        {
            static void Main(string[] args)
            {
                var r = new Rabbit();
                r.Age = 0;
                for (int i = 0; i < 10; i++)
                {
                    r.Grow();
                    Console.WriteLine(r.Age);
                }
                Console.WriteLine("\n\nHey it's summer now - growth rate has increased\n\n");
                for (int i = 0; i < 10; i++)
                {
                    r.Grow(i);
                    Console.WriteLine(r.Age);
                }
                Console.WriteLine("\n\nHey it's wnter now - growth rate has decreased\n\n");
                for (int i = 0; i < 10; i++)
                {
                    r.Grow(0.1);
                    Console.WriteLine(r.Age);
                }
    
            }
        }
    
        class Rabbit
        {
            public double Age { get; set; }
            public void Grow()
            {
                Age++;
            }
            public void Grow(int growthFactor)
            {
                Age += growthFactor;
            }
    
    				// this bit is not working!!!!
            public void Grow(double winterGrowth)
            {
                //Convert.ToDecimal(winterGrowth);
                Age += winterGrowth;
     
            }
    
        }
    }