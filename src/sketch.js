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
import BarLink from "./simulation/interactiveElements/barLink.js";
import CoffeeHouseLink from "./simulation/interactiveElements/coffeeHouseLink.js";
import DemoLink from "./simulation/interactiveElements/demoLink.js";
import KioskLink from "./simulation/interactiveElements/kioskLink.js";
import ParkLink from "./simulation/interactiveElements/parkLink.js";

import DemoSign from "./simulation/interactiveElements/demoSign.js";
import Flyer from "./simulation/interactiveElements/flyer.js";
import MobilePhone from "./simulation/interactiveElements/mobilePhone.js";
import PhoneIcon from "./simulation/interactiveElements/phoneIcon.js";
import StreetLampBulb from "./simulation/interactiveElements/streetLampBulb.js";

// load images
let barLink, coffeeHouseLink, demoLink, kioskLink, parkLink;
let demoSign, flyer, mobilePhone, phoneIcon, streetLampBulb;

function preload() {
    barLink = loadImage();
    coffeeHouseLink = loadImage();
    demoLink = loadImage();
    kioskLink = loadImage();
    parkLink = loadImage();
    demoSign = loadImage();
    flyer = loadImage();
    mobilePhone = loadImage();
    phoneIcon = loadImage();
    streetLampBulb = loadImage();
}

// create instances
let player = new Player();
let game = new Game(player);
window.addEventListener("enterView", function(ev) {game.enterView(ev.detail);})

let backgnd = 0;

let world = new Sprite(0, 0, windowWidth, windowHeight);

let park = new View("park", backgnd);
world.addChild(park);

let kiosk = new View("kiosk", backgnd);
world.addChild(kiosk);

let demo = new View("demo", backgnd);
world.addChild(demo);

let coffeeHouse = new View("coffeeHouse", backgnd);
world.addChild(coffeeHouse);

let bar = new View("bar", backgnd);
world.addChild(bar);

// add views
game.addView(park);
game.addView(kiosk);
game.addView(demo);
game.addView(coffeeHouse);
game.addView(bar);

function draw() {
    world.display();
    game.display();
}
window.draw = draw;

function mouseClicked() { world.mouseClicked(); }
window.mouseClicked = mouseClicked;

function mousePressed() { world.mousePressed(); }
window.mousePressed = mousePressed;

function mouseReleased() { world.mouseReleased(); }
window.mouseReleased = mouseReleased;