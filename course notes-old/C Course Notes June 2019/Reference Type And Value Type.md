# Reference Type And Value Type

## Reference Type and Value Type
    
    Two types of memory in computer
    
    Stack
    
    	Fastest part of memory
    	Running code is stored
    	Main()=> Method01+variables=> Method02+variables etc
    
    
    						Method02  char c  double d, shortcut/pointer to array a[]
    						Method01  int x, bool y
    						Main()
    
    	the basic types stored on the STACK are called
    
    		PRIMITIVES
    		VALUE TYPES
    					int, bool, char, float, double, byte
    
    Heap
    
    	Larger 
    	More structured
    	Store larger items 'REFERENCE TYPES'
    		string      array of chars
    		class
    		array 			
    		list
    		queue
    		stack
    
    
    	With copying HEAP items, be aware by default you are only copying
    			the pointer item.  Therefore the underlying object is not
    			copied.  Both shortcuts point to same underlying object.
    
    
    
    
    
    
    
    Array
    	Array is a fixed structure and to reach items we just need a 'POINTER'
    	which is a fixed address in memory : lightning fast to reach items.
    
    
    
    
    
    
    Classes vs Structs
    
    
    Classes are REFERENCE TYPES ON HEAP
    Structs are VALUE TYPES ON STACK  : fast and data stored with item
    
    
    
    
    
    
    using System;
    
    namespace lab_49_reference_value_types
    {
        class Program
        {
            static void Main(string[] args)
            {
                // value types
                int x = 10;
                int y = x;
                y = 100;
                Console.WriteLine($"x is {x} and y is {y}");
    
    
    
                // reference types
    
                int[] array_a = new int[] { 10, 20, 30 };
                int[] array_b = array_a;
    
                // for every item in an array (array_name, do this)
    
                //  do this can be written in a LAMBDA FORM
    
                // LAMBDA FORM    (parameter in ==> Method out)
    
                //  if method is one line method then can omit { braces }
    
                Console.WriteLine("\n\nBefore changes\n");
                Array.ForEach(array_a, item => Console.WriteLine(item));
                Array.ForEach(array_b, item => Console.WriteLine(item));
    
                array_b[2] = 40;
    
                Console.WriteLine("\n\nAfter changes\n");
                Array.ForEach(array_a, item => Console.WriteLine(item));
                Array.ForEach(array_b, item => Console.WriteLine(item));
    
                var array_c = (int[])array_a.Clone();
                Array.ForEach(array_c, item => Console.WriteLine(item));
            }
        }
    }