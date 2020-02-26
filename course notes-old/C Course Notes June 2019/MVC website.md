# MVC website

Web Topics

In order to deal with the web realm we are going to have to deal with 3 major topics

1. API
2. Regular Website
a) HTML/CSS/Javascript/JQuery website (traditional, nothing to do with
Microsoft). Also Bootstrap which is CSS+.
b) ASP website (Active Server Pages)
.aspx (html in a 'wrapper')
.aspx.cs (cs 'code-behind')
3. MVC Website
Formal, business-ready website with 'separation of concerns'
MODEL	DB
VIEW	VISIBLE PAGE
CONTROLLER	URL LINK : INSTRUCTIONS SENT TO SERVER WHEN CLIENT
REQUESTS A PAGE -> CONTROLLER ACCEPT REQUEST,
GET DATA FROM MODEL AND PASS RESULT INTO THE VIEW
FOR DISPLAY

# MVC Website

    Goal : Take 2-3 hours 
    		Build business-ready website from scratch
    		Visual Studio 2019 NOT preview
    		Entity Core
    		.NET Core version 2.2

# Teaser Lesson : Show class how easy this is using MVC NON-CORE IE REGULAR 'OLD' FRAMEWORK.

    a) Easier regular ASP website
    
    	Regular web page
    
    		Home page Default.aspx
    						<%@  CodeBehind...to cs   AutoEventWireUp     %>
    						<asp runat="server">
    							<div>....HTML HERE </div>
    						</asp>
    			      Default.aspx.cs
    
    b) Harder MVC website  
    
    		+ Northwind
    
    
    		Controller --> TAKES REQUEST
    
    	MVC recap
    
    		Controller ==> First part of URL
    
    			/Products/
    
    		Action ==> Second part of URL
    
    			/Products/Index   ==>   Controller will build any data then send
    									data to View : Index.cshtml page
    			/Products/Create  ==>   View : Create.cshtml page

Summary (again) MVC WITH MODELS

    Models (folder)
    	myModel.cs   (CLASS)  ==> REPRESENTS DATA TO SHOW ON SCREEN  (eg Customer if dealing with Northwind)
    		myProperty {get;set;}   ==> DATA ITEM
    
    
    Controller     "StrawberryController"
    	ANALYSE URL AND MAKE RIGHT CHOICE OF ACTION    <http://mywebsite.com/Strawberry/>
    	Default action ==> Find a page in a folder with same name  "Strawberry" folder ==> Index.cshtml FILE
    
    	If we want to put DATA INTO VIEW ==> ALSO INSTANTIATE A MODEL AND PASS INSTANCE TO VIEW
    
    View
    	@model.PROJECTNAME.Models.myModel        LINE 1   
    
    	<p>@Model.instancename</p>

# MVC : TaskList website

    class : TaskItem {}
    class : Category {}
    relate them and display on screen
    Build database and pull them from database
    
    Context ==> TALK TO DATABASE
    
    Visual Studio has 
    	1) Built a DBCONTEXT FILE TO TALK TO DATABASE
    	2) appsettings.json ==> PATH TO DATABASE
    	3) Services ==> INJECTED DATABASE AS A 'SERVICE' TO MVC APP

To build database we can do
Nuget ==>
add-migration initial
update-database

    Database appears in user profile and can connect

Migrations !!!!

    Let's alter the database !!!!
    
    add-migration Add-Date
    update-database

Now let's add a new class, Category, and add this as a Category of tasks

# Relating Two Tables

    public class Category
    {
        public Category()
        {
            Tasks = new HashSet<Models.Task>();
        }
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
    
        public virtual ICollection<Models.Task> Tasks { get; set; }
    }
    
        public class Task
    {
        public int TaskID { get; set; }
        public string TaskName { get; set; }
    
        [Display(Name ="Due Date")]
        [DataType(DataType.Date)]
    
        public DateTime DueDate { get; set; }
    
        // foreign key CategoryID
        public int? CategoryID { get; set; }
        public virtual Category Category { get; set; }
    }

# Enforce database table relationship using FLUENT API

    Goal => Dropdown list show CATEGORY NAME (NOT ID)

    public class TaskDbContext : DbContext
        {
            public TaskDbContext (DbContextOptions<TaskDbContext> options)
                : base(options)
            {
            }
    
            public DbSet<Models.Task> Task { get; set; }
    
            public DbSet<Category> Category { get; set; }
    
            // FLUENT API RELATIONSHIPS GO RIGHT HERE
    
            protected override void OnModelCreating(ModelBuilder builder)
            {
                base.OnModelCreating(builder);
    
                // RELATIONSHIPS
                // CATEGORY NAME REQUIRED
                builder.Entity<Category>().Property(c => c.CategoryName)
                    .IsRequired().HasMaxLength(15);
    
                // EVERY TASK HAS ONE CATEGORY
                builder.Entity<Category>().HasMany(c => c.Tasks)
                    .WithOne(task => task.Category);
    
                // ONE CATEGORY CAN HAVE MANY TASKS
                builder.Entity<Task>().HasOne(task => task.Category)
                    .WithMany(category => category.Tasks);
            }
        }