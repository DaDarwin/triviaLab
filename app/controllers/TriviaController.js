import { AppState } from "../AppState.js";
import { triviaService } from "../services/TriviaService.js";
import { setHTML } from "../utils/Writer.js";


function _drawQuestions(){
    let content = ''
    AppState.questions.map(question => content += question.template)
    setHTML('trivia', content)
}



export class TriviaController{


    constructor(){
        AppState.on('questions', _drawQuestions)
        this.getQuestions()
    }
    
    async getQuestions(){
        try {
            triviaService.getQuestions()
        } catch (error) {
            console.error(error)   
        }
    }
}

