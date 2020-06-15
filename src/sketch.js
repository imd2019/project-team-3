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
let parkBackgnd, moonImg, cityImg, streetImg, treesImg;
let kioskBackgnd;
let demoBackgnd;
let coffeeHouseBackgnd, coffeeHouseForegndImg;
let barBackgnd, barForegndImg;

let barLinkImg, coffeeHouseLinkImg, demoLinkImg, kioskLinkImg, parkLinkImg;
let doorImg, demoSignImg, flyerBoxImg, mobilePhoneImg, phoneIconImg, streetLampBulbImg;

function preload() {
    // backgnd images
    parkBackgnd = loadImage("../img/park/0_backgnd.png");
    // kioskBackgnd = loadImage("");
    // demoBackgnd = loadImage("");
    coffeeHouseBackgnd = loadImage("../img/coffeeHouse/0_backgnd.png");
    barBackgnd = loadImage("../img/bar/0_backgnd.png");

    // layers
    moonImg = loadImage("../img/park/1_moon.png");
    cityImg = loadImage("../img/park/2_city.png");
    streetImg = loadImage("../img/park/3_street.png");
    treesImg = loadImage("../img/park/5_trees.png");
    coffeeHouseForegndImg = loadImage("../img/coffeeHouse/5_foregnd.png");
    barForegndImg = loadImage("../img/bar/1_foregnd.png");

    // interactive elements
    // barLinkImg = loadImage("");
    coffeeHouseLinkImg = loadImage("../img/park/4_interactionSpaces/4_coffeeHouse.png");
    // demoLinkImg = loadImage("");
    // kioskLinkImg = loadImage("");
    // parkLinkImg = loadImage("");
    // demoSignImg = loadImage("");
    flyerBoxImg = loadImage("../img/assets/flyerbox.png");
    // mobilePhoneImg = loadImage("");
    // phoneIconImg = loadImage("");
    streetLampBulbImg = loadImage("../img/assets/lamp-on.png");
    doorImg = loadImage("../img/coffeeHouse/1_door.png", setupGame);
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

    let coffeeHouse = new View("coffeeHouse", coffeeHouseBackgnd);
    game.addView(coffeeHouse);

    let bar = new View("bar", barBackgnd);
    game.addView(bar);

    // display objects
    let moon = new InteractiveObject(2086, 25, 213, 212, moonImg);
    park.addChild(moon);

    let city = new InteractiveObject(773, 6, 3327, 703, cityImg);
    park.addChild(city);

    let street = new InteractiveObject(1721, 320, 3327, 703, streetImg);
    park.addChild(street);

    let trees = new InteractiveObject(-1, 73, 4245, 695, treesImg);
    park.addChild(trees);

    let coffeeHouseForegnd = new InteractiveObject(0, 0, 3327, 703, coffeeHouseForegndImg);
    coffeeHouse.addChild(coffeeHouseForegnd);

    let barForegnd = new InteractiveObject(0, 0, 3327, 703, barForegndImg);
    bar.addChild(barForegnd);

    // let flyerBoxPark = new InteractiveObject(0, 245, 3327, 703, flyerBoxImg);
    // park.addChild(flyerBoxPark);

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