const container = document.querySelector(".container");
// create divs
let n=16; //take grid column value as you want

for(var i = 0; i < n; i++) {
    document.body.innerHTML+='<div class="row">';
    for(j = 0; j < n; j++) {
        document.body.innerHTML+='<div class="gridsquare">' + (i*5+j+1) + '</div>';
    }
    document.body.innerHTML+='</div>';
}