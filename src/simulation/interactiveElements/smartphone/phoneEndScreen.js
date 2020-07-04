import Sprite from "../../../sprite.js";

export default class PhoneEndScreen extends Sprite {
  constructor(x, y, width, height, overlay, user) {
    super(x, y, width, height);
    this.name = "endScreen";
    this.overlay = overlay;
    this.user = user;
    this.answered = false;
    this.role = undefined;
    this.pos = 0.1;
    this.message = createGraphics(width, height);
    this.buttonsActivated = false;
    this.inputActivated = false;
    this.mailSent = false;
    this.mailFailed = false;
    this.mailAddress = undefined;
  }

  draw() {
    fill(220);
    noStroke();
    rect(0, 0, this.width, this.height);

    this.mouseScroll();

    image(this.message, 0, 0, this.width, this.height);

    textFont(window.fonts.franklinGothic);
    textSize(16);
    textAlign(LEFT, CENTER);

    rect(0, 0, this.width, 80);

    image(this.user, 20, 20);


    fill(100);
    rect(100, 71, this.width - 115, 4);

    this.redraw();
  }

  answer(role) {
    this.answered = true;
    this.role = role;
  }

  redraw() {
    this.message.clear();
    this.message.fill(220);
    this.message.noStroke();

    this.message.textFont(window.fonts.franklinGothic);
    this.message.textSize(20);
    this.message.textAlign(LEFT, CENTER);

    this.message.fill(200);
    this.message.rect(20, 100 + this.pos, 330, 130, 5);

    this.message.noStroke();
    this.message.fill(1);
    this.message.text(
      "Es war eine langer Tag, mein Freund. Wie ich sehe, bist du nun einer von uns.",
      35,
      105 + this.pos,
      315,
      115
    );

    if (this.answered) {
      this.message.fill(170);
      this.message.rect(90, 250 + this.pos, 330, 130, 5);
      this.message.noStroke();
      this.message.fill(0);
      this.message.text(
        "Hast du mir geschrieben? Wovon sprichst du? Weißt du wer ich bin?",
        105,
        250 + this.pos,
        320,
        120
      );

      this.message.fill(200);

      this.message.rect(20, 400 + this.pos, 410, 400, 5);
      this.message.noStroke();
      this.message.fill(0);
      this.message.text(
        "Natürlich. Du hast deine Spuren bereits hinterlassen. \nDu bist ein" +
        " " +
        this.role +
        ".",
        35,
        380 + this.pos,
        400,
        120
      );
      this.children[1].draw();
    }

    if (this.buttonsActivated) {
      this.message.fill(200);

      this.message.rect(20, 820 + this.pos, 330, 130, 5);
      this.message.noStroke();
      this.message.fill(0);
      this.message.text(
        "Möchtest du mehr erfahren oder es noch einmal versuchen?",
        35,
        830 + this.pos,
        320,
        120
      );
    }

    if (this.inputActivated) {
      this.message.fill(200);

      this.message.rect(20, 970 + this.pos, 410, 180, 5);
      this.message.noStroke();
      this.message.fill(0);
      this.message.text(
        "Super! Nach Eingabe deiner E-Mail-Adresse schicken wir dir unsere Handlungsempfehlungen für den Umgang mit Informationen in sozialen Netzwerken als PDF zu.",
        35,
        980 + this.pos,
        400,
        170
      );
    }

    if (this.mailSent) {
      this.message.fill(170);
      this.message.rect(90, 1170 + this.pos, 330, 130, 5);
      this.message.noStroke();
      this.message.fill(0);
      this.message.text(
        "Meine E-Mail-Adresse lautet " + this.mailAddress + ".",
        105,
        1180 + this.pos,
        320,
        120
      );
    }

    if (this.mailFailed) {
      this.message.fill(200);
      this.message.rect(20, 1320 + this.pos, 330, 130, 5);
      this.message.noStroke();
      this.message.fill(0);
      this.message.text(
        "Upps! Da ist wohl etwas schiefgelaufen.",
        35,
        1330 + this.pos,
        320,
        120
      );
    } else {
      this.message.fill(200);

      this.message.rect(20, 1320 + this.pos, 330, 130, 5);
      this.message.noStroke();
      this.message.fill(0);
      this.message.text(
        "Vielen Dank! Check mal deine E-Mails.",
        35,
        1330 + this.pos,
        320,
        120
      );
    }
  }

  sendMail(mail) {
    this.mailSent = true;
    this.mailAddress = mail;
    this.children[3].show();
  }

  sendFailed() {
    this.mailFailed = true;
  }

  buttonsActive() {
    this.buttonsActivated = true;
  }

  inputActive() {
    this.inputActivated = true;
  }

  updatePosition() {
    this.pos = this.pos * 4.99;
  }

  showConversation(textNode) {
    let conv = textNode;
    this.conversation.push(conv);
  }

  bufferAnimation() {
    this.message.textAlign(CENTER, CENTER);
    this.message.fill(170);
    this.message.rect(400, 180 + 180 * this.conversation.length + this.pos, 80, 70, 5);

    this.message.noStroke();
    this.message.fill(0);
    this.message.text(".  .  .", 400, 180 + 180 * this.conversation.length + this.pos, 80, 70);
  }

  mouseScroll() {
    let ev = {};
    if (this.mouseHovered()) {
      if (mouseY < 0.25 * windowHeight) {
        ev["delta"] = -6;
        this.wheel(ev);
      } else if (mouseY > 0.7 * windowHeight) {
        ev["delta"] = 6;
        this.wheel(ev);
      }
    }
  }

  wheel(ev) {
    if (this.visible) {
      if (this.pos > 0) {
        this.pos = 0;
        // } else if (this.pos < -(1 + this.message.height)) {
        //   this.pos = -(1 + this.message.height);
      } else {
        this.pos -= ev.delta;
        this.redraw();
      }
    }
  }

  resetElement() {
    this.answered = false;
    this.role = undefined;
    this.pos = 0.1;
    this.redraw();
  }
}
