// Create more than one middleware and use them in the application
const express = require('express');
const app = express();
const port = 3000;
// Logger is Middleware
const logger = (req, res, next) => {
  console.log(`Logger: ${req.method} request made to ${req.originalUrl} at ${new Date().toLocaleString()}`);
  next();
};

app.use(logger);
// Below Get and Post Requests - Route Handlers
app.get('/products', (req, res) => {
  res.send("Get Request");
});

app.post('/customers', (req, res) => {
  res.send("Post Request");
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});