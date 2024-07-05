// backend/index.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')));

const templates = require('./data/templates.json');

app.get('/api/templates', (req, res) => {
  res.json(templates);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
