# XML

XML

We have already seen the basics of XML with our XML serialization to/from XML.

Now let's retract slightly and get XML working from raw C# code to create structures from scratch

    using System;
    using System.Xml.Linq;
    using System.IO;
    using System.Linq;
    
    namespace lab_67_XML
    {
        class Program
        {
            static void Main(string[] args)
            {
                Console.WriteLine("\n\nFirst XML Example\n\n");
                var xml01 = new XElement("testData", 1);
                Console.WriteLine(xml01);
    
    
                Console.WriteLine("\n\nAdd A Sub-Element\n\n");
                var xml02 = new XElement("XMLRoot",
                        new XElement("XMLData",100)
                    );
                Console.WriteLine(xml02);
    
    
                Console.WriteLine("\nSave As File\n");
                var xml03 = new XElement("XMLRoot",
                        new XElement("XMLData", 100),
                        new XElement("XMLData", 200),
                        new XElement("XMLData", 300),
                        new XElement("XMLData", 400)
                    );
                Console.WriteLine(xml03);
    
                // write to XML document
                var doc03 = new XDocument(xml03);
                doc03.Save("doc03.xml");
    
                Console.WriteLine(File.ReadAllText("doc03.xml"));
    
                // Element is the <TAG>
                // Attribute is VALUE INSIDE TAG
                // <TAG item=500>
                Console.WriteLine("\n04 - Add Attributes\n");
                var xml04 = new XElement("XMLRoot",
                        new XElement("XMLData",new XAttribute("height",300), 100),
                        new XElement("XMLData", new XAttribute("height", 400), 200),
                        new XElement("XMLData", new XAttribute("height", 500), 300),
                        new XElement("XMLData", new XAttribute("height", 600), 400)
                    );
                Console.WriteLine(xml04);
    
                // Think of your data in Database table
                // XMLRoot is name of Table
                // XAttribute is the name of a field with the value
                // XMLData is indivdiual entry in database 
    
    
    
                // XML Revision
                // Create 'Products' root XML
                // Have 2 'Product' items
                // Populate with ProductID, ProductName, CategoryID, UnitPrice
                Console.WriteLine("\n\nProducts\n\n");
                var products = new XElement("Products",
                        new XElement("Product",
                            new XElement("ProductID",01),
                            new XElement("ProductName","cherries"),
                            new XElement("CategoryID",2),
                            new XElement("UnitPrice",10.35)
                        ),
                         new XElement("Product",
                            new XElement("ProductID", 02),
                            new XElement("ProductName", "strawberries"),
                            new XElement("CategoryID", 3),
                            new XElement("UnitPrice", 50.00)
                        )
                    );
                Console.WriteLine(products);
    
    
    
    
    
                Console.WriteLine("\n\nUsing descendants with elements\n\n");
    
                var productsXML = products.Descendants("Product").Select(node => new {
                    ProductID = node.Element("ProductID").Value,
                    ProductName = node.Element("ProductName").Value,
                    CategoryID = node.Element("CategoryID").Value,
                    UnitPrice = node.Element("UnitPrice").Value
    
                });
                
                foreach(var p in productsXML)
                {
                    Console.WriteLine($"{p.ProductID}{p.ProductName}");
                }
                
                
                
                /*
                 
                 
     <Products>
      <Product>
        <ProductID>1</ProductID>
        <ProductName>cherries</ProductName>
        <CategoryID>2</CategoryID>
        <UnitPrice>10.35</UnitPrice>
      </Product>
      <Product>
        <ProductID>2</ProductID>
        <ProductName>strawberries</ProductName>
        <CategoryID>3</CategoryID>
        <UnitPrice>50..0</UnitPrice>
      </Product>
    </Products>
                 
                 */
    
    
    
    
                Console.WriteLine("==============");
    
                var testXML = new XElement("XMLRoot",
            new XElement("XMLData", new XAttribute("height", 300), 100),
            new XElement("XMLData", new XAttribute("height", 400), 200),
            new XElement("XMLData", new XAttribute("height", 500), 300),
            new XElement("XMLData", new XAttribute("height", 600), 400)
        );
                testXML.Save("testXML.xml");
    
                // XML Descendants
                XDocument doc = XDocument.Load("testXML.xml");
    
    
    
                foreach ( var element in doc.Descendants("XMLRoot"))
                {
                    foreach (var subelement in element.Descendants("XMLData"))
                    {
                        Console.WriteLine($"XMLData : value is {subelement.Value}");
    
                        Console.WriteLine($"XMLData attribute height has value " +
                            $"{subelement.Attribute("height").Value}\n");
    
                    }
                }
    
    
            }
        }
    }

