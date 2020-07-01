import Sprite from "../../../sprite.js";

export default class PhoneMailButton extends Sprite {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.name = "mailButton";
    this.disable();
    this.hide();
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("getInfo"));
    this.hide();
    this.disable();
  }

  draw() {
    this.enable();
    if (this.mouseHovered()) {
      stroke("yellow");
    } else {
      noStroke();
    }

    textAlign(CENTER, CENTER);
    fill("grey");
    rect(0, 0, this.width, this.height, 5);
    noStroke();
    fill("black");
    text("Mehr Informationen", 0, 0, this.width, this.height);
  }

  resetElement() {
    this.disable();
    this.hide();
  }
}