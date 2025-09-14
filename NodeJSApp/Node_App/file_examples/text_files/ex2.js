const fs = require('node:fs');
let file = "message.txt";
fs.access(file, (error) => {
    if (error) {
        console.log("File does not exist, creating file...");
    } else {
        console.log("File already exists.");
    }
});   // ASynchronous check
console.log("Bye.");
