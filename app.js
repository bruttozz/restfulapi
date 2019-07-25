const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('We are on homepage');
});

app.listen(3000);
