const util = require("util");
let name = "Dheeraj Rathore";
let str = util.format("My name is %s", name);
let options = { colors: true }
console.log(util.inspect(str, options));