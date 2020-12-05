var dog,dogImg;
var happyDogImg;
var database;
var foodS;
var foodStock;

function preload()
{
  dogImg = loadImage("dogImg.png")
  happyDogImg = loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(200,200)
  dog.addImage(dogImg)

  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(Foods);
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

function writeStock(){
  database.ref("/").update({
    Food:x
  })
}
