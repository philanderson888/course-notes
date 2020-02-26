# HTML, CSS and Javascript

# HTML CSS and Javascript

# Modern Web

Let's begin the day with a little 'check-the-end-from-the-beginning'

Web is so exciting there is lot's to explore

HTML <html><p>This is a paragraph</p></html>

    <tag>
    <img src="html.." width="200" height="200" />     src is called an 'attribute' of the tag
    
    HTML : Hyper Text Markup Language  ==> Skeleton for your page
    
    	Structure
    
    		Fixed Content

# Basic Web Page

    <!DOCTYPE html>
    <html>
    <head>
    	<title>Sample Page</title>
    	<style>
    		/* CSS styles the page */
    		body{
    			background-color: #F5FAFF;
    			font-family: Verdana;
    		}
    		nav#mainNav{
    			background-color: #E6E6FF;
    
    		}
    		nav#mainNav>ul>li{
    			
    		}
    		nav#mainNav>ul{
    			font-size:1.5em;
    			margin-left:10%;
    		}
    		nav#mainNav li{
    			list-style:none;
    			display:inline-block; /* full line */
    			margin-left:5%;
    			padding:2vh 0;
    		}
    	</style>
    	<script>
    		/* Javascript makes things happen */
    		
    	</script>
    </head>
    <body>
    	<h1>Title</h1>
    	<h1>Another Title</h1>
    	<p>Paragraph takes full line</p>
    	<!-- comment -->
    	<nav id="mainNav">
    		<ul>
    			<li><a href="#">Home</a></li>
    			<li><a href="#">About</a></li>
    			<li><a href="<https://www.intel.com>">Contact</a></li>
    		</ul>
    	</nav>
    	<div>
    		<p><strong>DIV is a division on a page</strong></p>
    	</div>
    	<header>Sections are : header</header>
    	<section>Section</section>
    	<aside>Aside</aside>
    	<footer>Footer</footer>
    	<footer>asdf</footer>
    
    	<style>
    		div.box{
    			background-color: #A7C9FF;
    			padding: 10vh;
    			width:15vh;
    			height: 15vh;
    			display:inline-block;
    			margin: 2vh;
    		}
    		div.box-container{
    			margin:10vh;
    			border:1px solid #33FFEA;
    		}
    	</style>
    	<div class="box-container">
    		<div class="box">Here is a box</div>
    		<div class="box">Here is a box</div>
    		<div class="box">Here is a box</div>
    		<div class="box">Here is a box</div>
    		<div class="box">Here is a box</div>
    		<div class="box">Here is a box</div>
    		<div class="box">Here is a box</div>
    		<div class="box">Here is a box</div>
    	</div>
    
    
    </body>
    </html>

# Bootstrap

Building raw from HTML can be very time consuming.

It's much better to find an amazing template online and use that.

Bootstrap also provides amazing ways to get started quickly on a website.

It provides all code for free and you just drop the code in.

[https://getbootstrap.com/](https://getbootstrap.com/)

# Node JS

Javascript took over the web because Netscape Navigator invented it, but everyone adopted it.

Today javascript powers most if not all of our browsers.

But! Smart people from Google took Javascript OUT OF THE BROWSER and made it to run standalone as an application which we now call NodeJS.

NodeJS ==> Just Javascript WITHOUT THE BROWSER

Let's run some!

# Build A Node Server

When using NodeJS we can reference existing libraries.

To install them use

    npm install <<library-name>>
    npm install http

Global install (all of Windows) add -g

Then use the library with

    var myVariable = require('<<library-name>>')
    var http = require('http')

# ReactJS

ReactJs builds a VIRTUAL WEB PAGE, then displays it as a REAL WEB PAGE.

React can JUST UPDATE THE BITS WHICH HAVE CHANGED, MAKING DYNAMIC PAGES FASTER

Manual React Page

# 

# Web Layouts : Flexbox

HTML Layout

    Tradition websites used HTML for layout
    
    <div class="navbar"><!-- menu --></div>
    <div class="main"><!-- main content--></div>
    <div class="footer"></div>

HTML5 Layout

    Semantic tag : same as DIV (division of a page) but just has meaning
    related to placing and content on page
    
    	HEADER
    	NAV     NAVIGATION BAR IE MENU ITEMS
    	SECTION
    			ARTICLE
    			ASIDE
    	FOOTER

Assistive technologies often pay attention to these tags

    eg Screen readers 
    eg <img alt=""  title="" />    
    		alt displayed if image fails to load
    		title is displayed on hover and also read out by screen reader

CSS

    <button class="buttonTypeRound" />
    
    <style>
    .buttonTypeRound{
    	border-radius:5px;
    }

1. Flexbox : 1D

    Useful for 1D arrangement of items eg NAVBAR or PICTURE GALLERY

2. Grid : 2D

    Set varying column widths to fixed/auto/match content etc
    Also same for rows
    Good for laying out responsive layout and placing elements with minimum
    of fuss. Good for centering items easily within page or grid box.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Flexbox</title>
        <style>
        	div.container{
        		width: 100%;
        		background-color: #eee;
        	}
        </style>
    </head>
    <body>
        <h1>Flexbox</h1>
        
        <div class="container">
        	<div class="box">Box</div>
        	<div class="box">Box</div>
        	<div class="box">Box</div>
        	<div class="box">Box</div>
        	<div class="box">Box</div>
        	<div class="box">Box</div>
        	<div class="box">Box</div>
        </div>
    </body>
    </html>

# Deployment of an HTML (Not .NET) website via NETLIFY

Push your website to the INTERNET for FREE and CONNECT IT VIA GITHUB with
AUTOMATIC DEPLOYMENT ON CHANGE (IE GIT PUSH)!

    BUILD LOCAL
    	PUSH TO GITHUB
    		DEPLOY TO NETLIFY
    CHANGE LOCAL
    	PUSH TO GITHUB
    		AUTOMATIC REDEPLOYMENT

Create account with [Netlify.com](http://netlify.com/)