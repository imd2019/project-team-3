import Simulation from "./simulation.js";

export default class Player extends Simulation{
    constructor(){
        this.rooms = {
            bar: false,
            coffeeHouse: false,
            demo: false,
            kiosk: false,
            park: true
        };
        this.actions = {};
        this.phoneInUse = true;
    }

    reset(){
        for(let key in this.rooms){
            if(this.rooms.hasOwnProperty(key)){
                this.rooms[key] = false;
            }
        }
        this.rooms.park = true;
        this.actions = {};
        this.phoneInUse = true;
    }
}