console.log("Before exporting the module");
console.log(module.exports);
let count = 110;
let msg = "This is a local module";
module.exports = { count, msg };
console.log("After exporting the module");
console.log(module.exports);