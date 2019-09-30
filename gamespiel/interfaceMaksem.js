var game = {
    answered: 0,
    correct: 0,
    startGame: function() {
        for(var i=0; i<questions.countQuestions(); i++) {
            this.askQuestion(i)
        }
        alert(`Herzlichen Glückwunsch, du hast ${this.correct} von ${this.answered} Fragen richtig beantwortet!`)
    },
    askQuestion: function(num) {
        var questionObj = questions.getQuestion(num)
        var questionString = questionObj.question + "\n"
        for(var i=0; i<questionObj.answers.length; i++) {
            questionString += i + ": " + questionObj.answers[i] + "\n"
        }
        var answer = prompt(questionString)
        var correct = questions.checkAnswer(num, answer)
        if(correct) {
            alert("Richtig!")
            this.correct++
        } else {
            alert("Das war leider falsch")
        }
        this.answered++
    }
}