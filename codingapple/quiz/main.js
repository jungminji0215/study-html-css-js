// if/else, function 실력향상 과제

// 1. 삼육구게임

function 삼육구게임(number) {
  if (isMultipleOfThree(number)) {
    if (isMultipleOfNine(number)) {
      console.log("박수X2");
    } else {
      console.log("박수");
    }
  } else {
    console.log("통과");
  }
}

function isMultipleOfThree(number) {
  return number % 3 === 0 ? true : false;
}

function isMultipleOfNine(number) {
  return number % 9 === 0 ? true : false;
}

// 삼육구게임(11);

// 2.

function 합격했냐(subjectA, subjectB) {
  if (subjectA < 40 || subjectB < 40 || subjectA + subjectB < 120) {
    console.log("불합격");
  } else if (subjectA + subjectB >= 120) {
    console.log("합격");
  }
}

합격했냐(50, 50);
