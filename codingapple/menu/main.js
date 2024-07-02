document
  .getElementById("nav-button")
  .addEventListener("click", () => showSubNav());

function showSubNav() {
  document.getElementById("sub-nav").style.display = "block";
  console.log("서브 네브");
}
