# Docker

# Connect To Northwind On Docker

## Docker With SQL Image

Another alternative to running Northwind locally is to host it on an SQL server.

We will run the SQL server in a Docker container.

### Enable Virtualisation in the BIOS

If you have a Windows computer you will have to reboot and hit F10 to get into the HP BIOS settings.

Once in the HP BIOS settings, enable Virtualisation, save changes and exit.

### Turn on Hyper-V in Windows

Go to Control Panel, Programs, Windows Features and enable Hyper-V Windows feature

### Install Docker

Download and install Docker

Add your user account to the Docker Users group in Computer Management, Users console.

# Docker

In order to understand docker we have to step back slightly

First computers were FIXED INSTRUCTIONS BURNED INTO THE HARDWARE OF A MACHINE

Next iteration of computer FED INSTRUCTIONS INTO COMPUTER USING PAPER WITH HOLES IN IT
TO MIMIC THE BINARY 1/0 FORMAT - TICKER TAPE

Next iteration - early MAINFRAMES - learned how to program in software and be able to change
instructions in software

Next iteration - IBM PC-AT 1981 home computer

Fast forward to today's era

Next development is running a machine completely in software on another machine 'VM'

    vm1   vm2   vm3
    
    	=============hyper-v os=================
    
    	        bare metal

Today - HyperV permits HARDWARE VIRTUALISATION where VM1/VM2/VM3 can interact directly with
underlying hardware eg CPU/RAM/HDD/NIC HDD = hard disk drive NIC = network card

Problem with VM is their size!!!!

    Windows is easily 10GB+
    
    	If you just want to run ONE APP this is a HUGE COST!

Containers were created (On LINUX) to allow

    container1   container2   container3      
    
    	=== kernel (core files of os)	===	
    	=== host os   					===
    	=== bare metal					===
    
    	Containers share critical KEY OPERATING SYSTEM 'KERNEL' FILES / SUBSYSTEM, thus
    	saving a lot of memory/hard disk space
    
    
    			PARTY VENUE  ===>  TRADITIONAL VM IS LIKE EVERY PARTY HELD IN SEPARATE VENUE
    
    								CONTAINERS  ==> PARTY SHARING ALL VENUE RESOURCES

Kubernetes is software (by Google?) now open source to manage multiple containers

Practical

1. Pull pre-made DOCKER IMAGE from internet which has SQL SERVER + NORTHWIND installed
2. Connect to it - simulate using a REAL SQL SERVER without the hassle

    a) [https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-2017](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-2017)

    b) Azure Data Studio

    c) Visual Studio

### Pull down Docker image running SQL Server

    # pull down docker image
    docker pull kcornwall/sqlnorthwind

### Run the Docker image

    # create and start your docker image
    docker run -d --name sql -p 1433:1433 kcornwall/sqlnorthwind
    
    # check it's running
    docker ps
    # list all images, running or non-running
    docker ps -a

### Starting and stopping a Docker image

    # start image 
    docker start sql 
    # stop image
    docker stop sql

# Connect To Northwind On Docker Using SMSS

### Connect to SQL Server on Docker using SMSS SQL Server Management Studio

If you have SQL Server Management Studio installed you can connect to your docker SQL server using the following

File, Connect Object Explorer

    Server name 	localhost, 1433
    
    Authentication  SQL Server
    
    Login 			SA
    
    Passsword 		Passw0rd2018
    
    
    We are simulating a real environment where we would talk to an SQL server over the network.
    
    
    We will find that exactly the same method may be used to connect to this server (and
    		any SQL server) from SMSS, Azure Data Studio Visual Studio

# Connecting To SQL from raw C#

    We have used the power of ENTITY FRAMEWORK to take away a lot of the headache of talking
    	to an SQL server directly.
    
    But today we are going to 'backtrack' into the SQL realm and create a CRUD app with
     C# to SQL without Entity.
    
     Blubay ==> method of access

