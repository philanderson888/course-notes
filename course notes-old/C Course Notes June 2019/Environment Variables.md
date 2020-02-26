# Environment Variables

# Environment Variables
    
    We can store sensitive data and passwords in our Environment Variables, so they are not
    exposed to the internet when we push our GitHub repos
    
    https://docs.microsoft.com/en-us/dotnet/api/system.environment.getenvironmentvariable?view=netframework-4.8
    
    
    Console.WriteLine(Environment.GetEnvironmentVariable("windir"))
    
    
    
    Console.WriteLine(Environment.GetEnvironmentVariable("windir"));
    
    Console.WriteLine(Environment.GetEnvironmentVariable("PhilsSecretPassword"));
    
    var secret = Environment.GetEnvironmentVariable("PhilsSecretPassword");
    
    var connectionString = $"Data Source=localhost, 1433;User ID=SA;Password={secret};
                   Connect Timeout=30;Initial Catalog=Northwind;Encrypt=False;
                  TrustServerCertificate=False;ApplicationIntent=ReadWrite;
                  MultiSubnetFailover=False";
    
    Console.WriteLine(connectionString);
    
        using (var connection = 
            new SqlConnection(connectionString)) {