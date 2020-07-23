# C# Course Notes June 2019

# Github

# GitHub

## Basic walkthrough together

Create repo online; clone / download then begin work

git clone [https://github.com/philanderson888/sparta-test-01.git](https://github.com/philanderson888/sparta-test-01.git)

```
ls Force  hidden files

.git is the folder containing all git repositories

MASTER : DEFAULT BRANCH : PRODUCTION

	DEV : DEVELOPMENT BRANCH (CUMULATIVE)

		FEATURE-01  (INDIVIDUAL DEV TEAMS WORKING ON DIFFERENT FEATURES)
		FEATURE-02

git pull 		==> pull down latest changes

// make change

git status ==> check first if changes waiting

git add <<FILE NAME>>
or
git add .
then
git commit -m "description"
then
git push
```

# Branches

```
git branch dev 		create branch
git checkout dev    move to working in this branch

update some code and push to internet

 git push --set-upstream origin dev

MASTER BRANCH   (STATE 1)

	DEV BRANCH (UPDATED STATE 2)

			MISMATCH

		After approval : both DEV and MASTER branches ONLINE are MATCHED

		But!!!
				Offline my DEV is OK but my MASTER is now out of sync.

					git checkout master
					git pull
```

# Visual demo of differences between branches

```
add stuff
and here
and here

You can visually see branch differences using `git checkout` and File Explorer

	git checkout dev
	<<make changes>>
	git add .
	git commit -m ""

	git checkout dev/master ==> VISUALLY SEE DIFFERENCES
```

## Comparing two text files online

```
git diff can show differences between files

	==> complex for beginner
	==> simple ==> find webpage and compare 2 text files
```

LAB
index.html
page01.html
page02.html
page03.html

## Formal Notes

git --version

git init
OFFLINE : create new repo ((HASSLE ==> BEST ONLINE DO THIS, GIT CLONE ...))

git add .
OOPS ! MADE MISTAKE
git reset
==> UNDO GIT ADD

# Talking to remote repo

git remote
git remote -v
PUSH ==> LINK
PULL ==> LINK (GIT FETCH & GIT MERGE ==> GIT PULL)
git remote set-url origin [https://github.com/philanderson888/sparta-test-01.git](https://github.com/philanderson888/sparta-test-01.git)

# git config

```
VIEW THE USER ACCOUNT YOU ARE LOGGED IN WITH

git config --global -l    	LIST INFO

git config --global user.name philanderson888						SET DETAILS
git config --global user.email philanderson888@myemail.com  

// RESET TO SCRATCH : RESOLVE A CONFLICT

git config --local credential.helper ""
git push origin master
```

## deleting a branch

```
git branch test      // CREATE
git branch -D test   // DELETE LOCAL
git branch -d test   // DELETE LOCAL AND ONLINE
```

## rolling back

```
we can use 

git log

			to view previous commits

LOG IN AND VIEW STATUS OF ONE COMMIT

git checkout 49bdaf82b07770c0138b4d6f67cfe0539949fd5d    (hash of this commit)
```

## Working as a team

```
person 1
	git checkout feature1
	..change
	git add/commit/push
	create pull request
person 2
	approve pull request
	pull FEATURE into DEV
whole group
	git checkout dev
	git pull
	git checkout feature2
	git merge TO MERGE CHANGES FROM DEV INTO THEIR FEATURE2 (which they are working on)
	conflict ==> fix locally.

CYCLE BEGINS AGAIN
```

## Protecting master branch

```
AGREE WHEN YOU START : CANNOT PUSH DIRECTLY TO MASTER.  MUST CREATE PULL REQUEST
```

# Resources

Resources to learn .NET

[Technical documentation, API, and code examples](https://docs.microsoft.com/en-us/)

Stack Overflow

# IDE Integrated Development Environment

1. Visual Studio 2019 Preview
2. VSCode : web developers   

[Visual Studio Code - Code Editing. Redefined](https://code.visualstudio.com/)

3. Notepad++  

4. Sublime Text    (runs from USB)

5.  Atom   (use for Markdown - GitHub help pages)

# Saving Code Snippets Online

1. Investigate : Visual Studio has new 'Live Sharing' mode where  you can share code live with other developers
2. JSFiddle  *
3. CodePen   *
4. Plunkr
5. .NET Fiddle (C#)  *
6. Others to be aware of 
    1. Code Sandbox
    2. CodeShare    C#
    3. CodeAnywhere   C#
    4. CollabEdit  online collaboration 
    5. MonoDevelop    C#
    6. Cloud 9
    7. REPL.it
    8. IDEOne   C#

# Learning Resources : How To Learn C#

1. SoloLearn  **
2. Codewars  **
3. 

[142 Resources for Mastering Coding Interviews - Better Programming - Medium](https://medium.com/better-programming/the-software-engineering-study-guide-bac25b8b61eb)

4. 

[Subarray Sum Equals K - LeetCode](https://leetcode.com/problems/subarray-sum-equals-k/)

5. [https://csharp.2000things.com/](https://csharp.2000things.com/) 

6. The New Boston  

# Introduction To C# and .NET

C    Windows, Linux, MAC are written in C.   Android is Linux.   Top 500 Supercomputers in world all Linux..   Linux was free clone derived from paid UNIX operating system which was default before Linux arrived.

Java  : owned by Sun =⇒ then Oracle =⇒  not developed much.  

Runtime =⇒ JAVA VIRTUAL MACHINE : virtual environment : install on any operating system

Java is in Android ⇒ Most popular OS by far in world

C#   Microsoft have done some amazing things in programming

[https://www.bbc.co.uk/news/technology-47078013](https://www.bbc.co.uk/news/technology-47078013)

.NET framework  ⇒ Open source

.NET Core : any operating system : open source

C# : looked after it and ecosystem

Azure : cloud : expensive but very good

Azure driving sales

Office driving sales

Windows 10 is in nearly ever pc on planet

XBOX

Bought

LinkedIn : business

Skype : video chat

GitHub : code for whole world!

C# : simple, easy to learn, quick, powerful, website, mobile apps, win10 apps, games

C++   upgrade to C : advanced programmers : high on detail. 

Talk to hardware raw.

Python : popular engineering codebase 

Javascript /   node     HTML Browser : runs Javascript

                                  Node : Web server : runs Javascript

Front End : React, Angular, Vue : websites today

HTML code local ⇒ GitHub ⇒ Netlify ⇒ free, push to internet with HTTPS free link

WIX : free starter

New ones

Kotlin  : Android on watches

Go : Google new programming language to take web/general programming forwards

## Operating Systems

Windows : IBM needed an operating system for first mass-produced computers PC-AT 1981.  Bill Gates bought and converted QDOS to MSDOS Microsoft DOS Disk Operating System

UNIX =⇒ ORIGINAL FIRST MAJOR OPERATING SYSTEM IN WORLD.  UNIVERSITIES. CLOSED SOURCE, PAID. 
Linux : Free clone of UNIX

MAC =⇒ UNIX DERIVATIVE (PAID, CLOSED SOURCE) 

Android : Mobile Phones : derivative of Linux

NOKIA

Windows Phone

# .NET

Windows is built on C programming language.   Also C++ and C# as well  now.

Core library files are called .DLL 

Go to `C:\Windows\System32` to see the core of Windows

.NET is the library of all files Windows has built up over the years

Windows NT/2000/XP/2003/2008/2012/2016/Windows 10

.NET is around 4.2GB in size to download

.NET open source now on GitHub

# .NET structure

## Source code

.cs   C Sharp

.csproj    Project XML file with metadata 

.sln          Solution file which is 'container' 'umbrella' and has XML data about all of the projects inside this container

Program.cs    default first file to run

Main()  method which is first METHOD to run in all code

# Building A .NET application

C# 

obeys rules set out in

CLI Common Language Infrastructure             Visual Basic, C#, F#, C++ 

CTS Common Type Structure                           int, string, struct etc

# Compiling

C# : High Level : human readable

`build` ⇒ C# COMPILED TO  (C)  IL   (Common)    intermediate language  

   View this with `ILDASM`        Intermediate Language Disassembler  or   [https://sharplab.io](https://sharplab.io/)

  Win10 : 'developer'   select   `Developer tools`

# Running

C# raw code   =⇒ IL Intermediate Language   =⇒    at runtime this is compiled again down to lowest possible level ie talk directly to hardware and match CPU architecture with Multi-Core etc

C# ⇒ IL ⇒ CLR Common Language Runtime   environment which runs the actual code

       Garbage Collector which ensures items we have finished with are cleanly removed from memory.   

Programmer in C# you should ignore this background process.

Be aware of it if required when accessing certain data outside of C# like files and databases

GC...... methods

# Latest

.NET old   4.7.2 version

.NET core new     3.0 version is newest       WPF and other items

core is stripped down version, works on MAC/Linux also

C#   8.0  (on Core3.0)

# Naming Conventions

Classes  PascalCase

Methods PascalCase

Public Fields/Properties PascalCase

private fields  _likeThis  

                      camelCase

website-pages-like-this.html     (kebab case)

SQL_commands_often_like_this    snake_case

CONSTANTS_OFTEN_LIKE_THIS = fixed number

Class X  {

}

Default Microsoft preferred

Class X

{

}

Tip : if you get stuck with red lines : 

Firstly just attack red lines one by one in order, from top

If all else fails : 2 tips

Strip back all code until you get good working code again.  Slowly add in code little by little until you identify what's causing the fault

Get colleague to look over your code

Attach a debugger and step through code line by line

Tip : use #region MYREGION  and #endregion to create custom closable blocks of code

# Scripting

# 

First computers ran program which ran in a LINEAR fashion.  We call this 'top-down' programming

01 START

02 X=10

03  Y=X*X

04  PRINT Y

05 X++

06 IF X>100 EXIT

07 GOTO 03

Today we still have SCRIPTING which does the same thing

## .bat Batch files

Also call these .cmd files 

They are text files with simple commands in them

```csharp
Example

echo hello this is an amazing batch file written by ....
echo ====================================================
echo 
echo 
md ThisIsAFolder
md AndAnotherOne
cd ThisIsAFolder
notepad ThisIsATextFile.txt
cd ..
```

## Powershell

'

Powershell is the new command line on Windows.

Use it to get most tasks done

1) Simple commands

2) Azure CLI talk to Azure

3) Domain : use it to manage users, computers, servers, groups etc

```csharp
HOSTNAME    name of PC
IPCONFIG    IP info
NETSTAT     internet connections
PING        connectivity
TRACERT      
PATHPING
NSLOOKUP (DNS)   
CURL (LINUX)     read website
```

### Powershell .ps1 script file

Powershell will not run .ps1 script files unless you explicitly allow this

```csharp
Set-ExecutionPolicy Unrestricted

Then run 

echo "this is a powershell script";
get-process | out-gridview
notepad testfile.txt
pause
ls
echo "Press Any Key to delete testfile.txt"
pause
del testfile.txt
ls
```

## Linux bash script file   "script.sh"

```csharp
#!/bin/bash
# comment
echo "Test Bash Linux Script"
```

# Bash Script To Update GitHub

```bash
# Here is a basic BASH script to update GitHub
echo "trying to push to github with a script"
cd /Users/Shared/scripts
git status
git pull
git add .
git commit -m "Updating scripts"
git push

# Run the script with 
./gitPushMac.sh

# Set permissions to run the script with 
chmod u+x gitPushMac.sh

```

# Windows Scripting : Powershell and CMD

[www.ss64.com](http://www.ss64.com/)

CMD = Command Line

ARP -a : Map IP to MAC (hardware address)
CLS : Clear screen
IPCONFIG : Show IP
IPCONFIG /ALL : Show IP and MAC
CMD - switch
POWERSHELL - switch
COPY : individual files from A to B
DEL : delete files
ECHO : output to screen
IF ... conditional
MD Make Directory : create a folder
CD Change Directory
CD .. up one level
CD / go to root level
TAB use to fill out names (cycle through names)
MOVE files from A to B
MSINFO32
RD remove directory
REN rename
RUNAS administrator
TREE shows folders and subfolders
TREE > output.txt
NOTEPAD output.txt
SUBL output.txt
VSCODE ..
WHOAMI current user
XCOPY great for backup files and folders : omit / include files/types/folders etc

Powershell

```
CMD => original 'SHELL' whereb USER INTERACT WITH COMPUTER.     Using STRING

POWERSHELL => use and manipulate objects  (same as OOP eg Customer object/instance)

	get-user    RETURNS user object which manipulate : change name of user

CHAINING 

	get-user | out-gridview
```

# BASIC COMMANDS

```
get-alias  			MAP TO OLDER COMMANDS

get-help    also type /? after command

get-command    	LIST ALL COMMANDS

get-commands  *dns*     LIST OF ALL COMPUTERS ON INTERNET
						MAPS ALL COMPUTERS LIKE TELEPHONE DIRECTORY

						PHONE BOOK  		NUMBER				NAME
						DNS LOOKUP   		IP ADDRESS 			COMMONLY USED NAME
											1.2.3.4 			mydomain.com

						WHATISMYIP 			212.161.55.68 		SPARTA CORPORATE OFFICE
											192.168.1.87		SPARTA WEBSITE

get-command | select name

sort output

get-process | select name, cpu | sort cpu -desc

Format as a table

	get-netIPAddress | format-table
	                         -list

Service : runs 24/7
Process : can be USER-INITIATED eg WORD or could be a service 24/7

get-process
get-service home*

get-service | where status -eq running

get-service homegroupprovider

pause : pause a script  (attach number for seconds also)

TURN OFF PROMPTING (are you sure???)

	-CONFIRM:$false

FOREACH LOOP

	get-service | foreach {  echo hello  }

VARIABLES

	$x = 10;
	echo $x+1;

	$x=10; echo ($x+1);	

	$counter = 0;
	get-service | foreach ( echo $counter; $counter++; )

Line is getting long; can we put in a script so can build it properly?

C:\\Scripts on root of C:\\ ==> easy to manage all scripts

MD C:\\SCRIPTS

	.bat  or .cmd   ==> OLD FASHIONED 'COMMAND LINE' SCRIPT

	md c:\\foldera
	md c:\\folderb
	cd c:\\foldera
	md subfolder1
	cd subfolder1

	copy nul firstfile.txt            
	echo hello >> firstfile.txt
	echo how are youi >> firstfile.txt
	notepad firstfile.txt
	pause

Repeat as a POWERSHELL SCRIPT

	.ps1

Foreach : displaying output

Let's now build the command we were working on, in a script

	Services.ps1
```

# Summary so far

```
echo ''
echo "Displaying Services"
echo ===================
echo ''
echo ''
$counter = 0;
get-service | foreach {
 $_.DisplayName
 echo "Counter is - " $counter; 
 $counter++;
}
echo ''
echo "HyperV Services"
echo ===================
echo ''
echo ''
$counter = 0;
get-service | where DisplayName -like '*hyper*' | foreach {
 $_.DisplayName
 echo "Counter is - " $counter; 
 $counter++;
}
echo ''
echo "Processes In CPU Descending Order"
echo ==================================
echo ''
echo ''
$counter = 0;
get-process| where cpu -gt 5 | sort cpu -desc | foreach {
 echo ''
 $_.ProcessName, $_.cpu
 $counter++
}
echo ''
echo "Number of processes counted is " $counter;
```

## Conditional Operators

if A -eg B
-eq equal
-ne not equal
-gt >
-lt <
-ge >=
-le <=
like if (... -like '*match*')
-and
-or
-not
-is if($a is "String")#
-isNot

# Printing files / folders

```
DIR
LS
get-childitem  -recurse  subfolders   -path c:\\... 

// GET ALL FILES ON WHOLE COMPUTER
get-childitem -recurse -path c:\\
```

# Files

```
Get-Item    ==> get file

Get-Content ==> Read inside
cat ..file..
type ..file..
nano ... edit mode
notepad .. edit mode ..
```

# Run a script from a script

```
Create script1.ps1 and from it, run these other 2 scripts
.\\script2.ps1
.\\script3.ps1
```

# Unblocking a .ps1 file downloaded from the internet

```
By default security is high on windows.
PS1 scripts won't run when downloaded from internet

Right click on .ps1, Properties, Unblock
```

# Debugging

# Debugging

```csharp
using System;
using System.Diagnostics;
using System.IO;

namespace lab_59_Debugging
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine(i);
                Debug.WriteLine($"Debugging To OUTPUT WINDOW (only in debug mode) : i is {i}");
                Trace.WriteLine($"Trace to OUTPUT WINDOW " +
                    $"(in final release mode and debug mode) : i is {i}");
                File.AppendAllText("output.txt",$"Logging To text file {DateTime.Now} i has value {i}");
                var output = $"Logging To text file {DateTime.Now} i has value {i}";

                // log to C:\\Log folder
                if (!Directory.Exists("c:\\\\log")){
                    Directory.CreateDirectory("c:\\\\Log");
                }
                File.AppendAllText("C:\\\\Log\\\\output.txt", output + Environment.NewLine);
                // log to My Documents\\Log folder
                File.AppendAllText("C:\\\\Users\\\\tech-w99a.LAPTOP-3BLG1NHP\\\\Documents\\\\Log\\\\output.txt", output + Environment.NewLine);
                // ANY USER???  specialfolders....
                File.AppendAllText(System.Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments)
                    + "\\\\Log\\\\output.txt", output + Environment.NewLine);
                //  @ LITERAL STRING NOTATION AS WELL
                var MyDocumentsPath = System.Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
                var path = MyDocumentsPath + "\\\\Log\\\\output.txt";

                File.AppendAllText(@"C:\\Users\\tech-w99a.LAPTOP-3BLG1NHP\\Documents\\Log\\output.txt", output + Environment.NewLine);

                // can also log to the Windows Application Event Log

                EventLog.WriteEntry("Application", "output", EventLogEntryType.Information, 5678, 123);

            }
            EventLog.WriteEntry("Application", "Your Windows Has Been Hacked", EventLogEntryType.Information, 5678, 123);

            for(int j = 0; j < 10; j++)
            {
                1Console.WriteLine($"J has value {j}");
            }

            Console.ReadLine();

            // 1 ==> debug which is F5
            // 2 ==> not debug mode which is Control F5 in Debug ==> still shows all output
            // 3 ==> not debug mode PLUS Build => Configuration => Release then only shows TRACE output
            // TODO SOME WORK HERE
            // ToDo Some more work here

            // Debugging
            /*
             Control F5 ==> No Breakpoint
             F5 => Breakpoint
               F10 ==> next line
               F11 ==> next line but if calls Method, go deeper
               Ctl-shift-F5  Restart

              */
             

        }
    }
}
```

# Data Types and Variables

C# is STRONGLY TYPED

All 'types' must be clearly defined at COMPILE TIME

'dynamic' keyword which can be used to exclude a variable from this strict rule.

Otherwise, everything is strictly 'typed' at compile time.

Advantage =⇒ Runtime environment has less work with type checking, so is faster

## Declaring

int x;   

int y, string z, bool b;

## Initialise

x=5;

int y = 100;

string z = "hello";

# Strings

Strings are arrays.   

'char' is one letter

string is simply and array of these letters, in order

"" not '' for strings  (use double quotes)

## Alias

string s02 = new String();   // could do this but don't

       string = alias

       String  =  Class 

char ... Char

int .... Int32

bool    Boolean

  Use the alias!!!

## int.TryParse()

Use this as it does not generate an exception if it fails

```csharp
// int.tryParse
int.TryParse("123abc",out int output01);
Console.WriteLine(output01);
// int.tryParse
int.TryParse("abc123", out int output02);
Console.WriteLine(output02);
// int.tryParse
int.TryParse("abc", out int output03);
Console.WriteLine(output03);
int.TryParse("123", out int output04);
Console.WriteLine(output04);
```

## Regex

```csharp
using System.Text.RegularExpressions;

int result = Convert.ToInt32
  (
      Regex.Replace
      (
          "7yu4805jqwfwei321",    // input
          "[^0-9]",               // select everything that is not in the range of 0-9
          ""                      // replace that with an empty string.
      )
  );
Console.WriteLine(result);
```

## Strings : Formatting Output

`String.Format`    shows all available options

We can normally omit String.Format for example when using the $ which is called `String Interpolation`

```csharp
:N0     0 decimal places
:N1     1
:N2     2
Console.WriteLine($"{d01,10:N0}{d01,10:N1}{d01,10:N2}");

:C      currency
Console.WriteLine($"{d01,10:C}{d01,10:N0}{d01,10:N1}{d01,10:N2}");

:X      hex number
```

## Converting Text To And From Arrays

Source data

a) CSV Comma Separated Values

(Header)                                 name, id, age

(Data Lines)                            "phil", 123, 22

                                               "bob",124,34

```csharp
name, id, age
"phil", 123, 22
"bob",124,34
```

    b)   Maybe has other separators

                  ; semicolon

                     space

### String.split              String ⇒ Array

```csharp
// string.split

string sentence = "Food is life";
string[] words = sentence.Split(' ');
foreach(var word in words)
{
    Console.WriteLine(word);
}
```

### Array.join               Array =⇒ String

```csharp
// array.join

string sentence02;
sentence02 = string.Join(" ", words);
Console.WriteLine(sentence02);
```

[Integers](c-sharp-course-notes/Integers%20bfc83cf4d05d413cbe0f9f8856e2cd98.md)

[Decimals (Float, Double, Decimal)](c-sharp-course-notes/Decimals%20Float%20Double%20Decimal%20a3c92aa083224d47a3358fe23574dbf4.md)

[Null](c-sharp-course-notes/Null%209374309dc07e4aeeb219fced78362e70.md)

[Dates And Times](c-sharp-course-notes/Dates%20And%20Times%20f6692916c6424b998abe2904f9decba9.md)

[Byte](c-sharp-course-notes/Byte%207f37f0ee719046b9a4f19ea2fa04ba3b.md)

[Tuple](c-sharp-course-notes/Tuple%20c57061f39801420f94ea0fbf7de172b7.md)

[Null Check](c-sharp-course-notes/Null%20Check%20532f7ae4ebbe44dbb804c50d1bc58420.md)

# Loops

Loops

For..
While..
Do..While..
Foreach

Break;
Continue;
Return;

using System;

namespace lab_40_loops
{
class Program
{
static void Main(string[] args)
{
// for : fixed number of iterations

```
// foreach : every item in array/collection

        // while (condition checked before loop, may never enter)

        // do .. while (condition checked after loop, always enters at least once)

        // break : useful when looking for 1 item only and looping until find this item

        string[] items = new string[] { "first", "second", "third" };
        foreach (var item in items)
        {
            if (item == "second")
            {
                break;   // EXIT FOREACH STRUCTURE COMPLETELY
            }
            Console.WriteLine("items before break point - " + item);   // first only 
        }

        // continue

        foreach (var item in items)
        {
            if (item == "second")
            {
                continue;     // FINISH THIS LOOP AND START ON NEXT LOOP
            }
            Console.WriteLine("items not including continue - " + item);   // 
        }

        // throw
        // Create loop but manually throw exception and exit loop if certain condition reached

        // return
        // use return to save lots of if..else conditions and nesting 
        var output = DoThis(10);
        Console.WriteLine(output);  // -150

        int DoThis(int inputnumber)
        {
            if (inputnumber == 5)
            {
                // do this
                return -100;
            }
            if (inputnumber == 10)
            {
                // do another thing
                return -150;
            }

            return -1000;
        }

    }
}
```

}

# Casting

```csharp
using System;

namespace lab_41_casting
{
    class Program
    {
        static void Main(string[] args)
        {
            // Implicit cast

            // useful when it's impossible for data to be lost
            //   from int 1 to double 1.0 
            int num01 = 100;
            double d01 = num01;

            // Explicit cast
            // required when data definitely will be lost
            //  double 2.314 to int 2  : truncate 0.314
            double d02 = 2.314;
            int num02 = (int)d02;
            Console.WriteLine($"{d02} has become {num02}");

            // Is
            var p = new Parent();
            var c = new Child();
            if (c is Parent)
            {
                Console.WriteLine("Your child is a member of the parent family");
            }

            // Don't really use this as exceptions if fail

            if (!(c is AnotherParent))
            {
                Console.WriteLine("C is not related to another parent");
            }

            // cast from one type to another
            var p02 = new Parent();
            var c02 = new Child();

            var parentofChild2 = c02 as Parent;  // safer as returns null if fail
            var parentofChild2v2 = (Parent)c02;

            c02.ChildMethod(); // works fine
           // parentofChild2.ChildMethod(); // does not exist

            // this will not work
           // var AnotherParent = c02 as AnotherParent;

            

        }
    }

    class Parent { }

    class Child : Parent {
        public void ChildMethod() { }
    }

    class AnotherParent { }
}
```

# Methods (continued)

## Summary so far

### Instance Method

Class

Method in class                    .// INSTANCE METHOD

instance.Method();     to run this method   

### Static Method

Class

Static Method                      // STATIC METHOD

Class.Method();     to run this method

### Void

void means 'return nothing'

### Action Method

Special case of a method which 

a) is void 

b) accepts no parameters

void DoThis(){}

### Lots Of Parameters : Use 'names' so don't have to remember the order

By default =⇒ order is fixed

Named parameters : any order

```csharp
static void DoingLots(int a, string b, bool c)
  {
      Console.WriteLine($"Doing lots {a}  {b}  {c}");
  }

DoingLots(100, "hi", true);

DoingLots(c: false, b: "there", a: 10_000_000);
```

## Methods in Methods

 Can easily put methods in methods

```csharp
DoThis();
DoThis();
DoThis();

// can put methods here
void DoThis(){ Console.WriteLine("I am doing something"); }
```

## Placement Of Methods : Static and Non-Static

```csharp
using System;

namespace lab_23_methods
{
    class Program
    {
        static void Main(string[] args)
        {
            // Grow(); instance method 
            var x01 = new X();
            x01.Grow();
            // ReturnFixedData(); static method
            X.ReturnFixedData();

            // remember STATIC MATHS CLASS WHICH RETURNS PI, LOGX ETC
            Console.WriteLine(Math.PI);

            DoThis();
            DoThis();
            DoThis();

            DoThat();
            DoThat();
            DoThat();

            // can put methods here
            void DoThis(){ Console.WriteLine("I am doing something"); }
        }

        static void DoThat() { Console.WriteLine("I am doing something else"); }
        // can put methods here
    }
    class X
    {
        public int Age;
        // can put INSTANCE Nmethods here
        public void Grow()
        {
            Age++;
        }
        // STATIC METHOD : useful for fixed data : STATIC=stock warehouse (WHOLE APP)
        public static string ReturnFixedData()
        {
            return "Here is some fixed data";
        }
    }
}
```

## Optional Parameters

```csharp
static void DoingSomeOtherWork(DateTime date, char c = 'z', 
                   float f = 1.2F, double d = 100.329) {

        }

DoingSomeOtherWork(new DateTime(2019, 06, 27));   //  set date but others default

DoingSomeOtherWork(new DateTime(2019, 06, 27), 'a',1.3F,100.222);   //

```

# Overloading Methods

Methods and Overloading

Overloading has SAME METHOD NAME but passing in DIFFERENT PARAMETERS

DoThis()

DoThis(int x);

DoThis(string y)

DoThis(int x, sring y)

```csharp
using System;

namespace lab_18_method_overloading
{
    class Program
    {
        static void Main(string[] args)
        {
            var r = new Rabbit();
            r.Age = 0;
            for (int i = 0; i < 10; i++)
            {
                r.Grow();
                Console.WriteLine(r.Age);
            }
            Console.WriteLine("\n\nHey it's summer now - growth rate has increased\n\n");
            for (int i = 0; i < 10; i++)
            {
                r.Grow(i);
                Console.WriteLine(r.Age);
            }
            Console.WriteLine("\n\nHey it's wnter now - growth rate has decreased\n\n");
            for (int i = 0; i < 10; i++)
            {
                r.Grow(0.1);
                Console.WriteLine(r.Age);
            }

        }
    }

    class Rabbit
    {
        public double Age { get; set; }
        public void Grow()
        {
            Age++;
        }
        public void Grow(int growthFactor)
        {
            Age += growthFactor;
        }

				// this bit is not working!!!!
        public void Grow(double winterGrowth)
        {
            //Convert.ToDecimal(winterGrowth);
            Age += winterGrowth;
 
        }

    }
}
```

# Operators

# Operators : operate on one or more variables to produce a result

## Unary

Incremental (pre-fix and post-fix)

x++;
x=10;
y=x++;

++x;
x=10;
y=++x;

! !true // false

## Binary

## Ternary

# Reference Type And Value Type

```sql
## Reference Type and Value Type

Two types of memory in computer

Stack

	Fastest part of memory
	Running code is stored
	Main()=> Method01+variables=> Method02+variables etc

						Method02  char c  double d, shortcut/pointer to array a[]
						Method01  int x, bool y
						Main()

	the basic types stored on the STACK are called

		PRIMITIVES
		VALUE TYPES
					int, bool, char, float, double, byte

Heap

	Larger 
	More structured
	Store larger items 'REFERENCE TYPES'
		string      array of chars
		class
		array 			
		list
		queue
		stack

	With copying HEAP items, be aware by default you are only copying
			the pointer item.  Therefore the underlying object is not
			copied.  Both shortcuts point to same underlying object.

Array
	Array is a fixed structure and to reach items we just need a 'POINTER'
	which is a fixed address in memory : lightning fast to reach items.

Classes vs Structs

Classes are REFERENCE TYPES ON HEAP
Structs are VALUE TYPES ON STACK  : fast and data stored with item

using System;

namespace lab_49_reference_value_types
{
    class Program
    {
        static void Main(string[] args)
        {
            // value types
            int x = 10;
            int y = x;
            y = 100;
            Console.WriteLine($"x is {x} and y is {y}");

            // reference types

            int[] array_a = new int[] { 10, 20, 30 };
            int[] array_b = array_a;

            // for every item in an array (array_name, do this)

            //  do this can be written in a LAMBDA FORM

            // LAMBDA FORM    (parameter in ==> Method out)

            //  if method is one line method then can omit { braces }

            Console.WriteLine("\n\nBefore changes\n");
            Array.ForEach(array_a, item => Console.WriteLine(item));
            Array.ForEach(array_b, item => Console.WriteLine(item));

            array_b[2] = 40;

            Console.WriteLine("\n\nAfter changes\n");
            Array.ForEach(array_a, item => Console.WriteLine(item));
            Array.ForEach(array_b, item => Console.WriteLine(item));

            var array_c = (int[])array_a.Clone();
            Array.ForEach(array_c, item => Console.WriteLine(item));
        }
    }
}
```

# OOP Object Oriented Programming : Classes, Methods, Constructors

Scripting =⇒ command line instructions

Even 'Javascript' is an 'interpreted' language which means the code runs line by line until an error stops it or code completes.

This is a 'run-time' exception

line 01 OK, runs

line 02 OK, runs

line 03 error =⇒ exception (crash)

C#, Java are compiled languages

Code =⇒ Compile =⇒ Run

                a) Compile Exceptions    (refuse to build)

                b) Runtime Exceptions

Also we now have a GUI (screen).  GUI =⇒ Graphical User Interface.

OOP Object Oriented Programming =⇒ Screen objects and ATTACH CODE TO SCREEN OBJECTS

           Javascript  button  onclick="DoThis"

           C#    private void button_click(object sender, eventArgs e){      }

No longer do we have long 'top-down' scripts but all code attached to another object.

Event : click, hover (mouseover, mouseexit), keypress, keyup, keydown, keyup?key=Enter, 

Listeners =⇒     Javascript  button : Add 'event listener' to listen for different events

## Objects

Root object just called 'object'

Everything else is a child of 'object'

## Classes

Manually creating objects is usually just for lab or teaching purposes.

Normal computing we use the computer to generate objects for us

Natural world

Mammals ⇒ Dogs ⇒ Labrador =⇒ our particular one 'Labrador' Bonnie

Computing =⇒ create multiple objects of same type we use 'classes'

mammal

cat

lion

american lion

tiger

..

Inheritance from parent to child

```csharp
using System;
using System.Collections.Generic;

namespace lab_12_classes
{
    class Program
    {
        static List<Dog> dogs = new List<Dog>();
        static void Main(string[] args)
        {
            var m01 = new Mammal();
            m01.Weight = 100;
            m01.Length = 150;
            m01.Weight = 2000;
            var d01 = new Dog();
            d01.Weight = 80;
            d01.Length = 50;
            d01.Height = 1000;
            d01.DogID = "dog01";
            Console.WriteLine($"Dog has height {d01.Height}, weight {d01.Weight} and " +
                $"length {d01.Length}");
            for (int i = 1; i<=20; i++)
            {
                // create dog
                Dog newdog = new Dog();
                newdog.DogID = $"dog{i}";
                newdog.Length = 100;
                newdog.Height = 50;
                newdog.Weight = 30;
                // add dog to list of dogs
                dogs.Add(newdog);
            }
            // print all dogs
            foreach(var dog in dogs)
            {
                Console.WriteLine($"{dog.DogID} has length {dog.Length}");
            }
        }
    }

    class Dog : Mammal { }

    class Cat : Mammal { }

    class Mammal {
        public int Height;
        public int Length;
        public int Weight;
        public string DogID;
    }

}
```

## Classes : so far

Class can be used as a TEMPLATE to create NEW OBJECTS

                                        Dog                        dog01,dog02 etc

                                     Class                         Instance 

Class have fields eg height, weight, id

## Methods

If we want to do something (action) we create a function.  In C# this is a Method.

Dog : age field   and   Grow() method    where age will  add one

```csharp
using System;

namespace lab_13_methods
{
    class Program
    {
        static void Main(string[] args)
        {
            var d01 = new Dog();
            d01.Name = "Rover";
            d01.Age = 1;
            d01.Grow();
            Console.WriteLine($"The dog's age is now {d01.Age}");
            for(int i = 2; i <= 20; i++)
            {
                d01.Grow();
            }
            Console.WriteLine($"The dog's age is now {d01.Age}");
            while(d01.Age > 5)
            {
                d01.GoBackInTime();
            }
            Console.WriteLine($"The dog's age is now {d01.Age}");
        }
    }

    class Dog
    {
        public string Name;
        public int Age;

        // method
        public void Grow()
        {
            Age++;
        }
        public void GoBackInTime()
        {
            Age--;
        }
    }

}
```

## Classes : So Far

1. Fields normallly PRIVATE
2. Methods : Action (doing) code
3. Properties : similar to fields but are normally PUBLIC

## Private Fields

When fields are PRIVATE we have no easy way to set them initially. 

We can add something called a CONSTRUCTOR which allows us to enter values at the point at which we create an object.

## Constructor

```csharp
class Person
    {
        private string NINO;
        private string password;
        public string Name;

        // constructor : public + name of class eg public Person
        public Person(string NINO,string password, string Name)
        {
						// this refers to the INSTANCE OF THE OBJECT
            // eg Peter
            // Peter.NINO = NINO(passed in)
            this.NINO = NINO;
            this.password = password;
            this.Name = Name;
        }
}
```

## Getters And Setters

We can use methods to Get and Set private data

1. Constructor ⇒ set private data initially
2. Get/Set private data with public Methods 

```csharp
using System;

namespace lab_15_constructor
{
    class Program
    {
        static void Main(string[] args)
        {
           // var Bob = new Person();
            var Peter = new Person("ABC123", "donttellthis", "Peter");
            Peter.SetNINO("DEF456", "ihavenoidea");
            Console.WriteLine(Peter.SetNINO("DEF456", "donttellthis"));
            Console.WriteLine(Peter.GetNINO("donttellthis"));

        }
    }

    class Person
    {
        private string NINO;
        private string password;
        public string Name;

        // constructor : public + name of class eg public Person
        public Person(string NINO,string password, string Name)
        {
            this.NINO = NINO;
            this.password = password;
            this.Name = Name;
        }

        public bool SetNINO(string newNINO, string password)
        {
            bool itWorked = false;

            if(this.password == password)
            {
                this.NINO = newNINO;
                itWorked = true;
            }

            return itWorked;
        }

        public string GetNINO(string password)
        {
            string returnNino = "";

            if (this.password == password)
            {
                returnNino = this.NINO;
            }

            return returnNino;
        }

    }
}
```

# Structs

A struct is a MINI CLASS 

It's stored in the FAST MEMORY OF OUR COMPUTER CALLED THE STACK MEMORY

int, bool, char, structs, short, long, byte are all PRIMITIVE TYPES AND STORED IN FASTEST PART OF MEMORY CALLED STACK MEMORY

DATA stored with DECLARED ITEM   IN MEMORY.  WHEN FINISHED, EASY TO DISPOSE OF  

(2,3)                        p01

These are called VALUE TYPES

```csharp
using System;

namespace lab_33_struct
{
    class Program
    {
        static void Main(string[] args)
        {
            var p01 = new Point(2, 3);
            var p02 = new Point(4, 7);
            var p03 = new Point(6, 12);
        }
    }

    class x { }

    enum fruits { }

    struct y { }

    public struct Point
    {
        // STORE POINTS ON A GRAPH
        public int X;  // capitals because public.
        public int Y;   

        public Point(int x, int y)
        {
            this.X = x;
            this.Y = y;
        }
    }
}
```

# OOP Continued : Day 2

Class : blueprint/template for creating new objects

class Person/Dog/Rabbit             

Noun

PascalCase  ie CapitalLettersToStartEveryWord

                   ((camelCaseOnTheWeb but PascalCaseInCSharp))

```csharp
public class MyClass

     // Constructor
     public MyClass(){}   // put stuff here which runs when use 'new' keyword

Main(){
	    // item is called an INSTANCE (object) of the class.
      var item = new MyClass();     //. call constructor
 
```

Class contains

Field   private string NINO;

Property  public int P:ersonID {get; set;}

Method()

Inheritance

class Parent {}                                                                                 Base    class

class Child : Parent{}             // inherit from Parent                       Derived   class 

# Sealing A Class

## Sealing a class

Sometimes we wish to disable inheritance.

We can do this using the 'sealed' keyword

Example in industry is IT security : code which don't want anyone to mess with or alter.  Seal the parent.  Impossible to create a child (Derived) class.

// sealed class

```csharp
sealed class Rabbit
    {
        public double Age { get; set; }
        public void Grow()
        {
            Age++;
        }
        public void Grow(int growthFactor)
        {
            Age += growthFactor;
        }
        public void Grow(double winterGrowth)
        {
            //Convert.ToDecimal(winterGrowth);
            Age += winterGrowth;
 
        }
    }

    class SubRabbit  // cannot inherit
    {
        public string HereIsACustomField;
    }

Console.WriteLine("\n\nSubrabbits taking over\n\n");
var s = new SubRabbit();
//s.Age = 0;
for (int i = 0; i < 10; i++)
{
  //  s.Grow();
  //  Console.WriteLine(s.Age);
}
s.HereIsACustomField = "Hey I'm changing the subRabbit";

```

# Polymorphism

Poly  = many

Morph = type 

Illustration 

Family  : Parent with idea eg  throwing a party

Parent {

    ThrowAParty(){                // host a dinner party            }

}

ChildAged8 : Parent {

      // inherit 

     // but better idea

     ThrowAParty() {          //  swimming party      }

}

TeenagerAged17 : Parent{

// can inherit

// better idea

ThrowAParty(){     // go out with friends     }

}

Code

Parent

virtual ThrowAParty(){}                               // can be overridden

  Child : Parent

   override ThrowAParty(){}                           // yes we are overriding parent code

```csharp
using System;

namespace lab_19_polymorphism
{
    class Program
    {
        static void Main(string[] args)
        {
            var p = new Parent();
            p.ThrowAParty();

            var c01 = new Child01();
            c01.ThrowAParty();

            var c02 = new Child02();
            c02.ThrowAParty();

        }
    }

}using System;
using System.Collections.Generic;
using System.Text;

namespace lab_19_polymorphism
{
    class Parent
    {
        public virtual void ThrowAParty()
        {
            Console.WriteLine("Parent is throwing a posh dinner party only for Base Classes");
        }

    }

class Child01 : Parent
    {
        public override void ThrowAParty()
        {
            Console.WriteLine("Have fun with kids in pool");
        }
    }
}
class Child02 : Parent
    {
        public override void ThrowAParty()
        {
            Console.WriteLine("Evening out ");
        }
    }

```

Practical uses

Used at runtime to swap methods in/out in same way you might apply a different 'skin' to a gaming player 

# Abstract Classes

When building code in industry it may be that it is required your code must have certain methods inside it.  So other coders will be able to expect and use these methods.

.ToString()    is available on most objects, can expect this

It's possible to force a class to have a certain named method

Mind Picture : Going On Holiday

Great idea for an amazing vacation

Idea :         abstract class HolidayPlans

Place  Perth, Australia

When  Tomorrow

Transport : Undecided

Itinerary : Undecided

```csharp

using System;

namespace lab_21_abstract_class
{
    class Program
    {
        static void Main(string[] args)
        {
            //var holiday = new HolidayIdea();
            var holiday = new LetsGo();
            holiday.Transport();
            holiday.Itinerary();
            
        }
    }

    abstract class HolidayIdea
    {
        internal void Location() { Console.WriteLine("sorted"); }
        internal void Dates() { Console.WriteLine("sorted"); }

        public abstract void Itinerary();
        public abstract void Transport();
    }

    class LetsGo : HolidayIdea
    {
        public override void Itinerary() { Console.WriteLine("see the sights"); }
        public override void Transport() { Console.WriteLine("fly bus train walk"); }
    }
}
```

# Access Modifiers

Code has visibility.

Public : anywhere 

Private : only within this class

private string NINO; 

(( reach via public Get/Set Method with validation))

Protected

Parent

protected in ID;

Child                                     yes

Sub-Child                       yes 

Internal

Code is visible inside the final compiled unit of code

Windows .exe executable or 

               . dll   Dynamic Link Library

ReadOnly : cannot set item

Preferred to use     public string NINO{get;}      to do same thing 

# Interfaces

Interfaces

Class : template for creating objects

Instantiate : call new method to create object from class

Polymorphism

```
Base			virtual
Derived			override   (optional)
```

Remember

```
override 		Polymorphism : same name and different code body (		
							implementation)

overload 		myMethod(int x){}
				myMethod(string y){}   : same name different parameters
```

Abstract Class

```
Base 			abstract
						Minimum one abstract method
				abstract void GreatIdea();   // no implementation
Derived			override   (mandatory)       // yes implementation
```

Interfaces

```
Think of a family structure

	Child can be child of only ONE set of parents ie member of ONE FAMILY

	OOP Inheritance

		Parent Class

				Child Class

Think of a person wanting to use tools to 'get stuff done' then their parents may not
		have access to all the tools they require

Interface : allows a class to INHERIT FROM ONE PARENT
                              IMPLEMENT (USE) MULTIPLE INTERFACES

            	ITool01
            	ITool02

            	Parent

            				Class Child : Parent, ITool01,ITool02{

            				}

	Interfaces are used to FORCE A CERTAIN BEHAVIOUR IE A CLASS MUST CONTAIN A CERTAIN
				METHOD

				string contains CompareTo method because String class Implements IComparable

					so we know for sure all strings have CompareTo method

	Use interfaces in your large corporate application to provide particular methods.
		Implementation will be unique.

	Interfaces are PUBLIC AND FULLY ABSTRACT

		NO FIELDS
		YES PROPERTIES
		YES METHODS

	IT IS MANDATORY TO IMPLEMENT ANY METHODS CONTAINED IN THE INTERFACE
```

Example in real life

```
Often a real life use case is when we create a new class eg class Dog{}

Need a way to compare dogs => by height? weight? colour? etc

class Dog : IComparable{

	public int Height{get;set;}
	public int CompareTo(dog d){
		// compare 'this' (instance dog) against d 
		return -1, 0 or +1 depending if chosen attribute is less, same or greater
		if (this.Height<d.Height) return -1;
		if (this.Height = d.Height) return 0;
		return 1;
	}
}

// SnapLab : 18

	SnapLab18 : Interfaces : Create 3 dogs and compare heights.  Put into a collection or array and sort by height.

	Use custom CompareTo by implementing IComparable

	1. Dog Class with Height and Implement IComparable
	2. Code method CompareTo
			d01 : 500
			d02 : 250
			d01.CompareTo(d02) ==> should return +1 as d01 bigger
			d02.CompareTo(d01)                   -1 as d02 smaller

	3. Use my code as a guide to get right answer
			dog d01 : height 300mm  
			dog d02 : height 500mm         d03,d01,d02
			    d03          150

			   1 vs 2      
			   1 vs 3  
			   2 vs 3
```

# Arrays

```csharp
using System;

namespace lab_34_list
{
    class Program
    {

        static void Main(string[] args)
        {
            // arrays are fixed
            var array01 = new int[10];  // size fixed
            // 2d array
            int[,] Grid2D = new int[10, 10];
            int[,,] Cube3D = new int[5, 5, 5];
            var Grid4D = new int[10, 10, 10, 10];
            // the above arrays are all fixed in size 100% 

            // it's possible to create an array of arrays where each array can be
            // different size

            // jagged array
            int[][] jaggedArray01 = new int[3][];
            // first array size 10
            jaggedArray01[0] = new int[10];
            // seconde array size 100
            jaggedArray01[1] = new int[100];
            jaggedArray01[2] = new int[1000];

        }
    }
}
```

# Collections

Summary : Arrays and Collections

Arrays : super fast because fixed and each data item has a predicatable memory address. This
means that when data is to be read/written the computer can instantly find the
memory location by going direct to that point.

```
Arrays : super fast but fixed in size
```

Collection : variable-size structure

```
Great for data sets of unpredictable size

		List<T>  best as it has INDEX [i]  like an array  ((IEnumerable  ))
												((enumerate means to count))

	Dictionary<TKey,TValue>  unique key

	Queue<T>  FIFO  polite bus stop queue     Enqueue, Dequeue, Contains, Peek

	Stack<T>  LIFO   rugby scrum              Push     Pop      Contains  Peek

		<T> means any data type can go there ((GENERIC which means a general type,
													not specified))
```

Array : Immutable : Fixed structures in memory. Can CLONE TO NEW ARRAY but can't alter
Collection : Variable in size : LIST, DICTIONARY, QUEUE, STACK

List single items eg <int> or <string> or <Cat>
10
100
50
17
Lists, like arrays, are accessible via list01[5] syntax ie [5] means 6th item

Dictionary INDEX eg <int> plus data eg <int> or <string> or ..
1	"fred"
3	"bob"
7	"sam"
12 "rob"

```
index has to be unique
```

# Dictionary<TKey,TValue>

Tkey can be any type

Tvalue can be any type

but key has to be unique

```csharp
Console.WriteLine("\n\nDictionary\n\n");
var dictionary01 = new Dictionary<int, string>();
var dictionary02 = new Dictionary<int, int>();
var dictionary03 = new Dictionary<string, int>();

dictionary01.Add(10, "hi");
dictionary01.Add(20, "there");
dictionary01.Add(30, "spartans");
dictionary01.Add(40, "spartans2");
dictionary01.TryAdd(40, "some value");
dictionary02.TryAdd(40, 40);
dictionary03.TryAdd("this is a key", 40);

// ITERATE ==> LOOP OVER DICTIONARY
foreach(var key in dictionary01.Keys)
{
    Console.WriteLine($"Key {key,-15} Value {dictionary01[key]}");
}
```

# Queue

Queues are using in computing a lot

Email is a QUEUED SYSTEM WHERE THE SERVER PROCESSES EMAILS IN ORDER OF RECEIPT

Printer has a QUEUE to PRINT

Batch jobs at night typically work on a QUEUED SYSTEM

Think of  a POLITE BUS STOP QUEUE IN THE COUNTRY where everyone is waiting for a bus

FIFO : First person to arrive at the queue is first person to leave queue and get on bus

```csharp
// queue
var queue = new Queue<int>();
queue.Enqueue(10); // add first item
queue.Enqueue(20);  // second
queue.Enqueue(30);  // third

//.....................................30......20.....10....BUS STOP

var itemWhichJustGotOnTheBus = queue.Dequeue();  // first item get on bus

//.....................................30......20......BUS STOP      

Console.WriteLine($"item which just got on bus is {itemWhichJustGotOnTheBus}");

Console.WriteLine($"Queue contains number 50? {queue.Contains(50)}");
Console.WriteLine($"Queue contains number 20? {queue.Contains(20)}");

Console.WriteLine($"Check out who is first in line {queue.Peek()}");

// iterate  ==> print a foreach loop
```

# Stack

Stack is also used in computing a lot

Track running processes, method, classes, variables etc =⇒ all of your running code is tracked on the STACK which is an area of very fast memory (operating at speeds at limit of your computer)

                                                                     DoThat();  int z=500;

                                                                  DoThis();

                                                                   int x=10, string y = "hi"

Run(F5) ==================⇒>> Main() 

LIFO : last in first out

Think of a rugby scrum or a pack of cards 

```csharp
// snap code till lunch
// take numbers as an array 10 20 30 40
int[] array = new int[] { 10, 20, 30, 40 };
// create a list, multiply by 10       100 200 300 400
var list = new List<int>();
foreach(var item in array) { list.Add(item*10); }
// create a queue, add 1               401   301   201  101 ===>
var queue01 = new Queue<int>();
foreach(int i in list) {
    queue01.Enqueue(i + 1);
}
var stack01 = new Stack<int>();
// create a stack, add 2   
while (queue01.Count > 0)
{
    stack01.Push(queue01.Dequeue() + 2);
}
var total = 0;
foreach(var item in stack01)
{
    total += item;
}
// what's the sum?
Console.WriteLine(total);  // 1012
```

# Exceptions

### Error

Error =⇒ error in logic by programmer.  This may not cause any visible consequences.  Code might appear to run fine.  This is why we run 'tests' to check if the output is correct

eg Bank =⇒ wrong interest rate!!!

### Exception

Code runs but when running, the code is unable to complete running, and crashes to an abrupt stop.

Unhandled exception  =⇒   User sees nasty code message on screen and program terminates

Handled exception  ...  try..catch..finally.....  deal with exception properly in our code.

'Graceful' handling ..

### Types Of Exception

DivideByZero

FileNotFound

IndexOutOfRange    array[n]      

StackOverflowException  

ArithmeticException

NullReferenceException        var x = null;     cw(x.Length)

# 

### Order Of Exceptions

We should put the most specific exceptions first and the general exception last.

The code will trigger the first exception that is valid,  then exit.

1. DivideByZero
2. Arithmetic
3. Exception

### Throwing An Exception

We can create and throw our own 'custom' exceptions

```csharp
try
{
    throw new Exception("Something terrible has happened");
}

catch(Exception e)
{
    Console.WriteLine(e);
    Console.WriteLine(e.Data);
    Console.WriteLine(e.Message);
}
```

### Nesting

It is common particularly in big applications to have nesting with try..catch

# Using A Library

Code in Windows can be stored in a .dll library file

To access this code we should

1) Project ⇒ References ⇒ Add ⇒ Find .dll in question

 2) Add 'using' to import library

In industry a good example would be a database made available through a library once, in multiple projects.

libary Northwind

  import  (public) Customers

Use Customers in multiple projects

# Testing

Testing has become 'mainstream' as it's a core part of every development workflow.

Testing has 3 libraries

MSTEST    : Microsoft built-in testing framework

NUNIT      : Default 3rd party 

XUNIT       : Most recent testing framework

Testing 'mindset'

RED                    WRITE OUR TESTS FIRST SO THE TEST FAILS STRAIGHT AWAY.

GREEN               WRITE CODE TO PASS TESTS

REFACTOR          TWEAK CODE TO MAKE IT FASTER, MORE EFFICIENT, ETC

TDD                 Test-Driven Development                  :   Tests written in code

BDD                  Behaviour-Driven Development       :   

                               Analysis : Talk To Customer =⇒ LIST OF REQUIREMENTS (BACKLOG)

                               'Humanise' this list by turning them into 'USER STORIES'

                                         As an office administrator

                                        When I log in to the system

                                        I expect to see the home page 

                        Gherkin Syntax =⇒ turn BDD User Stories into C# Code Tests!

Why do we test?

Contract : prove done our work

Test can PROVE IN WRITING what work we have done

Code coverage is % of our CODE BASE which has been covered by TESTS

Never a 100% guarantee of bug-free code

Mindset : helps coders focus on task at hand not generating fancy code.

Code =⇒ just to pass test, and no more.

Without this =⇒ danger =⇒ coders just LOVE TO CODE!!!  

     Business people can  meaningfully interact with coders without exactly knowing what coder is     

            doing 

      Create 'test scenarios' or 'test cases'  =⇒ non-programmers   

## Practicalities

New Project =⇒ Test      a) MSTEST  or   b) NUNIT    or    c) XUNIT

Run Tests 

Test ⇒ Test Explorer ⇒ Run all/selected tests

Method : Meaninful_Name_Like_This(){

// arrange

// instantiate any class 

// state expected outcome

// act : run code

// assert : actual = expected ????

}

# SQL

Random Intro

SQL : Microsoft

MySQL : Open Source

SQL Structured Query Language

Relational Database

Tables

Primary Key ID

ForeignKey ID

... query .... as  alias    where alias is short name

..customers as c ...   

CRUD  Create Read Update Delete

     SQL       Insert Select Update Delete

# SQL Command Types

### DML Data Manipulation Language

SELECT

INSERT

UPDATE

DELETE

### DDL Data Definition Language

CREATE                  db/table 

ALTER

DROP

TRUNCATE 

### DCL Data Control Language

GRANT        permission 

REVOKE

### TCL Transaction Control Language

COMMIT         100%

ROLLBACK       0%

SAVEPOINT       middle

# Create DB

```sql
use master
drop database test01
go
create database test01
go

create/drop database [dont use spaces for database names]

```

# Create Table

```sql
/* use this database */
use test01
create table table_01(
	name VARCHAR(10),
	description VARCHAR(30)
)
```

# Data Types

big int  

bit  1/0

char    one character

nchar   5 =⇒ fixed width of 5 characters only ( Northwind CustomerID)

nvarchar(50);    variable up to 50 max

BLOB      Binary Large Object   =⇒ NOT   text!!!       

                                    YES   audio MP3  picture JPG  movie   MP4 etc  ... large 

                              files  BINARY files where content not text ie not human readable

# SP_HELP    :   get metadata

```sql
sp_help table_01
```

# Sysdatabases

Can query all of the databases on your server

```sql
select * from sysdatabases
```

# DROP : removes item

drop database mydb

drop table mytable

# ALTER

```sql
ALTER TABLE table_01 ALTER COLUMN description VARCHAR(50) NOT NULL;
ALTER TABLE table_01 ADD age INT;
ALTER TABLE table_01 ADD dateofbirth DATETIME;
select * from table_01
```

# INSERT

```sql
INSERT INTO table_02 VALUES ('1','BOB','2019-01-01 05:22:01.123')

/*  new record no name */

INSERT INTO table_02 (id,date_of_birth) VALUES ('2','2019-01-01 05:22:01.123')

select * from table_02
```

# NULL and NOT NULL

```sql
create table table_02(
	id int NOT NULL,
	name nvarchar(50) NOT NULL,
	date_of_birth DATETIME NULL
)
```

# IDENTITY PRIMARY KEY

```sql
UNIQUE will force a unique value to be allocated to this field

IDENTITY also will permit auto-increment of a numeric index 
primary key, without user specifying the index value

create table table_02(
	id int NOT NULL IDENTITY,
	name nvarchar(50) NOT NULL,
	date_of_birth DATETIME NULL
)
INSERT INTO table_02 VALUES ('BOB','2019-01-01 05:22:01.123')
INSERT INTO table_02 (name,date_of_birth) VALUES ('tim','2019-01-01 05:22:01.123')
INSERT INTO table_02 (name) VALUES ('paula')
```

# UPDATE

### Care !!!  If you OMIT 'WHERE' THEN YOU WILL UPDATE EVERY RECORD

```sql
UPDATE table_02 set ishappy='false' where id=3

select * from table_02
```

# Normal Form

Considerations when building a database

Extreme care has to be taken to avoid the scenario where there are duplicate instances of the same data kept independently in the database

Customer George : Phone 123456

Supplier GoodFoods with Contact George Phone 123456   

Normalising a database is ensuring data is kept as non-duplicating values

3 stages

### 1st Normal Form

Ensures 1 data item per data field eg Mobile phone field can contain only 1 mobile number

### Second Normal Form

All non-key fields are dependent on primary key

### Third Normal Form

All non-key fields don't have any inter-dependence with each other

# Foreign Key

Used when have 2 tables and want to build in inter-relationship

```sql
drop database if exists taskDB
drop table if exists Tasks
drop table if exists Categories

create database taskDB

create table Categories(
	CategoryID INT  IDENTITY PRIMARY KEY,
	CategoryName nvarchar(50) NOT NULL
)

create table Tasks(
	TaskID INT IDENTITY PRIMARY KEY,
	Description nvarchar(50) NULL,
	Done BIT NULL,
	CategoryID INT NULL,
	FOREIGN KEY (CategoryID) REFERENCES Categories (CategoryID)
)
```

# Select   *  ,   Count(*)

```sql
select * from Employees where city = 'London'
select COUNT(*) from Employees where city = 'London'
select * from employees
select * from Employees where TitleOfCourtesy = 'dr.'
select * from Products where Discontinued=1
select count(*) from Products where Discontinued=1
```

# Top

```sql
select TOP 15 * from customers ORDER BY ContactName Desc
```

# OrderBy

```sql
select TOP 15 * from customers ORDER BY ContactName Desc
```

# Where ... And

```sql
select * from products where discontinued=0 and categoryid=1
select * from categories
```

# Operators

```sql
SELECT ProductName, UnitPrice from Products
where UnitsInStock>0 and UnitPrice > 29.99 Order by UnitPrice

/* Product.   Price.   Quantity.    %Discount */
select *, unitprice * quantity as 'Gross Order' from [Order Details]
/* include discount */
select *, unitprice * quantity as 'Gross Order',
UnitPrice * Quantity * (1-Discount) as 'Net Order'
from [Order Details]
order by 'Net Order' desc
```

# Distinct

```sql
select distinct country from customers order by country desc
select count(country) from customers
select count(distinct country) from customers
select distinct city from customers order by city desc
```

# LIKE   to search within a string and % as wildcard

### %     matches 0 or more entries

LIKE [ABC]%       will return all matches starting with A or B or C

LIKE [^ABC]%     will return matches NOT starting with A or B or C

LIKE  'abc%'       starts with   abc

```sql
select * from products where productname like 'ch%'    // starts with
select * from products where productname like '%ch%'   // contains

select * from products where productname like '[ABC]%'      // starts with A/B/C
select * from products where productname like '[^ABC]%'      // not starts with A/B/C

```

# Using _ underscore to represent single characters

We can specify result length using the underscore character to represent individual letters

LIKE 'ch__'   return  only CHAI

.

# IN

Use in place of 'OR' to select specific values

```sql
select * from Customers where region in ('BC','SP','OR')
```

# BETWEEN

```sql
/* BETWEEN  */
select * from Products where UnitsInStock between 0 and 30 order by unitsinstock desc
```

# Using mixed quotes in long queries   "    '  and also using literals in searches

Task : find items with ' in string

```sql
/* quoted identifier - find items with ' in string */
SET QUOTED_IDENTIFIER OFF
SELECT * FROM Products where ProductName Like "%'%"
```

# AS : changing the output name

```sql
/* as */
select CustomerID as ID, Address + ', ' + City + ', ' + 
           Country as location from customers

Can omit 'as' 
```

# SELECT * .....IS NULL ...... IS NOT NULL......

# Aggregate Operators : Sum/Max/Min/Avg

```sql
# aggregate SUM, AVG, MIN, MAX, COUNT

/* # aggregate SUM, AVG, MIN, MAX, COUNT */
select avg(quantity) from [order details]
/* select  <<VERB>>(column) from table */
select count(orderID) as count,
sum(unitprice*quantity) as total,
avg (unitprice) as average,
min(unitprice) as min,
max(unitprice) as max
from [order details]
```

# Group By

```sql

# Group By

columns but summarising by a particular field

```sql
select * from products
/* can we list products by supplierID? */
select * from products order by SupplierID
/* statistics (sum, avg) per supplier?  */
select supplierid from products order by SupplierID
/* total units in stock per supplier? */
select supplierid, 
sum(unitsinstock) as Stock,
sum(unitsonorder) as OnOrder,
max(unitsonorder) as MaxOrder
from products 
group by supplierid order by stock desc

select 
avg(reorderlevel) as AvgReorder, 
categoryID 
from Products 
group by CategoryID 
order by AvgReorder desc

```
```

# Having

```
where ....  BEFORE GROUP BY

Group By ... Having
```

Order By

When we group by a certain column, calculating a statistical sum/avg/min/max etc

```
select 
avg(reorderlevel) as AvgReorder, 
categoryID 
from Products 
where .... 
group by CategoryID 
having avg(reorderlevel) > 10
order by AvgReorder desc
```

```sql
select * from products
/* can we list products by supplierID? */
select * from products order by SupplierID
/* statistics (sum, avg) per supplier?  */
select supplierid from products order by SupplierID
/* total units in stock per supplier? */
select supplierid, 
sum(unitsinstock) as Stock,
sum(unitsonorder) as OnOrder,
max(unitsonorder) as MaxOrder
from products 
group by supplierid order by stock desc

select 
avg(reorderlevel) as AvgReorder, 
categoryID 
from Products 
group by CategoryID 
having avg(reorderlevel) > 10
order by AvgReorder desc
```

# Order Of SQL Query Syntax

```sql

# Test Revision : Order of SQL query items

Select..
Distinct..
From ..
Where..
	Group By ..   Having ..(cumulative field)
Order By ... (single-indexed field)
```

# Joining 2 Tables

Inner Join is the INTERSECTION OF TWO DATA SETS where AT LEAST ONE MATCH IN BOTH TABLES

Left Join (Left Outer Join) FULL LEFT DATA SET plus items from RIGHT where requested

Right Join (Right Outer Join) FULL RIGHT DATA SET plus items from LEFT where requested

Full Join (Full Outer Join) ALL RECORDS FROM BOTH SETS. IF RIGHT ITEM DOES NOT EXIST, RETURNS NULL FOR THAT LEFT DATA SET.

```sql
# Inner Join

/* products grouped by supplier id */
select p.SupplierID, companyname, AVG(Unitsonorder) as 'AverageOrder'
From Products p
Inner Join Suppliers s on p.SupplierID = s.SupplierID
Group by p.SupplierID, companyname
having AVG(unitsonorder) > 0
order by AVG(unitsonorder) desc	

# Other Joins

/* all products with every supplier for every product  LEFT JOIN */
select * from products 
left join suppliers on products.SupplierID =  Suppliers.SupplierID
order by productid

select * from products 
right join suppliers on products.SupplierID =  Suppliers.SupplierID
order by productid
```

# Join 3 Tables

```sql
# join 3 tables
products * + (supplier) companyname + (category) categoryname (ie category of supplier)
inner join

```sql
select * from categories 
select productid, productname, companyname as 'suppliername', 
                                categories.categoryid as id, categoryname
from products
inner join suppliers on products.SupplierID=suppliers.supplierid
inner join categories on products.CategoryID = categories.CategoryID
```
```

# SQL Project

# SQL Exam

[SQL Exam - 2 Hours](https://www.proprofs.com/quiz-school/story.php?title=sql-exam-2-hours)

```sql
/* comment */

/* Exercise 1 */

/* 1.1 */

/* 1.2 */

/* 1.3 */

/* 1.4 */

-- 1.5
```

# Raw SQL with C#

using System;
using System.Data.SqlClient;
using System.Collections.Generic;
using [System.IO](http://system.io/);
using System.Data;

namespace lab_68_SQL_CRUD_App_with_Raw_CSharp
{
class Program
{
static void Main(string[] args)
{
List<Customer> customers = new List<Customer>();

```
Console.WriteLine(Environment.GetEnvironmentVariable("windir"));
         Console.WriteLine(Environment.GetEnvironmentVariable("PhilsSecretPassword"));
        var secret = Environment.GetEnvironmentVariable("PhilsSecretPassword");

        var connectionString = $"Data Source=localhost, 1433;User ID=SA;Password={secret};Connect Timeout=30;Initial Catalog=Northwind;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
        Console.WriteLine(connectionString);

        using (var connection = 
            new SqlConnection(connectionString)) {
            connection.Open();
            Console.WriteLine(connection.State);

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
            //    int affected = command.ExecuteNonQuery();
           //     Console.WriteLine($"{affected} records added to the database");
            }

            // SQL UPDATE : SAME  EXCEPT UPDATE CUSTOMERS SET CITY='berlin' WHERE CUSTOMERID='abcde'

            string sqlUpdate = $"UPDATE CUSTOMERS SET city='rome' 
WHERE CustomerID='ABC06'";
            using (var command = new SqlCommand(sqlUpdate, connection))
            {
                int affected = command.ExecuteNonQuery();
                Console.WriteLine($"{affected} records have been updated");
            }

            
            

            // SQL DELETE : SAME EXCEPT DELETE FROM CUSTOMERS WHERE ...

            string sqlDelete = $"DELETE FROM CUSTOMERS WHERE 
            CustomerID='ABC06'";

            using (var command=new SqlCommand(sqlDelete, connection))
            {
         //       int affected = command.ExecuteNonQuery();
        //        Console.WriteLine($"{affected} records deleted");
            }

            // create a method string RandomCustomerIDGenerator(){} which returns a 5 digit string of 5 
            // random alpha-numeric characters.  I think the first character has to be alpha not numeric

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
```

}

# SQLite

SQL : requires a BIG server to run
SQLite : mini database which runs fine on a mobile phone or tablet with minimal memory consumption

Download and install SQLite

Using command line today

GUI tool (just for info) SQLiteStudio

## Summary of all commands

sqlite3	check if installed
sqlite3 my.db	create database
sqlite3 Northwind.db < InstallNorthwind.sql	create SQLite Northwind from script

.databases	show all
.open my.db	open for editing
.tables	show all in this database

### Output

.mode	list / column / tabs
.output output.txt to file

exit / quit .quit

### Data Types

```
int
varchar
text
real
```

### Create Tables

```
create table Table01 (field1 smallint, field2 varchar(10));
```

### Insert Data

insert into Students values (1,'posh bob');

### AutoIncrement

create table Students (id integer primary key, name varchar(50));

insert into Students (name) values ('mega-posh anthony the third');

### Back up your database to a file

sqlite3 Northwind.db .dump > backupNorthwind.sql

# Entity

# Entity Database First

With traditional Entity 'Framework' (commonly called EF6 or Entity Framework 6) we can use the database and from it, generate our C# code classes eg Customers.  We see these inside the .edmx root container which will contain the visual relationships between our database tables, also the detail of each table.

# Entity CRUD app with Create, Update, List, Delete

Use standard (Framework) Entity. 

Use Database First Northwind

```json

```

# Entity Code First

With Entity Core there are fewer libraries to work with.  Sometimes we have to do more work to build the same structure.

Entity 'Code First' works particularly well with .NET Core (much smaller and lighter).  

With Entity 'Code First' we build 1) Classes 2) Database name and path and connection string.  When we run the app the code will trigger and build our database for us.

# Entity Code-First Migrations

Another help within Code-First Entity is the ability to upgrade our database.

We can make changes IN CODE and push the changes TO THE DATABASE.

This works also when publishing to Azure.

Commands to run are

```json
Tools => Nuget => Package Manager Console

enable-migrations              (just do this command once)

For each database change we also type

Add-Migration  feature-change-01
Update-Database

Add-Migration  feature-change-02
Update-Database

Add-Migration  feature-change-03
Update-Database
```

Tip : for our MVC application the quickest way to implement the changes is to do the following

1) Delete controller which maps to old database structure

2) Create new controller from scratch from new database table.

# LINQ databases

Microsoft created LINQ for easy access to databases of different types

Two types of LINQ

1) Query Comprehension

2) Lambda Extension Methods

