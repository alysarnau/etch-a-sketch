const container = document.querySelector(".container");
// create divs
let n=16; //take grid column value as you want

for(var i = 0; i < n; i++) {
    container.innerHTML+='<div class="row">';
    for(j = 0; j < n; j++) {
        container.innerHTML+='<div class="gridsquare">' + (i*5+j+1) + '</div>';
    }
    container.innerHTML+='</div>';
}

const gridsquare = document.querySelectorAll('.gridsquare');
// gridsquare.textContent("grid");