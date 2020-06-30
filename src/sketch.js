/* imports */

// game structure classes
import Player from "./simulation/player.js";
import Game from "./simulation/game.js";
import View from "./simulation/view.js";

// general display classes
import DisplayObject from "./displayObject.js";
import DualBackgndSprite from "./simulation/dualBackgndSprite.js";

// interactive element classes
import BarLink from "./simulation/interactiveElements/demo/barLink.js";
import CoffeeHouseLink from "./simulation/interactiveElements/park/coffeeHouseLink.js";
import DemoLink from "./simulation/interactiveElements/park/demoLink.js";
import KioskLink from "./simulation/interactiveElements/park/kioskLink.js";
import ParkLink from "./simulation/interactiveElements/general/parkLink.js";
import DemoSign from "./simulation/interactiveElements/demo/demoSign.js";
import DemoBench from "./simulation/interactiveElements/demo/demoBench.js";
import FlyerBox from "./simulation/interactiveElements/general/flyerBox.js";
import Flyer from "./simulation/interactiveElements/general/flyer.js";
import Door from "./simulation/interactiveElements/coffeeHouse/door.js";
import PhoneIcon from "./simulation/interactiveElements/smartphone/phoneIcon.js";
import MobilePhone from "./simulation/interactiveElements/smartphone/mobilePhone.js";
import PhoneButton from "./simulation/interactiveElements/smartphone/phoneButton.js";
import PhoneMenuIcon from "./simulation/interactiveElements/smartphone/phoneMenuIcon.js";
import PhoneHomeScreen from "./simulation/interactiveElements/smartphone/phoneHomeScreen.js";
import PhonePostScreen from "./simulation/interactiveElements/smartphone/phonePostScreen.js";
import PhonePostButton from "./simulation/interactiveElements/smartphone/phonePostButton.js";
import ChoosePostButton from "./simulation/interactiveElements/smartphone/choosePostButton.js";
import PhoneMessageScreen from "./simulation/interactiveElements/smartphone/phoneMessageScreen.js";
import PhoneMessageButton from "./simulation/interactiveElements/smartphone/phoneMessageButton.js";
import PhoneEndScreen from "./simulation/interactiveElements/smartphone/phoneEndScreen.js";
import PhoneVideoPlayer from "./simulation/interactiveElements/smartphone/phoneVideoPlayer.js";
import PhoneEndButton from "./simulation/interactiveElements/smartphone/phoneEndButton.js";
import PhoneMailButton from "./simulation/interactiveElements/smartphone/phoneMailButton.js";
import RestartButton from "./simulation/interactiveElements/smartphone/restartButton.js";
import StreetLampBulb from "./simulation/interactiveElements/general/streetLampBulb.js";
import BarLampBulb from "./simulation/interactiveElements/bar/barLampBulb.js";
import Kiosk from "./simulation/interactiveElements/kiosk/kiosk.js";
import Arcade from "./simulation/interactiveElements/bar/arcade.js";
import BarPhone from "./simulation/interactiveElements/bar/barPhone.js";
import DemoPeople from "./simulation/interactiveElements/demo/demoPeople.js";
import Newspaper from "./simulation/interactiveElements/kiosk/newspaper.js";

// load images
let parkBackgnd, moonImg, cityImg, streetImg, treesImg, parkForegndImg;
let kioskTreesImg, kioskBuildingImg_on, kioskBuildingImg_off, kioskTrashcanImg, kioskSunshadeImg;
let demoBackgnd, demoForegndImg_demo, demoForegndImg_pastDemo;
let coffeeHouseBackgnd, coffeeHouseForegndImg;
let barBackgnd, barForegndImg, barArcadeImg, barPhoneImg;

let barLinkImg, coffeeHouseLinkImg, demoLinkBarImg, demoLinkDemoImg_demo, demoLinkDemoImg_noDemo, demoLinkSignsLeftImg, demoLinkSignsRightImg, kioskLinkImg_on, kioskLinkImg_off, kioskLinkNewspapersImg, parkLinkImg_kiosk, parkLinkImg_demo, parkLinkImg_coffeeHouse;
let doorImg, demoSignImg, flyerBoxImg, flyerImg_coffeeHouse, flyerImg_park, streetLampBulbOnImg, streetLampBulbOffImg, demoBenchImg, newspaperImg;
let phoneIconImg, phoneOutlineImg, phoneOverlayImg, brokenPhoneOverlayImg, phoneBtnImg, homeIconImg, msgIconImg, postIconImg;
let postOverlayImg, postImg_1, postImg_2, postImg_3, postImg_4, postImg_5, postImg_6, postImg_7, postImg_8, postImg_9, postImg_10, postImg_11, postImg_12;

