import { AppState } from "../AppState.js"
import { Trivia } from "../models/Trivia.js"





class TriviaService{

    constructor(){

    }

    async getQuestions(){
        const response = await fetch('https://opentdb.com/api.php?amount=10')
        const body = await response.json()
        AppState.questions = body.results.map(question => new Trivia(question))
    }
}

export const triviaService = new TriviaService()