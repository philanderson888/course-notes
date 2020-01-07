# Day 38 - MVC Entity With Northwind

# MVC with Entity (using Northwind)

In order to use Entity with MVC Core we can do the following:-

1. Obtain the same classes which we already use in a .NET Console Core app.

        NorthwindDbContext
        Customers
        Products
        Categories etc

2. Note : Put them in Models folder and Namespace must reflect this ie MyProject.Models Namepsace
3. Be aware MVC model uses a SERVICE to deliver our DATABASE

    Startup.cs
    public void ConfigureServices(){
    services.AddDbContext<Northwind>(options=>options.useSqlServer("...path.."));
    }

        We are INJECTING THE CONTEXT AS A SERVICE

4. Add a constructor to NorthwindDbContext finally

## Final code

    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.EntityFrameworkCore;
    using Lab_32_MVC_Core_Entity_Northwind.Models;
    
    namespace Lab_32_MVC_Core_Entity_Northwind.Models
    {
        public class Northwind : DbContext
        {
            public DbSet<Category> Categories { get; set; }
    
            public DbSet<Product> Products { get; set; }
    
            public DbSet<Customer> Customers { get; set; }
    
            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseSqlServer(@"Data Source=(localdb)\\mssqllocaldb;" + "Initial Catalog=Northwind;" + "Integrated Security = true;" + "MultipleActiveResultSets=true;");
            }
    
            public Northwind(DbContextOptions<Northwind> options) : base(options) { }
            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                base.OnModelCreating(modelBuilder);
    
                modelBuilder.Entity<Category>()
                    .Property(c => c.CategoryName)
                    .IsRequired()
                    .HasMaxLength(15);
    
                // define a one-to-many relationship
                modelBuilder.Entity<Category>()
                    .HasMany(c => c.Products)
                    .WithOne(p => p.Category);
    
                modelBuilder.Entity<Product>()
                    .Property(c => c.ProductName)
                    .IsRequired()
                    .HasMaxLength(40);
    
                modelBuilder.Entity<Product>()
                    .HasOne(p => p.Category)
                    .WithMany(c => c.Products);
            }
        }
    }
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Lab_32_MVC_Core_Entity_Northwind.Models;
    
    namespace Lab_32_MVC_Core_Entity_Northwind.Models
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
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Lab_32_MVC_Core_Entity_Northwind.Models;
    
    namespace Lab_32_MVC_Core_Entity_Northwind.Models
    {
        public class Category
        {
            public int CategoryID { get; set; }
            public string CategoryName { get; set; }
            public string Description { get; set; }
            public virtual ICollection<Product> Products { get; set; }
    
            public Category()
            {
                this.Products = new List<Product>();
            }
        }
    }
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Lab_32_MVC_Core_Entity_Northwind.Models;
    
    namespace Lab_32_MVC_Core_Entity_Northwind.Models
    {
        public class Product
        {
            public int ProductID { get; set; }
            public string ProductName { get; set; }
            public int? CategoryID { get; set; }
            public virtual Category Category { get; set; }
            public string QuantityPerUnit { get; set; }
            public decimal? UnitPrice { get; set; } = 0;
            public short? UnitsInStock { get; set; } = 0;
            public short? UnitsOnOrder { get; set; } = 0;
            public short? ReorderLevel { get; set; } = 0;
            public bool Discontinued { get; set; } = false;
        }
    }
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
    using Lab_32_MVC_Core_Entity_Northwind.Models;
    using Microsoft.EntityFrameworkCore;
    
    namespace Lab_32_MVC_Core_Entity_Northwind
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
                services.AddDbContext<Northwind>(options =>
                options.UseSqlServer(@"Data Source=(localdb)\\mssqllocaldb;" + "Initial Catalog=Northwind;" + "Integrated Security = true;" + "MultipleActiveResultSets=true;"));
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
                    app.UseExceptionHandler("/Home/Error");
                    app.UseHsts();
                }
    
                app.UseHttpsRedirection();
                app.UseStaticFiles();
                app.UseCookiePolicy();
    
                app.UseMvc(routes =>
                {
                    routes.MapRoute(
                        name: "default",
                        template: "{controller=Home}/{action=Index}/{id?}");
                });
            }
        }
    }