# LINQ Simple Queries : Comprehension Syntax

```json
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
```

# JOIN 2 tables

```json
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
```

# Linking Tables with .dot syntax

```json
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
```

# LINQ Lambda Notation

Lambda notation uses an arrow   ⇒   function  to represent a method which we have been using in a foreach loop

```json
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
```

# ForEach

foreach (var item in databaselist){

// use item

}

databaselist.ForEach(  item ⇒  // use item 

```json

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
```

# Statistical expressions eg Sum, Min, Max, Average, Count

```json
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
```

# Further Work In LINQ

# OrderBy..ThenBy

# Array.ForEach

# Skip()  .. Take()

# Contains .... use as a simple 'LIKE'

```json
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
```

```csharp
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
```

# Events And Delegates

# Events

With OOP we have EVENTS which are a great way for the END USER VIA THE GUI to interact with the application.

Standard button click

```
Button01_click(object sender, eventArgs e){

}
```

Events call one or more methods

```
But!  Don't call methods DIRECTLY

Call Methods indirectly via a Method Placeholder Object, called a DELEGATE

DELEGATE is PLACEHOLDER OBJECT which POINTS to ONE OR MORE METHODS

	Restriction is that ALL METHODS MUST HAVE SAME INPUT/OUTPUT TYPES

		Action Delegate      void DoThis(){  // action code, no return type } 
							 int DoThis(){   return -1;  }
							 bool DoThis(string y){}

				SPECIFICATION IS MIX OF INPUT/OUTPUT PARAMETERS

				SIGNATURE IS NAME + OUTPUT PARAMETERS

1) Declare DELEGATE object which match GIVEN METHOD SPECIFICATION (INPUT/OUTPUT)

		delegate void delegate01();

				METHODS MUST HAVE FORM   void DoThis();    void DoThat();  

2) Declare EVENT and restrict using DELEGATE type 

3) EVENT += METHOD01;
   EVENT += METHOD02;
   EVENT += METHOD03;
   EVENT += METHOD04;

   Note : NUGET PACKAGES : ADD LIVE AT RUNTIME
      =>  DELEGATES : METHODS CAN BE ADDED/REMOVED AT RUNTIME (THINK PLUGIN)

   EVENT -= METHOD01;
```

a) TRIVIAL WALKTHROUGH

