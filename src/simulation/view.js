import Sprite from "../Sprite.js";

export default class View extends Sprite {
  constructor(name, width, height, backgnd){
    super(0, 0, width, height, backgnd);
    this.name = name;
    if (name != "park") {
      this.alreadyEntered = false;
    } else {
      this.alreadyEntered = true;
    }
    this.scale = windowHeight / height;
    this.x = (windowWidth / 2) - ((width * this.scale) / 2);
  }

  enter() {
    this.alreadyEntered = true;
  }

  isEntered() {
    return this.alreadyEntered;
  }

  move(dir, speed) {
    switch (dir) {
      case "left":
        if (this.x < -6 * speed) {
          this.x += 6 * speed;
        }
        break;
      case "right":
        if (this.x > windowWidth - this.width * this.scale ) {
          this.x -= 6 * speed;
        }
        break;
    }
  }

  mousePressed() {
    for (let elem of this.children) {
      elem.mousePressed();
    }
  }

  mouseClicked() {
    for (let elem of this.children) {
      elem.mouseClicked();
    }
  }

  mouseReleased() {
    for (let elem of this.children) {
      elem.mouseReleased();
    }
  }

  reset() {
    if (this.name != "park") {
      this.alreadyEntered = false;
    }
  }
}