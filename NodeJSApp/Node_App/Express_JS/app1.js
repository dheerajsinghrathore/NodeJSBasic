const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route to handle POST requests
app.post('/data', (req, res) => {
    const receivedData = req.body;
    console.log('Received data:', receivedData);
    res.send('Data received successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});