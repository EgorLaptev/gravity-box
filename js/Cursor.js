'use strict';

export default class Cursor {

    static x;
    static y;

    static width = 150;
    static height = 150;

    static color = '#EBA0D8';
    static thickness = 3;

    static render() {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.thickness;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }

}