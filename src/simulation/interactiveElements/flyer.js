import Sprite from "../../Sprite.js";

export default class Flyer extends Sprite {
    constructor(x, y, width, height, backgnd) {
        super(x, y, width, height, backgnd);
    }

    clicked() {
        this.visible = false;
        this.enabled = false;
    }
}