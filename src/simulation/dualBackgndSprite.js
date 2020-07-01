import Sprite from "../sprite.js";

export default class DualBackgndSprite extends Sprite {
  constructor(x, y, width, height, backgnd_1, backgnd_2) {
    super(x, y, width, height, backgnd_1);
    this.backgnd_2 = backgnd_2;
    this.on = true;
  }

  clicked() {
    this.changeBackgnd();
  }

  changeBackgnd(){
      this.on = !this.on;
  }

  draw(){
    if(this.on){
      image(this.backgnd, 0, 0, this.width, this.height);
    } else{
      image(this.backgnd_2, 0, 0, this.width, this.height);
    }
  }

  resetElement() {
    this.on = true;
  }
}