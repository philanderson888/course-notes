# ASP

[70-486](#70-486)

### IDE

[MonoDevelop](http://monodevelop.com)

[Cloud 9](https://aws.amazon.com/cloud9/?origin=c9io)

[REPL.it](https://repl.it/repls)

[.NET Fiddle](https://dotnetfiddle.net)

[https://codeanywhere.com](https://codeanywhere.com)

### Visual Studio

Command + Enter to run (MAC)

Command + H to replace

Shift + Alt + C to add a new class






## Networking

Dns

Uri

	Scheme

	AbsolutePath

	Port

	Host

	Query

Cookie

WebClient

IPAddress

HttpStatusCode

HttpWebRequest

HttpWebResponse

Attachment

MailAddress

MailMessage

SmtpClient

IPStatus

NetworkChange

Ping

TcpStatistics




# Chapter 9 : Files, Streams, Serialization, Encoding

### Path

```csharp
// combine a foder path with a text file
Path.Combine(path,"file.txt");
```









### .NET

.NET is open source and can be found here [https://github.com/dotnet](https://github.com/dotnet)

Libraries

	.NET Framework on Windows only

	.NET Standard 2.0 is cross-platform

	.NET Core

	XAMARIN 

	.NET Native compiles AoT Ahead of Time to improve execution time

[Mono Project](https://www.mono-project.com)

.NET Core

	CoreCLR

	CoreFX libraries

	.NET Core 1 2016
	.NET Core 2 2017
	.NET Core 2.1 2018


.NET Native 

	Compiles AoT Ahead Of Time which improves execution speed and reduces memory footprint

.NET 

	Compiles to CIL then JIT Just In Time at Runtime

### C# latest version

In order to work with different versions of C# you can enable a given feature when it is flagged in Visual Studio, or alternatively go to the Project, Build, Advanced and set the language level there.

### Hello World .NET

New Project, Choose Other, Blank Solution then add projects from there

Once built we can toggle all files to view built files


### VSCode

Install the .NET Core SDK

VSCode Extensions - Command Shift X

Install the C# extension to provide intellisense



# .NET Core

We can either use Visual Studio or we can use VSCode

For now let's just use a plain text editor



### Hello World .NET Core

```bash
dotnet new console
```

will generate a new Console app project

```bash
dotnet new console -o MyApp
```

will generate a new Console app in a folder MyApp

```bash
dotnet run 
```

will run the app!!!

We can also build a `dll` library file using the following

```bash
dotnet new classlib
// compile
dotnet build
```

and we can use and reference this library with direct code, for example

```csharp
 using System;
using deletemecs02;

namespace deletemecs01
{
    class Program
    {
        static void Main(string[] args)
        {
            var instance02 = new Phil();
            instance02.someNumber = 22;
            Console.WriteLine("Hello World! " + instance02.someNumber);
        }
    }
}
```

where we can see we have referenced the `dll` in our `using` statement.  In order to reference this `dll` correctly we have added the literal path to our csproj file

```xml
<ItemGroup>
  <Reference Include="deletemecs02">
    <HintPath>..\deletemecs02\bin\Debug\netstandard2.0\deletemecs02.dll</HintPath>
  </Reference>
</ItemGroup>
```

### Adding references

Try this using statement to save yourself a lot of typing!

```csharp
using static System.Console;
```

### Adding references in .NET Core

```csharp
#r "System.Net.Http"
using System.Net.Http;
var client = new HttpClient();
client.BaseAddress = new Uri("http://www.bbc.co.uk");
var response = await client.GetAsync("about");
Console.WriteLine(response.Content.Headers.GetValues("Content-Type"));
await response.Content.ReadAsStringAsync();
```

### Autoformatting

Code can be autoformatted with Edit, Advanced, Format Document.

### AutoSave in VSCode 

File, AutoSave - turn on 

### Using a particular version of C# #

We can be sure to use a certain version of C# by modifying the .csproj file to include the following

```xml
<PropertyGroup>
   <LangVersion>latest</LangVersion>
</PropertyGroup>
```

We can replace `latest` with `default` to use C# 7.0 or we could use a specific number eg `7.3` in there also.

### dotnet restore

If we have a project which we have downloaded from the internet it may not have all of the Nuget packages downloaded yet.  To download all packages use the command

```bash
dotnet restore
```







### First .NET Core application

In the text editor write

```csharp

class MyApp{
	static void Main(){
		System.Console.WriteLine("Hello World From Phil");
	}
}
```

At the terminal type

```bash
dotnet new console
```

and replace the content of Program.cs with the above, or remove Program.cs and use MyApp.cs instead.  Either way works.

Now to compile and run the application we run

```bash
dotnet run
```

If all is well the application should compile and the code should run.













## .NET vs .NET core

.NET vs .NET core

.NET

	CTS types
	CLS language
	CLR runtime with automatic garbage collection

Use .NET Core

	Microservices
	Docker
	multiple .NET versions side by side

	
Versions

	.NET Standard
	.NET Core
	.NET Framework
	XAMARIN app development for IOS, Android, Windows
	UWP Store Apps

Testing Framework

	xUnit
	NUnit
	MSTest

.NET Core is open source

	https://github.com/dotnet/core



Release Notes 2.1

	https://github.com/dotnet/core/tree/master/release-notes/2.1

	.NET Core
	ASP.NET Core
	.NET Core SDK




APIs in use for .NET 2.0 are here [https://docs.microsoft.com/en-us/dotnet/api/](https://docs.microsoft.com/en-us/dotnet/api)

.NET 2.0 is open source and documented on GitHub here [https://github.com/dotnet/standard/blob/master/docs/versions/netstandard2.0.md](https://github.com/dotnet/standard/blob/master/docs/versions/netstandard2.0.md)

The differences in the versions can be found here [https://github.com/dotnet/standard/blob/master/docs/versions.md](https://github.com/dotnet/standard/blob/master/docs/versions.md)



### Updating your version of .NET

```bash
# display current dot net version info
dotnet --info
```

### .NET project types

```bash
dotnet new console

dotnet new web 

dotnet new mvc 

dotnet new razor 

dotnew new angular 

dotnet new react 

// list temmplates
dotnet new -l 

dotnet restore

dotnet build

dotnet test 

dotnet migrate 

dotnet pack 

dotnet publish

dotnet add package newtonsoft.json 

```



## .NET Core Docker images

	https://hub.docker.com/r/microsoft/dotnet/

	Container sample: Run a simple application

		You can quickly run a container with a pre-built .NET Core Docker image, based on the .NET Core console sample.

		Type the following command to run a sample console application:

		docker run --rm mcr.microsoft.com/dotnet/core/samples

	Container sample: Run a web application

		You can quickly run a container with a pre-built .NET Core Docker image, based on the ASP.NET Core sample.

		Type the following command to run a sample web application:

		docker run -it --rm -p 8000:80 --name aspnetcore_sample mcr.microsoft.com/dotnet/core/samples:aspnetapp

	Building a sample .NET Core application on Docker

		https://docs.microsoft.com/en-us/dotnet/core/docker/building-net-docker-images

		Clone the sample app

		git clone https://github.com/dotnet/dotnet-docker/

		Move to the root directory of this repository then type

		cd samples

		cd aspnetapp

		docker build --pull -t aspnetapp .

		docker run --name aspnetcore_sample --rm -it -p 8000:80 aspnetapp

```bash
# list running containers
docker container ls

# remove container
docker container kill ce2df9017968

# list images
docker image ls

# list images with id
docker images -a

# remove image
docker rmi 99f959836f85

# run docker image
docker run --name aspnetcore_sample --rm -it -p 8000:80 aspnetapp

# Type http://localhost:8000 and view a running ASP app


```

## Pushing a docker image to Azure

```bash
git clone https://github.com/dotnet/dotnet-docker
cd dotnet-docker
cd samples
cd dotnetapp 
docker build --pull -t dotnetapp .
docker run --rm dotnetapp
az login 
```



.NET on Linux

	sudo apt-get 


Download .NET Core

	https://www.microsoft.com/net/learn/dotnet/hello-world-tutorial

.NET Core documentation

	https://docs.microsoft.com/en-us/dotnet/core/


1) Download .NET Core and install
2) Create a folder
3) dotnet new console
4) make changes
5) dotnet build
6) dotnet run
	Should run the application and return 'Hello World'

Follow this tutorial as well to get debugging

https://docs.microsoft.com/en-us/dotnet/core/tutorials/with-visual-studio-code

Basically click on debugging tab at bottom

Also click on debugging icon

Now run the app


Add a breakpoint (red circle)

Command Line Tools

	https://docs.microsoft.com/en-us/dotnet/core/tools/index?tabs=netcore2x

Finding packages

	visit nuget.org or search inside Visual Studio

	https://docs.microsoft.com/en-us/nuget/consume-packages/finding-and-choosing-packages


Adding nuget 

	dotnet add package Newtonsoft.Json

Adding collections

	dotnet add package System.Collections --version 4.3.0

Building The Course

	https://github.com/spartaglobal/Java_SDET_Course





Bootstrap

	https://www.nuget.org/packages/bootstrap/


Publishing Your App

	https://docs.microsoft.com/en-us/dotnet/core/tutorials/publishing-with-visual-studio






### Git and Github and VSTS






## Testing

TDD means writing tests before our code

`MS Test` is Microsoft's test framework.

`xUnit.net` will work with .NET Core






### Testing with .NET Core

Create two folders

    Calculator

    CalculatorTest

In Calculator run

```bash
dotnet new classlib
```

and CalculatorTest run

```bash
dotnet new xunit
```

Amend Calculator to include a Calculator class and Add() method

run

```bash
dotnet build 
```






### Testing with xUnit in Visual Studio

1. Create Library Project with .NET Standard

2. Add .NET Core xUnit Test Project

3. Add Reference of (1) into (2)

4. Run tests!

### Testing with xUnit in Visual Studio

1. dotnet new classlib in CalculatorLib folder

2. dotnet build

3. dotnet new xunit in CalculatorUnitTests folder

4. modify .csproj to add 

```xml
<ItemGroup>
  <ProjectReference Include="..\Calculator\Calculator.csproj" />
</ItemGroup>
```

5. write your tests

```csharp
Assert.Equal(true,false);
```

6. dotnet test from the CalculatorUnitTests folder





### Testing in Visual Studio Core

Firstly build our project to be tested which includes this code

```csharp
using System;

namespace testing_01
{
    public class TestMe
    {
        public int TestMeMethod(){
            return -1;
        }
    }
}
```

and our testing project

```csharp
using System;
using Xunit;
using testing_01;

namespace testing_01_tests
{
    public class testing_01_tests_class
    {
        [Fact]
        public void Test1()
        {
            // arrange
            var expected = -1;
            var instance01 = new TestMe();

            // act
            var actual = instance01.TestMeMethod();


            //assert
            Assert.Equal(expected, actual);
        }
    }
}
```

in the console run

```bash
dotnet restore
dotnet build 
dotnet test 
```

and the results of the tests should show in the command line


### Building a test project using the command line only

```bash
dotnet new classlib

dotnet build

dotnet new xunit 
```

In the .csproj file add a reference to the project we are testing

```xml
<Project>
	<ItemGroup>
			<PackageReference Include="../projectwearetesting/name.csproj" />
	</ItemGroup>
</Project>
```









<pre>
	






















</pre>








# Chapter 11 : Entity Core, SQL

Try this code to connect to a database, after Entity has been added to the project

```csharp
using (var db = new Northwind()) {
	var categories = db.Categories.Include(c=>c.Products);
	foreach (Category c in categories){
		WriteLine("{c.CategoryName} has {c.Products.Count} products");
	}
	// products more than a price
	decimal price = 10.0M;
	var products = db.Products.Where(product=>product.Cost>price).OrderByDescending(product=>product.Cost);
	foreach(Product p in products){
		WriteLine($"{p.ProductID} : {p.ProductName} has price {p.Cost:$#,##0.00} and stock {p.Stock}");
	}
}
```

Let's work through EFCore with SQL using Visual Studio

```bash
# install EFCore SQL binaries
install-package Microsoft.EntityFrameworkCore.SqlServer -ProjectName EFCore_01
```

## EF Core uses

### Conventions

```csharp
class Products{
	DbSet<T>
}
```

###	Annotation Attributes

```csharp
[Required]
[StringLength(40)]
public string ProductName{get;set;}
```

### FluentAPI

```csharp
class Northwind{
	modelBuilder.Entity<product>()
		.Property(product=>product.ProductName)
		.IsRequired()
		.HasMaxLength(40);
}
```

Build 3 classes : Northwind.cs, Category,cs and Product.cs

Here is the working code which queries Northwind database for two classes, Category and Product, using SQL with Visual Studio.  Note that later on is some more well-commented code.

```csharp
using System;
using static System.Console;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Entity_10_Core_01
{
    class Program
    {
        static void Main(string[] args)
        {
            QueryingCategories();
        }

        static void QueryingCategories()
        {
            using (var db = new Northwind())
            {
                var categories = db.Categories.Include(category => category.Products);
                foreach(Category c in categories)
                {
                    WriteLine($"{c.CategoryID}{c.CategoryName} has {c.Products.Count} products");
                }

            }
        }
    }

    public class Category
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public virtual ICollection<Product> Products { get; set; }

        public Category()
        {
            this.Products = new List<Product>();
        }
    }

    public class Product
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public int? CategoryID { get; set; }
        public virtual Category Category { get; set; }
        public string QuantityPerUnit { get; set; }
        public decimal? UnitPrice { get; set; } = 0;
        public short? UnitsInStock { get; set; } = 0;
        public short? UnitsOnOrder { get; set; } = 0;
        public short? ReorderLevel { get; set; } = 0;
        public bool Discontinued { get; set; } = false;
    }

    public class Northwind : DbContext
    {
        public DbSet<Category> Categories { get; set; }

        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=(localdb)\mssqllocaldb;" + "Initial Catalog=Northwind;" + "Integrated Security = true;" + "MultipleActiveResultSets=true;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Category>()
                .Property(c => c.CategoryName)
                .IsRequired()
                .HasMaxLength(15);

            // define a one-to-many relationship
            modelBuilder.Entity<Category>()
                .HasMany(c => c.Products)
                .WithOne(p => p.Category);

            modelBuilder.Entity<Product>()
                .Property(c => c.ProductName)
                .IsRequired()
                .HasMaxLength(40);

            modelBuilder.Entity<Product>()
                .HasOne(p => p.Category)
                .WithMany(c => c.Products);

        }
    }
}
```








## SQLite

[SQLite.org](https://sqlite.org)

See [https://github.com/philanderson888/c-sharp#chapter-11-entity-core-sql-sqlite](https://github.com/philanderson888/c-sharp#chapter-11-entity-core-sql-sqlite) README and also [Entity Project 08](https://github.com/philanderson888/c-sharp/tree/master/Entity_08_Northwind_Category_Product_SQLite) for a working SQLite database in C#

Most used database engine in the world because it's on mobile devices and tablets

It's open source


### Instructions for running SQLite on Windows

Download SQLite and extract to a folder

Download the SQLite tools and also extract to that same folder

Test by running 

```sql
sqlite3
```

### Instructions for running SQLite on a MAC

`sqlite3` command should work natively on a MAC

```sql
sqlite3
```

### SQLite Studio For Windows

[https://sqlitestudio.pl/index.rvt](https://sqlitestudio.pl/index.rvt)

### TablePlus for MAC

For a MAC we can use [TablePlus](https://tableplus.io/blog/2018/08/download-install-sqlite-for-mac-osx-in-5-minutes.html)


### SQLite commands

```sql
# enter into interactive mode
sqlite3
```

```sql
# exit interactive mode
.quit
```

From the folder run (this will run the sqlite3.exe application)

```sql
# create new database
sqlite3 myDatabase01.db
```

To list all databases type

```sql
# list all databases
.databases
```

.Open can open an existing database or create a new one if it does not exist

```sql
# switch from using one database to use another one
.open myDatabase01
# or
.open myDatabase01.db
```

If we entered commands without saving to a database we can alter this by adding a database afterwards :

```sql
.save db03
```

Now we can create a table

```sql
create table tbl1(one varchar(10), two smallint);
```

Check the table exists

```sql
.tables
```

Now populate the table

```sql
insert into tbl1 values('hello!',10);
insert into tbl1 values('goodbye', 20);
select * from tbl1;
```

Note that commands can span several lines

```sql
CREATE TABLE tbl2 (
   ...>   f1 varchar(30) primary key,
   ...>   f2 text,
   ...>   f3 real
   ...> );
```

We can output the results of a query in 8 different formats : 

.mode list etc . . sdss

* list has output separated with a '|'

* list separator character can be changed

    .separator ", "

* CSV

* column

* html

* insert

* line

* list

* quote

* tabs

* tcl

### Outputting SQLite to screen and file

.output will output to the screen
.once will output to the screen
.output file.txt will output to that file

### pipe symbol

`pipe` symbol can be used to chain commands

```sql
.once '|open -f'
```








### SQLite with Northwind

Download Northwind.sql from [https://github.com/markjprice/cs7dotnetcore2/edit/master/sql-scripts/Northwind4SQLite.sql](https://github.com/markjprice/cs7dotnetcore2/edit/master/sql-scripts/Northwind4SQLite.sql)

Once we have downloaded the SQLite create Northwind database script we can install Northwind by running this command

```bash
# Run Northwind.sql script to make Northwind.db database
sqlite3 Northwind.db < Northwind.sql
```

### EF Core 

EFCore is different to EF6 Entity Framework 6.

EFCore supports Azure Cosmos DB, Mongo DB and Redis

EFCore documentation is here [https://docs.microsoft.com/en-us/ef/core/index](https://docs.microsoft.com/en-us/ef/core/index)

### EF Core Data Providers

EF Core Data Providers are classes which are optimised for talking to a specific database

ASP.NET Core contains all of these packages anyway for SQL and SQLite.

If we create a console app we must manually add them though

Packages to add

    SQL         Microsoft.EntityFrameworkCore.SqlServer (search EFCore Sql)

    SQLite      Microsoft.EntityFrameworkCore.SQLite 

    MySQL       MySQL.EntityFrameworkCore

### Nuget Package Manager Console

To see what packages are already installed we can use the following

```bash
# find installed packages
Get-Package 
```

To install packages using Nuget console we can use the following commands

```bash
# search for a package
Find-Package SQLite
```

Once found we can install it

```bash
# install package
Install-Package Microsoft.EntityFrameworkCore.SQLite -ProjectName name-of-project
```



### SQLite Project with .NET Core Console App in Visual Studio

Create .NET Core Console app

Add Packages for EntityFrameworkCore and EntityFrameworkCore.SQLite

Add using statements

```csharp
using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
```

Here is the code at present

```csharp
using System;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;


namespace Entity_10_Core_Northwind
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var db = new Northwind()){
                
            }
            Console.WriteLine("Hello World!");
        }
    }


    public class Category
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        [Column(TypeName = "ntext")]
        public string Description { get; set; }
        public virtual ICollection<Product> Products { get; set; }
        public Category()
        {
            this.Products = new List<Product>();
        }
    }
    public class Product
    {
        public int ProductID { get; set; }
        [Required]
        [StringLength(40)]
        public string ProductName { get; set; }
        [Column("UnitPrice", TypeName = "money")]
        public decimal? Cost { get; set; }
        [Column("UnitsInStock")]
        public short? Stock { get; set; }
        public bool Discontinued { get; set; }
        public int CategoryID { get; set; }
        public virtual Category Category { get; set; }
    }



    public class Northwind : DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string path = System.IO.Path.Combine(System.Environment.CurrentDirectory, "../data/Northwind.db");
            // use SQLite
            optionsBuilder.UseSqlite($"Filename={path}");
            // use SQL
            //optionsBuilder.UseSqlServer(@"Data Source=(localdb)\mssqllocaldb;" + "Initial Catalog=Northwind;" + "Integrated Security=true;" + "MultipleActiveResultSets=true;");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>()
                .Property(category => category.CategoryName)
                .IsRequired()
                .HasMaxLength(40);
            // filter out discontinued products
            modelBuilder.Entity<Product>()
                .HasQueryFilter(p => !p.Discontinued);
        }
    }
}
```

If all works the Northwind should build and compile

We can add in a simple read which would look like

```csharp
List<Product> products = new List<Product>();

using (var db = new Northwind()){
    products = db.Products.ToList<Product>();
}
products.ForEach(p => {
    Console.WriteLine(p.ProductName);
});
```



Here is a working app which pulls in both Categories but for each Category, also pulls in the products

```csharp
using static System.Console;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Sqlite;
using System.Linq;

namespace Entity_08_Northwind_Category_Product_SQLite
{
    class Program
    {
        static void Main(string[] args)
        {
            QueryingCategories();
        }
        static void QueryingCategories()
        {
            using (var db = new Northwind())
            {
                WriteLine("Categories and how many products they have");
                var categories = db.Categories.Include(c => c.Products);
                foreach (var c in categories)
                {
                    WriteLine($"\n\n{c.CategoryName} has ID {c.CategoryID} and description {c.Description}.  It has {c.Products.Count} products\n");
                    WriteLine($"{"Product",-40}{"ID",-20}{"Cost",-20}{"Stock",-20}");
                    WriteLine($"{"-------",-40}{"--",-20}{"----",-20}{"-----",-20}");
                    foreach (Product p in c.Products)
                    {
                        WriteLine($"{p.ProductName,-40}{p.ProductID,-20}{p.Cost,-20}{p.Stock,-20}");
                    }
                }

                WriteLine("\n\n\nAlso list products\n");
                decimal price = 40.0M;

                var products = db.Products;

                WriteLine($"{"Product",-40}{"Stock",-20}{"Cost",-20}\n");
                foreach (Product product in products)
                {
                    WriteLine($"{product.ProductName,-40}{product.Stock,-20}{product.Cost,-20}");
                }

                var products2 = db.Products
                    .Where(product => product.Cost > price)
                    .OrderByDescending(product => product.Cost);

                WriteLine("\n\n\nProducts in order greater than a set price\n");
                WriteLine($"{"Product",-40}{"Stock",-20}{"Cost",-20}\n");
                foreach (Product product in products2)
                {
                    WriteLine($"{product.ProductName,-40}{product.Stock,-20}{product.Cost,-20}");
                }
            }
        }


    }
    public class Category
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        [Column(TypeName = "ntext")]
        public string Description { get; set; }
        public virtual ICollection<Product> Products { get; set; }
        public Category()
        {
            this.Products = new List<Product>();
        }
    }
    public class Product
    {
        public int ProductID { get; set; }
        [Required]
        [StringLength(40)]
        public string ProductName { get; set; }
        [Column("UnitPrice", TypeName = "money")]
        public decimal? Cost { get; set; }
        [Column("UnitsInStock")]
        public short? Stock { get; set; }
        public bool Discontinued { get; set; }
        public int CategoryID { get; set; }
        public virtual Category Category { get; set; }
    }
    public class Northwind : DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string path = System.IO.Path.Combine(System.Environment.CurrentDirectory, "../data/Northwind.db");
             use SQLite
            optionsBuilder.UseSqlite($'Filename={path}');  // use double not single quotes
            // use SQL
            // optionsBuilder.UseSqlServer(@"Data Source=(localdb)\mssqllocaldb;" + "Initial Catalog=Northwind;" + "Integrated Security=true;" + "MultipleActiveResultSets=true;");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>()
                .Property(category => category.CategoryName)
                .IsRequired()
                .HasMaxLength(40);
        }
    }
}
```









## LINQ 

LINQ Components :

* Extension Methods

	such as

		* Where

	These are enabled when we add

```csharp
using System.Linq;
```

### Extension methods using older Func<T1,T2>() delegate

The Func<T1,T2>() delegate accepts a method which accepts one type as an input and one type as an output

We can use

```csharp
Func<string,bool>()
```

which indicates that the method must accept a string and return a boolean true or false.  If it's true, include the string in the query, if not then exclude it.

Here is some code illustrating this Function delegate at work

```csharp
static void Main(string[] args)
{
	// declare array
    string[] myArray = { "George", "Michael", "Rob", "Paul" };
    // using explicit Func<string,bool>()
    WriteLine("\n\nQuery strings greater than length 4\n");
    var query = myArray.Where(new Func<string, bool>(LengthGreaterThan4));
    foreach (string s in query)
    {
        WriteLine(s);
    }
}
static bool LengthGreaterThan4(string s)
{
    return s.Length > 4;
}
```

We can also repeat this using more modern syntax in two other ways.

Firstly using implicit syntax which is the same but just removes the explicit Function delegate syntax

```csharp
// using implicit newer syntax
var query2 = myArray.Where(LengthGreaterThan4);
foreach(string s in query2)
{
    WriteLine(s);
}
```

And finally using the more compact Lambda syntax which removes the need for a separate method altogether

```csharp
// finally repeat using Lambda
var query3 = myArray.Where(s => s.Length > 4);
WriteLine(string.Join(",", query3));
```


### LINQ .orderby extension method

```csharp
// orderby
WriteLine("\n\nNow add .orderby() length");
var query4 = myArray.Where(s => s.Length > 3)
    .OrderBy(s => s.Length);
WriteLine(string.Join(", ", query4));

// order alphabetical descending
WriteLine("\n\nNow sort descending alphabetically");
var query5 = myArray
    .Where(s => s.Length > 3)
    .OrderByDescending(s=>s);
WriteLine(string.Join(", ", query5));
```

### LINQ chaining .orderby() using .thenby() methods

We can chain multiple .orderby() queries using .thenby() afterwards

```csharp
// order by length then alphabetical
WriteLine("\n\nNow sort by length then alphabetical");
var query6 = myArray
    .Where(s => s.Length > 3)
    .OrderBy(s => s.Length)
    .ThenBy(s => s);
WriteLine(string.Join(", ", query6));
```

### Distinct() : Eliminate duplicates

```csharp
string[] array02 = { "three", "three", "four", "five", "six" };
WriteLine("\n\nFirstly extract only distinct values");
// will omit the duplicate value
WriteLine(string.Join(", ", array02.Distinct()));
```	

### Union() : join two sets then eliminate duplicates

```csharp
string[] array01 = { "one", "two", "three", "four" };
string[] array02 = { "three", "three", "four", "five", "six" };
WriteLine("\n\nNow Union() 2 arrays which eliminates duplicates");
WriteLine(string.Join(", ", array01.Union(array02)));
```

### Concat() : Join 2 sets and keep all elements

```csharp
WriteLine("\n\nNow Contat() which joins and keeps all elements");
WriteLine(string.Join(", ", array01.Concat(array02)));
```

### Intersect() : Only common members of 2 sets

```csharp
WriteLine("\n\nIntersect shows items in both sets");
WriteLine(string.Join(", ", array01.Intersect(array02)));
```

### LINQ Except()

### LINQ Zip() : Create pairs from items 1, 2, 3 etc in two sets of data

Zip is an unusual one but can be quite useful in that is matches the first two items, the next two, etc

```csharp
WriteLine("\n\nZip matches the first with the first, and so on");
// Create an enumerable collection of strings
var arrayOfPairs = array01.Zip(array02, (a, b) => $"{a} with {b}");
WriteLine(string.Join(", ", arrayOfPairs));
```

### LINQ IQueryable vs IEnumerable

IQueryable is using lazy loading

IEnumerable is using immediate execution

### LINQ Providers

LINQ to objects

LINQ to entities

LINQ to XML

LINQ to Odata

LINQ to Amazon

### LINQ query comprehension syntax

This is a limited subset of LINQ.

To use all the features of LINQ we must use `extension methods` with `lambda expressions`.

Here is an example of `extension method` syntax with `lambda expressions`

```csharp
var output = myArray
	.Where(s=>s.length>4)
	.OrderBy(s=>s.length)
	.ThenBy(s=>s);
```

Here is the same code using `LINQ query comprehension syntax`.

```csharp
var output = 
	from s in myArray
	where s.length > 4
	orderby s.length, s
	select s;
```

We can combine the two features if we want some methods which are not available, for example 

```csharp
var output = (
	from s in myArray
	where s.length>4
	orderby s.length, s
	select s).Skip(80).Take(10);
```

* from

* in

* where

```csharp
var output = 
	from s in myArray
	where s.length > 4
	orderby s.length, s
	select s;
```

* orderby

```csharp
var output = 
	from s in myArray
	where s.length > 4
	orderby s.length, s
	select s;
```

* descending



* select

select is mandatory here

Any collection which already implements IEnumerable<T> can have the Enumerable static class appended to it and this will enable LINQ Where and Select etc to be used on that collection.  This includes all List<T> etc items and even DBSet<T>

### skip

Skip allows us to do pagination

### take

Take allows us to do pagination by only selecting the next few records

### LINQ to XML

We can generate XML output from a LINQ query

```csharp
WriteLine("\n\nTranslating To XML\n");
var ProductsToXML = db.Products.Take(3);
var xml = new XElement("products",
    from p in ProductsToXML
    select new XElement("product",
    new XElement("id",p.ProductID),
    new XElement("price",p.Cost),
    new XElement("name",p.ProductName)));
WriteLine(xml.ToString());
```

### XML : Reading XML Data

```xml
<root>
    <requisitionData>
        <element1>I am element 1</element1>
        <element2>I am element 2</element2>
    </requisitionData>
</root>
```

I know I can use a foreach loop, like so:

```csharp
@using System.Xml.Linq

XDocument doc = XDocument.Load(Server.MapPath("~/User_Saves/cradebaugh/testFile.xml"));

foreach (XElement element in doc.Descendants("requisitionData"))
{
    @element.Value
}
```







### Loading data from Entity : Lazy, Eager and Explicit Loading

***Lazy loading*** queries are only run when the data is actually needed

The `virtual` keyword is used so that Entity can generate a derived child class which overrides the default implementation with a lazy loading implementation.

Eager loading is used when the `include` keyword is used

Explicit loading is used when the `Load()` method is used

### `virtual` keyword in Entity

When the `virtual` keyword is used then lazy loading is used by default

### EFCore Logging

We can log database interactions so we are sure of what we are doing

### `like` EFCore SQL command

We can use the following to query matches of partial words in our results 

```csharp
WriteLine("\n\nNow using 'like' keyword to search using part of product name");
var likeString = "che";
// find product names containing 'che'
var products3 = db.Products
    .Where(product => EF.Functions.Like(product.ProductName, $"%{likeString}%"));
foreach(Product p in products3)
{
    WriteLine($"{p.ProductName} has {p.Stock} items in stock at price {p.Cost}");
}
```

### EF Global Filters

We can now design global filters to always exclude results regardless, from all results.  So to exclude discontinued products we can add the following code to the Model builder code:

```csharp
modelBuilder.Entity<Product>().hasQueryFilter(p=>!p.Discontinued);
```

### Entity : Inserting new products

We can add a new method to add products

```csharp
static bool AddProduct(int CategoryID, string ProductName, decimal? Price, short? Stock, out int ProductID)
{
    using (var db = new Northwind())
    {

        var product = new Product
        {
            CategoryID = CategoryID,
            ProductName = ProductName,
            Cost = Price,
            Stock = Stock
        };

        db.Products.Add(product);
        int affected = db.SaveChanges();
        ProductID = product.ProductID;
        return (affected == 1);
    }
    
   
}
```

Then just call it with

```csharp
bool addProductSuccess = AddProduct(6, "Curried Beef Pie", 47.00M, 150, out int productID);
WriteLine($"\n\nNew product added - successful? {addProductSuccess} - new ID {productID}\n\n");
```

### Entity : Updating Products

We can update a product with the following code

```csharp
static bool UpdateCost(int productID,decimal newCost)
{
    using (var db = new Northwind())
    {
        Product product = db.Products.First(p => p.ProductID == productID);
        product.Cost = newCost;
        int affected = db.SaveChanges();
        return (affected == 1);
    }
}
```

Then call it with

```csharp
int newCost = 100;
bool updateCostSuccess = UpdateCost(productID, newCost);
WriteLine($"{productID} has been updated with new cost of {newCost}");        
```

### Entity : Deleting Products

We can delete multiple items with the code

```csharp
static int deleteProduct(int productID) {
    using (var db = new Northwind())
    {
        // note that this produces a collection of products for multiple deletion
        var productsToDelete =
            db.Products.Where(p => p.ProductID == productID);
        db.Products.RemoveRange(productsToDelete);
        int affected = db.SaveChanges();
        return affected;
    }
}  
```

Then call it with 

```csharp
int numProductsDeleted = deleteProduct(productID);
WriteLine($"{numProductsDeleted} product has been deleted which had ID {productID}");        
```

### Explicit Transactions

Explicit transactions can lock the database to prevent alterations whilst it is in use.  This helps ensure the ACID syntax

Atomic - all transactions commit, or none

Consistent - database state is consistent before and after

Isolated - changes are hidden from other processes until complete

Durable - if a failure occurs then we can recover and roll back 

Snapshot - copies of records are made whilst being updated, so others can still read the data









# ASP

### Books

[Book on ASP.NET](https://www.apress.com/gb/book/9781430247258)

### People	

[Scott Hanselman](https://www.hanselman.com)





## Lesson 36 - API

[WEB APIs]

[Consuming An API : HttpWebRequest/Response to JSON]

[Consuming An API : HttpClient]

[Example : Fixer.IO Exchange Rates]

[Consuming An API : XML]

[Building A Web API in C# with no MVC]

[Building An ASP.NET Core 2.2 Web API (4 Feb 2019)]

[Building An Entity API : Many-Many Relationships]

## Introduction

We can see the IL Intermediate Language and compiled runtime assembly language which is sent to the CPU here at [https://sharplab.io](https://sharplab.io)


# WEB APIs

## Introduction

There are several ways to consume a Web API:

* HttpWebRequest/Response

* WebClient

* HttpClient

* RestSharp Nuget



## Consuming An API : HttpWebRequest/Response to JSON

```csharp
string uri = "http://localhost/HyperVServices/VMs.svc/";
var webRequest = (HttpWebRequest)WebRequest.Create(uri);
//this is the default method/verb, but it's here for clarity
webRequest.Method = "GET";
var webResponse = (HttpWebResponse)webRequest.GetResponse();
Console.WriteLine("Response returned with status code of 0}",
webResponse.StatusCode);
if (webResponse.StatusCode == HttpStatusCode.OK)
ProcessOKResponse(webResponse);
else
ProcessNotOKResponse(webResponse);
```

## Consuming An API : HttpClient

```csharp
string uri = "http://localhost/HyperVServices/VMs.svc/";
var client = new HttpClient();
var message = client.Get(uri);
ProcessOKResponse(message.Content.ReadAsStream());
```

### Example : Fixer.IO Exchange Rates

As an example we can query exchange rates from Fixer.IO

```bash
http://data.fixer.io/api/latest?access_key=9e7de6948df17c748a53e9c684408af6&format=1
```

## Consuming An API : XML

```csharp
var stream = webResponse.GetResponseStream();
var xr = XmlReader.Create(stream);
var xdoc = XDocument.Load(xr);
var vms = from v in xdoc.Root.Elements("VM")
select new { Name = v.Element("Name").Value};
foreach (var item in vms)
{
Console.WriteLine(item.Name);
}
```


## Building A Web API in C# with no MVC

[https://docs.microsoft.com/en-us/aspnet/web-api/overview/getting-started-with-aspnet-web-api/tutorial-your-first-web-api](https://docs.microsoft.com/en-us/aspnet/web-api/overview/getting-started-with-aspnet-web-api/tutorial-your-first-web-api)

Also possibly this one

[https://docs.microsoft.com/en-us/aspnet/web-api/overview/older-versions/build-restful-apis-with-aspnet-web-api](https://docs.microsoft.com/en-us/aspnet/web-api/overview/older-versions/build-restful-apis-with-aspnet-web-api)





## Building An ASP.NET Core 2.2 Web API (4 Feb 2019)

[https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-2.2&tabs=visual-studio]


## Building An Entity API : Many-Many Relationships

Medium.com : Many-to-Many Relationship Done Right in the Entity Framework: Multi-Clients & Users






<pre>




</pre>



# Chapter 14 : ASP.NET Core Razor

[ASP.NET Core Walkthrough From Empty Template](#aspnet-core-walkthrough-from-empty-template)

## Chrome Dev Tools

Open Dev Tools with 

	Command - Alt - I
	F12
	Control - Shift - I

Networking Tab

	Reload the page and view the pages which have loaded, and their relative times to load

Console Tab

	Can view any page errors

	Can also enter live Javascript code here

## History of Microsoft Web Pages

* ASP 1996

* ASP.NET Web Forms 2002

	Used in Sharepoint

* WCF 2006

	SOAP (complex, avoid)

	REST

* ASP.NET MVC 2009

* ASP.NET WEB API 2012

	HTTP REST simpler than SOAP

* ASP.NET SignalR 2013

	Websockets

	Long Polling

* ASP.NET Core 2016

	MVC
	Web API
	SignalR

* Kestrel Web Server
	
	Open source

	Cross Platform

### Other Web Terms

Bootstrap

Angular ng-

React 

Redux

Vue

MVC

TypeScript .ts

```bash
# install typescript
npm install -g typescript
```

```javascript
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
```

```bash
# compile typescript to Javascript
tsc myfile.ts
```



Nativescript

SPA

NodeJS 

NPM

Bower : package manager

Gulp : task runner for automating certain pre-build and build tools

Webpack : bundles code files together into smaller and simpler units for distribution to the clients.  Minimises page requests which speeds up code delivery.  Can be conditional.

## Visual Studio Extensions

https://marketplace.visualstudio.com/

	Search : publisher:"Mads Kristensen"

## VSCode

https://code.visualstudio.com/Docs/languages/html

https://marketplace.visualstudio.com/

	Search : publisher:"Microsoft"


### ASP.NET Core Walkthrough From Empty Template

New Visual Studio 2017, ASP.NET Core Web App, Empty Template

or in VSCode

```bash
dotnet new web
```

Note that in .csproj file we have `.AspNetCore.All` which includes all `EFCore` and `ASP.NET Core` dependencies.

Now add `index.html` file to the `wwwroot` folder

Also in `Startup.cs` configure out the method which returns `Hello World` and instead add

```csharp
app.UseStaticFiles();
```

now if we run the site and manually append `/index.html` to the end of the running URL, the site will be visible.

and if we now add on the line before this code also

```csharp
app.UseDefaultFiles();
```

Razor pages have .cshtml which can combine C# with HTML

To use Razor, create a folder called `Pages` and move the `index.html` file into that folder out of the wwwroot folder

Also add MVC in `Startup.cs`

```csharp
public void ConfigureServices(...){
	services.AddMvc();
}
```

also add 

```csharp
app.UseMvc();
```

Now modify `index.cshtml` to include the following

```csharp
@page
@functions{
	public 
}
```

@page is required to let C# know this is a .cshtml Razor page.  If you omit it, then the Razor page will not load.

@{} can contain any C# code whatsoever

```cshtml
@{
	var helloworld = "Hello World"
}
```

We can now use `@helloworld` anywhere in our HTML and it will be rendered.

```cshtml
@page
@{
   var helloworld = "Hello World";
}
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>@helloworld</title>
    </head>
    <body>
        <h1>Hello World</h1>
        <h2>@helloworld</h2>
    </body>
</html>
```


### @Html.Partial to import pages

We can also import other pages into our code with the @Html.Partial() method

Create a page `test.cshtml`

```cshtml
@{
    var x = "hi there";
}
<div>Hello</div>
<p>@x</p>
```
and we can add it to our main page with

```cshtml
@Html.Partial("test")
```





### Summary So Far

```bash
# create new application
dotnet new web
```

```xml
<!-- add wwwroot folder -->
< Folder Include="wwwroot" />
```

```bash
mkdir wwwroot
touch index.html 
```

Allow using static files

```csharp
app.UseStaticFiles();
```

We can now manually enter /index.html and find our page

```csharp
// now will find index.html by default
app.UseDefaultFiles();
app.UseStaticFiles();
```

Add MVC Razor

```csharp
// in ConfigureServices()
services.AddMvc();
// in Configure()
app.UseMvc();
```

### Using _ before a file name

Files named _ before the file name cannot be browsed from the web

### Hiding information

We can hide sensitive information using `_AppStart.cshtml` file

```cshtml
@{
WebMail.SmtpServer = "mailserver.example.com";
WebMail.EnableSsl = true;
WebMail.UserName = "username@example.com";
WebMail.Password = "your-password";
WebMail.From = "your-name-here@example.com";
}
```

### Using `~` as the root folder

When specifying a path we can use `~` as the root path

```cshtml
var path01 = "~/testfolder/file.txt"
```

### Server.MapPath

We can convert a relative path to an absolute path if necessary

```cshtml
var path01 = "~/folder/page01.html"
var serverPath01 = Server.MapPath(path01);
```

### Href method for URLs

We can turn paths into relative URLs which the user can click on

```cshtml
@{
	var link01 = "~/folder/page01.html";
}
<a href="@Href(link01)">click here</a>
```

### _ AppStart

This can be run when the application starts

It is used to initialise global variables

### _ PageStart

We can get a page to run before every single page load by creating `_PageStart.cshtml` file

Check W3 schools for some extra tips on Razor pages.


### Adding a model(data) to our page

We can now add the ability to pick up data into our web page

For example we can add a `DayName` get/set string property.

We can also add an OnGet() method which runs when an HTTP GET request is received.

```cs
@page
@functions{
  public string DayName{get;set;}
  public void OnGet(){
  	Model.DayName=DateTime.Now.ToString("dddd");
  }
}
```

```html
<!-- will display Model field -->
<p>@Model.DayName</p>
```


### MVC Layouts

Layouts have a default layout for all pages called `_ViewStart.cshtml`

Create a new `MVC View Start Page` in Pages folder called `_ViewStart.cshtml`

This contains the `layout` code which will run for every page.

```cshtml
@{
    Layout = "_Layout";
}
```

So we can now create `_Layout.cshtml` page also

Add a new MVC View Layout page

```html
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width" />
        <title>@ViewBag.Title</title>
    </head>
    <body>
        <h1>Hey this header is on every page now</h1>
        <div>
            @RenderBody()
        </div>
    </body>
</html>
```

Inside `_Layout.cshtml` we can also add libraries such as `Bootsrap` and `jQuery`


### ViewData

ViewData is a dictionary whose key is a string.  We can use this dictionary to store values for our application

In our page we can add 

```csharp
ViewData["Title"]="Some title";
```

and we can render it in the `.cshtml` as the following

```xml
<h1>@ViewData["Title"]</h1>
```

ViewBag is very similar but deals with objects so we are better to stick with ViewData.






### ASP.NET Core Web App

Building a new project from scratch we can select various templates.

Try choosing the Web App template option and build and run the app.

Things to note 

Website port is random on `localhost`

wwwroot folder holds regular web files

	CSS 

	Javascript

	Images

	Javascript Library files such as

		jQuery

		Bootstrap

launchSettings.json

Dependencies : Nuget and SDK

Pages

	.cshtml

		C# with @ symbols to permit tapping into the C# behind 

			@ViewData

			@RenderBody

			@RenderSection

_ ViewStart.cshtml

	This defines the first page to run ie the _Layout page


_ ViewImports

	This defines the @using import statements

_ ValidationScripts

	These can determine some CDN links to import libraries eg jQuery validation

### About.cshtml

```html
@page
@model AboutModel
@{
    ViewData["Title"] = "About";
}
<h2>@ViewData["Title"]</h2>
<h3>@Model.Message</h3>
<p>Use this area to provide additional information.</p>
```

### Contact.cshtml

```cshtml
@page
@model ContactModel
@{
    ViewData["Title"] = "Contact";
}
<h2>@ViewData["Title"]</h2>
<h3>@Model.Message</h3>
```

Model.Message is created in the .cs code behind




### Adding A C# Code-Behind Page

Up to now we have had just `.cshtml` pages but we can also use `.cs` code-behind pages.

Add a new `Razor Page` to your project which automatically adds both the `.cshtml` and also the `.cs` files

```cs
public class SuppliersModel : PageModel
{
    public IEnumerable<string> Suppliers { get; set; }

    public void OnGet()
    {
        ViewData["Title"] = "Northwind Suppliers";
        Suppliers = new[]{
            "Supplier One","Supplier Two","Supplier Three"
        };
    }
}
```

and

```cshtml
@page
@model ASP_Core_03_Empty.Pages.SuppliersModel
@{
    
}
<h2>@ViewData["Title"]</h2>
<ul>
    @foreach (string supplier in Model.Suppliers)
    {<li>@supplier</li>}
</ul>
```







### ASP.NET Core MVC App

Build from scratch an ASP.NET Core MVC app

We see much the same folder structure with a few differences

Views folder contains

	Home with Index, About, Contact pages

	Shared is the folder with the parts of pages which are shared across 
	all pages like the header menu and footer.



### Summary so far - ASP.NET Core app built from the Empty template

We have now added in Northwind and managed to read the records

```csharp
public HashSet<Supplier> suppliers = new HashSet<Supplier>();

public HashSet<string> supplierNames = new HashSet<string>();

public void OnGet()
{
    ViewData["Title"] = "Northwind Suppliers";
    using(var db = new Northwind()){
        suppliers = db.Suppliers.OrderBy(s=>s.CompanyName).ToHashSet<Supplier>();
    }
    foreach (var s in suppliers){
        supplierNames.Add(s.CompanyName);
    }
}
```

```html
@page
@model ASP_Core_03_Empty.Pages.SuppliersModel
@{
    
}
<h2>@ViewData["Title"]</h2>
<ul>
    @foreach (var supplier in Model.supplierNames)
    {<li>@supplier</li>}
</ul>
```

We should really be injecting Northwind as a service but this works so just for demo.


Another way of obtaining the string array is as follows : 

```csharp
public IEnumerable<string> supplierArray { get; set; }
public void OnGet()
{
    using (var db = new Northwind())
    {
        supplierArray = db.Suppliers.Select(s => s.CompanyName).OrderBy(s => s).ToArray();
    }
}
```

```cshtml
@foreach (var supplier in Model.supplierArray)
{
    <li>@supplier</li>

}
```

so either way will work


### Sample Page - ASP.NET Core MVC with Customers

Here is a sample page built with bootstrap showing customers

_ Layout.cshtml

```cshtml
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <meta charset="utf-8" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
    <style>
        div.col-sm-4 {
            background: rgb(230,230,230);
            padding: 3vh 2vw;
            margin: 2vh 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <nav class="navbar navbar-default">
            <div class="navbar-header">
                <a href="https://www.spartaglobal.com">
                    <img src="https://cdn.crackergroup.com/cache_test/imgs/logos-hires/731---w-400_h-200_zc-1_q-60.png" width="100" height="50" />
                </a>
            </div>
            <ul class="nav navbar-nav">
                <li>
                    <a href="/">Home</a>
                </li>
                <li><a href="/Customers">Customers</a></li>
            </ul>
        </nav>
        @RenderBody()
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"  crossorigin="anonymous"></script>
</body>
</html>

```

```cshtml
@page
@model ASP_Core_Entity_05_SQLite.Pages.CustomersModel
@{
}
<h1>@Model.ShowMe</h1>
<div class="row">
    <div class="column col-sm-4">Customer ID</div>
    <div class="column col-sm-4">ContactName</div>
</div>
@foreach (Customer c in Model.Customers)
{
<div class="row">
    <div class="column col-sm-4">@c.CustomerID</div>
    <div class="column col-sm-4">@c.ContactName</div>
</div>
}

```

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace ASP_Core_Entity_05_SQLite.Pages
{
    public class CustomersModel : PageModel
    {

        public String ShowMe { get; set; }

        public IEnumerable<Customer> Customers { get; set; }



        public void OnGet()
        {
            ShowMe = "This is a string";
            using (var db = new Northwind()){
                Customers = db.Customers.OrderBy(c=>c.CustomerID).ToList<Customer>().ToArray();
            }
        }
    }

    public class Customer
    {
        public string CustomerID { get; set; }
        public string CompanyName { get; set; }
        public string ContactName { get; set; }
        public string ContactTitle { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
    }



    public class Northwind : DbContext
    {
        public DbSet<Customer> Customers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string path = System.IO.Path.Combine(System.Environment.CurrentDirectory, "../data/Northwind.db");
            // use SQLite
            optionsBuilder.UseSqlite($"Filename={path}");

            //optionsBuilder.UseSqlServer(@"Data Source=(localdb)\mssqllocaldb;" + "Initial Catalog=Northwind;" + "Integrated Security = true;" + "MultipleActiveResultSets=true;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}


```

### Adding data : Posting data in an HTML form

We can now look at adding new data to a database submitted via an HTML form





### Summary so far - re-building an ASP.NET Core web app with SQL and Visual Studio

```csharp
using System;
using static System.Console;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace EFCore_01_VS_SQL
{
    class Program
    {
        static void Main(string[] args)
        {
            QueryingCategories();
        }

        static void QueryingCategories()
        {
            using (var db = new Northwind())
            {
                var categories = db.Categories.Include(category => category.Products);
                foreach(Category c in categories)
                {
                    WriteLine($"{c.CategoryID}{c.CategoryName} has {c.Products.Count} products");
                }

            }
        }
    }

    public class Category
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public virtual ICollection<Product> Products { get; set; }

        public Category()
        {
            this.Products = new List<Product>();
        }
    }

    public class Product
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public int? CategoryID { get; set; }
        public virtual Category Category { get; set; }
        public string QuantityPerUnit { get; set; }
        public decimal? UnitPrice { get; set; } = 0;
        public short? UnitsInStock { get; set; } = 0;
        public short? UnitsOnOrder { get; set; } = 0;
        public short? ReorderLevel { get; set; } = 0;
        public bool Discontinued { get; set; } = false;
    }

    public class Northwind : DbContext
    {
        public DbSet<Category> Categories { get; set; }

        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=(localdb)\mssqllocaldb;" + "Initial Catalog=Northwind;" + "Integrated Security = true;" + "MultipleActiveResultSets=true;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Category>()
                .Property(c => c.CategoryName)
                .IsRequired()
                .HasMaxLength(15);

            // define a one-to-many relationship
            modelBuilder.Entity<Category>()
                .HasMany(c => c.Products)
                .WithOne(p => p.Category);

            modelBuilder.Entity<Product>()
                .Property(c => c.ProductName)
                .IsRequired()
                .HasMaxLength(40);
                
            modelBuilder.Entity<Product>()
                .HasOne(p => p.Category)
                .WithMany(c => c.Products);
        }
    }
}
```



Adding in other tables

Taken from Entity code (not from the book!)

```csharp


    public partial class Customer
    {
        public string CustomerID { get; set; }
        public string CompanyName { get; set; }
        public string ContactName { get; set; }
        public string ContactTitle { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
    }






    public partial class Category
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Category()
        {
            this.Products = new HashSet<Product>();
        }
    
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public byte[] Picture { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Product> Products { get; set; }
    }

        public partial class CustomerDemographic
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CustomerDemographic()
        {
            this.Customers = new HashSet<Customer>();
        }
    
        public string CustomerTypeID { get; set; }
        public string CustomerDesc { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Customer> Customers { get; set; }
    }









        public partial class Employee
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Employee()
        {
            this.Employees1 = new HashSet<Employee>();
            this.Orders = new HashSet<Order>();
            this.Territories = new HashSet<Territory>();
        }
    
        public int EmployeeID { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Title { get; set; }
        public string TitleOfCourtesy { get; set; }
        public Nullable<System.DateTime> BirthDate { get; set; }
        public Nullable<System.DateTime> HireDate { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string HomePhone { get; set; }
        public string Extension { get; set; }
        public byte[] Photo { get; set; }
        public string Notes { get; set; }
        public Nullable<int> ReportsTo { get; set; }
        public string PhotoPath { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Employee> Employees1 { get; set; }
        public virtual Employee Employee1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Order> Orders { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Territory> Territories { get; set; }
    }










        public partial class Order
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Order()
        {
            this.Order_Details = new HashSet<Order_Detail>();
        }
    
        public int OrderID { get; set; }
        public string CustomerID { get; set; }
        public Nullable<int> EmployeeID { get; set; }
        public Nullable<System.DateTime> OrderDate { get; set; }
        public Nullable<System.DateTime> RequiredDate { get; set; }
        public Nullable<System.DateTime> ShippedDate { get; set; }
        public Nullable<int> ShipVia { get; set; }
        public Nullable<decimal> Freight { get; set; }
        public string ShipName { get; set; }
        public string ShipAddress { get; set; }
        public string ShipCity { get; set; }
        public string ShipRegion { get; set; }
        public string ShipPostalCode { get; set; }
        public string ShipCountry { get; set; }
    
        public virtual Customer Customer { get; set; }
        public virtual Employee Employee { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Order_Detail> Order_Details { get; set; }
        public virtual Shipper Shipper { get; set; }
    }













        public partial class Order_Detail
    {
        public int OrderID { get; set; }
        public int ProductID { get; set; }
        public decimal UnitPrice { get; set; }
        public short Quantity { get; set; }
        public float Discount { get; set; }
    
        public virtual Order Order { get; set; }
        public virtual Product Product { get; set; }
    }















        public partial class Product
    {

        public Product()
        {
            this.Order_Details = new HashSet<Order_Detail>();
        }
    
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public Nullable<int> SupplierID { get; set; }
        public Nullable<int> CategoryID { get; set; }
        public string QuantityPerUnit { get; set; }
        public Nullable<decimal> UnitPrice { get; set; }
        public Nullable<short> UnitsInStock { get; set; }
        public Nullable<short> UnitsOnOrder { get; set; }
        public Nullable<short> ReorderLevel { get; set; }
        public bool Discontinued { get; set; }
    
        public virtual Category Category { get; set; }
        public virtual ICollection<Order_Detail> Order_Details { get; set; }
        public virtual Supplier Supplier { get; set; }
    }

















        public partial class Region
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Region()
        {
            this.Territories = new HashSet<Territory>();
        }
    
        public int RegionID { get; set; }
        public string RegionDescription { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Territory> Territories { get; set; }
    }














        public partial class Shipper
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Shipper()
        {
            this.Orders = new HashSet<Order>();
        }
    
        public int ShipperID { get; set; }
        public string CompanyName { get; set; }
        public string Phone { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Order> Orders { get; set; }
    }



  	public partial class Supplier

        public Supplier()
        {
            this.Products = new List<Product>();
        }
    
        public int SupplierID { get; set; }
        public string CompanyName { get; set; }
        public string ContactName { get; set; }
        public string ContactTitle { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
        public string HomePage { get; set; }
    
        public virtual ICollection<Product> Products { get; set; }
    }








  	public partial class Supplier

            [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Supplier()
        {
            this.Products = new HashSet<Product>();
        }
    
        public int SupplierID { get; set; }
        public string CompanyName { get; set; }
        public string ContactName { get; set; }
        public string ContactTitle { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
        public string HomePage { get; set; }
    
        public virtual ICollection<Product> Products { get; set; }
    }













        public partial class Territory
    {
        public Territory()
        {
            this.Employees = new HashSet<Employee>();
        }
    
        public string TerritoryID { get; set; }
        public string TerritoryDescription { get; set; }
        public int RegionID { get; set; }
    
        public virtual Region Region { get; set; }
        public virtual ICollection<Employee> Employees { get; set; }
    }
```


So code is currently : Check out ASP_Core_03 for details



### Summary So Far : ASP.NET Core Empty Website with local array using Visual Studio - ASP.NET Core Entity Razor 02

This project attemts to use the built-in Razor Visual Studio scaffolding to build a set of pages - a pre-built website built by Visual Studio.

Within this I have added just one page `Phil.cstml` and its code-behind page `Phil.cshtml.cs` and they both use Northwind to put Products on the screen.

It's the most basic example that I can think of!!!

Things to be aware of and learning points

* use DbContext not DBContext

* use non-static methods as we are instantiating the class in order to produce the results


### Further Summary Of Work So Far : Clarification Of Libraries Etc

```csharp
using Microsoft.EntityFrameworkCore;
// notice that it's DbContext with a little 'b'
public class Northwind : DbContext{}
```

```csharp
public class Customer 
{
    public string CustomerID { get; set; }
    public string CompanyName { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Region { get; set; }
    public string PostalCode { get; set; }
    public string Country { get; set; }
    public string Phone { get; set; }
    public string Fax { get; set; }
}
```

These are for working with SQL server

```bash
# first one is a critical one
install-package Microsoft.EntityFrameworkCore.SqlServer -ProjectName xxx
# not sure how critical these two are
install-package Microsoft.EntityFrameworkCore.SqlServer.Design -ProjectName xxx
install-package Microsoft.EntityFrameworkCore.SqlServer.Tools -ProjectName xxx
```

Futher develop Northwind class now

```csharp
public class Northwind : DbContext
{
    public DbSet<Customer> Customers { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        string path = System.IO.Path.Combine(System.Environment.CurrentDirectory, "Northwind.db");
        optionsBuilder.UseSqlServer(@"Data Source=(localdb)\mssqllocaldb;" + "Initial Catalog=Northwind;" + "Integrated Security=true;" + "MultipleActiveResultSets=true;");
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Customer>()
            .Property(customer => customer.ContactName)
            .IsRequired()
            .HasMaxLength(40);
        modelBuilder.Entity<Customer>()
            .Property(customer => customer.CustomerID)
            .IsRequired()
            .HasMaxLength(40);

    }
}
```

Add Pages folder

Add _ViewStart.cshtml 

```bash
@{
    Layout = "_Layout";
}
```


Add _Layout.cshtml 

```bash
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>@ViewBag.Title</title>
</head>
<body>
    <div>
        @RenderBody()
    </div>
</body>
</html>
```





### ViewData

Exposes a Dictionary whose index is the string to be displayed

```csharp
public void OnGet(){
	ViewData["Title"]="Some Title";
}
```

```html
<h1>@ViewData["Title"]</h1>
```




### Viewbag - don't use this!

Viewbag exposes dynamic fields ie object type

Is an array of strings







### Using LINQ Lambda to get data

Instead of a traditional LINQ query we can use the following syntax

```csharp
// all customers
Customers = db.Customers;
// selection of customers
Customers = db.Customers.Where(c => c.City == CustomerCity).ToList<Customer>();
```

### GroupBy

To produce a list of customers grouped by City let's do the following

```csharp

```




### Inserting A New Record Using ASP Entity Core

Let's see if we can now insert a new record into our database from our web page

Let's add a form at the bottom of the page

Before we can do this though we need to go back and rebuild everything from scratch so here goes

Working from Chapter 14 onwards

Create a new .cshtml with accompanying .cs page - let's call this one Entity03.cshtml


Entity03.cshtml.cs

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ASPEntityCore_04_VS_SQL.Pages
{
    public class Entity03Model : PageModel
    {
        public IEnumerable<string> Customers { get; set; }

        public void OnGet()
        {
            ViewData["Title"] = "Customers Page";
            Customers = new[] { "first", "second", "third" };
        }
    }
}
```

Entity03.cshtml

```html
@page
@model Entity03Model
@{
}
<h1>@ViewData["Title"]</h1>
<ol>
    @foreach (string customer in Model.Customers)
    {
        <li>@customer</li>
    }
</ol>
```

This produces a local list of customers 

Let's now connect to Northwind.

In Entity03Model.cshtml.cs add the following

```csharp
using ASPCoreEntity_03_Data;
```

and in the class `public class Entity03Model : PageModel` add

```csharp
private Northwind db;
```

and add a constructor

```csharp
public Entity03Model(Northwind injectedContext){
	db = injectedContext;
}
```

We can now in the OnGet() method invoke the Northwind database and get out data

```csharp
public void OnGet()
{
    ViewData["Title"] = "Customers Page";
    //    Customers = new[] { "first", "second", "third" };
    // Now we are outputting a very simple array of strings here
    Customers = db.Customers.Select(c => c.ContactName).ToArray();
}
 ```


Next in the Northwind class add this constructor which reads from the base class

```csharp
public class Northwind : DbContext{
	// existing code 
	// default constructor added in 
	public Northwind(){}
	// new constructor added int
	public Northwind(DbContextOptions options) : base(options) { }	
}
```

also 

```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder) {
   base.OnModelCreating(modelBuilder);
}
```

Also to get Northwind to work correctly we have to inject the service.

```csharp
public class Startup
{
	...
    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
        services.AddMvc();
        services.AddDbContext<Northwind>(options => options.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=Northwind;Trusted_Connection=True;MultipleActiveResultSets=true"));
    }	
```

The code should now display names correctly from the database

### Adding a Customer

We can now try and add a customer to our page.

In our .cshtml.cs page let's add a customer element

```csharp
public class Entity04_Add_CustomerModel : PageModel
{
    public IEnumerable<Customer> Customers { get; set; }
    public Northwind db;

    [BindProperty]
    public Customer customer { get; set; }
```
And some code to deal with an HTML POST request

```csharp
public IActionResult OnPost()
{
    if (ModelState.IsValid)
    {
        db.Customers.Add(customer);
        db.SaveChanges();
        return RedirectToPage("/Entity04_Add_Customer");
    }
    return Page();
}
```


This brings us to a great point where we can now use Northwind to read records and insert new ones.

I want to develop this to bring relationships between different products etc 

I also want to develop this to be able to update records as well.

###Summary of present learning

To list customer records using a table we can do the following

Startup.cs

```cs
string path = System.IO.Path.Combine(System.Environment.CurrentDirectory, "../data/Northwind.db");
services.AddDbContext<Northwind>(options => options.UseSqlite($"Filename={path}"));
```

Models\Northwind.cs

```cs
public class Northwind : DbContext
{
    public DbSet<Customer> Customers { get; set; }
    public Northwind() { }
    public Northwind(DbContextOptions options) : base(options) { }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        string path = System.IO.Path.Combine(System.Environment.CurrentDirectory, "../data/Northwind.db");
        optionsBuilder.UseSqlite($"Filename={path}");
       // optionsBuilder.UseSqlServer(@"Data Source=(localdb)\mssqllocaldb;" + "Initial Catalog=Northwind;" + "Integrated Security=true;" + "MultipleActiveResultSets=true;");
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}
```

Page with GET and POST methods

```cs
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using ASP_Core_09_Web_MAC.Models;

namespace ASP_Core_Entity_09_Web_MAC.Pages
{
    public class CustomerListAdd5Model : PageModel
    {

        public IEnumerable<Customer> customers { get; set; }
        public Northwind db;
        [BindProperty]
        public Customer customer { get; set; }
        public CustomerListAdd5Model (Northwind injectedContext){
            db = injectedContext;
        }
        public void OnGet()
        {
            customers = db.Customers.OrderBy(c => c.CustomerID).ToList(); 
        }
        public IActionResult OnPost(){
            if(ModelState.IsValid){
                db.Customers.Add(customer);
                db.SaveChanges();
                return RedirectToPage("/CustomerListAdd5");
            }
            return Page();
        }
    }
}
```

Page with display and add customer

```cshtml
@page
@model ASP_Core_Entity_09_Web_MAC.Pages.CustomerListAdd5Model
@{
}
<nav class="navbar navbar-inverse">
    <div class="container">
        <div class="navbar-header">
            <a asp-page="/Index" class="navbar-brand">ASP_Core_09_Web_MAC</a>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a asp-page="/Index">Home</a></li>
                <li><a asp-page="/About">About</a></li>
                <li><a asp-page="/Contact">Contact</a></li>
                <li><a asp-page="/CustomerList">CustomerList</a></li>
                <li><a asp-page="/CustomerListAndAdd2">CustomerListAndAdd</a></li>
            </ul>
        </div>
    </div>
</nav>
<form method="post">
  <div class="form-group">
    <label for="CustomerID">Customer ID</label>
    <input asp-for="customer.CustomerID" type="text" class="form-control" id="CustomerID" aria-describedby="emailHelp" placeholder="Customer ID">
  </div>
  <div class="form-group">
    <label for="ContactName">Contact Name</label>
    <input asp-for="customer.ContactName" type="text" class="form-control" id="ContactName" aria-describedby="emailHelp" placeholder="Contact Name">
  </div>
  <div class="form-group">
    <label for="CompanyName">Company Name</label>
    <input asp-for="customer.CompanyName" type="text" class="form-control" id="CompanyName" aria-describedby="emailHelp" placeholder="Company Name">
  </div>
    <div class="form-group">
    <label for="Citu">City</label>
    <input asp-for="customer.City" type="text" class="form-control" id="City" aria-describedby="emailHelp" placeholder="City">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<table class="table table-striped table-hover table-bordered">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">Country</th>
        </tr>
    </thead>
    <tbody>
        @foreach (var c in Model.customers)       {
        <tr>
            <th scope="row">@c.CustomerID</th>
            <td>@c.ContactName</td>
            <td>@c.Address</td>
            <td>@c.City</td>
            <td>@c.Country</td>
        </tr>
        }
    </tbody>
</table>
```

The book moves on to MVC at this point but I am keen to follow this through to get the full CRUD working for the RAZOR pages before we do the MVC, so we have a tutorial below to accomplish this using a different database.

## Tutorial : Building An App using ASP.NET Core Razor

[https://docs.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start](https://docs.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start)

[Review : Movies App : So Far](#review-movies-app-so-far)

### Create Movie Project

Create a new `ASP.NET Core Web Application` and choose `Web Application` from the second page

In the command line this would be

```console
dotnet new webapp -o MyApp
cd MyApp
```

### Create Movies class

Add a Models folder and inside add this class 

```csharp
public class Movie
{
    public int ID { get; set; }
    public string Title { get; set; }
    // note : setting this to date means the user is not required to enter time information
    // also when displaying this field, only date information is supplied
    [DataType(DataType.Date)]
    public DateTime ReleaseDate { get; set; }
    public string Genre { get; set; }
    public decimal Price { get; set; }
}
```

### Add a database context

We can now add a database context

Create a new file called `RazorPagesMovieContext`

```cs
using Microsoft.EntityFrameworkCore;
namespace RazorPagesMovie.Models
{
    public class RazorPagesMovieContext : DbContext
    {
        public RazorPagesMovieContext (DbContextOptions<RazorPagesMovieContext> options)
            : base(options)
        {
        }
        public DbSet<RazorPagesMovie.Models.Movie> Movie { get; set; }
    }
}
```



Also update appsettings.json

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "MovieContext": "Data Source=MvcMovie.db"
  }
}
```

Add packages

```bash
dotnet add package Microsoft.EntityFrameworkCore.SQLite
dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
dotnet add package Microsoft.EntityFrameworkCore.Design
```


### Update Database Context In Visual Studio

If we are working in Windows we can use scaffolding to achieve some of this in an easier manner

We must now update Northwind class to include a DbSet<Movie> 

Create a `Pages\Movies` folder

`Add` a new `Scaffolded Item` and choose `Razor Page with Entity CRUD`.

Choose the `Movies` database with the `Northwind` database context

This will update appsettings.json with the Northwind database connection string



### Back to Visual Studio for MAC : now scaffold the database

```console
dotnet tool install --global dotnet-aspnet-codegenerator
```

```console
dotnet aspnet-codegenerator razorpage -m Movie -dc RazorPagesMovieContext -udl -outDir Pages/Movies --referenceScriptLibraries
```

This will do all the scaffolding for us (using the command line)

Also we can now create the database using

```console
dotnet ef migrations add InitialCreate
dotnet ef database update
```

After this step, compiling and running the code should now work with the path

```html
http://localhost:1234/Movies
http://localhost:1234/Movies/Create
```

Also the link in the _Layout.cshtml will read

```html
<li><a asp-page="Movies/Index">Movies</a></li>
```

### Review : Movies App : So Far 

```console
dotnet new webapp -o ASP_Core_Movie_02
dotnet sln Master.sln add ASP_Core_Movie_02/ASP_Core_Movie_02.csproj
cd ASP_Core_Movie_02
dotnet run
mkdir Models
cd Models
touch Movie.cs
```

To add Nuget packages

```console
dotnet add package Microsoft.EntityFrameworkCore.SQLite
dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
dotnet add package Microsoft.EntityFrameworkCore.Design
```

Actually the command above can install the wrong version with compatibility issues so this version of the .csproj file should fix all of the issues

```xml
<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>netcoreapp2.1</TargetFramework>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.App" />
    <PackageReference Include="Microsoft.AspNetCore.Razor.Design" Version="2.1.2" PrivateAssets="All" />
    <PackageReference Include="Microsoft.EntityFrameworkCore.Sqlite" Version="2.1.8" />
    <PackageReference Include="Microsoft.VisualStudio.Web.CodeGeneration.Design" Version="2.1.9" />
    <PackageReference Include="Microsoft.EntityFrameworkCore.Design" Version="2.1.8" />
  </ItemGroup>
</Project>
```

Now the following two commands should both work and scaffold a set of Movie pages with CRUD operations

```console
dotnet tool install --global dotnet-aspnet-codegenerator
dotnet aspnet-codegenerator razorpage -m Movie -dc RazorPagesMovieContext -udl -outDir Pages/Movies --referenceScriptLibraries
```

### Using Environment Variables to create a conditional Database connection string

```cs
// Use SQL Database if in Azure, otherwise, use SQLite
if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Production")
    services.AddDbContext<RazorPagesMovieContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("MyDbConnection")));
else
    services.AddDbContext<RazorPagesMovieContext>(options =>
options.UseSqlite(Configuration.GetConnectionString("MovieContext")));
```

## To auto-generate the database

The first time we use a database we must auto create it.

Run the following to create the database 

```console
# create the database
dotnet ef migrations add InitialCreate
```

Then update the database with table info


```console
dotnet ef database update
```

We can now create our database in azure and try and connect to it

So we now fully have ASP_Core_Movie_02 up and running locally but using a web database hosted in Azure!  The only dodgy thing is the connection string username and password are hard coded inside the database connection string which I am pretty sure is not a good thing!

```cs
services.AddDbContext<RazorPagesMovieContext>(options =>
options.UseSqlServer(Configuration.GetConnectionString("MyDbConnection")));
```



```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "MovieContext": "Data Source=../data/MvcMovie2.db",
    "MyDbConnection": "Server=tcp: philanderson888-server-01.database.windows.net,1433;Initial Catalog=philanderson888_movies;Persist Security Info=False;User ID=philanderson888admin@philanderson888-server-01.database.windows.net;Password=Pa$$w0rdPa$$w0rd;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
  }
}
```

The above walkthrough was using this URL by the way:

https://github.com/Microsoft/vs4mac-labs/tree/master/Web/Azure-SQL-Database













<pre>



















</pre>


## Tutorial : Contoso University App using ASP.NET Entity Core with Razor 

[https://docs.microsoft.com/en-us/aspnet/core/data/ef-rp/intro](https://docs.microsoft.com/en-us/aspnet/core/data/ef-rp/intro)


building in the /database folder


### Contoso University 01

This adds basic functionality for creating a Student model, reading students, adding, editing and deleting individual students.

### Contoso University 02

Adding in pagination

Adding in search box

Adding in sort the index by columns by clicking on that column


### Contoso University 03

This adds into the About page the ability to show enrolments grouped by date

### Contoso Universiy 04

This goes back to scratch and starts building again from scratch, now that I have proven I can build multiple copies of the app

New Project, ASP.NET Core Web, Web Application

Set up the menu items in Pages, Shared, _ Layout 

```html
<li><a asp-page="/Students/Index">Students</a></li>
<li><a asp-page="/Courses/Index">Courses</a></li>
<li><a asp-page="/Enrollments/Index">Enrollments</a></li>
<li><a asp-page="/Rooms/Index">Rooms</a></li>
```

Add `Models` folder and add these classes

```csharp
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContosoUniversity.Models
{
    public class Course
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CourseID { get; set; }
        public string Title { get; set; }
        public int Credits { get; set; }

        // shared : for every course it will have a number 
        // of enrollments
        public ICollection<Enrollment> Enrollments { get; set; }

        public ICollection<Room> Rooms { get; set; }
    }



    public enum Grade
    {
        A, B, C, D, F
    }

    public class Enrollment
    {
        // unique
        public int EnrollmentID { get; set; }
        public Grade? Grade { get; set; }

        // from others
        public int CourseID { get; set; }
        public int StudentID { get; set; }
        public Course Course { get; set; }
        public Student Student { get; set; }
    }



    public class Student
    {
        public int ID { get; set; }
        public string LastName { get; set; }
        public string FirstMidName { get; set; }
        public DateTime EnrollmentDate { get; set; }

        public ICollection<Enrollment> Enrollments { get; set; }
    }

    public class Room{
        public int RoomID { get; set; }
        public string RoomName { get; set; }
        public DateTime OpenTime { get; set; }
        public DateTime CloseTime { get; set; }
    }
}
```

### Scaffold the Students Database

Right click on Pages/Students and choose Add, New Scaffolded Item.

Choose `Student` Model

Add a new context and amend it to read `ContosoUniversity.Models.SchoolContext`

Repeat if necessary for `Courses` and `Enrollments`

Now update `Program.cs`

```csharp
using ContosoUniversity.Models;
using Microsoft.Extensions.DependencyInjection;

// replace Main()

public static void Main(string[] args)
{
    var host = CreateWebHostBuilder(args).Build();

    using (var scope = host.Services.CreateScope())
    {
        var services = scope.ServiceProvider;

        try
        {
            var context = services.GetRequiredService<SchoolContext>();
            context.Database.EnsureCreated();
        }
        catch (Exception ex)
        {
            var logger = services.GetRequiredService<ILogger<Program>>();
            logger.LogError(ex, "An error occurred creating the DB.");
        }
    }

    host.Run();
}

```






## Tutorial : Razor from scratch


Introduction to Razor

[https://docs.microsoft.com/en-us/aspnet/core/razor-pages/?view=aspnetcore-2.2&tabs=visual-studio](https://docs.microsoft.com/en-us/aspnet/core/razor-pages/?view=aspnetcore-2.2&tabs=visual-studio)


Razor is part of ASP.NET Core MVC

perhaps look at the MVC another time

Let's create ASPRazor_01

Startup.cs

	Razor is enabled by adding it as a service

```csharp
services.AddMvc()
```

also

```
app.UseMvc()
```

.cshtml

@page makes this into an MVC action which handles requests without going through a controller

@page must be the first thing on a page

We can use fields like @DateTime.Now

We can expose Model fields in the .cs below

```csharp
public class Page : PageModel{
	public string myProperty{get;set;}= "default value";
	public void OnGet(){
	  myProperty+=" on DateTime.Now";
	}
}
```

/ reaches Index.cshtml

/Page reaches Page.cshtml

/Folder/ reaches /Folder/Index.cshtml


Razor is designed to make Model binding and Tag helpers all work 

Startup.cs is used to initialize DbContext

```csharp
public void ConfigureServices...
	services.addDbContext<AppDbContext>(options=>options.UseInMemoryDatabase("name"))
```


add data model in Data folder

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ASPRazor_01.Data
{
    public class Customer
    {
        public int Id { get; set; }

        [Required, StringLength(100)]
        public string Name { get; set; }
    }
}
```

then add

```csharp
using Microsoft.EntityFrameworkCore;

namespace ASPRazor_01.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Customer> Customers { get; set; }
    }
}
```

and

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using ASPRazor_01.Data;
using System.ComponentModel.DataAnnotations;

namespace ASPRazor_01.Pages
{
    public class CreateModel : PageModel
    {
        private readonly AppDbContext _db;

        public CreateModel(AppDbContext db) {
            _db = db;
        }

        [BindProperty]
        public Customer Customer { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }
            _db.Customers.Add(Customer);
            await _db.SaveChangesAsync();
            return RedirectToPage("/Index");
        }
    }
}
```


<pre>



















</pre>


# Chapter 15 : ASP.NET Core MVC, Testing, Config, Authentication, Routes, Models, Views, Controllers


## MVC

### New MVC App

Visual Studio, New Web Core App with MVC, individual user authentication stored in app

	wwwroot 	Static Content

	Data 		ASP Identity : Authentication + Authorisation

	Dependencies

	Nuget 		Check out .csproj file

	Models 		Database tables

					Actions will fetch model and pass to view

	View  		.cshtml files

	Services 	

	Extensions

	appsettings.json 	load settings

	bower.json 			client-side packages

	Program.cs 			

	Startup.cs

### MVC Plan

API

	Consume : No MVC

		GET
		POST
		PUT
		DELETE


	Build API

		Built-in tools

		From book




# ASP Form with multiple submit buttons

```html
<form action="" method="post">
    <input type="submit" value="Option 1" formaction="DoWorkOne" />
    <input type="submit" value="Option 2" formaction="DoWorkTwo"/>
</form>
```

Then simply have controller actions like this:

```cs
[HttpPost]
public IActionResult DoWorkOne(TheModel model) { ... }

[HttpPost]
public IActionResult DoWorkTwo(TheModel model) { ... }
```

### ASP MVC

[https://www.amazon.co.uk/Professional-ASP-NET-MVC-Jon-Galloway-ebook/dp/B00LVVUISG/ref=sr_1_1](https://www.amazon.co.uk/Professional-ASP-NET-MVC-Jon-Galloway-ebook/dp/B00LVVUISG/ref=sr_1_1)

<pre>



















</pre>

# Pluralsight Course in MVC

These are notes on [Pluralsight MVC Course](https://app.pluralsight.com/interactive-courses/play/23a0428b-b845-4a7d-aa66-397716ab246e)

MVC Structure

    Browser makes a request to the controller

    Controller fetches data from the model

    Controller passes the response back to the View

    View displays the result to the end user

MVC Folder Structure

    http://www.website.com/Home/Index

    Controllers

        HomeController.cs

    Models

        Home.cs

    Views

        Home

            Index.cshtml



Frameworks we can use

    Visual Studio
    VSCode
    Xamarin Studio
    MonoDevelop
    SharpDevelop


View : Accept data

Controller : Send data to view

### Displaying Data In The View

./Views/Home/Index.cshtml

@ is Razor syntax

Notice that `@model` is lower case for data to expect and `@Model` is data to display

```html
@model String // expect string 

<p>@Model</p>
```

### Sending Data To The View From The Controller

Home controller is called `HomeController.cs`

File is located at `Controllers\HomeController.cs`

```cs
namespace MyApp.Controllers{
    public class HomeController : Controller{
        public IActionResult Index(){
            return View();
        }
    }
}
```

Any method which returns IActionResult is called an 'Action' method

Action methods provide responses which are viewable by a browser

Also URLs link to `http://www.website.com/Controller/Action`  ie `/Home/Index` in this case

```cs
namespace MyApp.Controllers{
    public class HomeController : Controller{
        public IActionResult Index(){
            var name = "Some String";
            // returns string 'name' to view Index.cshtml
            return View("Index",name);
        }
    }
}
```

So to summarise

    https://www.website.com/Controller/Action 

    HomeController.cs has action Index which maps to the `Home` folder with `Index.cshtml` file


## Using The Default Route

When we type in www.website.com it will take us to a default page

If we omit the `controller` or the `action' it will take us to the default route


## Models

https://app.pluralsight.com/interactive-courses/play/ec0ae5eb-a4fe-4a67-996e-aec70332a306

We are going to create a `Character.cs` class in the Models folder

```cs
namespace MyApp.Models{
    
    public class Character{
        public string Name;
    }
}

```

With naming convention public fields, variables or properties are in Pascal case.

In the Controller then we can declare a new instance of `Character`

```cs
using MyApp.Models;
public IActionResult Index(){
    var model = new Character();
    model.name="Fred";
    return View(model);
}

```

Notice that we have to add the appropriate namespace to use the Model, View or Controller.

Also in the View we need to use 

```cshtml
@model MyApp.Models.Character
<p>@Model.Name</p>
```

## Adding A Form For User Input

We are going to 

1) Add a form to our View

2) Add a `Create` method in our controller

### Add a form

```html
<form>
  <input name="CharacterName" />
  <input type="Submit" value="Add Character" />
</form>
```

Note that in our controller we will now have a `Create` method which accepts a string parameter

```cs

public IActionResult Create(string characterName){
    
    return View();
}
```

Notice that the input field name and the input parameter name must match.  Even though the case does not.

Now we're going to put the Index Controller method just back to returning a View and instead put all of the logic inside the Create method

```cs
public IActionResult Index(){
    return View();
}
public IActionResult Create(string characterName){
    var model = new Character();
    model.name=characterName;
    return View("Index",model);
}

```

Note that we have to add "Index" as the View name because the names don't match any more so we have to exactly specify the View to use.

The final thing is, in the form, we need to tell the form which `action` to use.

```html
<form asp-action="Create">
```

In this instance we don't have to specify the `Home` controller as the controllers match.

If we had to match a different controller though we can do this using the following

```html
<form asp-action="Create" asp-controller="Home">
```
















## ASP Authentication

https://docs.microsoft.com/en-us/aspnet/identity/overview/getting-started/adding-aspnet-identity-to-an-empty-or-existing-web-forms-project

https://www.cnblogs.com/dupeng0811/p/adding-asp-net-mvc5-identity-authentication-to-an-existing-project.html

https://docs.microsoft.com/en-us/aspnet/mvc/overview/security/aspnet-mvc-5-app-with-sms-and-email-two-factor-authentication




# Chapter 16 : Web Services, Web Applications, Angular, React, REST API

REST 1) decouple client/server 2) stateless 3) cache 4) layered 5) uniform interface
REST preferred over SOAP as SOAP larger XML requests


### Using Postman with ASP.NET API

https://www.c-sharpcorner.com/article/how-to-use-postman-with-asp-net-core-web-api-testing/




### JSON-Server (NODE REST API)</h2>
         
https://github.com/typicode/json-server

A full REST API with zero coding in less than 30 seconds 


# Chapter 17 : XAML, Fluent, UWP for Win10/XBOX/Halo

# Chapter 18 : XAMARIN, Mobile Apps, Mobile Forms




<pre>
























</pre>

# 70-486

# 70-486 Chapter 01




MVC

ASP4 Web Pages using .cshtml - good for databases

ASP4 Web Forms - good for client rich applications

MVC in ASP and Core
	Model : data
	Controller : user interaction, modifies model, selects view

Razor in Core only : build model and render HTML in a cshtml with .cs code-behind

API in ASP and Core
	Controller
	Model
	Client : send request via HTTP

Ajax 
	XmlHttpRequest


Angular
	written in TypeScript so has to be transpiled to Javascript

React
	

IIS 

	Deployment

		Web Deploy protocol

	Hosting

		Web Farm

		Caching

		Authentication
			Smartcard
			TLS
			Windows
		Security

	Load balancing




.cshtml Web Pages

	<html>


	@//csharp code goes here


	has no control over what appears in the URL address bar

	large sites : every page must be coded individually

	no separation of logic


MVC

	more complex

	not drag and drop


ASP common features

	web.config
		System.Web.Configuration
		you can override the root web.config file by adding a second web.config file at a lower level

	System.Web.Security
		Create users etc

	System.Runtime.Caching

	Authorisation using groups : called Membership provider

REST Web API

	Call via 
		Javascript XmlHttpRequest
		jQuery $.ajax
		Angular 
	GET POST PUT DELETE


Compilation

	Build => MSIL created

	Page first requested => MSIL built into full assembly language and run in the .NET CLR runtime

		This can cause a delay the first time the page is loaded.  To avoid this, can pre-compile your site into just one dll file.







## Lesson 1.3 ASP Core MVC

Razor page

	inherit from PageModel

		initialises in OnGet method

		OnGet also draws data from database

		Every public property in the model can be displayed on the page

Example would be

```cs
using Microsoft.AspNetCore.Mvc.RazorPages

public class MyPageModel : PageModel{

	public string ShowMe {get;set;}

	public void OnGet(){
		ShowMe = "some string";
	}
}

```

### @page

`@page` must be the first line of every .cshtml Razor file as well

`@page` converts the page into a Razor page.  Razor pages handle requests directly without going through an MVC model

### @model

@model is used on the .cshtml Razor page to display any items stored in the .cshtml.cs code-behind page.

Example of a .cshtml page


```html
@page
@model MyPageModel
@{
	ViewData["Title"]="some title";
}
<h1>@ViewData["Title"]</h1>
<div>model.ShowMe</div>


```



### Web API

Useful for SPAs

	Controller
	Model
	Client



### Core vs Framework

Core

	cross platform

	microservices

	docker

	high performance

	scalable

Framework

	


### MVC

Controller

	Microsoft.AspNetCore.Mvc.Controller

	responds to http requests

Actions

	Microsoft.AspNetCore.Mvc.IActionResult

	methods which run in response to user requests



### View Engine

.cshtml

Razor is default view engine in core

```html
<div class="display-label">@Html.DisplayNameFor(model=>model.Subject)</div>
<div class="display-field">@Html.DisplayFor(model=>model.Subject)</div>

```


### Request Life Cycle

http://domain.com/product/display/1

Product is the `controller`

Display is the `action`

Display action creates new instance of Product class then queries database for items with ID = 1.  

Display action also creates new instance of the ProductDisplay view and passes the Product model to this.

The ProductDisplay view on the server then renders the HTML and returns HTML to user


Lab : Adventure works








# Module 2 : Designing ASP Core MVC Application

Distributed applications

	Presentation layer : views and controllers

	Business logic layer : models

	Data access layer : tables

	Database layer : db itself

Communication

    HTTP from user to web server

    WEB API from web server to middle tier server, or WCF

    T-SQL to database

State

    Client-side

        Cookies

        Query string

    Server-side

        Temp folder
        App State
        Session State
        DB


    Index.es.resx. for spanish or Index.es-CL.resx

Security



## Chapter 2 Lesson 2 : Designing MVC

Models

    User : User Class eg user/pass

    Photo : Photo Class

Controllers inherit from Microsoft.AspNetCore.Mvc.Controller

    One controller per model

    Photo model has PhotoController controller

    User
        Logon GET
        Logon POST
    Photo
        AddPhoto GET.    display form
        AddPhoto POST.   new photo
        DisplayAll GET


Navigation Controls
    Menu
    Tree
    Breadcrumb

    URL : mysite/Controller/Action/ID



# Module 3 Lesson 1 : Middleware


Attaches to request/response

## Startup class

    class Startup{
        ConfigureServices(){
            // used to inject services
        }
        Configure(){
            // supports dependency injection
        }
    }

    class Program{
        void Main(){
            var instance = new Startup()
            instance.Configure();
        }
    }






























































</pre>


# Blazor

## Blazor : on top of WASM web assembly

## Blazor CRUD App

https://ankitsharmablogs.com/asp-net-core-crud-using-blazor-and-entity-framework-core/

## Blazor CRUD App 2

https://medium.freecodecamp.org/how-to-create-a-single-page-application-using-razor-pages-with-blazor-9d010fd6be45

## Blazor Entity Drop Down Box

https://medium.freecodecamp.org/how-to-create-a-cascading-dropdownlist-in-blazor-using-ef-core-d230bb5bff5f


## Authentication : ASP.NET Core 2-factor authentication with Google !!!

https://medium.freecodecamp.org/how-to-set-up-two-factor-authentication-on-asp-net-core-using-google-authenticator-4b15d0698ec9

### Prerequisites

Google Authenticator App on phone which generates 6-digit time based password

* .NET Core 2.0

* VS 2017

### Initial install

Install ASP.NET Core Web Application (MVC) with .NET Core 2.0 and Individual User Authentication















## Azure




## To publish to Azure use the azure cli

```bash
# on MAC
brew update
brew upgrade python
brew install  azure-cli
```

If this has worked then

```bash
az
```

should now generate the azure command line


```bash
az login
```

producing


```json
[
  {
    "cloudName": "AzureCloud",
    "id": "39ff3502-0a96-4f31-9d65-093ab484da57",
    "isDefault": true,
    "name": "MSDN Platforms",
    "state": "Enabled",
    "tenantId": "84db59c8-e4f2-4a8b-9c4a-2f6be457ceba",
    "user": {
      "name": "philanderson888@hotmail.com",
      "type": "user"
    }
  },
  {
    "cloudName": "AzureCloud",
    "id": "90e96ce7-8d14-437b-a53d-8a2e72487187",
    "isDefault": false,
    "name": "Pay-As-You-Go",
    "state": "Disabled",
    "tenantId": "84db59c8-e4f2-4a8b-9c4a-2f6be457ceba",
    "user": {
      "name": "philanderson888@hotmail.com",
      "type": "user"
    }
  }
]
```

Note we can do amazing things in the azure cli like create a vm


```bash
az vm create -n MyLinuxVM -g MyResourceGroup --image UbuntuLTS
```

create a resource group


```bash
az group create --name myResourceGroup --location "West Europe"
```

Create an SQL server

```bash
az sql server create --name <server_name> --resource-group myResourceGroup --location "West Europe" --admin-user <db_username> --admin-password <db_password>
```

with output

```json
{
  "administratorLogin": "sqladmin",
  "administratorLoginPassword": null,
  "fullyQualifiedDomainName": "<server_name>.database.windows.net",
  "id": "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Sql/servers/<server_name>",
  "identity": null,
  "kind": "v12.0",
  "location": "westeurope",
  "name": "<server_name>",
  "resourceGroup": "myResourceGroup",
  "state": "Ready",
  "tags": null,
  "type": "Microsoft.Sql/servers",
  "version": "12.0"
}
```

```bash
az sql server list
```

Finally create a firewall rule

```bash
az sql server firewall-rule create --resource-group myResourceGroup --server <server_name> --name AllowYourIp --start-ip-address 0.0.0.0 --end-ip-address 0.0.0.0

az sql server firewall-rule create --resource-group philanderson888_webapp_sql_test_01 --server philanderson888-server-01 --name WebAppServerFirewallRuleAllowAll --start-ip-address 0.0.0.0 --end-ip-address 255.255.255.255
```

We can list firewall rules also

```bash
az sql server firewall-rule list --resource-group philanderson888_webapp_sql_test_01 --server philanderson888-server-01
```



Create a database

```bash
az sql db create --resource-group philanderson888_webapp_sql_test_01 --server philanderson888-server-01 --name philanderson888_testdb_o1 --service-objective S0





```

Create the connection string


```bash
Server=tcp:<server_name>.database.windows.net,1433;Database=coreDB;User ID=<db_username>;Password=<db_password>;Encrypt=true;Connection Timeout=30;
```




### Take 2 : Publishing An App To Azure Using Visual Studio for MAC

This is following this walkthrough

https://github.com/Microsoft/vs4mac-labs/tree/master/Web/Publish-Azure


Just right click on the app and publish to azure


### Setting the development environment configuration string

In the project properties we can configure the development environment

```cs
// Use SQL Database if in Azure, otherwise, use SQLite
if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Production")
    services.AddDbContext<RazorPagesMovieContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("MyDbConnection")));
else
   services.AddDbContext<RazorPagesMovieContext>(options =>
   options.UseSqlite(Configuration.GetConnectionString("MovieContext")));
```







# Take 3 : Building an ASP Web App using custom database then pushing to Azure


New Project, ASP Core with Web Template


Add class

```cs
using System;
using System.ComponentModel.DataAnnotations;
namespace ASP_Core_Movie_03.Models
{
    public class Movie
    {

        public int ID { get; set; }
        public string Title { get; set; }
        [DataType(DataType.Date)]
        public DateTime ReleaseDate { get; set; }
        public string Genre { get; set; }
        public decimal Price { get; set; }
    }
}
```


Then dabase context

```cs
using System;
using Microsoft.EntityFrameworkCore;
namespace ASP_Core_Movie_03.Models
{
    public class MovieContext : DbContext
    {
        public MovieContext(DbContextOptions<MovieContext> options) : base (options){
                        
        }

        public DbSet<Movie> Movies { get; set; }

    }
}
```

update appsettings.json

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Warning"
    }
  },
  "AllowedHosts": "*",
  ConnectionStrings": {
    "MovieContext": "Data Source=MvcMovie03.db"
  }
}
```

Update the .csproj file in order to get the right versions of packages

```xml
<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>netcoreapp2.1</TargetFramework>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.App" />
    <PackageReference Include="Microsoft.AspNetCore.Razor.Design" Version="2.1.2" PrivateAssets="All" />
    <PackageReference Include="Microsoft.EntityFrameworkCore.Sqlite" Version="2.1.8" />
    <PackageReference Include="Microsoft.VisualStudio.Web.CodeGeneration.Design" Version="2.1.9" />
    <PackageReference Include="Microsoft.EntityFrameworkCore.Design" Version="2.1.8" />
  </ItemGroup>
</Project>
```

Scaffold our own Movie pages now with these commands

```console
dotnet tool install --global dotnet-aspnet-codegenerator
dotnet aspnet-codegenerator razorpage -m Movie -dc RazorPagesMovieContext -udl -outDir Pages/Movies --referenceScriptLibraries
```









[Azure Data Studio](#azure-data-studio)

### Azure Data Studio

Client to query databases

Works with SQL 2014 - 2019

Use to 

* Query SQL server

* Query Azure SQL database

* Query Azure Data Warehouse
