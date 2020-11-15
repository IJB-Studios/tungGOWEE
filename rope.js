class Rope {
    constructor(bodyA, bodyB, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.offsetX, y: this.offsetY}
        }
        this.bodyA = bodyA
        this.bodyB = bodyB
        this.rope = Constraint.create(options)
        World.add(world, this.rope)
    }
    display() {
        push();
        strokeWeight(4)
        line(this.bodyA.position.x, this.bodyA.position.y, this.bodyB.position.x+this.offsetX, this.bodyB.position.y+this.offsetY)
        pop()
    }
}