const fs = require("fs");
let dirPath = "media/videos/dheeraj_folder";
fs.mkdir(dirPath, {recursive: true}, (err, path) => {
  if (err) {
    console.log("Directory not created successfully.", err.code);
  } else {
    console.log("Directory created successfully.", path);
  }
});
