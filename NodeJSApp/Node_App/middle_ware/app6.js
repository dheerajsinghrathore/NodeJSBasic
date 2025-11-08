// Create more than one middleware and use them in the application
const express = require("express");
const app = express();
const port = 3000;
// Logger is Middleware
const logger = (req, res, next) => {
  let date = new Date();
  let timeStamp = `${date.toDateString()} at ${date.toLocaleTimeString()}`;
  req.timeStr = timeStamp;
  req.reqType = req.method;
  console.log(
    `Logger: ${req.method} request made to ${
      req.originalUrl
    } at ${new Date().toLocaleString()}`
  );
  next();
};

app.use(logger);
// Below Get and Post Requests - Route Handlers
app.get("/products", (req, res) => {
  res.send(`You send ${req.reqType} Request at ${req.timeStr}`);
});

app.post("/customers", (req, res) => {
  res.send(`You send ${req.reqType} Request at ${req.timeStr}`);
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
