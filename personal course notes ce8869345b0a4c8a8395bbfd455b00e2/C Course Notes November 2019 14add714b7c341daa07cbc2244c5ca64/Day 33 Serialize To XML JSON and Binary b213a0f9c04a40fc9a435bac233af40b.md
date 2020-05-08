# Day 33 - Serialize To XML, JSON and Binary

# Serialisation

When we serialise data for transmission across the internet we can serialise in 3 ways

1. Binary .bin
2. XML .xml
3. JSON .json

How to Serialize a Class and get data ready for sending across internet

using System.Component.DataAnnotation

[Serializable]
class MyClass{}
public string Name{get;set;}
public int Age{get;set;}

```
[NonSerialized]
private string NINO;
```

}

## 1. XML

```
<PackageReference Include="SoapFormatter" Version="1.0.11" />
<PackageReference Include="System.Runtime.Serialization.Formatters" Version="4.3.0" />

using System;
// SoapFormatter Nuget
using System.Runtime.Serialization.Formatters.Soap;
using System.IO;
using System.Collections.Generic;

namespace Lab_22_Serialization
{
    class Program
    {
        static void Main(string[] args)
        {
            var customer = new Customer(1,"Billy","NR2234B71");
            var customer2 = new Customer(2, "Mary", "CB345678G");
            var customers = new List<Customer>() { customer, customer2 };

            // serialise customer to XML format
            // create object for serialisation
            // SOAP = Simple Object Access Protocol = 
                    // XML Transmission mechanism
            var formatter = new SoapFormatter();

            // stream customer to File WRITE
            // About to STREAM DATA TO XML FILE : Each time CREATE NEW FILE
            using (var stream = new FileStream
                    ("data.xml", FileMode.Create, FileAccess.Write, 
                                FileShare.None))
            {
                // Serialise data to XML as a STREAM OF DATA AND 
                //   SEND TO THE FILE STREAM
                formatter.Serialize(stream, customers);
            }

            // Print out file
            Console.WriteLine(File.ReadAllText("data.xml"));

            // Reverse

            var customersFromXMLFile = new List<Customer>();
            // stream READ
            using (var reader = File.OpenRead("data.xml"))
            {
                // deserialize XML=> Customer
                customersFromXMLFile = formatter.Deserialize(reader) as List<Customer>;
            }

            //and print
            customersFromXMLFile.ForEach(c => Console.WriteLine($"{c.CustomerID,-5} , {c.CustomerName}"));
        }
    }

    [Serializable]
    class Customer
    {
        public int CustomerID { get; set; }
        public string CustomerName { get; set; }

       [NonSerialized]
        private string NINO;  // opt out

        public Customer(int ID, string Name, string Nino)
        {
            this.CustomerID = ID;
            this.CustomerName = Name;
            this.NINO = Nino;
        }
    }

}
```

## 2. JSON

```
<ItemGroup>
<PackageReference Include="Newtonsoft.Json" Version="12.0.3" />
</ItemGroup>

using System;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.IO;

namespace Lab_23_Serialize_JSON
{
    class Program
    {
        static void Main(string[] args)
        {
            var customer = new Customer(1, "Billy", "NR2234B71");
            var customer2 = new Customer(2, "Mary", "CB345678G");
            var customer3 = new Customer(3, "John", "DZ345678G");
            var customers = new List<Customer>() { customer, customer2,customer3 };

            // serialise
            var JSONCustomerList = JsonConvert.SerializeObject(customers);

            // peek at this object
            Console.WriteLine(JSONCustomerList);

            // Save to file (JSON)
            File.WriteAllText("data.json", JSONCustomerList);

            // read
            var JSONstring = File.ReadAllText("data.json");
            // deserialize
            var customersFromJSON =
                JsonConvert.DeserializeObject<List<Customer>>(JSONstring);

            // print
            customersFromJSON.ForEach(c => Console.WriteLine($"{c.CustomerID,-10 },{c.CustomerName,-10}"));
        }
    }

    [Serializable]
    class Customer
    {
        public int CustomerID { get; set; }
        public string CustomerName { get; set; }

        [NonSerialized]
        private string NINO;  // opt out

        public Customer(int ID, string Name, string Nino)
        {
            this.CustomerID = ID;
            this.CustomerName = Name;
            this.NINO = Nino;
        }
    }

}
```

## 3. Binary

```
<ItemGroup>
<ProjectReference Include="..\\Lab_22_Serialization\\Lab_22_Serialization.csproj" />
</ItemGroup>

using System;
using Lab_22_Serialization;
using System.Collections.Generic;
using System.Runtime.Serialization.Formatters.Binary;
using System.IO;

namespace Lab_24_Serialize_Binary
{
    class Program
    {
        static void Main(string[] args)
        {
            var customer = new Customer(1, "Billy", "NR2234B71");
            var customer2 = new Customer(2, "Mary", "CB345678G");
            var customers = new List<Customer>() { customer, customer2 };

            // formatter : allow us to serialise to Binary
            var formatter = new BinaryFormatter();

            // stream to FILE
            using (var stream = new FileStream("data.bin", FileMode.Create, 
                FileAccess.Write, FileShare.None))
            {
                // write to file
                formatter.Serialize(stream, customers);
            }

            // read back
            //var BinaryString = File.ReadAllText("data.bin");
            var customersBinary = new List<Customer>();
            using (var reader = File.OpenRead("data.bin"))
            {
                // deserialise
                customersBinary = formatter.Deserialize(reader) as List<Customer>;
            }

            customersBinary.ForEach(c => Console.WriteLine($"{c.CustomerID} {c.CustomerName}"));
            
        }
    }

}
```