// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var hearts = [];
var heartImg;
var canvas;

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
    // canvas = document.getElementById('canvas');
    // canvas.width = screen.width;
    // canvas.height = screen.height;
    // var context = canvas.getContext("2d");
    // context.background = '#000';
    background(0);
    
}

addHeart = () => {
    hearts.push(new Heart());
}

function Heart() {
    this.posX = Math.random() * screen.width;
    this.posY = screen.height;
    this.size = 100;
    this.scale = Math.random();

    this.update = function () {
        if (this.posY <= 0) this.deleteHeart(this);
        this.posY -= 50 * this.scale;
    }

    this.display = function () {
        //background(0);
        fill('pink');
        scale(this.scale);
        let posX = this.posX * (1 / this.scale);
        let posY = this.posY * (1 / this.scale);
        //ellipse(posX, posY, this.size)
        var ctx = canvas.getContext('2d');
        ctx.moveTo(posX, posY);
        ctx.bezierCurveTo(posX + 75, posY + 37, posX + 70, posY + 25, posX + 50, posY + 25);
        ctx.bezierCurveTo(posX + 20, posY + 25, posX + 20, posY + 62.5, posX + 20, posY + 62.5);
        ctx.bezierCurveTo(posX + 20, posY + 80, posX + 40, posY + 102, posX + 75, posY + 120);
        ctx.bezierCurveTo(posX + 110, posY + 102, posX + 130, posY + 80, posX + 130, posY + 62.5);
        ctx.bezierCurveTo(posX + 130, posY + 62.5, posX + 130, posY + 25, posX + 100, posY + 25);
        ctx.bezierCurveTo(posX + 85, posY + 25, posX + 75, posY + 37, posX + 75, posY + 40);
        ctx.fill();
        scale(1 / this.scale);
    }

    this.deleteHeart = (currentHeart) => {
        const index = hearts.indexOf(currentHeart);
        hearts.splice(index, 1);
    }
}