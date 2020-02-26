# Day 38 - MVC Recap

# MVC coding

We have been introduced to MVC websites so let's now see if we can take this further.

What we haven't done yet is link MVC to Entity to display data using .NET Core.

Tasks 

1) MVC Core app

2) Add Entity Core

??? Copy existing classes or possibly get from Entity Framework

3) Use 'Scaffolding' to build automatically Controller/Views without much effort

... succeed ... build API using .NET core also

    Model  		data  				DbSet match    SQL Table to .NET Class 
    								public DbSet<Customer>   Customers {get;set;}
    									            C#       SQLTable
    View 		page
    				Razor @...
    Controller 	"Business Logic" here ie TAKE CLIENT REQUEST (URL), EXAMINE IT, DECIDE
    					WHAT TO DO, RUN THE 'ACTION' ie METHOD REQUIRED and finally 
    					return DATA to VIEW
    			URL   /controller/action/id
    			      /Customers /GetAll/???optional???

## Simple Page View

    @{
        ViewData["Title"] = "MyPage";
    }
    
    <h2>This is My Page!!!!</h2>
    
    <p>10 + 20 = @(10+20)</p>

## Page View With Data (From Model In Controller)

    @model List<String>
    @{
        ViewData["Title"] = "MyData";
    }
    
    <h2>This is My Data!!!!</h2>
    
    <ul>
        @foreach (var item in Model)
        {
            <li>@item</li>
        }
    </ul>