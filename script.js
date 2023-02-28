let gridSize = 100;

// where to pick up:
// make the button for setting the grid size
// make a button to reset everything
// -- consider putting all your declarations at the top for readability

const container = document.querySelector(".container");

function createGrid(gridSize) {
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
}

const etchPixelNodes = document.querySelectorAll(".etchPixel");
etchPixelNodes.forEach(element => {
    element.addEventListener('mouseover',etch);    
});

const gridButton = document.querySelector("#gridSize");
gridButton.addEventListener('click',()=>prompt("How many pixels in the etch grid?","Choose an integer from 1-100"));

function etch(e) {
    this.style.backgroundColor = "black";
}



