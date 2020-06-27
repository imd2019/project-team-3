import Sprite from "../../../sprite.js";

export default class PhonePostScreen extends Sprite {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.name = "postScreen";
    this.post = createGraphics(width, height);
    this.newPost;
    this.postReady = false;
  }

  draw() {
    text("postScreen", 0, 0);
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