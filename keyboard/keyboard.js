let show = document.getElementById("dis-input");
let input = "";

function layoutLowercase(key) {
  input = input + key;
  show.textContent = input;
}

function clearInput() {
  input = "";
  show.textContent = "";
}

function backspace() {
  input = input.slice(0, input.length - 1);
  show.textContent = input;
}

function keyHighlightKeyPress() {}

if (input === "") {
  show.textContent = "Your text";
}
