export default class Game{
    constructor(player){
        this.views = [];
        this.currentView = 1;
        this.player = player;

    }

    addView(view){
        this.views.push(view);
    }

    display() {
        this.views[this.currentView].display();
    }

    reset(){
        for(let elem in this.views){
            elem.reset();
        }
        this.currentView = 1;
        this.player.reset(); 
    }
}