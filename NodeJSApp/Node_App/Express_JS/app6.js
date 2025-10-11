const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.sendStatus(404);      // Send a 404 Not Found status code
});
const server = app.listen(port, () => {
  console.log(`Server is running at ${server.address().port}`);
});

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
