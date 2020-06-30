import Sprite from "../../../sprite.js";

export default class RestartButton extends Sprite {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.name = "restartButton";
    this.hide();
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("restartGame"));
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
    text("Nochmal probieren", 0, 0, this.width, this.height);
  }
}
