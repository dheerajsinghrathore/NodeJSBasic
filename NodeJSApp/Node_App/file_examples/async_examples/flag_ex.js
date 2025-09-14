// Example to create a text file Asynchronously
const fs = require("fs");
let file = "dhej_message.txt";
let today = new Date();
let dateTime = today.toLocaleDateString() + ", " + today.toLocaleTimeString();
let str = "Kaisa lag rha NodeJs!";
str += `\nDate and Time: ${dateTime}\n`;
fs.writeFile(file, str, { flag: "wx" }, (err) => {
  if (err && err.code === "ENOENT") {
    console.log("Path is invalid.");
  } else if (err && err.code === "EEXIST") {
    console.log("File already present can't override.");
  } else {
    console.log("File created successfully.");
  }
});
console.log("Bye.");