# XML reading from Northwind

We are now going to read XML data from Northwind.

We could use 'easy' Entity with .NET Framework but it's time to use the slightly harder Entity Framework Core to get the Northwind data

    using System;
    using System.Collections.Generic;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.SqlServer;
    using System.Linq;
    using System.Xml.Linq;
    using System.IO;
    using System.Xml.Serialization;
    
    namespace lab_69_XML_from_Northwind
    {
        class Program
        {
            static void Main(string[] args)
            {
                // product list
                List<Product> products = new List<Product>();           // from Northwind
                Products productsFromXML = new Products();              // from XML, deserialize
    
                using (var db = new Northwind())
                {
                    // select all products; fill our list
                    products = db.Products.ToList();
                }
    
                // find first product  (use Entity and .FirstOrDefault  or Take(1)
                var product = products.FirstOrDefault();
                // print to screen
                Console.WriteLine($"{product.ProductID}, {product.ProductName}, {product.CategoryID}, {product.UnitPrice}");
                
                // output to XML
                Console.WriteLine("\n\nSingle XML Product\n\n");
                var XMLProduct = new XElement("Product",
                    new XElement("ProductID",product.ProductID),
                    new XElement("ProductName", product.ProductName),
                    new XElement("CategoryID", product.CategoryID),
                    new XElement("UnitPrice", product.UnitPrice)
                    );
                Console.WriteLine(XMLProduct);
    
    
                Console.WriteLine("\n\nFirst 5 Products\n\n");
                // use LINQ syntax to get this job done
    
                var XMLProducts = new XElement("Products",
                    from p in products.Take(5)
                    select new XElement("Product",
                        new XElement("ProductID", p.ProductID),
                        new XElement("ProductName", p.ProductName),
                        new XElement("CategoryID", p.CategoryID),
                        new XElement("UnitPrice", p.UnitPrice)
                ));
    
                // save
                XMLProducts.Save("Products.xml");
                // print
                Console.WriteLine(XMLProducts);
    
    
                // Send our Products XML list across the world to our supplier 
    
    
    
                // At the other side of world, now deserialise file back into C# Products
    
                // streamread into memory first, then deserialize
    
    
    
                using (var reader = new StreamReader("Products.xml"))
                {
                    // now deserialize the stream
                    var serializer = new XmlSerializer(typeof(Products));
                    productsFromXML = (Products)serializer.Deserialize(reader);
                }
    
    
                productsFromXML.ProductList.ForEach(p => Console.WriteLine($"{p.ProductID}{p.ProductName}{p.UnitPrice}"));
    
    
    
    
    
    
    
    
    
            }
        }
    
    
    
    
    
    
    
        [XmlRoot("Products")]
        public class Products
        {
            [XmlElement("Product")]
            public List<Product> ProductList { get; set; }
        }
    
    
    
    
    
    
    
    
    
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
       //     public virtual Category Category { get; set; }
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
                //modelBuilder.Entity<Category>()
                //    .HasMany(c => c.Products)
                //    .WithOne(p => p.Category);
    
                modelBuilder.Entity<Product>()
                    .Property(c => c.ProductName)
                    .IsRequired()
                    .HasMaxLength(40);
    
                //modelBuilder.Entity<Product>()
                //    .HasOne(p => p.Category)
                //    .WithMany(c => c.Products);
    
            }
        }
    }