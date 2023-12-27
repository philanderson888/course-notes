### VPN Split Tunneling

VPN Properties, Networking, IPV4, Advanced, Use Default Gateway On Remote Network

### PSC Password Settings Container

ADUC, View, Advanced

Default Domain Policy, Properties, Attribute Editor, Password, make changes

### Offline Files lab

Control Panel, Sync Center, Offline Files, Enable



HTML
Contents
Introduction
HTML / CSS / JAVASCRIPT VALIDITY
Colours
What is HTML?
HTML5
HTML5 Semantic Elements
Javascript
Selecting elements
Creating Elements
Declaring variables
Data types
JSON
SetTimeout and SetInterval
HTML Continued
Rarer elements
HTML5 changed elements
SVG
DATA-
HTML Forms
Input Elements
Input Attributes
Regex
Output Elements
Tables
Table
abbr
innerHtml
data-*
Introduction
HTTP IS A PROTOCOL (LANGUAGE) USED TO SEND DATA ACROSS THE WEB

create a page

HEADER (METADATA)   SEND PAGE ACROSS WEB

BODY OF PAGE (HTML DATA)
WEB SERVER ===> 'RENDER PAGE' ==> SEND HTML TO CLIENT ==> USE 'BROWSER' TO DISPLAY HTML TO USER

HTML
<> PLAIN TEXT

DOM STRUCTURE Document Object Model

WINDOW

==> DOCUMENT

  ==> HTML

    ==> HEAD

      METADATA

    ==> BODY

      <DIV CLASS="CONTAINER">

        <BUTTON>


img   Element
src   Attribute
mypic.jpg Value
Central Organisations

w3.org WWW Consortium

ietf.org INTERNET ENGINEERING TASK FORCE

  RFC REQUEST FOR COMMENTS
Standards

http://javascript.crockford.com/code.html

  METADATA IS data about data

    critical data concerning your web page

  <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">        

  UTF-8  =   'UNICODE'  DEFAULT "ENCODING"  WAY TEXT IS CREATED/STORED

    ASCII ((COMMON ENGLISH CHARACTERS ONLY))

  UTF-16    ABLE TO DISPLAY CONTENT FROM ANY LANGUAGE IN WORLD
      WITH ANY CHARACTER 
HTML / CSS / JAVASCRIPT VALIDITY
caniuse.com

FEATURE IS CURRENT/VALID ==> SHOULD I USE IT???    
Colours
#eee; #eeeeee; rgb(R,G,B); rgba(R,G,B,Alpha) CMYK

What is HTML?
It is a language used to transmit information across the internet from one machine to another Data is transmitted from one machine (client) to another (server), and vice-versa. HTML data is split into two parts : the header information which tends to be INVISIBLE then the body information which produces the visible page. HTML is PLAIN TEXT HTML can be EDITED WITH ANY TEXT EDITOR HTML souce code can be VIEWED FOR ANY PAGE (Inspect Element on any web page)

What is the structure of HTML?

HTML uses something called the DOM (Document Object Model) model to produce data which can be viewed (rendered) on a page. Data is stored on the server in text files called .htm files and then when it is sent to the client, the browser is a program which takes this data and produces output for the viewer to see.

Who's in charge of the development of HTML?

W3C the World Wide Web Consortium is a group of companies and organisations which steer the development of HTML and other web-related standards.

Website at https://www.w3.org

Follow at https://twitter.com/w3c

Where are the best places on the web to investigate and learn HTML?

W3C Official Site Mozilla HTML reference W3Schools to learn CodeCademy to learn with dynamic editor Code.org

XHTML is a stricter form of HTML which enforces 1) lower case tags 2) all start tags must have a closing tag etc..

Building A Basic Web Page

Used to open and close all documents within an HTML page Every opening must have a corresponding closing tag Some tags are 'self closing' such as

'meta' data is DATA ABOUT DATA so the tags will hold information about the web page and some of the data within it where UTF is a 2-byte character set used to represent all of the languages in the whole world. Using it we can represent any character in any language which is quite useful!!!

<title> Goes within Note that "title" is an attribute that can be used to generate hover text also eg Hover Over Me produces Hover Over Me Defines visible part of document
HTML tags See Entire List Of HTML tags At These Locations

Learning Material http://www.w3schools.com/tags/ Official Reference https://developer.mozilla.org/en-US/docs/Web/HTML/Element W3C Official Reference http://w3c.github.io/html-reference/elements.html#elements CanIUse.Com

