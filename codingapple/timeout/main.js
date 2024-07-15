let testB = setInterval(test, 1000);

let count = 5;

function test() {
  count--;

  document.querySelector(".second").innerHTML = count;

  if (count < 0) {
    document.querySelector(".alert-danger").style.display = "none";
    clearTimeout(testB);
  }
}
