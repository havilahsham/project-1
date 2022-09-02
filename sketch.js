var box
function setup() {
  createCanvas(400,400);
box = createSprite(100,100,50,50)
}

function draw() 
{
  background("white");

if(keyDown("right")){
  box.x= box.x+4
  background("green")
}

if(keyDown("left")){
  box.x= box.x-4
  background("blue")
}

if(keyDown("up")){
  box.y= box.y-4
  background("red")
}

if(keyDown("down")){
  box.y= box.y+4
background("purple")
}



drawSprites ();
}