Use to see if a particular feature is supported by a particular browser Rendering engines : be aware different browsers 'render' or display data using different mechanisms called 'rendering engines'.
https://en.wikipedia.org/wiki/Comparison_of_layout_engines_(HTML) Discussion : Blink is a newer engine run by Google, Opera and Samsung https://en.wikipedia.org/wiki/Blink_(web_engine)

contains
...to
tags
What is the DOM Model? Document Object Model

It is a clear hierarchy of every object laid out correctly and finding its place on the page, so we can locate every item uniquely using a simple hierarchy system. WINDOW ==> DOCUMENT ==> HTML ==> BODY ==> ELEMENT ==> ATTRIBUTE ==> VALUE

HTML5
HTML5 Structure Elements

Nav Header Section Article Aside Footer

HTML5 Semantic Elements
These elements may not actually DO ANYTHING but they convey MEANING to the BROWSER PROGRAM and possibly to the END USER also. A good example will be

or which don't actually do anything but can be used to clearly mark where the page header and footer go.
List Of HTML5 Semantic Elements Below:

Defines an article Defines content aside from the page content
Details
Defines additional details that the user can view or hide Defines a caption for a element Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc. Defines a footer for a document or section Specifies a header for a document or section Specifies the main content of a document Defines marked/highlighted text Defines navigation links
Defines a section in a document
Defines a visible heading for a
Details
Designing An App
Use paper!

Figma https://www.figma.com can be used to visually design an app

Imaging And Graphics
Image editing to PNG https://pixlr.com/x/

Stock photos at https://www.pexels.com/


Functional Programming
Functional languages
 Haskell,  
 ML 
 OCaml
 Scala
 F#

What is functional programming? 

Allows you to write     
    Compressed code 
    Predictable code 
    Easier to test 
    
It
    Combines Pure Functions   
    Uses a declarative approach rather than an imperative approach 
    Declarative 
    Imperative 
    
It Avoids 
    Shared state 
    Mutable (changeable) data 
       
Functional programming key terms 
        
    Pure functions
    
        are Deterministic (output is predictable given the same input) 
    
        Have no side effects 
    
    Function composition 
    
        combine two functions 
    
        Avoid shared state 
    
        shared state force knowing the full history of a variable 
    
    Immutability 
    
        Cannot change the object to which you are bound 
    
        But can still change the properties of the object 
    
        Side effects are interactions which affect other areas and do not just stay within the confines of the function 
    
    Imperative 
    
        Answers 'how to do' this problem with workflow control 
    
    Declarative 
    
        Looks at 'what to do' with data flow 
    
        Disadvantage of functional programming 
    
        No purely functional 'weak hash map'   
Functional Programming
Functional languages
 Haskell,  
 ML 
 OCaml
 Scala
 F#

What is functional programming? 

Allows you to write     
    Compressed code 
    Predictable code 
    Easier to test 
    
It
    Combines Pure Functions   
    Uses a declarative approach rather than an imperative approach 
    Declarative 
    Imperative 
    
It Avoids 
    Shared state 
    Mutable (changeable) data 
       
Functional programming key terms 
        
    Pure functions
    
        are Deterministic (output is predictable given the same input) 
    
        Have no side effects 
    
    Function composition 
    
        combine two functions 
    
        Avoid shared state 
    
        shared state force knowing the full history of a variable 
    
    Immutability 
    
        Cannot change the object to which you are bound 
    
        But can still change the properties of the object 
    
        Side effects are interactions which affect other areas and do not just stay within the confines of the function 
    
    Imperative 
    
        Answers 'how to do' this problem with workflow control 
    
    Declarative 
    
        Looks at 'what to do' with data flow 
    
        Disadvantage of functional programming 
    
        No purely functional 'weak hash map'  
code
contents
code
contents
Kotlin
Kotlin
Kotlin
History

2016 first stable release from JetBrains, building since 2011
Key Features

Created by JetBrains

Compiles to Java and Javascript

Google moving to Kotlin which developers like also

Prevents NPE Null Pointer Exception errors

val b = "Kotlin"
if (b != null && b.length > 0) {
    print("String of length ${b.length}")
} else {
    print("Empty string")
}

or use

val a = "Kotlin"
val b: String? = null
println(b?.length)
println(a?.length)
Terms

Flux is a stream which can emit n items

Flux<String> just = Flux.just("first", "second", "third");
List<String> elements = new ArrayList<>();
Flux.just(“first”, “second”,”third”).log().subscribe(elements::add);

// full code
Flux.just("first", "second", "third")
    .log()
    .subscribe(new Subscriber<String>() {
        private Subscription sub;
        int next;
        @Override
        public void onNext(String str) {
            elements.add(str);
            next++;
            if (next % 2 == 0) {
                sub.request(2);
            }
        }
        @Override
        public void onSubscribe(Subscription sub) {
            this.sub = sub;
            sub.request(2);
        }

        
        @Override public void onError(final Throwable throwable) {

        }

        @Override public void onComplete() {

        }

    });
