import Sprite from "../../../sprite.js";

export default class PhonePostScreen extends Sprite {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.name = "postScreen";
    this.post = createGraphics(width, height);
    this.newPost = undefined;
    this.postReady = false;
  }

  draw() {
    fill(220);
    noStroke();
    rect(0, 0, this.width, this.height);

    if (this.postReady) {
      for (let elem of this.children) {
        if (elem.name === "postButton") {
          elem.postIsReady();
        }
      }
    }

    for (let elem in this.children) {
      if (this.children[elem].visible) {
        if (this.children[1].mouseHovered()) {
          this.post.clear();
          this.post.image(this.children[1].post, 12.5, 12.5, 430, 382);
        } else if (this.children[2].mouseHovered()) {
          this.post.clear();
          this.post.image(this.children[2].post, 12.5, 12.5, 430, 382);
        } else if (this.children[3].mouseHovered()) {
          this.post.clear();
          this.post.image(this.children[3].post, 12.5, 12.5, 430, 382);
        }
      }
    }

    image(this.post, 0, 0, this.width, this.height);
  }

  redraw() {
    this.post.clear();
    if (this.postReady) {
      this.post.image(this.newPost, 12.5, 12.5, 430, 382);
    }
  }

  resetElement() {
    this.newPost = undefined;
    this.postReady = false;
    this.redraw();
  }

  setPost(img) {
    this.newPost = img;
    this.postReady = true;
    this.redraw();
  }

  getPost() {
    return this.newPost;
  }
}