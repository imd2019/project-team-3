import Sprite from "../../../sprite.js";

export default class PhonePostScreen extends Sprite {
  constructor(x, y, width, height, backgnd = undefined) {
    super(x, y, width, height, backgnd);
    this.name = "postScreen";
    this.visible = false;
    this.post = createGraphics(width, height);
    this.ds;
    this.newPost;
    this.postReady = false;
  }

  draw() {
    this.windowResized();
    fill(220);
    noStroke();
    rect(0, 0, this.width, this.height);
    if (this.visible) {
      window.dispatchEvent(
        new CustomEvent("newPost", { detail: this.postReady })
      );
    }
    image(this.post, 0, 0, this.width, this.height);
  }

  redraw() {
    this.post.clear();
    if (this.postReady) {
      this.post.image(this.newPost, 0 + 30, 25, 450, 350);
    }
  }

  windowResized() {
    this.ds = windowHeight / height / 2;
    this.post.width = this.width / this.ds;
    this.post.height = this.height / this.ds;
  }

  reset() {
    this.postReady = false;
    this.newPost = null;
    this.redraw();
  }

  getPost(img) {
    this.newPost = img;

    this.postReady = true;

    this.redraw();
  }
}
