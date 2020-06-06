let sketch = new p5();

function preload() {

}

function setup() {
    sketch.createCanvas(windowWidth, windowHeight);
    frameRate(30);
}
window.setup = setup;

function windowResized() {
    sketch.resizeCanvas(windowWidth, windowHeight);
}
window.addEventListener("resize", windowResized);