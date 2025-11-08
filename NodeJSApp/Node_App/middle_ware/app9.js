// Run for particular route only - middleware
const express = require("express");
const app = express();
const port = 3000;
// Logger is Middleware
const logger1 = (req, res, next) => {
  console.log(`Logger1 executed`);
  next();
};

app.get("/", logger1, (req, res) => {
  res.send(`You send GET request to Home`);
});

app.post("/", (req, res) => {
  res.send(`You send POST Request to Home route`);
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
