const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.use('/api', proxy({target: 'http://devapp.telenotes.com', changeOrigin: true, secure: false}));

app.listen(process.env.PORT || 8080);
