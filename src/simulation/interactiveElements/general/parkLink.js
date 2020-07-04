import Sprite from "../../../sprite.js";

export default class ParkLink extends Sprite {
  constructor(x, y, width, height, backgnd) {
    super(x, y, width, height, backgnd);
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("streetsignClick"));
    window.dispatchEvent(new CustomEvent("enterView", { detail: "park" }));
    this.disable();
    setTimeout( () => {
      this.enable();
    }, 1000);
  }
}