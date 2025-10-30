const express = require("express");
const app = express();
const products = require("./products");
app.use("/api/products", products);
const port = 3000;

app.get("/api/products", (req, res) => {
    res.
});
