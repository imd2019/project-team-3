import Sprite from "../../../sprite.js";

export default class PhoneVideoPlayer extends Sprite {
  constructor(x, y, width, height, backgnd, video) {
    super(x, y, width, height, backgnd);
    this.video = video;
    // this.video.size(this.width);
    this.video.hide();
    this.hide();
    this.disable();
    this.screen = undefined;
    this.pos = undefined;
    this.isClicked = false;
    this.videoSet = false;
  }

  draw() {
    this.enable();
    this.screen = this.parent.message;
    this.pos = this.parent.pos;

    this.screen.image(this.video, 30, 335 + this.pos, this.width, this.height);
    if (!this.isClicked) {
      this.screen.image(this.backgnd, 30, 335 + this.pos, this.width, this.height);
    }
  }

  startVideo() {
    this.video.size(this.width);
    this.video.play();
    this.video.volume(1);
  }

  clicked() {
    console.log(this.video);
    this.startVideo();
    this.updatePosition();
    if (!this.isClicked) {
      this.parent.children[2].visible = true;
      this.parent.children[3].visible = true;
    }
    this.isClicked = true;
  }

  updatePosition() {
    this.parent.pos = -175;
  }
}
