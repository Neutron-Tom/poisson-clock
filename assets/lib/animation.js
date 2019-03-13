import {popNWait} from './poissonClock.js'

// Only executed our code once the DOM is ready.
window.onload = function () {

    // Get a reference to the canvas object
    var canvas = document.getElementById('myCanvas');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);


    // Draw the view now:
    paper.view.draw();

    var text = new paper.PointText(new paper.Point(myCanvas.width/2, 50));
    text.justification = 'center';
    text.fillColor = '#63998c';
    text.content = 'Chime Stochastic';
    text.fontFamily = 'Helvetica';
    // text.fontWeight = 'bold';
    text.fontSize = 50;


    var circle = new paper.Path.Circle(new paper.Point(myCanvas.width/2, myCanvas.height/2), myCanvas.height/3);
    circle.fillColor = '#ecb899';

    paper.view.onFrame = function (event) {
        // Every frame, rotate the path by 3 degrees:
        circle.scale(0.999);
        circle.fillColor.alpha = circle.fillColor.alpha * 0.99;
    };

    function popCircle() {
        circle.remove();
        circle = new paper.Path.Circle(new paper.Point(myCanvas.width/2, myCanvas.height/2), myCanvas.height/3);
        ;
        circle.fillColor = '#ecb899';
    }


    popNWait(popCircle);

};
