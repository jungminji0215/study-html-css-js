document.getElementById("login").addEventListener("click", () => showModal());
document.getElementById("close").addEventListener("click", () => closeModal());

document.getElementById("summit").addEventListener("click", () => checkValid());

function closeModal() {
  document.querySelector(".black-bg").classList.remove("show-modal");
}

function showModal() {
  document.querySelector(".black-bg").classList.add("show-modal");
}

function checkValid() {
  let value = document.querySelectorAll(".form-control")[0].value;
  if (!value) {
    alert("값을 입력하세요");
  }
}
