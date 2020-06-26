import Sprite from "../../../sprite.js";

export default class MobilePhone extends Sprite{
  constructor(width, height, backgnd, overlay){
    let scale = 0.8 * windowHeight / height;
    super((windowWidth - width * scale)/ 2, (windowHeight - height * scale) / 2, width, height, backgnd);
    this.overlay = overlay;
    this.scale = scale;
    this.disable();
    this.hide();
  }

  draw() {
    if (this.backgnd != undefined) {
        image(this.backgnd, 0, 0, this.width, this.height);
        image(this.overlay, 18.9, 24.6, this.width - 2 * 18.9, this.height - 96);
      }
  }

  mousePressed() {
    if (this.enabled && this.hitTest(mouseX, mouseY)) {
      this.pressed();
      return true;
    }
  }

  mouseClicked() {
    if (this.enabled && this.hitTest(mouseX, mouseY)) {
      this.clicked();
      return true;
    }
  }

  mouseReleased() {
    if (this. enabled && this.hitTest(mouseX, mouseY)) {
      this.released();
      return true;
    }
  }
}