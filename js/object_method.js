
class wheel {
    constructor (posX, posY, MoveSpeed, radius, radiusChange, direction, Accel) {

    this.posX = posX;
    this.posY = posY;
    this.MoveSpeed = MoveSpeed;
    this.radius = radius;
    this.radiusChange = radiusChange;
    this.direction = direction;
    this.Accel = Accel;
    this.ctx = getCanvas();
    }
    manipul (direction = this.direction) {
        
        if (this.radius > 1 && this.radius < 500 ) {
            this.radius += this.radiusChange; // radius ei tohi olla negatiivne, siis peksab seghašt!
            this.MoveSpeed += this.Accel;

            if (this.radius < 1) { // paneme raadiuse nulliks kui tahab negatiivseks minna
                this.radius = 0;
            }
            else if (this.direction > 0 && this.direction < 90 || this.direction > 270 && this.direction < 360) {
                this.posY += this.MoveSpeed * Math.cos(this.direction);
                this.posX += this.MoveSpeed * Math.sin(this.direction);
            }
            else if (this.direction > 90 && this.direction < 180 || this.direction > 180 && this.direction < 270) {
                this.posY += this.MoveSpeed * Math.cos(this.direction);
                this.posX += this.MoveSpeed * Math.sin(this.direction);
            }
            else if (direction == 0 || direction == 360) {
                this.posX += this.MoveSpeed;
            }
            else if (direction == 90) {
                // console.log(this.MoveSpeed);
                this.posY += this.MoveSpeed;
            }
            else if (direction == 180) {
                this.posX -= this.MoveSpeed;
            }
            else if (direction == 270) {
                
                this.posY -= this.MoveSpeed;
            }
            else {

            }

        }
        else {
            
        } 
    }
    draw (posX, posY, radius) {
        this.ctx.beginPath();
        this.ctx.arc(posX, posY, radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}
var getCanvas = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    return ctx;
}
function joonista() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
 for (let i = 0; i < wheels.length; i++) {
    
    wheels[i].draw(wheels[i].posX, wheels[i].posY, wheels[i].radius);
    wheels[i].manipul();
 }
   
    requestAnimationFrame(joonista); // refreshimine jääb seisma kui mujale tab'i peale minna

}
var ctx = getCanvas();
wheel.iterations = 1;
var wheels = [];
for (let i = 0; i < 700; i++) {
    let r = parseInt(10 + Math.random() * 10);
    let x = parseInt(r + Math.random() * (canvas.width - 2 * r)); // et pall tekiks canvase alass on vaja ruudu laius maha lahutada
    let y = parseInt(r + Math.random() * (canvas.height - 2 * r));
    let MoveSpeed = 1.2+parseInt(Math.random()*4);
    let direction = 360*(Math.random());
    let Accel = Math.random()*0.022-0.034;
    let radiusChange = Math.random() * 1.3 - 1.25;
    wheels.push(new wheel(350, 300, MoveSpeed, r, radiusChange , direction, Accel));
}
// var wheel1 = new wheel(100, 100, 5, 1, 30, 1.1, 270, -0.05);
requestAnimationFrame(joonista);

function time(milliseconds) {
    var millisecond = setTimeout()
}