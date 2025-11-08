var map;
var pirateFont;
var treasureX;
var treasureY;
var message = "Pieces-o-nothing!";
var showX = false;
var button ={x: 20, y: 20, width: 150, height: 89, text: "reveal"}


function setup()
{
	createCanvas(800, 600);
	map = loadImage("map.jpg");

	treasureX = random(230, 500);
	treasureY = random(100, 330);

	pirateFont = loadFont("bsg.ttf");
	textFont(pirateFont);
}



function draw()
{
	image(map, 0, 0, width, height);

	fill(180);
	rect(button.x, button.y, button.width, button.height);
	textAlign(CENTER, CENTER);
	fill(0);
	text(button.text, button.x + button.width/2, button.y + button.height/2);

	fill(0);

	if(showX)
	{
		textSize(40);
		textAlign(CENTER, CENTER);
		text("X", treasureX, treasureY);
	}


	textAlign(LEFT);
	textSize(40);
	text("You've found " + message, 20, 550);

}

function mousePressed()
{
	if(dist(mouseX, mouseY, treasureX, treasureY)<= 15)
	{
		message = "Pieces-o-eight";
	}
	else
	{
		message = "Pieces-o-nothing";
	}
	//button click
	if(mouseX > button.x && mouseX < button.x + button.width && mouseY > button.y && mouseY < button.y + button.height)
		if(showX)
		{
			showX = false;
			button.text = "reveal";
		}
	else{
			showX = true;
			button.text = "hide";
	}
}
