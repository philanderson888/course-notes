# Sealing A Class

## Sealing a class

Sometimes we wish to disable inheritance.

We can do this using the 'sealed' keyword

Example in industry is IT security : code which don't want anyone to mess with or alter.  Seal the parent.  Impossible to create a child (Derived) class.

// sealed class

    sealed class Rabbit
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
            public void Grow(double winterGrowth)
            {
                //Convert.ToDecimal(winterGrowth);
                Age += winterGrowth;
     
            }
        }
    
        class SubRabbit  // cannot inherit
        {
            public string HereIsACustomField;
        }
    
    
    
    Console.WriteLine("\n\nSubrabbits taking over\n\n");
    var s = new SubRabbit();
    //s.Age = 0;
    for (int i = 0; i < 10; i++)
    {
      //  s.Grow();
      //  Console.WriteLine(s.Age);
    }
    s.HereIsACustomField = "Hey I'm changing the subRabbit";