const express = require('express');
const app = express();

app.get('/goodbye', (req, res) => {
    res.send('Goodbye, see you soon!');
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

