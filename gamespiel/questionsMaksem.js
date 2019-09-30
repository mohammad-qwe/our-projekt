var questions = {
    questionsList: [{
        question: "Wieviele Teilnehmer hat unser Kurs?",
        answers: ["20", "19", "17"],
        correctAnswers: [1]
    },{
        question: "Was gibt es heute als Snack?",
        answers: ["Melone", "Birnen", "Pflaumen"],
        correctAnswers: [2]
    },{
        question: "Wie erstellt man ein Objekt?",
        answers: ["new Object()", "{}", "[]"],
        correctAnswers: [0,1]
    }],
    countQuestions: function() {
        return this.questionsList.length
    },
    getQuestion: function(num) {
        return this.questionsList[num]
    },
    checkAnswer: function(num, userAnswer) {
        var correctAnswers = this.getQuestion(num).correctAnswers
        for(var i=0; i<correctAnswers.length; i++){
            if(userAnswer == correctAnswers[i]) {
                return true
            }
        }
        return false
    }
}