```csharp
using System;

namespace lab_60_events_trivial
{
    class Program
    {
        // delegate (restriction on method types)
        public delegate int Delegate01(string x);
        // event
        public static event Delegate01 Event01;
        static void Main(string[] args)
        {
 
        }

        static int Method01(string input)
        {
            Console.WriteLine("hey are you printing something?");
            Console.WriteLine(input);
            return input.Length;
        }
        static int Method02(string input)
        {
            Console.WriteLine("hey are you 2 printing something?");
            Console.WriteLine(input);
            return input.Length;
        }
    }
}
```

b) OOP WALKTHROUGH

```
using System;

namespace lab_61_events_OOP
{
class Program
{
static void Main(string[] args)
{

/*Scenario : Child will have a birthday
                    Birthday is the EVENT
                    HaveAParty is the METHOD
                    We attach to an OOP INSTANCE ie var james = new Child();

         */
        var James = new Child();
        for (int i = 0; i < 12; i++)
        {
            James.Grow();
        }

    }
}

class Child
{
    public delegate int BirthdayDelegate();    // matches HaveAParty()
    public event BirthdayDelegate OneMoreYearOlder;
    public int Age { get; set; }

    public Child()
    {
        Age = 0;
        Console.WriteLine($"Congratulations on the birth of your new baby!  Age is {Age}");
        OneMoreYearOlder += HaveAParty;   // event is now not null
    }

    public void Grow()
    {
        // call the event
        OneMoreYearOlder();
    }

    public int HaveAParty()
    {
        Age++;
        Console.WriteLine($"Celebrating Birthday : Age is now {Age}");
        return Age;
    }
}
}
```

