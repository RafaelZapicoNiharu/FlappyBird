const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let bird = new Image();
bird.src = "images/bird.png"

let bg = new Image();
bg.src = "images/bg.png"

let chao = new Image();
chao.src = "images/chao.png"


let canocima = new Image();
canocima.src = "images/canocima.png"

let canobaixo = new Image();
canobaixo.src = "images/canobaixo.png"

let fly = new Audio();
fly.src = "sounds/fly.mp3"

let scor = new Audio();
scor.src = "sounds/score.mp3"

let eec = 100;
let constant;
var bX = 33;
let bY = 200;
let gravity=1.4
let score = 0;

var cano = [];

cano[0] = {
    x: canvas.width,
    y: 0
}



document.addEventListener("keydown",()=>{
    bY = bY -26;
    fly.play();
})




function jogo(){
ctx.drawImage(bg,0,0);

for(let i=0 ;  i<cano.length ;i++){

    constant =  canocima.height + eec;
    ctx.drawImage(canocima, cano[i].x, cano[i].y);
    
    ctx.drawImage(canobaixo, cano[i].x, cano[i].y+constant)   
   
   
   
    cano[i].x = cano[i].x -1

     if(cano[i].x == 125){
        cano.push({
            x:canvas.width,
            y:Math.floor(Math.random()*canocima.height)-canocima.height 
        })
     }

     if((bX+bird.width>=cano[i].x)&&(bX<=cano[i].x+canocima.width)&&(bY<=cano[i].y+canocima.height||bY+bird.height>=cano[i].y+constant)||(bY+bird.height>=canvas.height-chao.height)){
        location.reload();
     }

     if(cano[i].x==5){
        score++;
        scor.play();

     }

}



ctx.drawImage(chao,0,canvas.height - chao.height)

ctx.drawImage(bird,bX,bY);
bY += gravity;


ctx.fillStyle = "#000";
ctx.font="20px Verdana";
ctx.fillText("Pontos:"+ score, 10, canvas.height-20);


    requestAnimationFrame(jogo);
}

jogo();



