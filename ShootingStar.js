var xPos = 200;
var yPos = 200;
var apos = 100;
var bpos = 100;
draw = function() {
    background(255, 255, 255);
    fill(0, 0, 0);
    ellipse(xPos, yPos, 10, 10);
    ellipse(apos,bpos, 10, 10);
xPos += 2;
yPos ++;
apos +=1.5;
bpos -=2.5;

};



