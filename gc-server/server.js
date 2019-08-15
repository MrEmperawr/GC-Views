    
const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
var cors = require('cors');
const readFile = require('fs').readFile;

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: true} ))
app.use(cors())

app.get('/', (req, res) => {
    readFile('code-test-data.json', 'utf-8', (err, data) => {
        data = JSON.parse(data);
        res.send(data);
    })
})
const httpServer = http.createServer(app);

httpServer.listen(8080);

