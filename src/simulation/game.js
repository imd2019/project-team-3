
export default class Game{
    constructor(player){
        this.rooms = [];
        this.currentRoom = 0;
        this.player = player;

    }

    addRoom(room){
        this.rooms.push(room);
    }

    reset(){
        for(let elem in this.rooms){
            elem.reset();
        }
        this.currentRoom = 0;
        this.player.reset(); 
    }
}