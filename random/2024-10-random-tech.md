## 202410 things to build and try out and learn

login app using fastify jwt tokens and using prisma database https://medium.com/@atatijr/token-based-authentication-with-fastify-jwt-and-typescript-1fa5cccc63c5

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

