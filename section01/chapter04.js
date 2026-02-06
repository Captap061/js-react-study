// 연산자(Operator)란
// 프로그래밍에서의 다양한 연산을 위한 기호, 키워드

// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 21
let num6 = 1 + 2 * 10;
console.log(num6);

// 30
let num7 = (1 + 2) * 10;
console.log(num7);

// 3. 복합 대입 연산자
let num8 = 100;
num8 += 20;
// 120
console.log(num8);

// 4. 증감 연산자
let num9 = 1000;
console.log(++num9); // 전위 연산
console.log(num9); // 10001

console.log(num9++); // 후위 연산
console.log(num9); // 1002

// 5. 논리 연산자
let or = true || false; // 하나만 참이면 true
let and = true && false; // 2개의 값이 모두 true여야 true
let not = !true; // 반전

console.log(or, and, not); // true, false, false

// 6. 비교 연산자
// =을 2번만 쓰면 자료형까지 확인하지 않음. 그래서 3번씀.
let comp1 = 1 === 2;
let comp2 = 1 !== 2;

console.log(comp1, comp2); // false, true

let comp3 = 2 > 1; 
let comp4 = 1 < 2;
console.log(`2는 1보다 큰가? ${comp3}, 1은 2보다 작은가? ${comp4}`); // true, true

let comp5 = 2 >= 1; 
let comp6 = 1 <= 2;
console.log(`2는 1보다 크거나 같은가? ${comp5}, 1은 2보다 작거나 같은가? ${comp6}`); // true, true