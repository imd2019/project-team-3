
export default class Simulation{
  constructor(){
      this.manipulativity = 0.5;
      this.reflectivity = 0.5;
      this.attentionseeking = 0.5;
  }

  getPersona(){}

  changeManipulativity(steps){
    this.manipulativity += 0.1 * steps;
  }

  changeReflectivity(steps){
    this.reflectivity += 0.1 * steps;
  }

  changeAttentionseeking(steps){
    this.attentionseeking += 0.1 * steps;
  }
}