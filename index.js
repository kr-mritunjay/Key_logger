const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");

const start = document.getElementById("start-btn");
const stop = document.getElementById("stop-btn");

start.addEventListener("click", () => {
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleup);
  start.disabled = true;
  stop.disabled = false;
});

stop.addEventListener("click", () => {
  document.removeEventListener("keydown", handleDown);
  document.removeEventListener("keyup", handleup);
  logDiv.textContent = "";
  stateDiv.textContent = "";
  stop.disabled = true;
  start.disabled = false;
  // removeEventListener(start);
});

function handleup(e) {
  logDiv.textContent = `Key ${e.key} pressed up`;
  stateDiv.textContent = "Key is up";
}

function handleDown(e) {
  logDiv.textContent = `Key ${e.key} pressed down`;
  stateDiv.textContent = "Key is down";
}
