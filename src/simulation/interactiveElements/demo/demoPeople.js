import Sprite from "../../../sprite.js";

export default class DemoPeople extends Sprite {
  constructor(x, y, width, height, backgnd, type) {
    super(x, y, width, height, backgnd);
    this.type = type;
    this.disable();
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("addAction", {detail: {
      origin: "demo",
      name: "joinDemo",
      data: this.type,
    }}));
  }

  resetElement() {
    this.enable();
    this.show();
  }
}