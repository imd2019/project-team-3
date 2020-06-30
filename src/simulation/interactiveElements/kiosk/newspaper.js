import Sprite from "../../../Sprite.js";

export default class Newspaper extends Sprite {
  constructor(x, y, width, height, backgnd, name) {
    super(x, y, width, height, backgnd);
    this.name = name;
    this.visible = false;
    this.enabled = false;
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("addAction", { detail: {
      origin: "kiosk",
      name: "buyNewspaper",
      data: this.name
    }}));
  }
}