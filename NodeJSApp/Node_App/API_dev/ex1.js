const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Home Route"); // Send a simple text response
});
app.get("/contact", (req, res) => {
  res.send("Contact Route");
});
app.get("/about", (req, res) => {
  res.send("About Route");
});
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
