### 202408 random

zod validates javascript types zod.dev

cloudflare durable objects have session id

cloudflare workers are serverless

cloudflare d1 is sql

cloudflare r2 is nosql

realm endpoints created with netlify + mongodb

userfront jwt

fastify jwt

[roadmap.sh](http://roadmap.sh/) gives learning path

userfront full stack samples

temporal has native date handling

graphql data

edge db

web containers run node in browser

docusaurus

npx create-next-app --example-with-turbopack

pnpm symlinks

codebase.show/projects/realworld

storyblocks has stock video

[steve.ai](http://steve.ai/) create videos

scoop install without sudo

apprite apps

neo4j is graphql over sql

runway ml fast video editing

partykit hosting like netlify and vercel

mojo is python upgrade

padstart pads a string with another string

a signal is a listener over a primitive

```
// npm install signals
const {signal } = require('signals');
let count = signal(0);
count.observe(value => console.log(value));
count(10);

```

web transport replaces web sockets and enables secure connections.   it works with http2, http3 and quic

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

quic by google in 2012 has multiple streams of data over the one connection

solidjs examples

y-websocket allows for scaling of websockets over multiple servers

webflow build nocode websites like wix, including databases ... can start for free ...

airtable has free starter tier ... its used by netflix, tesla, wework ... try at airscript.dev tutorial using jsonplaceholder api ... perfect ...

sendgrid is used to send emails

npx create-roku-app

github rokucommunity brighterscript-template

github jellyfin jellyfin-roku

roku test urls [ottoverse.com](http://ottoverse.com/) free-hls-m3u8-test-urls

[arturocuya.com](http://arturocuya.com/) roku-101 get started

gtag google tag  [developers.google.com](http://developers.google.com/) gtagjs

hugging face ai models

transformers text to speech ai model

vanilla js

photopea online image editor like figma

vectorpea vector image editor

[verto.sh](http://verto.sh/) open source projects

p5.js learn to code

billboard js charts

svelte front end

phoenix framework with database ... try it

sveltekit full stack

mock service worker fake api

image playground from ios 18

apple vision framework in ios 18 ... text extraction ... face detection ... body pose recognition ...

apple swift 6

apple translation ui in ios 18

apple create machine learning app in ios 18

ai whisper

ai stable diffusion

ai mistral

pytorch ai machine learning model

tensor flow ai machine learning model

jax ai machine learning model

mlx ai machine learning model

apple ai machine learning on 'metal' ie local hardware

apple genmoji make custom emojis

apple stickers are enhanced emojis

apple memoji are ???

emoji are traditionally plain text and rendered uniquely by the machine

apple adaptive image glyph = genmoji - custom emojis

[learning.deeplearning.ai](http://learning.deeplearning.ai/)

build better design systems [https://www.designsystemchecklist.com](https://www.designsystemchecklist.com/)

perplexity pro - tap into ai api perplexity pro api - get some data back on my linux scripts

defensivecss.dev

html form value ... string
html valueAsDate
html valueAsNumber

javascript date.valueOf() converts to unix time

alpine linux

nextjs

nuxtjs

tensor flow

[prismic.io](http://prismic.io/)

ngrok tunnel

css margin collapse - use margin bottom and not margin top

nvm node version manager

pnpm use it instead of npm or yarn

turbopack bundles js and ts using rust

cdn js find any library

[caniuse.com](http://caniuse.com/)

[cronhub.io](http://cronhub.io/) cron jobs

remotejs can debug remote app

trackjs can debug client side js errors

imperative programming ... how to ... ??? java, c, c++, python ???

browserify - allows use of npm require in standard html file

less adds variables to your css

csslint

gatsby

graphql

[sanity.io](http://sanity.io/) headless cms opens socket so changes available immediately

tiobe index of most popular programming

source maps get minified code back to normal code

jmeter can do performance and load testing on web apps, written in java

soak test over time

stress test limits eg hits

spike test over short period of time

load test eg number of users

npm-check-updates can upgrade package.json dependencies

## ai

nvidia

blackwell

hopper

lpu language processing unit

llm large language model

inference engine

llm large language model

tesla giga factory in texas

tesla gifafactory in mexico

tesla factory in berlin

tesla factory in shanghai

tesla redwood model 2

tesla starbase rocket factory texas

optimist 22 degrees of freedom

## cloud

prometheus monitor

nagios monitor

terraform provision

chef / ansible / puppet configuration management

qodana code check

babel converts modern javascript to legacy javascript

browserify allows you to use node modules in standard html scripts

isomorphic same code on client and server

lambda

less css allows variables in css; it's a minor addition to css; installed via npm ... can also use in raw html ...

### view model

knockout js link view to data

backbone js link view to data

### databases

mongodb

firebase

feathersjs build database app out of the box

### cloud

aws inspector does vulnerability management

### cyber

nikto web server vulnerability scanner

try hack me

kali linux

### react native

build for android and ios

### flutter

history 2017

### linux

```bash
echo diff compares two text files
diff file1 file2 # linux
fc file1 file2 # windows file compare
fc folder1 folder2

```

## ai text to speech

[vapi.ai](http://vapi.ai/)

## ai

[originality.ai](http://originality.ai/)

### ai robots

hyundai own boston dynamics

agile robotics

wayve ai driving

tesla is best self driving car, then audi rs, then bmw ix3, then nissan qashqau, then kia ev6

waymo driverless

## add to learning javascript

console.time - add a stopwatch to project

## 10 minute projects - use these technologies !!!

svg css filter eg [blog.logrocket.com](http://blog.logrocket.com/) complete guide

tailwind css

slick carousel slider

## scripting

```
List physical drives , their size and type eg ssd or sata
List logical drives, their size, filing system , and on which logical drive they reside
Turn it into a service to run on launch
For each logical drive list folders over a given size eg 10mb
For each folder over that given size list any files over a given size eg 2MB
Have the ability to exclude certain file types from the search
Also have the ability to exclude carts in folders by name from the search over a given size

```

## design

https://colorhunt.co/palettes/pastel

https://www.manypixels.co/gallery

https://excalidraw.com/

## docs

Documentation - beautify your source code
https://carbon.now.sh/

Documentation - embed code with CodePen
[https://codepen.io](https://codepen.io/)

Documentation - create ReadMe
https://readme.so/editor

Explains shell commands
[https://explainshell.com](https://explainshell.com/)

Images - free - unsplash
[https://unsplash.com](https://unsplash.com/)

Image Compression - Tiny PNG
[https://tinypng.com](https://tinypng.com/)

Image Editing Online
[https://www.photopea.com](https://www.photopea.com/)

Images - Icons
[https://ionic.io](https://ionic.io/)

Image - Remove Background
[https://www.remove.bg](https://www.remove.bg/)

Performance
Web page speed    [https://pagespeed.web.dev](https://pagespeed.web.dev/)

Performance - loading times
[https://gtmetrix.com](https://gtmetrix.com/)

## move this to scripting file ... have it live or nothing !!!

```bash
export PATH=$PATH:/Users/Shared/android
export PATH=$PATH:/Users/Shared/flutter/bin
export PATH=$PATH:~/.pub-cache/bin
alias chrome=open -a "Google Chrome"
alias edge=open -a "Microsoft Edge"
alias gohome=cd /Users/Shared/
alias myip=curl 1.2.3.4

export PATH="/Applications/Google Chrome.app/Contents/MacOS:$PATH"

function mkcd()   {    mkdir -p "$@" && cd "$@"                            }
function gitpush(){    git add . &&    git commit -m "$@" &&    git push   }
function gitTag() {    git tag -a "$1" -m "$2" &&  git push origin --tags  }

# or is it this - mkcd () {     mkdir "$1"      cd "$1"   }

source "~/.aliases.sh"

# bun completions
[ -s "/Users/phil/.bun/_bun" ] && source "/Users/phil/.bun/_bun"
# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

clear terminal
clear && printf '\\e[3J'

```

## bash

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

## functional programming

```
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

```