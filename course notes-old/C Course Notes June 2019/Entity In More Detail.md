# Entity In More Detail

# Entity

ACID
Database transactions need to be
A Atomic : ie single, entire, complete in their nature
C Consistent : ie start and end of transaction leaves database in coherent, consistent
state (ie all data in right relationship)
I Isolated : similar to atomic : transaction stands in its own right
Useful for HASHING which can provide an ID FOR THE TRANSACTION

D Durable - persist in database

    Phil
    
    MD5	
         d14ffd41334ec4b4b3f2c0d55c38be6f
         fdcffb2dda54dff940c0a541f1cee85c (name with space)
         dcd4936713c27cae72c65e90c1e60a66 (name with .)
    
    SHA1 		e888d2bd6f13f82caa51a37c03d034c76f661ba3
    
    SHA512 		055244bd6fc27c55e1ee33f71a0fd87e32bd9b1d
    						19bd7ed636a6588b375a1e966a45c3e14707d4ea
    						45ed35a13cd95fa7df420fa52cfbb190ee0497c9
    						dbcc33fb
    

CRUD Create Read Update Delete

Snapshot - permit rollback if failure part way through

ERD Entity Relationship Diagram : Data + Relationship

UML Unified Markup Language : Data + Classes + Fields + Properties + Methods

    draw.io ==> can be used to create high quality, sharable, free and can be saved
    			offline or to Google Docs or other cloud drive

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