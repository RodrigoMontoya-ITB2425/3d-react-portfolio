class Stats {

	constructor() {
		this.mode = 0;

		this.container = document.createElement('div');
		this.container.style.cssText = 'position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000';
		this.container.addEventListener('click', (event) => {
			event.preventDefault();
			this.showPanel(++this.mode % this.container.children.length);
		}, false);

		this.beginTime = (performance || Date).now();
		this.prevTime = this.beginTime;
		this.frames = 0;

		this.fpsPanel = this.addPanel(new Stats.Panel('FPS', '#0ff', '#002'));
		this.msPanel = this.addPanel(new Stats.Panel('MS', '#0f0', '#020'));

		if (window.performance && window.performance.memory) {
			this.memPanel = this.addPanel(new Stats.Panel('MB', '#f08', '#201'));
		}

		this.showPanel(0);
	}

	addPanel(panel) {
		this.container.appendChild(panel.dom);
		return panel;
	}

	showPanel(id) {
		for (let i = 0; i < this.container.children.length; i++) {
			this.container.children[i].style.display = i === id ? 'block' : 'none';
		}
		this.mode = id;
	}

	begin() {
		this.beginTime = (performance || Date).now();
	}

	end() {
		this.frames++;

		const time = (performance || Date).now();

		this.msPanel.update(time - this.beginTime, 200);

		if (time >= this.prevTime + 1000) {
			this.fpsPanel.update((this.frames * 1000) / (time - this.prevTime), 100);

			this.prevTime = time;
			this.frames = 0;

			if (this.memPanel) {
				const memory = performance.memory;
				this.memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
			}
		}

		return time;
	}

	update() {
		this.beginTime = this.end();
	}

	get dom() {
		return this.container;
	}

	get domElement() {
		return this.container;
	}

	setMode(id) {
		this.showPanel(id);
	}
}

Stats.Panel = function ( name, fg, bg ) {

	var min = Infinity, max = 0, round = Math.round;
	var PR = round( window.devicePixelRatio || 1 );

	var WIDTH = 80 * PR, HEIGHT = 48 * PR,
		TEXT_X = 3 * PR, TEXT_Y = 2 * PR,
		GRAPH_X = 3 * PR, GRAPH_Y = 15 * PR,
		GRAPH_WIDTH = 74 * PR, GRAPH_HEIGHT = 30 * PR;

	var canvas = document.createElement( 'canvas' );
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	canvas.style.cssText = 'width:80px;height:48px';

	var context = canvas.getContext( '2d' );
	context.font = 'bold ' + ( 9 * PR ) + 'px Helvetica,Arial,sans-serif';
	context.textBaseline = 'top';

	context.fillStyle = bg;
	context.fillRect( 0, 0, WIDTH, HEIGHT );

	context.fillStyle = fg;
	context.fillText( name, TEXT_X, TEXT_Y );
	context.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );

	context.fillStyle = bg;
	context.globalAlpha = 0.9;
	context.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );

	return {

		dom: canvas,

		update: function ( value, maxValue ) {

			min = Math.min( min, value );
			max = Math.max( max, value );

			context.fillStyle = bg;
			context.globalAlpha = 1;
			context.fillRect( 0, 0, WIDTH, GRAPH_Y );
			context.fillStyle = fg;
			context.fillText( round( value ) + ' ' + name + ' (' + round( min ) + '-' + round( max ) + ')', TEXT_X, TEXT_Y );

			context.drawImage( canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT );

			context.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT );

			context.fillStyle = bg;
			context.globalAlpha = 0.9;
			context.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round( ( 1 - ( value / maxValue ) ) * GRAPH_HEIGHT ) );

		}

	};

};

export default Stats;
