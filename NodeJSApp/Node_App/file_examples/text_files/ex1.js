const fs = require('node:fs');
let file = "message.txt";
let result = fs.existsSync(file);   // Synchronous check/Blocking IO
if (result) {
    console.log("File already exists.");
} else {
    console.log("File does not exist, creating file...");
}
console.log("Bye.");
