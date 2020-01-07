# LINQ databases

Microsoft created LINQ for easy access to databases of different types

Two types of LINQ

1) Query Comprehension

2) Lambda Extension Methods

# LINQ Simple Queries : Comprehension Syntax

    using (var db = new NorthwindEntities())
    {
    
        Console.WriteLine("\n\\nAll Customers\n\n");
        var output1 =
            (from customer in db.Customers
                select customer).ToList();
        PrintCustomers(output1);
    
        Console.WriteLine("\n\nLondon Customers\n\n");
        var output2 =
        from c in db.Customers
        where c.City == "London"
        select c;
        PrintCustomers(output2.ToList());
    
        Console.WriteLine("\n\nLondon Customers Descending\n\n");
        var output3 =
        from c in db.Customers
        where c.City == "London"
        orderby c.ContactName descending
        select c;
        PrintCustomers(output3.ToList());
    
        Console.WriteLine("\n\nCreating A New Output Object\n\n");
        var output4 =
                from c in db.Customers
                orderby c.Country 
                select new
                {
                    Name = c.ContactName,
                    Address = c.City + " " + c.Country
                };
        foreach(var c in output4)
        {
            Console.WriteLine($"{c.Name,-20}{c.Address}");
        }
    
    
        Console.WriteLine("\n\nGroup By - City\n\n");
        var output5 =
            from customer in db.Customers
            group customer by customer.City into Cities
            orderby Cities.Key
            select new
            {
                City = Cities.Key,
                Count = Cities.Count()
            };
        foreach (var c in output5.ToList())
        {
            Console.WriteLine($"{c.City,-20}{c.Count}");
        }

# JOIN 2 tables

    using (var db = new NorthwindEntities()) {
    
        Console.WriteLine("\n\nSelect Customers And Their Orders\n\n");
        var output6 = 
            from customer in db.Customers
            join order in db.Orders 
            on customer.CustomerID equals order.CustomerID
            select new
            {
                Name = customer.ContactName,
                OrderID = order.OrderID,
                OrderDate = order.OrderDate
            };
        output6.ToList().ForEach(c => Console.WriteLine($"{c.Name,-25}{c.OrderID,-15}" +
            $"{c.OrderDate}"));
    }

# Linking Tables with .dot syntax

    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    
    namespace lab_53_LINQ
    {
        class Program
        {
            static List<Customer> customers;
            static List<Product> products;
            static List<Order> orders;
            static List<Order_Detail> order_details;
            static List<Category> categories;
    
            static void Main(string[] args)
            {
    
                using (var db = new NorthwindEntities())
                {
    
    
    
                    // snap lab
                    // 1) how many customers?
                    customers = db.Customers.ToList();  //91
                    // 2) how many products ?
                    products = db.Products.ToList();  //77
                    // 3) how many orders ?
                    orders = db.Orders.ToList();  // 830
                    // 4) can we print the average order value?  (order_details)?
                    order_details = db.Order_Details.ToList();
    
                    Console.WriteLine($"There are {customers.Count} customers");
                    Console.WriteLine($"There are {products.Count} products");
                    Console.WriteLine($"There are {orders.Count} orders");
    
                    // 587.37
                    var averageOrderValue = db.Order_Details.ToList().Average(orderdetail =>
                                orderdetail.UnitPrice * orderdetail.Quantity * (decimal)(1 - orderdetail.Discount));
    
                    // 628.519
                    var averageOrderValue2 = db.Order_Details.ToList().Average(orderdetail =>
                               orderdetail.UnitPrice * orderdetail.Quantity);
    
                    Console.WriteLine($"with discount {averageOrderValue} and without discount {averageOrderValue2}");
    
    
    
    
                    // amazing way to join 2 tables using 'dot' notation
                    // look at products and categories
                    // goal : list categories in order and for each category 
                    //                     1) count products 2) list individual product names
                    Console.WriteLine("\n\n============Categories===========\n\n");
                    categories = db.Categories.ToList();
                    products = db.Products.ToList();
    
                    foreach ( var c in categories)
                    {
                        Console.WriteLine($"\n\t\t{c.CategoryID}) 
                          {c.CategoryName,-15} has {c.Products.Count} products\n");
    
                        Console.WriteLine("\t\t\t\t=======Products======");
    
                        foreach(var p in c.Products)
                        {
                            Console.WriteLine($"\t\t\t\t{p.ProductID} is {p.ProductName}");
                        }
    
                    }
    
    
                    // Repeat this code and print out 
                    // CustomerID  CustomerName   1) how many orders does this customer have???
                    //                            2) print out OrderID of each using this .dot notation????
                    Console.WriteLine("\n\n===============Customer Orders================\n\n");
    
                    foreach (var cust in customers)
                    {
                        Console.WriteLine($"\n{cust.CustomerID} : {cust.ContactName} has {cust.Orders.Count} orders");
                        Console.WriteLine("\t\t===Order Details===\n\t\t");
                        foreach (var o in cust.Orders)
                        {
                            Console.Write($" {o.OrderID} ");
                        }
                    }
                    
    
    
    
    
    
    
                }
            }
        }
    }

# LINQ Lambda Notation

Lambda notation uses an arrow   ⇒   function  to represent a method which we have been using in a foreach loop

    // snap lab
    // 1) how many customers?
    customers = db.Customers.ToList();  //91
    // 2) how many products ?
    products = db.Products.ToList();  //77
    // 3) how many orders ?
    orders = db.Orders.ToList();  // 830
    // 4) can we print the average order value?  (order_details)?
    order_details = db.Order_Details.ToList();
    
    Console.WriteLine($"There are {customers.Count} customers");
    Console.WriteLine($"There are {products.Count} products");
    Console.WriteLine($"There are {orders.Count} orders");
    
    // 587.37
    var averageOrderValue = db.Order_Details.ToList().Average(orderdetail =>
                orderdetail.UnitPrice * orderdetail.Quantity * (decimal)(1 - orderdetail.Discount));
    
    // 628.519
    var averageOrderValue2 = db.Order_Details.ToList().Average(orderdetail =>
                orderdetail.UnitPrice * orderdetail.Quantity);
    
    Console.WriteLine($"with discount {averageOrderValue} and without discount {averageOrderValue2}");
    
    
    
    
    // amazing way to join 2 tables using 'dot' notation
    // look at products and categories
    // goal : list categories in order and for each category 
    //                     1) count products 2) list individual product names
    Console.WriteLine("\n\n============Categories===========\n\n");
    categories = db.Categories.ToList();
    products = db.Products.ToList();
    
    foreach (var c in categories)
    {
        Console.WriteLine($"\n\t\t{c.CategoryID}) {c.CategoryName,-15} has {c.Products.Count} products\n");
    
        Console.WriteLine("\t\t\t\t=======Products======");
    
        foreach (var p in c.Products)
        {
            Console.WriteLine($"\t\t\t\t{p.ProductID} is {p.ProductName}");
        }
    
    }
    
    
    // Repeat this code and print out 
    // CustomerID  CustomerName   1) how many orders does this customer have???
    //                            2) print out OrderID of each using this .dot notation????
    Console.WriteLine("\n\n===============Customer Orders================\n\n");
    
    foreach (var cust in customers)
    {
        Console.WriteLine($"\n{cust.CustomerID} : {cust.ContactName} has {cust.Orders.Count} orders");
        Console.WriteLine("\t\t===Order Details===\n\t\t");
        foreach (var o in cust.Orders)
        {
            Console.Write($" {o.OrderID} ");
        }
    }

# ForEach

foreach (var item in databaselist){

// use item

}

databaselist.ForEach(  item ⇒  // use item 

    
    // LINQ LAMBDA 
    
    // FOREACH 
    
    foreach (var c in customers) { Console.WriteLine(c.ContactName); }
    
    customers.ForEach(c => Console.WriteLine(c.ContactName));
    
    
    
    // creating a sub-array from a larger list
    // For example : Create an array of Cities from our list of customers
    cities = db.Customers.Select(customer => customer.City)
            .Distinct().OrderBy(city => city).ToArray();
    
    
    // now print the list
    // 1) traditional
    foreach (var city in cities) { Console.WriteLine(city); }
    // 2) lambda
    Array.ForEach(cities, city => Console.WriteLine(city));
    
    
    Console.WriteLine("\n\n====Suppliers====\n\n");
    
    // Quiz : repeat this code getting a list of supplier names from the suppliers database!
    
    suppliers = db.Suppliers.Select(supplier => supplier.CompanyName).Distinct().OrderBy(s => s).ToArray();
    Console.WriteLine($"number of suppliers {suppliers.Count()}");
    var supplierCount = db.Suppliers.Select(s => s.CompanyName).Distinct().Count();
    Console.WriteLine($"number of suppliers {supplierCount}");
    Array.ForEach(suppliers, s => Console.WriteLine(s));

# Statistical expressions eg Sum, Min, Max, Average, Count

    // min, max, average, count in order_details table looking at (unitprice*quantity) 
    // forget discount for now
    
    var min = db.Order_Details.Select(o => o.UnitPrice * o.Quantity).Min();
    var max = db.Order_Details.Select(o => o.UnitPrice * o.Quantity).Max();
    var avg = db.Order_Details.Select(o => o.UnitPrice * o.Quantity).Average();
    var count = db.Order_Details.Select(o => o.UnitPrice * o.Quantity).Count();
    
    var max2 = db.Order_Details.Max(o => o.UnitPrice * o.Quantity);
    
    Console.WriteLine($"{min}\t{max}\t{avg}\t{count}\t{max2}");
    
    
    // chaining where
    
    // var x = db......  .where (  =>   )   .where (  =>   ) 
                    
    
    // count of order_details where discount not null and price > x

# Further Work In LINQ

# OrderBy..ThenBy

# Array.ForEach

# Skip()  .. Take()

# Contains .... use as a simple 'LIKE'

    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    
    namespace lab_53_LINQ
    {
        class Program
        {
            static List<Customer> customers;
            static List<Product> products;
            static List<Order> orders;
            static List<Order_Detail> order_details;
            static List<Category> categories;
            static string[] cities;                          // list of all cities
            static string[] suppliers;
            static void Main(string[] args)
            {
    
                using (var db = new NorthwindEntities())
                {
    
    
                    // Using Lambda to create a new collection meeting certain criteria, starting with
                    // an existing collection
    
                    // array1 ...   subset ==> array1
    
                    // can do foreach
                    // more easily using one-line lambda with 'where'
    
                    var array1 = new string[] { "one", "two", null, null, "five" };
    
                    // foreach ==> code it
    
                    // create new array from old using traditional foreach loop (old way)
    
                    // Array.ForEach(array1, a => Console.WriteLine(a));   // good but no collection yet
                    //foreach (var a in array1) { Console.WriteLine(a); }  // good but no collection yet
    
                    // ?????????????????????????
                    Console.WriteLine("kieron");
                    foreach(var a in array1.Where(a => a!=null))
                    {
                        Console.Write(a + " ");
                    }
    
                    // problem : array is fixed and when you begin you have no idea the size
                    // create list ==> toarray
                    var list1 = new List<string>();
    
                    foreach(var v in list1)
                    {
                        if(v != null)
                        {
                            list1.Add(v);
                        }
                    }
                    var array3 = list1.ToArray();
    
    
                    // new way 
                    var array2 = array1.Where(item => item != null);
                    Console.WriteLine("original " + string.Join(",", array1));  // print string array
                    Console.WriteLine("no nulls " + string.Join(",", array2));  // print string array
    
    
                    // get customers where region not null
    
                    var customers = db.Customers.ToList();
                    var customerNotNullRegion = customers.Where(c => c.Region != null);
    
                    Console.WriteLine(customerNotNullRegion.Count());
    
    
                    //Orderby...Then by                // country then city   then name
                    var customersByCity = db.Customers
                        .OrderBy(c => c.Country)
                        .ThenBy(c => c.City)
                        .ThenBy(c => c.ContactName);
                    customersByCity.ToList()
                        .ForEach(c => Console.WriteLine($"{c.Country,-15}{c.City,-20}{c.ContactName}"));
                    // employee title then surname
    
                    // Skip(10);
    
                    // Take(10);
                    Console.WriteLine("\n\nSubset of customers");
                    var subsetOfCustomers = db.Customers.OrderBy(c=>c.ContactName).Skip(10).Take(10).ToList();
                    subsetOfCustomers.ForEach(c => Console.WriteLine(c.CustomerID));
    
                    // can you build an app to print all customers but just 10 every second???
    
                    // Name from City   
    
    
                    // Homework : I want you guys to get EXPERT in SQL
                    // So let's get cracking on coding!!!
                    // First thing - can we REPLICATE the SQL exam using LINQ!!!!
                    // In the morning I want a REPORT from EVERYONE which 
                    //  LISTS THE REQUESTED OUTPUT FROM THE EXAM,
                    // in ONE LONG TEXT FILE as OUTPUT.TXT
                    // call the project SnapLab_04_SQL_Exam as Console Framework
                    // and add Entity
    
    
    
    
    
    
    
                }
            }
        }
    }

    // Using Lambda to create a new collection meeting certain criteria, starting with
    // an existing collection
    
    // array1 ...   subset ==> array1
    
    // can do foreach
    // more easily using one-line lambda with 'where'
    
    var array1 = new string[] { "one", "two", null, null, "five" };
    
    // foreach ==> code it
    
    // create new array from old using traditional foreach loop (old way)
    
    // Array.ForEach(array1, a => Console.WriteLine(a));   // good but no collection yet
    //foreach (var a in array1) { Console.WriteLine(a); }  // good but no collection yet
    
    // ?????????????????????????
    Console.WriteLine("kieron");
    foreach(var a in array1.Where(a => a!=null))
    {
        Console.Write(a + " ");
    }
    
    // problem : array is fixed and when you begin you have no idea the size
    // create list ==> toarray
    var list1 = new List<string>();
    
    foreach(var v in list1)
    {
        if(v != null)
        {
            list1.Add(v);
        }
    }
    var array3 = list1.ToArray();
    
    
    // new way 
    var array2 = array1.Where(item => item != null);
    Console.WriteLine("original " + string.Join(",", array1));  // print string array
    Console.WriteLine("no nulls " + string.Join(",", array2));  // print string array
    
    
    // get customers where region not null
    
    var customers = db.Customers.ToList();
    var customerNotNullRegion = customers.Where(c => c.Region != null);
    
    Console.WriteLine(customerNotNullRegion.Count());
    
    
    //Orderby...Then by                // country then city   then name
    var customersByCity = db.Customers
        .OrderBy(c => c.Country)
        .ThenBy(c => c.City)
        .ThenBy(c => c.ContactName);
    customersByCity.ToList()
        .ForEach(c => Console.WriteLine($"{c.Country,-15}{c.City,-20}{c.ContactName}"));
    // employee title then surname
    
    // Skip(10);
    
    // Take(10);
    Console.WriteLine("\n\nSubset of customers");
    var subsetOfCustomers = db.Customers.OrderBy(c=>c.ContactName).Skip(10).Take(10).ToList();
    subsetOfCustomers.ForEach(c => Console.WriteLine(c.CustomerID));
    
    // can you build an app to print all customers but just 10 every second???
    
    // Name from City