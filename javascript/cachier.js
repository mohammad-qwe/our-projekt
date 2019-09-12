

var ArtikelName =["Brot","Wasser","Salz","Apfel"]
var Preis =[0.5,1.5,0.66,2]
var kosten
function cachier(NameVonArtikel,menge){
for (var i=0;i<ArtikelName.length;i++){
    if (NameVonArtikel==ArtikelName[i]){
       kosten=Preis[i]*menge
            }
            
}
return  NameVonArtikel+" kostet "+kosten+" Euro"
}
