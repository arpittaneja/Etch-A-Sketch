function getNumberOfRows() {
    let userInput = parseInt(prompt("Enter a size of grid!"));
    while (!userInput || userInput > 100 || userInput < 1) {
        userInput = parseInt(prompt("Invalid Value! Number should be between 1 and 100!"));
    }
    return userInput;
}

function clearAllBoxes() {
    for (box of boxes) {
        box.style.backgroundColor = "white";
        // console.log(box.classList);
    }
}


function rainbowColorAllBoxes() {
    for (box of boxes) {
        // box.removeEventListener("mouseover", box.target.classList.add("box-hover"));

        box.addEventListener("mouseover", function (box) {
            // console.log(red, blue, green);
            let red = Math.floor((Math.random() * 255));
            let blue = Math.floor((Math.random() * 255));
            let green = Math.floor((Math.random() * 255));
            box.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
        );
    }
}

function blackColorAllBoxes() {
    for (box of boxes) {
        box.addEventListener("mouseover", function (box) {
            box.target.style.backgroundColor = "black";
        });
    }
}

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

function createAllBoxes(numberOfRows, screen) {
    for (let i = 0; i < numberOfRows * numberOfRows; i++) {
        const addBox = document.createElement("div");
        addBox.classList.add('box');
        addBox.style.height = `calc(650px / ${numberOfRows})`;
        addBox.style.width = `calc(650px / ${numberOfRows})`;
        screen.appendChild(addBox);
    }
}


function eraseBoxes() {
    for (box of boxes) {
        box.addEventListener("mouseover", function (box) {
            box.target.style.backgroundColor = "white";
        });
    }
}

//driver code
numberOfRows = 10;
const screen = document.querySelector(".screen");

createAllBoxes(numberOfRows, screen)

const boxes = Array.from(document.querySelectorAll(".box"));
blackColorAllBoxes(boxes);


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
