document
  .getElementById("start-button")
  .addEventListener("click", () => startGame());

document.getElementById("summit").addEventListener("click", () => getResult());

let timerId;
let randomNumber;
let secondsLeft = 3;

function initGame() {
  secondsLeft = 3;
  document.getElementById("result").innerHTML = "";
}

function getResult() {
  let inputNumber = document.getElementById("input-number").value;
  if (isCorrect(inputNumber)) {
    document.getElementById("result").innerHTML = "정답입니다.";
  } else {
    document.getElementById("result").innerHTML = "틀렸습니다.";
  }
}

function isCorrect(inputNumber) {
  return randomNumber == inputNumber;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 9000) + 1000;
}

function renderRandomNumber(randomNumber) {
  document.getElementById("game-container").style.display = "block";
  document.getElementById("show-number").innerHTML = randomNumber;
  setTimeout(countdown, 1000);
  document.getElementById("remain-time").innerHTML = secondsLeft;
}

function countdown() {
  secondsLeft--;
  document.getElementById("remain-time").innerHTML = secondsLeft;

  timerId = setTimeout(countdown, 1000);

  if (secondsLeft < 1) {
    document.getElementById("game-container").style.display = "none";
    clearTimeout(timerId);
  }
}

function startGame() {
  // 게임 초기화
  initGame();

  // 랜덤 숫자 발행
  randomNumber = getRandomNumber();
  console.log(randomNumber);

  // 숫자 보여주기
  renderRandomNumber(randomNumber);
}
