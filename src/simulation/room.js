export default class Room{
    constructor(name){
        this.name = name;
        this.alreadyEntered = false;
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