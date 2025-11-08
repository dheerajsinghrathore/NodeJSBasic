// Run for one middleware and use them in the application
const express = require("express");
const app = express();
const port = 3000;
// Logger is Middleware
const logger1 = (req, res, next) => {
  console.log(`Logger1 executed`);
  next();
};
const logger2 = (req, res, next) => {
  console.log(`Logger2 executed`);
  next();
};
app.use(logger1);
app.use("/products", logger2);
app.get("/", (req, res) => {
  res.send(`You send GET request to Home`);
});
//Here logger will only be executed for /products routes
// Below Get Requests - Route Handlers
app.get("/products", (req, res) => {
  res.send(`You send GET products`);
});

app.post("/", (req, res) => {
  res.send(`You send POST Request to Home route`);
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
