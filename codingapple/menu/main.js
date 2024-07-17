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

const scrollAlertDiv = document.querySelector(".scroll-alert");

// 스크롤 이벤트 리스너를 추가합니다.
scrollAlertDiv.addEventListener("scroll", function () {
  // 스크롤 위치와 요소의 높이를 가져옵니다.
  const scrollTop = scrollAlertDiv.scrollTop;
  const scrollHeight = scrollAlertDiv.scrollHeight;
  const clientHeight = scrollAlertDiv.clientHeight;

  // 요소가 맨 아래에 도달했는지 확인합니다.
  if (scrollTop + clientHeight >= scrollHeight) {
    alert("글을 다 읽으셨군요!");
  }
});
