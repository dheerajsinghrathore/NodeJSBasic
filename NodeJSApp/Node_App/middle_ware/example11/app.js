// Run for particular route only - middleware
const express = require("express");
const app = express();
const port = 3000;
let product = require("./product");
const { error } = require("console");

app.use(express.json());

const protected = (req, res, next) => {
  let userDetails = {
    name: "Dheeraj",
    username: "admin",
    password: "admin@123",
    isLoggedIn: true,
  };
  if (userDetails && userDetails.isLoggedIn) {
    next();
  } else {
    res.status(401).send({ error: "Unauthorized user" });
  }
};


const isAdmin = (req, res, next) => {
  let userDetails = {
    name: "Dheeraj",
    username: "admin",
    password: "admin@123",
    isAdmin: true,
  };
  if (userDetails && userDetails.isAdmin) {
    next();
  } else {
    res.status(403).send({ error: "Forbidden: Admins only" });
  }
};

// Middleware function to log request details
app.get("/api/products", (req, res) => {
  res.send(product);
});

app.post("/api/products", protected, (req, res) => {
  console.log("Post request to the products");
  let newProduct = req.body;
  newProduct.id = 100 + product.length + 1;
  product.push(newProduct);
  res.send({ message: "Product added successfully", product: newProduct });
});

app.delete("/api/products/:id", isAdmin, (req, res) => {
  let prodId = parseInt(req.params.id);
  let index = product.findIndex((p) => p.id === prodId);
  if (index === -1) {
    return res.status(404).send({ error: "Product not found" });
  }
  let [deletedProd] = product.splice(index, 1);
  res.send({ message: "Product deleted successfully", deletedProduct: deletedProd });
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
