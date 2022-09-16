let store = [];
const btn = document.getElementById("btn");
const add = document.getElementById("add");
const save = document.getElementById("save");
const rmfirst = document.getElementById("rmfirst");
const rmlast = document.getElementById("rmlast");
const wrap = document.getElementById("footer");
const clear = document.getElementById("clear");

const download = () => {
  wrap.innerHTML = "";
  const base64 = btoa(JSON.stringify(store));
  const dl = `<a id="dl" href="data:application/octet-stream;charset=utf-16le;base64,${base64}">Download text file</a>`;
  wrap.innerHTML = dl;
};

const pushStorage = () => localStorage.setItem("store", JSON.stringify(store));

const render = () => {
  btn.innerHTML = "";
  let links = "";
  for (let i = 0; i <= store.length; i++) {
    if (store[i]) {
      links += `<a href="${store[i]}" target="_blank">${store[i]}</a>`;
    }
  }
  download();
  btn.innerHTML = links;
};

if (!store.lenght && localStorage.getItem("store")) {
  console.log(localStorage.getItem("store"));
  store = JSON.parse(localStorage.getItem("store"));
  render();
}

save.addEventListener("click", pushStorage);

rmfirst.addEventListener("click", () => {
  store.shift();
  render();
});

rmlast.addEventListener("click", () => {
  store.pop();
  render();
});

clear.addEventListener("dblclick", () => {
  store = [];
  localStorage.clear();
  render();
});

add.addEventListener("click", () => {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    const url = tabs[0].url;
    store.push(url);
    pushStorage();
    render();
  });
});
