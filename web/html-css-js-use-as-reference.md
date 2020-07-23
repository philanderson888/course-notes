# HTML CSS JS - Use As Reference But Do Not Develop

# innerHtml

Can be used to read the contents of a div which are being displayed

```csharp

// https://www.w3schools.com/tags/att_data-.asp 

<!DOCTYPE html>
<html>
<head>
<script>
function showDetails(animal) {
  var animalType = animal.getAttribute("data-animal-type");
  alert("The " + animal.innerHTML + " is a " + animalType + ".");
}
</script>
</head>
<body>

<h1>Species</h1>
<p>Click on a species to see what type it is:</p>

<ul>
  <li onclick="showDetails(this)" id="owl" data-animal-type="bird">Owl</li>
  <li onclick="showDetails(this)" id="salmon" data-animal-type="fish">Salmon</li>  
  <li onclick="showDetails(this)" id="tarantula" data-animal-type="spider">Tarantula</li>  
</ul>

</body>
</html>
```

# data-*

This can be used to embed data inside an HTML element which can be read at any time

```csharp
// https://www.w3schools.com/tags/att_data-.asp 

<!DOCTYPE html>
<html>
<head>
<script>
function showDetails(animal) {
  var animalType = animal.getAttribute("data-animal-type");
  alert("The " + animal.innerHTML + " is a " + animalType + ".");
}
</script>
</head>
<body>

<h1>Species</h1>
<p>Click on a species to see what type it is:</p>

<ul>
  <li onclick="showDetails(this)" id="owl" data-animal-type="bird">Owl</li>
  <li onclick="showDetails(this)" id="salmon" data-animal-type="fish">Salmon</li>  
  <li onclick="showDetails(this)" id="tarantula" data-animal-type="spider">Tarantula</li>  
</ul>

</body>
</html>
```

# CSS

# Background Image With Text

```csharp

#image {

        background-image: url('images/toquio.jpg');

        background-size: cover;

        width: 400px;

        Height: 400px;

        text-align: center;

        color: Red;

        font-size: 3em;

    }

#text{
	padding-top:400px;
}

// from student

#image {

        background-image: url('images/toquio.jpg');

        background-size: cover;

        width: 400px;

        Height: 400px;

        text-align: center;

        color: Red;

        font-size: 3em;

    }

<div id="image">

    <br />

    <br />

    <br />

    <p id="text">Kanto</p>

    <a class="btn btn-default" href="/sparta">

        Learn More

    </a>

</div>
```














# Pseudo

Pseudo-elements are used to style a specific part of an element.

They start with a double colon `::`.

> Sometimes you will spot them in the wild with a single colon, but this is only a syntax supported for backwards compatibility reasons. You should use 2 colons to distinguish them from pseudo-classes.

`::before` and `::after` are probably the most used pseudo-elements. They are used to add content before or after an element, like icons for example.

Here’s the list of the pseudo-elements:

::after - adds element before

::before - adds element after

::first-letter - styles first letter

::first-line - style first line

::selection - styles the text targeted

Let’s do an example. Say you want to make the first line of a paragraph slightly bigger in font size, a common thing in typography:

```
p::first-line {
  font-size: 2rem;
}
```

Or maybe you want the first letter to be bolder:

```
p::first-letter {
  font-weight: bolder;
}
```

`::after` and `::before` are a bit less intuitive. I remember using them when I had to add icons using CSS.

You specify the `content` property to insert any kind of content after or before an element:

```
p::before {
  content: url(/myimage.png);
}

.myElement::before {
	content: "Hey Hey!";
}
```











# Display

- `block`
- `inline`
- `none`
- `contents`
- `flow`
- `flow-root`
- `table` (and all the `table-*` ones)
- `flex`
- `grid`
- `list-item`
- `inline-block`
- `inline-table`
- `inline-flex`
- `inline-grid`
- `inline-list-item`

plus others you will not likely use, like `ruby`.

Choosing any of those will considerably alter the behavior of the browser with the element and its children.

In this post I’ll analyze the most important ones not covered elsewhere:

- `block`
- `inline`
- `inline-block`
- `none`

I cover others in separate posts:

