import Sprite from "../../../sprite.js";

export default class ChoosePostButton extends Sprite {
  constructor(x, y, width, height, name, post) {
    super(x, y, width, height);
    this.name = name;
    this.hide();
    this.disable();
    this.textNode;
    this.post = post;
  }

  clicked() {
    if (this.enabled) {
      window.dispatchEvent(
        new CustomEvent("postChosen", { detail: this.post })
      );
      parent.redraw();
    }
  }

  draw() {
    if (this.mouseHovered()) {
      stroke("yellow");
    } else {
      noStroke();
    }

    let textNode;

    if (this.name == "A") {
      textNode = "Pro-Demo";
    } else if (this.name == "B") {
      textNode = "Pro-Gegendemo";
    } else if (this.name == "C") {
      textNode = "Beide scheiße";
    }

    textAlign(CENTER, CENTER);
    fill("grey");
    rect(0, 0, this.width, this.height, 5);
    noStroke();
    fill("black");
    text(textNode, 0, 0, this.width, this.height);
  }
}
