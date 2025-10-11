const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send('<h2>Hello World.,.,.,.!</h2>');
});
const server = app.listen(port, () => {
    console.log(`Server is running at ${server.address().port}`);
});

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));