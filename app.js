const express = require('express');
const app = express();
const path = require('path')
const router = require('./router/index');

app.listen(8000, () => {
     console.log("Start server on port 8000!!");
});

app.use(express.static('public'));

// app.get('/', function (req, res, next) {
//      res.sendFile(__dirname+'/public/index.html');
// });

app.use(router);