let image2;
let rightArrow;
let lefttArrow;
let body;
let zhouWen;
let follower;
let video;
let pg;
let handpose;
let modelLoaded = false;
let predictions = [];
let previousX;
let previousY;


function preload(){
image2 = loadImage("images/2.png");
rightArrow = loadImage("images/right.png");
lefttArrow = loadImage("images/left.png");
body = loadImage("images/dehydratedBody.png");
zhouWen = loadImage("images/zhouwen.png");
follower = loadImage("images/follower.png");
}

function setup() {
  createCanvas(1512,867);
  video = createCapture(VIDEO);
  video.size(1512, 867);
  video.hide();
  handpose = ml5.handpose(video, modelReady);
  pg = createGraphics(1512, 200);
  handpose.on("predict", function (results) {
    predictions = results;

    button = createButton("Clear All");
    button.position(600, 800);

    button = createButton("Capture");
    button.position(800, 800);
  });
} 

function draw() {
  
  if (modelLoaded) {
    background(220);
  image(image2, 0 , 0, 1512, 867);
  image(rightArrow, 1402, 390, 100, 100);
  image(lefttArrow, 8, 390, 100, 100);
  nextPage();
  previousPage();
  people();

  if (predictions.length > 0) {
    let hand = predictions[0];
    let pointer = hand.annotations.indexFinger[0];

    let pointerX = pointer[0];
    let pointerY = pointer[1];

    let xpos = map(pointerX, 100, 100, 0, width, true);
    let ypos = map(pointerY, 100, 100, 0, height, true);

    fill(0, 255, 0);
    circle(xpos, ypos, 10);

    if (previousX == undefined) {
      previousX = pointerX;
    }
    if (previousY == undefined) {
      previousY = pointerY;
    }

    pg.stroke(0);
    pg.strokeWeight(5);
    pg.line(pointerX, pointerY, previousX, previousY);

    previousX = pointerX;
    previousY = pointerY;
  }
}
}


function keyPressed() {
pg.clear();
}


function modelReady() {
  //console.log("Model ready!");
  modelLoaded = true;
}


function nextPage(){
 if (mouseIsPressed && mouseX > 1402 && mouseX < 1502 && mouseY > 390 && mouseY < 490){
  window.location.href = "page3.html";
 }
}

function previousPage(){
 if (mouseIsPressed && mouseX > 8 && mouseX < 108 && mouseY > 390 && mouseY < 490){
  window.location.href = "page1.html";
 }
}

function people(){
if (mouseIsPressed && mouseX > 191 && mouseX < 303 && mouseY > 626 && mouseY < 662){
    image(body, 355, 531, 197, 262);;
  }
if (mouseIsPressed && mouseX > 856 && mouseX < 969 && mouseY > 641 && mouseY < 678){
  image(zhouWen, 615, 351, 197, 203);
}
if (mouseIsPressed && mouseX > 1024 && mouseX < 1135 && mouseY > 641 && mouseY < 678){
    image(follower, 1142, 380, 203, 245);
  }
}

