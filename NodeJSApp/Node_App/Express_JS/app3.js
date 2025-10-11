const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('<h2>Hello World!</h2>');
    res.send('This is my second response'); // This will cause an error
});
const server = app.listen(port, () => {
    console.log(`Server is running at ${server.address().port}`);
});

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));