const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

// Serve static files from the .well-known folder
app.use('/.well-known', express.static(path.join(__dirname, '.well-known')));

// Handle /product/:id route
app.get('/product/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`Product ID: ${productId}`);
});

// Default route
app.get('/', (req, res) => {
    res.send('Deep Link Server is running!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});