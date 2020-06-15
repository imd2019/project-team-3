/* imports */

// game structure classes
import Player from "./simulation/player.js";
import Game from "./simulation/game.js";
import View from "./simulation/view.js";

// general display classes
import InteractiveObject from "./interactiveObject.js";
import Sprite from "./sprite.js";

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
let parkBackgnd, moonImg, cityImg, treesImg;
let kioskBackgnd;
let demoBackgnd;
let coffeeHouseBackgnd, coffeeHouseForegnd;
let barBackgnd, barForegnd;

let barLink, coffeeHouseLink, demoLink, kioskLink, parkLink;
let door, demoSign, flyer, mobilePhone, phoneIcon, streetLampBulb;

function preload() {
    // backgnd images
    parkBackgnd = loadImage("../img/park/0_backgnd.png");
    // kioskBackgnd = loadImage("");
    // demoBackgnd = loadImage("");
    coffeeHouseBackgnd = loadImage("../img/coffeehouse/0_backgnd.png");
    barBackgnd = loadImage("../img/bar/0_backgnd.png");

    // layers
    moonImg = loadImage("../img/park/1_moon.png");
    cityImg = loadImage("../img/park/2_city.png");
    treesImg = loadImage("../img/park/4_trees.png");
    coffeeHouseForegnd = loadImage("../img/coffeehouse/5_foregnd.png");
    barForegnd = loadImage("../img/bar/1_foregnd.png", setupGame);

    // interactive elements
    // barLink = loadImage("");
    // coffeeHouseLink = loadImage("");
    // demoLink = loadImage("");
    // kioskLink = loadImage("");
    // parkLink = loadImage("");
    // demoSign = loadImage("");
    // flyer = loadImage("");
    // mobilePhone = loadImage("");
    // phoneIcon = loadImage("");
    // streetLampBulb = loadImage("");
}
window.preload = preload;

/* setup */

let player = new Player();

let game = new Game(player);
window.addEventListener("enterView", function(ev) {game.enterView(ev.detail);})

let world = new Sprite(0, 0, windowWidth, windowHeight)

function setupGame () {
    // views
    let park = new View("park", parkBackgnd);
    game.addView(park);

    let kiosk = new View("kiosk", parkBackgnd);
    game.addView(kiosk);

    let demo = new View("demo", parkBackgnd);
    game.addView(demo);

    let coffeeHouse = new View("coffeeHouse", parkBackgnd);
    game.addView(coffeeHouse);

    let bar = new View("bar", parkBackgnd);    
    game.addView(bar);

    // display objects
    let moon = new InteractiveObject(800, 100, 213, 212, moonImg);
    park.addChild(moon);

    let city = new InteractiveObject(0, 245, 3327, 703, cityImg);
    park.addChild(city);

    let trees = new InteractiveObject(0, windowHeight - 1030, 4245, 695, treesImg);
    park.addChild(trees);

    // interactive objects
}

/* display */

function draw() {
    game.display();
}
window.draw = draw;

/* interaction */

function mouseClicked() { world.mouseClicked(); }
window.mouseClicked = mouseClicked;

function mousePressed() { world.mousePressed(); }
window.mousePressed = mousePressed;

function mouseReleased() { world.mouseReleased(); }
window.mouseReleased = mouseReleased;