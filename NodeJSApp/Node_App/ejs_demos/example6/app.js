const express = require("express");
const app = express();
app.set("view-engine", "ejs");

let str = "Dheeraj";

app.get("/", (req, res) => {
  res.render("index.ejs", { name: str });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
