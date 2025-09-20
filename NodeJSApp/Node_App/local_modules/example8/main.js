// using require to import exported function from math.js
// since math.js exports the function directly, we can import it directly
// without destructuring
// here area is the function being imported
// so we can call it directly
// without using math.area()
// this is different from example7 copy where we exported an object
// and imported the object and then used destructuring to get the function
// default export vs named export
// example8 is like default export in ES6 modules
// example7 copy is like named export in ES6 modules
const area = require("./math.js");
area(5);
