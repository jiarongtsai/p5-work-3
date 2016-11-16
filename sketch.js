var d;
var angle1 = 0;
var angle2 = 0;
var angle3 = 0;
var angle4 = 0;
var angle5 = 0;
var angle6 = 0;
var circles = [];

var ang1=0;
var ang2=0;
var balls = [];


function setup() {
	createCanvas(windowWidth, windowHeight);
  d = height/3*2;
	background(0);
}

function mousePressed() {
	if(mouseX < windowWidth/2)
		circles.push(new Circle(mouseX, mouseY));
	else {
		balls.push(new Ball(mouseX, mouseY));
	}
}


function draw() {

	for(i = 0; i < circles.length; i++) {
		if(i % 6 == 0)
			circles[i].display1();
		else if (i % 6 == 5) {
			circles[i].display2();
		}
		else if (i % 6 == 4) {
			circles[i].display3();
		}
		else if (i % 6 == 3) {
			circles[i].display4();
		}
		else if (i % 6 == 2) {
			circles[i].display5();
		}
		else {
			circles[i].display6();
		}
	}

	for(i = 0; i < balls.length; i++) {
    if(i % 2 == 0)
		  balls[i].display1();
    else {
      balls[i].display2();
    }
  }
}





function Circle(x, y) {

	this.pos = createVector(x, y)


	this.display1 = function() {
		angle1 += 0.01;
		var d1 = (sin(angle1) * d/5 );
		fill(255, 224, 0, 100);
		stroke(255, 170, 0);
		ellipse(this.pos.x, this.pos.y, d1);
	}

	this.display2 = function() {
		angle2 += 0.01;
		var d2 = (sin(angle2 + PI/2) * d/4.5 );
		fill(255, 75, 0, 100);
		stroke(255, 170, 0);
		ellipse(this.pos.x, this.pos.y, d2);
	}
	this.display3 = function() {
		angle3 += 0.01;
		var d3 = (sin(angle3 + PI) * d/4.5 );
		fill(255, 224, 0, 100);
		stroke(255, 170, 0);
		ellipse(this.pos.x, this.pos.y, d3);
	}

	this.display4 = function() {
		angle4 += 0.01;
		var d1 = (sin(angle4) * d/4	);
		fill(255, 75, 0, 100);
		stroke(255, 170, 0);
		ellipse(this.pos.x, this.pos.y, d1);
	}
	this.display5 = function() {
		angle5 += 0.01;
		var d2 = (sin(angle5 + PI/2) * d/5 );
		fill(255, 224, 0, 100);
		stroke(255, 170, 0);
	  ellipse(this.pos.x, this.pos.y, d2);
	}

	this.display6 = function() {
		angle6 += 0.01;
		var d3 = (sin(angle6 + PI) * d/5 );
		fill(255, 75, 0, 100);
		stroke(255, 170, 0);
		ellipse(this.pos.x, this.pos.y, d3);
	}

}


function Ball(x, y, r) {
  this.pos = createVector(x, y);
  r = 30;

  this.display1 = function(){
    ang1 += .5;
    var y1 = y + (r * sin(ang1));
    fill(100, 50, 255, 50);
    stroke(200, 50, 255);
    ellipse(x, y1, r, r);
  }

  this.display2 = function(){
    ang2 += .5;
    var x1 = x + (r * sin(ang2));
    fill(100, 250, 255, 50);
    stroke(200, 250, 255);
    ellipse(x1, y, r, r);
  }

}
