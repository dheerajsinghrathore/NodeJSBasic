// Example to create a text file Asynchronously
const fs = require("fs");
let oldPath = "dhej_message.txt";
let newPath = "dheeraj_message.txt";
fs.rename(oldPath, newPath, (err) => {
  if (err) {
    console.log("File not renamed successfully.", err.code);
  } else {
    console.log("File renamed successfully.");
  }
});
console.log("Bye.");
