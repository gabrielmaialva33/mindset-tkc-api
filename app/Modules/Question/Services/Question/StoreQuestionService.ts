import { inject, injectable } from 'tsyringe'

import { IQuestion } from 'App/Modules/Question/Interfaces/QuestionInterface'
import Question from 'App/Modules/Question/Models/Question'
import DTO = IQuestion.DTO

@injectable()
export class StoreQuestionService {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestion.Repository
  ) {}

  public async init(data: DTO.Store): Promise<Question> {
    return this.questionsRepository.store(data)
  }
}
