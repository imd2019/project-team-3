import Sprite from "../../../sprite.js";

export default class PhoneHomeScreen extends Sprite {
  constructor(x, y, width, height, backgnd = undefined) {
    super(x, y, width, height, backgnd);
    this.name = "homeScreen";
    this.pos = 0;
    this.activePosts = [];
    this.ds;
    this.post = createGraphics(width, height);
  }

  draw() {
    this.windowResized();
    fill(220);
    noStroke();
    rect(0, 0, this.width, this.height);
    image(this.post, 0, 0, this.width, this.height);
  }

  redraw() {
    this.post.clear();
    for (let elem in this.activePosts) {
      this.post.image(
        this.activePosts[elem],
        30,
        2 + elem * 360 + this.pos,
        450,
        350
      );
    }
  }

  getPost(img) {
    this.activePosts.push(img);
    this.redraw();
  }

  windowResized() {
    this.ds = windowHeight / height / 2;
    this.post.width = this.width / this.ds;
    this.post.height = this.height / this.ds;
  }

  wheeled(event) {
    console.log(this.activePosts.length);
    if (this.visible) {
      if (this.pos > 0) {
        this.pos = 0;
      } else if (this.pos < -(1 + 340 * this.activePosts.length)) {
        this.pos = -(1 + 340 * this.activePosts.length);
      } else {
        this.pos += event.delta / 10;
        this.redraw();
      }
    }
  }
}
