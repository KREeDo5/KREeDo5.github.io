var GAME = {
    width: 800, // Ширина холста
    height: 600, // Высота холста
    background: new Image()
}
GAME.background.src = "./Images/Fone.png"
var RACKET = {
    x: 0,
    y: 530,
    width: 130,
    imgRacket: new Image()
}
RACKET.imgRacket.src = "./Images/racket.png";
var ANIMATION = {
    imgEnd: new Image(),
    count: 0,
}
ANIMATION.imgEnd.src = "./Images/endSprite.png";
var BULLET = {
    x: RACKET.x + 50,
    y: 520,
    yDirection: 12,
    radius: 12,
    color: "red",
    img: new Image()  
}
var BALLS = [
    { 
        color: "black",
        img: new Image(), 
        x: 12, 
        y: 44, 
        radius: 12, 
        xDirection: 1, 
        yDirection: 1 
    } 
]
for (var i = 0; i<15; i++) {
    var rand = 0 - 0.5 + Math.random() * (2 - 0 + 1)
    rand = Math.round(rand);
    if (rand === 0){
        BALLS.unshift( 
            { 
                color: "red",
                img: new Image(), 
                x: 12, 
                y: 44, 
                radius: 12, 
                xDirection: 1, 
                yDirection: 1 
            } 
        )    
    }
    if (rand === 1){
        BALLS.unshift( 
            { 
                color: "green",
                img: new Image(), 
                x: 12, 
                y: 44, 
                radius: 12, 
                xDirection: 1, 
                yDirection: 1 
            } 
        )    
    }
    if (rand === 2){
        BALLS.unshift( 
            { 
                color: "blue",
                img: new Image(), 
                x: 12, 
                y: 44, 
                radius: 12, 
                xDirection: 1, 
                yDirection: 1 
            } 
        )   
    } 
};
for (var i=0; i < BALLS.length; i++){
    BALLS[i].x = GAME.width + 13 * (i*2 + 1);
    if (BALLS[i].color === "red"){
        BALLS[i].img.src = "./Images/fireBall.png";
    }
    if (BALLS[i].color=== "green"){
        BALLS[i].img.src = "./Images/greenFireBall.png"; 
    }
    if (BALLS[i].color === "blue"){
        BALLS[i].img.src = "./Images/blueFireBall.png";
    }
    if (BALLS[i].color === "black"){
        BALLS[i].img.src = "./Images/BlackBall.png";
    }
};
const spriteBall1 = 136;
const spriteBall2 = 265;
const spriteBall3 = 399;
const spriteBall4 = 533;
const spriteBall5 = 665;
var spriteEnd = [
    {x: 0 },
    {x: 598},
    {x: 1197},
    {x: 1794},
    {x: 2404},
    {x: 3009},
    {x: 3619},
    {x: 4221},
]
let count = 0;
var score = 0;

// Подготовка инструментов рисования
var canvas = document.getElementById("canvas");
canvas.width = GAME.width; // Устанавливаем ширину холста
canvas.height = GAME.height; // Устанавливаем высота холста
var canvasContext = canvas.getContext("2d");

// Функции отрисовки...
//-кадра
function drawFrame() {
    drawAnimationEnd();
    drawBall();
    drawRacket();
    drawScore();
    for (var i = 0; i < BALLS.length; i++){
        if ((score >= 4) && (score < 9)&& (BALLS[i].y< 424)){
            canvasContext.fillStyle = "gold";
            canvasContext.font = 'italic 18pt Arial';
            canvasContext.fillText("Вперёд, у вас всё получится!", 400 , GAME.height - 12);
            GAME.background.src = "./Images/FoneYoda.png";
        }
        if (score >= 9){
            canvasContext.fillStyle = "gold";
            canvasContext.font = 'italic 18pt Arial';
            canvasContext.fillText("Ещё чуть-чуть!", 550 , GAME.height - 12);
        }
        if ((BALLS[i].y > 129) && (BALLS[i].x >= 740)){
            GAME.background.src = "./Images/HardFone.png";
        }
    }
}
//-фона
function drawBackground() {
    canvasContext.drawImage(GAME.background, 0, 0);
}

