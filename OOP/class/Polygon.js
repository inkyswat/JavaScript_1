class Polygon extends Shape { // laieneb Shape klassile, 
	constructor(x, y, r, corners, color) {
		super(x, y, color); // käivitab ülemklassi constructori
		this.corners = corners;
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.fillStyle = this.getColor();
		ctx.moveTo(x, y);
		ctx
		ctx.fill();
		ctx.closePath();
	}
	calculate(corners) {
		
		var InteriorAngle = (corners−2)*180/corners;
// arvuta 
// kogu punktid massiivi for loop'iga, kasutades raadius
// draw meetodiga joonista välja kasutades LineTo'd ja for loop'i



	}

}