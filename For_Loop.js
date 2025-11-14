function setup()
{
    createCanvas(800, 600);
    strokeWeight(2);
}
function draw()
{
    background(255);
    noFill();
    for (var i = 0; i < 9; i++)
    {   
        var r = 0
        if(i > 7)
        {
            stroke(220, 200, 255);
        }
        else if(i > 3)
        {
            stroke(255,100,0);
            r=20;
        }
        else if(i > 1)
        {
            stroke(155, 0, 100);
            r=5;
        }
        else
        {
            stroke(150);
        }
        rect(80+i*80 + random(-r,r), 
            80 + random(-r,r), 
            60, 
            60);
    }
    for (var i = 0; i < 9; i++)
    {   
        var r = 0
        if(i > 7)
        {
            stroke(220, 200, 255);
        }
        else if(i > 3)
        {
            stroke(255,100,0);
            r=20;
        }
        else if(i > 1)
        {
            stroke(155, 0, 100);
            r=5;
        }
        else
        {
            stroke(150);
        }
        rect(80+i*80 + random(-r,r), 
            160 + random(-r,r), 
            60, 
            60);
    }
    for (var i = 0; i < 9; i++)
    {   
        var r = 0
        if(i > 7)
        {
            stroke(220, 200, 255);
        }
        else if(i > 3)
        {
            stroke(255,100,0);
            r=20;
        }
        else if(i > 1)
        {
            stroke(155, 0, 100);
            r=5;
        }
        else
        {
            stroke(150);
        }
        rect(80+i*80 + random(-r,r), 
            240 + random(-r,r), 
            60, 
            60);
    }
    for (var i = 0; i < 9; i++)
    {   
        var r = 0
        if(i > 7)
        {
            stroke(220, 200, 255);
        }
        else if(i > 3)
        {
            stroke(255,100,0);
            r=20;
        }
        else if(i > 1)
        {
            stroke(155, 0, 100);
            r=5;
        }
        else
        {
            stroke(150);
        }
        rect(80+i*80 + random(-r,r), 
            320 + random(-r,r), 
            60, 
            60);
    }
    for (var i = 0; i < 9; i++)
    {   
        var r = 0
        if(i > 7)
        {
            stroke(220, 200, 255);
        }
        else if(i > 3)
        {
            stroke(255,100,0);
            r=20;
        }
        else if(i > 1)
        {
            stroke(155, 0, 100);
            r=5;
        }
        else
        {
            stroke(150);
        }
        rect(80+i*80 + random(-r,r), 
            400 + random(-r,r), 
            60, 
            60);
    }
    for (var i = 0; i < 9; i++)
    {   
        var r = 0
        if(i > 7)
        {
            stroke(220, 200, 255);
        }
        else if(i > 3)
        {
            stroke(255,100,0);
            r=20;
        }
        else if(i > 1)
        {
            stroke(155, 0, 100);
            r=5;
        }
        else
        {
            stroke(150);
        }
        rect(80+i*80 + random(-r,r), 
            480 + random(-r,r), 
            60, 
            60);
    }
        for (var i = 0; i < 9; i++)
    {   
        var r = 0
        if(i > 7)
        {
            stroke(220, 200, 255);
        }
        else if(i > 3)
        {
            stroke(255,100,0);
            r=20;
        }
        else if(i > 1)
        {
            stroke(155, 0, 100);
            r=5;
        }
        else
        {
            stroke(150);
        }
        rect(80+i*80 + random(-r,r), 
            560 + random(-r,r), 
            60, 
            60);
    }
}
