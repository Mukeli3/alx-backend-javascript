const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lns = data.trim().split('\n');
      const students = lns.slice(1).filter((line) => line);

      console.log(`Number of students: ${students.length}`);

      const fds = {};

      students.forEach((stud) => {
        const [fname, , , fd] = stud.split(',');

        if (!fds[fd]) {
          fds[fd] = [];
        }
        fds[fd].push(fname);
      });
      Object.keys(fds).forEach((fd) => {
        console.log(`Number of students in ${fd}: ${fds[fd].length}. List: ${fds[fd].join(', ')}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
