const fs = require("fs");
let file = ".sync/dhej_message.txt";
let today = new Date();
let dateTime = today.toLocaleDateString() + ", " + today.toLocaleTimeString();
let str = "Welcome to Node.js, Dheeraj Rathore!";
str += `\nDate and Time: ${dateTime}\n`;
try {
  fs.writeFileSync(file, str);
  console.log("Directory created successfully.");
} catch (err) {
  if (err.code === "ENOENT") {
    console.log("File path Invalid.");
  }
}
console.log("Bye.");
