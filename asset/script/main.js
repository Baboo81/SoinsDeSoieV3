"use strict";

//Logo animation:

const logo = document.getElementById('logo');

let leftPos = 0;
let upDownPos = 0;
let dir = -1;
let current_rotation = 0; 

logo.style.position = "absolute";

function ballAnimate1 () {

    if (leftPos == 1200) {
        dir = 1
    } else if 
        (leftPos == -100) {
        dir = -1
    }
    
    leftPos += -2 * dir;
    current_rotation += 1;
    

    logo.style.left = `${leftPos}px`;
    logo.style.transform = 'rotate('  + current_rotation + 'deg)';

    requestAnimationFrame(ballAnimate1);
};

requestAnimationFrame(ballAnimate1);
///////////////////// END ////////////////////////////