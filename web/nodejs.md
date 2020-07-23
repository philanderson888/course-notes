# NodeJS

## Contents

- [NodeJS](#nodejs)
  - [Contents](#contents)
- [Handlebars](#handlebars)
- [Lodash  for Arrays, Numbers, Strings](#lodash-for-arrays-numbers-strings)







# Handlebars

Allows reuse of HTML

handlebars client-side templating . . . reusing HTML over and over again













# Lodash  for Arrays, Numbers, Strings

lodash library for creating a foreach loop in JS

[https://lodash.com/](https://lodash.com/)

Either use with CDN

<script src="lodash.js"></script>

or via
install on NPM

$ npm i --save lodash

Then require in your
project

var _ = require('lodash');

Then can
use for example

_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });

// → { 'a': 1, 'b': 2 }

_.partition([1, 2, 3, 4], n => n % 2);

// → [[1, 3], [2, 4]]

See
documentation

[https://lodash.com/docs/4.17.10](https://lodash.com/docs/4.17.10)

