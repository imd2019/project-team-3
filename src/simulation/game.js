export default class Game{
    constructor(player){
        this.views = [];
        this.currentView = 1;
        this.player = player;

    }

    addView(view){
        this.views.push(view);
    }

    enterView(name) {
        for (let i in this.views) {
            if (this.views[i].name === name) {
                this.views[i].enter();
                this.currentView = i;
                break;
            }
        }
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