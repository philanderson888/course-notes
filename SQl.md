
# SQL

[Link to course material : Intro to consultancy, Files, General, Slide Decks, SQL](https://teams.microsoft.com/_#/files/General?threadId=19:33e7287424504617972284fc271cfcbb@thread.skype&ctx=channel&context=Slide%2520Decks%252FSQL)

Also go to Teams, Introduction To Consultancy, General, Files


## Preparation of the environment

### HyperV : enable in BIOS and Windows

	Bios : F10 on HP computers and enable virtualisation (Restart under advanced startup, Troubleshoot : Advanced : UEFI Firmware Settings : reboot into F10)

	Control Panel, Features, Turn on HyperV

### Install Docker

Add your user account to `Docker Users` group

### Pull down Docker image from kcornwall/sqlnorthwind

```sh
// pull down SQL docker image
docker pull kcornwall/sqlnorthwind

# run  -d means to run as a background service  
docker run -d --name sql -p 1433:1433 kcornwall/sqlnorthwind 

# list
docker ps -a
```

### Install SQL Management Studio

Connect to the SQL server using

	Localhost, 1433

	SA  SqlAdmin    Passw0rd2018

### Select TOP

```sql
SELECT TOP (1000) [CategoryID], [CategoryName],[Description],[Picture]
FROM [Northwind].[dbo].[Categories]
```

## Slides : From Teams

### 1. Intro To Databases

### Laptop setup

SQL Server Express 2017

Northwind

SQL Management Studio

### SQL

DML Data Manipulation Language

	SELECT

	INSERT

	UPDATE

	DELETE

DDL Data Definition Language

	CREATE

	ALTER

	DROP

	TRUNCATE

DCL Data Control Language

	GRANT

	REVOKE

TCL Translation Control Language

	COMMIT

	ROLLBACK

	SAVEPOINT

### Creating Database

SMSS SQL Server Management Studio

CREATE DATABASE my_db;

command has CAPITALS

name has underscore

don't use spaces

dont' use apostrophes

```bash
use master
drop database test
create DATABASE test
use test
```

use square brackets if spaces present

```bash 
use [database with more than one word] 
```

### CREATE TABLE table_01

```sql
CREATE TABLE table_01
(
name VARCHAR(10),
type VARCHAR(6)
)
```

### SP_HELP

```bash
# show data from all tables
SP_HELP

# show table
SP_HELP table_01
```


### Data Types

VARCHAR  variable length character set

	string

	250 max

CHAR  fixed length

INT, TINYINT

DATE / TIME / DATETIME

DECIMAL

NUMERIC as DECIMAL

BINARY binary data eg images

FLOAT scientific large number

BIT   0, 1 or null



### drop

```bash
# drop database
DROP DATABASE db_01
# drop table
DROP TABLE table_01
```

Best practice : drop before a create

### alter

```bash
ALTER TABLE table_01
ALTER TABLE table_01 ALTER COLUMN test VARCHAR(10) NOT NULL;
# add
ADD release_date DATETIME;
# modify
MODIFY 
# rename
RENAME 
# drop
DROP
```

### NOT NULL

ensure a column cannot be blank

### INSERT INTO 

```bash
# columns can be in any order
INSERT INTO my_table (col1,col2,col3) VALUES ('1','2','3');
# columns must be in specific order
INSERT INTO my_table VALUES ('1','2','4');
```

'single quotes' required for CHAR, VARCHAR and DATE
numbers don't require any quotes

### NULL

null in sql is similar to undefined 

null=null is false!

default values can be used instead of null if this is what is wanted

```bash
CREATE TABLE my_table (
index INT NOT NULL
cost DEC(2,2) NOT NULL DEFAULT 0);
```

### IDENTITY

This will increment the table indexes

To reset to zero, drop the table

```CREATE TABLE my_table(
person_id INT NOT NULL IDENTITY PRIMARY KEY,
name VARCHAR(255) NOT NULL, 
is_happy BIT
);
```

### UPDATE

```bash
UPDATE my_table
SET id=1
WHERE id=2
```

Care - if you leave out the `WHERE` statement then you will update every record!


### DELETE FROM

```bash
DELETE FROM my_table 
WHERE id=1
```

Care - if you leave out the `WHERE` statement it will delete entire table


### DB Considerations

Security

Recovery

Integrity

Normal Form

## Normal form

### 1st normal form

atomic : as small as possible

no repeating fields 

### 2nd normal form

all non-key attributes fully dependent on primary key

### 3rd normal form

all non-key attributes only dependent on primary key

### Using SQL

tester

	creating data

	validating test data




## Other commands

### alter database

ALTER DATABASE [foo] SET OFFLINE WITH ROLLBACK IMMEDIATE;

ALTER DATABASE [foo] SET ONLINE;

### UNSIGNED

### UNIQUE

### FOREIGN KEY

### CHECK

### INDEX

### VIEW


## 2. Querying An SQL database

### SELECT

```bash
SELECT id,name FROM table02 WHERE id=4
# select all
SELECT * FROM ...
```



### GROUPBY


### HAVING


### ORDERBY


### LIKE %...%

We can see if text is present inside other text using LIKE

```bash
# name contains 'phil'
where name LIKE %phil%
```

### SET_QUOTED_IDENTIFIER_OFF 

change between ' and " as preferred character for SQL strings.  Only lasts this session


### ORDER MATTERS

SELECT

DISTINCT

FROM

WHERE

GROUP BY

HAVING

ORDER BY

### SELECT TOP 100

gets first 100 records

```bash
SELECT TOP 100 id,name from Customers where id="1"
```

### WHERE ... AND

```bash
SELECT ... WHERE x=1 AND y=2
```

### SELECT DISTINCT

Used to eliminate duplicates

```bash
SELECT DISTINCT Country from Customers
```

### WILDCARDS

% - 0 or more

_ - substitute for a single character

[charlist] eg  LIKE [ABC]% will return anything starting with ABC

^[charlist]  does not match eg LIKE[^ABC]% returns anything which does not start ABC

LIKE 'abc%'  starts with abc

LIKE '%a' ends with a

IN ('WA','BC') match either of 2 specific regions

BETWEEN 04500 AND 06300 can search between a range

### AS

AS is used to change the output column name

```bash
SELECT id AS _id, first_name + last_name as name, company as "company name" from Customers
```

".." double quotes are used for strings that we are changing the name to, if there are more than one word present

### is null

can filter by `is null` or `is not null`

### ORDER BY ... DESC



### Text manipulation

SUBSTRING

CHARINDEX

LEFT (RIGHT)

LTRIM (RTRIM)

LEN

REPLACE

UPPER (LOWER)


### Dates

```bash
select top 10 FirstName + ' ' + LastName as Name, FLOOR(DATEDIFF(dd,BirthDate,GetDate())/365.25) as age from Employees
```

### SELECT CASE WHEN x>10 THEN 'return_this' ELSE 'return_that' ENDAS 'output_field' from Customers

### aggregate SUM, AVG, MIN, MAX, COUNT

```bash
SELECT id, sum(price) as 'price', avg(price) as 'average_price' 
FROM Customers
```

### GROUPBY

```bash
SELECT id, sum(price) as 'price', avg(price) as 'average_price' 
FROM Customers
# groupby provides subtotals
GROUPBY SupplierId
```

### HAVING


```bash
SELECT id, sum(price) as 'price', avg(price) as 'average_price' 
FROM Customers
# groupby provides subtotals
GROUPBY SupplierId
# conditional operator when using GROUPBY
HAVING AVG (price) > 5
```

## 3. Joins and Subqueries

Joins combine rows from different tables

### INNER JOIN

Inner (simple) join is the intersection of two tables

```bash

```

Left (outer) join includes all records from left table, plus any matching records from right table

```bash
FULL OUTER JOIN 
```

Full (outer) join includes all records from both tables

Right (outer) join ...

Full (outer) join ...


### ALIAS

Alias can be used to create a column heading of our desired name

```bash
SELECT s.name, c.name
FROM student s 
INNER JOIN course c ON s.id=c.id
```

just write out names in brief to aid readability


## Regex

### GSub

Gsub can be used to do a Regex search / replace






### SQL examples

NULL 					column can be null

NOT NULL 				column cannot be null

NVARCHAR (MAX) 			will use the maxiumum possible length available in the database for this data type

IDENTITY 				Autoincrement is starting at 1 and incrementing by 1 each time

CONSTRAINT CLUSTERED 	Only one primary key index for this table, and all items are sorted by this key

```sql
CREATE TABLE [dbo].[Grades] (
    [GradeId]   INT            IDENTITY (1, 1) NOT NULL,
    [GradeName] NVARCHAR (MAX) NULL,
    [Section]   NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_dbo.Grades] PRIMARY KEY CLUSTERED ([GradeId] ASC)
);
```




<pre>
	

















</pre>





## SqlCmd

SqlCmd is a downloadable utility sqlcmd.exe which can be used to run batch commands against an SQL server

https://docs.microsoft.com/en-us/sql/tools/sqlcmd-utility?view=sql-server-2017






## SQL

We have already had a look at SQL and how to write SQL queries.

Let's now see how we would incorporate this into a C# application.

Note that we will be looking at databases in 3 distinct stages

1. SQL

2. Entity

3. SQLite

So let's begin with SQL

### String Parsing

We can parse through strings

https://www.periscopedata.com/blog/string-parsing-in-sql

### Count

```sql
select count(1)
from table01 
where url 
```

## Entity Framework

[http://www.entityframeworktutorial.net](http://www.entityframeworktutorial.net)







