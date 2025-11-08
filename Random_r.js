
var r;
var x;
var x1;
var y;
var a = 0;

function setup() 
{
    
    createCanvas(512,512);
    
    
    r = random();
    
    // console.log(min(100,1000));
    // console.log(random(50,250));
    // console.log(min(10000000,100000000));
   
    
    x = 0;
    x1 = 500;
    
}


function draw()
{
//    var spotX = 200;
//     var spotY = 200;
//     background(0, 0, 0);
//     fill(255, 255, 255);
//     ellipse(mouseX, mouseY, 100, 100);
//     console.log("the mouseX is"+ mouseX);

    // background(200);
    // fill(255, 0, 255); 
    // ellipse(a, a, 100, 100); 
    // a += 1; 
    // console.log(a);
    




    background(255);
    r = random(50,250);
    x = min(x+2, 250);
    x1 = max(x1-2,250);

    ellipse(width/2, height/2, r, r);
    ellipse(x1, mouseY, 50, 50);


    

//    ellipse(width/2, height/2, r,r);
//    console.log(r);
    
//    x = max(100,mouseX);
//    y = max(100,mouseY);

    y = height/2;
    x += 1;
    x = min(x, 450);
    
    //ellipse(x,y,50,50);
}







