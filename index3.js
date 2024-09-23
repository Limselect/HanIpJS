// DAY3
// 미션1. 화살표 함수 작성하기
multiply = (num1, num2) => console.log(num1 * num2);

multiply(3, 4);

// 미션2. 함수 작성하기
const book = {
  title: "돈키호테",
  editor: "김경식",

  getSummary: function () {
    return `읽은 책 제목이 뭡니까? ${this.title}... 작가는요? 엮은이는 아는데 ${this.editor}씨...`;
  },
};

console.log(book.getSummary());

// 미션3. 스코프와 함수
nums = (nums1, nums2) => {
  add = (nums3) => {
    return nums3 + 5;
  };
  return nums1 + add(nums2);
};

console.log(nums(3, 7));
console.log(nums(10, 5));

// 다른 풀이
numt = (numt1, numt2) => {
  return numt2 + 5 + numt1;
};

console.log(numt(3, 7));
console.log(numt(10, 5));
