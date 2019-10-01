var textA = document.getElementsByClassName('item1')
var getTextA = document.getElementById('text1')
function show1(){
textA[0].innerHTML=getTextA.innerHTML

}

function myFunction1() {
    var txt;
    var antwort = prompt("wähle deine Antwort\na:das Manometer\nb:der Kalender " );
    if (antwort == "b") {
    txt ="Richtige Antwort bravoo!";
    var background1 =document.getElementById('item1');
    background1.style.background='url(smiley-163510__340.jpg)'
    }
    else {
      txt = "tschüss falsche Antwort.";
      var background1 =document.getElementById('item1');
      background1.style.background='url(smiley-3058590__340.jpg)'
    } 
    document.getElementById("text1").innerHTML = txt;
    
  }

  var textB = document.getElementsByClassName('item2')
  var getTextB = document.getElementById('text2')
  function show2(){
  textB[0].innerHTML=getTextB.innerHTML
  
  
  }


  function myFunction2() {
    var txt;
    var antwort = prompt("wähle deine Antwort\na:the Blues\nb:the Blacks " );
    if (antwort == "a") {
      var background1 =document.getElementById('item2');
    background1.style.background='url(smiley-163510__340.jpg)'
      txt ="Richtige bravoooooooooo! prima!!!!";
    } else {
      var background1 =document.getElementById('item2');
      background1.style.background='url(smiley-3058590__340.jpg)'
      txt = "falsche Antwort, 10 mal Liegestütze hhhhhhh";
    }
    document.getElementById("text2").innerHTML = txt;
  }

var textC = document.getElementsByClassName('item3')
var getTextC = document.getElementById('text3')
function show3(){
textC[0].innerHTML=getTextC.innerHTML


}
  function myFunction3() {
    var txt;
    var antwort = prompt("wähle deine Antwort\na:Fels \nb:Riff " );
     if(antwort=="b") {
      var background1 =document.getElementById('item3');
    background1.style.background='url(smiley-163510__340.jpg)'
      txt ="Richtige Antwort bravoo!";
    }
    else {
      var background1 =document.getElementById('item3');
      background1.style.background='url(smiley-3058590__340.jpg)'
      txt = "falsche Antwort Tschüss machst gut nicht viel essen du kriegst Bauchschmerzen.";
    }
    document.getElementById("text3").innerHTML = txt;
  }

var textD = document.getElementsByClassName('item4')
var getTextD = document.getElementById('text4')
function show4(){
textD[0].innerHTML=getTextD.innerHTML


}
  function myFunction4() {
    var txt;
    var antwort = prompt("wähle deine Antwort\na:5 \nb:4 " );
    if(antwort=="b") {
      var background1 =document.getElementById('item4');
    background1.style.background='url(smiley-163510__340.jpg)'
      txt ="Richtige Antwort mach weiter gleich geschafft!";

    }
    else{
      var background1 =document.getElementById('item4');
      background1.style.background='url(smiley-3058590__340.jpg)'
      txt = "falsche Antwort Tschüss machst gut nicht viel essen du kriegst Bauchschmerzen.";
    } 
    document.getElementById("text4").innerHTML = txt;
  }

  var textE = document.getElementsByClassName('item5')
var getTextE = document.getElementById('text5')
function show5(){
textE[0].innerHTML=getTextE.innerHTML


}
  function myFunction5() {
    var txt;
    var antwort = prompt("wähle deine Antwort\na:roter Stier \nb:roter Kuh " );
    if(antwort=="a") {
      var background1 =document.getElementById('item5');
    background1.style.background='url(smiley-163510__340.jpg)'
      txt ="Richtig du bist stark ,hast du Red Bull getrunken  !";
    }
    else{
      var background1 =document.getElementById('item5');
      background1.style.background='url(smiley-3058590__340.jpg)'
      txt = "falsche Antwort Tschüss machst gut nicht viel essen du kriegst Bauchschmerzen.";
    } 
    document.getElementById("text5").innerHTML = txt;
  }

  var textF = document.getElementsByClassName('item6')
var getTextF = document.getElementById('text6')
function show6(){
textF[0].innerHTML=getTextF.innerHTML


}
  function myFunction6() {
    var txt;
    var antwort = prompt("wähle deine Antwort\na:Auf Bäumen \nb:Am Strand " );
    if(antwort=="a") {
      var background1 =document.getElementById('item6');
    background1.style.background='url(smiley-163510__340.jpg)'
      txt ="Richtig du bist stark ,hast du Red Bull getrunken !";
    }
    else {
      var background1 =document.getElementById('item6');
      background1.style.background='url(smiley-3058590__340.jpg)'
      txt = "falsche Antwort Tschüss machst gut nicht viel essen du kriegst Bauchschmerzen.";
    } 
    document.getElementById("text6").innerHTML = txt;
  }
  
  var textG = document.getElementsByClassName('item7')
var getTextG = document.getElementById('text7')
function show7(){
textG[0].innerHTML=getTextG.innerHTML


}
  function myFunction7() {
    var txt;
    var antwort = prompt("wähle deine Antwort\na:die Würze \nb:die Wurzel " );
    if(antwort=="a") {
      var background1 =document.getElementById('item7');
    background1.style.background='url(smiley-163510__340.jpg)'
      txt ="Richtig du bist stark ,hast du Red Bull getrunken !";
    }
    else {
      var background1 =document.getElementById('item7');
      background1.style.background='url(smiley-3058590__340.jpg)'
      txt = "falsche Antwort Tschüss machst gut nicht viel essen du kriegst Bauchschmerzen.";
    } 
    document.getElementById("text7").innerHTML = txt;
  } 
var textH = document.getElementsByClassName('item8')
var getTextH = document.getElementById('text8')
function show8(){
textH[0].innerHTML=getTextH.innerHTML


}
  function myFunction8() {
    var txt;
    var antwort = prompt("wähle deine Antwort\na:27 \nb:22 " );
    if(antwort="a") {
      var background1 =document.getElementById('item8');
    background1.style.background='url(smiley-163510__340.jpg)'
      txt ="Richtige Antwort mach weiter gleich geschafft !";
    }
    else{
      var background1 =document.getElementById('item8');
      background1.style.background='url(smiley-3058590__340.jpg)'
      txt = "falsche Antwort Tschüss machst gut nicht viel essen du kriegst Bauchschmerzen.";
    } 
    document.getElementById("text8").innerHTML = txt;
  }  

  