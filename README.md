chain-me
==========

## install

**npm**

```sh
$ npm install chain-me
```

**component**

```sh
$ component install jwerle/chain-me
```

## usage

Wrap an object and all `void` functions return `this` instead of
`undefined`

```js
var chain = require('chain-me')

chain(obj)
.method(foo)
.action(bar)
.end(fn);
```

## license

MIT
