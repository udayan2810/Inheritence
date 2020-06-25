class Line {
    constructor(width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(width,height,options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }
