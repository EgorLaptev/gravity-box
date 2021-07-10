'use strict';

export default class Box {

    static list = [];

    static color    = 'yellow';
    static texture  = '../media/images/box.jpg';

    static width = 150;
    static height = 150;

    constructor(x, y) {

        this.speedY = 0;
        this.falling = true;

        this.x = x;
        this.y = y;

        Box.list.push(this)

    }

    static render() {

        const boxImage = new Image();
        boxImage.src = Box.texture;

        for ( const box of Box.list )
            ctx.drawImage(boxImage, box.x, box.y, Box.width, Box.height);




    }

}