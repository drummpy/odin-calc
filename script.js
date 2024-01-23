function numKey(key) {
  console.log(key);
  currentNum = numCheck();
  if (currentNum === undefined) {
    currentNum = key;
  } else {
    if (currentNum.length < 21) {
      currentNum = currentNum + key;
    }
  }
  display.textContent = currentNum;
  numAssign(currentNum);
}

function acKey() {
  firstNum = undefined;
  secondNum = undefined;
  display.textContent = 0;
  console.log("AC Key");
}

function backspaceKey() {
  currentNum = numCheck();
  if (currentNum === undefined || currentNum.length === 1) {
    console.log("empty");
    display.textContent = 0;
    currentNum = undefined;
    numAssign(currentNum);
  } else if (currentNum.length > 1) {
    array = [...currentNum];
    array.splice(-1, 1);
    currentNum = array.join("");
    console.log(array);
    display.textContent = currentNum;
    numAssign(currentNum);
  }
}

function numCheck() {
  if (operator === undefined) {
    return firstNum;
  } else {
    return secondNum;
  }
}

function numAssign(num) {
  if (operator === undefined) {
    firstNum = num;
  } else {
    secondNum = num;
  }
}

let firstNum = undefined;
let secondNum = undefined;
let operator = undefined;

display = document.querySelector(".display");
