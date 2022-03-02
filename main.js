//Clicking the button will clear the current grid
//Program then prompts user to enter a number which will represent the sides (i.e., 10 will be 10x10 grid)
//Program displays the new grid that takes up the same amount of space as the 16x16 grid 
//

const squareContainer = document.querySelector('.square-container')


function createSquares() {
    let side = +prompt('How many squares on each side?');
    if (side > 100) {
        side = +prompt('How many squares on each side?');
    }
    for (let i = 0; i < (side * side); i++) {
        const square = document.createElement('div');
        square.classList.toggle('square');
        squareContainer.appendChild(square);
    }
};
//Adds an event listener to each square with a mouseover event 
const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover', function () {
    square.classList.toggle('highlight-square');
}));

const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearSquares);

function clearSquares() {
    const squares = document.querySelectorAll('.square');
    console.log(squares);
    for (let square of squares) {
    squareContainer.removeChild(square);}
}

const newButton = document.querySelector('.new-button');
newButton.addEventListener('click', createSquares);



