import Sprite from "../../Sprite.js";

export default class ParkLink extends Sprite {
    constructor(x, y, width, height, backgnd) {
        super(x, y, width, height, backgnd);
    }

    clicked() {
        window.dispatchEvent(new CustomEvent("enterView", { detail: "park" }));
    }
}