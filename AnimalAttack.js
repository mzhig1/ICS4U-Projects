var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var bodyH = bodyW/2;
var eyeSize = 20;
var eyePosition1 = 185; 
var eyePosition2 = 150;
var eyePosition3 = 215;
var arms1 = 140;
var arms2 = 220;
var arms3 = 260;
var legs1 = 180;
var legs2 = 290;
var legs3 = 210;

draw = function() {
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 106); // body?
    ellipse(bodyX, bodyY-70, bodyH, 47); // face?
    //arms:
    ellipse(arms1, arms2, 30, 100);
    ellipse(arms3, arms2, 30, 100);
    //legs:
    ellipse(legs1, legs2, 30, 70);
    ellipse(legs3, legs2, 30, 70);
    //eyes
    fill(0, 0, 0);
    ellipse(eyePosition1, eyePosition2, eyeSize, eyeSize);
    ellipse(eyePosition3, eyePosition2, eyeSize, eyeSize);
    
    eyeSize++; 
};
