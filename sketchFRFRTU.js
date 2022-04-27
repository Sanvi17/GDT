var bgImg;


function preload(){
    bgImg=loadImage("bG.png");

}

function setup() {
 createCanvas(windowWidth,windowHeight);
}

function draw() {
 background(bgImg);
 drawSprites();
}