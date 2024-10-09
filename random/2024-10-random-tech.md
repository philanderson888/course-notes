## 202410 things to build and try out and learn

login app using fastify jwt tokens and using prisma database https://medium.com/@atatijr/token-based-authentication-with-fastify-jwt-and-typescript-1fa5cccc63c5

## 202410 javascript

padstart

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

## 202410 ai

claude 3 haiku, then sonnet, then opus in that order of intelligence

claude 3 is claiming it is better than chat gpt and gemini and llama

anthropic is claude ai api

amazon bedrock ai

google cloud vertex ai 


## 202410 nocode and low-code

webflow use design to build a website

build a website 1) repeatable design 2) break page into sections 3) great headings eg hero has 1 or 2 columns  4) small paragraph, image/video to compliment the heading 5) repeatable section to explain your website in a little bit more detail 6) call to action 7) content ... with colours have just 4 - black through to white and two accent colours ... with font just have one font on whole website ... use dynamic heading size, flexible cards, SVG icons which highlight with CSS, snap scrolling which snaps next portion of your site into view quickly at the right position, scale up or down

## 202410 random tech

zod types

cloudflare durable session

cloudflare d1 sls

cloudflare r2 is no sql

cloudflare edge nodes allow the user to access data far faster

cloudflare edge nodes even run javascript

orm object relational mapper 

codebase.show/projects/realworld