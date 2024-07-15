/**
 * Q1. 변수를 만들어봅시다
    내 나이와 출신지역을 자바스크립트 변수에 저장해봅시다. 
    나이는 맨날 변하니 재할당가능한 변수,
    출신지역은 바뀌지 않으니 재할당불가능한 변수에 저장해보십시오.
 */

let age = 20;
const region = "부산";

/**
 * Q3. 이자율 계산하기 

    철수는 은행에 예금을 하러 갔는데 예금 금액에 따라 이율이 달라지는 것을 보고 크게 당황했습니다.
    첫 예금액이 5만원 미만이면 이율이 연 15퍼센트,
    첫 예금액이 5만원 이상이면 이율이 연 20퍼센트라고 합니다.
    그래서 민준이는

    (1) 변수에 예금액을 넣으면
    (2) 2년 후의 총 예금액을 자동으로 콘솔창에 출력해주는 기능을 자바스크립트로 만들려고하는데

    어떻게 코드를 짜면 될까요? 

 */

var futureDeposit = 0;

//여기에 코드짜보십시오
function calPrice(money) {
  // 1년 후 금액
  let afterOneYear = 0;

  // 2년 후 금액
  let afterTwoYear = 0;

  if (money < 50000) {
    // 1년 후 금액
    afterOneYear = money * 1.15;

    // 2년 후 금액
    afterTwoYear = afterOneYear * 1.15;

    futureDeposit = afterTwoYear;
  } else {
    // 1년 후 금액
    afterOneYear = money * 1.2;

    // 2년 후 금액
    afterTwoYear = afterOneYear * 1.2;

    futureDeposit = afterTwoYear;
  }
}

calPrice(10000);
console.log(Math.round(futureDeposit));

/**
 * Q4. 커피 리필을 이상하게 해주는 곳이 있습니다. 최대한 마실 수 있는 커피양을 계산해봅시다. 
 
  방금 마신 커피의 3분의 2만큼 총 2번 리필해주는 카페가 있습니다.
  예를 들면 처음 커피를 90ml 주문하면 첫 리필은 60ml를 해주며, 그 다음 리필은 40ml를 해주는 카페입니다.
  그럼 처음 주문한 커피 양에 따라서 최대한 마실 수 있는 커피를 콘솔창에 계산해주는 코드를 작성해봅시다. 

 */

console.log("커피 문제");

function refill(coffee) {
  console.log(coffee + (coffee * 2) / 3 + (((coffee * 2) / 3) * 2) / 3);
}

refill(360);
