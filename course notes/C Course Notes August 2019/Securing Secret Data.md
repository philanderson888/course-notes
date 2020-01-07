# Securing Secret Data

You may not want secret data to be posted to GitHub

    a) Passwords
    b) Usernames
    c) Connection Strings

# Local Secrets

You can store the local 'secrets' as Environment Variables

    var connectionString = Environment.GetEnvironmentVariable("AzureConnectionString01");

and these are set in Windows using 'Edit System Environment Variables'.

# Azure Secrets

When we push code to Azure though these databases are no longer valid if they are read from a local connection string.

The solution is to create them also in Azure.

Go to [portal.azure.com](http://portal.azure.com/), find the Resource Group with your application and click on your web application. Choose Settings=>Configuration and add a new Application Setting.

To refer to this in code use

    var connectionString = Environment.GetEnvironmentVariable("APPSETTING_AzureConnectionString");

# #if DEBUG ... #else   #endif

Finally to allow the application to know whether you are in a local dev environment or production we can use for example code like this

    #if DEBUG 
      var connectionString = Environment.GetEnvironmentVariable("AzureConnectionString01");
    #else
      var connectionString = Environment.GetEnvironmentVariable("APPSETTING_AzureConnectionString");
    #endif