'use strict';

export default class Box {

    static list = [];

    static color    = 'yellow';
    static texture  = '../media/images/box.jpg';

    static width = 150;
    static height = 150;

    constructor(x, y) {

        let canSpawn = true;

        this.speedY = 0;
        this.falling = true;

        this.x = x;
        this.y = y;

        const spawnSound = new Audio();
        spawnSound.volume = .5;

        for ( const box of Box.list )
            if (
                    this.y <= (box.y + Box.height) &&
                    this.x <= (box.x + Box.width) &&
                    (this.x + Box.width) >= box.x &&
                    (this.y + Box.height) >= box.y &&
                    this !== box
            ) canSpawn = false;

        if ( canSpawn ) {
            spawnSound.src = '../media/sounds/error.mp3';
            Box.list.push(this)
        } else spawnSound.src = '../media/sounds/error2.mp3';

        spawnSound.play();

    }

    static render() {

        const boxImage = new Image();
        boxImage.src = Box.texture;

        for ( const box of Box.list )
            ctx.drawImage(boxImage, box.x, box.y, Box.width, Box.height);

    }

}