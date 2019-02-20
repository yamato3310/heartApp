// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var hearts = [];

function draw() {
    background(0);
    for (let heart of hearts) {
        heart.update();
        heart.display();
    }
}

function mousePressed() {
    hearts.push(new Heart());
}

//setInterval(mousePressed, 50);

setup = () => {
    createCanvas(screen.width, screen.height);
    background(0);
}

addHeart = () => {
    hearts.push(new Heart());
}

function Heart() {
    this.posX = sin(16) ^ 3 * Math.random() * screen.width;
    this.posY = screen.height;
    this.size = 100;
    this.scale = Math.random();

    this.update = function () {
        if (this.posY <= 0) this.deleteHeart(this);
        this.posY -= 10 * this.scale;
    }

    this.display = function () {
        fill('pink');
        scale(this.scale);
        let posX = this.posX * (1 / this.scale);
        let posY = this.posY * (1 / this.scale);
        ellipse(posX, posY, this.size)
        scale(1 / this.scale)
    }

    this.deleteHeart = (currentHeart) => {
        const index = hearts.indexOf(currentHeart);
        hearts.splice(index, 1);
    }
}