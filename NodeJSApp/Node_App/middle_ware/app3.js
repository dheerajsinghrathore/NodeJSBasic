// Create more than one middleware and use them in the application
const express = require('express');
const app = express();
const port = 3000;
// Logger is Middleware
const logger1 = (req, res, next) => {
  console.log(`Logger1: ${req.method} request made to ${req.url} at ${new Date().toLocaleString()}`);
  next();
};
const logger2 = (req, res, next) => {
  console.log(`Logger2: -${req.method} request made to ${req.url} at ${new Date().toLocaleString()}`);
  next();
};
app.use(logger1, logger2);
// Below Get and Post Requests - Route Handlers
app.get('/', (req, res) => {
  res.send("Get Request");
});

app.post('/', (req, res) => {
  res.send("Post Request");
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});