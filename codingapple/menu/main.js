document
  .getElementById("nav-button")
  .addEventListener("click", () => showSubNav());

function showSubNav() {
  document.getElementById("sub-nav").style.display = "block";
  console.log("서브 네브");
}

window.addEventListener("scroll", function () {
  // 만약 window.scrollY 값이 100 이상이면
  let position = window.scrollY;

  // 폰트 사이즈 줄이기
  document.querySelector(".navbar-brand").style.fontSize =
    position > 100 ? "30px" : "50px";
});
