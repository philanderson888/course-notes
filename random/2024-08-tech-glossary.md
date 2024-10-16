# glossary - javascript

## contents

- [glossary - javascript](#glossary---javascript)
  - [contents](#contents)
  - [ASCII](#ascii)
  - [BigInt](#bigint)
  - [Console Output](#console-output)
  - [const](#const)
  - [First Class Object](#first-class-object)
  - [Headers in HTML](#headers-in-html)
  - [History.length/back/forward/go](#historylengthbackforwardgo)
  - [Immutable](#immutable)
  - [Lexical Scoping](#lexical-scoping)
  - [Location](#location)
  - [OnResize Window Event](#onresize-window-event)
  - [Primitive Types](#primitive-types)
  - [Progressive Javascript Framework](#progressive-javascript-framework)
  - [Window - Create, Resize, Manage and Close](#window---create-resize-manage-and-close)
  - [Window.Scroll](#windowscroll)
- [bookmarks](#bookmarks)
  - [artwork](#artwork)
  - [documentation](#documentation)
  - [fake data](#fake-data)
  - [git](#git)
  - [learning](#learning)
  - [productivity](#productivity)
  - [productivity](#productivity-1)
  - [typing](#typing)
- [Programming Glossary](#programming-glossary)
  - [Android Studio](#android-studio)
  - [BATCH FILES .BAT](#batch-files-bat)
    - [Buffer.bytelength](#bufferbytelength)
  - [bun](#bun)
  - [Docker For Windows !!!](#docker-for-windows-)
  - [GIT](#git-1)
  - [Google Lens](#google-lens)
  - [html](#html)
  - [Keyboard Shortcuts](#keyboard-shortcuts)
  - [kotlin](#kotlin)
  - [p](#p)
  - [php mysqli](#php-mysqli)
  - [r](#r)
  - [ruby](#ruby)
  - [rust](#rust)
  - [sql](#sql)
  - [sqlite in browser](#sqlite-in-browser)
  - [Kotlin](#kotlin-1)
  - [MegaCompanies](#megacompanies)
  - [nchar and nvarchar SQL Data Types](#nchar-and-nvarchar-sql-data-types)
    - [npm owner](#npm-owner)
  - [PostgreSQL](#postgresql)
  - [SEO Search Engine Optimisation](#seo-search-engine-optimisation)
  - [SEO Search Engine Optimisation](#seo-search-engine-optimisation-1)
  - [Wireframes](#wireframes)
  - [random](#random)
  - [Contentful](#contentful)
  - [Cordova - build multi-platform web apps](#cordova---build-multi-platform-web-apps)
  - [Gatsby](#gatsby)
    - [Gatsby Resources](#gatsby-resources)
    - [Code Samples](#code-samples)
    - [Install Gatsby Client](#install-gatsby-client)
    - [Clone Gatsby Starter Site](#clone-gatsby-starter-site)
    - [Deploy To Netlify](#deploy-to-netlify)
  - [GraphQL](#graphql)
  - [Nativescript](#nativescript)
  - [PWA](#pwa)
  - [Hacker News](#hacker-news)
  - [MeteorJS](#meteorjs)
  - [NativeScript](#nativescript-1)
  - [Node Streams](#node-streams)
  - [n node manager vs npm node manager](#n-node-manager-vs-npm-node-manager)
  - [Password Generator](#password-generator)
  - [PWA Progressive Web Apps](#pwa-progressive-web-apps)
  - [react-js](#react-js)
  - [reason-ml](#reason-ml)
  - [Typescript](#typescript)
  - [Typescript interfaces](#typescript-interfaces)
  - [Typescript Classes](#typescript-classes)
  - [Typescript tsconfig.json](#typescript-tsconfigjson)
  - [Webpack](#webpack)
  - [Canvas](#canvas)
  - [Selenium](#selenium)
  - [Three.js](#threejs)
  - [Webpack](#webpack-1)
  - [Yarn](#yarn)



## ASCII

Represent ASCII literal as "\u0041"


## BigInt

Can hold arbitrarily large integer numbers
[https://developers.google.com/web/updates/2018/05/bigint](https://developers.google.com/web/updates/2018/05/bigint)

## Console Output

```js
javascript:console.log('hi'); // FROM THE BROWSER WINDOW!!! OR URL LINK!!!
console.log() produces black text
[console.info](http://console.info/)() blue text with icon
console.debug() blu
console.warn() yellow with icon
console.error() red with icon
console.table(); tabular output for a JSON object
var x=1; console.log("output %d",x); %d=integer, %s=string, %o=object
console.log('this object is is %o ',this);
console.log('this event is %o ',event);
console.log("%s",new Error().stack);
console.dir(object-goes-here);
console.dirxml(HTML DOM NODE);
console.important()
console.todo()
console.trace() view stack
console.time('x'); start a stopwatch
console.endTime('x') end stopwatch
Debug : Break on HTML change
Monitor('function1');
Debug('functionname');
Toggle device mode chrome
```
## const

```js
const variables are
UPPERCASE
block scope and even if global, not assigned to the Window object
const references to primitive values are always immutable
const bindings are immutable but the contents of objects and arrays are not immutable so the contents can change - it is just the binding to the object or array object which does not change
```



## First Class Object

```
First class object is an object that has methods and properties
Functions in Javascript can have properties and methods
So functions in Javascript are called First Class Objects or First Class Functions!
ie they are Function Objects
They can be passed as an argument to other objects as well, and can even be returned by a function.
They can be assigned as a value to a variable.
```




## Headers in HTML

```
We can view the headers in an HTML page after loading by
going to Chrome Developer Tools, Network tab, clicking
on the loaded file and then choosing 'Headers'
```

## History.length/back/forward/go

```js
Accessing Browser History
History object is an ARRAY OF URLS LAST VISITED

history.length() number of URLS

history.back()

history.forward()

history.go(URL) or go(-4)

For security reasons you can't access full list of URLs stored inside history object

Most recent page document.referrer

[https://developer.mozilla.org/en-US/docs/Web/API/History_API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)

History has length (back button), back(), forward(), go(x)
```

## Immutable

```js
Immutable objects cannot change
const references to primitive objects are immutable
const x = 10; //this is immutable
const x = {} is not immutable so x.a=10 is fine to add afterwards.
Object.freeze(myObject) can be used to freeze myObject which is made up of key-value pairs, or an array.
```

## Lexical Scoping

Lexical scoping means private scope ie only valid within the block of code in which it is declared.

## Location

location = stats about current URL

location.href is full current URL

location.protocol eg http

location.host/hostname = name of server

location.hash ==> go to part of document where id="#"

protocol://hostname:port/pathname?search=#hash

Location = current URL : href protocol host hostname port pathway search hash

## OnResize Window Event

window.innerWidth/Height

jquery_30_resize_browser.htm

window.onresize()

## Primitive Types

```js
Primitive types in Javascript are
number
string
boolean
symbols
null
undefined
```

## Progressive Javascript Framework

can be introduced gradually into your codebase

## Window - Create, Resize, Manage and Close

```html
<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>New Window</title>
<script type="text/javascript">
var eula;
function openWin() {
  eula = window.open("eula.html","eula","height=200,width=300,left=100,top=100");
  eula.focus();
}
function eulaChecked() {
  if (document.getElementById("confirmEula").checked && typeof eula == "undefined") {
    alert("Come on now.  Don't you think you should read the EULA first?");
    document.getElementById("confirmEula").checked = false;
    openWin();
  } else if (document.getElementById("confirmEula").checked && !eula.closed) {
    eula.close();
  } else if (!document.getElementById("confirmEula").checked) {
    openWin();  
  }
}
</script>
</head>
<body>
<form action="process.xyz">
<input type="checkbox" id="confirmEula" name="confirmEula" onclick="eulaChecked()"> Check to confirm that you agree with our <a href="eula.html" onclick="openWin(); return false;">user agreement</a>.
</form>
</body>
</html>
```

## Window.Scroll

```js
window.scroll(0,100) SCROLL DOWN 100 PIXELS TO POINT (0,100)
window.scrollTo(0,100) AS ABOVE
window.scrollBy(0,100) SCROLL DOWN A FURTHER 100 PIXELS
[http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_scrollby](http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_scrollby)
```








# bookmarks



## artwork

posersoftware - model people
pixlr
pexels

## documentation

code prettify carbon.now.sh

write good error messages - when life gives you lemons write better error messages


## fake data

randomuser.me

## git

make great commits conventionalcommits.org

## learning

cht.sh/ls

## productivity

akiflow tasks to calendar

## productivity

akiflow task to calendar - one inbox

## typing

typerush
typingtest










# Programming Glossary


## Android Studio

Android Studio is built upon IntelliJ IDEA which is an IDE from JetBrains.

JetBrains also created Kotlin.

Android Studio 3.0 onwards now has built-in [Kotlin](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#kotlin) support.

## BATCH FILES .BAT

```bash
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

```js
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


## bun

Bun also has built in

  Nodemon (don’t need this as is has a built in watch mode)

  Dotenv (don’t need this as it reads .env files by default)

  Compiling eg reading .js, .ts, .jsx, etc so no babel, tsc etc required

  Bundling so no esbuild, webpack or parcel

  Jest-compatible test runner so don’t need dependencies to write unit tests

```js
bun install

bun test

const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response(“Welcome to Bun!”);
  },
});

console.log(`Listening on localhost:${server.port}`);
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

```bash
git -status
git branch SHOW BRANCHES
git -branch -D <name-of-branch>delete branch
Git commit -m "name-of-commit"
```


## Google Lens

Has predictive technology to allow the user to know what they are looking at, when they point a camera at an object by using the known WIFI location.




## html

```js
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




## kotlin

```java
flux is a stream
flow is like a stream with a callback on events onNext, onCompleted, onError
val is immutable
var is mutable
function fun(a: Int, b: Int): Int { return ab } same as {}
lambda { a: Int, b: Int => ab }
```











## p


## php mysqli

```php
require('C:\xampp\htdocs\log\assets\php\connect-db-mysqli.php'); 

$q="UPDATE tasks SET redgreen='$color' WHERE taskid=$taskid"; 
$q="SELECT date, redgreen FROM tasks WHERE taskid=$taskid";

$result = mysqli_query($q) or die (mysql_error()); 
$row = mysqli_fetch_array($result);
```



## r


## ruby 


Every class has one parent only

Every class may have several modules

Modules can add new methods

Modules can overload old methods

Metasploit modules overload Msf::Module 

Mixins include one class into another

  Mixins can override a class methods

    eg connect() TCP but connect() overloaded by SMB, FTP

Example of Ruby mixin with overloading

```ruby
class MyParent
     def woof
          puts “woof!”
     end
end

class MyClass > MyParent
end

object = MyClass.new
object.woof() => “woof!”


module MyMixin
     def woof
          puts “hijacked the woof method!”
     end
end

class MyBetterClass > MyClass
     include MyMixin
end
```





## rust

https://docs.microsoft.com/en-us/learn/paths/rust-first-steps/







## sql


```sql
ALTER TABLE tbl_personnel MODIFY COLUMN ID INT AUTO_INCREMENT PRIMARY KEY
```



## sqlite in browser

sqlite in browser uses `wasm`

https://github.com/sql-js/sql.js

```html
<html>
  <script src='/dist/sql-wasm.js'></script>
  <script>
    config = {
      locateFile: filename => `/dist/${filename}`
    }
    // The `initSqlJs` function is globally provided by all of the main dist files if loaded in the browser.
    // We must specify this locateFile function if we are loading a wasm file from anywhere other than the current html page's folder.
    initSqlJs(config).then(function(SQL){
      //Create the database
      const db = new SQL.Database();
      // Run a query without reading the results
      db.run("CREATE TABLE test (col1, col2);");
      // Insert two rows: (1,111) and (2,222)
      db.run("INSERT INTO test VALUES (?,?), (?,?)", [1,111,2,222]);

      // Prepare a statement
      const stmt = db.prepare("SELECT * FROM test WHERE col1 BETWEEN $start AND $end");
      stmt.getAsObject({$start:1, $end:1}); // {col1:1, col2:111}

      // Bind new values
      stmt.bind({$start:1, $end:2});
      while(stmt.step()) { //
        const row = stmt.getAsObject();
        console.log('Here is a row: ' + JSON.stringify(row));
      }
    });
  </script>
  <body>
    Output is in Javascript console
  </body>
</html>
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

```sql
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

























## random

```
google keyword planner
graphql
gatsby
apollo
hooks
sanity headless cms
tiobe language index
source map gets minified code back to original
jmeter
sentry bug tracking
```



## Contentful

Deploying a site with contentful

The API keys have to be configured within contentful on their website also.

The .contentful.json file contains the API keys which are valid for local use only

To run the site locally simply type `gatsby develop` and browse to `http://localhost:8000`



## Cordova - build multi-platform web apps

```
npm install -g cordova
cordova create MyApp
cd MyApp
cordova platform add browser
cordova run browser
```



## Gatsby

Gatsby generates your site as a PWA 

PWA Progressive Web Site which has a service worker to speed up page loading and resource caching

### Gatsby Resources

[https://www.gatsbyjs.org](https://www.gatsbyjs.org/) 

Starting point for learning

[https://www.gatsbyjs.org/tutorial](https://www.gatsbyjs.org/tutorial)  

### Code Samples

[https://www.gatsbyjs.org/docs](https://www.gatsbyjs.org/docs) 

### Install Gatsby Client

```csharp
npm install -g gatsby-cli

```

### Clone Gatsby Starter Site

```jsx
gatsby new mysite https://github.com/gatsbyjs/gatsby-starter-hello-world

https://www.gatsbyjs.org/starters/?v=2 

https://github.com/gatsbyjs/gatsby-starter-hello-world

https://github.com/gatsbyjs/gatsby-starter-default.

cd mysite

gatsby develop

http://localhost:8000    

Edit src/pages/index.js and changes will update live!
```

### Deploy To Netlify

[https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

Create gatsby-02 repo locally and on GitHub; push to GitHub so site is live locally and all changes on GitHub

Go to [app.netlify.com](http://app.netlify.com) and choose 'New Site From Git'.

Link Netlify to GitHub

[https://app.netlify.com/start/deploy?repository=https://github.com/philanderson888/gatsby-02](https://app.netlify.com/start/deploy?repository=https://github.com/philanderson888/gatsby-02) 

[https://festive-perlman-abc4bd.netlify.com/](https://festive-perlman-abc4bd.netlify.com/)  

[https://festive-perlman-abc4bd.netlify.com/](https://festive-perlman-abc4bd.netlify.com/) 


## GraphQL

[GraphQL](graph-ql.md)

## Nativescript

[NativeScript](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#nativescript)

## PWA

[PWA Progressive Web App](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#pwa)

## Hacker News

[https://news.ycombinator.com](https://news.ycombinator.com/)

## MeteorJS

```bash
# Windows
choco install meteor
# Linux
curl <https://install.meteor.com/> | sh

# create app
meteor create testapp
cd testapp
meteor
```





## NativeScript

We can use nativescript to build native Android and IOS apps from scratch using regular Javascript code; namely Typescript, Vue, Angular etc.

Try it out at [https://www.nativescript.org](https://www.nativescript.org/)

## Node Streams

Streams are similar to Unix Piping | whereby we `pipe` the output from one command into another

.pipe() is used

## n node manager vs npm node manager

n is a Node module, which can be installed by npm, and nvm is a Bash script.

n and nvm are both still active projects, because it's still more of a bother than updating on Windows. They are still actively maintained, and both have been modified less than 10 days ago.

I find n to be of easier use because it can be installed by npm, but both scripts serve their purpose


## Password Generator

[https://passwordwolf.com/api/](https://passwordwolf.com/api/)

[https://passwordwolf.com/](https://passwordwolf.com/)

## PWA Progressive Web Apps

PWA Progressive Web App : is a web app which behaves as if it's a native app with offline support.

Native apps are used a lot but people are loth to install new web apps! Also Google/Facebook/Amazon have the lions' share of the most popular apps


## react-js

[react-js](react-js.md)

## reason-ml

[reason-ml](reason-ml.md)
## Typescript

Install via NPM or VS Nuget

Note that Visual Studio has full intellisense for typescript

```
npm install -g typescript
```

Create typescript file helloworld.ts

```
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
```

Now compile this typescript file to javascript

```
# typescript compile to javascript the typescript file `helloworld.ts` 
tsc helloworld.ts
```

Now run this with HTML :

```
<!DOCTYPE html>
<html>
    <head><title>TypeScript</title></head>
    <body>
        <script src="helloworld.js"></script>
    </body>
</html>
```

## Typescript interfaces

We can use interfaces as a predicted class structure

```
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
```

## Typescript Classes

Typescript has full support for ES6 classes

```
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
```

## Typescript tsconfig.json

The presence of tsconfig.json indicates this is the root of a project.

tsconfig specifies
root files
compiler options

## Webpack

Webpack takes multiple files like `index.js` etc and bundles them into one `bundle.js` file

Code splitting then allows for different parts of the application to be loaded on demand

## Canvas

[canvasjs.com](http://canvasjs.com/)

## Selenium

£30 Selenium Testing course [https://www.udemy.com/selenium-real-time-examplesi…](https://www.udemy.com/selenium-real-time-examplesi%E2%80%A6)

## Three.js

Three.js is a javascript framework for producing 2d and 3d graphics

## Webpack

Webpack and Yarn are the recommended replacement for Bower package manager which helps establish the correct dependency relationships for your dependent packages, and maintain them correctly for you. See <a href="#bower">Bower</a> and <a href="#yarn">Yarn</a> for details.

## Yarn

Yarn is a package install manager

Yarn can be used in a similar manner to npm and bower to install libraries and their dependencies into your project, and manage and maintain the correct dependency relationships for you
Yarn and Webpack are recommended as an alternative to Bower. See <a href="[https://bower.io/blog/2017/how-to-migrate-away-from-bower](https://bower.io/blog/2017/how-to-migrate-away-from-bower)">[https://bower.io/blog/2017/how-to-migrate-away-from-bower](https://bower.io/blog/2017/how-to-migrate-away-from-bower)</a> for more details.
