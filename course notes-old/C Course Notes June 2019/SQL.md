# SQL

Random Intro

SQL : Microsoft

MySQL : Open Source

SQL Structured Query Language

Relational Database

Tables

Primary Key ID

ForeignKey ID

... query .... as  alias    where alias is short name

..customers as c ...   

CRUD  Create Read Update Delete

     SQL       Insert Select Update Delete

# SQL Command Types

### DML Data Manipulation Language

SELECT

INSERT

UPDATE

DELETE

### DDL Data Definition Language

CREATE                  db/table 

ALTER

DROP

TRUNCATE 

### DCL Data Control Language

GRANT        permission 

REVOKE

### TCL Transaction Control Language

COMMIT         100%

ROLLBACK       0%

SAVEPOINT       middle

# Create DB

    use master
    drop database test01
    go
    create database test01
    go
    
    create/drop database [dont use spaces for database names]
    
    

# Create Table

    /* use this database */
    use test01
    create table table_01(
    	name VARCHAR(10),
    	description VARCHAR(30)
    )

# Data Types

big int  

bit  1/0

char    one character

nchar   5 =⇒ fixed width of 5 characters only ( Northwind CustomerID)

nvarchar(50);    variable up to 50 max

BLOB      Binary Large Object   =⇒ NOT   text!!!       

                                    YES   audio MP3  picture JPG  movie   MP4 etc  ... large 

                              files  BINARY files where content not text ie not human readable

# SP_HELP    :   get metadata

    sp_help table_01

# Sysdatabases

Can query all of the databases on your server

    select * from sysdatabases

# DROP : removes item

drop database mydb

drop table mytable

# ALTER

    ALTER TABLE table_01 ALTER COLUMN description VARCHAR(50) NOT NULL;
    ALTER TABLE table_01 ADD age INT;
    ALTER TABLE table_01 ADD dateofbirth DATETIME;
    select * from table_01

# INSERT

    INSERT INTO table_02 VALUES ('1','BOB','2019-01-01 05:22:01.123')
    
    /*  new record no name */
    
    INSERT INTO table_02 (id,date_of_birth) VALUES ('2','2019-01-01 05:22:01.123')
    
    
    
    select * from table_02

# NULL and NOT NULL

    create table table_02(
    	id int NOT NULL,
    	name nvarchar(50) NOT NULL,
    	date_of_birth DATETIME NULL
    )

# IDENTITY PRIMARY KEY

    UNIQUE will force a unique value to be allocated to this field
    
    IDENTITY also will permit auto-increment of a numeric index 
    primary key, without user specifying the index value
    
    create table table_02(
    	id int NOT NULL IDENTITY,
    	name nvarchar(50) NOT NULL,
    	date_of_birth DATETIME NULL
    )
    INSERT INTO table_02 VALUES ('BOB','2019-01-01 05:22:01.123')
    INSERT INTO table_02 (name,date_of_birth) VALUES ('tim','2019-01-01 05:22:01.123')
    INSERT INTO table_02 (name) VALUES ('paula')

# UPDATE

### Care !!!  If you OMIT 'WHERE' THEN YOU WILL UPDATE EVERY RECORD

    UPDATE table_02 set ishappy='false' where id=3
    
    select * from table_02

# Normal Form

Considerations when building a database

Extreme care has to be taken to avoid the scenario where there are duplicate instances of the same data kept independently in the database

Customer George : Phone 123456

Supplier GoodFoods with Contact George Phone 123456   

Normalising a database is ensuring data is kept as non-duplicating values

3 stages

### 1st Normal Form

Ensures 1 data item per data field eg Mobile phone field can contain only 1 mobile number

### Second Normal Form

All non-key fields are dependent on primary key

### Third Normal Form

All non-key fields don't have any inter-dependence with each other

# Foreign Key

Used when have 2 tables and want to build in inter-relationship

    drop database if exists taskDB
    drop table if exists Tasks
    drop table if exists Categories
    
    create database taskDB
    
    create table Categories(
    	CategoryID INT  IDENTITY PRIMARY KEY,
    	CategoryName nvarchar(50) NOT NULL
    )
    
    create table Tasks(
    	TaskID INT IDENTITY PRIMARY KEY,
    	Description nvarchar(50) NULL,
    	Done BIT NULL,
    	CategoryID INT NULL,
    	FOREIGN KEY (CategoryID) REFERENCES Categories (CategoryID)
    )

