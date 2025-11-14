//Hack it - we are the robot family

//TASK 1. modify the code so that all three robots are drawn
//TASK 2. try changing the numbers to create your robot family
//TASK 3. create more arrays and use the values in them to add more variation to the robots


var robotWidths;
var robotHeights;
var headWidths;
var robotcolors;

function setup()
{
	//create a canvas for the robot
	createCanvas(1000, 700);
    robotWidths = [70,100,150];
    robotHeights = [50,120,110];
    headWidths = [0.7,0.8,1.2];
    robotcolors = ["yellow","blue","green"]
}

function draw()
{
	strokeWeight(2);
    translate(0, 400);

    //ROBOT 1
    translate(200,0);

    //Robot 0 Body
    fill(robotcolors[0]);
    rect(-robotWidths[0]/2, -robotHeights[0] - 130, robotWidths[0], 130);
    rect(-70, -robotHeights[0] - 130, 30, 100);
    rect(40,  -robotHeights[0] - 130, 30, 100);
    rect(-30, -robotHeights[0], 30, robotHeights[0]);
    rect(0,  -robotHeights[0], 30, robotHeights[0]);

    //Robot 1 Body
    fill(robotcolors[1]);
    rect(robotWidths[1]+50, -robotHeights[1]-130, robotWidths[1], 130);
    rect(115, -robotHeights[1] - 130, 30, 100);
    rect(255,  -robotHeights[1] - 130, 30, 100);
    rect(169, -robotHeights[1], 30, robotHeights[1]);
    rect(199,  -robotHeights[1], 30, robotHeights[1]);

    //Robot 3 Body
    fill(robotcolors[2]);
    rect(robotWidths[2]+200, -robotHeights[2] - 130, robotWidths[2], 130);
    rect(315, -robotHeights[2] - 130, 30, 100);
    rect(505,  -robotHeights[2] - 130, 30, 100);
    rect(395, -robotHeights[2], 30, robotHeights[2]);
    rect(425,  -robotHeights[2], 30, robotHeights[2]);

    //robot 0 Head
    fill(robotcolors[0]);
    rect(-50* headWidths[0], -robotHeights[0] - 230, 100* headWidths[0], 100, 10);

    //robot 1 Head
    fill(robotcolors[1]);
    rect(+200* headWidths[1], -robotHeights[1] - 230, 100* headWidths[1], 100, 10);

    //robot 2 Head
    fill(robotcolors[2]);
    rect(+305* headWidths[2], -robotHeights[2] - 230, 100* headWidths[2], 100, 10);


    //robot 0 Ear
    fill(255, 0, 0);
    rect(-50 * headWidths[0] - 10, -robotHeights[0] - 200, 10, 33);
    rect(50 * headWidths[0], -robotHeights[0] - 200, 10, 33);

    
    //robot 1 Ear
    fill(255, 0, 0);
    rect(200 * headWidths[1] - 10, -robotHeights[1] - 200, 10, 33);
    rect(300 * headWidths[1], -robotHeights[1] - 200, 10, 33);

    //robot 2 Ear
    fill(255, 0, 0);
    rect(305 * headWidths[2] - 10, -robotHeights[2] - 200, 10, 33);
    rect(405 * headWidths[2], -robotHeights[2] - 200, 10, 33);


    //robots 0' antennas
    fill(250, 250, 0);
    ellipse(0, -robotHeights[0] - 237, 10, 10);
    fill(200, 0, 200);
    rect(-10, -robotHeights[0] - 233, 20, 10);

     //robots 1' antennas
    fill(250, 250, 0);
    ellipse(200, -robotHeights[1] - 237, 10, 10);
    fill(200, 0, 200);
    rect(190, -robotHeights[1] - 233, 20, 10);

     //robots 2' antennas
    fill(250, 250, 0);
    ellipse(425, -robotHeights[2] - 237, 10, 10);
    fill(200, 0, 200);
    rect(415, -robotHeights[2] - 233, 20, 10);


    //robot' 0s eyes
    fill(255)
    ellipse(-25 * headWidths[0], -robotHeights[0] - 200, 26, 26);
    point(-25 * headWidths[0], -robotHeights[0] - 200);
    ellipse(25 * headWidths[0], -robotHeights[0] - 200, 26, 26);
    point(25 * headWidths[0], -robotHeights[0] - 200);

    //robot' 1s eyes
    fill(255)
    ellipse(220 * headWidths[1], -robotHeights[1] - 200, 26, 26);
    point(220 * headWidths[1], -robotHeights[1] - 200);
    ellipse(280 * headWidths[1], -robotHeights[1] - 200, 26, 26);
    point(280 * headWidths[1], -robotHeights[1] - 200);

    //robot' 2s eyes
    fill(255)
    ellipse(320 * headWidths[2], -robotHeights[2] - 200, 26, 26);
    point(320 * headWidths[2], -robotHeights[2] - 200);
    ellipse(390 * headWidths[2], -robotHeights[2] - 200, 26, 26);
    point(390 * headWidths[2], -robotHeights[2] - 200);



    //robots 0' nose
    fill(255, 0, 0);
    triangle(0, -robotHeights[0] - 190, -15, -robotHeights[0] - 170,15, -robotHeights[0] - 170);

    //robots 1' nose
    fill(255, 0, 0);
    triangle(180, robotHeights[1]-410, 220, robotHeights[1]-410,200,robotHeights[1]-440);
    
    //robots 2' nose
    fill(255, 0, 0);
    triangle(400, robotHeights[2]-390, 450, robotHeights[2]-390,425,robotHeights[2]-420);
    
    
    //robot 0 mouth
    noFill();
    beginShape();
    vertex(-23, -robotHeights[0] - 155);
    vertex(-15, -robotHeights[0] - 145);
    vertex(-9, -robotHeights[0] - 155);
    vertex(-1, -robotHeights[0] - 145);
    vertex(7, -robotHeights[0] - 155);
    vertex(15, -robotHeights[0] - 145);
    vertex(23, -robotHeights[0] - 155);
    endShape();

    //robot 1 mouth
    noFill();
    beginShape();
    vertex(175, -robotHeights[1] - 155);
    vertex(183, -robotHeights[1] - 145);
    vertex(191, -robotHeights[1] - 155);
    vertex(199, -robotHeights[1] - 145);
    vertex(207, -robotHeights[1] - 155);
    vertex(215, -robotHeights[1] - 145);
    vertex(223, -robotHeights[1] - 155);
    endShape();

    //robot 2 mouth
    noFill();
    beginShape();
    vertex(400, -robotHeights[2] - 155);
    vertex(408, -robotHeights[2] - 145);
    vertex(416, -robotHeights[2] - 155);
    vertex(424, -robotHeights[2] - 145);
    vertex(432, -robotHeights[2] - 155);
    vertex(440, -robotHeights[2] - 145);
    vertex(448, -robotHeights[2] - 155);
    endShape();




    
        
    

}