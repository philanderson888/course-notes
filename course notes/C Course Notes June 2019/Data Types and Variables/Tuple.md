# Tuple

// TUPLES
    void DoThis() { }
    
    int DoThat() {
        return -1;
    }
    
    void DoingSomething (out int result, out string result2)
    {
        result = -1;
        result2 = "hi";
    }
    
    // TUPLE IS AN ANONYMOUS TYPE 
    
    // DECLARE
    (string x01, int y01, bool z01) DoingSomethingElse() {
        return ("hi", 10, false);
    }
    
    // CALL 
    var output01 = DoingSomethingElse();
    
    // GET INDIVIDUAL ITEMS
    Console.WriteLine($"{output01.x01}{output01.y01}{output01.z01}");