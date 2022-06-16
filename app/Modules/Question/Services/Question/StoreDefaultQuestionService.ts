import { inject, injectable } from 'tsyringe'

import { IQuestion } from 'App/Modules/Question/Interfaces/QuestionInterface'
import { ICategory } from 'App/Modules/Question/Interfaces/CategoryInterface'

import DTO = IQuestion.DTO

@injectable()
export class StoreDefaultQuestionService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategory.Repository,
    @inject('QuestionsRepository')
    private questionsRepository: IQuestion.Repository
  ) {}

  public async init(QuestionsDefault: Array<DTO.Edit>, order: number): Promise<void> {
    let category = await this.categoriesRepository.findBy('order', order)
    if (category)
      for (let i = 0; i < QuestionsDefault.length; i++)
        await this.questionsRepository.store({
          category_id: category.id,
          sentence: QuestionsDefault[i].sentence,
          order: QuestionsDefault[i].order,
        })
  }
}
