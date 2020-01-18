function Enemy(){
        this.speed = 5;
        this.colour;
        this.height= 37.5;
        this.width = 37.5;
        this.distance = 37.5;
        this.x = random( 1, width-15)
        this.y = random (1, height-15)
        var r = random(0, 255);
        var g = random(0, 255);
        var b = random(0, 255)

        this.inmiddle = false; 


    this.setup = function(tree){
        while (dist(this.x, this.y, tree.x, tree.y) <= 150){
            this.x = random( 1, width-15)
            this.y = random (1, height-15)
        }
        
    }
    this.draw = function(tree){
        // rectMode(CENTER)
        
        strokeWeight(2)
        stroke(51)
        fill(r , g , b);
        rect(this.x, this.y, this.height, this.width);
        fill(255,0,0)
       noStroke()
        rect(this.x+15, this.y,10, this.height - 1)
        rect(this.x, this.y+15, this.width -1 ,10)
    }

    this.isInMiddle = function(tree) {
        if (dist(this.x + 15, this.y+15, tree.x, tree.y) < 95 && !this.inmiddle){
            this.inmiddle = true
            //this.x = width/2 - (this.width/2)
           // this.y = height/2 - (this.height/2)
            Points += 1;
            console.log(Points)
        }
    }

    
    this.move = function(p) {
        if(!this.inmiddle) {
            var d = dist(this.x+ (this.width/2), this.y + (this.height/2), p.x, p.y)

            if(d <= this.distance) {
                if (this.x < p.x){
                    if(this.x - (this.width/2)> 0)
                        this.x -= this.speed;
                }
                if( this.x > p.x){
                    if(this.x+ (this.width/2) <width)
                        this.x += this.speed;
                }
                if( this.y > p.y){
                if(this.y + (this.height/2)  < height)
                        this.y += this.speed;
                }
                if( this.y < p.y){
                    if(this.y - (this.height/2) >0)
                        this.y -= this.speed;
                }
            }
        }
    }
}