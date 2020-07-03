import DisplayObject from "./displayObject.js";

export default class InteractiveObject extends DisplayObject {
  constructor(x, y, width, height, backgnd = undefined) {
    super(x, y, width, height, backgnd);
    this.parent = undefined;
    this.enabled = true;
    this.calcScale = this.scale;
  }
  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }

  display() {
    if (this.visible) {
      push();
      translate(this.x, this.y);
      rotate(this.rotation);
      scale(this.scale);

      this.draw();

      pop();
    }
    this.mouseHovered();
  }

  draw() {
    if (this.backgnd != undefined) {
      image(this.backgnd, 0, 0, this.width, this.height);
    }
  }

  hitTest(x, y) {
    let e = this;
    let m = createVector(x, y);
    let s = 1;

    while (e != undefined) {
      let vt = createVector(e.x, e.y);
      if (e.parent != undefined) {
        vt.mult(e.parent.calcScale);
      }
      m = p5.Vector.sub(m, vt);
      s *= e.scale;

      e = e.parent;
    }

    return (
      m.x > 0 && m.x < this.width * s &&
      m.y > 0 && m.y < this.height * s
    );
  }

  pressed() {}

  clicked() {}

  released() {}

  wheel() {}

  hovered() {
    window.dispatchEvent(new CustomEvent("cursor", { detail: "hovered" }));
  }

  mousePressed() {
    if (this.enabled && this.hitTest(mouseX, mouseY)) {
      this.pressed();
      return true;
    }
    return false;
  }

  mouseClicked() {
    if (this.enabled && this.hitTest(mouseX, mouseY)) {
      this.clicked();
      return true;
    }
    return false;
  }

  mouseReleased() {
    if (this.enabled && this.hitTest(mouseX, mouseY)) {
      this.released();
      return true;
    }
    return false;
  }

  mouseHovered() {
    if (this.enabled && this.hitTest(mouseX, mouseY)) {
      this.hovered();
      return true;
    } else {
      return false;
    }
  }

  mouseWheel(ev) {
    if (this.enabled && this.hitTest(mouseX, mouseY)) {
      this.wheel(ev);
    }
  }

  reset() {
    this.resetElement();
  }

  resetElement() {}
}
