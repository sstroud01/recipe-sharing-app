const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Your main API route
app.get('/api', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

// You can add more routes later, like /api/recipes, etc.

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Recipe API server running on port ${PORT}`);
});

module.exports = app;