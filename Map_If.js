var map;
var loc;
var pirateFont;


function setup()
{
	createCanvas(800, 600);
	map = loadImage("map.jpg");
	pirateFont = loadFont("bsg.ttf");
	textFont(pirateFont);

}



function draw()
{
	background(255);
	image(map, 0, 0, width, height);

	noStroke();
	if (mouseY < height/2 && mouseX <= width/2)
	{	
		fill(255, 0, 0, 100);
		rect(0, 0, width/2, height/2);
		loc = "NW";
	}
	else if(mouseY < height/2 && mouseX > width/2)
	{
		fill(0, 0, 255, 100);
		rect(width/2, 0, width/2, height/2);
		loc = "NE";
	}
	else if(mouseY >= height/2 && mouseX < width/2)
	{
		fill(0, 255, 0, 100);
		rect(0, height/2, width/2, height/2);
		loc ="SW"
	}
	else
	{
		fill(255, 0, 255, 100);
		rect(width/2, height/2, width/2, height/2);
		loc = "SE"
	}

	textSize(50);
	fill(0);
	text(loc, 80, 550);

}
