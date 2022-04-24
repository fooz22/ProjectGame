
class Mario {
    constructor() {
        this.r = 100;   //حجم الكاركتر 
         this.x = 50;     // موقع وقفة الكاركتر 
        this.y = height - this.r;
        this.vy = 0; //القفزه كيف 
        this.gravity = 2; // الجاذبية 
    }

    jump() {
        if (this.y == height - this.r) {//عشان يقفز بشكل صح 
            this.vy = -35;
        }
            
        
    
    }

    hits(balloon) {

        return collideRectRect(this.x, this.y, this.r, this.r, balloon.x, balloon.y, balloon.r, balloon.r);//لايبري جاهزه ترجع ترو او فولس اذاا تصادم الوحش وماريو 
    }

    move() {
        //عشان يقفز بشكل صح 
            this.y += this.vy;
            this.vy += this.gravity;
            this.y = constrain(this.y, 0, height - this.r);
     
        


    }

    show() {
        image(uImg, this.x, this.y, this.r, this.r);


        //  fill(255, 50);
        //  ellipseMode(CORNER);
        //  ellipse(this.x, this.y, this.r, this.r);
    }
}