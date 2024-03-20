const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow CORS for all routes

// Endpoint to fetch text file content
app.get('/example', (req, res) => {
  res.sendFile(path.join(__dirname, 'example.txt'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
