function greet(name) {
  console.log(`Hello, ${name}! Welcome to the Node.js module system.`);
}
// module.exports = { greet };
module.exports.greetings = greet;
console.log('Inside exports of example1 module');
console.log(exports);