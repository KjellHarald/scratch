const animateName = document.getElementById("animate-name");
const personName = ["K", "j", "e", "l", "l", " ", "h", "a", "r", "a", "l", "d"];
const delay = 0400;

animateName.textContent = animateName.textContent.replace("Kjell Harald", "");

for (let i = 0; i <= personName.length - 1; i++) {
  setTimeout(() => {
    animateName.textContent += personName[i];
  }, delay * i);
}

setInterval(() => {
  if (animateName.textContent.split("").length >= personName.length) {
    if (animateName.textContent.includes("_")) {
      animateName.textContent = animateName.textContent.replace("_", "");
    } else {
      animateName.textContent += "_";
    }
  }

  console.log("blink");
}, 1000);
