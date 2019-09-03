const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up...' });
});

const server = require('./server.js');

const port = 8000;
server.listen(port, () => console.log(`\n API on port ${port}\n`));

