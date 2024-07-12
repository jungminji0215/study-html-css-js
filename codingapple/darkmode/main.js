// 버튼을 클릭하면
// 배경 : 검정 | 글자 : 흰색
// 배경 : 흰색 | 글자 : 검정

document.querySelector(".dark-mode").addEventListener("click", darkMode);

function darkMode() {
  document.body.classList.toggle("bg-dark");

  if (document.body.classList.contains("bg-dark")) {
    document.querySelector(".dark-mode").innerHTML = "라이트";
  } else {
    document.querySelector(".dark-mode").innerHTML = "다크";
  }
}
