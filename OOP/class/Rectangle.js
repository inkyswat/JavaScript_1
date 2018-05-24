class Rectangle extends Shape { // laieneb Shape klassile, 
	constructor(x, y, h, w, color) {
		super(x, y, color); // käivitab ülemklassi konstructori
		this.h = h;
		this.w = w;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.getColor();
	    ctx.rect(this.x, this.y, this.w, this.h);
		ctx.fill();
		ctx.closePath();
	}
}