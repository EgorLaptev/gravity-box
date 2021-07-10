'use strict';

import Box from "./Box.js";
import World from "./World.js";
import Cursor from "./Cursor.js";

window.cnv = document.getElementById('world');
window.ctx = cnv.getContext('2d');

cnv.width  = window.innerWidth;
cnv.height = window.innerHeight;

World.start();

document.addEventListener('click', e => {
    new Box(e.clientX - Box.width/2, e.clientY - Box.height/2);
});

window.addEventListener('resize', e => {
    cnv.width  = window.innerWidth;
    cnv.height = window.innerHeight;
});

document.addEventListener('mousemove', e => {
        Cursor.x = e.clientX - Box.width / 2;
        Cursor.y = e.clientY - Box.height / 2;
})