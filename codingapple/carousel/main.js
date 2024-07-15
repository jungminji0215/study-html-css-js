document.querySelector(".slide-1").addEventListener("click", moveSlideA);
document.querySelector(".slide-2").addEventListener("click", moveSlideB);
document.querySelector(".slide-3").addEventListener("click", moveSlideC);
document.querySelector(".previous").addEventListener("click", previous);
document.querySelector(".next").addEventListener("click", next);

let position = 0;

function moveSlideA() {
  document.querySelector(".slid-container").style.transform = "translateX(0vw)";
  position = 0;
}

function moveSlideB() {
  document.querySelector(".slid-container").style.transform =
    "translateX(-100vw)";
  position = 1;
}

function moveSlideC() {
  document.querySelector(".slid-container").style.transform =
    "translateX(-200vw)";
  position = 2;
}

function previous() {
  document.querySelector(".slid-container").style.transform = `translateX(-${
    position - 1
  }00vw)`;
  position--;
}

function next() {
  document.querySelector(".slid-container").style.transform = `translateX(-${
    position + 1
  }00vw)`;
  position++;
}
