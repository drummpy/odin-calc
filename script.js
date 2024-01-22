function numKey(key) {
  console.log(key);
  if (firstNum === undefined) {
    firstNum = key;
  } else {
    if (firstNum.length < 21) {
      firstNum = firstNum + key;
    }
  }
  display.textContent = firstNum;
}

function acKey() {
  firstNum = undefined;
  secondNum = undefined;
  display.textContent = 0;
  console.log("AC Key");
}

function backspaceKey() {
  if (firstNum === undefined || firstNum.length === 1) {
    console.log("empty");
    display.textContent = 0;
    firstNum = undefined;
  } else if (firstNum.length > 1) {
    array = [...firstNum];
    array.splice(-1, 1);
    firstNum = array.join("");
    console.log(array);
    display.textContent = firstNum;
  }
}

let firstNum = undefined;
let secondNum = undefined;

display = document.querySelector(".display");
