const express = require('express');
const app = express();
const port = 3000;
// Logger is Middleware
const logger = (req, res, next) => {
  console.log(`${req.method} request made to ${req.url} at ${new Date().toLocaleString()}`);
  next();
};

app.use(logger);
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
