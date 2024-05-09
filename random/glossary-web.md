# programming web

## contents

- [programming web](#programming-web)
  - [contents](#contents)
  - [random](#random)
  - [Contentful](#contentful)
  - [Cordova - build multi-platform web apps](#cordova---build-multi-platform-web-apps)
  - [Gatsby](#gatsby)
    - [Gatsby Resources](#gatsby-resources)
    - [Code Samples](#code-samples)
    - [Install Gatsby Client](#install-gatsby-client)
    - [Clone Gatsby Starter Site](#clone-gatsby-starter-site)
    - [Deploy To Netlify](#deploy-to-netlify)
  - [GraphQL](#graphql)
  - [Nativescript](#nativescript)
  - [PWA](#pwa)
  - [Hacker News](#hacker-news)
  - [MeteorJS](#meteorjs)
  - [NativeScript](#nativescript-1)
  - [Node Streams](#node-streams)
  - [n node manager vs npm node manager](#n-node-manager-vs-npm-node-manager)
  - [Password Generator](#password-generator)
  - [PWA Progressive Web Apps](#pwa-progressive-web-apps)
  - [react-js](#react-js)
  - [reason-ml](#reason-ml)
  - [Typescript](#typescript)
  - [Typescript interfaces](#typescript-interfaces)
  - [Typescript Classes](#typescript-classes)
  - [Typescript tsconfig.json](#typescript-tsconfigjson)
  - [Webpack](#webpack)
  - [Canvas](#canvas)
  - [Selenium](#selenium)
  - [Three.js](#threejs)
  - [Webpack](#webpack-1)
  - [Yarn](#yarn)




## random

```
google keyword planner
graphql
gatsby
apollo
hooks
sanity headless cms
tiobe language index
source map gets minified code back to original
jmeter
sentry bug tracking
```



## Contentful

Deploying a site with contentful

The API keys have to be configured within contentful on their website also.

The .contentful.json file contains the API keys which are valid for local use only

To run the site locally simply type `gatsby develop` and browse to `http://localhost:8000`



## Cordova - build multi-platform web apps

```
npm install -g cordova
cordova create MyApp
cd MyApp
cordova platform add browser
cordova run browser
```



## Gatsby

Gatsby generates your site as a PWA 

PWA Progressive Web Site which has a service worker to speed up page loading and resource caching

### Gatsby Resources

[https://www.gatsbyjs.org](https://www.gatsbyjs.org/) 

Starting point for learning

[https://www.gatsbyjs.org/tutorial](https://www.gatsbyjs.org/tutorial)  

### Code Samples

[https://www.gatsbyjs.org/docs](https://www.gatsbyjs.org/docs) 

### Install Gatsby Client

```csharp
npm install -g gatsby-cli

```

### Clone Gatsby Starter Site

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

### Deploy To Netlify

[https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

Create gatsby-02 repo locally and on GitHub; push to GitHub so site is live locally and all changes on GitHub

Go to [app.netlify.com](http://app.netlify.com) and choose 'New Site From Git'.

Link Netlify to GitHub

[https://app.netlify.com/start/deploy?repository=https://github.com/philanderson888/gatsby-02](https://app.netlify.com/start/deploy?repository=https://github.com/philanderson888/gatsby-02) 

[https://festive-perlman-abc4bd.netlify.com/](https://festive-perlman-abc4bd.netlify.com/)  

[https://festive-perlman-abc4bd.netlify.com/](https://festive-perlman-abc4bd.netlify.com/) 


## GraphQL

[GraphQL](graph-ql.md)

## Nativescript

[NativeScript](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#nativescript)

## PWA

[PWA Progressive Web App](notion://www.notion.so/philanderson888/Random-Programming-Notes-8000-lines-ceef083f617f4874b048d248238f1f3c#pwa)

## Hacker News

[https://news.ycombinator.com](https://news.ycombinator.com/)

## MeteorJS

```bash
# Windows
choco install meteor
# Linux
curl <https://install.meteor.com/> | sh

# create app
meteor create testapp
cd testapp
meteor
```





## NativeScript

We can use nativescript to build native Android and IOS apps from scratch using regular Javascript code; namely Typescript, Vue, Angular etc.

Try it out at [https://www.nativescript.org](https://www.nativescript.org/)

## Node Streams

Streams are similar to Unix Piping | whereby we `pipe` the output from one command into another

.pipe() is used

## n node manager vs npm node manager

n is a Node module, which can be installed by npm, and nvm is a Bash script.

n and nvm are both still active projects, because it's still more of a bother than updating on Windows. They are still actively maintained, and both have been modified less than 10 days ago.

I find n to be of easier use because it can be installed by npm, but both scripts serve their purpose


## Password Generator

[https://passwordwolf.com/api/](https://passwordwolf.com/api/)

[https://passwordwolf.com/](https://passwordwolf.com/)

## PWA Progressive Web Apps

PWA Progressive Web App : is a web app which behaves as if it's a native app with offline support.

Native apps are used a lot but people are loth to install new web apps! Also Google/Facebook/Amazon have the lions' share of the most popular apps


## react-js

[react-js](react-js.md)

## reason-ml

[reason-ml](reason-ml.md)
## Typescript

Install via NPM or VS Nuget

Note that Visual Studio has full intellisense for typescript

```
npm install -g typescript
```

Create typescript file helloworld.ts

```
function greeter(person) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);
```

Now compile this typescript file to javascript

```
# typescript compile to javascript the typescript file `helloworld.ts` 
tsc helloworld.ts
```

Now run this with HTML :

```
<!DOCTYPE html>
<html>
    <head><title>TypeScript</title></head>
    <body>
        <script src="helloworld.js"></script>
    </body>
</html>
```

## Typescript interfaces

We can use interfaces as a predicted class structure

```
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
```

## Typescript Classes

Typescript has full support for ES6 classes

```
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
```

## Typescript tsconfig.json

The presence of tsconfig.json indicates this is the root of a project.

tsconfig specifies
root files
compiler options

## Webpack

Webpack takes multiple files like `index.js` etc and bundles them into one `bundle.js` file

Code splitting then allows for different parts of the application to be loaded on demand

## Canvas

[canvasjs.com](http://canvasjs.com/)

## Selenium

£30 Selenium Testing course [https://www.udemy.com/selenium-real-time-examplesi…](https://www.udemy.com/selenium-real-time-examplesi%E2%80%A6)

## Three.js

Three.js is a javascript framework for producing 2d and 3d graphics

## Webpack

Webpack and Yarn are the recommended replacement for Bower package manager which helps establish the correct dependency relationships for your dependent packages, and maintain them correctly for you. See <a href="#bower">Bower</a> and <a href="#yarn">Yarn</a> for details.

## Yarn

Yarn is a package install manager

Yarn can be used in a similar manner to npm and bower to install libraries and their dependencies into your project, and manage and maintain the correct dependency relationships for you
Yarn and Webpack are recommended as an alternative to Bower. See <a href="[https://bower.io/blog/2017/how-to-migrate-away-from-bower](https://bower.io/blog/2017/how-to-migrate-away-from-bower)">[https://bower.io/blog/2017/how-to-migrate-away-from-bower](https://bower.io/blog/2017/how-to-migrate-away-from-bower)</a> for more details.
