const inputField = document.querySelector(".inputField");
let btn1 = document.querySelector(".one");
let btn2 = document.querySelector(".two");
let btn3 = document.querySelector(".three");
let btn4 = document.querySelector(".four");
let btn5 = document.querySelector(".five");
let btn6 = document.querySelector(".six");
let btn7 = document.querySelector(".seven");
let btn8 = document.querySelector(".eight");
let btn9 = document.querySelector(".nine");
let btn0 = document.querySelector(".zero");
let btnAdd = document.querySelector(".add");
let btnSubtract = document.querySelector(".subtract");
let btnMultiply = document.querySelector(".multiply");
let btnDivide = document.querySelector(".divide");
const btnEquals = document.querySelector(".equals");
const btnClear = document.querySelector(".clear");

let inputValues;
let inputPlaceholder;

let inputValueAfter1;
let inputValueAfter2;
let inputValueAfter3;
let inputValueAfter4;
let inputValueAfter5;
let inputValueAfter6;
let inputValueAfter7;
let inputValueAfter8;
let inputValueAfter9;
let inputValueAfter0;
let inputValueAdd1;
let inputValueSubtract1;
let inputValueMultiply1;
let inputValueDivide1;
let inputValueAdd2;
let inputValueSubtract2;
let inputValueMultiply2;
let inputValueDivide2;
let addSum;
let subtractSum;
let multiplySum;
let divideSum;

function doTheWork(nameOfVar) {
  nameOfVar = inputField.value;
  inputField.value = "";
}

const turnToArray = function () {
  inputPlaceholder = inputField.value;
  let myFunc = (num) => Number(num);
  inputValues = Array.from(String(inputPlaceholder), myFunc);
  console.log(inputValues);
};

btn1.addEventListener("click", function () {
  btn1.value = 1;
  inputField.value += btn1.value;
  inputValueAfter1 = inputField.value;
  console.log(inputField.value);
  console.log(typeof btn1);
  //   turnToArray();
});

btn2.addEventListener("click", function () {
  btn2.value = 2;
  inputField.value += btn2.value;
  inputValueAfter2 = inputField.value;
  console.log(inputField.value);
  console.log(typeof btn2);
  //   turnToArray();
});

btn3.addEventListener("click", function () {
  btn3.value = 3;
  inputField.value += btn3.value;
  inputValueAfter3 = inputField.value;
  console.log(inputField.value);
  console.log(typeof btn3);
  //   turnToArray();
});

btn4.addEventListener("click", function () {
  btn4.value = 4;
  inputField.value += btn4.value;
  inputValueAfter4 = inputField.value;
  console.log(inputField.value);
  console.log(typeof btn4);
  //   turnToArray();
});

btn5.addEventListener("click", function () {
  btn5.value = 5;
  inputField.value += btn5.value;
  inputValueAfter5 = inputField.value;
  console.log(inputField.value);
  console.log(typeof btn5);
  //   turnToArray();
});

btn6.addEventListener("click", function () {
  btn6.value = 6;
  inputField.value += btn6.value;
  inputValueAfter6 = inputField.value;
  console.log(inputField.value);
  console.log(typeof btn6);
  //   turnToArray();
});

btn7.addEventListener("click", function () {
  btn7.value = 7;
  inputField.value += btn7.value;
  inputValueAfter7 = inputField.value;
  console.log(inputField.value);
  console.log(typeof btn7);
  //   turnToArray();
});

btn8.addEventListener("click", function () {
  btn8.value = 8;
  inputField.value += btn8.value;
  inputValueAfter8 = inputField.value;
  console.log(inputField.value);
  console.log(typeof btn8);
  //   turnToArray();
});

btn9.addEventListener("click", function () {
  btn9.value = 9;
  inputField.value += btn9.value;
  inputValueAfter9 = inputField.value;
  console.log(inputField.value);
  console.log(typeof btn9);
  //   turnToArray();
});

btn0.addEventListener("click", function () {
  btn0.value = 0;
  inputField.value += btn0.value;
  inputValueAfter0 = inputField.value;
  console.log(inputField.value);
  console.log(typeof btn0);
  //   turnToArray();
});

btnAdd.addEventListener("click", function () {
  inputValueAdd1 = inputField.value;
  inputField.value = "";
  console.log(inputValueAdd1);
});

btnSubtract.addEventListener("click", function () {
  inputValueSubtract1 = inputField.value;
  inputField.value = "";
  console.log(inputValueSubtract1);
});

btnMultiply.addEventListener("click", function () {
  inputValueMultiply1 = inputField.value;
  inputField.value = "";
  console.log(inputValueMultiply1);
});

btnDivide.addEventListener("click", function () {
  inputValueDivide1 = inputField.value;
  inputField.value = "";
  console.log(inputValueDivide1);
});

btnEquals.addEventListener("click", function () {
  if (inputValueAdd1) {
    inputValueAdd2 = Number(inputField.value);
    inputField.value = "";
    console.log(typeof inputValueAdd2);
    inputField.value = Number(inputValueAdd1) + inputValueAdd2;
    console.log(inputField.value);
  } else if (inputValueSubtract1) {
    inputValueSubtract2 = Number(inputField.value);
    inputField.value = "";
    inputField.value = Number(inputValueSubtract1) - inputValueSubtract2;
  } else if (inputValueMultiply1) {
    inputValueMultiply2 = Number(inputField.value);
    inputField.value = "";
    inputField.value = Number(inputValueMultiply1) * inputValueMultiply2;
  } else if (inputValueDivide1) {
    inputValueDivide2 = Number(inputField.value);
    inputField.value = "";
    inputField.value = Number(inputValueDivide1) / inputValueDivide2;
  } else {
    console.log("Something went wrong :(");
  }
});

btnClear.addEventListener("click", function () {
  inputField.value = "";
});
