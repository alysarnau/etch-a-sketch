const body = document.querySelector('body');

const div1 = document.createElement('div');
body.appendChild(div1);
div1.setAttribute('class','div');

div1.cloneNode(true);