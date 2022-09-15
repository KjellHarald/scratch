let store = [];
const btn = document.getElementById("btn");
const add = document.getElementById("add");
const save = document.getElementById("save");
const rmfirst = document.getElementById("rmfirst");
const rmlast = document.getElementById("rmlast");
const wrap = document.getElementById("footer");

if (store.lenght === undefined && localStorage.getItem("store") !== null) {
  store = JSON.parse(localStorage.getItem("store"));
  render();
}

save.addEventListener("click", function save() {
  pushstorage();
});

rmfirst.addEventListener("click", function rmfirst() {
  store.shift();
  render();
});

rmlast.addEventListener("click", function rmlast() {
  store.pop();
  render();
});

add.addEventListener("click", function add() {
  let tabQuery = chrome.tabs.query(
    { currentWindow: true, active: true },
    function (tabs) {
      let url = tabs[0].url;
      store.push(url);
      pushstorage();
      render();
    }
  );
});

function download() {
  wrap.innerHTML = "";
  let base64 = btoa(JSON.stringify(store));
  let dl = `<a id="dl" href="data:application/octet-stream;charset=utf-16le;base64,${base64}">Download text file</a>`;
  wrap.innerHTML = dl;
}

function pushstorage() {
  localStorage.setItem("store", JSON.stringify(store));
}

function render() {
  btn.innerHTML = "";
  let links = "";
  for (let i = 0; i <= store.length; i++) {
    if (store[i] !== undefined) {
      links += `<p><a href="${store[i]}" target="_blank">${store[i]}</a></p>`;
    }
  }
  download();
  btn.innerHTML = links;
}