# Tasks

# Tasks

Synchronous code runs line by line. It waits for the next statement.

```
If one line takes a long time, the whole program 'hangs'.  

The user experience can be very poor with synchronous applications.

Web application : does not look good if user staring at a blank screen for x seconds

Common now for both back-end and front-end code to integrate ASYNCHRONOUS CODE

	Main(){                 main thread

		Task() 				sub-threads
		Task()
		Task()

	}   

			CPU of computer will manage all threads.
			Programmer does not need to manage the threads; just call them.

			Old computing ==> THREADS : programmer management
			New computing ==> TASKS   : call threads for you, manage 'headache' for 							you
```

Topics today
Basic task
Array of multiple tasks
Wait for ONE OR ALL tasks in array to finish
Parallel FOR LOOP, FOREACH LOOP, LINQ QUERY OVER COLLECTION

Background terms

```
Process					running .exe on your computer.
						View with TASK MANAGER or Get-Process

Thread 					Group of instructions/code sent to CPU for processing
						at one time.

Assembly Code 			RAW instructions sent line by line into CPU for execution
Machine Code 			Same as assembly language, IN HEX
Instruction set 		Set of commands which a CPU has been programmed to execute
						It's like the INPUT/OUTPUT rules and operations which a 
						CPU can execute

Service 				Code which runs AT COMPUTER STARTUP REGARDLESS IF USER
							IS PRESENT OR NOT

Application 			Code which runs AFTER A USER LOGS IN
							Automatic eg Skype
							Manually triggered
```

