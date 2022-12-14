let cover;
let rightArrow;

function preload(){
cover = loadImage("images/cover1.png");
rightArrow = loadImage("images/right.png");
}

function setup() {
  createCanvas(1512,867);
  
} 


function draw() {
  background(220);
  image(cover,0 ,0 ,1512,867);
  image(rightArrow, 1402, 390, 100, 100);
  nextPage();
}

function nextPage(){
 if (mouseIsPressed && mouseX > 1402 && mouseX < 1502 && mouseY > 390 && mouseY < 490){
  window.location.href = "page1.html";
 }
}

