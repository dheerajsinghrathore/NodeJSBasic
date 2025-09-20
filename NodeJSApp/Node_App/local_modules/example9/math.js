//  Now learn how to export multiple functions from a module.
// we are using exports
// need to export a both function in main.js
function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
exports.add = add;
exports.subtract = subtract;
console.log(module.exports); // { add: [Function: add], subtract: [Function: subtract] }
// module.exports = { add, subtract }; // this is same as above two lines
// module.exports = { add: add, subtract: subtract }; // this is same as above line