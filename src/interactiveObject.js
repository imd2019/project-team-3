import DisplayObject from "./displayObject.js";

export default class InteractiveObject extends DisplayObject {
  constructor(x, y, width, height, backgnd = undefined) {
    super(x, y, width, height, backgnd);
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
    let e = this;
    let m = createVector(x, y);
    let s = 1;

    while (e != undefined) {
      let vt = createVector(e.x, e.y);
      if (e.parent != undefined) {
        vt.mult(e.parent.scale);
      }
      let vr = p5.Vector.fromAngle(e.rotation);
      let v = p5.Vector.sub(vt, vr);

      m = p5.Vector.sub(m, v);
      s *= e.scale;

      e = e.parent;
    }

    return (
      m.x > 0 && m.x < this.width * s &&
      m.y > 0 && m.y < this.height * s
    );
  }

  // hitTest(x, y) {
  //   let p = this.parent;
  //   let dx = 0;
  //   let dy = 0;
  //   let s = 1;

  //   while (p != undefined) {
  //     if (p.parent != undefined) {
  //       dx += p.x * p.parent.scale;
  //       dy += p.y * p.parent.scale;
  //       s *= p.scale;
  //     } else {
  //       dx += p.x;
  //       dy += p.y;
  //     }

  //     p = p.parent;
  //   }

  //   return (
  //     x > this.x * s + dx &&
  //     x < this.x * s + dx + this.width * s &&
  //     y > this.y * s + dy &&
  //     y < this.y * s + dy + this.height * s
  //   );
  // }

  pressed() {}

  clicked() {}

  released() {}

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
    if (this. enabled && this.hitTest(mouseX, mouseY)) {
      this.released();
      return true;
    }
    return false;
  }

  mouseHovered() {
    if (this.enabled && this.hitTest(mouseX, mouseY)) {
      return true;
    } else {
      return false;
    }
  }
}
