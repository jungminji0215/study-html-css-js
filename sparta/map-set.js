/*
const myMap = new Map();
myMap.set("춘식이", 3);
myMap.set("먼작귀", 5);
myMap.set("짱구", 9);

console.log(myMap.entries());

for (const entry of myMap.entries()) {
  console.log(entry);
}

myMap.size
*/

const mySet = new Set();
mySet.add("정민지");
mySet.add("강보경");

console.log(mySet.size);
console.log(mySet.has("정민지"));
console.log(mySet.has("김민지"));

for (const value of mySet.values()) {
  console.log(value);
}
