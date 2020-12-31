class Ball {
    constructor(x, y, r, options) {
        var options = {
            isStatic: false,
            density: 1.2
        }
        this.r = r;
        this.color = color(random(0,255), random(0,255), random(0,255));
        this.color2 = color(random(0,255), random(0,255), random(0,255));
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(3);
        stroke(this.color2);
        fill(this.color);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}