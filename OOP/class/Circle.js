class Circle extends Shape { // laieneb Shape klassile, 
	constructor(x, y, radius, color) {
		super(x, y, color); // käivitab ülemklassi konstructori
		this.radius = radius;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.getColor();
		ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
	}
}