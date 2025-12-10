const express = require("express");
const app = express();
app.set("view-engine", "ejs");
app.use(express.static("views/pages"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
