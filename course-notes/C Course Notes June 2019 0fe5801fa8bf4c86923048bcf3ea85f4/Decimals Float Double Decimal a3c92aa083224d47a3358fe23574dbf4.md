# Decimals (Float, Double, Decimal)

Float   32 bit     F

Double   64        D  optional as default anyway 

Decimal   128     M

Care with truncation on decimals

```csharp
var f = 1.23F;
Console.WriteLine(f);
var f02 = 1.4567456745674567456745674567;
Console.WriteLine(f02);   //silent truncation

```

### Significant Digit

13.2  has 3 significant digits

13      to   2

### Exponential Value

Weight of Sun    2 x 10 ^ 30 kg         power of 30 : exponent  but only one significant digit