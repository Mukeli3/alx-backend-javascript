const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  const parseUrl = url.parse(req.url, true);

  if (parseUrl.pname === '/') {
    res.end('Hello Holberton School!');
  } else if (parseUrl.pname === '/students') {
    try {
      const dbFile = process.argv[2] || 'database.csv';

      let consoleOutput = '';
      const origLog = console.log;
      console.log = (message) => {
        consoleOutput += `${message}\n`;
      };

      await countStudents(dbFile);

      consoleOutput = consoleOutput.trim();

      console.log = origLog;

      res.end(`This is the list of our students\n${consoleOutput}`);
    } catch (error) {
      res.statusCode = 400;
      res.end(`This is the list of our students\n${error.message}`);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

// app.listen(1245); Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
