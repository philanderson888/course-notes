# Using A Library

Code in Windows can be stored in a .dll library file

To access this code we should

1) Project ⇒ References ⇒ Add ⇒ Find .dll in question

 2) Add 'using' to import library

In industry a good example would be a database made available through a library once, in multiple projects.

libary Northwind

  import  (public) Customers

Use Customers in multiple projects