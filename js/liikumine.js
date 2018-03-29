var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var ruut = {
    x: 30,
    y: 9.8,
    w: 20,
    h: 20,
    kiirus: 0
}

var ruut2 = {
    x: 60,
    y: 500,
    w: 25,
    h: 25,
    kiirus: -32
}

// canvase refreshimine

var gravity = .98;
var bounce = 0.99;
var bounce_2 = 0.5;

    function arvuta () {
        ruut.kiirus += gravity;
        ruut.y += ruut.kiirus;

        if( (ruut.y + ruut.h) > canvas.height) {
            ruut.y = canvas.height - ruut.h;
            ruut.kiirus = -ruut.kiirus * bounce;
        }

    }

    function arvuta_2() {
    ruut2.kiirus += gravity;
    ruut2.y += ruut2.kiirus;

    if ((ruut2.y + ruut2.h) > canvas.height) {
        ruut2.y = canvas.height - ruut2.h;
        ruut2.kiirus = -ruut2.kiirus * bounce_2;
    }

}

    function joonista() {
            console.log(joonista);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(ruut.x, ruut.y, ruut.w, ruut.h);
            ctx.fillRect(ruut2.x, ruut2.y, ruut2.w, ruut2.h);
            arvuta();
            arvuta_2();
            requestAnimationFrame(joonista); // refreshimine jääb seisma kui mujale tab'i peale minna
        }



requestAnimationFrame(joonista);
