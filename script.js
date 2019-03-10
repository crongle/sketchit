const container = document.querySelector('.grid-container');

const sketchGrid = document.createElement('div');
sketchGrid.classList.add('sketch-grid');

for  (i = 0; i < 256; ++i) {
const sketchGridCell = document.createElement('div');
sketchGridCell.classList.add('sketch-grid-cell');
sketchGridCell.textContent = 'sgc';
sketchGrid.appendChild(sketchGridCell);
}

container.appendChild(sketchGrid);

/*
const content = document.createElement('div'); // Creating the first Div
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const redText = document.createElement('p'); // Creating the Red Paragraph
redText.setAttribute('style', 'color: red;');
redText.textContent = "Hey, I'm Red!";
container.appendChild(redText);

const blueHeading = document.createElement('h3'); // Creating the Blue Header
blueHeading.setAttribute('style', 'color: blue;');
blueHeading.textContent = "I'm a blue h3!";
container.appendChild(blueHeading);

const pinkDiv = document.createElement('div'); // Creating the pink Div;
pinkDiv.setAttribute('style', 'background-color: pink; border: 2px solid black; height: 200px; width: 300px;');

const secondaryHeading = document.createElement('h1'); // Creating the h1 inside pinkDiv
secondaryHeading.textContent = "I'm in a Div";
pinkDiv.appendChild(secondaryHeading);

const secondaryParagraph = document.createElement('p'); // Creating the h1 inside pinkDiv
secondaryParagraph.textContent = "ME TOO!";
pinkDiv.appendChild(secondaryParagraph);

container.appendChild(pinkDiv);


var btn = document.querySelector('#btn');
btn.addEventListener('click', function(e){
  e.target.style.background = 'blue'
});

*/
