const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
  destination: 'avatars/',
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
})

var upload = multer({ storage })

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/images', express.static('images'));

app.post('/upload', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.status(200).send(req.file);
});

app.get('/avatars/:file', (req, res) => {
  console.log(req.params.file);
  fs.readFile(path.resolve(__dirname, `../avatars/${req.params.file}`), (err, content) => {
    if (err) {
      console.log(err);
      res.status(400).send();
    }
    res.send(content);
  });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
