var MPlate, FPlate;

function setup() {
  createCanvas(800,400);
  
  FPlate = createSprite(600, 200, 50, 100);
  FPlate.shapeColor = "Green";

  MPlate = createSprite(200, 200, 100, 50);
  MPlate.shapeColor = "Green";
}

function draw() {
  background(255,255,255); 
 
MPlate.x = mouseX;

MPlate.y = mouseY;

console.log(FPlate.y - MPlate.y);

if(FPlate.y - MPlate.y < MPlate.height/2 + FPlate.height/2 
  && MPlate.y - FPlate.y < MPlate.height/2 + FPlate.height/2
  && FPlate.x - MPlate.x < MPlate.width/2 + FPlate.width/2 
  && MPlate.x - FPlate.x < MPlate.width/2 + FPlate.width/2){
  FPlate.shapeColor = "Red";
}
else{
  FPlate.shapeColor = "Green";
}



/*
  if(FPlate.x - MPlate.x <= 75 && FPlate.x - MPlate.x >= -75){
    FPlate.shapeColor = "Red";
  }
  else{
    FPlate.shapeColor = "Green";
  }
  */
  drawSprites();
}