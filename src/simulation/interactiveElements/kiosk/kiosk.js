import Sprite from "../../../Sprite.js";

export default class Kiosk extends Sprite {
  constructor(x, y, width, height, closedImg, openedImg) {
    super(x, y, width, height, closedImg);
    this.openedImg = openedImg;
    this.opened = false;
  }

  open() {
    this.opened = true;
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

  draw(){
    if(this.opened) {
      image(this.openedImg, 0, 0, this.width, this.height);
    } else {
      image(this.backgnd, 0, 0, this.width, this.height);
    }
  }

  resetElement() {
    this.opened = false;
  }
}