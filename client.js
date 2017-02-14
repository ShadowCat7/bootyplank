var engine = require('./utility/engine');
var drawUtility = require('./utility/draw-utility');
var timerFactory = require('./utility/timer');

var canvas = null;
var fpsLabel = null;

function draw() {
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	fpsLabel.innerHTML = Math.round(engine.fps);
}

function update(buttonsPressed, timeSinceLastUpdate) {

}

document.addEventListener('DOMContentLoaded', function () {
	canvas = document.getElementById('game');
	fpsLabel = document.getElementById('fps');

	engine = engine.create(canvas, update, draw);
	engine.start();
});
