

    var questions = {
        questionList : [
            frage1={
                    question:"wie viel einwohner hat düsseldorf? " ,
                    answer:["1: 712.178"," 2: 642.304"," 3: 812.178"],
                    correctAnswers:[2]
                },
            frage2={
                question:"wie viele bezirke hat düsseldorf?" ,
                answer:["1: 9","2: 11","3: 7"],
                correctAnswers:[1] 
                },
                frage3={
                    question:"wie heißt fussballmannschaft von düsseldorf?" ,
                    answer:["1: Schallke Düsseldorf","2: Furtuna Düsseldorf","3: Arena Düsseldorf"],
                    correctAnswers:[2] 
                    },
            ]
      
}
var  questionCounter=0
var antwort=[]
var trueAnswer = 0

function getQuestion(nummerOfQuestion) {
    if(nummerOfQuestion>questions.questionList.length||nummerOfQuestion<=0){
      prompt("wir haben nur "+questions.questionList.length+" fragen")
    }
    else {
        questionCounter++ 
return antwort[nummerOfQuestion-1] = (questions.questionList[nummerOfQuestion-1].question+" "+questions.questionList[nummerOfQuestion-1].answer) 
 
}
 
 
}
 function checkAnswer(nummerOfQuestion,antwort) {
    /* for(i=0;i<=questions.questionList[nummerOfQuestion-1].answer.length;i++){*/
if(antwort!=questions.questionList[nummerOfQuestion-1].correctAnswers){
    return false
}
else{
    trueAnswer++
    return true
    
    
}
     }
      
    
/* }*/ 
  function check(x) {
    
        if(x!=questions.questionList[i-1].correctAnswers){
          return "Das war leider falsch "  
        }
        else{
            trueAnswer++
          return "Richtig"    
        } 

  }
  function  reset() {
    trueAnswer=0  
    antwort=[] 
    questionCounter=0
  }


//mit wort beantworten

var questionsWort = {
    questionList : [
        frage1={
                question:"wie alt bist du? " ,
                answer:["44 ","  33 "," 22"],
                correctAnswers:["33"]
            },
        frage2={
            question:"wo wohnst du?" ,
            answer:["solingen "," köln "," düsseldorf"],
            correctAnswers:["solingen"] 
            },
        ]
  
}

  function getQuestionWort(nummerOfQuestion) {
    if(nummerOfQuestion>questionsWort.questionList.length||nummerOfQuestion<=0){
      prompt("wir haben nur "+questionsWort.questionList.length+" fragen")
    }
    else {
        questionCounter++ 
return antwort[nummerOfQuestion-1] = (questionsWort.questionList[nummerOfQuestion-1].question+" "+questionsWort.questionList[nummerOfQuestion-1].answer) 
 
}
 
 
}
 
  function checkWort(x) {
    
    if(x!=questionsWort.questionList[i-1].correctAnswers){
      return "Das war leider falsch "  
    }
    else{
        trueAnswer++
      return "Richtig"    
    } 

}