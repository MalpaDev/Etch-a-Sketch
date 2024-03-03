const DEFAULT_Colour = '#333333';
const DEFAULT_MODE = 'Colour';
const DEFAULT_SIZE = 16;

let currentColour = DEFAULT_Colour;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

function setCurrentColour(newColour) {
    currentColour = newColour;
}
  
function setCurrentMode(newMode) {
    activateButton(newMode);
    currentMode = newMode;
}
  
function setCurrentSize(newSize) {
    currentSize = newSize;
}

const grid = document.getElementById('grid');

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div');
      gridElement.classList.add('grid-element');
      gridElement.addEventListener('mouseover', changeColour);
      gridElement.addEventListener('mousedown', changeColour);
      grid.appendChild(gridElement);
    }
}

function changeColour(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = currentColour;
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE);
}