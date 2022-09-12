function displayImageBoxes() {
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
    doc.appendChild(cimg);
  }
}
