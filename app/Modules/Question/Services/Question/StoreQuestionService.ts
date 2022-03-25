import { singleton, inject } from 'tsyringe'

import { IQuestion } from 'App/Modules/Question/Interfaces/QuestionInterface'
import QuestionsRepository from 'App/Modules/Question/Repositories/QuestionsRepository'
import Question from 'App/Modules/Question/Models/Question'

@singleton()
export class StoreQuestionService {
  constructor(
    @inject(QuestionsRepository)
    private questionsRepository: QuestionsRepository
  ) {}

  public async init(data: IQuestion.DTO.Store): Promise<Question> {
    return this.questionsRepository.store<typeof Question>(data)
  }
}
