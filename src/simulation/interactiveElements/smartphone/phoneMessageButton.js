import Sprite from "../../../sprite.js";

export default class PhoneMessageButton extends Sprite {
  constructor(x, y, width, height, name, backgnd = undefined) {
    super(x, y, width, height, backgnd);
    this.name = "messageButton" + name;
    this.messages = [];
    this.currentMessage;
    this.conversationIndex = 0;
  }

  clicked() {
    if (this.currentMessage.conversationEnded) {
      window.dispatchEvent(new CustomEvent("endConversation"));
    }

    this.currentMessage.isClicked = true;
    window.dispatchEvent(
      new CustomEvent("updateConversation", {
        detail: this.currentMessage,
      })
    );
  }

  draw() {
    if (this.mouseHovered()) {
      stroke("yellow");
    } else {
      noStroke();
    }

    textAlign(CENTER, CENTER);
    fill("grey");
    rect(0, 0, this.width, this.height, 5);
    noStroke();
    fill("black");
    text(this.currentMessage.buttonText, 0, 0, this.width, this.height);
  }

  updateMessages() {
    this.setUpMessages();

    if (this.conversationIndex > 2 && this.conversationIndex < 4) {
      this.visible = true;
      this.enable();
    } else if (this.conversationEnd || this.conversationIndex >= 4) {
      this.visible = false;
      this.disable();
    }
  }

  setUpMessages() {
    this.conversationIndex++;

    let conversation;

    switch (this.conversationIndex) {
      case 1:
        switch (this.name) {
          case "messageButtonA":
            conversation = {
              id: 1,
              buttonText: "Na klar, schießen Sie los.",
              conversationText:
                "Hi. Das wundert mich aber. Worum geht es denn?",
              conversationAnswer:
                "Ihr Name ist in Verbindung mit den gerade stattfindenden Demos aufgetaucht. Unterstützen Sie diese?",
              conversationEnded: false,
            };

            break;

          case "messageButtonB":
            conversation = {
              id: 1,
              buttonText: "Kein Interesse.",
              conversationText:
                "Von der 'The Daily Whisper' also? Euch beantworte ich keine Fragen!",
              conversationAnswer:
                "Na gut. Dann checken Sie lieber mal ihren Socialbook-Feed.",
              conversationEnded: true,
            };

            break;
        }

        break;

      case 2:
        switch (this.name) {
          case "messageButtonA":
            conversation = {
              id: 2,
              buttonText: "Option A 2",
              conversationText:
                "Ich bin zur zweiten ID gesprungen. Blablablabla",
              conversationAnswer: "095382503928503289 3509853029052303529",
              conversationEnded: false,
            };

            break;
          case "messageButtonB":
            conversation = {
              id: 2,
              buttonText: "Option B 2",
              conversationText:
                "Ich bin zur zweiten ID gesprungen. Blablablabla",
              conversationAnswer: "..!..",
              conversationEnded: false,
            };
            break;
        }

        break;

      case 3:
        switch (this.name) {
          case "messageButtonA":
            conversation = {
              id: 3,
              buttonText: "Option A 3",
              conversationText: "Ich bin zur ID 3 gesprungen. Blablablabla",
              conversationAnswer: "lolololloll",
              conversationEnded: false,
            };

            break;
          case "messageButtonB":
            conversation = {
              id: 3,
              buttonText: "Option B 3",
              conversationText:
                "Ich bin zur dritten ID gesprungen. Blablablabla",
              conversationAnswer: "roplkasdlpaspdlaspd",
              conversationEnded: false,
            };

            break;
        }
        break;
    }

    if (this.conversationIndex < 4) {
      this.messages.push(conversation);
      this.getMessages(this.conversationIndex);
    }
  }

  getMessages(conversationIndex) {
    let currentMessage = this.messages.find(
      (currentMessage) => currentMessage.id === conversationIndex
    );

    this.currentMessage = currentMessage;
  }
  endConversation() {
    this.hide();
    this.disable();
  }
}
