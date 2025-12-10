const express = require("express");
const app = express();
app.set("view-engine", "ejs");

let persons = [
  { name: "Dheeraj", age: 24, city: "Indore" },
  { name: "Singh", age: 28, city: "Patna" },
  { name: "Rathore", age: 32, city: "Bangalore" },
];

app.get("/", (req, res) => {
  res.render("index.ejs", { objs: persons });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
