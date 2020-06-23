/* imports */

// game structure classes
import Player from "./simulation/player.js";
import Game from "./simulation/game.js";
import View from "./simulation/view.js";

// general display classes
import InteractiveObject from "./interactiveObject.js";
import Sprite from "./sprite.js";
import DualBackgndSprite from "./simulation/dualBackgndSprite.js";

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
import Kiosk from "./simulation/interactiveElements/kiosk.js";
import Arcade from "./simulation/interactiveElements/arcade.js";
import BarPhone from "./simulation/interactiveElements/barPhone.js";
import DemoPeople from "./simulation/interactiveElements/demoPeople.js";

// load images
let parkBackgnd, moonImg, cityImg, streetImg, treesImg, parkForegndImg;
let kioskTreesImg, kioskBuildingImg_on, kioskBuildingImg_off, kioskTrashcanImg, kioskSunshadeImg;
let demoBackgnd, demoForegndImg_demo, demoForegndImg_pastDemo;
let coffeeHouseBackgnd, coffeeHouseForegndImg;
let barBackgnd, barForegndImg, barArcadeImg, barPhoneImg;

let barLinkImg, coffeeHouseLinkImg, demoLinkBarImg, demoLinkDemoImg, demoLinkSignsLeftImg, demoLinkSignsRightImg, kioskLinkImg_on, kioskLinkImg_off, parkLinkImg_kiosk, parkLinkImg_demo, parkLinkImg_coffeeHouse;
let doorImg, demoSignImg, flyerBoxImg, mobilePhoneImg, phoneIconImg, streetLampBulbOnImg, streetLampBulbOffImg, demoBenchImg, newspaperImg;

let demoPeopleImg_left, demoPeopleImg_right, demoPeopleSignsImg_left, demoPeopleSignsImg_right;

// load soundfiles
let owlSound, demoSound, citySound, leavesSound, trafficSound, coffeeHouseSound, fountainSound, policeSirenSound, rainSound;
let phoneMsgSound, phoneVibrationSound, phoneSendSound, phoneTapSound, doorSound, insideStepsSound, outsideStepsSound, lampClickSound, registerSound, newspaperSound, pickupSignSound, flyerSound;


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
  demoForegndImg_demo = loadImage("../img/demo/2_foregnd_demo.png");
  demoForegndImg_pastDemo = loadImage("../img/demo/2_foregnd_past-demo.png");
  kioskTreesImg = loadImage("../img/kiosk/1_trees.png");
  kioskBuildingImg_off = loadImage("../img/kiosk/2_building_off.png"); 
  kioskTrashcanImg = loadImage("../img/kiosk/3_elements/3_trashcan.png");
  kioskSunshadeImg = loadImage("../img/kiosk/3_elements/3_sunshade.png");

  // interactive elements
  barLinkImg = loadImage("../img/demo/1_interactionSpaces/1_door.png");
  coffeeHouseLinkImg = loadImage("../img/park/4_interactionSpaces/4_coffeeHouse.png");
  demoLinkBarImg = loadImage("../img/park/4_interactionSpaces/4_demo-bar.png");
  demoLinkDemoImg = loadImage("../img/park/4_interactionSpaces/4_demo-demo.png");
  demoLinkSignsLeftImg = loadImage("../img/park/4_interactionSpaces/4_demo-signs-1.png");
  demoLinkSignsRightImg = loadImage("../img/park/4_interactionSpaces/4_demo-signs-2.png");
  kioskLinkImg_on = loadImage("../img/park/4_interactionSpaces/4_kiosk_open.png");
  kioskLinkImg_off = loadImage("../img/park/4_interactionSpaces/4_kiosk_closed.png");
  parkLinkImg_kiosk = loadImage("../img/kiosk/4_interactionSpaces/4_advertisingColumn.png");
  parkLinkImg_demo = loadImage("../img/demo/1_interactionSpaces/1_park.png");
  parkLinkImg_coffeeHouse = loadImage("../img/coffeeHouse/3_interactionSpaces/3_park.png");
  demoSignImg = loadImage("../img/demo/3_elements/3_sign.png");
  demoBenchImg = loadImage("../img/demo/3_elements/3_bench.png");
  flyerBoxImg = loadImage("../img/coffeeHouse/2_elements/2_flyerbox.png");
  newspaperImg = loadImage("../img/kiosk/3_elements/3_newspaper.png");
  // mobilePhoneImg = loadImage("");
  // phoneIconImg = loadImage("");
  streetLampBulbOnImg = loadImage("../img/assets/lamp-on.png");
  streetLampBulbOffImg = loadImage("../img/assets/lamp-off.png");
  doorImg = loadImage("../img/coffeeHouse/2_elements/2_door.png");
  kioskBuildingImg_on = loadImage("../img/kiosk/2_building_on.png");
  barArcadeImg = loadImage("../img/bar/2_elements/2_arcade.png");
  barPhoneImg = loadImage("../img/bar/2_elements/2_mobilePhone.png");

  // animation elements
  demoPeopleImg_left = loadImage("../img/demo/4_people/4_people_left.png");
  demoPeopleImg_right = loadImage("../img/demo/4_people/4_people_right.png");
  demoPeopleSignsImg_left = loadImage("../img/demo/4_people/4_signs_left.png");
  demoPeopleSignsImg_right = loadImage("../img/demo/4_people/4_signs_right.png", setupGame);

  // sound
  owlSound = loadSound("../sound/ambient/owl.mp3");
  demoSound = loadSound("../sound/ambient/demo.mp3");
  citySound = loadSound("../sound/ambient/city.mp3");
  leavesSound = loadSound("../sound/ambient/leaves.mp3");
  trafficSound = loadSound("../sound/ambient/traffic.mp3");
  coffeeHouseSound = loadSound("../sound/ambient/coffeeHouse.mp3");
  fountainSound = loadSound("../sound/ambient/fountain.mp3");
  policeSirenSound = loadSound("../sound/ambient/policeSiren.mp3");
  rainSound = loadSound("../sound/ambient/rain.mp3");
  phoneMsgSound = loadSound("../sound/eventRelated/phoneMsg.mp3");
  phoneVibrationSound = loadSound("../sound/eventRelated/phoneVibration.mp3");
  phoneSendSound = loadSound("../sound/eventRelated/phoneSendMsg.mp3");
  phoneTapSound = loadSound("../sound/eventRelated/phoneTap.mp3");
  doorSound = loadSound("../sound/eventRelated/door.mp3");
  insideStepsSound = loadSound("../sound/eventRelated/insideSteps.mp3");
  outsideStepsSound = loadSound("../sound/eventRelated/outsideSteps.mp3");
  lampClickSound = loadSound("../sound/eventRelated/lampClick.mp3");
  registerSound = loadSound("../sound/eventRelated/register.mp3");
  newspaperSound = loadSound("../sound/eventRelated/newspaper.mp3");
  pickupSignSound = loadSound("../sound/eventRelated/pickupSign.mp3");
  flyerSound = loadSound("../sound/eventRelated/flyer.mp3");
}
window.preload = preload;

