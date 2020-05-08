# API CRUD Operations Code

```csharp
class BaseAPI
    {
        public static HttpClient client = new HttpClient();
 
        public static async Task<HttpResponseMessage> PostAsync(string path, string jsonItem)
        {
            var content = new StringContent(jsonItem);
 
            content.Headers.ContentType.MediaType = "application/json";
            content.Headers.ContentType.CharSet = "UTF-8";
 
            Console.WriteLine("POST started..");
            var response = await client.PostAsync(path, content);
            Console.WriteLine("POST ended..");
 
            return response;
        }
 
 
        public static async Task<T> GetAsync<T>(string path, string id)
        {
            string jsonItem = await BaseAPI.GetAsync(path, id);
 
            if (jsonItem.Length > 0)
            {
                Console.WriteLine(jsonItem);
                return (T)JsonConvert.DeserializeObject<T>(jsonItem);
            }
 
            return default;
        }
 
        public static async Task<string> GetAsync(string path, string id)
        {
            string stringResponse = "";
 
            Console.WriteLine("GET started..");
 
            HttpResponseMessage response = await client.GetAsync(path + id);
            if (response.IsSuccessStatusCode)
                stringResponse = await response.Content.ReadAsStringAsync();
 
            Console.WriteLine("GET ended..");
 
            return stringResponse;
        }
 
        public static async Task<HttpResponseMessage> PutAsync(string path, string jsonUpdate)
        {
            Console.WriteLine("PUT started..");
 
            var content = new StringContent(jsonUpdate);
            content.Headers.ContentType.MediaType = "application/json";
            HttpResponseMessage response = await client.PutAsync($"{path}", content);
            response.EnsureSuccessStatusCode();
 
            Console.WriteLine("PUT ended..");
 
            return response;
        }
 
        public static async Task<HttpResponseMessage> DeleteAsync(string path, string id)
        {
            Console.WriteLine("DELETE started..");
            HttpResponseMessage response = await client.DeleteAsync($"{path}{id}");
            Console.WriteLine("DELETE ended..");
 
            return response;
        }
    }

```

```jsx
class Program
    {
        static HttpClient client = new HttpClient();
        static string pathAPI = "https://localhost:44346/api/apicustomers/";
 
        static void Main(string[] args)
        {
            Console.WriteLine("enter anything to start POST..");
            Console.ReadLine();
            CreateCustomerAsync(pathAPI).Wait();
 
            Console.WriteLine("\nenter anything to start GET..");
            Console.ReadLine();
            GetCustomerAsync(pathAPI, "HELLO").Wait();
 
            Console.WriteLine("\nenter anything to start PUT..");
            Console.ReadLine();
            UpdateCustomerAsync(pathAPI).Wait();
 
            Console.WriteLine("\nenter anything to start DELETE..");
            Console.ReadLine();
            DeleteCustomerAsync(pathAPI, "HELLO").Wait();
 
            Console.WriteLine("\nend of Main()..");
            Console.ReadLine();
        }
 
        //Wrapper function
        static Task<HttpResponseMessage> UpdateCustomerAsync(string path)
        {
            Customer customer = new Customer()
            {
                CustomerID = "HELLO",
                CompanyName = "SPARTA GLOBAL2",
                ContactName = "SPARTAN 500",
                ContactTitle = "Software Engineer2",
                Address = "Obere Str. 57",
                City = "Paris",
                Region = null,
                PostalCode = "12209",
                Country = "France",
                Phone = "030-0074321",
                Fax = "030-0076545"
            };
 
            return UpdateCustomerAsync(path, "HELLO", customer);
        }
 
        //Wrapper function
        static Task<HttpResponseMessage> CreateCustomerAsync(string path)
        {
            Customer customer = new Customer()
            {
                CustomerID = "HELLO",
                CompanyName = "SPARTA GLOBAL",
                ContactName = "SPARTAN 300",
                ContactTitle = "Software Engineer",
                Address = "Obere Str. 57",
                City = "Paris",
                Region = null,
                PostalCode = "12209",
                Country = "France",
                Phone = "030-0074321",
                Fax = "030-0076545"
            };
 
            return CreateCustomerAsync(path, customer);
        }
 
        static async Task<Customer> GetCustomerAsync(string path, string id)
        {
            Customer customer = null;
 
            Console.WriteLine("GET started..");
 
            HttpResponseMessage response = await client.GetAsync(path + id);
            if (response.IsSuccessStatusCode)
            {
                var stringResponse = await response.Content.ReadAsStringAsync();
                customer = JsonConvert.DeserializeObject<Customer>(stringResponse);
                Console.WriteLine(stringResponse);
            }
 
            Console.WriteLine("GET ended..");
 
            return customer;
        }
 
        static async Task<HttpResponseMessage> CreateCustomerAsync(string path, Customer customer)
        {
            var values = JsonConvert.SerializeObject(customer);
            var content = new StringContent(values);
 
            content.Headers.ContentType.MediaType = "application/json";
            content.Headers.ContentType.CharSet = "UTF-8";
 
            Console.WriteLine("POST started..");
            var response = await client.PostAsync(path, content);
            Console.WriteLine("POST ended..");
 
            return response;
        }
 
        static async Task<HttpResponseMessage> DeleteCustomerAsync(string path, string id)
        {
            Console.WriteLine("DELETE started..");
            HttpResponseMessage response = await client.DeleteAsync($"{path}{id}");
            Console.WriteLine("DELETE ended..");
 
            return response;
        }
 
        static async Task<HttpResponseMessage> UpdateCustomerAsync(string path, string id, Customer customerUpdate)
        {
            Console.WriteLine("PUT started..");
 
            HttpResponseMessage response = null;
 
            Customer customerFound = await GetCustomerAsync(path, id);
 
            if (customerFound != null)
            {
                customerFound.CustomerID = customerUpdate.CustomerID;
                customerFound.CompanyName = customerUpdate.CompanyName;
                customerFound.ContactName = customerUpdate.ContactName;
                customerFound.ContactTitle = customerUpdate.ContactTitle;
                customerFound.Address = customerUpdate.Address;
                customerFound.City = customerUpdate.City;
                customerFound.Region = customerUpdate.Region;
                customerFound.PostalCode = customerUpdate.PostalCode;
                customerFound.Country = customerUpdate.Country;
                customerFound.Phone = customerUpdate.Phone;
                customerFound.Fax = customerUpdate.Fax;
                customerFound.Orders = customerUpdate.Orders;
                customerFound.CustomerDemographics = customerUpdate.CustomerDemographics;
 
                var values = JsonConvert.SerializeObject(customerFound);
                var content = new StringContent(values);
 
                content.Headers.ContentType.MediaType = "application/json";
                //content.Headers.ContentType.CharSet = "UTF-8";
 
                response = await client.PutAsync($"{path}{id}", content);
                response.EnsureSuccessStatusCode();
            }
 
            Console.WriteLine("PUT ended..");
 
            return response;
        }
    }
```

```csharp

```