- `table` in the [Tables guide](https://flaviocopes.com/css-tables/)
- `flex` in the [Flexbox guide](https://flaviocopes.com/flexbox/)
- `grid` in the [CSS Grid guide](https://flaviocopes.com/css-grid/)

# inline

Inline is the default display value for every element in CSS.

All the HTML tags are displayed inline out of the box except some elements like `div`, `p` and `section`, which are set as `block` by the user agent (the browser).

Inline elements don’t have any margin or padding applied.

Same for height and width.

You *can* add them, but the appearance in the page won’t change - they are calculated and applied automatically by the browser.

# inline-block

Similar to `inline`, but with `inline-block` `width` and `height` are applied as you specified.

# block

As mentioned, normally elements are displayed inline, with the exception of some elements, including

- `div`
- `p`
- `section`
- `ul`

which are set as `block` by the browser.

With `display: block`, elements are stacked one after each other, vertically, and every element takes up 100% of the page.

The values assigned to the `width` and `height` properties are respected, if you set them, along with `margin` and `padding`.

# none

Using `display: none` makes an element disappear. It’s still there in the HTML, but just not visible in the browser.

# Fonts

# @font-family

```csharp
/* Universal Styles */
@font-face { 
font-family: 'Glegoo'; 
src: url('../fonts/Glegoo-Regular.ttf') format('truetype');
}
```

# Font

```csharp
<!-- fonts -->
<link href="//fonts.googleapis.com/css?family=Cinzel:400,700,900" rel="stylesheet">
<link href="//fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900" rel="stylesheet">
<!-- /fonts -->

body {
	font-family: 'Raleway', sans-serif;
}

body p {
	color:#999;
	font-weight:300;
}

a.logo h1 {
	font-size:40px;
	font-weight:normal;
	color:#fff;
	text-transform:uppercase;
	font-family: 'Cinzel', serif;
}
```

# CSS Tables

### **Styling HTML Tables with CSS**A brief guide at working with tables in CSS**Published Jun 02, 2019**

> Learning CSS? Download my free CSS Handbook 🔥

---

Tables in the past were greatly overused in CSS, as they were one of the only ways we could create a fancy page layout.

Today with Grid and Flexbox we can move tables back to the job they were intended to do: styling tables.

Let’s start from the HTML. This is a basic table:

```
<table><thead><tr><th scope="col">Name</th><th scope="col">Age</th></tr></thead><tbody><tr><th scope="row">Flavio</th><td>36</td></tr><tr><th scope="row">Roger</th><td>7</td></tr></tbody></table>
```

By default it’s not very attractive. The browser provides some standard styles, and that’s it:

We can use CSS to style all the elements of the table, of course.

Let’s start with the border. A nice border can go a long way.

We can apply it on the `table` element, and on the inner elements too, like `th` and `td`:

```
table, th, td {
  border: 1px solid #333;
}
```

If we pair it with some margin, we get a nice result:

One common thing with tables is the ability to add a color to one row, and a different color to another row. This is possible using the `:nth-child(odd)` or `:nth-child(even)`selector:

```
tbody tr:nth-child(odd) {
  background-color: #af47ff;
}
```

This gives us:

If you add `border-collapse: collapse;` to the table element, all borders are collapsed into one:

# CSS Grid

```csharp
<fieldset>
<h1>CSS Grid</h1>
<style>
   #cssGrid {
      display: grid;
      border: 2px blue solid;
      height: 500px;
      width:100%;
      grid-template: repeat(4, 1fr 2fr) / repeat(4, 3fr 2fr);
      grid-gap: 5px;
    }

    .cssGridBoxA {
      grid-area: 5 / span 2;
       1 / span 2;
    }

    .cssGridBoxB {
      grid-column: 2 / span 6;
      grid-row: 2 / span 3;
    }
    .cssGridBoxC {
      grid-area: 6 / 8 / span 3 / span 1;
    }
    .cssGridBox {
      background-color: beige;
      color: black;
      border-radius: 5px;
      border: 2px dodgerblue solid;
    }
</style>

<div id="cssGrid">
    <div class="cssGridBox cssGridBoxA">Box A</div>
    <div class="cssGridBox cssGridBoxB">Box B</div>
    <div class="cssGridBox cssGridBoxC">Box C</div>
</div>

</fieldset>
```

Can generate a CSS Grid using Javascript!!!

# Styled system ???

Material Ui. Css frameworks

# Bootstrap

## IDE

[{{ pageSvc.title() }}](https://www.codeply.com/go/qhaBrcWp3v)

# Bootstrap Intro

**Bootstrap** is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first web sites. **Bootstrap** is completely free to download and use!

**Bootstrap** is an open-source Javascript framework. It is a combination of HTML, CSS, and Javascript code designed to help build user interface components. **Bootstrap** was also programmed to support both HTML5 and CSS3. Also it is called Front-end-framework.

Important Links

[http://www.w3schools.com/bootstrap/](http://www.w3schools.com/bootstrap/)

[http://getbootstrap.com/](http://getbootstrap.com/)

[http://startbootstrap.com/](http://startbootstrap.com/)

[http://pikock.github.io/bootstrap-magic/](http://pikock.github.io/bootstrap-magic/)

LESS Leaner CSS

[http://lesscss.org](http://lesscss.org/)

Variables.less file

MIXINS allow mixing class names as properties in other classes

Bootstrap 4 update

See [https://www.codeply.com/go/qhaBrcWp3v](https://www.codeply.com/go/qhaBrcWp3v) for a Bootstrap 4 update on NavBar links

# Navbar Collapsing Menu

```jsx
Firstly in the navbar create the button

<div class="navbar navbar-default navbar-fixed-top">
	<div class="container">
		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
	</div>
</div>

```

# Bootstrap Dropdown

```csharp
<li class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                          Northwind <b class="caret"></b></a>
    <ul class="dropdown-menu">
        <li><a asp-page="/AllCustomers">All Customers</a></li>
        <li><a asp-page="/NorthwindCustomers">Customers</a></li>
        <li><a asp-page="/InjectedCustomers">Injected Customers</a></li>
    </ul>
</li>
```

# Bootstrap Classes

Nested Grid

Responsive Images

GlyphIcons

Carousel

Modal Window

Container : allows us to center text

Container : allows us to set container-max-width at every media query breakpoint

Page-header : puts a margin-top on our block

Nav class turns an unordered list into a great looking list!!!

Bootstrap default grid classess : phone, tablet, desktop, large desktop

Img-responsive to make an image responsive

Col-md-pull-6 or col-md-push-6 pushes or pulls content one way

Nav makes an unordered list look great

Nav-pills makes an unordered list (nav) go horizontal

Pull-right

Nav-tabs makes an unordered list (nav) go horizontal

Visible-xs content is only visible in smaller devices

Navbar just puts a horizontal band across our site

Navbar-default sets the colouring (very light grey) for a navbar

Navbar has a container INSIDE it! So content is same width as below!

Navbar-brand

Text-muted can be used in a navbar-brand

collapse navbar-collapse used in a navbar menu to make it disappear below breakpoint in order to permit a collapsable menu to appear at that breakpoint also

Nav navbar-nav puts an <ul> inside a navbar horizontally

Nav navbar-nav navbar-right pulls all navbar content to the right

Navbar-inverse gives navbar all the dark colours

Navbar-fixed-top fixes the navbar to the top of the screen (have to add a 70 pixel margin-top to the body when you do this or alternatively use page-header class on the first item below the navbar

Navbar-toggle places the drop-down menu to the top right when the screen width breakpoint is reached and the horizontal menu disappears

Container max-width 1000px sets screen to max width

Dropdown in <li> makes it a dropdown menu

<b class="caret"> makes dropdown arrow symbol to indicate a dropdown menu

<ul class="dropdown-menu"> creates a dropdown menu in a navbar

<li class="divider"> in a drop-down menu, provides a divider item

<b class="glyphicon glyphicon-camera"> adds a glyphicon to our page

Carousel : plays photos round and round

<div class="carousel"> creates a carousel

<div class="carousel slide jumbotron"> allows carousel to slide from side to side

<div class="carousel-inner"> creates inèner carousel content

<div class="item active"> is item within carousel-inner div

<div class="modal fade" fades in from the top

<div class="modal-dialog" centers any modal dialog

<div class="modal-content" gives background colour and shape

<div class="modal-header and modal-content"> actual text of modal

<button class="close">

<data-dismiss="modal"> allows the modal window to close on click

Nav-pills

Nav-stacked

Nav-tabs

.show

.hidden

.sr-only screen reader only

.invisible means it still affects screen flow

Clearfix
































# Nightwatch Testing

Nightwatch is a testing library

```csharp
Nightwatch js walkthrough

mkdir nightwatch-intro
	git init
	npm init -y
	npm install nightwatch --save-dev
	in package.json change test command to “nightwatch”
	touch nightwatch.conf.js
	mkdir tests (src_folder in json file)
	touch firstTest.js
	npm i chromedriver --save-dev

Cucumber:

npm install --save nightwatch-api cucumber cucumber-pretty
	Run a particular scenario with tags: npm run test:cucumber -- -t @test
```





























