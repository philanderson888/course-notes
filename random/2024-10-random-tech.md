## 202410 tech notes

- [202410 tech notes](#202410-tech-notes)
- [202410 tech links](#202410-tech-links)
  - [202410 github notes](#202410-github-notes)
  - [202410 github code](#202410-github-code)
- [202410 web programming](#202410-web-programming)
  - [202410 css](#202410-css)
  - [202410 javascript](#202410-javascript)
  - [202410 web terms](#202410-web-terms)
  - [node programming](#node-programming)
- [202410 programming](#202410-programming)
  - [202410 programming oop](#202410-programming-oop)
  - [202410 mongo](#202410-mongo)
  - [202410 cloud aws](#202410-cloud-aws)
  - [202410 aws notes](#202410-aws-notes)
  - [202410 bash](#202410-bash)
  - [202410 powershell](#202410-powershell)
  - [202410 powershell for vm](#202410-powershell-for-vm)
  - [202410 powershell for cloud](#202410-powershell-for-cloud)
  - [2012410 azure cli](#2012410-azure-cli)
  - [202410 azure](#202410-azure)
  - [202410 choco](#202410-choco)
  - [202410 programming tools](#202410-programming-tools)
- [202410 graphics](#202410-graphics)
- [202410 ai](#202410-ai)
- [202410 nocode and low-code](#202410-nocode-and-low-code)
  - [202410 bash](#202410-bash-1)
  - [202410 roku](#202410-roku)
  - [202410 p5js images](#202410-p5js-images)
  - [202410 coding school](#202410-coding-school)
  - [google deployment using prodspec and](#google-deployment-using-prodspec-and)
  - [202410 scripting bash](#202410-scripting-bash)
  - [202410 scripting - environment variables](#202410-scripting---environment-variables)
  - [202410 scripting crontab schedule jobs](#202410-scripting-crontab-schedule-jobs)
  - [202410 programming vi editor](#202410-programming-vi-editor)
  - [202410 mac os](#202410-mac-os)
  - [202410 streaming](#202410-streaming)
  - [202410 c sharp](#202410-c-sharp)
- [202410 domains](#202410-domains)
- [202410 websites](#202410-websites)


## 202410 tech links

### 202410 github notes

github course notes

### 202410 github code

github cyber - https://github.com/philanderson888/course-notes/tree/master/cyber

github random https://github.com/philanderson888/course-notes/blob/master/cyber/cyber-random-terms.md

github cloud https://github.com/philanderson888/course-notes/blob/master/cloud

github node

github javascript

## 202410 web programming

### 202410 css

defensivecss.dev

css margin collapse combines top and bottom margins into one which equals the largest of the two

css selector has attribute and value 

display block none 

visibility hidden visible still is in dom just not visible

parents up to root element

parents until element

find element 

next sibling

next element if it matches the given element type

box model has width then add on padding border and margin

outline does not add to css width

### 202410 javascript

form value is a string

valueAsDate

valueAsNumber

date.valueOf() converts date string to unix time

padstart

```js
// add stopwatch to project
console.time()
```

image

```js
img.src.value
```


?= operator to eliminate try catch 

https://javascript.plainenglish.io/say-goodbye-to-try-catch-with-this-new-ecmascript-operator-e2b798c7b7a8

zod is perhaps the best array and object library

lodash is a good lightweight solution for dealing with arrays and objects

ndarray is multidimensional array

math.js works with matrices and multidimensional arrays 

numJs is inspired by numPy for simple mathematical calculations

signal is a listener over a primitive

```js
// npm install signals
const {signal } = require('signals');
let count = signal(0);
count.observe(value => console.log(value));
count(10);
```

webtransport over http/3 replaces websockets



```
// package.json
// "@fails-components/webtransport": "^1.0.4",
// "@fails-components/webtransport-transport-http3-quiche": "^1.0.4",
async function sendData(url, data) {
    const wt = new WebTransport(url);
    const writable = await wt.createUnidirectionalStream();
    const writer = writable.getWriter();
    await writer.write(data);
    await writer.close();
}
```

quic by google enables multiple streams within one connection and also has zero round trip time 0-RTT - it's a wrapper over udp 

0-RTT zero round trip time

solidjs builds fast UI with max reactivity in 2018 - no virtual dom but builds native JS instead same as Svelte.  Tiny at 7KB.  Almost as fast as vanilla js 

crdt conflict-free replicated data type is a data structure that is replicated across multiple computers on a network - discrepancies are automatically resolved and convergence is guaranteed ... used by redis and cosmosdb ... idea is that all merges are allowed through and conflicts are resolved by going forwards rather than backwards ... also zed uses this

yjs exposes shared types over synchronised crdt ocal peer-to-peer systems.  data can be stored locally and automatically syncs when the internet connection is restored

gossip protocol relies on peers to spread data - there is no central repository

epidemic = gossip protocol is fully peer to peer and has no central repository 

zed is a code editor built on rust and uses GPUI which uses all GPU cores and cpu cores together effectively

zod are orm maps built on typescript

svelte is faster than nextjs

svelte does front end and sveltekit builds a full stack app talking to back end as well

npm-check-updates can upgrade package.json dependencies

partykit collaboration software hosted on cloudflare

hsts http strict transport security ensures https is enforced

coords.accuracy altitude heading latitude longitude speed

ctlKey true if control key was held down during the event

devicemotion is acceleration in x y z direction and also rotationRate alpha beta gamma

deviceorientation is alpha beta gamma position

dtd frameset contains frames, strict like xml, transitional has older html

encode/decodeURI changes characters to ascii codes

entity is a replacement code for a reserved character eg greater than symbol replaced by &gt; 

downloads.onChanged event when a javascript download starts, is in progress, or ends

file api to read/write files

file list loads multiple files

file reader reads file into ram

form label autocomplete autofocus action name novalidate pattern placeholder required step

form method get creates ?field=value

form method post sends data in body

form formaction overrides default form action just for this one button

form.submit() method submits the form programatically

form target indicates where the response is to be sent to after the form has been submitted -blank -self -parent -top

fraction display <sup>1</sup>/<sub>10</sub>

math.js supports fractions with math.fraction('1/3');

hgroup multiple header items

history forward back go length

canvas globalcompositeoperation provides layering

canvas moveTo jumps without creating line

ismap part of larger image

address link state link visited hover active

pageX/Y is pixel coordinate of mouse when clicked

polyfill translates new feature back to vanilla javascript

link preload will prioritise the fetch, not actually fetch it before the user clicks the link

removeChild  using child.parentNode.removeChild()

string replace

table rowspan="2"

orientationchange event

touch start move end 

touch list of points of contact

screen availHeight Width is visible pixels, minus any taskbar etc supplied by the operating system

shiftKey true when shift was held down

serialize form data to a string

serializearray form data to json array [ {}, {} ]

event dispatcher can be used to manually trigger a given event

script async with callback

script defer until page loaded

checkbox.checked

input disabled

input value 

canvas font, stoke text, text align, transform, translate, move to, line to, stroke, fill, fill style, fill text, stroke style, line width, stroke text

worker post message to communicate with it

worker on message triggered when message is received  onmessage = event => event.data

worker terminate

window location is current url and has href protocol host hostname port pathway search hash

window location search is part after question mark ie query string

pageXYOffset is x y pixels page has scrolled down from starting position

radio onClick checked name value and can both read the checked status and cause a box to be ticked using the 'checked' attribute

typeof 

clear interval after set interval

javascript numbers are 64 bit

prototype can replace default field or function with another

### 202410 web terms

zod types

cloudflare durable session

cloudflare d1 sls

cloudflare r2 is no sql

cloudflare edge nodes allow the user to access data far faster

cloudflare edge nodes even run javascript

orm object relational mapper 

codebase.show/projects/realworld

phoenix website with database getting started https://code.likeagirl.io/how-to-install-elixir-and-phoenix-on-mac-dc21f8ce5a15 

phoenix api https://medium.com/@fredjourney/how-to-build-a-phoenix-hello-world-rest-api-5fc9e3acf331

uri is a string which identifies a resoource

url is a string which identifies a resource and a method of getting it eg http

urn is a string which identifies a resource by name in a particular name space isbn number or phone number

ascii literal eg "\u0041"

big int can hold arbitrarily large numbers

javascript primites are number string boolean symbols null undefined

window scroll and scroll to will move the window by given number of pixels

window scroll by will scroll down a further x pixels

robots.txt gives instructions to search crawlers

security.txt who to report vulnerabilites to 

humans.txt is the people who have worked on this project

### node programming

npm cache will store all http data

response status eg 200

response json gets the response as json object

response send 

process add listener, event emitter

process argv is array of arguments passed in when process was started

process pid is process pid allocated by operating system at process startup

node_env debug or production

file system create read/write stream for file when sending - this sends the file as a stream of data rather than as a single file

file system read file write file access stat

file system stats is file is directory is socket sizes

npm owner of module

buffer byte length in bytes

os cpus length is the number of cpu cores

closure provides global access to the function and it executes immediately iife

emitter in library 'events' with methods emit on once remove all listeners

stream uses buffer data type 

stream has methods read write duplex transform push end

stream pipe will direct output to a given destination

buffer is raw bits and bytes

buffer alloc will create a buffer of a given size

buffer to string

buffer write

repl read eval print loop can provide a live javascript environment if we just type the word 'node' in the command line

std in out error is standard pipe for sending data in and out of a running program

std in on resume

path sep normalise dirname extname basename

http request app base url ip hostname method originalurl params path query route

http response download end json jsonp redirect render send sendfile sendstatus status

socket emit sends message from one host to another over a given socket of ip:port

source map gets original file back after minification

## 202410 programming

viewport is visible area of web page eg mobile device.  viewport initial scale = 1

partial class combined into one class

webgl games

mvc model view controller talks to database

soa service oriented architecture uses services to build an app

rest api represational state transfer is standard web api standard

angular 2010 google 

declarative ui designs the ui first and lets the data follow using widgets and state

xslt xsl extensible stylesheet language transformer transforms from one xml to another

class nested static does not have access to parent class members

constructor no-argument eg bike = new Bike()

class Number has subclass byte integer double short long bigdecimal biginteger atomicinteger atomiclong

event publisher notifies that event has taken place

event subscriber is notified of the event

execution stack is the 'stack'

heap stores larger objects with pointers.  memory is reclaimed when no pointers exist to this object.

polling requests data at intervals

### 202410 programming oop

final means a class cannot inherit from this class

static does not need to be instantiated but is available across the whole class

inner class does have access to parent variables

non virtual member cannot be overridden

static final is a constant eg PI

struct cannot inherit

### 202410 mongo

```js
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
```

### 202410 cloud aws

aws

iam list-accounts

iam list-users

iam list-access-keys

iam get-account-summary

iam list-account-aliases

iam list-groups

iam list-instance-profiles

iam list-mfa-devices

iam list-policies

iam list-roles

iam list-user-policies

ec2 describe-security-groups

ec2 describe-subnets

ec2 run instances --image --count --instance-type --key-name --security-group-ids --subnet-id

ec2 describe-instances --filters --query

ec2 create-tags --resources --tags

ec2 describe-tags

ec2 terminate-instances

s3 cp myFile.txt s3://my-bucket/my-file.txt

s3 sync myFolder s3://my-bucket/my-folder

s3 ls s3://my-bucket -recursive




### 202410 aws notes

ec2 is amazon compute cloud also called amazon compute

amazon compute is short for amazon compute cloud also known as ec2

acu azure compute unit is a measure of the power of a machine

acu 100 matches the power of a standard_a1 machine

sku stock keeping unit is a barcode on a product

sku in aws is a unique product for sale eg a given machine with a given spec

ec2 has regions which are split into availability zones and these are split into local zones and these are split into aws outposts

ec2 region is geographic

ec2 availability zone is logical grouping within a geographical region, perhaps serviced by different electricity suppliers

ec2 availability zone has one per subnet

ec2 availability zone is a collection of data centers inside a region

ec2 local zones allow placing of rescourcees physically close to you for sake of latency

ec2 outposts put aws services in particular data center

ec2 wavelength zone delivers content to edge of 5g networks to be close to end users on mobile networks

ed2 edge zone is cloud front

ec2 cloudwatch monitors instances

ec2 autoscaling automatically adds instances depending on cloudwatch metrics and sns simple notification service

ec2 autoscale vm group and load balancer

ec2 autoscale policy

ecs elastic container service can manage containers and containerised apps 

aws lambda serverless code

eks elastic kubernetes service manages kubernetes clusters

aws fargate runs serverless instances of ecs elastic container service and eks elastic kubernetes service

sns simple notification service

ec2 fleet management of a group of instances

ec2 elastic beanstalk hosts apps

vpc virtual private cloud has gateway, subnets, instances

vpc endpoint connects internally to another aws node

vpc peering can route traffic between two endpoints

traffic mirroring copies all network traffic for monitoring and logging purposes

transmit gateway is a central hub

flow log

vpn connects vpc virtual private cloud to real network

vm instance

container runs app

container is a virtual operating system configured so an app just installs and runs 

load balancer 

application load balancer has path routing to different target groups and host routing to different hosts, also has a waf web app firewall.

application load balancer is good when using containers to route traffic for your app

application load balancer request tracing will log all http requests

rds relational database service eg auorora, postgres, mariadb oracledb

aws dynamo db is non relational

s3 ebs elastic block storage mimics real hard drive 

s3 ebs elastic block storage has block level replication, volume snapshots, encrypted volumes, dynamic resize

ads aws directory service which uses microsoft active diretory service

iam congnito sign in via 3rd party apps eg facebook

iam roles apply to apps

cloudwatch has events logs alarms

cloudtrail logs to s3 bucket

cdk cloud development kit

instance pricing can be viewed at cloud price . net eg standard_a1 is 37 dollars a month

### 202410 bash

wget downloads files

gpg encrypts files using openpgp default is to extract and decrypt -c encrypt -d decrypt 

pgp pretty good privacy

gnupc gnu privacy guard

sudo apt-get update upgrade

sudo apt-get install tmux git ranger vim # basic terminal tools

sudo apt-get install lubuntu-desktop -y

sudo apt-get install xrdp -y && systemctl start xrdp

### 202410 powershell

ss64.com

start powershell starts a new shell

set-executionpolicy -executionpolicy remotesigned ensures anything running has been approved and signed

ise integrated scripting environment helps to learn by showing all the commands dynamically

enable-windowsoptionalfeature -featurename microsoft-windows-subsystem-linux

get-alias

get-command

get-command *name*

get-command -CommandType Cmdlet/Function/Workflow




### 202410 powershell for vm

resize-vhd

get-vm

get-vm -name x | format-list *

get-vm | format name, state, groups

move-vm -name x -newvmhost y

vmgroup of vms

vmgroup of type vmcollection is a group of actual vms

vmgroup of type management is a group of vm collection groups (which are groups of vms)

new-vmgroup -name x -grouptype vmcollectiontype

get-vmgroup -name x

add-vmgroupmember -vmgroup x -vm y

### 202410 powershell for cloud

connect-azaccount

set-azcontext -subscriptionid

add-content myfile.txt "some data"

new-azvm -resourcegroupname -image -size -name

new-azvmconfig --name --instancesize --imagename 

new-azurevm --servicename --affinitygroup

get-credential

get-azpublicipaddress

new-azresourcegroup -name 

new-azsqldatabase -servername -databasename 

### 2012410 azure cli

install-module az  # older module was called 'azure'

get-module azure*

get-installedmodule -name az

connect-azaccount

az login

az account list - who is logged in

az account set --subscription

az group list - of resource groups

az group create --name --location

az group delete --name -y

az resource list

az vm list-sizes eg standard_d2_v3

az vm create --name --group --image --size --admin-username --generate-ssh-keys

az vm list --group --show-details

ssh user@ip

az vm stop --name

az vm delete --name

az vm open-port --port 80 --name --priority

az network vnet list  - list virtual networks

az network nic list - of all network cards

az group create --name --location

### 202410 azure

az vm list-sizes 

az vm d series general purpose e series extra ram f series extra cpu

nested virtualization d2_v3 d2s_v3 d4s_v4 e4s_v3

azure operator service manager uses cli to manage infrastructure

azure powershell

azure cloud shell

### 202410 choco

choco install library -y

choco install notepadplusplus sublimetext3 vscode googlechrome nodejs -y

choco install virtualbox -y

choco install vagrant -y

choco install intellijidea-community -y

choco install visualstudio2019community -y

choco install docker-desktop --pre -y

choco install minikube -y



### 202410 programming tools

hadoop breaks large files into 128mb chunks

## 202410 graphics 

dp density per pixel

## 202410 ai

claude 3 haiku, then sonnet, then opus in that order of intelligence

claude 3 is claiming it is better than chat gpt and gemini and llama

anthropic is claude ai api

amazon bedrock ai

google cloud vertex ai 

hugging face ai models

raw text to speech https://huggingface.co/spaces/innoai/Edge-TTS-Text-to-Speech

raw text to speech but also create a video of the speech https://text2video.wingetgui.com/

also search deepfake text etc

## 202410 nocode and low-code

webflow use design to build a website

build a website 1) repeatable design 2) break page into sections 3) great headings eg hero has 1 or 2 columns  4) small paragraph, image/video to compliment the heading 5) repeatable section to explain your website in a little bit more detail 6) call to action 7) content ... with colours have just 4 - black through to white and two accent colours ... with font just have one font on whole website ... use dynamic heading size, flexible cards, SVG icons which highlight with CSS, snap scrolling which snaps next portion of your site into view quickly at the right position, scale up or down

airtable nocode and low-code database

webflow best for designers

wix - build a fresh site in moments

bubble.io easy to design apps with data as well ... try it

jetflow.io adds dynamic sorting of data to your site

learn airtable with aaron aatt.io

airtable sync with google sheets amazing

https://airtable.com/appLIaO5OGfxtKGpW/tblBrDKGh1n2UdIfE/viwqPtPpy7621wMlz?blocks=hide

strapi is open source headless cms

headless cms disjoints the database data from the front end, providing a seamless point to obtain your data

ifttt

make.com is like zapier or ifttt event handling

zapier is like ifttt

wix.com/velo build ai sites and also incorporate npm and vscode into wix site development 

nocode.tech just gets the best out of no code people and efforts

memberstack is a paid platform to integrate back end authentication etc into your app

snipcart $20 a month for a customer login and shopping cart

stripe payments only take a cut of the card fee and pricing

airtable database eg with google drive integration - could be handy for building an app 

flowbase create reusable components

firebase sql

firestore no-sql

nocodb can integrate with mysql database for example ... or have just pure online database

baserow.io


### 202410 bash

```bash
echo diff compares two text files
diff file1 file2 # linux
fc file1 file2 # windows file compare
fc folder1 folder2
```

### 202410 roku

npx create-roku-app

rokucommunity brighterscript-template

jellyfin-roku

ottoverse.com free-hls-m3u8-test-urls

arturocuya.com roku-101 get started




### 202410 p5js images

paste this code in this online editor https://editor.p5js.org/

```js
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("aqua");
  //circle in the center with a width of 100
  circle(200,200,100);
  
  
  //when mouse button is pressed, circles turn black
  if (mouseIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }

  //white circles drawn at mouse position
  circle(mouseX, mouseY, 100);
  
  
  //sky blue background
  background(135, 206, 235);
  //sun in top-right corner
  fill("yellow");
  circle(550, 50, 100);
 
  //grass on bottom half
  fill("green");
  rect(0, 200, 600, 200);
 
  //emojis
  textSize(75)
  text("🌸", 100, 250) //flower
  text("🐞", mouseX, mouseY) //ladybug
  text("phils picture", 200, 200)
  
}
```

we can give to charity school 

Setting Up Your Environment
Get Started
Variables and Change
Conditionals and Interactivity
Organizing Code with Functions
Repeating with Loops
Data Structure Garden
Animating with Media Objects

### 202410 coding school

can create images as above

can create charts like this https://codepen.io/philanderson888/pen/OJKRGXx



### google deployment using prodspec and 

problem is that of M infrastructure providers with N service models producing M X N solutions to be maintained

prodspec creates an interim `intent model` which sits in the middle and creates `M + N` solutions to be maintained

### 202410 scripting bash

cht.sh

bash is bourne again shell

ps process status

ls -1 list just names one by one

ls -R list files in subfolders

top top processes  

.bash_profile loads when terminal loads

.zprofile and .zshrc load when zshell loads


```bash
chmod u+x  just for me
chmod +rwx just for me
chmod a+rwx for everyone
man rm
ls -1
ls -a # hidden files
find ~/github -name \\*zshrc\\* # find files containing this name in this folder
open . # opens finder
stdin 0
stdout 1
stderr 2
```

```bash
alias myip=curl 1.2.3.4
function mkcd() { mkdir -p "$@" && cd "&@" }
function gitpush() { git add . && git commit -m "$@" && git push }

Next edit the file ~ /.bash_profile

alias chrome="open -a 'Google Chrome'"
alias chrome=open -a "Google Chrome"
alias edge=open -a "Microsoft Edge"

export PATH="/Applications/Google Chrome.app/Contents/MacOS:$PATH"
source "/Users/tech-a21/.aliases.sh"  # General aliases and functions defined by me
Now opening a new terminal should contain these new scripts
```

```bash
show hidden files and folder ... defaults write com.apple.finder AppleShowAllFiles -bool TRUE && killall Finder
function gitTag(){ git tag -a "$1" && -m "$2" && git push -origin tags } 
sudo find / -name \\*bashrc\\*
open .    opens window in finder
open -a "Google Chrome" mysite.html
Edit ~/.bash_profile file and add the following line alias chrome="open -a 'Google Chrome'"

.bash_profile is where we set the terminal profile launch settings

.bash_profile / .zsh_profile etc

launchctl setenv name environmentvariable
ps process status
ps aux lists all processes
ps -A lists all processes
top lists top processes
exe does not exist in linux - any file can be executed if it has the 'execute' permission
```

### 202410 scripting - environment variables

```bash
printenv will show environment variables
env will show environment variables 
printenv PATH show just PATH
echo $PATH show just PATH
export field=value add to environment values so now printenv field returns value
export name=envaironmentvariable
launchctl setenv field value permanently adds to environment variables
```

### 202410 scripting crontab schedule jobs

```bash
sudo crontab -e schedules a cron job
sudo crontab -e // i . (insert mode) // minutes hours days month dayoftheweek path-to-script.sh eg 00 08 * * * // :wq to save and exit
```

### 202410 programming vi editor

```bash
vi myFile.txt
vi i opens file in insert mode 
vi escape :wq save and quit
vi escape :q quit without saving
vi :return next line
vi :space next page
vi :q quit
vi :w previous page
vi :h help
```

### 202410 mac os

show hidden files - defaults write com.apple.finder AppleShowAllFiles -bool TRUE && killall Finder

### 202410 streaming

dash dynamic adaptive streaming over http - best for high quality and best for on demand streaming. used by shaka, vlc, videojs, libdash

libdash provides open source oop library to mpeg dash streaming for live and vod

scte-35 marker indicates where other content eg adverts can be inserted into a video stream

watermarking helps to protect streaming content 

abr adaptive bitrate streaming assumes that lowering the bitrate is more important than letting the user experience buffering, rendering the most suitable content renditions

rendition is a version of a stream at a given resolution for streaming at a given bitrate

manifest defines files to be fetched as part of adaptive bitrate streaming abr stream

playready drm by microsoft created 2007

widevine drm bought by google in 2010

cpm cost per mille is the money an advertiser will pay to have 1000 of their adverts shown eg $10 is average cpm on youtube

csai client side ad insertion

ssai server side ad insertion

addressable advertising customises adverts

live to vod provides extended restart after the live stream finishes

psb public service broadcaster

spi stream performance index is an overall figure which indicates the health of a stream



### 202410 c sharp

event delegate connects event to the method handler

event handler += adds handler to existing handlers

HttpCookie

## 202410 domains

caniplaythisgame.org Forwards to philanderson.uk Squarespace

christiansinpakistan.org https://www.jesusislord.uk/orphan-school

effectivemethodsofevangelism.com  Forwards to philanderson.uk

philanderson.co.uk

philanderson.uk easily

## 202410 websites

https://philanderson.uk 

https://philanderson881.wixsite.com/philanderson-uk another beautiful ready-made site, love this one!

https://philanderson881.wixsite.com/mysite video editor website with good blog as well, like the fonts etc and simplity of this site - yes I like it!

https://philanderson881.wixsite.com/mysite/blog  video editor website with good blog as well, like the fonts etc and simplity of this site - yes I like it!

https://philanderson881.wixsite.com/my-site-1 another fine and simple ready-made website, good to go!!!

https://philanderson881.wixsite.com/philanderson-uk-2 super basic skeleton, nothing here

https://philanderson881.wixsite.com/ideaftest01 interesting shopping site - an ok start, but it's a bit old fashioned and lacking in some things ... maybe erase this one!!!

https://philanderson881.wixsite.com/ot-enables-u one of the first sites I ever built!

https://philanderson881.wixsite.com/consulting this was an interesting one for philanderson consulting !

https://philanderson881.wixsite.com/philipandersoncv2 here is one I could turn into an online CV!!!




