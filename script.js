const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let bird = new Image();
bird.src = "images/bird.png"

let bg = new Image();
bg.src = "images/bg.png"

let chao = new Image();
chao.src = "images/chao.png"


let canocima = new Image();
canocima.src = "images/canobaixo.png"

let canobaixo = new Image();
canobaixo.src = "images/canobaixo.png"

let eec = 100;
let constant;
var bX = 33;
let bY = 200;
let gravity=1.4
let score = 0;

var cano = [];

cano[0] = {
    x: canvas.width,
    y:0
}

let fly = new Audio();
fly.src = "sounds/fly.mp3"

let scor = new Audio();
scor.src = "sounds/score.mp3"

document.addEventListener("keydown",()=>{
    bY = bY -26;
    fly.play();
})




function jogo(){
ctx.drawImage(bg,0,0);

ctx.drawImage(chao,0,canvas.height - chao.height)

ctx.drawImage(bird,bX,bY);
bY += gravity;


    requestAnimationFrame(jogo);
}

jogo();



