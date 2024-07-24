/** 1번 */
var 사람 = {
  name: "손흥민",
  sayHi: function () {
    console.log(`안녕 나는 ${this.name}`);
  },
};

사람.sayHi(); //안녕 나는 손흥민

/** 2번 */
var 자료 = {
  data: [1, 2, 3, 4, 5],
  전부더하기: function () {
    let sum = 0;
    this.data.forEach((num) => {
      sum += num;
    });
    console.log(sum);
  },
};
자료.전부더하기();

/** 3번 */
