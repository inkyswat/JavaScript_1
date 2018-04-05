var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var ratas = {
    posX: 300,
    posY: 300,
    MoveSpeed: 5,
    SpeedLimit: -20,
    radius: 120,
    radiusChange: -1.1,
    direction: 90,
    Accel: -0.09,
    move: function (direction = "") {
        console.log(this.MoveSpeed);
        
        if (this.MoveSpeed >= this.SpeedLimit) {
      //      console.log(this.MoveSpeed);
            this.radius += this.radiusChange; // radius ei tohi olla negatiivne, siis peksab seghast!
            if (this.radius < 1) {
                this.radius = 0;
            }
            else if (this.direction > 0 && this.direction < 90 || this.direction > 270 && this.direction < 360) {
                
            }
            else if (this.direction > 90 && this.direction < 270) {

            }
            else if (direction == 0) {
                this.MoveSpeed += this.Accel;
                this.posX += this.MoveSpeed;
            }
            else if (direction == 90) {
                console.log(this.MoveSpeed);
                this.MoveSpeed += this.Accel;
                this.posY += this.MoveSpeed;
            }
            else if (direction == 180) {
                this.MoveSpeed += this.Accel;
                this.posX -= this.MoveSpeed;
            }
            else if (direction == 270) {
                this.MoveSpeed += this.Accel;
                this.posY -= this.MoveSpeed;
            }
            else {

            }

        }
        else {
            
        } 
    },
    draw: function (posX, posY, radius) {
        ctx.beginPath();
        ctx.arc(posX, posY, radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}
function joonista() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ratas.draw(ratas.posX, ratas.posY, ratas.radius);
    ratas.move(0);
    
    // ctx.beginPath();
    // ctx.arc(ratas.posX, ratas.posY, ratas.radius, 0, 2 * Math.PI);
    // ctx.fill();


    
    requestAnimationFrame(joonista); // refreshimine jääb seisma kui mujale tab'i peale minna

}
requestAnimationFrame(joonista);

function story() {
    
}