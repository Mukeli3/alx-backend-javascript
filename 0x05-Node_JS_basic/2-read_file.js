const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lns = data.trim().split('\n').filter((line) => line);

    if (lns.length < 2) {
      throw new Error('Cannot load the database');
    }

    const hder = lns[0].split(',');
    const students = lns.slice(1).map((line) => line.split(','));

    console.log(hder);
    console.log(`Number of sudents: ${students.length}`);

    const f = {};

    students.forEach((student) => {
      const fName = student[0];
      const field = student[3];

      if (!f[field]) {
        f[field] = [];
      }
      f[field].push(fName);
    });
    for (const [field, names] of Object.entries(f)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
