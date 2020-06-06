/* imports */

// game structure classes
import Player from "./simulation/player.js";
import Game from "./simulation/game.js";
import View from "./simulation/view.js";

// general display classes
import InteractiveObject from "./interactiveObject.js";
import Sprite from "./sprite.js";

// display element classes
import DisplayStartScreen from "./startScreen/displayStartScreen.js";
import DisplayEndScreen from "./endScreen/displayEndScreen.js";

// interactive element classes
import PhoneIcon from "./simulation/interactiveElements/phoneIcon.js";
import MobilePhone from "./simulation/interactiveElements/mobilePhone.js";

// console.log(document.title);

// create instances
let player = new Player();
let game = new Game(player);
game.addEventListener("enterView", function(name) {game.enterView(name);})

let world = new Sprite(0, 0, windowWidth, windowHeight);

let park0 = new View("park_0", backgnd);
world.addChild(park0);

let park1 = new View("park_1", backgnd);
world.addChild(park1);

let park2 = new View("park_2", backgnd);
world.addChild(park2);

let kiosk = new View("kiosk", backgnd);
world.addChild(kiosk);

let demo = new View("demo", backgnd);
world.addChild(demo);

let coffeeHouse = new View("coffeeHouse", backgnd);
world.addChild(coffeeHouse);

let bar = new View("bar", backgnd);
world.addChild(bar);

// add views
game.addView(park0);
game.addView(park1);
game.addView(park2);
game.addView(kiosk);
game.addView(demo);
game.addView(coffeeHouse);
game.addView(bar);

function draw() {
    game.display();
}
window.draw = draw;

function mouseClicked() {}
window.mouseClicked = mouseClicked;

function mousePressed() {}
window.mousePressed = mousePressed;

function mouseReleased() {}
window.mouseReleased = mouseReleased;