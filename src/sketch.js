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
import FlyerBox from "./simulation/interactiveElements/flyerBox.js";
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
let globalObjects = new Sprite(0, 0, windowWidth, windowHeight);
world.addChild(globalObjects);

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

    let street = new InteractiveObject(1721, 320, 2002, 289, streetImg);
    park.addChild(street);

    let trees = new InteractiveObject(-1, 74, 4103, 695, treesImg);
    park.addChild(trees);

    let coffeeHouseForegnd = new InteractiveObject(0, 0, 3327, 703, coffeeHouseForegndImg);
    coffeeHouse.addChild(coffeeHouseForegnd);

    let barForegnd = new InteractiveObject(0, 0, 3327, 703, barForegndImg);
    bar.addChild(barForegnd);

    // let flyerBox_park = new InteractiveObject(0, 245, 3327, 703, flyerBoxImg);
    // park.addChild(flyerBox_park);

    // interactive objects

    let barLink = new BarLink();
    demo.addChild(barLink);
    world.addChild(barLink);

    let coffeeHouseLink = new CoffeeHouseLink();
    park.addChild(coffeeHouseLink);
    world.addChild(coffeeHouseLink);

    let demoLink = new DemoLink();
    park.addChild(demoLink);
    world.addChild(demoLink);

    let kioskLink = new KioskLink();
    park.addChild(kioskLink);
    world.addChild(kioskLink);

    let parkLink_kiosk = new ParkLink();
    kiosk.addChild(parkLink_kiosk);
    world.addChild(parkLink_kiosk);

    let parkLink_demo = new ParkLink();
    demo.addChild(parkLink_demo);
    world.addChild(parkLink_demo);

    let parkLink_coffeeHouse = new ParkLink();
    coffeeHouse.addChild(parkLink_coffeeHouse);
    world.addChild(parkLink_coffeeHouse);

    let door_coffeeHouse = new Door(1295, 379, 128, 214, doorImg);
    coffeeHouse.addChild(door_coffeeHouse);
    world.addChild(door_coffeeHouse);

    let demoSign_demo = new DemoSign();
    demo.addChild(demoSign_demo);
    world.addChild(demoSign_demo);

    let demoSign_counterdemo = new DemoSign();
    demo.addChild(demoSign_counterdemo);
    world.addChild(demoSign_counterdemo);

    let flyerBox_coffeeHouse = new FlyerBox();
    coffeeHouse.addChild(flyerBox_coffeeHouse);
    world.addChild(flyerBox_coffeeHouse);

    let flyer = new Flyer();
    coffeeHouse.addChild(flyer);
    world.addChild(flyer);

    // street lamp bulbs ...

    // global objects

    let mobilePhone = new MobilePhone();
    globalObjects.addChild(mobilePhone);

    let phoneIcon = new PhoneIcon();
    globalObjects.addChild(phoneIcon);

}

/* display */

function draw() {
    game.display();
    globalObjects.display();
}
window.draw = draw;

/* interaction */

function mouseClicked() { world.mouseClicked(); }
window.mouseClicked = mouseClicked;

function mousePressed() { world.mousePressed(); }
window.mousePressed = mousePressed;

function mouseReleased() { world.mouseReleased(); }
window.mouseReleased = mouseReleased;