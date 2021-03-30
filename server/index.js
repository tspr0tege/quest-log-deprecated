const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const index = path.resolve(__dirname, '../client/src/index.js');

app.use('/', express.static(path.resolve(__dirname, '../client/src'), {index: 'index.html'}));

app.get('/', (req, res) => {
  res.send();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})