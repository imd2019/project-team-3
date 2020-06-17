import Sprite from "../Sprite.js";

export default class View extends Sprite {
  constructor(name, width, height, backgnd){
    super((windowWidth / 2) - (width / 2), 0, width, height, backgnd);
    this.name = name;
    this.width = width;
    this.height = height;
    if (name != "park") {
      this.alreadyEntered = false;
    } else {
      this.alreadyEntered = true;
    }
    this.scale = windowHeight / height;
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