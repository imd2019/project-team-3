import Sprite from "../../Sprite.js";

export default class BarLink extends Sprite {
  constructor(x, y, width, height, backgnd) {
    super(x, y, width, height, backgnd);
    this.visible = false;
    this.enabled = false;
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("enterView", { detail: "bar" }));
  }
}