const boids = [];

for (let count = 100; count --;)
    boids.push(
        new Boid
    );

    
function update() {
    
    boids.forEach(boid=> {
        
        for (let i in boids)
            boid.connect(boids[i], i);
        boid.move();
    });
    
}
function render() {
    for (let i in boids) boids[i].draw();
}