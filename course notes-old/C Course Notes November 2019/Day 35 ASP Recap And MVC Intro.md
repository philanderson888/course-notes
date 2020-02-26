# Day 35 - ASP Recap And MVC Intro

Agenda for today

MVC Framework EF6 - pull in database ***Might try NOT DATABASE FIRST ENTITY (Which we have used) BUT CODE FIRST ENTITY)***

repeat using EFCore - pull in database

Razor pages which is C# in the browser

11am talk

230pm standup???

Java group : final talk

# ASP Framework : Points to note from yesterday

Investigating a project in detail

App_Data folder : where our database can live. Either .mdb proper database (Microsoft Database File) although the default location is in your User Profile ie `C:\\Users\\Phil\\Northwind.mdb`

    |DataDirectory\\Northwind.mdb
    
    or of course we could use SQLite and give similar path

Content
Public content eg scripts sent publicly to client

    Rest of code is hidden (C# is hidden at server, turned into HTML)

Font
File obtained from web
.eot Extended Open Type
.ttf True Type Font
.woff Web Open Font Format

    ==> download a FONT FILE and LINK TO IT IN CSS ==> use fancy fonts
    
    		(for example see Google Fonts for links and instructions)
    
    		 <link href="<https://fonts.googleapis.com/css?family=Comfortaa&display=swap>" rel="stylesheet">
    
    		 h2{
    				font-family: 'Comfortaa', cursive;
    			}

Web.Config (and App.Config)

    When we build and run our application we 'compile' the code.
    
    This code is generated as MACHINE BYTE-CODE which operates at a LOW LEVEL and talks to the processor directly.
    
    	Config files are used in applications to provide a MECHANISM FOR CHANGING SETTINGS WITHOUT RE-COMPILING.  At RUNTIME we can alter various settings.
    
    		Things we might want to alter
    
    			1) Database path between DEVELOPMENT and PRODUCTION
    			2) Security strings (API keys) which are NOT HARD CODED IN CODE
    					Username/password/keys
    						Store in environment (computer)
    							WINDOWS : Environment Variables
    			3) Other live config settings

# MVC Websites

As stated yesterday
M Model (data)
V View (page)
C Controller (URL handling)

    domain.com/Controller/Action   /Id
    	          /Table     /Get,Post /Id
    	          /Customers /Get      /ALFKI
    
    
    	          /	        /              Index VIEW
    	          /Home     /About         About VIEW
    	          /Home     /Contact       Contact VIEW 
    
    
    Request page
    	Check <https://domain.com/Home/About>  part and in code, go to HomeController.cs file
    							===== -----                          ====
    
    			In HomeController.cs file look for the About() method ((Action))
    												   -----
    
    			In this method, can GET DATA if needed
    
    			Finally, send data to VIEW - but WHICH VIEW?  Views/Home folder
    																====	   About.cshtml page
    																		   -----

# MVC Core

We are going to build a database website using .NET Core

    Caution!  Use core version 2.1 and libraries version 2.1.1

Additional project items to consider

    wwwroot folder contains all publicly available files
    	CSS eg Bootstrap.css
    	JS  
    	Images
    
    Startup.cs
    
    	This is the equivalent of our Main() method ie Start website
    
    	Services
    
    		Background items eg a) Database b) 3rd party authentication 
    						eg Google authentication

# Controllers and Putting data on a page

    With razor syntax we can use C# in the browser
    
    @.....

    

# ViewBag and ViewData

ViewBag and ViewData contain a simple way to PASS DATA FROM THE C# code (controller) into the View

    <p>Some data received from the back end is @ViewBag.MyItem and also 
        @ViewData["AnotherItem"]</p>

    public IActionResult MyAction()
    {
        ViewBag.MyItem = "This is some data";
        ViewData["AnotherItem"] = "And some more data";
        return View();
    }

We can even pass in a LIST!

    class Controller{
    	 public List<string> MyList = new List<string>();
    
    	 public IActionResult MyAction()
        {
            MyList = new List<string>() {"one","two","three" }; 
            return View(MyList);
        }
    }

In Razor page we access data via @model and @Model

    // USING STATEMENT ie IMPORTING THIS MODEL
    @model Lab_27_MVC_Core.Controllers.HomeController
    
    // @Model - fetch data
    @foreach (var item in Model.MyList){
    	<li>item</li>
    }

## Talking to a database in .NET Core MVC website

We have already built one .NET CORE application which talked to our database. We can use exactly the same code here

OR

We can try using the .NET FRAMEWORK CODE IMPORTED this morning.