//-мячика
function drawBall() {
    for (var i = 0; i < BALLS.length; i++){
        if (count % 6 === 0) {
            canvasContext.drawImage(BALLS[i].img, 0, 0, 64, 64, BALLS[i].x, BALLS[i].y, 28, 28);
        }
        if (count % 6 === 1) {
            canvasContext.drawImage(BALLS[i].img, spriteBall1, 0, 64, 64, BALLS[i].x, BALLS[i].y, 28, 28);
        }
        if (count % 6 === 2) {
            canvasContext.drawImage(BALLS[i].img, spriteBall2, 0, 64, 64, BALLS[i].x, BALLS[i].y, 28, 28);
        }
        if (count % 6 === 3) {
            canvasContext.drawImage(BALLS[i].img, spriteBall3, 0, 64, 64, BALLS[i].x, BALLS[i].y, 28, 28);
        }
        if (count % 6 === 4) {
            canvasContext.drawImage(BALLS[i].img, spriteBall4, 0, 64, 64, BALLS[i].x, BALLS[i].y, 28, 28);
        }
        if (count % 6 === 5) {
            canvasContext.drawImage(BALLS[i].img, spriteBall5, 0, 64, 64, BALLS[i].x, BALLS[i].y, 28, 28);
        }
    }
}
//-снаряда
function drawBullet() {
    if (count % 6 === 0) {
        canvasContext.drawImage(BULLET.img, 0, 0, 64, 64, BULLET.x, BULLET.y, 28, 28);
    }
    if (count % 6 === 1) {
       canvasContext.drawImage(BULLET.img, spriteBall1, 0, 64, 64, BULLET.x, BULLET.y, 28, 28);
    }
    if (count % 6 === 2) {
        canvasContext.drawImage(BULLET.img, spriteBall2, 0, 64, 64, BULLET.x, BULLET.y, 28, 28);
    }
    if (count % 6 === 3) {
        canvasContext.drawImage(BULLET.img, spriteBall3, 0, 64, 64, BULLET.x, BULLET.y, 28, 28);
    }
    if (count % 6 === 4) {
        canvasContext.drawImage(BULLET.img, spriteBall4, 0, 64, 64, BULLET.x, BULLET.y, 28, 28);
    }
    if (count % 6 === 5) {
        canvasContext.drawImage(BULLET.img, spriteBall5, 0, 64, 64, BULLET.x, BULLET.y, 28, 28);
    }
}
//-ракетки
function drawRacket() {
    canvasContext.drawImage(RACKET.imgRacket, RACKET.x, RACKET.y);
    drawBullet();
}
//-воронки
function drawAnimationEnd() { 
    if (count % 60 <= 7) { 
        canvasContext.drawImage(ANIMATION.imgEnd, spriteEnd[0].x, 0, 600, 600, 13, 397, 90, 90); 
    } else 
    if (count % 60 <= 15) { 
        canvasContext.drawImage(ANIMATION.imgEnd, spriteEnd[1].x, 0, 600, 600, 13, 397, 90, 90); 
    } else 
    if (count % 60 <= 23) { 
        canvasContext.drawImage(ANIMATION.imgEnd, spriteEnd[2].x, 0, 600, 600, 13, 397, 90, 90); 
    } else 
    if (count % 60 <= 30) { 
        canvasContext.drawImage(ANIMATION.imgEnd, spriteEnd[3].x, 0, 600, 600, 13, 397, 90, 90); 
    } else 
    if (count % 60 <= 37) { 
        canvasContext.drawImage(ANIMATION.imgEnd, spriteEnd[4].x, 0, 600, 600, 13, 397, 90, 90); 
    } else 
    if (count % 60 <= 45) { 
        canvasContext.drawImage(ANIMATION.imgEnd, spriteEnd[5].x, 0, 600, 600, 13, 397, 90, 90); 
    } else 
    if (count % 60 <= 53) { 
        canvasContext.drawImage(ANIMATION.imgEnd, spriteEnd[6].x, 0, 600, 600, 13, 397, 90, 90); 
    } else 
    if (count % 60 <= 60) { 
        canvasContext.drawImage(ANIMATION.imgEnd, spriteEnd[7].x, 0, 600, 600, 13, 397, 90, 90); 
    } 
}

//Ф-ия прослушивания событий с мыши и клавиатуры
function initEventsListeners() {
    window.addEventListener("mousemove", onCanvasMouseMove);
    window.addEventListener("keydown", onCanvasKeyDown);
    window.addEventListener("click", onClick);
}
//клавиатура
function onCanvasKeyDown(event) {
    if (event.key === "ArrowLeft") {
        RACKET.x -= 30;
    }
    if (event.key === "ArrowRight") {
        RACKET.x += 30;
    }
    if (event.key === "ArrowUp") {
        RACKET.x += 30;
    }
    clampRacketPosition();
}
//мышь
function onCanvasMouseMove(event) {
    RACKET.x = event.clientX;
    clampRacketPosition();
}

function onClick(event) {
    updateBullet();
}

function drawScore() {
    canvasContext.fillStyle = "gold";
    canvasContext.font = 'italic 18pt Arial';
    canvasContext.fillText("Score: " + score, 50 , GAME.height - 12);
}

