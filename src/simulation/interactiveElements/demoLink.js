import Sprite from "../../sprite.js";

export default class DemoLink extends Sprite {
  constructor(x, y, width, height, backgnd, signsLeft, signsRight) {
    super(x, y, width, height, backgnd);

    this.signsLeft = signsLeft;
    this.signsRight = signsRight;

    this.counter = 0;
    this.steps = 0.3;
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("enterView", { detail: "demo" }));
  }

  draw() {

    if (this.backgnd != undefined) {
      image(this.backgnd, 0, 0, this.width, this.height);

      if (this.signsLeft != undefined) {
        image(this.signsLeft, 20, this.counter - 25, 435, 89);
        image(this.signsRight, 20, -this.counter - 25, 434, 105);

        this.counter += this.steps;
        if (this.counter >= 7 || this.counter <= 0) {
          this.steps = -this.steps;
        }
      }
    }
  }
}