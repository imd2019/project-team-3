import EventDispatcher from "./eventDispatcher.js"

export default class DisplayObject extends EventDispatcher { 
  constructor(x, y, width, height, backgnd = undefined) {
    super();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.backgnd = backgnd;
    this.scale = 1;
    this.rotation = 0;
    this.visible = true;

    this.saveX = this.x;
    this.saveY = this.y;
    this.saveScale = this.scale;
  }

  draw() {
    if (this.backgnd != undefined) {
      image(this.backgnd, 0, 0, this.width, this.height);
    }
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
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  mousePressed() { return false; }

  mouseClicked() { return false; }

  mouseReleased() { return false; }

  mouseWheel(ev) { }

  reset() {
    this.x = this.saveX;
    this.y = this.saveY;
    this.scale = this.saveScale;
  }
}