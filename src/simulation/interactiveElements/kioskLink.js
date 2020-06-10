import Sprite from "../../Sprite.js";

export default class KioskLink extends Sprite {
    constructor(x, y, width, height, backgnd) {
        super(x, y, width, height, backgnd);
    }

    clicked() {
        window.dispatchEvent(new CustomEvent("enterView", { detail: "kiosk" }));
    }
}