# Running A Task

```
using System;
using System.Diagnostics;
using System.Threading.Tasks;
using System.Threading;

namespace lab_72_tasks
{
    class Program
    {
        static void Main(string[] args)
        {
            // OLD
            var ActionMethod01 = new Action(DoThis);
            var task01 = new Task(ActionMethod01);
            task01.Start();

            // OLD
            // HEY COMPUTER PLEASE CREATE A BACKGROUND TASK, AND, WHENEVER THE CPU HAS RESOURCES AVAILABLE, RUN THIS TASK. PLEASE.  THANKS!
            // CPU : HEY, NO PROBLEM.  
            

            var task02 = Task.Factory.StartNew(
                        // PLACEHOLDER FOR A METHOD
                        // DELEGATES WHICH ARE PLACEHOLDERS FOR METHOD
                       () => { Console.WriteLine("Inside Task02 which is called by Task Factory"); }
                );

            // ALMOST CURRENT
            var task03 = new Task(
                () => { Console.WriteLine("In task 03"); }
                );
            task03.Start();

            // DO THIS WAY
            var task04 = Task.Run(
                () => {
                    Console.WriteLine("In task 04 - use this way to create and run tasks" );
                    DoThis();
                }
            );

            // hang the program so it does not terminate
            Console.WriteLine("The program has finished");
            Console.ReadLine();
        }

        static void DoThis()
        {
            Thread.Sleep(10);
            Console.WriteLine("I am doing something");
        }
    }
}
```

