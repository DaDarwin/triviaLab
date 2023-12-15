import { generateId } from "../utils/GenerateId.js";





export class Trivia{

    constructor(data){
        this.id = generateId()
        this.question = data.question
        this.type = data.type
        this.correctAnswer = data.correct_answer
        this.incorrectAnswers = data.incorrect_answers
        console.log(this)
    }

    get template(){
        return `
        <div class="row">
            <h3 class="col-12">${this.question}</h1>
            <div class="col-12">${this.answers}</div>
        </div>`
    }

    get answers(){
        if(this.type == 'boolean'){
            return`
            <div class="row">
                <button onclick="app.TriviaController.submitAnswer(${true})" class="col-6 h-100">True</button>
                <button onclick="app.TriviaController.submitAnswer(${false})" class="col-6 h-100">False</button>
            </div>`
            }
        else{
            let content = '<div class="row">'
            let answers = this.incorrectAnswers.concat(this.correctAnswer)
            answers.splice(Math.floor(Math.random() * answers.length), 0, this.correctAnswer)
            answers.pop()
            answers.forEach(answer => {content += `<button onclick="app.TriviaController.submitAnswer(${answer})" class="col-6 h-50">${answer}</button>`})
            content += '</div>'
            return content
        }
    }
}