let store = [];
const btn = document.getElementById("btn");
const add = document.getElementById("add");
const save = document.getElementById("save");

if (localStorage.getItem("store") !== null) {
  let cs = localStorage.getItem("store");
  store = JSON.parse(cs);
  render();
}

add.addEventListener("click", function add() {
  let tabQuery = chrome.tabs.query(
    { currentWindow: true, active: true },
    function (tabs) {
      let url = tabs[0].url;
      store.push(url);
    }
  );
});

save.addEventListener("click", function save() {
  localStorage.setItem("store", JSON.stringify(store));
  store = [];
  render();
});

function render() {
  for (let i = 1; i < store.length; i++) {
    btn.textContent = store[i];
  }
}
