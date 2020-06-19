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
        if (this.name === "park") {
          if (this.children[6].x * this.scale < Math.abs(this.x) - 6 * speed) {
            // moon
            this.children[0].x += 1 * speed;
            // city
            this.children[1].x += 2 * speed;
            // street 
            for (let i = 2; i < 6; i++) {
              this.children[i].x += 3 * speed;
            }
            // foreground
            for (let i = 6; i < this.children.length; i++) {
              this.children[i].x += 3.5 * speed;
            }
          }
        } else {
          if (this.x < - 3.5 * speed) {
            this.x += 3.5 * speed;
          }
        }
        break;
      case "right":
        if (this.name === "park") {
          if (this.children[6].x * this.scale > this.x + 6 * speed) {
            // moon
            this.children[0].x -= 1 * speed;          
            // city
            this.children[1].x -= 2 * speed;
            // street 
            for (let i = 2; i < 6; i++) {
              this.children[i].x -= 3 * speed;
            }
            // foreground
            for (let i = 6; i < this.children.length; i++) {
              this.children[i].x -= 3.5 * speed;
            }
        }
        } else {
          if (this.x > windowWidth - this.width * this.scale) {
            this.x -= 3.5 * speed;
          }
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