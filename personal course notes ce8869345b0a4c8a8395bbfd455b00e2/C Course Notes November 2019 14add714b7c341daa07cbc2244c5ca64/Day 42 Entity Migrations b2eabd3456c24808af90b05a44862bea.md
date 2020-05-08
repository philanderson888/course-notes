# Day 42 - Entity Migrations

# Entity Migrations

Once we have our database stable and working we may wish to update it.

In order we do the following

1. Add/Remove a field

    eg Users class add

    ```
    string
     int?       integer which is NULLABLE ie SQL will allow for NULL VALUES
     bool?
    ```

2. Go to Tools => Nuget => Package Manager Console

Ensure the DEFAULT PROJECT drop-down is mapped to current project

.Net core : 2 commands
add-migration initial01
update-database

.Net Framework : Run these 3 commands

```
EntityFramework\\Enable-Migrations

EntityFramework\\Add-Migration InitialCreate01            ((–IgnoreChanges)) 

EntityFramework\\Update-Database
```