let demoPeopleImg_left, demoPeopleImg_right, demoPeopleSignsImg_left, demoPeopleSignsImg_right;

// load videos

let videoOverlayImg;
let endVideo;

// load soundfiles
let owlSound, demoSound, citySound, leavesSound, trafficSound, coffeeHouseSound, fountainSound, policeSirenSound, rainSound;
let phoneMsgSound, phoneVibrationSound, phoneSendSound, phoneTapSound, doorSound, insideStepsSound, outsideStepsSound, lampClickSound, registerSound, newspaperSound, pickupSignSound, flyerSound;


function preload() {
  // fonts
  window.fonts = {
    rockwell: loadFont("../style/fonts/rockwell.ttf"),
    franklinGothic: loadFont("../style/fonts/franklinGothic.ttf")
  };

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
  demoLinkDemoImg_demo = loadImage("../img/park/4_interactionSpaces/4_demo-demo.png");
  demoLinkDemoImg_noDemo = loadImage("../img/park/4_interactionSpaces/4_demo-pastDemo.png");
  demoLinkSignsLeftImg = loadImage("../img/park/4_interactionSpaces/4_demo-signs-1.png");
  demoLinkSignsRightImg = loadImage("../img/park/4_interactionSpaces/4_demo-signs-2.png");
  kioskLinkImg_on = loadImage("../img/park/4_interactionSpaces/4_kiosk_open.png");
  kioskLinkImg_off = loadImage("../img/park/4_interactionSpaces/4_kiosk_closed.png");
  kioskLinkNewspapersImg = loadImage("../img/park/4_interactionSpaces/4_newspapers.png");
  parkLinkImg_kiosk = loadImage("../img/kiosk/4_interactionSpaces/4_advertisingColumn.png");
  parkLinkImg_demo = loadImage("../img/demo/1_interactionSpaces/1_park.png");
  parkLinkImg_coffeeHouse = loadImage("../img/coffeeHouse/3_interactionSpaces/3_park.png");
  demoSignImg = loadImage("../img/demo/3_elements/3_sign.png");
  demoBenchImg = loadImage("../img/demo/3_elements/3_bench.png");
  flyerBoxImg = loadImage("../img/assets/flyerbox.png");
  flyerImg_coffeeHouse = loadImage("../img/coffeeHouse/2_elements/2_flyer.png");
  flyerImg_park = loadImage("../img/park/7_flyer.png");
  newspaperImg = loadImage("../img/kiosk/3_elements/3_newspaper.png");
  streetLampBulbOnImg = loadImage("../img/assets/lamp-on.png");
  streetLampBulbOffImg = loadImage("../img/assets/lamp-off.png");
  doorImg = loadImage("../img/coffeeHouse/2_elements/2_door.png");
  kioskBuildingImg_on = loadImage("../img/kiosk/2_building_on.png");
  barArcadeImg = loadImage("../img/bar/2_elements/2_arcade.png");
  barPhoneImg = loadImage("../img/bar/2_elements/2_mobilePhone.png");

  // smartphone
  phoneIconImg = loadImage("../img/smartphone/phoneIcon.png");
  phoneOutlineImg = loadImage("../img/smartphone/phoneOutline.png");
  phoneOverlayImg = loadImage("../img/smartphone/phoneOverlay.png");
  brokenPhoneOverlayImg = loadImage("../img/smartphone/brokenPhoneOverlay.png");
  phoneBtnImg = loadImage("../img/smartphone/phoneButton.png");
  homeIconImg = loadImage("../img/smartphone/homeIcon.png");
  postIconImg = loadImage("../img/smartphone/postIcon.png");
  msgIconImg = loadImage("../img/smartphone/messageIcon.png");
  postOverlayImg = loadImage("../img/smartphone/postOverlay.png");
  postImg_1 = loadImage("../img/smartphone/posts/post1.png");
  postImg_2 = loadImage("../img/smartphone/posts/post2.png");
  // postImg_3 = loadImage("../img/smartphone/posts/post3.png");
  // postImg_4 = loadImage("../img/smartphone/posts/post4.png");
  // postImg_5 = loadImage("../img/smartphone/posts/post5.png");
  // postImg_6 = loadImage("../img/smartphone/posts/post6.png");
  // postImg_7 = loadImage("../img/smartphone/posts/post7.png");
  // postImg_8 = loadImage("../img/smartphone/posts/post8.png");
  // postImg_9 = loadImage("../img/smartphone/posts/post9.png");
  // postImg_10 = loadImage("../img/smartphone/posts/post10.png");
  // postImg_11 = loadImage("../img/smartphone/posts/post11.png");
  // postImg_12 = loadImage("../img/smartphone/posts/post12.png");

  // animation elements
  demoPeopleImg_left = loadImage("../img/demo/4_people/4_people_left.png");
  demoPeopleImg_right = loadImage("../img/demo/4_people/4_people_right.png");
  demoPeopleSignsImg_left = loadImage("../img/demo/4_people/4_signs_left.png");
  demoPeopleSignsImg_right = loadImage("../img/demo/4_people/4_signs_right.png");

  // video
  videoOverlayImg = loadImage("../img/smartphone/endVideoOverlay.png");
  endVideo = createVideo("../video/endVideo1.mp4");
  endVideo.hide();

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
  flyerSound = loadSound("../sound/eventRelated/flyer.mp3", setupGame);
}
window.preload = preload;

