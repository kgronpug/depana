var screen = 0;
var y=-20;
var x=200;
var speed = 2;
var score= 0;
var trophy, hands;

function preload() {
	trophy = loadImage('https://raw.githubusercontent.com/kgronpug/depana/master/trophy.png');
	hands = loadImage('https://raw.githubusercontent.com/kgronpug/depana/master/hands.png');
	
}

function setup() {
	createCanvas(600, 400);
}

function draw() {
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }	
}

function startScreen(){
		background(212,175,55)
		fill(255)
		textAlign(CENTER);
		textSize(40);
		text('DEP-ANA GOLD', width / 2, height / 2)
		textSize(20);
		text('GRIB POKALEN', width / 2, height / 2 + 40);
		reset();
}

function gameOn(){
	background(255,255,255)
	fill(0, 0, 0);
	textSize(12);
	text("score = " + score, 30,20)
	image(trophy, x, y, 20, 20);

	image(hands, mouseX-40, height-40,80,40);
	
	y+= speed;
if(y>height){
  	screen = 2
	 }
if(y>height-30 && x+5>mouseX-40 && x-15<mouseX+40){
		y=-20
		speed+=.5
		score+= 1
	}
if(y==-20){
	pickRandom();
  }
}

function pickRandom(){
	x= random(20,width-20)
}

function endScreen(){
		background(150)
		fill(255, 255, 255);
		textAlign(CENTER);
		textSize(20);
		text('GAME OVER', width / 2, height / 2)
		textSize(15);
		text("SCORE = " + score, width / 2, height / 2 + 20)
		text('klik for at spille igen', width / 2, height / 2 + 40);
}

function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}

function reset(){
	  score=0;
  	speed=2;
  	y=-20;
}
