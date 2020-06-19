import Sprite from "../../Sprite.js";

export default class DemoBench extends Sprite {
  constructor(x, y, width, height, backgnd) {
    super(x, y, width, height, backgnd);
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("addAction", { detail: {origin: "demo", name: "demo-visited", data: true}}));
  }
}