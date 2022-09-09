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
    console.log(key);

    if (input === undefined) {
      input = key;
    } else if (!isNaN(input)) {
      input = input + "" + key;
    }

    show.textContent = input;
  } else {
    input = input + key;
    show.textContent = input;
  }
}

function clearInput() {
  input = undefined;
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
