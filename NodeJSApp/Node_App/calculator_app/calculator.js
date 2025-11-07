const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse URL-encoded and JSON requests (for Postman)
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/conversion", (req, res) => {
  res.sendFile(__dirname + "/conversion.html");
});

app.post("/", (req, res) => {
  let x = Number(req.body.num1);
  let y = Number(req.body.num2);

  // Validate inputs
  if (isNaN(x) || isNaN(y)) {
    return res.status(400).send("Please provide valid numbers.");
  }

  let sum = x + y;
  res.send(`The sum of ${x} and ${y} is ${sum}`);
});

app.post("/conversion", (req, res) => {
  let {amount, to} = req.body;
  amount = Number(amount);

  let conversionRates = 0;
  let currencySymbol = "";

  // Validate inputs
  if (isNaN(amount) || (to !== "USD" && to !== "EUR" && to !== "GBP")) {
    return res.status(400).send("Please provide a valid amount and target currency (USD or EUR).");
  }

  switch (to) {
    case "USD":
      conversionRates = amount / 88.28; // Example rate
      currencySymbol = "USD";
      break;
    case "EUR":
      conversionRates = amount / 102.12; // Example rate
      currencySymbol = "EUR";
      break;
    case "GBP":
      conversionRates = amount / 118.45; // Example rate
      currencySymbol = "GBP";
      break;
  }

  let str = "<h1>Conversion Result</h1>";
  str += `<p>Amount in INR: ${amount.toFixed(2)} = ${conversionRates.toFixed(2)} <b>${currencySymbol}</b></p>`;
  res.send(str);
});

const server = app.listen(port, () => {
  console.log(`Calculator app listening at http://localhost:${port}`);
});