# Running an Array of tasks eg an overnight batch job which has a number of tasks to

execute. For example overnight data processing or running backups.

```
Array of tasks ==> processing can be done IN PARALLEL IE NOT SEQUENTIAL.
```

```
using System;
using System.Threading.Tasks;
using System.Threading;
using System.Diagnostics;

namespace lab_73_array_of_tasks
{
    class Program
    {
        static void Main(string[] args)
        {
            var s = new Stopwatch();
            s.Start();
            var taskArray = new Task[3];
            taskArray[0] = Task.Run( () => {
                Thread.Sleep(100);
                Console.WriteLine($"Task 0 done at {s.ElapsedMilliseconds}");
            });
            taskArray[1] = Task.Run( () => {
                Thread.Sleep(50);
                Console.WriteLine($"Task 1 done at {s.ElapsedMilliseconds}");
            });
            taskArray[2] = Task.Run( () => {
                Thread.Sleep(25);
                Console.WriteLine($"Task 2 done at {s.ElapsedMilliseconds}");
                var taskNested = Task.Run(() => { Console.WriteLine("nested task inside task 2"); });
            });

            // WAIT FOR ONE TO TERMINATE FIRST
        //    Task.WaitAny(taskArray);

            // WAIT FOR EVERY TASK
            Task.WaitAll(taskArray);

            // hang
            Console.WriteLine($"Task terminated at {s.ElapsedMilliseconds}");
            Console.ReadLine();

            

        }
    }
}
```

### Returning a value from a task

It's important to realise in a GUI environment the sub-task can't immediately communicate with the parent main thread.

Can return data from task

```
using System;
using System.Threading.Tasks;
using System.Threading;
using System.Diagnostics;

namespace lab_73_array_of_tasks
{
    class Program
    {
        static void Main(string[] args)
        {
            var s = new Stopwatch();
            s.Start();
            var taskArray = new Task[3];
            taskArray[0] = Task.Run( () => {
                Thread.Sleep(100);
                Console.WriteLine($"Task 0 done at {s.ElapsedMilliseconds}");
            });
            taskArray[1] = Task.Run( () => {
                Thread.Sleep(50);
                Console.WriteLine($"Task 1 done at {s.ElapsedMilliseconds}");
            });
            taskArray[2] = Task.Run( () => {
                Thread.Sleep(25);
                Console.WriteLine($"Task 2 done at {s.ElapsedMilliseconds}");
                var taskNested = Task.Run(() => { Console.WriteLine("nested task inside task 2"); });
            });

            // WAIT FOR ONE TO TERMINATE FIRST
        //    Task.WaitAny(taskArray);

            // WAIT FOR EVERY TASK
            Task.WaitAll(taskArray);

            // hang
            Console.WriteLine($"Task terminated at {s.ElapsedMilliseconds}");
            Console.ReadLine();

            // RETURN DATA FROM A TASK

            // Generics     Task<T>    T is the TYPE of DATA TO RETURN

            var taskGiveMeDataBack = Task<string>.Run(
                () => { Console.WriteLine("task is running");
                    return "Task has completed";
                }

                );

            Console.WriteLine(taskGiveMeDataBack.Result);

        }
    }
}
```

# Async and Await

## Async and Await

Synchronous code

```
line 1
line 2
line 3
loop this takes 10 seconds
.........
line 5
finish
```

Asynchronous code

```
Main() thread      talking to CPU  as a .exe process which can view in Task 					Manager on computer  (get-process in Powershell)

Create a sub-thread which runs in background.  Operating system handle
		resources for this independently to main thread.

				(( Chome : multiple instances ))
```

C# async model

```
Convention : all methods END with ....Async

// method marked Async
Async void GetDataAsync(){
	await ReadLineAsync()...          line marked await ... long operation
}
```

```sql
using System;
using System.IO;
using System.Diagnostics;
using System.Text;

namespace lab_50_async
{
    class Program
    {
        static void Main(string[] args)
        {
            var counter = 0;
            // create a big text file
            // use 'streamwriter' to write a string as a stream to a file
            //using (var writer = new StreamWriter("data.dat"))
            //{
            //    writer.WriteLine($"{counter,-5} new line {DateTime.Now}");
            //    writer.WriteLine($"{counter,-5} new line {DateTime.Now}");
            //    writer.WriteLine($"{counter,-5} new line {DateTime.Now}");
            //    for(int i = 0; i < 10_000_000;i++)
            //    {
            //        writer.WriteLine($"{i,-5} new line {DateTime.Now}");
            //    }
            //}

            ReadDataSync();

            ReadDataAsync();

            while (true)
            {
                System.Threading.Thread.Sleep(100);
                Console.WriteLine("main loop working!");
            }

        }

        static void ReadDataSync() {
            var s = new Stopwatch();
            s.Start();
            // using can encapsulate a method which is reaching outside of the  clean
            // C# runtime.  
            // Reading a file from Windows / Database SQL read
            // include a 'close()' method in it.

            // STRINGBUILDER can be used to EASILY CONSTRUCT A LONG STRING from
            // lots of little inputs.
            var stringbuilder = new StringBuilder();
           // string longstring = "";
            using (var reader = new StreamReader("data.dat")) {
                while (!reader.EndOfStream)
                {
                    stringbuilder.Append(reader.ReadLine());
                   // longstring += reader.ReadLine();
                }
            }
            s.Stop();
            Console.WriteLine($"Reading 10,000,000 lines took {s.ElapsedTicks}");
            System.Threading.Thread.Sleep(1000);
           // Console.WriteLine(stringbuilder);
        }

        async static void ReadDataAsync()
        {
            var s = new Stopwatch();
            s.Start();
            string line = null;
            var stringbuilder = new StringBuilder();
            using (var reader = new StreamReader("data.dat"))
            {
                while (true)
                {
                    line = await reader.ReadLineAsync();
                    if (line == null)     break;
                    stringbuilder.Append(line);
                }
            }
            s.Stop();
            Console.WriteLine(s.ElapsedMilliseconds);

        }
    }
}
```

# Encoding, Streaming And Serialisation

Ecoding

Encoding means to 'lay down information in a certain format so that another computer program or application can understand the data inside'

```
Files ==> Write to (hard) disk

	SOF start of file
	SIGNATURE at start which signifies the type of file
		DOCX		Signature is same as ZIP   504b0304
		JPG			Signature is  FFD8  (View with HEX EDITOR)
		PNG
		MOV

	EOF end of file

	HEXADECIMAL EDITOR ==> RAW VIEW OF ACTUAL BYTES OF A FILE

		VISUAL STUDIO
		NOTEPAD++
		HEX EDITOR APPLICATION
```

Encoding
ASCII
UTF8
UTF16
UNICODE

```
Americans first to create computers : EN-US is base computer language

How to communicate simple letters????

	H
	h
	2

	ASCII American Standard Code For Information Interchange

	0 to 127 for critical characters

	0 to 31 : non printing
	31 onwards : letters and numbers

	J    74

0 to 127 takes only 7 bits ie

min 0000000   0
max 1111111   127

						64	32	16	8	4	2	1
						1	1	1	1	1	1	1   = 127

UTF-8 is simply ASCII with an extra (placholder) bit

	ASCII    J   74    1	0	0	1	0	1	0
	UTF8            0  1	0	0	1	0	1	0

	Web is built on UTF8  (GetBootstrap.com => Starter => META TAG)

UTF-16

	The only problem with UTF-8 and ASCII is that they are focused on simple, 
	American English.  

	How then do we communicate other languages?  German, French, Russian all have
		extra characters not in standard US English.

	UTF8 is 8 BITS = 1 BYTE

	UTF16 is 16 BITS = 2 BYTES (double the memory per character)
```

Streaming and Serialisation

```
IKEA furniture										OOP

	1. Build furniture (from instructions)    		Class Customer
													==> Instantiate customer instance
													(build object)
	2. Assemble in store							

	3. Customer View 								view object (instance)

	4. Request for item sent to home address        Serialise customer instance into
		((flat pack the furniture ready for 		series of 1's and 0's ready
		sending ))									to send across internet (in order)

	5. Posted 										Streaming  
			single item -> one package 					small item => send as one packet
															(TCP/IP)
			large items -> multiple packages        	large item (movie) => send
															as multiple items of 
															consistent size "buffer"

	6. Received	

	7. Assembled (using instructions)				De-serialise our customer stream
													back into customer again (using
													customer class)
```

Serialisation

```
class Customer {}

instance c = new Customer();

	c.Name...
	c.Company..
	c.City...

serialise into 10101001010101010101010010111010010   (flat pack the data)

send (stream) data in blocks of (buffer) size      

receiving end

deserialise 101010100110 back into instance again, using Class Customer so we know
										which data goes in which field.
```

Streaming Types

```
When we stream data we (in general) have 2 types of data

1. Character stream

	Text file "this is a text message"  ==> send as character stream
	Http web
	Config
	Javascript
	CSS
	JSON ==> Javascript data              {"field":"value"}
	XML  ==> text database with structure <root><sub>data</sub></root>

2. Binary stream

	Movie
	Audio
	Images 
	.exe
	.dll
	.app  IOS
	.apk  Android

		Sending without conversion the exact replica of 1/0 from the binary file,
		through internet.

		Large files : split into units call 'buffer' size

			var buffer = new byte[4096]

	Binary is used also in Encryption
	
		Computer ===> Unlock keys stored in memory (RAM)

		Code     ===> send data to RAM for unlocking     ==> MEMORY STREAM, fast RAW BYTES

	File Streaming to filing system ==> can be either TXT or Binary depending on file
```

Streaming Summary
Characters
http://
https://
ftp://
smtp:// email
pop://
imap://
dns
dhcp
File
.txt => character
.exe => binary
Memory
binary (encryption)

Notes

```
1.   Passwords  ==> SecureString     (partially secure)

2.   Sending binary files across internet ==> CAN CONVERT TO CHARACTERS FIRST, THEN SEND, THEN ON RECEIPT 
												CONVERT BACK.

			binary 1010101010   ==>   base64   dci3diasfrew     ==>  binary 1010101010
```

```csharp
using System;
using System.IO;
using System.Diagnostics;
using System.Text;

namespace lab_62_streaming
{
    class Program
    {
        static void Main(string[] args)
        {
            var s = new Stopwatch();
            s.Start();

            // stream to WRITE A FILE
            using (var writer = new StreamWriter("output.txt"))
            {
                for (int i = 0; i < 10000; i++)
                {
         //           writer.WriteLine($"Line {i} - adding some text {DateTime.Now} : elapsed time {s.ElapsedTicks}");
                }
            }
            s.Stop();
            // 19ms
            // 24ms
            // 38ms
            // 0.013_349_2

            var t = new Stopwatch();
            t.Start();
            // see if string builder a bit faster???
            var stringbuilder = new StringBuilder();
            for (int i = 0; i < 10000; i++)
            {
                stringbuilder.Append($"Line {i} - adding some text {DateTime.Now} : elapsed time {t.ElapsedTicks}\n");
            }
            using (var writer = new StreamWriter("output2.txt"))
            {
          //      writer.WriteLine(stringbuilder);
            }
            t.Stop();

            // 9ms
            // 16ms
            // 20
            // 0.007_407_4   7ms

            var u = new Stopwatch();
            u.Start();
            string nextline;
            var stringbuilder2 = new StringBuilder();
            using (var reader = new StreamReader("output.txt"))
            {
                // two operations 1) read next line and assign into string 'nextline'   2) check has not returned null
                while ((nextline = reader.ReadLine()) != null)
                {
                    stringbuilder2.AppendLine(nextline);
                }
            }
            Console.WriteLine($"read file to memory {u.ElapsedTicks}");

            Console.WriteLine(stringbuilder2);
            Console.WriteLine($"output file to console {u.ElapsedTicks}");
            u.Stop();
                // 0.000_900_0    0.9 milliseconds
                //  1.3ms
                //  4
             Console.ReadLine();

            // stream reader async

        }
    }
}
```

# Streaming From Http Web

