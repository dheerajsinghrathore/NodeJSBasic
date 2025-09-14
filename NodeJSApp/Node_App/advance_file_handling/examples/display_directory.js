const fs = require("fs");
const path = require("path");

let dirPath = path.join(__dirname, "..", "create_directory", "media");
console.log("Looking for directory at:", dirPath);

fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.log("Directory not read successfully.", err.code);
  } else {
    console.log("Total files - ", files.length);
    files.forEach((item) => {
      console.log(item);
    });
  }
});