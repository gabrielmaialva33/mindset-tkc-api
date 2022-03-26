import { inject, singleton } from 'tsyringe'

import QuestionsRepository from 'App/Modules/Question/Repositories/QuestionsRepository'
import NotFoundException from 'App/Shared/Exceptions/NotFoundException'
import Question from 'App/Modules/Question/Models/Question'

@singleton()
export class DestroyQuestionService {
  constructor(
    @inject(QuestionsRepository)
    private questionsRepository: QuestionsRepository
  ) {}

  public async init(questionId: string): Promise<void> {
    const question = await this.questionsRepository.findBy<typeof Question>('id', questionId)
    if (!question) throw new NotFoundException('Question not found or not available.')

    question.merge({ is_deleted: true })
    await this.questionsRepository.update<Question>(question)
  }
}
