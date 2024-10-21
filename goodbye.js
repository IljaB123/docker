const express = require('express');
const app = express();
const port = 3000;

app.get('/goodbye', (req, res) => {
  res.send('Goodbye, see you soon!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
