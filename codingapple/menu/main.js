document
  .getElementById("nav-button")
  .addEventListener("click", (event) => showSubNav(event));

function showSubNav() {
  document.getElementById("sub-nav").style.display = "block";
  console.log("서브 네브");
}
