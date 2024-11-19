# 2024-11 random tech

## contents

- [2024-11 random tech](#2024-11-random-tech)
  - [contents](#contents)
  - [202411 scripted notes](#202411-scripted-notes)
  - [202411 ai robots](#202411-ai-robots)
  - [202411 artificial intelligence](#202411-artificial-intelligence)
  - [202411 artificial intelligence in videos](#202411-artificial-intelligence-in-videos)
  - [202411 maths](#202411-maths)
  - [202411 tech to investigate](#202411-tech-to-investigate)
  - [202411 video final cut pro](#202411-video-final-cut-pro)
  - [202411 cloud](#202411-cloud)
  - [202411 inspired websites](#202411-inspired-websites)
  - [202411 javascript](#202411-javascript)
  - [202411 writing videos](#202411-writing-videos)
  - [202411 javascript](#202411-javascript-1)
  - [sanitising input strings](#sanitising-input-strings)
  - [202411 react new features](#202411-react-new-features)
  - [202411 roku](#202411-roku)



## 202411 scripted notes

a) record voice

b) upload to video

c) upload video to youtube so can listen to it

## 202411 ai robots

Clone AI humanoid robot

nvidia isaac sim is a way of training ai robots

developer nvidia.com has latest work by nvidia

nvida have an omniverse for training robots

## 202411 artificial intelligence

waymo has autonomous cars right now

## 202411 artificial intelligence in videos

clip anything from opus clip turns long form videos into short-form social media readily digestible clips.

## 202411 maths

circle area is pi r squared

Cosine Rule: a squared = b squared + c squared - 2bc cosine A

Sine Rule: sin A over A = Sin B over B

Volume of sphere is 4/3 PI R cubed

Volume of cone is 1/3 PI R squared x height

## 202411 tech to investigate

google earth timeline can now show us how a landscape has changed over the years


## 202411 video final cut pro 

option w adds a 3 second gap 


## 202411 cloud 

apache spark is used to crunch huge amounts of cloud data using distributed parallel processing ... install using `pip install pyspark` and use the command `pyspark` or run with docker image `docker run -it --rm spark:python3 /opt/spark/bin/pyspark` and can run code with for example 

```py 
df = spark.read.json("logs.json")
df.where("age > 21").select("name.first").show()
```

## 202411 inspired websites

this is an inspired portfolio website https://tunis-nextjs.netlify.app/home-dark

?? use squarespace to build me a website automatically ???

framer is just totally inspiring ... learn how to build my portfolio site using it !!!

like this one ... copy it !!! https://najm.framer.website/

framer templates are just amazing

dropdowns .. i love the framer website ones https://www.framer.com/meetups/

## 202411 javascript

npx is-my-node-vulnerable

open js foundation

## 202411 writing videos

a good way to create a video is to create a web page first and go through it live when you are coding - genius !!! so build it first then go through and explain it , document it and create a video of you building it.  this is genius as it helps others and helps yourself be concise and make sure it is all working before you begin - genius !!!

## 202411 javascript

.mjs stands for module javascript and stands for ES javascript using import export syntax

destructuring with alias allows one to destructure an object but then also rename the fields in one go 

currying functions allows you to create multiple versions of a single function

debouncing prevents a function from being called after it was previously called, until a certain time has elapsed.  useful => input form field

```js
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

const search = debounce((query) => {
  console.log(`Searching for ${query}`);
  // Imagine an API call here
}, 300);

document.getElementById('searchInput').addEventListener('input', (event) => {
  search(event.target.value);
});
```

throttling specifies a function is used only once in a given time period, for example scroll event handling

```js
function throttle(func, interval) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= interval) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

const handleScroll = throttle(() => {
  console.log('Scrolled');
  // Imagine complex calculations or DOM updates here
}, 300);

window.addEventListener('scroll', handleScroll);
```

memoization caches the results of expensive function calls ... and return same results when same inputs are applied

```js
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
};

const fibonacci = memoize((n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(40)); // 102334155
```

console.table for js objects

console.time() starts a stopwatch 

console.timeEnd() ends a stopwatch

structured clone creates a full deep clone copy of an object, at all levels

```js
const obj = { 
  a: 1, 
  b: { c: 2 },
  date: new Date(),
  arr: [1, 2, 3],
  nestedArr: [{ d: 4 }]
};
const clonedObj = structuredClone(obj);

console.log(clonedObj); 
// { a: 1, b: { c: 2 }, date: 2023-06-08T00:00:00.000Z, arr: [1, 2, 3], nestedArr: [{ d: 4 }] }
console.log(clonedObj === obj); // false
console.log(clonedObj.b === obj.b); // false
console.log(clonedObj.date === obj.date); // false
console.log(clonedObj.arr === obj.arr); // false
console.log(clonedObj.nestedArr[0] === obj.nestedArr[0]); // false
```

IIFE functions are executed immediately and avoid polluting global scope, helps maintain clean code by avoiding global scope

## sanitising input strings

we can sanitise input strings to stop injection attacks

```js
function sanitize(strings, ...values) {
  return strings.reduce((result, string, i) => {
    let value = values[i - 1];
    if (typeof value === 'string') {
      value = value.replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;')
                   .replace(/"/g, '&quot;')
                   .replace(/'/g, '&#39;');
    }
    return result + value + string;
  });
}

const userInput = '<script>alert("xss")</script>';
const message = sanitize`User input: ${userInput}`;
console.log(message); // User input: &lt;script&gt;alert("xss")&lt;/script&gt;
```

## 202411 react new features

concurrent rendering manages rendering priorities ... `useTransition`

we can mark some updates as `non-urgent` so more critical renders are run first

```jsx

Search
Write
2

Philip Anderson
React 19: Goodbye to Old Features, Hello to the Future
Adhithi Ravichandran
Adhithi Ravichandran

·
Follow

7 min read
·
Sep 26, 2024
482


12






Photo by Ankush Minda on Unsplash
React 19 is shaping up to be an important update, enhancing the performance and developer experience introduced in React 18. This new version isn’t just about small tweaks; its packed with improvements that will change how you build and optimize your React applications. Let’s dive into what’s new, why it matters, and how you can start using these features with practical code examples.

1. Advanced Concurrent Rendering: Making UIs More Responsive
Concurrent rendering was a big step forward in React 18, but React 19 refines it even further. The enhancements in React 19 allow you to manage rendering priorities with more granularity, making your apps feel snappier and more responsive, especially when juggling heavy computations or multiple user interactions.

Code Snippet: Optimizing with useTransition
React’s useTransition hook helps manage state transitions, allowing you to mark updates as non-urgent. This keeps your UI responsive by prioritizing more critical renders first.In this example, startTransition allows React to defer the less urgent state update (search results) until more critical updates are complete, improving user experience during heavy operations.

import React, { useState, useTransition } from 'react';

function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (event) => {
    setQuery(event.target.value);
    startTransition(() => {
      // Simulate heavy computation
      const filteredResults = performHeavySearch(event.target.value);
      setResults(filteredResults);
    });
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleSearch} placeholder="Search..." />
      {isPending ? <p>Loading results...</p> : <ResultList results={results} />}
    </div>
  );
}
```

`streaming suspense` for real time data fetching

components load data and allow them to begin rendering before all the data has arrived

```jsx
import React, { Suspense } from 'react';

// Lazy load component with data fetching
const UserProfile = React.lazy(() => fetchUserProfileData());

function App() {
  return (
    <Suspense fallback={<div>Loading user profile...</div>}>
      <UserProfile />
    </Suspense>
  );
}

async function fetchUserProfileData() {
  const response = await fetch('/api/user');
  const data = await response.json();
  return () => <ProfileComponent data={data} />;
}
```



`automatic error recovery` to keep apps working smoothly ... uses `onRecoverableError`, `onCaughtTrigger`, `onUncaughtTrigger`



enhanced `developer tools` eg `state inspector`, `component filter improvements`, `performance tab updates`



react `server components` can render parts of the app on the server

```js
// app/server-component.js
export default async function ServerComponent() {
  const data = await fetch('https://api.example.com/data');
  const result = await data.json();
  return (
    <div>
      <h2>Server-Side Data</h2>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

// pages/index.js
import { Suspense } from 'react';
import ServerComponent from '../app/server-component';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to React 19</h1>
      <Suspense fallback={<div>Loading server data...</div>}>
        <ServerComponent />
      </Suspense>
    </div>
  );
}
```


`server actions` means that server-side logic can be run with the `use-server` directive which flags that code should run on the server not the client.

```js
// components/SubmitForm.js
'use server'; // This directive tells React that this function runs on the server

export async function submitForm(data) {
  // Simulate a server-side operation, like saving to a database
  console.log('Processing data on the server:', data);

  // Example of server-side logic
  const response = await fetch('https://api.example.com/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to save data on the server.');
  }

  return response.json();
}
```


avoid these things in `react` ... `useEffect` ... instead use server actions and server components 



flutter vs react native - flutter wins easily


oracle cloud provides a free .. tag `free` instance with 

## 202411 roku

things to have a look at

roku hero grid channel .. 8 years old !!!  https://github.com/rokudev/hero-grid-channel

scenegraph ... 4 years old ! https://github.com/rokudev/scenegraph-master-sample  

on device sign up ... channel store node https://github.com/rokudev/on-device-authentication

unit testing ... 5 years old   https://github.com/rokudev/unit-testing-framework 

scenegraph all nodes demo 3 years old  https://github.com/rokudev/sgnodes-all-demo

automated channell testing 3 years old https://github.com/rokudev/automated-channel-testing 

hello world https://github.com/rokudev/hello-world 

