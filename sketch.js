var dog,dogImg;
var happyDogImg;
var database;
var foodS;
var foodStock;

function preload()
{
  dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(200,280)
  dog.addImage(dogImg)
  dog.scale = 0.5

  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
   
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }

  drawSprites();
 
  textSize = 15
  fill("yellow")
  stroke(3)
  text("foodStock",300,20)

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref("/").update({
    Food:x
  })
}
