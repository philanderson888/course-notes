# Entity Core

# Using Entity with .NET Core

So far we have used

```
ENTITY DATABASE FIRST ie Create database ==> pull Entity from this.
Create .EDMX structure (visual datagbase relationships)
	.tt  class structure
```

We are going to now use

```
ENTITY CODE FIRST ie 

	Create Models ie Customer.cs  Product.s
	Create DbContext to talk to database
	Create Connection String (location of database)

	Also optionally

	Create Migrations (changes to our code) which can in turn cause changes to the database
	Seed the database with raw data from our C# code
```

Note : many companies with LEGACY CODE are using .NET Framework

But : many are using / moving to / will move to .NET Core in the future.

Plus : .NET Core work is EASIER IN FRAMEWORK

# Entity : Code first

```
We can use this 2 ways : 

	1) Easier to get started : Code first FROM DATABASE 

		a) Create SQL
		b) Create DB with data
		c) Pull into project

	2) Harder

		a) Create models
		b) Push and create database
			- from scratch initially
			- update as you go along
```

# Updating A Database In Code First

```
We run two commands only

	NUGET
		add-migration Initial
		add-migration AddDateField
		update-database 
	POWERSHELL
		add migration
```

# Lab

Connection String Example

data source=(localdb)\mssqllocaldb;initial catalog=OrangeDb;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework

# DbContext Example

```
namespace lab_41_entity_code_first_from_db
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class OrangeModel : DbContext
    {
        public OrangeModel()
            : base("name=OrangeModel") // DATABASE NAME
        {
        }
        // DBSET NAMES THE CLASSES WHICH MATCH TABLES ie Batch class ==> Batches table
        public virtual DbSet<Batch> Batches { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Oranx> Oranges { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
```

# Entity Core

Today we are going to build

```
ENTITY CORE USING CODE FIRST MODEL

	TODO APP

		ToDoItem {
			ToDoItemId
			ToDoItemName
			DateCreated

		}

		Category{
			CategoryId
			CategoryName
		}

						==> add in CategoryId as FOREIGN KEY

.NET Core is in a state of FLUX (change)

.NET Core version 2.1 (website) and Entity Libraries -v 2.1.1

1) Initial create of database
	(NUGET) add-migration initial
			update-database
2) Change
3) Relationships
		FluentAPI ==> language to describe database fields and mandatory / interlinking columns

?? Seeding data ??  (auto add initial data eg auto add categories and some initial tasks)
```

Goal today : EFCore app and start the ASP web version of this also, depending on time

# Version 1 of .NET Core : Using both SqlServer and SQLite. No database relationships

```
using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace lab_42_EFCore_From_Scratch
{
    class Program
    {
        static List<ToDoItem> todos;

        static void Main(string[] args)
        {
            using (var db = new ToDoItemContext())
            {
                var todo = new ToDoItem()
                {
                    ToDoItemName = "first task",
                    DateCreated = DateTime.Now
                };
                db.ToDoItems.Add(todo);
                db.SaveChanges();
            }

            using (var db = new ToDoItemContext())
            {
                todos = db.ToDoItems.ToList();
            }
            todos.ForEach(todo => Console.WriteLine($"{todo.ToDoItemId,-10}{todo.DateCreated,-20}{todo.ToDoItemName}"));
        }
    }

    class ToDoItem { 
        public int ToDoItemId { get; set; }
        public string ToDoItemName { get; set; }
        public DateTime DateCreated { get; set; }
    }
    
    // talk to DB
    // NUGET : install-package microsoft.entityframeworkcore 
    //                                       .Sqlite    .Sqlserver   .Design
    // -v 2.1.1.
    class ToDoItemContext : DbContext {

        public ToDoItemContext() { }
        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            // builder.UseSqlServer(@"Data Source=(localdb)\\mssqllocaldb;Initial Catalog=ToDoDatabase;Integrated Security=true;MultipleActiveResultSets=true;");

            builder.UseSqlite("Data Source=ToDoDatabase.db");

            //builder.UseSqlServer(@"Data Source=(localdb)\\mssqllocaldb;" + "Initial Catalog=Northwind;" + "Integrated Security=true;" + "MultipleActiveResultSets=true;");
        }
    

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<ToDoItem> ToDoItems { get; set; }
    }
}
```