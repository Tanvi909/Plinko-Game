class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 15;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image= loadImage("s2.png"); 
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        //fill("white");
        //ellipseMode(RADIUS);
        image(this.image, 0,0, this.r, this.r); 
        pop();
    }

};