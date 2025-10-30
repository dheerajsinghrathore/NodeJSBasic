const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.post('/login', (req, res) => {
  console.log('Login request received:', req.body);
  res.send('Login successful');
});
app.post('/logout', (req, res) => {
  console.log('User logged out');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});