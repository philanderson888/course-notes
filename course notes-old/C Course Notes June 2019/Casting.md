# Casting

using System;
    
    namespace lab_41_casting
    {
        class Program
        {
            static void Main(string[] args)
            {
                // Implicit cast
    
                // useful when it's impossible for data to be lost
                //   from int 1 to double 1.0 
                int num01 = 100;
                double d01 = num01;
    
                // Explicit cast
                // required when data definitely will be lost
                //  double 2.314 to int 2  : truncate 0.314
                double d02 = 2.314;
                int num02 = (int)d02;
                Console.WriteLine($"{d02} has become {num02}");
    
                // Is
                var p = new Parent();
                var c = new Child();
                if (c is Parent)
                {
                    Console.WriteLine("Your child is a member of the parent family");
                }
    
                // Don't really use this as exceptions if fail
    
                if (!(c is AnotherParent))
                {
                    Console.WriteLine("C is not related to another parent");
                }
    
                // cast from one type to another
                var p02 = new Parent();
                var c02 = new Child();
    
                var parentofChild2 = c02 as Parent;  // safer as returns null if fail
                var parentofChild2v2 = (Parent)c02;
    
                c02.ChildMethod(); // works fine
               // parentofChild2.ChildMethod(); // does not exist
    
                // this will not work
               // var AnotherParent = c02 as AnotherParent;
    
                
    
    
            }
        }
    
        class Parent { }
    
        class Child : Parent {
            public void ChildMethod() { }
        }
    
        class AnotherParent { }
    }