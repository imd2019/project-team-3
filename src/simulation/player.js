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

  actionDone(view) {
    if (view in this.actions) {
      return true;
    }
    return false;
  }

  reset(){
    this.actions = {};
    this.phoneInUse = true;
  }
}