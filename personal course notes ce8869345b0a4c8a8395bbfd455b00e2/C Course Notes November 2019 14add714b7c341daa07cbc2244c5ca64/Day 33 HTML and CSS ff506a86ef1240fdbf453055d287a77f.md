# Day 33 - HTML and CSS

# Introduction To Web

Let's start by downloading two repos (C:/ in Powershell then run)

1. git clone [https://github.com/philanderson888/showcase](https://github.com/philanderson888/showcase) and find index.html
2. git clone https://........................../bootstrap bootstrap.html

Modern Web Today

Let's install NODEJS

```
>   node -v 			PROGRAM TO RUN JAVASCRIPT ON WINDOWS, LINUX OR MAC

>   npm -v 				NODE PACKAGE MANAGER which INSTALL LIBRARIES JUST LIKE
						NUGET 

						....into the 	node_modules   folder

Chocolatey 				TOOL FOR INSTALLING COMMAND LINE DEVELOPER TOOLS
						ON A WINDOWS SYSTEM

Yarn 					Upgrade to NPM : installs libraries
```

EXAMPLE

```
Hello World Node Application

Javascript was INVENTED as a PROGRAMMING LANGUAGE TO RUN INSIDE NETSCAPE NAVIGAGTOR EARLY WEB BROWSER

When the web took off, also Javascript was catapulted into the front line even though it was not a sophisticated language.  In fact it had some glaring bugs which exist today!

Netscape => Mozilla => Firefox => Chrome dominating web

	But!  Someone had the bright idea to bring Javascript out of the browser
	and to run it as a standalone application.  Why?

	Website

	Client : Browser+Javascript               Server   PHP?
													   ASP?
													   Java?
													   Python?

													   Javascript!!!! Node!!!

	To run NODE we just type
	
	>   node myFile.js
```

## Raw HTML, CSS, Javascript

How to use libraries in a web page

```
We can use external libraries (eg Bootstrap) in 2 ways

1) Download the file locally.  
	Advantage : all files under your control
	Disadvantage : Extra pressure on your web server to deliver files
					which it doesn't have to

2) Get the files from a CDN link (CDN Content Delivery Network)

	Global place for holding common files

		Spaced out across world so you use the nearest server to you

	Advantage : you don't host these files
	Disadvantage : none really except careful if OFFLINE USAGE is an issue

	Care !  Check that we have the right file by adding a CHECKSUM to the link  

		In computing we can test the INTEGRITY or VALIDITY of a file with something we call a HASH or a CHECKSUM

			sha1-online.com

		Every time we run / download this file we check the file matches the HASH.
```

## Simple Web Tips

CSS

```
.class  		Multiple occurrences   <div class="x">       .x{ ... }

#id 			One occurrence         <div id="y">          #y { ... }
```

```
<!DOCTYPE html>
<html>
<head>
	<title>Hello World</title>
</head>
<body>
	<h1>Hello World</h1>
	<p>This is a paragraph</p>
	<ol>
		<li>One</li>
		<li>Two</li>
		<li>Three</li>
	</ol>
	<img src="https://i.pinimg.com/originals/60/56/45/6056452a87a7261dba46aa675dfe6fb6.jpg"
		 width="200" height="100"/>
	<div class="image-container">
		<img src="https://picsum.photos/150/100?random=1" />
		<img src="https://picsum.photos/150/100?random=2" />
		<img src="https://picsum.photos/150/100?random=3" />
		<img src="https://picsum.photos/150/100?random=4" />
	</div>
</body>
</html>
```