## HapiJS

```JS
http://hapijs.com/resources
https://hapijs.com/
npm init
npm install hapi --save (adds to package.json file)
create server.js from hapijs.com and run it

'use strict';
const Hapi = require('hapi');
// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});
// Add the route
server.route({
    method: 'GET',
    path:'/hello', 
    handler: function (request, reply) {
        return reply('hello world');
    }
});
// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

	See Hapi_01 built from HapiJS.com
To add HTML etc files 
npm install inert --save
Add to server.js

server.register(require('inert'), (err) => {
    if (err) {
        throw err;
    }
    server.route({
        method: 'GET',
        path: '/hello',
        handler: function (request, reply) {
            reply.file('./public/hello.html');
        }
    });
});
```
