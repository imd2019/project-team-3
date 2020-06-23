import Sprite from "../../Sprite.js";

export default class demoSign extends Sprite {
    constructor(x, y, width, height, backgnd) {
        super(x, y, width, height, backgnd);
    }

    clicked() {
        this.disable();
        this.visible = false;
        window.dispatchEvent(new CustomEvent("pickupSign"));
    }
}