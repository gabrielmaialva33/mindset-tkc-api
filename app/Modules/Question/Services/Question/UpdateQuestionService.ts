import { inject, injectable } from 'tsyringe'

import { IQuestion } from 'App/Modules/Question/Interfaces/QuestionInterface'
import Question from 'App/Modules/Question/Models/Question'

import NotFoundException from 'App/Shared/Exceptions/NotFoundException'

@injectable()
export class UpdateQuestionService {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestion.Repository
  ) {}

  public async init(questionId: string, data: IQuestion.DTO.Update): Promise<Question> {
    const question = await this.questionsRepository.findBy<typeof Question>('id', questionId)
    if (!question) throw new NotFoundException('Question not found or not available.')

    question.merge(data)
    await this.questionsRepository.update<Question>(question)

    return question
  }
}
