# Arrays

using System;
    
    namespace lab_34_list
    {
        class Program
        {
    
    
    
            static void Main(string[] args)
            {
                // arrays are fixed
                var array01 = new int[10];  // size fixed
                // 2d array
                int[,] Grid2D = new int[10, 10];
                int[,,] Cube3D = new int[5, 5, 5];
                var Grid4D = new int[10, 10, 10, 10];
                // the above arrays are all fixed in size 100% 
    
                // it's possible to create an array of arrays where each array can be
                // different size
    
                // jagged array
                int[][] jaggedArray01 = new int[3][];
                // first array size 10
                jaggedArray01[0] = new int[10];
                // seconde array size 100
                jaggedArray01[1] = new int[100];
                jaggedArray01[2] = new int[1000];
    
            }
        }
    }