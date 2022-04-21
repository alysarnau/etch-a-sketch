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
  };
  
makeRows(16, 16);

// on mouse hover, add class "hovered" that changes bg
const gridItems = document.querySelectorAll(".grid-item");
// MOUSEOVER EVENT
gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', function(e) {
  gridItem.classList.add('hover');
}));

//make button event to reset the grid

//make input area