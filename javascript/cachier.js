
var beträge = []
var nummer=-1
var kosten=0
var ArtikelName =["brot","wasser","salz","apfel"]
var Preis =[0.5,1.5,0.66,2]
function cachier(NameVonArtikel,menge){
for (var i=0;i<ArtikelName.length;i++){
    if (NameVonArtikel==ArtikelName[i]){
       kosten=Preis[i]*menge
            }          
}
nummer++
beträge[nummer]=kosten
return kosten
}


function reset(){
    beträge = []
    nummer=-1 
    kosten=0
}
function Betrag(){
    var betrag=0
for(var n=0;n<beträge.length;n++){
betrag=betrag+beträge[n]
}

return betrag
}

function removArtikel(NameVonArtikel,menge){
    for (var i=0;i<ArtikelName.length;i++){
        if (NameVonArtikel==ArtikelName[i]){
           kosten=Preis[i]*menge
                }          
    }
    var totalPreis=Betrag()

    return totalPreis-kosten
    
    }






