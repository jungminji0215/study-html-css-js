/*
function callFunction(func) {
  func();
}

const sayHello = function () {
  console.log("Hello");
};

callFunction(sayHello);
*/

/*
function createAdder(num) {
  return function (x) {
    return x + num;
  };
}

const addFive = createAdder(5);
console.log(addFive(10));
*/

/*
const person = {
  name: "민지",
  age: 20,
  sayHello: () => {
    console.log(`안녕 내 이름은 ${this.name}`);
  },
};

person.sayHello();
*/

/*
const myArr = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  },
];

console.log(myArr[0](1, 3));
*/

function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

function add(x, y) {
  return x + y;
}

const multiplyByTwo = multiplyBy(2);
const multiplyByThree = multiplyBy(3);
