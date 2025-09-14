// Example to create a text file Asynchronously
const fs = require("fs");
let file = "dhej_message.txt";
let today = new Date();
let dateTime = today.toLocaleDateString() + ", " + today.toLocaleTimeString();
let str = "Kaisa lag rha NodeJs, Dheeraj Rathore!";
str += `\nDate and Time: ${dateTime}\n`;
fs.writeFile(file, str, (err) => {
  if (err) {
    console.log("File not created successfully.");
  } else {
    console.log("File created successfully.");
  }
});
console.log("Bye.");
