import Simulation from "./simulation.js";

export default class Player extends Simulation{
    constructor(){
        this.actions = {};
        this.phoneInUse = true;
    }

    reset(){
        this.actions = {};
        this.phoneInUse = true;
    }
}