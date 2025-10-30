const express = require("express");
const app = express();
const products = require("./products");
app.use("/api/products", products);
const port = 3000;

app.get("/api/products", (req, res) => {
  res.send("Home Route");
});

app.get("/api/products/list", (req, res) => {
    let arr = products.map((item) => {
        return item.name;
    });
    res.json(arr);
});

app.get("/", (req, res) => {
  res.send("Home Route");
});

const server = app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
