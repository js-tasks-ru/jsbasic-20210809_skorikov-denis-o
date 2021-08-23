function camelize(str) {
  str = str.split("-")
  return str.map(function(item, index) {
    if (index != 0) {
      return item[0].toUpperCase() + item.slice(1);
    } else {
      return item;
    }
  }).join("")
}
