/*
 * Published under the MIT license.
 * (c) 2020 Florian Beck
 */

export default class KeyInput {
  constructor() {
    this.focusElement = undefined;
  }

  getFocus(element) {
    this.focusElement = element;
  }

  keyTyped() {
    if (this.focusElement != undefined) {
      this.sendKeyTyped(key);
    }
    return false;
  }

  keyPressed() {
    if (this.focusElement != undefined) {
      if (keyCode === BACKSPACE) {
        this.deleteKey();
      } else if (
        keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW ||
        keyCode === UP_ARROW || keyCode === DOWN_ARROW
      ) {
        this.arrowKeys(keyCode);
      }
  
      this.sendKeyPressed(keyCode);
    }
    return false;
  }

  sendKeyTyped(key) {
    this.focusElement.keyTyped(key);
  }

  sendKeyPressed(keyCode) {
    this.focusElement.keyPressed(keyCode);
  }

  deleteKey() {
    this.focusElement.deleteKey();
  }

  arrowKeys(keyCode) {
    this.focusElement.arrowKeys(keyCode);
  }
}
