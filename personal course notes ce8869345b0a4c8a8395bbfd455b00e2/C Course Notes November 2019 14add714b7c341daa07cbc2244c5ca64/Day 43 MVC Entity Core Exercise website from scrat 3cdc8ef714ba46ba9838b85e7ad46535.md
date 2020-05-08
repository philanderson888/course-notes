# Day 43 - MVC Entity Core 'Exercise' website from scratch with Migrations

# Entity Core

Let's repeat this exercise using Entity Core

1. SQL Database

    GymDatabase

    ```
    Users
     	UserId
     	UserName
     Exercises
     	ExerciseId
     	ExerciseName
     	CategoryId  		Foreign Key
     Category
     	CategoryId
     	CategoryName
    ```

2. Scaffold data

    Scaffold-DbContext command can be used to Scaffold data straight into Entity Core.

    But!

    Keep things simple ==> can also just use Entity Framework to achieve same goals

    Simple version first
    1) Entity Framework => get classes
    2) Entity Core ==> copy classes over
    remove System.Entity.Data
    rename Namespace

3. Amend classes and add connection string to Startup.cs
    - amend Namespace
    - amend using statements (remove System.Data.Entity)
    - add Nuget Microsoft.EntityFrameworkCore -v 2.1.1. (& .Design & .SqlServer)
    - change constructor
4. Build Controller & Views then run site
5. Let's try Migrations

    a) Simple : add some fields

    ```
    add-migration <name>
     update-database
    ```

    b) Add a class ie a new table!

    ```
    Class WorkoutLog{
          ...id/date/exerciseid
     }

     add-migration
     update-database
    ```