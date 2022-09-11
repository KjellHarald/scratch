let show = document.getElementById("dis-input");
let input;
let second;
let operator;
let state = "lowercase";

function casesetting(c) {
  if (state !== "lowercase") {
    state = "uppercase";
  } else {
    state = "lowercase";
  }
}

function layoutLowercase(key) {
  if (!isNaN(key)) {
    fornumbers(key=key);
    console.log(key);
  } else if (key === "+") {
    operator = "+";
  } else {
    input = input + key;
    show.textContent = input;
  }
}

function fornumbers(key){
  if (input === undefined && operator === undefined) {
    input = key;
  } else if (!isNaN(input) && operator === undefined) {
    input = input + "" + key;
  }

  if (operator !== undefined && input >= 1 || second >= 1) {
    second = second + "" + key
    show.textContent = input +""+ second;
  }

  if (operator !== undefined) {
    operator = key;
  }
}

function clearInput() {
  input = undefined;
  operator = undefined;
  show.textContent = "";
}

function backspace() {
  input = input.slice(0, input.length - 1);
  show.textContent = input;
}

function keyHighlightKeyPress() {}

if (input === undefined) {
  show.textContent = "Your text";
}
