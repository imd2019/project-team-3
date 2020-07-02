import DisplayObject from "../displayObject.js";

export default class TsInfo extends DisplayObject {
  constructor(
    x,
    y,
    width,
    height,
    colour,
    text,
    textColour,
    textSize,
    font,
    contentText,
    contentTextFont
  ) {
    super(x, y, width, height);
    this.colour = colour;
    this.text = text;
    this.textColour = textColour;
    this.textSize = textSize;
    this.font = font;
    this.mainColour = this.textColour;
    this.visible = false;
    (this.contentText = contentText), (this.contentTextFont = contentTextFont);
  }
  draw() {
    if (this.visible === true) {
      noStroke();
      textFont(this.font);
      fill(this.colour);
      rect(0, 0, this.width, this.height);
      fill(this.mainColour);
      textSize(this.textSize);
      text(this.text, 0, 0, this.width, this.height);

      textSize(this.textSize * 0.6);
      textFont(this.contentTextFont);
      textLeading(this.textSize);
      text(this.contentText, 0, 100, this.width, this.height);
    }
  }
}
