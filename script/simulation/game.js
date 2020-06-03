
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
        this.currentRoom = 0;
        this.player.reset(); 
    }
}