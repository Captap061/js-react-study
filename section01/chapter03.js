// 형 변환 (Type Conversion)
// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것 

let num = 28;
let str = "3400";

const result = num + str;
console.log(result);
// 28과 3400이 이어진 "283400"이 나옴
// result의 타입은 string
console.log(typeof(result));


// 2. 명시적 형 변환
// -> 프로그래머 내장 함수 등을 이용해서 직접 형 변환을 명시

// 문자열 -> 숫자
let str1 = "900";
let strToNum1 = Number(str1);

// 901, Number
console.log(1 + strToNum1);
console.log(typeof(strToNum1));

// 숫자와 문자가 섞여있는 형태면 어떻게 될까?
let str2 = "870개";
let strToNum2 = Number(str2);


// NaN을 뱉는다. 
// NaN = Not a Number
console.log(strToNum2);


// 이럴때는 내장함수 parseInt를 사용하자
// parseInt는 문자열 앞쪽부터 숫자를 읽는다. 숫자가 아닌 문자를 만나면 거기서 멈춘다.
// 즉, "개수10개"와 같이 숫자 앞에 문자열이 있는 형태라면 parseInt를 사용하는 것은 정답이 아니다.
let str3 = "870개";
let strToNum3 = parseInt(str3);
console.log(strToNum3);
console.log(typeof(strToNum3));


// 숫자 -> 문자열
let num4 = 557;
let numToStr1 = String(num4);
console.log(numToStr1 + "입니다.");