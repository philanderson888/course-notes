# Hello World

# Hello World

### Solution

### Project

### Main() method

### string[] args

## Debug

### Debug vs Release mode

### Breakpoints

### Breakpoints Conditional

### Debug Windows

### Watching, Autos, Locals Windows

### CSC Compiler

    ## Bonus : Compiling One C# File With The Compiler
    
    Rather than handle compiling within Visual Studio, it is possible to do this outside of Visual Studio.  Here is an example.
    
    1. Copy the code from Program.cs into a text file and save it as MyApplication.cs.  Make sure there is at least one `Console.WriteLine` producing visual output on the screen.
    
    2. Find the path to csc.exe which stands for C Sharp Compiler.exe  An example is below but find it specifically on your computer.
    
    Then run
    
    ```bash
    C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe MyApplication.cs
    ```
    
    This will have produced MyApplication.exe which can run.
    
    You can run it by double clicking on it, but it will probably run then terminate too quickly to see what's happening.
    
    Or you can run from the command line 
    
    ```bash
    ./MyApplication.exe
    ```