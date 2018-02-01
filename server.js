const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();

app.use('/api', proxy({target: 'http://devapp.telenotes.com', changeOrigin: true, secure: false}));

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);
