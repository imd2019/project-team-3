import DisplayObject from "./displayObject.js";

export default class InteractiveObject extends DisplayObject {
  constructor(x, y, width, height, backgnd = undefined) {
    super(x, y);
    this.width = width;
    this.height = height;
    this.backgnd = backgnd;
    this.parent = undefined;
    this.enabled = true;
  }
  enable(){
    this.enabled = true;
  }

  disable(){
    this.enabled = false;
  }

  draw() {
    if (this.backgnd != undefined) {
      // console.log(this.backgnd);
      image(this.backgnd, this.x, this.y, this.width, this.height);
    }
  }

  hitTest(x, y) {
    return x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height;
  }

  pressed() {}

  clicked() {}

  released() {}

  mousePressed() {
    if (this.hitTest(mouseX, mouseY)) {
      this.pressed();
    }
  }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.clicked();
    }
  }

  mouseReleased() {
    if (this.hitTest(mouseX, mouseY)) {
      this.released();
    }
  }

  mouseHovered() {
    if (this.enabled && this.hitTest(mouseX, mouseY)) {
      return true;
    } else {
      return false;
    }
  }
}
