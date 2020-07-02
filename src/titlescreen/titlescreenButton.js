import InteractiveObject from "../interactiveObject.js";

export default class TitlescreenButton extends InteractiveObject {
  constructor(
    x,
    y,
    width,
    height,
    colour = color(0, 255, 0),
    text,
    textcolour = color(0, 0, 255),
    textaccentcolour = color(255, 0, 0),
    font,
    ev,
    on,
    evTimerLamp
  ) {
    super(x, y, width, height);
    this.colour = colour;
    this.text = text;
    this.textcolour = textcolour;
    this.textaccentcolour = textaccentcolour;
    this.maincolour = this.textcolour;
    this.font = font;
    this.on = on = true;
    this.xw = 0;
    this.ev = ev;
    this.ableToUse = false;
    this.evTimerLamp = evTimerLamp = 0;
  }
  draw() {
    noStroke();
    fill(this.colour);
    rect(this.xw, 0, this.width, this.height);
    fill(this.maincolour);
    textSize(this.height);
    textFont(this.font);
    text(this.text, this.xw, 0, this.width + this.xw, this.height);
    // console.log(this.ableToUse);

    if (this.ableToUse == true) {
      //Lampe flackern lassen
      this.evTimerLamp++;
      if (this.evTimerLamp >= random(100, 5000)) {
        window.dispatchEvent(new CustomEvent("lampFlickering"));
        this.evTimerLamp = 0;
      }
      //Buttonstuff
      if (this.mouseHovered()) {
        this.maincolour = this.textaccentcolour;
        this.xw = 10;

        if (this.on === true) {
          window.dispatchEvent(new CustomEvent("buttonClick"));
        }
        this.on = false;
      } else {
        this.xw = 0;
        this.maincolour = this.textcolour;
        this.on = true;
      }
    }
  }
  clicked() {
    if (this.ableToUse === true) {
      window.dispatchEvent(new CustomEvent(this.ev, { detail: this.ev }));
      window.dispatchEvent(new CustomEvent("buttonClick"));

      // console.log(this.ev);
    }
  }
}
