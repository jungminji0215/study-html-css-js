document
  .getElementById("alert-btn-id")
  .addEventListener("click", () => alertButton("아이디를 입력하세요."));
document
  .getElementById("alert-btn-pw")
  .addEventListener("click", () => alertButton("비번 입력하세요."));

function alertButton(message) {
  document.getElementById("alert-message").innerHTML = message;
}
