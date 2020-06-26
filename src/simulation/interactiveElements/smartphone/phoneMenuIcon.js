import Sprite from "../../../sprite.js";

export default class PhoneMenuIcon extends Sprite {
  constructor(x, y, width, height, backgnd, target) {
    super(x, y, width, height, backgnd);
    this.target = target;
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("showScreen", { detail: this.target }));
  }
}
