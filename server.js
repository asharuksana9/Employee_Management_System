const express = require('express');
const path = require('path');

const app = express();
const PORT = 3003;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the frontend folder (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, '../frontend')));

// Route to serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/main.html'));
});

// Optional: Example API route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
