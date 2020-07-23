# CSS






# CSS Glossary

[CSS Preprocessing](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#css-preprocessing)








### CSS Preprocessing

Pre-processors extend CSS with

- variables
- operators
- interpolations
- functions
- mixins

Pre-processing also helps with different CSS for different browsers

### SASS

```
$font-size: 16px;
div {
    font-size: $font-size;
}
```

### LESS

```
@font-size: 16px;

div {
    font-size: @font-size;
}
```

### Stylus

```
font-size = 16px

div
    font-size font-size
```

### SASS Nesting

Preprocessors also help with nesting for better visual code

```
$link-color: #999;
$link-hover: #229ed3;

ul {
    margin: 0;

    li {
        float: left;
    }

    a {
        color: $link-color;

        &:hover {
            color: $link-hover;
        }
    }
}
```

### SASS Mixins allow combining CSS properties

```
@mixin bordered($width) {
    border: $width solid #ddd;

    &:hover {
        border-color: #999;
    }
}

h1 {
    @include bordered(5px);
}
```

### SASS Colour operations

```
saturate($color, $amount)
desaturate($color, $amount)
lighten($color, $amount)
darken($color, $amount)
adjust-hue($color, $amount)
opacify($color, $amount)
transparentize($color, $amount)
mix($color1, $color2[, $amount])
grayscale($color)
complement($color)
```

### SASS If..Else

```
@if lightness($color) > 30% {
    background-color: black;
}

@else {
    background-color: white;
}
```

### SASS Loops

```
@for $i from 1px to 3px {
    .border-#{i} {
        border: $i solid blue;
    }
}
```

### SASS Maths Operations

```
1cm * 1em => 1 cm * em
2in * 3in => 6 in * in
(1cm / 1em) * 4em => 4cm
2in + 3cm + 2pc => 3.514in
3in / 2in => 1.5
```

### SASS Importing Libraries

```
@import "library";
@import "mixins/mixin.scss";
@import "reset.css";
```



















```
CSS GET AND SET BY JAVASCRIPT CLASSNAME

	('id').className="myCSSClass";   replace existing classes
	
	('id').className += "myCSSClass";   add to existing classes (space required!)

```



```
FLOAT:LEFT

OVERFLOW

BOX-SIZING
	CONTENT-BOX			DEFAULT IE WIDTH IS CONTENT ONLY
	BORDER-BOX			WIDTH IS UP TO BORDER, ONLY MARGIN IS NOT INCLUDED
	
	
BACKGROUND-IMAGE:URL('')

BACKGROUND-REPEAT
	REPEAT
	REPEAT-X 
	REPEAT-Y 
	
	
BACKGROUND-ATTACHMENT:SCROLL (WITH PAGE) OR FIXED(STAYS IN PLACE AS PAGE
		SCROLLS DOWN)
		
		
		
BACKGROUND : SHORTHAND WAY OF WRITING ALL OTHER PROPERTIES

	BACKGROUND : TRANSPARENT REPEAT-X URL('ABC.JPG');

```

# CSS SUMMARY

```
CSS

	H1			TAG
	
	.CLASS
	
	#ID
	
	P.YELLOW		PARAGRAPH AND CLASS YELLOW
	
	#ID:HOVER
	
	H1,H2,H3    	APPLY TO ALL
	
	DIV UL LI		APPLY TO LIST ITEM INSIDE UL INSIDE DIV
	
	DIV>UL			ONLY APPLY TO UL IF IT IS THE IMMEDIATE CHILD
	
	DIV+P			ONLY APPLY TO P IF IT FOLLOWS DIV (SIBLING)
	
	DIV~P			APPLY TO ALL P ELEMENTS WHICH ARE SIBLINGS OF DIV
	
	* ALL

```

### Attribute Selectors

```csharp
INPUT[TYPE="TEXT"]
INPUT[CLASS~="RED"]			MULTIPLE ITEMS, ONE OF WHICH IS RED
           ^=				STARTS WITH RED
			   $=				ENDS WITH RED
			   *=				CONTAINS RED
```

```

			   
			   
INHERITANCE FROM PARENT TO ALL CHILDREN

	!IMPORTANT
	
	
CSS RULES APPLIED

	LEAST SPECIFIC
	
	MOST SPECIFIC
	
		IF SAME SPECIFIC THEN APPLIED IN LINE ORDER
		
		

CSS
	INTERNAL
		<link href="" rel="stylesheet" media="screen/print">
	EXTERNAL
	INLINE
	
		
<<< VISUAL STUDIO DEBUG LAB >>

F12 DEMO

```

# CSS OVERVIEW

```
h1		TAG
.myclass
	USE FOR MULTIPLE ELEMENTS
#myID	
	USE FOR ONE UNIQUE ELEMENT ON PAGE
p.red
	PARAGRAPH ALSO CLASS="red"
p#red	PARAGRAPH ALSO ID="red"
p#red:hover  14:25 07/07/2016	
div>ul>li	ONLY APPLY TO LI IF IT IS THE 
			IMMEDIATE CHILD OF UL
			WHICH IS IMMEDIATE CHILD OF DIV
div li
	div
		ul
			li		MATCHED
			li		MATCHED
div > ul > li
	div
		ul
			li	MATCHED
			li	MATCHED
#one+li			match sibling following
	ul
		li id="one"
		li		MATCHED
		li		
#one~li			match all siblings following
	ul
		li id="one"
		li		MATCHED
		li		MATCHED
		
	
* 		match all elements

INPUT[TYPE="TEXT"]
INPUT[CLASS~="RED"]     ONE OF THE CLASSES IS RED
INPUT[CLASS^="RED"]	CLASS STARTS WITH RED
INPUT[CLASS$="RED"]	CLASS ENDS WITH RED
INPUT[CLASS*="RED"]	CLASS CONTAINS THE TEXT 'RED'
	
!IMPORTANT		OVERRIDE AND ENFORCE; ALWAYS APPLY
CSS RULES APPLIED
	LEAST SPECIFIC				ELEMENT 
						
						THEN CLASS
	MOST SPECIFIC				ID MORE SPECIFIC

		IF SAME, THEN APPLIED IN LINE ORDER

```

FONT
font-family:FancyWebFont,Arial,Verdana //takes first one
// that browser
// has loaded
font-size:15px
font-style:italic;
font-weight:bold/normal/100 up to 900
@font-face	// install from web source

```
COLOR
	#<RED><GREEN><BLUE>
	#FF0000   RED
	red;
	rgb(255,0,0)
	rgba(255,0,0,0.5)
				a is opacity    0 HIDDEN (TRANSPARENT)
						1 OPAQUE
TEXT STYLES
	letter-spacing
	line-height;
	text-align: left/right/justify/center
	
	text-decoration:underline/line-through
	text-transform:uppercase/lowercase/capitalize(first letter)

DISPLAY:NONE			REMOVED FROM PAGE COMPLETELY
				(TAKES UP NO SPACE)
VISIBILITY:HIDDEN		THERE BUT INVISIBLE
BLOCK
	TAKES UP FULL SPACE ON ONE LINE
	DIV
	P
	H1..6
		
INLINE
	
	SPAN		FOR INLINE ELEMENTS
BACKGROUND-IMAGE:URL('ABC.GIF')
	BACKGROUND-REPEAT:
			REPEAT-X
			REPEAT-Y
			REPEAT
BACKGROUND : 

```

CSS BOX MODEL
STANDARD MODEL
WIDTH IS CONTENT ONLY
BOX-SIZING: CONTENT-BOX

```
ALTERNATIVE  BOX-SIZING : BORDER-BOX	
	WIDTH IS   CONTENT + PADDING + BORDER

```

USER INTERFACES (MODULE 10)
'ADAPTIVE UI'
RESOLUTION
ORIENTATION
INPUT METHOD
MOUSE
KEYBOARD
FINGER
VOICE
PEN
<WBR>	WORD BREAK
HTML TO PERMIT WORD BREAD (HARD CODED IN HTML)
FONT
IMAGES : SCALE OR USE DIFFERENT RESOLUTION IMAGES
@media screen and (max-width:1170px){}
@media screen and (max-width:800px){}
@media screen and (max-width:600){}
@media print
STRIP PAGE OF ALL COLOR

```
		MAKE READY FOR PRINTING

	WIDTH/HEIGHT/
	MAX/MIN WIDTH/HEIGHT
	ORIENTATION: PORTRAIT/LANDSCAPE
	RESOLUTION
	ASPECT-RATIO  16:9   4:3
	MAX-DEVICE-WIDTH
	
CONDITIONAL COMMENT (EG OLDER BROWSER : IE)
	<!--[if lt IE 7]>
	   <link href="" rel="stylesheet" />
	   <script src="">
	   <![endif] -->
PRINTING
	@media print{
		header, footer, nav{
			display:none	// STRIP OUT
		}
		p{
			font-size:
			color:
		}
		a:after{
			content:"attr(href)";
		}
		@page{
			size:A4
		}
		
	}

```

CSS TRANSITION
ALLOWS US TO GO FROM ONE CSS STATE TO ANOTHER
PARENT DIV{
WIDTH: 100PX
TRANSITION: WIDTH 2S; // IN HEADER TO ENSURE BOTH WAYS
}
DIV:HOVER{
WIDTH: 200PX

```
}

TRANSITION IS SHORT-HAND
LONG WAY
	TRANSITION-PROPERTY:WIDTH;
	TRANSITION-DURATION:2S;
	TRANSITION-DELAY:3S;

```

CSS TRANSFORM
RAW CSS TO CREATE SHAPE AND THEN TRANSITION
ROTATE(30DEG)
TRANSFORM(100,100)	MOVE
SCALE(2,3)	X2 horizontal
x3 vertical

KEYFRAMES
SOPHISTICATED CHANGES BETWEEN CSS STYLING
GIVES US MORE THAN TWO CSS STYLING POINTS
TRANSFORM : START => END
KEYFRAME : %
0%	START
(or FROM)
20%
40%
70%
100%	END
(or TO)
HAVE TO ALLOCATE A NAME TO THE EFFECT

```
	ANIMATION-NAME
	ANIMATION-DURATION
		 -DELAY
		 -ITERATION-COUNT:   	INFINITE
		 -DIRECTION: FORWARD/REVERSE

```

CSS ORIGINS
THREE WAYS TO ACCEPT CSS STYLESHEETS
AUTHOR STYLE SHEET	: CSS FROM WEBSITE
USER STYLE SHEET	: USER CAN ADD IF EG THEY CAN'T
SEE WELL, TO INCREAS TEXT SIZE
OR CONTRAST
USERAGENT STYLE SHEET : APPLIED BY BROWSER IF SETTING
NOT CREATED ELSEWHERE
USERAGENT!IMPORTANT	TOP PRIORITY
OVERRIDES USER!IMPORTANT
OVERRIDE AUTHOR!IMPORTANT
OVERRIDE AUTHOR
OVERRIDES USER
OVERRIDE USER AGENT	BOTTOM PRIORITY

INHERITANCE
PARENT
CLASS APPLIES HERE
CHILDNODE
SUBNODE
DOES CLASS APPLY HERE???

TEXT-OVERFLOW
controls how text is treated if it exceed the size of the
div that contains it
text-overflow:scroll;
:hidden;
:scroll
:clip
:ellipsis
:string('...')
POSITION ON PAGE
FIXED : ANCHORED TO PAGE AND DOES NOT MOVE EVEN IF PAGE MOVES UP
AND DOWN
ABSOLUTE : ANCHORED TO (0,0) ON PAGE AND WILL MOVE UP AND DOWN
IF PAGE MOVES
RELATIVE : TO POSITION OF ELEMENT PRECEDING IT
MUST ALSO SPECIFY top: bottom: left: right:
STATIC	: DEFAULT
float:left/right/none
clear:both	CLEAR FLOATS

# CSS Complete Notes

= CSS (MODULE 6)
Internal

```
	<style>
External
	link <link rel="stylesheet" type="text/css" href="theme.css">
	UNIFORMITY FOR SITE
	
Inline

	<button style="background-color:red;">
	
	
@import url('url') print       	MUST BE FIRST LINE OF CSS FILE.
								SLOW - DON'T USE
		screen
		
		screen and (orientation:landscape)
		
		projection
		
		tv
		
		
loadjscssfile("abc.css","css");					DYNAMIC ADD FILE

loadjscssfile("abc.js","js")					DYNAMIC ADD FILE

```

CSS checking
[CanIUse.com](http://caniuse.com/)

Media Types
@media screen/print/aural/handheld

```
@media='screen' and (max-width:768px)			MOBILE WIDTHS

```

ORDER OF APPLICATION
!TRUMPS ALL
LAST STYLESHEET APPLIED WINS

```
LAST STYLE APPLIED WINS

LAST RULE WINS

MOST SPECIFIC WINS

	# IS MOST SPECIFIC
	
	THEN
	
	. CLASS

```

CSS origins
author=developer	THIS ARE THE ONES THE DEVELOPER MAKES!

```
user=css added by end user eg for hard-of-sight users

user-agent=browser			

							THESE APPLY DFAULT BROWSER STYLES
									
		
	
	HIGHEST useragent! > user! > author!> author > user > useragent  LOWEST

```

SELECTOR
#ID

```
.class

tag eg  p  will refer to all paragraphs

getElementsByName
document.getElementById('x')
         getElementsByTagName('p')
		 getElementsByClassName('x')
		
$('#myid')...
$('.myclass')
$('p:nth-of-type(3)')

```

INHERIT
INHERIT CSS STYLING FROM PARENT ELEMENT

```
text-align

	HORIZONTALLY ALIGNS TEXT
	
		text-align:center/left/right/justify/start/end/match-parent

vertical-align
	vertical-align:20px/baseline/sub/super/top/text-top/middle/bottom/text-bottom/50%
	
	see W3Schools vertical-align 'Play-it' lab

text-decoration:overline/line-through/underline/blink
text-outline:<thickness><blur><color>

text-indent: 				INDENT FIRST LINE

text-overflow

	HOW TEXT IS TREATED WHEN IT GETS TOO BIG FOR THE DIV
	
	text-overflow:clip  			TRUNCATES TEXT AT EDGE OF BOX
	
	text-overflow:ellipsis			PROVIDES ... AT EDGE OF BOX
	
	text-overflow:string			DISPLAYS A STRING TO REPRESENT THE 	
									MISSING TEXT
text-transformation
	uppercase
	lowercase
	capitalize
	

list-style-type:circle/square/upper-roman/lower-alpha
list-style-image:url('');
list-style-position:inside/outside box defining content flow
overflow:scroll/hidden/visible/auto
	
z-index 
	-1 is behind 
	+1 is in front
	
	
		.div1{
			z-index:-1			underneath
		}
		
		
		.div2{
			z-index:1        	on top
		}
		
nav-index:1/2/3    defines the tab index of items on your page

	
page-break-after/before/inside/widows/orphans
		page-break-before:always          	ALWAYS FORCES A PAGE BREAK BEFORE ITEM
		
		
Word Wrap
	word-wrap
	
		break-word		split long words
		
		normal			default : lets word exceed container width
		
		
	??? Measure Up ???
		
		keep-all			only break if exceed container width
			

	
		
		
	
Cursor
	crosshair
	blinking	
	
	
text-shadow:x-offset y-offset blur color

```

position:

```
static      THIS IS THE DEFAULT AND IS USED WITH 
			EG FLOAT:LEFT TO FLOAT ITEMS.  
			
		
			float:left/right/none
			
			clear:both/left/right
		
relative   	to parent

			Must also specify 
			
			top: XXX ; bottom: XXX; left: XXX; right: XXX
			
				eg top:50px; will move the item DOWN 50px
				
			NOTE THAT A PLACEHOLDER ALSO IS KEPT IN THE ORIGINAL POSITION WHICH STOPS OTHER ELEMENTS FROM TAKING THE PLACE OF THE ITEM IE EVEN IF THE ITEMS MOVES THEN THE ITEM STILL SEEMS TO NOT HAVE MOVED AS REGARDS THE PLACEMENT OF OTHER ITEMS AROUND IT
			
			z-index:2 will place above other items
			
absolute 	RELATIVE TO PAGE

			OTHER ITEMS WILL THINK THE ITEM IS NOT ON THE PAGE
				
fixed 		no scroll

			RELATIVE TO BROWSER WINDOW !!!
			
			position:fixed;top:right
			
				(fixes a position relative to the top left)
				
	
display: block
display: inline			ignore height/width
display: inline-block	keep height / width

outline: 2px solid green
outline-offset:5px;

border-radius:5px;

overflow-x: 
overflow-y:

		visible/hidden/scroll
		
		
resize:horizontal/vertical/both/none

```

BORDER
border-radus:4px curvature of box radius

columns
column-count
column-width
columns : same as column-count and column-width combined
column-fill
column-gap
column-rule line between columns

Lists
list-style-image:url('abc.gif')
list-style-type:circle/square/upper/roman/lower
Animation
@keyframes
animation
animation-duration
animation-name
animation-play-state running/paused
BACKGROUND-IMAGE
BACKGROUND-IMAGE:URL(ABC.PNG)
BACKGROUND-REPEAT:REPEAT-X,REPEAT-Y

IMAGE : GRADIENTS
LINEAR GRADIENT
CAN USE AS A BACKGROUND

```
	BACKGROUND:LINEAR-GRADIENT (DIRECTION, START-COLOR, [MID-COLOR-LIST], END-COLOR)
	
			-MS-LINEAR-GRADIENT
			
			
	
		DIRECTION : SET IN DEGREES - DEFAULT IS 180DEG, OPTIONAL
		
	
RADIAL GRADIENT

	BACKGROUND:RADIAL-GRADIENT(POSITION,SHAPE,START-COLOR, MID-COLOR-LIST,
						END-COLOR)
						
			POSITION = LEFT, TOP RIGHT ETC (OPTIONAL)
			
			SHAPE = CIRCLE OR ELLIPSE

```

TRANSFORM (6-20)
ALL COMMANDS BELOW HAVE TRANSFORM: PREFIX

```
TRANSLATE : MOVE ITEM A CERTAIN DISTANCE
	TRANSLATEX(30PX)	MOVE 30PX IN X DIRECTION
	TRANSLATE(X,Y)		MOVE (X,Y)
	
	TRANSLATE3D(X,Y,Z)	MOVE(X,Y,Z)
	
	
SCALE : MAGNIFY THE ITEM BY A FACTOR OF X

	SCALEX(2)			DOUBLE ITEM IN X DIRECTION
	
	SCALE(2,2)			DOUBLE IN X AND Y DIRECTIONS
	
	SCALE3D(X,Y,Z)
	
	
ROTATE : CLOCKWISE BY X DEGREES

	ROTATE(30DEG)
	

SKEWX(30DEG)			SKEW BY 30 DEGREES IN X DIRECTION

SKEW(30DEG,30DEG)		SKEW BY 30 DEGREES IN X, 30 IN Y

```

CSS SHAPES 6-22
SQUARE

```
CIRCLE : BORDER-RADIUS:50%

TRIANGLE : WIDTH:0;HEIGHT:0;BORDER-TOP:200PX SOLID BLUE;BORDER-RIGHT:200PX SOLID TRANSPARENT;

```

TEXT-INDENT
INDENTS THE FIRST LINE
text-indent:50px

FIRST-LETTER
STYLE THE FIRST LETTER
<p id="cssFirstLetter">Hello</p>
<style>
p#cssFirstLetter:first-letter{
font-size:100px;
}
</style>

LINE-HEIGHT
SETS THE HEIGHT OF THE LINE

```
            <span style="line-height:10px;background:blue;">

```

BLOCKQUOTE
CAN USE TO STYLE A BOX THAT ARE TAKING A QUOTE FROM

```
:BEFORE CAN ADD IN A " IMAGE OR \\201C AS THE CHARACTER

```

IFRAME SANDBOX CANNOT AFFECT PARENT PAGE

```
sandbox="" sets javascript to not be able to affect page

```

PSEUDO-ELEMENTS
:pseudo : CAN'T EASILY IDENTIFY IN THE DOM TREE

```
PSEUDO-ELEMENTS : TEXT EG :FIRST
div p   		all p inside div

div > p 		immediate p

div + p			immediate p placed after div

div ~ p 		siblings of div which are p

:first
:first-child  selects every i if it is also the first child of a p
	p>i:first-child     first i in every p		
		
:first-of-type would select the first i regardless	
			p>i:first-of-type, last-of-type, nth-of-type(3)
						
:first-line
:first-letter
:last-child
:only-child
:nth-child(odd/3/2n-1)
:nth-last-child(2)		second last element

:after              h1:after{content:url(abc.gif)}
:before				h1:before{content:url(abc.gif)}
	
	NOTE : BEFORE AND AFTER ONLY APPLY IF ELEMENT CONTAINS TEXT

	content
	
		used with :before and :after to add content
		
		content: add content to an element eg video link, picture etc
		content:url   add URL
		content:counter   add COUNTER
		content:open-quote/close-quote
		content:string
		content:attribute    add URL
		content: " (" attr(href) ")";
		
		
	
	li:before{
		content:counters(item,".") ". ";           
		counter-increment:item;                    
	}

	
	
type-of

:first-of-type
:last-of-type
:only-of-type
nth-of-type(2)				p:nth-of-type(2)   select 2nd para
nth-last-of-type(2)

:target						If it is the target of a referring URL
:not

	NOTE : THESE QUALIFICATIONS REFER TO THE PARENT ITEM
	
	EG li:first-child   SELECTS THE FIRST li CHILD OF ITS PARENT

```

Searching And Filtering
^= begins with	a[href^='https://']
$= ends with a[href$='.jpg']
= exact match	a[href='[http://www.bbc.co.uk](http://www.bbc.co.uk/)]
*= contains	a[href*='bbc']
~= contains [title~="hello"] contains hello

```
has(tag)
:target: id

```

PSEUDO CLASSESS : AS THE RESULT OF USER INTERACTION EG :HOVER

```
a:link
a:visited
a:hover
a:active
a:focus
[target="_blank"]

Form input

	:checked
	:button
	
	input:enabled
	input:disabled
	input:checked
	
	:in-range			VALID FOR HTML INPUT ELEMENT EG NUMBER WITH RANGE min=1 max=10
	:out-of-range
	
	[type="text/button"]         eg input[type=..]

	::selection

	input:valid		PASSED VALIDATION
	input:invalid	FAILED VALIDATION

```

text-shadow : 3px 4px colour = horizontal-shadow, vertical-shadow, blur-radius, colour

Animation
animation-duration

Transition
transition-delay
transition(width,500ms)	Transition the width over 500ms

Orientation
orientation:portrait/landscape

image

```
clip:rect(top,right,bottom,left) from (0,0)

background-image:url('abc.gif');
background-attachment

	fixed       background is fixed while page scrolls over it
	scroll		background scrolls with page

background-repeat:no-repeat/repeat/repeat-x/repeat-y

	repeat   : both vertically and horizontally

background-position:top-right

```

CSS BOX MODEL
MARGIN BORDER PADDING CONTENT

```
BOX-SIZING

	SETS THE WAY WE MEASURE THE WIDTH OF THE BOX
	
	
	
	CONTENT-BOX     THIS IS THE DEFAULT
	
		WIDTH IS THE CONTENT ONLY.  HAVE TO ADD EVERYTHING ELSE ON
		<http://cscis12.dce.harvard.edu/lecture_notes/2009/20090702/images/boxmodel.gif>
	
	

		MARGIN  BORDER  PADDING     WIDTH    PADDING   BORDER   MARGIN
		
		<------------------TOTAL SPACE ON THE PAGE-------------------->
		
		
	BORDER-BOX
	
		WIDTH IS CONTENT IN MIDDLE + PADDING + BORDER BUT EXCLUDES MARGIN
		
		
		
		MARGIN   BORDER    PADDING    CONTENT  
		
		
		        |<---------WIDTH-------------

width/max/min
height/max/min

Padding

border
	border-collapse:collapse    merges border lines
	border-style:dotted/dashed/solid/double/groove/ridge/inset
	border-color:               	up to 4 colors for border
	border-top-style
	outline-color/width/style
	border-radius
	border-width
	border: dotted/dashed/solid/double/groove/ridge/inset 
	
	
margin

	center with
	
		margin-left:auto;
		margin-right:auto;

outline

	outline-color
	outline-style:dotted/dashed/solid
	outline-width
	outline-offset:top/bottom/left/right
	outline-width						DOES NOT AFFECT THE DIMENSIONS

```

box-direction

box-align	works with box-pack
box-pack	children inside box
box-orient
block-axis	VERTICAL
inline-axis	HORIZONTAL

box-flex 10 30 30 gives proportional widths 10:30:30
box-shadow:h-shadow v-shadow blur color spread inset
inset = shadow inside box

column
col	can format column
col-group	groups columns
colspan	<th colspan="2">

```
	all,2,3
	
	
column-width:200px
column-count:4;
column-gap:2px;

column-rule-style:dotted
column-rule-width:1px
column-rule-color:

column-span:all(columns) / 1

column-fill: auto/balanced
	
	balanced = equal column widths
	auto = width dependent on content

```

break-after
force a break after eg every 3 columns

break-before

display
flex/inline-flex	CREATE FLEX CONTAINER

```
grid/inline-grid				CREATE GRID CONTAINER

	display:grid{grid-columns:1fr "content-col" 1fr 1fr}    3 EQUAL COLUMNS
	display:grid{grid-rows:fit-content "content-row" 1fr 1fr}

	grid-definition-columns:150px 1fr     		DEFINE COLUMN WIDTHS
						   :50px 1fr 50px
	
	grid-definition-rows
	
				
		grid-line is the output of grid-definition
		
	grid-column 50% * * 200px         DEFINES 4 COLUMNS WITH RELATIVE WIDTHS
	
	grid-column-align:stretch/start/center
	
	grid-rows:auto;
	
	grid-columns:auto;
	
			
			
	grid-position						NAMES GRID POSITIONS USED IN GRID-TEMPLATE
	
		one{grid-position:a;}
		two{grid-position:b;}
		three{grid-position:c}
		
	grid-template						USES ITEMS DEFINED IN GRID-POSITION
				
		div{grid-tempate:"abc"}			LAYS OUT THE ORDER OF NAMED REGIONS DEFINED
										IN GRID-POSITION
	
	grid-area
	
		defined by grid-template, into which we put grid items or 
			grid-definition-columns/rows
	
	

inline-block

none: takes up no space       (opposite of visibility:hidden)

list-item   like <li>

```

display:flex

```
Look at all these items as the specification has changed quite a bit so must look at old and new specifications just to be sure where we are at
    
        Existing
            display:flex
            display:inline-flex
            flex : left, right, center, stretch
            flex : justify
            flex : space around
            flex : space between
            display:flexbox / inline-flexbox
            flex-wrap
            flex-pack : alignment : start, end, center, justify
            flex-direction: row, column, row/column-reverse
            flex-order
            flex-wrap
            flex-pack : alignment : start,end,center, justify
        Latest
            display: flex, display: inline-flex, align-content, align-items, align-self, justify-content and order.
   
	flex-wrap
	flex-pack : alignment : start,end,center, justify
	navigator.getUserMedia
	display:flexbox / inline-flexbox
	flex-wrap
	flex-pack : alignment : start, end, center, justify
	flex-direction: row, column, row/column-reverse
	flex-order
	display:grid
	display:flex
	display:inline-flex
	flex : left, right, center, stretch
	flex : justify
	flex : space around
	flex : space between
	flex-wrap
	flex-pack:justify, start, end, center
	flex-direction:row,column,reverse
	flex-order
	
	
	
	
	
	<div class='container'>
	<div class='child'>

```

Flexbox
Parent

```
	display:flex	
			block element 
	display:inline-flex
			inline element
			-ms-flexbox  (IE10 only)
		
				
	flex-direction sets child direction of flow in a box
		row					horizontal left to right
		row-reverse			horizontal right to left
		column				vertical				
		column-reverse		vertical bottom up to top
		
				Note : can also set direction:rtl; or ltr;
	
	
	justify-content					HORIZONTAL ALIGNMENT
	
		center
		flex-start					LEFT JUSTIFY
		flex-end                    RIGHT JUSTIFY
		
		space-between               EQUALISES SPACE IN THE MIDDLE
		
										DIV    Y      DIV     Y     DIV  
										
		space-around                EQUALISES SPACE AT OUTER EDGES AND MIDDLE
		
									    1x  DIV   2x    DIV   2X   DIV   1X
	

	align-items						VERTICAL ALIGNMENT

		center
		flex-start
		flex-end
		stretch						DEFAULT

	flex-wrap:
	
		nowrap;							DEFAULT  (ONE LINE ONLY)
		
		wrap;							WRAP IF REQUIRED
		
		wrap-reverse;
	
	

	align-content						WORKS WITH FLEX-WRAP
	
		
	
	
	
CHILD

	ORDER
	
		.FIRST{ order:1;}             ITEMS LAID OUT IN ORDER -1,1,2,3,10 ETC
	
	
	
	

misc notes

	flex-align sets default alignment for child boxes in flex box
			
			
			
	
	
flex-pack

	flex-start
	flex-end
	center
	stretch
	space-between
	space-around
	baseline
	
	
	<https://css-tricks.com/snippets/css/a-guide-to-flexbox/>
		
	<https://www.w3.org/TR/2016/CR-css-flexbox-1-20160526/images/flex-pack.svg>
	

Flexbox has 8 properties

	box-orient             
	box-pack             
	box-align             
	box-flex             
	box-flex-group             
	box-ordinal-group             
	box-direction             
	box-lines  
	
	

flex-order sets order of groups of child items within a box
					
	flex-order assigns groups to flexbox items
	flex-order assigns groups to flexbox items  
	flex-order of groups within child boxes
	
	
	
	
	
	
	
	
	
	
	
	
<fieldset>
    <style>
        .flexContainer{
            display:flex;
            width:500px;
            height:500px;
            background-color:palegoldenrod;
            flex:auto;
            justify-content:space-between;
            flex-wrap:wrap;
        }
        .flexChild{
            width:100px;
            height:50px;
            background-color:blueviolet;
            margin:10px;
            font-size:30px;
        }
    </style>
    <div class="flexContainer">
        <div class="flexChild">1</div>
        <div class="flexChild">2</div>
        <div class="flexChild">3</div>
        <div class="flexChild">4</div>
        <div class="flexChild">5</div>
        <div class="flexChild">6</div>
        <div class="flexChild">7</div>
        <div class="flexChild">8</div>
    </div>
    
</fieldset>
<fieldset>
    <h1>Flexbox</h1>
    <style>
        .flexContainer{
            display:flex;
            width:500px;
            height:500px;
            background-color:palegoldenrod;
            flex:auto;
            justify-content:space-between;
            flex-wrap:wrap;
        }
        .flexChild{
            width:100px;
            height:50px;
            background-color:blueviolet;
            margin:10px;
            font-size:30px;
        }
    </style>
    <div class="flexContainer">
        <div class="flexChild">1</div>
        <div class="flexChild">2</div>
        <div class="flexChild">3</div>
        <div class="flexChild">4</div>
        <div class="flexChild">5</div>
        <div class="flexChild">6</div>
        <div class="flexChild">7</div>
        <div class="flexChild">8</div>
        <div class="flexChild">1</div>
        <div class="flexChild">2</div>
        <div class="flexChild">3</div>
        <div class="flexChild">4</div>
        <div class="flexChild">5</div>
        <div class="flexChild">6</div>
        <div class="flexChild">7</div>
        <div class="flexChild">8</div>
        <div class="flexChild">1</div>
        <div class="flexChild">2</div>
        <div class="flexChild">3</div>
        <div class="flexChild">4</div>
        <div class="flexChild">5</div>
        <div class="flexChild">6</div>
        <div class="flexChild">7</div>
        <div class="flexChild">8</div>
    </div>
    
</fieldset>

```

linear-gradient (to right/45 deg, blue, red)
linear-gradient eg background: linear-gradient{45deg, white, black} goes from lower left to upper right

REGIONS (omit!?!?!?!)
exclusion : text flows around it with wrap-flow
wrap-flow around an image
flow-into	defines the source text which "flows into" the list of regions
defined in "flow-from"

```
				article{flow-into:article-flow}
				
				
flow-from 		defines list of regions to be treated as one region, that content
				can flow inside
	
				#region1,#region2{flow-from:article-flow}
		

content-box		defines exclusions.  This is the outer edge outside which content wraps around

containers are areas (regions) you flow text through

content flow  		block/inline

contentfolding		with adverts

content overflow	how to treat text when it overflows

	hidden
	scroll
	visible
	
stream : plain text to be fed through regions

```

CSS IN THE REAL WORLD
MODERNIZR	DYNAMICALLY LOADS JAVASCRIPT DEPENDING ON WHETHER THE BROWSER SUPPORTS
IT OR NOT

USER INTERFACES AND LAYOUTS (MODULE 10)
'ADAPTIVE UI'

```
	RESOLUTION
	ORIENTATION
	INPUT METHOD
		MOUSE
		KEYBOARD
		FINGER
		VOICE
		PEN
		
		
TAGS

	<WBR>		WORD BREAK  
	
	
	
FONT

IMAGES : SCALE OR USE DIFFERENT RESOLUTION IMAGE

```

CSS EXTRA (10-2)
CAN DEFINE A STYLESHEET FOR A PARTICULAR CSS TYPE

```
<LINK REL="STYLESHEET" HREF="" MEDIA="PRINT">    FOR PRINTING ONLY

@MEDIA PRINT{

}

@MEDIA SCREEN AND (WIDTH<480PX) { }

	WIDTH/HEIGHT
	
	DEVICE-WIDTH/HEIGHT
	
	MAX-DEVICE-WIDTH
	
	ORIENTATION:PORTRAIT/LANDSCAPE
	
	RESOLUTION
	
	ASPECT-RATIO
	
	
	
	
CONDITIONAL COMMENTS

	<!--[if lt IE 7]>
		<link href="" rel="stylesheet" />
		<html class="ie6">
	<![endif]-->
	
	<!--[if IE]>
		<script>...
		<![endif]-->
		
		
	<!--[if !(IE)]>
		<script>...
		<![endif]-->
		
		

PRINTING

	@media print{
	
		header, footer, nav {
			display:none			
		}
		article{background:none;}
		x{transform:none}
		
		
		p{
			font-size;color;
		}
	
		a:after{
			content: "attr(href)"
		}
	
		@page{
			size:A4
		}
		
		
	
	
	}

```

CSS TRANSITION (MODULE 12)
DIV{
WIDTH:100PX;
TRANSITION:WIDTH 2S;
}

```
DIV:HOVER{
	WIDTH:200PX;
}

DIV{
	WIDTH:100PX;
	TRANSITION:WIDTH 2S,COLOR 2S
	COLOR:RED;
}
DIV:HOVER{
	WIDTH:200PX
	COLOR:YELLOW
}

CAN PUT TRANSITION IN THE DIV:HOVER PART BUT THEN IT WILL ONLY APPLY ON THE FORWARD TRANSITION AND NOT ON THE REVERSE TRANSITION

LONG HAND

	TRANSITION-PROPERTY:WIDTH
	TRANSITION-DURATION:2S
	TRANSITION-DELAY:2S;
	
	
EVENT : TRANSITIONED

	DIV.ADDEVENTLISTENER("TRANSITIONED",FUNCTION(){})

```

CSS TRANSFORM (12-7)
ROTATE(ANGLE)

```
SCALE(X,Y)

TRANSLATE(X,Y)

SKEW(X,Y)

	EACH ONE HAS A ROTATEX()  VERSION

```

KEYFRAMES (12-16)
SOPHISTICATED CHANGES BETWEEN CSS STYLING
@KEYFRAMES X{

```
0%{BACKGROUND-COLOR:RED}
FROM{}

30%{}
50%{BACKGROUND-COLOR:BLUE}

100%{BACKGROUND-COLOR:GREEN}
TO{}

#DOTHIS.ANIMATE{
	ANIMATION-NAME:X;
	ANIMATION-DURATION:10S;
	ANIMATION-DELAY
	ANIMATION-ITERATION-COUNT:				INFINITE
	ANIMATION-DIRECTION:FORWARD
}

JAVASCRIPT AND KEYFRAMES

@KEYFRAMES X{
	0%{}
	50%{}
	100%{}
}

#DOTHIS.ANIMATE{
	ANIMATION-NAME:X
	ANIMATION-DURATION:10S;
}

<id>.classList.add('animate')

$('Z').ADDCLASS('ANIMATE')
```

# CSS Glossary

```jsx
Houdini CSS
CSS Grid and Sub Grid

Background-image:url(image.jpg)
Background-size:cover

Css tricks has a good summary of all css features 

Cursor:pointer shows the mouse hand like when hovering over url 

Display:block
Display : inline-block can produce inline content e.g. menu

Colours at paletton.com

Color 
  #aabbcc hex
  Rgb(1,2,3)
  Rgba(1,2,3,0.5)

Selector by Element, ID, Class, Attribute, Pseudo Class, 
text-decoration
a:visited
a:active
a:link
a:hover
sibling +
sibling ~
input: valid/invalid
input: required/optional
nth-child
Pseudo Class eg nth-child
li:first-child, nth-child,nth-child(2),nth-child(2n+1),nth-child(-n+4),nth-child(4+n)
Pseudo Element :: nth-child
Pseudo Class :active :visited :link :hover
Pseudo Element :: nth-child  ::before  ::after  
::after { content: ' " '  }
::after { quotes :  } 
li { display:inline-block}  // make a list into a horizontal !!!
text-decoration:none/underline
:: before/after{ content: ' addin ' }
:: first-line 
:: first-letter
input:placeholder
text-transform:uppercase
letter-spacing:2px
cursor:pointer;
pointer-events:none
Specificity: 1) Inline 2) ID 3) Class, Attribute, Pseudo Class 4) Element, Pseudo Element

SCSS is an extension of CSS which can be used to extend the language
SASS is an older way of writing concise CSS.  It's fully compatible with all CSS libraries.
LESS stands for Leaner Style Sheets.  LESS is converted to CSS with Less.js
```