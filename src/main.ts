// CMPM 121 Smelly Code Activity

let counter = 0;

function setup() {
  document.body.innerHTML = `
    <h1>CMPM 121 Project</h1>
    <p>Counter: <span id="counter">0</span></p>
    <button id="increment">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  const incrementButton = document.getElementById("increment");
  const decrementButton = document.getElementById("dec");
  const resetButton = document.getElementById("reset");
  const counterSpan = document.getElementById("counter");

  // Check if any element is missing, then exit the function
  if (!incrementButton || !decrementButton || !resetButton || !counterSpan) {
    return;
  }

  incrementButton.addEventListener("click", () => {
    counter++;
    counterSpan.innerHTML = `${counter}`;
    document.title = "Clicked " + counter;
    document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
  });

  decrementButton.addEventListener("click", () => {
    counter--;
    counterSpan.innerHTML = `${counter}`;
    document.title = "Clicked " + counter;
    document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
  });

  resetButton.addEventListener("click", () => {
    counter = 0;
    counterSpan.innerHTML = `${counter}`;
    document.title = "Clicked " + counter;
    document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
  });
}

function start() {
  setup();
}

start();
