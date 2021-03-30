const express = require('express');
const app = express();

const PORT = process.env.port || 3000;

app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});