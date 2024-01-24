function numKey(key) {
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
  operator = undefined;
  display.textContent = 0;
}

function backspaceKey() {
  currentNum = numCheck();
  if (currentNum === undefined || currentNum.length === 1) {
    display.textContent = 0;
    currentNum = undefined;
    numAssign(currentNum);
  } else if (currentNum.length > 1) {
    array = [...currentNum];
    array.splice(-1, 1);
    currentNum = array.join("");
    display.textContent = currentNum;
    numAssign(currentNum);
  }
}

function decimalKey() {
  currentNum = numCheck();
  if (currentNum === undefined) {
    numAssign("0.");
    display.textContent = "0.";
  } else if (!currentNum.includes(".")) {
    numKey(".");
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

function assignOperator(key) {
  if (operator === undefined && firstNum == undefined) {
    operator = key;
    firstNum = 0;
  } else if (operator === undefined) {
    operator = key;
  } else {
    operate();
    operator = key;
  }
}

function operate() {
  console.log("operate");
  if (
    firstNum != undefined &&
    secondNum != undefined &&
    operator != undefined
  ) {
    switch (operator) {
      case "+":
        result = +firstNum + +secondNum;
        assignResult(result);
        break;
      case "-":
        console.log(`${firstNum} - ${secondNum}`);
        result = +firstNum - +secondNum;
        console.log(result);
        assignResult(result);
        break;
      case "*":
        result = +firstNum * +secondNum;
        assignResult(result);
        break;
      case "/":
        if (firstNum == 0 || secondNum == 0) {
          display.textContent = "ERROR";
          firstNum = undefined;
          secondNum = undefined;
          operator = undefined;
        } else {
          result = +firstNum / +secondNum;
          assignResult(result);
        }
        break;
    }
  }
}

function assignResult(num) {
  firstNum = num;
  secondNum = undefined;
  display.textContent = firstNum;
}

function changeSign() {
  currentNum = numCheck();
  if (currentNum !== undefined) {
    currentNum = currentNum * -1;
    display.textContent = currentNum;
    numAssign(currentNum);
  }
}

let firstNum = undefined;
let secondNum = undefined;
let operator = undefined;

display = document.querySelector(".display");
