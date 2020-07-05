/*
 * Simple pong game.
 * Published under the MIT license.
 * (c) 2020 Max Weber and Florian Beck
 */

import InteractiveObject from "../../../../interactiveObject.js";

export default class PongStartButton extends InteractiveObject {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }

  draw() {
      this.x = (this.parent.width - this.width) / 2;
      this.y = (this.parent.height - this.height) / 2;
      if (this.hover) { 
        fill("#969696");
      } else {
        fill("#c8c8c8");
      }
      rectMode(CORNER, TOP)
      rect(0, 0, this.width, this.height);
      fill("#000000");
      textSize(25);
      textAlign(CENTER, CENTER);
      text("START", this.width / 2, this.height / 2);
  }

  clicked() {
      this.parent.start();
      this.disable();
      this.hide();
  }
}