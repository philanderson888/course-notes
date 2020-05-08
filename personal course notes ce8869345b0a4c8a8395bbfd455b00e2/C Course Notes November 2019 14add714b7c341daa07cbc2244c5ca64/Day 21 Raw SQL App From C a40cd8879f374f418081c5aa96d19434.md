# Day 21 - Raw SQL App From C#

# SQL - Connecting C# to a database with raw SQL

Last week we did the 'Hello World' version of connecting C# to SQL database using NOT ENTITY AND NOT LINQ but RAW SQL INSTEAD.

Let's finish this app by building a CRUD APP which adds, edits, deletes and lists Customers.

## .NET Core

This is our first app using .NET Core

Add libraries

```
using System;
using System.Data.SqlClient;
using System.Collections.Generic;

namespace Lab_05_CRUD_App_Raw_SQL
{
    class Program
    {
        static List<Customer> customers = new List<Customer>();
        static Customer customerJustAdded;
        static void Main(string[] args)
        {
            // connection String
            var connectionString = @"Data Source=(localdb)\\mssqllocaldb;
                            Initial Catalog=Northwind";

            using (var sqlConnection = new SqlConnection(connectionString))
            {
                sqlConnection.Open();
                Console.WriteLine(sqlConnection.State);

                customerJustAdded = addCustomer(sqlConnection);

                listCustomers(sqlConnection);

                updateCustomer(sqlConnection,customerJustAdded);

                listCustomers(sqlConnection);

                deleteCustomer(sqlConnection, customerJustAdded);

                listCustomers(sqlConnection);

            }
        }

        #region addCustomer
        static Customer addCustomer(SqlConnection sqlConnection)
        {
            var randomCustomerID = generateRandomCustomerID();
            var newCustomer = new Customer()
            {
                CustomerID=randomCustomerID,
                CompanyName="Sparta",
                ContactName="Phil",
                City="London",
                Country="UK"
            };
            var sqlString = "INSERT INTO Customers (CustomerID,ContactName,CompanyName,City,Country) " +
                       "VALUES ('PHIL2','Phil','Sparta','London','UK')";

            using (var sqlCommand = new SqlCommand(sqlString, sqlConnection))
            {
                // ExecuteNonQuery ie NOT QUERYING (READING) BUT UPDATING DATA
                // return an INTEGER FOR NUMBER OF RECORDS SUCCESSFULLY UPDATED/INSERTED
                // expect 1 (add 1 customer)
               //int affected = sqlCommand.ExecuteNonQuery();
               //Console.WriteLine($"{affected} new records added to database");
            }

            // Let's generate our sql command in a more professional way using parameters rather than literal values
            var sqlString2 = "INSERT INTO Customers (CustomerID,ContactName,CompanyName,City,Country) " +
                "VALUES (@CustomerID,@ContactName,@CompanyName,@City,@Country)";

             //sqlString2 = $"INSERT INTO Customers (CustomerID,ContactName,CompanyName,City,Country) " +
             //       $"VALUES ('{newCustomer.CustomerID}','{newCustomer.ContactName}','{newCustomer.CompanyName}'" +
             //       $",'{newCustomer.City}','{newCustomer.Country}')";

            using (var sqlCommand2 = new SqlCommand(sqlString2, sqlConnection))
            {
                // add parameter and set value at same
                sqlCommand2.Parameters.AddWithValue("@CustomerID", newCustomer.CustomerID);
                sqlCommand2.Parameters.AddWithValue("@ContactName", newCustomer.ContactName);
                sqlCommand2.Parameters.AddWithValue("@CompanyName", newCustomer.CompanyName);
                sqlCommand2.Parameters.AddWithValue("@City", newCustomer.City);
                sqlCommand2.Parameters.AddWithValue("@Country", newCustomer.Country);
                // run the insert query
                int affected = sqlCommand2.ExecuteNonQuery();
                Console.WriteLine($"{affected} records added to database");
                if (affected == 1)
                {
                    return newCustomer;
                }
            }
            return null;
        }
        #endregion

        #region generateRandomCustomerID
        static string generateRandomCustomerID()
        {
            // A STRING IS AN ARRAY OF CHARACTERS
            char[] customerID = new char[5];
            var random = new Random();

            for(int i = 0; i < customerID.Length; i++)
            {
                customerID[i] = Convert.ToChar(random.Next(65, 90));
                //customerID[i] = (char)random.Next('A', 'Z');
            }
            string s = new string(customerID);
            Console.WriteLine($"Random CustomerID generated {s}");
            return s;
        }
        #endregion

        #region listCustomers
        static void listCustomers(SqlConnection sqlConnection)
        {
            // going to build new customer list to reset existing one to null
            customers.Clear();
            // get customers
            using (var sqlCommand = new SqlCommand("SELECT * FROM Customers", sqlConnection))
            {
                SqlDataReader sqlReader = sqlCommand.ExecuteReader();
                while (sqlReader.Read())
                {
                    var customer = new Customer()
                    {
                        CustomerID = sqlReader["CustomerID"].ToString(),
                        ContactName = sqlReader["ContactName"].ToString(),
                        CompanyName = sqlReader["CompanyName"].ToString(),
                        City = sqlReader["City"].ToString(),
                        Country = sqlReader["Country"].ToString()
                    };
                    // put into list 
                    customers.Add(customer);
                }
                sqlReader.Close();
            }

            // print list a) foreach
            //foreach(var c in customers)
            //{
            //    Console.WriteLine($"{c.CustomerID}{c.ContactName}{c.CompanyName}" +
            //        $"{c.City}{c.Country}");
            //}

            // b) Lambda foreach
            Console.WriteLine($"{"CustomerID",-15}{ "CompanyName",-30}{ "ContactName",-40}{ "City",-15}{ "Country",-15}");
            customers.ForEach(c =>
                Console.WriteLine($"{c.CustomerID,-15}{c.ContactName,-30}{c.CompanyName,-40}" +
                    $"{c.City,-15}{c.Country,-15}"));

        }
        #endregion

        #region updateCustomer
        static void updateCustomer(SqlConnection sqlConnection,Customer c)
        {
            c.ContactName = "New Name";
            var updateSqlString = $"UPDATE CUSTOMERS SET ContactName='{c.ContactName}' " +
                $"WHERE CustomerId='{c.CustomerID}'";
            using (var sqlCommand = new SqlCommand(updateSqlString, sqlConnection))
            {
                int affected = sqlCommand.ExecuteNonQuery();
                Console.WriteLine($"{affected} records updated");
            }
        }
        #endregion

        #region deleteCustomer
        static void deleteCustomer(SqlConnection sqlConnection,Customer c)
        {
            var sqlString = $"DELETE FROM Customers where CustomerId = '{c.CustomerID}'";
            using (var sqlCommand = new SqlCommand(sqlString, sqlConnection))
            {
                int affected = sqlCommand.ExecuteNonQuery();
                Console.WriteLine($"{affected} records deleted");
            }
        }
        #endregion

    }

    class Customer
    {
        public string CustomerID { get; set; }
        public string ContactName { get; set; }
        public string CompanyName { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
    }
}
```