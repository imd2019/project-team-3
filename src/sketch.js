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
import DemoBench from "./simulation/interactiveElements/demoBench.js";
import FlyerBox from "./simulation/interactiveElements/flyerBox.js";
import Flyer from "./simulation/interactiveElements/flyer.js";
import Door from "./simulation/interactiveElements/door.js";
import MobilePhone from "./simulation/interactiveElements/mobilePhone.js";
import PhoneIcon from "./simulation/interactiveElements/phoneIcon.js";
import StreetLampBulb from "./simulation/interactiveElements/streetLampBulb.js";

// load images
let parkBackgnd, moonImg, cityImg, streetImg, treesImg, parkForegndImg;
let kioskBackgnd;
let demoBackgnd, demoForegndImg;
let coffeeHouseBackgnd, coffeeHouseForegndImg;
let barBackgnd, barForegndImg;

let barLinkImg, coffeeHouseLinkImg, demoLinkBarImg, demoLinkDemoImg, kioskLinkImg, parkLinkImg_kiosk, parkLinkImg_demo, parkLinkImg_coffeeHouse;
let doorImg, demoSignImg, flyerBoxImg, mobilePhoneImg, phoneIconImg, streetLampBulbOnImg, streetLampBulbOffImg, demoBenchImg;

function preload() {
  // backgnd images
  parkBackgnd = loadImage("../img/park/0_backgnd.png");
  demoBackgnd = loadImage("../img/demo/0_backgnd.png");
  coffeeHouseBackgnd = loadImage("../img/coffeeHouse/0_backgnd.png");
  barBackgnd = loadImage("../img/bar/0_backgnd.png");

  // layers
  moonImg = loadImage("../img/park/1_moon.png");
  cityImg = loadImage("../img/park/2_city.png");
  streetImg = loadImage("../img/park/3_street.png");
  treesImg = loadImage("../img/park/5_trees.png");
  parkForegndImg = loadImage("../img/park/6_foregnd.png");
  coffeeHouseForegndImg = loadImage("../img/coffeeHouse/1_foregnd.png");
  barForegndImg = loadImage("../img/bar/1_foregnd.png");
  demoForegndImg = loadImage("../img/demo/2_foregnd.png");

  // interactive elements
  barLinkImg = loadImage("../img/demo/1_interactionSpaces/1_door.png");
  coffeeHouseLinkImg = loadImage("../img/park/4_interactionSpaces/4_coffeeHouse.png");
  demoLinkBarImg = loadImage("../img/park/4_interactionSpaces/4_demo-bar.png");
  demoLinkDemoImg = loadImage("../img/park/4_interactionSpaces/4_demo-demo.png");
  kioskLinkImg = loadImage("../img/park/4_interactionSpaces/4_kiosk.png");
  parkLinkImg_kiosk = loadImage("../img/kiosk/4_advertisingColumn.png");
  parkLinkImg_demo = loadImage("../img/demo/1_interactionSpaces/1_park.png");
  parkLinkImg_coffeeHouse = loadImage("../img/coffeeHouse/3_interactionSpaces/3_park.png");
  demoSignImg = loadImage("../img/demo/3_elements/3_sign.png");
  demoBenchImg = loadImage("../img/demo/3_elements/3_bench.png");
  flyerBoxImg = loadImage("../img/coffeeHouse/2_elements/2_flyerbox.png");
  // mobilePhoneImg = loadImage("");
  // phoneIconImg = loadImage("");
  streetLampBulbOnImg = loadImage("../img/assets/lamp-on.png");
  streetLampBulbOffImg = loadImage("../img/assets/lamp-off.png");
  doorImg = loadImage("../img/coffeeHouse/2_elements/2_door.png", setupGame);
}
window.preload = preload;

/* setup */

let player = new Player();

let game = new Game(player);
window.addEventListener("enterView", function(ev) {game.enterView(ev.detail);})

let globalObjects = new Sprite(0, 0, windowWidth, windowHeight);

