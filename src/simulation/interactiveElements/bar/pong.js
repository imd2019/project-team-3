//Spieler 1
// var xPos1 = width / 2 - 300;
var Pong = {
  starting: false,
  slidingR: true,
};

var xPos1 = 100;
var yPos1 = height / 2;

//Spieler 2
// var xPos2 = width / 2 + 300;
var xPos2 = width - 100;
var yPos2 = height / 2;

//Ball
var xPosBall = width / 2;
var yPosBall = height / 2;

var movingBall = false;
var movingBallLeft = true;
var movingBallRight = false;
var BallRandom = 0;
var hitBorder = false;
var hitBorderUp = false;
var hitBorderDown = false;
var ballspeed = 10;
var yspeed = 0;
var points = 0;
var pointWidth = 20;
var pointgrow = false;
var Buttoncolor = color(200);

var touchDownLeft = false;
var touchDownRight = false;
var touchUpLeft = false;
var touchUpRight = false;

function Spieler() {
  if (pointWidth >= 25) {
    pointgrow = false;
  }
  if (pointWidth <= 2) {
    pointgrow = true;
  }
  if (pointgrow === false) {
    pointWidth--;
  }
  if (pointgrow === true) {
    pointWidth++;
  }
  //highscore
  fill(200, 200, 0);
  stroke(170, 170, 0);
  strokeWeight(3);
  rect(width / 2, 21, pointWidth, 25, 20, 20);
  noStroke();
  textSize(35);
  fill(200);
  textAlign(LEFT);
  text(points, width / 2 - 70, 33);
  textSize(25);

  strokeWeight(3);
  fill(255, 255, 255);
  rectMode(CENTER);
  rect(xPos1, yPos1, 10, 40);
  rect(xPos2, yPos2, 10, 40);

  //Spieler 1
  if (keyIsDown(83) || touchDownLeft === true) {
    yPos1 = yPos1 + 10;
  }
  if (keyIsDown(87) || touchUpLeft === true) {
    yPos1 = yPos1 - 10;
  }

  //Spieler 2
  if (keyIsDown(40) || touchDownRight === true) {
    yPos2 = yPos2 + 10;
  }
  if (keyIsDown(38) || touchUpRight === true) {
    yPos2 = yPos2 - 10;
  }

  if (yPos1 < 100) {
    yPos1 = 100;
  }

  if (yPos2 < 100) {
    yPos2 = 100;
  }

  if (yPos1 > height - 70) {
    yPos1 = height - 70;
  }

  if (yPos2 > height - 70) {
    yPos2 = height - 70;
  }
}

function Ball() {
  fill(255);
  rect(xPosBall, yPosBall, 10, 10);

  stroke(255);
  line(xPos1, 80, xPos2, 80);
  line(xPos1, height - 50, xPos2, height - 50);
  noStroke();
  // fill(Coin.color);
  // rect(width / 2, 25, Coin.sizeX, Coin.sizeY, 20);
  // fill(255);
  // textAlign(LEFT);
  // text(Coins, width / 2 + 100, 30);
}

function BallMoving() {
  if (movingBall === true && movingBallLeft === true) {
    xPosBall = xPosBall - ballspeed;
    yPosBall = yPosBall + BallRandom;
  }
  //Weiter gehts
  if (
    movingBall === true &&
    movingBallLeft === true &&
    xPosBall <= xPos1 + 10 &&
    yPosBall >= yPos1 - 20 &&
    yPosBall <= yPos1 + 20
  ) {
    ballspeed = ballspeed + 1;
    yspeed = yspeed + 0.1;
    movingBallLeft = false;
    movingBallRight = true;
    hitBorder = true;
    points++;
  }

  //Aus dem Feld
  if (
    (movingBall === true && xPosBall <= xPos1 + 10 && yPosBall < yPos1 - 20) ||
    (movingBall === true && xPosBall <= xPos1 + 10 && yPosBall > yPos1 + 20)
  ) {
    movingBall = false;
    // Pong.slideX = width / 2;
    Pong.slidingR = true;
    xPosBall = width / 2;
    yPosBall = height / 2;
    Pong.starting = false;
  }

  if (movingBall === true && movingBallRight === true) {
    xPosBall = xPosBall + ballspeed;
    yPosBall = yPosBall + BallRandom;
  }
  //Weiter gehts
  if (
    movingBall === true &&
    movingBallRight === true &&
    xPosBall >= xPos2 - 10 &&
    yPosBall >= yPos2 - 20 &&
    yPosBall <= yPos2 + 20
  ) {
    ballspeed = ballspeed + 1;
    yspeed = yspeed + 0.1;
    movingBallLeft = true;
    movingBallRight = false;
    hitBorder = true;
    points++;
  }

  //Aus dem Feld
  if (
    (movingBall === true && xPosBall >= xPos2 - 10 && yPosBall < yPos2 - 20) ||
    (movingBall === true && xPosBall >= xPos2 - 10 && yPosBall > yPos2 + 20)
  ) {
    movingBall = false;
    Pong.slidingR = true;
    xPosBall = width / 2;
    yPosBall = height / 2;
    Pong.starting = false;
  }

  //Border oben

  if (yPosBall <= 85) {
    hitBorderUp = true;
  }

  if (yPosBall >= height - 55) {
    hitBorderDown = true;
  }

  if (hitBorder === true) {
    BallRandom = int(random(-(5 - yspeed), 5 + yspeed));
    hitBorder = false;
  }

  if (hitBorderUp === true) {
    BallRandom = int(random(1, 5 + yspeed));
    hitBorderUp = false;
  }
  if (hitBorderDown === true) {
    BallRandom = int(random(-(5 + yspeed), -1));
    hitBorderDown = false;
  }
}

function Restart() {
  if (movingBall === false) {
    xPosBall = width / 2;
    yPosBall = height / 2 + 15;
    BallRandom = 0;
    ballspeed = 10;
    points = 0;
    xPos1 = 100;
    yPos1 = height / 2 + 15;
    xPos2 = width - 100;
    yPos2 = height / 2 + 15;

    fill(Buttoncolor);
    rect(width / 2, height / 2, 100, 50);
    fill(0);
    textSize(25);
    textAlign(CENTER);
    text("START", width / 2, height / 2 + 10);

    textSize(20);

    fill(255);
    text("Controls:", width / 2, height / 2 + 50);
    text("Left: UP / Down: 'W' and 'S'", width / 2, height / 2 + 80);
    text(
      "Right: UP / Down: 'Arrow up' and 'Arrow down'",
      width / 2,
      height / 2 + 100
    );
    fill(0);
    textAlign(LEFT);
    if (
      mouseX >= width / 2 - 50 &&
      mouseX <= width / 2 + 50 &&
      mouseY >= height / 2 - 25 &&
      mouseY <= height / 2 + 25
    ) {
      Buttoncolor = color(150);
      if (mouseIsPressed === true) {
        movingBall = true;
      }
    } else Buttoncolor = color(200);
  }
}

function draw() {
  clear();
  Spieler();
  Ball();
  BallMoving();
  Restart();
}
