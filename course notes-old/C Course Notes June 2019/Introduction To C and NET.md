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