import Sprite from "../sprite.js";

export default class Game extends Sprite {
  constructor(player){
    super(0, 0, windowWidth, windowHeight, undefined);
    this.currentView = undefined;
    this.player = player;
    this.children = {};
  }

  addView(view){
    this.children[view.name] = view;
  }

  enterView(name) {
    if (name in this.children) {
        this.children[name].enter();
        this.currentView = name;
    }
  }

  moveView(dir, speed) {
    if (this.currentView) {
      this.children[this.currentView].move(dir, speed);
    }
  }

  mousePressed() {
    if (this.currentView) {
      if (!this.children.global.mousePressed() && !this.player.phoneInUse) {
        this.children[this.currentView].mousePressed();
      }
    }
  }

  mouseClicked() {
    if (this.currentView) {
      if (!this.children.global.mouseClicked() && !this.player.phoneInUse) {
        this.children[this.currentView].mouseClicked();
      }
    }
  }

  mouseReleased() {
    if (this.currentView) {
      if (!this.children.global.mouseReleased() && !this.player.phoneInUse) {
        this.children[this.currentView].mouseReleased();
      }
    }
  }

  display() {
    if (this.currentView) {
      this.children[this.currentView].display();
      this.children.global.display();
    }

    if (mouseX >= windowWidth - 150) {
      if (mouseX >= windowWidth - 50) this.moveView("right", 3);
      else this.moveView("right", 1);
    } else if (mouseX <= 150) {
      if(mouseX <= 50) this.moveView("left", 3);
      else this.moveView("left", 1);
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