/*
 * Published under the MIT license.
 * (c) 2020 Florian Beck
 */

import InteractiveObject from "./interactiveObject.js";

export default class TextArea extends InteractiveObject {
  constructor(x, y, width, height, keyInput) {
    super(x, y, width, height);
    this.content = [];
    this.input = keyInput;
    this.cursorPos = 0;
    this.cursorInterval = 0;
  }

  clicked() {
    this.input.getFocus(this);
  }

  getKey(key) {
    if (this.cursorPos < this.content.length - 1) {
      this.content.splice(this.cursorPos, 0, key);
    } else {
      this.content.push(key);
    }
    this.cursorPos++;
  }

  deleteKey() {
    this.content.splice(this.cursorPos - 1, 1);
    this.cursorPos--;
  }

  arrowKeys(keyCode) {
    switch (keyCode) {
      case LEFT_ARROW:
        if (this.cursorPos > 0) {
          this.cursorPos--;
        }
        break;
      case RIGHT_ARROW:
        if (this.cursorPos < this.content.length) {
          this.cursorPos++;
        }
        break;
      case UP_ARROW:
        break;
      case DOWN_ARROW:
        break;
    }
  }

  getLength() {
    for (let i = 0; i < this.content.length; i++) {
      if (this.content[i] === "|") {
        this.content.splice(i, 1);
      }
    }
    return this.content.length;
  }

  getContent() {
    for (let i = 0; i < this.content.length; i++) {
      if (this.content[i] === "|") {
        this.content.splice(i, 1);
      }
    }
    return this.content.join("");
  }

  draw() {
    noFill();
    rect(0, 0, this.width, this.height, 5);
    fill("grey");
    textSize(16);
    textAlign(LEFT, TOP);
    textFont(window.fonts.franklinGothic);
    text(this.content.join(""), 5, 5, this.width - 5, this.height - 5);

    // cursor
    if (this.cursorInterval < 20) {
      if (this.cursorInterval === 10) {
        if (this.cursorPos === this.content.length) {
          this.content.push("|");
        } else {
          this.content.splice(this.cursorPos, 0, "|");
        }
      }
      this.cursorInterval++;
    } else {
      for (let i = 0; i < this.content.length; i++) {
        if (this.content[i] === "|") {
          this.content.splice(i, 1);
        }
      }
      this.cursorInterval = 0;
    }
  }
}
