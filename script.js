const pixelText = document.querySelector('#pixel');
const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let click = false;
let color = 'black';

document.addEventListener('DOMContentLoaded', () =>{
    getBoardSize(16);

    document.querySelector('body').addEventListener('click', (e) =>{
        if (e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector('#draw');

            if (click){
                draw.innerHTML = "Now you can draw or erase!";
            } else {
                draw.innerHTML = "You're not allowed to draw or erase!";
            }
        }
   });


    const selectPixelBtn = document.querySelector('#select-pixel');
    selectPixelBtn.addEventListener('click', () => {
    let userInput = getPixelSize();
    getBoardSize(userInput);

   
    });
});

function getPixelSize() {
    const input = prompt("Select your Canvas size between 1 and 100.");
    
    // Regular expression to match only digits
    const regex = /^\d+$/;
    
    if (!input) {
        alert("No valid Input");
    } else if (!regex.test(input)) {
        alert("Invalid input. Please enter a number between 1 and 100.");
    } else if (input < 1 || input > 100) {
        alert("Invalid input. Please select between 1 and 100.");
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
        // div.style.border = "1px solid gray"
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
   if (click){
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