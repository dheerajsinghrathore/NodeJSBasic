const express = require("express");
const app = express();
const port = 3000;
const productRoutes = require("./products");

// Sample route
app.delete("/api/product/:productId", (req, res) => {
  let productId = parseInt(req.params.productId);
  let index = productRoutes.findIndex((p) => p.id === productId);
  if (index !== -1) {
    let [deletedProd] = productRoutes.splice(index, 1);
    console.log(`Product with ID ${productId} deleted.`);
    res.send({ message: `Product with ID ${deletedProd.id} deleted successfully` });
  } else {
    res.status(404).send({ message: `Product with ID ${productId} not found` });
  }
});
app.get("/api/products", (req, res) => {
  res.send(productRoutes);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
