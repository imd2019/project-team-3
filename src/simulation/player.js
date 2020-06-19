import Simulation from "./simulation.js";

export default class Player extends Simulation{
  constructor(){
    super();
    this.actions = {};
    this.phoneInUse = true;
  }

  addAction(origin, name, data){
    if (!(origin in this.actions)) {
        this.actions[origin] = {};
    }
    this.actions[origin][name] = data;
  }

  reset(){
    this.actions = {};
    this.phoneInUse = true;
  }
}