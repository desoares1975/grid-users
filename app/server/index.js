'use strict';

require('dotenv').config();

const   express = require('express'),
        app = express(),
        http = require('http'),
        Bluebird = require('bluebird'),
        fs = Bluebird.promisifyAll(require('fs')),
        path = require('path');

const server = http.createServer(app);

app.set('view engine', 'pug');
app.set('views', `${__base}app/server/views` );
app.get('/', (req, res) => {
    res.render('index', {'path': process.env.API});
});

app.get('/public/img/default.png', (req, res) => {
    fs.readFileAsync(`${__base}/app/server/public/img/user-default.png`)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(e => {
        res.status(500).send(e);
    });
});

app.get('/public/js/app.js', (req, res) => {
    fs.readFileAsync(`${__base}app/server/public/js/app.js`)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(e => {
        res.status(500).send(e);
    });
});

app.get('/vendors/css/bootstrap.css', (req, res) => {

    fs.readFileAsync(`${__base}node_modules/bootstrap/dist/css/bootstrap.min.css`)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(e => {
        res.status(500).send(e);
    });
});

app.get('/vendors/css/ng-table.css', (req, res) => {

    fs.readFileAsync(`${__base}node_modules/ng-table/bundles/ng-table.min.css`)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(e => {
        res.status(500).send(e);
    });
});

app.get('/vendors/js/angular.js', (req, res) => {

    fs.readFileAsync(`${__base}node_modules/angular/angular.min.js`)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(e => {
        res.status(500).send(e);
    });
});

app.get('/vendors/js/ng-table.js', (req, res) => {

    fs.readFileAsync(`${__base}node_modules/ng-table/bundles/ng-table.min.js`)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(e => {
        res.status(500).send(e);
    });
});

app.get('/vendors/js/bootstrap.js', (req, res) => {

    fs.readFileAsync(`${__base}node_modules/bootstrap/dist/js/bootstrap.min.js`)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(e => {
        res.status(500).send(e);
    });
});

app.get('/vendors/js/jquery.js', (req, res) => {

    fs.readFileAsync(`${__base}node_modules/jquery/dist/jquery.min.js`)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(e => {
        res.status(500).send(e);
    });
});

server.listen(process.env.PORT, () => {
    console.log('Grid User Up and Runnign!!!! on port ', process.env.PORT);
});