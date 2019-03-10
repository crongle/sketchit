// Identifies the container for the grid to be made in
const container = document.querySelector('.grid');
// Initialised the internal grid container
let sketchGrid = document.createElement('div');
sketchGrid.classList.add('sketch-grid', 'sketch-grid-layout');

// Draws the grid of cells based on input given
function drawGrid(z, sketchGrid) {
  for  (a = 0; a < Math.pow(z, 2); ++a) {
    const sketchGridCell = document.createElement('div');
    sketchGridCell.classList.add('sketch-grid-cell');
    sketchGrid.style.gridTemplateColumns=('repeat(' + z + ', 40px)');
    sketchGrid.style.gridTemplateRows=('repeat(' + z + ', 40px)');
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

// Colors cell backgrounds to black
function changeCellColor(e) {
  e.target.classList.add('colored-cell');
}
