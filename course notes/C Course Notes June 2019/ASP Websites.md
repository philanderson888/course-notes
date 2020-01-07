# ASP Websites

# Web Terms

ASP	Microsoft Website structure (old)
ASPX	New version of ASP (current)
ASP Core	cross-platform website
Razor	C# in HTML page
jQuery	Powerful library to rapidly develop Javascript apps. Fallen out of favour recently as newer technologies
pushed beyond jQuery
javascript	language which runs code IN BROWSER BY DEFAULT.
React	Build HTML pages using Javascript : push so user can view page. VIRTUAL HTML which can be modified very
quickly (VIRTUAL DOM)
DOM	HTML structure of page
Angular	Framework by Google for building data / websites
Vue	Recent addition : best of ANGULAR and REACT ==> rocketing in popularity
Asynchronous	background task
npm	Node Package Manager : arranges all of the LIBRARIES you are using in your NODEJS PROGRAM
(think of as NUGET FOR A JAVASCRIPT PROGRAM)
nodejs	Javascript running ON THE WEBSERVER.
Client : Browser (HTML + CSS + Javascript)
Server : runs Javascript Microsoft server : C#
Library	think NUGET : download and use other people's code
Module	Single block of code (testable as such) Export....(public properties exposed of this module)
Websockets	Layer on top of HTTP/HTML. Send data INSTANTLY OVER WEB with minimal overhead. NO 'HEADERS' SENT
ws:// wss://
http	Send data between two computers over the 'internet'
protocol ==> standard agreed so that 2 computers can send data in a fixed order
https	ENCRYPTED version of HTTP (hidden from prying eyes)
all of computers connected together into one 'mega-network' across world
computer---switch---router(gateway)----ISP(pay for a line)(router)--->general routers
across internet----->destination router--> destination network --> destination server
HTML	HTML : hypertext markup language
STRUCTURE OF PAGE : header, div, body, footer, navbar, tables
CSS	Cascading Style Sheets ==> visual aspect of page
API	get data from web in JSON {} format for processing
Application Programming Interface

# Structure of ASP website

Startup.js

    Add 'services' which can affect whole of website
    
    	services.AddMvc()

appsettings.json ==> CHANGE ON LIVE SITE WITH NO RECOMPILING

    OLDER WEBSITE
    
    	Web.Config (XML)  ==> CONNECTION STRING
    
    NEWER
    
    	appsettings.json  ==> CONNECTION STRING
    
    CONSOLE APP
    
    	App.Config        ==>   as above

wwwroot

    PUBLIC FILES SENT TO CLIENT
    
    	CSS styling
    	JQUERY
    	JS libraries