function setupGame () {
  // views
  let park = new View("park", 4098, 768, parkBackgnd);
  game.addView(park);

  let kiosk = new View("kiosk", 1792, 768, parkBackgnd);
  game.addView(kiosk);

  let demo = new View("demo", 1792, 768, demoBackgnd);
  game.addView(demo);

  let coffeeHouse = new View("coffeeHouse", 1792, 768, coffeeHouseBackgnd);
  game.addView(coffeeHouse);

  let bar = new View("bar", 1793, 768, barBackgnd);
  game.addView(bar);

  // display objects & interactive objects
  let moon_park = new InteractiveObject(2086, 25, 213, 212, moonImg);
  park.addChild(moon_park);

  let moon_kiosk = new InteractiveObject(950, -60, 213, 212, moonImg);
  kiosk.addChild(moon_kiosk);

  let city = new InteractiveObject(773, 6, 3327, 703, cityImg);
  park.addChild(city);

  let street = new InteractiveObject(1598, 345, 2125, 308, streetImg);
  park.addChild(street);

  let demoLink_bar = new DemoLink(1936, 338, 188, 132, demoLinkBarImg);
  park.addChild(demoLink_bar);

  let demoLink_demo = new DemoLink(1778, 394, 471, 150, demoLinkDemoImg);
  park.addChild(demoLink_demo);

  let coffeeHouseLink = new CoffeeHouseLink(3353, 352, 208, 129, coffeeHouseLinkImg);
  park.addChild(coffeeHouseLink);

  let trees = new InteractiveObject(-1, 74, 4103, 695, treesImg);
  park.addChild(trees);

  let kioskLink = new KioskLink(108, 206, 681, 377, kioskLinkImg); // adjust position & size! // correct Image!!!
  park.addChild(kioskLink);

  let parkForegnd = new InteractiveObject(2, 228, 3904, 543, parkForegndImg);
  park.addChild(parkForegnd);

  let streetLamp_1 = new StreetLampBulb(496, 336, 39, 17, streetLampBulbOnImg, streetLampBulbOffImg);
  park.addChild(streetLamp_1);

  let streetLamp_2 = new StreetLampBulb(1012, 250, 35, 15, streetLampBulbOnImg, streetLampBulbOffImg);
  park.addChild(streetLamp_2);

  let streetLamp_3 = new StreetLampBulb(1450, 294, 35, 15, streetLampBulbOnImg, streetLampBulbOffImg);
  park.addChild(streetLamp_3);

  let streetLamp_4 = new StreetLampBulb(1756, 292, 35, 15, streetLampBulbOnImg, streetLampBulbOffImg);
  park.addChild(streetLamp_4);

  let streetLamp_5 = new StreetLampBulb(2565, 288, 35, 15, streetLampBulbOnImg, streetLampBulbOffImg);
  park.addChild(streetLamp_5);



  let streetLamp_7 = new StreetLampBulb(3488, 395, 24, 10, streetLampBulbOnImg, streetLampBulbOffImg);
  park.addChild(streetLamp_7);

  let streetLamp_8 = new StreetLampBulb(3605, 394, 16, 7, streetLampBulbOnImg, streetLampBulbOffImg);
  park.addChild(streetLamp_8);

  let streetLamp_9 = new StreetLampBulb(3736, 370, 39, 17, streetLampBulbOnImg, streetLampBulbOffImg);
  park.addChild(streetLamp_9);

  let coffeeHouseForegnd = new InteractiveObject(0, 0, 1792, 768, coffeeHouseForegndImg);
  coffeeHouse.addChild(coffeeHouseForegnd);

  let barForegnd = new InteractiveObject(0, 0, 1793, 769, barForegndImg);
  bar.addChild(barForegnd);

  let barLink = new BarLink(1065, 140, 147, 228, barLinkImg);
  demo.addChild(barLink);

  let demoForegnd = new InteractiveObject(-159, 30, 2180, 810, demoForegndImg);
  demo.addChild(demoForegnd);

  let demoBench = new DemoBench(5, 578, 461, 231, demoBenchImg);
  demo.addChild(demoBench);

  let parkLink_kiosk = new ParkLink(1480, 189, 184, 444, parkLinkImg_kiosk);
  kiosk.addChild(parkLink_kiosk);

  let parkLink_demo = new ParkLink(1612, 337, 184, 407, parkLinkImg_demo);
  demo.addChild(parkLink_demo);

  let parkLink_coffeeHouse = new ParkLink(129, 123, 241, 422, parkLinkImg_coffeeHouse);
  coffeeHouse.addChild(parkLink_coffeeHouse);

  let door_coffeeHouse = new Door(1295, 379, 128, 214, doorImg);
  coffeeHouse.addChild(door_coffeeHouse);

  let demoSign = new DemoSign(790, 668, 116, 51, demoSignImg);
  demo.addChild(demoSign);

  let flyerBox_coffeeHouse = new FlyerBox(581, 335, 61, 139, flyerBoxImg);
  coffeeHouse.addChild(flyerBox_coffeeHouse);

  let flyer = new Flyer();
  coffeeHouse.addChild(flyer);

  // street lamp bulbs ...

  // global objects
  let mobilePhone = new MobilePhone();
  globalObjects.addChild(mobilePhone);

  let phoneIcon = new PhoneIcon();
  globalObjects.addChild(phoneIcon);

  game.addChild(globalObjects);
}

/* display */

function draw() {
  game.display();

  if (mouseX >= windowWidth - 150) {
    if (mouseX >= windowWidth - 50) game.moveView("right", 3);
    else game.moveView("right", 1);
  } else if (mouseX <= 150) {
    if(mouseX <= 50) game.moveView("left", 3);
    else game.moveView("left", 1);
  }
}
window.draw = draw;

/* interaction */

function mouseClicked() { game.mouseClicked(); }
window.mouseClicked = mouseClicked;

function mousePressed() { game.mousePressed(); }
window.mousePressed = mousePressed;

function mouseReleased() { game.mouseReleased(); }
window.mouseReleased = mouseReleased;