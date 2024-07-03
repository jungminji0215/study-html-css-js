document
  .getElementById("start-button")
  .addEventListener("click", () => startGame());

document.getElementById("summit").addEventListener("click", () => getResult());

let timerId;
let secondsLeft = 3;
let randomNumber;

function getResult() {
  let inputNumber = document.getElementById("input-number").value;
  if (isCorrect(inputNumber)) {
    console.log("정답입니다.");
  } else {
    console.log("틀렸습니다.");
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
}

function hideGameRules() {
  document.getElementById("game-rules").style.display = "none";
}

function getRemainTime() {
  secondsLeft--;

  if (secondsLeft < 0) {
    clearInterval(timerId);
  }
}

function renderRemainTime() {
  document.getElementById("remain-time").innerHTML = secondsLeft;
}

function startCheckTile() {
  renderRemainTime();
  secondsLeft--;

  if (secondsLeft < 0) {
    clearInterval(timerId);

    // 3초 후에 숫자 사라지기
    document.getElementById("game-container").style.display = "none";
    document.getElementById("announcement").style.display = "block";
    secondsLeft = 3;
  }
}

function startGame() {
  document.getElementById("announcement").style.display = "none";

  // 랜덤 숫자 발행
  randomNumber = getRandomNumber();
  console.log(randomNumber);

  // 게임 규칙 숨기기
  hideGameRules();

  // 숫자 보여주기
  renderRandomNumber(randomNumber);

  timerId = setInterval(startCheckTile, 1000);
}
