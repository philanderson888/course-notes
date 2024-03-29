# programming

## contents

- [programming](#programming)
  - [contents](#contents)
  - [html](#html)
  - [kotlin](#kotlin)
- [Programming Glossary](#programming-glossary)
  - [Android Studio](#android-studio)
  - [BATCH FILES .BAT](#batch-files-bat)
    - [Buffer.bytelength](#bufferbytelength)
  - [Docker For Windows !!!](#docker-for-windows-)
  - [GIT](#git)
  - [Google Lens](#google-lens)
  - [Keyboard Shortcuts](#keyboard-shortcuts)
  - [zsh - Z Shell : Custom Shell for MAC](#zsh---z-shell--custom-shell-for-mac)
  - [Kotlin](#kotlin-1)
  - [MegaCompanies](#megacompanies)
  - [nchar and nvarchar SQL Data Types](#nchar-and-nvarchar-sql-data-types)
    - [npm owner](#npm-owner)
  - [PostgreSQL](#postgresql)
  - [SEO Search Engine Optimisation](#seo-search-engine-optimisation)
  - [SEO Search Engine Optimisation](#seo-search-engine-optimisation-1)
  - [Wireframes](#wireframes)



## html

```
img.src.value="myImage.jpg"
w3.org
ietf.org
utf-8
utf-16
pixlr.com image editing
pexels.com stock photos
functional programming 
    uses declarative rather than imperative
        imperative - how to do this, step by step
        declarative - just give the end goal
    avoids sharing state
    uses immutable data
    pure functions
        deterministic gives same output for given input
```





## kotlin

flux is a stream
flow is like a stream with a callback on events onNext, onCompleted, onError
val is immutable
var is mutable
function fun(a: Int, b: Int): Int { return ab } same as {}
lambda { a: Int, b: Int => ab }
















# Programming Glossary


## Android Studio

Android Studio is built upon IntelliJ IDEA which is an IDE from JetBrains.

JetBrains also created Kotlin.

Android Studio 3.0 onwards now has built-in [Kotlin](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#kotlin) support.

## BATCH FILES .BAT

```
.cmd
.bat
%0 path
%1 name of batch job
%2..9 name of parameters passed to batch job

type outputs to screen, a whole file at that

set a=10

set /p ="Message 1"<nul >data.txt  CREATE data.txt and put data in it

set /p = "Message 2"<nul >>data.txt APPEND to data.txt

set /a total=%int_1%+%int_b% can add 1 to b to output a

IF NOT EXIST %A% (
    ECHO MESSAGE
    EXIT /b -1                          TO EXIT PROGRAM
)

SETLOCAL                                   

IF "%1" neq "/s"                        

PAUSE
```


### Buffer.bytelength

```
# memory allocated to a string or other object
var buf = Buffer.allocUnsafe(15);
var len = buf.byteLength(buf)
console.log(len)
/*
15
*/
var len = Buffer.byteLength('abc')
console.log(len)
/*
3
*/
```

## Docker For Windows !!!

How to run an [ASP.NET](http://asp.net/) web application inside a Docker container

[https://blogs.msdn.microsoft.com/allthingscontainer/2016/10/04/windows-containers-how-to-containerize-a-asp-net-web-api-application-in-windows-using-docker](https://blogs.msdn.microsoft.com/allthingscontainer/2016/10/04/windows-containers-how-to-containerize-a-asp-net-web-api-application-in-windows-using-docker)

All you need to know page also is here

[https://docs.microsoft.com/en-gb/virtualization/windowscontainers/index](https://docs.microsoft.com/en-gb/virtualization/windowscontainers/index)

30 minute video also is here

[https://channel9.msdn.com/Blogs/containers/Containers-101-with-Microsoft-and-Docker](https://channel9.msdn.com/Blogs/containers/Containers-101-with-Microsoft-and-Docker)

Final document, more theoretical

[https://blogs.technet.microsoft.com/virtualization/2016/05/05/windows-container-networking](https://blogs.technet.microsoft.com/virtualization/2016/05/05/windows-container-networking)

## GIT

git -status
git branch SHOW BRANCHES
git -branch -D <name-of-branch>delete branch
Git commit -m "name-of-commit"

## Google Lens

Has predictive technology to allow the user to know what they are looking at, when they point a camera at an object by using the known WIFI location.

## Keyboard Shortcuts

SHORTCUTS

```
MAC
    CONTROL UP      : SHOW ALL OPEN WINDOWS
    CONTROL LEFT    : MOVE THROUGH OPEN WINDOWS
    COMMAND OPTION ESCAPE : FORCE QUIT
@ turns off displaying command as it gets executed

echo text output to screen

@echo off turns off the command permanently

pause

goto
```

[ZSH = Z Shell](https://ohmyz.sh/)

## zsh - Z Shell : Custom Shell for MAC

Find and edit the shell commands from the root of the home directory - the `.zshrc` file

```
nano .zshrc
```

```
SUBLIME TEXT

    COMMAND UP ARROW : TOP OF DOCUMENT
    FN UP            : MOVE CURSOR UP A PAGE
    ALT UP           : MOVE TO START OF PREVIOUS LINE
    ALT RIGHT        : NEXT WORD

    Alt-Shift-W surrounds highlighted text with a tag

    Fn-Control-Delete   Delete One Word At A Time
    Fn-Command-Delete   Delete One Line At A Time

    Shift - Fn - Down Arrow     Highlight One Page At A Time

TEXTWRANGLER
    COMMAND UP      TOP OF DOCUMENT
    ALT UP          CURSOR UP ONE PAGE
    ALT LEFT        ONE WORD

VirtualBox

    Command C = wide screen
```

## Kotlin

[Android Studio](notion://www.notion.so/philanderson888/android-studio) 3.0 onwards now has built-in Kotlin support.

Kotlin works hand-in-hand with Java and C++

Kotlin is open source.

You can call Java from Kotlin and Kotlin from Java - both ways can drop in.

Create a new first project [https://developer.android.com/kotlin/get-started.html](https://developer.android.com/kotlin/get-started.html)

<a id="https">https:// enabling on a website

Redirect from http to https using the .htaccess file

<IfModule mod_rewrite.c>

RewriteEngine On
RewriteCond %{SERVER_PORT} !^443$

RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

</IfModule>

href="[http://letsencrypt.org](http://letsencrypt.org/)">Free HTTPS certificate at [http://letsencrypt.org](http://letsencrypt.org/)</a>

## MegaCompanies

Facebook bought Oculus Rift !!!

## nchar and nvarchar SQL Data Types

nchar(5) use when data length will be the same each time

nvarchar(40) use when data length will vary each time

### npm owner

```
npm owner ls http
npm owner ls https
/*
user@email.com
*/
npm owner ls lodash
```


## PostgreSQL

MAC INSTALL

```
Download from <https://postgresapp.com/>

Run these instructions on GitHub   

    <https://github.com/brettshollenberger/postgres_101>
```

WINDOWS INSTALL

```
Follow this wizard through

    <http://www.postgresqltutorial.com/install-postgresql/>

Run pgAdmin4
```

WINDOWS : CONNECT TO DATABASE

```
Follow this wizard through

    <http://www.postgresqltutorial.com/connect-to-postgresql-database/>

CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    release_date DATE,
    count_stars INTEGER,
    director_id INTEGER
);
```

PostgreSQL commands

```
INSERT INTO directors (name) VALUES ('first'),('second');

SELECT * FROM public.directors ORDER BY id ASC 

INSERT INTO movies (title,release_date, count_stars, director_id) VALUES ('movie1','02-03-2017',5,1),('movie2','05-07-2012',4,2)

SELECT * FROM movies

SELECT title, release_date AS release FROM movies

SELECT title, release_date AS release FROM movies WHERE release_date >      '2013_03_04';

SELECT title, release_date as release, count_stars AS rating FROM movies 
    WHERE release_date > '2013_03_04' AND count_stars > 2;

SELECT COUNT (*) FROM movies

SELECT SUM(count_stars) FROM movies

SELECT AVG(count_stars) FROM movies

SELECT (count_stars::float/5)*100 as rotten_tomatoes FROM movies

update movies set count_stars=5;

delete from movies where id=6 ((note : run SELECT first!!!))
```

## SEO Search Engine Optimisation

SEO Tips

```
GOOGLE ADWORDS
    KEYWORD PLANNER

KEYWORDTOOL.IO

GOOGLE SEARCH : WHAT IS URL OF COMPANIES ?  CAN I MAKE A SIMILAR URL?

GOOGLE WEBMASTERS : ADD YOUR SITE HERE

FACEBOOK GROUP : CREATE AND WRITE CONTENT, SHARE LINK FROM YOUR SITE

DOMAIN : LESS THAN 10 CHARACTERS
```

## SEO Search Engine Optimisation

```
PAGE URL : USE KEYWORDS
PAGE TITLE : USE KEYWORD
TAGS : ADD IN TAGS
PHOTO : ADD AS FEATURED IMAGE TO GET HITS
CONTENT : KEYWORD PRESENT 3 OR 4 TIMES.  800 WORDS.  KEYWORD IN FIRST PARAGRAPH.
LINKS : LINK THE KEYWORD BACK ON TO YOUR OWN SITE!!!
BLOGGING WITH ADVERTS ON THE SIDE
SOCIAL MEDIA ICON TO POST THE PAGE
SOCIAL MEDIA : POST LINK TO YOUR SITE FROM EG SOCIAL MEDIA, 2 PER DAY
BLOG OF CUSTOMER EXPERIENCES
TAKE PICTURES
ARTICLES
OPTIMISE CONTENT EG JPG MINI
```

## Wireframes

Build wireframes of the pages and how they will connect with each other.

Think about the additional features.

Wireframes are mainly about layout of the content that you have written above.

Wirefames do not include theming

[http://www.mockflow.com/](http://www.mockflow.com/)

[https://moqups.com/](https://moqups.com/)

Figma

```
Select Frame tool and choose mobile, tablet, desktop

Click on frame and drag a new frame on the screen
```
