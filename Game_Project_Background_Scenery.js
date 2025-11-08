/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	fill(255,255,255);
	ellipse(215,150,80,80);
	ellipse(175,150,60,60);
	ellipse(255,150,60,60);

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	fill(153,153,153);
	triangle(440,432,620,432,530,300);
	triangle(400,432,530,432,480,325);
	triangle(530,432,660,432,580,325);


	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	fill(139,69,19);
	rect(900,330,50,100);
	fill(34,139,34);
	triangle(850,400,1000,400,920,300);
	triangle(830,380,1020,380,930,200);


	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	fill(100,155,255)
	rect(80,423,130,433);

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	fill(255,255,0);
	ellipse(450,380,30,20);
	fill(0);
	textSize(20);
	textAlign(CENTER,CENTER);
	text("$",450,380);


	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}
