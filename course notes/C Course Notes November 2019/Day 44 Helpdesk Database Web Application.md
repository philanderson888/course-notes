# Day 44 - Helpdesk Database Web Application

### Database Task

Create SQL
HelpdeskDatabase

    Users
    	UserId      (Int)  IDENTITY PRIMARY KEY NOT NULL
    	UserName  	(VarChar(50))  NULL
    	CategoryId  (Foreign Key)  NULL
    
    Categories
    	CategoryId  INT
    	CategoryName VARCHAR (50)
    
    Insert sample data : 2 users, 3 categories admin/techsupport/user

    USE master
    Go
    
    DROP DATABASE IF EXISTS HelpdeskDatabase
    GO
    
    CREATE DATABASE HelpdeskDatabase
    GO
    
    USE HelpdeskDatabase 
    GO
    
    DROP TABLE IF EXISTS Users 
    DROP TABLE IF EXISTS Categories 
    GO
    
    
    CREATE TABLE Categories(
    	CategoryId INT NOT NULL IDENTITY PRIMARY KEY,
    	CategoryName VARCHAR(50) NULL
    )
    
    CREATE TABLE Users(
    	UserId INT NOT NULL IDENTITY PRIMARY KEY,
    	UserName VARCHAR(50) NULL,
    	CategoryId INT NULL, 
    	FOREIGN KEY (CategoryId) REFERENCES Categories (CategoryId)
    )
    
    INSERT INTO Categories VALUES ('Admin')
    INSERT INTO Categories VALUES ('TechSupport')
    INSERT INTO Categories VALUES ('User')
    INSERT INTO Users VALUES ('Bob',1)
    INSERT INTO Users VALUES ('Bill',3)
    INSERT INTO Users VALUES ('Ben',2)
    SELECT * FROM Categories
    SELECT * FROM Users

MVC 'Code First' (Try easier 'Entity Framework' first! for speed and just to get things going!)

    Get classes
    Build Context file to talk to database
    Inject Context 'as a service' to get things working

Add FluentAPI to clarify database relationships

    Build Controller & Views ==> see data and do CRUD to add/edit/remove/list users and categories

Run SQL code in Azure

    Get Azure Database Connection String
    
    	Swap LOCAL connection string OUT
    	Put  AZURE                   IN
    
    										==> FIND TALKING TO AZURE DATABASE!

Publish App To Azure

    Final step
    
    	Let's just try this 'as is' and see what happens.
    
    
    1. Work from 'working code to working code'
    
    2. First double-check your APP STILL ALL WORKING IN LOCAL REALM WITH AZURE DB
    
    3. Re-publish USING NEW OPTION AND NEW NAME 
    
    		LOCAL DB    NO TICK
    
    		SECOND DB   TICK AND PASTE IN CONNECTION STRING
    
    						Data Source = .....
    
    	Re-publish (new name)

** Homework ** Push today's notes and code to GitHub and send me link of COMMIT!