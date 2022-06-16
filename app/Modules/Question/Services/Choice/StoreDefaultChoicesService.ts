import { inject, injectable } from 'tsyringe'

import { ICategory } from 'App/Modules/Question/Interfaces/CategoryInterface'
import { IChoice } from 'App/Modules/Question/Interfaces/ChoiceInterface'
import DTO = IChoice.DTO

type DTO = {
  sentence?: string
  label?: string
  value?: number
  order?: number
  question?: number
}

@injectable()
export class StoreDefaultChoicesService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategory.Repository,
    @inject('ChoicesRepository')
    private choicesRepository: IChoice.Repository
  ) {}

  public async init(ChoicesDefault: Array<DTO>, order: number, hasMany?: boolean): Promise<void> {
    const category = await this.categoriesRepository.findBy('order', order)
    if (category) {
      await category.load('questions')
      const questions = category.questions

      if (hasMany)
        for (let i = 0; i < questions.length; i++)
          for (let j = 0; j < ChoicesDefault.length; j++) {
            if (ChoicesDefault[j].question === questions[i].order) {
              await this.choicesRepository.store({
                question_id: questions[i].id,
                sentence: ChoicesDefault[j].sentence,
                label: ChoicesDefault[j].label,
                value: ChoicesDefault[j].value,
                order: ChoicesDefault[j].order,
              })
            }
          }
      else
        for (let i = 0; i < questions.length; i++)
          for (let j = 0; j < ChoicesDefault.length; j++)
            await this.choicesRepository.store({
              question_id: questions[i].id,
              sentence: ChoicesDefault[j].sentence,
              label: ChoicesDefault[j].label,
              value: ChoicesDefault[j].value,
              order: ChoicesDefault[j].order,
            })
    }
  }
}
