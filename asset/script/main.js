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

//Footer (map):
//Create map:
const centroid = [50.709925, 4.352603];
const map = L.map('mapid').setView(centroid, 16.4);

//Add tiles & marker:
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([50.709925, 4.352603]).addTo(map);

function openLink (event) {
    const link = "https://booking.optios.net/19311";
    window.open(link, "https://soinsdesoie.be", "_self");
    event.preventDefault();
}
///////////////////////// END //////////////////////////