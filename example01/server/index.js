const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../client/dist/home.html`));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../client/dist/about.html`));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
