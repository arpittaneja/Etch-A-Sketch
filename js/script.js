
//asks user for grid size and returns the same
function getNumberOfRows() {
    let userInput = parseInt(prompt("Enter a size of grid!"));
    while (!userInput || userInput > 100 || userInput < 1) {
        userInput = parseInt(prompt("Invalid Value! Number should be between 1 and 100!"));
    }
    return userInput;
}

//takes gridsize as input and creates a grid of that size
function createAllBoxes(numberOfRows, screen) {
    let boxWidth = (screen.clientWidth/numberOfRows);
    let boxHeight = (screen.clientHeight / numberOfRows);
    for (let i = 0; i < numberOfRows * numberOfRows; i++) {
        const addBox = document.createElement("div");
        addBox.classList.add('box');
        addBox.style.height = `${(boxHeight)}px`;
        addBox.style.width = `${(boxWidth)}px`;
        screen.appendChild(addBox);
    }
}

//fires when black button is clicked, adds event listener to each small box, and when the same event is fired it changes bg to black
function blackColorAllBoxes() {
    for (box of boxes) {
        box.addEventListener("mouseover", function (box) {
            box.target.style.backgroundColor = "black";
        });
    }
}

//fires when rainbow button is clicked, adds event listener to each small box, and when the same event is fired it changes bg to random color
function rainbowColorAllBoxes() {
    for (box of boxes) {

        box.addEventListener("mouseover", function (box) {
            let red = Math.floor((Math.random() * 255));
            let blue = Math.floor((Math.random() * 255));
            let green = Math.floor((Math.random() * 255));
            box.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
        );
    }
}

//fires when greyscale button is clicked, adds event listener to each small box, and when the same event is fired it changes bg to grey and other shades
function greyScaleAllBoxes() {
    grey = 255;
    for (box of boxes) {
        box.addEventListener("mouseover", function (box) {
            box.target.style.backgroundColor = `rgb(${grey}, ${grey}, ${grey})`;
            if (grey > 0) {
                grey -= 255 / 100;
                grey = Math.floor(grey);
            }
            else {
                grey = 0;
            }
        }
        );
    }
}

//fires when clear button is fired, it resets the bg of all small boxes to white
function clearAllBoxes() {
    for (box of boxes) {
        box.style.backgroundColor = "white";
    }
}

//erases filled boxes when clear button is clicked
function eraseBoxes() {
    for (box of boxes) {
        box.addEventListener("mouseover", function (box) {
            box.target.style.backgroundColor = "white";
        });
    }
}


function makeNewScreen() {
    newSize = getNumberOfRows();
    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }
    createAllBoxes(newSize, screen);
    boxes = Array.from(document.querySelectorAll(".box"));
    blackColorAllBoxes(boxes);
}


//driver code
numberOfRows = 19;

const screen = document.querySelector(".screen");
// console.log(screen);
createAllBoxes(numberOfRows, screen)



let boxes = Array.from(document.querySelectorAll(".box"));
blackColorAllBoxes(boxes);

const resize = document.querySelector(".options .resize");
newSize = resize.addEventListener("click", makeNewScreen);

const clear = document.querySelector(".options .clear");
clear.addEventListener("click", clearAllBoxes);


const rainbow = document.querySelector(".options .rainbow");
rainbow.addEventListener("click", rainbowColorAllBoxes);

const black = document.querySelector(".options .black");
black.addEventListener("click", blackColorAllBoxes);

const greyScale = document.querySelector(".options .greyscale");

greyScale.addEventListener("click", greyScaleAllBoxes);

const eraser = document.querySelector(".options .eraser");
eraser.addEventListener("click", eraseBoxes);