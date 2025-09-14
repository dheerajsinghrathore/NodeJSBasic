// Example to create a text file Asynchronously
const fs = require("fs");
let file = "dhej_message.txt";
try {
  let data = fs.readFileSync(file);
  console.log(data);
  console.log(typeof data);
  console.log(data.toString());
  console.log("File read successfully.");
} catch (err) {
    if (err.code === 'ENOENT') {
        console.error('File not found!');
    } else {
        console.error('An error occurred while reading the file.');
    }
}
console.log("Bye.");
