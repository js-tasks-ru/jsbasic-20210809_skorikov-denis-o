function highlight(table) {
  tBody = table.tBodies[0]

  for (row of tBody.rows) {
    row.cells[3].dataset.available === "true" ? row.cells[3].classList.add("available") : row.cells[3].classList.add("unavailable");
    if (row.cells[3].dataset.available === "true") {
      row.classList.add("available");
    } else if (row.cells[3].dataset.available === "false") {
      row.classList.add("unavailable");
    } else {
      row.setAttribute("hidden", "true");
    }

    if (row.cells[2].textContent === "m") {
      row.classList.add("male");
    } else {
      row.classList.add("female");
    }

    if (Number.parseInt(row.cells[1].textContent) <= 18) {
      row.style.textDecoration = "line-through"
    }

  }

}
