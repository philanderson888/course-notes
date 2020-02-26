# SQLite

SQL : requires a BIG server to run
SQLite : mini database which runs fine on a mobile phone or tablet with minimal memory consumption

Download and install SQLite

Using command line today

GUI tool (just for info) SQLiteStudio

## Summary of all commands

sqlite3	check if installed
sqlite3 my.db	create database
sqlite3 Northwind.db < InstallNorthwind.sql	create SQLite Northwind from script

.databases	show all
.open my.db	open for editing
.tables	show all in this database

### Output

.mode	list / column / tabs
.output output.txt to file

exit / quit .quit

### Data Types

    int
    varchar
    text
    real

### Create Tables

    create table Table01 (field1 smallint, field2 varchar(10));

### Insert Data

insert into Students values (1,'posh bob');

### AutoIncrement

create table Students (id integer primary key, name varchar(50));

insert into Students (name) values ('mega-posh anthony the third');

### Back up your database to a file

sqlite3 Northwind.db .dump > backupNorthwind.sql