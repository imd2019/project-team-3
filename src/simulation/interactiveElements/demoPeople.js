import Sprite from "../../sprite.js";

export default class DemoPeople extends Sprite {
  constructor(x, y, width, height, backgnd, type) {
    super(x, y, width, height, backgnd);
    this.type = type;
  }

  clicked() {
        
  }
}