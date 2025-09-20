// using require to import exported function from math.js
// example7 copy is like named export in ES6 modules
// example8 is like default export in ES6 modules
// since math.js exports the function directly, we can import it directly
// without destructuring
const math = require("./math.js");
math.area(5);
