# JavaScript-specific Interview Prep

Quick notes for preparing for a JavaScript-specific interview.

Resources:

- https://github.com/leonardomso/33-js-concepts
- https://github.com/getify/You-Dont-Know-JS
- https://github.com/yangshun/front-end-interview-handbook
- https://github.com/yangshun/tech-interview-handbook

Miscellaneous topics to cover:

- RxJS and Observables
- Event loop

# Synchronous or Asynchronous?

JavaScript is single-threaded and synchronous. But requests and timers are asynchronous (I/O model is non-blocking and asynchronous).

# Closures / Function wrappers (**M**)

From [this Medium post](https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4):

> A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

# `this` (**M**)

Refers to the context of execution (hence the need for stuff like `fn.bind` (retain context) or `fn.call` (sets `this` to `fn`)).

# Callbacks, Promises, async/await

Resources Used: [Medium post](https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee) and MDN

## Callbacks

Callback is a function x passed into another function y where x is usually invoked in y. Asynchronous callbacks refer to callbacks invoked on a result when the result is ready.

## Promises (**M**)

Object for encapsulating asynchronous operations, like requests, and notifying if it's a success (resolved) or failure (rejected).

From [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise):

> The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

### Using a Promise:

```js
asyncStuff(args) // returns a Promise
  .then(function(result) {
    // do something with result
  })
  /* 
    - Each `then` should return either another Promise or value
      which can be passed to another `.then`
    - Allows `then`s to be chained
  */

  /*
    - Only need one `catch` cuz
      errors thrown in the then/Promise chain are caught in `catch`
    - If there's no `catch` then errors will be silent
  */
  .catch(function(error) {
    // handle error
  });
```

### Creating a Promise:

> The creation of a Promise object is done via the Promise constructor by calling “new Promise()”. It takes a function as an argument and that function gets passed two callbacks: one for notifying when the operation is successful (resolve) and one for notifying when the operation has failed (reject). What you pass as an argument when calling resolve will be passed to the next then() in the promise chain. The argument passed when calling reject will end up in the next catch(). It is a good idea to make sure that you always pass Error objects when calling reject.

`resolve` and `reject` are implemented by the Promise API (so they're the same functions for every Promise)

```js
function asyncStuff(args) {
  return new Promise(function(resolve, reject) {
    // do something with args
    const { result, error } = f(args);
    // result should be a Promise, value or object
    // error should be an Error object

    if (result) {
      resolve(result);
    } else {
      reject(error);
    }
  });
}
```

Wrapping callback-based function inside a Promise:

```js
function getAsyncData(args) {
  return new Promise(function(resolve, reject) {
    getData(args, function(error, result) {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}
```

## `async`/`await`

From MDN [0](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function) [1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await):

> The async function keyword can be used to define async functions inside expressions.

> The await operator is used to wait for a Promise. It can only be used inside an async function.

```js
function resolveAfter2Seconds(n) {
  return new Promise((resolve, reject) => {
    if (n > 10) {
      reject(new Error(`${n} is greater than 10!`));
    }
    setTimeout(() => {
      resolve(n);
    }, 2000);
  });
}

async function f1() {
  try {
    let x = await resolveAfter2Seconds(10);
    console.log(x); // 10
  } catch (err) {
    console.log(err);
  }
}
f1();
```

# In-browser APIs

## Querying

`document.querySelector`

`document.querySelectorAll`

## DOM Manipulation (**M**)

When adding stuff to the DOM, use `document.createElement` and other document APIs to create the element then append it to the DOM. Only use `.innerHTML` if it's something small with no risk of a XSS attack. `.innerHTML` is faster at the cost of maintenability for larger manipulations; but it's neat for small manipulations (if you use the template strings).

### When to use a document fragment

If you're going to do multiple operations on the node then use a document fragment before appending / applying the changes to the DOM.

https://davidwalsh.name/documentfragment

## `append` or `appendChild` ?

Use `append` because it does everything `appendChild` does but more: https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append

## About `innerHTML` and similar stuff

https://stackoverflow.com/a/24428100/9262581

# Hoisting

Function and variable declarations are "hoisted" to the top of the scope. Enables developer to use functions on lines before the line(s) of declaration.

Undeclared, but assigned, variables are automatically global variables.
