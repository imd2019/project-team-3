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

  moveView(dir, speed) {
    this.children[this.currentView].move(dir, speed);
  }

  mousePressed() {
    this.children[this.currentView].mousePressed();
    this.getGlobal().mousePressed();
  }

  mouseClicked() {
    this.children[this.currentView].mouseClicked();
    this.getGlobal().mouseClicked();
  }

  mouseReleased() {
    this.children[this.currentView].mouseReleased();
    this.getGlobal().mouseReleased();
  }

  display() {
    this.children[this.currentView].display();
    this.getGlobal().display();
  }

  getGlobal() {
    for (let elem of this.children) {
      if (!elem.name) {
        return elem;
      }
    }
  }

  reset(){
    for(let elem in this.children){
      elem.reset();
    }
    this.currentView = 1;
    this.player.reset(); 
  }
}