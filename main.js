
function setup(){
	canvas =  createCanvas(650,550)
	canvas.center();
	video = createCapture(VIDEO);
    video.hide();
}
function draw(){
	image(video,70,70,510,420);
	fill(25, 129, 255);
	stroke(25, 129, 255);
	circle(60,60,70);
	circle(590,60,70);
	circle(60,500,70);
	circle(590,500,70);

	
	fill(255, 102, 25);
	stroke(255, 102, 25);
	rect(50,95,20,370);
	rect(580,95,20,370);
	rect(95,50,460,20);
	rect(95,490,460,20);
}
function take_snapshot(){
	save("WhiteHatJr.png");
}
    
