let bilder = document.querySelectorAll(".boximg");
let imgDivs = [];

const displayImageBoxes = () => {
  const doc = document.getElementById("preview");

  // fikk hjelp av Endre med denne while loopen.
  while (doc.firstChild) {
    doc.firstChild.remove();
  }

  const img = [
    "images/874544998aurora-borealis-northern-light-gif-1.gif",
    "images/aurora-borealis-northern-lights.gif",
    "images/galaxy-stars.gif",
    "images/icegif-1648.gif",
    "images/stars-night.gif",
  ];

  for (let i = 0; i < 3; i++) {
    let v = img[Math.floor(Math.random() * 3)];
    let cimg = document.createElement("img");
    cimg.setAttribute("src", v);
    cimg.id = i;
    cimg.className = "boximg";
    doc.appendChild(cimg);
  }
};

/*This will scale and descale images on click*/
bilder.forEach((e) => {
  imgDivs.push(e.id);
  const thisImgEl = document.getElementById(e.id);
  thisImgEl.addEventListener("click", () => {
    if (thisImgEl.style.height !== "200px") {
      thisImgEl.style.height = "200px";
      thisImgEl.style.width = "300px";
      thisImgEl.className = "boximg";
    } else {
      thisImgEl.style.height = "600px";
      thisImgEl.style.width = "800px";
      thisImgEl.className = "imgScale boximg";
      closeDivs();
    }
  });
});

const closeDivs = () => {
  imgDivs.forEach((e) => {
    const closeDiv = document.getElementById(e);
    if (closeDiv.style.height !== "600px") {
      closeDiv.style.height = "200px";
      closeDiv.style.width = "300px";
      closeDiv.className = "boximg";
    }
  });
};
