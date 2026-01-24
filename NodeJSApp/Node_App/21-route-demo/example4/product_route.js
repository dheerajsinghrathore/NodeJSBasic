const express = require("express");
const products = require("./products");
const prodRouter = express.Router();
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl} - ${new Date().toISOString()}`);
  next();
};

prodRouter.use(logger);   // Apply logger middleware to all routes

// GET /api/products
prodRouter.get("/", (req, res) => {
  res.send(products);
});

// GET /api/products/:productId
prodRouter.get("/:productId", (req, res) => {
  const productId = parseInt(req.params.productId, 10);
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.send(product);
  } else {
    res.status(400).send({ error: "Product not found" });
  }
});

// POST /api/products
prodRouter.post("/", (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: "Request body is required" });
  }
  const newProduct = req.body;
  newProduct.id = 100 + products.length + 1; // Simple ID assignment
  products.push(newProduct);
  res.status(201).send({
    message: "Product created",
    product: newProduct,
    id: newProduct.id,
  });
});

module.exports = prodRouter;
