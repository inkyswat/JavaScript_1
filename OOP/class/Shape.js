class Shape {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color;
		var _color = color; // underscore tähistab private muutujat
		this.getColor = function() {
			return _color;
		}
		this.setColor = function(color) {
			_color = color;
		}
	}

}