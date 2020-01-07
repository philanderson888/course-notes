# Data Types and Variables

C# is STRONGLY TYPED

All 'types' must be clearly defined at COMPILE TIME

'dynamic' keyword which can be used to exclude a variable from this strict rule.

Otherwise, everything is strictly 'typed' at compile time.

Advantage =⇒ Runtime environment has less work with type checking, so is faster

## Declaring

int x;   

int y, string z, bool b;

## Initialise

x=5;

int y = 100;

string z = "hello";

# Strings

Strings are arrays.   

'char' is one letter

string is simply and array of these letters, in order

"" not '' for strings  (use double quotes)

## Alias

string s02 = new String();   // could do this but don't

       string = alias

       String  =  Class 

char ... Char

int .... Int32

bool    Boolean

  Use the alias!!!

## int.TryParse()

Use this as it does not generate an exception if it fails

    // int.tryParse
    int.TryParse("123abc",out int output01);
    Console.WriteLine(output01);
    // int.tryParse
    int.TryParse("abc123", out int output02);
    Console.WriteLine(output02);
    // int.tryParse
    int.TryParse("abc", out int output03);
    Console.WriteLine(output03);
    int.TryParse("123", out int output04);
    Console.WriteLine(output04);

## Regex

    using System.Text.RegularExpressions;
    
    int result = Convert.ToInt32
      (
          Regex.Replace
          (
              "7yu4805jqwfwei321",    // input
              "[^0-9]",               // select everything that is not in the range of 0-9
              ""                      // replace that with an empty string.
          )
      );
    Console.WriteLine(result);

## Strings : Formatting Output

`String.Format`    shows all available options

We can normally omit String.Format for example when using the $ which is called `String Interpolation`

    :N0     0 decimal places
    :N1     1
    :N2     2
    Console.WriteLine($"{d01,10:N0}{d01,10:N1}{d01,10:N2}");
    
    :C      currency
    Console.WriteLine($"{d01,10:C}{d01,10:N0}{d01,10:N1}{d01,10:N2}");
    
    :X      hex number

## Converting Text To And From Arrays

Source data

a) CSV Comma Separated Values

(Header)                                 name, id, age

(Data Lines)                            "phil", 123, 22

                                               "bob",124,34

    name, id, age
    "phil", 123, 22
    "bob",124,34

    b)   Maybe has other separators

                  ; semicolon

                     space

### String.split              String ⇒ Array

    // string.split
    
    
    string sentence = "Food is life";
    string[] words = sentence.Split(' ');
    foreach(var word in words)
    {
        Console.WriteLine(word);
    }

### Array.join               Array =⇒ String

    // array.join
    
    string sentence02;
    sentence02 = string.Join(" ", words);
    Console.WriteLine(sentence02);

[Integers](Data%20Types%20and%20Variables/Integers.md)

[Decimals (Float, Double, Decimal)](Data%20Types%20and%20Variables/Decimals%20Float%20Double%20Decimal.md)

[Null](Data%20Types%20and%20Variables/Null.md)

[Dates And Times](Data%20Types%20and%20Variables/Dates%20And%20Times.md)

[Byte](Data%20Types%20and%20Variables/Byte.md)

[Tuple](Data%20Types%20and%20Variables/Tuple.md)

[Null Check](Data%20Types%20and%20Variables/Null%20Check.md)