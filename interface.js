var starting = prompt("Willkommen beim DCI-Quiz! Bist du bereit, dich meinen Fragen zu stellen?  a. Halt die Klappe und leg endlich los!   b. Lass mal, ich will nicht denken")

switch(starting){
    case "a":
   

                var game = {
                        startGame:function() {
                                        for(i=1;i<=questions.questionList.length;i++){
                                        alert(getQuestion(i))  
                                                
                                                                
                                        }
                                        
                                        alert("die fragen sind fertig") },
                                
                        
                        askQuestion:function() {
                                var x = []
                                for(i=1;i<=questions.questionList.length;i++){
                                x[i-1] = prompt(getQuestion(i))

                                        alert(check(x[i-1])) 
                        
                                } 
                                alert("du hast "+questionCounter+" fragen beantwortet")  
                                alert(trueAnswer+" Frage(n) wurde(n) richtig beantwortet ") 
                                reset()   
                        }


                }



                var gameWort = {
                        startGame:function() {
                                        for(i=1;i<=questionsWort.questionList.length;i++){
                                        alert(getQuestionWort(i))  
                                                
                                                                
                                        }
                                        
                                        alert("die fragen sind fertig") },
                                
                        
                        askQuestion:function() {
                                var x = []
                                for(i=1;i<=questionsWort.questionList.length;i++){
                                x[i-1] = prompt(getQuestionWort(i))

                                        alert(checkWort(x[i-1])) 
                        
                                } 
                                alert("du hast "+questionCounter+" fragen beantwortet")  
                                alert(trueAnswer+" Frage(n) wurde(n) richtig beantwortet ") 
                                reset()   
                        }


                }

break;
case "b":
    alert("feigling")
    break;
    default :
    alert("noch mal aussuchen")
   
}