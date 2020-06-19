import Sprite from "../../Sprite.js";

export default class Kiosk extends Sprite {
  constructor(x, y, width, height, onImg, offImg) {
    super(x, y, width, height, onImg);
    this.offImg = offImg;
    this.on = true;
  }

  clicked(){
      this.on = !this.on;
  }

  draw(){
    if(this.on){
      image(this.backgnd, 0, 0, this.width, this.height);
    } else{
      image(this.offImg, 0, 0, this.width, this.height);
    }
  }
}