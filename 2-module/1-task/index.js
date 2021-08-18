function sumSalary(salaries) {
  let allSalary = 0;
  for (let key in salaries) {
    if (typeof salaries[key] == 'number' && !isNaN(salaries[key]) && isFinite(salaries[key])) {
      allSalary += salaries[key]
    }
  }
  return allSalary
}
