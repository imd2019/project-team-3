import Kiosk from "./kiosk.js";

export default class KioskLink extends Kiosk {
    constructor(x, y, width, height, onImg, offImg) {
        super(x, y, width, height, onImg, offImg);
    }

    clicked() {
        window.dispatchEvent(new CustomEvent("enterView", { detail: "kiosk" }));
    }
}