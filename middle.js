function Middle(x, y){
    this.w = 150;
    this.h = 150;
    this.x = x;
    this.y = y;
    randomX = random()
    this.show = function(){
        fill(0, 50, 0);
        ellipse(this.x, this.y, this.w, this.h);
        fill(0, 125, 0);
        ellipse(this.x, this.y, this.w/1.3, this.h/1.3 )
        fill(0, 255, 0)
        ellipse(this.x, this.y, this.w/2.6, this.h/2.6 )

        
        
    }
}