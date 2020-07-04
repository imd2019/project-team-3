/*
 * Published under the MIT license.
 * (c) 2020 Florian Beck
 */

export default class KeyInput {
  constructor() {
    this.focusElement = null;
  }

  getFocus(element) {
    this.focusElement = element;
  }

  keyTyped() {
    this.sendKey(key);
    preventDefault

    return false;
  }

  keyPressed() {
    if (keyCode === BACKSPACE) {
      this.deleteKey();
    }

    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
      this.arrowKeys(keyCode);
    }

    return false;
  }

  sendKey(key) {
    this.focusElement.getKey(key);
  }

  deleteKey() {
    this.focusElement.deleteKey();
  }

  arrowKeys(keyCode) {
    this.focusElement.arrowKeys(keyCode);
  }
}
