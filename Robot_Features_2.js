function setup()
{
	//create a canvas for the robot
	createCanvas(1000, 700);
}

function draw()
{
	strokeWeight(2);

	//robot body 1 - delete this code and make your own robot body
	fill(250,0,0);
	rect(90, 200, 120, 130, 10);
	fill(0,0,250)
	rect(70, 200, 30, 100, 30,0);
	fill(100,100,100);
	rect(200, 200, 30, 100, 0, 50);
	fill(0,225,225);
	rect(100, 330, 30,110,50,50,10,20);
	fill(120,10,50)
	rect(140,330,20,50,0,0,20,20);
	fill(0,155,155);
	rect(170, 330, 30, 110,50,50,20,10);

	//robot body 2 - delete this code and make your own robot body
	fill(255,0,0)
	ellipse(450, 268, 120, 130);
	fill(0,0,0)
	rect(290, 250, 100, 30,100);
	rect(510, 250, 100, 30,100);
	fill(255,0,255),
	ellipse(400, 365, 30, 110, 500);
	ellipse(500, 365, 30, 110,120);


	//robot body 3 - delete this code and make your own robot body
	triangle(700,200,800,200,750,300);
	fill(250,125,75);
	rect(670, 200, 30, 100);
	rect(800, 200, 30, 100);
	triangle(700,300,800,300,750,330);
	fill(30,70,90);
	rect(720, 330, 30, 110);
	rect(750, 330, 30, 110);


	// !!! Draw the robot heads - You shouldn't need to change this code !!!

	//robot head 1
	fill(100);
	rect(100, 100, 100, 100, 30);
    //robot head 2
	fill(255,255,0)
	rect(400, 100, 100, 100, 10);
    //robot head 3
	fill(0,255,255)
	rect(700, 100, 100, 100, 50);


	//robot ears 1
	fill(0,0,100);
	rect(93, 130, 10, 33,50,50);
	rect(197, 130, 10, 33,50,50);

	//robot ears 2
	fill(100,100,0);
	triangle(395, 130, 373, 110,353,120);
	triangle(500, 130, 517, 110,543,120);

	//robot ears 3
	fill(255,255,0)
	ellipse(693, 150, 10, 33);
	ellipse(807, 150, 10, 33);



	//robots' antennas
	fill(250, 250, 0);
    // robot antenna 1
	ellipse(150, 65, 10, 10);
    // robot antenna 1
	triangle(440, 93, 460, 93,450,73);
    // robot antenna 1
	ellipse(750, 93, 10, 10);

    //robots' antennas
	fill(200, 0, 200);
    // robot antenna 1
	rect(140, 70, 20, 30);
    // robot antenna 2
	rect(440, 97, 20, 10);
    // robot antenna 3
	rect(745, 57, 10, 30);


	//robot 1's eyes
	fill(255);
	ellipse(125, 130, 26, 26);
	point(125, 130);
	line(185, 130, 160, 130);
	point(175, 130);

	//robot 2's eyes
	ellipse(425, 130, 26, 26);
	point(425, 130);
	ellipse(475, 130, 36, 36);
	point(475, 130);

	//robot 3's eyes
	ellipse(725, 130, 36, 26);
	point(725, 130);
	ellipse(775, 130, 36, 26);
	point(775, 130);


	//robots' noses
	fill(255, 0, 0);
    //robot 1 nose
	ellipse(150, 155, 30, 20);
    //robot 2 nose
	rect(438, 135, 20, 40, 465, 160);
    //robot 3 nose
	triangle(750, 135, 735, 160, 765, 160);

	//robot 1 mouth
	noFill();
	beginShape();
	vertex(128, 175);
	vertex(136, 185);
	vertex(142, 175);
	vertex(150, 185);
	vertex(158, 175);
	vertex(166, 185);
	vertex(174, 175);
	endShape();

	//robot 2 mouth
	fill(0,0,0)
	rect(438,175,20,20);

	//robot 3 mouth
	ellipse(750,175,30,10);

}
