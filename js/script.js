function getNumberOfRows() {
    let userInput = parseInt(prompt("Enter a size of grid!"));
    while (!userInput || userInput > 100 || userInput < 1) {
        userInput = parseInt(prompt("Invalid Value! Number should be between 1 and 100!"));
    }
    return userInput;
}

function clearAllBoxes() {
    for (box of boxes) {
        box.classList.remove("box-hover");
        // console.log(box.classList);
    }
}

numberOfRows = 4;
const screen = document.querySelector(".screen");
for (let i = 0; i < numberOfRows * numberOfRows; i++) {
    const addBox = document.createElement("div");
    addBox.classList.add('box');
    addBox.style.height = `calc(650px / ${numberOfRows})`;
    addBox.style.width = `calc(650px / ${numberOfRows})`;
    screen.appendChild(addBox);
}

function rainbowColor() {
    for (box of boxes) {
        // box.removeEventListener("mouseover", box.target.classList.add("box-hover"));

        box.addEventListener("mouseover", function (box) {
            // console.log(red, blue, green);
            let red = Math.floor((Math.random() * 255));
            let blue = Math.floor((Math.random() * 255));
            let green = Math.floor((Math.random() * 255));
            box.target.style.backgroundColor = `rgb(${red}, ${green}, ${green})`;
        }
        );
    }
}



const boxes = Array.from(document.querySelectorAll(".box"));
boxes.forEach(box => box.addEventListener("mouseover", box => box.target.classList.add("box-hover")));


const clear = document.querySelector(".options .clear");
clear.addEventListener("click", clearAllBoxes);


const rainbow = document.querySelector(".options .rainbow");
rainbow.addEventListener("click", rainbowColor)