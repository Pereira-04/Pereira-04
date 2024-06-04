function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("white");
}
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("white");
    rect(0, 0, 100, 150)
}
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("white");

    fill("red")
    rect(0, 0, 100, 150)
}
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("white");

    stroke("blue")
    fill("red")
    rect(0, 0, 100, 150)
}
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("white");

  stroke("blue")
  fill("red")
  rect(100, 250, 100, 150)
}
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("white");

  stroke("blue")
  fill("red")
  rect(mouseX, mouseY, 20, 35)
}
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("white");

  stroke("blue")
  fill("red")
  
  console.log(mouseIsPressed)
  rect(mouseX, mouseY, 20, 35)
}
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("white");

  stroke("blue")
  fill("red")
  
  // console.log(mouseIsPressed)
  
  if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35)
  } 
}
function setup() {
  createCanvas(600, 600);
  background("white");
}

function draw() {
  stroke("blue");
  fill("red");

  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);     
}
function draw() {
    background("white");
    
    rect(0, 10, 100, 150);
}
function draw() {
    background("white");

    fill("red");
    rect(0, 10, 100, 150);
}
function draw() {
    background("white");
    
    stroke("blue") 
    fill("red") 
    rect(0, 10, 100, 150)
}
function draw() {
  background(220);
  
  stroke("blue");
  fill("red");
  rect(mouseX, mouseY, 100, 150);
}
function draw() {
  background(220);
  
  stroke("blue");
  fill("red");
  
  console.log(mouseIsPressed);
  rect(mouseX, mouseY, 100, 150);
}
function setup() {
  // cria uma tela de 400px de largura por 400px de altura
  createCanvas(400, 400);
}
function setup() {
  createCanvas(400, 400);
  background("white")
}

function draw() {
  stroke("blue");
  fill("red");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
function setup() {
    createCanvas(400, 400);
    background("white");
    }
    
function draw() {
    circle(30, 30, 20);
}
// Código omitido

function draw() {

    fill("red");
    circle(200, 200, 50);
}
let cor;

function setup() {
    createCanvas(400, 400);
    background("white");
    cor = "red";
    }
    
    // Código omitido


function setup() {

    createCanvas(400, 400);
    background("white");
    cor = color(random(0, 255), 0, 250);
    }
    
function draw() {
    
    fill(cor);
    circle(200, 200, 50)
}
// Código omitido

cor = color(random(0, 255), random(0, 255), random(0,255));r
let posicaoHorizontal;
let posicaoVertical; 

function setup() {

    createCanvas(400, 400);
    background("white");
    cor = color(random(0, 255), random(0, 250), random(0,255));
    posicaoHorizontal = 200;
    posicaoVertical = 200;
    }
    
function draw() {
    
     fill(cor);
    circle(posicaoHorizontal, posicaoVertical, 50);
}
// Código omitido

if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;
    }
// Código omitido

if(mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal + 1;
    }
// Código omitido

if(mouseY < posicaoVertical) {
    posicaoVertical = --
}
    
if(mouseY > posicaoVertical) {
    posicaoVertical = ++
}
// Código omitido

    background(color(100, 0, 0));
// Código omitido

if(mouseIsPressed) {
    cor = "color(random(0, 255), random(0, 255), random(0,255));
let cor;
let posicaoHorizontal;
let posicaoVertical; 

function setup() {

    createCanvas(400, 400);
    background(color(100, 0, 0));
    cor = "color(random(0, 255), random(0, 255), random(0,255))";
    posicaoHorizontal = 200;
    posicaoVertical = 200;
    }
    
function draw() {
    
     fill(cor);
    circle(posicaoHorizontal, posicaoVertical, 50);
    
    if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;
    
    if(mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal + 1;
    
if(mouseY < posicaoVertical) {
    posicaoVertical--;
}
    
if(mouseY > posicaoVertical) {
    posicaoVertical++;
    
    if(mouseIsPressed) {
   
    



