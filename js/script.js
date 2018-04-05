        console.log("tere");
        var tekstiKast = document.getElementById("tekst");
        // document on HTML dokumendi poole pöödrumine
        var tekstiNupp = document.getElementById("nupp");
        // var -> muutuja defineerimine, ei ole tüübi tundlik
        tekstiNupp.addEventListener("click", function(e){ // sündmuse kuulaja, kuulame sündmust click
        // parameeter e sisaldab infot mouse kohta
            console.log(e);
            alert(tekstiKast.value);
        });
        var fn = function(tekst){
            console.log(tekst);
        }
        const konstant = 1;

        // var -> skoobi tundlik, ehk siis näiteks funktsioonis
        // let -> blokkskoop tundlik (väiksem skoop)
        var arv1 = 5;

        var massiiv1 = new Array();
        var massiiv2 = [
            1,
            "tekst",
            [
                1,0
            ],
            false
        ];

        for (let i = 0; i < massiiv2.length; i++) {
            console.log(massiiv2[i]); // kuvab konsooli massiivi sisu
        }
        document.getElementById("pealkiri").innerHTML = document.title; // innerHTML HTML tag'ide vahel eksisteeriv.
                                                                        // dokumendi sisu, isegi kui on veel html TAG'e ja muud teksti seal vahel
        document.getElementById("nupp").value = document.title; // value on väärtus
        // HTML elemendi loomine
        var link = document.createElement("a");
        link.innerHTML = "see on lingi tekst!";
        link.href = "#";
        document.body.appendChild(link);

        kast.innerHTML = "tere";
        kast.appendChild(link.cloneNode(true)); // cloneNode kopeerib tagi ja true
