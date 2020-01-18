function Player(x, y, colour){
    var x, y
    var moveSpeed = 4;

     let value = 0;
     let lifePoints = 100;
   
        this.x = x;
        this.y = y;
        this.colour = colour;
        this.height = 37.5;
        this.width = 37.5;
        this.lifePoints = 50;

    this.draw = function(){
        fill(this.colour.r, this.colour.g, this.colour.b);
        ellipse(this.x, this.y, this.width, this.height);
    }
    this.move = function(e){

        if (keyIsDown(LEFT_ARROW)) {
            if(this.x - (this.width/2)>0 - 20)
                this.x -= moveSpeed;
          }
        
          if (keyIsDown(RIGHT_ARROW)) {
              if(this.x+ (this.width/2) <width + 20)
            this.x += moveSpeed;
          }
        
          if (keyIsDown(UP_ARROW)) {
            if(this.y - (this.height/2)>0 - 20)
            this.y -= moveSpeed;
          }
        
          if (keyIsDown(DOWN_ARROW)) {
            if(this.y + (this.height/2) <height + 20)
            this.y += moveSpeed;

          }
          
    }
        
}

function colour(r, g, b) {
    this.r = r
    this.g = g
    this.b = b
}