```csharp
using System;
using System.Net;
using System.Diagnostics;

namespace lab_63_web_streaming
{
    class Program
    {
        static void Main(string[] args)
        {
            // read a web page
            Uri bbcNews01 = new Uri("https://www.bbc.co.uk/sport");

            // URI Uniform resource IDENTIFIER     - more general pointer        
            // URL Uniform resource LOCATOR        - more specific

            Console.WriteLine(bbcNews01.Host);
            Console.WriteLine(bbcNews01.Port);
            Console.WriteLine(bbcNews01.AbsolutePath);

            // download this file 

            var s = new Stopwatch();
            s.Start();
            GetWebPageSync();
            s.Stop();
            Console.WriteLine(s.ElapsedMilliseconds);

            var t = new Stopwatch();
            t.Start();
            GetWebPageAsync();
            t.Stop();
            Console.WriteLine(t.ElapsedMilliseconds);

            Console.ReadLine();

        }

        static void GetWebPageSync()
        {
            var downloadWebPage01 = new WebClient { Proxy = null };
            var albarahi = new Uri("http://www.albahari.com/nutshell/code.aspx");
            downloadWebPage01.DownloadFile(albarahi, "albahari.html");
            Process.Start
(@"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe", "albahari.html");
        }

        async static void GetWebPageAsync()
        {
            var downloadWebPage01 = new WebClient { Proxy = null };
            var albarahi = new Uri("http://www.albahari.com/nutshell/code.aspx");
            await downloadWebPage01.DownloadFileTaskAsync(albarahi, "albahari.html");
            Process.Start(@"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe", "albahari.html");
        }

        // NOTE : WEBCLIENT
        // NOTE : HTTPWEBREQUEST/RESPONSE GIVE MORE DETAIL / PREFFERED TO USE 

    }
}

/
```

# Serialisation

Class eg Customer

```
Instantiate 10 customer objects cust01, cust02 etc

	Data now held as 10 instances.

	Send data across world

		USE XML      web - Microsoft 
		OR  JSON     web 

1) decide which fields are SERIALIZABLE (we are going to send)

		(may be some fields are private; don't wish to send)

2) SERIALISE INTO A STREAM (LINEAR FLOW OF INFORMATION IN A SET ORDER)

3) SEND DATA USING STREAMING

		Streaming : let OS and Networking 'stack' of protocols handle
		the tough bits of keeping track of which packets sent in which order

4) RECEIVE STREAM AT OTHER END

5) DE-SERIALIZE STREAM BACK INTO CLASS INSTANCE OBJECTS
```

Serialize to
1) BINARY .BIN .EXE
2) XML
3) JSON

[.....] => Data Annotations (meta-data above a class for internal use)
Class X

[Serializable] ==> can serialize and send
Class Customer{
CustomerID
ContactName

```
[NonSerialized]  		==> opt-out 
private string NINO;
```

}

First example : Serialize to XML

```
using System;
using System.Runtime.Serialization.Formatters.Soap;
using System.IO;

namespace lab_64_serialize_xml
{
    class Program
    {
        static void Main(string[] args)
        {
            var c01 = new Customer(01, "fred", "3 the high st", "NT213B57");

            // XML Serialise into FILE STREAM 
            var formatter = new SoapFormatter();

            using (var filestream = new FileStream("data.xml",FileMode.Create,
                FileAccess.Write,FileShare.None))
            {
                // send data to file stream
                formatter.Serialize(filestream, c01);
            }

            Console.WriteLine(File.ReadAllText("data.xml"));

            // imagine on another computer : can we reconstruct instance???

            Customer customerFromXML;

            using (var streamreader = File.OpenRead("data.xml"))
            {
                // deserialize back into instance of class
                customerFromXML = formatter.Deserialize(streamreader) as Customer;
            }

            Console.WriteLine($"Reconstructed customer : {customerFromXML.CustomerID}" +
                $"{customerFromXML.CustomerName}{customerFromXML.Address}");
            Console.WriteLine($"NINO is blank !!! {customerFromXML.GetNINO()}");

            
        }
    }

    [Serializable]
    class Customer
    {
        public int CustomerID { get; set; }
        public string CustomerName { get; set; }

        public string Address { get; set; }

        [NonSerialized]
        private string NINO;

        // constructor
        public Customer(int customerid, string name, string address, string nino)
        {
            this.CustomerID = customerid;
            this.CustomerName = name;
            this.Address = address;
            this.NINO = nino;
        }

        // GetNINO(){}
        public string GetNINO()
        {
            return this.NINO;
        }

    }

}
```

## Serialise To JSON

JSON has SEVERAL LIBRARIES which can be used

System.Runtime.Serialization.Json

```
DataContractJsonSerializer
```

There are others as well

But actually what has taken off is a 3rd party library called 'NEWTONSOFT' to use for JSON

So we are going to do the NEWTONSOFT lab

```
using System;
using Newtonsoft.Json;
using System.IO;
using System.Collections.Generic;

namespace lab_65_serialise_JSON
{
    class Program
    {
        static void Main(string[] args)
        {
            var c01 = new Customer(01, "fred", "3 the high st", "NT213B57");
            var c02 = new Customer(01, "fred", "3 the high st", "NT213B57");
            var c03 = new Customer(01, "fred", "3 the high st", "NT213B57");
            var customers = new List<Customer>() { c01, c02, c03 };

            var JSONinstance01 = JsonConvert.SerializeObject(c01);
            File.WriteAllText("data.json", JSONinstance01);

            Console.WriteLine(File.ReadAllText("data.json"));

            var customerListAsJSON = JsonConvert.SerializeObject(customers);
            File.WriteAllText("customers.json", customerListAsJSON);
            Console.WriteLine(File.ReadAllText("customers.json"));

            // send data round world
            // at other end imagine now on different computer
            // read ONE CUSTOMER

            var customerFromJson =
                    JsonConvert.DeserializeObject<Customer>(File.ReadAllText("data.json"));

            Console.WriteLine($"Reconstructed customer : {customerFromJson.CustomerID}" +
                 $"{customerFromJson.CustomerName}{customerFromJson.Address}");
            Console.WriteLine($"NINO is blank !!! {customerFromJson.GetNINO()}");

            Console.WriteLine("\\n\\n== READ ARRAY OF CUSTOMERS ==\\n\\n");
            var customerArray =
                JsonConvert.DeserializeObject<List<Customer>>(File.ReadAllText("customers.json"));
            foreach (var c in customerArray)
            {
                Console.WriteLine($"Reconstructed customer : {c.CustomerID}" +
                                  $"{c.CustomerName}{c.Address}");
            }

        }

    }

    [Serializable]
    class Customer
    {
        public int CustomerID { get; set; }
        public string CustomerName { get; set; }

        public string Address { get; set; }

        [NonSerialized]
        private string NINO;

        // constructor
        public Customer(int customerid, string name, string address, string nino)
        {
            this.CustomerID = customerid;
            this.CustomerName = name;
            this.Address = address;
            this.NINO = nino;
        }

        // GetNINO(){}
        public string GetNINO()
        {
            return this.NINO;
        }

    }

}
```

# Serialise To Binary

```csharp
using System;
using System.Collections.Generic;
using System.Runtime.Serialization.Formatters.Binary;
using System.IO;

namespace lab_66_serialize_binary
{
    class Program
    {
        static void Main(string[] args)
        {
            var c01 = new Customer(01, "fred", "4 the high st", "NT213B57");
            var c02 = new Customer(02, "bob", "5 the high st", "NT213B57");
            var c03 = new Customer(03, "pat", "6 the high st", "NT213B57");
            var customers = new List<Customer>() { c01, c02, c03 };

            // performs the serialization
            var binaryformatter = new BinaryFormatter();

            // stream serialized data - to a File in this case but could be web or RAM (Memory)
            using (var binarystream = new FileStream("data.bin",
                  FileMode.Create,FileAccess.Write,
                FileShare.None))
            {
                // write data to file
                binaryformatter.Serialize(binarystream, customers);
            }

            Console.WriteLine(File.ReadAllText("data.bin"));

            // send data across world and de-serialize at the other end
            var customersFromBinary = new List<Customer>();
            using (var reader = File.OpenRead("data.bin"))
            {
                customersFromBinary = binaryformatter.Deserialize(reader) as List<Customer>;
            }

            // iterate and print out
            foreach (var c in customersFromBinary)
            {
                Console.WriteLine($"Reconstructed customer : {c.CustomerID}" +
                                  $"{c.CustomerName}{c.Address}");
            }

        }
    }

    [Serializable]
    class Customer
    {
        public int CustomerID { get; set; }
        public string CustomerName { get; set; }

        public string Address { get; set; }

        [NonSerialized]
        private string NINO;

        // constructor
        public Customer(int customerid, string name, string address, string nino)
        {
            this.CustomerID = customerid;
            this.CustomerName = name;
            this.Address = address;
            this.NINO = nino;
        }

        // GetNINO(){}
        public string GetNINO()
        {
            return this.NINO;
        }

    }

}
```

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

```
vm1   vm2   vm3

	=============hyper-v os=================

	        bare metal
```

Today - HyperV permits HARDWARE VIRTUALISATION where VM1/VM2/VM3 can interact directly with
underlying hardware eg CPU/RAM/HDD/NIC HDD = hard disk drive NIC = network card

Problem with VM is their size!!!!

```
Windows is easily 10GB+

	If you just want to run ONE APP this is a HUGE COST!
```

Containers were created (On LINUX) to allow

```
container1   container2   container3      

	=== kernel (core files of os)	===	
	=== host os   					===
	=== bare metal					===

	Containers share critical KEY OPERATING SYSTEM 'KERNEL' FILES / SUBSYSTEM, thus
	saving a lot of memory/hard disk space

			PARTY VENUE  ===>  TRADITIONAL VM IS LIKE EVERY PARTY HELD IN SEPARATE VENUE

								CONTAINERS  ==> PARTY SHARING ALL VENUE RESOURCES
```

Kubernetes is software (by Google?) now open source to manage multiple containers

Practical

1. Pull pre-made DOCKER IMAGE from internet which has SQL SERVER + NORTHWIND installed
2. Connect to it - simulate using a REAL SQL SERVER without the hassle

    a) [https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-2017](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-2017)

    b) Azure Data Studio

    c) Visual Studio

### Pull down Docker image running SQL Server

```
# pull down docker image
docker pull kcornwall/sqlnorthwind
```

### Run the Docker image

```
# create and start your docker image
docker run -d --name sql -p 1433:1433 kcornwall/sqlnorthwind

# check it's running
docker ps
# list all images, running or non-running
docker ps -a
```

### Starting and stopping a Docker image

```
# start image 
docker start sql 
# stop image
docker stop sql
```

# Connect To Northwind On Docker Using SMSS

### Connect to SQL Server on Docker using SMSS SQL Server Management Studio

If you have SQL Server Management Studio installed you can connect to your docker SQL server using the following

File, Connect Object Explorer

```
Server name 	localhost, 1433

Authentication  SQL Server

Login 			SA

Passsword 		Passw0rd2018

We are simulating a real environment where we would talk to an SQL server over the network.

We will find that exactly the same method may be used to connect to this server (and
		any SQL server) from SMSS, Azure Data Studio Visual Studio
```

# Connecting To SQL from raw C#

```
We have used the power of ENTITY FRAMEWORK to take away a lot of the headache of talking
	to an SQL server directly.

But today we are going to 'backtrack' into the SQL realm and create a CRUD app with
 C# to SQL without Entity.

 Blubay ==> method of access
```

# Connection String

```
Visual Studio
```

```
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
```

# Stored Procedures

As we can see, updating the database is a lot of work.

If we were running a loop we would need to pass in parameters to get this done.

Stored procedures allow us to have effectively a database method into which we add values, then
call the method

```
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
```

# XML

XML

We have already seen the basics of XML with our XML serialization to/from XML.

Now let's retract slightly and get XML working from raw C# code to create structures from scratch

```csharp
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
```

# XML reading from Northwind

We are now going to read XML data from Northwind.

We could use 'easy' Entity with .NET Framework but it's time to use the slightly harder Entity Framework Core to get the Northwind data

```csharp
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
```

# Entity In More Detail

# Entity

ACID
Database transactions need to be
A Atomic : ie single, entire, complete in their nature
C Consistent : ie start and end of transaction leaves database in coherent, consistent
state (ie all data in right relationship)
I Isolated : similar to atomic : transaction stands in its own right
Useful for HASHING which can provide an ID FOR THE TRANSACTION

D Durable - persist in database

```
Phil

MD5	
     d14ffd41334ec4b4b3f2c0d55c38be6f
     fdcffb2dda54dff940c0a541f1cee85c (name with space)
     dcd4936713c27cae72c65e90c1e60a66 (name with .)

SHA1 		e888d2bd6f13f82caa51a37c03d034c76f661ba3

SHA512 		055244bd6fc27c55e1ee33f71a0fd87e32bd9b1d
						19bd7ed636a6588b375a1e966a45c3e14707d4ea
						45ed35a13cd95fa7df420fa52cfbb190ee0497c9
						dbcc33fb

```

CRUD Create Read Update Delete

Snapshot - permit rollback if failure part way through

ERD Entity Relationship Diagram : Data + Relationship

UML Unified Markup Language : Data + Classes + Fields + Properties + Methods

```
draw.io ==> can be used to create high quality, sharable, free and can be saved
			offline or to Google Docs or other cloud drive
```

```powershell
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
        public virtual Category Category { get; set; }
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
            modelBuilder.Entity<Category>()
                .HasMany(c => c.Products)
                .WithOne(p => p.Category);

            modelBuilder.Entity<Product>()
                .Property(c => c.ProductName)
                .IsRequired()
                .HasMaxLength(40);

            modelBuilder.Entity<Product>()
                .HasOne(p => p.Category)
                .WithMany(c => c.Products);

        }
    }
}
```

# Environment Variables

```csharp
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
```

# ASP Websites

# Web Terms

ASP	Microsoft Website structure (old)
ASPX	New version of ASP (current)
ASP Core	cross-platform website
Razor	C# in HTML page
jQuery	Powerful library to rapidly develop Javascript apps. Fallen out of favour recently as newer technologies
pushed beyond jQuery
javascript	language which runs code IN BROWSER BY DEFAULT.
React	Build HTML pages using Javascript : push so user can view page. VIRTUAL HTML which can be modified very
quickly (VIRTUAL DOM)
DOM	HTML structure of page
Angular	Framework by Google for building data / websites
Vue	Recent addition : best of ANGULAR and REACT ==> rocketing in popularity
Asynchronous	background task
npm	Node Package Manager : arranges all of the LIBRARIES you are using in your NODEJS PROGRAM
(think of as NUGET FOR A JAVASCRIPT PROGRAM)
nodejs	Javascript running ON THE WEBSERVER.
Client : Browser (HTML + CSS + Javascript)
Server : runs Javascript Microsoft server : C#
Library	think NUGET : download and use other people's code
Module	Single block of code (testable as such) Export....(public properties exposed of this module)
Websockets	Layer on top of HTTP/HTML. Send data INSTANTLY OVER WEB with minimal overhead. NO 'HEADERS' SENT
ws:// wss://
http	Send data between two computers over the 'internet'
protocol ==> standard agreed so that 2 computers can send data in a fixed order
https	ENCRYPTED version of HTTP (hidden from prying eyes)
all of computers connected together into one 'mega-network' across world
computer---switch---router(gateway)----ISP(pay for a line)(router)--->general routers
across internet----->destination router--> destination network --> destination server
HTML	HTML : hypertext markup language
STRUCTURE OF PAGE : header, div, body, footer, navbar, tables
CSS	Cascading Style Sheets ==> visual aspect of page
API	get data from web in JSON {} format for processing
Application Programming Interface

