//Clicking the button will clear the current grid
//Program then prompts user to enter a number which will represent the sides (i.e., 10 will be 10x10 grid)
//Program displays the new grid that takes up the same amount of space as the 16x16 grid 
//

const largeSquareContainer = document.querySelector('.large-square-container')


function createRowsAndSquares() {
    clearSquares();
    let side = +prompt('How many squares on each side?');
    if (side > 100) {
        side = +prompt('How many squares on each side?');
    }

    for (let i = 0; i < side; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row-container');
        largeSquareContainer.appendChild(rowContainer);

        for (let i = 0; i < side; i++) {
            const square = document.createElement('div');
            square.classList.toggle('square');
            rowContainer.appendChild(square);
        }

    }


    //Adds an event listener to each square with a mouseover event 
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', function () {
        square.style.background = generateRandomColor();
    }));
};


function generateRandomColor() {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r},${b},${g})`;
}

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearSquares);

function clearSquares() {
    const rowContainers = document.querySelectorAll('.row-container');

    for (let row of rowContainers) {
        const squares = row.querySelectorAll('.square');
        for (let square of squares) {
            row.removeChild(square);
        }
        largeSquareContainer.removeChild(row);
    }
}
const newButton = document.querySelector('.new-button');
newButton.addEventListener('click', createRowsAndSquares);



