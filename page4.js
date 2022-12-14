let page4;
let rightArrow;
let leftArrow;
// let threebody;
// let p1, p2, p3;


function preload(){
page4 = loadImage("images/page4.png");
lefttArrow = loadImage("images/left.png");
rightArrow = loadImage("images/right.png");
//threebody = loadImage("images/threebody.png");
// p1 = loadImage("images/1.1.png");
// p2 = loadImage("images/1.2.png");
// p3 = loadImage("images/1.3.png");
}

function setup() {
  createCanvas(1512,867); 
} 


function draw() {
  background(0);
  image(page4,0 ,0 ,1512,867);
  image(rightArrow, 1402, 390, 100, 100);
  image(lefttArrow, 8, 390, 100, 100);
  //image(p1, 40, 20, 1450, 130);
  //image(p2, 40, 150, 1450, 260);
  //image(p3, 40, 400, 1450, 120);
  fill(0);
  nextPage();
  previousPage();
}

function nextPage(){
 if (mouseIsPressed && mouseX > 1402 && mouseX < 1502 && mouseY > 390 && mouseY < 490){
  window.location.href = "page5.html";
 }
}

function previousPage(){
 if (mouseIsPressed && mouseX > 8 && mouseX < 108 && mouseY > 390 && mouseY < 490){
  window.location.href = "page3.html";
  }
}

// function loadgif(){
//   if (mouseIsPressed && mouseX > 76 && mouseX < 260 && mouseY > 31 && mouseY < 51){
//     image(gif,400 ,300 ,700,500);
//   }
// }

  
  
