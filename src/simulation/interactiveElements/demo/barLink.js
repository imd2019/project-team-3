import Sprite from "../../../Sprite.js";

export default class BarLink extends Sprite {
  constructor(x, y, width, height, backgnd) {
    super(x, y, width, height, backgnd);
    this.hide();
    this.disable();
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("enterView", { detail: "bar" }));
  }

  resetElement() {
    this.hide();
    this.disable();
  }
}