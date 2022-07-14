
// console.log(madate);
// console.log(madate);


var calcul = {
    noel : function (noel) {
        const madate =new Date();
        // let date1 = madate;
        // console.log(date1);

        let dnoel = new Date();
        dnoel.setFullYear(dnoel.getFullYear());
        dnoel.setMonth(11);
        dnoel.setDate(25);
        if (madate.getDate()>"25" && madate.getMonth() == "11") {
            dnoel.setFullYear(dnoel.getFullYear()+1);
            console.log(dnoel);
        }
        
        
        var  Diff_temps = dnoel - madate; 
        var  Diff_jours = Diff_temps / (1000 * 3600 * 24); 
        console.log("Le nombre de jours pour etre à noel  est de " + Math.round(Diff_jours) + " jours");
    },
    anniversaire : function (anniversaire) {
        const madate =new Date();
        let dannif = new Date();
        dannif.setFullYear(dannif.getFullYear());
        dannif.setMonth(11);
        dannif.setDate(4);

        if (madate.getDate()>"4" && madate.getMonth() == "11") {
            dannif.setFullYear(dannif.getFullYear()+1);
        }

        var  Diff_temps =  dannif - madate; 
        var  Diff_jours = Diff_temps / (1000 * 3600 * 24); 
        console.log("Le nombre de jours pour avoir mon anniversaire est de " + Math.round(Diff_jours) + " jours")

    },
    vacances : function (vacances) {

    },
    solstice : function (solstice) {
        const madate =new Date();
        // madate.getMonth()
            let solsticeete =new Date();
            solsticeete.setFullYear(solsticeete.getFullYear());
            solsticeete.setMonth(5);
            solsticeete.setDate(21);
            let solsticehiver =new Date();
            solsticehiver.setFullYear(solsticehiver.getFullYear());
            solsticehiver.setMonth(11);
            solsticehiver.setDate(21);

                if((madate.getMonth() < "5") || (madate.getMonth()=="5" && madate.getDate()<"21"))
                {
                    var  Diff_temps =  solsticeete - madate; 
                    var  Diff_jours = Diff_temps / (1000 * 3600 * 24); 
                    console.log("Le nombre de jours pour être au solstice d'été est de " + Math.round(Diff_jours) + " jours")
                }
                else if ((madate.getMonth() == "11") &&  madate.getDate()>"20"){
                    solsticeete.setFullYear(solsticeete.getFullYear()+1);
                    var  Diff_temps =  solsticeete - madate; 
                    var  Diff_jours = Diff_temps / (1000 * 3600 * 24); 
                    console.log("Le nombre de jours pour être au solstice d'été est de " + Math.round(Diff_jours) + " jours")
                }
                else  {
                    solsticehiver.setFullYear(solsticehiver.getFullYear());
                    var  Diff_temps =  solsticehiver - madate; 
                    var  Diff_jours = Diff_temps / (1000 * 3600 * 24); 
                    console.log("Le nombre de jours pour être au solstice d'hiver est de " + Math.round(Diff_jours) + " jours")
                }

        },
            
        
    vendredi13 : function (vendredi13) {
        const madate2 =new Date();
        let ladate =new Date();
        console.log(`voici tous les vendredis 13 durant les 4 prochaines années... \n`);
            for (i=0; i<1460;i++){
                let ladate = new Date;
                ladate.setDate(ladate.getDate()+i);
                if (ladate.getDate() =="13" && ladate.getDay()=="5"){
                    var  Diff_temps =  ladate - madate2; 
                    var  Diff_jours = Diff_temps / (1000 * 3600 * 24); 
        console.log("le "+ladate.toLocaleString() +" Le nombre de jours entre les deux dates est de " + Math.round(Diff_jours) + " jours")

                }
            }
            
       
            
    },
    vendredi13v2: function (vendredi13v2) {
        const madate = new Date();
        let date23 = new Date();
        let i=0;

        if ((date23.getDate()) !="13" || ((date23.getDay()) !="5")){
        while (date23.getDay()!="5" )
         {
            i++;
            date23.setMonth(date23.getMonth()+i);
            date23.setDate(13);
        } 
        var  Diff_temps =  date23 - madate; 
        var  Diff_jours = Diff_temps / (1000 * 3600 * 24); 
        console.log("le prochain Vendredi 13 sera le "+date23.toLocaleString()+" Le nombre de jours entre les deux dates est de " + Math.round(Diff_jours) + " jours\n\n")
    }
    else console.log("Nous sommes Vendredi 13");
} 
}



module.exports = calcul;

