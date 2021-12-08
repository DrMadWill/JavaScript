//* Quiz App

// Data Object
class Question {
    constructor(content, choices, answer) {
        if (content == null || choices == null || answer == null) {
            throw new Error("This Parametrs Must Be Define")
        }
        this.content = new String(content);
        if (choices[0] == null) {
            throw new Error("This Parametr Must Be Array")
        } else {
            this.choices = choices;
        }
        this.answer = new String(answer);
        this
    }
}

// Question Answer prototype
Question.prototype.checkAnswer = function (answ) {
    let answer = new String(answ)
    return this.answer.trim().toLowerCase() === answer.trim().toLowerCase();
}

let qes1, qes2, qes3

try {
    qes1 = new Question("What is the most Papular language ?", ["C#", "JavaScript", "Python", "Asp.Net"], "JavaScript")
    qes2 = new Question("What is the Best language ?", ["C#", "JavaScript", "Python", "Asp.Net"], "JavaScript")
    qes3 = new Question("What is the best modern language ?", ["C#", "JavaScript", "Python", "Asp.Net"], "JavaScript")
} catch (error) {
    console.log(error)
}

let quest = [qes1, qes2, qes3]



// Quiz Define
class Quiz {
    constructor(question) {

        this.question = question; 
        this.score = 0;
        this.questionOfIndex = 0
    }
}


//Quiz Property
Quiz.prototype.getQuestion = function () {
    return this.question[this.questionOfIndex]
}


// Quiz Finsh
Quiz.prototype.isFinsh = function() {
    return this.question.length === this.questionOfIndex
}

// Quiz Guess
Quiz.prototype.guess = function(answer) {
    let question = this.getQuestion()
    console.log()
    if (question.checkAnswer(answer)){
        this.score=this.score+1
    }
    this.questionOfIndex++
}


let quiz_solition = new Quiz(quest)

console.log()
quiz_solition.guess("javascript")
// console.log(qes1.checkAnswer("javascript"))


// Quiz Start

let quizs
try {
    quizs= new Quiz(quest)//start
} catch (error) {
    console.log(error)
}

console.log(quizs.isFinsh())

console.log(quizs.getQuestion())
quizs.guess("Python")

console.log(quizs.getQuestion())
quizs.guess("Javascript")

console.log(quizs.getQuestion())
quizs.guess("Javascript")

console.log(quizs.score)
console.log(quizs.isFinsh())






