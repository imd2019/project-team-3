import displayObject from "./displayObject.js";

export default class DisplaySprite extends DisplayObject {
  constructor(x, y, width, height) {
    super(x, y);
    this.width = width;
    this.height = height;
    this.parent = undefined;
    this.children = [];
  }

  display() {
    if (this.visible) {
      push();
      translate(this.x, this.y);
      rotate(this.rotation);
      scale(this.scale);

      this.draw();

      for (let index in this.children) {
        this.children[index].display();
      }

      pop();
    }
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
