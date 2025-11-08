/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isPlummeting;
var isFalling;
var collectable;
var canyon;

var treePos_x;
var treePos_y;
var mountain;
var cloud;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	isLeft = false;
	isRight = false;
	isPlummeting = false;
	isFalling = false;

	treePos_x = width/1.25;
	treePos_y = height/2;

	canyon = {x_pos: 80, width: 100};

	mountain_x = width/2;
	mountain_y = height/2;
	
	collectable = {x_pos: 300, y_pos: 415, size: 30, isFound: false};
	
	cloud = {x_pos: 200, y_pos: 150, size: 80};
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//Cloud
	fill(255,255,255);
	ellipse(cloud.x_pos + 15, cloud.y_pos, cloud.size);
	ellipse(cloud.x_pos-25, cloud.y_pos, cloud.size -20);
	ellipse(cloud.x_pos + 55, cloud.y_pos, cloud.size - 20);

	//Mountain
	fill(153,153,153);
	triangle(mountain_x - 272, mountain_y + 144, mountain_x -92, mountain_y + 144, mountain_x - 182, mountain_y +12);
	triangle(mountain_x - 312, mountain_y + 144, mountain_x - 182, mountain_y + 144, mountain_x - 232, mountain_y + 37);
	triangle(mountain_x - 182, mountain_y + 144, mountain_x - 52, mountain_y + 144, mountain_x - 132, mountain_y + 37);

	//draw the canyon
	fill(100,155,255)
	rect(canyon.x_pos, floorPos_y, canyon.width, height - floorPos_y, 20);

	if(gameChar_y < floorPos_y) 
	{
    	gameChar_y += 1;      // fall a little each frame
    	isFalling = true;     // show falling pose
	} 	
	else 
	{
    	isFalling = false;    // back on the ground
    	gameChar_y = floorPos_y; // clamp to ground
	}

	if(gameChar_y >= floorPos_y &&
	   gameChar_x > canyon.x_pos &&
	   gameChar_x < canyon.x_pos + canyon.width)
	{
		isPlummeting = true;
	}
	if(isPlummeting)
	{
		gameChar_y = gameChar_y + 150;
		isFalling = true;
	}

	//Treetrunk
	fill(120, 100, 40);
	rect(treePos_x, treePos_y, 60, 150);
	//Treebranches
	fill(0, 155, 0);
	triangle(treePos_x - 50, treePos_y + 50, treePos_x + 30, treePos_y - 50, treePos_x + 110, treePos_y + 50);
	triangle(treePos_x - 50, treePos_y, treePos_x + 30, treePos_y - 100, treePos_x + 110, treePos_y);

	if(dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) < 30)
	{
		collectable.isFound = true;
	}

	if(collectable.isFound == false)
	{
		//Collectable_Item_1
		fill(255,255,0);
		ellipse(collectable.x_pos,collectable.y_pos,collectable.size);
		fill(0);
		textSize(20);
		textAlign(CENTER,CENTER);
		text("$",collectable.x_pos, collectable.y_pos);

		//Collectable_Item_2
		fill(255,255,0);
		ellipse(collectable.x_pos + 100, collectable.y_pos, collectable.size);
		fill(0);
		textSize(20);
		textAlign(CENTER,CENTER);
		text("$",collectable.x_pos + 100 ,collectable.y_pos);

		//Collectable_Item_3
		fill(255,255,0);
		ellipse(collectable.x_pos + 200, collectable.y_pos, collectable.size);
		fill(0);
		textSize(20);
		textAlign(CENTER,CENTER);
		text("$",collectable.x_pos + 200 ,collectable.y_pos);
	}



	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		fill(200,150,150);
		ellipse(gameChar_x, gameChar_y-60, 20, 35);
		fill(255,0,0);
		rect(gameChar_x-13, gameChar_y-45, 25, 30);
		fill(0);
		rect(gameChar_x-13, gameChar_y-45, -15, 10);
		fill(0);
		rect(gameChar_x+10, gameChar_y-45, -20, 10);
		fill(0);
		rect(gameChar_x-13, gameChar_y-25, -15, 10);
		fill(0);
		rect(gameChar_x+10, gameChar_y-20, -20, 10 );
	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		fill(200,150,150);
		ellipse(gameChar_x, gameChar_y-60, 20, 35);
		fill(255,0,0);
		rect(gameChar_x-13, gameChar_y-45, 25, 30);
		fill(0);
		rect(gameChar_x-13, gameChar_y-45, 18, 10);
		fill(0);
		rect(gameChar_x+10, gameChar_y-45, 15, 10);
		fill(0);
		rect(gameChar_x-13, gameChar_y-20, 18, 10);
		fill(0);
		rect(gameChar_x+10, gameChar_y-25, 15, 10 );
	}
	else if(isLeft)
	{
		// add your walking left code
		fill(200,150,150);
		ellipse(gameChar_x, gameChar_y-60, 20, 35);
		fill(255,0,0);
		rect(gameChar_x-13, gameChar_y-45, 25, 30);
		fill(0);
		rect(gameChar_x-13, gameChar_y-45, -15, 10);
		fill(0);
		rect(gameChar_x+3, gameChar_y-45, 10, 10);
		fill(0);
		rect(gameChar_x-13, gameChar_y-25, -15, 10);
		fill(0);
		rect(gameChar_x+3, gameChar_y-15, 10, 10 );
	}
	else if(isRight)
	{
		// add your walking right code
		fill(200,150,150);
		ellipse(gameChar_x, gameChar_y-60, 20, 35);
		fill(255,0,0);
		rect(gameChar_x-13, gameChar_y-45, 25, 30);
		fill(0);
		rect(gameChar_x-13, gameChar_y-45, 10, 10);
		fill(0);
		rect(gameChar_x+10, gameChar_y-45, 15, 10);
		fill(0);
		rect(gameChar_x-13, gameChar_y-15, 10, 10);
		fill(0);
		rect(gameChar_x+10, gameChar_y-25, 15, 10 );
	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
		fill(200,150,150);
		ellipse(gameChar_x, gameChar_y-60, 35);
		fill(255,0,0);
		rect(gameChar_x-13, gameChar_y-45, 25, 30);
		fill(0);
		rect(gameChar_x-13, gameChar_y-45, 10, 10);
		fill(0);
		rect(gameChar_x+3, gameChar_y-45, 10, 10);
		fill(0);
		rect(gameChar_x-13, gameChar_y-25, 10, 10);
		fill(0);
		rect(gameChar_x+3, gameChar_y-25, 10, 10 );
	}
	else
	{
		// add your standing front facing code
		fill(200,150,150);
		ellipse(gameChar_x, gameChar_y-60,35);
		fill(255,0,0);
		rect(gameChar_x-13, gameChar_y-45, 26, 30);
		fill(0);
		rect(gameChar_x-13, gameChar_y-45, 10, 20);
		fill(0);
		rect(gameChar_x+3, gameChar_y-45, 10, 20);
		fill(0);
		rect(gameChar_x-13, gameChar_y-15, 10, 10);
		fill(0);
		rect(gameChar_x+3, gameChar_y-15, 10, 10);
	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	if(isLeft == true)
	{
		gameChar_x -= 5;
	}
	if(isRight == true)
	{
		gameChar_x += 5;
	}

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);

	if(isPlummeting)
	{
		return;
	}

	if(keyCode == 37)
	{	
		console.log("left arrow");
		isLeft = true;
	}
	else if(keyCode == 39)
	{	
		console.log("right arrow");
		isRight = true;
	}
	if(keyCode == 87 && isFalling == false)
	{	
		gameChar_y -=100;
	}
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);

	if(keyCode == 37)
	{	
		console.log("left arrow");
		isLeft = false;
	}
	else if(keyCode == 39)
	{	
		console.log("right arrow");
		isRight = false;
	}
}