//Ф-ия ограничения движения ракетки
function clampRacketPosition() {
    if (RACKET.x < 0) {
        RACKET.x = 0;
    }
    if (RACKET.x + RACKET.width > GAME.width){
        RACKET.x = GAME.width - RACKET.width;
    }
    
}
//Ф-ия обновления позиции мячика
function updateBall() {
    for (var i = 0; i < BALLS.length; i++){
        if (BALLS.length === 1){
            alert("YOU WIN");
        }
        if ((BALLS[i].y === 44) && (BALLS[i].x > 32)) {
            BALLS[i].x -= BALLS[i].xDirection;
        }
        if ((BALLS[i].x >= 31) && (BALLS[i].x <= 32)  && (BALLS[i].y < 339)) {
            BALLS[i].y += BALLS[i].yDirection;
        }
        if ((BALLS[i].y >= 339) && (BALLS[i].y <= 340) && (BALLS[i].x < 572)) {
            BALLS[i].x += BALLS[i].xDirection;
        }
        if ((BALLS[i].x >= 571) && (BALLS[i].x <= 573) && (BALLS[i].y <= 340) && (BALLS[i].y > 236)) {
            BALLS[i].y -= BALLS[i].yDirection;
        }
        if ((BALLS[i].y >= 234) && (BALLS[i].y <= 237) && (BALLS[i].x > 197) && (BALLS[i].x < 577)) {
            BALLS[i].x -= BALLS[i].xDirection;
        }
        if ((BALLS[i].x >= 196) && (BALLS[i].x < 198) && (BALLS[i].y > 130) && (BALLS[i].y <= 237)) {
            BALLS[i].y -= BALLS[i].yDirection;
        }
        if ((BALLS[i].x >= 196) && (BALLS[i].x < 740) && (BALLS[i].y <= 131) && (BALLS[i].y >= 130)) {
            BALLS[i].x += BALLS[i].xDirection;
        }
        if ((BALLS[i].x >= 740) && (BALLS[i].y > 129) && (BALLS[i].y < 426)) {
            BALLS[i].y += BALLS[i].yDirection;
        }
        if ((BALLS[i].y >= 426) && (BALLS[i].y <= 428) && (BALLS[i].x > 46)) {
            BALLS[i].x -= BALLS[i].xDirection;
        }
    }
    for (var i = 0; i < BALLS.length; i++){
        if ((BALLS[i].y === 426) && (BALLS[i].x <= 46)) {
            alert("YOU LOSE");
        }
    }
    count++;
    requestAnimationFrame(play);
}
//Ф-ия обновления позиции снаряда
function updateBullet() {
    BULLET.y -= BULLET.yDirection;
    if (BULLET.y < 5) {
        randomBullet();
        BULLET.y = 520;
        BULLET.x = RACKET.x + 50;    
    }
    for (var i=0; i < BALLS.length; i++){
        var BallsDownLineCollision = BULLET.y <= (BALLS[i].y + 13);
        var BallsRightLineCollision = BULLET.x <= (BALLS[i].x + 27);
        var BallsLeftLineCollision = (BULLET.x + 12) >= BALLS[i].x;
        if (BallsDownLineCollision && BallsRightLineCollision && BallsLeftLineCollision) {
            if (BULLET.color === BALLS[i].color){
                BULLET.y = 520;
                BULLET.x = RACKET.x + 50;
                randomBullet();
                BALLS.splice(i, 1);
                score++;
            }
            else{
                BULLET.y = 520;
                BULLET.x = RACKET.x + 50;
                randomBullet();
                for (var i=0; i < BALLS.length; i++){
                    if ((count % 2 == 1) && (BALLS[i].y < 425)){
                        BALLS[i].xDirection = 2;
                        BALLS[i].yDirection = 2;
                        ANIMATION.imgEnd.src = "./Images/endHardSprite.png";
                    }
                    if (BALLS[i].y >= 420){
                        for (var i=0; i < BALLS.length; i++){
                            BALLS[i].xDirection = 3;
                            ANIMATION.imgEnd.src = "./Images/endVeryHardSprite.png";
                        }
                    }
                }
            }
        }
    }
}
//Ф-ия обновления снаряда
function randomBullet(){
    var rand = 0 - 0.5 + Math.random() * (2 - 0 + 1)
    rand = Math.round(rand);
    if (rand === 0){
        BULLET.img.src = "./Images/fireBall.png";
        BULLET.color = "red";
    }
    if (rand === 1){
        BULLET.img.src = "./Images/greenFireBall.png";
        BULLET.color = "green";
    }
    if (rand === 2){
        BULLET.img.src = "./Images/blueFireBall.png";
        BULLET.color = "blue";   
    }
}

function play() {
    drawBackground();
    drawFrame();
    if (BULLET.y < 520){
        updateBullet();
    }
    if (BULLET.y === 520){
        BULLET.x = RACKET.x + 50;
    }
    updateBall();
}

initEventsListeners();
randomBullet();
play();
