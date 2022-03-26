import { inject, singleton } from 'tsyringe'

import Question from 'App/Modules/Question/Models/Question'
import CategoriesRepository from 'App/Modules/Question/Repositories/CategoriesRepository'
import QuestionsRepository from 'App/Modules/Question/Repositories/QuestionsRepository'

import { IQuestion } from 'App/Modules/Question/Interfaces/QuestionInterface'

@singleton()
export class StoreDefaultQuestionService {
  constructor(
    @inject(CategoriesRepository)
    private categoriesRepository: CategoriesRepository,
    @inject(QuestionsRepository)
    private questionsRepository: QuestionsRepository
  ) {}

  public async init(QuestionsDefault: IQuestion.DTO.Update[], order: number): Promise<void> {
    let category = await this.categoriesRepository.findBy('order', order)
    if (category)
      for (let index = 0; index < QuestionsDefault.length; index++)
        await this.questionsRepository.firstOrCreate<typeof Question>(
          { sentence: QuestionsDefault[index].sentence },
          {
            category_id: category.id,
            sentence: QuestionsDefault[index].sentence,
            order: QuestionsDefault[index].order,
          }
        )
  }
}
