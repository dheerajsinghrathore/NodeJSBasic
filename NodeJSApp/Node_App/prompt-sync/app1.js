const prompt = require('prompt-sync')();

const name = prompt('What is your name? ');
console.log(`Hello, ${name}!`);

const age = prompt('How old are you? ');
console.log(`You are ${age} years old.`);