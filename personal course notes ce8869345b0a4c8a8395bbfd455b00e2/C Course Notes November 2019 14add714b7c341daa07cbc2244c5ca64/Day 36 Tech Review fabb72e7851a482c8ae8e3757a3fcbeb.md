# Day 36 - Tech Review

# Monday Week 8, 9 December 2019 - Tech Review

```
MVC Model - Data Class (code) or Table (SQL)
DbContext { DbSet {Class} SQLTable }
View Page
Controller handles URL incoming request
```

```
<https://domain.com:12345/Controller/ActionMethod/Id>
					    /Customers/Index/                GET ALL
					    /Customers/Index/2               GET CUSTOMER 2
					               ((This is a GET Request))
					    /Customers/Post                  CREATE
					    /Customers/Post/2                UPDATE
					    /Customers/Put/2                 UPDATE
					              /Delete/2
```

```
Serialise OOP instance List<Customer> => either
BINARY 101010101010
CHARACTER (ASCII) ASDFAS8D7FASD89FASD
A) XML
B) JSON
C) BINARY
Deserialize Stream Back to OOP Instance eg List<Customer>
Stream XML/JSON or BINARY
Buffer	Block of data of a fixed size, unit of sending when we streamC
```

```
1....2....3....4  each block is same size (buffer)  .NET default    1024 Bytes
		var myBuffer = new Byte[1024]
```

```
Flush() on last block if not full
Cache Temporary storage area
Razor : C# inside HTML with @... syntax
Sync 1.2.3.4 in order
Async Main Thread then Tasks (subthreads) 1,2,3,4 complete in ANY ORDER
Task
ASP Active Server Pages
.asp
.aspx
docx is just same as zip
API Application Programming Interface
REST API has model already discussed
((Representational State Transfer))
/get/ ALL
/get/1 ONE
/post/ INSERT
/post/1 UPDATE
/delete/1
Delegate : method
Action method : no parameters, no return type
ASCII 7 bits
UTF8 8 bits web, .NET Core
UTF16 UNICODE all languages
Background task
Cookie : text file sent with every HTML REQUEST AND RESPONSE. Contains CODES which mean something to provider. Can be used for WEB TRACKING EG ADWARE, SPYWARE, SHOPPING BASKET
Lambda () => { return 1; } Anonymous method
function myFunction() { }
```