# Structure of ASP website

Startup.js

```
Add 'services' which can affect whole of website

	services.AddMvc()
```

appsettings.json ==> CHANGE ON LIVE SITE WITH NO RECOMPILING

```
OLDER WEBSITE

	Web.Config (XML)  ==> CONNECTION STRING

NEWER

	appsettings.json  ==> CONNECTION STRING

CONSOLE APP

	App.Config        ==>   as above
```

wwwroot

```
PUBLIC FILES SENT TO CLIENT

	CSS styling
	JQUERY
	JS libraries
```

# Sample Website

```csharp
// Models : Database

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace lab_83_asp_core_add_records.Models
{
    public class Northwind : DbContext
    {
        public DbSet<Customer> Customers { get; set; }

        public Northwind() { }

        public Northwind(DbContextOptions options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string path = System.IO.Path.Combine(System.Environment.CurrentDirectory, "Northwind.db");
            optionsBuilder.UseSqlServer(@"Data Source=(localdb)\mssqllocaldb;" + "Initial Catalog=Northwind;" + "Integrated Security=true;" + "MultipleActiveResultSets=true;");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

        }

    }
}

// Model : Customer

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lab_83_asp_core_add_records.Models
{
    public partial class Customer
    {
        public string CustomerID { get; set; }
        public string CompanyName { get; set; }
        public string ContactName { get; set; }
        public string ContactTitle { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
    }
}

// Startup.cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using lab_83_asp_core_add_records.Models;
using Microsoft.EntityFrameworkCore;

namespace lab_83_asp_core_add_records
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });
            services.AddDbContext<Northwind>(options => options.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=Northwind;Trusted_Connection=True;MultipleActiveResultSets=true"));

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();

            app.UseMvc();
        }
    }
}

// Views : View all customers

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using lab_83_asp_core_add_records.Models;
using Microsoft.EntityFrameworkCore;

namespace lab_83_asp_core_add_records.Pages
{
    public class AllCustomersModel : PageModel
    {
        private Northwind db;
        public List<Customer> customers;

        // Bind Property is required for the POSTING of data from FORM
        [BindProperty]
        public Customer customer { get; set; }

        // Constructor to instantiate this db
        // Instantiate Northwind just once : use for Get() and Post()
        public AllCustomersModel(Northwind injectedContext)
        {
            db = injectedContext;

        }

        public void OnGet()
        {
            customers = db.Customers.ToList();
        }

        public IActionResult OnPost()
        { 
            if (ModelState.IsValid)
            {
                db.Customers.Add(customer);
                db.SaveChanges();
                return RedirectToPage("/AllCustomers");
            }
            return Page();
        }
    }
}

@page
@model lab_83_asp_core_add_records.Pages.AllCustomersModel
@{
    ViewData["Title"] = "AllCustomers";
}

<h2>AllCustomers</h2>

<h3>Add Customer</h3>

<form method="POST">
    <div class="form-group">
        <label for="customerID">Customer ID</label>
        <input asp-for="customer.CustomerID" type="text" class="form-control" id="customerID" placeholder="ZYX2A">
    </div>
    <div class="form-group">
        <label for="customerName">Customer Name</label>
        <input asp-for="customer.ContactName" type="text" class="form-control" id="customerName" placeholder="Name">
    </div>
    <div class="form-group">
        <label for="companyName">Company Name</label>
        <input asp-for="customer.CompanyName" type="text" class="form-control" id="companyName" placeholder="Company">
    </div>
    <div class="form-group">
        <label for="City">City</label>
        <input asp-for="customer.City" type="text" class="form-control" id="City" placeholder="City">
    </div>
    <button type="submit" class="btn btn-primary ">Submit</button>
</form>

<table class="table table-bordered table-striped table-hover">
    <tr>
        <th>Company Name</th>
        <th>Contact Name</th>
    </tr>
    @foreach (var c in Model.customers)
    {
        <tr>
            <td>@c.CompanyName</td>
            <td>@c.ContactName</td>
            <td><a asp-page="./Edit" asp-route-id="@c.CustomerID">Edit</a></td>
        </tr>
    }
</table>

```

# MVC website

Web Topics

In order to deal with the web realm we are going to have to deal with 3 major topics

1. API
2. Regular Website
a) HTML/CSS/Javascript/JQuery website (traditional, nothing to do with
Microsoft). Also Bootstrap which is CSS+.
b) ASP website (Active Server Pages)
.aspx (html in a 'wrapper')
.aspx.cs (cs 'code-behind')
3. MVC Website
Formal, business-ready website with 'separation of concerns'
MODEL	DB
VIEW	VISIBLE PAGE
CONTROLLER	URL LINK : INSTRUCTIONS SENT TO SERVER WHEN CLIENT
REQUESTS A PAGE -> CONTROLLER ACCEPT REQUEST,
GET DATA FROM MODEL AND PASS RESULT INTO THE VIEW
FOR DISPLAY

# MVC Website

```
Goal : Take 2-3 hours 
		Build business-ready website from scratch
		Visual Studio 2019 NOT preview
		Entity Core
		.NET Core version 2.2
```

# Teaser Lesson : Show class how easy this is using MVC NON-CORE IE REGULAR 'OLD' FRAMEWORK.

```
a) Easier regular ASP website

	Regular web page

		Home page Default.aspx
						<%@  CodeBehind...to cs   AutoEventWireUp     %>
						<asp runat="server">
							<div>....HTML HERE </div>
						</asp>
			      Default.aspx.cs

b) Harder MVC website  

		+ Northwind

		Controller --> TAKES REQUEST

	MVC recap

		Controller ==> First part of URL

			/Products/

		Action ==> Second part of URL

			/Products/Index   ==>   Controller will build any data then send
									data to View : Index.cshtml page
			/Products/Create  ==>   View : Create.cshtml page
```

Summary (again) MVC WITH MODELS

```
Models (folder)
	myModel.cs   (CLASS)  ==> REPRESENTS DATA TO SHOW ON SCREEN  (eg Customer if dealing with Northwind)
		myProperty {get;set;}   ==> DATA ITEM

Controller     "StrawberryController"
	ANALYSE URL AND MAKE RIGHT CHOICE OF ACTION    <http://mywebsite.com/Strawberry/>
	Default action ==> Find a page in a folder with same name  "Strawberry" folder ==> Index.cshtml FILE

	If we want to put DATA INTO VIEW ==> ALSO INSTANTIATE A MODEL AND PASS INSTANCE TO VIEW

View
	@model.PROJECTNAME.Models.myModel        LINE 1   

	<p>@Model.instancename</p>
```

# MVC : TaskList website

```
class : TaskItem {}
class : Category {}
relate them and display on screen
Build database and pull them from database

Context ==> TALK TO DATABASE

Visual Studio has 
	1) Built a DBCONTEXT FILE TO TALK TO DATABASE
	2) appsettings.json ==> PATH TO DATABASE
	3) Services ==> INJECTED DATABASE AS A 'SERVICE' TO MVC APP
```

To build database we can do
Nuget ==>
add-migration initial
update-database

```
Database appears in user profile and can connect
```

Migrations !!!!

```
Let's alter the database !!!!

add-migration Add-Date
update-database
```

Now let's add a new class, Category, and add this as a Category of tasks

# Relating Two Tables

```
public class Category
{
    public Category()
    {
        Tasks = new HashSet<Models.Task>();
    }
    public int CategoryID { get; set; }
    public string CategoryName { get; set; }

    public virtual ICollection<Models.Task> Tasks { get; set; }
}

    public class Task
{
    public int TaskID { get; set; }
    public string TaskName { get; set; }

    [Display(Name ="Due Date")]
    [DataType(DataType.Date)]

    public DateTime DueDate { get; set; }

    // foreign key CategoryID
    public int? CategoryID { get; set; }
    public virtual Category Category { get; set; }
}
```

# Enforce database table relationship using FLUENT API

```
Goal => Dropdown list show CATEGORY NAME (NOT ID)
```

```
public class TaskDbContext : DbContext
    {
        public TaskDbContext (DbContextOptions<TaskDbContext> options)
            : base(options)
        {
        }

        public DbSet<Models.Task> Task { get; set; }

        public DbSet<Category> Category { get; set; }

        // FLUENT API RELATIONSHIPS GO RIGHT HERE

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // RELATIONSHIPS
            // CATEGORY NAME REQUIRED
            builder.Entity<Category>().Property(c => c.CategoryName)
                .IsRequired().HasMaxLength(15);

            // EVERY TASK HAS ONE CATEGORY
            builder.Entity<Category>().HasMany(c => c.Tasks)
                .WithOne(task => task.Category);

            // ONE CATEGORY CAN HAVE MANY TASKS
            builder.Entity<Task>().HasOne(task => task.Category)
                .WithMany(category => category.Tasks);
        }
    }
```

# Interview Prep

## Preparation For The Interview

Composure - be relaxed but confident

Engaging - be sure to engage positively the interviewers.  If possible 'meet them' earlier on LinkedIn so you have an idea of what to expect of who the people are before you meet them.

Be sure to make eye contact when you first meet them, shake hands positively and try to relate to them as a human being rather than just someone who is interviewing you.

## General Questions

```csharp
Tell us about yourself
Why did you join Sparta?
Why did you choose tech?
How do you see yourself in group?
Talk about successes / problems & give example
What do other people say about you?

Tell me a little bit about yourself
What degree do you have and why did you choose it?
In a team setting what part do you play?  How do you see yourself?
Do you have any work experience?  What have you done in the area of paid work?
Before Sparta talk about 2 challenges that you have overcome
What have been your biggest challenges here at Sparta?

Perhaps brush up on all these questions via a video on your phone.  
I know it sounds and feels silly but it can perhaps just get you over 
those hurdles of explaining yourself.
```

## Basics

Expect the technical interview to be tough so check out all the following structures and know that you know them : Strings, Char, Byte, Boolean, Array, List, Strack, Queue, Struct, Enum, OOP, Class, Method, Fields, Properties, Constructor, Instance, Static, Abstract, Polymorphism, virtual, override, abstract and override, Interface - just be aware of, not in detail.

Loops - be prepared to do one on the wall.  If they asked you to do 'Fizz-Buzz' on the wall would you manage?  Try it in code and then on your wall.

Remember there are four loops : for, do, do.while and foreach over an array..  For loop is over fixed number.  While and do.while are over a condition eg loop while records exist to be read from a database.

```csharp
Agile : basics
Waterfall : all-in-one
Agile: DELIVER VALUE FOR MONEY (WORKING CODE) IN INCREMENTS (SPRINT)
Sprint : dev team + product owner (talk to customer) + scrum master (runs 'scrum/sprints' : enabler : servant leader)
backlog = list of features which we are going to build
user stories : 'humanise' tech features which we're going to build 'Joe clicks on 'users' , 'new' , enter new user and submit
sprint backlog = mini-list of features just for this sprint

SQL : basics

C# : all core features  : data types, if.. , switch, loops (for, foreach, while, do.while)

While vs Do..While()
Collection
Faster - Array or collection?
x++;
break;
continue;

OOP meaning
4 pillars of OOP
class
method
overload
override
virtual
abstract class
abstract method
sealed class : has no child classes (useful for security)
static keyword : attached to class
collection
array (fixed) vs collection(resize)
list 
queue : enqueue dequeue
stack : push pop 
stack memory (fast) 
Note : Stack<int> is a place to store integers
	 : Stack memory is a fast place in our computer where we store running programs
heap memory (larger)
value type : int char bool
reference type : string array list  
char[] array is same as string
```

```csharp
What is a method return type?
	What is a method parameter?
	What is Pascal Case?
	What is Camel Case
	What is Snake Case?
	What is Kebab Case?
	What is an 'out' parameter
	What does 'passing by reference' mean?
	What is a reference type?
	What is a value type
	What is the Heap?
	What is the Stack?

	OOP
	What is a constructor?
	When do we use the 'new' keyword?
	What is instantiation?
	What is an instance?
	Can we instantiate an abstract class?
	Can we instantiate a sealed class?
	What is NUNIT?
	What is Entity Framework?
	What is CRUD?
	What does Try..Catch..Finally.. do?
	What is a coding error?
	What is an Exception?
	Give some examples of exceptions

	Can you create a github repo?  Write down about 10 things that you would do in order to create a master branch, then a dev branch, then push to the dev branch, then create a pull request to pull the dev branch into the master branch

	How would  you view all your commits on a local system?

	What does git reset do?  hard? soft?

	What is HTTPS SSL?
	What is SSH?

	What does SQL distinct do?
	what does SQL LIKE search for?
	What would SQL LIKE %a% find?   a%  ?         %a    ?
```

SQL - know the basics.

Entity - just be aware of the basics, what Entity is (allows you to talk to a database easily, it's a Framework) and that it provides scaffolding ie builds your pages for you.  Entity from Database builds code from tables.  Entity from Code builds the tables from code.

Quizzes

All of the technical questions that I think you might get asked.  

[https://www.proprofs.com/survey/t/?title=interview-thoughts-and-prep-c-agile-sql-oop-covered](https://www.proprofs.com/survey/t/?title=interview-thoughts-and-prep-c-agile-sql-oop-covered) 

15 questions C# tech - [https://www.proprofs.com/quiz-school/story.php?title=c-quiz-1_263d](https://www.proprofs.com/quiz-school/story.php?title=c-quiz-1_263d) 

40 questions C# - much harder - may not be appropriate for today's prep as might be too much [https://www.proprofs.com/quiz-school/story.php?title=software-fundamentals-1](https://www.proprofs.com/quiz-school/story.php?title=software-fundamentals-1) 

[Interview Quiz Question Text ](c-sharp-course-notes/Interview%20Quiz%20Question%20Text%2037eddb9655d1415bb49160a79eeee8fa.md)

Things to add : HTML image, headings, paragraph, small table, ordered list, unordered list, See if you can add some CSS styling with colour on some of the items.  Finally can you add a Javascript 'alert' box just to get going on Javascript? 

Create a new ASP Web Application which has got the Home, About and Contact pages.  See if you can develop this site by adding HTML content to the page.  

[Technical Interview Prep](c-sharp-course-notes/Technical%20Interview%20Prep%202bbaa4d9da3f4c40bdcbb8c56f9d32cb.md)