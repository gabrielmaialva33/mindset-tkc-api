import { inject, singleton } from 'tsyringe'

import Question from 'App/Modules/Question/Models/Question'
import QuestionsRepository from 'App/Modules/Question/Repositories/QuestionsRepository'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@singleton()
export class ShowQuestionService {
  constructor(
    @inject(QuestionsRepository)
    private questionsRepository: QuestionsRepository
  ) {}

  public async init(questionId: string): Promise<Question> {
    const question = await this.questionsRepository.findBy<typeof Question>('id', questionId)
    if (!question) throw new NotFoundException('Question not found or not available.')

    await question.load('choices', (choicesQuery) =>
      choicesQuery.whereNot({ is_deleted: true }).orderBy('order')
    )

    return question
  }
}
