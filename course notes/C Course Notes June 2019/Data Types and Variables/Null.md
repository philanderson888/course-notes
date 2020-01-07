# Null

Useful and better than empty string

    string x = null;
    
    string x = "";   can use either but be aware they are different.
    
    

Can test for null for example if reading SQL data from database and get back empty fields.

# Nullable type

When reading numbers from SQL database, the numbers cannot be NULL.  This can cause problems where a field is `null` but C# turns this field into `zero``

int x = 0;  

int?  y = 0;

int?   z = null;     can assign null to nullable type