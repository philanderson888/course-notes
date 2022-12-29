## 2022-12 archive blog of work

## contents

- [2022-12-29](#2022-12-29)
  - [2022-12-27](#2022-12-27)
  - [2022-12-26](#2022-12-26)
  - [2022-12-26](#2022-12-26-1)
    - [regular route joe](#regular-route-joe)
      - [rough notes](#rough-notes)
  - [2022-12-25](#2022-12-25)

# 2022-12-29

ok the goal today is to update my vuejs client as it has expired and no longer builds on netlify .... firstly I am going to try to reinstall all the libraries, let's see what happens when I do that ... firstly save the old package.json and package-lock.json and then build new ones ...

see https://github.com/philanderson888/vue-live/issues/7 for the full details on how I work this issue through ...

## 2022-12-27

up fresh again this morning with fresh goals

1) use local node app to create POST requests to netlify api ... this is because the netlify api seems not to be running either fetch or axios properly ... not sure if this is by design or otherwise, but I have spent enough time on it ... so i can work around it for now ... so ... just use my local node app to generate the POST requests for now, both in fetch and also in axios ... should be easy!
2) get my vue live app up and running again !


Let's go !!! 530am !!! first batch of work till roughly 8am!!!


## 2022-12-26

up fresh again plugging this work with nodejs and also with serverless on netlify ... not on aws lambda, but that will come in time.  

so today my goal is just to 

1) local instances of nodejs running purely locally on my machine - just to revist them and to get as many of them running locally as possible, even if it means running multiple servers on different ports from localhost
   1) server-01 on port 3000
   2) server-02 on port 3001 ... etc
2) netlify instances of nodejs running on netlify
   1) app.use/post...
   2) router.get/post/put/delete..


just expand on this work and morph it from working with fixed data to working with a back end database like mongo or firebase, both of which I have had up and running in the past ... let's see how this work goes today ...

so .. just getting started .. continuing with my work from yesterday 

1) Netlify
2) JSON
3) Post request IN and returning JSON OUT

.... let's make this happen ...

.... had a good 2 to 3 hours of work ... slowing down now for a bit ... have to motivate myself to get going again ... just working on the POST request ... generating it automatically .... using javascript FETCH ... go for it !

... picking this up later in the day .. have almost got the POST working but struggling to get it work with the `fetch` api ... maybe try `axios` instead ... or just revert to a regular client? ... let's see ...



## 2022-12-26

### regular route joe

this is an idea for an app to use AI to know the regular movements and habits of a user ... and to alert them if their regular route of travel is out of action, before they begin their journey, so they are alerted and can take evasive action before starting out ... on a journey which might be delayed or in the case of trains etc, even cancelled.

#### rough notes

```
Regular route joe 

Plug in your regular route … get ping if alternative route is quicker today … build it … 

Google maps api … does that cost money ? 

Professional look … 

Third app

1 learn flutter

2 street pastor 

3 regular route joe 

Real wealth is to create jobs and to create property … 

Rich get rich via government contracts 

Exciting world of automation … devops … app automation … robots are taking over … 
```





## 2022-12-25

using the christmas break just to go through some of my basic websites and do a tidy-up etc and also to increase my learning ....

immediate goals are to 

- build a nodejs web server (done)

this deploys and runs locally well

```js
const http = require('http');
var fs = require('fs')
var path=require('path');
var app = require('express')();

const hostname = '127.0.0.1';
const port80 = 80;
const port3000 = 3000;
const port3001 = 3001;
const port8000 = 8000;

app.get('/jsonResponse', (req,res) => {
    console.log(`request parameters in req.query ...`)
    console.log(`request.query parameter is ... `)
    console.log(req.query)
    if (req.query != undefined) {
        const name = req.query.name;
        console.log(`name ... ${name}`)
        res.json({name: name});
    }
});


app.get('/', (req,res) => {
    console.log(`nodejs responding on port ${port80} with response.sendFile`)
    console.log(`__dirname is ${__dirname}`)
    const filePath = path.join(__dirname + `/index.html`)
    console.log(`serving html file from path ${filePath}`)
    res.sendFile(filePath);
});

const server3000 = http.createServer((req,res) => {
    console.log(`request received on port ${port3000}`)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`This is a plain text response from an http web server built in native nodejs`);
});

const server3001 = http.createServer((req,res) => {
    console.log(`request received on port ${port3001}`)
    console.log(`request parameters in req.query ...`)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h3>NodeJS web server examples</h3><ul><li>json</li><ul><li><a href="http://localhost:8000">http://localhost:8000 => {     }</a></li><li><a href="http://localhost:8000?name=phil">http://localhost:8000?name=phil --> {  name : phil  }</a></li></ul><li>plain text</li><li>html</li></ul>`);
});


server3000.listen(port3000, hostname, () => {
    console.log(`json server sending index.html at http://${hostname}:${port3000}`)
});

server3001.listen(port3001, hostname, () => {
    console.log(`node server sending raw html at http://${hostname}:${port3001}`)
});

console.log(`node express app running on port 80`)
app.listen(port80);
```

but ... I also wanted to add the functionality to deploy a nodejs web server to netlify or netlify serverless functions ... I already have a demo at netlify serverless functions so could maybe use that ... let's investigate ...

the code I already have at netlify express serverless functions is  ...


```js
'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.write('<p>This web server is running using Netlify Serverless Functions</p>');
  res.write('<p>The live URL is <a href="https://netlify-express-serverless.netlify.app/.netlify/functions/server" target="_blank">https://netlify-express-serverless.netlify.app/.netlify/functions/server</a></p>');
  res.write('<p>The instructions to build this came from <a href="https://github.com/philanderson888/netlify-express">https://github.com/philanderson888/netlify-express</a></p>');
  res.write('<p>... which was a clone of <a href="https://github.com/neverendingqs/netlify-express">https://github.com/neverendingqs/netlify-express</a></p>');
  res.write('<p>... code to build this server is below ...</p>');
  res.write('<script src="https://gist.github.com/philanderson888/3b2c2c988c0425ef9360d145ff32966e.js"></script>');


  res.end();
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);
```

... so I can possibly develop this code to be a bit more advanced; let's see what I can do ...


so ... the options are ... can i 

1) deploy a basic nodejs app to netlify?
2) improve my serverless expressjs app hosted on netlify which is running fine ...

Let me try 1) first just very quickly ...

create a new repo ... 