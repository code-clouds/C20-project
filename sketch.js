function preload() {
  bg = loadImage("Images/iss.png");
  sleep = loadAnimation("Images/sleep.png");
  brush = loadAnimation("Images/brush.png");
  gym = loadAnimation("Images/gym1.png", "Images/gym2.png", "Images/gym11.png", "Images/gym12.png");
  eat = loadAnimation("Images/eat1.png", "Images/eat1.png", "Images/eat1.png", "Images/eat2.png", "Images/eat2.png", "Images/eat2.png")
  drink = loadAnimation("Images/drink1.png", "Images/drink1.png", "Images/drink1.png", "Images/drink2.png", "Images/drink2.png", "Images/drink2.png")
  move = loadAnimation("Images/move.png", "Images/move.png", "Images/move.png", "Images/move1.png", "Images/move1.png", "Images/move1.png")
}

function setup() {
  createCanvas(600, 500);

  if (keyDown("UP_ARROW")) {
    astrounaut = createSprite(300, 230);
    astrounaut.addAnimation("brushing", brush);
    astrounaut.changeAnimation("brushing");
    astrounaut.scale = 0.1;
    astrounaut.y = 355;
    astrounaut.velocityX = 3;
    astrounaut.velocityY = 2;

  }
  if (keyDown("DOWN_ARROW")) {
    astrounaut = createSprite(300, 230);
    astrounaut.addAnimation("gymming", gym);
    astrounaut.changeAnimation("gymming");
    astrounaut.scale = 0.1;
    astrounaut.y = 354;
    astrounaut.velocityX = 0;
    astrounaut.velocityY = 1;

  }
  if (keyDown("LEFT_ARROW")) {
    astrounaut = createSprite(300, 230);
    astrounaut.addAnimation("eating", eat);
    astrounaut.changeAnimation("eating");
    astrounaut.scale = 0.1;
    astrounaut.y = 353;
    astrounaut.velocityX = 1;
    astrounaut.velocityY = 0;

  }
  if (keyDown("RIGHT_ARROW")) {
    astrounaut = createSprite(300, 230);
    astrounaut.addAnimation("drinking", drink);
    astrounaut.changeAnimation("drinking");
    astrounaut.scale = 0.1;
    astrounaut.y = 352;
    astrounaut.velocityX = 4;
    astrounaut.velocityY = 1;

  }
  if (keyDown("m")) {
    astrounaut = createSprite(300, 230);
    astrounaut.addAnimation("moving", move);
    astrounaut.changeAnimation("moving");
    astrounaut.scale = 0.1;
    astrounaut.y = 351;
    astrounaut.velocityX = 2;
    astrounaut.velocityY = 2;

  }
  astrounaut = createSprite(300, 230);
  astrounaut.addAnimation("sleeping", sleep);
  astrounaut.scale = 0.1;
}



function draw() {
  background(bg);
  createEdgeSprites();
  drawSprites();
}