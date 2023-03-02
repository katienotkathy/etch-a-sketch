// where to pick up:
// finish greyscale mode and raindbow mode

const container = document.querySelector(".container");
let rainbowModeStatus = false;
let greyscaleModeStatus = false;
let plainModeStatus = true;

createGrid();

const gridButton = document.querySelector("#gridSize");
gridButton.addEventListener('click', function() {
    let newGridSize = parseInt(prompt("How many pixels in the etch grid?","Choose an integer from 1-100"));  
    if (!Number.isInteger(newGridSize) || newGridSize == 0 || newGridSize > 100) {
            alert("Please select an integer less than 100");
        }
        else {
            container.innerHTML = '';
            createGrid(newGridSize);
        }
    });

const rainbowModeButton = document.querySelector("#rainbowMode");
rainbowModeButton.addEventListener('click', () => {
    rainbowModeStatus = true;
    greyscaleModeStatus = false;
    plainModeStatus = false;
});

const greyscaleModeButton = document.querySelector("#greyscaleMode");
greyscaleModeButton.addEventListener('click', () => {
    rainbowModeStatus = false;
    greyscaleModeStatus = true;
    plainModeStatus = false;
});

const plainModeButton = document.querySelector("#plainMode");
plainModeButton.addEventListener('click', () => {
    rainbowModeStatus = false;
    greyscaleModeStatus = false;
    plainModeStatus = true;
});

function createGrid(gridSize = 100) {
    for (let rowNum = 0; rowNum < gridSize; rowNum++) {
        const etchRow = document.createElement("div");
        etchRow.id = `etchRow${rowNum}`;
        etchRow.style.display = "flex";
        etchRow.style.flex = "1 1 auto";
        container.appendChild(etchRow);
        
        for (let colNum = 0; colNum < gridSize; colNum++) {
            const currentRow = document.querySelector(`#etchRow${rowNum}`); 
            const etchPixel = document.createElement("div");
            
            etchPixel.className = "etchPixel";
            etchPixel.style.display = "flex";
            etchPixel.style.flex = "1 1 auto";
            currentRow.appendChild(etchPixel);
        }
    }

    const etchPixelNodes = document.querySelectorAll(".etchPixel");
    etchPixelNodes.forEach(element => {
    element.addEventListener('mouseover',etch);    
});
}

function etch(e) {
    if (plainModeStatus) {
        this.style.backgroundColor = "black";
    }
    else if (rainbowModeStatus) {
        this.style.backgroundColor = "red";
    }
    else if (greyscaleModeStatus) {
        this.style.backgroundColor = "yellow";
    }
    
}