# Sample Website

    // Models : Database
    
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    
    namespace lab_83_asp_core_add_records.Models
    {
        public class Northwind : DbContext
        {
            public DbSet<Customer> Customers { get; set; }
    
    
            public Northwind() { }
    
            public Northwind(DbContextOptions options) : base(options) { }
    
            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                string path = System.IO.Path.Combine(System.Environment.CurrentDirectory, "Northwind.db");
                optionsBuilder.UseSqlServer(@"Data Source=(localdb)\mssqllocaldb;" + "Initial Catalog=Northwind;" + "Integrated Security=true;" + "MultipleActiveResultSets=true;");
            }
            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                base.OnModelCreating(modelBuilder);
    
    
            }
    
        }
    }
    
    
    // Model : Customer
    
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    
    namespace lab_83_asp_core_add_records.Models
    {
        public partial class Customer
        {
            public string CustomerID { get; set; }
            public string CompanyName { get; set; }
            public string ContactName { get; set; }
            public string ContactTitle { get; set; }
            public string Address { get; set; }
            public string City { get; set; }
            public string Region { get; set; }
            public string PostalCode { get; set; }
            public string Country { get; set; }
            public string Phone { get; set; }
            public string Fax { get; set; }
        }
    }
    
    
    
    
    
    
    
    
    
    
    // Startup.cs
    
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.HttpsPolicy;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using lab_83_asp_core_add_records.Models;
    using Microsoft.EntityFrameworkCore;
    
    namespace lab_83_asp_core_add_records
    {
        public class Startup
        {
            public Startup(IConfiguration configuration)
            {
                Configuration = configuration;
            }
    
            public IConfiguration Configuration { get; }
    
            // This method gets called by the runtime. Use this method to add services to the container.
            public void ConfigureServices(IServiceCollection services)
            {
                services.Configure<CookiePolicyOptions>(options =>
                {
                    // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                    options.CheckConsentNeeded = context => true;
                    options.MinimumSameSitePolicy = SameSiteMode.None;
                });
                services.AddDbContext<Northwind>(options => options.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=Northwind;Trusted_Connection=True;MultipleActiveResultSets=true"));
    
                services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
    
    
            }
    
            // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
            public void Configure(IApplicationBuilder app, IHostingEnvironment env)
            {
                if (env.IsDevelopment())
                {
                    app.UseDeveloperExceptionPage();
                }
                else
                {
                    app.UseExceptionHandler("/Error");
                    app.UseHsts();
                }
    
                app.UseHttpsRedirection();
                app.UseStaticFiles();
                app.UseCookiePolicy();
    
                app.UseMvc();
            }
        }
    }
    
    
    
    
    
    
    
    
    
    
    // Views : View all customers
    
    
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.RazorPages;
    using lab_83_asp_core_add_records.Models;
    using Microsoft.EntityFrameworkCore;
    
    namespace lab_83_asp_core_add_records.Pages
    {
        public class AllCustomersModel : PageModel
        {
            private Northwind db;
            public List<Customer> customers;
    
            // Bind Property is required for the POSTING of data from FORM
            [BindProperty]
            public Customer customer { get; set; }
    
            // Constructor to instantiate this db
            // Instantiate Northwind just once : use for Get() and Post()
            public AllCustomersModel(Northwind injectedContext)
            {
                db = injectedContext;
    
            }
    
            public void OnGet()
            {
                customers = db.Customers.ToList();
            }
    
            public IActionResult OnPost()
            { 
                if (ModelState.IsValid)
                {
                    db.Customers.Add(customer);
                    db.SaveChanges();
                    return RedirectToPage("/AllCustomers");
                }
                return Page();
            }
        }
    }
    
    
    
    
    @page
    @model lab_83_asp_core_add_records.Pages.AllCustomersModel
    @{
        ViewData["Title"] = "AllCustomers";
    }
    
    <h2>AllCustomers</h2>
    
    <h3>Add Customer</h3>
    
    
    <form method="POST">
        <div class="form-group">
            <label for="customerID">Customer ID</label>
            <input asp-for="customer.CustomerID" type="text" class="form-control" id="customerID" placeholder="ZYX2A">
        </div>
        <div class="form-group">
            <label for="customerName">Customer Name</label>
            <input asp-for="customer.ContactName" type="text" class="form-control" id="customerName" placeholder="Name">
        </div>
        <div class="form-group">
            <label for="companyName">Company Name</label>
            <input asp-for="customer.CompanyName" type="text" class="form-control" id="companyName" placeholder="Company">
        </div>
        <div class="form-group">
            <label for="City">City</label>
            <input asp-for="customer.City" type="text" class="form-control" id="City" placeholder="City">
        </div>
        <button type="submit" class="btn btn-primary ">Submit</button>
    </form>
    
    <table class="table table-bordered table-striped table-hover">
        <tr>
            <th>Company Name</th>
            <th>Contact Name</th>
        </tr>
        @foreach (var c in Model.customers)
        {
            <tr>
                <td>@c.CompanyName</td>
                <td>@c.ContactName</td>
                <td><a asp-page="./Edit" asp-route-id="@c.CustomerID">Edit</a></td>
            </tr>
        }
    </table>