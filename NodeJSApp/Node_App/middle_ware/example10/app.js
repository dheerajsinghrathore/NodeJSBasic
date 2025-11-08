// Run for particular route only - middleware
const express = require("express");
const app = express();
const port = 3000;
let product = require("./product");
const { error } = require("console");

app.use(express.json());

const checkForJson = (req, res, next) => {
  if (req.headers["content-type"] === "application/json") {
    console.log("JSON request received");
    next();
  } else {
    res.status(400).send({ error: "Please send JSON data only" });
  }

  //   if (req.header("Content-Type") === "application/json") {
  //     console.log("JSON request received");
  //     next();
  //   } else {
  //     res.status(400).send({ error: "Please send JSON data only" });
  //   }


  //   if (req.is("application/json")) {
  //     console.log("JSON request received");
  //     next();
  //   } else {
  //     res.status(400).send({ message: "Please send JSON data only" });
  //   }
};

// Middleware function to log request details
app.get("/api/products", (req, res) => {
  res.send(product);
});

app.post("/api/products", checkForJson, (req, res) => {
  console.log("Post request to the products");
  let newProduct = req.body;
  newProduct.id = 100 + product.length + 1;
  product.push(newProduct);
  res.send({ message: "Product added successfully", product: newProduct });
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
