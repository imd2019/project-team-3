import Sprite from "../../../sprite.js";

export default class Door extends Sprite {
  constructor(x, y, width, height, backgnd) {
    super(x, y, width, height, backgnd);
  }

  clicked() {
    this.disable();
    window.dispatchEvent(new CustomEvent("addAction", {detail: {
        origin: "coffeeHouse",
        name: "enterCoffeeHouse",
        data: {},
    }}));
  }

  resetElement() {
    this.enable();
  }
}