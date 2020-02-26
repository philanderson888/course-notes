# API With Seeding Data

APIs

Goal today

    .NET Core
    
    	Build API from scratch with SQLite
    
    Console app ==> read data as JSON
    
    Website ==> read data as JSON and put on site

What is an API

    Application Programming Interface
    
    	Method for transfering web data across internet
    
    		PLAIN TEXT
    
    		JSON  { "FIELD":"VALUE" }
    
    		XML   <root><element field="value"></element></root>  
    
    Yesterday we looked at SERIALISING DATA TO XML AND BACK
    
    Today we are going to look at similar but instead of just saving a FILE AS JSON we are 
    going to EXPOSE ENDPOINTS IN HTTP where a client may OBTAIN DATA
    
    <form method="get/post">  // DEFINE IN HTML
    
    GET 	/customers/     all
    GET 	/customers/10   one with id
    
    										GET ==> DATA SENT IN URL VISIBLE TO ALL
    
    POST 
    		/customers/10   update 
    		/customers/10   delete
    
    DELETE
    PUT (update)   but depends on application : basic HTML they don't have PUT/DELETE

Let's start with a simple MODEL pulling in NORTHWIND and using SCAFFOLDING to build API

install-package microsoft.entityframeworkcore -v 2.1.1

    .sqlite  .sqlserver  .design
    
    
    public class Northwind : DbContext
        {
            public DbSet<Category> Categories { get; set; }
    
            public DbSet<Product> Products { get; set; }
    
            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseSqlServer(@"Data Source=(localdb)\mssqllocaldb;" + 
                        "Initial Catalog=Northwind;" + "Integrated Security = true;" + 
                             "MultipleActiveResultSets=true;");
            }
    
            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                base.OnModelCreating(modelBuilder);
    
        }

Northwind Lab

    GET 		/products/    YES
    GET 		/products/1   YES
    POST 		/products/    YES  ADDS NEW ONE IN
    POST/PUT    /products/1   UPDATE????

Consuming an API

    We are going to build a console app to 'consume' or use our API
    
    install-package newtonsoft.json
    
    
    Getting data from the internet
    
    	The model in use is to get data ASYNCHRONOUSLY ie wait for it.
    
    		Main Thread   ==> ASYNC CALL generates a SUB-THREAD
    
    												 ie a TASK
    
    			Tasks : 2 types
    				1) returns VOID
    				2) returns Task<T> and get data we use myTask.result
    
    			Also TASKS returning a <T> must be declared in an
    				ASYNC METHOD where we AWAIT the web call
    
    				async Task<T> MyMethod(){
    					await ....
    					return ...
    				}

MVC
Let's try and build a web client to use our API

    To 'cheat' a little we're going to use scaffolding.

# API from scratch : Tasks with Users and Categories

Goal
SQLITE
Build database from scratch
Entity Core with .NET Core v2.1 (Entity libraries v2.1.1)
Build API with scaffolding (ie get help)
Build Console app with CRUD to read/write data to API

Tables
TaskItem
Id
Description
Date
Done
FOREIGN KEY User
FOREIGN KEY Category
User
Category

Before Add Foreign Key Relationships, Classes Look Like

    public class TaskItem { 
        public int TaskItemId { get; set; }
        // data annotations
        [Required]
        public string Description { get; set; }
        public bool? TaskDone { get; set; }
    
        [Display(Name="Date Due")]
        [DataType(DataType.Date)]
        [DisplayFormat(ApplyFormatInEditMode = true,DataFormatString ="{0:dd/MM/yyyy}")]
        public DateTime? DateDue { get; set; }
    }
    
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
    }
    
    public class Category
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
    }

# Goals for the afternoon

1. Think AGILE; if something is not working then always get back to minimal code which is working, first.

    TASKS
    UserId
    //User User

        USERS
         	CATEGORIES

a) We have done MANUAL SEEDING which you can see is quite tricky.

    C# has got SEEDING PROPER - can you get it working?  If not, no bother.
    		(1 hour max on this then move on)
    	((NUGET  add-migration seed01 seed02 seed03))
    	         update-database

b) REGARDLES OF DATABASE RELATIONSHIPS (WORST CASE CAN REMOVE) OR SEEDING (WORST CASE JUST USE EXISTING SEEDING WHICH WE HAVE DONE)

    CONSOLE CORE ==> BUILD CRUD APP

# Seeding Manually (just for proof of concept)

    # In controller 'get' method
    
     var u = new User()
    {
        UserName = "SpartanExtroadinaire" // id = 1
    };
    _context.Add<User>(u);
    _context.SaveChanges();
    Thread.Sleep(1000);
    var t = new TaskItem() {
        Description = "An Item",
        DateDue = DateTime.Parse("21/09/2019"),
        TaskDone = false,
        UserId = u.UserId
    };
    _context.Add<TaskItem>(t);
    
    var c = new Category()
    {
        CategoryName = "Users"
    };
    
    _context.Add<Category>(c);
    
    _context.SaveChanges();
    System.Diagnostics.Trace.WriteLine($"Added a task with ID {t.TaskItemId}" +
        $" and user {u.UserId}");