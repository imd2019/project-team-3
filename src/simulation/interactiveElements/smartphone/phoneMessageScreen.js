import Sprite from "../../../sprite.js";

export default class PhoneMessage extends Sprite {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.name = "messageScreen";
    this.conversation = [];
    this.pos = 0;
    this.message = createGraphics(width, height);
  }

  draw() {
    fill(220);
    noStroke();
    rect(0, 0, this.width, this.height);

    image(this.message, 0, 0, this.width, this.height);

    textFont(window.fonts.franklinGothic);
    textSize(16);
    textAlign(LEFT, CENTER);

    fill(100);
    rect(0, 0, this.width, 75);
    fill(150);
    rect(0, 0, 75, 75);

    if (this.children[0].mouseHovered()) {
      this.bufferAnimation();
    } else if (this.children[1].mouseHovered()) {
      this.bufferAnimation();
    } else {
      this.redraw();
    }
  }

  redraw() {
    this.message.clear();
    this.message.fill(220);
    this.message.noStroke();

    this.message.rect(0, 0, this.width, this.height);

    this.message.textFont(window.fonts.franklinGothic);
    this.message.textSize(16);
    this.message.textAlign(LEFT, CENTER);

    this.message.fill(200);
    this.message.rect(20, 90 + this.pos, 300, 70, 5);

    this.message.noStroke();
    this.message.fill(0);
    this.message.text(
      "Hallo, ich bin Journalist bei der 'The Daily Whisper' und hätte ein paar Fragen.",
      30,
      90 + this.pos,
      290,
      60
    );

    for (let elem in this.conversation) {
      if (this.conversation[elem].isClicked) {
        this.message.fill(170);

        this.message.rect(130, 180 + 180 * elem + this.pos, 300, 70, 5);
        this.message.noStroke();
        this.message.fill(0);
        this.message.text(
          this.conversation[elem].conversationText,
          140,
          180 + 180 * elem + this.pos,
          290,
          70
        );
      }
    }

    for (let elem in this.conversation) {
      this.message.fill(200);

      this.message.rect(20, 270 + 180 * elem + this.pos, 300, 70, 5);
      this.message.noStroke();
      this.message.fill(0);
      this.message.text(
        this.conversation[elem].conversationAnswer,
        30,
        270 + 180 * elem + this.pos,
        290,
        70
      );
    }
  }

  updatePosition() {
    this.pos = (this.pos - 0.2) * 9;
  }

  showConversation(textNode) {
    let conv = textNode;
    this.conversation.push(conv);
  }

  bufferAnimation() {
    this.message.textAlign(CENTER, CENTER);
    this.message.fill(170);
    this.message.rect(
      350,
      180 + 180 * this.conversation.length + this.pos,
      80,
      70,
      5
    );

    this.message.noStroke();
    this.message.fill(0);
    this.message.text(
      ".  .  .",
      350,
      180 + 180 * this.conversation.length + this.pos,
      80,
      70
    );
  }

  wheel(ev) {
    if (this.visible) {
      if (this.pos > 0) {
        this.pos = 0;
      } else if (this.pos < -(1 + 70 * this.conversation.length)) {
        this.pos = -(1 + 70 * this.conversation.length);
      } else {
        this.pos += ev.delta / 10;
        this.redraw();
      }
    }
  }
}