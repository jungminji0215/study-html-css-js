document.querySelector(".slide-1").addEventListener("click", moveSlideA);
document.querySelector(".slide-2").addEventListener("click", moveSlideB);
document.querySelector(".slide-3").addEventListener("click", moveSlideC);

function moveSlideA() {
  document.querySelector(".slid-container").style.transform = "translateX(0)";
}

function moveSlideB() {
  document.querySelector(".slid-container").style.transform =
    "translateX(-100vw)";
}

function moveSlideC() {
  document.querySelector(".slid-container").style.transform =
    "translateX(-200vw)";
}
