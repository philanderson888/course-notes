# learning 7000 lines

## contents

- [learning 7000 lines](#learning-7000-lines)
	- [contents](#contents)
	- [streaming](#streaming)
	- [azure](#azure)
	- [cyber](#cyber)
	- [graphics](#graphics)
	- [war](#war)
		- [random](#random)
- [Random Web](#random-web)
	- [css](#css)
	- [javascript](#javascript)
	- [random](#random-1)
	- [nodejs](#nodejs)
- [aspx](#aspx)
	- [random](#random-2)
	- [javasccript](#javasccript)
	- [javasccript appendix](#javasccript-appendix)
	- [random](#random-3)

## streaming

```
dash dynamic active streaming over http - shaka, vlc, videojs, libdash, best quality and best on-demand
hls http live streaming, best for live and best for apple smooth streaming
scte-35 marker - can insert advert of x seconds
ala watermark
ala breakpoint
mpd manifest of fragments
ms playready encryption
google widevine encryption
cpm cost per minute
dai dynamic advert insertion
csai client side advert insertion
ssai server side advert insertion
ala addressable linear adverts
hylda hybrid linear digital adverts ensures breakdown of each adpod is suitable
l2vod live-to-vod is extended restart after finish
psb public service broadcaster (regular tv)
ebvs exit before video start
vsf video start failure
spi stream performance index
```

## azure 

```
resize-vhd -path ... -sizebytes 1234
vm node fairness load balances
vm start order
storage spaces
storage qos minimum iops in out per second
storage replica
srg synchronous replication group
storage deduplication
vrss virtual receive site scaling
.vmcx virtual  machine configuration
.vmrs vm runtime state
get-vm -name myVM | format-list *
vmgroups
$vm1 = get-vm -name myvm1
new-vmgroup -name mygroup -grouptype vmcollectiontype
$mygroup = get-vmgroup -name mygroup
add-vmgroupmember -vmgroup $mygroup -vm $vm1
get-vm | format name, state, groups - autosize
vm management group can contain a) vmgroup b) vm
new-vmgroup -name mymanagementgroup -grouptype managementcollectiontype
move-vm myvm newvmhost
lab add recovery agent - group policy - computer configuration - settings - key - policies - data recovery agents 
lab recovery bitlocker drive - 1) add user in group policy, computer, settings, key, policies, drive, encryption 2) add drive id 2) group policy, computer, templates, components, bitlocker 3) enable dra recovery on the policies 4) recover i) os drives ii) data drives iii) removable drives
```

## cyber

```
mx memory data
dep data execution prevention
cve common vulnerabilities and exposing
tryhackme
mimikatz
netdiscover
openvas
armitage red team
exploit scanner
msf
burpsuite
dirbuster
getent
snort
nazsi
f18
f35
mk49
mk29
scsi
squert
hping
ddos
evasion
crawl
angry ip
qualsys
nexpose
credential scan
energy
power
conduction
openvas
armitage exploit scan
nikto
ads alternate data stream
bro linux ids
c2 command and conquer
cacti logging
celebrite mobile hack
htttrack copy site
siem security info event management
sop standard operating proceures
burp suite
party kit hosting
nessus vulnerability scan
scap security content auto protocol
cvss common vulnerabilities scoring system
ocsp online certificate status protocol
passwords.com
sigcheck checks root certificates
openssl
certutil
sslstrip - fake ssl
htst only allows https
openvas
armitage
securityonion ids
evasion generates payloads
meterpreter payloads for exploit
networkminer scans local pc
sysmon logging
siem logs
alienvalut = siem
autopsy forensic analysis of drive
encase forensic
ftk forensic toolkit
cellebrite
veil create payload
ettercap hack dns
ettercap hack arp cache
loic low earth orbit cannon
beef browser exploitation framework
cyberstalk
osint
google dorking
exploit-db.com
truthfinder.com
the harvester
pipl social media
peekyou
echosec.net
centralops.net dns harvesting
whois lookup
geoip lookup
netcraft online security company
htttrack website copier
nmap network mapper
zenmap ui form of nmap
openvas vulnerability scanner
nessus vulnerability scanner
qualys cloud vulernability scanner
scap is xml framework to categorise vulnerabilities
bugtraq disclose vulnerabilities (not used any more)
nvd national vulnerability database 
cvss common vulnerability scoring system
oval open vulnerability and assessment language uses xml to report vulernabilities and system state
xccdf is xml security checklists and benchmarks
credentialed scan after log in 
agent scan after client install
discovery scan of network
assessment scan of vulnerabilities
sensor scan from external node
scope of scan is ip and ports
pci payment card industry
pci dss data security standards - compliance
wifi pineapple vulnerability assessment 
zap zed attack proxy scans websites
webgoat is vulnerable java app
cis center internet security
nist national institute science and technology
rum real user monitoring monitors how users see your app
burp suite vulnerability scan web apps and apis
port swigger research 
waf web app firewall is layer 7 defence
reverse proxy sits in front of servers to protect them
dropper onto machine
c2c command and conquer persistent threat
polymorphic evades detection by altering signature
```


## graphics

```
moqup
illustrator
sketchpad
demoqa HTML moqups
flinto
[uxdesign.cc](http://uxdesign.cc/)
```

## war

nimitz aircraft carrier

aircraft carrier gerald ford latest


### random

```
GIF !!! [https://giphy.com](https://giphy.com/)
    
Bogus Fake Data Generator [https://github.com/bchavez/Bogus](https://github.com/bchavez/Bogus)

Hadoop breaks up eg 1TB file to 128MB and each node processes that 128MB only, then combines results at end.

Composer fixes dependencies

Viewport tag instructs the browser that we may be viewing from a mobile device

Viewport width=device ==> means set the width to the width of the viewing device

Viewport initial scale = 1 means on initial page load everything is scaled properly

partial classes are joined together to form one class

WebGL develops games

MVC Controller requests model to perform CRUD operations, and decides result to return

MVC Controller : User -> Request via URL -> this is mapped via URLRouting module to the controller. 

Controller decides model to use and result to return.

MVC Controller class : inherit from IController

SOA Service Oriented Architecture

REST Representational State Transfer

Angular is Google open source with MVC and does 2-way binding

declarative ui - everything declared in UI

XSLT Extensible Stylesheet Language Transform which displays an XML document as eg a proper table!

MVC Model View Controller Model=Data + View=Visuals + Controller which takes updates from View and sends data to controller

Class nested static does NOT have access to other members of its enclosing class
Class nested static new object created using OuterClass.StaticNestedClass nestedObject =
Class nested static new using OuterClass.StaticNestedClass nestedObject

Class no-argument constructor eg Bike myBike = new Bike();

Class Number has subclasses Byte, Integer, Double, Short, Float, Long, BigDecimal, BigInteger AtomicInteger, AtomicLong

Class outer

coords.accuracy The accuracy of position
coords.altitude The altitude in meters above sea level
coords.altitudeAccuracy
coords.heading degrees clockwise from North
coords.latitude
coords.longitude
coords.speed speed in m/s

ctlKey returns whether or not Ctl key was pressed when event was triggered

devicemotion is (x,y,z) acceleration (javascript)
devicemotion is accelerometer
devicemotion measures rotationRate.alpha/beta/gamma
deviceorientation is alpha,beta,gamma angles off the zero

doctype strict transitional frameset

document.createElement(“p”) var para=document.createElement(“p”)
document.createTextNode(“abc”) var node=document.createElement(“text”)
document.queryselector() selects the next item in a class
document.querySelectorAll() selects all the items in a class
document.write document.write("<h1>This is a heading</h1>");
document.write(“<HTML_CODE>”);

DOM document.getElementsByTagName('*').length gives number of DOM elements

DP = density per pixel

DTD Frameset contains frames
DTD strict like XHTML
DTD Transitional contains some older HTML

encode/decodeURI(url) produces my%20test.asp?name=st%C3%A5le&car=saab my test.asp?name=ståle&car=saab

entity is encoding of reserved characters within the HTML

Event definition can be created with a 'custom' delegate but usual to use default EventHandler delegate

Event delegate connects the event to the method that is going to handle the event, the method handler

event DOWNLOADING indicates new downloads are available to download but the download has not yet started
event PROGRESS download in progress (JS)
Event publisher is the class that sends the notification that an event has happened
Event subscriber is the class that receives the notification that an event has happened
event UPDATEREADY indicates files have been downloaded and are ready to install (JS)
EventHandler (Object sender, EventArgs e) sender refers to object creating the event
EventHandler += means that this event handler is added to any existing event handlers, allowing for >1 event handler
EventHandler = will replace any existing event handlers with this one-and-only event hander
EventHandler eg Public Delegate Void EventHander(Object sender, EventArgs e) sender
EventHandler is defined public delegate void EventHandler(Object sender, EventArgs e); where sender refers to the object creating the event and e refers to an event data obect that contains no event data
EventHandler Object sender is the object creating the event
EventHandler Public Delegate Void
EventHandler(object o, EventArgs e) o created event

Exclusion causes text to flow around an object
exclusion creates block content for an inline element
exclusion creates block content for inline content to force items to flow to the left or right
exclusion defined by wrap-flow
exclusion defined by wrap-flow and defines shape that content will wrap around
exclusion defines how content wraps around an object defined by a shape
exclusion is eg an image around which text flows

execution stack = call stack has memory which is reclaimed when the stack unwinds

Expires header Expires:Thu, 15 Apr 2010 20:00:00 GMT or ExpiresDefault "access plus 10 years"

exponent y=123e5 (123x10^5) (JS)

figcaption = caption for an image

figure tells what type of image is contained

File inputFile = new File (“input.txt”); creates text file

File object has the name, size and contents of a file (JS)
file path must write \ as \\
file upload using var inputObj = document.createElement ("input"); inputObj.type = "file" (JS)
FileAPI can read files
FileList loads multiple objects as an array (JS)
FileReader reads a file into memory (JS)

Final prevents a subclass from being created

Float 1.23f 4 bytes with exponential 10^38
Float exponent is the number to which the radix is raised eg 7 in 1.273 * 10 ^ 7 has 32 bit precision
Float mantissa holds the number of significant digits in the number eg 1.273 in 1.273 * 10 ^ 7
Float mantissa is number of significant digits eg 2 in 1.23
Float radix is the number eg 10 that must be multiplied to a power
Floating point number has sign, mantissa, radix, exponent

float left means the item is placed left and text flows right
float left or right or none

form autocomplete YES/NO
form autofocus auto get focus when form loads
form formaction button overrides default form action for one button
form formaction overrides default GET/POST just for that button only
form formmethod overrides default GET/POST for one button
form has input type=text boxes to collect data and input type=submit button to send the data to page
form height/width
form label can specify the text to appear eg with a radio button
form list
form method eg POST, GET
form method GET creates query string to add to URL on submit
form method POST has invisible submit of data
form min/max on number, range, date, datetime, month, time, week
form multiple allows multiple entries in a field
form name action input
form name="Submit" action="ClientServlet"
form novalidate do not validate on submission
form pattern forces a pattern to be input
form placeholder
form required (field)
form required this field must be completed when form is submitted
form step gives allowed step values eg 2 forces 2,4,6 etc
Form submission var form=document.getElementById(“...”);form.submit; (JS)
form target -blank -self -parent -top indicates where the response is received after the form is submitted
form target = _blank _self _parent _top where go after submit
Form.Submit;

Format flag ( encloses minus numbers in brackets)
Format flag + shows a positive sign for positive numbers
Format flag , shows decimal separators
Format flag - is left justify
Format flag 0 shows leading zeros
Format flag ^ converts letters eg e to UPPER CASE
Format flag formats the output of numbers
Format flat by default is right justify
Format specifier %10.2f prints a number to 2 decimal places giving 10 characters for the answer
Format specifier d is a decimal integer
Format specifier e is an exponential number
Format specifier f fixes the number of decimal places after the point
Format specifier g is a general floating point number
Format specifier s is string

fraction <sup>1</sup>/<sub>10</sub>

heap is memory allocated to a program at runtime and is reclaimed when no more variables hold a reference to them

hgroup groups h1 and h2 headers

history (window.history) has info about the browser history and forward(), back(), go(), length() which is the number of URLs in history
history.length is the number of URLs in the browser history

canvas globalcompositeoperation layers images on top of each other
Canvas moveTo() Moves the path to the specified point in the canvas, without creating a line

ismap image is part of a server side image map

http.sys kernel driver for HTTP
HttpApplicationState store key-value pairs

HTTPC HTTP Client Service
HttpContext.current
HttpCookie name = new HttpCookie(“name”,”value”); Response.Cookies.Add(cookie)

hyphenation declares language eg <html lang="en-us">

hyphens none | manual (when ­ Soft Hyphen occurs) | auto

image interlacing displays a poor quality image first whilst the rest of the image buffers

Inner abstract

Inner anonymous

Inner class = nested non-static
Inner class has access to the variables in parent variables
Inner class is defined class OuterClass ..................{ class InnerClass {....}.........}
Inner class is defined using OuterClass.InnerClass innerObject = outerObject.new
Inner class local

INSERT INTO WHERE GROUPBY

insertAdjacentHTML adds HTML into DOM (1) beforebegin (2) afterbegin (3) beforeend (4) afterend

Instance variable is non-static
Instance variable make up the state of the object

Instanceof returns a boolean if (jack instanceof Boy)

Intent launches activities and allows components to interact one with another
Intent-Filter defines <action> optionally <category> and <data> to define which type of element this element may respond to
Intent-filter defines the start point, the MAIN class
intent-filter has <action>, (optional) <category>, (optional) <data> to specifies which type of element is allowed to trigger it
Intent-Filter in activity defines which components can interact with it <manifest><application><activity android:name=”.MyApp” android:icon=”@drawable/app_icon”><intent-filter><action android:name=”android.intent.action.MAIN” /><category android:name=”android.intent.category.LAUNCHER /> - this defines how the activity is launched from the MAIN activity. Only ONE activity should have the MAIN action and LAUNCHER category.

link state a:link/visited/hover/active(being clicked)

nav-left states where to navigate to when the left arrow key is pressed
nav-left tells where to navigate to when left key is pressed

non-virtual member cannot be overridden
onchange object.addEventListener (“change”,handler,useCapture);

Page Event Init Initialises page controls
Page Event InitComplete can change view state
Page Event Load can set control properties
Page Event Load Complete loads controls onto form and can make changes to them
Page Event PreInit Pre-Initialise means that we can see if this is a postback page
Page Event PreLoad
Page Event PreRender is the last stage
Page Event Save State means everything is complete now
Page Event Unload
Page Life Cycle Request, Start, Initialise, Load, Postback, Render
Page_load (object sender , eventargs ) executed each time page is loaded

pageX,Y is distance to left/right margins from point
pageX,Y is distance to top of page (even if scrolled off screen)

PE Portable Executable file is DLL or EXE

permission set runs from NOTHING to FULL TRUST

pixelDepth

Polling asks for info on a regular basis

polyfills allow you to have new features without breaking old browsers

Polymorphism means the method call is always determined by the type of the object, not the type of the variable

Pool is set of URLs served by worker processes

Post-load loads content after the page has loaded

Postback separates first run code from subsequent run code

pre is used for preformatted code

Preload conditional takes content based on where the browser thinks the user is going
Preload Unconditional just loads content which might be needed later

PrintWriter writes text to file

removeChild by child.parentNode.removeChild(childObject)

replace str=”this is my string”; str.replace(“string”,”hat”) replaces string with hat

Request.Cookies[“name”].Value

requestAnimationFrame allows transition

required attribute means a field cannot be empty

resize:none/horizontal/vertical/both specifies that an object can be resized by the user

Response.Redirect("URL") transfer control to any URL
Response.Write outputs text to screen and not to an object
Response.Write("<a href="[abc.com](http://abc.com/)">click</a>") opens link

rotate(degrees * Math.PI/180); rotates a canvas by so many degrees

rowspan is an entry in a table which spans more than one row <th rowspan="2">Telephone:</th>

touch target 7mm minimum
touch target 9mm recommended
Touch target dead space between icons
Touch target visual asset is the icon
touch target visual buffer is a border around an item

orientationchanged

touchend is triggered by the finger releasing from the screen

touchmove follows the finger

touchstart is triggered by a finger touching the screen

gesture event has scale and rotation

gesture touch moves object over screen

Screen touchlist is a list of all points touching the screen

screen.availHeight/Width usable screen size eg minus Taskbar
screen.availWidth/Height is size of screen minus features eg taskbar ie the usable user screen size

screenX is x coordinate of mouse when event is triggered
screenX,Y is distance to left/right from point
screenX,Y is distance to top of screen (including toolbars etc)
screenY is y coordinate of mouse when event is triggered

SDN Software Defined Network

sectioning root doesn't have a parent that can read its sections
sectioning root tag BLOCKQUOTE BODY DETAILS FIELDSET FIGURE TD
Sectioning Root Tag has content that does not appear in main document index ie BLOCKQUOTE BODY DETAILS FIELDSET FIGURE TD

Security Transparency by NET Framework prevents app code from running with infrastructure code

selector {attribute:value};

session.abandon
session.clear
session.removeall
Session.SessionID
session.timeout
Session["Name"]="value"
Session_End
Session_Start
sessionStorage persists only while the browser is open
sessionStorage setItem(key,value) / getItem(key) / removeItem
sessionStorage.getItem(KEY)
sessionStorage.removeItem(KEY)
sessionStorage.setItem(KEY, VALUE) or window.sessionStorage.KEY=VALUE (property name syntax) or sessionStorage['KEY'] = 'VALUE'; (array syntax)
sessionStorage.setItem(key,value)

shiftKey returns whether or not Shift key was pressed when event was triggered

Soft Hyphen ­ only displays a hyphen in a word if it breaks between lines

span inline text <p>My mother has <span style="color:blue">blue</span> eyes.</p>

split string.split(“,”) splits on commas (could be space, pipe)

Sprites reduce image loading times

SSE Server Sent Events auto-updates client from server

SSI Server Side Includes

stack capacity automatically increases as items are added

State begins with browser request finishing with web page closure
State eg HTTPApplicationState is server side for all users

State management (Client) Query String, Cookie, Hidden Field, ViewState
State management (Server) Session State, Application State
state management client side uses query strings, cookies, hidden fields, ViewState
State management maintains web page info during multiple requests

State on client : Query String, Cookie, Hidden Field, ViewState

Static final variable is a CONSTANT eg static final double PI = 3.14159

Static initialisation block is code which initialises a class, including detecting errors

Static nested are referred to by OuterClass.StaticNestedClass eg OuterClass.StaticNestedClass nestedObject = new OuterClass.StatidNestedClass();

Struct cannot inherit from another struct or class

style.display=”block” document.getElementById("hide").style.display="block"; show text
style.display=”none” document.getElementById("hide").style.display="none"; Hide text
style.property
style.visibility=”hidden”; document.getElementById("p2").style.visibility="hidden"; show text
style.visibility=”show”; document.getElementById("p2").style.visibility="visible"; show text

switch var d=new Date().getDay(); switch (d) { case 0: x="Today it's Sunday"; break; } document.getElementById("demo").innerHTML=x;

target activates when the URL #tag and the #id match, highlighting the selected block of text for example

targettouches is a list of all finger points on the target object

virtual is mutually exclusive with static, abstract, override

wbr possible line break eg for a hyphen

WCF Windows Communication Foundation creates and uses Web Services

Web Server Controls contain basic controls like buttons but also more advanced ones like calendar
Web Service has URL=Web Reference
Web Services communication uses XML over HTTP which provides compatibility between completely different systems
web services SOAP WSDL UDDI
Web.Config is XML file which is read by CLR

White space is defined as a space, new line \n, carriage return \r, tab \t, form feed \f

white-space: nowrap/normal/pre/pre-line/pre-wrap
white-space:normal wraps text
white-space:nowrap does not wrap text
white-space:pre gives 2 blank lines then does not wrap text
white-space:pre-line gives 1 blank line then wraps text
white-space:pre-wrap gives 2 blank lines then wraps text

window orientationchange window.addEventListener("orientationchange", fn() { } , false);
window resize window.addEventListener("resize", fn() { } , false);
window.devicemotion has details of velocity and direction of movement
window.devicemotion(velocity, angle)
window.deviceorientation (alpha, beta, gamma)
window.deviceorientation has (alpha,beta,gamma) compared with flat
window.history has forward,back,go, length
window.history is browser history
window.history.forward./back goes forward/back one page
window.innerHeight - the inner height of the browser window
window.innerHeight/Width
window.innerWidth - the inner width of the browser window
window.location
window.moveby moves the whole window
window.moveby(x,y) is a translation from current position
window.moveto moves a browser window to (x,y)
window.open opens a popup window eg window.open ("[http://www.javascript-coder.com](http://www.javascript-coder.com/)","mywindow");
window.outerHeight/Width

word-spacing:30px

wrap-flow both allows content to flow around both edges of an element
wrap-flow both clear start end
wrap-flow clear does not allow any content to flow around the object on the same line, only above and below.
wrap-flow defines an exclusion area around an object (auto is default)
wrap-flow end allows content to flow to the right of an element but not the left
wrap-flow start allows content to flow to the left of the element but not to the right
wrap-flow wraps content to left and right
wrap-flow: both allows text to flow around an exclusion

wrap-through:wrap (inherit) or none (don't inherit). Controls inheritance of wrap-flow

XHR XML HTTPRequest

XHTML elements must be in lower case!
XHTML values must be in quotes width=”100%”

XML <? is a Processing Instruction tag which tells us the document is XML
XML <?xml version="1.0" encoding="UTF-8"?>
XML <catalog xmlns="urn:oasis:names:tc:entity:xmlns:xml:catalog" prefer="system">
XML <class-loader delegate="true"/>
XML <context-root>
XML <jsp-config>
XML <system systemId="[http://localhost:8080/CalculatorApp/CalculatorWSService?wsdl](http://localhost:8080/CalculatorApp/CalculatorWSService?wsdl)" >

XMLDATAREADER

XMLDataSource

XMLDocument allows navigation of XML document

XMLNS XML Namespace is a required element of XHTML defined [http://www.w3.org/1999/xhtml](http://www.w3.org/1999/xhtml)

ABI Application Binary Interface allows app to talk to OS

Accept-encoding and content-encoding : allow for compression

ALM Application Lifecycle Management

AppContainer permits a clean uninstall

Application LifeCycle events are on the server : Global.asax
```


# Random Web

prop Gets Property

removeProp remove property

each function(obj){$.each(obj,function(key,value){});

serialize form data

trigger('click',function(){}) simulates a click

clone

detach

siblings

eq(0) returns first item


## css

```
width of (window).width (document).width
parent
parents UP TO ROOT
parents('ul') parents which are also ul
parentsUntil('y') parents until y
find('span') find span elements at any sub-level
next sibling
next('ul') next item if it is also ul
nextAll
nextUntil('y')
prev/All/Until
first/last match

script async as soon as ready

script defer after load

checkbox.checked

input disabled => read only

input.value in box

find()

search()

autofocus

/i case insensitive

mystring.indexOf('findthis',starthere);

mystring.lastIndexOf
```

## javascript

```js
font	ctx.font="20px Georgia/Verdana" before ctx.strokeText or ctx.fillText
strokeText	ctx.strokeText("Hello",startx,starty,maxWidth)
textAlign	ctx.textAlign="start/end/left/center/right"
transform	ctx.transform
translate	ctx.translate
moveTo	ctx.moveTo(x,y)	ABSOLUTE POINT
lineTo	ctx.lineTo(x,y)	ABSOLUTE POINT
stroke	NEEDS strokeStyle + font + lineWidth + strokeText
fill	NEEDS fillStyle + font + fillText
fillStyle	ctx.fillStyle="red" COLOUR INSIDE CHARACTER
fillText	ctx.fillText("string",startx,starty,maxWidth) FILL INSIDE CHARACTER
strokeStyle	ctx.strokeStyle="green"
lineWidth	ctx.lineWidth=3
strokeText	ctx.strokeText('string',0,0)
```

## random

```js
worker w = new worker (abc.js); postMessage(); onmessage=fn(event){event.data}

document.write REPLACE WHOLE PAGE IF IT HAS BEEN LOADED ALREADY

document.write APPEND TO DOCUMENT OPENED with document.open()

open NEW WINDOW OR DOCUMENT eg var x = window/document.open ("","title","width=200,height=100"); x.document.write("text");

document.getElementsByTagName('*').length NUMBER OF ELEMENTS

window.history	back/forward/go/length

window.history.length

canvas good for games. resolution-dependent. rendered pixel by pixel.

canvas image map is hyperlink from point

script tag has type/src/charset/defer

checkbox : onclick

checkbox.checked = true will set a checkbox to be checked

window.closed	BOOLEAN true if window has been closed

myWindow	TRUE IF WINDOW EXISTS

cookie	300 max, 20 max per domain, 4kb max size

en/decodeURL/URLComponent() ENCODE EG ADD %20 DECODE=REMOVE COMPONENT=PROPER ONE TO USE TO PREPARE URLS

status	get or set text in Status bar window.status="string"

document.write('string')	APPEND TO EXISTING LINE

document.writeln('string')	NEW LINE

escape	' becomes &apos, "=" &=& <=< >=>

expiration date : clear cookie

monospace = fixed-width font

id.focus() gives focus to an element

ignoreCase RETURNS TRUE IF REGEXP /abcd/i IS SET (IGNORE CASE!)

image(image,x,y,width,height)

indexOf('findThis',startPos) searches for 'findThis' and returns position if found

italics()	DISPLAY AS ITALICS

ignoreCase specifies if 'i' is set

image(image,x,y,width,height)

indexOf("text",startPosition) searches for "text" and returns position if found

italics()

keyReleased

lastIndex is the index at which to start the next match
lastindexOf() = last index position of string searched for
length number of frames in a window
line(x1,y1,x2,y2)
link() display as a hyperlink
list-style-image:url("")
list-style-type:circle,square,upper-roman,lower-alpha
List.value gives text of currently selected list box item

location object for window

Location = current URL : href protocol host hostname port pathway search hash

location host
location href
Location object : href, protocol, host, hostname, port, pathname, search, hash
Location object = current URL

location protocol

location.href = full url

location.search = query string (Part after ? in a URL)

log(x) natural logs (to the base e)

match returns array of matched text

mouseX/Y

multiline specifies if 'm' is set

myRandom = 1 + Math.Floor(Math.Random*6)

outerWidth/Height of window including scrollbars and toolbars

pageXOffset/YOffset = pixels document has been scrolled horizontally/vertically from upper left corner

Radio : onClick/Checked/name/value
RadioButton.checked true / false
RadioButton.value gives text value of Radio Button
RadioButtonID.checked = true to set a box as selected

random() between 0 and 1

rect(x,y,width,height)

return will return value to the calling statement

Reverse()	reverses order of elements in an array

rightNow = myDate.getTime(); 12.43

round(x) to nearest integer

screenLeft/Top x/y coordinates of window relative to screen
screenX/Y x/y coordinates of window relative to screen

search returns position of match

select when text is selected
Select = drop-down

self current window

Set-Cookie : name = value; expires = date; path = path; domain=domain; secure

slice() produces a new string from a string

small()

span.firstchild.nodevalue
span.firstchild.nodeValue changes value of this item
SpanID.firstChild is the text element in <span>
SpanID.firstChild.nodeValue = "text" to change <span> text

splice add/remove element from array

Split() splits a string into an array of substrings

status puts text in status bar of a window
Status displayed in status bar

strike()

string() converts number to string
string.charAt(x);
string.substring(08,10); gets three characters from position 8 through 9 and 10

stroke(r,g,b)

strokeweight(12)

sub()

text-decoration:overline,line-through, underline)
text-indent:50px
text-transformation:uppercase, lowercase,capitalise

TextArea.value = text in TextArea
textbox.value is text inside textbox
TextBoxID.disabled=true - disables a text box

toDateString()
toDateString(date) returns date

today = myDate.getDay(); 0-6

toExponential(x) eg toExponential(36503) = ??

top topmost browser window

toString(date) returns full date and time

toTimeString()
toTimeString(date) returns time

triangle(x1,y1,x2,y2,x3,y3)

undefined not yet assigned

unescape decodes an encoded string
unescape %20 to 'space'
unescape converts eg %20 to space, %F3 to ?, %21 to ! and deals with quotes “ as well

unLoad

unshift adds new item to start of array

value = text inside box

var myDate = new Date("11/22/2014 18:25:35") creates new Date
var myDate = new Date() creates a new date field with everything in it
var myDate = new Date(yyyy,mm,dd,hh,mm,ss,ms)

Var myValue = Math.method(value);

window.onload=function(){}

window.open(“URL”); opens new window

Windows object => document object

@keyframes myname

capture on eventListener ('click',function(){},true/false)
CAPTURE true => fires parent down to child
CAPTURE false => default which fires child up to parent

IF CAPTURE IS FALSE THEN BUBBLE IS TRUE

replace(<removethis>,<insertthis>) var newstring=oldstring.replace(<findthis>,<insertthis>)

search(regex)

this	INSIDE OBJECT WHICH HAS FOCUS

self	inside WORKER

SERIALIZE	FORM TO URL QUERY STRING ID=1&NAME=PHIL&...
SERIALIZEARRAY	FORM TO JSON ARRAY [ { JSON }, {JSON} ]

EVENT.TARGET RECEIVES ACTUAL EVENT

ADDEVENTLISTENER('CLICK',FUNCTION,FALSE) ? BUBBLE UP

TRIGGER('EVENT',FUNCTION)	SIMULATE EG A CLICK INSIDE CODE
OBJECT { ID:”1” }
myObject.prototype.newfield=1 / newMethod=function(){}

WBR TAG
WORD-BREAK

BREAK-ALL ALL WITHIN DIV
KEEP-ALL PRESERVE LENGTH
OVERFLOW : SCROLL, HIDDEN
POSITION :

ABSOLUTE SCROLL WITH PAGE

FIXED STAYS IN ONE POSITION EVEN IF PAGE SCROLLS

RELATIVE

STATIC

MARGIN:AUTO; CENTER ON PAGE

CSS BOX MODEL : WIDTH CONTENT ONLY. HAVE TO MANUALLY ADD ON PADDING, BORDER, MARGIN

OUTLINE DRAWN OUTSIDE MARGIN BUT DOES NOT ADD TO WIDTH

worker.terminate() FROM PARENT
```


## nodejs

```js
npm init -y : default install
npm cache -verify
express.static
design pattern
ng-init/click/class/cloak/app/controller/show/hide/copy
span.firstchild.nodevalue
res.status(400)
res.json({a:1})
res.send("text")
Source map - go from minified to regular code

PROCESS.ADDLISTENER
PROCESS.EVENTEMITTER
PROCESS.ARGV
PROCESS.PID

node_env=debug
node_env=production

readstream=fs.createReadStream(file)
writestream=fs.createWriteStream(file)

npm owner ls <module>

buffer.bytelength

cors cross origin request

nodemon debug app
nodemon --debug app

set debug=app:* & nodemon app

node-debug nodemon app
node-debug
node-inspector
node-debug nodemon app.js
node --debug app
node debug app

exec=requre('child_process').exec

numcores = require('os').cpus().length NUMBER OF CPUS

NPM LINK MYPROJECT SO NOW MYPROJECT AVAILABLE VIA REQUIRE('MYPROJECT')

COOKIE-PARSER
COOKIE-SESSION

CLOSURE : INNER FUNCTION WITH ACCESS TO OUTER VARIABLES AND PARAMETERS

myEmitter.emit('myevent');
myEmitter.on('event',function(){});
EventEmitter=require('events').EventEmitter; x=new EventEmitter;x.emit('myevent');x.on('myevent')
myemitter.on
myemitter.once
myemitter.emit
myemitter.removeAllListeners('thisevent')
myemitter.removeAllListeners() //all events

myEvent.setMaxListeners(20)

myemitter.emit('error')

d=require('domain');d=domain.create();d.run();d.on('error')

buffer fixed size : chunks of data
buffer=Buffer.alloc(8)
buffer=Buffer.alloc(8,1)
Buffer.alloc([1,2,3])
Buffer.alloc("my string","utf-8") //ascii,base64
buffer.toString()
buffer.toString(utf-8)
buffer.write('this string')

stream is pipe
stream is eventemitter
stream data type = buffer unless specify utf-8
stream : read, write, duplex, transform
mystream.push('more stuff to add to stream before send')
mywritestream.write/end
readstream.pipe(writestream)

REPL READ EVAL PRINT LOOP

STDIN/OUT/ERR
stdin.resume
stdin.on('data')

path.sep
path.normalise
path.dirname
path.extname
path.basename
__dirname
__filename

cwd
pwd

execPath
envPath

fs.readFile
fs.writeFile
fs.access
fs.stat
stats.isFile/Dir/Socket
stats.size

mode=war write append read

fd file descriptor

fs.write BUFFER OR DATA
fs.createWriteStream UNLIMITED SIZE

domain.on('error')
domain.run

EncodeURIComponent
DecodeURIComponent

explain(executionStats)

stats.isfile/dir/socket
stats.size
stats.mtime

fd file descriptor

fs.write
fs.createWriteStream

process.chdir
process.execPath
process.envPath
process.envPath.split(';').forEach(function(x){console.log(x)})

require('fs')
fs.writeFileSync(file,text)
fs.readFileSync(file)
fs.readFileSync(file).toString()
JSON.parse(fs.readFileSync(file));
fs.access(path,callback)
fs.stat(path,callback)

stats.isfile/dir/socket
stats.size
stats.mtime

fs.open(path,mode,callback(err,fd))

mode=write/append/read w a r
fd file descriptor
fs.readFile(path,utf8,callback)
fs.appendFile(path,data)
fs.write(fd,data,offset,length,position,callback)
fs.writeFile(path,data,callback)
fs.writeFileSync(path,data)
fs.readFile(path,callback)
fs.readFileSync(path)
fs.createWriteStream(path)



kill <PID>
killall <process>

pkill node
pkill

ps-node
child_process.exec
exec=require('child-process').exec
child=exec('node ./file.js')
child.stdout.on('data',callback)

request.app
request.baseURL
request.ip
request.hostname
request.method
request.originalurl
request.params
request.path
request.query
request.route

response.download()
response.end()
response.json()
response.jsonp()
response.redirect()
response.render()
response.send()
response.sendFile()
response.sendStatus()
response.send(STRING);
response.status(404).send(STRING)
response.sendFile(path,callback)

app.route('/path').get(fn).post(fn).put(fn)

mySchema=new MongooseSchema({})
show dbs
use db
db.dropDatabase()
show collections
db.mytable.insert({})
db.mytable.insert([{},{},{})
db.mytable.find().pretty();
db.mytable.update(ID,data)
db.mytable.remove(ID)
db.mytable.find({"a":"value"})
db.mytable.findOne

$or
$gte
$ne
$lt

.explain("executionStats")

db.mytable.ensureIndex({"a":1})
db.mytable.getIndexes()
db.mytable.dropIndex({"a":1})
.limit(10)
.sort({"name":1})
.sort({"name":-1})
.find({"name":/.*Phil.*/})
.aggregate({$group:{_id:"$field",total:{$sum:1}}})
$sum
$avg
$max

Python : built on Objective-C

URI Uniform Resource Identifier eg book ISBN
URL Uniform Resource Locator subset of URI eg book URL
URN Uniform Resource Name subset or URI eg book NAME

typeof tests for type of data

clearInterval clears clock

socket.emit : emit a message across the single socket (one client to server or server to one client)
client.emit : emit a message to all clients
```

# aspx

```cs
Httpcontext
HttpApplication state is permanent, server side, all users
App_WebReferences folder for web services
Application container - clean uninstall. Runs in RAM.
Application lifecycle : Browser : IIS : Application Domain : Core eg HttpContext/Response/Request : HttpApplication
Application Sequence Diagram flowchart for data
application cache - is it JAVACRIPT or ASP? Where is it???
COOKIE NEW : HttpCookie myCookie = new HttpCookie('name','value');
COOKIE EXPIRES : *** : DateTime.Now.AddMinutes(10);
COOKIE : ADD TO RESPONSE : Response.Cookies.Add(myCookie) ***
COOKIE : READ : Request.Cookies['name'].Value ***
_VIEWSTATE : LOOK AT IT *** IS HIDDEN
__VIEWSTATEGENERATOR *** IS HIDDEN
SESSION : NEW : SESSION.ADD('name','string');
SESSION : READ : SESSION['name'] == 'string';
APPLICATION STATE : PAGE => APPLICATION PROPERTY => HTTPAPPLICATIONSTATE : KEY-VALUE PAIRS
IIS VIRTUAL DIRECTORY
WEB SERVICE : HTTP
WEB SERVICE : XML
WEB SERVICE : SOAP
WEB SERVICE : WSDL : DESCRIBES SERVICE IN TERMS OF 1) DATA TYPE 2) METHODS 3) URL
WEB METHOD : CREATE ***
WEB METHOD : USE ***
ASPX P=PAGE
ASCX C = (USER) CONTROL IE HAND WRITTEN PIECE OF CODE
ASMX M = MODULE : CAN BE USED AS A SERVICE IE ADD ASMX IS EQUIVALENT TO ADDING A SERVICE ***
QUERY STRING
LOCAL STORAGE IS PERMANENT
SESSION STORAGE IS TEMP
VIEW STATE : input type=hidden name='__viewstate' id='__viewstate' value='HEX'
SESSION : CREATE SESSION_ID AND SEND BACK A COOKIE TO CLIENT WITH A SESSION ID
SESSION IS PER USER
APPLICATION STATE IS PER APPLICATION
APPLICATION STATE : HTTPAPPLICATIONSTATE APPLICATION['name']
PUSHSTATE : PERMIT BROWSER 'BACK'
REPLACESTATE : SET APPLICATION STATE TO PERMIT USAGE OF HISTORY AND BACK BUTTON IN BROWSER
AJAX REQUIRES UPDATEPANEL WHICH REQUIRES SCRIPTMANAGER ON MASTER PAGE WHICH GETS ACCESSED VIA SCRIPTMANAGERPROXY ON NON-MASTER
```


## random

ASCII literal as "\u0041"

BigInt Can hold arbitrarily large integer numbers
[https://developers.google.com/web/updates/2018/05/bigint](https://developers.google.com/web/updates/2018/05/bigint)


jquery_30_resize_browser.htm

window.onresize()

## javasccript

```js
Primitive Types

Primitive types in Javascript are
number
string
boolean
symbols
null
undefined
```

Window.Scroll

```js
window.scroll(0,100)    SCROLL DOWN 100 PIXELS TO POINT (0,100)

window.scrollTo(0,100)   AS ABOVE

window.scrollBy(0,100)   SCROLL DOWN A FURTHER 100 PIXELS 

	<http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_scrollby>
```

Source Maps eg bootstrap.css.map - Debugging Feature

These can be used to map a minified file back to its original source
to enable debugging of the run time code.
[https://www.html5rocks.com/en/tutorials/developertools/sourcemaps](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps)

Touch Gestures For Mobile

```
gesturechange 
gesturestart/end
orientationchange
touchcancel ***
touch and hold = right click
touchstart/end ***
touchmove ***
```

## javasccript appendix

```js
Names
Numbers
	64bit same as double
	no int type
Strings
	char does not exist - just use one string with one character!
	"\\u0041" allows ASCII / Unicode literal 
Objects
	Literals
	Prototype
Functions
	Objects
	Literals
		JSON
			x['y']
			x.y preferred as shorter
	Invocation
		Method / Function / Constructor
	Callback
Inheritance
Array
Regex
Functions
Loose Typing
	Don't need complex class hierarchy
	Don't have to cast so much
Dynamic Objects
Expressive Object Literal Notation
Prototypal Inheritance
	Objects directly inherit properties from other objects
Augmenting Types
	Augment 'Function.prototype' with 'method'
	Augment Number to have 'integer' method which returns the integer of a number
	Augment String to have 'trim'
	Note : all values receive new methods even the ones which were created before
	Augment a method only if it is missing
```

New Object Creation : Object.create() method

```js
if ( typeof Object.create !== 'function' ){
	Object.create = function(o){
		var F = function(){};
		F.prototype = o;
		return new F();
};
}
```

Replacing the Function.prototye with .method

```js
Function.prototype.method = function(name,func){
		this.prototype[name] = func;
		return this;
	}
```

Creating a Number.integer method
</pre>

```js
Number.method('integer',function(){
	return this.Math[this<0?'ceil':'floor'](this);
});
```

Creating a 'trim' method for Strings

```js
String.method('trim',function(){
		return this.replace(/^\\s+|\\s+$/g,'');
	});
```

Add a method conditionally

```js
Function.prototype.method = function(name, func){
	if(!this.prototype[name]){
		this.prototype[name] = func;
		return this;
	}
};
```

Array

```js
Create is_array function 
		var is_array = function(value){
			return value && typeof value === 'object' && value.constructor === Array;
	};
```

Things To Change

For..in

```js
for (item in myObject){} will iterate of the object but also pull out all methods etc
	To only bring out the members, use
	for (itme in myObject){
	  if(object.hasOwnProperty(item)){  // code }
}
```

Not

```js
! 
	use (foo) instead of (foo != 0)
	use (!foo) instead of (foo == 0)
```

Bad Parts

```js
Unavoidable Bad Parts (Appendix A)
	
	Unicode 
		<http://unicode.org/charts/>
		Javascript characters 16 bits
		Doesn't cover the 32 bit characters above this - treats as two separate 16 bit characters

	parseInt
		parseInt(08) converts from base 8 to base 10 so always use the following
		parseInt(myValue,10) which forces the result to return from base 10!
			(10 is called the 'radix' ie the number to which we count eg radix = 10 for base 10 counting)
	  tip : to convert to binary use x=parseInt(10101010,2) returns 170

	Floating Point 
		0.1 + 0.2 = 0.30000000000000004
		Solution eg money is to multiply into integer whole numbers then convert back at the end

  NaN
  	typeof (NaN === 'number') is true so the type of NaN is a number type

  NaN
  	if NaN is the output then one of the inputs at some stage has been NaN
  	suggested
  	var isNumber = function isNumber(value){return ((typeof(value)==='number') && isFinite(value))};
  	isNumber(2);
			true
		var isNumber = function isNumber(value){return ((typeof(value)==='number') && isFinite(value))};
		isNumber('hi');
		false
	Arrays
		Not like real arrays
		No bounds - can extend like queue/stack
		Typeof is object
		To detect if it is an array you must do
		if (Object.prototype.toString.apply(x)==='[object.Array]'){  // it's an array }
	hasOwnProperty
	objects
	null object
		test for if(typeof count[x] === 'number')

		use === and !==


```

## random

```
robot.txt at root of website
security.txt at root of website says if vulnerability reporting is in scope, and instructions on how to disclose a vulnerability
humans.txt at root of website

```