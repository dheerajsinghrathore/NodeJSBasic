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

app.get("/api/products/:pid", (req, res) => {
    // console.log(req.params.pid);
    // res.json(arr);
    let prodId = Number(req.params.pid);
    let singleProduct = products.find((item) => item.id === Number(prodId));
    if (isNaN(prodId)) {
        return res.status(400).send("Invalid Product ID");
    }
    if (!singleProduct) {
        return res.status(404).send("Product Does Not Exist");
    }
    return res.json(singleProduct);
});

const server = app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