/* setup */

let player = new Player();
window.addEventListener("addAction", (ev) => {
  player.addAction(ev.detail.origin, ev.detail.name, ev.detail.data);
});

let game = new Game(player);
window.addEventListener("enterView", (ev) => {
  game.enterView(ev.detail);
  if(ev.detail === "bar") {
    doorSound.play();
  }
});

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

  let city = new InteractiveObject(0, 0, 4100, 769, cityImg);
  park.addChild(city);

  let street = new InteractiveObject(1598, 345, 2125, 308, streetImg);
  park.addChild(street);

  let demoLink_bar = new DemoLink(1936, 338, 188, 132, demoLinkBarImg);
  park.addChild(demoLink_bar);

  let demoLink_demo = new DemoLink(1788, 425, 470, 117, demoLinkDemoImg, demoLinkSignsLeftImg, demoLinkSignsRightImg);
  park.addChild(demoLink_demo);

  let coffeeHouseLink = new CoffeeHouseLink(3353, 352, 208, 129, coffeeHouseLinkImg);
  park.addChild(coffeeHouseLink);

  let trees = new InteractiveObject(-1, 89, 4103, 695, treesImg);
  park.addChild(trees);

  let kioskLink = new KioskLink(108, 206, 681, 377, kioskLinkImg_off, kioskLinkImg_on);
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

  let streetLamp_6 = new StreetLampBulb(2872, 286, 35, 15, streetLampBulbOnImg, streetLampBulbOffImg);
  park.addChild(streetLamp_6);

  let streetLamp_7 = new StreetLampBulb(3488, 395, 24, 10, streetLampBulbOnImg, streetLampBulbOffImg);
  park.addChild(streetLamp_7);

  let streetLamp_8 = new StreetLampBulb(3605, 394, 16, 7, streetLampBulbOnImg, streetLampBulbOffImg);
  park.addChild(streetLamp_8);

  let streetLamp_9 = new StreetLampBulb(3736, 370, 39, 17, streetLampBulbOnImg, streetLampBulbOffImg);
  park.addChild(streetLamp_9);

  let kioskTrees = new InteractiveObject(0, 0, 1792, 768, kioskTreesImg);
  kiosk.addChild(kioskTrees);

  let kioskBuilding = new Kiosk(298, 55, 733, 579, kioskBuildingImg_off, kioskBuildingImg_on);
  kiosk.addChild(kioskBuilding);

  let kioskSunshade = new InteractiveObject(859, 240, 500, 400, kioskSunshadeImg);
  kiosk.addChild(kioskSunshade);

  let kioskTrashcan = new InteractiveObject(300, 528, 101, 110, kioskTrashcanImg);
  kiosk.addChild(kioskTrashcan);

  let parkLink_kiosk = new ParkLink(1506, 300, 131, 145, parkLinkImg_kiosk);
  kiosk.addChild(parkLink_kiosk);

  let streetLamp_coffeeHouse = new StreetLampBulb(280, 63, 37, 16, streetLampBulbOnImg, streetLampBulbOffImg);
  coffeeHouse.addChild(streetLamp_coffeeHouse);

  let coffeeHouseForegnd = new InteractiveObject(0, 0, 1792, 768, coffeeHouseForegndImg);
  coffeeHouse.addChild(coffeeHouseForegnd);

  let parkLink_coffeeHouse = new ParkLink(129, 123, 241, 57, parkLinkImg_coffeeHouse);
  coffeeHouse.addChild(parkLink_coffeeHouse);

  let barForegnd = new InteractiveObject(0, 0, 1793, 769, barForegndImg);
  bar.addChild(barForegnd);

  let barArcade = new Arcade(1532, 208, 360, 541, barArcadeImg);
  bar.addChild(barArcade);

  let barPhone = new BarPhone(357, 356, 22, 8, barPhoneImg);
  bar.addChild(barPhone);

  let streetLampDemo_1 = new StreetLampBulb(614, 34, 17, 8, streetLampBulbOnImg, streetLampBulbOffImg);
  demo.addChild(streetLampDemo_1);

  let streetLampDemo_2 = new StreetLampBulb(1333, 31, 17, 8, streetLampBulbOnImg, streetLampBulbOffImg);
  demo.addChild(streetLampDemo_2);

  let barLink = new BarLink(1091, 137, 147, 228, barLinkImg);
  demo.addChild(barLink);

  let demoForegnd = new DualBackgndSprite(-160, -6, 2180, 845, demoForegndImg_demo, demoForegndImg_pastDemo);
  demo.addChild(demoForegnd);

  let demoPeople = new DemoPeople(223, 311, 546, 331, demoPeopleImg_left);
  demo.addChild(demoPeople);

  let counterDemoPeople = new DemoPeople(1081, 322, 503, 352, demoPeopleImg_right);
  demo.addChild(counterDemoPeople);

  let demoSignsLeft = new InteractiveObject(214, 215, 1315, 322, demoPeopleSignsImg_left);
  demo.addChild(demoSignsLeft);

  let demoSignsRight = new InteractiveObject(268, 226, 1311, 313, demoPeopleSignsImg_right);
  demo.addChild(demoSignsRight);

  let demoBench = new DemoBench(5, 578, 461, 231, demoBenchImg);
  demo.addChild(demoBench);

  let parkLink_demo = new ParkLink(1612, 337, 184, 65, parkLinkImg_demo);
  demo.addChild(parkLink_demo);

  let door_coffeeHouse = new Door(1300, 379, 128, 214, doorImg);
  coffeeHouse.addChild(door_coffeeHouse);

  let demoSign = new DemoSign(790, 668, 116, 51, demoSignImg);
  demo.addChild(demoSign);

  let flyerBox_coffeeHouse = new FlyerBox(601, 445, 61, 139, flyerBoxImg);
  coffeeHouse.addChild(flyerBox_coffeeHouse);

  let flyer = new Flyer();
  coffeeHouse.addChild(flyer);

  // global objects
  let mobilePhone = new MobilePhone();
  globalObjects.addChild(mobilePhone);

  let phoneIcon = new PhoneIcon();
  globalObjects.addChild(phoneIcon);

  game.addChild(globalObjects);
}

