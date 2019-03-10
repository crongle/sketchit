const container = document.querySelector('.grid');

const sketchGrid = document.createElement('div');
sketchGrid.classList.add('sketch-grid');

for  (i = 0; i < 256; ++i) {
const sketchGridCell = document.createElement('div');
sketchGridCell.classList.add('sketch-grid-cell');
sketchGridCell.id = "cell" + i;
sketchGridCell.textContent = 'sgc';
sketchGridCell.addEventListener('mouseover', changeCellColor, false);
sketchGrid.appendChild(sketchGridCell);
}

container.appendChild(sketchGrid);

function changeCellColor(e) {
  e.target.classList.add('colored-cell')
}
