let bilde = document.querySelector("#parimg3");
let scaled = 0;

console.log(bilde);

bilde.addEventListener("click", scale100);
function scale100() {
  console.log("funksjon");
  if (!scaled) {
    console.log("1");
    bilde.style.height = "100%";
    scaled = 1;
  } else {
    console.log("0");
    bilde.style.height = "75%";
    scaled = 0;
  }
}
