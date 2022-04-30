
class Mario {
    constructor() {
        this.f = 100;
        this.n = 50;
        this.l = height - this.f;
        this.r = 0;
        this.gravity = 3;
    }

    jump() {
        if (this.l == height - this.f) {
            this.r = -35;
        }
    }

    hits(balloon) {

        return collideRectRect(this.n, this.l, this.f, this.f, balloon.n, balloon.l, balloon.f, balloon.f);
    }

    move() {
        this.l += this.r;
        this.r += this.gravity;
        this.l = constrain(this.l, 0, height - this.f);
    }

    show() {
        image(mImag, this.n, this.l, this.f, this.f);

        //  fill(255, 50);
        //  ellipseMode(CORNER);
        //  ellipse(this.x, this.y, this.r, this.r);
    }
}