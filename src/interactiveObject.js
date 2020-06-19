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
      image(this.backgnd, 0, 0, this.width, this.height);
    }
  }

  hitTest(x, y) {
    let p = this.parent;
    let dx = 0;
    let dy = 0;
    let s = 1;

    while (p != undefined) {
      if (p.parent != undefined) {
        dx += p.x * p.parent.scale;
        dy += p.y * p.parent.scale;
        s *= p.scale;
      } else {
        dx += p.x;
        dy += p.y;
      }

      p = p.parent;
    }

    return (
      x > this.x * s + dx &&
      x < this.x * s + dx + this.width * s &&
      y > this.y * s + dy &&
      y < this.y * s + dy + this.height * s
    );
  }

  pressed() {}

  clicked() {}

  released() {}

  mousePressed() {
    if (this.enabled && this.hitTest(mouseX, mouseY)) {
      this.pressed();
    }
  }

  mouseClicked() {
    if (this.enabled && this.hitTest(mouseX, mouseY)) {
      this.clicked();
    }
  }

  mouseReleased() {
    if (this. enabled && this.hitTest(mouseX, mouseY)) {
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
