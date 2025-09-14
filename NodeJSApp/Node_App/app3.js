const util = require("util");
let a = 10;
let b = 20;
let str = util.format("First number is %d, Second number is %d and There sum is %d", a, b, a + b);
console.log(str);
console.log(typeof str);
