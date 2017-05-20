'use strict';

require('dotenv').config();

const   express = require('express'),
        app = express(),
        http = require('http'),
        Bluebird = require('bluebird'),
        fs = Bluebird.promisifyAll(require('fs'));

const server = http.createServer(app);

app.set('view engine', 'pug');
app.set('views', `${__base}app/server/views` );
app.get('/', (req, res) => {
    res.render('index');
});

console.log(__dirname + '/public');

app.use('/public', express.static(__dirname + '/public'));

app.get('/vendors/css/bootstrap.css', (req, res) => {
    let path = `${__base}node_modules/bootstrap/dist/css/bootstrap.min.css`;

    fs.readFileAsync(path)
    .then(data => {
        res.status(200).send(data);
    })
    .catch(e => {
        res.status(500).send(e);
    });
});

// app.get('/vendors/:folder/:file', (req, res) => {
//     let path = `${__base}node_modules/`;
//     if (req.params.file === 'bootstrap.css') {
//         path += ''
//     }

//     if(req.params.)

//     if (req.params.folder === 'js') {

//     }

//     fs.readFileAsync(path)
//     .then(data => {
//         res.status(200).send(data);
//     })
//     .catch(e => {
//         res.status(500).send(e);
//     });
// });

server.listen(process.env.PORT, () => {
    console.log('Grid User Up and Runnign!!!! on port ', process.env.PORT);
});