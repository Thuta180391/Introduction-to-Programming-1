function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{
//set the fill colour to red
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the red rectangle 
	rect(100, 50, 600, 600);
	
	//draw the another rectangle
	fill(200);
	rect(100,50,200,300);
	
	//draw the another rectangle
	fill(200);
	stroke(0);
	strokeWeight(20);
	rect(100,350,200,300);
	
	//draw the another square
	fill(0,0,255);
	stroke(0,0,0);
	strokeWeight(12);
	rect(100,650,200,200);
	
	//draw another rectangle 
	fill(200);
	stroke(0,0,0);
	strokeWeight(12);
	rect(300,650,250,200);
	
	//draw another rectangle
	fill(200);
	stroke(0,0,0);
	strokeWeight(12);
	rect(550,650,150,100);
	
	//draw another rectangle
	fill(255,255,0);
	stroke(0);
	rect(550,750,150,100);
	

}

	