# Select   *  ,   Count(*)

    select * from Employees where city = 'London'
    select COUNT(*) from Employees where city = 'London'
    select * from employees
    select * from Employees where TitleOfCourtesy = 'dr.'
    select * from Products where Discontinued=1
    select count(*) from Products where Discontinued=1

# Top

    select TOP 15 * from customers ORDER BY ContactName Desc

# OrderBy

    select TOP 15 * from customers ORDER BY ContactName Desc

# Where ... And

    select * from products where discontinued=0 and categoryid=1
    select * from categories

# Operators

    SELECT ProductName, UnitPrice from Products
    where UnitsInStock>0 and UnitPrice > 29.99 Order by UnitPrice
    
    /* Product.   Price.   Quantity.    %Discount */
    select *, unitprice * quantity as 'Gross Order' from [Order Details]
    /* include discount */
    select *, unitprice * quantity as 'Gross Order',
    UnitPrice * Quantity * (1-Discount) as 'Net Order'
    from [Order Details]
    order by 'Net Order' desc

# Distinct

    select distinct country from customers order by country desc
    select count(country) from customers
    select count(distinct country) from customers
    select distinct city from customers order by city desc

# LIKE   to search within a string and % as wildcard

### %     matches 0 or more entries

LIKE [ABC]%       will return all matches starting with A or B or C

LIKE [^ABC]%     will return matches NOT starting with A or B or C

LIKE  'abc%'       starts with   abc

    select * from products where productname like 'ch%'    // starts with
    select * from products where productname like '%ch%'   // contains
    
    
    select * from products where productname like '[ABC]%'      // starts with A/B/C
    select * from products where productname like '[^ABC]%'      // not starts with A/B/C
    
    

# Using _ underscore to represent single characters

We can specify result length using the underscore character to represent individual letters

LIKE 'ch__'   return  only CHAI

.

# IN

Use in place of 'OR' to select specific values

    select * from Customers where region in ('BC','SP','OR')

# BETWEEN

    /* BETWEEN  */
    select * from Products where UnitsInStock between 0 and 30 order by unitsinstock desc

# Using mixed quotes in long queries   "    '  and also using literals in searches

Task : find items with ' in string

    /* quoted identifier - find items with ' in string */
    SET QUOTED_IDENTIFIER OFF
    SELECT * FROM Products where ProductName Like "%'%"

# AS : changing the output name

    /* as */
    select CustomerID as ID, Address + ', ' + City + ', ' + 
               Country as location from customers
    
    Can omit 'as' 

# SELECT * .....IS NULL ...... IS NOT NULL......

# Aggregate Operators : Sum/Max/Min/Avg

    # aggregate SUM, AVG, MIN, MAX, COUNT
    
    /* # aggregate SUM, AVG, MIN, MAX, COUNT */
    select avg(quantity) from [order details]
    /* select  <<VERB>>(column) from table */
    select count(orderID) as count,
    sum(unitprice*quantity) as total,
    avg (unitprice) as average,
    min(unitprice) as min,
    max(unitprice) as max
    from [order details]

# Group By

    
    # Group By
    
    columns but summarising by a particular field
    
    ```sql
    select * from products
    /* can we list products by supplierID? */
    select * from products order by SupplierID
    /* statistics (sum, avg) per supplier?  */
    select supplierid from products order by SupplierID
    /* total units in stock per supplier? */
    select supplierid, 
    sum(unitsinstock) as Stock,
    sum(unitsonorder) as OnOrder,
    max(unitsonorder) as MaxOrder
    from products 
    group by supplierid order by stock desc
    
    select 
    avg(reorderlevel) as AvgReorder, 
    categoryID 
    from Products 
    group by CategoryID 
    order by AvgReorder desc
    
    ```

# Having

    where ....  BEFORE GROUP BY
    
    Group By ... Having

Order By

