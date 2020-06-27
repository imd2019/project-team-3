import Sprite from "../../../sprite.js";

export default class PhoneHomeScreen extends Sprite {
  constructor(x, y, width, height, postOverlay) {
    super(x, y, width, height);
    this.name = "homeScreen";
    this.pos = 0;
    this.activePosts = [];
    this.postOverlay = postOverlay;
    this.post = createGraphics(width, height);
  }

  draw() {
    text("homeScreen", 0, 0);
    fill(220);
    noStroke();
    rect(0, 0, this.width, this.height);

    // createGraphics
    image(this.post, 0, 0, this.width, this.height);
  }

  redraw() {
    this.post.clear();
    for (let elem in this.activePosts) {
      this.post.image(
        this.postOverlay,
        32.5,
        2 + elem * 410 + this.pos,
        450,
        400
      );
      this.post.image(
        this.activePosts[elem],
        35,
        87 + elem * 410 + this.pos,
        445,
        250
      );
    }
  }

  getPost(img) {
    this.activePosts.push(img);
    this.redraw();
  }

  wheel(ev) {
    if (this.visible) {
      if (this.pos > 0) {
        this.pos = 0;
      } else if (this.pos < -(1 + 340 * this.activePosts.length)) {
        this.pos = -(1 + 340 * this.activePosts.length);
      } else {
        this.pos += ev.delta / 10;
        this.redraw();
      }
    }
  }
}
