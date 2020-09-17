class BoxColor4{
    constructor(x, y) {
        var options = {
            'isStatic': false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        fill("#AC7A2B");
        rotate(angle);
        strokeWeight(1.5);
        stroke("black");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
        
      }
} 