// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var hearts = [];
var image;

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
    //image = loadImage("../images/floor.png");
}

addHeart = () => {
    hearts.push(new Heart());
}

function Heart() {
    this.posX = Math.random() * screen.width;
    this.posY = screen.height;
    this.size = 100;
    //this.scale = 30;
    this.scale = Math.random() * 0.5;

    this.update = function () {
        if (this.posY <= 0) this.deleteHeart(this);
        this.posY -= 10 * this.scale;
    }

    this.display = function () {
        fill('pink');
        scale(this.scale);
        let posX = this.posX * (1 / this.scale);
        let posY = this.posY * (1 / this.scale);
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(posX, posY + 36);
        ctx.quadraticCurveTo(posX + 40, posY + 0, posX + 40, posY + -20);
        ctx.quadraticCurveTo(posX + 40, posY + -40, posX + 20, posY + -40);
        ctx.quadraticCurveTo(posX + 0, posY + -40, posX + 0, posY + -20);
        ctx.quadraticCurveTo(posX + 0, posY + -40, posX + -20, posY + -40);
        ctx.quadraticCurveTo(posX + -40, posY + -40, posX + -40, posY + -20);
        ctx.quadraticCurveTo(posX + -40, posY + 0, posX + 0, posY + 36);
        ctx.fill();

        // ctx.restore();
        scale(1 / this.scale)
    }

    this.deleteHeart = (currentHeart) => {
        const index = hearts.indexOf(currentHeart);
        hearts.splice(index, 1);
    }
}