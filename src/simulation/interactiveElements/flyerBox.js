import Sprite from "../../Sprite.js";

export default class FlyerBox extends Sprite {
  constructor(x, y, width, height, backgnd, view) {
    super(x, y, width, height, backgnd, view);
    this.view = view;
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("addAction", {detail: {
      origin: this.view,
      name: "pickupFlyer",
      data: this.view,
    }}));
  }
}