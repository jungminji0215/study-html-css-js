document.getElementById("login").addEventListener("click", () => showModal());
document.getElementById("close").addEventListener("click", () => closeModal());

document
  .getElementById("send")
  .addEventListener("click", (event) => checkValid(event));

function closeModal() {
  document.querySelector(".black-bg").classList.remove("show-modal");
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
