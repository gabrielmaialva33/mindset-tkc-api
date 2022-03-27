import { inject, singleton } from 'tsyringe'

import { IChoice } from 'App/Modules/Question/Interfaces/ChoiceInterface'
import Choice from 'App/Modules/Question/Models/Choice'
import ChoicesRepository from 'App/Modules/Question/Repositories/ChoicesRepository'
import CategoriesRepository from 'App/Modules/Question/Repositories/CategoriesRepository'

@singleton()
export class StoreDefaultChoicesService {
  constructor(
    @inject(CategoriesRepository)
    private categoriesRepository: CategoriesRepository,
    @inject(ChoicesRepository)
    private choicesRepository: ChoicesRepository
  ) {}

  public async init(ChoicesDefault: Array<IChoice.DTO.Update>, order: number): Promise<void> {
    const category = await this.categoriesRepository.findBy('order', order)
    if (category) {
      await category.load('questions')
      const questions = category.questions

      for (let i = 0; i < questions.length; i++) {
        for (let j = 0; j < ChoicesDefault.length; j++) {
          await this.choicesRepository.store<typeof Choice>({
            question_id: questions[i].id,
            sentence: ChoicesDefault[j].sentence,
            value: ChoicesDefault[j].value,
            order: ChoicesDefault[j].order,
          })
        }
      }
    }
  }
}
