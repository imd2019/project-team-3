import InteractiveObject from "../../../interactiveObject.js";

export default class PhoneIcon extends InteractiveObject{
  constructor(x, y, width, height, backgnd){
    super(x, y, width, height, backgnd);
    this.rotationAngle = 0;
  }

  draw() {
    push();
    translate(this.width / 2, this.height / 2);
    rotate(this.rotationAngle);
    if (this.backgnd != undefined) {
      image(this.backgnd, -(this.width / 2), -(this.height / 2), this.width, this.height);
    }
    pop();
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("phoneTap"));
    window.dispatchEvent(new CustomEvent("openPhone"));
  }

  resetElement() {
    this.show();
    this.enable();
  }
}