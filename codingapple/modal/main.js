document.getElementById("login").addEventListener("click", () => showModal());
document.getElementById("close").addEventListener("click", () => closeModal());
document
  .querySelector(".black-bg")
  .addEventListener("click", (e) => closeModal(e));

document
  .getElementById("send")
  .addEventListener("click", (event) => checkValid(event));

document.querySelector(".navbar-toggler").addEventListener("click", toggleMode);

function toggleMode() {
  if (
    window.getComputedStyle(document.querySelector(".badge")).color == "white"
  ) {
    document.querySelector(".badge").classList.add("bg-dark");
  }

  if (
    window.getComputedStyle(document.querySelector(".badge")).color == "white"
  ) {
    document.querySelector(".badge").classList.remove("bg-dark");
  }
}

function closeModal(e) {
  if (e.target === document.querySelector(".black-bg")) {
    document.querySelector(".black-bg").classList.remove("show-modal");
  }
}

function showModal() {
  document.querySelector(".black-bg").classList.add("show-modal");
}

// 전송 누르면 아이디/비번 입력란 둘 다 공백검사
// 비번이 6자 미만이면 더 길게 입력하라고 안내문 띄우기
function checkValid(event) {
  if (document.getElementById("email").value == "") {
    alert("이메일을 입력하세요");
    event.preventDefault();
  }

  if (document.getElementById("password").value == "") {
    alert("비번을 입력하세요");
    event.preventDefault();
  }

  if (document.getElementById("password").value.length < 6) {
    alert("비번은 6자 이상 입력하세요.");
    event.preventDefault();
  }
}
