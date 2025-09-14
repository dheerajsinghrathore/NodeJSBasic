// Example to create a text file Asynchronously
const fs = require("fs");
let file = "dhej_message.txt";
fs.readFile(file, "utf-8", (err, data) => {
  if (err && err.code === "ENOENT") {
    console.error("File not found!");
  } else {
    console.log(`data = ${data}`);
  }
});
console.log("Bye.");
