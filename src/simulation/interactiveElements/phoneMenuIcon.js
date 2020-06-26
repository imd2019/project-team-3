import Sprite from "../../sprite.js";

export default class PhoneMenuIcon extends Sprite {
  constructor(x, y, width, height, backgnd, action) {
    super(x, y, width, height, backgnd);
    this.action = action;
  }

  clicked() {
    window.dispatchEvent(new CustomEvent(this.action));
  }
}
