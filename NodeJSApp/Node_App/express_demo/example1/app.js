const express = require("express");
const app = express();
const port = 3000;
const productRoutes = require("./products");
app.use(express.json());

// Sample route
app.post("/api/product", (req, res) => {
  const product = req.body;
  product.id = 100 + productRoutes.length + 1; // Simulate ID assignment
  productRoutes.push(product);
  console.log("Product data received:", product);
  res.send({ message: "Product created successfully", id: product.id });
});
app.get("/api/products", (req, res) => {
  res.send(productRoutes);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
