function makeDiagonalRed(table) {
  for (index in Array.from(table.rows)) {
    table.rows[index].cells[index].style.backgroundColor = 'red';
  }
}
