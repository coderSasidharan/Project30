class Box {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.6,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
        
    }
    
    display(){

        if(this.body.speed>2){
            World.remove(world,this.body);
            push();
            this.visibility = this.visibility-5
            tint(255, this.value)
            //rect( this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
        }else{
        var angle = this.body.angle;
        push();
        rotate(angle);
        fill("blue");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
        }
      }
  };