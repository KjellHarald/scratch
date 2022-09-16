let show = document.getElementById("dis-input");
let input;
let n1;
let n2;
let math;
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
    fornumbers((key = key));
  }

  switch (true) {
    case key === "+":
      math = "+";
      break;
    default:
      input += key;
      show.textContent = input;
  }
}

function fornumbers(key) {
  if (!n1 && !math) {
    n1 += key;
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

if (!input) {
  show.textContent = "Your text";
}
