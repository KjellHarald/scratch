const lowerLetters = "qwertyuiopåasdfghjkløæzxcvbnm";
const capitalLetters = "QWERTYUIOPÅASDFGHJKLØÆZXCVBNM";
let show = document.getElementById("dis-input");

let input = "";

function layoutLowercase(key) {
  input = input + key;
  console.log(input);
  show.textContent = input;
}
console.log(input);

function clearInput() {
  input = "";
  document.getElementById("dis-input").textContent = "";
}
function backspace() {
  input = input.slice(0, input.length - 1);
  show.textContent = input;
}

function keyHighlightKeyPress() {}

if (input === null) {
  show.textContent = "Your text";
} else {
}
