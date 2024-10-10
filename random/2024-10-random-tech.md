### 202410 links

Evangelism https://docs.google.com/document/d/1l_Hh81_yfsgw27UYBKAHq2pe8bj-FcGfUw4fdWxPoP0

Scripture https://docs.google.com/document/d/1vL4WYy4k_0H_rwzGMMFVaX_NVDHlzFXDujnFz7wX84U

Ancestry https://docs.google.com/document/d/11DuuW2Pma8KJU_RNxmyFnlCGFj1dLpFxQX3_pqxwrm8

2023 Life Plan And Review, Goals - Google Docs

2023 Finances - Google Docs

github cyber - https://github.com/philanderson888/course-notes/tree/master/cyber

github random https://github.com/philanderson888/course-notes/blob/master/cyber/cyber-random-terms.md

github cloud https://github.com/philanderson888/course-notes/blob/master/cloud

github science https://github.com/philanderson888/personal/issues/27

github personal Issues https://github.com/philanderson888/personal/issues

github personal https://github.com/philanderson888/personal

github scriptures https://github.com/philanderson888/personal/blob/master/christian/scriptures.md

github course notes

github node

github javascript

### 202410 domains

caniplaythisgame.org Forwards to philanderson.uk Squarespace

christiansinpakistan.org https://www.jesusislord.uk/orphan-school

effectivemethodsofevangelism.com  Forwards to philanderson.uk

philanderson.co.uk

philanderson.uk easily

### 202410 live websites

## websites

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

## 202410 things to build and try out and learn

login app using fastify jwt tokens and using prisma database https://medium.com/@atatijr/token-based-authentication-with-fastify-jwt-and-typescript-1fa5cccc63c5

charity site all laid out here by relume https://www.relume.io/app/project/P1165402__peAGSDbVuz7RVw4O1P8I9YAv725o3xK4cbUdSDAlzY#mode=sitemap

glide made a complete ai app for me with route checking - regular route joe https://routecheck-ir0u.glide.page/dl/d0a5f4

### 202410 family pc management

```powershell
List physical drives , their size and type eg ssd or sata
List logical drives, their size, filing system , and on which logical drive they reside
Turn it into a service to run on launch
For each logical drive list folders over a given size eg 10mb
For each folder over that given size list any files over a given size eg 2MB
Have the ability to exclude certain file types from the search
Also have the ability to exclude carts in folders by name from the search over a given size
```


### 202410 html

html form value is a string

html valueAsDate

html valueAsNumber

javascript date.valueOf() converts date string to unix time

## 202410 css

defensivecss.dev

css margin collapse combines top and bottom margins into one which equals the largest of the two

## 202410 javascript

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

### 202410 social Media

youtube motivation video what starts your morning

  1. 20 minutes walk
  2. pray / praise / worship for 20 minutes continuously
  3. morning inspiration
  4. - motivational speeches ... this is my playlist https://www.youtube.com/playlist?list=PLcb1JL22b_y8bJ0BPI5ax0AlgvCgYaCc4
  5. - sermons - this is my playlist https://www.youtube.com/playlist?list=PLcb1JL22b_y-4ny-zhbxLgFLwiISJYG23
  6. - worship - this is my playlist https://www.youtube.com/playlist?list=PL269DF39348E75E0D
  7. - prayer - pray with this guy https://www.youtube.com/playlist?list=PLcb1JL22b_y8wtb0wykPQr-sEA6vRBa4X


### 202410 generating images from code

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

### 202410 bash

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

environment variables

```bash
printenv will show environment variables
env will show environment variables 
printenv PATH show just PATH
echo $PATH show just PATH
export field=value add to environment values so now printenv field returns value
export name=envaironmentvariable
launchctl setenv field value permanently adds to environment variables
```

crontab schedule jobs

```bash
sudo crontab -e schedules a cron job
sudo crontab -e // i . (insert mode) // minutes hours days month dayoftheweek path-to-script.sh eg 00 08 * * * // :wq to save and exit
```

vi editor

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

### 202410


## 202410 random tech

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

### 202410 random links

design forms https://coyleandrew.medium.com/design-better-forms-96fadca0f49c

reading list https://ryanholiday.net/reading-list/

when life gives you lemons write better error messages