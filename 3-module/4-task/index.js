function showSalary(users, age) {
  let result = users.filter(item => item.age <= age)

  result.reduce((item, next_item) => (item += `${next_item.name}, ${next_item.balance}\n`), '')
  return result.reduce((item, next_item) => (item += `${next_item.name}, ${next_item.balance}\n`), '').slice(0,-1)
}
