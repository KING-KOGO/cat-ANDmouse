var movR, fixR;

function setup() {
  createCanvas(800,400);
  movR = createSprite(700, 200, 60, 40);
  movR.debug=true;
  fixR= createSprite(300,200,50,80);
  fixR.debug=true;
}

function draw() {
  background(0);
  movR.y=mouseY;
  movR.x=mouseX;

  console.log(movR.x-fixR.x);

  if(movR.x-fixR.x < movR.width/2 + fixR.width/2
    && fixR.x-movR.x<movR.width/2 + fixR.width/2
    &&movR.y-fixR.y < movR.height/2 + fixR.height/2
    && fixR.y-movR.y<movR.height/2 + fixR.height/2){
    movR.shapeColor="lime";
    fixR.shapeColor = "lime";
  }
  else {
    movR.shapeColor="purple";
    fixR.shapeColor = "purple";
  }
  
  drawSprites();
}

//algorithm--> flow of logic to accomplish