import InteractiveObject from "./interactiveObject.js";

export default class Sprite extends InteractiveObject {
  constructor(x, y, width, height, backgnd = undefined) {
    super(x, y, width, height, backgnd);
    this.children = [];
  }

  display() {
    if (this.visible) {
      push();
      translate(this.x, this.y);
      rotate(this.rotation);
      scale(this.scale);

      this.draw();

      for (let elem of this.children) {
        elem.display();
      }

      pop();
    }
  }

  pressed() {
    for (let i = this.children.length - 1; i >= 0; i--) {
      if(this.children[i].mousePressed()) return true;
    }
    return false;
  }

  clicked() {
    for (let i = this.children.length - 1; i >= 0; i--) {
      if(this.children[i].mouseClicked()) {
        return true;
      }
    }
    return false;
  }

  released() {
    for (let i = this.children.length - 1; i >= 0; i--) {
      if(this.children[i].mouseReleased()) return true;
    }
    return false;
  }

  mousePressed() {
    if (this.enabled && this.hitTest(mouseX, mouseY)) {
      this.pressed();
      if (!this.children || this.children.length === 0) {
        return true;
      }
    }
    return false;
  }

  mouseClicked() {
    if (this.enabled && this.hitTest(mouseX, mouseY)) {
      this.clicked();
      if (!this.children || this.children.length === 0) {
        return true;
      }
    }
    return false;
  }

  mouseReleased() {
    if (this. enabled && this.hitTest(mouseX, mouseY)) {
      this.released();
      if (!this.children || this.children.length === 0) {
        return true;
      }
    }
    return false;
  }

  addChild(sprite) {
    sprite.parent = this;
    this.children.push(sprite);
  }

  removeChild(sprite) {
    let index = this.children.indexOf(sprite);
    if (index != -1) {
      sprite.parent = undefined;
      this.children.splice(index, 1);
    }
  }
}
