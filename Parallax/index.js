let bilder = document.querySelectorAll(".parimg");
let imgDivs = [];

bilder.forEach((e) => {
  imgDivs.push(e.id);
  const thisImgEl = document.getElementById(e.id);
  thisImgEl.addEventListener("click", () => {
    if (thisImgEl.style.minHeight !== "200px") {
      thisImgEl.style.minHeight = "200px";
    } else {
      thisImgEl.style.minHeight = "75%";
      closeDivs();
    }
  });
});

const closeDivs = () => {
  imgDivs.forEach((e) => {
    const closeDiv = document.getElementById(e);
    if (closeDiv.style.minHeight !== "75%") {
      closeDiv.style.minHeight = "200px";
    }
  });
};
