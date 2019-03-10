// Identifies the container for the grid to be made in
const container = document.querySelector('.grid');
// Initialised the internal grid container
let sketchGrid = document.createElement('div');
sketchGrid.classList.add('sketch-grid');

// Draws the grid of cells based on input given
function drawGrid(z, sketchGrid) {
  for  (a = 0; a < Math.pow(z, 2); ++a) {
    const sketchGridCell = document.createElement('div');
    sketchGridCell.classList.add('sketch-grid-cell');
    sketchGrid.style.gridTemplateColumns=('repeat(' + z + ', ' + (800 / z) + 'px)');
    sketchGrid.style.gridTemplateRows=('repeat(' + z + ', ' + (800 / z) + 'px)');
    sketchGridCell.id = "cell" + a;
    sketchGridCell.addEventListener('mouseover', changeCellColor, false);
    sketchGrid.appendChild(sketchGridCell);
  }
}

// Calls function to remove previous grid, Prompts for size of new grid, draws new grid
function gridReset() {
  removePreviousGrid();
  let gridSize = prompt('How many units square would you like the next grid to be?');
  drawGrid(gridSize, sketchGrid);
  container.appendChild(sketchGrid);
}

// Removes previous grid if there is one
function removePreviousGrid() {
  while (sketchGrid.firstChild) {
    sketchGrid.removeChild(sketchGrid.firstChild);
  }
}

// Colors cell backgrounds to random rgb values
function changeCellColor(e) {
  function random(number) { // Generates a whole value between 0 and 255 for rgb values
    return Math.floor(Math.random()*number);
  }
  function generateFillColor() { // Constructs the background color style statement
    let fillColor1 = random(255);
    let fillColor2 = random(255);
    let fillColor3 = random(255);
    let colorFillString = 'rgb(' + fillColor1 + ', ' + fillColor2+ ', ' + fillColor3 + ')';
    return colorFillString;
  }
  e.target.style.backgroundColor = generateFillColor(); // Background color statement is applied
}
