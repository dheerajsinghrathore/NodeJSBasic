// Example to Append synchronously
const fs = require("fs");
let file = "dhej_message.txt";
let today = new Date();
let dateTime = today.toLocaleDateString() + ", " + today.toLocaleTimeString();
let str = "Node JS Append String..!";
str += `\nDate and Time: ${dateTime}\n`;
try {
  fs.appendFileSync(file, str);
  console.log("Data appended successfully.");
} catch (err) {
  console.log("File not appended successfully.", err.code);
}
console.log("Bye.");
