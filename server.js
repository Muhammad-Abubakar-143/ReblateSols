const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'build')));

// Handle client-side routing
app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000, () => {
 console.log('Server is listening on port 9000');
});