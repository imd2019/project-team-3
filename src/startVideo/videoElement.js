import DisplayObject from "../displayObject.js";

export default class VideoElement extends DisplayObject {
  constructor(x, y, width, height, video) {
    super(x, y, width, height, video);
    this.volume = 1;
  };

  draw() {
    image(this.backgnd, 0, 0, this.width, this.height);
    this.backgnd.volume(this.volume);
  }

  play() {
    this.backgnd.show();
    this.backgnd.size(this.height);
    this.backgnd.play();

    document.getElementById("startVideo").onended = () => {
      window.dispatchEvent(new CustomEvent("startGame"));
    };
  }

  stop() {
    this.backgnd.stop();
    this.backgnd.hide();
  }
}