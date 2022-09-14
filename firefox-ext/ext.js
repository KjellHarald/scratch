let store = [];
const btn = document.getElementById("btn");
const add = document.getElementById("add");
const rmlast = document.getElementById("rmlast");

if (store.lenght === undefined && localStorage.getItem("store") !== null) {
  let cs = localStorage.getItem("store");
  store = JSON.parse(cs);
  render();
}

rmlast.addEventListener("click", function rmlast() {
  store = store.pop();
  pushstorage();
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

function pushstorage() {
  localStorage.setItem("store", JSON.stringify(store));
}

function render() {
  btn.innerHTML = "";
  let links = "";
  for (let i = 0; i < store.length; i++) {
    links += `<li><a href="${store[i]}">${store[i]}</a></li>`;
  }
  btn.innerHTML = links;
}
