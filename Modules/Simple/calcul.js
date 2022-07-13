
// console.log(madate);
// console.log(madate);


var calcul = {
    noel : function (noel) {
        const madate =new Date();
        let date1 = madate.getTime();
        console.log(date1);

        let dnoel = new Date("12/25/2022");
        
        var  Diff_temps = dnoel - date1; 
        var  Diff_jours = Diff_temps / (1000 * 3600 * 24); 
        console.log("Le nombre de jours pour etre à noel  est de " + Math.round(Diff_jours) + " jours");
    },
    anniversaire : function (anniversaire) {
        const madate =new Date();
        let dannif = new Date("12/04/2022");

        var  Diff_temps =  dannif - madate; 
        var  Diff_jours = Diff_temps / (1000 * 3600 * 24); 
        console.log("Le nombre de jours pour avoir mon anniversaire est de " + Math.round(Diff_jours) + " jours")

    },
    vacances : function (vacances) {

    },
    solstice : function (solstice) {
        const madate =new Date();
        // madate.getMonth()
        if (madate.getMonth() >5 || madate.getMonth()== 5 && madate.getDay()>21) {
            let solsticehiver = new Date("12/21/2022");
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
        console.log(ladate +" Le nombre de jours entre les deux dates est de " + Math.round(Diff_jours) + " jours")

                }
            }
            
       
            
    }
}



module.exports = calcul;