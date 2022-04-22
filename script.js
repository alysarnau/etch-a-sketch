const container = document.querySelector("#container");

// random color
// let randomColor = Math.floor(Math.random()*16777215).toString(16);
function randomColor() {
  return ("rgb(" + Math.floor(Math.random() *256) + ", " + Math.floor(Math.random() *256) + ", " + Math.floor(Math.random() *256) + ")"); 
};



// create divs and assign event listener
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.innerText = ("");
      container.appendChild(cell).className = "grid-item";
    };
    const gridItems = document.querySelectorAll(".grid-item");
    // adds mouseover function
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', function(e) {
      gridItem.classList.add('hover');
 // MULTICOLOR OPTION
      gridItem.style.background = randomColor();
      }
     )
    )
  };

const gridItem = document.querySelector(".grid-item");

//make var to store prompt from below
let defaultGrid = 16;
makeRows(defaultGrid, defaultGrid);

// on mouse hover, add class "hovered" that changes bg
const gridItems = document.querySelectorAll(".grid-item");


//make button event to reset the grid
const reset = document.querySelector("#reset");
reset.addEventListener('click', function(e) {
//make input prompt with range
    do {
      newGrid = parseInt(prompt("How big would you like your sketch grid to be on each side? (1-100)",""));
    } while
      (isNaN(newGrid) || newGrid > 100 || newGrid < 1);
    // remove old grid
    container.innerHTML = '';
    makeRows(newGrid,newGrid);
  });

document.documentElement.style.setProperty('--main-bg-color', randomColor);

