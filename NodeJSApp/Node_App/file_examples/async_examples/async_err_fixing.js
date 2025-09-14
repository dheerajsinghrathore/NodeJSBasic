// Example to create a text file Asynchronously
const fs = require("fs");
let file = "sync/dhej_message.txt";
let today = new Date();
let dateTime = today.toLocaleDateString() + ", " + today.toLocaleTimeString();
let str = "Welcome to Node.js, Dheeraj Rathore!";
str += `\nDate and Time: ${dateTime}\n`;
fs.writeFile(file, str, (err) => {
  if (err.code === 'ENOENT') {
    console.log("File path Invalid.");
  } else {
    console.log("File created successfully.");
  }
});
console.log("Bye.");