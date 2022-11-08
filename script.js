let container = document.querySelector('.draw_container');
let gridSizeBtn = document.querySelector('.grid_size_btn');

let gridSize = 16;

buildGrid();

gridSizeBtn.addEventListener('click', function() {
    container.innerHTML = '';
    gridSize = +prompt('How big should your grid be? 10-35 (i.e. 16 = 16x16)');

    while(gridSize > 35 || gridSize < 8) {
        if(gridSize > 35) {
            gridSize = +prompt('Grid size is too large. Please select a number between 10-35');
        } else if (gridSize < 10) {
            gridSize = +prompt('Grid size is too small. Please select a number between 10-35');
        }
    }

    buildGrid();
});

function buildGrid() {
    let numberOfBoxes = gridSize * gridSize;
    let singleBoxSize = 500 / gridSize;

    for(let i = 0; i < numberOfBoxes; i++) {
        let box = document.createElement('div');
        container.appendChild(box);
        box.style.cssText = `width: ${singleBoxSize}px; height: ${singleBoxSize}px;`;

        box.addEventListener('mouseover', function() {
            if(box.style.backgroundColor == '') {
                box.style.backgroundColor = 'rgba(0,0,0,.1)';
            } else if(box.style.backgroundColor !== 'rgb(0, 0, 0)') {
                let colorPercentage = box.style.backgroundColor.split(',')[3].split('.')[1][0];

                if(colorPercentage !== '9') {
                    +colorPercentage++;
                    box.style.backgroundColor = `rgba(0,0,0,0.${colorPercentage})`;
                } else {
                    box.style.backgroundColor = 'rgb(0,0,0)';
                }
            }
        });
    }
}