import { inject, singleton } from 'tsyringe'

import { IQuestion } from 'App/Modules/Question/Interfaces/QuestionInterface'
import QuestionsRepository from 'App/Modules/Question/Repositories/QuestionsRepository'
import Question from 'App/Modules/Question/Models/Question'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@singleton()
export class UpdateQuestionService {
  constructor(
    @inject(QuestionsRepository)
    private questionsRepository: QuestionsRepository
  ) {}

  public async init(questionId: string, data: IQuestion.DTO.Update): Promise<Question> {
    const question = await this.questionsRepository.findBy<typeof Question>('id', questionId)
    if (!question) throw new NotFoundException('Questão não encontrada.')

    question.merge(data)
    await this.questionsRepository.update<Question>(question)

    return question
  }
}
