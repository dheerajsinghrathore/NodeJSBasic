const express = require("express");
const app = express();
const prodRouter = require("./product_route");
const empRouter = require("./employee_routes");

app.use(express.json());
app.use("/api/products", prodRouter);
app.use("/api/employees", empRouter);

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${server.address().port}`);
});
