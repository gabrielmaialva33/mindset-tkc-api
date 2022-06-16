import { inject, injectable } from 'tsyringe'

import { IQuestion } from 'App/Modules/Question/Interfaces/QuestionInterface'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@injectable()
export class DeleteQuestionService {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestion.Repository
  ) {}

  public async init(questionId: string): Promise<void> {
    const question = await this.questionsRepository.findBy('id', questionId)
    if (!question) throw new NotFoundException('Question not found or not available.')

    question.merge({ is_deleted: true })
    await this.questionsRepository.save(question)
  }
}
