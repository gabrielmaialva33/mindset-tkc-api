import { inject, injectable } from 'tsyringe'

import { IQuestion } from 'App/Modules/Question/Interfaces/QuestionInterface'
import { ICategory } from 'App/Modules/Question/Interfaces/CategoryInterface'

import Question from 'App/Modules/Question/Models/Question'
import Category from 'App/Modules/Question/Models/Category'

@injectable()
export class StoreDefaultQuestionService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategory.Repository,
    @inject('QuestionsRepository')
    private questionsRepository: IQuestion.Repository
  ) {}

  public async init(QuestionsDefault: Array<IQuestion.DTO.Update>, order: number): Promise<void> {
    let category = await this.categoriesRepository.findBy<typeof Category>('order', order)
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
