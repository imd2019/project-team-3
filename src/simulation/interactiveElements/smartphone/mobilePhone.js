import Sprite from "../../../sprite.js";

export default class MobilePhone extends Sprite{
  constructor(width, height, backgnd, overlay){
    let scale = 0.8 * windowHeight / height;
    super((windowWidth - width * scale)/ 2, (windowHeight - height * scale) / 2, width, height, backgnd);
    this.overlay = overlay;
    this.scale = scale;
    this.currentScreen;
    this.disable();
    this.hide();
  }

  showScreen(name) {
    for (let i in this.children) {
      if (this.children[i].name === name) {
        this.currentScreen = i;
        return true;
      }
    }
    return false;
  }

  display() {
    if (this.visible) {
      push();
      translate(this.x, this.y);
      rotate(this.rotation);
      scale(this.scale);

      this.draw();

      for (let i in this.children) {
        if (this.children[i].name === undefined) {
          this.children[i].display();
        } else if (i === this.currentScreen) {
          this.children[i].display();
        }
      }

      pop();
    }
  }

  draw() {
    if (this.backgnd != undefined) {
        image(this.backgnd, 0, 0, this.width, this.height);
        image(this.overlay, 18.9, 24.6, this.width - 2 * 18.9, this.height - 96);
      }
  }

  mousePressed() {
    if (this.enabled && this.hitTest(mouseX, mouseY)) {
      this.pressed();
      return true;
    }
  }

  mouseClicked() {
    if (this.enabled && this.hitTest(mouseX, mouseY)) {
      this.clicked();
      return true;
    }
  }

  mouseReleased() {
    if (this. enabled && this.hitTest(mouseX, mouseY)) {
      this.released();
      return true;
    }
  }
}