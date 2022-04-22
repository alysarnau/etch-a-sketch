const container = document.querySelector("#container");
// create divs
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.innerText = ("");
      container.appendChild(cell).className = "grid-item";
    };
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', function(e) {
      gridItem.classList.add('hover');
    })
    )};  

//make var to store prompt from below
let defaultGrid = 16;
makeRows(defaultGrid, defaultGrid);

// on mouse hover, add class "hovered" that changes bg
const gridItems = document.querySelectorAll(".grid-item");


//make button event to reset the grid
const reset = document.querySelector("#reset");
reset.addEventListener('click', function(e) {
    gridItems.forEach(gridItem => gridItem.classList.remove('hover'));
//make input prompt
    newGrid = prompt("How big would you like your sketch grid to be on each side? (1-100)");
    if ((newGrid >= 1) && (newGrid <=100)) {
      console.log("Good job!")
    } else {
      console.log("Bad!!")
    };
//SET UP LIMIT OF
    makeRows(newGrid,newGrid);

// need to figure out how to update Grid properly!!!

//random color func
const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 

document.documentElement.style.setProperty('--main-bg-color', randomColor);

// set up functionality so each pass thru with mouse changes it to diff rgb value
// should be able to do this to set up mouseOver as a function each time?
// and have the function run each time it's moused over - will need to change .hover
