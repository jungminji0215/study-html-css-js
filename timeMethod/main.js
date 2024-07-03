// let timerId = setInterval(getRemainTime, 1000);
// let secondsLeft = 3;

// function getRemainTime() {
//   console.log(secondsLeft + "초 남았습니다.");
//   secondsLeft--;

//   if (secondsLeft < 0) {
//     clearInterval(timerId); // 타이머 중지
//     console.log("sf");
//   }
// }

let timerId = setTimeout(tick, 1000);
let countNumber = 3;

function tick() {
  console.log(countNumber);
  countNumber--;
  timerId = setTimeout(tick, 1000);
  if (countNumber < 1) {
    clearTimeout(timerId);
    countNumber = 3;
  }
}
