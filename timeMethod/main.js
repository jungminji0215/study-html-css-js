let timerId = setInterval(getRemainTime, 1000);
let secondsLeft = 3;

function getRemainTime() {
  console.log(secondsLeft + "초 남았습니다.");
  secondsLeft--;

  if (secondsLeft < 0) {
    clearInterval(timerId); // 타이머 중지
    alert("시간이 다 되었습니다!"); // 0초가 되면 알림 표시
  }
}
