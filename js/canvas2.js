    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    // ctx kaudu hakkame meetodeid kirjutama

    var hx, hy;

    var hiirAll = false;
    var canvasPosition = canvas.getBoundingClientRect();

    window.addEventListener("mousedown", function() {
        hiirAll = true;
    });

    window.addEventListener("mouseup", function() {
        hiirAll = false;
    });
        

        window.addEventListener("mousemove", function(e) {
            ctx.beginPath();
            ctx.moveTo(hx, hy);

            if (hiirAll) {
                // console.log(e);
                hx = e.clientX - canvasPosition.x;
                hy = e.clientY - canvasPosition.y;
                console.log(hx, hy);
                // ctx.lineWidth = 2;
                ctx.lineTo(hx, hy);
                ctx.fillRect(hx, hy, 1, 1);
                ctx.stroke();
            } 
            else {

            }   
        });

