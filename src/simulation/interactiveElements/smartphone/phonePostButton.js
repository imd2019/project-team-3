import Sprite from "../../../sprite.js";

export default class PhonePostButton extends Sprite {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.name = "postButton";
    this.hide();
    this.disable();
  }

  postIsReady() {
    this.show();
    this.enable();
  }

  reset() {
    this.hide();
    this.disable();
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("addPost"));
    this.reset();
    this.parent.reset();
  }

  draw() {
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
    text("Post", 0, 0, this.width, this.height);
  }
}
