    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    // ctx kaudu hakkame meetodeid kirjutama

    // ctx.fillRect(10, 10, 200, 100);
    // ristkülik täidetud
    // konsooli kirjutades ctx siis saab meetodeid, mida rakendada saab, vaadata
    ctx.beginPath();
    ctx.fillStyle = "#456";
    ctx.rect(40, 10, 100, 50);
    ctx.fill();
    // ristkülik tühi
    ctx.beginPath();
    ctx.strokeStyle = "#259";
    ctx.lineWidth = 3;
    ctx.rect(40, 70, 100, 50);
    ctx.stroke();

    // jooned
var x_jooned = 150;
var y_jooned = 10;

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.moveTo(x_jooned, y_jooned); // määrab punkti asukoha
    ctx.lineTo(x_jooned, y_jooned+50);// määrab joone uue suuna
    ctx.lineTo(x_jooned+100,y_jooned+50);// määrab joone uue suuna
    ctx.lineTo(x_jooned + 50, y_jooned+110);// määrab joone uue suuna
    ctx.closePath(); // sulgeb joonte jada alguspunktiga kokku
    ctx.stroke();
    ctx.fillStyle = "#373";
    ctx.fill();

    // kaar
var x_kaar = 440;
var y_kaar = 330;
var radius_kaar = 50;
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "rgba(255, 45, 45, 0.5)";

    ctx.arc(x_kaar, y_kaar, radius_kaar, 0, Math.PI);
    ctx.stroke();

var radius_kaar = 50;
    ctx.beginPath();
    ctx.arc(x_kaar + 100, y_kaar, radius_kaar, 2* Math.PI, Math.PI, 1);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();

    // tekst
    var font_size = "30px";
    var x_tekst = 10;
    var y_tekst = 150;
    ctx.font = font_size + " " + "serif";
    ctx.lineWidth = 2;
    text_1 = "JavaScript";
    text_2 = "on lahe";
    var text_1_Width = ctx.measureText(text_1).width; // täpne laius
    var text_1_Width_int = parseInt(text_1_Width); // teeb täisarvuks (ei ümarda)
    var text_2_Width = ctx.measureText(text_2).width; // täpne laius
    var text_2_Width_int = text_2_Width.toFixed(2); // 2 kohta peale koma jätab

    ctx.fillText(text_1 + " - " + text_1_Width_int, x_tekst, y_tekst);
    ctx.strokeText(text_2 + " - " + text_2_Width_int, x_tekst, y_tekst+50);
// piltide laadimine
// uus canvas
var canvas = document.getElementById('canvas_2'),
    ctx2 = canvas.getContext('2d');

make_base();

function make_base() {
    base_image = new Image();
    base_image.src = 'DSC_0018.jpg';
    ctx2.drawImage(base_image, 100, 0, 200, 200, 0, 0, 200, 200);
}
// kogu script läheb window onload'i sisse, keerulisem läbi console'i debug'ida
window.onload = function() {
    var image = document.getElementById("pilt");
    ctx2.drawImage(image, 100, 100);
}

// uus canvas
// pütaagorase teoreem
var canvas = document.getElementById('canvas_3'),
    ctx3 = canvas.getContext('2d');

    // teeme objekti
    var pall_1 = {
        x: parseInt(Math.random() * canvas.width), // suvaline x asukoht
        y: parseInt(Math.random() * canvas.height), // suvaline y asukoht
        r: parseInt(15 + Math.random() * 20) // suvaline raadius 30 - 50px vahemikus
    }

    var pall_2 = {
        x: parseInt(Math.random() * canvas.width),
        y: parseInt(Math.random() * canvas.height),
        r: parseInt(45 + Math.random() * 20)
    }
    var pallid = [pall_1, pall_2];
    // arvutame pallide keskpunktide kaugused teine teise suhtes
    var kaugus_x = pall_1.x - pall_2.x;
    var kaugus_y = pall_1.y - pall_2.y;
    var kaugus = Math.sqrt(kaugus_x*kaugus_x + kaugus_y*kaugus_y) - (pall_1.r + pall_2.r);
    console.log(kaugus);
for (var i = 0; i < pallid.length; i++) { // seni ketrata kuni i on väiksem kui massiiviindeks e. massiivi pikkus
    ctx3.beginPath();
    ctx3.font = "20px serif";
    ctx3.fillText("Pallide ringjoonte kaugus = " + parseInt(kaugus) + "px", 5, 25);
    ctx3.arc(pallid[i].x, pallid[i].y, pallid[i].r, 0, 2*Math.PI); // massiivi sees oleva objekti omaduste kaudu andmete ligi saamisele
    ctx3.fill();
    if(kaugus < 0) {
        ctx3.fillText("Pallid on koos", 5, 55);
    }
    else {
        ctx3.fillText("Pallid on eraldi", 5, 55);
    }
}