/* sound events */

window.addEventListener("phoneReceiveMsg", (ev) => {
  phoneMsgSound.play();
} );

window.addEventListener("phoneSendMsg", (ev) => {
  phoneSendSound.play();
});

window.addEventListener("phoneVibration", (ev) => {
  phoneVibrationSound.play();  
});

window.addEventListener("phoneTap", (ev) => {
  phoneTapSound.play();
});

// let insideStepsSound, outsideStepsSound;

window.addEventListener("enterCoffeeHouse", () => {
  doorSound.play();
});

window.addEventListener("pickupSign", () => {
  pickupSignSound.play();
});

window.addEventListener("pickupFlyer", () => {
  flyerSound.play();
});

window.addEventListener("buyNewspaper", () => {
  newspaperSound.play();
});

window.addEventListener("lampClick", () => {
  lampClickSound.play();
});

window.addEventListener("walkOutside", () => {
  if (!outsideStepsSound.isPlaying()) {
    insideStepsSound.play();
  }
});

window.addEventListener("walkInside", () => {
  if (!insideStepsSound.isPlaying) {
    insideStepsSound.play();
  }
});

/* display */

function draw() {
  game.display();
}
window.draw = draw;

/* interaction */

function mouseClicked() { game.mouseClicked(); }
window.mouseClicked = mouseClicked;

function mousePressed() { game.mousePressed(); }
window.mousePressed = mousePressed;

function mouseReleased() { game.mouseReleased(); }
window.mouseReleased = mouseReleased;