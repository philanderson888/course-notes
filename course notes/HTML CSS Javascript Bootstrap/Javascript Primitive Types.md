# Javascript Primitive Types

These are javascript primitive types

Number

String

Boolean

Symbol

Object type is

Object

## String

    String(10) //"10"
    
    (10).toString() //"10"

## Boolean to string

    String(true) //"true"
    true.toString() //"true"
    String(false) //"false"
    false.toString() //"false"

# Date to string

    
    String(new Date('2019-01-22'))
    //"Tue Jan 22 2019 01:00:00 GMT+0100 (Central European Standard Time)"
    
    (new Date('2019-01-22')).toString()
    //"Tue Jan 22 2019 01:00:00 GMT+0100 (Central European Standard Time)"

# **Special cases with string**

    String(null) //"null"
    String(undefined) //"undefined"
    String(NaN) //"NaN"

# **Converting to numbers**

# **Casting from string to number**

We can do this by using the `Number()` global function, which is sort of a constructor. We can pass it a string, and JavaScript will figure out how to convert it to a number:

    Number("1") //1
    Number("0") //0

Strings are trimmed before being converted to numbers:

    Number(" 1 ") //1

passing an empty string defaults to 0:

    Number("") //0

and to have work with decimals you use a dot:

    Number("12.2")

If a string contains invalid characters, it will generate a `NaN`.

This are the basics of converting to numbers, but I give a lot more details in [how to convert a string to a number in JavaScript](https://flaviocopes.com/how-to-convert-string-to-number-javascript/). There are other ways to generate numbers from string including `parseInt()`, `parseFloat()`, `Math.floor()`, the unary `+` operator.

# **Casting from boolean to number**

Just as we did for string, passing a boolean to `Number()` will return either 0 or 1:

    Number(true) //1
    Number(false) //0

# **Casting from date to number**

If you pass a Date object to `Number()`, it will return the date timestamp, which is the best date to number conversion you can get.

# **Special cases with number**

    Number(null) //0
    Number(undefined) //NaN
    Number(NaN) //NaN

# **Converting to booleans**

Any value can be converted to boolean passing it to `Boolean()`.

All values will resolve to `true` except:

    Boolean(false) //false
    Boolean(0) //false
    Boolean(NaN) //false
    Boolean("") //false
    Boolean(null) //false
    Boolean(undefined) //false