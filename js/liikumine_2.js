var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var canvasLocation = canvas.getBoundingClientRect(); // canvase asukoha akna suhtes teada saamiseks, et hiire asukohta määrata ntx

 
    function joonista() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // console.log(joonista);
        for (var i = 0; i < pallid.length; i++) { // pallid.length loeb palju elemente on pallid massiivis
        ctx.beginPath();
        ctx.arc(pallid[i].x, pallid[i].y, pallid[i].r, 0, 2 * Math.PI);
        ctx.fill();

        }
    requestAnimationFrame(joonista); // refreshimine jääb seisma kui mujale tab'i peale minna
    }

    function Pall(x,y,r) { // palli objekti loomise funktsioon
        this.x = x;
        this.y = y;
        this.r = r;
    }
    
//    var pall1 = new Pall(20,50,30); 
   var pallid = [];
   for(var i = 0; i < 10; i++) {
       var r = parseInt(10 + Math.random() * 30);
       var x = parseInt(r + Math.random() * (canvas.width - 2*r)); // et pall tekiks canvase alass on vaja ruudu laius maha lahutada
       var y = parseInt(r + Math.random() * (canvas.height - 2*r));
       pallid.push(new Pall(x,y,r));
   }     
requestAnimationFrame(joonista);
// hiire kliki kauguse määramine objektidest

window.addEventListener("mousedown", function(e) {
    var hx = e.clientX - canvasLocation.x;
    var hy = e.clientY - canvasLocation.y;
    console.log(" ");
    for (var i = 0; i < pallid.length; i++) {
        
        var kaugus_x = pallid[i].x - hx;
        var kaugus_y = pallid[i].y - hy;
        var kaugus = Math.sqrt(kaugus_x * kaugus_x + kaugus_y * kaugus_y) - pallid[i].r;
        console.log(kaugus);
        if (kaugus <= 0) {
            pallid[i].r += 0.1*pallid[i].r;
            console.log("array index=" + i);
        //    pallid.splice(i, 1); // alustab kustutamist, ja kui palju

            pallid[i].x += kaugus_x;
            pallid[i].y += kaugus_y;
            kiirus_x = kaugus_x;
            kiirus_y = kaugus_y;
        }

    }
});

