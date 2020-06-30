import Sprite from "../../Sprite.js";

export default class Speechbubble extends Sprite {
  constructor(x, y, width, height, backgnd, name) {
    super(x, y, width, height, backgnd);
    this.name = "speechbubble" + name;
    this.bubbleTextNode = undefined;
  }

  clicked() {
    // window.dispatchEvent(new CustomEvent("enterView", { detail: "pong" }));
  }

  draw() {
    rect(0, 0, this.width, this.height, 10);
  }

  setUpBubbles() {
    let bubble;

    switch (this.name) {
      case "speechbubbleDemo_1":
        bubble = {
          text:
            "Die Regierung will uns hinter das Licht führen! Sei kein Schaf, komm' zu uns!",
        };
        break;

      case "speechbubbleDemo_2":
        bubble = {
          text:
            "Die da drüben sind eine Gefahr für uns alle! Fall nicht auf sie rein, stell' dich zu uns!",
        };
        break;

      case "rEvt_Influencer":
        bubble = {
          text: "Hey du, komm' mal rüber! Kannst du mir bei etwas helfen?",
        };
        break;

      case "rEvt_Conspiracy":
        bubble = {
          text: "Hey, hast du Lust, dich zu uns zu gesellen?",
        };
        break;
    }
  }
}
