// Run for one middleware and use them in the application
const express = require("express");
const app = express();
const port = 3000;
// Logger is Middleware
const logger = (req, res, next) => {
  console.log(`Logger executed`);
  next();
};

app.use("/products", logger);
//Here logger will only be executed for /products routes
// Below Get Requests - Route Handlers
app.get("/products", (req, res) => {
  res.send(`You send GET products`);
});

app.get("/customers", (req, res) => {
  res.send(`You send GET customers`);
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
