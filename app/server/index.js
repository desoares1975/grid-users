'use strict';

require('dotenv').config();

const   express = require('express'),
        app = express(),
        http = require('http'),
        Bluebird = require('bluebird');

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log('Grid User Up and Runnign!!!! on port ', process.env.PORT);
});

app.get('/', (req, res) => {
    return res.status(200).send('FU');
});


app.use('/public', express.static('public'));