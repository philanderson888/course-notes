# Entity

# Entity Database First

With traditional Entity 'Framework' (commonly called EF6 or Entity Framework 6) we can use the database and from it, generate our C# code classes eg Customers.  We see these inside the .edmx root container which will contain the visual relationships between our database tables, also the detail of each table.

# Entity CRUD app with Create, Update, List, Delete

Use standard (Framework) Entity. 

Use Database First Northwind

    
    
    
    
    

# Entity Code First

With Entity Core there are fewer libraries to work with.  Sometimes we have to do more work to build the same structure.

Entity 'Code First' works particularly well with .NET Core (much smaller and lighter).  

With Entity 'Code First' we build 1) Classes 2) Database name and path and connection string.  When we run the app the code will trigger and build our database for us.

# Entity Code-First Migrations

Another help within Code-First Entity is the ability to upgrade our database.

We can make changes IN CODE and push the changes TO THE DATABASE.

This works also when publishing to Azure.

Commands to run are

    Tools => Nuget => Package Manager Console
    
    enable-migrations              (just do this command once)
    
    For each database change we also type
    
    Add-Migration  feature-change-01
    Update-Database
    
    Add-Migration  feature-change-02
    Update-Database
    
    Add-Migration  feature-change-03
    Update-Database

Tip : for our MVC application the quickest way to implement the changes is to do the following

1) Delete controller which maps to old database structure

2) Create new controller from scratch from new database table.