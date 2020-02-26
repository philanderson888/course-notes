# SQLite

# SQLite

SQL Server is HUGE

Install is VERY COMPLEX

Also mobile phones can't talk so easily to a local SQL database. It's more for BIG INDUSTRY/FINANCE.

SQLite holds data locally on any small device. Compatible with Unity,iOS, Android etc.

# Commands

./sqlite3 check working OK

./sqlite3 TestDatabase // create

in >SQLite environment

.databases // list all
.open TestDatabase // bring into scope
.tables // list all

# Data Types

    int          integer
    varchar
    text
    real         decimal

# Table

create table testTable(id int, name varchar(10));
insert into testTable values (1,'bob');
select * from testTable;

# Auto Increment Id ((compare IDENTITY in SQL))

create table Students(
StudentId integer primary key,
Name varchar(50),
);

insert into Students (Name) values ('Mr Sparta');
select * from Students;

# Generate Northwind

.quit to exit environment

    ./sqlite3 Northwind.db < Northwind.sql   // have to get this file from internet