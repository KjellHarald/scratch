let store = [];
const btn = document.getElementById("btn");

let tabQuery = browser.tabs.query(
  { currentWindow: true, active: true },
  function (tabs) {
    btn.innerHTML = tabs[0].url;
  }
);