/* setup */

let player = new Player();
window.addEventListener("addAction", (ev) => {
  window.dispatchEvent(new CustomEvent(ev.detail.name, { detail: ev.detail.data }));
  player.addAction(ev.detail.origin, ev.detail.name, ev.detail.data);
});

let game = new Game(player);
window.addEventListener("enterView", (ev) => {
  game.enterView(ev.detail);
  
  if(ev.detail === "bar") {
    doorSound.play();
  }

  if (ev.detail === "park") {
    if (player.actionDone("demo") || player.actionDone("coffeeHouse")) {
      window.dispatchEvent(new CustomEvent("openKiosk"));

      let rand = floor(random(0, 3));
      let events = [
        new CustomEvent("randConspiracyTheorist"),
        new CustomEvent("randWannabeInfluencer"),
        new CustomEvent("randFollower"),
      ]
      window.dispatchEvent(events[rand]);
    }
    if (player.actionDone("kiosk")) {
      window.dispatchEvent(new CustomEvent("hideNewspapers"));
    }
    if (player.actionDone("demo") && player.actionDone("coffeeHouse")) {
      window.dispatchEvent(new CustomEvent("endDemo"));
    }
  }

  if (ev.detail === "coffeeHouse") {
    if (player.actionDone("demo", "joinDemo")) {
      window.dispatchEvent(new CustomEvent("addAction", {detail: {
        origin: "coffeeHouse",
        name: "groupInvitation",
        data: {},
      }}));
    }
  }
});

