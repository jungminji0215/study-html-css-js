document.getElementById("alert").addEventListener("click", () => alert());
document
  .getElementById("alert-close")
  .addEventListener("click", () => alertClose());

function alert() {
  document.getElementById("alert-box").style.display = "block";
}

function alertClose() {
  document.getElementById("alert-box").style.display = "none";
}
