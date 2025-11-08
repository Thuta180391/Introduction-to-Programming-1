function setup()
{
	createCanvas(600, 600);
}

function draw()
{
	fill(255, 0, 0);

	rect(100, 100, 100, 100);

	ellipse(150, 400, 100, 100);

	ellipse(400, 150, 150, 50);

	line(250, 50, 250, 450);

	triangle(400, 350, 300, 450, 500, 450);

	strokeWeight(5);
	point(300, 300);
	strokeWeight(1);

	line(320,80,100,250);
	line(320,250,100,80);
	line(100,80,320,250);
	line(100,320,80,250);
	ellipse(200,150,100,50);
	ellipse(100,50,150,200);
	triangle(100, 100, 100, 50, 200, 100); 
	line(100,200,200,200);
 }