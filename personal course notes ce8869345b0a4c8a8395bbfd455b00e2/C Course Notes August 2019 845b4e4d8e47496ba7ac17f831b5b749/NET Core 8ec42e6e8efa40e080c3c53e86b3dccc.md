# .NET Core

.NET Core

```
We have seen how we can build an app and run it using the compiler,
		from scratch, just using notepad.

.NET Core is really cool and has its own build commands

	dotnet new console 
	dotnet build
	dotnet run
	notepad Program.cs
			EDIT FILE, SAVE, RERUN TO VIEW NEW OUTPUT
	dotnet build -r win10-x64  TO CREATE EXE
```

# .NET Core

# using Powershell commands

dotnet new console
dotnet new web
dotnet new mvc

dotnet run

## Which version ?

Look in .csproj file

## Other commands

dotnet build (won't run)
dotnet publish (fastest possible mode for running app)

# Equivalent of nuget

dotnet add package <<name>>

# Common

dotnet add package	Newtonsoft.json
dotnet add package	Microsoft.EntityFrameworkCore -v 2.1.1 // Stable versions
dotnet add package	Microsoft.EntityFrameworkCore.Sqlserver -v 2.1.1
dotnet add package	Microsoft.EntityFrameworkCore.Sqlite -v 2.1.1
dotnet add package	Microsoft.EntityFrameworkCore.Design -v 2.1.1

```
==> Check out .csproj file to see dependencies installed
```

# Using A Library

MyConsoleApp.exe

```
==> get data from libraries in another place ie myLibrary.dll
```

/Root/
/Library/
/bin/debug/library.dll
/use_library/
/bin/debug/app.exe

```
from app, reference the DLL
```

Creating a library

```
dotnet new classlib
dotnet run // NOT ALLOWED
```

Can run

dotnet add reference ..\lab_40_core_library\lab_40_core_library.csproj

```
<Project Sdk="Microsoft.NET.Sdk">
  <ItemGroup>
    <!--<Reference Include="lab_40_core_library">
      <HintPath>..\\\\lab_40_core_library\\\\bin\\\\Debug\\\\netstandard2.0\\\\lab_40_core_library.dll</HintPath>
    </Reference>-->
    <ProjectReference Include="..\\lab_40_core_library\\lab_40_core_library.csproj" />
  </ItemGroup>

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp3.0</TargetFramework>
  </PropertyGroup>

</Project>
```

# .NET Core .v3

.NET Core v3 has just been released.

On the way OUT ==> WCF communications

Examples

```
dotnet new wpf
dotnet new winforms
```

On the way IN

```
BLAZOR ==> C# in browser
```