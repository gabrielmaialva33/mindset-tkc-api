import { inject, injectable } from 'tsyringe'

import { IQuestion } from 'App/Modules/Question/Interfaces/QuestionInterface'
import Question from 'App/Modules/Question/Models/Question'

@injectable()
export class StoreQuestionService {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestion.Repository
  ) {}

  public async init(data: IQuestion.DTO.Store): Promise<Question> {
    return this.questionsRepository.store<typeof Question>(data)
  }
}
