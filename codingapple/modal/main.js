document
  .getElementById("click-modal")
  .addEventListener("click", () => showModal());

document.getElementById("summit").addEventListener("click", () => checkValid());

function showModal() {
  document.getElementsByClassName("black-bg")[0].style.display = "block";
}

function checkValid() {
  let value = document.querySelectorAll(".form-control")[0].value;
  if (!value) {
    alert("값을 입력하세요");
  }
}
