const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve('frontend/public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('frontend/public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
