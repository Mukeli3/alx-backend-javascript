export default function createIteratorObject(report) {
  const employees = [];

  for (const depart of Object.values(report.allEmployees)) {
    employees.push(...depart);
  }
  return employees[Symbol.iterator]();
}
