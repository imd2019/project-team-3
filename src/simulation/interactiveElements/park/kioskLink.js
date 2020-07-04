import Kiosk from "../kiosk/kiosk.js";

export default class KioskLink extends Kiosk {
  constructor(x, y, width, height, closedImg, openedImg) {
    super(x, y, width, height, closedImg, openedImg);
  }

  clicked() {
    window.dispatchEvent(new CustomEvent("enterView", { detail: "kiosk" }));
    this.disable();
    setTimeout( () => {
      this.enable();
    }, 1000);
  }
}