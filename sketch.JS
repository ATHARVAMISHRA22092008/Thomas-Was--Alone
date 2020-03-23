const world = Matter.World;
const engine = Matter.Engine;
var thomasimg, thomas, chris, chrisimg, claire, claireimg, sarah, sarahimg, jhon, player, jhonimg, water, waterImg, platLow, platLowImg, platTall, platTallImg, thomasThin, thomasThinImg, sarahThin;
function preload(){
thomasimg = loadImage("spriteImg/thomas.png");
jhonimg = loadImage("spriteImg/jhon.png");
chrisimg = loadImage('spriteImg/chris.png');
sarahimg = loadImage('spriteImg/sarah.png');
claireimg = loadImage('claire.png');
waterImg = loadAnimation('agua.GIF');
platLowImg = loadImage('platLow.png');
platTallImg = loadImage('platTal.png');
player = daatabase.player
}
function setup(){
createCanvas(400,40);
thomas = new char(100,200);
jhon = new char(100,200);
chris = new char(100,200);
sarah = new char(100,200);
claire = new char(100,200);
water = new char(200,300);
platTall = createSprite();
platLow.addImage(platLowImg);
platTall.addImage(platTallImg);
thomas.addImage(thomasimg);
jhon.addImage(jhonimg);
chris.addImage(chrisimg);
sarah.addImage(sarahimg);
claire.addImage(claireimg);
water.addAnimation(waterImg);
}
function draw(){
    if(keyDown("UP")){
        player.velocityY(+3)
    }
drawSprites();
}