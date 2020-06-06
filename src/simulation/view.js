import Sprite from "../sprite.js";

export default class View extends Sprite {
    constructor(name, backgnd){
        super(0, 0, windowWidth, windowHeight);
        this.name = name;
        this.backgnd = backgnd;
        if (name != "park_1") {
            this.alreadyEntered = false;
        } else {
            this.alreadyEntered = true;
        }
    }

    draw(){

    }

    enter() {
        this.alreadyEntered = true;
    }

    isEntered() {
        return this.alreadyEntered;
    }

    reset() {
        if (this.name != "park_1") {
            this.alreadyEntered = false;
        }
    }
}