Mono is a stream which can emit one item

Mono<String> just = Mono.just("OnlyOneElement");
Kotlin Flows = Rx = Reactive Extensions = Reactive Streams have callback onNext, onCompleted and onError#

Use this to delay the flow of data
fun <T> Flow<T>.delayASecond() = flow {
    collect { value -> // collect from the original flow
        delay(1000)    // delay 1 second
        emit(value)    // emit value to the resulting flow
    }
}
companion object - used for static elements

class MyClass{
	companion object{
		var hi = "hello"
	}
  
}
Reference

Kotlin Language Reference https://kotlinlang.org/docs/reference/basic-syntax.html
Whole language in one PDF https://kotlinlang.org/docs/kotlin-docs.pdf
Basics

Keywords

Kotlin keywords List
as	break	class	continue	do	else
false	for	fun	if	in	interface
is	null	object	package	return	super
this	throw	true	try	typealias	typeof
val	var	when	while
https://www.youtube.com/watch?v=SXLmr4Qp4OM&ab_channel=Devslopes

val immutable (final)

var mutable

print println

input data val scanner = Scanner(System.in)

// input string
import java.util.Scanner

fun main(args: Array<String>) {
    val scanner = Scanner(System.`in`)
    
    val list = listOf<String>()
    
    while(true){
        val stringInput = scanner.nextLine()
        val valuesList = stringInput.split(" ").map{ item -> item.trim() }
        valuesList.forEach { item -> println(item) }
    }
}

// input double
import java.util.*

fun main(args: Array<String>) {
    val scanner = Scanner(System.`in`)
    var inputDouble = scanner.nextDouble()
    int inputInteger = (int) inputDouble
    return inputInteger
}

toInt

fun main() {
    val number: String = "100"
    var output = number.toInt()
    println(output)
}
double to integer

import java.util.*

fun main(args: Array<String>) {
    val scanner = Scanner(System.`in`)
    var inputDouble = scanner.nextDouble()
    int inputInteger = (int) inputDouble
    return inputInteger
}
increment++

Math.pow

import java.util.Scanner

