class Tree{
    constructor(x, y){
        var options={
            
            'restitution' : 0.3,
            'friction': 0.5,
            'density': 1.2,
            'isStatic': true

        }
        
        this.body=Bodies.circle(x, y, 20, options);
        this.image=loadImage("tree.png")
        this.radius=55;
        World.add(world, this.body)
        
       
       
    }

    display(){

        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*8, this.radius*8);
        fill("purple")
        pop();

     
  
      
  
     
    }
};