// Example to create a text file synchronously
const fs = require("fs");
let file = "text_files/dhej_message.txt";
let dateTimeStr =
  new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString();
let str = "Welcome to Node.js, Dheeraj Rathore!";
str += `\nDate and Time: ${dateTimeStr}\n`;
fs.writeFileSync(file, str);
console.log("Program Ended");
