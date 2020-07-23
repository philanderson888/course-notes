# Integers

## Binary

All computers store numbers using 0 or 1 - that's it!!!

0      0

1       1

2      

All computers store numbers using 0 or 1 - that's it!!!

0 0

1 1

2

```
Decimal     10000   1000   100   10   1
              5        4    7     2   6

              5*10000 + 4*1000 + 7*100 + 2*10 + 6*1

Binary      16     8      4    2    1
			 0     1      0    0    0

Highest Numbers
	4 bits			1     1     1    1      lowest = 0, highest = 1+2+4+8=15
	8 bits                                                                255
	16 bits                                                               65536
	32 bits 															  4 billion
	64 bits 															  10^19
```

```csharp
using System;

namespace lab_26_integer_handling
{
    class Program
    {
        static void Main(string[] args)
        {
            // Signed Integer  can be positive or negative

            short s01;  // length is 16 bits but 15 bits for data and 1 bit for +/- 
            int i01;    // 32
            long l01;   // 64

            Int16 s02;  // 16
            Int32 i02;  // 32
            Int64 l02;  // 64

            // Unsigned Integer is positive only

            ushort us01;  // Unsigned 16 bit...
            uint ui01;
            ulong ul01;

            // Examples
            Console.WriteLine(short.MaxValue);  // 16 bits but one sign 
                                                // 15 bits 32768
                                                // start at 0, finish 32767
                                                // start at -1, finish -32768
            Console.WriteLine(short.MinValue);
            Console.WriteLine(ushort.MaxValue); // 16 bits => 65536
                                                // start at 0, finish 65535

            // repeat same maths for int (32) and long(64)

        }
    }
}
```