class Boid {
    constructor() {

        this.x = random(10, cvs.width - 10);
        this.y = random(10, cvs.height - 10);
        this.direction = random(0, PI);
        this.direction_now = 0;
        this.color = "#f14e6a";
        this.speed = random(1, 3)

    }

    connect(obj) {
        
        if (getDistance(this.x, this.y, obj.x, obj.y) < 100)
            this.direction = obj.direction + random(-.2, .2);

    }
    move() {

        
        this.direction > PI ? this.direction = 0 : 0;
        
        this.x += cos(this.direction_now) * this.speed;
        this.y += sin(this.direction_now) * this.speed;

        this.direction_now = lerp(this.direction_now, this.direction, .1);
        
        // Teleportation
        if (this.x > cvs.width + 10)
            this.x = -10;
        else if (this.x < -10)
            this.x = cvs.width + 10;
        if (this.y > cvs.height + 10)
            this.y = -10;
        else if (this.y < -10)
            this.y = cvs.height + 10;

    }

    draw() {

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.direction_now);

        ctx.fillStyle = this.color;

        let offset = 7.5;

        ctx.moveTo(-offset, -offset);
        ctx.lineTo(5 - offset, 4 - offset);
        ctx.lineTo(10 - offset, 0 - offset);
        ctx.lineTo(15 - offset, 5 - offset);
        ctx.lineTo(10 - offset, 10 - offset);
        ctx.lineTo(5 - offset, 6 - offset);
        ctx.lineTo(0 - offset, 10 - offset);
        ctx.closePath();

        ctx.fill();
        ctx.beginPath();

        ctx.restore();

    }
}