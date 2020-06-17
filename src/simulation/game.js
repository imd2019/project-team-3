import Sprite from "../sprite.js";

export default class Game extends Sprite {
  constructor(player){
    super(0, 0, windowWidth, windowHeight, undefined);
    this.currentView = 0;
    this.player = player;
  }

  addView(view){
    this.addChild(view);
  }

  enterView(name) {
    for (let i in this.children) {
      if (this.children[i].name === name) {
        this.children[i].enter();
        this.currentView = i;
        break;
      }
    }
  }

  pressed() {
    this.children[this.currentView].mousePressed();
  }

  clicked() {
    this.children[this.currentView].mouseClicked();
  }

  released() {
    this.children[this.currentView].mouseReleased();
  }

  display() {
    this.children[this.currentView].display();
  }

  reset(){
    for(let elem in this.children){
      elem.reset();
    }
    this.currentView = 1;
    this.player.reset(); 
  }
}