// Example to Append synchronously
const fs = require("fs");
let file = "dhej_message.txt";
let today = new Date();
let dateTime = today.toLocaleDateString() + ", " + today.toLocaleTimeString();
let str = "Node JS Append Asynchronously..!";
str += `\nDate and Time: ${dateTime}\n`;
fs.appendFile(file, str, (err) => {
  if (err) {
    console.log("File not appended successfully.", err.code);
  } else {
    console.log("Data appended successfully.");
  }
});
