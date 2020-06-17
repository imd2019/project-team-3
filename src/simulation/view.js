import Sprite from "../Sprite.js";

export default class View extends Sprite {
  constructor(name, width, height, backgnd){
    super(0, 0, width, height, backgnd);
    this.name = name;
    this.width = width;
    this.height = height;
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

  reset() {
    if (this.name != "park") {
      this.alreadyEntered = false;
    }
  }
}