import Simulation from "./simulation.js";

export default class Player extends Simulation{
    constructor(){
        super();
        this.actions = {};
        this.phoneInUse = true;
    }

    reset(){
        this.actions = {};
        this.phoneInUse = true;
    }
}