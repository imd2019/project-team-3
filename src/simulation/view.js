import Sprite from "../Sprite.js";

export default class View extends Sprite {
    constructor(name, backgnd){
        super(0, 0, windowWidth, windowHeight, backgnd);
        this.name = name;
        if (name != "park") {
            this.alreadyEntered = false;
        } else {
            this.alreadyEntered = true;
        }
    }

    enter() {
        this.alreadyEntered = true;
    }

    isEntered() {
        return this.alreadyEntered;
    }

    reset() {
        if (this.name != "park") {
            this.alreadyEntered = false;
        }
    }
}