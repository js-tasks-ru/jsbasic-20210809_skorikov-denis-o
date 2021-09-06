function toggleText() {
  // let button = document.querySelector(".toggle-text-button");

  document.addEventListener('click', function(event) {

    let button = event.target.className;

    if (!button) {
      return;
    }

    let elem = document.getElementById("text");
    elem.hidden = !elem.hidden;
  }) 

}
