class Strawberry{
    constructor(x, y){
        var options={
            
            'restitution' : 0,
            'friction': 1,
            'isStatic': true

        }
        
        this.body=Bodies.circle(x, y, 20, options);
        this.image=loadImage("strawberry.png")
        this.radius=30;
        World.add(world, this.body)
        
       
       
    }

    display(){

        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*1.3, this.radius*1.3);
        fill("purple")
        pop();

     
  
      
  
     
    }
};