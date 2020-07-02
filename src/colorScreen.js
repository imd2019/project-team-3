import DisplayObject from "./displayObject.js";

export default class ColorScreen extends DisplayObject {
  constructor(x, y, width, height, color, opacity = 1) {
    super(x, y, width, height);
    this.color = color;
    this.opacity = opacity;
  }

  draw() {
    this.color.setAlpha(255 * this.opacity);
    fill(this.color);
    rect(0, 0, this.width, this.height);
  }
}