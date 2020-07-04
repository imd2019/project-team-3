import Sprite from "../../../sprite.js";

export default class PhoneMailButton extends Sprite {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.name = "mailButton";
    this.disable();
    this.hide();
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("tapPhone"));
    this.hide();
    this.disable();

    // send mail
    let from = "info@florian-beck.de";
    let to = "social-whispers@interactivemedia.design";
    let text = ` 
    <p>
      Liebe*r Teilnehmer*in,<br />
      <br />
      vielen Dank für Ihre Teilnahme an unserer Simulation und Ihr Interesse am Thema!<br />
      Im Anhang finden Sie weitere Hinweise zum Umgang mit Informationen in sozialen Medien.<br />
      <br />
      Viele Grüße<br />
      <br />
      Florian, Lars, Luisa und Max
    </p>`

    this.sendMail(from, to, text);
    console.log("Send mail to: " + from);
  }

  draw() {
    this.enable();
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
    text("Mehr Informationen", 0, 0, this.width, this.height);
  }

  sendMail(from, to, content) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "./src/simulation/interactiveElements/smartphone/mail.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        window.dispatchEvent(new CustomEvent("mailSendt"));
        console.log("Mail sendt successfully!");
      }
    };
    xhr.send(JSON.stringify({ from: from, to: to, content: content }));
  }

  resetElement() {
    this.disable();
    this.hide();
  }
}