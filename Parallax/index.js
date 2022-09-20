let bilder = document.querySelectorAll(".parimg");
let idEl = "";
let imgDivs = [];

bilder.forEach((e) => {
  const imgEl = e.id;
  imgDivs.push(imgEl);

  const thisImgEl = document.getElementById(imgEl);
  thisImgEl.addEventListener("click", () => {
    if (thisImgEl.style.minHeight !== "200px") {
      thisImgEl.style.minHeight = "200px";
    } else {
      thisImgEl.style.transition = "3s";
      thisImgEl.style.minHeight = "75%";
      console.log(thisImgEl.id);
      idEl = thisImgEl.id;
      closeDivs();
    }
  });
});

const closeDivs = () => {
  imgDivs.forEach((e) => {
    if (e !== idEl) {
      const closeDiv = document.getElementById(e);
      if (closeDiv.style.minHeight != "200px") {
        closeDiv.style.minHeight = "200px";
      }
    }
  });
};
