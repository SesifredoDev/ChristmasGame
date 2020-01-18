function Clock(){

var interval

    this.start = function() {

        timeIt = function(startTime) {            
            var m = millis() 
            this.currentTime = floor((m - startTime) / 1000);
            var timer = select('#timer');
            timer.html(convertSeconds(this.currentTime));
        }   
                

        this.interval = setInterval(timeIt, 1000, millis()); 
    }

    this.stop = function() {
        clearInterval(this.interval)
    }
}
    

convertSeconds = function(s) {

        var min = floor(s / 60);
        var sec = s % 60;
         return nf(min, 2) + ':' + nf(sec, 2);
    }
