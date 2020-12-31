class Shelf {
    constructor(x, y, width, height, angle) {
        var options = {
            isStatic: true
        }
        this.width = width;
        this.height = height;
        this.color = color(random(0,255),random(0,255),random(0,255));
        this.body = Bodies.rectangle(x, y, width, height, options);
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        rect(0, 0, this.width, this.height);
        pop();
    }
}