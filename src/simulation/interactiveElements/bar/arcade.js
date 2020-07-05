import Sprite from "../../../sprite.js";

export default class Arcade extends Sprite {
  constructor(x, y, width, height, backgnd) {
    super(x, y, width, height, backgnd);
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("enterView", { detail: "pong" }));
    window.dispatchEvent(new CustomEvent("addAction", {detail: {
      origin: "bar",
      name: "playPong",
      data: {},
    }}));
  }
}