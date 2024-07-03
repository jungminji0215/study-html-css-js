document
  .getElementById("start-button")
  .addEventListener("click", () => startGame());

document.getElementById("summit").addEventListener("click", () => getResult());

let timerId;
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

let secondsLeft = 3;

function renderRandomNumber(randomNumber) {
  setTimeout(tick, 1000);

  document.getElementById("game-container").style.display = "block";
  document.getElementById("show-number").innerHTML = randomNumber;
  document.getElementById("remain-time").innerHTML = secondsLeft;
}

function tick() {
  secondsLeft--;
  document.getElementById("remain-time").innerHTML = secondsLeft;

  timerId = setTimeout(tick, 1000);
  if (secondsLeft < 1) {
    document.getElementById("game-container").style.display = "none";
    clearTimeout(timerId);
    secondsLeft = 3;
  }
}

function startGame() {
  // 랜덤 숫자 발행
  randomNumber = getRandomNumber();
  console.log(randomNumber);

  // 숫자 보여주기
  renderRandomNumber(randomNumber);
}