# Connection String

    Visual Studio

    using System;
    using System.Data.SqlClient;
    using System.Collections.Generic;
    using System.IO;
    
    namespace lab_68_SQL_CRUD_App_with_Raw_CSharp
    {
        class Program
        {
            static void Main(string[] args)
            {
                List<Customer> customers = new List<Customer>();
                using (var connection = 
                    new SqlConnection(@"Data Source=localhost, 1433;User ID=SA;Password=Passw0rd2018;Connect Timeout=30;Initial Catalog=Northwind;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False")) {
                    connection.Open();
                    Console.WriteLine(connection.State);
    
                    using (var command = new SqlCommand("select * from Customers", connection))
                    {
                        var sqlreader = command.ExecuteReader();
    
                        // this will read records one by one.
                        // we can now create an everlasting loop to loop while the next record exists
                        while (sqlreader.Read())
                        {
                            string CustomerID = sqlreader["CustomerID"].ToString();
                            string ContactName = sqlreader["ContactName"].ToString();
                            string CompanyName = sqlreader["CompanyName"].ToString();
                            string City = sqlreader["City"].ToString();
                            var customer = new Customer(CustomerID, ContactName, CompanyName, City);
                            customers.Add(customer);
                        }
                        sqlreader.Close();
                    }
    
                    customers.ForEach(c => 
                        Console.WriteLine($"{c.CustomerID,-10}{c.ContactName,-30}{c.CompanyName,-30}{c.City}"));
    
                    // csv
    
                    File.WriteAllText("output.csv","CustomerID,ContactName,CompanyName,City\\n");
    
                    customers.ForEach(c =>
                     File.AppendAllText("output.csv",$"{c.CustomerID,-10},{c.ContactName,-30},{c.CompanyName,-30},{c.City}\\n"));
    
                    // process.start()..
                    Console.WriteLine("\\n\\nCSV file output \\n\\n");
                    Console.WriteLine(File.ReadAllText("output.csv"));
    
                    // add new customer (fixed data), then update one field (fixed update), delete same customer
    
                    // add new customer
    
                    var CustomerToAdd = new Customer("ABC06", "Phil", "PhilCo", "Berlin");
    
                    // literal way
                    string sqlInsert2 = "INSERT INTO CUSTOMERS (CustomerID,ContactName,CompanyName,City) " +
                                            "VALUES ('ABC04', 'Phil', 'PhilCo', 'Berlin')";
    
                    // using variables (better)
                    string sqlInsert = $"INSERT INTO CUSTOMERS (CustomerID,ContactName,CompanyName,City) VALUES ('{CustomerToAdd.CustomerID}', '{CustomerToAdd.ContactName}','{CustomerToAdd.CompanyName}', '{CustomerToAdd.City}')";
    
                    using (var command = new SqlCommand(sqlInsert, connection))
                    {
                        int affected = command.ExecuteNonQuery();
                        Console.WriteLine($"{affected} records added to the database");
                    }
    
    
                    // SQL UPDATE : SAME  EXCEPT UPDATE CUSTOMERS SET CITY='berlin' WHERE CUSTOMERID='abcde'
    
                    string sqlUpdate = $"UPDATE CUSTOMERS SET city='rome' WHERE CustomerID='ABC06'";
                    using (var command = new SqlCommand(sqlUpdate, connection))
                    {
                        int affected = command.ExecuteNonQuery();
                        Console.WriteLine($"{affected} records have been updated");
                    }
    
                    // SQL DELETE : SAME EXCEPT DELETE FROM CUSTOMERS WHERE ...
    
                    string sqlDelete = $"DELETE FROM CUSTOMERS WHERE CustomerID='ABC06'";
    
                    using (var command=new SqlCommand(sqlDelete, connection))
                    {
                        int affected = command.ExecuteNonQuery();
                        Console.WriteLine($"{affected} records deleted");
                    }
    
    
    
    
    
    
                    // create a method string RandomCustomerIDGenerator(){} which returns a 5 digit string of 5 random alpha
                    // character.  I think the first character has to be alpha not numeric
    
                    // create a new customer 
    
                    // bonus for the adventurous - can we use <https://next.json-generator.com> to generate some fake data as well?
    
                    // can we select an existing customer and update it, again with a random city from the internet!
    
                    // can we delete the customer we have just generated?
    
                    // agile - do everything fixed, then for homework do the advanced stuff!
    
    
                }
            }
        }
    
    
    
        class Customer
        {
            public string CustomerID { get; set; }
            public string ContactName { get; set; }
            public string CompanyName { get; set; }
            public string City { get; set; }
    
            public Customer(string customerID, string contactname, string companyname, string city)
            {
                this.CustomerID = customerID;
                this.ContactName = contactname;
                this.CompanyName = companyname;
                this.City = city;
            }
        }
    }

# Stored Procedures

As we can see, updating the database is a lot of work.

If we were running a loop we would need to pass in parameters to get this done.

Stored procedures allow us to have effectively a database method into which we add values, then
call the method

    // Stored Procedure
    
    using (var sqlUpdateSP = new SqlCommand("UpdateCustomer", connection))
    {
        sqlUpdateSP.CommandType = CommandType.StoredProcedure;
        // add values
        sqlUpdateSP.Parameters.AddWithValue("CustomerID", "ABC05");
        sqlUpdateSP.Parameters.AddWithValue("City", "Florence");
        // run command
        int affected = sqlUpdateSP.ExecuteNonQuery();
    }