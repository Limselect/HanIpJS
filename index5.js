let person = {
  name: "홍길동",
  age: 25,
  height: 180,
};

// 1. Object.keys 활용

console.log(Object.keys(person));
// 출력: ["name", "age", "height"]

let arr = Object.keys(person);

for (let i = 0; i < arr.length; i++) {
  let key = arr[i];
  console.log(`${key}: ${person[key]}`);
}
