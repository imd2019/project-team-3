import Sprite from "../../../sprite.js";

export default class PhoneMenuIcon extends Sprite {
  constructor(x, y, width, height, backgnd, target) {
    super(x, y, width, height, backgnd);
    this.target = target;
    this.notification = false;
  }

  setNotification() {
    this.notification = true;
  }

  resetNotification() {
    this.notification = false;
  }

  draw() {
    if (this.backgnd != undefined) {
      image(this.backgnd, 0, 0, this.width, this.height);
    }

    if (this.notification && this.target != "postScreen") {
      fill("red");
      ellipse(this.width - 8, 8, 20);
    }
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("showScreen", { detail: this.target }));
    if (this.notification) {
      this.resetNotification();
      window.dispatchEvent(new CustomEvent("resetNotification"));
    }
  }
}
