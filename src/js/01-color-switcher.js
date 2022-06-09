// Variables
const buttonStartRef = document.querySelector('button[data-start]');
const buttonStopRef = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');
let intervalId = null;

buttonStopRef.setAttribute('disabled', 'disabled');

// Event listeners
buttonStartRef.addEventListener('click', startInterval);
buttonStopRef.addEventListener('click', stopInterval);

// Functions
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColorBody() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}

function startInterval() {
  changeAtributes(buttonStartRef, buttonStopRef);
  intervalId = setInterval(changeColorBody, 1000);
}

function stopInterval() {
  changeAtributes(buttonStopRef, buttonStartRef);
  clearInterval(intervalId);
}

function changeAtributes(firstButton, secondButton) {
  firstButton.setAttribute('disabled', 'disabled');
  secondButton.removeAttribute('disabled', 'disabled');
}
