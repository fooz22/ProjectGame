
class Baloon {
    constructor() {
        this.r = 75;
        this.x = width;
        this.y = height - this.r; // bootom 
    }

    move() {
        this.x -= 10;//سرعة الوحش 
    }

    show() {
        image(tImg, this.x, this.y, this.r, this.r);

        //  fill(255, 50);
        //  ellipseMode(CORNER);
        // ellipse(this.x, this.y, this.r, this.r);
    }
}