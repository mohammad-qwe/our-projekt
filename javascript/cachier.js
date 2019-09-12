

var ArtikelName =["Brot","Wasser","Salz","Apfel"]
var Preis =[0.5,1.5,0.66,2]
var kosten
function cachier(NameVonArtikel,menge){
for (var i=0;i<ArtikelName.length;i++){
    if (NameVonArtikel==ArtikelName[i]){
       kosten=Preis[i]*menge
            }
<<<<<<< HEAD
            
=======
>>>>>>> 772c6c5d3aaae11f16c4e7f742333739d6a17f3c
}
return  NameVonArtikel+" kostet "+kosten+" Euro"
}
