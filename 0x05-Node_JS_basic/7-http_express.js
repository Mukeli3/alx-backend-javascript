const express = require('express');

const app = express();
const countStudents = require('./3-read_file_async');

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const dbFile = process.argv[2];

  countStudents(dbFile)
    .then((students) => {
      res.send(`This is the list of our students\n${students}`);
    })
    .catch((err) => {
      res.status(500).send(`Error: ${err.message}`);
    });
});

app.listen(1245);

module.exports = app;
