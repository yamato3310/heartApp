// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
let hearts = [];
let image;
let mainCanvas;

let heartFlg = true;
let video = document.getElementsByClassName('video');

document.addEventListener('keypress', e => {
    let video = document.getElementsByClassName('video');
    if (e.keyCode === 13 && !heartFlg) {
        heartFlg = true;
        video[0].play();
    } else {
        heartFlg = false;
        video[0].pause();
    }
    
    if (e.keyCode === 115 && heartFlg == false) {
        video[0].currentTime = 150;
        video[0].play();
        heartFlg = true;
    }
});

draw = () => {
    createCanvas(screen.width, screen.height);
    for (let heart of hearts) {
        heart.update();
        heart.display();
    }
}

mousePressed = () => {
    if (!heartFlg && hearts.length < 350) return;
    if (video[0].currentTime >= 160) return;

    hearts.push(new Heart());
}

//setInterval(mousePressed, 50);

setup = () => {
    createCanvas(screen.width, screen.height);
    colorMode(RGB, 255, 255, 255, 255);
}

addHeart = () => {
    if (!heartFlg && hearts.length < 350) return;
    if (video.currentTime > 160) return;
    
    hearts.push(new Heart());
}

function Heart() {
    this.posX = Math.random() * screen.width;
    this.posY = screen.height;
    this.size = 100;
    this.color = ["#7E88FF", "#FF7EFA", "#7EFFEB", "#B0FF7E", "#FFF57E", "#FF7E7E"];
    this.num = Math.floor(Math.random() * 6);
    this.scale = Math.random() * 0.5;

    this.update = function () {
        if (this.posY <= 0) this.deleteHeart(this);
        this.posY -= 10 * this.scale;
    }

    this.display = function () {
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

        scale(1 / this.scale)
    }

    this.deleteHeart = currentHeart => {
        const index = hearts.indexOf(currentHeart);
        hearts.splice(index, 1);
    }
}