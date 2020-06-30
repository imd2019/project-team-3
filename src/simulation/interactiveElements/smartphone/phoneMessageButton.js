import Sprite from "../../../sprite.js";

export default class PhoneMessageButton extends Sprite {
  constructor(x, y, width, height, name, backgnd = undefined) {
    super(x, y, width, height, backgnd);
    this.name = "messageButton" + name;
    this.messages = [];
    this.currentMessage = undefined;
    this.conversationIndex = 0;
    this.event = undefined;
  }

  clicked() {
    this.currentMessage.isClicked = true;
    setTimeout(() => {
      this.parent.children.forEach((btn) => {
        btn.updateMessages();
      });
    }, 0); // setTimeout as temporary bugfix - a real fix will need bigger code restructuring

    this.parent.showConversation(this.currentMessage);
    this.parent.updatePosition();
    this.parent.redraw();

    if (this.currentMessage.conversationEnded) {
      this.parent.children.forEach((btn) => {
        btn.hide();
        btn.disable();
      });
      window.dispatchEvent(new CustomEvent("endConversation"));
    }
  }

  setEvent() {
    this.event = this.parent.event;
    this.setUpMessages();
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
      this.show();
      this.enable();
    } else if (this.conversationEnd || this.conversationIndex >= 4) {
      this.hide();
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
            switch (this.event) {
              case "interview":
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

              case "invite":
                conversation = {
                  id: 1,
                  buttonText: "Das klingt ja interessant.",
                  conversationText:
                    "Ich bin mir in manchen Dingen tatsächlich unsicher. Vielleicht finde ich hier ja Antworten auf meine Fragen.",
                  conversationAnswer:
                    "Du bist damit nicht alleine. Wir alle wurden von den Mainstream-Medien geblendet. Aber damit ist es nun vorbei. Willkommen!",
                  conversationEnded: true,
                };
                break;
            }

            break;

          case "messageButtonB":
            switch (this.event) {
              case "interview":
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

              case "invite":
                conversation = {
                  id: 1,
                  buttonText: "Das passiert jetzt nicht wirklich.",
                  conversationText:
                    "Ihr kennt also 'die Wahrheit'? Vermutlich zündet ihr auch regelmäßig 5G-Türme auf eurer Suche nach der Wahrheit an.",
                  conversationAnswer:
                    "Schafe wie du werden erst verstehen, was um sie herum wirklich passiert, wenn es längst zu spät ist.",
                  conversationEnded: true,
                };
                break;
            }
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
}