When we group by a certain column, calculating a statistical sum/avg/min/max etc

    select 
    avg(reorderlevel) as AvgReorder, 
    categoryID 
    from Products 
    where .... 
    group by CategoryID 
    having avg(reorderlevel) > 10
    order by AvgReorder desc

    select * from products
    /* can we list products by supplierID? */
    select * from products order by SupplierID
    /* statistics (sum, avg) per supplier?  */
    select supplierid from products order by SupplierID
    /* total units in stock per supplier? */
    select supplierid, 
    sum(unitsinstock) as Stock,
    sum(unitsonorder) as OnOrder,
    max(unitsonorder) as MaxOrder
    from products 
    group by supplierid order by stock desc
    
    select 
    avg(reorderlevel) as AvgReorder, 
    categoryID 
    from Products 
    group by CategoryID 
    having avg(reorderlevel) > 10
    order by AvgReorder desc

# Order Of SQL Query Syntax

    
    # Test Revision : Order of SQL query items
    
    Select..
    Distinct..
    From ..
    Where..
    	Group By ..   Having ..(cumulative field)
    Order By ... (single-indexed field)

# Joining 2 Tables

Inner Join is the INTERSECTION OF TWO DATA SETS where AT LEAST ONE MATCH IN BOTH TABLES

Left Join (Left Outer Join) FULL LEFT DATA SET plus items from RIGHT where requested

Right Join (Right Outer Join) FULL RIGHT DATA SET plus items from LEFT where requested

Full Join (Full Outer Join) ALL RECORDS FROM BOTH SETS. IF RIGHT ITEM DOES NOT EXIST, RETURNS NULL FOR THAT LEFT DATA SET.

    # Inner Join
    
    /* products grouped by supplier id */
    select p.SupplierID, companyname, AVG(Unitsonorder) as 'AverageOrder'
    From Products p
    Inner Join Suppliers s on p.SupplierID = s.SupplierID
    Group by p.SupplierID, companyname
    having AVG(unitsonorder) > 0
    order by AVG(unitsonorder) desc	
    
    
    
    # Other Joins
    
    /* all products with every supplier for every product  LEFT JOIN */
    select * from products 
    left join suppliers on products.SupplierID =  Suppliers.SupplierID
    order by productid
    
    select * from products 
    right join suppliers on products.SupplierID =  Suppliers.SupplierID
    order by productid

# Join 3 Tables

    # join 3 tables
    products * + (supplier) companyname + (category) categoryname (ie category of supplier)
    inner join
    
    
    ```sql
    select * from categories 
    select productid, productname, companyname as 'suppliername', 
                                    categories.categoryid as id, categoryname
    from products
    inner join suppliers on products.SupplierID=suppliers.supplierid
    inner join categories on products.CategoryID = categories.CategoryID
    ```

# SQL Project

# SQL Exam

