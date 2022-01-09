const black = document.querySelector(".options .black");
black.addEventListener("click", blackColorAllBoxes);

const rainbow = document.querySelector(".options .rainbow");
rainbow.addEventListener("click", rainbowColorAllBoxes);

const greyScale = document.querySelector(".options .greyscale");
greyScale.addEventListener("click", greyScaleAllBoxes);

const eraser = document.querySelector(".options .eraser");
eraser.addEventListener("click", eraseBoxes);

const resize = document.querySelector(".options .resize");
newSize = resize.addEventListener("click", makeNewScreen);

const clear = document.querySelector(".options .clear");
clear.addEventListener("click", clearAllBoxes);

let buttons = [black, rainbow, greyScale, eraser, resize, clear];

//asks user for grid size and returns the same 
function getNumberOfRows() {
    let userInput = parseInt(prompt("Enter a size of grid!(1-100)", 24));
    while (!userInput || userInput > 100 || userInput < 1) {
        userInput = parseInt(prompt("Invalid Value! Number should be between 1 and 100!"));
    }
    return userInput;
}

//takes gridsize as input and creates a grid of that size
function createAllBoxes(numberOfRows, screen) {
    let boxWidth = (screen.clientWidth / numberOfRows);
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
    black.classList.add("pressed");
    allButtonsNormalExcept(black)
    for (box of boxes) {
        box.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "black";
        });
    }
}

//fires when rainbow button is clicked, adds event listener to each small box, and when the same event is fired it changes bg to random color
function rainbowColorAllBoxes() {
    rainbow.classList.add("pressed");
    allButtonsNormalExcept(rainbow);
    for (box of boxes) {
        box.addEventListener("mouseover", function (e) {
            let red = Math.floor((Math.random() * 255));
            let blue = Math.floor((Math.random() * 255));
            let green = Math.floor((Math.random() * 255));
            e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
        );
    }
}

//fires when greyscale button is clicked, adds event listener to each small box, and when the same event is fired it changes bg to grey and other shades
function greyScaleAllBoxes() {
    greyScale.classList.add("pressed");
    allButtonsNormalExcept(greyScale);
    grey = 255;
    for (box of boxes) {
        box.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = `rgb(${grey}, ${grey}, ${grey})`;
            if (grey > 0) {
                grey -= 255 / 200;
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
    clear.classList.add("pressed");
    allButtonsNormalExcept(clear);
    blackColorAllBoxes(boxes);

    for (box of boxes) {
        box.style.backgroundColor = "white";
    }
}

//erases filled boxes when clear button is clicked
function eraseBoxes() {
    eraser.classList.add("pressed");
    allButtonsNormalExcept(eraser);
    for (box of boxes) {
        box.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "white";
        });
    }
}

//creates a new screen by removing all boxes and creating new ones
function makeNewScreen() {
    resize.classList.add("pressed");
    allButtonsNormalExcept(resize)
    newSize = getNumberOfRows();
    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }
    createAllBoxes(newSize, screen);
    boxes = Array.from(document.querySelectorAll(".box"));
    blackColorAllBoxes(boxes);
}

//this function reverts all buttons to normal except the one that is clicked
function allButtonsNormalExcept(button) {
    console.log(button);
    for (btn of buttons) {
        if (btn !== button) {
            btn.classList.remove("pressed")
            console.log(btn);
        }
    }
}

//driver code
let numberOfRows = getNumberOfRows();

const screen = document.querySelector(".outer-container .container");
createAllBoxes(numberOfRows, screen)

let boxes = Array.from(document.querySelectorAll(".box"));
blackColorAllBoxes(boxes);