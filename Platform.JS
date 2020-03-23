class plat{
    constructor(x,y,width,height){
        var options = {
            "isStatic": true
        }
        this.image = loadImage("sprite/platLow.png");
        this.img = loadImage('sprite/platTall.png');
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y, this.img, this.image);
        
        pop();
    }
}