fun main(args: Array<String>) {
    val scanner = Scanner(System.`in`)
    var inputDouble = scanner.nextDouble()
    var output = Math.pow(inputDouble,3.0) + Math.pow(inputDouble,2.0 + inputDouble + 1.0
}
Bits

println(Integer.SIZE)  // 32
Max values

fun main(args: Array<String>) {
   println(Integer.MIN_VALUE)
   println(Integer.MAX_VALUE)

    val byteMax: Byte = Byte.MAX_VALUE
    println(byteMax)
    val shortMax: Short = Short.MAX_VALUE
    println(shortMax)
    val intMax = Integer.MAX_VALUE
    println(intMax)
    val longMax: Long = Long.MAX_VALUE
    println(longMax)
}
And &&

b1 && !b2

b1 xor b2

b1 || b2
Or ||

Xor xor

dates

package bot
import java.time.LocalDateTime

fun main() {
    var botName = "Phil"
    var birthYear = (LocalDateTime.now()).getFullYear()
    println("Hello! My name is $botName")
    println("I was created in $birthYear") 
}
lambda

lambda regular
fun(a: Int, b: Int): Int { return ab } same as {a:Int, b: Int → ab }
lambda no body

fun (): Int { return -1 } same as { a * b }
flow control

for

fun main() {
    for(i in 0..9){
        println(i)
    }
}

import java.util.Scanner

fun main(args: Array<String>) {
    val scanner = Scanner(System.`in`)
    
    val list = listOf<String>()
    
    for(i in 0..1){
        val stringInput = scanner.nextLine()
        val valuesList = stringInput.split(" ").map{ item -> item.trim() }
        valuesList.forEach { item -> println(item) }
    }
}
collections

list

import java.util.Scanner

fun main(args: Array<String>) {
    val scanner = Scanner(System.`in`)
    
    // this one is not used
    val list = listOf<String>()
    
    // create a list from user input and print all items in string given
    for(i in 0..1){
        val stringInput = scanner.nextLine()
        val valuesList = stringInput.split(" ").map{ item -> item.trim() }
        valuesList.forEach { item -> println(item) }
    }
}
Spring Boot With Kotlin

Create a simple API
https://www.youtube.com/watch?v=229gPlcc5d8&ab_channel=IntelliJIDEAbyJetBrains

New Project and run
Stop Netty web server with Control-F2
package co.uk.philanderson

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.web.bind.annotation.RestController
import org.springframework.boot.runApplication
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import reactor.core.publisher.Flux
import java.awt.PageAttributes
import java.time.Duration
import java.time.LocalDateTime
import java.util.concurrent.ThreadLocalRandom

@SpringBootApplication
class StockServiceApplication

fun main(args: Array<String>) {
	runApplication<StockServiceApplication>(*args)
}

@RestController
class RestController{
	@GetMapping(value=["/stocks/{symbol}"],produces= [MediaType.TEXT_EVENT_STREAM_VALUE])
	fun prices(@PathVariable symbol: String): Flux<StockPrice> {
		return Flux.interval(Duration.ofSeconds(1))
				.map{StockPrice(symbol,randomStockPrice(), LocalDateTime.now())}
	}
	private fun randomStockPrice():Double{
		return ThreadLocalRandom.current().nextDouble(100.0);
	}
}
data class StockPrice (val symbol: String, val price:Double, val time: LocalDateTime)


random facts and terms
contents
random facts and terms
contents
history
kings
bookmarks
artwork
AI artwork
documentation
images
programming
Commercial bookmarks
video
freelancers
history
kings
george v henry viii charles ann elizabeth i elizabeth ii

bookmarks
artwork
Poser - people modelling software - https://www.posersoftware.com/

AI artwork
Lensa App https://apps.apple.com/us/app/lensa-ai-photo-video-editor/id1436732536

documentation
Add great images of your source code https://carbon.now.sh

images
Image editing to PNG https://pixlr.com/x/ Stock photos at https://www.pexels.com/

programming
User Generator https://randomuser.me/ Postman https://www.postman.com/postman/workspace/postman-student-program/overview Good Error Messages https://wix-ux.com/when-life-gives-you-lemons-write-better-error-messages-46c5223e1a2f Cheat Sheets http://cht.sh/ls

Commercial bookmarks
Salesforce Buys Slack https://accelerationeconomy.com/cloud/10-reasons-why-salesforce-buying-slack-is-the-deal-of-the-decade/ Top 10 Cloud Providers 1. MS 2. AWS 3. Google 4. Salesforce 5 Oracle 6 SAP 10 IBM https://accelerationeconomy.com/cloud-wars-top-10/

video
Scenegraph documentation https://devtools.web.roku.com/schema/RokuSceneGraph.xsd Streaming Media https://www.streamingmedia.com Streaming Media Global https://www.streamingmediaglobal.com/ 24i streaming https://www.24i.com/ Broadcast Digital Awards https://www.broadcastdigitalawards.co.uk Cable And Satellite https://www.cabsat.com Streaming TV Show https://www.streamtvshow.com Rapid TV News https://www.rapidtvnews.com Advanced Television https://advanced-television.com

freelancers
Fiverr https://www.fiverr.com Upwork https://www.upwork.com Mechanical Turk - Repetitive Tasks https://www.mturk.com


bash
contents
bash
contents
introduction
common commands
ls
top
alias
clear terminal
BASH Executable script
Functions And Aliases
Hidden Files and Folders on MAC
GitHub Push/Pull
mkcd() to mkdir and cd in one operation
Alias
Functions
Passing parameters to a function
GitHub Function
GitHub tagging
man Manual
ls
find
Open Finder with open .
BASH commands
cat
head
tail
sort
nl number lines
wc word count
sleep 5 (terminal sleeps for 5 secs)
Output
Bash Open Browser
Nano and VI
VI
Nano
Scheduling a script
Environment Variables : printenv / env
Environment Variables: setting
ps Process Status
introduction
bash stands for bourne-again shell and is just one of the shells available on a mac computer but has become the default to use for nearly everyone, apart from the [z-shell (zsh)](zsh.md) which has also become very popular

common commands
ls
# names
ls -1 
# recursive
ls -R     
# permissions
ls -l
top
# show top processes
top
alias
add to ~/.bash_profile

# open .bash_profile for editing
nano .bash_profile
# or
vi .bash_profile
# add the alias
alias gohome=cd /Users/Shared/
clear terminal
clear && printf '\e[3J'
BASH Executable script
myScript.sh
Set the permissions to execute
# change permissions for just me
chmod u+x myScript.sh
# change permissions to read write execute for me
chmod +rwx myFolder
# change permissions for everyone for all files (dangerous!)
chmod a+rwx *
Put in a folder in the PATH or add your folder to the path
An example of a folder which is already in the PATH is :

/usr/local/bin
You should then be able to call your script with
myScript.sh
Functions And Aliases
In the above example we have put the script which is in the /usr/local/bin folder which is already in the path, so no hassle. If we want to use a different path we can do the following

cd ~
touch .aliases.sh
and in the file put

alias myip='curl ip.appspot.com'

function mkcd() {
    mkdir -p "$@" && cd "$@"
}

function gitpush(){
  git add . &&
  git commit -m "$@" &&
  git push
}
Next edit the file ~ /.bash_profile

alias chrome="open -a 'Google Chrome'"
export PATH="/Applications/Google Chrome.app/Contents/MacOS:$PATH"
source "/Users/tech-a21/.aliases.sh"  # General aliases and functions defined by me
Now opening a new terminal should contain these new scripts

Hidden Files and Folders on MAC
# show hidden files and folder
defaults write com.apple.finder AppleShowAllFiles -bool TRUE && killall Finder
GitHub Push/Pull
#!/bin/bash
echo
echo 2019-04-c-sharp-labs
cd /Users/Shared/2019-04-c-sharp-labs
git pull
git status
mkcd() to mkdir and cd in one operation
# Put this code in your ~/.bashrc
mkcd () {
  mkdir "$1"
  cd "$1"
}
Alias
Substitute commmand to perform a more complex action

alias philZ Shell
Functions
Set up a function which can receive one or more input parameters $1, $2 etc

function mkcd(){
    mkdir "$1" &&
    cd "$1"
}
Passing parameters to a function
Call this with mkcd test

# Put this code in your ~/.bashrc
mkcd () {
  mkdir "$1"
  cd "$1"
}
GitHub Function
function gitpush(){
    git add . &&
    git commit -m "$1" &&
    git push
}
GitHub tagging
GitHub tagging can allow you to commit a project at a certain state in time, and then preserve that state with definite tags in order to be able to recover the project again if needed.

This also works with GitHub releases.

function gitTag(){
    git tag -a "$1" -m "$2" &&
    git push origin --tags
}
man Manual
man rm shows manual for rm command

q will quit from the man pages cleanly and come back to the terminal window

ls
ls -a shows hidden files as well

find
# bashrc is your name that you want to locate 
# / means find from the root downwards

sudo find / -name \\*bashrc\\*  

Open Finder with open .
# open current terminal window folder in Finder
open .
BASH commands
cat
show a file's contents

head
shows the first n lines of a file

tail
shows the last n lines of a file

sort
sorts the lines of a file alphabetically

nl number lines
wc word count
sleep 5 (terminal sleeps for 5 secs)
Output
stdin 0

stdout 1

stderr 2
Bash Open Browser
Bash Scripting To Open Google Chrome

open -a "Google Chrome" index.html
I found this way more beautiful:

Edit ~/.bash_profile file and add the following line alias chrome="open -a 'Google Chrome'"
Save and close the file.
Either run source ~/.bash_profile or open a new window in Terminal.
You can now open the file, file.html, by running: chrome file.html on the command line.
Nano and VI
VI
# edit with 'vi'
vi myfile.txt

`i` will invoke INSERT mode whereby text can be added to the screen

When finished, press escape and then press 

 `:wq` to close and save changes
 `:q`  to close without saving changes
Nano
# type 'nano' and then the file name
nano myfile

:return  next line
:space   next page
:q       quit
:w       previous page
:h       help
Scheduling a script
# add a crontab job
$ sudo crontab -e

# Add the following line:
1 2 3 4 5 /path/to/script

# where
1: Minutes (0-59)
2: Hours (0-23)
3: Days (1-31)
4: Month (1-12)
5: Day of the week(1-7)
/path/to/script - your own shell script
In your case it would be:

# eg
55 23 * * * /path/to/yourShellScript

// summary
sudo crontab -e
Press i . (enter into 'insert') mode
On the top (first) line type
45 16 * * * /Users/Shared/...path/to/script.sh .    ((time is 16:45 daily))
Press Escape
Type :wq . to quit and save changes 
OR
Type Shift Z Z to exit saving changes
Environment Variables : printenv / env
# View environment variables
printenv
# or
env

# view one environment variable only
printenv PATH
# or
echo $PATH
Environment Variables: setting
edit .bash_profile file. 

export VariableName=Varible

To create an environmental variable which can be used in a GUI app in terminal type:

launchctl setenv VariableName Variable
ps Process Status
Note that Linux has no such thing as an exe file and any file can be an executable in Linux. Whether or not a file can run as an executable depends on the permission levels given to the file (read-write-execute) ie must have execute permissions granted

# ps stands for `process status` ie list the status of processes
# list terminal processes
ps 
# list all processes
ps aux
# or
ps -A
# or1
top
|