function setupGame () {
  // views
  let park = new View("park", 4098, 768, parkBackgnd);
  game.addView(park);
  game.enterView("park");

  let kiosk = new View("kiosk", 1792, 768, parkBackgnd);
  game.addView(kiosk);

  let demo = new View("demo", 1792, 768, demoBackgnd);
  game.addView(demo);

  let coffeeHouse = new View("coffeeHouse", 1792, 768, coffeeHouseBackgnd);
  game.addView(coffeeHouse);

  let bar = new View("bar", 1793, 768, barBackgnd);
  game.addView(bar);

  let global = new View("global", windowWidth, windowHeight);
  game.addView(global);

  // display objects & interactive objects
  let moon_park = new DisplayObject(2086, 25, 213, 212, moonImg);
  park.addChild(moon_park);

  let moon_kiosk = new DisplayObject(950, -60, 213, 212, moonImg);
  kiosk.addChild(moon_kiosk);

  let city = new DisplayObject(0, 0, 4100, 769, cityImg);
  park.addChild(city);

  let street = new DisplayObject(1598, 345, 2125, 308, streetImg);
  park.addChild(street);

  let demoLink_bar = new DemoLink(1936, 338, 188, 132, demoLinkBarImg);
  park.addChild(demoLink_bar);

  let demoLink_demo = new DemoLink(1788, 425, 470, 117, demoLinkDemoImg_demo, demoLinkSignsLeftImg, demoLinkSignsRightImg, demoLinkDemoImg_noDemo);
  park.addChild(demoLink_demo);

  let coffeeHouseLink = new CoffeeHouseLink(3353, 352, 208, 129, coffeeHouseLinkImg);
  park.addChild(coffeeHouseLink);

  let trees = new DisplayObject(-1, 89, 4103, 695, treesImg);
  park.addChild(trees);

  let flyerBox_park = new FlyerBox(1262, 539, 61, 139, flyerBoxImg, "park");
  park.addChild(flyerBox_park);
  
  let kioskLink = new KioskLink(108, 206, 681, 377, kioskLinkImg_off, kioskLinkImg_on);
  park.addChild(kioskLink);

  let kioskLinkNewspapers = new DisplayObject(271, 452, 205, 24, kioskLinkNewspapersImg);
  park.addChild(kioskLinkNewspapers);
  kioskLinkNewspapers.hide();

  window.addEventListener("openKiosk", () => { 
    kioskLink.open();
    kioskLinkNewspapers.show();
  });

  let parkForegnd = new DisplayObject(2, 228, 3904, 543, parkForegndImg);
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

  let kioskTrees = new DisplayObject(0, 0, 1792, 768, kioskTreesImg);
  kiosk.addChild(kioskTrees);

  let kioskBuilding = new Kiosk(298, 55, 733, 579, kioskBuildingImg_off, kioskBuildingImg_on);
  kiosk.addChild(kioskBuilding);
  window.addEventListener("openKiosk", () => { kioskBuilding.open(); });

  let newspapers = [];

  let newspaperOne = new Newspaper(549, 446, 79, 37, newspaperImg, "conspiracy-theorist");
  newspapers.push(newspaperOne);

  let newspaperTwo = new Newspaper(633, 446, 79, 37, newspaperImg, "follower");
  newspapers.push(newspaperTwo);

  let newspaperThree = new Newspaper(714, 446, 79, 37, newspaperImg, "wannabe-influencer");
  newspapers.push(newspaperThree);

  let newspaperFour = new Newspaper(798, 446, 79, 37, newspaperImg, "reflective-user");
  newspapers.push(newspaperFour);

  newspapers.forEach(elem => kiosk.addChild(elem));

  window.addEventListener("openKiosk", () => {
    newspapers.forEach(elem => {
      elem.show();
      elem.enable();
    });
  });
  window.addEventListener("buyNewspaper", (ev) => {
    newspapers.forEach(elem => { 
      if(elem.name === ev.detail) elem.hide();
      elem.disable();
    });
  });
  window.addEventListener("hideNewspapers", () => {
    newspapers.forEach(elem => elem.hide());
    kioskLinkNewspapers.hide();
  });

  let kioskSunshade = new DisplayObject(859, 240, 500, 400, kioskSunshadeImg);
  kiosk.addChild(kioskSunshade);

  let kioskTrashcan = new DisplayObject(300, 528, 101, 110, kioskTrashcanImg);
  kiosk.addChild(kioskTrashcan);

  let parkLink_kiosk = new ParkLink(1506, 300, 131, 145, parkLinkImg_kiosk);
  kiosk.addChild(parkLink_kiosk);

  let streetLamp_coffeeHouse = new StreetLampBulb(280, 63, 37, 16, streetLampBulbOnImg, streetLampBulbOffImg);
  coffeeHouse.addChild(streetLamp_coffeeHouse);

  let coffeeHouseForegnd = new DisplayObject(0, 0, 1792, 768, coffeeHouseForegndImg);
  coffeeHouse.addChild(coffeeHouseForegnd);

  let parkLink_coffeeHouse = new ParkLink(129, 123, 241, 57, parkLinkImg_coffeeHouse);
  coffeeHouse.addChild(parkLink_coffeeHouse);

  let barForegnd = new DisplayObject(0, 0, 1793, 769, barForegndImg);
  bar.addChild(barForegnd);

  let barLamp_1 = new BarLampBulb(280, 160, 74, 32, streetLampBulbOnImg, streetLampBulbOffImg);
  bar.addChild(barLamp_1);

  let barLamp_2 = new BarLampBulb(1033, 203, 74, 32, streetLampBulbOnImg, streetLampBulbOffImg);
  bar.addChild(barLamp_2);
  barLamp_2.switch();

  let barLamp_3 = new BarLampBulb(1270, 217, 74, 32, streetLampBulbOnImg, streetLampBulbOffImg);
  bar.addChild(barLamp_3);
  barLamp_3.switch();

  let barArcade = new Arcade(1532, 222, 210, 528, barArcadeImg);
  bar.addChild(barArcade);

  let barPhone = new BarPhone(357, 356, 22, 8, barPhoneImg);
  bar.addChild(barPhone);

  let streetLampDemo_1 = new StreetLampBulb(614, 34, 17, 8, streetLampBulbOnImg, streetLampBulbOffImg);
  demo.addChild(streetLampDemo_1);

  let streetLampDemo_2 = new StreetLampBulb(1333, 31, 17, 8, streetLampBulbOnImg, streetLampBulbOffImg);
  demo.addChild(streetLampDemo_2);

  let demoForegnd = new DualBackgndSprite(-160, -6, 2180, 845, demoForegndImg_demo, demoForegndImg_pastDemo);
  demo.addChild(demoForegnd);

  let barLink = new BarLink(1091, 137, 147, 228, barLinkImg);
  demo.addChild(barLink);

  let demoPeople = new DemoPeople(223, 311, 546, 331, demoPeopleImg_left, "demo");
  demo.addChild(demoPeople);

  let counterDemoPeople = new DemoPeople(1081, 322, 503, 352, demoPeopleImg_right, "counterDemo");
  demo.addChild(counterDemoPeople);

  let demoSignsLeft = new DisplayObject(214, 215, 1315, 322, demoPeopleSignsImg_left);
  demo.addChild(demoSignsLeft);

  let demoSignsRight = new DisplayObject(268, 226, 1311, 313, demoPeopleSignsImg_right);
  demo.addChild(demoSignsRight);

  let demoBench = new DemoBench(5, 578, 461, 231, demoBenchImg);
  demo.addChild(demoBench);

  let parkLink_demo = new ParkLink(1612, 337, 184, 65, parkLinkImg_demo);
  demo.addChild(parkLink_demo);

  let demoSign = new DemoSign(790, 668, 116, 51, demoSignImg);
  demo.addChild(demoSign);

  window.addEventListener("pickupSign", () => {
    parkLink_demo.disable();
    demoPeople.enable();
    counterDemoPeople.enable();
  })

  window.addEventListener("joinDemo", (ev) => {
    parkLink_demo.enable();
    homeScreen.setPost(postImg_2);
    mobilePhone.showScreen("homeScreen");
    // play phone message sound and animation
  })

  window.addEventListener("watchDemo", () => {
    demoSign.disable();
    window.dispatchEvent(new CustomEvent("openPhone"));
    mobilePhone.showScreen("postScreen");
    window.dispatchEvent(new CustomEvent("choosePost"));
    phoneButton.disable();
  });

  window.addEventListener("endDemo", () => {
    demoForegnd.changeBackgnd();
    demoPeople.hide();
    counterDemoPeople.hide();
    demoSignsLeft.hide();
    demoSignsRight.hide();

    demoLink_demo.changeBackground();

    barLink.enable();
    barLink.show();
  });

  let door_coffeeHouse = new Door(1300, 379, 128, 214, doorImg);
  coffeeHouse.addChild(door_coffeeHouse);

  window.addEventListener("enterCoffeeHouse", () => {
    if (player.actionDone("demo", "joinDemo") || player.actionDone("coffeeHouse", "groupInvitation")) {
      setTimeout(() => {
        messageScreen.setEvent("interview");
        mobilePhone.showScreen("messageScreen");
        homeScreenBtn.disable();
        postScreenBtn.disable();
        msgScreenBtn.disable();
        phoneButton.disable();
        window.dispatchEvent(new CustomEvent("phoneVibration"));
      }, 5000);
    }
  });
  
  window.addEventListener("interviewAccepted", () => {
    if (!player.actionDone("coffeeHouse", "interviewAccepted", true)) {
      homeScreenBtn.enable();
      postScreenBtn.enable();
      msgScreenBtn.enable();
      phoneButton.enable();

      setTimeout( () => {
        homeScreen.setPost(postImg_1);
        messageScreen.reset();
        window.dispatchEvent(new CustomEvent("phoneVibration"));
      }, 3000);
    }
  });

  window.addEventListener("statementDefended", () => {
    if (player.actionDone("coffeeHouse", "statementDefended", true)) {
      setTimeout( () => {
        homeScreen.setPost(postImg_2);
        messageScreen.reset();
        window.dispatchEvent(new CustomEvent("phoneVibration"));
      }, 3000);
    } else {
      setTimeout( () => {
        homeScreen.setPost(postImg_1);
        messageScreen.reset();
        window.dispatchEvent(new CustomEvent("phoneVibration"));
      }, 3000);
    }
    homeScreenBtn.enable();
    postScreenBtn.enable();
    msgScreenBtn.enable();
    phoneButton.enable();
  })

  window.addEventListener("groupInvitation", () => {
    setTimeout( () => {
      messageScreen.setEvent("invite");
      mobilePhone.showScreen("messageScreen");
      homeScreenBtn.disable();
      postScreenBtn.disable();
      msgScreenBtn.disable();
      phoneButton.disable();
      window.dispatchEvent(new CustomEvent("phoneVibration"));
    }, 10000);
  });

  window.addEventListener("invitationAccepted", () => {
    homeScreenBtn.enable();
    postScreenBtn.enable();
    msgScreenBtn.enable();
    phoneButton.enable();
  })

  let flyerBox_coffeeHouse = new FlyerBox(601, 445, 61, 139, flyerBoxImg, "coffeeHouse");
  coffeeHouse.addChild(flyerBox_coffeeHouse);

  // global objects
  let flyerCoffeeHouse = new Flyer(492, 736, flyerImg_coffeeHouse);
  global.addChild(flyerCoffeeHouse);

  let flyerPark = new Flyer(492, 736, flyerImg_park);
  global.addChild(flyerPark);

  window.addEventListener("pickupFlyer", (ev) => {
    if (ev.detail === "coffeeHouse") {
      flyerCoffeeHouse.show();
      flyerCoffeeHouse.enable();
      if (!player.actionDone("coffeeHouse", "groupInvitation")) {
        window.dispatchEvent(new CustomEvent("addAction", {detail: {
          origin: "coffeeHouse",
          name: "groupInvitation",
          data: {},
        }}));
      }
    } else {
      flyerPark.show();
      flyerPark.enable();
    }
    player.usePhone(true);
  });

  window.addEventListener("closeFlyer", () => {
    player.usePhone(false);
  });

  let phoneIcon = new PhoneIcon(windowWidth - 150, windowHeight - 200, 112, 168, phoneIconImg);
  global.addChild(phoneIcon);

  let mobilePhone = new MobilePhone(492, 739, phoneOutlineImg, phoneOverlayImg, brokenPhoneOverlayImg);
  global.addChild(mobilePhone);

  let phoneButton = new PhoneButton(221, 677, 50, 50, phoneBtnImg);
  mobilePhone.addChild(phoneButton);

  window.addEventListener("openPhone", () => {
    phoneIcon.hide();
    phoneIcon.disable();
    mobilePhone.show();
    mobilePhone.enable();
    player.usePhone(true);
  })

  window.addEventListener("closePhone", () => {
    mobilePhone.hide();
    mobilePhone.disable();
    phoneIcon.show();
    phoneIcon.enable();
    player.usePhone(false);

    if (player.actionDone("coffeeHouse", "invitationAccepted") && !player.actionDone("coffeeHouse", "invitationPostWatched")) {
      setTimeout( () => {
        if (player.actionDone("coffeeHouse", "invitationAccepted", true)) {
          homeScreen.setPost(postImg_1);
        } else {
          homeScreen.setPost(postImg_2);
        }
        mobilePhone.showScreen("homeScreen");
        messageScreen.reset();
        window.dispatchEvent(new CustomEvent("phoneVibration"));
        window.dispatchEvent(new CustomEvent("addAction", {detail: {
          origin: "coffeeHouse",
          name: "invitationPostWatched",
          data: {},
        }}));
      }, 5000);
    }
  })


  let homeScreenBtn = new PhoneMenuIcon(43, 610, 79, 50, homeIconImg, "homeScreen");
  mobilePhone.addChild(homeScreenBtn);

  let postScreenBtn = new PhoneMenuIcon(207, 610, 79, 50, postIconImg, "postScreen");
  mobilePhone.addChild(postScreenBtn);

  let msgScreenBtn = new PhoneMenuIcon(368, 610, 79, 50, msgIconImg, "messageScreen");
  mobilePhone.addChild(msgScreenBtn);

  window.addEventListener("showScreen", (ev) => {
    mobilePhone.showScreen(ev.detail);
  });

  let homeScreen = new PhoneHomeScreen(18.9, 111.2, 454, 491, postOverlayImg);
  mobilePhone.addChild(homeScreen);
  mobilePhone.showScreen("homeScreen");

  let postScreen = new PhonePostScreen(18.9, 111.2, 454, 491);
  mobilePhone.addChild(postScreen);

  let postButton = new PhonePostButton(165, 428, 125, 50);
  postScreen.addChild(postButton);

  let choosePostBtn_1 = new ChoosePostButton(17, 428, 125, 50, "A", postImg_1);
  postScreen.addChild(choosePostBtn_1);

  let choosePostBtn_2 = new ChoosePostButton(165, 428, 125, 50, "B", postImg_2);
  postScreen.addChild(choosePostBtn_2);

  let choosePostBtn_3 = new ChoosePostButton(313, 428, 125, 50, "C", postImg_1);
  postScreen.addChild(choosePostBtn_3);

  window.addEventListener("choosePost", () => {
    choosePostBtn_1.show();
    choosePostBtn_1.enable();
    choosePostBtn_2.show();
    choosePostBtn_2.enable();
    choosePostBtn_3.show();
    choosePostBtn_3.enable();
    homeScreenBtn.disable();
    msgScreenBtn.disable();
  });

  window.addEventListener("postChosen", (ev) => {
    choosePostBtn_1.hide();
    choosePostBtn_1.disable();
    choosePostBtn_2.hide();
    choosePostBtn_2.disable();
    choosePostBtn_3.hide();
    choosePostBtn_3.disable();
    homeScreenBtn.enable();
    msgScreenBtn.enable();
    phoneButton.enable();
    homeScreen.setPost(ev.detail);
    mobilePhone.showScreen("homeScreen");
  });

  window.addEventListener("addPost", () => {
    homeScreen.setPost(postScreen.getPost());
    homeScreen.redraw();
  });

  let messageScreen = new PhoneMessageScreen(18.9, 111.2, 454, 491);
  mobilePhone.addChild(messageScreen);

  let msgButton_1 = new PhoneMessageButton(17, 428, 200, 50, "A");
  messageScreen.addChild(msgButton_1);

  let msgButton_2 = new PhoneMessageButton(238, 428, 200, 50, "B");
  messageScreen.addChild(msgButton_2);
  
  window.addEventListener("endConversation", () => {
    homeScreen.setPost(postImg_1);
    homeScreen.setPost(postImg_2);
  });

  let endScreen = new PhoneEndScreen(18.9, 111.2, 454, 491, brokenPhoneOverlayImg);
  mobilePhone.addChild(endScreen);

  let endBtn = new PhoneEndButton(130, 428, 200, 50);
  endScreen.addChild(endBtn);

  window.addEventListener("revealRole", () => {
    endScreen.answer("Verschwörungstheoretiker");
  });

  let videoPlayer = new PhoneVideoPlayer(30, 335, 390, 219, videoOverlayImg, endVideo);
  endScreen.addChild(videoPlayer);

  let restartBtn = new RestartButton(238, 428, 200, 50);
  endScreen.addChild(restartBtn);

  let mailBtn = new PhoneMailButton(17, 428, 200, 50);
  endScreen.addChild(mailBtn);

  window.addEventListener("endGame", () => {
    window.dispatchEvent(new CustomEvent("openPhone"));
    mobilePhone.showScreen("endScreen");
    mobilePhone.break();
    homeScreenBtn.disable();
    postScreenBtn.disable();
    msgScreenBtn.disable();
  });

  window.addEventListener("restartGame", () => {
    game.reset();
  });
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

window.addEventListener("enterCoffeeHouse", () => {
  doorSound.play();
});

window.addEventListener("pickupSign", () => {
  pickupSignSound.play();
});

window.addEventListener("pickupFlyer", () => {
  flyerSound.play();
});

window.addEventListener("closeFlyer", () => {
  flyerSound.play();
});

window.addEventListener("buyNewspaper", () => {
  newspaperSound.play();
  setTimeout(() => { registerSound.play() }, 500);
});

window.addEventListener("lampClick", () => {
  lampClickSound.play();
});

window.addEventListener("walkOutside", () => {
  if (!outsideStepsSound.isPlaying()) {
    outsideStepsSound.play();
  }
});

window.addEventListener("walkInside", () => {
  if (!insideStepsSound.isPlaying()) {
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

function mouseWheel(ev) { game.mouseWheel(ev); }
window.mouseWheel = mouseWheel;