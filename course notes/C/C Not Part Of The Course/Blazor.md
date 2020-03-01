# Blazor

Web Assembly allows fast, compiled assemblies to be run inside a web browser.

Blazor is the C# implementation of Web Assembly.

## Blazor CRUD App

[https://ankitsharmablogs.com/asp-net-core-crud-using-blazor-and-entity-framework-core/](https://ankitsharmablogs.com/asp-net-core-crud-using-blazor-and-entity-framework-core/)

## Blazor CRUD App 2

[https://medium.freecodecamp.org/how-to-create-a-single-page-application-using-razor-pages-with-blazor-9d010fd6be45](https://medium.freecodecamp.org/how-to-create-a-single-page-application-using-razor-pages-with-blazor-9d010fd6be45)

## Blazor Entity Drop Down Box

[https://medium.freecodecamp.org/how-to-create-a-cascading-dropdownlist-in-blazor-using-ef-core-d230bb5bff5f](https://medium.freecodecamp.org/how-to-create-a-cascading-dropdownlist-in-blazor-using-ef-core-d230bb5bff5f)

# C# Blazor App With Authentication

The goal of this app will be

1. Just get a web app up and running using Blazor
2. Play around with authentication also
3. Build it all in .NET Core 3.0
4. Learn it in order to teach it
5. Learn about the latest exciting development in ASP Core which can definitely be the future for ASP web development.
6. Cross-train because Blazor will be also available in other languages
7. Practice building then deploying apps.

Author : Phil Anderson

Date : 23 Sep 2019

URL is

[https://scotch.io/tutorials/goodbye-javascript-build-an-authenticated-web-app-in-c-with-blazor-aspnet-core-30](https://scotch.io/tutorials/goodbye-javascript-build-an-authenticated-web-app-in-c-with-blazor-aspnet-core-30)

    mkdir Blazor-2019-09-25
    cd Blazor-2019-09-25
    dotnet new -i Microsoft.AspNetCore.Blazor.Templates::3.0.0-preview9.19424.4
    dotnet new blazorserver -o OktaBlazorAspNetCoreServerSide
    dotnet run

View output at `https://localhost:5001`

    dotnet add package Okta.Sdk --version 1.4.0
    dotnet add package Microsoft.AspNetCore.Authentication.OpenIdConnect --version 3.0.0-preview9.19424.4

Appsettings.json

    "Okta": {
        "Issuer": "<https://okta.okta.com/oauth2/default>",
        "ClientId": "{yourClientId}",
        "ClientSecret": "{yourClientSecret}"
      }

then `dotnet run` again

Also see

    dotnet new mvc --auth Individual
        dotnet new nunit-test
        dotnet new --help