[SQL Exam - 2 Hours](https://www.proprofs.com/quiz-school/story.php?title=sql-exam-2-hours)

    /* comment */
    
    /* Exercise 1 */
    
    /* 1.1 */
    
    
    /* 1.2 */
    
    /* 1.3 */
    
    
    /* 1.4 */
    
    
    -- 1.5

# Raw SQL with C#

using System;
using System.Data.SqlClient;
using System.Collections.Generic;
using [System.IO](http://system.io/);
using System.Data;

namespace lab_68_SQL_CRUD_App_with_Raw_CSharp
{
class Program
{
static void Main(string[] args)
{
List<Customer> customers = new List<Customer>();

    Console.WriteLine(Environment.GetEnvironmentVariable("windir"));
             Console.WriteLine(Environment.GetEnvironmentVariable("PhilsSecretPassword"));
            var secret = Environment.GetEnvironmentVariable("PhilsSecretPassword");
    
            var connectionString = $"Data Source=localhost, 1433;User ID=SA;Password={secret};Connect Timeout=30;Initial Catalog=Northwind;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
            Console.WriteLine(connectionString);
    
            using (var connection = 
                new SqlConnection(connectionString)) {
                connection.Open();
                Console.WriteLine(connection.State);
    
    
    
    
                // Stored Procedure
    
                using (var sqlUpdateSP = new SqlCommand("UpdateCustomer", connection))
                {
                    sqlUpdateSP.CommandType = CommandType.StoredProcedure;
                    // add values
                    sqlUpdateSP.Parameters.AddWithValue("CustomerID", "ABC05");
                    sqlUpdateSP.Parameters.AddWithValue("City", "Florence");
                    // run command
                    int affected = sqlUpdateSP.ExecuteNonQuery();
                }
    
    
    
    
    
                using (var command = new SqlCommand("select * from Customers", connection))
                {
                    var sqlreader = command.ExecuteReader();
    
                    // this will read records one by one.
                    // we can now create an everlasting loop to loop while the next record exists
                    while (sqlreader.Read())
                    {
                        string CustomerID = sqlreader["CustomerID"].ToString();
                        string ContactName = sqlreader["ContactName"].ToString();
                        string CompanyName = sqlreader["CompanyName"].ToString();
                        string City = sqlreader["City"].ToString();
                        var customer = new Customer(CustomerID, ContactName, CompanyName, City);
                        customers.Add(customer);
                    }
                    sqlreader.Close();
                }
    
                customers.ForEach(c => 
                    Console.WriteLine($"{c.CustomerID,-10}{c.ContactName,-30}{c.CompanyName,-30}{c.City}"));
    
                // csv
    
                File.WriteAllText("output.csv","CustomerID,ContactName,CompanyName,City\\n");
    
                customers.ForEach(c =>
                 File.AppendAllText("output.csv",$"{c.CustomerID,-10},{c.ContactName,-30},{c.CompanyName,-30},{c.City}\\n"));
    
                // process.start()..
                Console.WriteLine("\\n\\nCSV file output \\n\\n");
                Console.WriteLine(File.ReadAllText("output.csv"));
    
                // add new customer (fixed data), then update one field (fixed update), delete same customer
    
                // add new customer
    
                var CustomerToAdd = new Customer("ABC06", "Phil", "PhilCo", "Berlin");
    
                // literal way
                string sqlInsert2 = "INSERT INTO CUSTOMERS (CustomerID,ContactName,CompanyName,City) " +
                                        "VALUES ('ABC04', 'Phil', 'PhilCo', 'Berlin')";
    
                // using variables (better)
                string sqlInsert = $"INSERT INTO CUSTOMERS (CustomerID,ContactName,CompanyName,City) VALUES ('{CustomerToAdd.CustomerID}', '{CustomerToAdd.ContactName}','{CustomerToAdd.CompanyName}', '{CustomerToAdd.City}')";
    
                using (var command = new SqlCommand(sqlInsert, connection))
                {
                //    int affected = command.ExecuteNonQuery();
               //     Console.WriteLine($"{affected} records added to the database");
                }
    
    
                // SQL UPDATE : SAME  EXCEPT UPDATE CUSTOMERS SET CITY='berlin' WHERE CUSTOMERID='abcde'
    
                string sqlUpdate = $"UPDATE CUSTOMERS SET city='rome' 
    WHERE CustomerID='ABC06'";
                using (var command = new SqlCommand(sqlUpdate, connection))
                {
                    int affected = command.ExecuteNonQuery();
                    Console.WriteLine($"{affected} records have been updated");
                }
    
    
    
    
    
    
                
                
    
    
    
    
    
                // SQL DELETE : SAME EXCEPT DELETE FROM CUSTOMERS WHERE ...
    
                string sqlDelete = $"DELETE FROM CUSTOMERS WHERE 
                CustomerID='ABC06'";
    
                using (var command=new SqlCommand(sqlDelete, connection))
                {
             //       int affected = command.ExecuteNonQuery();
            //        Console.WriteLine($"{affected} records deleted");
                }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                // create a method string RandomCustomerIDGenerator(){} which returns a 5 digit string of 5 
                // random alpha-numeric characters.  I think the first character has to be alpha not numeric
    
                // create a new customer 
    
                // bonus for the adventurous - can we use <https://next.json-generator.com> to generate some fake data as well?
    
                // can we select an existing customer and update it, again with a random city from the internet!
    
                // can we delete the customer we have just generated?
    
                // agile - do everything fixed, then for homework do the advanced stuff!
    
    
    
    
    
            }
        }
    }
    
    
    
    class Customer
    {
        public string CustomerID { get; set; }
        public string ContactName { get; set; }
        public string CompanyName { get; set; }
        public string City { get; set; }
    
        public Customer(string customerID, string contactname, string companyname, string city)
        {
            this.CustomerID = customerID;
            this.ContactName = contactname;
            this.CompanyName = companyname;
            this.City = city;
        }
    }

}