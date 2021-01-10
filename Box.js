class Box{
    constructor(x,y,width,height){
        var options = {
            restitution:0.8,
            friction:0.3,
            density:0.04
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("yellow");
        rect(0,0,this.width,this.height);
        pop();
    }
    score(){
        if(ball.collide(box1,box2,box3,box4,box5)){
            box1.visible = false;
            box2.visible = false;
            box3.visible = false;
            box4.visible = false;
            box5.visible = false;
        }
    }
}