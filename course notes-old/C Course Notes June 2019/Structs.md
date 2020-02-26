# Structs

A struct is a MINI CLASS 

It's stored in the FAST MEMORY OF OUR COMPUTER CALLED THE STACK MEMORY

int, bool, char, structs, short, long, byte are all PRIMITIVE TYPES AND STORED IN FASTEST PART OF MEMORY CALLED STACK MEMORY

DATA stored with DECLARED ITEM   IN MEMORY.  WHEN FINISHED, EASY TO DISPOSE OF  

(2,3)                        p01

These are called VALUE TYPES

    using System;
    
    namespace lab_33_struct
    {
        class Program
        {
            static void Main(string[] args)
            {
                var p01 = new Point(2, 3);
                var p02 = new Point(4, 7);
                var p03 = new Point(6, 12);
            }
        }
    
    
        class x { }
    
        enum fruits { }
    
        struct y { }
    
        public struct Point
        {
            // STORE POINTS ON A GRAPH
            public int X;  // capitals because public.
            public int Y;   
    
            public Point(int x, int y)
            {
                this.X = x;
                this.Y = y;
            }
        }
    }