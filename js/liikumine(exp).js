var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var ruut = {
    x: 10,
    y: 9.8,
    w: 20,
    h: 20,
    y_kiirus: 0,
    x_kiirus: 30,
    suund: 1
}

var ruut2 = {
    x: 60,
    y: 500,
    w: 50,
    h: 60,
    y_kiirus: -32,
    x_kiirus: 10,
    suund: 1
}

// canvase refreshimine

var gravity = .98;
var bounce = 0.9;
var bounce_2 = 0.6;
var counter = 10;
function arvuta () {
    ruut.y_kiirus = precisionRound(ruut.y_kiirus, 2);
    ruut.y_kiirus += gravity;
    ruut.y += ruut.y_kiirus;
    ruut.x += ruut.x_kiirus;
    // ruut.x = precisionRound(ruut.x, 0);
    // ruut.y = precisionRound(ruut.y, 0);
    // ruut.x += ruut.x_kiirus;
    // ruut.x_kiirus = precisionRound(ruut.x_kiirus, 0);

    if (ruut.x_kiirus > 1) {
      counter = counter + 0.1;
      ruut.x_kiirus *= ((1/(counter))+0.93);
      // ruut.x_kiirus *= (-0.2*counter+1);
    }
    else {
      // ruut.x_kiirus = 0;
    }
    // ruut.x_kiirus -= ruut.x_kiirus;
    // console.log(ruut.x_kiirus);



    if ((ruut.y + ruut.h) > canvas.height) {
        ruut.y = canvas.height - ruut.h;
        ruut.y_kiirus = -ruut.y_kiirus * bounce;
        // ruut.y_kiirus = precisionRound(ruut.y_kiirus, 2);

    }

    // kui kiirus on piisavalt kaua iteratsioone olnud väikseimas vahemikus siis liikumine peatub, JÄRSULT
    // vaja sujuvat peatumist (näiteks y=1/x rakendust)
    //
    // if (ruut.y_kiirus < 0.5 && ruut.y_kiirus > -0.5) {
    //     ruut.slide += 1;
    //   if (ruut.slide > 30) {
    //     ruut.suund = 0;
    //   }
    // }
    if ((ruut.x + ruut.h) >= canvas.width) {
            ruut.suund *= -1;
            if((ruut.x + ruut.x_kiirus) > canvas.width) {
              ruut.x = canvas.width - 1;
              ruut.x_kiirus *= ruut.suund;
            }

    }
    if (ruut.x < 1) {
        // ruut.x += 1;
            ruut.suund *= -1;
            ruut.x_kiirus *= ruut.suund;

            if((ruut.x + ruut.x_kiirus) < 0) {
              ruut.x = 0;
            }

    }
    // if (ruut.y_kiirus < 0.1) {
    //     ruut.x_kiirus *= ruut.suund;
    // }
}

function arvuta_2() {
ruut2.y_kiirus += gravity;
ruut2.y += ruut2.y_kiirus;

  if ((ruut2.y + ruut2.h) > canvas.height) {
      ruut2.y = canvas.height - ruut2.h;
      ruut2.y_kiirus = -ruut2.y_kiirus * bounce_2;
  }

}

function joonista() {
    // console.log(ruut.x_kiirus);
    console.log(ruut.x_kiirus);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(ruut.x, ruut.y, ruut.w, ruut.h);
    ctx.fillRect(ruut2.x, ruut2.y, ruut2.w, ruut2.h);
    arvuta();
    arvuta_2();
    requestAnimationFrame(joonista); // refreshimine jääb seisma kui mujale tab'i peale minna
}

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

function ClearCanvas() {

}

requestAnimationFrame(joonista);
