const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
//  use is a method to mount the specified middleware function(s) at the path which is being specified.
// This middleware read POST request body and parse it as JSON and stores it in req.body
app.use(express.json());

// Sample route
app.post('/login', (req, res) => {
  console.log('Login request received:', req.body);
  const data = req.body;
  res.send('Login successful' + JSON.stringify(data));
});
app.post('/logout', (req, res) => {
  console.log('User logged out');
  res.send('Logout successful');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});