const pixelText = document.querySelector('#pixel');
const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let color = 'black';
document.addEventListener('DOMContentLoaded', () =>{
    getBoardSize(16);

    const selectPixelBtn = document.querySelector('#select-pixel');
    selectPixelBtn.addEventListener('click', () => {
    let userInput = getPixelSize();
    getBoardSize(userInput);

   
    });
});

function getPixelSize(){
    const input = prompt("Select you Canvas size between 1 and 100.");
    if (input == ""){
        alert("No valid Input");
    } else if (input < 0 || input > 100){
        alert("Invalid input you must select between 1 and 100!");
    } else {
        pixelText.innerHTML = `Your Canvas has a ${input} x ${input} pixel.`;
        return input;
    }
}

function getBoardSize(size){
    let board = document.querySelector('.board');

    let divNumber = size * size;

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < divNumber; i++){
        let div = document.createElement('div');

        div.addEventListener('mouseover', colorDiv);

        board.appendChild(div);
    }
}
function randomColors(){
    let hexCode = '#';
    for (let i = 0; i < 6; i++){
        hexCode += colors[randomHexCode()];
    }
    return hexCode;
}

function randomHexCode(){
    return Math.floor(Math.random() * colors.length);
}

function colorDiv(){
    if(color == 'random'){
        this.style.backgroundColor = randomColors();
    } else if (color == 'white'){
        this.style.backgroundColor = 'white';
    } else if (color == 'red'){
        this.style.backgroundColor = 'red';
    } else if (color == 'green'){
        this.style.backgroundColor = 'green';
    } else if (color == 'yellow'){
        this.style.backgroundColor = 'yellow';
    } else if (color == 'blue'){
        this.style.backgroundColor = 'blue';
    } else {
        this.style.backgroundColor = 'black';
    }
}
function setColor(colorChoice){
    color = colorChoice;
}

function reset(){
    let div = document.querySelectorAll('div');
    div.forEach((divBg) =>{
        divBg.style.backgroundColor = 'white';
    });
}