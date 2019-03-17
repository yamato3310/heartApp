// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var hearts = [];
var image;
var mainCanvas;

function draw() {
    createCanvas(screen.width, screen.height);
    //this.mainCanvas.clearRect(0,0, screen.width, screen.height);
    //this.mainCanvas.width = canvas.width;
    //this.mainCanvas.fillStyle = "rgba(0,0,0,0)";
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
    //this.mainCanvas.fillStyle = "rgba(0,0,0,0)";
    //let video = createVideo(['assets/videos/test.mp4']).autoplay(true);
    //image = loadImage("../images/floor.png");
    colorMode(RGB, 255, 255, 255, 255);
}

addHeart = () => {
    hearts.push(new Heart());
}

function Heart() {
    this.posX = Math.random() * screen.width;
    this.posY = screen.height;
    this.size = 100;
    //this.color = ["pink", "#FF7EFA"];
    this.color = ["#7E88FF", "#FF7EFA", "#7EFFEB", "#B0FF7E", "#FFF57E", "#FF7E7E"];
    //this.num = 0;
    this.num = Math.floor(Math.random() * 6);
    //this.scale = 30;
    this.scale = Math.random() * 0.5;

    this.update = function () {
        if (this.posY <= 0) this.deleteHeart(this);
        this.posY -= 10 * this.scale;
    }

    this.display = function () {
        // fill("#FF7EFA");
        fill(this.color[this.num])
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