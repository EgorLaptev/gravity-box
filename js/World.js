'use strict';

import Box from "./Box.js";
import Cursor from "./Cursor.js";

export default class World {

    static backgroundColor = '#111';
    static backgroundImage = '../media/images/background-2.jpg';

    static timeStop = false;

    static gravity = {
        power: 0.5,
        mfs: 20
    }

    static start()
    {
        cnv.style.background = (World.backgroundImage) ? `url(${World.backgroundImage}) 100% 0% no-repeat` : World.backgroundColor;
        World.loop();
    }

    static loop()
    {
        if(!World.timeStop)
        {

            World.physic();
            World.render();

            requestAnimationFrame(World.loop);

        }
    }

    static render()
    {

        ctx.clearRect(0, 0, cnv.width, cnv.height);

        // Render boxes
        Box.render();
        Cursor.render();

    }

    static physic()
    {

        // Gravity for boxes
        for( const box of Box.list) {

            let collisied = false;

            for ( const otherBox of Box.list ) {
                if(
                    otherBox.y <= (box.y + Box.height + box.speedY ) &&
                    otherBox.x <= (box.x + Box.width + box.speedY ) &&
                    (otherBox.x + Box.width) >= box.x &&
                    (otherBox.y + Box.height) >= box.y &&
                    otherBox !== box
                ) collisied = true;
            }

            // if( box.y + Box.height + box.speedY > cnv.height) {
            //
            //     if( box.falling ) {
            //         box.speedY = .01;
            //         box.y = cnv.height - Box.height;
            //         new Audio('../media/sounds/fallSound.mp3').play();
            //     }
            //
            //     box.y = cnv.height - Box.height;
            //     box.falling = false;
            //
            // } else if(box.falling) {
            //     box.speedY += World.gravity.power;
            //     box.y += box.speedY;
            //     box.falling = true;
            // }
            //
            // if( collisied && box.falling ) {
            //     box.falling = false;
            //     new Audio('../media/sounds/fallSound.mp3').play();
            //}

            if( box.y + Box.height + box.speedY < cnv.height && !collisied ) {
                box.speedY += (box.speedY < World.gravity.mfs) ? World.gravity.power : 0;
                box.y += box.speedY;
                box.falling = true;
            } else {
                if( box.y + Box.height > cnv.height - 1) {
                    if( box.falling ) new Audio('../media/sounds/fallSound.mp3').play();
                    box.y = cnv.height - Box.height;
                    box.falling = false;
                }
                box.speedY = 0;
            }

        }

    }

}