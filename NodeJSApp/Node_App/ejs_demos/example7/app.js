const express = require('express');
const app = express();
app.set('view-engine', 'ejs');

let person = {name: "Dheeraj", age: 24, city: "Indore"};

app.get('/', (req, res) => {
  res.render('index.ejs', { obj: person });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});