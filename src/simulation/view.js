import Sprite from "../Sprite.js";

export default class View extends Sprite {
  constructor(name, width, height, backgnd){
    super(0, 0, width, height, backgnd);
    this.name = name;
    this.alreadyEntered = false;
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
            this.moveSound();

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
            this.moveSound();
            this.x += 3.5 * speed;
          }
        }
        break;
      case "right":
        if (this.name === "park") {
          if (this.children[6].x * this.scale > this.x + 6 * speed) {
            this.moveSound();
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
            this.moveSound();
            this.x -= 3.5 * speed;
          }
        }
        break;
    }
  }

  moveSound() {
    if (this.name != "bar") {
      window.dispatchEvent(new CustomEvent("walkOutside"));
    } else {
      window.dispatchEvent(new CustomEvent("walkInside"));
    }
  }

  mousePressed() {
    for (let i = this.children.length - 1; i >= 0; i--) {
      if(this.children[i].mousePressed()) return true;
    }
    return false;
  }

  mouseClicked() {
    for (let i = this.children.length - 1; i >= 0; i--) {
      if(this.children[i].mouseClicked()) return true;
    }
    return false;
  }

  mouseReleased() {
    for (let i = this.children.length - 1; i >= 0; i--) {
      if(this.children[i].mouseReleased()) return true;
    }
    return false;
  }

  reset() {
    if (this.name != "park") {
      this.alreadyEntered = false;
    }
    for (elem of this.children) {
      if(elem.enabled === false)
        elem.enabled = true;
      if (elem.visible === false)
        elem.visible = true;
    }
  }
}