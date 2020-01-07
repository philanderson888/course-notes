# Exceptions

### Error

Error =⇒ error in logic by programmer.  This may not cause any visible consequences.  Code might appear to run fine.  This is why we run 'tests' to check if the output is correct

eg Bank =⇒ wrong interest rate!!!

### Exception

Code runs but when running, the code is unable to complete running, and crashes to an abrupt stop.

Unhandled exception  =⇒   User sees nasty code message on screen and program terminates

Handled exception  ...  try..catch..finally.....  deal with exception properly in our code.

'Graceful' handling ..

### Types Of Exception

DivideByZero

FileNotFound

IndexOutOfRange    array[n]      

StackOverflowException  

ArithmeticException

NullReferenceException        var x = null;     cw(x.Length)

# 

### Order Of Exceptions

We should put the most specific exceptions first and the general exception last.

The code will trigger the first exception that is valid,  then exit.

1. DivideByZero
2. Arithmetic
3. Exception

### Throwing An Exception

We can create and throw our own 'custom' exceptions

    try
    {
        throw new Exception("Something terrible has happened");
    }
    
    catch(Exception e)
    {
        Console.WriteLine(e);
        Console.WriteLine(e.Data);
        Console.WriteLine(e.Message);
    }

### Nesting

It is common particularly in big applications to have nesting with try..catch