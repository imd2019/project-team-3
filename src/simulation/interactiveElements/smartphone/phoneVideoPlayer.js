import Sprite from "../../../sprite.js";

export default class PhoneVideoPlayer extends Sprite {
  constructor(x, y, width, height, backgnd, videos) {
    super(x, y, width, height, backgnd);
    this.videos = videos;
    this.video = undefined;
    this.screen = undefined;
    this.pos = undefined;
    this.isClicked = false;
    this.videoSet = false;
    this.hide();
    this.disable();
  }

  draw() {
    this.enable();
    this.screen = this.parent.message;
    this.pos = this.parent.pos;

    this.screen.image(this.video, 30, 500 + this.pos, this.width, this.height);
    if (!this.isClicked) {
      this.screen.image(
        this.backgnd,
        30,
        500 + this.pos,
        this.width,
        this.height
      );
    }
  }

  setVideo() {
    if (this.parent.role === "Verschwörungstheoretiker") {
      this.video = this.videos[0];
    }
  }

  startVideo() {
    this.video.size(this.width);
    this.video.play();
    this.video.volume(1);
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("tapPhone"));
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
    this.parent.pos = -290;
  }

  resetElement() {
    this.video.pause();
    this.video.hide();
    this.screen = undefined;
    this.pos = undefined;
    this.isClicked = false;
    this.videoSet = false;
    this.hide();
    this.disable();
  }
}
