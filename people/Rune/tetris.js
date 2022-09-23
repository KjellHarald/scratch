const tabellen = document.querySelectorAll("td");
const knappen = document.getElementById("knappen");
const tabelTransform = document.getElementById("transform");
const table = document.getElementById("tableId");
const rad1 = document.getElementById("row1");

let tableData = [];
let scaled = 0;

const delay = () => {
  let delay = 800;
  for (let i = 0; i <= 5; i++) {
    let delayNow = delay + 400 * i;
    console.log(delayNow);
    //return delayNow;
  }
};

const selectColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

delay();

tabellen.forEach((e) => {
  if (e.id && e.id.includes("x1")) {
    tableData.push(e.id);
  }
});

knappen.addEventListener("click", () => {
  if (!scaled) {
    let rando1 = selectColor();
    scaled = 1;
    for (let i = 0; i <= tableData.lenght; i + 3) {
      //console.log(i);

      setTimeout(() => {
        tableData[i].style.background = rando1;
        tableData[i + 1].style.background = rando1;
        tableData[i + 2].style.background = rando1;
        tableData[i + 3].style.background = rando1;
        tableData[i + 4].style.background = "none";
        scaled = 0;
      }, delay);
    }
  }
});

tabelTransform.addEventListener("click", () => {
  if (!scaled) {
    table.style.width = "800px";
    table.style.height = "800px";
    table.style.fontSize = "0";
    //rad1.style.height = "40px";

    scaled = 1;
  } else {
    table.style.width = "100%";
    table.style.height = "10px";
    table.style.fontSize = "15px";
    scaled = 0;
  }
});
console.log(tableData);
