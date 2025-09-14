// Example to create a text file Asynchronously
const fs = require("fs");
let path = "dheeraj_message.txt";
fs.unlink(path, (err) => {
  if (err) {
    console.log("File not delete successfully.", err.code);
  } else {
    console.log("File deleted successfully.");
  }
});
console.log("Bye.");
