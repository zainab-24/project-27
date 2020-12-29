class Bob
    {
        constructor (x,y,r)
{
     var options={
         isStatic:true,
         restitution:0.3,
         friction:0.5,
         density:0.12
     }
this.x=x;
this.y=y;
this.r=r       
this.body=Bodies.circle(this.x,this.y,this.r/2,options);
World.add(world,this.body)
    }
display(){

   // paperpos= this.body.position;

    push(0,0)
    translate(this.body.position.x,this.body.position.y)
    ellipseMode(CENTER)
    strokeWeight(3);
    fill("pink");
    ellipse(0,0,this.r,this.r)
pop()
}
    }
