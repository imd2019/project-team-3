import Sprite from "../../Sprite.js";

export default class Flyer extends Sprite {
  constructor(x, y, width, height, backgnd) {
    super(x, y, width, height, backgnd);
    this.visible = false;
    this.enabled = false;
  }

  clicked() {
    this.visible = false;
    this.enabled = false;
    window.dispatchEvent(new CustomEvent("closeFlyer"));
  }
}