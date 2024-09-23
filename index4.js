// DAY04
// 미션1. 배열, 객체, 반복문
let foods = [
  { name: "Burger", calories: 800 },
  { name: "Apple", calories: 52 },
  { name: "Pizza", calories: 550 },
  { name: "Salad", calories: 150 },
];

for (let ind = 0; ind < foods.length; ind++) {
  if (foods[ind].calories >= 500) {
    console.log(foods[ind].name);
  }
}

// 미션2. 생성자 함수
function Animal(kind, sound) {
  this.kind = kind;
  this.sound = sound;
  this.makesound = () => {
    console.log(`${kind}이(가) ${sound} 소리를 냅니다.`);
  };
}

const dog = new Animal("개", "멍멍");
console.log(dog.makesound());

const cat = new Animal("고양이", "야옹");
console.log(cat.makesound());
