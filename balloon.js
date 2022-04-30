
class Baloon {
    constructor() {
        this.f = 75;
        this.n = width;
        this.l = height - this.f;
    }

    move() {
        this.n -= 16;
    }

    show() {
        image(bImag, this.n, this.l, this.f, this.f);

        //  fill(255, 50);
        //  ellipseMode(CORNER);
        // ellipse(this.x, this.y, this.r, this.r);
    }
}