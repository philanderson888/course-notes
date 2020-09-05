# Random Web, Programming And Productivity

### Graphics

moqup
illustrator
sketchpad
demoqa HTML moqups
flinto
[uxdesign.cc](http://uxdesign.cc/)
d3.js

### stats

[statcounter.com](http://statcounter.com/)

### testing

selenium
gherkin
cucumber
specflow
appium is mobile extension for selenium
gherkin syntax: feature, rule, example,
gherkin: given.when.then.and.but
gherkin background
gherkin scenario template
gherkin """ (document strings). |(Data Tables). @Tags. #Comments
selenium page object model - pages written as classes, elements within that class
selenium page factory initialises page items

## MeteorJS

```bash
# Install In Bash (not ZSh)
bash 
curl https://install.meteor.com/ | sh

# Create
meteor create myapp

```

## GraphQL

EggHead Course

[Create Fullstack Applications with GraphQL and Apollo](https://egghead.io/playlists/create-fullstack-applications-with-graphql-and-apollo-794dc9c7)

# Apollo Server

```csharp
yarn add graphql apollo-server

// index.js

const { ApolloServer } = require("apollo-server")
const typeDefs = `

    type Query{
        totalDays:Int,
        philCount:Int
    }
`
const resolvers = {
    Query:{
        totalDays: ()=> 100,
        philCount: () => 200
    }

}
const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()
    .then(({ url }) => `GraphQL server listening on ${url}`)
    .then(console.log)
    .catch(console.error)

```

# Client

```csharp
npm install graphql-request

// index.js

const {request} = require('graphql-request')

const endpoint = "http://localhost:4000"

const query = `
    query {
        totalDays
    }    
`

console.log('Sending the query')

request(endpoint,query)
    .then(({totalDays}) => `totalDays:${totalDays}`)
    .then(console.log)
    .catch(console.error)

/* 
run this with node .  (I think)

const options = {
    method:"POST",
    headers:{ "Content-Type":"application/json"},
    body:JSON.stringify({query})
}

fetch(endpoint,options)
    .then(response=>response.json())
    .then(({data})=> `totalDays:${data.totalDays}`)
    .then(console.log)
    .catch(console.error)

    */

// run this with npm start

const {
    request
} = require('graphql-request')

const endpoint = "http://localhost:4000"

const query = `
    query {
        totalDays
    }    
`

console.log('Sending the query with fetch')

const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        query
    })
}

const delay = setTimeout(getData, 500);

var counter = 0;

var repeat = setInterval(() => {
    console.log('getting data - index ' + counter)
    counter++
    if (counter >= 5) {
        console.log("querying has finished")
        clearInterval(repeat)
    }
    fetch(endpoint, options)
        .then(response => response.json())
        .then(({
            data
        }) => `totalDays:${data.totalDays}`)
        .then(console.log)
        .catch(console.error)
}, 1000);

function getData() {
    console.log('getting data')
    fetch(endpoint, options)
        .then(response => response.json())
        .then(({
            data
        }) => `totalDays:${data.totalDays}`)
        .then(console.log)
        .catch(console.error)
}

fetch(endpoint, options)
    .then(response => response.json())
    .then(({
        data
    }) => `totalDays:${data.totalDays}`)
    .then(console.log)
    .catch(console.error)

```

# React

```jsx
sudo npm install -g create-react-app

create-react-app learn-graph-ql-client

yarn start

```

### Learner Tutorial

[https://reactjs.org/tutorial/tutorial.html](https://reactjs.org/tutorial/tutorial.html)   

## What is React

[https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)

Run

npx
create-react-app my-app
cd my-app
npm start

React uses JSX for syntax which is
Javascript code containing HTML declarations

const element = <h1>Hello, world!</h1>;

# Gatsby

Gatsby generates your site as a PWA 

PWA Progressive Web Site which has a service worker to speed up page loading and resource caching

## Gatsby Resources

[https://www.gatsbyjs.org](https://www.gatsbyjs.org/) 

Starting point for learning

[https://www.gatsbyjs.org/tutorial](https://www.gatsbyjs.org/tutorial)  

## Code Samples

[https://www.gatsbyjs.org/docs](https://www.gatsbyjs.org/docs) 

## Install Gatsby Client

```csharp
npm install -g gatsby-cli

```

## Clone Gatsby Starter Site

```jsx
gatsby new mysite https://github.com/gatsbyjs/gatsby-starter-hello-world

https://www.gatsbyjs.org/starters/?v=2 

https://github.com/gatsbyjs/gatsby-starter-hello-world

https://github.com/gatsbyjs/gatsby-starter-default.

cd mysite

gatsby develop

http://localhost:8000    

Edit src/pages/index.js and changes will update live!
```

## Deploy To Netlify

[https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

Create gatsby-02 repo locally and on GitHub; push to GitHub so site is live locally and all changes on GitHub

Go to [app.netlify.com](http://app.netlify.com) and choose 'New Site From Git'.

Link Netlify to GitHub

[https://app.netlify.com/start/deploy?repository=https://github.com/philanderson888/gatsby-02](https://app.netlify.com/start/deploy?repository=https://github.com/philanderson888/gatsby-02) 

[https://festive-perlman-abc4bd.netlify.com/](https://festive-perlman-abc4bd.netlify.com/)  

[https://festive-perlman-abc4bd.netlify.com/](https://festive-perlman-abc4bd.netlify.com/) 

## Contentful

Deploying a site with contentful

The API keys have to be configured within contentful on their website also.

The .contentful.json file contains the API keys which are valid for local use only

To run the site locally simply type `gatsby develop` and browse to `http://localhost:8000`

## File Structure

A quick look at the top-level files and directories you'll see in a Gatsby project.

```
.
├── node_modules
├── src                   source code
├── .gitignore
├── .prettierrc          config prettier.io
├── gatsby-browser.js     using browser API    https://www.gatsbyjs.org/docs/browser-apis
├── gatsby-config.js     configure site
├── gatsby-node.js
├── gatsby-ssr.js
├── LICENSE
├── package-lock.json        auto-generated : relationships between dependencies
├── package.json            packages to install
└── README.md
```

## Gatsby GraphQL / GraphiQL

Gatsby tutorial  

[https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)

```csharp
http://localhost:8000/___graphql
```

## Apollo GraphQL

[https://www.apollographql.com/docs/tutorial/introduction/](https://www.apollographql.com/docs/tutorial/introduction/)  

[https://www.graphqlbin.com/v2/6RQ6TM](https://www.graphqlbin.com/v2/6RQ6TM)   

[Learngraphql.com](http://learngraphql.com) 

Wpgraphical 

[sanity.io](http://sanity.io/) headless cms opens socket so changes to site are replicated instantly

shopify

apollo : best

axios : possible for small things

Use [hooks.com](http://hooks.com) 

. Usekeypress react hook 

Intersection observer 

### TIOBE Index

TIOBE is a measure of the popularity of different programming languages around the world.

We can see the index at [https://www.tiobe.com/tiobe-index](https://www.tiobe.com/tiobe-index) and how it is built at [https://www.tiobe.com/tiobe-index/programming-languages-definition](https://www.tiobe.com/tiobe-index/programming-languages-definition) which has a list of all programming languages in use and how it is decided which ones are most popular.

## Source Maps eg bootstrap.css.map - Debugging Feature

These can be used to map a minified file back to its original source to enable debugging of the run time code.

[https://www.html5rocks.com/en/tutorials/developertools/sourcemaps](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps)

## Using Google - Is There A Demand For Your App?

Prove that DEMAND EXISTS FOR YOUR APP

Google Keyword Planner tool can look for the number of searches on this keyword

Build a landing page to garner interest and ask people to sign up for email notifications

## Mobile Apps

Lay out the flow and features. Validation of your app idea means that you’ve got something that people want to use. Now is the time to detail your product onto a document, or if you want to go the extra mile, use a wireframing tool.

When putting your idea down on paper, remember to be as detailed as possible. Include the flow of how the user will navigate the app as well as all the features envisioned. This will help your developer to clearly understand your expectations.

Remove non-core features. From the flow and features document you prepared, start looking closely at features that you can remove. Offer only the core value of your app idea. Do not build features in the first version that are "nice to have" and can always be added later as an update. This will help keep the initial costs of development down and also help you get to market quicker.

Put design first.

Hire a designer/developer. Seek a development company that has great design talent and a solid development team. While hiring a developer, go online to check on their credibility and the apps that they have created. If you really liked an app they created from their portfolio, chances are, they could be the right one for your product.

Create developer accounts. You must register for a developer account with the respective app stores to be able to sell your app through their platform. Google’s Android charges $25 a year and Apple charges $99 annually. You have the option of registering as an individual or as a company, if you already have one formed.

Integrate analytics. Analytics help you track downloads, user engagement and retention for your mobile app. Make sure you use tools such as Flurry, which is available for free, and Localytics, that has a free and paid version.

Get feedback quickly and improvise. Once your app goes live on the app store, the first set of customers' usage and behavior will give you insight into how to improve and enhance your app. Enhancements and changes are constant, so keep an eye on user feedback and keep building.

Introduce features. You built version one with limited features and only the core offering. Now is the time to evaluate and introduce the remaining features that were left out in the initial version. You will know through analytics and feedback whether the features are relevant anymore.

## Testing

JMeter tests performance

Soak test over a period of time

Stress test before crash

Spike test over short period of time

Load test copes with how many users

## NPM

npm-check-updates        NCU   followed by npm update

npm update

## Bug Tracking

[Sentry.io](http://sentry.io)  - works with all platforms !

Pivotal green plum database 

Jam stack 

Android PI - check it out!!!

Check out Svelte.dev

[http://aka.ms/mspressfree](http://aka.ms/mspressfree)    Free Ebooks

GitHub keep 

Log4net everyone used 

Netlify is a web server

# Random Links

### .NET Enumeration

[https://blog.usejournal.com/enumeration-in-net-d5674921512e](https://blog.usejournal.com/enumeration-in-net-d5674921512e)

### Android

Quick test Android App on Emulator [https://medium.com/@amherd/how-to-screen-test-your-mobile-first-designs-on-android-and-ios-without-a-physical-device-7f6e94260879](https://medium.com/@amherd/how-to-screen-test-your-mobile-first-designs-on-android-and-ios-without-a-physical-device-7f6e94260879)

### Nativescript

[https://www.nativescript.org/](https://www.nativescript.org/) Native apps

### Productivity

AnyList [https://www.anylist.com/auth/sign-in?next=%2Faccount](https://www.anylist.com/auth/sign-in?next=%2Faccount)

Workflow does multiple things as one sequence of steps which you can program [https://workflow.is/](https://workflow.is/)

### Java

Free Java For Beginners [https://www.udemy.com/java-tutorial/](https://www.udemy.com/java-tutorial/)

£30 Java Complete For Beginners [https://www.udemy.com/java-the-complete-course/](https://www.udemy.com/java-the-complete-course/)

£30 Java MasterClass
[https://www.javaworld.com/blog/java-101/](https://www.javaworld.com/blog/java-101/)

Assertions

Maven

AWS Lambda [https://www.javaworld.com/article/3210726/application-development/serverless-computing-with-aws-lambda.html](https://www.javaworld.com/article/3210726/application-development/serverless-computing-with-aws-lambda.html)

Groovy

Spring boot

IDE - Eclipse
[https://www.shortcutfoo.com/app/dojos/eclipse-mac/cheatsheet](https://www.shortcutfoo.com/app/dojos/eclipse-mac/cheatsheet)

### Java Testing

Jenkins : Continuous Integration Testing of your web app

Jenkins is a server which monitors code changes : Continuous Integration Testing of your web app

Set up Jenkins Tutorial [https://www.javaworld.com/article/3123117/development-tools/open-source-java-projects-jenkins-with-docker-part-1.html](https://www.javaworld.com/article/3123117/development-tools/open-source-java-projects-jenkins-with-docker-part-1.html)

Jenkins : can manage via SSH agent, Windows agent, Java Web start agent

Jenkins : open source : uses Groovy programming language

Scala

Kotlin (has overtaken Scala)

Kotlin guided by IntelliJ

### [Sentry.io](http://sentry.io/) Logging

[https://sentry.io/](https://sentry.io/)

### CSS variables

[https://www.w3schools.com/css/css3_variables.asp](https://www.w3schools.com/css/css3_variables.asp)
@ supports grid () in css

### ML Machine Learning

Glow : by Facebook : Glow is hardware acceleration for Machine Learning : optimising the compiler for AI

PyTorch : AI Machine Learning

### UI/UX

[https://uxdesign.cc/design-better-forms-96fadca0f49c](https://uxdesign.cc/design-better-forms-96fadca0f49c)

### Reading Lists

[https://ryanholiday.net/reading-list/](https://ryanholiday.net/reading-list/)

### Kotlin

[https://www.youtube.com/watch?v=PsaFVLr8t4E&list=PLQ176FUIyIUbVvFMqDc2jhxS-t562uytr](https://www.youtube.com/watch?v=PsaFVLr8t4E&list=PLQ176FUIyIUbVvFMqDc2jhxS-t562uytr)

### Video

SDI camera interface

Video Screen Recording

[https://www.flashbackrecorder.com/](https://www.flashbackrecorder.com/)

### VideoCasting

slingstudio

WiFi broadcaster

[Cyprus.io](http://cyprus.io/)

Apple

[https://github.com/nathangitter/sketch-vs-ios](https://github.com/nathangitter/sketch-vs-ios)

[Roku](https://www.roku.com/en-gb)

### IE

IE11 can run every previous version of IE also !!!!

IE has 10 prevent of desktop market and zero on mobile

### Getting Help On The Internet

[https://webchat.freenode.net/](https://webchat.freenode.net/)

### Podcasts

This Week In Tech [https://twit.tv/](https://twit.tv/)[https://twit.tv/shows/this-week-in-google](https://twit.tv/shows/this-week-in-google)[https://overcast.fm/](https://overcast.fm/)

### getBoundingClientRect()

Return the coordinates of the bounding element

```
function isCollide(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}
```

# Random List 1 - mostly web

```js
GIF !!! [https://giphy.com](https://giphy.com/)
    
AWS - Amazon's cloud computing arm, Amazon Web Services provided two thirds of the firm's profit last quarter.

Alexa is Amazon's best selling device

Book 'Impatient Javascript' [http://2ality.com/2018/08/impatient-js.html](http://2ality.com/2018/08/impatient-js.html)

JavaScript Array map[] Method
  
Bogus Fake Data Generator [https://github.com/bchavez/Bogus](https://github.com/bchavez/Bogus)

Map Reduce and Filter [https://css-tricks.com/level-up-your-filter-game/](https://css-tricks.com/level-up-your-filter-game/)

auto-unsubscribe in angular observables

Web framework rankings | HotFrameworks

JavaScript Preprocessing

webpack and Babel [https://medium.com/oredi/webpack-with-babel-7-b61f…](https://medium.com/oredi/webpack-with-babel-7-b61f%E2%80%A6)

Promises and Async [https://strongloop.com/strongblog/node-js-callback…](https://strongloop.com/strongblog/node-js-callback%E2%80%A6)

reduce()

Webpack
Code split webpack bundles so get loaded in parallel
GraphQL
Apollo
D3 graphs
test runner shows test status
time travel test runner
[cyprus.io](http://cyprus.io/) dashboard
UI test
BDD
Jasmine test
Selenium test
Web driver
CI continuous integration : run tests immediately
CD continuaous deployment : push code live straight away
cypress
mocha : test
chai : test
enzyme
jest
nativescript : build native apps
anylist : todo
[workflow.is](http://workflow.is/)
jenkins : CI testing which monitors code changes
scala
[sentry.io](http://sentry.io/) logging
signalr : sockets
react
lint : rules
promises
async .. await : replaces promises
service worker
map
filter
reduce
set
stateless
react hooks
react mixin
react render props
jsx

Android Tbings
[https://nest.com/uk/](https://nest.com/uk/) Google IO
[https://cloud.google.com/solutions/iot/](https://cloud.google.com/solutions/iot/)
IOT Sensor [https://dzone.com/articles/introduction-to-iot-sensors](https://dzone.com/articles/introduction-to-iot-sensors)[https://www.finoit.com/blog/top-15-sensor-types-used-iot/](https://www.finoit.com/blog/top-15-sensor-types-used-iot/)
Node IOT Edge Azure [https://docs.microsoft.com/en-us/azure/iot-edge/tutorial-node-module](https://docs.microsoft.com/en-us/azure/iot-edge/tutorial-node-module)[https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal)[https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.azure-iot-edge](https://marketplace.visualstudio.com/items?itemName=vsciot-vscode.azure-iot-edge)

Check out [https://splice.com/](https://splice.com/) create audio
[https://docs.microsoft.com/en-us/azure/iot-edge/tutorial-node-module](https://docs.microsoft.com/en-us/azure/iot-edge/tutorial-node-module)[https://en.wikipedia.org/wiki/Analog-to-digital_converter](https://en.wikipedia.org/wiki/Analog-to-digital_converter)[https://tessel.io/](https://tessel.io/)[https://beagleboard.org/bone](https://beagleboard.org/bone)[https://openwrt.org/](https://openwrt.org/)[https://www.tensorflow.org/](https://www.tensorflow.org/)[https://js.tensorflow.org/](https://js.tensorflow.org/)[https://www.anker.com/products/taxons/114/Data Hub](https://www.anker.com/products/taxons/114/Data%20Hub)[https://onion.io/](https://onion.io/)[https://onion.io/omega2/](https://onion.io/omega2/)[https://www.amazon.co.uk/Omega2-Linux-Computer-Wi-Fi-Made/dp/B01MS64ZF6](https://www.amazon.co.uk/Omega2-Linux-Computer-Wi-Fi-Made/dp/B01MS64ZF6)
ESP8266 [https://www.amazon.co.uk/dp/B0791FJB62/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B0791FJB62](https://www.amazon.co.uk/dp/B0791FJB62/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B0791FJB62)[https://azure.microsoft.com/en-gb/blog/introducing-microsoft-azure-sphere-secure-and-power-the-intelligent-edge/](https://azure.microsoft.com/en-gb/blog/introducing-microsoft-azure-sphere-secure-and-power-the-intelligent-edge/)[https://azure.microsoft.com/en-gb/services/azure-sphere/](https://azure.microsoft.com/en-gb/services/azure-sphere/)[https://makezine.com/2015/12/02/a-guide-to-buying-your-first-laser-cutter/](https://makezine.com/2015/12/02/a-guide-to-buying-your-first-laser-cutter/)[https://www.amazon.co.uk/3D-Printing-Scanning/b?ie=UTF8&node=6283022031](https://www.amazon.co.uk/3D-Printing-Scanning/b?ie=UTF8&node=6283022031)
IOT for all website
[https://en.wikipedia.org/wiki/CAN_bus](https://en.wikipedia.org/wiki/CAN_bus)

[https://stripe.com/docs](https://stripe.com/docs)
NEXTJS examples [https://github.com/zeit/next.js/tree/master/examples](https://github.com/zeit/next.js/tree/master/examples)[https://www.meteor.com/](https://www.meteor.com/)[https://medium.com/@olotintemitope/how-to-generate-your-api-documentation-in-20-minutes-4e0072f08b94](https://medium.com/@olotintemitope/how-to-generate-your-api-documentation-in-20-minutes-4e0072f08b94)[https://graphql.org/learn/](https://graphql.org/learn/)[http://usejsdoc.org/](http://usejsdoc.org/) creates documentation
Microsoft Artificial Intelligence Developers Guide EBook [https://info.microsoft.com/rs/157-GQE-382/images/EN-US-CNTNT-eBook-AI-A-Developer's-Guide-to-Building-AI-Applications.pdf?LCID=en-us&mkt_tok=eyJpIjoiTW1FNVlUUTROREUwTlRkaCIsInQiOiIzb25wUUhPQmdYSVVxaWZOVExweGhTXC9haHRaejVjczgwSVY5XC9kYXdQaXJMb1RoSGdvaDFhMlRjSkk3SG9LcjZGTFU4WWpJOVhUQTNwM3NFQnBDbU91Q3MzVEhlV1lmNWc1S2xyZjNBd1lhYTAxbDFITWI1eEpoeW9UZzdrU0RuZjg1VUZqN1FyaklCTVEwNjA4dGNOZz09In0%3D](https://info.microsoft.com/rs/157-GQE-382/images/EN-US-CNTNT-eBook-AI-A-Developer%27s-Guide-to-Building-AI-Applications.pdf?LCID=en-us&mkt_tok=eyJpIjoiTW1FNVlUUTROREUwTlRkaCIsInQiOiIzb25wUUhPQmdYSVVxaWZOVExweGhTXC9haHRaejVjczgwSVY5XC9kYXdQaXJMb1RoSGdvaDFhMlRjSkk3SG9LcjZGTFU4WWpJOVhUQTNwM3NFQnBDbU91Q3MzVEhlV1lmNWc1S2xyZjNBd1lhYTAxbDFITWI1eEpoeW9UZzdrU0RuZjg1VUZqN1FyaklCTVEwNjA4dGNOZz09In0%3D)

Love something tutorials . Com / store
Level up tutorials .com / pro
Advanced react graphql
IRC chat
Discord chat
Code sandbox
[Dequeue.com](http://dequeue.com/)
A11y
Android auto app
iOS auto app
iOS car play
[https://css-tricks.com/why-using-reduce-to-sequentially-resolve-promises-works/](https://css-tricks.com/why-using-reduce-to-sequentially-resolve-promises-works/)[https://github.com/leonardomso/33-js-concepts#readme](https://github.com/leonardomso/33-js-concepts#readme)[https://wallabyjs.com/docs/intro/advanced-logging.html](https://wallabyjs.com/docs/intro/advanced-logging.html)[https://scotch.io/bar-talk/5-tips-to-write-better-conditionals-in-javascript](https://scotch.io/bar-talk/5-tips-to-write-better-conditionals-in-javascript)[https://dev.to/denisinvader/creating-an-interactive-map-with-d3-and-vue-4158](https://dev.to/denisinvader/creating-an-interactive-map-with-d3-and-vue-4158)
Free copy file with verification : TeraCopy : [https://www.codesector.com/downloads](https://www.codesector.com/downloads)[https://www.styled-components.com/](https://www.styled-components.com/)
Templating
Promise.all
Object.entries
Apollo graph ql
Function argument destructuring
Use named parameters
React spring - create animations
Promises replaces multiple callback hell
Listen on promise with .then
Async await Wes Boss check 15 minute video
Mlab hosts MongoDB
Async... await replaces regular promises . Use them !!!!!
Await yields result
Object : create and use square bracket on same line to create a property
Method in object :
Jira impressa coffee machine e80
Defer loading of a script eg google analytics
Var
Let
Const
Callback
Recursion
For each just loops over array
Map creates new array while looping
Big O notation is measure of complexity or speed of operation
0.1 + 0.2 === 0.3 returns false
Css Bem block element modifier-
[https://www.apollographql.com/](https://www.apollographql.com/)[https://jamstack.org/](https://jamstack.org/)[https://advancedreact.com/](https://advancedreact.com/)[https://modernizr.com/](https://modernizr.com/)[https://autoprefixer.github.io/](https://autoprefixer.github.io/)[https://www.meteor.com](https://www.meteor.com/)
Template literals with e.g. backticks style.div with `function`

Object destructuring - can all rename at same time . Can have a default fall back value
Object computed property name by using square bracketsvto create a new object property
React suspense
Esx spread - array items
Object spread literals using . . .
Object.asdign
Lodash
Arrow `function` - implicit return . Also 'this' is not scoped
Default arguments in functions
GraphCMS is GraphQL CMS = API for future
Named parameters in `function`
Modules : commonjs
Imports. Exports. Must use webpage or similar
Meteor
Parcel
Package has default and named import/export
Dynamic import with react loadable to only load libraries which I need
React.lazy code splitting
Classes
Quick react app2 supports sass
Webpack4
Service worker are opt in
Google work box
.then
.catch
Use async await with .catch error
Generators
For....in
For...of
Loop over generator
Map . . . Filter . . . Reduce woth object keys values
Maps and sets
Use to de-duplicate an array
[Es6.io](http://es6.io/) es6 for everybody
Better JavaScript course by author Wes boss or Scott with reduction in video at final seconds GET THISCOURSE 25 PERCENT OFF
React classes or stateless `function`
Stateless can painfully convert to class function. But now react hooks.
React mixin not used
Render props jsx
Hook is function run before return
[Usehooks.com](http://usehooks.com/)
Reactconf
work item migrator in git
work item manager
virtual file system for git was called gbfs and runs on Windows
Bing is on git
merge conflict resolver
Monaco under hood
dependency tracker can track work items you are interested in
Azure application insights
github algorithms
snap Linux
Linux flatpack
server 2019
Windows lts or semi annual support
cicd pipeline
docker volumes
Windows 10 1809 update
Windows 10 uses hyperv hostile mode but new will run fast process isolation
nanosrver was bare metal server
nanosrver used for containers
alpine Linux small 7mb
nano server only 150mb
nano containers can enforce 64 bit compiling
nano server has no PowerShell now!!!!
docker hub
orchestrator
bitcoin mining
docker swarm - clustering
orchestrator manages containers
nginx
Ssl termination
mis scripted install
docker conf
book by talker is Elton stoneman or read his blog
cis talk notes
dive tool to explore docker images
git migrate history
Edward Thompson
Jill Campbell vsts windows

Roslyn compiler is open source

Windows source code into git and lives in azure repos as closed source

vsts visual studio team services which has become azure repos

git rebase is undo

Windows is closed source

azure is closed source

JAMstack | JavaScript, APIs, and Markup

Brush on a drill
Advanced React & GraphQL
Modernizr: the feature detection library for HTML5/CSS3
Autoprefixer CSS online
CSS Variables - var[] Function
@ supports grid () in css
styled-components
Async... await replaces regular promises . Use them !
API
[https://www.programmableweb.com/apis/directory](https://www.programmableweb.com/apis/directory) 16000 public API
API can be central point of security
Babel
Babel - converts code back to old Javascript see [http://babeljs.io/repl/](http://babeljs.io/repl/)
Bootstrap
[scrimba.com/g/gboostrap4](http://scrimba.com/g/gboostrap4)[shoelace.io](http://shoelace.io/) creates bootstrap div layouts for you
Not supposed to nest containers
What's new in C# 7.3
MIcrosoft Free EBooks Docker .NET Azure ASP XAMARIN UWP [https://www.microsoft.com/net/learn/architecture](https://www.microsoft.com/net/learn/architecture)
Threading [https://jj09.net/multithreading-csharp-vs-java/](https://jj09.net/multithreading-csharp-vs-java/)
Structs : Developers at Microsoft recommend using a struct in place of a class only for types which are smaller than 16 bytes, are immutable, are short-lived and are not frequently boxed.
Bob Tabor teaches C# for beginners
Visual Studio App Center

CSS
CSS Grid with Traversy

Cucumber
Testing Framework

Git
GitGuys : 30 tutorials on the use of Git!!!
Bitbucket = paid GIT. [bitbucket.org](http://bitbucket.org/)
Git - Book
Find a chat room - become a Google Developer - [webchat.freenode.net](http://webchat.freenode.net/)[events.google.com/io](http://events.google.com/io)
Google Sheets
HTML to Google Sheets : [https://developers.google.com/sheets/api/quickstar…](https://developers.google.com/sheets/api/quickstar%E2%80%A6)
```

# Random List - Programming

```
Reason ML : type safe code with JS and OCaml

Reason · Reason lets you write simple, fast and quality type safe code while leveraging both the JavaScript & OCaml ecosystems.

Exploring ReasonML

Screen Recording

Recordit: Record screencasts fast & free! with GIF Support!

Google Analytics
OpenSSL certifiates

Wordpress
Allow user registration : [http://www.wpbeginner.com/beginners-guide/how-to-a…](http://www.wpbeginner.com/beginners-guide/how-to-a%E2%80%A6)
Wordpress : Build site in 1 hour [https://www.youtube.com/watch?v=66n1DFrmc0Q&featur…](https://www.youtube.com/watch?v=66n1DFrmc0Q&featur%E2%80%A6)
PewdiePie
Youtube Top Content Creators
Dot net foundation supports open aource@dot net
F sharp foundation
Json dot net nuget package

Dot net foundation looks after the longevity of open source projects
Mono
Pivotal
Steeltoe
Xsl
Redhat
Unity
Microsoft bot frameworks
Game zork
Game Sierra
Phaser . Io. Is html gaming framework
Bot framework
```

# Random List 2 - Hardcore!

```

Lets Encrypt - free website to produce free HTTPS certificates

Service worker - runs in background thread, cannot manipulate the DOM or Window object but can pass messages to UI thread, can intercept network calls like fetch() so can use service worker to cache search results

GTK+ GIMP TOOLKIT OR GNOME TOOLKIT ==> CREATE GUI EG [http://www.gtk.org/](http://www.gtk.org/)
ORM Object Relational Mapper - Maps an SQL query written in non-SQL language to an actual query
Hadoop breaks up eg 1TB file to 128MB and each node processes that 128MB only, then combines results at end.
Composer fixes dependencies
Declarative event handling
Programmatic event handling
var_dump is PHP output
isset
unset
symbolic link is like a shortcut but can include folders. Can be installed on Windows.
Viewport tag instructs the browser that we may be viewing from a mobile device
Viewport width=device ==> means set the width to the width of the viewing device
Viewport initial scale = 1 means on initial page load everything is scaled properly
partial classes are joined together to form one class
WebGL develops games
DuoCode compiles C# to Javascript [http://duoco.de/](http://duoco.de/)
MVC Controller requests model to perform CRUD operations, and decides result to return
MVC Controller : User -> Request via URL -> this is mapped via URLRouting module to the controller. Controller decides model to use and result to return.
MVC Controller class : inherit from IController
modernizr support legacy HTML
Typescript from Microsoft compiles C# to Javascript
Grunt groups files eg css, js into one file for cleaner download
Gulp = faster grunt = groups files eg all css files into one larger file
REST simplifies CRUD
Angular (client side) uses REST
SOA Service Oriented Architecture
REST Representational State Transfer
Angular is Google open source with MVC and does 2-way binding
declarative ui - everything declared in UI
directive
[www.airpair.com/angularjs](http://www.airpair.com/angularjs)
Best Video Tutorials over at [Egghead.io](http://egghead.io/) [https://egghead.io/](https://egghead.io/)
Definitive Guide [http://www.airpair.com/angularjs](http://www.airpair.com/angularjs)
Angular Code Snippets [http://www.johnpapa.net/angularjs-code-snippets-for-visual-studio/](http://www.johnpapa.net/angularjs-code-snippets-for-visual-studio/)
Style Guide [https://github.com/johnpapa/angularjs-styleguide#single-responsibility](https://github.com/johnpapa/angularjs-styleguide#single-responsibility)
Visual Studio Angular SPA template [http://visualstudiogallery.msdn.microsoft.com/5af151b2-9ed2-4809-bfe8-27566bfe7d83](http://visualstudiogallery.msdn.microsoft.com/5af151b2-9ed2-4809-bfe8-27566bfe7d83)
Design Patterns in JavaScript [http://addyosmani.com/resources/essentialjsdesignpatterns/book/](http://addyosmani.com/resources/essentialjsdesignpatterns/book/)
Choosing a JS Framework [http://www.funnyant.com/choosing-javascript-mvc-framework/](http://www.funnyant.com/choosing-javascript-mvc-framework/)
To Do MVC - helping you select a JS framework http:todomvc.com/
RELAX NG = XML alternative way of writing it
SQL = SEQUEL = Structured English Query Language
XSLT Extensible Stylesheet Language Transform which displays an XML document as eg a proper table!
MVC Model View Controller Model=Data + View=Visuals + Controller which takes updates from View and sends data to controller
pushState can push the state of the web page in the 'back button' history so that user can click back
replaceState replaces the state of the application eg for purposes of back button and history in a browser
skin file
AJAX requires UpdatePanel which requires ScriptManager (on Master Page) which is accessed using ScriptManagerProxy from a non-Master page
@supports
@document
@rule
touch create file
.xsd xml schema definition
EventArgs e = blank default event handler; no event data passed
ExecuteNonQuery = Insert/Update/Delete (NOT SELECT)
digest authentication
safe-critical code
security-critical code
Httpcontext/response/request
Httpapplication
application state ***
application template ***
covariant parent to child OK
contravariant child to parent OK
xslt extensible stylesheet language transformations
HttpContext ***
nlp natural language processing
coupling = class dependency
cross page posting
cursor:
CustomAdapter
DataAdapter
font-variant eg CAPS
autocomplete on form
autofocus on form
formaction for one button
placeholder
format %10.2f = 10 characters with 2 decimal places
format d = integer
format c = currency
format f = fixed decimal places
ismap
nav group of html links
interface
applet
awt abstract windows toolkit
location = current URL
location.assign loads new document with new URL
WPF Windows Presentation Foundation = Desktop Apps using XAML
XAML = Win8 Desktop Apps
WCF = Server Web App
Alt-Right shows code options
var implicit declare variable
namespace MyApp.Level { class myClass {} }. using MyApp.myClass
method signature = name + parameter list
method specification = name + parameters + return type + accessibility
method PascalCase(parameterCamelCase)
method myMethod(int input1, out string myStringOutput)
Debug.WriteLine("Text")
Trace.WriteLine("Text")
static class can be used to contain void Methods so we never instantiate the class
static method cannot access non-static members
Interfaces are 'ways to define signatures' for methods, properties and events
sealed can only be used with override on a method to prevent it being overridden
serialise data puts it in a stream eg XML, JSON
#PCDATA XML
transparent code user rights
.ascx user control
annotation = metadata
App Container in RAM allows clean uninstall
App Creation : UI, Manifest, Code, App, Debug, Package, Validate, Deploy
App Life Cycle on Global.asax
App Lifecycle : Browser Request, IIS App Manager, create App Domain, Create core objects eg Httpcontext/Request/Response, App starts with HttpApplication, request processed by HttpApplication
App State **
App Template **
ArrayList<T> myArray = new ArrayList<T>();
Arrays.CopyOf(values,values.length) copies all values in one array to another
Arrays.sort can sort values of an array
Embedded code block in ASP : <%@ Page Language =”C#” %> : in HTML <% ...c# code.. %>
intent-filter from action MAIN and category LAUNCHER
#PCDATA
transparent code has only user rights
transparent code = user permissions
permission set
%classpath%
Container class has method to add/remove/get widget class
nextint()
NOFRAMES if browser does not support frames
-ms-hyphenate-limit-zone is width of white space on right before hyphenation is forced
-ms-wrap-flow: auto | both | start | end | maximum | clear
.NET identity permission protects code libraries
.NET permission FULL TRUST / NOTHING
.NET permission Full Trust or Nothing (code cannot run)
.NET permission set = group of permissions
.NET root = {} System
.NET security transparency prevents app code from running with infrastructure code
.NET security transparency separate app code from infrastructure code
.NET transparent code does not exceed its permission set
.xsd XML Schema Definition
/** .... multi-line javadoc comment ....*/
/** @param = parameters into code*/
/** @return = items returned by code*/
/** javadoc */
ABI App Binary Interface allows app to talk to the OS
Activation Event Sequence
Aggregation is one class using another
App Container allows clean uninstall
App Container runs in RAM
App Creation Sequence : UI => Manifest => Code => Create App => Debug => Package => Validate => Deploy
App Life Cycle events are only on the server -> Global.asax
App Life Cycle events in Global.asax
App Lifecycle - browser request -> IIS App Manager -> create App Domain -> Create core objects eg Httpcontext/Request/Response -> App starts by creating HttpApplication -> Request processed by HttpApplication
App Lifecycle events in Global.asax
App Stack needs eg browser, OS, DB, language
App State begins with browser request, finishes with web page closure
App State eg HTTPApplicationState is server side, permanent, all users
App State in Page Class -> App
App State in Page Class Property
App state is locked as can be for >1 user
App State is server, all users, locked on update
App state is stored on server, is permanent, and is locked when changing
App state memory is for all users of that app, server-side
App state Page Class -> App ->
App state permanent
App Template
App-V client receives data stream from server
App.Config contains settings for an app. XML file which is read by CLR
APP_WEBREFERENCES is folder for web service
appendChild parentobject.appendChild(childobject)
Application ["field"] = "value"
AppCache NOT supported in IE
Application container allows a clean uninstall
Application container class allows search for widget class based on ID
Application container class provides methods to add/remove/get widget classes
Application container runs in RAM self-contained
Application creation sequence : UI -> Manifest -> Code -> App -> Debug -> Package -> Validate -> Deploy
Application Host
Application lifecycle event : browser request sent to IIS application manager which creates Application Domain which creates core objects eg HttpContext/Request/Response -> application starts by creating HttpApplication -> request processed by HttpApplication ->
Application lifecycle event browser request sent to IIS Application Manager which creates an Application Domain.
Application lifecycle events : browser request -> IIS Application Manager creates Application Domain -> Core objects created eg HttpContext/Request/Response -> application starts by creating HttpApplication -> request processed by HttpApplication ->
Application Lifecycle events stored in Global.asax on server
Application Object
Application pool is a set of one or more URLs served by worker processes
Application Priority
application publishing
Application Sequence Diagram displays the sequence of order of moving data from function to function within the app
Application Sequence Diagram moves data around app
Application State begins when a browser requests a web page, stops when web page closes
Application State in HttpApplicationState
Application State in Page Class -> Application
Application State is a server control for all users
Application state is locked during change
Application state is permanent server memory common accessible by all users and sessions
Application State loaded in Global.asax Application_Start
Application state stored in the Application property of the Page class which provides the HttpApplicationState object which can store key-value pairs
Application.Lock;Application["Name"]="value";Application.Unlock
Application.Unlock()
Application["Name"]="value"
Application_BeginRequest
Application_End
Application_EndRequest
Application_Start loads data into cache, maintains app variables, initialises static values
appx is Visual Studio app
arc (x,y,radius,startAngle, endAngle,Boolean)
array allocation initialises the array and allocates memory
Array can be passed to a method but values in array can be changed
Array can reference the last element only if a tally is kept every time a new element is added, incrementing by 1 each time.
Array declaration double [] values = new double [10];
Array declaration int [] primes = { 2, 3, 5, 7};
Array double [] my = new double [100];
Array initialise
Array random fill int[] a = ArrayUtil.randomIntArray(20,100);
Array reallocate increases or decreases size of array; is slow
Array reference same object with two names eg int[] array1 = {1,2,3}; int[] array2=array1;
Attribute declared within a method is available in that method only even if the method is declared public
Bool = 2 Bytes
Boolean is FALSE if passed 0, -0, null, "", false, undefined, NaN, (JS)
Boolean searchterm* includes searchterm and anything added to it
Boolean searchterm. only includes exact words searchterm
changedtouches is list of all fingers involved in the current event
char character = mystring.charAt(i);
Character isDigit, isLetter, isLowerCase isUpperCase, isWhiteSpace
characters JS \ \' single quote \" double quote \\ backslash \n new line \r carriage return \t tab \b backspace \f form feed
civic data is to do with human readable text
Class Character has methods isDigit, isLetter, isUpperCase, isLowerCase, isWhiteSpace
Class ClickListener listens for mouse clicks!!!
Class loader
Class nested non-static = inner created using OuterClass.InnerClass innerObject = outerObject.new InnerClass()
Class nested non-static=inner does have access to other members of its enclosing class
Class nested static accessed using OuterClass.StaticNestedClass
Class nested static does NOT have access to other members of its enclosing class
Class nested static new object created using OuterClass.StaticNestedClass nestedObject =
Class nested static new using OuterClass.StaticNestedClass nestedObject
Class no-argument constructor eg Bike myBike = new Bike();
Class no-argument Constructor is called by eg Bicycle myBike = new Bicycle ();
Class Number has subclasses Byte, Integer, Double, Short, Float, Long, BigDecimal, BigInteger, AtomicInteger, AtomicLong
Class outer
Class PrintWriter is used to write text to a text file
CLASSPATH for whole PC
clearInterval clears a timer set with setInterval()
Client Security Solution (IBM) bitlocker system integrity verification
clip clips an image with set pixels clip:rect(10px,50px,50px,10px);
cloneNode
Close an app Java click can use System.exit(1);
Close method closes a text file down when it is being opened for reading while (in.hasNextLine()) { string line = in.nextLine();..........process line of text........} in.close();
Close method closes down the PrintWriter opening of a text file out.printf(“Total : .....”); out.close();
close text file after reading in eg while (in.hasNextLine()) {string line = in.nextLine(); } in.close
close when printing out to a file eg out.printf("xx"); out.close();
Close() a text file while(myFile.hasNextLine()) { string line=myFile.nextLine(); } myFile.close();
closePath closes the path from the current point back to the first point
Clustered Storage Pool only delete a clustered storage pool when it is on a node with the cluster resource for the pool in the “online” state.
COM Component Object Model implements objects in environments different to which they are written
COM framework Media Foundation for videos etc
ComboBox.addItem(“New Item”);
ComboBox.setEditable();
Container class : add/remove/delete/get Widget
Container class : search for Widget based on ID
Container runs in RAM without disturbing anything else, allowing clean uninstall
continue breaks current loop and continues with the next one
continue to a label
Control + Space = show properties of an object
control -> enableviewstate
Control category AJAX, data, general, HTML, login, Navigation, Standard, Validation,Webparts,user,server,
Control Category HTML require HTML and Javascript
Control Category HTML requires insecure HTML and Javascript only
Control Category Server requires security at the server, data and source code require securing
Control Category Server requires security at the server. Data and source code require securing.
Control Category User web site has many pages with the same controls on them
Control Category User web site has multiple pages with many same controls
Control Category User, Server, HTML, Validation
Control Category validation for database input
Control Category Validation required for database input
Control events eg Click can trigger code
Controlling Phase is fixing any bugs / monitoring after it's complete. Ongoing project management
Controls Validation on server (asax) CompareValidator, RangeValidator, RequiredField, RegularExpression with match
controlstate is always enabled (key functionality of that control)
controlstate is eg on client object eg button and works when viewstate is disabled.
controlstate is on client side
ControlState works for postback when viewstate disabled
coords.accuracy The accuracy of position
coords.altitude The altitude in meters above sea level
coords.altitudeAccuracy
coords.heading degrees clockwise from North
coords.latitude
coords.longitude
coords.speed speed in m/s
counter-increment #
counter-increment #
counter-increment/reset
counter-reset
counter-reset resets a counter eg every section
Coupling is the number of dependencies between classes ie high coupling if lots of dependency
createElement and appendChild can programatically create a new object and append it to an existing one!
Cross Page Posting uses PostBackURL to link to another page
CSS <style type="text/css"> </style>
ctlKey returns whether or not Ctl key was pressed when event was triggered
CustomAdapter : display more than one item in row
CustomAdapter can use if displaying more than one item per row
Data Modelling Conceptual : Order table, Customer table, Products table, Supplier Table,
Data Modelling Logical
Data-aware controls all have DataSource and DataSourceID
Data-Binding Syntax
DataAdapter between Database and Dataset
DataAdapter bridges between the data set and the data source
DataAdapter ODBC / OLEDB / SQL
DataAdapter populates using fill
Database Connection Flat File/XML/Dataset
Database connection pool
Database Driver Create Connection URL jdbc:derby:phildb;create=true
Database JTable
Database ODBC Bridge
Database ResultSet
Database Table Model
Database transaction object
Datalist (HTML) pre-defines blank input box options
DataRelation relates tables
DataSet good for offline access to database
DataSet has R/W access to data from multiple DBs and tables, can be bound to multiple controls
DataTable is like a grid created on the fly in memory in which to hold data eg which has been pulled from a database
Declaration interface followed by a class that 'implements' the interface
declaration without explicit
Declaring an interface; class 'implements' the interface
defer until page has loaded (JS)
defer=”defer” defers loading the script until the page is rendered (Javascript)
defined in header <style type="text/css"> #para1 { text-align:center; color:blue; } </style> called by <p id="para1">Text</p>
devicemotion is (x,y,z) acceleration (javascript)
devicemotion is accelerometer
devicemotion measures rotationRate.alpha/beta/gamma
deviceorientation is alpha,beta,gamma angles off the zero
DisplayMode Java can change display if isDisplayChangeSupported= true
DLL Server Controls do not have to be replicated to each client page
Doctype (!DOCTYPE) in HTML4; not HTML5 which just has <!doctype html>
Doctype declares the DTD Document Type Definition
doctype strict transitional frameset
document.createElement(“p”) var para=document.createElement(“p”)
document.createTextNode(“abc”) var node=document.createElement(“text”)
document.queryselector() selects the next item in a class
document.querySelectorAll() selects all the items in a class
document.write document.write("<h1>This is a heading</h1>");
document.write(“<HTML_CODE>”);
DOM document.getElementsByTagName('*').length gives number of DOM elements
DP = density per pixel
DP = density per pixel
DTD Frameset contains frames
DTD strict like XHTML
DTD Transitional contains some older HTML
Dynamic method lookup
embed container in which to embed plug-in
encode/decodeURI(url) produces my%20test.asp?name=st%C3%A5le&car=saab my test.asp?name=ståle&car=saab
entity is encoding of reserved characters within the HTML
Entity-Relationship Diagram
Event data
Event definition can be created with a 'custom' delegate but usual to use default EventHandler delegate
Event delegate connects the event to the method that is going to handle the event, the method handler
event DOWNLOADING indicates new downloads are available to download but the download has not yet started
event DOWNLOADING means ready to begin download (JS)
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
Explicit constructor defines initial values explicitly
exponent y=123e5 (123x10^5) (JS)
expressions have been depreciated
Extended Splash Screen
FCL Framework Class Library is a .NET Library
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
FlipView
Float 1.23f 4 bytes with exponential 10^38
float can float elements to the left or right (not up or down)
Float exponent is the number to which the radix is raised eg 7 in 1.273 * 10 ^ 7 has 32 bit precision
float left means the item is placed left and text flows right
float left or right or none
Float mantissa holds the number of significant digits in the number eg 1.273 in 1.273 * 10 ^ 7
Float mantissa is number of significant digits eg 2 in 1.23
Float radix is the number eg 10 that must be multiplied to a power
Floating point number has sign, mantissa, radix, exponent
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
Frame holds the Menu Bar, the Content Pane
Frame is a window with a title and border
Frame is an instance of JFrame supporting title, border and buttons etc
Frame JSetMenu bar adds menu to frame
Frame setLocation sets location of frame void setLocation(int, int)
Frame.pack sets all components at recommended size
Full screen exclusive mode program controls bit depth and size of the screen with
FullScreenWindow with eg setFullScreenWindow and isFullScreenSupported
function variables function f1(var1,var2){....} called by onClick=”f1(“data1”,”data2”)”
function with parameters <button onclick="myFunction('Philip','Technician')">Try it</button> <script> function myFunction(name,job) { alert("Welcome " + name + ", the " + job); } </script>
Generic Class
heap is memory allocated to a program at runtime and is reclaimed when no more variables hold a reference to them
hgroup groups h1 and h2 headers
history (window.history) has info about the browser history and forward(), back(), go(), length() which is the number of URLs in history
history.length is the number of URLs in the browser history
canvas globalcompositeoperation layers images on top of each other
Canvas moveTo() Moves the path to the specified point in the canvas, without creating a line
iframe is alternative to CSS regions
ismap image is part of a server side image map
table caption <table><caption>Monthly savings</caption></table>
http.sys kernel driver for HTTP
HttpApplicationState store key-value pairs
HttpApplicationState stores key-value pairs
HTTPC HTTP Client Service
HttpContext.current
HttpCookie name = new HttpCookie(“name”,”value”); Response.Cookies.Add(cookie)
hyphenation declares language eg <html lang="en-us">
hyphens none | manual (when ­ Soft Hyphen occurs) | auto
IComparable have to implement their own method code in order to validly compare two objects
ID link externally <a href="[http://www.abc.com/page.htm#ID](http://www.abc.com/page.htm#ID)">...click...</a>
ID link within page <a href="ID">....Click...</a>
Identifier is the name of a predefined function or subroutine
identity permission full trust or nothing protects libraries
iframe border <iframe src="URL" frameborder="0"></iframe>
iframe src="URL" width="200" height="200"></iframe> inline frame
iframe src="URL"></iframe>
IIS Application
IIS Application Pool
IIS config
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
interact with the methods by implementing a new class on the named group of methods
link state a:link/visited/hover/active(being clicked)
Machine.config contains default .NET settings for whole machine. It is an XML file which is read by CLR
meter integer measurement
MTS Microsoft Transaction Server ensures a full or no transaction takes place
name of app is defined in AndroidManifest.xml
named flow is the object that contains the content stream and gets assigned the flow-into property
Naming Convention Camel Case for localVariables, methodArguments
Naming Convention Pascal Case for ClassName , MethodName
nav-left states where to navigate to when the left arrow key is pressed
nav-left tells where to navigate to when left key is pressed
NOFRAMES is for browsers that don't support frames!
non-virtual member cannot be overridden
onchange object.addEventListener (“change”,handler,useCapture);
onchange object.onchange=”handler”;
onreset (form)
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
Parameter implicit is the object on which a method is applied
PE Portable Executable file is DLL or EXE
permission set runs from NOTHING to FULL TRUST
Permissions are grouped into permission sets (HTML)
persistent cookie data stored permanently on the local storage (until cleared)
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
replaceChild
Request object gets info
Request.Cookies[“name”].Value
requestAnimationFrame allows transition
required attribute means a field cannot be empty
resize:none/horizontal/vertical/both specifies that an object can be resized by the user
Response Object responds to request
Response.Redirect("URL") transfer control to any URL
Response.Write outputs text to screen and not to an object
Response.Write("<a href="[abc.com](http://abc.com/)">click</a>") opens link
return function f1(){return x;} placed in variable value1=f1();
rotate(degrees * Math.PI/180); rotates a canvas by so many degrees
rowspan is an entry in a table which spans more than one row <th rowspan="2">Telephone:</th>
rp Alternative display for non-Ruby browsers
rt Explains/Pronounces <ruby> characters
touch target 7mm minimum
touch target 9mm recommended
Touch target dead space between icons
Touch target visual asset is the icon
touch target visual buffer is a border around an item
Touchscreen Acoustic Pulse recognises sound of contact only
orientationchanged
touchend is triggered by the finger releasing from the screen
touchmove follows the finger
touchstart is triggered by a finger touching the screen
gesture event has scale and rotation
gesture touch moves object over screen
Windows Store App advanced service Live Connect
Windows Store App Advanced Service Windows Push Notification is the ability to notify of upgrades available
Windows Store App must have name, package upload control, copyright and trademark info
Windows Store maximum file size is 2GB
Screen touchlist is a list of all points touching the screen
screen.availHeight/Width usable screen size eg minus Taskbar
screen.availWidth/Height is size of screen minus features eg taskbar ie the usable user screen size
screenX is x coordinate of mouse when event is triggered
screenX,Y is distance to left/right from point
screenX,Y is distance to top of screen (including toolbars etc)
screenY is y coordinate of mouse when event is triggered
script type=”text/javascript” src=”jsfile.js”>
SDN Software Defined Network
sectioning root doesn't have a parent that can read its sections
sectioning root tag BLOCKQUOTE BODY DETAILS FIELDSET FIGURE TD
Sectioning Root Tag has content that does not appear in main document index ie BLOCKQUOTE BODY DETAILS FIELDSET FIGURE TD
Security Transparency by NET Framework prevents app code from running with infrastructure code
selector {attribute:value};
Server Control map the HTML control to the server side programming for them
Server controls stored as dll files mean do not have to replicate code to each client page
Server-sent event is when a web page automatically gets updates from a server
Server-side event SSE handles notification of server events to the browser
Server.Execute executes page2 then returns command to page1
Server.Execute page2 then return to page1
Server.ScriptTimeout = secs;
server.scripttimeout=2; (seconds)
Server.Transfer from Page1 executes Page 2 and transfers command to Page 2
Server.Transfer only to ASPX pages
Session Life Cycle events are only on the server -> Global.asax
Session Life Cycle OnStart, OnEnd
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
shape controls the shape of wrapping flow inside or outside an element. Combine with exclusions.
shape controls wrap-flow shape of flow around an object
shape-inside/outside sets flow of text around an object by defining the shape of the flow
shiftKey returns whether or not Shift key was pressed when event was triggered
SHTML Server Side Includes which contain small snippets of code like a stat counter
signature of a method = name and type and kind
SOAP data within <methodName><name>VALUE</name></methodName>
soap:Body
soap:Envelope
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
STimer which tracks timed events
Storage APIs
Struct cannot inherit from another struct or class
style.display=”block” document.getElementById("hide").style.display="block"; show text
style.display=”none” document.getElementById("hide").style.display="none"; Hide text
style.property
style.visibility=”hidden”; document.getElementById("p2").style.visibility="hidden"; show text
style.visibility=”show”; document.getElementById("p2").style.visibility="visible"; show text
Subclass of class created by class MountainBike extends Bicycle {............}
summary Defines a visible heading for a <details> element
switch var d=new Date().getDay(); switch (d) { case 0: x="Today it's Sunday"; break; } document.getElementById("demo").innerHTML=x;
System.exit(1) closes a program
[System.web.HttpContext.Current.User.Identity.Name](http://system.web.httpcontext.current.user.identity.name/)
target activates when the URL #tag and the #id match, highlighting the selected block of text for example
targettouches is a list of all finger points on the target object
Template display : “..aa.” “.bcc.” “.dcc.” 10% 25% 30% 25% 10%; will fix the 5 widths (percentages on last line)
Template display : “.aa” gives one row with empty cell + 'a' + 'a' which will span two columns
Template display : “.aa” “bcc” gives two rows : first row = empty + a + a, second is b + c + c (c spans two columns)
touch snap point is a convenient place for an object which has been pushed with intertia to stop
Trace.axd is used to view trace information when tracing is enabled
transparent code does not exceed its permission set
usemap image is a clickable part of a client side image map with clickable links in the image
View state <control> -> EnableViewState
View State will add eg Label1.Text=Label1.Text + "Hi"
ViewGroup provides a layout model eg Linear/Grid/Relative
ViewGroup provides layout model eg Linear, Grid, Relative layouts
Viewport is the space available within the browser window
viewport window is the visible window
ViewState can be set at the application level using web.config file with a line <pages enableViewState="false" />
ViewState can be set at the page level also using <%@ Page EnableViewState="false" />
ViewState holds values of all non-postback controls and puts then in a string called _VIEWSTATE. Can be disabled per control or per page or per app
ViewState maintains state of controls across postbacks <asp:object EnableViewState="false" />
virtual is mutually exclusive with static, abstract, override
Virtual Storage Pool thinly provisioned with support for mirroring
wbr possible line break eg for a hyphen
WCF Windows Communication Foundation creates and uses Web Services
Web Reference is URL to Web Service
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
Windows Forms Applications can work whether or not connected to internet
Windows Service Base Class is base class from which other classes are built eg with stop, start
Windows Service Installer
Windows Service Process Installer
[windowsphone.com](http://windowsphone.com/)
WinJS controls
WinJS Windows Library For Javascript
WinRT (Runtime) sits on top of Windows 8
WinRT apps are confined to sandboxes
WinRT works with C++, C#, VB, Javascript
WOFF Web Open Font Format allows non-standard fonts to be used
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
WrapContent : Button increases size with text
Wrapper Byte Boolean Character Double Float Integer Long Short wrap primitives inside eg Integer I = new Integer(5);
wrapping context is collection of exclusion areas
WSAT Web Site Admin Tool
WSDL = Web Service Descriptor Language
WSDL allows a web service to tell a client what sort of messages it will accept and what will be returned
WSDL identifies data types, methods, URLs
WSDL Web Service Description Language describes the service offered using XML
WSRM Windows System Resource Manager manage server processor and memory usage with policies
wwahost.exe app host which renders the page (similar to cut-down IE10)
X3D is XML 3D graphics standard, successor to VRML
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

### ECommerce WebSites

Shopify Ecommerce Website Builder   [https://www.shopify.co.uk/](https://www.shopify.co.uk/) 

### Notion Keyboard Shortcuts

- [ ]  [Keyboard shortcuts](https://www.notion.so/notion/Keyboard-Shortcuts-66e28cec810548c3a4061513126766b0)

## NUXT over vue

Mobix 

## Gatsby

Precompile to static onto Cdn 

Data pulled into graphql 

# Articles On Productivity

### The 3 Most Important Skills to Learn Now to Thrive in 2019

Back in September of last year, I went to live in Cambodia to work remotely on my own startup.

I grew the company from 4 people to 8.

In the course of the next 12 months,

I also lived in Spain, India, Canada, and now I’m in Colombia.

I started 3 businesses,

wrote 2 books (with two bigger ones in process),

wrote 300+ articles on

```
productivity, 

learning, 

life lessons,
```

became a top writer in 16 categories on [Medium.com](http://medium.com/) (including top 1 in Travel and top 5 in Inspiration),

became healthier,

opened my own light coaching program,

learned 36 new skills, etc.

Reading that, you may not guess that I’m actually a software engineer by trade, building video games for a living.

2018 is the year I will fail the most

…and so should you!

Truth is, to become who you really want to become, you’re going to need to change, and change doesn’t happen overnight.

But trust me, it’s not easy.

Of all the skills that contributed to me thriving in 2018, I narrowed it down to the three most important in my opinion.

This also comes from compiling and testing theories in some of the best self-help books in the world.

I ordered them from least to most important in my mind:

Skill #3: Learn to Get to Action

If there’s one thing I can say without any doubt it’s that I’m a pro at getting to action.

I often surprise people with having done something less than 24 hours after we talked about it.

But this is also one of my big weakness.

I tend to charge ahead, sometimes not thinking enough about if I even have the time to commit.

This often led me to do too many things at once, not having the time to deliver quality results.

But I stand by this skill.

In this world, there are underthinkers and there are overthinkers, with hardly anyone in between.

Underthinkers don’t think things through, and hardly follow through.

Overthinkers spend so much time planning that they forget to act. You don’t want to be like that.

Getting to action is also not about not planning.

It’s about planning just enough and carrying through within less than a week of planning.

If you don’t act, you don’t get.

It’s that simple.

Nothing meaningful comes to you for free.

How do I learn this skill?

Get into the habit of putting actions in your calendar.

That’s the first step towards knowing where your time is spent and where you have actual free time.

In your daily planning, always leave room for important but not urgent tasks.

From 5am to 9:30am, I exclusively do things that are not considered my main job. I write, go to the gym and practice 3 skills.

Take notes.

Your memory is not good enough to recall things you’ve heard or seen.

When you can refer back to a thought you had, you’re statistically more likely to act on it.

Take notes in class, while watching videos, while listening to podcasts, while talking to people, etc.

Do daily planning

Do weekly planning

Do monthly planning

Every Friday or Saturday, I plan my activities for the next week.

Every evening, after work, I review my priorities for the next day and move things around as needed.

And every end of the month, I write down my goals, both professionally and personally, for the next month.

I try to be as specific as possible.

How much mass do I want to put on?

How much money do I want to make?

How many new followers do I want to have?

When you have goals you firmly believe in and you review them at least once every week, you align your plans with your actions.

Journal your heart out.

Sometimes there are too many decisions to take and that clouds our judgment on what we should act on, leaning us to more often than not work on urgent but not important tasks.

Journaling is a great way to free your mind and be aware of all the decisions that are “required” from you.

It also helps for your daily, weekly, and monthly planning.

Do things for others.

That’s an easy but greatly overlooked trick.

I learned to rock climb to help fight my fear of heights.

remember the number one rule to action:

The main thing is to keep the main thing the main thing.

### Skill #2: Learn to Adapt to Change

“It is not the strongest of species that survive; nor the most intelligent that survives. It is the most adaptable to change.” — Charles Darwin

I like to think that I’m a highly adaptable person. I traveled around the world — experiencing over 50 countries, I learn 36 new skills every year (more on that below), surround myself with people of different ethnicities and religions, etc. I’m a software engineer who writes fiction and non-fiction and takes photos semi-professionally. I have adapted to every environment the world has thrown at me, and that allowed me to thrive in the past few years, and especially this year.

Surely you’ve seen the need to adapt yourself. You lost your job, your partner, moved to a new city, etc. You had to adapt if only to not be miserable.

I recently wrote about the fact that it’s okay to not do what you went to school for:

It’s Okay if You Don’t Do What You Went to School For

This morning I attended an event called Happy on Mondays, organized by Mimi Boyer. The guest speakers were inspiring…
People who realize what they studied isn’t for them and adapt to their new environment tend to thrive more than people who settle for their subpar lives.

Simply said: Comfort is opposite of thrive.
How do I learn this skill?
Be positive. Drop negativity. Try to drop negative words from your vocabulary: no, not, bad, etc. Here’s a full list: [https://www.enchantedlearning.com/wordlist/negativewords.shtml](https://www.enchantedlearning.com/wordlist/negativewords.shtml). When you think and talk positively, you act positively. When you are in a positive mindset, you are more open to other perspectives. When you are more open to other perspectives, you are more receptive to change. It’s fundamental and not too hard if you practice this on a daily basis. If you catch yourself thinking or saying something negative, simply stop yourself and re-phrase.

Be genuinely curious. Ask questions. Curiosity is a skill a lot of high performers have. When you ask more questions than you give answers, that’s when you know you’re on your way to adaptability. In day to day conversations, how often do you inquire about other people? Do you listen to their answer? A practical thing you can do is, at the end of the day, try to recall your conversations and write down the questions you remember the answers to. When you’re in the curiosity mindset, you start to question things you’ve always taken for granted. And when that happens, you start to be more open to change.

Set time aside for important but not urgent tasks. Much like above, it’s important to set blocks of time daily (or close to that) where you can focus on yourself. A time where you focus on things you’ve always wanted to do but never do because “urgent” stuff takes all your time. Take that time to learn languages, other skills, read, journal, work out, explore your city, etc.

Travel. And I’m not talking about a place that looks like home to you. You are from America or Australia? Go to any parts of Africa, the Middle East, India, Mongolia, China, Japan. You’re from India? Come to Canada, especially in Winter. You’re from Europe? Go to Central and South America, East and West Africa, India, China, Japan. You’re from Asia? Go to Europe, Africa or America. You’re from Africa? Again, come to Canada (I’m so biased haha)! Travelling opens your mind to so many different experiences and makes you realize that what you know, well, it isn’t really a universal truth. Things are done differently abroad. Your method is no better than that of others. YOU are no better than others. This will kick your senses in the butt (senses have a butt, right?) and force you to adapt at speeds you never thought you ever could!

Spend time in multicultural cities. Co-living in the same city with people from all around the world is one of the best experiences of my life. When I moved to Toronto, I became way more open-minded, simply by being there and making friends of different ethnicities, backgrounds, religions, etc. If you have the chance, live, if only for a little while, in a city like that. Here’s a list: [https://theculturetrip.com/north-america/usa/california/articles/the-10-most-multicultural-cities-in-the-world/](https://theculturetrip.com/north-america/usa/california/articles/the-10-most-multicultural-cities-in-the-world/)

Host people from different countries. Failing to be able to travel to a different country or city, you can always host people from abroad. I’ve done it through Couchsurfing a few times. It’s safe, and frankly a lot of fun. Otherwise, you can host exchange students, expats, immigrants, etc. Having genuine exchanges with people will different perspectives broadens your opinion on things.

Do things out of your comfort zone at least once a week. A while back, I read an article, which I think was from Tim Denning, where he listed a number of things to do that are out of your comfort zone, like having lunch with a homeless person, jumping in the water fully clothed, laying down on the ground in a public place only to stand back up a minute after, pretending nothing happened (I think that was popularized by Tim Ferriss), and more. I tried a few things from his list and it was eye-opening. Try it out!

“I have no special talents. I am only passionately curious.” — Albert Einstein
Skill #1: Learn to Learn
Back in October of last year, I was doing research on how to learn faster. I was at a point in my life where I thought I wasn’t learning fast enough. That’s when I stumbled upon this video, by Josh Kaufman:

That video changed my life forever. The mental block I had that it took 10,000 hours to learn a skill was completely removed. It does take 10,000 hours to master a skill, but simply learning it? It can take less than 20 hours of “smart” practice. The idea is that you learn the 20% of the material that will yield 80% of the result.

But there’s more to it than that. Cram 20 hours of practice in 3 days and I guarantee you have haven’t learned anything. To learn anything in life, you have to work with your brain. You have to make your brain work for you. More on that below.

Common wisdom says that you need to focus on one thing to be successful. I challenge that thought. One of my favourite quotes is this one:

“The future belongs to those who learn more skills and combine them in creative ways.” — Robert Greene.
I’m not against focus. I’m also not necessarily against “the one thing”. But how do you know what that “one thing” is until you’ve even tried other things?

And that’s where learning to learn comes in.

We have limited time on this planet before we’re gone. The faster and better you learn, the more you’ll thrive. The problem is, we’re never really taught how to learn which, sadly, should have been our school’s job to do that.

If I thrived in 2018, it’s not because of luck. It’s not because I did the one thing. It’s because I will have deliberately learned 36 new skills. That made me more motivated, adaptable, relatable, versatile, interesting, etc.

Interested in knowing what some of these skills were to get inspired? Here’s my answer to Anastasia Shch:

Absolutely! Thanks for asking Anastasia Shch.

Here are a few of them:
I ranked this the top skill to learn because the more you learn, the more important qualities and habits you develop, and the better your qualities and habits, the more you thrive.
How do I learn this skill?
I could write a full-length book on the subject. In fact, I am, though it won’t be out this year. In the meantime, I hope these ideas will help you.

First things first, I’d strongly recommend following the Learning to Learn course on Coursera, by Barbara Oakley. It’s free and takes about a month to complete if you practice for 30 minutes a day. I did it in less than three weeks using this approach:

How I Instantly Doubled my Learning Speed Using this Most Simple Trick

And in case you’re wondering if I know what I’m talking about on the subject, here’s a tiny bit of a proof:

If you’ve followed the course, you’ll understand why deliberately learning 36 new skills in a year is important. When you learn new concepts, your brain creates mental chunks. Skills are an assemblage of chunks if you will. When you develop skills, you are in fact creating many different chunks in your brain. And what’s important to note here is that these chunks, even though developed by practicing a specific skill, are actually valuable to learning other skills. Even seemingly unrelated skills.

Knowing the scientific truth above, you can understand that there’s no hacking the process — you have to deliberately work to get your brain to create chunks. The course explains the concepts more in details, but here’s the not-so-surprising key:

You need focused periods of time where you deliberately practice a skill and repeat the process over a number of days, weeks or months.
How focused? How many days? What do I practice? When do I practice?

My approach is to learn 3 new skills every month. I practice 30 minutes each every morning for 30 days. I usually choose skills that work completely different areas of my brain. If we agree with Robert Greene’s quote from above, then we agree that becoming a polymath is a surefire way to thrive. Working skills across different areas of your brain will do just that.

I explain my full process here:

I learn 3 new skills a month, and so can you!

For the sake of this article, we'll define the word "Skill" as such: "the ability to do something well". "Well"…
[www.dannyforest.com](http://www.dannyforest.com/)
*If you sign up for the newsletter, you’ll get the exact same worksheet I’m using. So check it out!

What you’ll notice along your journey of learning to learn is that the more you learn, the faster and easier it becomes to learn other skills, again, thanks to the chunks you previously formed.

There are two other very important aspects of learning: Resting and Smart Repetition.

Resting
By resting, I don’t necessarily mean sleeping. I mean calming your mind to let your subconscious do its work. It has been proven that chunks are indeed getting formed while you rest your mind.

Without going into details, here are some ways to rest your mind:

Cardiovascular activities (walking, jogging, biking, hiking, etc);
Meditation;
Journaling;
Enjoying nature;
Taking a shower or bath; and
Quality sleep.
Smart Repetition
A great book recommendation I have is: How We Learn: The Surprising Truth About When, Where, and Why It Happens

Is practicing the same thing over and over a smart way to learn things?

Well, no. It turns out there’s science showing that there is an optimal time to revisit something you’re trying to learn. This seems to be especially true for non-motor skills.

Basically, you try to space out the repetitions. What you learn today, recall it tomorrow, then after 2 days, then after a week, then after a month, then after a year. Chances are that by then, the knowledge will stick to your brain.

The book goes into more details as to why that is.

Here’s a one-sentence “formula” to summarize how to best learn new skills:

Consistently do focused practice, rest your mind, and repeat in smart ways.

Runner-ups
Choosing 3 skills was insanely difficult. There are so many important factors to thriving that 3 just can’t cover everything. As such, and briefly, here are two I strongly considered putting on the list:

Become Truly Self-Aware
Check out Ryan Holiday’s book: Ego Is The Enemy

Develop Influence
Check out Brendon Burchard’s book: High Performance Habits

Conclusion
Ready to start your journey to make 2019 your best year yet?

I hope you learned something important here and that it’s going to push you to action. Too many people read articles and books, never acting on them. Don’t let this article just be another one of those. If you learn to get to action, adapt to change, and learn to learn, you’re equipped to thrive not only for 2019 but for the rest of your life. So start now before it’s too late.

“It can take less than 20 hours of “smart” practice. The idea is that you learn 20% of the material that will yield 80% of the result.”

### Google Play Store App Signing

Homepage
Google Developers Experts
HOMEANDROIDCLOUDMACHINE LEARNINGFIREBASEWEB TECHNOLOGIESASSISTANTEXPERTS
Go to the profile of Joe Birch
Joe Birch
Android Engineering Lead at Buffer, Google Developer Expert for Android & Flutter - Passionate about mobile development and learning. [www.joebirch.co](http://www.joebirch.co/)
Oct 19
Exploring Google Play App Signing

When distributing our Android Applications we’ve always been required to sign our APK using a keystore for our application — this has allowed us to ensure that only the developer(s) of our app are able to upload updated APKs to the play console. However, because this keystore acts as a fingerprint to the lifecycle of our application — if anything was to happen to this then we hit a bit of a tricky situation. Because of the disadvantages that the current signing process brings, Google Play App Signing is here to help make things smoother. In this article I want to dive into this App Signing method so that we can get it integrated into our applications.

App Signing is a new process available for developers that allows us to offload the signing of our release APKs onto Google. Once we have provided the Play Console with our app signing key, we can upload our APK and Google will sign them for us prior to delivering it to our users.

Whilst the current way of signing APKs works, there are some flaws which can often bring a little bit of fear to the minds of developers:

If you lose your key then this prevents you from updating your application. Maybe your computer fails, your backup is lost or it is just misplaced in some way — any situation where your key is lost means you will not be able to update your application.
Your key could become compromised by someone with malicious intent — in this case the person with the key can update your application and because there is no way of revoking this access, there’s not too much you can do to regain access to your key.
When using Google App Signing, the huge advantage is that Google manages the signing key for our application — meaning that we can relieve the pressure of being completely responsible for our keystore. When it comes to App Signing there are two different keys that are used for the signing process:

App Signing Key — The key used by Google to sign the APK prior to release
Upload Key — A key used by the developer to upload the APK to the Play Console
As you can see, developers will still be required to keep their own copy of the Upload Key for use when uploading APKs — the difference now is that this Upload Key is not responsible for the signing of a release build, it is simply used to identify the developer who is making the upload. Because this is not a unique key used for signing the release APK of an application, it means that it can be replaced by Google at any time. So if an Upload Key is lost, compromised or should no longer have upload rights for whatever reason then Google can revoke this key and generate a new one for use.

So to sum this up, you can view the Upload Key as an authoritative key, but not a master key — it gives permission for the Developer to upload APKs to the Play Console but not distribute them, that role comes under the permissions of the App Signing Key.

If you’re uploading APKs for your application then this process is completely optional, you are welcome to continue managing your own keys — bearing in mind that you will not be able to make use of any advantages that App Signing brings. For example, if your signing key is lost or compromised then you will not longer be able to upload updated APKs for your application.

When it comes to the Android App Bundle format, App Signing is a compulsory process. This is because when it comes to App Bundles, Google Play needs to be able to sign the APKs for you before distribution — so there is no way to be able to carry out this flow when keys are managed by the developer.

Regardless of whether you’re using APKs or the App Bundle format, let’s take a look at how we can setup App Signing in our own applications.

Porting an existing app
For this example we’re going to take a look at enabled App Signing for an existing application in the Play Console. Before we get started though it is important to note that once you opt-in for App Signing you cannot switch back to manual key management — so be sure that you definitely want to make the switch before you enable it. And if you’re unsure, maybe try it out on a sample app just to be sure (that’s exactly what I did!).

To begin with, we need to navigate to the App Signing section in the console. This can be found in the Navigation Drawer under Release Management > App Signing. When you reach this page, you will be presented with the Terms of Service for App Signing that you will need to accept before you can continue.

On this screen you’ll then notice that you have three options to setup App Signing, we’ll be using the second, You haven’t exported your app signing key, option to export and upload our signing key.

Configure an app signing key

You’ll need to begin by downloading the Play Encrypt Private Key tool (in the form of a jar file) that will be used to encrypt your key before uploading. Once downloaded, you’ll see the command within the setup process that you need to run, this will look a little something like this:

java -jar pepk.jar — keystore=your.keystore — alias=your_alias— output=some_file_name —- encryptionkey=your_encryption_key
Here you’ll execute the pepk.jar file that we previously downloaded and pass some information along as arguments.

To begin with we must provide the path to the keystore which we wish to encrypt.
Next, we provide the alias which is used to access the keystore that we are encrypting.
We then provide a desired file name for the output argument, this will be the name of the file that is generated for us
Finally, the encryption key value which is provided in the code displayed by the Play Console during this process.
When you run this command you will be asked for your keystore password. Upon entering it, the app signing key will be generated and placed in the given output path. At this point you can then upload the key using the given button in the setup process.

Configure an upload key
Just before you hit the enrol button, you may notice an optional section which offers enhanced security for your application signing key — this is referring to the upload key that we previously brushed over and the keystore used to generate this. Whilst this may feel like no change from previously managing a key — the whole point of this is to allow a different key to be used for the upload process than the signing process. The upload key is not a part of the Android security model, so it cannot be used to sign APKs, only upload them.

Generating an upload key is a single step process. We can create a new keystore for our upload process, and then use the following command to generate the required pem file for upload.

keytool -export -rfc -keystore upload-keystore.jks -alias upload -file upload_certificate.pem
Once generated, you will be able to upload this file to the console where requested.

Once you’ve hit enrol, the App Signing screen will be reloaded and you will be shown the success notice for App Signing setup:

You’ll also notice here that there are a collection of fingerprints available for both the Signing and Upload certificates, available for download should they be required.

Now at any point if your upload key is lost of compromised, you can create a new Upload Key using the same steps that we carried above and contact Google through this form to provide a new upload key to be used. Note, only the account owner will be able to make this request.

Signing for new Applications
If you’re creating a new application then this whole process doesn’t apply to you, as App Signing is enabled by default for you! When visiting the App Releases section of the play console for a new application (once you’ve uploaded an APK), you’ll see the following message:

Whilst most of the work here is done for us, there’s a couple of options that we can use to configure our keys here. To begin with, if you choose not to dismiss the message using Continue, you can Opt Out of App Signing by hitting the button shown on the left hand side.

However, you also have the choice to reuse a signing key — this means that the Signing Key used by Google Play for another project of yours can also be used for this new project that you’re creating. This can however pose a security risk as if for whatever reason your account become compromised, then all of your applications that depend on the compromised key could be at risk.

In this article we’ve learnt about what App Signing is and how we can integrate it into our upload / release process. Putting this in place allows you to remove the responsibility of security from your team and let Google take care of that side of things — protecting you from losing or having your key become compromised. If you have any questions about App Signing, or experiences to share of your own then please get in touch!

Joe Birch (@hitherejoe) | Twitter

### Shopify

### Sinatra

State of Javascript Survey  [https://stateofjs.com/](https://stateofjs.com/) 

### Cloud Storage

[https://www.backblaze.com/](https://www.backblaze.com/) 

[https://cloudinary.com/](https://cloudinary.com/) 

### Summarise HTML document

[https://pypi.org/project/sumy/](https://pypi.org/project/sumy/) 

### Data Visualization

[https://nivo.rocks/](https://nivo.rocks/) 

DOMPURIFY

DON'T PUT A NAME FOR SENSITIVE FIELDS
ACTION=POST BY DEFAULT

### Surveys

[https://www.typeform.com/](https://www.typeform.com/) 

## React terms

Immutability

Declarative

Efficient

Build User Interfaces

React.Component subclasses

XML-like tags

Props

React COMPONENT CLASS

React COMPONENT TYPE

Component takes in parameters which are called PROPS

# General Glossary

[HTTP Party] ([https://github.com/jnunemaker/httparty](https://github.com/jnunemaker/httparty)) - Ruby Gem to query APIs [https://rubygems.org/gems/httparty/versions/0.13.7](https://rubygems.org/gems/httparty/versions/0.13.7)

[RSpec](http://rspec.info/) - Ruby BDD testing framework

# Random Web

React
React Terms
React Native
React Examples
React Setup

Laravel
Laravel
Laravel Tutorial 1: Traversy Media : Laravel 5.5 API From Scratch - 45 minutes
Laravel Tutorial 1: Traversy Media : Laravel 5.5 API From Scratch - 45 minutes
Laravel Tutorial 2 : Traversy Media : Full Stack Vue.js & Laravel - 42 minutes
Laravel Tutorial 2 : Traversy Media : Full Stack Vue.js & Laravel - 42 minutes

MVC
RESTful APIs
What does RESTful mean?
Manipulating data via a route
Typical semantic requests for routing an API
Persisting data through JSON
The role of database technology
MongoDB and Comparison to MySQL
MongoDB
Using MongoDB locally or via online service
Downloading and installing MongoDB
Running a MongoDB Server Locally
Data location and paths
Running the MongoDB Terminal
Principles of NoSQL Database
MongoDB CRUD
Creating Databases and Collections
Documents
Difference between traditional Databases
Collections verses Tables
Documents verses Rows
Using Models with DB
Simple queries to read and sort data
Updating data
Deleting data
Further learning of MongoDB
MongoDB Modules
How to use MongoDB with Express
Native MongoDB module
MongoJS and Mongoose
Using Schemas to control RESTful APIs
Online DB Services
Why use application data solutions?
MongoLAB
Firebase, DerbyJS, Meteor, FeatherJS, [Parse.com](http://parse.com/)
Express and Rendering Data
What is a renderer?
Jade, EJS, Mustache and Handlebars
Rendering your pages with data bindings
Using partials
Creating a fully dynamic website
Unit Testing
What is unit testing
How to plan for unit testing
Working with popular solutions Jasmine and Mocha
Testing your app with Mocha
Node for native apps
Using node for working with desktop and mobile applications
Making fast servers for games
Socket servers for realtime communication
MEAN Stack Web Apps
Rendering dynamic user interfaces
Building a real world app
Creating a full real-world application using Node and Express
Planning and designing
Using object graphs
Creating Restful APIs and testing with PostMan
Building a simple app with partials using Bootstrap3
Differentiating static routes from data routes
Publishing your Apps and Modules
Running your own Node Server
Using a hosting company
Publishing modules on NPM and Github
Web Glossary
API with WebStorm and Strongloop
ASCII
BigInt
Bower
console logging output
const
Cordova
First Class Object
Auto Login To Website
Babel : use latest versions of dependencies
Backbone JS
BitBucket Storage And Version Control [https://bitbucket.org/](https://bitbucket.org/)
Browserify
Docker Environment Variables
EJS Embedded Javascript
Ember JS
ESTree used with Transpilers
Git Identifier
Isomorphic
JSX (Advanced Javascript, compiles to Javascript)
Primitive Types
Progressive Framework
RawGit
Rest API
Ruby On Rails
Service Workers
Source Maps
Socket IO Application (with Node and Mongo)
SPA Single Page Application
Salt Stack
STDOUT
SVN Tortoise - Version Control
Testing
Touch Gestures For Mobile
transformers - deprecated - use jstransformers
Transpile = compile from one language to another
TDD Test Driven Development
Typescript
Upstart - runs Node As A (Ubuntu) Service
Visual Studio Node Plugins
Vagrant
Webpack - bundles up modules for use in a browser
Window - Create, Resize, Manage and Close
Window Scroll
Yarn
JQuery Term List

.each(object,function(key,value))
Trigger simulates click
each function(myobject){$.each(myobject,function(key,value){})}
trigger simulates ('click',function...)
clone an object and its descendants
prop Gets Property
removeProp remove property
each function(obj){$.each(obj,function(key,value){});
serialize form data
trigger('click',function(){}) simulates a click
clone
detach
siblings
eq(0) returns first item
filter(condition)***
noConflict force jQuery not $
$(function(){}) same as document.ready

- all
tr:even
hide(speed,fn(){})
toggle(speed,fn(){})
fadeToggle***
animate***
fadeTo***
fadeIn/Out***
slideDown/Up/Toggle***
animate({left:20px},{height:20px})
empty deletes content
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
Prettier - opinionated web formatter at [prettier.io](http://prettier.io/)
Map (array)
Reduce (array)
Filter (array)
script async as soon as ready
script defer after load
checkbox.checked
cookies 300 max
input disabled => read only
input.value in box
exec() returns string
find()
search()
autofocus
/i case insensitive
mystring.indexOf('findthis',starthere);
mystring.lastIndexOf
Telerik Fiddler
has/get/setAttribute
text overflow
web font
css columns
box model
position : static relative absolute fixed
block/inline/inline-block
override
strokeRect ctx.strokeRect(x,y,width,height)
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
appcache deprecated
worker w = new worker (abc.js); postMessage(); onmessage=fn(event){event.data}
document.write REPLACE WHOLE PAGE IF IT HAS BEEN LOADED ALREADY
document.write APPEND TO DOCUMENT OPENED with document.open()
document.write(var1,var2)
open NEW WINDOW OR DOCUMENT eg var x = window/document.open ("","title","width=200,height=100"); x.document.write("text");
document.getElementsByTagName('*').length NUMBER OF ELEMENTS
window.history	back/forward/go/length
window.history.length
image interlacing
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
expression : assign x=7; arithmetic a+b; string a$+b$, logical if(x=7)
monospace = fixed-width font
fixed() DEPRECATED : DON'T USE! sets a font as monospace
floating window
frame = iframe
frames = array of frames in current window
id.focus() gives focus to an element
ignoreCase RETURNS TRUE IF REGEXP /abcd/i IS SET (IGNORE CASE!)
image(image,x,y,width,height)
indexOf('findThis',startPos) searches for 'findThis' and returns position if found
italics()	DISPLAY AS ITALICS
floatingWindow
Frame = iframe
frame in other window
frames an array of all frames in current window
ID.focus gives focus to an element
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
Location Object : href, protocol, host, hostname , port, pathname, search, hash,
Location object : href, protocol, host, hostname, port, pathname, search, hash
Location object = current URL
location protocol
location.href = full url
location.search = query string (Part after ? in a URL)
log(x) natural logs (to the base e)
Logical evaluates to true/false
match returns array of matched text
mouseX/Y
multiline specifies if 'm' is set
myNewString = myOldString.replace("findthis","replacewiththis");
myRandom = 1 + Math.Floor(Math.Random*6)
opener is the window that just opened a window
Operator = +=
outerWidth/Height of window including scrollbars and toolbars
outline-color/width/style
pageXOffset/YOffset = pixels document has been scrolled horizontally/vertically from upper left corner
pageXOffset/YOffset = pixels document has been scrolled horizontally/vertically from upper left corner
parent of current window
Radio : onClick/Checked/name/value
RadioButton.checked true / false
RadioButton.value gives text value of Radio Button
RadioButtonID.checked = true to set a box as selected
random() between 0 and 1
rect(x,y,width,height)
Reset restores default values
return will return value to the calling statement
Reverse()	reverses order of elements in an array
rightNow = myDate.getTime(); 12.43
round(x) to nearest integer
screen object
screenLeft/Top x/y coordinates of window relative to screen
screenX/Y x/y coordinates of window relative to screen
script src type charset defer
Script src=url type=”text/javascript”
search returns position of match
Search() searches for a string and returns index position
Select can have one or multiple choices
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
user agent = browser
user agent = software acting on behalf of user eg browser
value = text inside box
var myDate = new Date("11/22/2014 18:25:35") creates new Date
var myDate = new Date() creates a new date field with everything in it
var myDate = new Date(yyyy,mm,dd,hh,mm,ss,ms)
Var myValue = Math.method(value);
window.onload=function(){}
window.open(“URL”); opens new window
Windows object => document object
@keyframes myname
From ... 50% ... to
Animate: 3s infinite
APPLICATION CACHE MANIFEST
CACHE MANIFEST TITLE
CACHE files to be cached
NETWORK files never to be cached
FALLBACK display when offline (eg disconnected page)
String.concat(string2)
Cookie 4kb
Session 4kb
Local storage : 5mb
/ ^ [a-z]{5} [0-9]{3)? $ /g
Ternary operator ? :
Transition
Serialize	(JQUERY)	FORM DATA ON SCREEN =>
SerializeArray	(JQUERY)
Canvas.getContext('2d');
beginPath	CIRCULAR PATH
arc(x,y,radius,x-rad,y-rad,stop-angle)
strokeStyle
strokeWidth
lineTo(x,y)	FROM CURRENT POINT TO (X,Y)
moveTo	MOVE (SILENTLY) TO START POINT OF OUR DRAWING
setTimeout	setTimeout(function(){},1000); once
setInterval	setInterval(function(){},1000); every second
clearInterval	var x = setTimout(...) clearInterval(x)
console.log
capture on eventListener ('click',function(){},true/false)
CAPTURE true => fires parent down to child
CAPTURE false => default which fires child up to parent
IF CAPTURE IS FALSE THEN BUBBLE IS TRUE
replace(<removethis>,<insertthis>) var newstring=oldstring.replace(<findthis>,<insertthis>)
search(regex)
this	INSIDE OBJECT WHICH HAS FOCUS
self	inside WORKER
scope
CODE SCOPE
Let x=7	useful inside CODE BLOCK ONLY
FUNCTION SCOPE
GLOBAL SCOPE
!important
Css ordering !important first (top priority), then ID, then CLASS, then ELEMENT
Css : INLINE ALWAYS TOP PRIORITY compared with	INTERNAL AND EXTERNAL CSS
CHILDNODES[] ARRAY
CHILDNODES[0]
NEXTSIBLING
PREVIOUSSIBLING
SERIALIZE	FORM TO URL QUERY STRING ID=1&NAME=PHIL&...
SERIALIZEARRAY	FORM TO JSON ARRAY [ { JSON }, {JSON} ]
FORM NAME=MYFORM
DOCUMENT.MYFORM
DOCUMENT.FORMS[0]
DOCUMENT.FORMS['MYFORM']
DOCUMENT.FORMS.MYFORM
STROKEWIDTH
BEGINPATH
ANCHOR TAG HREF
EVENT.TARGET RECEIVES ACTUAL EVENT
ADDEVENTLISTENER('CLICK',FUNCTION,FALSE) ? BUBBLE UP
TRIGGER('EVENT',FUNCTION)	SIMULATE EG A CLICK INSIDE CODE
OBJECT { ID:”1” }
myObject.prototype.newfield=1 / newMethod=function(){}
PRE INCLUDES SPACES
HOISTING
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
FLOAT:LEFT
MARGIN:AUTO; CENTER ON PAGE
BORDER
CSS BOX MODEL : WIDTH CONTENT ONLY. HAVE TO MANUALLY ADD ON PADDING, BORDER, MARGIN
OUTLINE DRAWN OUTSIDE MARGIN BUT DOES NOT ADD TO WIDTH
worker.terminate() FROM PARENT
close()
self.close() from WORKER
INITATE	START


## Node Term List

```js
npm init -y : default install
npm cache -verify
express.static
design pattern
ng-init/click/class/cloak/app/controller/show/hide/copy
Telerik Fiddler - debug a web session
span.firstchild.nodevalue
HAPI
Auth0
RESTFUL means over HTTP
REST faster than SOAP
native app talks to OS
vows
should
cors
`closure : inner function access to outer variables`
gulp better than grunt
promise
generator
webpack
res.status(400)
res.json({a:1})
res.send("text")
Lexical = private scope
Source map - go from minified to regular code
Pug
HapiJS : an alternative framework which has built-in support for input validation, caching, authentication
Auth0 sponsors HapiJS
Express : created 2010 - most popular Node http framework so far
Hapi : best for API
RESTful API uses HTTP requests (GET, POST, PUT, DELETE)
REST representational state transfer
REST 1) decouple client/server 2) stateless 3) cache 4) layered 5) uniform interface
REST preferred over SOAP as SOAP larger XML requests
Jasmine - has everything built in including assertion and test double utilities
Mocha - just a 'test runner' - no assertion or test double utilities
Jasmine BDD
Mocha BDD
native app - written for a particular OS - gets INSTALLED on a DEVICE, data may be stored on the device
web app - general app for all OS
mongo
mongodb
async
```

[https://www.airpair.com/node.js/posts/top-10-mistakes-node-developers-make](https://www.airpair.com/node.js/posts/top-10-mistakes-node-developers-make)[https://github.com/alessioalex/airpair-nodejs-mistakes/blob/master/4-nested-callbacks/after.js](https://github.com/alessioalex/airpair-nodejs-mistakes/blob/master/4-nested-callbacks/after.js)[socket.io](http://socket.io/) walkthrough

```
TDD TEST DRIVEN DEVELOPMENT
BDD BEHAVIOUR DRIVEN DEVELOPMENT
JASMINE ***
MOCHA ***
ACCEPTANCE TESTING ***
VOWS TEST
SHOULD TEST
NGINX
PROCESS.ADDLISTENER
PROCESS.EVENTEMITTER
PROCESS.ARGV
PROCESS.PID
PROMISE
THREAD POOL
SIGNAL HANDLER
JADE
HOGAN
MUSTACHE
LESS
SASS
MUSTACHE --hogan
EJS --ejs
CSS -c less/sass
grunt-nodemon
node_env=debug
node_env=production
readstream=fs.createReadStream(file)
writestream=fs.createWriteStream(file)
%s
%d
npm owner ls <module>
buffer.bytelength
minimst
yargs
optimist
node twitter
node cookie
node session
app.render
app.engine eg hogan
iisnode
jsonp padding
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
heapdump
process : check out lab
test artillery
exec=requre('child_process').exec
template ejs hogan jade
node_hogan_01.js
git clone abc.git
node upstart on linux to restart after crash
numcores = require('os').cpus().length NUMBER OF CPUS
NGEN ADD README FILE TO NPM INIT
NPM LINK to global namespace
NPM LINK MYPROJECT SO NOW MYPROJECT AVAILABLE VIA REQUIRE('MYPROJECT')
COOKIE-PARSER
COOKIE-SESSION
CLOSURE : INNER FUNCTION WITH ACCESS TO OUTER VARIABLES AND PARAMETERS
ASYNC PARALLEL SERIAL WATERFALL
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
stream i/o
buffer binary raw memory exposure to RAM very fast
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
GULP IS FASTER THAN GRUNT
GULP JOINS EG ALL CSS INTO ONE FILE
ANGULAR USES REST
ANGULAR DOES 2-WAY BINDING
ANGULAR FROM GOOGLE!
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
GRUNT
CAKE
GULP
BROCCOLI
JSLINT
domain.on('error')
domain.run
EncodeURIComponent
DecodeURIComponent
insert([{},{}])
find()
pretty()
update({id:1})
remove({id})
findOne
explain(executionStats)
ensureIndex
getIndexes
dropIndex
limit
sort
find({"name":/.*Phil.*/})
aggregate
sum/max/min/avg
partial render
express-partial
app.use
response.renderPartials
expect x toBe y
not.toBe
toBeDefined,Null,LessThan,Throw,ThrowError,Equal,HaveBeenCalledWith
promise
generator
transpile
table.insert
.update
.find
.remove
Mongo
Redis
Mongolabs
RESTFUL API
MEAN STACK
METEOR
STACK
GET
POST
PUT
DELETE
isomorphic code
REPL READ EVAL PRINT LOOP
table.insert
.find
.update
.remove
stdin.resume
stdin.on('data')
readline.createInterface
path.sep
.normalise
.dirname
.extname
.basename
__dirname
__filename
cwd
pwd
chdir
execPath
envPath
fs.writeFile
fs.readFile
fs.access
fs.stat
stats.isfile/dir/socket
stats.size
stats.mtime
mode=read/write/append war
fd file descriptor
fs.write
fs.createWriteStream
grunt
gulp
cake
broccoli
JSLint
domain.on('error')
domain.run()
EncodeURIComponent
DecodeURIComponent
insert([])
update(ID)
remove(ID)
findOne()
explain(executionStats)
ensureIndex
getIndexes
dropIndex
limit
sort
find({"name":/.*Phil.*/})
aggregate
$group/sum/max/min/avg
partial render
express-partial
app.use
response.renderPartials
expect x toBe y
not.toBe
toBeDefined,Null,LessThan,Throw,ThrowError,Equal,Have BeenCalledWith
promise
generator
webpack
browserify
socket.emit 1
client.emit all
REPL READ EVAL PRINT LOOP
MONGO --auth
node-mysql
module.exports.field
npm init
packages.json
node_modules
callback
asynchronous
synchronous
function x(data1,callback(err,data2){});
REPL Read Eval Print Loop
Couch
redis
redislabs
coffeescript
bull log
bunyan log
loader.js
require.js
collections.js
blocked
grunt.js
gulp.js
commonjs
qckwinsvc
stdin
stdout
stderr
process.stdin.resume()
process.stdin.on('data',callback)
readline
readline.createInterface
readline.on('line',fn)
process.argv[]
optimist
yargs
minimist
path.sep
path.normalise
path.dirname
path.extname
path.basename
__dirname
__filename
process.cwd
process.pwd
process.chdir
process.execPath
process.envPath
fs.writeFile(path,text)
fs.readFile(path)
fs.readFile(path).toString()
JSON.parse(fs.readFile(path))
fs.access
fs.stat
stats.isfile/dir/socket
stats.size
stats.mtime
fs.open(path,mode)
mode=write,append,read w a r
fd file descriptor
fs.write(fd,data,offset,length,startposition)
fs.createWriteStream
node-dir
node-walk
readdirp
findit
top -o cpu / rsize
kill
killall
pkill node
ps-node
child_process.exec
exec('node abc.js') CREATE CHILD PROCESS
child.stdout.on('data')
grunt
gulp
cake
broccoli
JSLint GOOD CODE
DOMAIN
d.on('error',fn)
d.run()
fs.createReadStream(path).pipe(response)
request.
ip
hostname
method
originalurl
baseurl
params
path
query
route
response.
download
end
json
jsonp
redirect
render
send
sendFile
sendStatus
app.route('path').get.post.put.delete
express public folder
express static files
app.use(express.static)
EncodeURIComponent
DecodeURIComponent
insert([{},{}])
update(ID)
remove(ID)
findOne
explain(executionStats)
ensureIndex
getIndexes
dropIndex
limit
sort({"name":1})
find({"name":/.*Phil.*/})
.aggregate
$group
$sum
$avg
$max
$min
partial render
express-partial
app.use(partial)
response.renderPartials
expect x toBe y
not.toBe
toBeDefined
toBeNull
toBeLessThan
toThrow
toThrowError
toEqual
toHaveBeenCalledWith
promise
generator
webpack
browserify
socket.emit 1
client.emit all
REPL
OPTIMIST
YARGS
Express
use
app
route
param
get
post
put
delete
web server
listen
[socket.io](http://socket.io/)
HTTP
websockets
Jade
EJS
engine
Mongo
MongoD
MongoDB
Mongo client
npm install -g
nodemon
Vrtual Attributes
Instance Method
Static Method
Design Pattern
Revealing Module
DERBY
FIREBASE
METEOR
FEATHERJS
[PARSE.COM](http://parse.com/)
renderer
Mustache
Handlebars
Partial Rendering
MEAN
ANGULAR
REACT
POSTMAN
BOOTSTRAP
STATIC ROUTE
DATA ROUTE
Publish Module to NPM
Publish Module to GitHub
ES6
ES7
Harmony
typeof
assert
console.assert
console.group
console.groupEnd
console.error
console.warn
push
pop
shift
unshift
splice
slice
for(var item in array){ if (array.hasOwnProperty(item){item has value array[item]})
function x(a,b,c){this.a=a;function d(){return "x"}
class x{constructor(a,b){this.a=a;}}
function x{return{a:a,b:b}}
dependency injection
DI
function x(function y(){}){}
var x = require('./abc');
module.exports.x=x;
mymodule.x;
var x = new Map;x.set("a",1);
for (var key of myMap.keys()){key = x.get(key)}
JSON.stringify==> OUTPUT
JSON.parse==>INPUT
v8
ISOMORPHIC
THREAD POOL
EVENT LOOP MODEL
XML
SOAP
XSD
WS-
RELAX-NG
NOSQL
MONGO
COUCH
APACHE
TOMCAT
JSP
JAVA SERVER PAGES
RUBY
FOREVER
FOREVER-MONITOR
PM2
[NODEJS.ORG](http://nodejs.org/)
sudo apt-get upgrade
sudo apt-get dist-upgrade
sudo apt-get install apache2
sudo apt-get install curl
sudo apt-get install nodejs -g
sudo apt-get install npm
sudo apt-get install http
/usr/lib
/usr/local
node -v
REPL READ EVAL PRINT LOOP
READ EVAL PRINT LOOP
READ EVAL PRINT LOOP
process.exit();
shared module
npm init
package.json
nodemon
livereload
browsersync
livejs
express
middleware
authentication
log
redis
redislabs
coffeescript
bull log
bunyan log
loader.js auto load modules
require.js auto load modules
collections.js
blocked
gruntjs
commonjs
qckwinsvc
stdin
stdout
stderr
process.stdin.resume
process.stdin.on('data',function(){})
readline
readline.createInterface
process.stdin
process.stdout
readline.on('line',fn(){})
process.argv[]
optimist
yargs
minimist
path.sep
require('path')
path.normalise
path.dirname
path.extname
path.basename = FILE
__dirname
__filename
process.cwd
pwd
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
node-dir
node-walk
readdirp
findit
tasklist
top
top -o cpu
top -o rsize
kill <PID>
killall <process>
pkill node
pkill
ps-node
child_process.exec
exec=require('child-process').exec
child=exec('node ./file.js')
child.stdout.on('data',callback)
grunt
cake
broccoli
gulp
task runner
minify
JSHint
JSLint
CSSLint
npm install grunt --save-dev
d.on('error',function)
d.run(fn)
function handler(req,res)
req.method
data.toString()
querystring
body.length
parse(body)
bodyparser
post
app.use(body)
[request.body.user.name](http://request.body.user.name/)
npm install body-parser
bodyParser
http server
createServer
server.listen()
request.url
response.writeHead(200,"Content-Type":"text/plain");
response.write("x")
response.end()
response.writeHead
response.write
response.end
request.url
url.parse(request.url).pathname
process.cwd
cwd+url.parse==> full URL
fs.createReadStream(page).pipe(response)
request.query=incoming URL
npm install express
npm install [socket.io](http://socket.io/)
app.method
router.param
router.route
next()
res.send()
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
express static files
static files
express.static
app.use(express.static)('public');
URL Encode / Decode
encodeURIComponent(URI)
decodeURIComponent(URI)
route
? one
- many
- one or more
EJS
jade
<%= %>
view engine JADE
Mongo
GET /api/bears	GET ALL
GET /api/bears:bearid	GET ONE
POST /api/bears	INSERT ONE
POST /api/bears:bearid	UPDATE ONE
DELETE /api/bears:bearid	DELETE ONE
models
Schema
node-restful
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
firebase
derbyjs
meteor
featherjs
jade
ejs
mustache
handlebars
templating = layout = view
knockout : View => Model BUT MANUAL CODING
Backbone : MODEL AUTO UPDATE
POST /table .mytable.create()
GET /table .mytable.fetch()
GET /table/id .mytable.fetch(id)
PUT /table/id .mytable.save()
DEL /table/id .mytable.destroy()
partial render
express-partial
app.use(partial())
response.renderPartials
testing
eslint
Jasmine
expect(x).toBe(y)
.not.toBe
.toBeDefined
.toBeNull
.toBeLessThan(y)
.toThrow
.toThrowError
toEqual
expect(function.parameter).toHaveBeenCalledWith(123)
TDD Test Driven Design
[mean.io](http://mean.io/)
mean.js
grunt --force
promise
generator
lint
eslint : code quality
csslint : css code quality eg nesting
minification
JSX compiles to javascript
git
push
hooks
isomorphic
webpack
browserify
pwd print working directory
Grunt.js USED FOR AUTOMATED BUILD TASKS
Bind = link eg value of client field to database field. Update one => update other
Meteor ==> Node+Mongo+Instant Client Updates
blocking code = synchronous code
blocking is when a function waits for response before proceeding
non-blocking code = asynchronous
upsert = INSERT or UPDATE a database record depending if it exists or not
CM Connect Middleware referenced by 'connect' and performs tasks like logging and authentication
Node : built on C++
Python : built on Objective-C
URI Uniform Resource Identifier eg book ISBN
URL Uniform Resource Locator subset of URI eg book URL
URN Uniform Resource Name subset or URI eg book NAME
Curl install from [http://www.confusedbycode.com/curl/](http://www.confusedbycode.com/curl/)
typeof tests for type of data
clearInterval clears clock
setInterval
socket.emit : emit a message across the single socket (one client to server or server to one client)
client.emit : emit a message to all clients
cwd
pwd
grunt build
meteorjs
meanjs
cm connect middleware
URI Uniform Resource Identifier
URL Uniform Resource Locator
URN Uniform Resource Name
curl
typeof
setInterval
setTimeout
socket.emit 1-1
client.emit ALL CLIENTS
MONGOD
MONGODUMP
MONGORESTORE
MONGO AUTHENTICATE
MONGO BACKUP
CHILD PROCESS
RESTFUL API
CONTROLLER
MODEL
VIEW
ROUTE
METHOD
GET
POST
PUT
DELETE
PUBLIC FOLDER FOR DOWNLOAD TO CLIENT
db.table.insert
find()
pretty()
$gte
websockets
[socket.io](http://socket.io/)
use database
drop database
angular
handlebars
log4js
fs
stdin / out / err
EXPORTS
MODULE.EXPORTS
node abc.js
HTTP WEB SERVER
FIND
SOCKETS IO
CHAT APPLICATION
V8 GOOGLE CHROME ENGINE
RUNS LOCALLY
CREATE LOCAL APPLICATIONS
CREATE FAST WEB APPLICATIONS
ASYNCHRONOUS
THREAD
NPM NODE PACKAGE MANAGER
INSTALL FROM SOURCE CODE
REPL
MODULE SCOPE : GLOBAL OR LOCAL
MODULE CACHE
COMMAND LINE SCRIPTS
CONNECT MODULE
REQUEST
RESPONSE
AJAX
JSON
ENCODE JSON
DECODE JSON
JADE
EXPRESS APP
EXPRESS DATASET
MVC
VALIDATOR
VIRTUAL ATTRIBUTES
VIRTUAL VALUES
DB REFS
INSTANCE METHODS
STATIC METHODS
NODE-MYSQL
MOCHA TEST
SUPERTEST
UNIT TESTING
NOSTING NODE
NPM NODE PACKAGE MANAGER
JQUERY SELECTION WITHOUT BROWSER
CONNECT
APP
JSON_ENCODE("ARRAY")
EVAL(<<json>>)
LARGE FORM => INSTEAD USE AJAX BUT MULTIPLE THREADS
JSON.PARSE() INSTEAD OF EVAL
var module2=require('./module1');
module.exports.a=a; export a
module.exports.a=function(){}
optimist
minimist
core module var x = require('fs')
shared module : ONE INSTANCE ONLY
objects : UNIQUE INSTANCES
npm set init
npm adduser
npm init
upsert = update or insert
CM connect middleware : authenticate, authorise, route, log

socket.emit to ONE CLIENT
client.emit TO ALL CLIENTS
GLOBAL
LOCAL
NPM INSTALL
SINGLE THREAD
LOOPING THREAD
SYNCHRONOUS
ASYNCHRONOUS
CALLBACK
FUNCTION(ERROR, CALLBACK)
JQUERY
PHP
JSON
JSON ENCODE
JSON STRINGIFY
JSON EVAL
ARRAY
OBJECT
CLASS
CONSTRUCTOR
ANONYMOUS FUNCTION
NAME YOUR FUNCTIONS !
PARAMETERS
DEFAULT VALUES IN PARAMETERS
MONGO
FIND
CONNECT
APP
EXPRESS
ROUTING
MVC
MODEL
VIEW
CONTROLLER
PHPSTORM
WEBSTORM
JETBRAINS
PHPDEVELOPER
MOCHA TO TEST
MIDDLEWARE : LOG, AUTHENTICATE, AUTHORISE, ROUTING
URL INSPECTING
MODULE : FILE
V8 ENGINE
LOCAL JAVASCRIPT
REPL READ EVAL PRINT LOOP
APACHE
TOMCAT
JSP
PHP
THREAD
GET
SET
PATTERN
RESTART SCRIPT
CONNECT
REQUEST
RESPONSE
HEADER
POST
GET
JADE
DATASET
EXPRESS FILTER
EXPRESS DATASET
EXPRESS ROUTE
EXPRESS VARIABLE
EXPRESS PUT
EXPRESS GET
EXPRESS JSON
MODIFY HEADER INFO
WEBSOCKETS
[SOCKET.IO](http://socket.io/)
DATABASE
COLLECTION
DOCUMENT
FIND
SCHEMA
MODEL
VALIDATOR
GET
SET
VIRTUAL ATTRIBUTES
NODE-MYSQL
MOCHA TEST
SUPERTEST
NODE WRITTEN IN C
JSON_ENCODE
JSON EVAL
JSON_PARSE
APACHE THREAD POOL
NODE EVENT LOOP MODEL
NOSQL
MONGO
COUCH
MIT LICENCE
MODULE
EXPORTS
REQUIRE
TOMCAT
JSP
RUBY
RAILS
ECLIPSE
MAC
UBUNTU
sudo apt-get update
sudo apt-get upgrade
sudo apt-get dist-upgrade
sudo apt-get install apache2
sudo apt-get install curl
sudo apt-get install nodejs
sudo apt-get install npm
npm install http
CURL WHAT IS IT AND HOW TO USE IT
node
node -v
process
console.table
console.warn
console.time
console.timeEnd
console.assert IF FALSE
console.count
console.group
console.groupEnd
forever
Optimist
Minimist
Yargs
STDIN
STDOUT
process.stdin.resume()
process.stdin.pause()
process.stdin.on('data',function(text){});
readline
prompt
process.argv[NODE,JS,PARAMETERS]
short args node abc.js -x 10 -y 11
args node abc.js --x=10 --y=11
class
method
constructor
shared modules
module caching
GET CONFIG
SET CONFIG
require('fs')
fs.writeFileSync("file.txt","text which goes in file")
fs.readFileSync("file.txt").toString()
fs.exists(path,fn(){})
fs.open(path,"w+",function(error,descriptor){})
fs.open then fs.readFile
fs.writeFile
fs.appendFile
fs.close()
fs.stat(path,fn(){})
stats,isFile
statis.isDirectory
path module
path.sep separator character
path.normalise Windows or Linux
path.dirname
path.basename
path.extname
__dirname
__filename
./file THIS FOLDER
../file ONE LEVEL UP
CWD CURRENT WORKING DIRECTORY
CWD = WEBSITE ROOT
process.cwd
process.chdir CHANGE DIR
process.execPath ==> NODEJS.EXE PATH
process.env.PATH = PATH VARIABLES AS ARRAY
Express
App.js
Mono
Mongodb
Debug
Route
View
Model
MVC
Controller
App.js
Nodemon
Require
Include
./path
App.use
App.use (./path)
App. Get(path;callback)
App .post (path,callback)
Mongo
Find
Pretty
$gte
Body parser
Get post put delete
Restful api
Api
Function
Method
Class
Map
Array
Object
Json parse
Console.log
Console.group
Console. Groupend
Console. Warn
Console. Error
Express generator
Forever
Grunt
Gulp
Bower
Mean stack mono ejs angular node
Api call
Controller
Param
Nodemon
Back up mongo
Restore mongo
Redis
Redis labs
React terms

Immutability
Declarative
Efficient
Build User Interfaces
React.Component subclasses
XML-like tags
Props
React COMPONENT CLASS
React COMPONENT TYPE
Component takes in parameters which are called PROPS

# ASPX terms

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
SOAP RESPONSE AS XML
SERVICE : ADD 'SERVICE REFERENCE' TO A PROJECT. 1) CHANGE NAMESPACE TO myProject.myService 2) ADD METHOD var x = myProject.myService.myMethod(); ***
SERVICE : $myService = New-WebServiceProxy [http://localhost:12345/myMethod.asmx](http://localhost:12345/myMethod.asmx)
STORED PROCEDURE ***
PARAMETRISED STORED PROCEDURE ***
PUSHSTATE : PERMIT BROWSER 'BACK'
REPLACESTATE : SET APPLICATION STATE TO PERMIT USAGE OF HISTORY AND BACK BUTTON IN BROWSER
AJAX REQUIRES UPDATEPANEL WHICH REQUIRES SCRIPTMANAGER ON MASTER PAGE WHICH GETS ACCESSED VIA SCRIPTMANAGERPROXY ON NON-MASTER
```

# Angular Terms

```
ng-app
ng-controller
ng-directive
ng-hide
ng-show
ng-class
ng-model INPUT
ng-bind OUTPUT
app.directive('customDirective',function(){ return { template '< p >hi< / p >'}; });
< custom-directive >< / custom-directive >
ng-click
ng-copy
ng-init="x=1" var $scope.x=1
directive ELEMENT <..> ATTRIBUTE < div tag="x" > CLASS < div class="x" coMMent restrict: C/M mandatory
ng-cloak
$error
$valid
$dirty
$touched : focus
input.ng-dirty/touched/valid/invalid CSS
ng-(not-)empty
ng-(un)touched
ng-(in)valid
ng-dirty/pristine
ng-pending
ng-click="dothis()"
$rootScope on ng-app element
$scope priority over $rootScope
filter : currency/date/json/filter/limitTo/uppercase/lowercase/number/orderBy
angular services
app.controller('y',function($scope,$http){});
$location
$http
$http.get("data.json").then(function(response){$scope.field=response.data})
$timeout(function(){},2000)
$interval(function(){},2000)
custom service app.service('myService',function(){ this.serviceFunction=function(input_param){return x} }); with app.controller('y',function($scope, myService){$scope.field=myService})
filter : custom : on a service : app.filter('myFilter',['myService',function(myService...)])
$http get/post/put/delete/head/jsonp/patch
$http({method:"GET",url:"path"}).then(function(response(){}));
$http.response.data/headers/status/statusText/config
$index in table
ng-if="true"
ng-options drop-down box
ng-focus/blur/click/dblclick/keydown/up/press/mousedown/up/enter/leave/move/over
ng-copy/cut/change/paste
Angular events add to Javascript events
Event data : ng-click="dothis($event)" function(event){$scope.x=event.clientX}
form input elements : input/select/button/textarea (input has checkbox and radio)
select option value="x"
novalidate HTML
$(un)touched/pristine/dirty/(in)valid
ng-repeat="item in list" {{item.a}}
| filter
| limitTo:5
| orderBy:-field01
div style="background-color:{{field01}}"
closure ( function(){ return function() { return x; } } )();
filter | currency/
img src={{path}}
error is NULL / UNDEFINED
ng-click="x=1"
ng-show="x===1"
ng-class="{active:x===1"}
interpolation bindings {{ }}
directives ng-click="functionA()"
interpolation bindings such as < span title="{{ attrBinding }}">{{ textBinding }}< / span>
directive attributes such as ng-click="functionExpression()".
service
template
ng-app
nt-init
ng-repeat
ng-view
ng-template
directive
$routeProvider
filter
Factory Method
ng-disabled
ng-show
ng-hide
ng-click
application module
controller module
use module
scope
scope inheritance
custom directive
dependency injection
value
@Component({field:'value'})
@Template({})
bind
control object
input[control]
{{username.value}}
directives:[forEach]
this.username=new Control('abc')
Component : view/controller
componentServices:
@Template({url:x,directives:y})
Class X{ field:Field; constructor (field:Field){this.field=field}}
add($event, newtd)
if($event.which===13)
this.field.add(newtd.value)
toggleTdState(td)
td.done
bootstrap(TdApp)
@Component({componentServices:abc})
Controller Abc => now create Class Abc
app TdApp
template at template/td.html
service eg abc.js = Class + Constructor with blank array + add_to_array() method + done=check_add_worked() method
ng-model=”x” INPUTTING - BIND INPUT VALUE TO x
< input ng-model=”x”> TEXT INPUT BINDS TO FIELD X
< p ng-bind=”x”> DISPLAY DATA BOUND TO X
ng-app WRITE YOUR ANGULAR CODE HERE
ng- DIRECTIVE MEANS ANGULAR TO FOLLOW
input ng-model=”x” INPUT FIELD : DATA ENTERED BOUND TO FIELD X
ng-bind=”x” DISPLAY x
ng-init=”x='y''” value of x is y
ng-repeat EXTRACT ARRAY
li ng-repeat=”item in myArray” ng-bind=”item”
li ng-repeat=”item in myArray” {{item}}
ng-bind=”x | uppercase/lowercase” DISPLAY X IN UPPERCASE
ng-init=”myArray= [ { x:'value',y:'value'} , { x:'value',y:'value'} , { x:'value',y:'value'} ]”
tr ng-repeat = “item in myArray | orderBy:'-y'” TABLE ROW ORDER BY Y DESC
td ng-bind=”item.x” ng-bind=”item.y” DISPLAY TABLE ITEMS
ng-init=”myArray=[ {name:”x”,salary:”y”} , {name:”x”,salary:”y”} ]”
tr ng-repeat = “item in myArray”
ng-bind=”item.salary | currency” DISPLAY IN MONEY FORMAT
ng-show/hide AS JQUERY SHOW() HIDE()
checkbox ng-model=”x div ng-show=”x” DIV DISPLAYS ON TICK
checkbox ng-model=”x” div ng-hide=”x” HIDE DIV ON TRUE
checkbox ng-model=”x” input ng-disabled=”x” DISABLE INPUT BOX ON TRUE
ng-init=”x=1” ng-click=”x=x+1” ng-bind=”x” DISPLAY X AND INCREMENT
ng-init=”x=1;y=2” ng-click=”z=x+y” ng-bind=”z”
ng-click
ng-dblclick
ng-mousemove
{{x}} JUST DISPLAYS X EG <p>{{x}}</p> SAME AS NG-BIND!
ng-mouseover
ng-mouseleave
ng-keyup
ng-keydown
{{}} same as NG-BIND
{{a+b}} CONCATENATES STRINGS
{{a+b}} ADD NUMBERS
ng-init=”myArray=[1,2,3]” {{myArray[0]}} displays 1
ng-app=”a” ng-controller=”b” ng-model=”x” ng-model=”y”
var app=angular.module('a',[]);
app.controller('b',function($scope){
$scope.x=4; ==> SAME AS INPUT VALUE=4
$scope.y=5 ==> SAME AS INPUT VALUE=5
});
SCOPE CONTAINS MODEL DATA
MODEL = DATA + LOGIC + RULES
VIEW
CONTROLLER = INPUT
MODEL : ng-model and $scope
VIEW : ng-bind
CONTROLLER ng-controller DOES NOT SEEM TO HAVE ANY FUNCTION HERE!
```

# Glossary

## Babel
	
Just write Javascript

Allows use of the latest standards without you worrying about compatibility

## BACKBONEJS

```
Model has Key-Value binding
Collections of functions
View has 'declarative' event handling (events declared in UI code)
Connects over RESTful JSON interface
Data represented as Model
	Create
	Validate
	Destroy
	Save to server
	Model changes ==> change 'trigger' event updates all views automatically
	
	Models sync with a 'persistence' layer usually REST API + DATABASE
Collection is GROUP OF MODELS
	var myCollection =  Backbone.collection.extend({url: '/folder'});
	This allows use of the following 
		GET  /books/ .... collection.fetch();
		POST /books/ .... collection.create();
		GET  /books/1 ... model.fetch();
		PUT  /books/1 ... model.save();
		DEL  /books/1 ... model.destroy();
	COLLECTION DATA IS AS AN ARRAY [ {“item1”:”data1”}]
	MODEL DATA IS AS A JSON OBJECT {“FIELD”:”VALUE”}
PARSING JSON RESPONSE FOR THE DATA THAT YOU ACTUALLY WANT
	IF COLLECTION COMES BACK WITH EXTRA DATA THEN YOU HAVE TO PARSE FOR THE
	NAMED DATA YOU ACTUALLY WANT 
	{
		“dontwant1”:”dontwantthis”,
		“books”:[
		{ “book1”:”data1” , “title”:”x”} ,
		{ “book2”:”data2” , “title”:”y”}
		]
	}
		SO TO EXTRACT THE DATA YOU WANT (BOOKS ARRAY) USE PARSE
		var Books = Backbone.Collection.extend({
		  url: '/books',
		 parse : function(data){
				return data.books;
			}
		});
```

## Browserify

BUNDLES UP YOUR DEPENDENCIES FOR YOUR BROWSER

[http://browserify.org/](http://browserify.org/)

```
Here is a tutorial on how to use Browserify on the command line to bundle up a simple file called main.js along with all of its dependencies:
		main.js
				var unique = require('uniq');
				var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
				console.log(unique(data));
						
		Install the uniq module with npm:
		
				npm install uniq
		
	Now recursively bundle up all the required modules starting at main.js into a single file called bundle.js with the browserify command:
	browserify main.js -o bundle.js
	Browserify parses the AST for require() calls to traverse the entire dependency graph of your project.
	Drop a single <script> tag into your html and you're done!
	<script src="bundle.js"></script>
```

COFFEESCRIPT

```
coffeescript.org

###
function output
###
function output(){
}
root = -> 'Hello World'
root()
class myFunction
  constructor: ->
	console.log('hi');
output = () ->
  myArray=[1,2,3]
  for item in myArray
	$('display').append(item)
```

Databases Online

```
Why use application data solutions?
	SPECIALISED ONLINE SOLUTIONS 

MongoLAB
	ONLINE MONGO 
Firebase
	<https://www.firebase.com/>
	
	ONLINE DATABASE WITH STORING OF DATA WITH ONLY A FEW LINES OF CODE 
	
	<https://www.firebase.com/tutorial/#gettingstarted>
	
		RUN CODE 
		
		<https://www.firebase.com/tutorial/#session/cpjmggjhta5>
		
		DATABASE 
		
		<https://cpjmggjhta5.firebaseio-demo.com/>
		
	
DerbyJS

	<http://derbyjs.com/>
	
	
Meteor
	DEVELOP FULL APPS 
	
		<https://www.meteor.com/>
		
		
		
	
FeatherJS

	BUILD APPS ON TOP OF NODE 
	
	<http://feathersjs.com/>
	
	ALL WORKS OUT OF THE BOX; FULL APPLICATION 
	
	DATABASE EG CAN USE VARIOUS EG MONGO 
	
		<https://github.com/feathersjs/feathers-mongodb>
```

Diff (Linux)

COMPARES DIFFERENCE BETWEEN TWO FILES, LINE BY LINE
Diff file1 file2

FC File Compare (Windows Tool)

```
FC FILE1 FILE2
	
FC /B FILE1 FILE2   BINARY FILES
```

FC FOLDER1\* FC FOLDER2\* TO COMPARE MULTIPLE FILES IN TWO FOLDERS

Isomorphic is same code (Javascript) running on both the client and the server

Knockout JS is Microsoft technology used to link View fields to Model fields but code to update model must be written by developer - see Backbone also

One reason to use Lambda functions is that it does not alter the value of 'this' whereas when we use a function, the value of 'this' can change inside the function

LESS

```
ADD VARIABLES BEFORE CSS IS COMPILED
EASIEST WAY TO RUN IT IS WITHIN NODE

lesscss.org

	lesscss.org/less-preview
	
INSTALL WITH 		NPM INSTALL -G LESS

USE WITH			LESSC STYLES.LESS OUTPUT.CSS

For learning and development use, can also use LESS in the browser

	<link rel="stylesheet/less" type="text/css" href="styles.less" />
		
	<script src="less.js" type="text/javascript"></script>

mixin

function

variables
```

Lint

LINT

ESLINT

```
CODE QUALITY !!!
```

CSSLINT

```
PREVENTS CSS NESTING
```

POWERSHELL : GET SIZE OF FOLDER
ls -r | measure -s length

RawGit

RawGit can be used to view individual files eg
HTML
[https://rawgit.com/philanderson888/showcase/master/index.htm](https://rawgit.com/philanderson888/showcase/master/index.htm)
Bootstrap
[https://rawgit.com/philanderson888/showcase/master/bootstrap_01.htm](https://rawgit.com/philanderson888/showcase/master/bootstrap_01.htm)

STDOUT

process.stdout.write(text);

Testing

Please see [https://plnkr.co/edit/?p=preview](https://plnkr.co/edit/?p=preview) for an example of Javascript testing.

Web Glossary

ASCII

Represent ASCII literal as "\u0041"
BigInt

Can hold arbitrarily large integer numbers
[https://developers.google.com/web/updates/2018/05/bigint](https://developers.google.com/web/updates/2018/05/bigint)
Console Output

javascript:console.log('hi'); // FROM THE BROWSER WINDOW!!! OR URL LINK!!!
console.log() produces black text
[console.info](http://console.info/)() blue text with icon
console.debug() blu
console.warn() yellow with icon
console.error() red with icon
console.table(); tabular output for a JSON object
var x=1; console.log("output %d",x); %d=integer, %s=string, %o=object
console.log('this object is is %o ',this);
console.log('this event is %o ',event);
console.log("%s",new Error().stack);
console.dir(object-goes-here);
console.dirxml(HTML DOM NODE);
console.important()
console.todo()
console.trace() view stack
console.time('x'); start a stopwatch
console.endTime('x') end stopwatch
Debug : Break on HTML change
Monitor('function1');
Debug('functionname');
Toggle device mode chrome
const

const variables are
UPPERCASE
block scope and even if global, not assigned to the Window object
const references to primitive values are always immutable
const bindings are immutable but the contents of objects and arrays are not immutable so the contents can change - it is just the binding to the object or array object which does not change
Const Var Let

use const by default
use let if rebinding is needed
don't use var at all!
Cordova - build multi-platform web apps

npm install -g cordova
cordova create MyApp
cd MyApp
cordova platform add browser
cordova run browser
First Class Object

First class object is an object that has methods and properties
Functions in Javascript can have properties and methods
So functions in Javascript are called First Class Objects or First Class Functions!
ie they are Function Objects
They can be passed as an argument to other objects as well, and can even be returned by a function.
They can be assigned as a value to a variable.
Headers in HTML

We can view the headers in an HTML page after loading by
going to Chrome Developer Tools, Network tab, clicking
on the loaded file and then choosing 'Headers'
History.length/back/forward/go

```
Accessing Browser History
History object is an ARRAY OF URLS LAST VISITED

history.length()  number of URLS

history.back()

history.forward()

history.go(URL) or go(-4)

For security reasons you can't access full list of URLs stored inside history object 

Most recent page document.referrer

<https://developer.mozilla.org/en-US/docs/Web/API/History_API>

History  has length (back button), back(), forward(), go(x)
```

Immutable

Immutable objects cannot change
const references to primitive objects are immutable
const x = 10; //this is immutable
const x = {} is not immutable so x.a=10 is fine to add afterwards.
Object.freeze(myObject) can be used to freeze myObject which is made up of key-value pairs, or an array.
Lexical Scoping

Lexical scoping means private scope ie only valid within the block of code in which it is declared.

Location

```
location = stats about current URL

location.href  is full current URL 

location.protocol  eg http

location.host/hostname = name of server

location.hash  ==> go to part of document where id="#"

protocol://hostname:port/pathname?search=#hash

Location = current URL : href protocol host hostname port pathway search hash
```

OnResize Window Event

```
window.innerWidth/Height

jquery_30_resize_browser.htm

window.onresize()
```

Primitive Types

Primitive types in Javascript are
number
string
boolean
symbols
null
undefined
Progressive Javascript Framework

can be introduced gradually into your codebase
Window - Create, Resize, Manage and Close

<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>New Window</title>
<script type="text/javascript">
var eula;
function openWin() {
eula = window.open("eula.html","eula","height=200,width=300,left=100,top=100");
eula.focus();
}
function eulaChecked() {
if (document.getElementById("confirmEula").checked && typeof eula == "undefined") {
alert("Come on now. Don't you think you should read the EULA first?");
document.getElementById("confirmEula").checked = false;
openWin();
} else if (document.getElementById("confirmEula").checked && !eula.closed) {
eula.close();
} else if (!document.getElementById("confirmEula").checked) {
openWin();
}
}
</script>
</head>
<body>
<form action="process.xyz">
<input type="checkbox" id="confirmEula" name="confirmEula" onclick="eulaChecked()"> Check to confirm that you agree with our <a href="eula.html" onclick="openWin(); return false;">user agreement</a>.
</form>
</body>
</html>

Window.Scroll

```
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

Javascript Appendix

Javascript - The Good Parts - Douglas Crockford

Topic List

```
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

```
if ( typeof Object.create !== 'function' ){
	Object.create = function(o){
		var F = function(){};
		F.prototype = o;
		return new F();
};
}
```

Replacing the Function.prototye with .method

```
Function.prototype.method = function(name,func){
		this.prototype[name] = func;
		return this;
	}
```

Creating a Number.integer method
</pre>

```
Number.method('integer',function(){
	return this.Math[this<0?'ceil':'floor'](this);
});
```

Creating a 'trim' method for Strings

```
String.method('trim',function(){
		return this.replace(/^\\s+|\\s+$/g,'');
	});
```

Add a method conditionally

```
Function.prototype.method = function(name, func){
	if(!this.prototype[name]){
		this.prototype[name] = func;
		return this;
	}
};
```

Array

```
Create is_array function 
		var is_array = function(value){
			return value && typeof value === 'object' && value.constructor === Array;
	};
```

Things To Change

For..in

```
for (item in myObject){} will iterate of the object but also pull out all methods etc
	To only bring out the members, use
	for (itme in myObject){
	  if(object.hasOwnProperty(item)){  // code }
}
```

Not

```
! 
	use (foo) instead of (foo != 0)
	use (!foo) instead of (foo == 0)
```

Bad Parts

```
Global Variables
	All top level variables are put together in the 'global object'

Unavoidable Bad Parts (Appendix A)
	
	Function Scope : solved with 'let' keyword which gives Block Scope which is what we want
	
	Reserved words
		Many reserved words are not used!
		Can use reserved words but 'escape' with literals
	Unicode 
		<http://unicode.org/charts/>
		Javascript characters 16 bits
		Doesn't cover the 32 bit characters above this - treats as two separate 16 bit characters
	Typeof
		typeof(null) returns object so don't use!  Test instead for x === null
	Testing for type object
		typeof cannot tell between null and an object
		but can use the fact that if(null) returns false 
			if(null) console.log('hello');
				undefined
			if(!null) console.log('hello');
			  hello
	  therefore can use that to code this
	  	if(x && typeof(x)==='object') { //x is object or array }
	parseInt
		parseInt(08) converts from base 8 to base 10 so always use the following
		parseInt(myValue,10) which forces the result to return from base 10!
			(10 is called the 'radix' ie the number to which we count eg radix = 10 for base 10 counting)
	  tip : to convert to binary use x=parseInt(10101010,2) returns 170
	+
		if one string is null, returns the other string
		if both are numbers, adds them
		otherwise concatenate
			good practice : always ensure numbers are used before adding!
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

Avoidable Bad Parts (Appendix B)
	==
		use === and !==
	with
		don't use
	eval
	continue
	switch fall through
	undefined is a global variable and you can change its value!
	NaN is a global variable and you can change its value!
	Single line expressions - don't use them !
		if (true)
			y=7;
			never do this but always use proper braces
		if (true) {
			y=7;
	  }
	}
	x++ and ++x - don't use them!  (JSLint bans them!)
	& 
		use &&
	| 
		use ||
	^ xor
	~ not
	>> >>> << bit shift - don't use as slow!
	Function declaration
		use var x = function(){}   NOT function x(){}
		use IIFE
			
			(function(){}()); to invoke an anonymous function
	new keyword
		don't use new Boolean/Number/String/Object/Array
			Object - just use {}
			Array  - just use []
		Better - don't use new at all!
	new with constructor
		new with function 
			if constructor is defined this is OK
			functions that take NEW (with constructor) should be PascalNamed
			functions that don't should be camelNamed
			or better still don't use new!?!?!?
	void
		don't use
	innerHTML
		never directly assign HTML received from a server to an innerHTML element because if it
		is corrupt it can contain a script block! validate it first!?!?!?
	/*  */  can conflict with regex so use // exclusively
	JSLint (Appendix C)
		JSLint is a quality checker for Javascript
		/*global               // lists all deliberate global variables here
		  global_var_01
		*/
		/*members       // lists all members so can check for mis-spellings
			var01,var02
		*/
		/*jslint   */      JSLint options
			eqeqeq forces === always
```